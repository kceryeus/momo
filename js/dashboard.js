// Mock data for lost documents
const mockDocuments = [
    {
        id: 1,
        type: 'passport',
        title: 'US Passport',
        documentNumber: '123456789',
        location: {
            address: '123 Main St',
            neighborhood: 'Downtown',
            city: 'New York',
            country: 'US'
        },
        dateLost: '2024-03-15',
        status: 'active',
        image: 'images/documents/passport.jpg',
        description: 'Black US passport with gold lettering',
        distance: 2.5 // in kilometers
    },
    {
        id: 2,
        type: 'id',
        title: 'Driver\'s License',
        documentNumber: 'DL987654321',
        location: {
            address: '456 Park Ave',
            neighborhood: 'Midtown',
            city: 'New York',
            country: 'US',
            coordinates: { lat: 40.7580, lng: -73.9855 }
        },
        dateLost: '2024-03-14',
        status: 'active',
        image: 'images/documents/drivers-license.jpg',
        description: 'New York State Driver\'s License',
        distance: 3.8
    },
    {
        id: 3,
        type: 'passport',
        title: 'UK Passport',
        documentNumber: 'GB123456789',
        location: {
            address: '789 Broadway',
            neighborhood: 'SoHo',
            city: 'New York',
            country: 'US',
            coordinates: { lat: 40.7233, lng: -73.9930 }
        },
        dateLost: '2024-03-13',
        status: 'active',
        image: 'images/documents/uk-passport.jpg',
        description: 'Red UK passport with gold lettering',
        distance: 4.2
    },
    {
        id: 4,
        type: 'id',
        title: 'Student ID',
        documentNumber: 'STU123456',
        location: {
            address: '321 University Ave',
            neighborhood: 'University Heights',
            city: 'New York',
            country: 'US',
            coordinates: { lat: 40.8500, lng: -73.9300 }
        },
        dateLost: '2024-03-12',
        status: 'active',
        image: 'images/documents/student-id.jpg',
        description: 'NYU Student ID Card',
        distance: 5.1
    },
    {
        id: 5,
        type: 'other',
        title: 'Social Security Card',
        documentNumber: 'SSN123456789',
        location: {
            address: '567 Fifth Ave',
            neighborhood: 'Midtown',
            city: 'New York',
            country: 'US',
            coordinates: { lat: 40.7580, lng: -73.9785 }
        },
        dateLost: '2024-03-11',
        status: 'active',
        image: 'images/documents/ssn-card.jpg',
        description: 'US Social Security Card',
        distance: 3.2
    },
    {
        id: 6,
        type: 'drivers',
        title: 'International Driver\'s License',
        documentNumber: 'INT987654321',
        location: {
            address: '890 Madison Ave',
            neighborhood: 'Upper East Side',
            city: 'New York',
            country: 'US',
            coordinates: { lat: 40.7730, lng: -73.9650 }
        },
        dateLost: '2024-03-10',
        status: 'active',
        image: 'images/documents/int-drivers.jpg',
        description: 'International Driver\'s License',
        distance: 6.5
    },
    {
        id: 7,
        type: 'passport',
        title: 'Canadian Passport',
        documentNumber: 'CA123456789',
        location: {
            address: '432 Lexington Ave',
            neighborhood: 'Midtown',
            city: 'New York',
            country: 'US',
            coordinates: { lat: 40.7527, lng: -73.9772 }
        },
        dateLost: '2024-03-09',
        status: 'found',
        image: 'images/documents/canadian-passport.jpg',
        description: 'Blue Canadian passport',
        distance: 3.9
    },
    {
        id: 8,
        type: 'id',
        title: 'Work ID Badge',
        documentNumber: 'WRK123456',
        location: {
            address: '234 Wall St',
            neighborhood: 'Financial District',
            city: 'New York',
            country: 'US',
            coordinates: { lat: 40.7075, lng: -74.0112 }
        },
        dateLost: '2024-03-08',
        status: 'active',
        image: 'images/documents/work-id.jpg',
        description: 'Corporate ID Badge',
        distance: 2.8
    },
    {
        id: 9,
        type: 'other',
        title: 'Insurance Card',
        documentNumber: 'INS987654321',
        location: {
            address: '765 Columbus Ave',
            neighborhood: 'Upper West Side',
            city: 'New York',
            country: 'US',
            coordinates: { lat: 40.7870, lng: -73.9750 }
        },
        dateLost: '2024-03-07',
        status: 'expired',
        image: 'images/documents/insurance-card.jpg',
        description: 'Health Insurance Card',
        distance: 7.2
    },
    {
        id: 10,
        type: 'passport',
        title: 'Australian Passport',
        documentNumber: 'AU123456789',
        location: {
            address: '123 West End Ave',
            neighborhood: 'Upper West Side',
            city: 'New York',
            country: 'US',
            coordinates: { lat: 40.7870, lng: -73.9850 }
        },
        dateLost: '2024-03-06',
        status: 'active',
        image: 'images/documents/australian-passport.jpg',
        description: 'Green Australian passport',
        distance: 7.5
    }
];

// Render document cards
function renderDocuments(documents) {
    const container = document.getElementById('documentFeed');
    container.innerHTML = '';

    documents.forEach(doc => {
        const card = document.createElement('div');
        card.className = 'document-card fade-in';
        card.innerHTML = `
            <img src="${doc.image}" alt="${doc.title}" class="document-image">
            <div class="document-content">
                <span class="document-type">${doc.type}</span>
                <h3 class="document-title">${doc.title}</h3>
                <p class="document-details">Document #: ${doc.documentNumber}</p>
                <div class="document-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${doc.location.neighborhood}, ${doc.location.city}</span>
                </div>
                <p class="document-details">Lost: ${formatDate(doc.dateLost)}</p>
                <div class="document-actions">
                    <button class="btn-secondary" onclick="viewDetails(${doc.id})">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                    <button class="btn-primary" onclick="reportFound(${doc.id})">
                        <i class="fas fa-check-circle"></i> Report Found
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Filter documents
function filterDocuments() {
    const type = document.getElementById('documentTypeFilter').value;
    const country = document.getElementById('countryFilter').value;
    const neighborhood = document.getElementById('neighborhoodFilter').value;
    const date = document.getElementById('dateFilter').value;
    const status = document.getElementById('statusFilter').value;

    let filtered = [...mockDocuments];

    if (type) {
        filtered = filtered.filter(doc => doc.type === type);
    }

    if (country) {
        filtered = filtered.filter(doc => doc.location.country === country);
    }

    if (neighborhood) {
        filtered = filtered.filter(doc => 
            doc.location.neighborhood.toLowerCase().includes(neighborhood.toLowerCase())
        );
    }

    if (date) {
        const today = new Date();
        filtered = filtered.filter(doc => {
            const docDate = new Date(doc.dateLost);
            switch (date) {
                case 'today':
                    return docDate.toDateString() === today.toDateString();
                case 'week':
                    const weekAgo = new Date(today.setDate(today.getDate() - 7));
                    return docDate >= weekAgo;
                case 'month':
                    const monthAgo = new Date(today.setMonth(today.getMonth() - 1));
                    return docDate >= monthAgo;
                case 'year':
                    const yearAgo = new Date(today.setFullYear(today.getFullYear() - 1));
                    return docDate >= yearAgo;
            }
        });
    }

    if (status) {
        filtered = filtered.filter(doc => doc.status === status);
    }

    renderDocuments(filtered);
}

// Sort documents
function sortDocuments(criteria) {
    let sorted = [...mockDocuments];

    switch (criteria) {
        case 'distance':
            sorted.sort((a, b) => a.distance - b.distance);
            break;
        case 'date':
            sorted.sort((a, b) => new Date(b.dateLost) - new Date(a.dateLost));
            break;
    }

    renderDocuments(sorted);
}

// Modal handling
const uploadModal = document.getElementById('uploadModal');
const uploadBtn = document.getElementById('uploadBtn');
const closeBtn = document.querySelector('.close');

uploadBtn.addEventListener('click', () => {
    uploadModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    uploadModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === uploadModal) {
        uploadModal.style.display = 'none';
    }
});

// Form submission
const uploadForm = document.getElementById('uploadForm');
uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: Implement form submission
    uploadModal.style.display = 'none';
    uploadForm.reset();
});

// User menu
const userMenu = document.querySelector('.user-menu');
const dropdownMenu = document.querySelector('.dropdown-menu');

userMenu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!userMenu.contains(e.target)) {
        dropdownMenu.classList.remove('active');
    }
});

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = 'index.html';
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Check authentication
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
        return;
    }

    // Render initial documents
    renderDocuments(mockDocuments);

    // Add event listeners
    document.getElementById('applyFilters').addEventListener('click', filterDocuments);
    document.getElementById('sortByDistance').addEventListener('click', () => sortDocuments('distance'));
    document.getElementById('sortByDate').addEventListener('click', () => sortDocuments('date'));
    document.getElementById('shareLocation').addEventListener('click', shareLocation);
});

// Share location
function shareLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                // TODO: Implement location sharing without map
                alert('Location shared successfully!');
            },
            error => {
                alert('Error getting location: ' + error.message);
            }
        );
    } else {
        alert('Geolocation is not supported by your browser');
    }
}

// View document details
function viewDetails(docId) {
    // TODO: Implement document details view
    console.log('Viewing document:', docId);
}

// Report found document
function reportFound(docId) {
    // TODO: Implement report found functionality
    console.log('Reporting document as found:', docId);
} 