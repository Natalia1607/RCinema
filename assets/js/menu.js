const menuBtn = document.querySelector('.mobilemenu');
const menu = document.querySelector('.mainmenu');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});