window.onload = function () {
	let arr = document.querySelector("#arr");
	let firstLink = document.querySelector("#first");
	let jtc = document.querySelector("#jic");
	let fifthlink = document.querySelector("#fifth");

	arr.addEventListener("click", navigateFirst, false);
	jtc.addEventListener("click", navigateFifth, false);

	function navigateFirst() {
		firstLink.scrollIntoView({ behavior: "smooth" });
	}

	function navigateFifth() {
		fifthlink.scrollIntoView({ behavior: "smooth" });
	}

}

const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const slider1 = document.querySelector('.slider1');
const logo = document.querySelector('#logo');
const library = document.querySelector('.library');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(hero, 1, { opacity: 0, height: "0%" }, { opacity: 1, height: "100%", ease: Power2.easeInOut })
	.fromTo(hero, 1.2, { width: '100%' }, { width: '80%', ease: Power2.easeInOut })
	.fromTo(slider, 1.2, { x: "-100%" }, { x: "0%" }, "-=1.2")
	.fromTo(slider1, 1.2, { x: "-100%" }, { x: "0%" }, "-=1.2")
	.fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
	.fromTo(library, 0.5, { opacity: 0, x: -30 }, { opacity: 1, x: 0 }, "-=0.5");

document.getElementById('button').addEventListener('click',
function (){
	document.querySelector(".bg-modal").style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', 
function(){
	document.querySelector('.bg-modal').style.display='none';
});