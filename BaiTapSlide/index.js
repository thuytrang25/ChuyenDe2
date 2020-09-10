document.getElementById("h21").onclick =function () {
	if( document.getElementById("1").style.display == "none"){
		 document.getElementById("1").style.display = "block";
		  document.getElementById("a").className="fas fa-minus-circle";
	}else{
		document.getElementById("1").style.display = "none";
		 document.getElementById("a").className="fas fa-plus-circle";
	}  
};

document.getElementById("h22").onclick =function () {
if( document.getElementById("2").style.display == "none"){
		 document.getElementById("2").style.display = "block";
		  document.getElementById("b").className="fas fa-minus-circle";
	}else{
		document.getElementById("2").style.display = "none";
		 document.getElementById("b").className="fas fa-plus-circle";
	}
};
document.getElementById("h23").onclick =function () {
if( document.getElementById("3").style.display == "none"){
		 document.getElementById("3").style.display = "block";
		  document.getElementById("c").className="fas fa-minus-circle";
	}else{
		document.getElementById("3").style.display = "none";
		 document.getElementById("c").className="fas fa-plus-circle";
	}
};