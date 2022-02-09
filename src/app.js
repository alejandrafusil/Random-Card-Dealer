/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  let generateRandomCard = () => {
    let card = ["diamond", "heart", "club", "spades"];
    let indexCard = Math.floor(Math.random() * card.length);
    return card[indexCard];
  };
  let generateRandomNumberCard = () => {
    let cardNumbers = ["3", "8", "J"];
    let indexCardNumbers = Math.floor(Math.random() * cardNumbers.length);
    return cardNumbers[indexCardNumbers];
  };
  document.querySelector(".card").className = `card ${generateRandomCard()}`;
  document.querySelector(".card").innerHTML = generateRandomNumberCard();
  setInterval(() => {
    document.querySelector(".card").className = `card ${generateRandomCard()}`;
    document.querySelector(".card").innerHTML = generateRandomNumberCard();
  }, 5000);
};
let ButtonCard = document.querySelector(".button-card");
ButtonCard.addEventListener("click", () => {
  window.onload();
});
