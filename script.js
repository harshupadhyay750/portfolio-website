// --- Scroll Animations ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // Optional: Remove class if you want animation to repeat
            // entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// --- Typed.js for typing animation ---
if (document.getElementById('typed-text')) {
    const typed = new Typed('#typed-text', {
        strings: ['A data analyst and a web developer'],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 2000,
        loop: false,
    });
}


// --- particles.js Configuration ---
if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 60,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#9d5dff"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.4,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.1,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false
                }
            },
            "modes": {
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                }
            }
        },
        "retina_detect": true
    });
}

// --- AI Chat Widget ---
const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const chatClose = document.getElementById('chat-close');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');

const getLocalAIResponse = (query) => {
    const text = query.toLowerCase();
    if (!text.trim()) {
        return 'Please type a question so I can help you.';
    }
    if (/hello|hi|hey/.test(text)) {
        return "Hello! I'm Harsh's portfolio AI assistant. Ask me about skills, projects, or experience.";
    }
    if (/skill|skills/.test(text)) {
        return 'Harsh specializes in web development, data analysis, and machine learning. He builds responsive websites and practical data-driven tools.';
    }
    if (/project|work/.test(text)) {
        return 'Harsh has built interactive portfolios, dashboards, and AI-powered prototypes. Check the Projects page for details.';
    }
    if (/resume|experience/.test(text)) {
        return 'View the resume page for Harsh’s education, internships, and certifications.';
    }
    if (/contact|email/.test(text)) {
        return 'You can reach Harsh at harshupadhysy750@gmail.com or through the contact section on this site.';
    }
    if (/machine learning|ml/.test(text)) {
        return 'Harsh uses Scikit-learn and TensorFlow to build intelligent, predictive applications.';
    }
    if (/web|website|frontend/.test(text)) {
        return 'He creates polished, responsive websites with HTML, CSS, JavaScript, and smooth animations.';
    }
    if (/data|analysis/.test(text)) {
        return 'Harsh analyzes data with Pandas and NumPy to uncover useful insights.';
    }
    return 'I’m still learning, but Harsh builds modern web apps, data visualizations, and AI solutions. Try asking about his skills, projects, or contact info.';
};

if (chatToggle && chatWindow && chatClose && chatMessages && chatInput && chatSend) {
    const addMessage = (text, className) => {
        const message = document.createElement('div');
        message.className = `message ${className}`;
        message.textContent = text;
        chatMessages.appendChild(message);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const setSendingState = (isSending) => {
        chatSend.disabled = isSending;
        chatInput.disabled = isSending;
        chatSend.style.opacity = isSending ? '0.6' : '1';
    };

    const sendChat = () => {
        const userText = chatInput.value.trim();
        if (!userText) return;

        addMessage(userText, 'user-message');
        chatInput.value = '';
        setSendingState(true);

        addMessage('Typing…', 'ai-message');
        setTimeout(() => {
            const reply = getLocalAIResponse(userText);
            const typingMessage = chatMessages.querySelector('.ai-message:last-child');
            if (typingMessage) {
                typingMessage.textContent = reply;
            }
            setSendingState(false);
        }, 400);
    };

    const toggleChatWindow = () => {
        const isHidden = chatWindow.classList.contains('hidden-chat');
        chatWindow.classList.toggle('hidden-chat', !isHidden);
        chatWindow.setAttribute('aria-hidden', String(!isHidden));
        if (isHidden) {
            chatInput.focus();
        }
    };

    chatToggle.addEventListener('click', toggleChatWindow);
    chatClose.addEventListener('click', toggleChatWindow);
    chatSend.addEventListener('click', sendChat);
    chatInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendChat();
        }
    });
}
