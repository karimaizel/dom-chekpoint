// the first plus butt

document.addEventListener('DOMContentLoaded', function() {
   var p1button = document.getElementById('plus1');
   p1button.addEventListener('click', function(event) {
       var quantity = document.getElementById('qua1');
       var totalprice = document.getElementById('total1');
       var currentQuantity = parseInt(quantity.innerHTML);
       var currenttotalprice = parseInt(totalprice.innerHTML)
       if (currentQuantity < 10) {
           quantity.innerHTML = currentQuantity + 1;
           totalprice.innerHTML = parseInt(totalprice.innerHTML) + 100;
       }
   });
});
// the first minus butt
document.addEventListener('DOMContentLoaded',function(){
var m1button = document.getElementById('minus1');
m1button.addEventListener('click',function(){
   var quantity = document.getElementById('qua1');
   var totalprice = document.getElementById('total1');
   var currentQuantity = parseInt(quantity.innerHTML);
   var currenttotalprice = parseInt(totalprice.innerHTML)
if(currentQuantity>0){
   quantity.innerHTML = currentQuantity - 1
   totalprice.innerHTML = currenttotalprice - 100
}
});
});
// the second plus butt
document.addEventListener('DOMContentLoaded', function() {
   var p2button = document.getElementById('plus2');
   p2button.addEventListener('click', function(event) {
       var quantity = document.getElementById('qua2');
       var totalprice = document.getElementById('total1');
       var currentQuantity = parseInt(quantity.innerHTML);
       var currenttotalprice = parseInt(totalprice.innerHTML)
       if (currentQuantity < 10) {
           quantity.innerHTML = currentQuantity + 1;
           totalprice.innerHTML = parseInt(totalprice.innerHTML) + 20;
       }
   });
});
// the second minus butt
document.addEventListener('DOMContentLoaded',function(){
var m2button = document.getElementById('minus2');
m2button.addEventListener('click',function(){
   var quantity = document.getElementById('qua2');
   var totalprice = document.getElementById('total1');
   var currentQuantity = parseInt(quantity.innerHTML);
   var currenttotalprice = parseInt(totalprice.innerHTML)
if(currentQuantity>0){
   quantity.innerHTML = currentQuantity - 1
   totalprice.innerHTML = currenttotalprice - 20
}
});
});
//   the third plus butt
document.addEventListener('DOMContentLoaded', function() {
   var p3button = document.getElementById('plus3');
   p3button.addEventListener('click', function(event) {
       var quantity = document.getElementById('qua3');
       var totalprice = document.getElementById('total1');
       var currentQuantity = parseInt(quantity.innerHTML);
       var currenttotalprice = parseInt(totalprice.innerHTML)
       if (currentQuantity < 10) {
           quantity.innerHTML = currentQuantity + 1;
           totalprice.innerHTML = parseInt(totalprice.innerHTML) + 50;
       }
   });
});
// the third minus butt
document.addEventListener('DOMContentLoaded',function(){
 var m2button = document.getElementById('minus3');
 m2button.addEventListener('click',function(){
   var quantity = document.getElementById('qua3');
   var totalprice = document.getElementById('total1');
   var currentQuantity = parseInt(quantity.innerHTML);
   var currenttotalprice = parseInt(totalprice.innerHTML)
if(currentQuantity>0){
   quantity.innerHTML = currentQuantity - 1
   totalprice.innerHTML = currenttotalprice - 50
}
});
});
// the heart color
document.addEventListener('DOMContentLoaded',function(){
var button = document.getElementById('1heart')
button.addEventListener('click',function(){
      button.style.backgroundColor = 'green';
});
});
document.addEventListener('DOMContentLoaded',function(){
   var button2 = document.getElementById('2heart')
   button2.addEventListener('click',function(){
         button2.style.backgroundColor = 'green';
   });
   });
   document.addEventListener('DOMContentLoaded',function(){
      var button3 = document.getElementById('3heart')
      button3.addEventListener('click',function(){
            button3.style.backgroundColor = 'green';
      });
      });
   //  the first delete butt
document.addEventListener('DOMContentLoaded',function(){
   var delebutton = document.getElementById('delete1')
   delebutton.addEventListener('click',function(){
     var content = document.getElementsByClassName('card-bodya')
     
      if(content.length>0){
         content[0].remove()
        }     
     
 });
});
       //  the second delete butt
document.addEventListener('DOMContentLoaded', function() {
   var delebutton = document.getElementById('delete2');
   delebutton.addEventListener('click', function() {
       var content = document.getElementsByClassName('card-bodyb');
       
       if (content.length > 0) {
           content[0].remove(); 
           console.log('Button clicked and element removed');
       
       }
   });
});
        //  the third delete butt
document.addEventListener('DOMContentLoaded', function() {
   var delebutton = document.getElementById('delete3');
   delebutton.addEventListener('click', function() {
       var content = document.getElementsByClassName('card-bodyc');
       
       if (content.length > 0) {
           content[0].remove(); 
       }
       
   });
});













