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


module.exports.getForecastInfo = function(cityCode) {
	return new Promise(function(resolve) {
		request.get(`https://api.meteo.lt/v1/places/${cityCode}/forecasts/${FORECAST_TYPE[0]}`).then(response => {
			let retrieve = JSON.parse(response.body);
			let forecasts = retrieve["forecastTimestamps"];
			let results = [];

			forecasts.forEach((forecast) => {
				temp = {};
				temp["forecastTimeUtc"] = forecast['forecastTimeUtc'];
				temp["airTemperature"] = forecast['airTemprature'];
				temp["feelsLikeTemperature"] = forecast['feelsLikeTemperature'];
				temp["conditionCode"] = forecast['conditionCode'];
				results.push(temp);
			});
			resolve(results);
		});
	});
}