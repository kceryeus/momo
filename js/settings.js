// Check if user is logged in
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userEmail = localStorage.getItem('userEmail');
    
    if (!isLoggedIn || !userEmail) {
        window.location.href = 'login.html';
        return;
    }

    // Initialize user data
    document.getElementById('fullName').value = 'John Doe'; // Default value
    document.getElementById('email').value = userEmail;
    document.getElementById('phone').value = '+1 234 567 8900'; // Default value

    // Handle form submissions
    document.getElementById('profileForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = {
            name: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
        };
        updateProfile(formData);
    });

    document.getElementById('notificationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = {
            emailNotifications: document.querySelector('input[name="emailNotifications"]').checked,
            pushNotifications: document.querySelector('input[name="pushNotifications"]').checked,
            smsNotifications: document.querySelector('input[name="smsNotifications"]').checked
        };
        updateNotificationSettings(formData);
    });

    document.getElementById('privacyForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = {
            profileVisibility: document.querySelector('input[name="profileVisibility"]').checked,
            documentVisibility: document.querySelector('input[name="documentVisibility"]').checked,
            locationVisibility: document.querySelector('input[name="locationVisibility"]').checked
        };
        updatePrivacySettings(formData);
    });

    // Handle user menu dropdown
    const userMenu = document.querySelector('.user-menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    userMenu.addEventListener('click', function() {
        dropdownMenu.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!userMenu.contains(e.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
});

// Update profile information
function updateProfile(formData) {
    // Here you would typically make an API call to update the profile
    console.log('Updating profile:', formData);
    showNotification('Profile updated successfully!');
}

// Update notification settings
function updateNotificationSettings(formData) {
    // Here you would typically make an API call to update notification settings
    console.log('Updating notification settings:', formData);
    showNotification('Notification settings updated successfully!');
}

// Update privacy settings
function updatePrivacySettings(formData) {
    // Here you would typically make an API call to update privacy settings
    console.log('Updating privacy settings:', formData);
    showNotification('Privacy settings updated successfully!');
}

// Handle account deletion
function deleteAccount() {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        // Here you would typically make an API call to delete the account
        console.log('Deleting account...');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        window.location.href = 'login.html';
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Handle logout
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = 'login.html';
} 