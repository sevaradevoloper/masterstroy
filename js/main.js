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
    const navLinks = document.getElementById('navLinks');
    const mobileCloseBtn = document.getElementById('mobileCloseBtn');
    
    // Открытие меню по клику на гамбургер
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Закрытие меню по клику на кнопку X
    mobileCloseBtn.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
    
    // Закрытие меню по клику на ссылку (опционально)
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});