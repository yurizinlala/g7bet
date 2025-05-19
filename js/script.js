// Menu Mobile Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navList.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    // Formulário de contato
    const contactForm = document.getElementById('quick-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio de formulário
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! O professor entrará em contato em breve.');
                this.reset();
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }, 1500);
        });
    }
    
    // Animação de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Adicionar classe ativa ao link do menu correspondente à página atual
    const currentLocation = window.location.pathname;
    const menuItems = document.querySelectorAll('.nav-list a');
    const menuLength = menuItems.length;
    
    for (let i = 0; i < menuLength; i++) {
        if (menuItems[i].getAttribute('href') === currentLocation || 
            menuItems[i].getAttribute('href') === currentLocation.split('/').pop()) {
            menuItems[i].classList.add('active');
        } else if (currentLocation === '/' && menuItems[i].getAttribute('href') === 'index.html') {
            menuItems[i].classList.add('active');
        }
    }
});
