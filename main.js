var canvas = new fabric.Canvas('myCanvas');

ballY=0;
ballX=0;
holeY=400;
holeX=800;

blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png", function(Img)){
		holeObj= Img;
		holeObj.scaleToWidth(50);
		holeObj.scaleToHeught(50);
		holeObj.set({
			top:holeY,
			left:holeX
		});
		canvas.add(holeObj);
	
	}
	newImage();
}

function newImage()
{
	fabric.Image.fromURL("ball.png", function(Img)){
		holeObj= Img;
		holeObj.scaleToWidth(50);
		holeObj.scaleToHeught(50);
		holeObj.set({
			top:ballY,
			left:ballX
		});
		canvas.add(ballObj);	
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ballX==holeX)&&(ballY==holeY)){
		canvas.remove(ballObj);
		document.getElementById("hd3").innerHTML="Voce atingiu o objetivo!!!!";
		document.getElementById(myCanvas).style.borderBlockColor="red";

	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(bally >=450)
		{	bally = bally - blockImageHeight;
 			console.log("Altura da imagem do bloco = " - block_image_height);
 			console.log("Quando a tecla direcional baixo é pressionada, X -" - ball_x - " , Y = "-bally);
 			canvas.remove(ballobj);
			newImage()
	}

	function down()
	{
		if(bally <=450)
			{bally = bally + blockImageHeight;
 			console.log("Altura da imagem do bloco = " + block_image_height);
 			console.log("Quando a tecla direcional baixo é pressionada, X - " + ball_x + " , Y = "+bally);
 			canvas.remove(ballobj);
 newImage();
	}

	function left()
	{
		if(ballX >5)
		{
			bally = bally - blockImageWidth;
 			console.log("Largura da imagem do bloco = " - block_image_height);
 			console.log("Quando a tecla direcional baixo é pressionada, X -" - ballx - " , Y = "-bally);
 			canvas.remove(ballobj);
			newImage()
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
			bally = bally + blockImageWidth;
 			console.log("Altura da imagem do bloco = " + block_image_height);
 			console.log("Quando a tecla direcional baixo é pressionada, X -" + ball_x + " , Y = "+bally);
 			canvas.remove(ballobj);
			newImage()
		}
	}
	
}

