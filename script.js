// var wrap = document.body.querySelector(".wrapper");
// var dragonDamage = prompt("How Much Damage do you want to deal?");
// var userDamage= prompt("How Much Damage do you want to deal?")

// while(dragonDamage==="dragonDamage"&&userdamage==="userDamage"){
//   match = prompt("How Much Damage do you want to deal?")
//   dragonDamage = Math.floor(Math.random() * 5 + 1);
//   userDamage = Math.floor(Math.random() * 5 + 1);
// }

// var inputNumber = Number(prompt("How much do you want to damage??"))
// while(inputNumber<10){
//  inputNumber=
// }

var wrap = document.body.querySelector(".wrapper");
var dragonDamage = 0;
var playerDamage = 0;
var match = 0;
var randomDamage = 0;

while (dragonDamage < 10 && playerDamage < 5) {
  match = Number(prompt("How much damage do you want to deal?"));
  // Ask questions
  randomDamage = Math.floor(Math.random() * match) + 1;
  if (randomDamage > 5) {
    dragonDamage = dragonDamage + 1;
  } else {
    dragonDamage = dragonDamage + randomDamage;
  }
  playerDamage = Math.floor(Math.random() * 2) + 1;
}
if (dragonDamage >= 10) {
  wrap.innerHTML = "You Have Defeated the Dragon";
} else if (playerDamage >= 5) {
  wrap.innerHTML = "You Have been Defeated";
}