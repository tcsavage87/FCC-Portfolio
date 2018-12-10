// Arrow Canvas code

const canvas = document.querySelector('#arrow');

const ctx = canvas.getContext('2d');

ctx.lineWidth = 3;

let arrowFirst = false;
let arrowSecond = false;
let arrowThird = false;

// First arrow segment function

let arrow1 = function() {
  if (arrowThird === false) {

    ctx.strokeStyle = 'white';

    ctx.beginPath();
    ctx.moveTo(5, 35);
    ctx.lineTo(35, 35);
    ctx.stroke();

    arrowFirst = true;
  } else {
    clear();
  }
}

// Second arrow segment function

let arrow2 = function() {
  if (arrowFirst === true) {
    ctx.strokeStyle = 'gray';

    ctx.beginPath();
    ctx.moveTo(40, 35);
    ctx.lineTo(70, 35);
    ctx.stroke(); 

    arrowSecond = true;
  } else {
    arrow1();
  }
}

// Third arrow segment function

let arrow3 = function() {
  if (arrowSecond === true) {
    ctx.beginPath();
    ctx.moveTo(75, 35);
    ctx.lineTo(75, 20);
    ctx.lineTo(95, 35);
    ctx.lineTo(75, 50);
    ctx.fillStyle = 'black';
    ctx.fill();

    arrowThird = true;

  } else {
    arrow2();
  }
}

// arrow reset

let clear = function() {
  if (arrowThird === true) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log('cleared!');
    [arrowFirst, arrowSecond, arrowThird] = [false, false, false];
  } else {
    arrow3();
  }
}

let drawing = false;

const drawArrow = function () {
  if (drawing === false) {
    setInterval(clear, 500); 
    drawing = true;
  } else {
    drawing = false;
  }
}

window.onload = drawArrow;

// Music player buttons

function toggleClass(e) {
  if (e.target !== e.currentTarget) {
    let clicked = e.target;
    clicked.classList.toggle("playing");
    console.log(clicked);
  }
  e.stopPropagation();
}

function removeClass(e) {
  if (e.target !== e.currentTarget) {
    let clicked = e.target;
    clicked.classList.remove("playing");
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
    clickedButton.innerHTML = "Stop";
  } else {
    audio.pause();
    clickedButton.innerHTML = `Play Clip #${e.target.id}`;
  }
  e.stopPropagation();
}

function endPlayback(e) {
  let audioNumber = e.target.dataset.button;
  console.log(`Playback finished on file ${audioNumber}`);
  let button = document.querySelector(`button[id="${audioNumber}"]`);
  button.innerHTML = `Play Clip #${audioNumber}`;
}

var theMaster = document.getElementById("master");

theMaster.addEventListener("mousedown", toggleClass, false);

theMaster.addEventListener("mouseup", toggleClass, false);

theMaster.addEventListener("mouseout", removeClass, false);

theMaster.addEventListener("click", playSound, false);

var audioFiles = document.querySelectorAll("audio");

audioFiles.forEach(function(elem) {
  elem.addEventListener("ended", endPlayback, false);
});
