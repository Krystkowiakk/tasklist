var input=document.getElementById("userinput");
var button=document.getElementById("enter");
var ul=document.querySelector("ul");
var listItems=document.getElementsByTagName("li"); 
   

function inputLength(){
	return input.value.length;
}


function createListElement(){
var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
	deleteButton(li);
}


function addListAfterClick(){
    if (inputLength()>0){
    	createListElement();
    }
}


function addListAfterKeypress(event){
	  if (inputLength()>0 && event.keyCode===13){
	  	createListElement();
	  }
}


onclick=function(event){
	var x = event.target.tagName;
	if (x === "LI") {
	event.target.classList.toggle("done");
}
}


function listLength(){
	return listItems.length;
}

function deleteButton(which){
	var btn=document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	which.appendChild(btn);
	btn.onclick=removeParent;
}


function removeParent(evt){
	evt.target.parentNode.remove();
} 


for( i=0;i<listLength();i++){
deleteButton(listItems[i]);
}


button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);





