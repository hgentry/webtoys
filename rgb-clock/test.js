function updatebg()
{
	curdate = new Date();
	color = '#' + toHex(curdate.getHours()) + toHex(curdate.getMinutes()) + toHex(curdate.getSeconds());
	document.body.style.background = color;
}

function toHex(x)
{
	ret = "";
	t = Math.floor(x/16);
	if(t < 10) ret += t;
	if(t == 10) ret += 'a';
	if(t == 11) ret += 'b';
	if(t == 12) ret += 'c';
	if(t == 13) ret += 'd';
	if(t == 14) ret += 'e';
	if(t == 15) ret += 'f';
	
	
	m = x % 16;
	if(m < 10) ret += m;
	if(m == 10) ret += 'a';
	if(m == 11) ret += 'b';
	if(m == 12) ret += 'c';
	if(m == 13) ret += 'd';
	if(m == 14) ret += 'e';
	if(m == 15) ret += 'f';
	return ret;
}
setInterval(updatebg, 1000);