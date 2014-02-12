function loadCanvas(){
	var body = document.getElementById("body");

	var canvasPlace = document.createElement("div");
	canvasPlace.id = "canvasPlace";

	var canvas = document.createElement("canvas")
	canvas.id = "firstCanvas";
	canvas.width = "1200";
	canvas.height = "700";

	canvasPlace.appendChild(canvas );

	body.appendChild(canvasPlace );
}
function addImg(){
	var cnb = document.getElementById("firstCanvas");
	var cnbx = cnb.getContext("2d");
	var img = new Image();
	img.src = "http://cs613524.vk.me/v613524723/56f1/YxB4bUgXuHU.jpg";
	cnbx.drawImage(img,10,10);
	
}