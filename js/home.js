// Check if user is logged in
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'login.html';
        return;
    }

    // Load recent documents
    loadRecentDocuments();
});

// Modal Functions
function openUploadModal() {
    document.getElementById('uploadModal').style.display = 'block';
}

function closeUploadModal() {
    document.getElementById('uploadModal').style.display = 'none';
}

function openPostModal() {
    document.getElementById('uploadModal').style.display = 'block';
    document.getElementById('postToFeed').checked = true;
}

function openSearchModal() {
    document.getElementById('searchModal').style.display = 'block';
}

function closeSearchModal() {
    document.getElementById('searchModal').style.display = 'none';
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
}

// Handle document upload
document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        type: document.getElementById('documentType').value,
        title: document.getElementById('documentTitle').value,
        description: document.getElementById('documentDescription').value,
        location: document.getElementById('location').value,
        dateLost: document.getElementById('dateLost').value,
        postToFeed: document.getElementById('postToFeed').checked,
        image: document.getElementById('documentImage').files[0]
    };

    // Here you would typically send this data to your backend
    console.log('Uploading document:', formData);
    
    // Close modal and refresh documents
    closeUploadModal();
    loadRecentDocuments();
    showNotification('Document uploaded successfully!');
});

// Handle document search
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const searchData = {
        type: document.getElementById('searchType').value,
        location: document.getElementById('searchLocation').value,
        dateFrom: document.getElementById('searchDateFrom').value,
        dateTo: document.getElementById('searchDateTo').value,
        includePrivate: document.getElementById('includePrivate').checked
    };

    // Here you would typically send this data to your backend
    console.log('Searching documents:', searchData);
    
    // Close modal and show results
    closeSearchModal();
    searchDocuments(searchData);
});

// Load recent documents
function loadRecentDocuments() {
    const documentGrid = document.getElementById('documentGrid');
    documentGrid.innerHTML = ''; // Clear existing documents

    // Mock data - replace with actual API call
    const mockDocuments = [
        {
            id: 1,
            type: 'passport',
            title: 'US Passport',
            dateLost: '2024-03-15',
            status: 'active',
            distance: '2.5 km',
            image: 'images/documents/passport1.jpg'
        },
        // Add more mock documents as needed
    ];

    mockDocuments.forEach(doc => {
        const card = createDocumentCard(doc);
        documentGrid.appendChild(card);
    });
}

// Create document card element
function createDocumentCard(doc) {
    const card = document.createElement('div');
    card.className = 'document-card fade-in';
    
    card.innerHTML = `
        <img src="${doc.image}" alt="${doc.title}" class="document-image">
        <div class="document-content">
            <span class="document-type">${doc.type}</span>
            <h3 class="document-title">${doc.title}</h3>
            <div class="document-details">
                <p>Lost on ${doc.dateLost}</p>
                <p>Status: ${doc.status}</p>
                <p>Distance: ${doc.distance}</p>
            </div>
            <div class="document-actions">
                <button class="btn-secondary" onclick="viewDocument(${doc.id})">
                    <i class="fas fa-eye"></i> View
                </button>
                <button class="btn-primary" onclick="editDocument(${doc.id})">
                    <i class="fas fa-edit"></i> Edit
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Search documents
function searchDocuments(searchData) {
    // Here you would typically make an API call to search documents
    console.log('Searching with criteria:', searchData);
    showNotification('Search completed!');
}

// View document details
function viewDocument(id) {
    console.log('Viewing document:', id);
    // Implement document viewing logic
}

// Edit document
function editDocument(id) {
    console.log('Editing document:', id);
    // Implement document editing logic
}

// Refresh documents
function refreshDocuments() {
    loadRecentDocuments();
    showNotification('Documents refreshed!');
}

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = 'index.html';
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Trigger reflow
    notification.offsetHeight;
    
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
} 