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





















document.querySelectorAll('.goods__item').forEach(item => {
  const colors = item.querySelectorAll('.goods__color');
  const sidebar = item.querySelector('.goods__sidebar');
  const colorText = item.querySelector('.goods__sidebar-text.color');
  const priceText = item.querySelector('.goods__sidebar-text.price');
  const image = item.querySelector('.goods__image');

  // Функция для скрытия всех боковых панелей
  function hideAllSidebars() {
    document.querySelectorAll('.goods__sidebar.active').forEach(activeSidebar => {
      activeSidebar.classList.remove('active');
    });
  }

  // Клик по цветам
  colors.forEach(color => {
    color.addEventListener('click', (e) => {
      // Сначала скрываем все открытые панели
      hideAllSidebars();
      
      colors.forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
      const selected = e.target.dataset.color;
      colorText.textContent = selected;
      priceText.textContent = "Цена: 470 тг / м²";
      sidebar.classList.add('active');
    });
  });

  // Клик по картинке
  image.addEventListener('click', () => {
    // Сначала скрываем все открытые панели
    hideAllSidebars();
    sidebar.classList.add('active');
  });
});

// Обработчик клика по документу для закрытия боковой панели
document.addEventListener('click', (e) => {
  // Если клик был не по боковой панели, не по цветам, не по изображению и не по плюсу
  if (!e.target.closest('.goods__sidebar') && 
      !e.target.closest('.goods__color') && 
      !e.target.closest('.goods__image') &&
      !e.target.closest('.goods__plus')) {
    // Скрываем все активные боковые панели
    document.querySelectorAll('.goods__sidebar.active').forEach(sidebar => {
      sidebar.classList.remove('active');
    });
  }
});