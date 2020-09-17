window.onload =show;

var count =0;

function show(){
	
	var linkgg = document.getElementsByTagName("a");
	var img = new Image();

	if (count <4) {
		img.src = linkgg[count].href;
		console.log(img);

		document.getElementById("img-show").src = img.src;
		document.getElementById("caption").innerText = linkgg[count].children[0].alt;
		count++;
	}else{
		count =0;
	}
	setTimeout("show()",1000);

}

/*		item.onclick = function(e){
			e.preventDefault();
			document.getElementById("img-show").src = img.src;
			document.getElementById("caption").innerText = item.children[0].alt;
		}*/

