"use strict";

let hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "11am",
  "12am",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7am",
];

let shops = [];
// from w3schools
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Shop(loc, min, max, avg) {
  this.location = loc;
  this.min = min;
  this.max = max;
  this.avgcookies = avg;
  this.customersNum = [];
  this.cookiesEachHour = [];
  this.total = 0;
  shops.push(this);
}

Shop.prototype.calcCustomersEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    console.log(i);
    this.customersNum.push(random(this.min, this.max));
  }
  console.log(this.customersNum);
};

Shop.prototype.calcCookiesEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookiesEachHour.push(
      Math.floor(this.customersNum[i] * this.avgcookies)
    );
    this.total += this.cookiesEachHour[i];
  }
  console.log(this.cookiesEachHour);
};

Shop.prototype.render = function () {
  let parentElement = document.getElementById(this.location);
  let location = document.createElement("h2");
  parentElement.appendChild(location);
  location.textContent = this.location;
  let list = document.createElement("ul");
  parentElement.appendChild(list);

  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement("li");
    list.appendChild(li);
    li.textContent = `${hours[i]} : ${this.cookiesEachHour[i]} cookies.`;
  }

  let totalElement = document.createElement("li");
  list.appendChild(totalElement);
  totalElement.textContent = `total :${this.total}cookies`;
};


let seattle = new Shop('seattle', 23, 65, 6.3);
let tokyo = new Shop('tokyo', 3, 24, 1.2);
let dubai = new Shop('dubai', 11, 38, 3.7);
let paris = new Shop('paris', 20, 38, 2.3);
let lima = new Shop('lima', 2, 16, 4.6);

console.log(shops);



seattle.calcCustomersEachHour();
seattle.calcCookiesEachHour();
seattle.render();

tokyo.calcCustomersEachHour();
tokyo.calcCookiesEachHour();
tokyo.render();

dubai.calcCustomersEachHour();
dubai.calcCookiesEachHour();
dubai.render();

paris.calcCustomersEachHour();
paris.calcCookiesEachHour();
paris.render();

lima.calcCustomersEachHour();
lima.calcCookiesEachHour();
lima.render();


