document.addEventListener('DOMContentLoaded', () => {
    // Check authentication
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
        return;
    }

    // Handle avatar upload
    const editAvatarBtn = document.querySelector('.edit-avatar');
    const avatarInput = document.createElement('input');
    avatarInput.type = 'file';
    avatarInput.accept = 'image/*';

    editAvatarBtn.addEventListener('click', () => {
        avatarInput.click();
    });

    avatarInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const avatar = document.querySelector('.profile-avatar img');
                avatar.src = e.target.result;
                // TODO: Upload to server
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle logout
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        window.location.href = 'index.html';
    });

    // Load user data
    loadUserData();
});

function loadUserData() {
    // TODO: Load user data from server
    // For now, we'll use mock data
    const userData = {
        name: 'John Doe',
        location: 'New York, USA',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        website: 'www.johndoe.com',
        about: 'I\'m a frequent traveler who occasionally misplaces important documents. I use Momo to help recover them and assist others in finding their lost documents.',
        stats: {
            reported: 12,
            found: 8,
            recovered: 4
        },
        recentActivity: [
            {
                type: 'report',
                text: 'Reported lost passport',
                time: '2 hours ago'
            },
            {
                type: 'found',
                text: 'Found a driver\'s license',
                time: '1 day ago'
            },
            {
                type: 'location',
                text: 'Updated location',
                time: '2 days ago'
            },
            {
                type: 'connection',
                text: 'Connected with Sarah Smith',
                time: '3 days ago'
            }
        ]
    };

    // Update profile information
    document.querySelector('.profile-details h1').textContent = userData.name;
    document.querySelector('.location').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${userData.location}`;
    document.querySelector('.contact-info li:nth-child(1)').innerHTML = `<i class="fas fa-envelope"></i> ${userData.email}`;
    document.querySelector('.contact-info li:nth-child(2)').innerHTML = `<i class="fas fa-phone"></i> ${userData.phone}`;
    document.querySelector('.contact-info li:nth-child(3)').innerHTML = `<i class="fas fa-globe"></i> ${userData.website}`;
    document.querySelector('.profile-card p').textContent = userData.about;

    // Update statistics
    document.querySelector('.stat-item:nth-child(1) .stat-number').textContent = userData.stats.reported;
    document.querySelector('.stat-item:nth-child(2) .stat-number').textContent = userData.stats.found;
    document.querySelector('.stat-item:nth-child(3) .stat-number').textContent = userData.stats.recovered;

    // Update recent activity
    const activityList = document.querySelector('.activity-list');
    activityList.innerHTML = userData.recentActivity.map(activity => `
        <div class="activity-item">
            <div class="activity-icon">
                <i class="fas ${getActivityIcon(activity.type)}"></i>
            </div>
            <div class="activity-content">
                <p>${activity.text}</p>
                <span class="activity-time">${activity.time}</span>
            </div>
        </div>
    `).join('');
}

function getActivityIcon(type) {
    const icons = {
        report: 'fa-file-alt',
        found: 'fa-check-circle',
        location: 'fa-map-marker-alt',
        connection: 'fa-user-plus'
    };
    return icons[type] || 'fa-info-circle';
} 