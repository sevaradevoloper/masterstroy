 function toggleText(id) {
    
    document.querySelectorAll('.icons__text').forEach(el => {
      if (el.id !== id) {
        el.style.display = "none";
      }
    });

   
    const elem = document.getElementById(id);
    elem.style.display = (elem.style.display === "block") ? "none" : "block";
  }
























  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav__links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
});