document.addEventListener("DOMContentLoaded", function() {
    
    const currentYearSpan = document.getElementById("current-year");
    const lastModifiedSpan = document.getElementById("last-modified");
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    currentYearSpan.textContent = currentYear;
    lastModifiedSpan.textContent = lastModified;

    
    const temperatureC = 5; 
    const windSpeedKmh = 10; 

   
    function calculateWindChill(temp, windSpeed) {
        
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    }

    
    function displayWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            const windChill = calculateWindChill(temp, windSpeed).toFixed(2);
            document.getElementById("windchill").textContent = `Windchill: ${windChill} °C`;
        } else {
            document.getElementById("windchill").textContent = "Windchill: N/A";
        }
    }

  
    displayWindChill(temperatureC, windSpeedKmh);
});

