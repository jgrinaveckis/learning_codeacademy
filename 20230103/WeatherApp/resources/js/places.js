import debounce from 'lodash.debounce';

const placeInput = document.querySelector('#place');
const placeSuggestions = document.querySelector('#place-suggestions');

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
				
			});

			button.classList.add('list-group-item', 'list-group-item-action');

			button.innerText = place.name;
			button.value = place.code;


			placeSuggestions.appendChild(button);
		}
	});
}, 500));

const placeButtons = document.querySelectoAll('#list-group-item');

for (let placeButton of placeButtons) {

	placeButton.addEventListener('click', debounce(function() {
		fetch(`/api/v1/weather/get/forecast/${this.value}`).then(r => r.json()).then(forecast => {
			let forecastCard = document.createElement('div');
			});
	}, 500));
};
