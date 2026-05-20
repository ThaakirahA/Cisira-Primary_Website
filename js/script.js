
function showModal(message) {
    document.getElementById('modalMessage').textContent = message;
    document.getElementById('modalOverlay').style.display = 'block';
    document.getElementById('messageModal').classList.add('show');
}

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('messageModal').classList.remove('show');
}

document.addEventListener('DOMContentLoaded', function() {
    
    
    const form = document.getElementById('messageForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                
                showModal('Thank you for your message, ' + name + '! We will get back to you soon.');
                form.reset();
            } else {
                showModal('Please fill in all fields.');
            }
        });
    }

    
    // Team Animation and Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');
    const teamModal = document.getElementById('teamModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.getElementById('closeModal');
    const teamData = document.getElementById('teamData');
    
    // Animation buttons
    const animateTopRow = document.getElementById('animateTopRow');
    const animateBottomRow = document.getElementById('animateBottomRow');
    const animateAll = document.getElementById('animateAll');
    
    // Check if elements exist
    if (!teamModal || !modalBody) return;

    // Function to open modal with team member details
    function openModal(memberId) {
        const memberData = teamData.querySelector(`[data-member="${memberId}"]`);
        if (memberData) {
            modalBody.innerHTML = memberData.innerHTML;
            teamModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    // Function to close modal
    function closeModalFunc() {
        teamModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Event listeners for view details buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const memberId = button.getAttribute('data-member');
            openModal(memberId);
        });
    });

    // Event listener for clicking on team members
    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            const memberId = member.getAttribute('data-member');
            openModal(memberId);
        });
    });

    // Event listener for close modal button
    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
    }

    // Close modal when clicking outside
    teamModal.addEventListener('click', (e) => {
        if (e.target === teamModal) {
            closeModalFunc();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModalFunc();
        }
    });

    // Animation Functions
    function animateRow(rowNumber) {
        const start = (rowNumber - 1) * 3;
        const end = start + 3;
        
        for (let i = start; i < end; i++) {
            if (teamMembers[i]) {
                // Reset animation
                teamMembers[i].style.animation = 'none';
                void teamMembers[i].offsetWidth; // Trigger reflow
                
                // Add animation
                teamMembers[i].style.animation = 'pulse 0.5s ease';
                teamMembers[i].classList.add('animating');
                
                setTimeout(() => {
                    teamMembers[i].classList.remove('animating');
                }, 500);
            }
        }
    }

    function animateAllMembers() {
        teamMembers.forEach((member, index) => {
            // Reset animation
            member.style.animation = 'none';
            void member.offsetWidth; // Trigger reflow
            
            // Add animation with delay
            setTimeout(() => {
                member.style.animation = 'pulse 0.5s ease';
                member.classList.add('animating');
                
                setTimeout(() => {
                    member.classList.remove('animating');
                }, 500);
            }, index * 100);
        });
    }

    // Event listeners for animation buttons if they exist
    if (animateTopRow) {
        animateTopRow.addEventListener('click', () => animateRow(1));
    }
    
    if (animateBottomRow) {
        animateBottomRow.addEventListener('click', () => animateRow(2));
    }
    
    if (animateAll) {
        animateAll.addEventListener('click', animateAllMembers);
    }

    // Initial animation when page loads
    setTimeout(() => {
        if (animateAll) animateAllMembers();
    }, 1000);

    // Enhanced hover effect
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });

        member.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
});
   
    const sectionLinks = document.querySelectorAll('.section-nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    
    sectionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            
            sectionLinks.forEach(l => l.classList.remove('active'));
            contentSections.forEach(s => s.classList.remove('active'));
            
          
            this.classList.add('active');
            
            
            const targetSection = this.getAttribute('data-section');
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');
            }
            
            
            const navElement = document.querySelector('.section-nav');
            if (navElement) {
                window.scrollTo({
                    top: navElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    const policyNavItems = document.querySelectorAll('.policy-nav-item');
    const policySections = document.querySelectorAll('.policy-content-section');
    
    policyNavItems.forEach(item => {
        item.addEventListener('click', function() {
            
            policyNavItems.forEach(i => i.classList.remove('active'));
            policySections.forEach(s => s.classList.remove('active'));
            
            
            this.classList.add('active');
            
            
            const policyType = this.getAttribute('data-policy');
            const policyElement = document.getElementById(`policy-${policyType}`);
            if (policyElement) {
                policyElement.classList.add('active');
            }
        });
    });
    
    
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = content.classList.contains('active');
            
            
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.classList.remove('active');
            });
            document.querySelectorAll('.accordion-button').forEach(btn => {
                btn.classList.remove('active');
            });
            
            
            if (!isActive) {
                content.classList.add('active');
                this.classList.add('active');
            }
        });
    });
    
   
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const target = parseInt(stat.getAttribute('data-count'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        stat.textContent = target;
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current);
                    }
                }, 16);
                
                observer.unobserve(stat);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
});

        document.addEventListener('DOMContentLoaded', function() {
           
            const testimonialsTrack = document.getElementById('testimonialsTrack');
            const testimonialDots = document.querySelectorAll('.testimonial-dot');
            const prevButton = document.getElementById('prevTestimonial');
            const nextButton = document.getElementById('nextTestimonial');
            let currentIndex = 0;
            const totalTestimonials = testimonialDots.length;
            
            
            function updateCarousel() {
                testimonialsTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                
                testimonialDots.forEach((dot, index) => {
                    if (index === currentIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }
            
            
            function nextTestimonial() {
                currentIndex = (currentIndex + 1) % totalTestimonials;
                updateCarousel();
            }
            
            function prevTestimonial() {
                currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
                updateCarousel();
            }
            
            nextButton.addEventListener('click', nextTestimonial);
            prevButton.addEventListener('click', prevTestimonial);
            
            
            testimonialDots.forEach(dot => {
                dot.addEventListener('click', function() {
                    currentIndex = parseInt(this.getAttribute('data-index'));
                    updateCarousel();
                });
            });
            
            
            setInterval(nextTestimonial, 5000);
        });
        
       
        document.addEventListener('DOMContentLoaded', function() {
            const heroCarousel = new bootstrap.Carousel(document.getElementById('heroCarousel'), {
                interval: 5000,
                ride: 'carousel',
                wrap: true,
                pause: false, 
            });
            
          
            const carouselItems = document.querySelectorAll('.carousel-item');
            carouselItems.forEach(item => {
                const caption = item.querySelector('.carousel-caption');
                if (caption) {
                    caption.style.display = 'block';
                }
            });
            
            
            const subtitles = document.querySelectorAll('.hero-subtitle');
            subtitles.forEach(subtitle => {
                subtitle.style.opacity = '1';
                subtitle.style.visibility = 'visible';
            });
            
            document.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowLeft') {
                    heroCarousel.prev();
                }
                if (e.key === 'ArrowRight') {
                    heroCarousel.next();
                }
            });
            
            
            const testimonialTrack = document.getElementById('testimonialsTrack');
            const testimonialDots = document.querySelectorAll('.testimonial-dot');
            const prevBtn = document.getElementById('prevTestimonial');
            const nextBtn = document.getElementById('nextTestimonial');
            let currentTestimonial = 0;
            const totalTestimonials = 3;
            
            function updateTestimonial(index) {
                testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
                
                testimonialDots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
                
                currentTestimonial = index;
            }
            
            
            testimonialDots.forEach((dot, index) => {
                dot.addEventListener('click', () => updateTestimonial(index));
            });
            
           
            prevBtn.addEventListener('click', () => {
                const newIndex = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
                updateTestimonial(newIndex);
            });
            
            nextBtn.addEventListener('click', () => {
                const newIndex = (currentTestimonial + 1) % totalTestimonials;
                updateTestimonial(newIndex);
            });
            
            
            setInterval(() => {
                const newIndex = (currentTestimonial + 1) % totalTestimonials;
                updateTestimonial(newIndex);
            }, 8000);
            
           
            const highlightItems = document.querySelectorAll('.highlight-item');
            highlightItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                    this.style.boxShadow = '0 10px 30px rgba(40, 97, 129, 0.2)';
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
                });
            });
            
            
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
        // chatbot-script.js

// Chatbot State
let isChatbotOpen = false;
let chatHistory = [];
let unreadMessages = 0;
let isTyping = false;
let voiceEnabled = false;
let speakerEnabled = true;
let recognition = null;
let isListening = false;
let speechSynthesis = window.speechSynthesis || null;
let isSpeaking = false;
let currentUtterance = null;

// Voice Settings
const VOICE_COMMANDS = {
    'hey edu': 'wake',
    'hello': 'greet',
    'help': 'help',
    'admissions': 'admissions',
    'academics': 'academics',
    'fees': 'fees',
    'contact': 'contact',
    'schedule': 'schedule',
    'events': 'events',
    'thank you': 'thanks',
    'goodbye': 'goodbye',
    'clear chat': 'clear',
    'voice on': 'voiceOn',
    'voice off': 'voiceOff',
    'speaker on': 'speakerOn',
    'speaker off': 'speakerOff'
};

// School Data
const schoolData = {
    admissions: {
        question: "How do I enroll my child?",
        answer: `📋 **Admissions Process:**
        
1. **Application Form:** Available at school office
2. **Required Documents:**
   - Child's birth certificate
   - Previous school reports
   - Immunization records
   - Two passport photos
   - Parent ID copy
   - Proof of residence

3. **Application Period:** January - March annually
4. **Age Requirements:**
   - Grade R: 5-6 years
   - Grade 1: 6-7 years

5. **Follow-up:** Interviews within 2 weeks`,
        followUp: ["Application deadline?", "Required documents?", "Age requirements?", "Transfer students?"]
    },
    academics: {
        question: "What subjects are offered?",
        answer: `📚 **Academic Curriculum:**
        
**Foundation Phase (Grades R-3):**
- Home Language (Xhosa/English)
- First Additional Language
- Mathematics
- Life Skills

**Intermediate Phase (Grades 4-6):**
- Languages (2)
- Mathematics
- Natural Sciences & Technology
- Social Sciences
- Life Skills

**Additional Programs:**
- Computer Literacy
- Creative Arts
- Physical Education`,
        followUp: ["Curriculum details?", "Extracurricular activities?", "Assessment methods?", "Homework policy?"]
    },
    fees: {
        question: "What are the school fees?",
        answer: `💰 **Fee Structure 2025:**
        
**Annual Tuition:**
- Foundation Phase: R2,500
- Intermediate Phase: R2,800
- Senior Phase: R3,000

**Additional Costs:**
- Stationery Pack: R500
- Sports Fee: R300/year
- Excursion Fund: R200/year

**Payment Options:**
1. Full payment (5% discount)
2. Termly payments
3. Monthly installments
4. Financial assistance available`,
        followUp: ["Payment methods?", "Financial assistance?", "Fee exemptions?", "Payment schedule?"]
    },
    contact: {
        question: "How do I contact the school?",
        answer: `📞 **Contact Information:**
        
**School Office:**
- 📞 Phone: 083 995 6614
- 📧 Email: principal.200200087@ecschools.org.za
- 📍 Address: P.O BOX 148, PEDDIE, 5640
- 🕒 Office Hours: 7:00 AM - 4:00 PM (Mon-Fri)

**School Leadership:**
- Principal: Mr. Sandisa Rweqana
- Deputy Principal: Available on request

**Emergency Contacts:**
- After-hours: 083 995 6614
- District Office: 043 604 7000`,
        followUp: ["Principal contact?", "Location map?", "Emergency procedures?", "District office?"]
    },
    schedule: {
        question: "What are school hours?",
        answer: `🕒 **Daily Schedule:**
        
**Regular School Hours:**
- Morning Assembly: 7:30 AM
- Period 1-2: 7:45 - 9:15 AM
- Break: 9:15 - 9:45 AM
- Period 3-4: 9:45 - 11:15 AM
- Lunch Break: 11:15 - 11:45 AM
- Period 5-6: 11:45 AM - 1:15 PM
- Dismissal: 1:15 PM

**Extracurricular:**
- Sports: Mon & Wed (2:00 - 4:00 PM)
- Clubs: Tue & Thu (2:00 - 3:30 PM)
- Library: Friday (2:00 - 3:00 PM)`,
        followUp: ["Holiday schedule?", "Exam timetable?", "Special events?", "Parent meeting times?"]
    },
    events: {
        question: "What events are coming up?",
        answer: `🎉 **2025 School Calendar:**
        
**Term 1:**
- Jan 15: School Opens
- Feb 14: Valentine's Day
- Mar 15: Mathematics Olympiad
- Mar 21: Human Rights Day

**Term 2:**
- Apr 5: Science Fair
- May 20: Parent-Teacher Meetings
- Jun 16: Youth Day

**Term 3:**
- Jul 15: Cultural Day
- Aug 10: Sports Day

**Term 4:**
- Oct 25: Prize Giving
- Nov 15: Graduation`,
        followUp: ["Sports events?", "Parent meetings?", "Cultural activities?", "Exam dates?"]
    }
};

// Initialize Chatbot
function initChatbot() {
    // Initialize voice recognition if available
    initVoiceRecognition();
    
    // Add event listeners
    setupEventListeners();
    
    // Load chat history from localStorage
    loadChatHistory();
    
    // Add welcome message
    setTimeout(() => {
        if (chatHistory.length === 0) {
            addBotMessage("Welcome to Cisira Combined Primary School! I'm EduBot. You can talk to me or type your questions.");
        }
    }, 1000);
}

// Initialize Voice Recognition
function initVoiceRecognition() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        recognition.maxAlternatives = 1;
        
        recognition.onstart = function() {
            console.log('Voice recognition started');
            isListening = true;
            updateVoiceUI(true);
        };
        
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript.toLowerCase();
            console.log('Voice transcript:', transcript);
            processVoiceCommand(transcript);
        };
        
        recognition.onerror = function(event) {
            console.error('Voice recognition error:', event.error);
            isListening = false;
            updateVoiceUI(false);
            showToast('Voice recognition error: ' + event.error, 'error');
        };
        
        recognition.onend = function() {
            console.log('Voice recognition ended');
            isListening = false;
            updateVoiceUI(false);
        };
        
        voiceEnabled = true;
        updateVoiceButton();
    } else {
        console.warn('Speech recognition not supported');
        showToast('Voice recognition is not supported in your browser', 'warning');
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Toggle buttons
    document.getElementById('chatbotToggle')?.addEventListener('click', toggleChatbot);
    document.getElementById('closeChatbot')?.addEventListener('click', toggleChatbot);
    document.getElementById('sendMessage')?.addEventListener('click', sendMessage);
    
    // Voice toggle
    document.getElementById('voiceToggle')?.addEventListener('click', toggleVoice);
    document.getElementById('speakerToggle')?.addEventListener('click', toggleSpeaker);
    
    // Clear chat
    document.getElementById('clearChat')?.addEventListener('click', clearChat);
    
    // Voice input button
    const voiceBtn = document.getElementById('voiceInputBtn');
    if (voiceBtn) {
        voiceBtn.addEventListener('mousedown', startVoiceInput);
        voiceBtn.addEventListener('touchstart', startVoiceInput);
        voiceBtn.addEventListener('mouseup', stopVoiceInput);
        voiceBtn.addEventListener('touchend', stopVoiceInput);
    }
    
    // Stop voice button
    document.getElementById('stopVoice')?.addEventListener('click', stopVoiceInput);
    
    // Handle Enter key
    document.getElementById('chatInput')?.addEventListener('keypress', handleChatKeyPress);
    
    // Close modal when clicking outside
    document.addEventListener('click', (event) => {
        const modal = document.getElementById('quickQuestionsModal');
        if (modal && !modal.contains(event.target) && !event.target.closest('.feature-btn')) {
            closeModal('quickQuestionsModal');
        }
    });
}

// Toggle Chatbot
function toggleChatbot() {
    isChatbotOpen = !isChatbotOpen;
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatbotToggle = document.getElementById('chatbotToggle');
    
    if (chatbotContainer && chatbotToggle) {
        chatbotContainer.classList.toggle('active');
        chatbotToggle.classList.toggle('active');
        
        if (isChatbotOpen) {
            // Clear notifications when opening
            unreadMessages = 0;
            const notificationBadge = document.getElementById('notificationBadge');
            if (notificationBadge) notificationBadge.style.display = 'none';
            
            // Scroll to bottom
            setTimeout(scrollToBottom, 100);
            
            // Stop any speaking when opening
            stopSpeaking();
        }
    }
}

// Toggle Voice Recognition
function toggleVoice() {
    if (!recognition) {
        showToast('Voice recognition not available', 'warning');
        return;
    }
    
    voiceEnabled = !voiceEnabled;
    updateVoiceButton();
    showToast(`Voice recognition ${voiceEnabled ? 'enabled' : 'disabled'}`, 'success');
}

// Toggle Text-to-Speech
function toggleSpeaker() {
    if (!speechSynthesis) {
        showToast('Text-to-speech not available', 'warning');
        return;
    }
    
    speakerEnabled = !speakerEnabled;
    const speakerBtn = document.getElementById('speakerToggle');
    if (speakerBtn) {
        speakerBtn.classList.toggle('active');
        speakerBtn.title = `Text-to-Speech ${speakerEnabled ? 'On' : 'Off'}`;
    }
    showToast(`Text-to-speech ${speakerEnabled ? 'enabled' : 'disabled'}`, 'success');
}

// Update Voice Button UI
function updateVoiceButton() {
    const voiceBtn = document.getElementById('voiceToggle');
    if (voiceBtn) {
        voiceBtn.classList.toggle('active', voiceEnabled);
        voiceBtn.title = `Voice Recognition ${voiceEnabled ? 'On' : 'Off'}`;
    }
}

// Update Voice UI when listening
function updateVoiceUI(listening) {
    const voiceStatus = document.getElementById('voiceStatus');
    const voiceBtn = document.getElementById('voiceInputBtn');
    
    if (voiceStatus) voiceStatus.style.display = listening ? 'flex' : 'none';
    if (voiceBtn) voiceBtn.classList.toggle('listening', listening);
}

// Start Voice Input
function startVoiceInput() {
    if (!voiceEnabled || !recognition || isListening) return;
    
    try {
        recognition.start();
        showToast('Listening... Speak now', 'info');
    } catch (error) {
        console.error('Error starting voice recognition:', error);
        showToast('Error starting voice recognition', 'error');
    }
}

// Stop Voice Input
function stopVoiceInput() {
    if (recognition && isListening) {
        recognition.stop();
        isListening = false;
        updateVoiceUI(false);
    }
}

// Process Voice Command
function processVoiceCommand(transcript) {
    // Add user message
    addUserMessage(transcript);
    
    // Check for specific commands
    let commandFound = false;
    
    for (const [command, action] of Object.entries(VOICE_COMMANDS)) {
        if (transcript.includes(command)) {
            commandFound = true;
            executeVoiceAction(action);
            break;
        }
    }
    
    // If no specific command found, process as normal message
    if (!commandFound) {
        setTimeout(() => {
            processUserMessage(transcript);
        }, 500);
    }
}

// Execute Voice Action
function executeVoiceAction(action) {
    switch(action) {
        case 'wake':
            addBotMessage("Hello! I'm listening. How can I help you?");
            break;
        case 'greet':
            addBotMessage("Hello! Welcome to Cisira Primary School.");
            break;
        case 'help':
            addBotMessage("I can help you with admissions, academics, fees, contact info, schedule, and events. What would you like to know?");
            break;
        case 'admissions':
            selectQuickOption('admissions');
            break;
        case 'academics':
            selectQuickOption('academics');
            break;
        case 'fees':
            selectQuickOption('fees');
            break;
        case 'contact':
            selectQuickOption('contact');
            break;
        case 'schedule':
            selectQuickOption('schedule');
            break;
        case 'events':
            selectQuickOption('events');
            break;
        case 'thanks':
            addBotMessage("You're welcome! Is there anything else I can help you with?");
            break;
        case 'goodbye':
            addBotMessage("Goodbye! Have a great day!");
            setTimeout(() => toggleChatbot(), 2000);
            break;
        case 'clear':
            clearChat();
            break;
        case 'voiceOn':
            voiceEnabled = true;
            updateVoiceButton();
            addBotMessage("Voice recognition enabled. You can now speak to me.");
            break;
        case 'voiceOff':
            voiceEnabled = false;
            updateVoiceButton();
            addBotMessage("Voice recognition disabled.");
            break;
        case 'speakerOn':
            speakerEnabled = true;
            const speakerBtn = document.getElementById('speakerToggle');
            if (speakerBtn) speakerBtn.classList.add('active');
            addBotMessage("Text-to-speech enabled.");
            break;
        case 'speakerOff':
            speakerEnabled = false;
            const speakerOffBtn = document.getElementById('speakerToggle');
            if (speakerOffBtn) speakerOffBtn.classList.remove('active');
            addBotMessage("Text-to-speech disabled.");
            break;
    }
}

// Send Message
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    if (!chatInput) return;
    
    const message = chatInput.value.trim();
    if (message === '') return;
    
    addUserMessage(message);
    chatInput.value = '';
    
    // Process and respond
    setTimeout(() => {
        processUserMessage(message);
    }, 500);
}

// Handle Enter Key
function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Add User Message
function addUserMessage(text) {
    const chatbotBody = document.getElementById('chatbotBody');
    if (!chatbotBody) return;
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message user-message';
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${text}</p>
        </div>
        <div class="message-actions">
            <button class="message-action" onclick="deleteMessage(this)" title="Delete">
                <i class="fas fa-trash"></i>
            </button>
            <button class="message-action" onclick="copyMessage(this)" title="Copy">
                <i class="fas fa-copy"></i>
            </button>
        </div>
        <span class="message-time">${time}</span>
    `;
    chatbotBody.appendChild(messageDiv);
    
    // Save to history
    chatHistory.push({ type: 'user', text, time, id: Date.now() });
    saveChatHistory();
    
    scrollToBottom();
    
    // Show notification if chatbot is closed
    if (!isChatbotOpen) {
        unreadMessages++;
        const notificationBadge = document.getElementById('notificationBadge');
        if (notificationBadge) {
            notificationBadge.textContent = unreadMessages;
            notificationBadge.style.display = 'flex';
        }
    }
}

// Add Bot Message
function addBotMessage(text) {
    const chatbotBody = document.getElementById('chatbotBody');
    if (!chatbotBody) return;
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message bot-message';
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${formatMessage(text)}</p>
        </div>
        <div class="message-actions">
            <button class="message-action" onclick="speakMessage(this)" title="Speak">
                <i class="fas fa-volume-up"></i>
            </button>
            <button class="message-action" onclick="copyMessage(this)" title="Copy">
                <i class="fas fa-copy"></i>
            </button>
        </div>
        <span class="message-time">${time}</span>
    `;
    chatbotBody.appendChild(messageDiv);
    
    // Save to history
    chatHistory.push({ type: 'bot', text, time, id: Date.now() });
    saveChatHistory();
    
    scrollToBottom();
    
    // Auto-speak if speaker is enabled
    if (speakerEnabled && !isSpeaking) {
        setTimeout(() => speakText(text), 500);
    }
}

// Format Message
function formatMessage(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>')
        .replace(/^(\d\.\s.*)$/gm, '<span class="list-item">$1</span>');
}

// Speak Message (from action button)
function speakMessage(button) {
    const message = button.closest('.chat-message').querySelector('.message-content p');
    if (message) {
        const text = message.innerText || message.textContent;
        speakText(text);
    }
}

// Speak Text
function speakText(text) {
    if (!speechSynthesis || !speakerEnabled || isSpeaking) return;
    
    // Clean text for speech
    const cleanText = text.replace(/\*\*/g, '').replace(/\n/g, ', ');
    
    currentUtterance = new SpeechSynthesisUtterance(cleanText);
    currentUtterance.lang = 'en-US';
    currentUtterance.rate = 0.9;
    currentUtterance.pitch = 1;
    currentUtterance.volume = 1;
    
    currentUtterance.onstart = () => {
        isSpeaking = true;
    };
    
    currentUtterance.onend = () => {
        isSpeaking = false;
        currentUtterance = null;
    };
    
    currentUtterance.onerror = () => {
        isSpeaking = false;
        currentUtterance = null;
    };
    
    speechSynthesis.speak(currentUtterance);
}

// Stop Speaking
function stopSpeaking() {
    if (speechSynthesis && isSpeaking) {
        speechSynthesis.cancel();
        isSpeaking = false;
        currentUtterance = null;
    }
}

// Copy Message
function copyMessage(button) {
    const message = button.closest('.chat-message').querySelector('.message-content p');
    if (message) {
        const text = message.innerText || message.textContent;
        navigator.clipboard.writeText(text).then(() => {
            showToast('Message copied to clipboard', 'success');
        });
    }
}

// Delete Message
function deleteMessage(button) {
    const messageDiv = button.closest('.chat-message');
    if (messageDiv && confirm('Delete this message?')) {
        messageDiv.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            messageDiv.remove();
            // Remove from history
            // Note: In a real app, you'd want to identify which message to remove
        }, 300);
    }
}

// Clear Chat
function clearChat() {
    if (confirm('Clear all chat messages?')) {
        const chatbotBody = document.getElementById('chatbotBody');
        if (chatbotBody) {
            chatbotBody.innerHTML = '';
            
            // Add welcome message back
            const welcomeMsg = `
                <div class="welcome-message">
                    <div class="welcome-icon">
                        <i class="fas fa-robot"></i>
                    </div>
                    <h6>👋 Hello! I'm EduBot</h6>
                    <p>Chat cleared. How can I help you today?</p>
                    <div class="welcome-buttons">
                        <button class="welcome-btn" onclick="startVoiceAssistant()">
                            <i class="fas fa-microphone"></i> Voice Command
                        </button>
                        <button class="welcome-btn" onclick="showQuickQuestions()">
                            <i class="fas fa-question-circle"></i> Quick Questions
                        </button>
                    </div>
                </div>
            `;
            chatbotBody.innerHTML = welcomeMsg;
            
            // Clear history
            chatHistory = [];
            localStorage.removeItem('chatbotHistory');
            
            // Add initial bot message
            setTimeout(() => {
                addBotMessage("How can I help you today? You can speak or type your questions.");
            }, 500);
        }
    }
}

// Show Quick Questions
function showQuickQuestions() {
    const modal = document.getElementById('quickQuestionsModal');
    const modalBody = modal?.querySelector('.modal-body');
    
    if (modal && modalBody) {
        modalBody.innerHTML = '';
        
        Object.entries(schoolData).forEach(([key, data]) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'quick-question-item';
            questionDiv.innerHTML = `
                <button onclick="selectQuickOption('${key}'); closeModal('quickQuestionsModal');">
                    <i class="fas fa-${getIconForKey(key)}"></i>
                    <span>${data.question}</span>
                </button>
            `;
            modalBody.appendChild(questionDiv);
        });
        
        modal.style.display = 'block';
    }
}

// Show Topics
function showTopics() {
    const modal = document.getElementById('quickQuestionsModal');
    const modalBody = modal?.querySelector('.modal-body');
    
    if (modal && modalBody) {
        modalBody.innerHTML = '<h6>All Topics</h6>';
        
        const topics = [
            { key: 'admissions', icon: 'file-signature', label: 'Admissions Process' },
            { key: 'academics', icon: 'book', label: 'Academic Programs' },
            { key: 'fees', icon: 'money-bill-wave', label: 'Fee Structure' },
            { key: 'contact', icon: 'phone', label: 'Contact Information' },
            { key: 'schedule', icon: 'clock', label: 'School Schedule' },
            { key: 'events', icon: 'calendar-alt', label: 'School Events' },
            { key: 'uniform', icon: 'tshirt', label: 'Uniform Policy' },
            { key: 'transport', icon: 'bus', label: 'Transportation' },
            { key: 'sports', icon: 'futbol', label: 'Sports Programs' },
            { key: 'library', icon: 'book-reader', label: 'Library Services' }
        ];
        
        topics.forEach(topic => {
            const topicDiv = document.createElement('div');
            topicDiv.className = 'quick-question-item';
            topicDiv.innerHTML = `
                <button onclick="askAboutTopic('${topic.label.toLowerCase()}'); closeModal('quickQuestionsModal');">
                    <i class="fas fa-${topic.icon}"></i>
                    <span>${topic.label}</span>
                </button>
            `;
            modalBody.appendChild(topicDiv);
        });
        
        modal.style.display = 'block';
    }
}

// Get Icon for Key
function getIconForKey(key) {
    const icons = {
        admissions: 'file-signature',
        academics: 'book',
        fees: 'money-bill-wave',
        contact: 'phone',
        schedule: 'clock',
        events: 'calendar-alt',
        uniform: 'tshirt',
        sports: 'futbol'
    };
    return icons[key] || 'question-circle';
}

// Close Modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
}

// Start Voice Assistant
function startVoiceAssistant() {
    if (!voiceEnabled) {
        showToast('Please enable voice recognition first', 'warning');
        return;
    }
    
    addBotMessage("I'm listening... You can say things like:\n• 'Admissions process'\n• 'School fees'\n• 'Contact information'\n• 'School hours'\n• Or just ask your question");
    
    setTimeout(() => {
        startVoiceInput();
    }, 1000);
}

// Select Quick Option
function selectQuickOption(topic) {
    if (schoolData[topic]) {
        addUserMessage(schoolData[topic].question);
        setTimeout(() => {
            addBotMessage(schoolData[topic].answer);
        }, 500);
    }
}

// Ask About Topic
function askAboutTopic(topic) {
    addUserMessage(`Tell me about ${topic}`);
    setTimeout(() => {
        processUserMessage(topic);
    }, 500);
}

// Process User Message
function processUserMessage(message) {
    showTypingIndicator();
    
    setTimeout(() => {
        hideTypingIndicator();
        const response = generateResponse(message.toLowerCase());
        addBotMessage(response);
        
        // Add follow-up questions if available
        setTimeout(() => {
            showFollowUpOptions(message);
        }, 300);
    }, 1500);
}

// Generate Response
function generateResponse(message) {
    // Check for specific topics
    const topic = detectTopic(message);
    if (topic && schoolData[topic]) {
        return schoolData[topic].answer;
    }
    
    // Default response
    return `I understand you're asking about "${message}". I can help you with:\n• Admissions information\n• Academic curriculum\n• Fee structure\n• School contacts\n• Daily schedule\n• School events\n\nTry asking more specifically or click the quick options.`;
}

// Detect Topic
function detectTopic(message) {
    const keywords = {
        admissions: ['admission', 'enroll', 'register', 'application', 'join', 'apply'],
        academics: ['academic', 'subject', 'curriculum', 'study', 'learn', 'class', 'lesson'],
        fees: ['fee', 'payment', 'cost', 'price', 'money', 'pay', 'tuition'],
        contact: ['contact', 'phone', 'email', 'address', 'location', 'where', 'call'],
        schedule: ['time', 'hour', 'schedule', 'when', 'open', 'close', 'start', 'end'],
        events: ['event', 'activity', 'program', 'upcoming', 'festival', 'celebration']
    };
    
    for (const [topic, words] of Object.entries(keywords)) {
        if (words.some(word => message.includes(word))) {
            return topic;
        }
    }
    
    return null;
}

// Show Typing Indicator
function showTypingIndicator() {
    if (isTyping) return;
    
    const chatbotBody = document.getElementById('chatbotBody');
    if (!chatbotBody) return;
    
    isTyping = true;
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;
    chatbotBody.appendChild(typingDiv);
    scrollToBottom();
}


function hideTypingIndicator() {
    isTyping = false;
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) typingIndicator.remove();
}


function showFollowUpOptions(message) {
    const topic = detectTopic(message);
    if (topic && schoolData[topic] && schoolData[topic].followUp) {
        const chatbotBody = document.getElementById('chatbotBody');
        if (!chatbotBody) return;
        
        const followUpDiv = document.createElement('div');
        followUpDiv.className = 'chat-message bot-message';
        
        const followUpQuestions = schoolData[topic].followUp;
        const optionsHTML = followUpQuestions.map(q => 
            `<span class="quick-option" onclick="quickFollowUp('${topic}', '${q}')">
                <i class="fas fa-${getIconForKey(topic)}"></i> ${q}
            </span>`
        ).join('');
        
        followUpDiv.innerHTML = `
            <div class="message-content">
                <p>Related questions:</p>
                <div class="quick-options">
                    ${optionsHTML}
                </div>
            </div>
            <span class="message-time">Just now</span>
        `;
        chatbotBody.appendChild(followUpDiv);
        scrollToBottom();
    }
}


function quickFollowUp(topic, question) {
    addUserMessage(question);
    setTimeout(() => {
        let response = "";
        switch(question.toLowerCase()) {
            case "application deadline?":
                response = "Applications for 2025 close on March 31, 2024. Late applications may be considered subject to availability.";
                break;
            case "required documents?":
                response = "Required documents:\n1. Birth certificate\n2. Previous school reports\n3. Immunization card\n4. 2 passport photos\n5. Parent ID copy\n6. Proof of residence";
                break;
            case "payment methods?":
                response = "Payment methods:\n• Cash at school office\n• EFT to school account\n• Debit order (arranged)\n• Payment plans available";
                break;
            case "principal contact?":
                response = "Principal Mr. Sandisa Rweqana can be reached via school office: 083 995 6614 or email: principal.200200087@ecschools.org.za";
                break;
            case "holiday schedule?":
                response = "2025 School Holidays:\n• Term 1: 28 Mar - 14 Apr\n• Term 2: 20 Jun - 15 Jul\n• Term 3: 20 Sep - 6 Oct\n• Term 4: 4 Dec - 15 Jan 2026";
                break;
            default:
                response = schoolData[topic]?.answer || "I can help you with that. What specific information are you looking for?";
        }
        addBotMessage(response);
    }, 800);
}


function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const themeBtn = document.querySelector('[onclick="toggleTheme()"] i');
    if (themeBtn) {
        themeBtn.className = document.body.classList.contains('dark-mode') ? 'fas fa-sun' : 'fas fa-moon';
    }
}


function downloadChat() {
    let chatText = "Cisira Primary School Chat History\n\n";
    chatHistory.forEach(msg => {
        chatText += `[${msg.time}] ${msg.type === 'user' ? 'You' : 'EduBot'}: ${msg.text}\n\n`;
    });
    
    const blob = new Blob([chatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cisira-chat-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast('Chat history downloaded', 'success');
}


function saveChatHistory() {
    try {
        localStorage.setItem('chatbotHistory', JSON.stringify(chatHistory));
    } catch (e) {
        console.warn('Could not save chat history:', e);
    }
}


function loadChatHistory() {
    try {
        const saved = localStorage.getItem('chatbotHistory');
        if (saved) {
            chatHistory = JSON.parse(saved);
            
        }
    } catch (e) {
        console.warn('Could not load chat history:', e);
    }
}


function scrollToBottom() {
    setTimeout(() => {
        const chatbotBody = document.getElementById('chatbotBody');
        if (chatbotBody) {
            chatbotBody.scrollTop = chatbotBody.scrollHeight;
        }
    }, 100);
}


function showToast(message, type = 'info') {
   
    const toast = document.createElement('div');
    toast.className = `chatbot-toast chatbot-toast-${type}`;
    toast.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;
    
  
    if (!document.querySelector('.chatbot-toast-style')) {
        const style = document.createElement('style');
        style.className = 'chatbot-toast-style';
        style.textContent = `
            .chatbot-toast {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                color: #286181;
                padding: 12px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                display: flex;
                align-items: center;
                gap: 10px;
                z-index: 10000;
                animation: slideInRight 0.3s ease;
            }
            .chatbot-toast-success { border-left: 4px solid #4CAF50; }
            .chatbot-toast-error { border-left: 4px solid #ff4757; }
            .chatbot-toast-warning { border-left: 4px solid #ffa502; }
            .chatbot-toast-info { border-left: 4px solid #00AEEF; }
            .chatbot-toast button {
                background: none;
                border: none;
                color: inherit;
                font-size: 18px;
                cursor: pointer;
                padding: 0 5px;
            }
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    
  
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, 3000);
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
} else {
    initChatbot();
}