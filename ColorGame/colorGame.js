function getRandomColor(){
	return Math.floor(Math.random()*256);
}
function generateRandomColor()
{	
	return "rgb("+getRandomColor()+", "+getRandomColor()+", "+getRandomColor()+")"
}
function changeColor()
{
	for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor=color;
	}
	displayBar.style.backgroundColor=color;
}
function setAllSquare()
{
square.forEach(function(button,index)
{
	button.style.backgroundColor=generateRandomColor();
	button.addEventListener("click",function(){
		if(target==index)
		{
			changeColor();
		}
		else
			{
				button.style.backgroundColor="#232323";
			}
	})
})
}
function set()
{
	for (var i = 3; i < 6; i++) {
		square[i].style.display="block";
	}
	color=generateRandomColor();
	target=Math.floor(Math.random()*6);
	setAllSquare();
	
	square[target].style.backgroundColor=color;
	var hint=document.querySelector("#rgb");
	hint.textContent=color;

}
function set_easy()
{
		for (var i = 3; i < square.length; i++) {
			square[i].style.display="none";
		}
	color=generateRandomColor();
	target=Math.floor(Math.random()*3);
	setAllSquare();
	square[target].style.backgroundColor=color;
	var hint=document.querySelector("#rgb");
	hint.textContent=color;

}


var refresh=document.querySelector("#refresh");
var easy=document.querySelector("#btn_easy");
var hard=document.querySelector("#btn_hard");
var selected=hard;
var color;
var target;
var square=document.querySelectorAll(".colorContainer");
var displayBar=document.querySelector("#displayBar");
set();
// hard.style.color="white";

refresh.addEventListener("click",function(){
	if(selected==easy)
	{
		set_easy();
	}
	else
		set();
})

easy.addEventListener("click",function () {
	selected=easy;
	hard.classList.remove("selected");
	easy.classList.add("selected");
	set_easy();
})

hard.addEventListener("click",function(){
	selected=hard;
	easy.classList.remove("selected");
	hard.classList.add("selected");
	set();
})