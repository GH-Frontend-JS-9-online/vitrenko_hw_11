class User {
	constructor(email, password) {
		this.email = email;
		this.password = password;
	}
}

function signup() {
	let email = document.getElementById('email');
	let password = document.getElementById('password');
	let c_password = document.getElementById('c_password');
	
	if (password.length >= 8) {
		if (password == c_password) {
			new User (email, password);
		}
		else {
			document.getElementById('output').innerHTML = `Your password does not match`
		}
	}
	else {
		document.getElementById('output').innerHTML = `Your password must have 8 symbols or more`
	}	
}