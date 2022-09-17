var A = document.getElementById("text");
var textbox = document.getElementById("box");
var button = document.getElementById("send");

send.addEventListener("click",function(){
    var newMessage = document.createElement("section");
    newMessage.innerHTML = box.value;
    A.appendChild(newMessage);
    box.value="";
})











var i  = document.getElementById("head1");
 i.addEventListener("mouseover",function(){
  this.style="background-color:grey" ;
   
   
    
});

var i  = document.getElementById("head1");
 i.addEventListener("mouseout",function(){
  this.style="" ;
  this.style="color:white"
   
   
    
});

var o  = document.getElementById("head2");
 o.addEventListener("mouseover",function(){
  this.style="background-color:grey" ;
   
   
    
});


var o  = document.getElementById("head2");
 o.addEventListener("mouseout",function(){
  this.style="" ;
  this.style="color:white"
   
   
    
});



var j = document.getElementById("home");
 j.addEventListener("mouseover",function(){
  this.style="background-color:grey" ;
   
   
    
});



var j  = document.getElementById("home");
 j.addEventListener("mouseout",function(){
  this.style="" ;
  this.style="color:white"
   
   
    
});




var c  = document.getElementById("img");
 c.addEventListener("mouseover",function(){
  this.style="box-shadow:10px 10px 10px black" ;
   this.style="position: relative;left: 20px;top: 20px;border-radius: 30px;width:60px;border:2px solid black";
   
    
});

var c  = document.getElementById("img");
 c.addEventListener("mouseout",function(){
  this.style="position: relative;left: 20px;top: 20px;border-radius: 20px;width: 40px;border: 2px solid black";
   
   
    
});


function handleclick(element){
  element.style="background-color:azure;"
  element.style="font-family:fantasy"
}










