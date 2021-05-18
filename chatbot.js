//타이핑 함수
var app = document.getElementById("frog_console");
function typing(text) {
    var typewriter = new Typewriter(app, {
        loop: false,
		delay: 70
      });

      typewriter
        .typeString(text)
        .pauseFor(700)
        .start();
}

var n = 0; //몇 번째 입력인지 구분하기 위한 변수
var light = 1; //불이 켜져있는지 구분하기 위한 변수
var follow = 0; //따라하기 코드를 구분하기 위한 변수

function check_text() {
	var value = document.getElementById('input').value;
	var reply = document.getElementById('frog_console');
	var frog = document.getElementById('frog');

	if (follow == 0){
		frog.src = "static/images/frog1.png";

		if(value == '안녕'){
			typing('반갑다 개굴!')
		}
    	if(value == '뭐해'){
			typing('개굴개굴거리고 있다!')
		}
    	if(value == '잘있어'){;
			typing('잘가라 개굴!')
		}
		if(value == '불꺼줘'){
			if(light == 0){
				typing('불은 이미 꺼져있다 개굴!')
			}
			else{
				if (n == 0){
					n++;
					typing('싫은데 개굴?')
					frog.src = "static/images/frog2.png";
				}
				else if(n == 1){
					n++;
					typing('귀찮다.. 개굴')
					frog.src = "static/images/frog2.png";
				}
				else{
					light = 0;
					document.body.style.backgroundColor = '#819475';
					typing('불을 꺼주겠다 개굴!')
				}
			}
		}
		if(value == '불켜줘'){
			if(light == 1){
				typing('불은 이미 켜져있다 개굴!')
			}
			else{
				light = 1;
				document.body.style.backgroundColor = '#d2edc0';
				typing('불을 켜주겠다 개굴!')
			}
		}
		if(value == '따라해봐'){
			follow = 1;
		}
	}

	if(follow == 1){
		if (value == '그만해'){
			follow = 0;
			typing('알겠다 개굴..')
			frog.src = "static/images/frog2.png";
		}
		else if(value == '따라해봐'){
			typing('개굴! 개굴!')
		}
		else{
			typing(value + ' 개굴!')
		}
	}
}