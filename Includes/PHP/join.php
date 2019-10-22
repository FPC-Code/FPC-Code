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
	$header = "From: noreply@codefpc.com";
	$body = $name." has joined Coding Club!: \n\nGrade:	".$grade."\nEmail:	".$email;

	mail($email_list,$subject,$body,$header);
	header("Location: ../../thanks-join.html");
} else {
	header("Location: ../../sorry.html");
}
?>