console.log("Rua El-kasheef");

let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);

let bool = "1" === 1;
console.log(bool);

let subscribed = false;
let loggedIn = true;

if (subscribed === true) {
  console.log("show the video");
} else if (loggedIn === true) {
  console.log("tell the user to upgrade their subscription");
} else {
  console.log("tell user to log into account");
}

let cash = 50;
let price = 60;
let difference = cash - price;

if (cash > price) {
  console.log(`you paid extra - here's ${difference} dollars change`);
} else if (cash === price) {
  console.log("you paid the exact amount, have a nice day!");
} else {
  console.log(`not enough money - you still owe ${difference * -1} dollars`);
}

let isStoreOpen = true;
if (cash <= price && isStoreOpen === true) {
  console.log(`print the receipt`);
} else {
  console.log(`you cannot purchase at this time`);
}

let val = "";

if (val) {
  console.log("truthy value", !!val);
} else {
  console.log("falsy value", !!val);
}

let hot = true;

hot ? console.log("weather is hot outside") : console.log("weather is cold");

// let sub = true
// let logIn = true

// let str = sub || logIn ? "show the video" : "hide the video"
// console.log(str)

// let count = 1;

// while (count <= 100) {
//     console.log (count)
//     count = count + 1
// }

for (let i = 0; i < 100; i++) {
  console.log(i + 1);
}

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} --> Frontend Simplified`);
  } else if (i % 3 === 0) {
    console.log(`${i} --> Frontend`);
  } else if (i % 5 === 0) {
    console.log(`${i} --> Simplified`);
  } else {
    console.log(`${i} --> ${1}`);
  }
}

const str = "Frontend Simplified";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

//FUNCTION DEFINITION
function welcomePersonToFES(name) {
  //console.log ("Welcome to FES, Rua")
  console.log(`Welcome to FES, ${name}`);
}
//CALL THE FUNCTION
welcomePersonToFES("Rua");
welcomePersonToFES("El-kasheef");
welcomePersonToFES("Ojelade");

function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log(sumOfTwoNumbers(10, 10));

// function convertCelsiusToFahrenheit (celsius) {
//     return celsius * 1.8 + 32
// }

// console.log (convertCelsiusToFahrenheit(10))

const convertCelsiusToFahrenheit = (celsius) => {
  return celsius * 1.8 + 32;
};

console.log(convertCelsiusToFahrenheit(60));

// let arr = [20, 30, 40, 50, 100]

// console.log (arr[0])
// console.log (arr[1])
// console.log (arr[2])
// console.log (arr[3])
// console.log (arr[arr.length - 1])

// arr.push(200)
// console.log (arr[arr.length - 1])
// // console.log(arr)

// let newArr = arr.filter (element => element <50 )

// console.log (newArr)

// let grades = [ "A+", "A", "FAIL"]

// let goodGrades = grades.filter(element => element !== "FAIL")
// console.log (goodGrades)

// let theGrades = []

// for (let i = 0; i < grades.length; ++i) {
//     if (grades [i] !== "FAIL") {
//         theGrades.push (grades[i])
//     }
//     console.log (theGrades)
// }

// let arr = [1, 4, 9, 16]

// let newArr = arr.map (element => undefined )

// console.log (newArr)

// let cents = dollars.map (element => element * 100)
// console.log(cents)

let dollars = [1, 5, 10, 3];
let cents = [];

for (let i = 0; i < dollars.length; i++) {
  cents.push(dollars[i] * 100);
}
console.log(cents);

// let userFirstName ='RUA'
// let userLastName = 'El-kasheef'
// let userDiscordID = 'Rua EL-kasheef#001'
// let userSubscriptionnStatus = 'VIP'

let users = [
    {
    username: 'Rua',
    email: 'rua@gmail.com',
    password: 'rua123',
    discordID: 'Rua El-kasheef#001',
    subscriptionStatus: 'VIP',
    lessonsCompleted: [0, 1]
    },
    {
    username: 'Azeez',
    email: 'azeez@gmail.com',
    password:'azeez123',
    discordID: 'Azeez#001',
    subscriptionStatus: 'VIP',
    lessonsCompleted: [0, 1]
    }
]

// console.log(users[0].email);
// console.log(users[1].email);

// loging in a user

// function login(email, password) {
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].email === email) {
//       console.log(users[i]);
//       if (users[i].password === password) {
//         console.log("log the user in - the details are correct");
//       } else {
//         console.log("the information is incorrect - try again");
//       }
//       return;
//     }
//     console.log("cound not find an email that matches");
//   }
// }

// login("azeez@gmail.com", "azeez123");


function register (user){
  // name,
  // email,
  // password,
  // subscriptionStatus,
  // discordId,
  // lessonsCompleted
  // ) {
  // let user = {
  //   username: name,
  //   email: email,
  //   password: password,
  //   subscriptionStatus: subscriptionStatus,
  //   discordId: discordId,
  //   lessonsCompleted: lessonsCompleted,
  // }
  users.push(user);
}
register({
  name: "rua", 
  email: "rua@gmail.com", 
  password: "rua123", 
  subscriptionStatus: "VIP", 
  discordId:"rua#001", 
  lessonsCompleted: [0, 1, 2, 3]
});

console.log (users);

// first way to access element
document 

console.log (document.querySelector('#title'))
// second way to access element

console.log (document.getElementById("title"))

console.log (document.querySelector('#title').innerHTML += ' Frontend Simplified')

document.querySelector ('#title').style.color = ''

// function changeTitleToRed() {
//   document.querySelector('#title').style.color = 'red'
//   console.log ('clicked');
// }


function toggleDarkMode(){
  document.querySelector('body').classList.toggle('dark-theme')
}