// Jquery
var socket = io.connect('http://speaker-bot.com:8080');

$(function(){
    $('.btn').click(function(){
		var id = $(this).attr('id');
		socket.emit('button press', id)
    });
});
