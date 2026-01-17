
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navLinks.length > 0) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.checked = false; // Uncheck the menu to close it
      });
    });
  }
});



// pop ups 

function showPopup(popupId) {
  hidePopups(); // Hide any existing popup
  document.getElementById(popupId).style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function hidePopups() {
  document.querySelectorAll('.popup').forEach(p => p.style.display = 'none');
  document.getElementById('overlay').style.display = 'none';
}

window.onload = function () {
  // Show popup 1 after 5 seconds
  setTimeout(function () {
    showPopup('popup1');
  }, 5000);

 // Show popup 2 after 25 seconds
   setTimeout(function () {
    showPopup('popup2');
  }, 25000);


}
// Close popup on clicking anywhere outside
document.addEventListener('click', function () {
  hidePopups();
});

// Prevent popup from closing when clicking inside it
document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});


