document.addEventListener("DOMContentLoaded", function() {
    // Footer: Add the current year and last modified date
    const currentYearSpan = document.getElementById("current-year");
    const lastModifiedSpan = document.getElementById("last-modified");
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    currentYearSpan.textContent = currentYear;
    lastModifiedSpan.textContent = lastModified;

    // Static values for temperature and wind speed (replace with dynamic values as needed)
    const temperatureC = 5; // Temperature in Celsius
    const windSpeedKmh = 10; // Wind speed in km/h

    // Function to calculate windchill factor
    function calculateWindChill(temp, windSpeed) {
        // Windchill calculation formula for Celsius and km/h
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    }

    // Check conditions for calculating windchill
    function displayWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            const windChill = calculateWindChill(temp, windSpeed).toFixed(2);
            document.getElementById("windchill").textContent = `Windchill: ${windChill} °C`;
        } else {
            document.getElementById("windchill").textContent = "Windchill: N/A";
        }
    }

    // Display the windchill factor when the page loads
    displayWindChill(temperatureC, windSpeedKmh);
});

