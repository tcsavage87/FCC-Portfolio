// Arrow Canvas code

const canvas = document.querySelector("#arrow");

const ctx = canvas.getContext("2d");

let arrowCount = 0;
ctx.lineWidth = 7;
ctx.strokeStyle = "#b14a94";

// First arrow segment function

let makeArrow1 = function() {
  ctx.beginPath();
  ctx.moveTo(5, 35);
  ctx.lineTo(35, 35);
  ctx.stroke();
  console.log("arrow1");
};

let arrow1 = function() {
  if (arrowCount === 0) {
    makeArrow1();
    arrowCount = 1;
  } else {
    clear();
  }
};

// Second arrow segment function

let makeArrow2 = function() {
  ctx.beginPath();
  ctx.moveTo(35, 35);
  ctx.lineTo(70, 35);
  ctx.stroke();
  console.log("arrow2");
};

let arrow2 = function() {
  if (arrowCount === 1) {
    makeArrow2();
    arrowCount = 2;
  } else {
    arrow1();
  }
};

// Third arrow segment function

let makeArrow3 = function() {
  ctx.beginPath();
  ctx.moveTo(70, 35);
  ctx.lineTo(70, 20);
  ctx.lineTo(95, 35);
  ctx.lineTo(70, 50);
  ctx.fillStyle = "#b14a94";
  ctx.fill();
  console.log("arrow3");
};

let arrow3 = function() {
  if (arrowCount === 2) {
    makeArrow3();
    arrowCount = 3;
  } else {
    arrow2();
  }
};


// arrow reset

function clear() {
  if (arrowCount === 3) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log("cleared!");
    arrowCount = 0;
  } else {
    arrow3();
  }
}

// initiate arrow on load

let drawArrow = window.setInterval(clear, 500);

window.onload = drawArrow;


// click functionality for arrow

let solid = false;

function solidArrow() {
  if (!solid) {
    window.clearInterval(drawArrow);
    makeArrow1();
    makeArrow2();
    makeArrow3();
    console.log("paused");
    solid = true;
  } else {
    arrowCount = 3;
    clear();
    drawArrow = window.setInterval(clear, 500);
    solid = false;
  }
}

const canvasArea = document.getElementById("arrow");

canvasArea.addEventListener("click", solidArrow);

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
