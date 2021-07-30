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

// from w3schools
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


let seattle = {
  location:"seattle",
  min: 23,
  max: 65,
  avgcookies: 6.3,
  customersNum: [],
  cookiesEachHour: [],
  total: 0,

  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      console.log(i);
      this.customersNum.push(random(this.min, this.max));
    }
    console.log(this.customersNum);
  },

  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesEachHour.push(
        Math.floor(this.customersNum[i] * this.avgcookies)
      );
      this.total += this.cookiesEachHour[i];
    }
    console.log(this.cookiesEachHour);
  },

    render:function(){
        let seattleElement =document.getElementById('seattle');
        let location = document.createElement('h2');
        seattleElement.appendChild(location);
        location.textContent = this.location;
        let list=document.createElement('ul');
        seattleElement.appendChild(list);

        for (let i = 0; i <hours.length; i++) {
            let li =document.createElement('li');
            list.appendChild(li);
            li.textContent=`${hours[i]} : ${ this.cookiesEachHour[i]} cookies.`;
        }

let totalElement=document.createElement('li')
list.appendChild(totalElement);
totalElement.textContent=`total :${ this.total}cookies`;
}
}

let tokyo = {
  location:"tokyo",
  min: 3,
  max: 24,
  avgcookies: 1.2,
  customersNum: [],
  cookiesEachHour: [],
  total: 0,

  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      console.log(i);
      this.customersNum.push(random(this.min, this.max));
    }
    console.log(this.customersNum);
  },

  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesEachHour.push(
        Math.floor(this.customersNum[i] * this.avgcookies)
      );
      this.total += this.cookiesEachHour[i];
    }
    console.log(this.cookiesEachHour);
  },

    render:function(){
        let tokyoElement =document.getElementById('tokyo');
        let location = document.createElement('h2');
        tokyoElement.appendChild(location);
        location.textContent = this.location;
        let list=document.createElement('ul');
        tokyoElement.appendChild(list);

        for (let i = 0; i <hours.length; i++) {
            let li =document.createElement('li');
            list.appendChild(li);
            li.textContent=`${hours[i]} : ${ this.cookiesEachHour[i]} cookies.`;
        }

let totalElement=document.createElement('li')
list.appendChild(totalElement);
totalElement.textContent=`total :${ this.total}cookies`;
}
}

let dubai = {
  location:"dubai",
  min: 11,
  max: 38,
  avgcookies: 3.7,
  customersNum: [],
  cookiesEachHour: [],
  total: 0,

  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      console.log(i);
      this.customersNum.push(random(this.min, this.max));
    }
    console.log(this.customersNum);
  },

  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesEachHour.push(
        Math.floor(this.customersNum[i] * this.avgcookies)
      );
      this.total += this.cookiesEachHour[i];
    }
    console.log(this.cookiesEachHour);
  },

    render:function(){
        let dubaiElement =document.getElementById('dubai');
        let location = document.createElement('h2');
        dubaiElement.appendChild(location);
        location.textContent = this.location;
        let list=document.createElement('ul');
        dubaiElement.appendChild(list);

        for (let i = 0; i <hours.length; i++) {
            let li =document.createElement('li');
            list.appendChild(li);
            li.textContent=`${hours[i]} : ${ this.cookiesEachHour[i]} cookies.`;
        }

let totalElement=document.createElement('li')
list.appendChild(totalElement);
totalElement.textContent=`total :${ this.total}cookies`;
}
}

let paris = {
  location:"paris",
  min: 20,
  max: 38,
  avgcookies: 2.3,
  customersNum: [],
  cookiesEachHour: [],
  total: 0,

  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      console.log(i);
      this.customersNum.push(random(this.min, this.max));
    }
    console.log(this.customersNum);
  },

  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesEachHour.push(
        Math.floor(this.customersNum[i] * this.avgcookies)
      );
      this.total += this.cookiesEachHour[i];
    }
    console.log(this.cookiesEachHour);
  },

    render:function(){
        let parisElement =document.getElementById('paris');
        let location = document.createElement('h2');
        parisElement.appendChild(location);
        location.textContent = this.location;
        let list=document.createElement('ul');
        parisElement.appendChild(list);

        for (let i = 0; i <hours.length; i++) {
            let li =document.createElement('li');
            list.appendChild(li);
            li.textContent=`${hours[i]} : ${ this.cookiesEachHour[i]} cookies.`;
        }

let totalElement=document.createElement('li')
list.appendChild(totalElement);
totalElement.textContent=`total :${ this.total}cookies`;
}
}

let lima = {
  location:"lima",
  min: 2,
  max: 16,
  avgcookies: 4.6,
  customersNum: [],
  cookiesEachHour: [],
  total: 0,

  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      console.log(i);
      this.customersNum.push(random(this.min, this.max));
    }
    console.log(this.customersNum);
  },

  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesEachHour.push(
        Math.floor(this.customersNum[i] * this.avgcookies)
      );
      this.total += this.cookiesEachHour[i];
    }
    console.log(this.cookiesEachHour);
  },

    render:function(){
        let limaElement =document.getElementById('lima');
        let location = document.createElement('h2');
        limaElement.appendChild(location);
        location.textContent = this.location;
        let list=document.createElement('ul');
        limaElement.appendChild(list);

        for (let i = 0; i <hours.length; i++) {
            let li =document.createElement('li');
            list.appendChild(li);
            li.textContent=`${hours[i]} : ${ this.cookiesEachHour[i]} cookies.`;
        }

let totalElement=document.createElement('li')
list.appendChild(totalElement);
totalElement.textContent=`total :${ this.total}cookies`;
}
}


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



