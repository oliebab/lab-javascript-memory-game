class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed){
    this.cards = cards;
    this.pickedCards = pickedCards;
    this.pairsClicked = pairsClicked;
    this.pairsGuessed = pairsGuessed;
  }

  shuffleCards(cards) {
    if (this.cards !== cardsArray) {
      return undefined;
    } else {
      const shuffledCards = [];
      console.log(shuffledCards)
      var m = shuffledCards.length, t, i;
      while (m) {
          i = Math.floor(Math.random() * m--);
          t = shuffledCards[m];
          shuffledCards[m] = shuffledCards[i];
          shuffledCards[i] = t;
        }
      return shuffledCards;
    } 
  }

  checkIfPair(card1, card2) {}
  isFinished() {}
}



const cardsArray = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" }
]; 

console.log(cardsArray)