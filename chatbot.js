var data = {
	'안녕': '반갑다 개굴!',
	'뭐해': '개굴개굴거리고 있다!',
	'잘있어': '잘가라 개굴!',
	'불꺼줘': '불을 꺼주겠다 개굴!',
	'불켜줘': '불을 켜주겠다 개굴!'
}

function check_text() {
	var value = document.getElementById("input").value;
	var frog = document.getElementsByClassName("frog_says");

	if(value == "안녕"){
		frog[0].innerHTML = data.안녕;
	}
    if(value == "뭐해"){
		frog[0].innerHTML = data.뭐해;
	}
    if(value == "잘있어"){;
		frog[0].innerHTML = data.잘있어;
	}
	if(value == "불꺼줘"){
		document.body.style.backgroundColor = '#819475';
		frog[0].innerHTML = data.불꺼줘;
	}
	if(value == "불켜줘"){
		document.body.style.backgroundColor = '#d2edc0';
		frog[0].innerHTML = data.불켜줘;
	}
}