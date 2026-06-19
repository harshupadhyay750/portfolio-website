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
        strings: ['Web Developer', 'Data Analyst', 'Problem Solver'],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
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

// --- AI Chatbot Widget Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const suggestionChips = document.querySelectorAll('.suggestion-chips .chip');

    // Return mock response based on resume contents
    const getLocalAIResponse = (query) => {
        const text = query.toLowerCase().trim();
        if (!text) {
            return 'Please enter a question so I can help you.';
        }

        // GREETINGS
        if (/hello|hi|hey|greetings|wassup|sup|good morning|good afternoon/.test(text)) {
            return "Hey there! 👋 I am Harsh's AI clone, trained on his professional resume and portfolio. How can I help you today? You can ask about my projects, skills, or how to contact me!";
        }

        // FITBYTE
        if (/fitbyte|fit byte|health|diet|nutrition|calorie|fitness|flutter/.test(text)) {
            return "FitByte is an AI-Powered Health & Diet Analyser mobile application built with Flutter, Dart, and Firebase. It analyzes health data (age, weight, activity level) and offers personalized AI recommendations. Features include REST API integrations for real-time nutrition info, a Firebase backend, and an interactive dashboard with charts showing calorie intake and macro breakdown.";
        }

        // MENTERA / CAREER ADVISOR
        if (/mentera|ment era|career|advisor|adviser|guidance|smart india hackathon|sih|hackathon/.test(text)) {
            return "MentEra (AI Career Advisor) was built during the Smart India Hackathon 2025. It maps personalized career paths using machine learning models (decision trees, clustering) based on student academic profiles and skill sets. Developed with Python (Scikit-learn), React, Node.js, and MongoDB, it features career path predictions, user profiling, and AI career recommendations.";
        }

        // CAFE SALES DATA ANALYSIS
        if (/cafe|sales|retail|business insights|customer behavior|café/.test(text)) {
            return "The Cafe Sales Data Analysis project used Python, Pandas, and Matplotlib to clean, analyze, and visualize retail sales data. Harsh derived actionable insights on customer behavior, peak sales periods, and top-selling items to optimize inventory and improve business performance.";
        }

        // BIKE SALES DATA ANALYSIS
        if (/bike|sales|analysis|outlier|clean|bikesale/.test(text)) {
            return "The Bike Sales Data Analysis project is a comprehensive business analysis of retail bike transactions. Harsh performed extensive data cleaning, outlier detection, and feature engineering in Python (Pandas, NumPy, Matplotlib) to visualize key performance indicators and drive strategic sales growth.";
        }

        // SMART HOME ANALYTICS
        if (/smart home|iot|smart-home|sensor|analytics system|device/.test(text)) {
            return "The Smart Home Analytics System is an ongoing project designed to monitor and visualize real-time smart home sensor data. Built using Cloud Computing and Data Visualization tools, it creates a scalable real-time data pipeline from hardware to interactive dashboards.";
        }

        // SKILLS
        if (/skill|skills|tech|stack|programming|languages|technologies|toolbox|what do you do/.test(text)) {
            return "Harsh's technical skillset is divided into several areas:\n\n" +
                   "💻 Languages: Python, Dart, SQL, JavaScript, HTML/CSS\n" +
                   "📱 Mobile Dev: Flutter, Android Studio, Firebase, REST APIs\n" +
                   "📊 Data & Analytics: Pandas, Matplotlib, Power BI, Tableau, Advanced Excel\n" +
                   "🧠 ML & AI: Scikit-learn, TensorFlow (basic), Generative AI\n" +
                   "🎨 UI/UX & Design: Figma, Responsive Design\n" +
                   "🛠️ Tools & DevOps: Git & GitHub, Data Cleaning & Visualization";
        }

        // EDUCATION
        if (/education|college|aktu|srmcem|school|degree|cgpa|btech|b.tech|university/.test(text)) {
            return "Harsh is pursuing a B.Tech in Computer Science Engineering (specializing in Data Science) at SRMCEM, AKTU (2023 - 2027) with a CGPA of 7.0.\n\n" +
                   "He completed his Intermediate education from Radient Central Academy (CBSE) with 64.17% (2023) and his High School education from Anwar Public School with 62.80% (2021).";
        }

        // CERTIFICATIONS
        if (/certification|certifications|certificate|certified|courses|srdt/.test(text)) {
            return "Harsh holds the following professional certifications:\n\n" +
                   "🏆 Data Science with Machine Learning – issued by SRDT (2024)\n" +
                   "🏆 Machine Learning Fundamentals – Online Certification (2024)\n" +
                   "🏆 Python for Data Analysis – Online Certification (2023)";
        }

        // EXPERIENCE / ROLE
        if (/experience|internship|job|developer|work|role|student developer/.test(text)) {
            return "Harsh has hands-on project experience as a Student Developer and Hackathon Participant:\n\n" +
                   "🚀 Smart India Hackathon 2025: Developed MentEra, an AI-powered career advisor using machine learning.\n" +
                   "🛠️ Student Developer: Designed and deployed machine learning models, performed exploratory data analysis, and built full-stack web applications using Python, JS, React, and Flutter.";
        }

        // CONTACT
        if (/contact|email|phone|call|reach|connect|linkedin|github|location|where do you live|address/.test(text)) {
            return "You can reach Harsh through the following channels:\n\n" +
                   "📧 Email: harshupadhyay750@gmail.com\n" +
                   "📞 Phone: +91 9648581101\n" +
                   "📍 Location: Lucknow, Uttar Pradesh, India\n" +
                   "🔗 LinkedIn: linkedin.com/in/harsh-upadhyay-802049297\n" +
                   "🐙 GitHub: github.com/harshupadhyay750\n\n" +
                   "Feel free to drop a line or use the contact form on the contact page!";
        }

        // GENERAL PROJECTS
        if (/portfolio|site|website|code/.test(text)) {
            return "This website itself is a project! It's a personal portfolio built with HTML, CSS, JavaScript, and React components to showcase projects and resume data. It is responsive, highly performant, and integrated with this custom AI clone chatbot.";
        }

        if (/project|projects|what did you build|list|portfolio/.test(text)) {
            return "Harsh has built several impressive projects:\n\n" +
                   "1️⃣ FitByte - AI Health & Diet Mobile App (Flutter/Firebase)\n" +
                   "2️⃣ MentEra - AI Career Advisor (ML/Python/React)\n" +
                   "3️⃣ Cafe Sales Data Analysis (Pandas/Matplotlib/Power BI)\n" +
                   "4️⃣ Bike Sales Data Analysis (Python/EDA)\n" +
                   "5️⃣ Smart Home Analytics System (IoT/Cloud)\n\n" +
                   "Check the Projects page to explore case studies and code links!";
        }

        return "I'm not sure I understand that question completely. I can tell you about Harsh's skills, projects (like FitByte, MentEra), education, certifications, and contact details. Try asking about one of those topics or click one of the quick suggestions below!";
    };

    if (chatToggle && chatWindow && chatClose && chatMessages && chatInput && chatSend) {
        const addMessage = (text, className) => {
            const message = document.createElement('div');
            message.className = `message ${className}`;
            
            // Format newline into <br> tags
            message.innerHTML = text.replace(/\n/g, '<br>');
            
            chatMessages.appendChild(message);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        };

        const setSendingState = (isSending) => {
            chatSend.disabled = isSending;
            chatInput.disabled = isSending;
            chatSend.style.opacity = isSending ? '0.6' : '1';
        };

        const sendChat = (messageText) => {
            const userText = messageText || chatInput.value.trim();
            if (!userText) return;

            addMessage(userText, 'user-message');
            chatInput.value = '';
            setSendingState(true);

            // Add typing indicator
            const typingMessage = document.createElement('div');
            typingMessage.className = 'message ai-message';
            typingMessage.innerHTML = '<span class="typing-dots">Typing<em>.</em><em>.</em><em>.</em></span>';
            chatMessages.appendChild(typingMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            setTimeout(() => {
                // Remove typing indicator and reply
                typingMessage.remove();
                const reply = getLocalAIResponse(userText);
                addMessage(reply, 'ai-message');
                setSendingState(false);
            }, 600);
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
        
        chatSend.addEventListener('click', () => {
            sendChat();
        });
        
        chatInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                sendChat();
            }
        });

        // Setup Suggestion Chips click triggers
        suggestionChips.forEach(chip => {
            chip.addEventListener('click', () => {
                const queryText = chip.getAttribute('data-query');
                if (queryText) {
                    sendChat(queryText);
                }
            });
        });
    }

    // --- Projects Category Filtering ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    if (filterButtons.length > 0 && projectItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const category = button.getAttribute('data-filter');

                projectItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    if (category === 'all' || itemCategory === category) {
                        item.classList.remove('filtered-out');
                    } else {
                        item.classList.add('filtered-out');
                    }
                });
            });
        });
    }
});