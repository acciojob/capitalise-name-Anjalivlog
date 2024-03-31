//your JS code here. If required.
const inputField = document.getElementById('fname');
inputField.addEventListener('blur', convertToUpperCase);

function convertToUpperCase() {
	let inputValue = inputField.value;
	inputValue = inputValue.toUpperCase();
	inputField.value = inputValue;
}