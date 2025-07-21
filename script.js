// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Progress bar
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrolled / maxHeight) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.9)';
    }
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Project Modal Functionality
const projectData = {
    'intellitube': {
        title: 'IntelliTube',
        // icon: 'fas fa-robot',
        image: "images/intellitube.png",
        description: `IntelliTube is a sophisticated Retrieval-Augmented Generation (RAG) AI system that revolutionizes how users consume video content. Built entirely with open-source technologies and can work completely offline if using local LLMs. Alongside videos, it can also work with any document, websites and even audio.

        The system extracts transcripts from YouTube videos or transcribes provided audio files, processes them through advanced chunking algorithms, and creates semantic embeddings for efficient retrieval. Users can ask questions about video content and receive accurate, contextually relevant answers backed by specific timestamps and citations.`,
        techStack: ['Python', 'LangChain', 'LangGraph', 'Qdrant Vector Database', 'Groq API', 'Gemini API', 'Ollama', 'Streamlit', 'yt-dlp'],
        features: [
            'Modular RAG system capable of handling YouTube videos, PDFs, code files, audio, and more',
            'Multi-query expansion and self-querying techniques to improve retrieval relevance',
            'Integrated summarization for both document-wide and chat-level understanding',
            'Hierarchical chunking with metadata tracking and parent-child document reconstruction',
            'Custom prompt design for query rewriting, retrieval, and response generation',
            'Vector database integration (Qdrant) with precise filtering and chunk-level retrieval',
            'Real-time YouTube transcript parsing and timestamp-aware citation support',
            'LLM-agnostic backend compatible with Groq, local models (Ollama), and future providers',
            'Local-first execution with complete privacy — but recommended to use a powerful LLM for superior performance.'
        ],

        github: 'https://github.com/MahirHamiAbrar/intellitube',
        // liveDemo: 'https://intellitube-demo.vecel.app',
        hasDemo: false
    },
    
    'BitFestTeamExpelledSolutions': {
        title: 'Banglish to Bangla Translator AI Model',
        // icon: 'fas fa-microchip',
        // icon: 'fas fa-robot',
        image: "images/bitfestchallenge1.png",
        description: `
        This project was built as part of the KUET's Bitfest 2024 Hackathon's Challenge 1. It involves fine-tuning the mbart-large-50 model — an encoder-decoder transformer that supports 50 languages — for the task of Banglish to Bangla transliteration. It was Trained using PyTorch and transformers libraries on a <a href="https://huggingface.co/datasets/SKNahin/bengali-transliteration-data" target="_blank">publicly available dataset on Hugging Face</a> provided by Bitfest's organizing authority. The model outputs somwhat accurate readable Bangla text from informal Romanized Bengali input. Despite limited training time and compute, it serves as a functional prototype and proof-of-concept for multilingual sequence-to-sequence learning.

        The model is available on <a href="https://huggingface.co/mhabrar/BitfestTeamExpelledSolutionMode" target="_blank">Hugging Face</a>.
        `,
        techStack: ['Python', 'PyTorch', 'transformers'],
        features: [
            'Fine-tuned multilingual mBART model for Banglish-to-Bangla transliteration',
            'Utilizes open-source transliteration dataset from Hugging Face',
            'Works in low-resource environments (T4 GPU with minimal compute)',
            'Training pipeline built entirely with Hugging Face Transformers and Datasets',
            'Loss reduced to 0.85 within just 1000 steps of training',
            'Deployable via Hugging Face Model Hub for easy experimentation',
            'Optimized for quick inference on short-form user input text',
            'Supports future extensions to other Indic languages with minimal changes'
        ],
        github: 'https://github.com/MahirHamiAbrar/Bitfestteamexpelledsolutions',
        liveDemo: null,
        hasDemo: false
    },

    'ImageToAsciiGui': {
        title: 'Linux Custom GUI Framework',
        icon: 'fas fa-desktop',
        description: `A custom GUI framework built from scratch for Linux systems using C++ and Qt6, interfacing directly with X11 for low-level window management. This project demonstrates deep system programming knowledge and understanding of Linux desktop environments.

        The framework provides a complete windowing system with custom themes, advanced compositor effects, and seamless integration with existing Linux desktop environments. Built for performance and extensibility, it supports plugin architecture and custom widget development.

        Features include custom window decorations, multi-monitor support, and hardware-accelerated rendering. The framework is designed to be lightweight yet powerful, suitable for both embedded systems and desktop applications.`,
        techStack: ['C++17', 'Qt6', 'X11', 'OpenGL', 'CMake', 'Linux Kernel APIs', 'DBus', 'Wayland'],
        features: [
            'Custom window manager with advanced compositor effects',
            'Direct X11 integration for low-level window manipulation',
            'Hardware-accelerated rendering with OpenGL support',
            'Plugin architecture for extensible widget development',
            'Multi-monitor support with independent workspace management',
            'Custom theming engine with real-time theme switching',
            'Integration with Linux system services via DBus',
            'Memory-efficient design optimized for embedded systems'
        ],
        github: 'https://github.com/MahirHamiAbrar/ImageToAsciiGui',
        liveDemo: null,
        hasDemo: false
    },

    'vscode-blur-linux': {
        title: 'VSCode Window Style Customization Extension',
        // icon: 'fas fa-window-maximize',
        image: "images/vscode-blur-linux.png",
        description: `A minimal VS Code extension for Linux that enables transparency and blur effects on the editor window, offering a visually seamless integration with KDE Plasma desktops.

        The extension leverages native Linux tools like wmctrl and xprop to adjust window opacity and applies KWin blur effects if enabled in the compositor. Opacity level and blur can be customized directly from VS Code settings. The extension is lightweight, requires no patching, and respects system-level configuration.

        Designed for KDE users and tested on Plasma environments, it also provides universal transparency across all window managers. GNOME support is planned for future updates.`,
        techStack: ['VSCode Extension API', 'Bash', 'wmctrl', 'xprop', 'Linux Desktop (KDE)', 'JavaScript'],
        features: [
            'Adjustable VSCode window transparency across Linux distros',
            'Native KDE Plasma blur support via KWin compositor integration',
            'Zero external dependencies beyond standard Linux tools',
            'Shell-based control using wmctrl and xprop for reliable behavior',
            'Easily configurable via VSCode user settings',
            'No need for custom patches, theme mods, or extensions like picom',
            'Works out-of-the-box with most KDE setups',
            'Lightweight and minimal performance overhead'
        ],
        github: 'https://github.com/MahirHamiAbrar/vscode-blur-linux',
        liveDemo: null,
        hasDemo: false
    },

    'SMSTrackerBot': {
        title: 'To be Updated!',
        icon: 'fas fa-info-circle',
        description: ``,
        techStack: [],
        features: [],
        github: 'https://github.com/MahirHamiAbrar/SMSTrackerBot',
        liveDemo: null,
        hasDemo: false
    },

    'DriftAI': {
        title: 'To be Updated!',
        icon: 'fas fa-info-circle',
        description: ``,
        techStack: [],
        features: [],
        github: 'https://github.com/MahirHamiAbrar/DriftAI',
        liveDemo: null,
        hasDemo: false
    },

    'XpressionSolver': {
        title: 'To be Updated!',
        icon: 'fas fa-info-circle',
        description: ``,
        techStack: [],
        features: [],
        github: 'https://github.com/MahirHamiAbrar/XpressionSolver',
        liveDemo: null,
        hasDemo: false
    },

    'SmartAttendanceSystem': {
        title: 'To be Updated!',
        icon: 'fas fa-info-circle',
        description: ``,
        techStack: [],
        features: [],
        github: 'https://github.com/MahirHamiAbrar/SmartAttendanceSystem',
        liveDemo: null,
        hasDemo: false
    },

    'AIFalcon': {
        title: 'To be Updated!',
        icon: 'fas fa-info-circle',
        description: ``,
        techStack: [],
        features: [],
        github: 'https://github.com/MahirHamiAbrar/AIFalcon',
        liveDemo: null,
        hasDemo: false
    },

    'blank': {
        title: 'To be Updated!',
        icon: 'fas fa-info-circle',
        description: ``,
        techStack: [],
        features: [],
        github: 'https://github.com/MahirHamiAbrar/',
        liveDemo: null,
        hasDemo: false
    }
};

function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    // Update modal content
    document.getElementById('modalTitle').textContent = project.title;
    if (project.icon) {
        document.getElementById('modalProjectImage').innerHTML = `<i class="${project.icon}"></i>`;
    } else {
        document.getElementById('modalProjectImage').innerHTML = `<div class="project-image"><img src="${project.image}" alt="image"></div>`;
    }
    document.getElementById('modalDescription').innerHTML = project.description.replace(/\n\s+/g, '<br><br>');
    
    // Update tech stack
    const techStackContainer = document.getElementById('modalTechStack');
    techStackContainer.innerHTML = project.techStack.map(tech => 
        `<span class="modal-tech-item">${tech}</span>`
    ).join('');
    
    // Update features
    const featuresContainer = document.getElementById('modalFeatures');
    featuresContainer.innerHTML = project.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    // Update buttons
    const githubBtn = document.getElementById('modalGitHub');
    const demoBtn = document.getElementById('modalLiveDemo');
    
    githubBtn.href = project.github;
    
    if (project.hasDemo && project.liveDemo) {
        demoBtn.href = project.liveDemo;
        demoBtn.style.display = 'inline-flex';
        demoBtn.disabled = false;
    } else {
        demoBtn.style.display = 'none';
    }
    
    // Show modal
    document.getElementById('projectModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('projectModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// Typing animation for hero section
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const subtitle = document.querySelector('.hero .subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        typeWriter(subtitle, originalText, 80);
    }
});

// Add scroll reveal animations
function revealOnScroll() {
    const reveals = document.querySelectorAll('.project-card, .tech-category, .contact-card, .stat-card');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in-up');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add particle effects to background
function createParticles() {
    const particleContainer = document.querySelector('.background-effects');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--accent-color);
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.3;
            animation: particleFloat ${10 + Math.random() * 10}s infinite linear;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 10}s;
        `;
        particleContainer.appendChild(particle);
    }
}

// Add particle animation CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFloat {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.3;
        }
        90% {
            opacity: 0.3;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Initialize particles
createParticles();

// Add mobile menu toggle functionality
function createMobileMenu() {
    const nav = document.querySelector('nav .nav-container');
    const navLinks = document.querySelector('.nav-links');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.style.cssText = `
        display: none;
        background: transparent;
        border: none;
        color: var(--primary-text);
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 5px;
        transition: all 0.3s ease;
    `;
    
    // Insert mobile menu button
    nav.appendChild(mobileMenuBtn);
    
    // Mobile menu styles
    const mobileStyle = document.createElement('style');
    mobileStyle.textContent = `
        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: block !important;
            }
            
            .nav-links {
                position: fixed;
                top: 70px;
                right: -300px;
                width: 250px;
                height: calc(100vh - 70px);
                background: var(--secondary-bg);
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                padding-top: 2rem;
                gap: 1.5rem;
                border-left: 1px solid var(--border-color);
                transition: right 0.3s ease;
                z-index: 999;
            }
            
            .nav-links.active {
                right: 0;
            }
            
            .nav-links a {
                font-size: 1.2rem;
                padding: 1rem;
                width: 100%;
                text-align: center;
                border-bottom: 1px solid var(--border-color);
            }
        }
    `;
    document.head.appendChild(mobileStyle);
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = navLinks.classList.contains('active') 
            ? 'fas fa-times' 
            : 'fas fa-bars';
    });
    
    // Close mobile menu when clicking on links
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
        });
    });
}

// Initialize mobile menu
createMobileMenu();

// Add loading screen
function createLoadingScreen() {
    const loader = document.createElement('div');
    loader.id = 'pageLoader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--primary-bg);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    loader.innerHTML = `
        <div style="
            width: 50px;
            height: 50px;
            border: 3px solid var(--border-color);
            border-top: 3px solid var(--accent-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 1rem;
        "></div>
        <div style="
            color: var(--accent-color);
            font-size: 1.2rem;
            font-weight: 600;
        ">Loading Portfolio...</div>
    `;
    
    document.body.appendChild(loader);
    
    // Add spin animation
    const spinStyle = document.createElement('style');
    spinStyle.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(spinStyle);
    
    // Remove loader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    });
}

// Initialize loading screen
createLoadingScreen();

// Add Easter egg - Konami code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s infinite';
        
        const easterEggStyle = document.createElement('style');
        easterEggStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(easterEggStyle);
        
        setTimeout(() => {
            document.body.style.animation = '';
            easterEggStyle.remove();
        }, 4000);
        
        // Reset the code
        konamiCode = [];
    }
});

// Add contact form functionality (if you decide to add one later)
function initContactForm() {
    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple form validation and submission
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--accent-gradient);
                color: white;
                padding: 1rem 2rem;
                border-radius: 10px;
                box-shadow: 0 10px 30px var(--glow-color);
                z-index: 1000;
                animation: slideInRight 0.5s ease;
            `;
            successMsg.textContent = 'Message sent successfully!';
            
            document.body.appendChild(successMsg);
            
            setTimeout(() => {
                successMsg.remove();
            }, 3000);
        });
    });
}

// Initialize contact form
initContactForm();

// Add theme toggle functionality
function createThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--accent-gradient);
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: 0 4px 20px var(--glow-color);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const icon = themeToggle.querySelector('i');
        icon.className = document.body.classList.contains('light-theme') 
            ? 'fas fa-sun' 
            : 'fas fa-moon';
    });
    
    // Light theme styles
    const lightThemeStyle = document.createElement('style');
    lightThemeStyle.textContent = `
        body.light-theme {
            --primary-bg: #ffffff;
            --secondary-bg: #f8f9fa;
            --accent-bg: #e9ecef;
            --primary-text: #212529;
            --secondary-text: #6c757d;
            --border-color: #dee2e6;
        }
    `;
    document.head.appendChild(lightThemeStyle);
}

// Initialize theme toggle
createThemeToggle();

console.log('🚀 Portfolio loaded successfully!');
console.log('💻 Built with curiosity and caffeine by Mahir Abrar');
console.log('🔗 Connect with me: https://github.com/MahirHamiAbrar');