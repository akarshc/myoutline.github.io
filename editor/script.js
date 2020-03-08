var selector fuction(query) {
	return document.querySelector(query);
}

var getEditor function() {
	selector('#editor').innerHTML += '<p>Hello</p>';
}

document.querySelector('#editor').innerHTML += '<p>Hello</p>';