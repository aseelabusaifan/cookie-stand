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
  let parentElement = document.getElementById("table");
  parentElement.textContent = ' ';
  let headerRaw = document.createElement("tr");
  parentElement.appendChild(headerRaw);
  let th = document.createElement("th");
  headerRaw.appendChild(th);
  th.textContent = " ";
  for (let i = 0; i < hours.length; i++) {
    th = document.createElement("th");
    headerRaw.appendChild(th);
    th.textContent = hours[i];
  }
  th = document.createElement("th");
  headerRaw.appendChild(th);
  th.textContent = "Daily Location Total";

  for (let i = 0; i < shops.length; i++) {
    let raw = document.createElement("tr");
    parentElement.appendChild(raw);
    let td = document.createElement("td");
    raw.appendChild(td);
    td.textContent = shops[i].location;

    for (let b = 0; b < hours.length; b++) {
      td = document.createElement("td");
      raw.appendChild(td);
      td.textContent = shops[i].cookiesEachHour[b];
    }
    td = document.createElement("td");
    raw.appendChild(td);
    td.textContent = shops[i].total;
  }

   let raw = document.createElement("tr");
    parentElement.appendChild(raw);
    let td = document.createElement("td");
    raw.appendChild(td);
    td.textContent = 'Total';
  for (let b = 0; b < hours.length; b++) {
    td = document.createElement("td");
    raw.appendChild(td);
    td.textContent = shops[0].cookiesEachHour[b];
  }
  td = document.createElement("td");
  raw.appendChild(td);
  td.textContent = shops[0].total;
};

let seattle = new Shop("seattle", 23, 65, 6.3);
let tokyo = new Shop("tokyo", 3, 24, 1.2);
let dubai = new Shop("dubai", 11, 38, 3.7);
let paris = new Shop("paris", 20, 38, 2.3);
let lima = new Shop("lima", 2, 16, 4.6);

console.log(shops);

seattle.calcCustomersEachHour();
seattle.calcCookiesEachHour();

tokyo.calcCustomersEachHour();
tokyo.calcCookiesEachHour();

dubai.calcCustomersEachHour();
dubai.calcCookiesEachHour();

paris.calcCustomersEachHour();
paris.calcCookiesEachHour();

lima.calcCustomersEachHour();
lima.calcCookiesEachHour();

Shop.prototype.render();

let form =document.getElementById('form');
form.addEventListener('submit',formCall);

function formCall(event){
  event.preventDefault();
  let location = event.target.location.value;
  let min = Number(event.target.min.value);
  let max = Number(event.target.max.value);
  let avg = Number(event.target.avg.value);

  let newShop = new Shop(location, min, max, avg);
  newShop.calcCustomersEachHour();
  newShop.calcCookiesEachHour();
  Shop.prototype.render();

}
