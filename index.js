'use strict';

const weatherQuery = {
	q: 'plano',
	type: 'accurate',
	lang: 'en',
	APPID: '7fd64bea57746b38d50d97687525f21a',
	cnt: 7,
	units: 'imperial',

}

// newsAPI setting
const newsQuery = {
	apiKey: '5832566e9e104b6aa1e8411c576f83c5',
	q: 'food',
	pageSize: 5,
	// country: 'us',
	page: 10,
	sortBy: 'relevancy',	
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
			<p>${quotes_Obj.cat}</p>
			<span class="author"> <i class="fas fa-user"></i>${quotes_Obj.author}</span>
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
	$.getJSON(weatherEndPiont,weatherQuery,callback);
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

	console.log(data);

	const results = `<div>
						<p>${data.name},${data.sys.country}</p>
						<p>${data.main.temp} °F</p>
						<p>humidity: ${data.main.humidity}</p>
						<p>${data.weather[0].description}</p>
						<p>wind: ${data.wind.speed}</p>
						<a href="https://openweathermap.org/current">open weather map API</a>
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


// news API
function getDataFromNewsAPI(callback) {
	const newsEndPoint = 'https://newsapi.org/v2/everything';

	$.getJSON(newsEndPoint,newsQuery,callback);
}

function showNews(Obj) {
	console.log(Obj);
}





// load functions
function loadfunctions() {
	toggleHideBar();
	getQuotesFromAPI(showQuotes);
	// getLatAndLon();
	getWeatherFromAPI(showWeather);
	getDataFromNewsAPI(showNews);
	searchCity();
	nextQuotes();

}

$(loadfunctions);