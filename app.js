import Donuts from "./Donuts.js";


const countEl = document.querySelector("#count");
const autoclickEl = document.querySelector("#autoclick");
const multiplierEl = document.querySelector("#multiplier");
const autoclickCostEl = document.querySelector("#autoclickCost");
const multiplierCostEl = document.querySelector("#multiplierCost");
const clickValueEl =document.querySelector("#clickValue");
const resetEl = document.querySelector("#reset")
const donutEl = document.querySelector("#donut");

const donut = new Donuts(0, 0, 0);

countEl.innerText = donut._count;
autoclickEl.innerText = donut._autoclick;
multiplierEl.innerText = donut._multiplier;
autoclickCostEl.innerText = donut._autoclickCost;
multiplierCostEl.innerText = donut._multiplierCost;
clickValueEl.innerText = donut._clickValue;

const modal = document.querySelector(".modal")
const companyBtn = document.querySelector(".sub-btn");
companyBtn.addEventListener("click", () => {
modal.classList.add("active")
})

const closeBtn = document.querySelector(".close-modal");
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active")
})


const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
  location.reload();
})

const countBtn = document.querySelector(".countBtn");
countBtn.addEventListener("click", () => {
  donut.click();
  disableAutoclick();
  disableMultiplier();
  countEl.innerText = Math.round(donut._count);
})

const donutimg = document.querySelector(".donutimg");
donutimg.addEventListener("click", () => {
  donut.click();
  disableAutoclick();
  disableMultiplier();
  countEl.innerText = Math.round(donut._count);
})


const autoclickBtn = document.querySelector("#autoclickBtn");
autoclickBtn.addEventListener("click", () => {
  if (donut._count >= donut._autoclickCost) {
    donut._count -= donut._autoclickCost;
    donut._autoclickCost *= 1.1;
    donut._autoclick++;
    setInterval(() => {
      donut.click();
      disableAutoclick();
      disableMultiplier();
      countEl.innerText = Math.round(donut._count);
      autoclickEl.innerText = Math.round(donut._autoclick)
      autoclickCostEl.innerText = Math.ceil(donut._autoclickCost);
    }, 1000)
  }
  else {
    alert("You cannot afford an autoclicker yet!")
  }
})


function disableAutoclick(){
if (donut._count >= donut._autoclickCost) {
autoclickBtn.removeAttribute("disabled")
}
else{
  autoclickBtn.setAttribute("disabled", "disabled");
}
}

function disableMultiplier(){
  if (donut._count >= donut._multiplierCost){
    multiplierBtn.removeAttribute("disabled")
  }
  else{
    multiplierBtn.setAttribute("disabled", "disabled")
  }
}


const multiplierBtn = document.querySelector("#multiplierBtn")
multiplierBtn.addEventListener("click", () => {

  donut.multiplierClick();
  disableAutoclick();
      disableMultiplier();
  multiplierEl.innerText = Math.round(donut._multiplier)
  multiplierCostEl.innerText = Math.ceil(donut._multiplierCost);
  countEl.innerText = Math.round(donut._count);
  clickValueEl.innerText = Math.round(donut._clickValue);
})


