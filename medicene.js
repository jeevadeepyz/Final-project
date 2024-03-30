
let qty=0;
let buy=document.getElementById("bye");
buy.style.visibility="hidden";
let quantity=document.getElementById("p");

function check(){
     qty++;
     let item={
          name:"product",
          price:199
     };
   let total =item.price*qty;
   outofstock(qty,total);
}

function addtocart(qty,total){
     quantity.innerHTML="quantity:"+qty;
     document.querySelector(".price").innerHTML="price:"+total;
}

function outofstock(qty,total){
     if(qty>0){
          buy.style.visibility="visible";
          if(qty>10)
          {
               alert("out of stock");
               document.querySelectorAll("button").disabled=true;
          }
          else{
               addtocart(qty,total);
          }
     }
}
function bye(){
     alert("thank for purchasing")
}

function hello()
     {
         const xhttp=new XMLHttpRequest(); // craete 
         xhttp.onload=function() // define 
 
     {
         document.getElementById("demo").innerHTML=this.responseText;
     }
 
     xhttp.open("get","index.html");
     xhttp.send();
     }




