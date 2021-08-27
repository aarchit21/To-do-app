function closeandedit(item){
  //close
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  item.appendChild(span);
  //click on close button to hide current item
  var close = document.getElementsByClassName("close");
  var p = document.querySelector("ul");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      p.removeChild(div);
      store();
    }
  }
  //EDIT
    var span_edit = document.createElement("SPAN");
    var text = document.createTextNode("EDIT");
    span_edit.className = "edit";
    span_edit.appendChild(text);
    item.appendChild(span_edit);
    store();
// click on edit button to edit
    var edit = document.getElementsByClassName("edit");
    var i;
    for (i = 0; i < edit.length; i++) {
      edit[i].onclick = function() {
        var a = prompt("What is the edited task?");
        var x = document.createTextNode(a);
        var div_edit = this.parentElement;
        div_edit.replaceChild(x,div_edit.childNodes[0]);
        store();

      }
    }
}

//add a checked symbol on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement(){
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputclass1").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  }
  else {
    document.getElementById("mylist").appendChild(li);
  }
  document.getElementById("inputclass1").value = "";
  closeandedit(li);
}

var a=document.getElementById("btn1");
a.addEventListener("click",() => this.newElement());

function taskdone(){
  var d = document.getElementsByTagName("LI");
  var i;
  for(i=0;i<d.length;i++){
    if (d[i].classList.value == 'checked'){
    d[i].className = "cross";
    store();
  }
}
}
document.getElementById("btn2").addEventListener("click",() => this.taskdone());

//setting up local storage
function store(){
  var tasks = document.getElementsByTagName("LI");
  var i;
  for(i=0;i<tasks.length;i++){
    k=tasks[i].innerText;
    l=k.substring(0,k.length-7);
    window.localStorage.setItem(i.toString(),l);
}
}
store()

//gaining access to local localStorage

var j;
for(j=0;j<localStorage.length;j++){
  var li = document.createElement("li");
  var prevValue =window.localStorage.getItem(j);
  var m=document.createTextNode(prevValue);
  if(m){
    li.appendChild(m);
    document.getElementById("mylist").appendChild(li);
    closeandedit(li);
  }
}


// clear all entries

n=document.getElementById("btn3");
n.addEventListener("click",function(){
  window.localStorage.clear();
  location.reload();
});
