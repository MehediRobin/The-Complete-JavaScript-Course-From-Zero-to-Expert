'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
const displayMovements = function(movements){
    movements.forEach(function(move,i){
        const html = `<div class="movements__row">
          <div class="movements__type movements__type--deposit">2 deposit</div>
          <div class="movements__date">${i + 1}</div>
          <div class="movements__value">${mov}</div>
        </div>`
    })
}


//Moving DOM Elements




// const currUnique = new Set(['USD','EUR','GBP','BDT'])
// currUnique.forEach(function (value, key, map) {
// console.log(`${key}: ${value}`);

// })


// //For Of
// for (const movement of movements) {
//     if(movement>0){
//         console.log(`You deposited ${movement}`);
//     } else {
//         console.log(`You withdrew ${Math.abs(movement)}`);
//     }
// }

// //For Each
// movements.forEach(function(movement, index, array){
//     console.log(movement, index, array);
// })

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// //Slice Methods [Doesn't mutate the original array]
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -1));
// console.log(arr.slice());
// console.log([...arr]);

// //Splice Methods  [Mutates the original Arrary]
// console.log(arr.splice(2));
// console.log(arr.splice(1, 3));
// console.log(arr);

// // Reverse Method [Mutates the original Arrary]
// arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// const arr2 = ['j', 'i', 'h', 'k', 'l'];
// console.log(arr2.reverse());
// console.log(arr2);

// //Concat Methods [Doesn't mutate the original]

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //Join Methods
// console.log(letters.join(' - '));

// //Push, Shift, Unshift, Pop,

// //AT Method
// const array = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// //Getting the last element

// console.log(array[array.length - 1]);
// console.log(array.at(-1));
// console.log(array.slice(-1));
