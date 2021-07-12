'use strict';
 let hours=['6am',7am','8am','9am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7am' ];

// from w3schools
 function random (min, max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
let seattle={ 
    location: 'seattle',
    mincustomers:23,
    maxcustomers:65,
    avgcookies:6.3,
    customerseachhour:[],
    cookieseachhour:[],
    total:,



    calccustomerseachhour: function(){
        for (let index = 0; i < hour.length; i++) {
        
            this.calccustomerseachhour.push(random(this.mincustomers,this.mincustomers))
            
        }
    },
    calccookieseachhour:function (){
        for (let i=0; i < hour.length; i++)
        this.cookieseachhour.push(math.floor (this.customerseachhour[i]*this.avgcookies));
this.total+=this.cookieseachhour[i];
    }

    },
    render:function(){
        let parent =Document.getelementbyid
        ('parent');

        ler nameElmant=document.createElement('h2');
        // console.log(nameelmant);
        parent.appendchild(nameElmant);
        nameElmant.textconttent= this.location;
        let unorderedlist=document.createElement('ul');
        parent.appendchild(unorderedlist);


        for (let i = 0; i < array.length; i++) {
            let lielemant=document.createElement('li');
            unorderedlist.appendChild(liElemant);
            liElemant.textconttent=`${ hours [i]}: ${ this.cookieseachhour[i]}cookied`;

        }

let totalElement=document.createElement('li')
unorderedlist.appendChild(totalElement);
totalElement.textconttent=`total:${ this.total}cookies`;

}


}

    // console.log(seattle.mincustomers); 
seattle.calccustomerseachhour();
// console.log(seattle.customerseachhour);
seattle.calccookieseachhour();
// console.log(seattle.cookieseachhour);
seattle.render();
  
