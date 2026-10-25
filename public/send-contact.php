<?php

declare(strict_types=1);

header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: strict-origin-when-cross-origin');

function redirect_to_form(string $status): never
{
    header('Location: /?contact=' . rawurlencode($status) . '#plan-your-tour', true, 303);
    exit;
}

function normalized_host(string $host): string
{
    $host = strtolower(preg_replace('/:\\d+$/', '', trim($host)) ?? '');
    return str_starts_with($host, 'www.') ? substr($host, 4) : $host;
}

function field(string $name): string
{
    $value = $_POST[$name] ?? '';
    return is_string($value) ? trim($value) : '';
}

function text_length(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    exit;
}

if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 16384) {
    redirect_to_form('invalid');
}

$requestHost = normalized_host((string) ($_SERVER['HTTP_HOST'] ?? ''));
$origin = (string) ($_SERVER['HTTP_ORIGIN'] ?? '');
$originHost = $origin !== '' ? normalized_host((string) parse_url($origin, PHP_URL_HOST)) : '';
$fetchSite = strtolower((string) ($_SERVER['HTTP_SEC_FETCH_SITE'] ?? ''));

if (($originHost !== '' && $originHost !== $requestHost) || $fetchSite === 'cross-site') {
    http_response_code(403);
    exit;
}

if (field('company') !== '') {
    redirect_to_form('sent');
}

$name = preg_replace('/[\\r\\n]+/', ' ', field('name')) ?? '';
$email = field('email');
$travelDates = preg_replace('/[\\r\\n]+/', ' ', field('travel_dates')) ?? '';
$guests = field('guests');
$language = field('language');
$message = field('message');
$consent = field('consent');
$allowedLanguages = ['English', 'Italian', 'Portuguese', 'Spanish', 'Other'];

$valid = text_length($name) >= 2
    && text_length($name) <= 100
    && filter_var($email, FILTER_VALIDATE_EMAIL) !== false
    && text_length($email) <= 160
    && text_length($travelDates) <= 100
    && ($guests === '' || (ctype_digit($guests) && (int) $guests >= 1 && (int) $guests <= 30))
    && in_array($language, $allowedLanguages, true)
    && text_length($message) >= 20
    && text_length($message) <= 3000
    && $consent === 'accepted';

if (!$valid) {
    redirect_to_form('invalid');
}

$clientKey = hash('sha256', (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown'));
$rateFile = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'rio-map-contact-' . $clientKey;

if (is_file($rateFile) && time() - (int) filemtime($rateFile) < 60) {
    redirect_to_form('rate');
}

@touch($rateFile);

$recipient = getenv('CONTACT_TO_EMAIL') ?: 'rioonthemap@gmail.com';
$sender = getenv('CONTACT_FROM_EMAIL') ?: 'noreply@rioonthemap.com';

if (filter_var($recipient, FILTER_VALIDATE_EMAIL) === false || filter_var($sender, FILTER_VALIDATE_EMAIL) === false) {
    redirect_to_form('error');
}

$subjectText = 'New private tour enquiry - ' . $name;
$subject = function_exists('mb_encode_mimeheader')
    ? mb_encode_mimeheader($subjectText, 'UTF-8')
    : $subjectText;

$body = implode("\n", [
    'New enquiry from rioonthemap.com',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    'Travel dates: ' . ($travelDates !== '' ? $travelDates : 'Not provided'),
    'Number of guests: ' . ($guests !== '' ? $guests : 'Not provided'),
    'Preferred language: ' . $language,
    '',
    'Message:',
    $message,
    '',
    'Submitted: ' . gmdate('Y-m-d H:i:s') . ' UTC',
]);

$headers = [
    'From: Rio On The Map Website <' . $sender . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];

$sent = mail($recipient, $subject, $body, implode("\r\n", $headers));
redirect_to_form($sent ? 'sent' : 'error');
