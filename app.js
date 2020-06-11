let numArray = ["moon", "moon", "tree", "tree", "rainbow", "rainbow", "cloud", "cloud", "mountain", "mountain", "star", "star"];
const cards = document.querySelectorAll(".board div");
let selection = [];
let clicks = 0;
let score = 0;
let scoreHTML = document.querySelector(".score p")


//shuffles numArray//
for (let i = numArray.length - 1; i > 0; i--) {
  const randomPosition = Math.floor(Math.random() * i);
  const shuffleItem = numArray[i];
  numArray[i] = numArray[randomPosition];
  numArray[randomPosition] = shuffleItem;
}
//functions for revealing images on cards//

//assigns images to divs//
cards.forEach((div) => {
  let shiftedNum = numArray.shift();
  div.classList = (shiftedNum);
  div.classList.add('hidden');
});

//captures cards clicked//
cards.forEach(card => {
  card.onclick = () => {
    card.classList.remove('hidden');
    setTimeout(() => card.classList.add('hidden'), 2000);
    selection.push(card);
    clicks++;
    if (clicks === 2) {
      checkformatch();
    }
  }
});
//compares two cards clicked//
checkformatch = () => {
  const cardOne = selection[0];
  const cardTwo = selection[1];

  if (cardOne.classList.value === cardTwo.classList.value) {
    console.log("Pair");
    setTimeout(() => cardOne.classList.add('rehide'), 1000);
    setTimeout(() => cardTwo.classList.add('rehide'), 1000);
    cardOne.onclick = null;
    cardTwo.onclick = null;
    selection = [];
    clicks = 0;
    score ++;
    scoreHTML.innerHTML = score;
  } else {
    selection = [];
    clicks = 0;
  }
};

gameOver = () => {
  if (score = (numArray.length / 2)) {
    location.reload();
    score = 0;
    clicks = 0;
    };
  };



