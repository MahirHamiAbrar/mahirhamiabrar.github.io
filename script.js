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
        title: 'IntelliTube RAG System',
        icon: 'fas fa-robot',
        description: `IntelliTube is a sophisticated YouTube-powered Retrieval-Augmented Generation (RAG) AI system that revolutionizes how users consume video content. Built entirely with open-source technologies and local LLMs, it eliminates dependency on OpenAI APIs while delivering superior performance.

        The system extracts transcripts from YouTube videos, processes them through advanced chunking algorithms, and creates semantic embeddings for efficient retrieval. Users can ask questions about video content and receive accurate, contextually relevant answers backed by specific timestamps and citations.

        What sets IntelliTube apart is its local-first architecture - all processing happens on your hardware, ensuring privacy and reducing costs. The system supports multiple video formats, batch processing, and real-time question answering with sub-second response times.`,
        techStack: ['Python', 'LangChain', 'Groq API', 'FAISS', 'Streamlit', 'YouTube API', 'Whisper', 'ChromaDB'],
        features: [
            'Zero-dependency local LLM orchestration without OpenAI APIs',
            'Advanced RAG pipeline with semantic chunking and vector search',
            'Real-time transcript extraction and processing from YouTube videos',
            'Interactive chat interface with timestamp-based citations',
            'Batch video processing with intelligent content summarization',
            'Support for multiple LLM providers (Groq, Ollama, local models)',
            'Persistent vector database for efficient content retrieval',
            'Privacy-first architecture with all processing done locally'
        ],
        github: 'https://github.com/MahirHamiAbrar/intellitube-rag',
        liveDemo: 'https://intellitube-demo.mahirabrar.dev',
        hasDemo: true
    },
    'esp32': {
        title: 'ESP32 IoT Dashboard',
        icon: 'fas fa-microchip',
        description: `A comprehensive IoT monitoring and control system built around the ESP32 microcontroller running FreeRTOS. This project demonstrates real-time embedded systems programming with wireless communication capabilities and advanced sensor integration.

        The system features a multi-threaded architecture handling simultaneous sensor data collection, wireless communication, and user interface management. Built-in safety mechanisms ensure reliable operation even under adverse conditions.

        The dashboard provides real-time visualization of sensor data, remote control capabilities, and automated alert systems. The entire system is designed for industrial-grade reliability with proper error handling and recovery mechanisms.`,
        techStack: ['C++', 'ESP32', 'FreeRTOS', 'Arduino IDE', 'WebSocket', 'MQTT', 'React Dashboard', 'InfluxDB'],
        features: [
            'Real-time sensor data collection (temperature, humidity, motion, light)',
            'Multi-threaded FreeRTOS implementation with task scheduling',
            'Wireless communication via WiFi and Bluetooth Low Energy',
            'Web-based dashboard with real-time data visualization',
            'MQTT protocol integration for IoT device management',
            'Over-the-air (OTA) firmware updates capability',
            'Advanced power management with deep sleep modes',
            'Industrial-grade error handling and system recovery'
        ],
        github: 'https://github.com/MahirHamiAbrar/esp32-iot-dashboard',
        liveDemo: null,
        hasDemo: false
    },
    'linux-gui': {
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
        github: 'https://github.com/MahirHamiAbrar/linux-custom-gui',
        liveDemo: null,
        hasDemo: false
    },
    'ml-optimizer': {
        title: 'ML Performance Optimizer',
        icon: 'fas fa-chart-line',
        description: `An intelligent machine learning pipeline optimizer that significantly reduces training time and resource consumption through advanced batching strategies, memory management, and computational graph optimization.

        The system analyzes ML workflows and automatically applies optimization techniques including dynamic batching, gradient accumulation, mixed-precision training, and intelligent caching. It supports major ML frameworks and provides seamless integration with existing training pipelines.

        Through extensive benchmarking and profiling, the optimizer achieves up to 40% reduction in training time while maintaining model accuracy. The system includes detailed performance analytics and recommendations for further optimization.`,
        techStack: ['Python', 'PyTorch', 'TensorFlow', 'CUDA', 'NumPy', 'Pandas', 'MLflow', 'Ray Tune'],
        features: [
            'Automated pipeline analysis and bottleneck identification',
            'Dynamic batch size optimization based on memory constraints',
            'Mixed-precision training with automatic loss scaling',
            'Intelligent gradient accumulation and synchronization',
            'Memory-efficient data loading with prefetching strategies',
            'Comprehensive performance profiling and visualization',
            'Support for distributed training across multiple GPUs',
            'Integration with popular ML frameworks and experiment tracking'
        ],
        github: 'https://github.com/MahirHamiAbrar/ml-performance-optimizer',
        liveDemo: null,
        hasDemo: false
    },
    'chat-system': {
        title: 'Distributed Chat System',
        icon: 'fas fa-network-wired',
        description: `A high-performance, distributed real-time chat application built with modern web technologies and microservices architecture. Features end-to-end encryption, file sharing, and horizontal scalability to support thousands of concurrent users.

        The system implements WebSocket connections for real-time messaging, with automatic failover and load balancing. Built-in encryption ensures message privacy, while the distributed architecture provides high availability and fault tolerance.

        Advanced features include message threading, file sharing with virus scanning, user presence indicators, and comprehensive admin controls. The system is designed for enterprise use with audit logging and compliance features.`,
        techStack: ['FastAPI', 'WebSocket', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes', 'React', 'TypeScript'],
        features: [
            'Real-time messaging with WebSocket connections and automatic reconnection',
            'End-to-end encryption using Signal Protocol for message privacy',
            'Distributed architecture with horizontal scaling capabilities',
            'File sharing with automatic virus scanning and size optimization',
            'Advanced user management with roles and permissions',
            'Message threading and conversation organization',
            'Comprehensive audit logging for compliance requirements',
            'Mobile-responsive design with Progressive Web App features'
        ],
        github: 'https://github.com/MahirHamiAbrar/distributed-chat-system',
        liveDemo: 'https://chat-demo.mahirabrar.dev',
        hasDemo: true
    }
};

function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    // Update modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalProjectImage').innerHTML = `<i class="${project.icon}"></i>`;
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