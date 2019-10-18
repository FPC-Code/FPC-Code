<?php

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$signuptype = $_POST['sign-up-type'];
	$webtype = $_POST['web-type'];
	$webtypeother = $_POST['web-type-other'];
	$access = $_POST['access'];

	$mailto = "galvantua@gmail.com";
	$header = "From: ".$email;
	$body = $name." has requested a website:";

	mail($mailto, "Website Request", "\n".$body."\n\n".$signuptype."\n".$webtype."\n\n".$webtypeother."\n\n".$access, $header);
}