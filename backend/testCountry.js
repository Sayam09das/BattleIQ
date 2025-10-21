// testCountry.js
const { countries } = require('country-data-list');

// Function to convert country code to emoji flag
function getFlagEmoji(countryCode) {
    if (!countryCode) return '';
    return countryCode
        .toUpperCase()
        .split('')
        .map(char => String.fromCodePoint(127397 + char.charCodeAt(0)))
        .join('');
}

const allCountries = countries.all.map(ct => ({
    name: ct.name,
    code: ct.alpha2,
    dialCode: ct.countryCallingCodes?.[0] || '',
    flag: getFlagEmoji(ct.alpha2)
}));

console.log(allCountries.slice(0, 10)); // show first 10 countries
