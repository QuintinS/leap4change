<?php

function error() {
  header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
}
 
if(isset($_POST['q-form-footer-contact-email'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
 
    // validation expected data exists
    if( 
      !isset($_POST["q-form-footer-contact-email"]) ||
      !isset($_POST["q-form-footer-contact-message"])
      ) {
        error();
    }

    $contactEmail = $_POST["q-form-footer-contact-email"];
    $contactMessage = $_POST["q-form-footer-contact-message"]; 
    
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
    if(!preg_match($email_exp,$contactEmail)) {
      error();
    }
    
    $SendEmail_To = "quintin.schnehage@gmail.com";
    $SendEmail_Subject = "Leap4Change Website - Message Received from Quick Contact Form";
    $SendEmail_Message = "";
    $SendEmail_Headers = 
         'From: ' .'noreply@leap4changesa.com' ."\r\n" 
        .'Reply-To: ' . $contactemail . "\r\n" 
        .'X-Mailer: PHP/' . $contactemail . "\r\n" 
        ."Content-Type: text/html; charset=ISO-8859-1";
 
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $SendEmail_Message .=     "<html>";
    $SendEmail_Message .=     "<body>";

    $SendEmail_Message .=     "<div style='font-family: Arial, Helvetica, sans-serif; font-size: 16px;'>";
    $SendEmail_Message .=         "<strong>E-Mail:</strong><br> ".clean_string($contactEmail)."<br><br>";
    $SendEmail_Message .=         "<strong>Message:</strong><br> ".clean_string($contactMessage)."<br><br>";
    $SendEmail_Message .=     "</div>";

    $SendEmail_Message .=     "</body>";
    $SendEmail_Message .=     "</html>";
 
    
 
// Send E-Mail 
@mail($SendEmail_To, $SendEmail_Subject, $SendEmail_Message, $SendEmail_Headers);  

}
else
{
  error();
}
 
?>