var ran1=Math.random();
ran1=ran1*6;
ran1=Math.floor(ran1)+1;

var ran2=Math.random();
ran2=ran2*6;
ran2=Math.floor(ran2)+1;



document.querySelector(".dice .img1").setAttribute("src","images/dice"+ran1+".png");

document.querySelector(".dice .img2").setAttribute("src","images/dice"+ran2+".png");
if(ran1>ran2){
  document.querySelector("h1").innerHTML= "<em>Player 1 wins</em>";
}
else if(ran1<ran2){
  document.querySelector("h1").innerHTML= "<em>Player 2 wins</em>";
}
else{
  document.querySelector("h1").innerHTML= "<em>It's a Draw</em>";
}
document.addEventListener("keypress",function(){
  location.reload();
})
document.addEventListener("click",function(){
  location.reload();
})
