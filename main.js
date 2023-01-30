// My age
var myAge = 24;

// variable with inital value of 2, expected to change
var earlyYears = 2;

var earlyYears = earlyYears * 10.5;


// myAge menus 2

var myAge = myAge - 2;

var laterYears = myAge;


//laterYear multiplied by 4 to calculate the number of dog years accounted for by later years
var laterYears = laterYears * 4;

console.log(earlyYears);
console.log(laterYears);


//This is my age in dog years
var myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

//my name with toLowerCase method will turn my name all lowercase letters
var myName = 'Dayra'.toLowerCase();

//final results
console.log(`my name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

