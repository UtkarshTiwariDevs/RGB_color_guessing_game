var numSquares=6;
var color= generateRandomColor(numSquares);
var messagedisplay=document.querySelector("#message")
var squares=document.querySelectorAll(".square");
var pickedcolor=pickColor();
var colordisplay=document.querySelector("#colordisplay");
var h1=document.querySelector("h1");
var colorReset=document.querySelector("#reset");
var easybtn= document.querySelector("#easyBtn");
var hardbtn= document.querySelector("#hardBtn");



easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	messagedisplay.textContent=null;
	hardbtn.classList.remove("selected");
	numSquares=3;
	color=generateRandomColor(numSquares);
	pickedcolor=pickColor();
	colordisplay.textContent = pickedcolor;
	for(var i=0;i<squares.length;i++){
		if(color[i]){
			squares[i].style.background=color[i];
		}
		else{
			squares[i].style.background="none";
		}
	}
});


hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	messagedisplay.textContent=null;
	hardbtn.classList.add("selected");
	numSquares=6;
	color=generateRandomColor(numSquares);
	pickedcolor=pickColor();
	colordisplay.textContent = pickedcolor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.background=color[i]; 
			squares[i].style.background="block";
	}
});



colorReset.addEventListener("click", function(){
	messagedisplay.textContent=null;
	this.textContent="NEW COLOR";
	//generate new colors from array
	color=generateRandomColor(numSquares);
	//pick new random color
	pickedcolor=pickColor();
	//change display correct color
	colordisplay.textContent=pickedcolor;
	//change all colors 
	for (var i = 0; i < squares.length; i++) {
	//add initial colorto square
	squares[i].style.background=color[i];
	}
	h1.style.background="steelblue";
});

colordisplay.textContent=pickedcolor;

for (var i = 0; i < squares.length; i++) {
	//add initial colorto square
	squares[i].style.background=color[i];

	//add click listener
	squares[i].addEventListener("click",function(){

	//grab color of clicked one 
	var clickedcolor=this.style.background;
	//compare it with correct color
	console.log(clickedcolor,pickedcolor);
	if(clickedcolor === pickedcolor){
		messagedisplay.textContent="CORRECT!"
		changeColors(clickedcolor);
		h1.style.background=clickedcolor;
		colorReset.textContent="Play Again!";  
	}
	else{
		this.style.background="black";
		messagedisplay.textContent="TRY AGAIN!"
	}
	});	
}

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background=color;
	}
}


function pickColor(){
	var random = Math.floor(Math.random() * color.length);
	return color[random];
}

function generateRandomColor(num){
	var arr=[];

	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	 // for red color from 0 - 255
	 var r=Math.floor(Math.random()*256);
	 // for green color from 0 - 255
	 var g= Math.floor(Math.random()*256);
	 // for blue color from 0 - 255
	 var b= Math.floor(Math.random()*256);
	 "rgb(255,45,123)"
	 return  "rgb(" + r + ", "+ g +", "+ b +")";
}