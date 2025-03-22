// Screen Management
const screens = {
    login: document.getElementById('loginScreen'),
    register: document.getElementById('registerScreen'),
    main: document.getElementById('mainScreen'),
    upload: document.getElementById('uploadScreen'),
    search: document.getElementById('searchScreen'),
    profile: document.getElementById('profileScreen')
};

function showScreen(screenId) {
    // Hide all screens
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    // Show the requested screen
    screens[screenId].classList.add('active');
}

// Navigation
document.getElementById('showRegister').addEventListener('click', (e) => {
    e.preventDefault();
    showScreen('register');
});

document.getElementById('showLogin').addEventListener('click', (e) => {
    e.preventDefault();
    showScreen('login');
});

document.getElementById('profileBtn').addEventListener('click', () => {
    showScreen('profile');
});

document.getElementById('uploadBtn').addEventListener('click', () => {
    showScreen('upload');
});

document.getElementById('searchBtn').addEventListener('click', () => {
    showScreen('search');
});

// Back buttons
document.getElementById('backFromUpload').addEventListener('click', () => {
    showScreen('main');
});

document.getElementById('backFromSearch').addEventListener('click', () => {
    showScreen('main');
});

document.getElementById('backFromProfile').addEventListener('click', () => {
    showScreen('main');
});

// Form Handling
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // TODO: Implement login logic
    console.log('Login attempt:', { email, password });
    showScreen('main');
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    // TODO: Implement registration logic
    console.log('Register attempt:', { name, email, password });
    showScreen('main');
});

// Document Upload
document.getElementById('uploadForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const documentName = document.getElementById('documentName').value;
    const description = document.getElementById('documentDescription').value;
    const file = document.getElementById('documentFile').files[0];
    
    // TODO: Implement document upload logic
    console.log('Upload attempt:', { documentName, description, file });
    showScreen('main');
});

// Search Functionality
document.getElementById('searchButton').addEventListener('click', () => {
    const searchQuery = document.getElementById('searchInput').value;
    // TODO: Implement search logic
    console.log('Search query:', searchQuery);
});

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    if (confirm('Are you sure you want to logout?')) {
        // TODO: Implement logout logic
        showScreen('login');
    }
});

// Mock Data for Recent Documents
const mockDocuments = [
    {
        id: 1,
        name: 'Sample Document 1',
        description: 'This is a sample document',
        date: '2024-03-22'
    },
    {
        id: 2,
        name: 'Sample Document 2',
        description: 'Another sample document',
        date: '2024-03-21'
    }
];

// Function to render documents
function renderDocuments(documents, containerId) {
    const container = document.getElementById(containerId);
    if (!documents || documents.length === 0) {
        container.innerHTML = '<p class="empty-state">No documents found</p>';
        return;
    }
    
    container.innerHTML = documents.map(doc => `
        <div class="document-item">
            <h3>${doc.name}</h3>
            <p>${doc.description}</p>
            <small>${doc.date}</small>
        </div>
    `).join('');
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Show login screen by default
    showScreen('login');
    
    // Render mock documents
    renderDocuments(mockDocuments, 'recentDocsList');
});

// Navigation scroll effect
const nav = document.querySelector('.main-nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !nav.classList.contains('scroll-down')) {
        // Scroll Down
        nav.classList.remove('scroll-up');
        nav.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && nav.classList.contains('scroll-down')) {
        // Scroll Up
        nav.classList.remove('scroll-down');
        nav.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Smooth scroll for navigation links
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

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .step, .testimonial-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // TODO: Implement form submission logic
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Mobile menu toggle (if needed)
const createMobileMenu = () => {
    const nav = document.querySelector('.nav-links');
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-btn';
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    document.querySelector('.nav-container').appendChild(menuButton);
    
    menuButton.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
};

// Initialize mobile menu on small screens
if (window.innerWidth <= 768) {
    createMobileMenu();
}

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.mobile-menu-btn')) {
            createMobileMenu();
        }
    } else {
        const menuButton = document.querySelector('.mobile-menu-btn');
        if (menuButton) {
            menuButton.remove();
        }
        document.querySelector('.nav-links').classList.remove('active');
    }
}); 