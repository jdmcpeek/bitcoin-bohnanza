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


// var pusher = new Pusher({ appId: APP_ID, key: APP_KEY, secret: APP_SECRET });
// pusher.trigger( channels, event, data, socketId, callback );


// Pusher.log = function(message) {
//       if (window.console && window.console.log) {
//         window.console.log(message);
//       }
//     };

//     var pusher = new Pusher('9b73a1e7b834eb70b7c6');
//     var channel = pusher.subscribe('bitcoin-bohnanza');
//     channel.bind('my_event', function(data) {
//       alert(data.message);
//     });

// $(document).ready(function() {
// 	$(".generate").click(function() {
// 		$(".address").append(generate_address());
// 	});
// });
