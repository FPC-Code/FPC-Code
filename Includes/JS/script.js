function redirect(url) {
	window.location.href = url;
}

function emailofficers(email) {
	window.location.href = "mailto:" + email;
}

function setClass(className, newClass) {
	var items = document.getElementsByClassName(className);
	for (var i = 0; i < items.length; i++) {
		items[i].classList.toggle(newClass);
	}
}
