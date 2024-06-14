var randomnumber1=Math.floor(Math.random()*6)+1;
var randomDiceImg1="images/dice" + randomnumber1 + ".png";

var image1=document.querySelectorAll("img")[0].setAttribute("src", randomDiceImg1);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomDiceImg2="images/dice" + randomnumber2+ ".png";
var image2=document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);


var text=document.querySelector("h1");
if(randomnumber1>randomnumber2){
    text.innerHTML="Player1 wins!";
}else if(randomnumber2>randomnumber1){
    text.innerHTML="Player2 wins!";
}
else{
    text.innerHTML="Draw!"
}