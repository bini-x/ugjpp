let darkModeBtn = document.querySelector('.darkModeBtn');
let body = document.querySelector('body')
let image = document.querySelector('.image')

darkModeBtn.addEventListener('click', () => {
	body.classList.toggle("darkMode");
	if(image.src.includes('dark.png')){
		image.removeAttribute('src');
		image.setAttribute('src', 'light.png');
	} else {
		image.removeAttribute('src');
		image.setAttribute('src', 'dark.png');
	}
})



