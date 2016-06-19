<?php
require 'PHPMailerAutoload.php';
if ($_POST) {
    $name    = $_POST['contactName'];
    $email   = $_POST['contactEmail'];
    $message = $_POST['contactMessage'];

    /* Don't touch */
    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->Host        = "relay-hosting.secureserver.net";
    $mail->SMTPAuth    = false;
    $mail->setFrom($email, $name);
    /* end */
    /* Configure the address the email will be sent to */
    $mail->addAddress('mcooperstein@gmail.com', 'Marc Cooperstein');
    $mail->Subject = 'Someone has reached out to you through codesitter.com';
    /* This is forwarded through a GoDaddy forwarding account */
    $mail->Body    = $message;
    if (!$mail->send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    } else {
        echo "Message sent!";
    }
}
?>
