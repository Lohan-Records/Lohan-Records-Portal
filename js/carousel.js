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

document.onkeydown = function (e) {
  switch (e.code) {
    case "ArrowLeft":
      previous();
      break;
    case "ArrowRight":
      next();
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
