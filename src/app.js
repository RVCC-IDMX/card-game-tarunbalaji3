/* app.js */

import Deck from './deck';
import { select, listen } from './util';
import './style.css';

const computerCardSlot = select('.computer-card-slot');
const computerDeckElement = select('.computer-deck');
const diamondButton = select('.diamonds');
const heartButton = select('.hearts');
const spadeButton = select('.spades');
const clubButton = select('.clubs');
const newGameButton = select('.new-game');
const text = select('.text');
let deck = new Deck();
deck.shuffle();

console.log(deck.cards[0].suit);

let score = 0;

function updateDeckCount() {
  computerDeckElement.innerText = deck.numberOfCards;
}

function cleanBeforeRound() {
  computerCardSlot.innerHTML = '';
  text.innerText = '';
  updateDeckCount();
}

function startGame() {
  deck = new Deck();
  deck.shuffle();
  score = 0;
  cleanBeforeRound();
  console.log(deck.cards[0]);
}

const diamondCall = () => {
  const computerCard = deck.pop();
  if (deck.numberOfCards === 0) {
    startGame();
  }
  if (computerCard.suit === '♦') {
    cleanBeforeRound();
    score += 4;
    text.innerText = `You won! Score:${score}`;
    computerCardSlot.appendChild(computerCard.getHTML());
  } else {
    cleanBeforeRound();
    score -= 1;
    text.innerText = `You lost! Score:${score}`;
    computerCardSlot.appendChild(computerCard.getHTML());
  }
  console.log(deck.cards[0].suit);
};

const heartCall = () => {
  const computerCard = deck.pop();
  if (deck.numberOfCards === 0) {
    startGame();
  }
  if (computerCard.suit === '♥') {
    cleanBeforeRound();
    score += 4;
    text.innerText = `You won! Score:${score}`;
    computerCardSlot.appendChild(computerCard.getHTML());
  } else {
    cleanBeforeRound();
    score -= 1;
    text.innerText = `You lost! Score:${score}`;
    computerCardSlot.appendChild(computerCard.getHTML());
  }
  console.log(deck.cards[0].suit);
};

const spadeCall = () => {
  const computerCard = deck.pop();
  if (deck.numberOfCards === 0) {
    startGame();
  }
  if (computerCard.suit === '♠') {
    cleanBeforeRound();
    score += 4;
    text.innerText = `You won! Score:${score}`;
    computerCardSlot.appendChild(computerCard.getHTML());
  } else {
    cleanBeforeRound();
    score -= 1;
    text.innerText = `You lost! Score:${score}`;
    computerCardSlot.appendChild(computerCard.getHTML());
  }
  console.log(deck.cards[0].suit);
};

const clubCall = () => {
  const computerCard = deck.pop();
  if (deck.numberOfCards === 0) {
    startGame();
  }
  if (computerCard.suit === '♣') {
    cleanBeforeRound();
    score += 4;
    text.innerText = `You won! Score:${score}`;
    computerCardSlot.appendChild(computerCard.getHTML());
  } else {
    cleanBeforeRound();
    score -= 1;
    text.innerText = `You lost! Score:${score}`;
    computerCardSlot.appendChild(computerCard.getHTML());
  }
  console.log(deck.cards[0].suit);
};

listen(diamondButton, 'click', diamondCall);
listen(heartButton, 'click', heartCall);
listen(spadeButton, 'click', spadeCall);
listen(clubButton, 'click', clubCall);
listen(newGameButton, 'click', startGame);
