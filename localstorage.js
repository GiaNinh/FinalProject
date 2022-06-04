function registerNewUser() {
	var fname = document.getElementById('name_su').value
	var password = document.getElementById('pass_su').value
	var confirmPwd = document.getElementById('re_pass').value

	if(password != confirmPwd) {
		alert('Mat khau nhap khong khop!!! Vui long kiem tra lai!!!')
		return false;
	}

	localStorage.setItem('name_su', fname)
	localStorage.setItem('password', password)

	return true;
}

function init() {
	var fname = localStorage.getItem('name_su')
	var password = localStorage.getItem('pass_su')

	document.getElementById('name_su').innerHTML += fname
	document.getElementById('pass_su').innerHTML += password
	
}
