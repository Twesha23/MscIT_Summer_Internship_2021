var button=document.getElementsByTagName("button")[0];
button.addEventListener("click",function(){
    console.log("clicked");
})

var button1=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");

function inputLength()
{
    return input.value.length;
}

function createListElement()
{
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li); 
    input.value="";
}

function addListAfterKeypress(event)
{
    if(inputLength()>0 && event.keyCode === 13)
    createListElement();
}
button1.addEventListener("click",function(){
    if(inputLength() >0)
        createListElement();
})

input.addEventListener("keypress",addListAfterKeypress);