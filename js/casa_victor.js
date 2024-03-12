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
    "assets/casa_victor/casa-victor-013.jpg",
    "assets/casa_victor/casa-victor-014.jpg",
    "assets/casa_victor/casa-victor-015.jpg",
    "assets/casa_victor/casa-victor-017.jpg",
    "assets/casa_victor/casa-victor-021.jpg",
    "assets/casa_victor/casa-victor-023.jpg",
    "assets/casa_victor/casa-victor-024.jpg",
    "assets/casa_victor/casa-victor-025.jpg",
    "assets/casa_victor/casa-victor-026.jpg",
    "assets/casa_victor/casa-victor-028.jpg",
    "assets/casa_victor/casa-victor-030.jpg",
    "assets/casa_victor/casa-victor-031.jpg",

]

const imgGrid = document.getElementById('pictures_grid')

images.forEach(image => {
  const img = document.createElement('img')
  img.src = image
  imgGrid.appendChild(img);
})