document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Animate the theme icon
        const icon = themeToggle.querySelector('.theme-icon');
        icon.style.transform = newTheme === 'light' ? 'rotate(180deg)' : 'rotate(0)';
    });
    
    // Terminal Animation
    const terminalOutput = document.getElementById('terminal-output');
    const terminalText = [
        "> Welcome to my portfolio!",
        "> I'm a full-stack developer...",
        "> Specializing in modern web technologies",
        "> Let's build something amazing together!"
    ];
    
    let lineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;
    
    function typeTerminalText() {
        const currentLine = terminalText[lineIndex];
        
        if (isDeleting) {
            terminalOutput.textContent = currentLine.substring(0, charIndex - 1);
            charIndex--;
        } else {
            terminalOutput.textContent = currentLine.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentLine.length) {
            isEnd = true;
            setTimeout(() => {
                isDeleting = true;
            }, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            lineIndex++;
            if (lineIndex === terminalText.length) lineIndex = 0;
        }
        
        const typingSpeed = isDeleting ? 50 : isEnd ? 100 : 150;
        setTimeout(typeTerminalText, typingSpeed);
    }
    
    setTimeout(typeTerminalText, 1000);
    
    // Skill Orb Interaction
    const skillNodes = document.querySelectorAll('.skill-node');
    const skillInfo = document.querySelector('.skill-info');
    
    skillNodes.forEach(node => {
        node.addEventListener('mouseenter', () => {
            skillInfo.textContent = `Expertise in ${node.dataset.skill}`;
            skillInfo.style.opacity = '1';
        });
        
        node.addEventListener('mouseleave', () => {
            skillInfo.style.opacity = '0';
        });
    });
    
    // Form Submission Animation
    const contactForm = document.querySelector('.contact-form');
    const submitBtn = contactForm.querySelector('.submit-btn');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitBtn.style.backgroundColor = '#27c93f';
        
        setTimeout(() => {
            submitBtn.innerHTML = '<span class="btn-text">Send Message</span><i class="fas fa-paper-plane"></i>';
            submitBtn.style.backgroundColor = '';
            contactForm.reset();
            
            // Reset form labels
            const labels = contactForm.querySelectorAll('label');
            labels.forEach(label => {
                const input = label.previousElementSibling;
                if (input.value === '') {
                    label.style.top = '1rem';
                    label.style.left = '1rem';
                    label.style.fontSize = '1rem';
                    label.style.color = '';
                }
            });
        }, 3000);
    });
    
    // Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
});