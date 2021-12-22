// SOME VARRIABLES

var errMessage = "It cant be zero or less than zero";

// INPUTS
const bill = document.getElementById("bill_inpt");
const numOfPeople = document.getElementById("number_of_people");

// SPANS
const tipAmountCosts = document.querySelector(".tip_amount_costs");
const totalAmountCosts = document.querySelector(".total_amount_costs");

const billErr = document.querySelector(".number_span");
const peopleErr = document.querySelector(".number_people_span");

// PERCENT BUTTON
const five = document.getElementById("five");
const ten = document.getElementById("ten");
const fiveteen = document.getElementById("fiveteen");
const twentyfive = document.getElementById("twentyfive");
const fivetee = document.getElementById("fivetee");

const percentBtns = document.querySelectorAll(".percent_btn");

// RESET BTN
const resetBtn = document.getElementById("reset_btn");

// PERCENT BUTTON FUNCTIONS
let btnValue;

percentBtns.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

// CUSTOM PERCENT INPUT
const customPercent = document.getElementById("custom_inpt");
var customPerValue = customPercent.value;


// TIP CALCULATOR APP
function tipApp() {
  let saveBill = bill.value;
  let savePerson = numOfPeople.value;

  let percentValue;

  let calcIt = (saveBill * btnValue) / savePerson;

  let billPerPerson = saveBill / savePerson;
  let totalPerPerson = calcIt + billPerPerson;

  let roundTheTip = Math.round(calcIt * 100) / 100;
  let roundTheTotal = Math.round(totalPerPerson * 100) / 100;

  if (saveBill <= 0) {
    billErr.textContent = errMessage;
    bill.focus();
  } else if (savePerson <= 0) {
    billErr.textContent = "";
    numOfPeople.focus();
    peopleErr.textContent = errMessage;
  } else {
    billErr.textContent = "";
    peopleErr.textContent = "";
    tipAmountCosts.textContent = roundTheTip;
    totalAmountCosts.textContent = roundTheTotal;
  }
}

function handleClick(event) {
  percentBtns.forEach((btn) => {
    btn.classList.remove("active_btn");
    
    if (event.target.innerHTML == btn.innerHTML) {
      btn.classList.add("active_btn");
      btnValue = parseFloat(btn.innerHTML) / 100;
    }
  });

  console.log(btnValue);
}
