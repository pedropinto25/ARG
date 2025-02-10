document.addEventListener('DOMContentLoaded', function() {
  // Função para carregar HTML
  function loadHTML(elementId, filePath, callback) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
        if (callback) callback();
      })
      .catch(error => console.error('Error loading HTML:', error));
  }

  // Função para inicializar a navbar
  function initializeNavbar() {
    const navToggle = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelector('.navbar-nav');
    const navbar = document.querySelector('.navbar');

    // Toggle navbar links
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });

    // Smooth scroll for anchor links
    const links = document.querySelectorAll('.nav-link');
    for (const link of links) {
      link.addEventListener('click', function(e) {
        // Permitir redirecionamento para links externos
        if (this.getAttribute('href').startsWith('http')) {
          return;
        }
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        } else {
          window.location.href = this.getAttribute('href');
        }
      });
    }

    // Adjust navbar based on window size
    function adjustNavbar() {
      if (window.innerWidth < 768) {
        navbar.classList.add('bg-dark');
      } else {
        navbar.classList.remove('bg-dark');
      }
    }

    window.addEventListener('resize', adjustNavbar);
    adjustNavbar();
  }

  // Carregar navbar e footer
  loadHTML('navbar-placeholder', 'navbar.html', initializeNavbar);
  loadHTML('footer-placeholder', 'footer.html');
});