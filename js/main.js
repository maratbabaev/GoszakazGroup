// const setVh = () => {
// 	const vh = window.innerHeight * 0.01;
// 	document.documentElement.style.setProperty("--vh", `${vh}px`);
// };

// window.addEventListener("load", setVh);
// window.addEventListener("resize", setVh);

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header_nav");

burger.addEventListener("click", () => {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
	document.body.classList.toggle("hidden");
});
