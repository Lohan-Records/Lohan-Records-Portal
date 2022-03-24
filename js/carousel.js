var carousel = document.querySelector(".carousel");
// var cells = carousel.querySelectorAll(".carousel_cell");
var cellCount = 10; // cellCount set from cells-range input value
var selectedIndex = 0;
var cellWidth = carousel.offsetWidth;
// var cellHeight = carousel.offsetHeight;
var isHorizontal = true;
var radius, theta;

function rotateCarousel() {
  const angle = theta * selectedIndex * -1;
  var active_index;
  var active_cell;
  var other_cells;

  carousel.style.transform = `translateZ(-${radius}px) rotateY(${angle}deg)`;

  active_index = selectedIndex % cellCount + 1;
  while (active_index <= 0) {
    active_index += 10;
  }

  active_cell = document.querySelector(
    `.carousel_cell:nth-child(${active_index})`
  );
  // console.log(active_index);

  other_cells = carousel.querySelectorAll(".carousel_cell");
  other_cells.forEach(cell => {
    cell.classList.remove("active");
  });

  active_cell.classList.add("active");
}

function previous() {
  selectedIndex--;
  rotateCarousel();
}

function next() {
  selectedIndex++;
  rotateCarousel();
}

var prevButton = document.querySelector(".previous_button");
prevButton.addEventListener("click", previous);

var nextButton = document.querySelector(".next_button");
nextButton.addEventListener("click", next);

// left & right event
function playSound(sound) {
  var allAudio = document.getElementsByTagName('audio');
  var audioList = Array.prototype.slice.call(allAudio);

  audioList.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });

  sound.play();
}

const D = document.getElementById("D");
const DD = document.getElementById("DD");
const F = document.getElementById("FF");
const G = document.getElementById("G");
var soundList = [G, D, D, DD, D, FF, G];
var index = 0;

document.onkeydown = function (e) {
  if (index > 6)
    index -= 7;
  // console.log(index);

  switch (e.code) {
    case "ArrowLeft":
      $(".previous_button").addClass("active");
      playSound(soundList[index]);
      index++;
      previous();
      break;

    case "ArrowRight":
      $(".next_button").addClass("active");
      playSound(soundList[index]);
      index++;
      next();
      break;
  }
};

document.onkeyup = function (e) {
  var delay = 100;
  switch (e.code) {
    case "ArrowLeft":
      $(".previous_button").removeClass("active");
      break;
    case "ArrowRight":
      $(".next_button").removeClass("active");
      break;
  }
};


function changeCarousel() {
  theta = 360 / cellCount;
  radius = Math.round(cellWidth / 2 / Math.tan(Math.PI / cellCount));
  rotateCarousel();
}


// set initials
// changeCarousel();
