$(document).ready(function() {
	console.log("Javascript won't get the best of me!");
	$(".hamburger").on("click", function(){
		console.log("I think I'm getting this... I think");
		$(".navigation").slideToggle("slow");
	});
});