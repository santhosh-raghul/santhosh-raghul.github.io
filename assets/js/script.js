function tabManager(event, tabName) {
	tabElement = event.target.parentElement;
	[...tabElement.children].forEach(button => {
		button.classList.remove("active");
	});
	event.target.classList.add("active");
	document.querySelectorAll('.tabcontent').forEach(element => {
		element.classList.remove("active");
	});
	document.querySelector(`#${tabName}.tabcontent`).classList.add("active");
}