const player1=document.querySelector("#player1");
const player2=document.querySelector("#player2");
const tgtScore = document.querySelector("#tgtScore");
const reset= document.querySelector("#reset");
let score1= 0;
let score2= 0;
let playTo = 100;
const p1Display= document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
let isGameOver = false;

tgtScore.addEventListener("change",(e)=>{
// Value comes back as a string so you have to parseInt to turn it into
// a number. That's why it wasn't working before.
  playTo = parseInt(tgtScore.value);
  resetGame();
})

player1.addEventListener("click", e =>{
  if (isGameOver === false){
  score1++
  p1Display.textContent= score1;

  if( score1 >= playTo && Math.abs(score1-score2) >=2 ){
    isGameOver= true;
    p1Display.classList.add("winner")
    p2Display.classList.toggle("loser")
  }
}

})

player2.addEventListener("click", e =>{
  if (isGameOver === false){
  score2++
  p2Display.textContent= score2;

  if( score2 >= playTo && Math.abs(score1-score2) >=2){
   isGameOver= true;
   p2Display.classList.add("winner")
   p1Display.classList.toggle("loser")
  }
}

})

reset.addEventListener("click", resetGame);

function resetGame(){
  isGameOver = false;
  score1=0;
  score2=0;
  p1Display.textContent=`${score1}`;
  p2Display.textContent=`${score2}`
  p2Display.classList.remove("winner", "loser")
  p1Display.classList.remove("loser", "winner")

}



// !!!!!!!!!!!!!!!!!!!!!!!!!!
// This is how I made the score change in both before. Not very good
// player1.addEventListener("click", e =>{
//   score1++
//   if (score1>0 || score2>0){
//     h1.innerText= `${score1} to ${score2}`;
//   }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!





// setTimeout(function(){
//
// p1Display.classList.toggle(".winner")
//
// }, 5000);
