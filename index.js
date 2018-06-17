'use strict';

let weatherObject = {};

const weatherQuery = {
	q: 'plano',
	type: 'accurate',
	lang: 'en',
	APPID: '7fd64bea57746b38d50d97687525f21a',
	cnt: 7,
	units: 'imperial',

}


// click bar icon to toggle show search form
function toggleHideBar() {
	$('.bar-icon').on('click',function(){
		
		$('.search-place').toggle('display').css({'transition-duration':'0.8'});

	})
}

// quotes API section
function getQuotesFromAPI(callback) {
	// get only one random quote each time
	const quotesApiEndPoint = 'https://talaikis.com/api/quotes/random/';
	$.getJSON(quotesApiEndPoint,callback);
}
function showQuotes(quotes_Obj) {
	console.log(quotes_Obj);
	$('.quotes-area').html(
		`<div class="quotes">
			<q class="content">${quotes_Obj.quote}</q>
			<span class="author"> <i class="fas fa-user"></i>\'${quotes_Obj.author}\' talk about: ${quotes_Obj.cat}</span>
			<button type="submit" class="nextQuotes">Next <i class="fas fa-arrow-right"></i></button>
		</div>`
		);
}
function nextQuotes(){

	$('.quotes-area').on('click','.nextQuotes',function(event){
		event.preventDefault();
		getQuotesFromAPI(showQuotes);
	})

}

// weather API section
function getWeatherFromAPI(callback) {
	const weatherEndPiont = `https://api.openweathermap.org/data/2.5/weather`;
	$.getJSON(weatherEndPiont,weatherQuery,callback).fail(function(error){
		alert(error.responseJSON.message);
		$('#search-term').val('');
	});
}
// function getLatAndLon() {
// 	// get location Object
// 	if(navigator.geolocation){

// 		navigator.geolocation.getCurrentPosition(function(position) { 
// 		  weatherQuery.lat = Math.round(position.coords.latitude);
// 		  weatherQuery.lon = Math.round(position.coords.longitude);
// 		});

// 	}
	
// }

function showWeather(data) {

	weatherObject = data;
	weatherObject.sys.sunriseFormat = new Date(weatherObject.sys.sunrise).toString().substr(15,16);
	weatherObject.sys.sunsetFormat = new Date(weatherObject.sys.sunset).toString().substr(15,16);
	console.log('inside show weather', data);
		const results = `<div class="weather-block">
							<p class="city-name"><i class="fas fa-map-marker"></i> ${data.name},${data.sys.country}</p>
							<hr>
							<div class="weather-icon">
								<p class="weather-image"><img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].icon}"></p>
								<p class="weather-description">${data.weather[0].description}</p>
							</div>
							<div class="weather-detail">
								<p class="main-temp"><span class="temp-to-change">${data.main.temp}</span> <a class="temp-symbol" href="#">°F</a></p>
								<p>Max: ${data.main.temp_max}</p>
								<p>Min: ${data.main.temp_min}</p>
								<p class="humidity">humidity: ${data.main.humidity}</p>
								<p class="wind">wind: ${data.wind.speed}</p>
								<p>sunrise: ${weatherObject.sys.sunriseFormat}</p>
								<p>sunset: ${weatherObject.sys.sunsetFormat}</p>
							</div>
							<a href="https://openweathermap.org/current" class="API-provider">open weather map API</a>
						 </div>`;

		$('.weather-area').html(results);
	
}

function searchCity() {

	$('button[type=submit]').on('click',function(event){
		event.preventDefault();
		const searchTerm = $('#search-term').val();
		weatherQuery.q = searchTerm;
		getWeatherFromAPI(showWeather);

	})

}

function changeTempAndSymbol() {
	$('.weather-area').on('click','.temp-symbol',function(event){
		event.preventDefault();
		if( $('.temp-symbol').text() === '°F' ){
			$('.temp-symbol').html('°C');
			// console.log( parseInt( $('.temp-to-change').html() ) );
			const CTemp = FtoC( parseInt( $('.temp-to-change').html() ) );
			$('.temp-to-change').html(CTemp);
		}else{
			$('.temp-symbol').html('°F');
			const FTemp = CtoF( parseInt( $('.temp-to-change').html() ) );
			$('.temp-to-change').html(FTemp);
		}
	})
}

function FtoC(degree) {
	return (degree-32) / 1.8;
}

function CtoF(degree) {
	return degree * 1.8 + 32;
}




// load functions
function loadfunctions() {
	toggleHideBar();
	getQuotesFromAPI(showQuotes);
	// getLatAndLon();
	getWeatherFromAPI(showWeather);
	searchCity();
	nextQuotes();
	changeTempAndSymbol();

}

$(loadfunctions);