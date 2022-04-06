
document.addEventListener('DOMContentLoaded', () => {

const cardArr=[
    {
        name:'dinosar',
        img:'img/6.jpg'
    },
    {
        name:'teddybear',
        img:'img/5.jpg'
    },
    {
        name:'burger',
        img:'img/burger.png'
    },
    {
        name:'cow',
        img:'img/2.jpg'
    },
    {
        name:'dog',
        img:'img/1.jpg'
    },
    {
        name:'hat',
        img:'img/4.jpg'
    },  {
        name:'dinosar',
        img:'img/6.jpg'
    },
    {
        name:'teddybear',
        img:'img/5.jpg'
    },
    {
        name:'burger',
        img:'img/burger.png'
    },
    {
        name:'cow',
        img:'img/2.jpg'
    },
    {
        name:'dog',
        img:'img/1.jpg'
    },
    {
        name:'hat',
        img:'img/4.jpg'
    }

]
cardArr.sort(()=>0.5 - Math.random())

let card=document.getElementById('gamebox') //getting the hold of div in HTML
let gameCard;
let cardChosen=[];
let cardChosenId=[];
let cardsWon=[];

//creating grid of cards using for loop
function newBoard(){
for(let i=0;i<cardArr.length;i++){
gameCard=document.createElement('img') //created an img element referring to document
gameCard.setAttribute('src','img/cover.jpg') 
gameCard.setAttribute('data-id',i)
gameCard.addEventListener('click',turnCard)  // turnCard  - is a function 
card.appendChild(gameCard) //append the img as child to the div in HTML
}
}

 function turnCard(){   // when using arrow function shows err as 'clicked didnt initialized'
    let cardId=this.getAttribute('data-id') //this part didnt understand
   cardChosen.push(cardArr[cardId].name)
   cardChosenId.push(cardId)
   this.setAttribute('src',cardArr[cardId].img) //displays card chosen from array
   if(cardChosen.length===2){
    setTimeout(checkMatch,500) //wait for 500 milliseconds i.e 0.5 sec and then call checkMatch 
    }
 }

//check for match
function checkMatch(){
    const chosen=document.querySelectorAll('img')//select all the img  
if(cardChosenId[0]===cardChosenId[1]){
    chosen[cardChosenId[0]].setAttribute('src','img/cover.jpg') //accesing chosen img and changing its content
    chosen[cardChosenId[1]].setAttribute('src','img/cover.jpg')
  alert("You choosed the same card")
}else if(cardChosen[0]===cardChosen[1]){
    chosen[cardChosenId[0]].setAttribute('src','img/blank.jpg')
   chosen[cardChosenId[1]].setAttribute('src','img/blank.jpg')
   chosen[cardChosenId[0]].removeEventListener('click',turnCard)
   chosen[cardChosenId[1]].removeEventListener('click',turnCard)
    alert('You choosed the match')
cardsWon.push(cardChosen)
}else {
    chosen[cardChosenId[0]].setAttribute('src','img/cover.jpg')
   chosen[cardChosenId[1]].setAttribute('src','img/cover.jpg')
    alert('You missed')
}
 cardChosen=[];
 cardChosenId=[];
 if(cardsWon.length===cardArr.length/2){
    setTimeout(result,500)
 }
 function result(){
    alert('Congratulations! You finished the Game')
 }
}
newBoard()
})