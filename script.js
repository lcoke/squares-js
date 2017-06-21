document.addEventListener("DOMContentLoaded",function() {
    
    var btn = document.createElement("BUTTON");
    var t =document.createTextNode("CLICK ME");
    var counter = 0 
    btn.appendChild(t);
    document.body.appendChild(btn);
    btn.style.border='3px solid black';
    btn.style.backgroundcolor='red';

btn.addEventListener('click',function() {
 var box = document.createElement('div');
  box.className = 'divBox';
  box.style.width = '175px';
  box.style.height = '175px';
  box.style.backgroundColor = 'black';
  box.style.marginBottom = '1em'
  document.body.appendChild(box);

box.addEventListener('click',function(){
box.style.backgroundColor = randomColor();



function removeElement() {
  var elem = document.getElementById(div.id);
  elem.parentNode.removeChild(elem);

  div.addEventListener('dblclick',function(){
  if(div.id%2==0){
      div.nextSibling.remove();    
     } else if (div.id%2==1){
      div.previousSibling.remove();
        }
  else{
        alert('Element does not exist');
        }
      })
  


div.addEventListener('dblclick',function(){
  if(div.id%2==0){
         var remove = document.getElementById(div.id);
          remove.nextElementSibling.remove();  
     } else if (div.id%2==1){
          var remove = document.getElementById(div.id);
          remove.previousElementSibling.remove();  
        }
  else{
        alert('Element does not exist');
        return false;
        }
      })
};
  

});
});
});

  var squares = document.getElementsByClassName('square');

for(var i = 0; i < squares.length; i++) {
squares[i].addEventListener("click", changeColor);
}

function changeColor(event) {
this.style.backgroundColor = randomColor();
}


function randomColor() {

var randomRed = Math.floor(Math.random() * 255);
var randomGreen = Math.floor(Math.random() * 255);
var randomBlue = Math.floor(Math.random() * 255);
//creates the string that is the ‘random color’

var randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";

return randomColor;

}


  

