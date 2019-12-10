<?php
  $to_email = 'croosle@yandex.ru';
  $subject = 'Testing PHP Mail';
  $message = 'This mail is sent using the PHP mail ';
  $headers = 'From: noreply gazon@company.com';
  $secure_check = true;
  
  if ($secure_check == false) {
      echo "Invalid input";
  } else { //send email
      mail($to_email, $subject, $message, $headers);
      echo "This email is sent using PHP Mail";
  }
?>
