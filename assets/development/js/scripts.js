

// Return false class for buttons
$('.return-false').click(function() {
	return false;
});



// Do X ESC 
$(document).keyup(function(e) {
	
	if (e.keyCode == 27) { 
		// Guff
	}
	
}); 


// Add current year to .current-year
var currentYear = (new Date).getFullYear();
$('.current-year').text(currentYear)


