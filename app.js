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
let numArray = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6"];
const card = document.querySelectorAll(".board div");


for(let i = numArray.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = numArray[i]
    numArray[i] = numArray[j]
    numArray[j] = temp
  }

card.forEach(card => {
  card.innerHTML += numArray[0];
});






