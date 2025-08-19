// AnBank Platform JavaScript - Enhanced Beautiful Design
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all features
    initializeAnimations();
    initializeScrollEffects();
    initializeParticleSystem();
    initializeInteractiveElements();
    initializeBackgroundEffects();
    initializePerformanceOptimizations();
    
    console.log('🚀 AnBank platform loaded successfully!');
    
    // Main animation initialization
    function initializeAnimations() {
        // Animate hero elements with staggered entrance
        const heroElements = [
            { selector: '.logo-container', delay: 0 },
            { selector: '.brand-tagline', delay: 200 },
            { selector: '.description-card', delay: 400 },
            { selector: '.highlight-badge', delay: 600 }
        ];
        
        heroElements.forEach(({ selector, delay }) => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(50px) scale(0.9)';
                
                setTimeout(() => {
                    element.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0) scale(1)';
                }, delay);
            }
        });
        
        // Animate logo rotation on load
        const logoIcon = document.querySelector('.logo-icon');
        if (logoIcon) {
            logoIcon.addEventListener('mouseenter', () => {
                logoIcon.style.transform = 'scale(1.1) rotate(180deg)';
                logoIcon.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            });
            
            logoIcon.addEventListener('mouseleave', () => {
                logoIcon.style.transform = 'scale(1) rotate(0deg)';
            });
        }
    }
    
    // Enhanced scroll-triggered animations
    function initializeScrollEffects() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.classList.add('animate-in');
                    
                    // Special animations for different elements
                    if (element.classList.contains('principle-card')) {
                        animatePrincipleCard(element);
                    } else if (element.classList.contains('social-button')) {
                        animateSocialButton(element);
                    } else if (element.classList.contains('external-link')) {
                        animateExternalLink(element);
                    } else if (element.classList.contains('section-title')) {
                        animateSectionTitle(element);
                    }
                }
            });
        }, observerOptions);
        
        // Observe all animatable elements
        const animateElements = document.querySelectorAll(
            '.principle-card, .social-button, .external-link, .section-title, .section-subtitle'
        );
        
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(60px) scale(0.95)';
            el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            observer.observe(el);
        });
    }
    
    // Individual animation functions
    function animatePrincipleCard(card) {
        const cards = document.querySelectorAll('.principle-card');
        const index = Array.from(cards).indexOf(card);
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
            
            // Add a subtle bounce effect
            setTimeout(() => {
                card.style.transform = 'translateY(-5px) scale(1.02)';
                setTimeout(() => {
                    card.style.transform = 'translateY(0) scale(1)';
                }, 200);
            }, 300);
        }, index * 150);
    }
    
    function animateSocialButton(button) {
        const buttons = document.querySelectorAll('.social-button');
        const index = Array.from(buttons).indexOf(button);
        
        setTimeout(() => {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0) scale(1)';
        }, index * 100);
    }
    
    function animateExternalLink(link) {
        const links = document.querySelectorAll('.external-link');
        const index = Array.from(links).indexOf(link);
        
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0) scale(1)';
        }, index * 200);
    }
    
    function animateSectionTitle(title) {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0) scale(1)';
        
        // Animate the text character by character
        const text = title.textContent;
        title.textContent = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            span.style.display = 'inline-block';
            span.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
            title.appendChild(span);
            
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }
    
    // Enhanced particle system
    function initializeParticleSystem() {
        const container = document.querySelector('.background-container');
        if (!container) return;
        
        // Create more sophisticated particles
        for (let i = 0; i < 20; i++) {
            createAdvancedParticle(container, i);
        }
        
        // Create floating geometric shapes
        for (let i = 0; i < 8; i++) {
            createFloatingShape(container, i);
        }
        
        // Create connection lines between particles
        createParticleConnections(container);
    }

    function createAdvancedParticle(container, index) {
        const particle = document.createElement('div');
        particle.className = 'advanced-particle';
        
        const size = Math.random() * 8 + 4;
        const x = Math.random() * 100;
        const y = 100 + Math.random() * 20;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(31, 184, 205, 0.8), rgba(50, 184, 198, 0.4));
            border-radius: 50%;
            box-shadow: 0 0 ${size * 3}px rgba(31, 184, 205, 0.6);
            animation: advancedFloat ${duration}s linear infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 0;
        `;
        
        container.appendChild(particle);
    }
    
    function createFloatingShape(container, index) {
        const shape = document.createElement('div');
        shape.className = 'floating-geo-shape';
        
        const shapes = ['circle', 'square', 'triangle', 'hexagon'];
        const shapeType = shapes[index % shapes.length];
        const size = Math.random() * 40 + 20;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        let clipPath = '';
        switch(shapeType) {
            case 'triangle':
                clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
                break;
            case 'hexagon':
                clipPath = 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)';
                break;
            case 'circle':
                clipPath = 'circle(50%)';
                break;
            default:
                clipPath = 'none';
        }
        
        shape.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            background: linear-gradient(45deg, 
                rgba(31, 184, 205, 0.3), 
                rgba(50, 184, 198, 0.2), 
                rgba(255, 193, 133, 0.1)
            );
            clip-path: ${clipPath};
            animation: floatGeoShape ${15 + index * 2}s ease-in-out infinite;
            animation-delay: ${index * 0.5}s;
            pointer-events: none;
            z-index: 0;
        `;
        
        container.appendChild(shape);
    }
    
    function createParticleConnections(container) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            opacity: 0.3;
        `;
        
        container.appendChild(canvas);
        
        // Animate connection lines
        function animateConnections() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const time = Date.now() * 0.001;
            const particles = [];
            
            // Create virtual particle positions
            for (let i = 0; i < 8; i++) {
                particles.push({
                    x: (Math.sin(time * 0.5 + i) * 200 + canvas.width / 2),
                    y: (Math.cos(time * 0.3 + i) * 150 + canvas.height / 2)
                });
            }
            
            // Draw connections
            ctx.strokeStyle = 'rgba(31, 184, 205, 0.4)';
            ctx.lineWidth = 1;
            
            particles.forEach((particle, i) => {
                particles.slice(i + 1).forEach(otherParticle => {
                    const distance = Math.sqrt(
                        Math.pow(particle.x - otherParticle.x, 2) + 
                        Math.pow(particle.y - otherParticle.y, 2)
                    );
                    
                    if (distance < 200) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                    }
                });
            });
            
            requestAnimationFrame(animateConnections);
        }
        
        animateConnections();
    }
    
    // Interactive elements enhancement
    function initializeInteractiveElements() {
        // Enhanced principle card interactions
        const principleCards = document.querySelectorAll('.principle-card');
        principleCards.forEach((card, index) => {
            card.addEventListener('mouseenter', () => {
                createCardRipple(card);
                addCardGlow(card);
            });
            
            card.addEventListener('mouseleave', () => {
                removeCardGlow(card);
            });
            
            card.addEventListener('click', () => {
                createCardBurst(card);
            });
        });
        
        // Enhanced social button interactions
        const socialButtons = document.querySelectorAll('.social-button');
        socialButtons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                createButtonWave(button);
            });
            
            button.addEventListener('click', (e) => {
                createClickEffect(button, e);
            });
        });
        
        // External link hover effects
        const externalLinks = document.querySelectorAll('.external-link');
        externalLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                createLinkTrail(link);
            });
        });
    }
    
    // Effect functions
    function createCardRipple(card) {
        const ripple = document.createElement('div');
        ripple.className = 'card-ripple';
        
        ripple.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: radial-gradient(circle, rgba(31, 184, 205, 0.4), transparent);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: rippleExpand 1s ease-out;
            pointer-events: none;
            z-index: 1;
        `;
        
        card.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 1000);
    }
    
    function addCardGlow(card) {
        card.style.boxShadow = '0 0 40px rgba(31, 184, 205, 0.4), 0 0 80px rgba(31, 184, 205, 0.2)';
        card.style.borderColor = 'rgba(31, 184, 205, 0.6)';
    }
    
    function removeCardGlow(card) {
        card.style.boxShadow = '';
        card.style.borderColor = 'rgba(31, 184, 205, 0.2)';
    }
    
    function createCardBurst(card) {
        for (let i = 0; i < 8; i++) {
            const spark = document.createElement('div');
            spark.className = 'spark';
            
            const angle = (i / 8) * Math.PI * 2;
            const distance = 100;
            
            spark.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 4px;
                height: 4px;
                background: rgba(31, 184, 205, 0.8);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                animation: sparkBurst 0.8s ease-out forwards;
                pointer-events: none;
                z-index: 10;
                --angle: ${angle}rad;
                --distance: ${distance}px;
            `;
            
            card.appendChild(spark);
            
            setTimeout(() => {
                if (spark.parentNode) {
                    spark.parentNode.removeChild(spark);
                }
            }, 800);
        }
    }
    
    function createButtonWave(button) {
        const wave = document.createElement('div');
        wave.className = 'button-wave';
        
        wave.style.cssText = `
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
                transparent, 
                rgba(255, 255, 255, 0.3), 
                transparent
            );
            animation: waveSlide 0.8s ease-out;
            pointer-events: none;
            z-index: 1;
        `;
        
        button.appendChild(wave);
        
        setTimeout(() => {
            if (wave.parentNode) {
                wave.parentNode.removeChild(wave);
            }
        }, 800);
    }
    
    function createClickEffect(button, event) {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        const clickWave = document.createElement('div');
        clickWave.className = 'click-wave';
        
        clickWave.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: clickExpand 0.6s ease-out;
            pointer-events: none;
            z-index: 5;
        `;
        
        button.appendChild(clickWave);
        
        setTimeout(() => {
            if (clickWave.parentNode) {
                clickWave.parentNode.removeChild(clickWave);
            }
        }, 600);
    }
    
    function createLinkTrail(link) {
        const trail = document.createElement('div');
        trail.className = 'link-trail';
        
        trail.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, 
                transparent, 
                rgba(31, 184, 205, 0.1), 
                transparent
            );
            animation: trailSlide 1.2s ease-in-out;
            pointer-events: none;
            z-index: 0;
        `;
        
        link.appendChild(trail);
        
        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
        }, 1200);
    }
    
    // Background effects
    function initializeBackgroundEffects() {
        // Parallax scrolling for background elements
        let ticking = false;
        
        function updateParallax() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            const shapes = document.querySelectorAll('.floating-shape, .floating-geo-shape');
            shapes.forEach((shape, index) => {
                const speed = 0.2 + (index * 0.1);
                shape.style.transform = `translateY(${rate * speed}px)`;
            });
            
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', requestTick);
    }
    
    // Performance optimizations
    function initializePerformanceOptimizations() {
        // Pause animations when tab is not visible
        document.addEventListener('visibilitychange', () => {
            const animatedElements = document.querySelectorAll(
                '.crypto-particle, .floating-shape, .gradient-orb, .floating-geo-shape'
            );
            
            animatedElements.forEach(el => {
                if (document.hidden) {
                    el.style.animationPlayState = 'paused';
                } else {
                    el.style.animationPlayState = 'running';
                }
            });
        });
        
        // Optimize scroll events
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            
            scrollTimeout = setTimeout(() => {
                // Trigger any scroll-based updates here
            }, 16); // 60fps
        });
        
        // Resize handler
        window.addEventListener('resize', debounce(() => {
            const canvas = document.querySelector('canvas');
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        }, 250));
    }
    
    // Utility functions
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
    
    // Add dynamic CSS animations
    const dynamicStyles = document.createElement('style');
    dynamicStyles.textContent = `
        @keyframes advancedFloat {
            0% { transform: translateY(100vh) rotate(0deg) scale(0); opacity: 0; }
            10% { opacity: 1; scale: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100px) rotate(360deg) scale(0); opacity: 0; }
        }
        
        @keyframes floatGeoShape {
            0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
            33% { transform: translateY(-20px) rotate(5deg) scale(1.1); }
            66% { transform: translateY(-10px) rotate(-5deg) scale(0.9); }
        }
        
        @keyframes rippleExpand {
            from { width: 0; height: 0; opacity: 1; }
            to { width: 400px; height: 400px; opacity: 0; }
        }
        
        @keyframes sparkBurst {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            100% { 
                transform: translate(
                    calc(-50% + cos(var(--angle)) * var(--distance)), 
                    calc(-50% + sin(var(--angle)) * var(--distance))
                ) scale(0); 
                opacity: 0; 
            }
        }
        
        @keyframes waveSlide {
            from { left: -100%; }
            to { left: 100%; }
        }
        
        @keyframes clickExpand {
            from { width: 0; height: 0; opacity: 1; }
            to { width: 100px; height: 100px; opacity: 0; }
        }
        
        @keyframes trailSlide {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
        
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) scale(1) !important;
        }
    `;
    document.head.appendChild(dynamicStyles);
    
    // Welcome message
    setTimeout(() => {
        console.log('✨ All AnBank animations and interactions are ready!');
    }, 1000);
});