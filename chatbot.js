var data = {
	'안녕': '반갑다 개굴!',
	'뭐해': '개굴개굴거리고 있다!',
	'잘있어': '잘가라 개굴!',
	'불꺼줘': '불을 꺼주겠다 개굴!',
	'불켜줘': '불을 켜주겠다 개굴!',
	'따라해봐': '개굴! 개굴!',
	'그만해': '알겠다 개굴..'
}
var n = 0; //몇 번째 입력인지 구분하기 위한 변수
var light = 1; //불이 켜져있는지 구분하기 위한 변수
var follow = 0; //따라하기 코드를 구분하기 위한 변수

function check_text() {
	var value = document.getElementById('input').value;
	var frog_says = document.getElementsByClassName('frog_says');
	var reply = document.getElementById('frog_console');
	var frog = document.getElementById('frog');

	if (follow == 0){
		frog.src = "static/images/frog1.png";

		if(value == '안녕'){
			frog_says[0].innerHTML = data.안녕;
		}
    	if(value == '뭐해'){
			frog_says[0].innerHTML = data.뭐해;
		}
    	if(value == '잘있어'){;
			frog_says[0].innerHTML = data.잘있어;
		}
		if(value == '불꺼줘'){
			if(light == 0){
				reply.innerHTML = "불은 이미 꺼져있다 개굴!";
			}
			else{
				if (n == 0){
					n++;
					reply.innerHTML = "싫은데 개굴?";
					frog.src = "static/images/frog2.png";
				}
				else if(n == 1){
					n++;
					reply.innerHTML = "귀찮다.. 개굴";
					frog.src = "static/images/frog2.png";
				}
				else{
					light = 0;
					document.body.style.backgroundColor = '#819475';
					frog_says[0].innerHTML = data.불꺼줘;
				}
			}
			
		}
		if(value == '불켜줘'){
			if(light == 1){
				frog_says[0].innerHTML = '불은 이미 켜져있다 개굴!';
			}
			else{
				light = 1;
				document.body.style.backgroundColor = '#d2edc0';
				frog_says[0].innerHTML = data.불켜줘;
			}
			
		}
		if(value == '따라해봐'){
			follow = 1;
		}
	}

	if(follow == 1){
		if (value == '그만해'){
			follow = 0;
			frog_says[0].innerHTML = data.그만해;
			frog.src = "static/images/frog2.png";
		}
		else if(value == '따라해봐'){
			frog_says[0].innerHTML = data.따라해봐;
		}
		else{
			frog_says[0].innerHTML = value + ' 개굴!';
		}
	}
}