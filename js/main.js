const requestURL = 'https://jsonplaceholder.typicode.com/users'

function f() {
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	let success = document.getElementById('sucess');
	let error = document.getElementById('error');

	let users = fetch(requestURL).then(response => {
		return response.json();
	});

	for (let i = 0; i < users.length; i++) {
		
	}
}