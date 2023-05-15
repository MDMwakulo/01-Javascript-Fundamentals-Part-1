/*let js = 'amazing';
/*console.log(40 + 8 + 10);

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

/*const age = 15;

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
console.log(`${century} century.`);*/

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

// type conversion
/*const inputYear = '1997';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('durell') + 18);

// type coercion
console.log('I am ' + 23 + ' years old.');
console.log('23' + '10' + 3);

let n = '1' + 1; // '11'
n = n - 1; // "10"
console.log(n);

console.log('10' - '4' - '3' - 2 + '5');*/

// falsy values
/*console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean('durell'));
console.log(Boolean(undefined));
console.log(Boolean({}));

let money = 0;

if (money) {
	console.log("Don't spend it all ;)");
} else {
	console.log('You should get a job');
}

let height;

if (height) {
	console.log('YAY! Height is defined');
} else {
	console.log('Height is UNDEFINED');
}*/

// equality operators
/*const age = '18';

if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(typeof favourite);

if (favourite === 23) {
	// '23' === 23
	console.log('Cool! 23 is an amazing number!');
} else if (favourite === 9) {
	console.log('9 is also a cool number');
} else if (favourite === 7) {
	console.log('7 is also a cool number');
} else {
	console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23');*/

// Logical Operators
/*const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
	console.log('Sarah is able to drive!');
} else {
	console.log('Someone else should drive...');
}

const dolphinsAvg2 = Math.floor((96 + 108 + 89) / 3);
const koalasAvg2 = Math.floor((88 + 91 + 110) / 3);
//Bonus 1
const dolphinsAvg3 = Math.floor((97 + 112 + 101) / 3);
const koalasAvg3 = Math.floor((109 + 95 + 123) / 3);
//Bonus 2
const dolphinsAvg = Math.floor((97 + 112 + 101) / 3);
const koalasAvg = Math.floor((97 + 12 + 101) / 3);

console.log(`Dolphins average score is: ${dolphinsAvg}
Koalas average score is: ${koalasAvg}`);

if (dolphinsAvg >= 100 || koalasAvg >= 100) {
	if (dolphinsAvg > koalasAvg) {
		console.log('Dolphins are the winner of the competition 🏆');
	} else if (dolphinsAvg < koalasAvg) {
		console.log('Koalas are the winner of the competition 🏆');
	} else {
		console.log('There is a draw. Both teams have drawn.');
	}
} else {
	// Bonus 1
	console.log('No team gets a trophy 😞');
}*/

// The switch statement
/*const day = 'thursday';

switch (day) {
	case 'monday': // day === 'monday'
		console.log('Plan course structure');
		console.log('Go to coding meetup');
		break;
	case 'tuesday':
		console.log('Prepare theory videos');
		break;
	case 'wednesday':
	case 'thursday':
		console.log('Write code examples');
		break;
	case 'friday':
		console.log('Record videos');
		break;
	case 'saturday':
	case 'sunday':
		console.log('Enjoy the weekend :D');
		break;
	default:
		console.log('Not a valid day!');
}

if (day === 'monday') {
	console.log('Plan course structure');
	console.log('Go to coding meetup');
} else if (day === 'tuesday') {
	console.log('Prepare theory vides');
} else if (day === 'wednesday' || day === 'thursday') {
	console.log('Write code examples');
} else if (day === 'friday') {
	console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
	console.log('Enjoy the weekend :D');
} else {
	console.log('Not a valid day!');
}*/

// Statements and Expressions
/*3 + 4;
1997;
true && false && !false;

if (26 > 18) {
	const str = '28 is bigger than 18';
}

const me = 'Durell';
console.log(`I'm ${me} a ${2023 - 1997} year old boy.`);*/

// The Conditional (Tertiary) Operator
/*const age = 26;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : `water 💧`;
console.log(drink);

let drink2;
if (age >= 18) {
	drink2 = 'wine 🍷';
} else {
	drink2 = `water 💧`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : `water 💧`}`);*/

// Coding challenge 4
const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
