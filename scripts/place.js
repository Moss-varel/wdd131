document.addEventListener("DOMContentLoaded", function() {
    // Set current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;

    // Wind Chill Calculation
    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (
                13.12 + 
                0.6215 * temp - 
                11.37 * Math.pow(windSpeed, 0.16) + 
                0.3965 * temp * Math.pow(windSpeed, 0.16)
                .toFixed(1) + " °C";
        } else {
            return "N/A";
        }
    }

    // Apply wind chill calculation if elements exist
    const tempElement = document.getElementById("temp");
    const windSpeedElement = document.getElementById("wind-speed");
    const windChillElement = document.getElementById("wind-chill");

    if (tempElement && windSpeedElement && windChillElement) {
        const temp = parseFloat(tempElement.textContent);
        const windSpeed = parseFloat(windSpeedElement.textContent);
        windChillElement.textContent = calculateWindChill(temp, windSpeed);
    }
});