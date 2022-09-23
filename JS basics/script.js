//типы данных
let numder = 123;
console.log(typeof numder);

let string = "Hello";
console.log(typeof string);

let bigInt = 10000000000000n;
console.log(typeof bigInt);

let undefinedType = undefined;
console.log(typeof undefinedType);

let nullType = null;
console.log(typeof nullType);

let booleanType = true;
console.log(typeof booleanType);

let symbolType = Symbol("uniqueId");
console.log(typeof symbolType);

let obj = {
  name: "Alex",
  id: 228,
};
console.log(typeof obj);

//functions

let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

// Функция для подсчёта суммы зарплат
function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
  } else {
    let sum = 0;

    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
    }
    return sum;
  }
}

console.log(sumSalaries(company));
console.log(sumSalaries);
console.log(company);

debugger;
