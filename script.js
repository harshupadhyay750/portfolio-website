// ==========================================================================
// HARSH UPADHYAY - INTERACTIVE PORTFOLIO LOGIC & AI CLONE
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Mobile Navigation Toggle ---
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            mobileToggle.setAttribute('aria-expanded', String(isActive));
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                if (isActive) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close menu when clicking outside or clicking any nav link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (mobileToggle.querySelector('i')) {
                    mobileToggle.querySelector('i').classList.remove('fa-times');
                    mobileToggle.querySelector('i').classList.add('fa-bars');
                }
            });
        });
    }

    // --- 2. Header Scroll Effect ---
    const siteHeader = document.querySelector('.site-header');
    if (siteHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        });
    }

    // --- 3. Scroll Reveal Animations ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.hidden, .reveal').forEach(el => revealObserver.observe(el));

    // --- 4. Typed.js Initialization ---
    const typedTarget = document.getElementById('typed-text');
    if (typedTarget && typeof Typed !== 'undefined') {
        new Typed('#typed-text', {
            strings: [
                'Data into Predictive Intelligence',
                '1,200+ Profiles into AI Career Insights',
                'Flutter & Firebase into Real-World Apps',
                '10,000+ Transactions into Business Growth',
                'Ideas into Scalable Digital Solutions'
            ],
            typeSpeed: 45,
            backSpeed: 25,
            backDelay: 1500,
            startDelay: 400,
            smartBackspace: true,
            loop: true
        });
    }

    // --- 5. particles.js Configuration ---
    if (document.getElementById('particles-js') && typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 55,
                    "density": {
                        "enable": true,
                        "value_area": 850
                    }
                },
                "color": {
                    "value": ["#a855f7", "#06b6d4", "#ffffff"]
                },
                "shape": {
                    "type": "circle"
                },
                "opacity": {
                    "value": 0.35,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 0.8,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 2.5,
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 140,
                    "color": "#a855f7",
                    "opacity": 0.12,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1.4,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "window",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.35
                        }
                    }
                }
            },
            "retina_detect": true
        });
    }

    // --- 6. Click-to-Copy with Toast Notification ---
    const showToast = (text) => {
        let toast = document.getElementById('global-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'global-toast';
            toast.className = 'toast-notice';
            document.body.appendChild(toast);
        }
        toast.innerHTML = `<i class="fas fa-check-circle" style="color: #10b981;"></i> ${text}`;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2800);
    };

    document.querySelectorAll('[data-copy]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const textToCopy = btn.getAttribute('data-copy');
            if (navigator.clipboard && textToCopy) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showToast(`Copied "${textToCopy}" to clipboard!`);
                }).catch(() => {
                    showToast('Copied to clipboard!');
                });
            }
        });
    });

    // --- 7. Project Filtering Logic ---
    const filterPills = document.querySelectorAll('.filter-pill');
    const projectCards = document.querySelectorAll('.project-item');

    if (filterPills.length > 0 && projectCards.length > 0) {
        filterPills.forEach(pill => {
            pill.addEventListener('click', () => {
                filterPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');

                const filterCategory = pill.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category') || '';
                    const categories = cardCategory.split(/\s+/);
                    if (filterCategory === 'all' || categories.includes(filterCategory)) {
                        card.classList.remove('filtered-out');
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(15px)';
                        setTimeout(() => {
                            card.style.transition = 'all 0.4s ease';
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.classList.add('filtered-out');
                    }
                });
            });
        });
    }

    // --- 8. Print Resume Trigger ---
    const printBtn = document.getElementById('print-resume-btn');
    if (printBtn) {
        printBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.print();
        });
    }

    // --- 9. AI Harsh Knowledge Base & Clone Logic ---
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const suggestionChips = document.querySelectorAll('.suggestion-chips .chip');

    const getHarshAIResponse = (query) => {
        const text = query.toLowerCase().trim();
        if (!text) return "Please ask a question and I'll be glad to help!";

        // GREETINGS
        if (/^(hi|hello|hey|hola|greetings|wassup|sup|good morning|good evening)/i.test(text)) {
            return "Hey there! 👋 I'm **Harsh Upadhyay's AI Clone**, trained on his real-world resume and portfolio projects. Feel free to ask about my AI projects, data analytics track record, tech skills, education at AKTU, or contact details!";
        }

        // FITBYTE
        if (/fitbyte|fit byte|health|diet|nutrition|calorie|meal/i.test(text)) {
            return "📱 **FitByte — AI-Powered Health and Diet Analyzer** (Jun 2026 - Present)\n" +
                   "• **Tech Stack**: Flutter, Dart, REST API, Firebase, Android Studio, Figma.\n" +
                   "• **Features**: Cross-platform Android app analyzing user metrics (age, weight, activity level) delivering personalized AI recommendations across **500+ food items**.\n" +
                   "• **Backend & Sync**: Connected REST APIs for real-time nutrition data and Firebase authentication/progress sync, reducing manual logging by **~80%**.\n" +
                   "• **Impact**: Validated with **15+ beta testers** with interactive charts for calorie, macro, and weekly fitness visualization.";
        }

        // CAREER ADVISER / MENTERA
        if (/career|adviser|advisor|mentera|sih|hackathon|recommendation/i.test(text)) {
            return "🧠 **Personalized Career Adviser System (MentEra)** (Sep 2025 - Nov 2025)\n" +
                   "• **Tech Stack**: Python, Scikit-learn, ChatGPT API, Machine Learning, React, Node.js.\n" +
                   "• **Core Engine**: Trained on **1,200+ student profiles** utilizing Decision Trees, K-Means Clustering, and Collaborative Filtering.\n" +
                   "• **Accuracy**: Achieved **~85% accuracy** on test data.\n" +
                   "• **Generative AI**: Integrated ChatGPT API to generate dynamic skill-gap roadmaps and learning trajectories.\n" +
                   "• Case study available on the Projects page (Smart India Hackathon 2025).";
        }

        // GAZEFLOW AI / COMPUTER VISION
        if (/gazeflow|gaze|eye|iris|vision|opencv|mediapipe|pupil|tracking/i.test(text)) {
            return "👁️ **GazeFlow AI — Real-Time Eye & Gaze Tracking System** (2026)\n" +
                   "• **Tech Stack**: Python, OpenCV, Google MediaPipe Face Landmarker, PyQt / PySide, Computer Vision.\n" +
                   "• **Core Capabilities**: High-speed real-time webcam tracking at **60 FPS** calculating facial landmarks, iris centerpoints, and ocular gaze orientation vectors.\n" +
                   "• **Architecture**: Multithreaded GUI running a zero-latency pipeline with mirrored preview overlays, color-coded landmarks, and hardware disconnect safeguards.\n" +
                   "• **Open Source**: Full repository available on GitHub: [github.com/harshupadhyay750/GazeFlow_AI](https://github.com/harshupadhyay750/GazeFlow_AI).";
        }

        // HOUSE PREDICTION / PROPINTEL
        if (/house|propintel|property|real estate|xgboost|valuation|pricing|housing|fastapi|streamlit|shap/i.test(text)) {
            return "🏠 **PropIntel — House Price Prediction & Property Analytics Platform** (2025 - 2026)\n" +
                   "• **Tech Stack**: Python, XGBoost, Scikit-learn, FastAPI, Streamlit, SHAP, Pandas, Pytest.\n" +
                   "• **Model Performance**: **98.83% R² Accuracy** ($21,290 MAE / 4.10% MAPE) trained across **6,025 real estate properties** using a log-target Super Ensemble (XGBoost + GradientBoosting + HistGradientBoosting).\n" +
                   "• **Data Pipeline**: Automated leak-free ColumnTransformer pipeline with domain feature engineering (luxury index, room ratios) and multi-currency valuation (USD, INR Crores/Lakhs, EUR, GBP).\n" +
                   "• **Deployment**: Production FastAPI REST microservice with Pydantic validation, interactive multi-tab Streamlit dashboard, Tree SHAP explainability, and 17/17 passing Pytest suite.\n" +
                   "• **Open Source**: Full repository on GitHub: [github.com/harshupadhyay750/House_Prediction](https://github.com/harshupadhyay750/House_Prediction).";
        }

        // CAFE SALES DATA ANALYSIS
        if (/cafe|sales|power bi|wastage|retail|transactions/i.test(text)) {
            return "📊 **Cafe Sales Data Analysis** (Jun 2025)\n" +
                   "• **Tech Stack**: Python, Pandas, Matplotlib, Power BI.\n" +
                   "• **Scale**: Analyzed **10,000+ sales transactions** across 6 months.\n" +
                   "• **Business Impact**: Identified 3 peak revenue periods and top-performing SKUs, contributing directly to a **15% reduction in estimated wastage**.\n" +
                   "• Built an interactive Power BI executive dashboard consolidating customer behavior KPIs, product performance, and revenue trends.";
        }

        // BIKE SALES DATA ANALYSIS
        if (/bike|bikesale/i.test(text)) {
            return "🚲 **Bike Sales Data Analysis**:\n" +
                   "An exploratory data analysis (EDA) project built with Python, Pandas, NumPy, and Matplotlib. Performed comprehensive data cleaning, outlier handling, and visualization of customer demographics and purchasing patterns. Case study PDF is downloadable on the Projects page!";
        }

        // SKILLS / TECH STACK
        if (/skill|skills|stack|tech|technologies|tools|languages|programming/i.test(text)) {
            return "💻 **Harsh's Technical Arsenal**:\n\n" +
                   "• **Programming Languages**: Python, Dart, JavaScript, SQL, HTML, CSS\n" +
                   "• **Machine Learning & AI**: Scikit-learn, XGBoost, OpenCV, Google MediaPipe, TensorFlow (basic), ChatGPT API, SHAP (Explainable AI), Decision Trees, K-Means Clustering\n" +
                   "• **Data & Analytics**: Pandas, Matplotlib, Power BI, Tableau, Advanced Excel, SQL, Data Cleaning & EDA\n" +
                   "• **Mobile, Web & Backend**: Flutter, FastAPI, Streamlit, Android Studio, Firebase, REST API Integration, React\n" +
                   "• **Tools & Platforms**: Git, GitHub, VS Code, PyQt / PySide, Figma, Pytest";
        }

        // EDUCATION & CGPA
        if (/education|college|aktu|srmcem|cgpa|marks|degree|btech|school/i.test(text)) {
            return "🎓 **Education Overview**:\n\n" +
                   "• **B.Tech, Computer Science & Engineering (Data Science)** — SRMCEM, AKTU (2023 - 2027)\n" +
                   "  🎯 **CGPA: 7.08 / 10** (Final-year student graduating 2027)\n" +
                   "• **Intermediate (Class XII), CBSE** — Radient Central Academy (2023)\n" +
                   "• **High School (Class X), CBSE** — Anwar Public School (2021)";
        }

        // CERTIFICATIONS
        if (/certification|certificate|certified|srdt|courses/i.test(text)) {
            return "🏆 **Professional Certifications**:\n\n" +
                   "1. **Data Science with Machine Learning** — SRDT\n" +
                   "2. **Machine Learning Fundamentals** — Online Certification\n" +
                   "3. **Python for Data Analysis** — Online Certification";
        }

        // SUMMARY / ROLES SEEKING
        if (/summary|about|role|who are you|seeking|job|hire|position/i.test(text)) {
            return "Harsh Upadhyay is a final-year B.Tech Data Science student (SRMCEM, AKTU 2027) actively seeking a **Data Analyst** or **Machine Learning Engineer** role. He has shipped end-to-end AI and data solutions: a Flutter health app with 15+ beta testers, an 85% accurate career model on 1,200+ profiles, and a Power BI dashboard yielding 15% wastage reduction across 10k+ records.";
        }

        // CONTACT / REACH OUT
        if (/contact|email|phone|number|reach|message|linkedin|github|location|address|call/i.test(text)) {
            return "📬 **Contact Details**:\n\n" +
                   "• **Location**: Lucknow, Uttar Pradesh, India\n" +
                   "• **Phone**: [+91 9648581101](tel:9648581101)\n" +
                   "• **Email**: [harshupadhysy750@gmail.com](mailto:harshupadhysy750@gmail.com)\n" +
                   "• **LinkedIn**: [linkedin.com/in/harsh-upadhyay-802049297](https://www.linkedin.com/in/harsh-upadhyay-802049297)\n" +
                   "• **GitHub**: [github.com/harshupadhyay750](https://github.com/harshupadhyay750)\n\n" +
                   "Feel free to send a message via the Contact page!";
        }

        // DEFAULT FALLBACK
        return "I can answer anything about Harsh's **projects** (FitByte, Career Adviser, Cafe Sales), **skills** (Python, SQL, ML, Power BI, Flutter), **education** (SRMCEM, CGPA 7.08), **certifications**, or **contact info**. Try tapping one of the suggested buttons below!";
    };

    if (chatToggle && chatWindow && chatClose && chatMessages && chatInput && chatSend) {
        const renderMarkdown = (rawText) => {
            // Convert bold **text** to <strong>
            let formatted = rawText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            // Convert bullet lines
            formatted = formatted.replace(/^• (.*$)/gim, '<span style="display:block; margin: 3px 0 3px 14px; position: relative;">• $1</span>');
            // Convert markdown links [text](url)
            formatted = formatted.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" style="color: var(--secondary-light); text-decoration: underline;">$1</a>');
            // Convert newlines
            formatted = formatted.replace(/\n/g, '<br>');
            return formatted;
        };

        const appendChatMessage = (content, senderClass) => {
            const msgDiv = document.createElement('div');
            msgDiv.className = `message ${senderClass}`;
            msgDiv.innerHTML = renderMarkdown(content);
            chatMessages.appendChild(msgDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        };

        const handleSend = (textOverride) => {
            const query = textOverride || chatInput.value.trim();
            if (!query) return;

            appendChatMessage(query, 'user-message');
            chatInput.value = '';

            // Typing indicator
            const typingDiv = document.createElement('div');
            typingDiv.className = 'message ai-message';
            typingDiv.innerHTML = '<span style="opacity: 0.7; font-style: italic;">Harsh AI is thinking...</span>';
            chatMessages.appendChild(typingDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            chatSend.disabled = true;

            setTimeout(() => {
                typingDiv.remove();
                const reply = getHarshAIResponse(query);
                appendChatMessage(reply, 'ai-message');
                chatSend.disabled = false;
                chatInput.focus();
            }, 450);
        };

        const toggleChat = () => {
            const isHidden = chatWindow.classList.contains('hidden-chat');
            chatWindow.classList.toggle('hidden-chat', !isHidden);
            chatWindow.setAttribute('aria-hidden', String(!isHidden));
            if (isHidden) {
                chatInput.focus();
            }
        };

        chatToggle.addEventListener('click', toggleChat);
        chatClose.addEventListener('click', toggleChat);

        chatSend.addEventListener('click', () => handleSend());
        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSend();
            }
        });

        suggestionChips.forEach(chip => {
            chip.addEventListener('click', () => {
                const query = chip.getAttribute('data-query');
                if (query) handleSend(query);
            });
        });
    }
});
