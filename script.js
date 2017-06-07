var withButtonClass = document.getElementsByClassName('button');
for (var i = 0 ; i < withButtonClass.length ; i++) {
	var buttonText = withButtonClass[i].innerText;
	alert(buttonText);
}