//lougout btn
const logout = document.getElementById('logout');

console.log(sessionStorage.getItem('token'));
if (sessionStorage.getItem('token') === null) {
	window.location.href = 'index.html';
}

logout.addEventListener('click', () => {
	sessionStorage.clear();
	window.location.href = 'index.html';
});
