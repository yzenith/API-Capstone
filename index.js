// click bar icon to toggle show search form
function toggleHideBar() {
	$('.bar-icon').on('click',function(){
		
		$('.search-place').toggle('display').css({'transition-duration':'0.8'});

	})
}

// quotes API section
function getQuotesFromAPI(callback) {
	const quotesApiEndPoint = 'https://talaikis.com/api/quotes/random/';
	$.getJSON(quotesApiEndPoint,callback);
}
function showQuotes(quotes_Obj) {
	console.log(quotes_Obj);
	$('.quotes-area').html(
		`<div class="quotes">
			<q class="content">${quotes_Obj.quote}</q>
			<span class="author"> <i class="fas fa-user"></i>${quotes_Obj.author}</span>
			<button type="submit">Next <i class="fas fa-arrow-right"></i></button>
		</div>`
		);
}


function loadfunctions() {
	toggleHideBar();
	getQuotesFromAPI(showQuotes);
}

$(loadfunctions);