// // Put event listeners into place
// var apple;

// window.addEventListener("DOMContentLoaded", function() {
// 	// Grab elements, create settings, etc.
// 	var canvas = document.getElementById("canvas"),
// 		context = canvas.getContext("2d"),
// 		video = document.getElementById("video"),
// 		videoObj = { "video": true },
// 		errBack = function(error) {
// 			console.log("Video capture error: ", error.code); 
// 		};

// 	// Put video listeners into place
// 	if(navigator.getUserMedia) { // Standard
// 		navigator.getUserMedia(videoObj, function(stream) {
// 			video.src = stream;
// 			video.play();
// 		}, errBack);
// 	} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
// 		navigator.webkitGetUserMedia(videoObj, function(stream){
// 			video.src = window.webkitURL.createObjectURL(stream);
// 			video.play();
// 		}, errBack);
// 	}
// 	else if(navigator.mozGetUserMedia) { // Firefox-prefixed
// 		navigator.mozGetUserMedia(videoObj, function(stream){
// 			video.src = window.URL.createObjectURL(stream);
// 			video.play();
// 		}, errBack);
// 	}


// 	function convertCanvasToImage(canvas) {
// 		var image = new Image();
// 		image.src = canvas.toDataURL("image/png");
// 		return image;
// 	}


// 	// Trigger photo take
// 	document.getElementById("snap").addEventListener("click", function() {
// 		// context.drawImage(video, 0, 0, 640, 480);
// 		context.drawImage(video, 200, 80, 250, 270, 640/2-150/2,  480/2-150/2, 250, 270);
// 		// 640/2-150/2,  480/2-150/2
// 		angular.element(snap).remove();
// 		angular.element(faceframe).remove();
// 		angular.element(canvas).remove();
// 		angular.element(video).remove();
// 		apple = convertCanvasToImage(canvas);
// 		console.log(apple)
// 	});



// }, false);