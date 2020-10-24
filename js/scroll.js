let block = document.querySelectorAll('.scroll-block')

let arr = [];
let upArr = [];

for (let i = 0; i < block.length; i++) {
	arr.push(block[i].offsetTop)
}

let scrollPos = 0;

// adding scroll event
window.addEventListener("scroll", function () {

	if (document.body.getBoundingClientRect().top > scrollPos) {
		window.addEventListener('scroll', scrollUp)
	}

	else {
		window.addEventListener('scroll', scrollDown)
	}

	scrollPos = document.body.getBoundingClientRect().top;
});

function scrollDown() {
	let scrollWindow = window.pageYOffset;
	if (scrollWindow > arr[0] + block[0].clientHeight / 1.7 && arr.length > 1) {
		document.documentElement.scrollTo(0, arr[1]);
		upArr.unshift(arr.shift());
		if (arr.length == 1) {
			upArr.unshift(arr.shift());
		}
	}
}

function scrollUp() {
	let scrollWindow = window.pageYOffset;
	if (scrollWindow < upArr[0] + block[0].clientHeight / 2) {
		document.documentElement.scrollTo(0, upArr[0]);
		arr.unshift(upArr.shift());
		if (upArr.length == 1) {
			arr.unshift(upArr.shift());
		}
	}
}