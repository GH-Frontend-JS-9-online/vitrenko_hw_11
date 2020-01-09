async function logIn() {
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	let success = document.getElementById('success');
	let error = document.getElementById('error');
	window.users;

	function getDB() {
		return fetch('http://localhost:3000/users').then(response => {
			return response.json()
		})
	}

	let user = await getDB().then(data => {
		users = data		
	})
	
	let emails = [];

	for (let i = 0; i < users.length; i++) {
		emails.push(users[i]['email'])
	}

	if (!emails.includes(email)) {
		error.style.visibility = 'visible'
		success.style.visibility = 'hidden'
		error.innerHTML = 'Oopps... Your email or password is incorrect. Please try again'
	}
	else {
		for (let i = 0; i < users.length; i++) {
			if (users[i]['email'] == email) {
				if (users[i]['password'] == password) {
					success.style.visibility = 'visible';
					error.style.visibility = 'hidden';
					success.innerHTML = 'You successfuly logged in';
					error.innerHTML = ''
				}
				else {
					error.style.visibility = 'visible'
					success.style.visibility = 'hidden'
					error.innerHTML = 'Oopps... Your email or password is incorrect. Please try again'
				}	
			}
		}
	}	
}