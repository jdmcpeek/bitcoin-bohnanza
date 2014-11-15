$(document).ready(function() {
	$(".generate").click(function() {
		$(".address").append(generate_address());
	});
});


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