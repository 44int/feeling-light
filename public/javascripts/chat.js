var socket = io.connect();
socket.on('message:receiveWithColor', function (data) {
	colorWithAnimate(data.message);
});

function sendWithColor(color) {
  socket.emit('message:sendWithColor', { message: color });
}

function colorWithAnimate(color){
	$("body").animate({backgroundColor: "#FFFFFF"}, 'fast');
	$("body").animate({backgroundColor: color}, 'fast');
	$("body").animate({backgroundColor: "#FFFFFF"}, 'fast');
}