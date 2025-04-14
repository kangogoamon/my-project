// Greeting based on time of day
function displayGreeting() {
    const hour = new Date().getHours();
    let greeting;
    if (hour < 12) greeting = "Good morning";
    else if (hour < 18) greeting = "Good afternoon";
    else greeting = "Good evening";
    document.getElementById('greeting').textContent = greeting;
}

// Button click alert
document.getElementById('alertButton').addEventListener('click', function() {
    alert("Thank you for visiting my profile!");
});

// Read More functionality
document.getElementById('readMoreBtn').addEventListener('click', function() {
    const extraBio = document.getElementById('extraBio');
    if (extraBio.style.display === 'none') {
        extraBio.style.display = 'block';
        this.textContent = 'Read Less';
    } else {
        extraBio.style.display = 'none';
        this.textContent = 'Read More';
    }
});

// Form validation
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!name || !email) {
        document.getElementById('formError').textContent = 'Please fill out all fields.';
    } else if (!emailRegex.test(email)) {
        document.getElementById('formError').textContent = 'Please enter a valid email address.';
    } else {
        alert('Thank you for subscribing!');
        this.reset();
        document.getElementById('formError').textContent = '';
    }
});

// Call the greeting function when the page loads
window.onload = displayGreeting;
