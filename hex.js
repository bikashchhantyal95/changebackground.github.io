const hexVal = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "c",
  "D",
  "E",
  "F",
];//Hex numbers
const btn = document.getElementById("btn"); //get id of btn
const color = document.querySelector(".color");//select using class
btn.addEventListener("click", function () {//adding event listener to btn class
  let hexColorCode = "#";
  for (let i = 0; i < 6; i++) {
    hexColorCode += hexVal[getRandomHexCode()]; //generate random hexcolor code
    // console.log(hexColorCode);
  }
  document.body.style.backgroundColor = hexColorCode;
  color.textContent = hexColorCode;
});

//get random number
function getRandomHexCode() {
  return Math.floor(Math.random() * hexVal.length);
}
