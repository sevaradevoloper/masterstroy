 function toggleText(id) {
    
    document.querySelectorAll('.icons__text').forEach(el => {
      if (el.id !== id) {
        el.style.display = "none";
      }
    });

   
    const elem = document.getElementById(id);
    elem.style.display = (elem.style.display === "block") ? "none" : "block";
  }