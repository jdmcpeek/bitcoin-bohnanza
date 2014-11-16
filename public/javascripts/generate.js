$(document).ready(function() {
	$(".submit").click(function() {
		$("select").append(function() {
				var input = $(".username").val();
				var option = "<option value='" + input + "'>" + input + "</option>";
				console.log(input);
				return option;
		});
		$("body").append("div").addClass("players")
				 .append(function() {
					var input = $(".username").val();
					var div = document.createElement("p");
					var player = "<p>" + input + "</p>";
					console.log(input);
					return player;
		});		
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




var generate_address = function() {

	var key = bitcoin.ECKey.makeRandom();

	// Print your private key (in WIF format)
	return key.toWIF() + "<br />" + key.pub.getAddress().toString() + "<br />";
	// console.log(key.toWIF())
	// => Kxr9tQED9H44gCmp6HAdmemAzU3n84H3dGkuWTKvE23JgHMW8gct

	// Print your public key (toString defaults to a Bitcoin address)
	// console.log(key.pub.getAddress().toString())
	// => 14bZ7YWde4KdRb5YN7GYkToz3EHVCvRxkF
        
};