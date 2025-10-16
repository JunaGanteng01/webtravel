// Countdown Timer untuk Header dan Penawaran
function startCountdown() {
    // Set waktu target (7 hari dari sekarang)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    targetDate.setHours(23, 59, 59, 999);

    function updateCountdown() {
        const now = new Date();
        const timeLeft = targetDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            // Update header countdown
            const headerDays = document.getElementById('days');
            const headerHours = document.getElementById('hours');
            const headerMinutes = document.getElementById('minutes');

            if (headerDays) headerDays.textContent = days.toString().padStart(2, '0');
            if (headerHours) headerHours.textContent = hours.toString().padStart(2, '0');
            if (headerMinutes) headerMinutes.textContent = minutes.toString().padStart(2, '0');

            // Update mobile countdown
            const mobileDays = document.getElementById('mobileDays');
            const mobileHours = document.getElementById('mobileHours');
            const mobileMinutes = document.getElementById('mobileMinutes');

            if (mobileDays) mobileDays.textContent = days.toString().padStart(2, '0');
            if (mobileHours) mobileHours.textContent = hours.toString().padStart(2, '0');
            if (mobileMinutes) mobileMinutes.textContent = minutes.toString().padStart(2, '0');

            // Update offer countdown
            const offerDays = document.getElementById('offerDays');
            const offerHours = document.getElementById('offerHours');
            const offerMinutes = document.getElementById('offerMinutes');
            const offerSeconds = document.getElementById('offerSeconds');

            if (offerDays) offerDays.textContent = days.toString().padStart(2, '0');
            if (offerHours) offerHours.textContent = hours.toString().padStart(2, '0');
            if (offerMinutes) offerMinutes.textContent = minutes.toString().padStart(2, '0');
            if (offerSeconds) offerSeconds.textContent = seconds.toString().padStart(2, '0');
        } else {
            // Countdown selesai
            const countdownElements = document.querySelectorAll('.countdown-timer, .countdown-container');
            countdownElements.forEach(element => {
                element.innerHTML = '<span style="color: #e74c3c;">Penawaran Berakhir!</span>';
            });
        }
    }

    // Update setiap detik
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Swiper Testimoni Initialization
let testimoniSwiper;

function initTestimoniSwiper() {
    testimoniSwiper = new Swiper('.testimoni-swiper', {
        // Basic settings
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        
        // Navigation
        navigation: {
            nextEl: '.testimoni-next',
            prevEl: '.testimoni-prev',
        },
        
        // Pagination
        pagination: {
            el: '.testimoni-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        
        // Effects
        effect: 'slide',
        speed: 600,
        
        // Responsive breakpoints
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
        },
        
        // Events
        on: {
            init: function () {
                console.log('Testimoni Swiper initialized');
            },
            slideChange: function () {
                // Slide change event handler
                console.log('Slide changed to:', this.activeIndex);
            },
        },
    });
}

// Smooth scrolling untuk navigasi
function scrollToBooking() {
    const penawaranSection = document.querySelector('.penawaran');
    if (penawaranSection) {
        penawaranSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Smooth scrolling ke section tertentu
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Mobile menu toggle - Let Bootstrap handle it
// No custom toggle needed, Bootstrap handles this automatically

// Form submission handler
function handleFormSubmission(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Simulasi pengiriman form
    const submitButton = form.querySelector('.btn-submit');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Mengirim...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        submitButton.textContent = 'Pesan Terkirim!';
        submitButton.style.background = '#27ae60';
        
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            submitButton.style.background = '';
            form.reset();
        }, 2000);
    }, 1500);
}

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.destinasi-card, .testimoni-content, .info-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Parallax effect untuk hero section
function handleParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image img');
        
        if (heroImage) {
            const rate = scrolled * -0.5;
            heroImage.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Navbar background change on scroll
function handleNavbarScroll() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.header');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(18, 18, 18, 0.98)';
        } else {
            navbar.style.background = 'rgba(18, 18, 18, 0.95)';
        }
    });
}

// Button hover effects
function addButtonEffects() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-hero, .btn-offer, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Loading animation
function showLoadingAnimation() {
    const body = document.body;
    body.style.opacity = '0';
    
    window.addEventListener('load', () => {
        body.style.transition = 'opacity 0.5s ease';
        body.style.opacity = '1';
    });
}

// Hero section animations dan interactions
function initHeroAnimations() {
    // Animate floating cards on scroll
    const floatingCards = document.querySelectorAll('.floating-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });
    
    floatingCards.forEach(card => {
        observer.observe(card);
    });
    
    // Add click handlers for floating cards
    floatingCards.forEach(card => {
        card.addEventListener('click', () => {
            scrollToSection('destinasi');
        });
    });
    
    // Animate stats numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateNumbers = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = target.textContent;
                const isPlus = finalNumber.includes('+');
                const isSlash = finalNumber.includes('/');
                const number = parseInt(finalNumber.replace(/[^0-9]/g, ''));
                
                let current = 0;
                const increment = number / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        current = number;
                        clearInterval(timer);
                    }
                    
                    if (isPlus) {
                        target.textContent = Math.floor(current) + 'K+';
                    } else if (isSlash) {
                        target.textContent = Math.floor(current) + '/7';
                    } else {
                        target.textContent = Math.floor(current) + '+';
                    }
                }, 30);
            }
        });
    };
    
    const statsObserver = new IntersectionObserver(animateNumbers, { threshold: 0.5 });
    statNumbers.forEach(stat => statsObserver.observe(stat));
}

// Testimoni stats animation
// Mobile testimoni navigation enhancement
function initMobileTestimoniEnhancement() {
    const testimoniNavigation = document.querySelector('.testimoni-navigation');
    const testimoniPagination = document.querySelector('.testimoni-pagination');
    
    if (window.innerWidth <= 480) {
        // Add touch feedback for mobile
        if (testimoniNavigation) {
            const buttons = testimoniNavigation.querySelectorAll('button');
            buttons.forEach(button => {
                button.addEventListener('touchstart', function() {
                    this.style.transform = 'scale(0.9)';
                });
                
                button.addEventListener('touchend', function() {
                    this.style.transform = 'scale(1)';
                });
            });
        }
        
        // Add touch feedback for pagination
        if (testimoniPagination) {
            const bullets = testimoniPagination.querySelectorAll('.swiper-pagination-bullet');
            bullets.forEach(bullet => {
                bullet.addEventListener('touchstart', function() {
                    this.style.transform = 'scale(0.9)';
                });
                
                bullet.addEventListener('touchend', function() {
                    this.style.transform = 'scale(1)';
                });
            });
        }
        
        // Add swipe gesture indicator
        const swiper = document.querySelector('.testimoni-swiper');
        if (swiper) {
            let touchStartX = 0;
            let touchEndX = 0;
            
            swiper.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
            });
            
            swiper.addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            });
            
            function handleSwipe() {
                const swipeThreshold = 50;
                const diff = touchStartX - touchEndX;
                
                if (Math.abs(diff) > swipeThreshold) {
                    if (diff > 0) {
                        // Swipe left - next slide
                        if (testimoniSwiper) {
                            testimoniSwiper.slideNext();
                        }
                    } else {
                        // Swipe right - previous slide
                        if (testimoniSwiper) {
                            testimoniSwiper.slidePrev();
                        }
                    }
                }
            }
        }
    }
}

function initTestimoniStats() {
    const testimoniStats = document.querySelectorAll('.testimoni-stats .stat-number');
    
    const animateTestimoniStats = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                
                if (finalValue.includes('.')) {
                    // Handle decimal numbers like 4.9
                    const number = parseFloat(finalValue);
                    let current = 0;
                    const increment = number / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= number) {
                            current = number;
                            clearInterval(timer);
                        }
                        target.textContent = current.toFixed(1);
                    }, 30);
                } else if (finalValue.includes('%')) {
                    // Handle percentage like 98%
                    const number = parseInt(finalValue);
                    let current = 0;
                    const increment = number / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= number) {
                            current = number;
                            clearInterval(timer);
                        }
                        target.textContent = Math.floor(current) + '%';
                    }, 30);
                } else if (finalValue.includes('+')) {
                    // Handle numbers with + like 2,500+
                    const number = parseInt(finalValue.replace(/[^0-9]/g, ''));
                    let current = 0;
                    const increment = number / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= number) {
                            current = number;
                            clearInterval(timer);
                        }
                        target.textContent = Math.floor(current).toLocaleString() + '+';
                    }, 30);
                }
            }
        });
    };
    
    const testimoniStatsObserver = new IntersectionObserver(animateTestimoniStats, { threshold: 0.5 });
    testimoniStats.forEach(stat => testimoniStatsObserver.observe(stat));
}

// Utility functions
function formatNumber(num) {
    return num.toString().padStart(2, '0');
}

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

// Responsive image loading
function loadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Error handling untuk countdown
function handleCountdownError() {
    const countdownElements = document.querySelectorAll('[id*="countdown"], [id*="Days"], [id*="Hours"], [id*="Minutes"], [id*="Seconds"]');
    
    countdownElements.forEach(element => {
        if (!element.textContent || element.textContent === 'NaN') {
            element.textContent = '00';
        }
    });
}

// Call error handling setiap 10 detik
setInterval(handleCountdownError, 10000);

// Initialize semua fungsi ketika DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    // Ensure Bootstrap doesn't interfere with custom functionality
    console.log('Bootstrap integration: Active');
    
    // Start countdown timer
    startCountdown();
    
    // Initialize testimoni carousel
    initTestimoniSwiper();
    
    // Setup form submission
    const contactForm = document.getElementById('kontakForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
    
    // Bootstrap handles navbar toggle automatically, no custom code needed
    
    // Setup scroll animations
    handleScrollAnimations();
    
    // Setup parallax effect
    handleParallax();
    
    // Setup navbar scroll effect
    handleNavbarScroll();
    
    // Add button effects
    addButtonEffects();
    
    // Initialize hero animations
    initHeroAnimations();
    
    // Initialize testimoni stats animation
    initTestimoniStats();
    
    // Initialize mobile testimoni enhancement
    initMobileTestimoniEnhancement();
    
    // Show loading animation
    showLoadingAnimation();
    
    // Close mobile menu when clicking on links - Bootstrap compatible
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navMenu = document.querySelector('.navbar-collapse');
            const hamburger = document.querySelector('.navbar-toggler');
            
            // Only close if menu is open (has 'show' class)
            if (navMenu && navMenu.classList.contains('show')) {
                // Use Bootstrap's Collapse API
                const bsCollapse = bootstrap.Collapse.getInstance(navMenu) || new bootstrap.Collapse(navMenu, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });
});

// Console log untuk debugging
console.log('JUNTRAVEL Website Loaded Successfully!');
console.log('Countdown Timer: Active');
console.log('Swiper Testimoni: Active');
console.log('Smooth Scrolling: Active');
console.log('Responsive Design: Active');
console.log('Hero Animations: Active');
console.log('Testimoni Stats Animation: Active');
