const MeteoApiService = require('../../../services/MeteoApiService');

const express = require('express');
const router = express.Router();

router.get('/places/find/:name', function(req, res, next) {
	MeteoApiService.getPlaces().then(places => {
		places = places.filter(p => p.name.toLowerCase().startsWith(req.params.name.toLowerCase()));
		places = places.slice(0, 10);
		res.json(places);
	});
});

router.get('/get/forecast/:code', function(req, res, next) {
	MeteoApiService.getForecastInfo(req.params.code).then(forecast => {
		res.json(forecast);
	});
});

module.exports = router;
