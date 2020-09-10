var sv =[
{name: "Pham Tim", masv:1, email: "PhamTim@gmail.com"},
{name: "Nguyen Trang", masv:2, email: "ThuyTrang@gmail.com"},
{name: "Le Van A", masv:3, email: "LeVanA@gmail.com"},
{name: "Tran No", masv:4, email: "TranNo@gmail.com"}

];

window.onload = function (){
	var btn1 = document.getElementById("xem");
	btn1.onclick = function(){
		hienthi();
  }
  var btn2 = document.getElementById("add");
  btn2.onclick = function(){
    if(!checkEmptyInput()){
      var name = document.getElementById("ten").value;
      var masv = document.getElementById("masv").value;
      var email = document.getElementById("email").value;

      var sv2={name, masv, email};
      sv.push(sv2);
      hienthi();
    }

  }
  
  var btn3 = document.getElementById("sua");
  btn3.onclick = function(){
    clickchuot();
    
  }
  var btn4 = document.getElementById("luu");
  btn4.onclick = function(){
    luuthongtin();

  }
  
  var btn5 = document.getElementById("xoa");
  btn5.onclick = function(){

    xoa();

  }


}
var rIndex,table = document.getElementById("danhsachsv");
function clickchuot(){
 hienthi();
 
 for(var i = 0; i < table.rows.length; i++){
  table.rows[i].onclick = function(){
    rIndex = this.rowIndex;
    console.log(rIndex);
    rIndex--;
    console.log(rIndex);
    for(var i = 0; i < sv.length; i++){
      if( rIndex === i) {
        document.getElementById("ten").value = sv[i].name;
        document.getElementById("masv").value = sv[i].masv;
        document.getElementById("email").value = sv[i].email;
        break;
      }
    }
  }
}
}


function luuthongtin(){
  if(!checkEmptyInput()){
    var name = document.getElementById("ten").value;
    var masv = document.getElementById("masv").value;
    var email = document.getElementById("email").value;

    var sv3={name, masv, email};
    console.log(rIndex);
    sv.splice(rIndex, 1, sv3);
    hienthi();
  }
}
function xoa(){
  clickchuot();
  for(var i = 0; i < sv.length; i++){
    if( rIndex== i){
      console.log(rIndex);
      sv.splice(i,1);
      break;
    }

  }
  rIndex = null;

}

function hienthi(){
  var tbodyNode = document.getElementById('danhsachsv');
  tbodyNode.innerHTML = "";
  for(var i = 0; i < sv.length; i++)
  {
    var trNode = document.createElement('tr');

    var tdTenNode = document.createElement('td');
    var tenNode = document.createTextNode(sv[i].name);
    tdTenNode.appendChild(tenNode);

    var tdMaSVNode = document.createElement('td');
    var masoNode = document.createTextNode(sv[i].masv);
    tdMaSVNode.appendChild(masoNode);

    var tdEmailNode = document.createElement('td');
    var emailNode = document.createTextNode(sv[i].email);
    tdEmailNode.appendChild(emailNode);

    trNode.appendChild(tdTenNode);
    trNode.appendChild(tdMaSVNode);
    trNode.appendChild(tdEmailNode);

    tbodyNode.appendChild(trNode);
  }
}

function checkEmptyInput()
{
  var isEmpty = false,
  name = document.getElementById("ten").value,
  masv = document.getElementById("masv").value,
  email = document.getElementById("email").value;

  if(name === ""){
    alert("Bạn chưa điền tên");
    isEmpty = true;
  }
  else if(masv === ""){
    alert("Bạn chưa điền mã sinh viên");
    isEmpty = true;
  }
  else if(email === ""){
    alert("Bạn chưa điền email");
    isEmpty = true;
  }
  return isEmpty;
}