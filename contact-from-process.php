<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $message = $_POST['message'];

    // Set recipient email address
    $to = 'viwemhlabavm@gmail.com';

    // Set email subject
    $subject = 'New Contact Form Submission';

    // Compose the email message
    $emailMessage = "First Name: $fname\n";
    $emailMessage .= "Last Name: $lname\n";
    $emailMessage .= "Message:\n$message";

    // Set additional headers
    $headers = "From: $fname $lname <$to>";

    // Send the email
    $success = mail($to, $subject, $emailMessage, $headers);

    // Check if the email was sent successfully
    if ($success) {
        echo 'success'; // You can customize this response as needed
    } else {
        echo 'error'; // You can customize this response as needed
    }
}