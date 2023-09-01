<?php
error_reporting(E_ERROR | E_PARSE);

// @todo: move this script to api.martinbeaumont.dev, and create a small API using symfony/mailer for SMTP mail sending.

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: contact-ajax");
header('Content-Type: application/json; charset=utf-8');

function error(string $message): void
{
    echo json_encode([
        'status' => 'error',
        'message' => $message,
    ]);

    exit;
}

function success(): void
{
    if (array_key_exists('contact-ajax', getallheaders()) || array_key_exists('Contact-Ajax', getallheaders())) {
        echo json_encode([
            'status' => 'success',
        ]);
    } else {
        header("Location: https://www.martinbeaumont.dev/contact?contact_sent=true");
    }

    exit;
}

// Handle and process request.

if (empty($_POST)) {
    error('Les informations requises sont manquantes.');
}

$fields = ['name', 'mail', 'message'];
$missingFields = [];
$data = [];

foreach ($fields as $field) {
    if (!array_key_exists($field, $_POST) || empty($_POST[$field])) {
        $missingFields[] = $field;
        continue;
    }

    $data[$field] = stripslashes(trim($_POST[$field]));
}

// Some data has been posted, but none of / not all required fields, print generic error.
if (empty($data) || !empty($missingFields)) {
    error('Les informations requises sont manquantes.');
}

$to = "contact@martinbeaumont.fr";
$sender = "=?UTF-8?B?".base64_encode($data['name'])."?=";

$headers[] = 'MIME-Version: 1.0';
$headers[] = 'From: '.$sender.' <'.$data['mail'].'>';
$headers[] = 'X-Mailer: PHP/'.phpversion();
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'Content-Transfer-Encoding: 8bit';

$subject = sprintf("[martinbeaumont.dev] - Message de %s", $data['name']);

$messageTemplate = <<<EOF
Nouveau message de %s (%s) :

%s
EOF;

$message = sprintf($messageTemplate, $data['name'], $data['mail'], $data['message']);

if (mail($to, $subject, $message, implode("\r\n", $headers))) {
    success();
} else {
    error('<strong>Une erreur est survenue</strong>, actualisez la page puis recommencez, ou bien écrivez-moi à l\'adresse mail <a href="mailto:hello@martinbeaumont.dev">hello@martinbeaumont.dev</a>');
}
