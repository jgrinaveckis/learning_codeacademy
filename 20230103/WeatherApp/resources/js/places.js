import debounce from 'lodash.debounce';

const placeInput = document.querySelector('#place');
const placeSuggestions = document.querySelector('#place-suggestions');
const forecastsPlace = document.querySelector('#forecasts');

placeInput.addEventListener('input', debounce(function() {
	fetch(`/api/v1/weather/places/find/${this.value}`).then(r => r.json()).then(places => {
		placeSuggestions.innerHTML = '';

		for (let place of places) {
			let button = document.createElement('button');
			button.addEventListener('click', function() {
				button.classList.add('active');

				setTimeout(() => {
					placeSuggestions.innerHTML = '';
				}, 100);

				placeInput.value = place.name;

				fetch(`/api/v1/weather/get/forecast/${place.code}`).then(r => r.json()).then(forecasts => {

					for (let forecast of forecasts) {
						let forecastDiv = document.createElement('div');
						forecastDiv.classList.add('w-25', 'border', 'border-dark');

						let timestampP = document.createElement('p');
						timestampP.innerHTML = `Time: ${forecast['forecastTimeUtc']}`;

						let temperatureP = document.createElement('p');
						let degreesCelcius = String.fromCodePoint(8451);
						temperatureP.innerHTML = `Temperature: ${forecast['feelsLikeTemperature']}${degreesCelcius}`;

						let conditionP = document.createElement('p');
						conditionP.innerHTML = `Condition: ${forecast['conditionCode']} `;

						const paragraphs = document.querySelectorAll('div > p');
						for (let p of paragraphs) {
							p.classList.add('mb-0');
						}
						forecastDiv.appendChild(timestampP);
						forecastDiv.appendChild(temperatureP);
						forecastDiv.appendChild(conditionP);
						forecastsPlace.appendChild(forecastDiv);
					} 
					});
			});

			button.classList.add('list-group-item', 'list-group-item-action');

			button.innerText = place.name;
			button.value = place.code;

			placeSuggestions.appendChild(button);
		}
	});
}, 500));

