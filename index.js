var randomnumber1 = Math.random()*6+1;
var randomnumber2 = Math.random()*6+1;

var randomdice1 = Math.floor(randomnumber1);
var randomdice2 = Math.floor(randomnumber2);

var randomimage1 = "images/dice" + randomdice1 + ".png";
var randomimage2 = "images/dice" + randomdice2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomimage1);

document.querySelectorAll("img")[1].setAttribute("src",randomimage2);

if (randomdice1 === randomdice2){
  document.querySelector("h1").textContent = "Draw!";
}
if (randomdice1 < randomdice2){
  document.querySelector("h1").textContent = "Player 2 Wins🚩";
}
if (randomdice1 > randomdice2){
  document.querySelector("h1").textContent = "🚩Player 1 Wins";
}
