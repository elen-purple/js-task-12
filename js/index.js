//* /////////// Task 1 ///////////
console.log("/////////// Task 1 ///////////");
const user = {
  name: "Alisa",
  hobby: "crocheting",
  premium: true,
};

const addMood = (user) => {
  user.mood = "happy";
  return user;
};
const changeHobby = (user) => {
  user.hobby = "skydiving";
  return user;
};
const changePremium = (user) => {
  user.premium = false;
  return user;
};
const showAllKeysAndValues = (user) => {
  const keys = Object.keys(user);
  for (const key of keys) {
    console.log(`${key}: ${user[key]}`);
  }
  return user;
};

console.log(addMood(user));
console.log(changeHobby(user));
console.log(changePremium(user));
console.log(showAllKeysAndValues(user));
//* /////////// Task 2 ///////////
console.log("/////////// Task 2 ///////////");
const thread = {
  color: 5,
  lot: 568,
  rateOfCotton: 55,
  wieght: 50,
  length: 160,
};
const countProps = (obj) => {
  const keys = Object.keys(obj);
  return keys.length;
};
console.log(countProps(thread));
//* /////////// Task 3 ///////////
console.log("/////////// Task 3 ///////////");
const employees = {
  Anna: 42,
  Mary: 39,
  Viktor: 38,
  Pency: 41,
  Lana: 40,
};
const findBestEmployee = (employees) => {
  const names = Object.keys(employees);
  let theBestWork = 0;
  let theBestEmployee;
  for (const employee of names) {
    if (theBestWork < employees[employee]) {
      theBestWork = employees[employee];
      theBestEmployee = employee;
    }
  }
  return theBestEmployee;
};
console.log(findBestEmployee(employees));
//* /////////// Task 4 ///////////
console.log("/////////// Task 4 ///////////");
const shopEmployees = {
  Anna: 13000,
  Mary: 12000,
  Viktor: 20000,
  Pency: 15000,
  Lana: 17000,
};
const countTotalSalary = (employees) => {
  const saleries = Object.values(employees);
  let sumOfSaleries = 0;
  for (const salery of saleries) {
    sumOfSaleries += salery;
  }
  return sumOfSaleries;
};
console.log(countTotalSalary(shopEmployees));
//* /////////// Task 5 ///////////
console.log("/////////// Task 5 ///////////");
const pizzas = [
  {
    name: "Masarela",
    prise: 200,
  },
  {
    name: "Four Cheese",
    prise: 200,
  },
  {
    name: "Margarita",
    prise: 200,
  },
  {
    name: "Havayskaya",
    prise: 200,
  },
];
const getAllPropValues = (arr, prop) => {
  const namesOfPizzas = [];
  for (const element of arr) {
    namesOfPizzas.push(element[prop]);
  }
  return namesOfPizzas;
};
console.log(getAllPropValues(pizzas, "name"));
//* /////////// Task 6 ///////////
console.log("/////////// Task 6 ///////////");
const products = [
  {
    name: "apple",
    price: 50,
    quantity: 23,
  },
  {
    name: "banana",
    price: 100,
    quantity: 13,
  },
  {
    name: "pineapple",
    price: 112,
    quantity: 26,
  },
  {
    name: "greyfruit",
    price: 128,
    quantity: 10,
  },
  {
    name: "mango",
    price: 102,
    quantity: 34,
  },
  {
    name: "peach",
    price: 81,
    quantity: 63,
  },
];
const calculateTotalPrice = (allProdcuts, productName) => {
  let userPrice = 0;
  for (const product of allProdcuts) {
    if (product.name === productName) {
      userPrice = product.price * product.quantity;
    }
  }
  return userPrice;
};
console.log(calculateTotalPrice(products, "mango"));
//* /////////// Task 7 ///////////
console.log("/////////// Task 7 ///////////");

// TODO seeBalance
// TODO seeTransactions
// TODO makePositiveTransaction
// TODO makeNegativeTransaction

const account = {
  name: "Tana",
  surname: "Smith",
  yearsOld: 24,
  yearOfRegistration: 2016,
  balance: 0,
  transactions: [],
  seeBalance() {
    alert(`Your balance is ${this.balance}$`);
  },
  seeTransactions() {
    alert(
      `You had ${this.transactions.length} transactions. See more in console`
    );
    console.log(this.transactions);
  },
  makePositiveTransaction(money, year) {
    const nMoney = Number.parseFloat(money);
    this.balance += nMoney;
    this.transactions.push({ money: nMoney, operation: "+", year });
  },
  makeNegativeTransaction(money, year) {
    const nMoney = Number.parseFloat(money);
    this.balance -= nMoney;
    this.transactions.push({ money: nMoney, operation: "-", year });
  },
};

const workWithAccount = (account) => {
  let isAccepting = "";
  do {
    if (confirm(`Do you want to see balance?`) === true) {
      account.seeBalance();
    }
    if (confirm(`Do you want to see transactions?`) === true) {
      account.seeTransactions();
    }
    if (confirm(`Do you want to make positive transaction?`) === true) {
      account.makePositiveTransaction(
        prompt(`How many do you want to transact`),
        prompt(`Enter year`)
      );
    }
    if (confirm(`Do you want to make negative transaction?`) === true) {
      account.makeNegativeTransaction(
        prompt(`How many do you want to transact`),
        prompt(`Enter year`)
      );
    }
    isAccepting = confirm(`Do you want to work with account?`);
  } while (isAccepting === true);
};
workWithAccount(account);
