//타이핑 효과
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

var json = 
[
	{
		"question" : "안녕",
		"answer" : "반갑다 개굴!"
	},
	{
		"question" : "뭐해",
		"answer" : "개굴개굴거리고 있다!"
	},
	{
		"question" : "잘있어",
		"answer" : "잘가라 개굴!"
	}
]

var n = 0; //몇 번째 입력인지 구분하기 위한 변수
var light = 1; //불이 켜져있는지 구분하기 위한 변수
var follow = 0; //따라하기 상태를 구분하기 위한 변수

var question = ""; //사용자의 질문을 임시 저장할 변수
var answer = ""; //사용자의 대답을 임시 저장할 변수
var key = 0; //말을 배우는 상황인지 구분하기 위한 변수

//json에 데이터를 추가하는 함수
function push_json(){
	json.push({question: `${question}`, answer: `${answer}`}); 
	typing('말을 배웠다 개굴!')
	console.log(json);
	key = 0; 
}

function check_text() {
	var value = document.getElementById('input').value;
	var frog = document.getElementById('frog');

	if (follow == 0){

		if(key == 2){
			answer = value; //answer에 사용자의 입력을 저장
			push_json() 
			return;
		}

		if(key == 1){ 
			if(value == '예'){
				typing('뭐라고 대답하면 되냐 개굴!')
				key = 2;
			}
			else{
				typing('싫으면 말아라 개굴..')
				key = 0;
				frog.src = "static/images/frog2.png";
			}
			return;
		}

		//json 출력 함수
		for(let i = 0; i < json.length; i++){
			if(value == json[i].question){ 
				frog.src = "static/images/frog1.png";
				typing(json[i].answer)
				return; 
			}
		}
		
		typing('모르는 말이다.. 가르쳐주겠냐 개굴?(예 or 아니요)')
		question = value; //사용자의 질문을 미리 저장
		key = 1; //만들 키 값을 변경해 조건문으로 진입

		frog.src = "static/images/frog1.png";
		if(value == '불꺼줘'){
			key = 0;
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
			key = 0;
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
		key = 0;
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