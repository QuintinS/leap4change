<?php

function error() {
  header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
}
 
if(isset($_POST['q-form-application-email'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED

 
    // validation expected data exists
    if( 
      !isset($_POST["q-form-application-name"]) ||
      !isset($_POST["q-form-application-email"]) ||
      !isset($_POST["q-form-application-mobile"]) ||
      !isset($_POST["q-form-application-nationality"]) ||
      !isset($_POST["q-form-application-age"]) ||
      !isset($_POST["q-form-application-interests"]) ||
      !isset($_POST["q-form-application-startdate"]) ||
      !isset($_POST["q-form-application-duration"]) ||
      !isset($_POST["q-form-application-motivation"])
      ) 
    {
        error();
        return;
    }

    $contactname = $_POST["q-form-application-name"];
    $contactemail = $_POST["q-form-application-email"];
    $contactmobile = $_POST["q-form-application-mobile"];
    $contactnationality = $_POST["q-form-application-nationality"];
    $contactage = $_POST["q-form-application-age"];
    $contactinterests = $_POST["q-form-application-interests"];
    $contactstartdate = $_POST["q-form-application-startdate"];
    $contactduration = $_POST["q-form-application-duration"];
    $contactmotivation = $_POST["q-form-application-motivation"];

    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
    if(!preg_match($email_exp,$contactemail)) {
      error();
      return;
    }
    
    $SendEmail_To = "quintin.schnehage@gmail.com";
    $SendEmail_Subject = "Leap4Change Website - Application Received!";
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
    $SendEmail_Message .=        "<strong>Name: </strong><br>".clean_string($contactname)."<br><br>";
    $SendEmail_Message .=        "<strong>E-Mail: </strong><br>".clean_string($contactemail)."<br><br>";
    $SendEmail_Message .=        "<strong>Mobile: </strong><br>".clean_string($contactmobile)."<br><br>";
    $SendEmail_Message .=        "<br>";
    $SendEmail_Message .=        "<br>";
    $SendEmail_Message .=        "<strong>Nationality: </strong><br>".clean_string($contactnationality)."<br><br>";
    $SendEmail_Message .=        "<strong>Age: </strong><br>".clean_string($contactage)."<br><br>";
    $SendEmail_Message .=        "<strong>Interests: </strong><br>".clean_string($contactinterests)."<br><br>";
    $SendEmail_Message .=        "<br>";
    $SendEmail_Message .=        "<br>";
    $SendEmail_Message .=        "<strong>Start Date: </strong><br>".clean_string($contactstartdate)."<br><br>";
    $SendEmail_Message .=        "<strong>Duration: </strong><br>".clean_string($contactduration)."<br><br>";
    $SendEmail_Message .=        "<br>";
    $SendEmail_Message .=        "<br>";
    $SendEmail_Message .=        "<strong>Motivation: </strong><br>".clean_string($contactmotivation)."<br><br>";
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