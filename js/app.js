// 'use strict';
//  let hours=['6am',7am','8am','9am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7am' ];

// // from w3schools
//  function random (min, max) {
// return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }
// let seattle={ 
//     location: 'seattle',
//     mincustomers:23,
//     maxcustomers:65,
//     avgcookies:6.3,
//     customerseachhour:[],
//     cookieseachhour:[],
//     total:,



//     calccustomerseachhour: function(){
//         for (let index = 0; i < hour.length; i++) {

//             this.calccustomerseachhour.push(random(this.mincustomers,this.mincustomers))

//         }
//     },
//     calccookieseachhour:function (){
//         for (let i=0; i < hour.length; i++)
//         this.cookieseachhour.push(math.floor (this.customerseachhour[i]*this.avgcookies));
// this.total+=this.cookieseachhour[i];
//     }

//     },
//     render:function(){
//         let parent =Document.getelementbyid
//         ('parent');

//         ler nameElmant=document.createElement('h2');
//         // console.log(nameelmant);
//         parent.appendchild(nameElmant);
//         nameElmant.textconttent= this.location;
//         let unorderedlist=document.createElement('ul');
//         parent.appendchild(unorderedlist);


//         for (let i = 0; i < array.length; i++) {
//             let lielemant=document.createElement('li');
//             unorderedlist.appendChild(liElemant);
//             liElemant.textconttent=`${ hours [i]}: ${ this.cookieseachhour[i]}cookied`;

//         }

// let totalElement=document.createElement('li')
// unorderedlist.appendChild(totalElement);
// totalElement.textconttent=`total:${ this.total}cookies`;

// }


// }

//     // console.log(seattle.mincustomers); 
// seattle.calccustomerseachhour();
// // console.log(seattle.customerseachhour);
// seattle.calccookieseachhour();
// // console.log(seattle.cookieseachhour);
// seattle.render();




let hours = ['6am', '7am', '8am', '9am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7am'];

// from w3schools
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let shops = [];

function Shop(locationName, mincustomers, maxcustomers, avgCookies) {
  this.locationName = locationName;
  this.mincustomers = mincustomers;
  this.maxcustomers = maxcustomers;
  this.avgCookies = avgCookies;
  this.totalCookiedPerday = 0;
  this.customerseachHour = [];
  this.cookiesechhour = [];
  shops.push(this);
}

console.log(this);

Shop.prototype.calaCustomerseachHour = function
  () {
  for (let i = 0; i < hours.length; i++) {
    this.customerseachHour.push(random(this.mincustomers, this.maxcustomers))

    this.cookiesechhour.push(Math.floor(this.customerseachhour[i] * this.avgcookies));

    this.totalCookiedPerday += this.
      cookiesechHour[i];

    // this.total += this.  this.cookiesechhour = [];
    // [i]

  }


}
let seattle = new Shop('seattle', 23, 65, 6.3);
let tokyo = new Shop('tokyo', 3, 24, 1.2);
let dubai = new Shop('dubai', 11, 38, 3.7);
let paris = new Shop('paris', 20, 38, 2.3);
let lima = new Shop('lima', 2, 16, 4.6);




let parent = document.getElementById('parent');
console.log(parent);

let table = document.getElementById('table')

function header() {
  let headerRow = document.createElement("tr")
  table.appendChild(headerRow)
  let firstTh = document.createElement("th")
  headerRow.appendChild(firstTh)
  td.textContent = ""



  for (let i = 0; i < hours.length; i++) {
    let hourth = document.createElement("th");
    headerRow.appendChild(hourth)
    hourth.textContent = hours[i];
  }
  let lastTh = document.createElement("th")
  headerRow.appendChild(lastTh);
  lastTd.textContent = 'daliy location total';


}

shops.prototype.render = function () {
  let dataRow = document.createElementNS('tr');
  table.appendChild(dataRow);
  let nameTd = document.createElementNS('td');

  dataRow.appendChild(nameTd);

  nameTd.textContent = this.locationName;

  for (let i = 0; i < hours.length; i++) {
    let cookiesTd = document.createElementNS('td');
    dataRow.appendChild(cookiesTd);
    cookiesTd.textContent = this.cookiesechHour[i];
  }



  let totalTd = document.createElementNS('td');
  dataRow.appendChild(totalTd);
  totalTd.textContent = this.totalCookiedPerday;


}

function makefooter() {
  let footerRow = document.createElementNS('tr');
  table.appendChild(footerRow);


  let firsTd = document.createElementNS('th');
  footerRow.appendChild(firstTd);
  firstTd.textContent = 'Totals'

  let totalofTotals = 0;



  for (let i = 0; i < hours.length; i++) {
    console.log(hours[i]);

    let totalforeachHour = 0;

    let totalforeacHour = 0;
    for (let j = 0; j < shops.length; j++) {
      // console.log(shops[j].cookiesechHour[i]);
      // totalforeacHour[i];
      totalforeachHour += shops[j].
        // cookiesechHour[i];
        totalofTotals += shops[j].calcCookiesEachHour[i];


    }
    console.log(totalforeacHour);
    console.log('totalss'.totalofTotals);
    let footerTh = document.createElement('th')
    footerRow.appendChild(footerTh);
    footerTh.textContent = totalforeachHour;



  }

  let lastTh = document.createElementNS('th');
  footerRow.appendChild(lastTh);
  lastTh.textContent = totalofTotals;



}


console.log(shops);
makeHeader();


for (let i = 0; i < shops.length; i++) {
  shops[i].calaCustomerseachHour();
  shops[i].calcCookiesEachHour();
  shops[i].render();
}
makefooter();
