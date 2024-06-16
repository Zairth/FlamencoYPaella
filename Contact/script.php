<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$name = $_POST['nom'];
$prenom = $_POST['prenom'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$message = $_POST['message'];

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {

    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'luca.gim33@gmail.com';                     //SMTP username
    $mail->Password   = 'jjrrhpdbmvulcavz';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    $mail->CharSet    = 'UTF-8';
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    //Recipients
    $mail->setFrom('luca.gim33@gmail.com', 'AG - Paella & Flamenco');
    $mail->addAddress('drzerthum@live.fr', 'Mowa');     //Add a recipient

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = "Vous avez un nouveau message.";
    $mail->Body    = '
            <h4>Nom : '.$name.'</h4>
            <h4>Prénom : '.$prenom.'</h4><br>
            <h4>Téléphone : '.$tel.'</h4>
            <h4>E-Mail : '.$email.'</h4><br>
            <h4>Message : '.$message.'</h4>
    ';

    $mail->send();
    echo "
    <script>
        document.location.href = 'contact.html';
        alert('Le message a été envoyé !');
    </script>
    ";
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}