function check_text() {
	var value = document.getElementById("console").value;
	console.log(value);

	if(value == "안녕"){
		console.log("반갑다 개굴!");
	}
    if(value == "뭐해"){
		console.log("개굴개굴거리고 있다!");
	}
    if(value == "잘있어"){
		alert("잘가라 개굴!");
	}
}