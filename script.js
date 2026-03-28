// Mobile sidebar toggle
const sidebar = document.getElementById('sidebar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const overlay = document.getElementById('overlay');

function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('hidden');
}

mobileMenuBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// Navigation active state
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        navItems.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

// Simulate real-time updates
let statsInterval;

function updateStats() {
    const revenue = document.querySelector('[data-stat="revenue"] .text-3xl');
    const orders = document.querySelector('[data-stat="orders"] .text-3xl');
    const customers = document.querySelector('[data-stat="customers"] .text-3xl');
    
    if (revenue) {
        const currentRevenue = parseInt(revenue.textContent.replace(/[$,]/g, ''));
        if (!isNaN(currentRevenue)) {
            const newRevenue = currentRevenue + Math.floor(Math.random() * 100);
            revenue.textContent = '$' + newRevenue.toLocaleString();
        }
    }
    
    if (orders) {
        const currentOrders = parseInt(orders.textContent.replace(/,/g, ''));
        if (!isNaN(currentOrders)) {
            const newOrders = currentOrders + Math.floor(Math.random() * 5);
            orders.textContent = newOrders.toLocaleString();
        }
    }
    
    if (customers) {
        const currentCustomers = parseInt(customers.textContent.replace(/,/g, ''));
        if (!isNaN(currentCustomers)) {
            const newCustomers = currentCustomers + Math.floor(Math.random() * 3);
            customers.textContent = newCustomers.toLocaleString();
        }
    }
}

// Update stats every 5 seconds
statsInterval = setInterval(updateStats, 5000);

// Clear interval on page unload to prevent memory leaks
window.addEventListener('beforeunload', () => {
    if (statsInterval) {
        clearInterval(statsInterval);
    }
});

// Search functionality
const searchInput = document.querySelector('[data-search-input]');
if (searchInput) {
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            alert('Search for: ' + this.value);
        }
    });
}

// Notification click handler
const notificationBtn = document.querySelector('[data-notification-btn]');
if (notificationBtn) {
    notificationBtn.addEventListener('click', function() {
        alert('Notifications panel would open here');
    });
}

// Messages click handler
const messagesBtn = document.querySelector('[data-messages-btn]');
if (messagesBtn) {
    messagesBtn.addEventListener('click', function() {
        alert('Messages panel would open here');
    });
}

// User dropdown simulation
const userDropdown = document.querySelector('[data-user-dropdown]');
if (userDropdown) {
    userDropdown.addEventListener('click', function() {
        alert('User dropdown menu would open here');
    });
}

// Console welcome message
console.log('%c Admin Panel Loaded Successfully! ', 'background: #3b82f6; color: white; font-size: 16px; padding: 10px;');
