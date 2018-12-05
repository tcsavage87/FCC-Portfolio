/**function playSound(e) {
	let audioNumber = e.keyCode;
  	const audio = document.querySelector(`audio[data-key="${audioNumber}"]`);
  	if (!audio) return;
  	audio.currentTime = 0;
  	audio.play();
  	button.classList.toggle('playing');
}**/
let soundOne = document.querySelector('#sound1');

soundOne.addEventListener('click', toggleClass, false);

function toggleClass() {
  soundOne.classList.toggle('playing');
}



