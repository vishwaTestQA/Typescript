"use strict";
// const year =  document.getElementById('year')  //no err in this line
// const thisYear = new Date().getFullYear()   //no err , here return type number
// year.setAttribute("datetime", thisYear)  // shows two err 1)year - possibly null 2)thisYear - becz cant assign type number to type string
// year.textContent = thisYear
const year = document.getElementById('year'); //no err in this line
const thisYear = new Date().getFullYear(); //no err , here return type number
year.setAttribute("datetime", thisYear); // shows two err 1)year - possibly null 2)thisYear - becz cant assign type number to type string
year.textContent = thisYear;
//Recomended way
const year2 = document.getElementById('year');
const thisYear2 = new Date().getFullYear().toString();
year2.setAttribute("datetime", thisYear2); // shows two err 1)year - possibly null 2)thisYear - becz cant assign type number to type string
year2.textContent = thisYear2;
