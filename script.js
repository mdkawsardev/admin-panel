// Mobile sidebar toggle
const sidebar = document.getElementById('sidebar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const overlay = document.getElementById('overlay');

function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('hidden');
}

mobileMenuBtn.addEventListener('click', toggleSidebar);

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
function updateStats() {
    const revenue = document.querySelector('.bg-gradient-to-br.from-blue-600 .text-3xl');
    const orders = document.querySelector('.bg-gradient-to-br.from-purple-600 .text-3xl');
    const customers = document.querySelector('.bg-gradient-to-br.from-green-600 .text-3xl');
    
    if (revenue) {
        const currentRevenue = parseInt(revenue.textContent.replace(/[$,]/g, ''));
        const newRevenue = currentRevenue + Math.floor(Math.random() * 100);
        revenue.textContent = '$' + newRevenue.toLocaleString();
    }
}

// Update stats every 5 seconds
setInterval(updateStats, 5000);

// Search functionality
const searchInput = document.querySelector('input[type="text"]');
searchInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        alert('Search for: ' + this.value);
    }
});

// Notification click handler
document.querySelector('.fa-bell').parentElement.addEventListener('click', function() {
    alert('Notifications panel would open here');
});

// Messages click handler
document.querySelector('.fa-envelope').parentElement.addEventListener('click', function() {
    alert('Messages panel would open here');
});

// User dropdown simulation
document.querySelector('.fa-chevron-down').parentElement.addEventListener('click', function() {
    alert('User dropdown menu would open here');
});

// Console welcome message
console.log('%c Admin Panel Loaded Successfully! ', 'background: #3b82f6; color: white; font-size: 16px; padding: 10px;');