// NAVBAR SCRIPT

document.querySelector('.hamburger-btn').addEventListener('click', function() {
    document.querySelector('.nav_sidebar').classList.toggle('show-sidebar');
    if(document.querySelector('.nav_sidebar').classList.contains('show-sidebar')) {
      document.querySelector('.hamburger-btn').innerHTML = '&#x2715';
    } else {
      document.querySelector('.hamburger-btn').innerHTML = '&#9776';
    }
  });



const images = [
    "assets/camposnubes/casa-camponubes-006.jpg",
    "assets/camposnubes/casa-camponubes-010.jpg",
    "assets/camposnubes/casa-camponubes-013.jpg",
    "assets/camposnubes/casa-camponubes-014.jpg",
    "assets/camposnubes/casa-camponubes-016.jpg",
    "assets/camposnubes/casa-camponubes-017.jpg",
    "assets/camposnubes/casa-camponubes-020.jpg",
    "assets/camposnubes/casa-camponubes-023.jpg",
    "assets/camposnubes/casa-camponubes-040.jpg",
    "assets/camposnubes/casa-camponubes-044.jpg",
    "assets/camposnubes/casa-camponubes-046.jpg",
    "assets/camposnubes/casa-camponubes-049.jpg",
    "assets/camposnubes/casa-camponubes-051.jpg",
    "assets/camposnubes/casa-camponubes-052.jpg",
    "assets/camposnubes/casa-camponubes-054.jpg",
    "assets/camposnubes/casa-camponubes-055.jpg",
    "assets/camposnubes/casa-camponubes-057.jpg",
    "assets/camposnubes/casa-camponubes-058.jpg",
    "assets/camposnubes/casa-camponubes-066.jpg",
    "assets/camposnubes/casa-camponubes-067.jpg",
    "assets/camposnubes/casa-camponubes-068.jpg"
]

const imgGrid = document.getElementById('pictures_grid')

images.forEach(image => {
  const img = document.createElement('img')
  img.src = image
  imgGrid.appendChild(img);
})
  