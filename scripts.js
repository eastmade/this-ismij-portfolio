<script>
        window.onload = function() {
            const portfolioData = {
                projects: [
                    {
                        id: 'labamu',
                        name: 'Labamu (Order Management System – POS+PPOB+QRIS+OSS Mobile & Web App)',
                        role: 'Senior Product Manager @ PT Tunas Digital Indonesia',
                        link: 'https://labamu.co.id',
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
                        }
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
                        }
                    },
                    {
                        id: 'appsensi-insurance',
                        name: 'Lifepal (Insurance Product Marketplace Web App)',
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
                        }
                    }
                ]
            };

            let currentChart = null;
            const chartCanvas = document.getElementById('project-chart'); // Get the canvas element
            const projectSelector = document.getElementById('project-selector');

            // Function to animate numbers in the Hero Section
            function animateNumber(element, targetValue, duration = 1500, startFrom = 0) {
                const startTime = performance.now();

                function updateCount(currentTime) {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    const currentValue = Math.floor(startFrom + progress * (targetValue - startFrom));
                    if (element) { // Add null check
                        element.textContent = currentValue;
                    }

                    if (progress < 1) {
                        requestAnimationFrame(updateCount);
                    } else {
                        if (element) { // Add null check
                            element.textContent = targetValue;
                        }
                    }
                }
                requestAnimationFrame(updateCount);
            }

            // Intersection Observer for fade-in sections
            const faders = document.querySelectorAll('.fade-in-section');
            const appearOptions = {
                threshold: 0.2, // When 20% of the section is visible
                rootMargin: "0px 0px -50px 0px" // Slightly delay appearance
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

            // Intersection Observer for Years of Experience
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

            // Function to create and update the Chart.js chart
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
                    projectOverallContributionElement.textContent = result.overallContribution ? `Overall Contribution: ${result.overallContribution}` : '';
                }

                if (chartCanvas) { // Add null check for chartCanvas
                    const ctx = chartCanvas.getContext('2d');
                    currentChart = new Chart(ctx, {
                        type: 'bar',
                        data: data,
                        options: options
                    });
                }
            }

            // Function to update project detail view
            function updateProjectView(projectId) {
                const project = portfolioData.projects.find(p => p.id === projectId);
                if (!project) return;

                const projectTitleElement = document.getElementById('project-title');
                if (projectTitleElement) {
                    projectTitleElement.textContent = project.name;
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
                    projectProblemElement.textContent = project.problem;
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

                document.querySelectorAll('.project-btn').forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.dataset.projectId === projectId) {
                        btn.classList.add('active');
                    }
                });

                createChart(project);
            }
            
            // Initialize project buttons
            const projectSelectorElement = document.getElementById('project-selector');
            if (projectSelectorElement) { // Add null check for projectSelectorElement
                portfolioData.projects.forEach(project => {
                    const button = document.createElement('button');
                    button.textContent = project.name;
                    button.dataset.projectId = project.id;
                    button.className = 'project-btn px-4 py-2 text-sm md:px-6 md:py-2 md:text-base font-semibold text-gray-700 bg-white rounded-lg shadow-sm hover:bg-gray-100 transition-all duration-200';
                    projectSelectorElement.appendChild(button);
                });

                // Event listener for project selection
                projectSelectorElement.addEventListener('click', function(e) {
                    let targetButton = e.target.closest('.project-btn');
                    if (targetButton) {
                        const projectId = targetButton.dataset.projectId;
                        updateProjectView(projectId);
                    }
                });
            }


            // Logic for Approach/Tools Tabs
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

            // Mobile menu toggle
            const menuBtn = document.getElementById('menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            if (menuBtn && mobileMenu) { // Add null checks
                menuBtn.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                });
            }
            
            document.querySelectorAll('#mobile-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    if (mobileMenu) { // Add null check
                        mobileMenu.classList.add('hidden');
                    }
                });
            });

            // Back to Top Button Logic
            const backToTopButton = document.getElementById('back-to-top');

            if (backToTopButton) { // Add null check
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 300) { // Show button after scrolling 300px down
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

            // Contact Modal Logic (Simplified for Google Forms)
            const openContactModalBtn = document.getElementById('open-contact-modal');
            const contactModalOverlay = document.getElementById('contact-modal-overlay');
            const modalCloseBtn = document.getElementById('modal-close-btn');
            // Form and feedback elements are handled by Google Form itself now,
            // so their direct manipulation from this script is removed.

            function showModal() {
                console.log('Showing contact modal.');
                if (contactModalOverlay) { // Add null check
                    contactModalOverlay.classList.add('show');
                    // Reset iframe src to reload the Google Form and clear it
                    const iframe = contactModalOverlay.querySelector('iframe');
                    if (iframe) {
                        iframe.src = iframe.src; // Reloads the iframe
                    }
                }
            }

            function hideModal() {
                console.log('Hiding contact modal.');
                if (contactModalOverlay) { // Add null check
                    contactModalOverlay.classList.remove('show');
                }
            }

            if (openContactModalBtn) { // Add null check
                openContactModalBtn.addEventListener('click', showModal);
            }
            if (modalCloseBtn) { // Add null check
                modalCloseBtn.addEventListener('click', hideModal);
            }

            // Close modal if clicking outside the content
            if (contactModalOverlay) { // Add null check
                contactModalOverlay.addEventListener('click', (e) => {
                    if (e.target === contactModalOverlay) {
                        hideModal();
                    }
                });
            }

            // --- Removed Formspree specific validation and submission logic ---
            // The form validation and submission is now handled by Google Forms directly within the iframe.

            // Initial load
            updateProjectView(portfolioData.projects[0].id);
            const approachTabBtn = document.querySelector('.tab-btn[data-tab="approach"]');
            if (approachTabBtn) {
                approachTabBtn.classList.add('active');
            }
        };
    </script>