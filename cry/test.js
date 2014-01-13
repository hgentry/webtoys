var sound = new Audio("blip.wav");
var x = 0;

function updatecry()
{
	x += 1;
	if(x > 3600) blip();
}

function blip()
{
		sound.play();
		sound.currentTime=0;
}

setInterval(updatecry, 1000);
