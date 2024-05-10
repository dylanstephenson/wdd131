const windChillText = document.querySelector("#wind-chill");

const temp = 9;
const windSpeed = 10;

function calculateWindChill (temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {

        const chill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * (Math.pow(windSpeed, 0.16)))
        chillRound = chill.toFixed(2);
        windChill = parseFloat(chillRound);
    } else {
        windChill = "NA";
    }
    return windChill
}

windChillText.innerHTML = calculateWindChill(temp, windSpeed);


// add get dates from index.html to the temples page
const today = new Date();
const currentYear = document.querySelector("#currentyear");
currentYear.innerHTML = today.getFullYear();
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;