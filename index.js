var imageArray= new Array();
imageArray.push("images/dice1.png");
imageArray.push("images/dice2.png");
imageArray.push("images/dice3.png");
imageArray.push("images/dice3.png");
imageArray.push("images/dice5.png");
imageArray.push("images/dice6.png");

var randomNumber1 = Math.floor(Math.random()*imageArray.length);
var randomNumber2 = Math.floor(Math.random()*imageArray.length);

var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
img1.src = imageArray[randomNumber1];
img2.src = imageArray[randomNumber2];

if(randomNumber1>randomNumber2){
  var header = document.querySelector("h1");
  header.textContent = "Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
  var header = document.querySelector("h1");
  header.textContent = "Player 2 Wins!";
}
else{
  var header = document.querySelector("h1");
  header.textContent = "Even Steven!";
}