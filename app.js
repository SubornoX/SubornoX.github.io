// Portfolio Website JavaScript

// Application data
const portfolioData = {
  "portfolio_projects": [
    {
      "title": "E-Commerce Platform",
      "description": "Modern e-commerce website with shopping cart and payment integration",
      "technologies": ["React", "Node.js", "MongoDB", "Stripe"],
      "category": "web-development",
      "image": "project1.jpg"
    },
    {
      "title": "Mobile Banking App",
      "description": "Secure mobile banking application with biometric authentication",
      "technologies": ["React Native", "Firebase", "Redux"],
      "category": "mobile-development",
      "image": "project2.jpg"
    },
    {
      "title": "Corporate Website",
      "description": "Professional corporate website with CMS integration",
      "technologies": ["WordPress", "PHP", "MySQL", "jQuery"],
      "category": "web-development",
      "image": "project3.jpg"
    },
    {
      "title": "Travel App UI/UX",
      "description": "Beautiful travel application interface design",
      "technologies": ["Figma", "Adobe XD", "Principle"],
      "category": "design",
      "image": "project4.jpg"
    },
    {
      "title": "Restaurant Management",
      "description": "Complete restaurant management system with inventory",
      "technologies": ["Vue.js", "Laravel", "PostgreSQL"],
      "category": "web-development",
      "image": "project5.jpg"
    },
    {
      "title": "Brand Identity Design",
      "description": "Complete brand identity package for tech startup",
      "technologies": ["Illustrator", "Photoshop", "InDesign"],
      "category": "design",
      "image": "project6.jpg"
    }
  ],
  "skills": {
    "technical": [
      {"name": "JavaScript", "level": 90},
      {"name": "React", "level": 85},
      {"name": "Node.js", "level": 80},
      {"name": "Python", "level": 75},
      {"name": "PHP", "level": 70},
      {"name": "MongoDB", "level": 85}
    ],
    "design": [
      {"name": "UI/UX Design", "level": 90},
      {"name": "Adobe Creative Suite", "level": 85},
      {"name": "Figma", "level": 95},
      {"name": "Responsive Design", "level": 90}
    ],
    "marketing": [
      {"name": "SEO", "level": 80},
      {"name": "Google Analytics", "level": 75},
      {"name": "Social Media Marketing", "level": 70},
      {"name": "Content Marketing", "level": 75}
    ]
  },
  "experience": [
    {
      "title": "Senior Web Developer",
      "company": "Tech Solutions Inc.",
      "duration": "2022 - Present",
      "description": "Led development of complex web applications and mentored junior developers"
    },
    {
      "title": "Full-Stack Developer",
      "company": "Digital Agency Pro",
      "duration": "2020 - 2022",
      "description": "Developed responsive websites and web applications for various clients"
    },
    {
      "title": "Frontend Developer",
      "company": "StartupXYZ",
      "duration": "2018 - 2020",
      "description": "Created user interfaces and implemented responsive designs"
    }
  ],
  "testimonials": [
    {
      "name": "Sarah Johnson",
      "company": "TechCorp",
      "role": "Project Manager",
      "text": "Exceptional work quality and great communication throughout the project. Highly recommended!",
      "rating": 5
    },
    {
      "name": "Michael Chen",
      "company": "E-Commerce Plus",
      "role": "CEO",
      "text": "Delivered our project on time and exceeded our expectations. Professional and skilled developer.",
      "rating": 5
    },
    {
      "name": "Emily Davis",
      "company": "Creative Studio",
      "role": "Design Director",
      "text": "Amazing attention to detail and perfect implementation of our design requirements.",
      "rating": 5
    }
  ],
  "services": [
    {
      "title": "Web Development",
      "description": "Custom websites and web applications built with modern technologies",
      "icon": "💻"
    },
    {
      "title": "UI/UX Design",
      "description": "User-centered design solutions that engage and convert visitors",
      "icon": "🎨"
    },
    {
      "title": "Mobile Development",
      "description": "Native and cross-platform mobile applications for iOS and Android",
      "icon": "📱"
    },
    {
      "title": "SEO Optimization",
      "description": "Search engine optimization to improve your website's visibility",
      "icon": "🔍"
    }
  ]
};

// Global variables
let currentTestimonial = 0;
let testimonialInterval;

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupScrollEffects();
    populateSkills();
    populateServices();
    populatePortfolio();
    populateExperience();
    populateTestimonials();
    setupPortfolioFilters();
    setupTestimonialSlider();
    setupContactForm();
    setupModal();
    setupAnimations();
}

// Navigation functionality
function setupNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = navToggle.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                span.style.transform = 'none';
                span.style.opacity = '1';
            }
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu
            navMenu.classList.remove('active');
            resetHamburger();
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            resetHamburger();
        }
    });
}

function resetHamburger() {
    const spans = navToggle.querySelectorAll('span');
    spans.forEach(span => {
        span.style.transform = 'none';
        span.style.opacity = '1';
    });
}

// Scroll effects
function setupScrollEffects() {
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        
        // Sticky navigation
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to top button
        if (scrollTop > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
        
        // Update active navigation link
        updateActiveNavLink();
    });
    
    // Back to top functionality
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollTop = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Populate skills section
function populateSkills() {
    const technicalSkills = document.getElementById('technical-skills');
    const designSkills = document.getElementById('design-skills');
    const marketingSkills = document.getElementById('marketing-skills');
    
    portfolioData.skills.technical.forEach(skill => {
        technicalSkills.appendChild(createSkillElement(skill));
    });
    
    portfolioData.skills.design.forEach(skill => {
        designSkills.appendChild(createSkillElement(skill));
    });
    
    portfolioData.skills.marketing.forEach(skill => {
        marketingSkills.appendChild(createSkillElement(skill));
    });
}

function createSkillElement(skill) {
    const skillElement = document.createElement('div');
    skillElement.className = 'skill-item';
    skillElement.innerHTML = `
        <span class="skill-name">${skill.name}</span>
        <span class="skill-level">${skill.level}%</span>
    `;
    return skillElement;
}

// Populate services section
function populateServices() {
    const servicesGrid = document.getElementById('services-grid');
    
    portfolioData.services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        servicesGrid.appendChild(serviceCard);
    });
}

// Populate portfolio section
function populatePortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    
    portfolioData.portfolio_projects.forEach(project => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `portfolio-item ${project.category}`;
        portfolioItem.innerHTML = `
            <div class="portfolio-image"></div>
            <div class="portfolio-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="portfolio-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        portfolioItem.addEventListener('click', () => openProjectModal(project));
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Portfolio filters
function setupPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter portfolio items with smooth transition
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.classList.remove('hidden');
                    }, 10);
                } else {
                    item.classList.add('hidden');
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Populate experience section
function populateExperience() {
    const experienceTimeline = document.getElementById('experience-timeline');
    
    portfolioData.experience.forEach(exp => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <div class="company">${exp.company}</div>
                <div class="duration">${exp.duration}</div>
                <p>${exp.description}</p>
            </div>
        `;
        experienceTimeline.appendChild(timelineItem);
    });
}

// Populate testimonials section
function populateTestimonials() {
    const testimonialsSlider = document.getElementById('testimonials-slider');
    
    portfolioData.testimonials.forEach((testimonial, index) => {
        const testimonialItem = document.createElement('div');
        testimonialItem.className = `testimonial-item ${index === 0 ? 'active' : ''}`;
        testimonialItem.innerHTML = `
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
                <div class="testimonial-avatar">${testimonial.name.charAt(0)}</div>
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role} at ${testimonial.company}</p>
                    <div class="testimonial-rating">${'★'.repeat(testimonial.rating)}</div>
                </div>
            </div>
        `;
        testimonialsSlider.appendChild(testimonialItem);
    });
}

// Testimonial slider - Fixed implementation
function setupTestimonialSlider() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.getElementById('testimonials-prev');
    const nextBtn = document.getElementById('testimonials-next');
    
    if (testimonialItems.length === 0) return;
    
    function showTestimonial(index) {
        testimonialItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }
    
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
        showTestimonial(currentTestimonial);
    }
    
    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonialItems.length) % testimonialItems.length;
        showTestimonial(currentTestimonial);
    }
    
    // Add event listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            clearInterval(testimonialInterval);
            prevTestimonial();
            startTestimonialInterval();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            clearInterval(testimonialInterval);
            nextTestimonial();
            startTestimonialInterval();
        });
    }
    
    // Auto-advance testimonials
    function startTestimonialInterval() {
        testimonialInterval = setInterval(nextTestimonial, 5000);
    }
    
    // Start auto-advance
    startTestimonialInterval();
    
    // Pause on hover
    const testimonialsSection = document.getElementById('testimonials');
    if (testimonialsSection) {
        testimonialsSection.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });
        
        testimonialsSection.addEventListener('mouseleave', () => {
            startTestimonialInterval();
        });
    }
}

// Contact form
function setupContactForm() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Basic validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Modal functionality
function setupModal() {
    modalClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}

function openProjectModal(project) {
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <div class="modal-project-image" style="width: 100%; height: 200px; background: linear-gradient(135deg, #3498db, #2c3e50); border-radius: 10px; margin: 1rem 0; display: flex; align-items: center; justify-content: center; font-size: 3rem; opacity: 0.3;">🖼️</div>
        <p style="margin: 1rem 0; color: #6c757d; line-height: 1.6;">${project.description}</p>
        <div style="margin: 1rem 0;">
            <h4 style="margin-bottom: 0.5rem;">Technologies Used:</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
        <div style="margin: 1rem 0;">
            <h4 style="margin-bottom: 0.5rem;">Project Category:</h4>
            <p style="color: #6c757d; text-transform: capitalize;">${project.category.replace('-', ' ')}</p>
        </div>
        <div style="margin-top: 2rem; display: flex; gap: 1rem;">
            <button class="btn btn--primary" onclick="alert('Live demo would open here')">View Live Demo</button>
            <button class="btn btn--outline" onclick="alert('GitHub repository would open here')">View Code</button>
        </div>
    `;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Animation effects
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Add slide-up animation to cards
    const cards = document.querySelectorAll('.service-card, .portfolio-item, .timeline-item');
    cards.forEach(card => {
        card.classList.add('slide-up');
        observer.observe(card);
    });
}

// Additional utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth reveal animations for elements
function revealElements() {
    const elements = document.querySelectorAll('.fade-in:not(.visible)');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Optimized scroll listener
window.addEventListener('scroll', debounce(revealElements, 10));

// Initialize reveal on load
document.addEventListener('DOMContentLoaded', revealElements);

// Add loading state management
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Error handling for dynamic content
window.addEventListener('error', function(e) {
    console.error('Portfolio App Error:', e.error);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
    });
}