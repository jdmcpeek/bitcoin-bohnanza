$(document).ready(function() {
	// $(".players").hide();
	$(".submit").click(function() {
		$(".players").append(function() {
			var input = $(".username").val();
			var player = "<p>" + input + "</p>";
			console.log(input);
			return player;
		}).show();
	});
});
