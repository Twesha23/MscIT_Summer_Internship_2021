// var button=document.getElementsByTagName("button")[0];
// button.addEventListener("click",function(){
//     console.log("clicked");
// })

var addBtn = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var doneBtn = document.querySelectorAll(".checkbtn");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Mark as Done"));
	btn.classList.add("checkbtn");
	btn.addEventListener("click", markAsDone );
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function markAsDone(event){
	console.log(event);
	var targetbtn = event.target;
	var targetli = targetbtn.parentElement;
	targetli.classList.add("done");
	
}

addBtn.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

function onload()
{
	doneBtn.forEach(element => {
		element.addEventListener("click", markAsDone );
	});
	
}
onload();