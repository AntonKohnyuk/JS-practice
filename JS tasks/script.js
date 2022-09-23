//рекурсия
function sumWithFor(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumWithRec(n) {
  if (n === 1) return 1;
  return n + sumWithFormula(n - 1);
}

function sumWithFormula(n) {
  return ((1 + n) / 2) * n;
}

console.log(sumWithFor(10));
console.log(sumWithRec(10));
console.log(sumWithFormula(10));

//факториал

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
console.log(factorial(7));

//основные

//Написать функцию, которой передаем, имя, фамилия и возраст,
//и получаем строку "Привет Иван Петров с возрастом 17 лет"
//(только здесь данные, которые были переданы в функцию)

function helloName(name = "ALex", surename = "Brown", age = 27) {
  console.log(`Hello ${name} ${surename}, age ${age}!`);
}
helloName("Nigga", "Nigrovich", 68);

//Сделайте функцию, которая принимает параметром число от 1 до 7,
//а возвращает день недели на русском языке.

function dayOfWeek(num) {
  let dayOfWeek = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];
  console.log(dayOfWeek[num - 1]);
}

dayOfWeek(5);

//Написать функцию, которая принимает строку (в этом тексте 3-5 предложений), верните каждое первое слово в каждом предложении, через запятую.

function findFirstWord(s) {
  let str = s
    .split(".")
    .map((s) => s.trim().split(" ")[0])
    .filter((s) => s != "")
    .map((s) => s.trim().split(" ")[0])
    .join(", ");

  console.log(str);
}

findFirstWord(
  "Java Developer, уже час голову ломаю, не могу понять каким образом! Pаставляет слова так выстраиваться. Попробовал без трима, но со сплитом, выдаёт Lorem, , хотя трим удаляет только пробелы, но удалил почему-то слова."
);

//arrays

function isEven(arr) {
  console.log(arr.findIndex((item) => item % 2 !== 0) !== -1 ? false : true);
}

function nonEven(arr) {
  console.log(arr.findIndex((item) => item % 2 === 0) !== -1 ? true : false);
}

isEven([1, 2, 2, 4, 6, 8]);

nonEven([1, 2, 2, 4, 6, 8]);
//
function multiplicityOfFive(arr) {
  console.log(arr.filter((item) => item % 5 === 0));
}

multiplicityOfFive([1, 2, 3, 4, 5, 6, 7, 10]);
//

function arithmeticMean(arr) {
  console.log(
    (arr.reduce((prev, current) => prev + current, 0) / arr.length).toFixed(1)
  );
}

arithmeticMean([1, 1, 1, 1, 1]);

//
function firstToLast(arr = []) {
  arr.push(arr[0]);
  arr.shift();
  console.log(arr);
}

firstToLast([1, 2, 3, 4, 5]);

//

function toString(arr) {
  console.log(arr.map((item) => JSON.stringify(item)));
}

toString([
  { name: "A", age: 23 },
  { name: "A", age: 3 },
  { name: "A", age: 223 },
  { name: "A", age: 213 },
]);

//

let salarys = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
};

function getSum(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  console.log(sum);
}

getSum(salarys);

let salarys2 = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
};

function multiplication(obj) {
  console.log(obj);

  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
  console.log(obj);
}

multiplication(salarys2);

//

let ladder = {
  _flour: 0,
  showStep() {
    console.log(this._flour);
  },
  up() {
    this._flour++;
  },
  down() {
    this._flour--;
  },
};

ladder.showStep();
ladder.up();
ladder.up();
ladder.up();
ladder.showStep();
ladder.down();
ladder.showStep();

//

function sumOfRoots(arr) {
  console.log(
    arr.reduce(
      (prev, current, index) =>
        index % 2 ? (prev += Math.sqrt(current)) : (prev += 0),
      0
    )
  );
}

sumOfRoots([1, 4, 2, 9, 5, 25, 7, 36]);
