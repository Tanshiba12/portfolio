document.addEventListener('DOMContentLoaded', function() {
    
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    const navbar = document.querySelector('.navbar');
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('shadow-lg');
            scrollToTopBtn.classList.add('show');
        } else {
            navbar.classList.remove('shadow-lg');
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const navbarHeight = navbar.offsetHeight;
                    const targetPosition = targetSection.offsetTop - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                        bsCollapse.hide();
                    }
                }
            }
        });
    });

    /// Observer for scroll animations ///
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                
                if (entry.target.classList.contains('skill-bar-item')) {
                    const progressBar = entry.target.querySelector('.progress-bar');
                    if (progressBar && !progressBar.classList.contains('animated')) {
                        const width = progressBar.style.width;
                        progressBar.style.width = '0';
                        setTimeout(() => {
                            progressBar.style.width = width;
                            progressBar.classList.add('animated');
                        }, 100);
                    }
                }

                if (entry.target.classList.contains('language-item')) {
                    const progressBar = entry.target.querySelector('.progress-bar');
                    if (progressBar && !progressBar.classList.contains('animated')) {
                        const width = progressBar.style.width;
                        progressBar.style.width = '0';
                        setTimeout(() => {
                            progressBar.style.width = width;
                            progressBar.classList.add('animated');
                        }, 100);
                    }
                }
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.skill-category, .experience-card, .education-card, .activity-card, .skill-bar-item, .language-item, .strength-card, .hobby-card');
    animateElements.forEach(element => observer.observe(element));

    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.2 });

    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        timelineObserver.observe(item);
    });

    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(20px)';
        setTimeout(() => {
            btn.style.transition = 'all 0.6s ease';
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
        }, 500 + (index * 150));
    });

    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    navbar.style.transition = 'transform 0.3s ease';

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const navbarHeight = navbar.offsetHeight;
                    const targetPosition = target.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    const skillBadges = document.querySelectorAll('.skill-badge');
    skillBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotate(360deg)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });

    const cards = document.querySelectorAll('.experience-card, .education-card, .activity-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderLeft = '4px solid var(--primary-color)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.borderLeft = 'none';
        });
    });

    console.log('%c Portfolio Website Loaded Successfully! ', 'background: #6366f1; color: white; font-size: 16px; padding: 10px;');
    console.log('%c Created by Tanshiba Naorin Prapti ', 'background: #1e293b; color: white; font-size: 12px; padding: 5px;');

    /// Gallery Lightbox Functionality ///
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxVideo = document.getElementById('lightbox-video');
    const lightboxVideoSource = document.getElementById('lightbox-video-source');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');

    let currentIndex = 0;
    const galleryItemsArray = Array.from(galleryItems);

    function openLightbox(index) {
        currentIndex = index;
        const item = galleryItemsArray[currentIndex];
        const isVideo = item.classList.contains('gallery-video');

        if (isVideo) {
            const videoSrc = item.querySelector('video source').src;
            lightboxVideoSource.src = videoSrc;
            lightboxVideo.load();
            lightboxVideo.style.display = 'block';
            lightboxImg.style.display = 'none';
        } else {
            const imgSrc = item.querySelector('img').src;
            lightboxImg.src = imgSrc;
            lightboxImg.style.display = 'block';
            lightboxVideo.style.display = 'none';
        }

        const caption = item.querySelector('.gallery-info h5').textContent + ' - ' + 
                       item.querySelector('.gallery-info p').textContent;
        lightboxCaption.textContent = caption;

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
        lightboxVideo.pause();
        lightboxVideo.src = '';
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % galleryItemsArray.length;
        openLightbox(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + galleryItemsArray.length) % galleryItemsArray.length;
        openLightbox(currentIndex);
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', showNext);
    lightboxPrev.addEventListener('click', showPrev);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Store original keyboard handler
    const originalKeydownHandler = (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    };
    
    document.addEventListener('keydown', originalKeydownHandler);

    /// Video Hover Autoplay ///
    const galleryVideos = document.querySelectorAll('.gallery-video');
    
    galleryVideos.forEach(videoItem => {
        const video = videoItem.querySelector('video');
        
        videoItem.addEventListener('mouseenter', () => {
            video.play().catch(err => console.log('Video play failed:', err));
        });
        
        videoItem.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    });

    /// Project Gallery Item Click ///
    const projectGalleryItems = document.querySelectorAll('.project-gallery-item');
    
    projectGalleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            lightboxImg.src = imgSrc;
            lightboxImg.style.display = 'block';
            lightboxVideo.style.display = 'none';
            
            const altText = item.querySelector('img').alt;
            lightboxCaption.textContent = altText;
            
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    /// Vertical Scroll Navigation ///
    const verticalNav = document.getElementById('verticalNav');
    const navItems = document.querySelectorAll('.vertical-nav-item');
    const sections = document.querySelectorAll('section[id]');

    // Show/hide vertical nav on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            verticalNav.classList.add('show');
        } else {
            verticalNav.classList.remove('show');
        }

        // Update active nav item based on scroll position
        let currentSection = '';
        let scrollProgress = 0;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        // Calculate overall scroll progress for the line
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
        verticalNav.style.setProperty('--scroll-progress', scrollPercentage + '%');

        // Update active states
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.section === currentSection) {
                item.classList.add('active');
            }
        });
    });

    // Click navigation
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const sectionId = item.dataset.section;
            const targetSection = document.getElementById(sectionId);
            
            if (targetSection) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /// Experience Gallery Click Handler ///
    const experienceGalleryItems = document.querySelectorAll('.experience-gallery-item');
    
    // Create mapping of experience galleries to all related images
    const experienceImageMap = {
        'internship': [
            'assets/img/iqa_chatbot/1 Welcome Page.png',
            'assets/img/iqa_chatbot/2 Login Page showing to login as a visitor.png',
            'assets/img/iqa_chatbot/2.1 visitor dashboard showing the chatbot UI.png',
            'assets/img/iqa_chatbot/3 Asking questions to the chatbot.png',
            'assets/img/iqa_chatbot/4 Asking more questions to the chatbot.png',
            'assets/img/iqa_chatbot/9 Dashboard of System admin initially showing total users active usrs and uploaded documents.png',
            'assets/img/iqa_chatbot/10 Document manager loading the documents.png',
            'assets/img/iqa_chatbot/12 Uploading a random document or pdf.png',
            'assets/img/iqa_chatbot/19 Activity monitor loading users.png',
            'assets/img/iqa_chatbot/22 System Admin settings page.png',
            'assets/img/iqa_chatbot/24 the dashboard automatriclly updated after the 4th document was succefuly uploaded to the db.png'
        ],
        'bta': [
            'assets/img/BTA/WhatsApp Image 2025-11-24 at 2.42.09 PM.jpeg',
            'assets/img/BTA/WhatsApp Image 2025-11-24 at 2.42.09 PM (2).jpeg',
            'assets/img/BTA/WhatsApp Image 2025-11-24 at 2.42.09 PM (3).jpeg',
            'assets/img/BTA/WhatsApp Image 2025-11-24 at 2.42.10 PM.jpeg',
            'assets/img/BTA/WhatsApp Image 2025-11-24 at 2.42.10 PM (1).jpeg',
            'assets/img/BTA/WhatsApp Image 2025-11-24 at 2.42.11 PM.jpeg',
            'assets/img/BTA/WhatsApp Image 2025-11-24 at 2.42.12 PM.jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.14 PM.jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.15 PM.jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.16 PM.jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.17 PM (1).jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.18 PM.jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.19 PM.jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.19 PM (2).jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.20 PM.jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.21 PM.jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.22 PM.jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.23 PM.jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.24 PM.jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.24 PM (1).jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.25 PM.jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.26 PM.jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.27 PM.jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.28 PM.jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.29 PM.jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.30 PM.jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.31 PM.jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.32 PM.jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.33 PM.jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.34 PM.jpeg',
            'assets/img/bta_events/WhatsApp Image 2025-11-24 at 2.39.35 PM.jpeg'
        ],
        'ege': [
            'assets/img/EGE/WhatsApp Image 2025-11-24 at 2.39.36 PM.jpeg',
            'assets/img/EGE/WhatsApp Image 2025-11-24 at 2.39.36 PM (1).jpeg',
            'assets/img/EGE/WhatsApp Image 2025-11-24 at 2.39.36 PM (2).jpeg'
        ],
        'jdt': [
            'assets/img/jdt/jdt_kad.jpg'
        ],
        'apcw': [
            'assets/img/persada/Persada_johor_kad.jpg',
            'assets/img/persada/WhatsApp Image 2025-11-24 at 2.38.45 PM.jpeg',
            'assets/img/persada/WhatsApp Image 2025-11-24 at 2.38.46 PM.jpeg',
            'assets/img/persada/WhatsApp Image 2025-11-24 at 2.38.46 PM (1).jpeg',
            'assets/img/persada/WhatsApp Image 2025-11-24 at 2.38.46 PM (2).jpeg',
            'assets/img/persada/WhatsApp Image 2025-11-24 at 2.38.47 PM.jpeg',
            'assets/img/persada/WhatsApp Image 2025-11-24 at 2.38.47 PM (1).jpeg',
            'assets/img/persada/WhatsApp Image 2025-11-24 at 2.38.47 PM (2).jpeg',
            'assets/img/persada/WhatsApp Image 2025-11-24 at 2.38.48 PM.jpeg',
            'assets/img/persada/WhatsApp Image 2025-11-24 at 2.38.48 PM (1).jpeg',
            'assets/img/persada/WhatsApp Image 2025-11-24 at 2.38.48 PM (2).jpeg',
            'assets/img/persada/WhatsApp Image 2025-11-24 at 2.38.48 PM (3).jpeg',
            'assets/img/persada/WhatsApp Image 2025-11-24 at 2.38.49 PM.jpeg'
        ]
    };

    experienceGalleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const experienceType = item.dataset.experience;
            const images = experienceImageMap[experienceType];
            
            if (!images || images.length === 0) return;
            
            // Check if it's a video item
            const isVideo = item.classList.contains('experience-gallery-video');
            
            if (isVideo && experienceType === 'jdt') {
                // For JDT video, open it directly
                const videoSrc = 'assets/img/jdt/JDT_finals.mp4';
                lightboxVideoSource.src = videoSrc;
                lightboxVideo.load();
                lightboxVideo.style.display = 'block';
                lightboxImg.style.display = 'none';
                lightboxCaption.textContent = 'JDT Finals Highlights';
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
                window.currentExperienceGallery = null;
            } else {
                // For images, open the first image
                const imgSrc = item.querySelector('img')?.src || images[0];
                lightboxImg.src = imgSrc;
                lightboxImg.style.display = 'block';
                lightboxVideo.style.display = 'none';
                
                // Create gallery array for this experience
                window.currentExperienceGallery = images;
                
                // Find the correct index
                let foundIndex = -1;
                const clickedSrc = imgSrc.split('/').pop(); // Get filename only
                
                for (let i = 0; i < images.length; i++) {
                    const galleryImgName = images[i].split('/').pop();
                    if (clickedSrc === galleryImgName) {
                        foundIndex = i;
                        break;
                    }
                }
                
                window.currentGalleryIndex = foundIndex !== -1 ? foundIndex : 0;
                
                lightboxCaption.textContent = `Image ${window.currentGalleryIndex + 1} of ${images.length}`;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Enhanced lightbox navigation for experience galleries
    const originalShowNext = () => {
        currentIndex = (currentIndex + 1) % galleryItemsArray.length;
        openLightbox(currentIndex);
    };
    
    const originalShowPrev = () => {
        currentIndex = (currentIndex - 1 + galleryItemsArray.length) % galleryItemsArray.length;
        openLightbox(currentIndex);
    };
    
    const originalCloseLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
        lightboxVideo.pause();
        lightboxVideo.src = '';
        window.currentExperienceGallery = null;
        window.currentGalleryIndex = 0;
    };

    // Override navigation functions
    const enhancedShowNext = () => {
        if (window.currentExperienceGallery) {
            window.currentGalleryIndex = (window.currentGalleryIndex + 1) % window.currentExperienceGallery.length;
            lightboxImg.src = window.currentExperienceGallery[window.currentGalleryIndex];
            lightboxCaption.textContent = `Image ${window.currentGalleryIndex + 1} of ${window.currentExperienceGallery.length}`;
        } else {
            originalShowNext();
        }
    };

    const enhancedShowPrev = () => {
        if (window.currentExperienceGallery) {
            window.currentGalleryIndex = (window.currentGalleryIndex - 1 + window.currentExperienceGallery.length) % window.currentExperienceGallery.length;
            lightboxImg.src = window.currentExperienceGallery[window.currentGalleryIndex];
            lightboxCaption.textContent = `Image ${window.currentGalleryIndex + 1} of ${window.currentExperienceGallery.length}`;
        } else {
            originalShowPrev();
        }
    };

    // Update lightbox controls with enhanced functions
    lightboxNext.removeEventListener('click', showNext);
    lightboxPrev.removeEventListener('click', showPrev);
    lightboxClose.removeEventListener('click', closeLightbox);
    
    lightboxNext.addEventListener('click', enhancedShowNext);
    lightboxPrev.addEventListener('click', enhancedShowPrev);
    lightboxClose.addEventListener('click', originalCloseLightbox);
    
    // Update click outside handler
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            originalCloseLightbox();
        }
    });
    
    // Update keyboard handler
    document.removeEventListener('keydown', originalKeydownHandler);
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') originalCloseLightbox();
        if (e.key === 'ArrowRight') enhancedShowNext();
        if (e.key === 'ArrowLeft') enhancedShowPrev();
    });
});
