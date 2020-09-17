var key ='key';
var todolist =JSON.parse(localStorage.getItem(key));


window.onload = function(){
  var li = document.createElement("li");
  var bt = document.getElementById("btn");
  bt.onclick = function(){
   var inputValue = document.getElementById("myInput").value;
   var t = document.createTextNode(inputValue);
   li.appendChild(t);
   if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("muctieu").appendChild(li);
    todolist.push(inputValue);
    localStorage.setItem(key, JSON.stringify(todolist));

  }
}
hienthi();
xoa();

}
function hienthi(){

  for (var i = 0; i < todolist.length; i++) {
    var li = document.createElement("li");
    var t = document.createTextNode(todolist[i]);
    li.appendChild(t);
    document.getElementById("muctieu").appendChild(li);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "xoa";
    span.appendChild(txt);
    li.appendChild(span);
 
  }
}
function xoa(){
    var x = document.getElementsByClassName("xoa");
    for (i = 0; i < x.length; i++) {
    x[i].onclick = function(){
      var index = this.parentElement;
      var t = this.rowIndex;
      index.style.display = "none";
    }
  
  }
}
