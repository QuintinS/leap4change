<?php

function error() {
  header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
}
 
if(isset($_POST['q-form-contact-email'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED

  
 
    // validation expected data exists
    if( 
      !isset($_POST["q-form-contact-name"]) ||
      !isset($_POST["q-form-contact-email"]) ||
      !isset($_POST["q-form-contact-mobile"]) ||
      !isset($_POST["q-form-contact-subject"]) ||
      !isset($_POST["q-form-contact-message"])
      ) 
    {
        error();
        return;
    }

    $contactname = $_POST["q-form-contact-name"];
    $contactemail = $_POST["q-form-contact-email"];
    $contactmobile = $_POST["q-form-contact-mobile"];
    $contactsubject = $_POST["q-form-contact-subject"];
    $contactmessage = $_POST["q-form-contact-message"];
    
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
    if(!preg_match($email_exp,$contactemail)) {
      error();
      return;
      return;
    }
    
    $SendEmail_To = "quintin.schnehage@gmail.com";
    $SendEmail_Subject = "Leap4Change Website - Message Received from Website Contact Form";
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
    $SendEmail_Message .=         "<strong>Name:</strong><br> ".clean_string($contactname)."<br><br>";
    $SendEmail_Message .=         "<strong>E-Mail:</strong><br> ".clean_string($contactemail)."<br><br>";
    $SendEmail_Message .=         "<strong>Mobile:</strong><br> ".clean_string($contactmobile)."<br><br>";
    $SendEmail_Message .=         "<br>";
    $SendEmail_Message .=         "<br>";
    $SendEmail_Message .=         "<strong>Subject:</strong><br> ".clean_string($contactsubject)."<br><br>";
    $SendEmail_Message .=         "<strong>Message:</strong><br> ".clean_string($contactmessage)."<br><br>";
    $SendEmail_Message .=     "</div>";

    $SendEmail_Message .=     "</body>";
    $SendEmail_Message .=     "</html>";

// Send E-Mail 
@mail($SendEmail_To, $SendEmail_Subject, $SendEmail_Message, $SendEmail_Headers);  

}
else
{
  error();
  return;
}
 
?>