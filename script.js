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

    "WebSummarizerTool": {
        "title": "WebSummarizerTool",
        "icon": "fas fa-brain",
        "description": "A powerful web search and summarization tool that uses Ollama models to optimize search queries, retrieve web content, and generate comprehensive summaries from multiple sources.",
        "techStack": ["Python", "Streamlit", "Ollama", "Google Search API", "HTML", "CSS", "JavaScript"],
        "features": [
            "AI-powered query optimization for improved search results",
            "Multi-source web content fetching and summarization",
            "Consolidated summaries combining individual results",
            "Export results in JSON or Markdown formats",
            "Configurable Ollama models for summarization",
            "User-friendly Streamlit interface"
        ],
        "github": "https://github.com/MahirHamiAbrar/WebSummarizerTool",
        "liveDemo": null,
        "hasDemo": false
    },

    'ImageToAsciiGui': {
        title: 'Image to ASCII Art Converter with GUI',
        icon: 'fas fa-image',
        description: `ImageToAsciiGui is a Python desktop application that converts any image into ASCII art characters with a user-friendly graphical interface. The application provides an intuitive way to transform photos and images into text-based ASCII representations that can be used anywhere text is supported.

        Built with cross-platform compatibility in mind, the application works on both Linux and Windows systems. Users can easily select images, customize output settings like scaling and width, and preview the ASCII conversion in real-time within the application interface.

        The project features a clean, modern GUI that makes ASCII art creation accessible to users of all skill levels. With built-in text editor integration and flexible output options, ImageToAsciiGui bridges the gap between digital imagery and text-based art, perfect for terminal enthusiasts, ASCII art creators, and anyone looking to add a retro computing aesthetic to their projects.`,
        techStack: ['Python', 'GUI Framework', 'Image Processing', 'ASCII Art Generation', 'Cross-platform Development', 'Virtual Environment'],
        features: [
            'Intuitive graphical user interface for easy image selection and conversion',
            'Real-time ASCII art preview within the application window',
            'Customizable image scaling and width adjustment options',
            'Cross-platform compatibility (Windows and Linux support)',
            'Built-in text editor integration for better ASCII art viewing',
            'Flexible output file management and storage options',
            'Support for various image formats and sizes',
            'Clean, modern interface design with user-friendly controls',
            'Virtual environment setup for isolated Python dependencies',
            'Optimized for Python 3.6+ with comprehensive version compatibility'
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

        This extension is available to download in <a href="https://marketplace.visualstudio.com/items?itemName=mhabrar.vscode-blur-linux">Visual Studio's marketplace</a> since 2022 and has been downloaded <strong>over 15k times</strong> as of July, 2025.`,
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
        title: 'Telegram Transaction Tracking & Google Sheets Integration Bot',
        icon: 'fas fa-robot',
        description: `SMSTrackerBot is a specialized Telegram bot designed to automatically extract and track transaction information from Telegram group messages. The bot intelligently parses financial transaction data from group conversations and seamlessly integrates with Google Sheets for organized record-keeping.

        This automation tool is perfect for managing group finances, tracking shared expenses, or monitoring business transactions within Telegram communities. The bot continuously monitors designated Telegram groups, identifies transaction-related messages, and automatically logs the parsed data into structured Google Sheets.

        Built with robust message parsing capabilities and reliable Google Sheets API integration, SMSTrackerBot eliminates manual transaction tracking and provides real-time financial data organization. The project demonstrates advanced bot development with third-party API integration and automated data processing workflows.`,
        techStack: ['Python', 'Telegram Bot API', 'Google Sheets API', 'Message Parsing', 'Data Processing', 'Automation', 'API Integration'],
        features: [
            'Automated transaction information extraction from Telegram messages',
            'Real-time monitoring of designated Telegram groups',
            'Intelligent message parsing for financial data recognition',
            'Seamless Google Sheets integration for data storage and organization',
            'Automated data logging with structured formatting',
            'Multi-group support for tracking various transaction sources',
            'Robust error handling and message validation',
            'Configurable parsing rules for different transaction formats',
            'Real-time synchronization between Telegram and Google Sheets',
            'Scalable architecture supporting high-volume message processing'
        ],
        github: 'https://github.com/MahirHamiAbrar/SMSTrackerBot',
        liveDemo: null,
        hasDemo: false
    },

    'DriftAI': {
        title: 'LLM-Powered Open Source AI Assistant',
        icon: 'fas fa-microphone-alt',
        description: `DriftAI is an innovative open-source AI assistant powered by Large Language Models (LLMs) that runs locally on your machine to enhance daily productivity tasks. Built specifically for Linux systems, it combines speech-to-text capabilities with local LLM processing to provide a privacy-focused AI assistant experience.

        The project features a sleek floating window interface that stays accessible on your desktop, allowing voice interactions through a minimalist design. DriftAI prioritizes user privacy by running everything locally, ensuring that your conversations and data never leave your machine.

        With its modular architecture and local processing capabilities, DriftAI represents a significant step towards democratizing AI assistance while maintaining complete user control over data and processing. The project is designed for power users who want the convenience of AI assistance without compromising on privacy or system resources.`,
        techStack: ['Python', 'Large Language Models (LLM)', 'Speech-to-Text AI', 'Local AI Processing', 'GUI/Desktop Application', 'uv Package Manager', 'Linux System Integration'],
        features: [
            'Local LLM processing with no cloud dependencies for privacy',
            'Real-time speech-to-text conversion and voice interaction',
            'Minimalist floating window interface for easy desktop access',
            'Expandable/collapsible UI design for optimal screen real estate',
            'Local audio recording and processing capabilities',
            'Configurable audio storage and processing settings',
            'Hardware-optimized for systems with 8-16GB RAM and GPU acceleration',
            'Open source architecture allowing custom LLM integration',
            'Cross-platform foundation built on modern Python tooling',
            'Privacy-first approach with all processing done on-device'
        ],
        github: 'https://github.com/MahirHamiAbrar/DriftAI',
        liveDemo: null,
        hasDemo: false
    },

    'XpressionSolver': {
        title: 'Step-by-Step Mathematical Expression Evaluator',
        image: 'images/xpressionsolver.png',
        description: `A Python-based mathematical expression evaluator that provides step-by-step solutions to complex mathematical expressions. The tool parses mathematical expressions provided as strings and evaluates them while showing the intermediate steps and calculations.

        XpressionSolver handles various mathematical operations including basic arithmetic, parentheses, and operator precedence rules. It's designed to be educational, helping users understand how mathematical expressions are broken down and solved systematically.

        The application features a clean command-line interface and can be easily extended to support additional mathematical functions and operations. Perfect for students, educators, and anyone who wants to understand the computational process behind mathematical expression evaluation.`,
        techStack: ['Python', 'Command Line Interface'],
        features: [
            'Step-by-step breakdown of mathematical expression evaluation',
            'Support for basic arithmetic operations (+, -, *, /)',
            'Proper handling of operator precedence and parentheses',
            'Clean and intuitive command-line interface',
            'Educational tool for understanding expression parsing',
            'Lightweight Python implementation with no external dependencies',
            'Easy to extend for additional mathematical functions',
            'Clear output showing intermediate calculation steps'
        ],
        github: 'https://github.com/MahirHamiAbrar/XpressionSolver',
        liveDemo: null,
        hasDemo: false
    },

    'SmartAttendanceSystem': {
        title: 'Fully Automated IoT-Based Attendance System',
        icon: 'fas fa-user-check',
        description: `SmartAttendanceSystem is a comprehensive IoT-based solution that automates the entire attendance tracking process for educational institutions and organizations. The system leverages Internet of Things technology to provide seamless, contactless attendance management without manual intervention.

        Built with modern IoT architecture, the system integrates hardware sensors with cloud-based data processing to create a robust attendance tracking infrastructure. The solution eliminates traditional paper-based or manual digital attendance methods, reducing administrative overhead and increasing accuracy.

        The system provides real-time attendance monitoring, automated data synchronization, and comprehensive reporting capabilities. With its scalable IoT framework, SmartAttendanceSystem can be deployed across multiple locations and integrated with existing institutional management systems, making it ideal for schools, universities, and corporate environments.`,
        techStack: ['IoT Development', 'Embedded Systems', 'Cloud Integration', 'Real-time Data Processing', 'Hardware Programming', 'Database Management', 'Web Dashboard', 'API Development'],
        features: [
            'Fully automated attendance tracking with zero manual intervention',
            'IoT sensor integration for contactless attendance detection',
            'Real-time data synchronization with cloud-based storage',
            'Comprehensive web dashboard for attendance management',
            'Multi-location support with centralized data processing',
            'Automated report generation and analytics',
            'Integration capabilities with existing institutional systems',
            'Scalable IoT architecture supporting multiple concurrent users',
            'Real-time notifications and attendance alerts',
            'Robust data security and privacy protection measures'
        ],
        github: 'https://github.com/MahirHamiAbrar/SmartAttendanceSystem',
        liveDemo: null,
        hasDemo: false
    },

    'AIFalcon': {
        title: 'Linux-Based AI Assistant with Machine Learning',
        icon: 'fas fa-robot',
        description: `AIFalcon is an intelligent AI assistant built specifically for Linux systems, utilizing machine learning algorithms to provide natural and interactive user experiences. The project demonstrates practical implementation of conversational AI technology using Python.

        Designed as a Linux-native solution, AIFalcon leverages the power of machine learning to understand user queries and provide contextual responses. The AI is built to integrate seamlessly with Linux environments and can be extended to perform various system-level tasks and interactions.

        This project showcases advanced AI development techniques and serves as a foundation for building more sophisticated AI assistants. AIFalcon represents a platform-specific approach to AI development, optimized for Linux systems' unique capabilities and architecture.`,
        techStack: ['Python', 'Machine Learning', 'Natural Language Processing', 'Linux System Integration', 'AI/ML Libraries'],
        features: [
            'Machine learning-powered conversational AI interface',
            'Linux-optimized architecture and system integration',
            'Interactive user communication with contextual responses',
            'Python-based implementation for easy extensibility',
            'Designed specifically for Linux environments',
            'Tested and validated on Ubuntu 18.04 LTS',
            'Foundation for building advanced AI assistant features',
            'Companion to AILaeo (Windows version) for cross-platform AI solutions'
        ],
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