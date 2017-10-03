 var myAudio = document.getElementById("myAudio");
 var myVideo = document.getElementById("video-background");
 myAudio.play();
$("button").on("click",function(){
	console.log(this);
	if (myAudio.paused) {
		$(myVideo).removeClass("button-paused");
		$(this).text("Pause");
	    myAudio.play();
	    myVideo.play();
	} 
	else {
		$(this).text("Paused");
		$(myVideo).addClass("button-paused");
	    myAudio.pause();
	    myVideo.pause();
	}
});