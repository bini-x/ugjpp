let darkModeBtn = document.querySelector('.darkModeBtn');
let body = document.querySelector('body')

darkModeBtn.addEventListener('click', () => {
	body.classList.toggle('darkMode');
	if (darkModeBtn.innerText === "Dark Mode") {
		darkModeBtn.innerText = "Light Mode";
	} else {
		darkModeBtn.innerText = 'Dark Mode';
	}
})



