// click bar icon to toggle show search form
function toggleHideBar() {
	$('.bar-icon').on('click',function(){
		
		$('.search-place').toggle('display').css({'transition-duration':'0.8'});

	})
}


function loadfunctions() {
	toggleHideBar();
}

$(loadfunctions);