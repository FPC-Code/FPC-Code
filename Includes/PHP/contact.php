<?php
$server = 'localhost';
$uname = 'php';
$password = 'SecurePHP1^';

$conn = new mysqli($server, $uname, $password);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$subject = $_POST['subject'];

	$mailto = "galvantua@gmail.com";
	$header = "From: noreply@codefpc.com";
	$body = $name." has requested a website:";

	mail($mailto, "Website Request", "\n".$body."\n\n".$email."\n\n".$signuptype."\n".$webtype."\n\n".$webtypeother."\n\n".$access, $header);
	header("Location: /thanks-contact/");

	$sql = "INSERT INTO FPC_Code.Contact_Record (Name, Email, Subject, Message)
VALUES ('$name', '$email', $subject,'$message')";

	if ($conn->query($sql) === TRUE) {
		echo "New record created successfully";
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
} else {
	header("Location: /sorry/");
}
?>