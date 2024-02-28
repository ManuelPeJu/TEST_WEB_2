// NAVBAR SCRIPT

document.querySelector('.hamburger-btn').addEventListener('click', function() {
    document.querySelector('.nav_sidebar').classList.toggle('show-sidebar');
    if(document.querySelector('.nav_sidebar').classList.contains('show-sidebar')) {
      document.querySelector('.hamburger-btn').innerHTML = '&#x2715';
    } else {
      document.querySelector('.hamburger-btn').innerHTML = '&#9776';
    }
  });
  