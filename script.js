function toggleTheme() {
  
    const body = document.body;
    body.classList.toggle('dark-mode');

    
   const themeBtn = document.getElementById('theme-btn');
if (themeBtn) {
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = 'Enable Light Mode';
    } else {
        themeBtn.textContent = 'Enable Dark Mode';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const messageBox = document.getElementById('message');
    const charCount = document.getElementById('charCount');

    
    if (messageBox && charCount) {
        messageBox.addEventListener('input', function() {
            const currentLength = this.value.length;
            charCount.textContent = `${currentLength} / 500 characters`;
        });
    }

    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            formMessage.style.display = 'block';
            formMessage.innerHTML = `
                <div class="alert alert-success" role="alert">
                    <strong>Success!</strong> Your encrypted request has been sent securely. We will be in touch shortly.
                </div>
            `;
            
            contactForm.reset();
            
           
            if (charCount) charCount.textContent = '0 / 500 characters';

            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }
});