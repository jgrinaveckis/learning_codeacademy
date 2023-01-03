const { response } = require('express');
const request = require('request');

let FORECAST_TYPE = ['long-term'];

module.exports.getPlaces = function() {
	return new Promise(function(resolve) {
		request.get('https://api.meteo.lt/v1/places').then(response => {
			let places = JSON.parse(response.body);
			resolve(places);
		});
	});
}


module.exports.getWeatherInfo = function(cityCode) {
	return new Promise(function(resolve) {
		request.get(`https://api.meteo.lt/v1/places/${cityCode}/forecasts/${FORECAST_TYPE[0]}`).then(response => {
			let forecasts = JSON.parse(response.body);
			temp = {};
			temp["forecastTimeUtc"] = forecasts["place"]['forecastTimeUtc']
			temp["airTemperature"] = forecasts["place"]['airTemprature']
			temp["feelsLikeTemperature"] = forecasts["place"]['feelsLikeTemperature']
			temp["conditionCode"] = forecasts["place"]['conditionCode']
			resolve(temp);
		});
	});
}