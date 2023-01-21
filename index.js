var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDiceImage="dice"+randomNumber1+".png";
var randomImageSource="images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumberz=Math.floor(Math.random()*6)+1;

var randomDiceImagez="dice"+randomNumberz+".png";
var randomImageSourcez="images/"+randomDiceImagez;
var image1z=document.querySelectorAll("img")[1];
image1z.setAttribute("src",randomImageSourcez);

if(randomNumber1>randomNumberz){
    document.querySelector("h1").innerHTML="Player 1 Wins! 🚩";
}
else if(randomNumber1<randomNumberz){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw! 🔃";
}
