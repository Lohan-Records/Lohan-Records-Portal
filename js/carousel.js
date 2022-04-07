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


/* ==================
--- Sound Effects ---
=================== */

function soundPlay(sound) {
  // $('audio').each(function () {
  //   this.pause();
  //   this.currentTime = 0;
  // });
  // sound.on({play: function() {
    // sound.pause();
    // sound.currentTime = 0;
  // }});
  // if (sound[0].currentTime > 0) {
  // }
  sound.trigger("pause");
  sound[0].currentTime = 0;
  // sound.play();
  sound.trigger("play");
}

function soundStop(sound) {
  sound.pause();
  sound.currentTime = 0;
}

// const D = document.getElementById("D");
// const DD = document.getElementById("DD");
// const F = document.getElementById("FF");
// const G = document.getElementById("G");
const D = $("#D");
const DD = $("#DD");
const FF = $("#FF");
const G = $("#G");
const soundList = [G, D, D, DD, D, FF, G];

var index = 0;
const soundLen = soundList.length;

document.onkeydown = (e) => {
  if (index >= soundLen) index -= soundLen;

  switch (e.key) {
    case "ArrowLeft":
      $(".previous_button").addClass("active");
      soundPlay(soundList[index]);
      index++;
      previous();
      break;

    case "ArrowRight":
      $(".next_button").addClass("active");
      soundPlay(soundList[index]);
      index++;
      next();
      break;

    case "a":
      var e = jQuery.Event("keydown");
      var interval = 400;

      e.key = "ArrowRight";
      $("body").trigger(e);

      setTimeout(()=> {
        e.key = "ArrowLeft";
        $("body").trigger(e);
      }, interval);
      setTimeout(()=> {
        e.key = "ArrowLeft";
        $("body").trigger(e);
      }, interval*2);
      setTimeout(()=> {
        e.key = "ArrowRight";
        $("body").trigger(e);
      }, interval*3);
      setTimeout(()=> {
        e.key = "ArrowLeft";
        $("body").trigger(e);
      }, interval*4);
      setTimeout(()=> {
        e.key = "ArrowRight";
        $("body").trigger(e);
      }, interval*5);
      setTimeout(()=> {
        e.key = "ArrowRight";
        $("body").trigger(e);
      }, interval*6);
  }
};

document.onkeyup = (e) => {
  switch (e.key) {
    case "ArrowLeft":
      $(".previous_button").removeClass("active");
      // soundStop(soundList[index]);
      // index++;
      break;

    case "ArrowRight":
      $(".next_button").removeClass("active");
      // soundStop(soundList[index]);
      // index++;
      break;
  }
};

function changeCarousel() {
  theta = 360 / cellCount;
  radius = Math.round(cellWidth / 2 / Math.tan(Math.PI / cellCount));
  rotateCarousel();
}