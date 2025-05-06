// 比較運算子（Comparison Operators)
// ==, !=, >, <, >=, <=

console.log(10 == 10);
console.log(10 != "10");  //數字與字串也可以做比較 (因為字串會自動轉型成數字)
console.log("male" == "female");
console.log("2" == "2");
console.log(10 > 20.2);
console.log(2 < 5);
console.log(37.5 >= 37.5);
console.log(2 <= 2);
console.log(15 != 13);

// 比較運算子，搭配變數方法

let a = 6;
let b = 2;

console.log(a < b);
console.log(a ** b > a);
console.log((a+b) == b ** 3);

let c = 10 != 8;

console.log(c);

let eating = false;

console.log(eating);

let d = 10
let e = 7

console.log(d >= e);
console.log(d <= e);
console.log(e != 2);

// // 賦值 vs. 比較運算子

// // 1個 ＝ ，代表賦值不是數學的等於

let x = 1;
let y = 3;

// // // 2個 == ，代表比較運算子的等於

console.log(x == (x + y));
console.log(y != (x + y));

// // 3個 ===

console.log(10 == "10"); //字串會自動轉型成數字 （不嚴謹的等於模式)

console.log(2 === 2); //字串"不"會自動轉型成數字 （嚴謹的等於模式)「推薦寫法」
console.log(5 === "5");


// 邏輯運算子（Logical Operators）
// && (相當於英文的 and，兩邊命題都要為真，才會為真，否則為假)
// || (相當於英文的 or，只要有一邊的命題為真，就為真，否則為假)

let i = 5;
let j = 7;

console.log(i < 10 && j < 10);
console.log(i == 3 && j == 7);

let k = 18;
let l = 5;

console.log(k >= 20 || l <= 5);
console.log(k > 7 || l < 2);
console.log(k != 18 || l != 5);

// 情境練習

// 要同時滿足以下兩件，才會贈送機票
// 1. 刷卡滿1000元
// 2. 是VIP會員

let creditCard = 1200;
let isVIP = true;

console.log (creditCard > 1000 && isVIP == true);

// 只要是下雨天或天氣冷任一情況，小明就不會出門
// 1. 今天沒下雨
// 2. 天氣很冷

let rainDay = false;
let coldDay = true;

console.log (rainDay == true || coldDay == true);