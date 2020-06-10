// let picsArray = ["cloud", "moon", "mountain", "rainbow", "tree", "stars", "cloud", "moon", "mountain", "rainbow", "tree", "stars"]
// const cardImage = document.querySelectorAll(".board div");
// let selection = [];
// //set random images to board//
// // for(let i = picsArray.length - 1; i > 0; i--){
// //   const j = Math.floor(Math.random() * i)
// //   const temp = picsArray[i]
// //   picsArray[i] = picsArray[j]
// //   picsArray[j] = temp
// // }
// // let image = new Image();
// // image.src = './assets.moon.jpg'
// // document.getElementById("1").appendChild('image');
// cardImage.forEach(pic => {

// })
// // click to reveal cards//
// cardImage.forEach(card => {
//   card.addEventListener('click', () => {
//     selection.push(EventTarget.attribute('src')); 
//     console.log(selection); 
//   });

// });

//////////////////
let numArray = ["moon", "moon", "tree", "tree", "rainbow", "rainbow", "cloud", "cloud", "mountain", "mountain", "star", "star"];
const card = document.querySelectorAll(".board div");
let selection = [];
let clicks = 0;

//shuffles numArray//
for(let i = numArray.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = numArray[i]
    numArray[i] = numArray[j]
    numArray[j] = temp
  }

card.forEach((div) => {
  let shiftedNum = numArray.shift();
  div.classList = shiftedNum;
})

card.forEach(card => {
  card.addEventListener("click", () => {
    selection.push(card.classList);
    clicks++;
        console.log(selection);
        console.log(clicks)
    if (clicks === 2) {
      if (selection[0] === selection[1]) {
        console.log("match")
        card.removeEventListener("click");
        selection = [];
      } else {
        return
      }
    }
  })
});

    // checkformatch = (selection) => {
    //   if (selection[0] === selection[1]) {
    //     console.log("match")
    //     card.removeEventListener("click");
    //     selection = [];
    //   } else {
    //     return
    //   }
    // };


