// NAVBAR SCRIPT

document.querySelector('.hamburger-btn').addEventListener('click', function() {
    document.querySelector('.nav_sidebar').classList.toggle('show-sidebar');
    if(document.querySelector('.nav_sidebar').classList.contains('show-sidebar')) {
      document.querySelector('.hamburger-btn').innerHTML = '&#x2715';
    } else {
      document.querySelector('.hamburger-btn').innerHTML = '&#9776';
    }
  });
  

// house pictures


  const images = [
    "assets/casa_alberto/casa-alberto-007.jpg",
    "assets/casa_alberto/casa-alberto-009.jpg",
    "assets/casa_alberto/casa-alberto-011.jpg",
    "assets/casa_alberto/casa-alberto-013.jpg",
    "assets/casa_alberto/casa-alberto-016.jpg",
    "assets/casa_alberto/casa-alberto-018.jpg",
    "assets/casa_alberto/casa-alberto-020.jpg",
    "assets/casa_alberto/casa-alberto-021.jpg",
    "assets/casa_alberto/casa-alberto-023.jpg",
    "assets/casa_alberto/casa-alberto-027.jpg",
    "assets/casa_alberto/casa-alberto-029.jpg",
    "assets/casa_alberto/casa-alberto-031.jpg",
]

const imgGrid = document.getElementById('pictures_grid')

images.forEach(image => {
  const img = document.createElement('img')
  img.src = image
  imgGrid.appendChild(img);
})

let slideIndex = 0;
const slider = document.querySelector('.slider');

function showSlide(n) {
  if (n < 0) {
    slideIndex = images.length - 1;
  } else if (n >= images.length) {
    slideIndex = 0;
  } else {
    slideIndex = n;
  }

  slider.innerHTML = `<img src="${images[slideIndex]}" alt="Slide ${slideIndex + 1}">`;
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

showSlide(slideIndex);