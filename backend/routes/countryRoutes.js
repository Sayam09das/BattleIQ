const express = require('express');
const router = express.Router();
const { countries } = require('country-data-list');

router.get('/', (req, res) => {
    try {
        const allCountries = countries.all.map(ct => ({
            name: ct.name,
            flag: ct.emoji,
            dialCode: ct.countryCallingCodes?.[0] || ''
        }));
        res.status(200).json(allCountries);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
