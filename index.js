console.log("  -----------------------------------");
console.log("   ++++++++++ 01 Exercise ++++++++++");

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

const total = orders.reduce((acc, amVal) => acc + amVal.amount, 0);

console.log("Total amount of orders:", total);

console.log("  -----------------------------------");
console.log("   ++++++++++ 02 Exercise ++++++++++");

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const incrementNum = (val) => {
  return val.map((num) => num + 1);
};

console.log(incrementNum(arrayOfNumbers));

console.log("  -----------------------------------");
console.log("   ++++++++++ 03 Exercise ++++++++++");

const filterEvens = (filterVal) => {
  return filterVal.filter((cVal) => (cVal % 2 === 0 ? cVal : false));
};

console.log(filterEvens([1, 2, 3, 11, 12, 13]));
console.log(filterEvens([22, 2, 31, 110, 6, 13]));

console.log("  -----------------------------------");
console.log("   ++++++++++ 04 Exercise ++++++++++");

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

const filterArray = (filterVal, filterLetters) => {
  return filterVal
    .filter((nVal) => nVal.includes(filterLetters))
    .map((item) => {
      return item[0].toUpperCase() + item.slice(1);
    });
};

console.log(filterArray(friends, "ka"));
console.log(filterArray(friends, "e"));

console.log("  -----------------------------------");
console.log("   ++++++++++ 05 Exercise ++++++++++");

const sumOf = (val) => {
  return val.reduce((acc, item) => acc + item);
};
console.log(sumOf([1, 2, 3, 4, 5]));
console.log(sumOf([6, 7, 7]));

console.log("  -----------------------------------");
console.log("   ++++++++++ 06 Exercise ++++++++++");

const squareRootOfArray = (acc) => {
  return acc.map((num) => Math.sqrt(num), [acc]);
};

console.log(squareRootOfArray([2.25, 4, 9, "hello"]));
