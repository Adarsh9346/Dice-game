let player1="player1"
let player2="player2"

function editNames(){
    player1=prompt("enter the player1 name ")
    player2=prompt("enter the player2 name")
    

 if(player1.length<1|| player2.length<1 || player1==null|| player2==null){
    alert("enter the valid names")
    player1=prompt("enter the player1 name ")
    player2=prompt("enter the player2 name")
    
    
return editNames();
 }
 document.querySelector("p.player1").innerHTML=player1
 document.querySelector("p.player2").innerHTML=player2
}
function rollTheDice() {
   let diceNum1 = document.querySelector(".img1");
   let diceNum2 = document.querySelector(".img2");

   diceNum1.setAttribute("src", "diceroll.gif")
   diceNum2.setAttribute("src", "diceroll.gif")

   let result = document.querySelector('h2')
   result.innerHTML = ""
   debugger
   setTimeout(()=> {
       let randomNumber1 = Math.floor(Math.random() * 6) + 1;
       let randomNumber2 = Math.floor(Math.random() * 6) + 1;

       diceNum1.setAttribute('src', 'd' + randomNumber1 + '.png');
       diceNum2.setAttribute('src', 'd' + randomNumber2 + '.png');

       if (randomNumber1 === randomNumber2) {
           result.innerHTML = "Draw!"
       }
       else if (randomNumber1 < randomNumber2) {
           result.innerHTML = (player2 + " WINS!");
       }
       else {
           result.innerHTML = (player1 + " WINS!");
       }

   }, 2000);
}