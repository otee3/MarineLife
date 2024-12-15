// script.js

// Function to load HTML content into a specified placeholder
function loadHTML(target, file) {
    fetch(file)  // Fetch the file (header.html or footer.html)
        .then(response => response.text())  // Get the text content of the file
        .then(data => {
            document.getElementById(target).innerHTML = data;  // Insert content into the placeholder
        })
        .catch(error => console.error('Error loading HTML:', error));  // Error handling
}

// Load the header and footer content into the placeholders
window.onload = function() {
    loadHTML('header-placeholder', 'header.html');  // Load header
    loadHTML('footer-placeholder', 'footer.html');  // Load footer
};
