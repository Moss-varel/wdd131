// getdates.js

// Set the current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Set the last modified date
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Updated: ${lastModified}`;