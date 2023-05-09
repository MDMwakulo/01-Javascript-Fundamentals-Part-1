/*let js = 'amazing';
console.log(40 + 8 + 10);

let firstName = 'Verah';
console.log(firstName);

let myFirstJob = 'engineer';
console.log(myFirstJob);*/

// My Country
/*const country = 'Kenya',
	continent = 'Africa',
	language = 'Kiswahili';
let population = '40000000';

population /= 2;
population++;
population = '40 million';
const finLandPopulation = '6000000';
const compareTwoCountries = population > finLandPopulation;
const avgPopulation = '33000000';
const compareAvgPopulation = population > avgPopulation;

console.log(country, continent, population, compareTwoCountries, compareAvgPopulation);
console.log(country + ' is in ' + continent + ',' + ' and its ' + population + ' people speak ' + language + '.');*/

//Coding Challenge 2
/*const markMass1 = 78,
	markHeight1 = 1.69,
	johnMass1 = 92,
	johnHeight1 = 1.95,
	markMass2 = 95,
	markHeight2 = 1.88,
	johnMass2 = 85,
	johnHeight2 = 1.76;

const markBMI1 = Math.floor(markMass1 / markHeight1 ** 2),
	markBMI2 = Math.floor(markMass2 / (markHeight2 * markHeight2)),
	johnBMI1 = Math.floor(johnMass1 / johnHeight1 ** 2),
	johnBMI2 = Math.floor(johnMass2 / (johnHeight2 * johnHeight2));

console.log(markBMI1, markBMI2, johnBMI1, johnBMI2);

const markHigherBMI1 = markBMI1 > johnBMI1,
	markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI1, markHigherBMI2);

if (markBMI1 > johnBMI1) {
	console.log(`Mark's BMI  is higher that John's.
Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1}).`);
} else {
	console.log(`John's BMI is higher than Mark's.
John's BMI (${markBMI1}) is higher than Mark's (${johnBMI1}).`);
}

if (markBMI2 > johnBMI2) {
	console.log(`Mark's BMI  is higher that John's.
Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2}).`);
} else {
	console.log(`John's BMI is higher than Mark's.
John's BMI (${markBMI2}) is higher than Mark's (${johnBMI2}).`);
}*/

/*let javascriptIsFun = true;
console.log(typeof javascriptIsFun);
javascriptIsFun = 'Yes';
console.log(typeof javascriptIsFun);*/

/*lastName = 'Mwakulo';
console.log(lastName);*/

/*console.log(2 ** 3); // 2 * 2 * 2 = 8 */

/*let x = 10 + 5;
console.log(x);

const firstName = 'Lenny';
const age = 27;

const isFullAge = age > 30;
console.log(isFullAge);*/

/*const now = 27;
const ageDurell = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);*/

/*const firstName = 'Durell';
const job = 'student';
const birthYear = 1997;
const year = 2023;

const durell = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(durell);

const durellNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(durellNew);

console.log('String with \n\
with multiple \n\
lines.');

console.log(`String with
with multiple
lines.`);*/

const age = 15;

if (age >= 18) {
	console.log('Sarah can start driving license 🚗.');
} else {
	const yearsLeft = 18 - age;
	console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}
console.log(`${century} century.`);
