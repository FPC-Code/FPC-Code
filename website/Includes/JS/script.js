function index() {
	window.location.href="./index.html";
};
function projects() {
	window.location.href="./projects.html";
};
function signin() {
	window.location.href="./sign-in.html";
};
function index() {
	window.location.href="./index.html";
};
function projects() {
	window.location.href="./projects.html";
};
function signin() {
	window.location.href="./sign-in.html";
};
	var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbxzzGc137WpdpYfJwyRHlybQvP9taBfM7tGdIB4qCLvNu1T128L/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
