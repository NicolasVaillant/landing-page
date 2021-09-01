
<?php

if (isset($_POST['submit'])){
    $fin = False;
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "contact@nicolasvaillant.net";
    $headers = "From: ".$mailFrom;

    $txt =  "Message de ".
            $name.
            "\n".
            "---------------------------------DEBUT DU MESSAGE".
            "\n\n".
            $message.
            "\n\n".
            "---------------------------------FIN DU MESSAGE";

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?sendmail");

    $fin = True;
}
