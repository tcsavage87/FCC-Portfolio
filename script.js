function toggleClass(e) {
	if (e.target !== e.currentTarget) {
		let clicked = e.target;
		clicked.classList.toggle('playing');
		console.log(clicked);
	}
	e.stopPropagation();
}

function playSound(e) {
	let clickedButton = e.target;
	let audioNumber = e.target.id;
	const audio = document.querySelector(`audio[data-button="${audioNumber}"]`);
	if (!audio) return;
	if (audio.paused) {
		audio.currentTime = 0;
		audio.play();
		clickedButton.innerHTML = 'Stop';
	} else {
		audio.pause();
		clickedButton.innerHTML = `Play Clip #${e.target.id}`;
	}
	e.stopPropagation();
}

var theMaster = document.getElementById("master");

theMaster.addEventListener("mousedown", toggleClass, false);

theMaster.addEventListener("mouseup", toggleClass, false);

theMaster.addEventListener("click", playSound, false);
