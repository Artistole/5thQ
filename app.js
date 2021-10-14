var textarea = document.querySelector("#text");
var red = document.querySelector("#red");
var blue = document.querySelector("#blue");
var green = document.querySelector("#green");

red.addEventListener('click', redd);
blue.addEventListener('click', bluee);
green.addEventListener('click', greenn)

function redd()
{ 
    textarea.style.color = "red";              //used style.color to simply change the color of the txt from the textarea variable 
}

function bluee()
{
    textarea.style.color = "blue";
}

function greenn()
{
    textarea.style.color = "green"
}