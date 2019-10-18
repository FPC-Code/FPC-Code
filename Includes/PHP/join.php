<?php
$president = "gavinmor2143@flaglercps.org";
$vice = "morgan@thesfcc";
$secretary = "dravenmon0351@flaglercps.org";
$sysadmin = "galvantua@gmail.com";
$email_list = $president.", ".$secretary.", ".$vice.", ".$sysadmin;


if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$grade = $_POST['grade'];
	$header = "From: ".$email;
	$body = $name." has joined Coding Club!: \n\n
	
	Grade:	".$grade."\n
	Email:	".$email;

	mail($email_list, $subject, $body, $header);
}