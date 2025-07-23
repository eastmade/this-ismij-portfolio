window.onload = function() {
    // Initialize Feather Icons
    // Ensure Feather Icons script is loaded before calling feather.replace()
    if (typeof feather !== 'undefined') {
        feather.replace();
    } else {
        console.error('Feather Icons library is not loaded. Skipping feather.replace().');
    }

    const portfolioData = {
        projects: [
            {
                id: 'labamu',
                name: 'Labamu (Order Management System – POS+PPOB+QRIS+OSS Mobile & Web App)',
                role: 'Senior Product Manager @ PT Tunas Digital Indonesia',
                link: 'https://labamu.co.id', // Corrected from .coid to .co.id
                problem: 'Fragmented order process and frequent cashier errors in offline-first environment',
                initiatives: [
                    'Redesigned checkout UX to minimize human error',
                    'Built real-time inventory sync between cashier and kitchen',
                    'Optimized for offline reliability and automatic sync when reconnected'
                ],
                results: {
                    label: 'Order Input Errors',
                    animatedValue: 40,
                    unit: '%',
                    prefix: '',
                    descriptionText: 'Fewer Order Input Errors, reduced complaints. Increased +25% merchant satisfaction.',
                    overallContribution: '+20% App Adoption'
                },
                logo: 'https://res.cloudinary.com/dnxqhmprj/image/upload/0dd2ff_5657d3c8e5d642a28f53e1d4fa223a7c_mv2_cemoaw.png', // Updated Labamu logo
                buttonLogo: 'https://res.cloudinary.com/dnxqhmprj/image/upload/0dd2ff_5657d3c8e5d642a28f53e1d4fa223a7c_mv2_cemoaw.png', // Updated Labamu button logo
                appScreenshots: [
                    'https://res.cloudinary.com/dnxqhmprj/image/upload/Labamu_3_iyaoct.png',
                    'https://res.cloudinary.com/dnxqhmprj/image/upload/Labamu_9_zsa9ee.png',
                    'https://res.cloudinary.com/dnxqhmprj/image/upload/Labamu_1_b7qsv4.png'
                ]
            },
            {
                id: 'appsensi-hris',
                name: 'Appsensi (HRIS Mobile & Web App)',
                role: 'Head of Product @ PT Appsensi Tiga Ribu',
                link: 'https://appsensi.com',
                problem: 'Payroll inaccuracies due to manual attendance across distributed teams',
                initiatives: [
                    'Real-Time Tracking, Seamless Reporting, Online & Offline Face Recognition-based attendance, and Integrated Payroll',
                    'Integrated approval flows with dynamic scheduling',
                    'Develop a fully integrated payroll system'
                ],
                results: {
                    label: 'Manual Errors',
                    animatedValue: 70,
                    unit: '%',
                    prefix: '',
                    descriptionText: 'Fewer Manual Errors. Significant time savings for HR operations.',
                    overallContribution: '+15% MAU Increase'
                },
                logo: 'https://res.cloudinary.com/dnxqhmprj/image/upload/Logo_Appsensi_o7eoj5.png', // Updated Appsensi logo
                buttonLogo: 'https://res.cloudinary.com/dnxqhmprj/image/upload/Logo_Appsensi_o7eoj5.png', // Updated Appsensi button logo
                appScreenshots: [
                    'https://res.cloudinary.com/dnxqhmprj/image/upload/Appsensi_3_gowxzh.png',
                    'https://res.cloudinary.com/dnxqhmprj/image/upload/Appsensi_2_kbizkw.png', // Corrected URL
                    'https://res.cloudinary.com/dnxqhmprj/image/upload/Appsensi_5_v9muk0.png'
                ]
            },
            {
                id: 'lifepal-insurance',
                name: 'Lifepal (Insurance Marketplace Web App)',
                role: 'Product Manager @ PT Lifepal Technologies Indonesia',
                link: 'https://lifepal.co.id',
                problem: 'Users struggled to find relevant insurance products',
                initiatives: [
                    'Revamped product filter & onboarding flows',
                    'Introduced personalized product suggestions based on risk profiling',
                    'Improved segmentation to present more targeted offers'
                ],
                results: {
                    label: 'Conversion',
                    animatedValue: 22,
                    unit: '%',
                    prefix: '', 
                    descriptionText: 'Increased Search-to-Conversion. Boosted qualified leads through better segmentation.',
                    overallContribution: '+30% MoM Business Growth'
                },
                logo: 'https://res.cloudinary.com/dnxqhmprj/image/upload/105680_fnytej.png', // Updated Lifepal logo
                buttonLogo: 'https://res.cloudinary.com/dnxqhmprj/image/upload/105680_fnytej.png', // Updated Lifepal button logo
                appScreenshots: [
                    'https://res.cloudinary.com/dnxqhmprj/image/upload/Lifepal_1_jyc1tb.jpg',
                    'https://res.cloudinary.com/dnxqhmprj/image/upload/Lifepal_2_vaycci.jpg',
                    'https://res.cloudinary.com/dnxqhmprj/image/upload/Lifepal_3_rkqsfl.jpg'
                ]
            }
        ],
        certifications: [
            {
                title: 'Product Management Certification',
                logo: 'https://res.cloudinary.com/dnxqhmprj/image/upload/logo_7b6caab85699ca72e06917e9bad7512c_cv0o97.png',
                link: 'https://drive.google.com/file/d/1vPOltrMTzcS942E8NtcLzKSM03VGAZXU/view?usp=sharing'
            },
            {
                title: 'Product-Led Growth Micro-Certification (PLGC)™',
                logo: 'https://res.cloudinary.com/dnxqhmprj/image/upload/Default-200x200_yqiiwl.png',
                link: 'https://drive.google.com/file/d/1wzSyvBje8dl875oGGZuKgSbTbRMzCHJG/view?usp=sharing'
            },
            {
                title: 'Alt MBA Certification',
                logo: 'https://res.cloudinary.com/dnxqhmprj/image/upload/wzardeducation_logo_xj2zfh.jpg',
                link: 'https://drive.google.com/file/d/1wsAPMV6lxmr8OBRO_vI2Eiwm1QDm9s3T/view?usp=sharing'
            },
            {
                title: 'Responsive Web Design Developer Certification',
                logo: 'https://res.cloudinary.com/dnxqhmprj/image/upload/freeCodeCamp_2_hfgh21.png',
                link: 'https://www.freecodecamp.org/certification/fcc78be4256-0d98-4547-86d2-e44908d27843/responsive-web-design' // Corrected link
            },
            {
                title: 'Sololearn Coding Certifications (HTML, CSS, JavaScript, PHP, Python Core, SQL)',
                logo: 'https://res.cloudinary.com/dnxqhmprj/image/upload/SoloLearn_logo.svg_rwka4n.png', // Updated Sololearn logo
                link: 'https://www.sololearn.com/Profile/15301386/?ref=app'
            },
            {
                title: 'TOEFL by Englishvit Certificaton',
                logo: 'https://res.cloudinary.com/dnxqhmprj/image/upload/a7G2TuhPz4u0CGxbMBq63LFYD3E9IRFWj4BH2cvL_wdvs9o.png',
                link: 'https://drive.google.com/file/d/1xFaHq9QICEppqiORqnqAhgS8oVS36nkR/view?usp=sharing'
            }
        ]
    };

    let currentChart = null;
    const chartCanvas = document.getElementById('project-chart');
    const productSelector = document.getElementById('product-selector');
    const certificationsContainer = document.getElementById('certifications-container');

    function animateNumber(element, targetValue, duration = 1500, startFrom = 0) {
        const startTime = performance.now();

        function updateCount(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentValue = Math.floor(startFrom + progress * (targetValue - startFrom));
            if (element) {
                element.textContent = currentValue;
            }

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                if (element) {
                    element.textContent = targetValue;
                }
            }
        }
        requestAnimationFrame(updateCount);
    }

    const faders = document.querySelectorAll('.fade-in-section');
    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    const yearsExperienceElement = document.getElementById('years-experience');
    if (yearsExperienceElement) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.target);
                    animateNumber(entry.target, target, 5000, 1);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(yearsExperienceElement);
    }

    function createChart(project) {
        if (currentChart) {
            currentChart.destroy();
        }

        const result = project.results;
        let data;
        
        const dangerColor = 'rgba(239, 68, 68, 0.6)';
        const successColor = 'rgba(34, 197, 94, 0.6)';

        if (project.id === 'labamu' || project.id === 'appsensi-hris') {
            data = {
                labels: ['Before', 'After'],
                datasets: [{
                    label: result.label,
                    data: [100, 100 - result.animatedValue],
                    backgroundColor: [dangerColor, successColor],
                    borderColor: [dangerColor.replace('0.6', '1'), successColor.replace('0.6', '1')],
                    borderWidth: 1,
                    borderRadius: 8
                }]
            };
        } else {
            data = {
                labels: ['Before', 'After'],
                datasets: [{
                    label: result.label,
                    data: [100, 100 + result.animatedValue],
                    backgroundColor: [dangerColor, successColor],
                    borderColor: [dangerColor.replace('0.6', '1'), successColor.replace('0.6', '1')],
                    borderWidth: 1,
                    borderRadius: 8
                }]
            };
        }

        const options = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        color: '#6B7280'
                    },
                    grid: {
                        color: 'rgba(209, 213, 219, 0.3)'
                    }
                },
                x: {
                    ticks: {
                        color: '#6B7280'
                    },
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.raw}%`;
                        }
                    },
                    backgroundColor: '#2D3748',
                    titleColor: '#FFFFFF',
                    bodyColor: '#FFFFFF',
                    borderColor: '#C05621',
                    borderWidth: 1,
                    cornerRadius: 6,
                    displayColors: false
                }
            }
        };
        
        const projectResultValueElement = document.getElementById('project-result-value');
        const projectResultUnitElement = document.getElementById('project-result-unit');
        const projectResultPrefixElement = document.getElementById('project-result-prefix');
        const projectResultDescriptionTextElement = document.getElementById('project-result-description-text');
        const projectOverallContributionElement = document.getElementById('project-overall-contribution');

        if (projectResultValueElement) {
            projectResultValueElement.textContent = '0';
            animateNumber(projectResultValueElement, result.animatedValue, 5000); 
        }
        if (projectResultUnitElement) {
            projectResultUnitElement.textContent = result.unit || '';
        }
        if (projectResultPrefixElement) {
            projectResultPrefixElement.textContent = result.prefix || '';
        }
        if (projectResultDescriptionTextElement) {
            projectResultDescriptionTextElement.textContent = result.descriptionText || '';
        }
        if (projectOverallContributionElement) {
            // FIX: Access overallContribution from project.results
            projectOverallContributionElement.textContent = result.overallContribution ? `Overall Contribution: ${result.overallContribution}` : '';
        }

        if (chartCanvas) {
            const ctx = chartCanvas.getContext('2d');
            currentChart = new Chart(ctx, {
                type: 'bar',
                data: data,
                options: options
            });
        }
    }

    // Carousel logic for individual phone mockups
    const carouselIntervals = {}; // Store intervals by ID
    const carouselStates = {}; // Store current state for each carousel

    /**
     * Starts a phone carousel animation with a specified animation type.
     * @param {string} elementId The ID of the carousel-inner element.
     * @param {Array<string>} screenshots An array of image URLs for the carousel.
     * @param {string} animationType The type of animation: 'normal', 'reverse'.
     */
    function startPhoneCarousel(elementId, screenshots, animationType = 'normal') {
        console.log(`[${elementId}] Starting carousel with ${screenshots.length} images, type: ${animationType}.`);

        // Clear any existing interval for this element
        if (carouselIntervals[elementId]) {
            clearTimeout(carouselIntervals[elementId]); // Use clearTimeout for setTimeout
            carouselIntervals[elementId] = null;
        }

        const carouselInner = document.getElementById(elementId);
        if (!carouselInner || !screenshots || screenshots.length === 0) {
            if (carouselInner) carouselInner.innerHTML = ''; // Clear content if no images
            console.warn(`[${elementId}] No carousel inner element or screenshots provided. Skipping carousel.`);
            return;
        }

        // Clear previous images
        carouselInner.innerHTML = '';
        const imagePromises = [];

        screenshots.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'App Screenshot';
            
            const imgPromise = new Promise((resolve, reject) => {
                img.onload = () => {
                    console.log(`[${elementId}] Image loaded: ${src}`);
                    resolve();
                };
                img.onerror = function() { // Use a regular function to correctly bind 'this'
                    console.error(`[${elementId}] Failed to load image: ${src}. Replacing with red placeholder.`);
                    this.src='https://placehold.co/260x540/FF0000/FFFFFF?text=Image+Load+Error'; // FIX: Added missing single quote to close the string literal
                    resolve(); // Resolve even on error to not block other images
                };
            });
            imagePromises.push(imgPromise);
            carouselInner.appendChild(img);
        });
        
        const totalImages = screenshots.length;
        if (totalImages === 0) {
            console.warn(`[${elementId}] No images to display. Stopping animation.`);
            return;
        }

        // Wait for all images to load before initializing and starting the carousel
        Promise.all(imagePromises).then(() => {
            console.log(`[${elementId}] All images loaded. Initializing carousel.`);

            // Determine direction and transform property based on elementId
            let transformProperty = 'translateX';
            let flexDirection = 'row';
            let sequenceType = animationType; 

            if (elementId === 'appsensi-phone-carousel') {
                transformProperty = 'translateY';
                flexDirection = 'column';
                // For Appsensi, user wants "Down to Up and then reverse!" which is 'reverse' sequence vertically
                sequenceType = 'reverse'; // Force 'reverse' sequence for vertical bounce
            }

            carouselInner.style.display = 'flex'; // Ensure flex display
            carouselInner.style.flexDirection = flexDirection;
            carouselInner.style.transition = 'none'; // Reset transition for initial positioning

            // Initialize carousel state
            const state = carouselStates[elementId] = {
                currentIndex: 0,
                sequence: []
            };

            // Build the sequence based on sequenceType
            if (sequenceType === 'normal') {
                // 0, 1, 2, ..., N-1, N-2, ..., 1 (bounce)
                for (let i = 0; i < totalImages; i++) {
                    state.sequence.push(i);
                }
                if (totalImages > 1) {
                    for (let i = totalImages - 2; i >= 1; i--) {
                        state.sequence.push(i);
                    }
                }
            } else if (sequenceType === 'reverse') {
                // N-1, N-2, ..., 0, 1, ..., N-2 (reverse bounce)
                for (let i = totalImages - 1; i >= 0; i--) {
                    state.sequence.push(i);
                }
                if (totalImages > 1) {
                    for (let i = 1; i <= totalImages - 2; i++) {
                        state.sequence.push(i);
                    }
                }
            } else {
                console.warn(`[${elementId}] Unknown animation type: ${animationType}. Defaulting to 'normal'.`);
                // Fallback to normal if type is unrecognized
                for (let i = 0; i < totalImages; i++) {
                    state.sequence.push(i);
                }
                if (totalImages > 1) {
                    for (let i = totalImages - 2; i >= 1; i--) {
                        state.sequence.push(i);
                    }
                }
            }

            console.log(`[${elementId}] Generated sequence:`, state.sequence);

            // Set initial transform
            carouselInner.style.transform = `${transformProperty}(0%)`;

            const slideDuration = 2000; // 2 seconds for the slide transition (matches CSS)
            const pauseDuration = 3000; // 3 seconds pause on each slide

            function animateCarousel() {
                if (state.sequence.length === 0) {
                    console.warn(`[${elementId}] Carousel sequence is empty. Stopping animation.`);
                    return;
                }

                const targetImageIndex = state.sequence[state.currentIndex];
                const newTransformValue = -(targetImageIndex * 100);

                carouselInner.style.transition = `transform ${slideDuration / 1000}s ease-in-out`;
                carouselInner.style.transform = `${transformProperty}(${newTransformValue}%)`;

                state.currentIndex = (state.currentIndex + 1) % state.sequence.length;

                // Schedule the next animation cycle after the slide transition and pause
                carouselIntervals[elementId] = setTimeout(animateCarousel, slideDuration + pauseDuration);
            }

            // Start the first animation cycle after an initial pause to show the first image
            // This initial pause allows the first image to be fully visible before any movement.
            setTimeout(() => {
                animateCarousel();
            }, pauseDuration); // Start after initial pause
        }).catch(error => {
            console.error(`[${elementId}] Error loading images for carousel:`, error);
            // Optionally display a message to the user that images failed to load
        });
    }


    function updateProductCaseStudy(projectId) {
        const project = portfolioData.projects.find(p => p.id === projectId);
        if (!project) return;

        const projectTitleElement = document.getElementById('project-title');
        const projectLogoElement = document.getElementById('project-logo');

        if (projectTitleElement) {
            projectTitleElement.textContent = project.name;
        }
        if (projectLogoElement) {
            projectLogoElement.src = project.logo || '';
            projectLogoElement.alt = `${project.name} Logo`;
            // Removed dynamic background color
            projectLogoElement.className = `w-12 h-12 mr-3 rounded-lg object-contain`;
        }
        
        const projectRoleElement = document.getElementById('project-role');
        if (projectRoleElement) {
            projectRoleElement.textContent = project.role;
        }
        
        const projectLinkElement = document.getElementById('project-link');
        if (projectLinkElement) {
            projectLinkElement.href = project.link || '#';
            projectLinkElement.textContent = project.link ? project.link.replace(/(^\w+:|^)\/\//, '') : '';
            projectLinkElement.style.display = project.link ? 'block' : 'none';
        }
        
        const projectProblemElement = document.getElementById('project-problem');
        if (projectProblemElement) {
            projectProblemElement.textContent = project.problem; // Correctly setting the problem text
        }
        
        const initiativesList = document.getElementById('project-initiatives');
        if (initiativesList) {
            initiativesList.innerHTML = '';
            project.initiatives.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                initiativesList.appendChild(li);
            });
        }

        document.querySelectorAll('#product-selector .project-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.projectId === projectId) {
                btn.classList.add('active');
            }
        });

        createChart(project);
    }
    
    if (productSelector) {
        portfolioData.projects.forEach(project => {
            const button = document.createElement('button');
            button.dataset.projectId = project.id;
            button.className = 'project-btn px-4 py-2 text-sm md:px-6 md:py-2 md:text-base font-semibold text-gray-700 bg-white rounded-lg shadow-sm hover:bg-gray-100 transition-all duration-200 flex items-center justify-center'; // Added flex classes

            if (project.buttonLogo) {
                const img = document.createElement('img');
                img.src = project.buttonLogo;
                img.alt = `${project.name} Logo`;
                // Removed dynamic background color
                img.className = `w-4 h-4 mr-2 object-contain rounded-md`;
                button.appendChild(img);
            }
            
            const span = document.createElement('span');
            span.textContent = project.name;
            button.appendChild(span);

            productSelector.appendChild(button);
        });

        productSelector.addEventListener('click', function(e) {
            let targetButton = e.target.closest('.project-btn');
            if (targetButton) {
                const projectId = targetButton.dataset.projectId;
                updateProductCaseStudy(projectId);
            }
        });
    }

    // Function to load certifications
    function loadCertifications() {
        if (certificationsContainer && portfolioData.certifications) {
            certificationsContainer.innerHTML = ''; // Clear existing content
            portfolioData.certifications.forEach(cert => {
                const certCard = document.createElement('div');
                certCard.className = 'cert-card bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105';
                certCard.onclick = () => window.open(cert.link, '_blank'); // Make the entire card clickable

                const certLogo = document.createElement('img');
                certLogo.src = cert.logo;
                certLogo.alt = `${cert.title} Logo`;
                certLogo.className = 'w-24 h-24 object-contain mb-4 rounded-lg cert-logo'; // Added cert-logo class for grayscale effect
                certLogo.onerror = function() {
                    this.onerror=null; // Prevent infinite loop if placeholder also fails
                    this.src='https://placehold.co/96x96/D1D5DB/4B5563?text=Logo+Error'; // Gray placeholder
                };

                certCard.appendChild(certLogo); // Append logo directly to card

                const certTitle = document.createElement('p');
                certTitle.className = 'text-lg font-semibold text-gray-800 text-center';
                certTitle.textContent = cert.title;
                certCard.appendChild(certTitle);

                certificationsContainer.appendChild(certCard);
            });
        }
    }

    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const tabName = button.dataset.tab;
            tabPanes.forEach(pane => {
                if (pane.id === `${tabName}-content`) {
                    pane.classList.remove('hidden');
                } else {
                    pane.classList.add('hidden');
                }
            });
        });
    });

    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const contentWrapper = document.getElementById('content-wrapper');
    const backMobileMenuBtn = document.getElementById('back-mobile-menu-btn'); // Get the new back button
    const openContactModalMobileBtn = document.getElementById('open-contact-modal-mobile'); // New button for mobile menu

    function toggleMobileMenu() {
        mobileMenu.classList.toggle('open');
        menuOverlay.classList.toggle('show');
        contentWrapper.classList.toggle('dimmed');
        document.body.classList.toggle('overflow-hidden'); // Prevent scrolling body when menu is open
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMobileMenu);
    }
    if (menuOverlay) {
        menuOverlay.addEventListener('click', toggleMobileMenu);
    }
    // Add event listener for the new back button
    if (backMobileMenuBtn) {
        backMobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            // Close menu after clicking a link
            if (mobileMenu.classList.contains('open')) {
                toggleMobileMenu();
            }
        });
    });

    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    const floatingAudioContainer = document.getElementById('floating-audio-container');
    const floatingAudioBtn = document.getElementById('floating-audio-btn');
    const backgroundAudio = document.getElementById('background-audio');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const volumeSlider = document.getElementById('volume-slider');

    function updateSliderFill(slider) {
        const value = (slider.value - slider.min) / (slider.max - slider.min);
        slider.style.backgroundImage = `linear-gradient(to right, #C05621 0%, #C05621 ${value * 100}%, #D1D1D1 ${value * 100}%, #D1D1D1 100%)`;
    }

    if (floatingAudioContainer) {
        floatingAudioContainer.classList.add('show'); // Always show if element exists, visibility handled by scroll listener

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                floatingAudioContainer.classList.add('show');
            } else {
                floatingAudioContainer.classList.remove('show');
            }
        });

        if (floatingAudioBtn) {
            floatingAudioBtn.addEventListener('click', () => {
                if (backgroundAudio.paused) {
                    backgroundAudio.play();
                    playIcon.classList.add('hidden');
                    pauseIcon.classList.remove('hidden');
                } else {
                    backgroundAudio.pause();
                    playIcon.classList.remove('hidden');
                    pauseIcon.classList.add('hidden');
                }
            });
        }

        if (backgroundAudio) {
            backgroundAudio.addEventListener('play', () => {
                if (playIcon) playIcon.classList.add('hidden');
                if (pauseIcon) pauseIcon.classList.remove('hidden');
            });

            backgroundAudio.addEventListener('pause', () => {
                if (playIcon) playIcon.classList.remove('hidden');
                if (pauseIcon) pauseIcon.classList.add('hidden');
            });

            if (volumeSlider) {
                backgroundAudio.volume = parseFloat(volumeSlider.value);
                updateSliderFill(volumeSlider);

                volumeSlider.addEventListener('input', () => {
                    backgroundAudio.volume = parseFloat(volumeSlider.value);
                    updateSliderFill(volumeSlider);
                });
            }

            // Attempt autoplay, but handle if blocked
            backgroundAudio.play().catch(error => {
                console.log('Autoplay was prevented. User must interact to play audio.', error);
                if (playIcon) playIcon.classList.remove('hidden');
                if (pauseIcon) pauseIcon.classList.add('hidden');
            });
        }
    }

    const openContactModalBtn = document.getElementById('open-contact-modal');
    const contactModalOverlay = document.getElementById('contact-modal-overlay');
    const modalCloseBtn = document.getElementById('modal-close-btn'); 
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    const contactNameInput = document.getElementById('contact-name');
    const contactEmailInput = document.getElementById('contact-email');
    const contactMessageInput = document.getElementById('contact-message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error'); // Corrected ID

    function showModal() {
        console.log('Showing contact modal.');
        if (contactModalOverlay) {
            contactModalOverlay.classList.add('show');
        }
        if (contactForm) {
            contactForm.style.display = 'block'; 
        }
        if (contactForm) {
            contactForm.reset();
        }
        if (formFeedback) {
            formFeedback.classList.remove('show', 'success', 'error');
            formFeedback.textContent = '';
        }
        if (nameError) { nameError.classList.remove('show'); }
        if (emailError) { emailError.classList.remove('show'); }
        if (messageError) { messageError.classList.remove('show'); }
        if (contactNameInput) { contactNameInput.classList.remove('invalid'); }
        if (contactEmailInput) { contactEmailInput.classList.remove('invalid'); }
        if (contactMessageInput) { contactMessageInput.classList.remove('invalid'); }
    }

    function hideModal() {
        console.log('Hiding contact modal.');
        if (contactModalOverlay) {
            contactModalOverlay.classList.remove('show');
        }
    }

    if (openContactModalBtn) {
        openContactModalBtn.addEventListener('click', showModal);
    }
    // Event listener for the new mobile contact modal button
    if (openContactModalMobileBtn) {
        openContactModalMobileBtn.addEventListener('click', () => {
            if (mobileMenu.classList.contains('open')) {
                toggleMobileMenu(); // Close mobile menu first
            }
            showModal(); // Then open the contact modal
        });
    }
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', hideModal);
    }

    if (contactModalOverlay) {
        contactModalOverlay.addEventListener('click', (e) => {
            if (e.target === contactModalOverlay) {
                hideModal();
            }
        });
    }

    function validateForm() {
        let isValid = true;

        if (contactNameInput && contactNameInput.value.trim() === '') {
            if (nameError) {
                nameError.textContent = 'Name cannot be empty.';
                nameError.classList.add('show');
            }
            if (contactNameInput) { contactNameInput.classList.add('invalid'); }
            isValid = false;
        } else {
            if (nameError) { nameError.classList.remove('show'); }
            if (contactNameInput) { contactNameInput.classList.remove('invalid'); }
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (contactEmailInput && contactEmailInput.value.trim() === '') {
            if (emailError) {
                emailError.textContent = 'Email cannot be empty.';
                emailError.classList.add('show');
            }
            if (contactEmailInput) { contactEmailInput.classList.add('invalid'); }
            isValid = false;
        } else if (contactEmailInput && !emailRegex.test(contactEmailInput.value.trim())) {
            if (emailError) {
                emailError.textContent = 'Invalid email format.';
                emailError.classList.add('show');
            }
            if (contactEmailInput) { contactEmailInput.classList.add('invalid'); }
            isValid = false;
        } else {
            if (emailError) { emailError.classList.remove('show'); }
            if (contactEmailInput) { contactEmailInput.classList.remove('invalid'); }
        }

        if (contactMessageInput && contactMessageInput.value.trim() === '') {
            if (messageError) {
                messageError.textContent = 'Message cannot be empty.';
                messageError.classList.add('show');
            }
            if (contactMessageInput) { contactMessageInput.classList.add('invalid'); }
            isValid = false;
        } else if (contactMessageInput && contactMessageInput.value.trim().length < 10) {
            if (messageError) {
                messageError.textContent = 'Message is too short (minimum 10 characters).';
                messageError.classList.add('show');
            }
            if (contactMessageInput) { contactMessageInput.classList.add('invalid'); }
            isValid = false;
        } else {
            if (messageError) { messageError.classList.remove('show'); }
            if (contactMessageInput) { contactMessageInput.classList.remove('invalid'); }
        }

        console.log('Form validation result:', isValid);
        return isValid;
    }

    if (contactNameInput) {
        contactNameInput.addEventListener('input', () => {
            if (contactNameInput.value.trim() !== '') {
                if (nameError) { nameError.classList.remove('show'); }
                contactNameInput.classList.remove('invalid');
            }
        });
    }
    if (contactEmailInput) {
        contactEmailInput.addEventListener('input', () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (contactEmailInput.value.trim() !== '' && emailRegex.test(contactEmailInput.value.trim())) {
                if (emailError) { emailError.classList.remove('show'); }
                contactEmailInput.classList.remove('invalid');
            }
        });
    }
    if (contactMessageInput) {
        contactMessageInput.addEventListener('input', () => {
            if (contactMessageInput.value.trim() !== '' && contactMessageInput.value.trim().length >= 10) {
                if (messageError) { messageError.classList.remove('show'); }
                contactMessageInput.classList.remove('invalid');
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (!validateForm()) {
                console.log('Form validation failed.');
                if (formFeedback) {
                    formFeedback.textContent = 'Please correct the errors in the form.';
                    formFeedback.classList.add('show', 'error');
                    formFeedback.classList.remove('success');
                }
                return;
            }

            console.log('Form validation passed. Attempting to send message...');
            if (formFeedback) {
                formFeedback.textContent = 'Sending message...';
                formFeedback.classList.add('show');
                formFeedback.classList.remove('success', 'error');
            }

            const submitButton = contactForm.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
            }

            const formData = new FormData(contactForm);
            const object = {};
            formData.forEach((value, key) => object[key] = value);
            const json = JSON.stringify(object);

            try {
                const response = await fetch('https://formspree.io/f/mgvzewna', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                });

                if (response.ok) {
                    console.log('Formspree response OK. Displaying success message.');
                    if (contactForm) { contactForm.style.display = 'none'; }
                    if (formFeedback) {
                        formFeedback.textContent = 'Thank you for reaching out. Your message has been successfully sent and I will respond shortly.';
                        formFeedback.classList.add('show', 'success');
                        formFeedback.classList.remove('error');
                    }
                    if (submitButton) {
                        submitButton.disabled = false;
                        submitButton.textContent = 'Send Message';
                    }

                    setTimeout(() => {
                        console.log('Hiding modal after success.');
                        hideModal();
                        if (contactForm) { contactForm.style.display = 'block'; }
                        if (contactForm) { contactForm.reset(); }
                    }, 4000);
                } else {
                    const data = await response.json();
                    console.error('Formspree response NOT OK:', response.status, data);
                    if (formFeedback) {
                        formFeedback.textContent = data.error || 'An error occurred while sending the message. Please try again.';
                        formFeedback.classList.add('show', 'error');
                        formFeedback.classList.remove('success');
                    }
                    if (submitButton) {
                        submitButton.disabled = false;
                        submitButton.textContent = 'Send Message';
                    }
                }
            } catch (error) {
                console.error('Network or fetch error:', error);
                if (formFeedback) {
                    formFeedback.textContent = 'A network error occurred. Please try again.';
                    formFeedback.classList.add('show', 'error');
                    formFeedback.classList.remove('success');
                }
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = 'Send Message';
                }
            }
        });
    }

    updateProductCaseStudy(portfolioData.projects[0].id);
    document.querySelector('#product-selector .project-btn').classList.add('active');

    // Initial load for "Product Visuals" - start carousels with specified animation types
    startPhoneCarousel('labamu-phone-carousel', portfolioData.projects[0].appScreenshots, 'normal'); // Horizontal bounce
    startPhoneCarousel('appsensi-phone-carousel', portfolioData.projects[1].appScreenshots, 'reverse'); // Vertical bounce (Down to Up and then reverse)
    startPhoneCarousel('lifepal-phone-carousel', portfolioData.projects[2].appScreenshots, 'reverse'); // Horizontal reverse bounce

    // Load certifications on page load
    loadCertifications();

    const approachTabBtn = document.querySelector('.tab-btn[data-tab="approach"]');
    if (approachTabBtn) {
        approachTabBtn.classList.add('active');
    }
};
