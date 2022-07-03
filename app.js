/* Taking the color variables */
const Orange = "hsl(25, 97%, 53%)";
const White = "hsl(0, 0%, 100%)";
const Light_Grey = "hsl(217, 12%, 63%)";
const Medium_Grey = "hsl(216, 12%, 54%)";
const Dark_Blue = "hsl(213, 19%, 18%)";
const Very_Dark_Blue = "hsl(216, 12%, 8%)";


/* Grabbing all the buttons */
const btn1 = document.getElementById('rating-btn1');
const btn2 = document.getElementById('rating-btn2');
const btn3 = document.getElementById('rating-btn3');
const btn4 = document.getElementById('rating-btn4');
const btn5 = document.getElementById('rating-btn5');

const submit_btn = document.getElementById('submit-btn');


var ratingSelected = 0;

function resetAllBtnColor(){
  btn1.style.color = Light_Grey;
  btn1.style.backgroundColor = "#31353b";
  btn2.style.color = Light_Grey;
  btn2.style.backgroundColor = "#31353b";
  btn3.style.color = Light_Grey;
  btn3.style.backgroundColor = "#31353b";
  btn4.style.color = Light_Grey;
  btn4.style.backgroundColor = "#31353b";
  btn5.style.color = Light_Grey;
  btn5.style.backgroundColor = "#31353b";
}

btn1.addEventListener('click', function onClick() {
  ratingSelected = 1;
  resetAllBtnColor();
  btn1.style.backgroundColor = Light_Grey;
  btn1.style.color = 'white';
});

btn2.addEventListener('click', function onClick() {
  ratingSelected = 2;
  resetAllBtnColor();
  btn2.style.backgroundColor = Light_Grey;
  btn2.style.color = 'white';
});

btn3.addEventListener('click', function onClick() {
  ratingSelected = 3;
  resetAllBtnColor();
  btn3.style.backgroundColor = Light_Grey;
  btn3.style.color = 'white';
});

btn4.addEventListener('click', function onClick() {
  ratingSelected = 4;
  resetAllBtnColor();
  btn4.style.backgroundColor = Light_Grey;
  btn4.style.color = 'white';
});

btn5.addEventListener('click', function onClick() {
  ratingSelected = 5;
  resetAllBtnColor();
  btn5.style.backgroundColor = Light_Grey;
  btn5.style.color = 'white';
});


submit_btn.addEventListener('click', function () {
  if(ratingSelected != 0){
    const rating_value = document.getElementsByClassName('rating-value')[0];
    rating_value.innerHTML = "You selected " + ratingSelected + " out of 5";
    const card_ele = document.getElementsByClassName('card')[0];
    card_ele.setAttribute("style","transform: rotateY(180deg);");
  }
});

