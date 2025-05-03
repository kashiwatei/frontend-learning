// 宣告字串

// let a = "John";
// let b = "says";
// let c = "hello word!";

// console.log(a, b, c);

// 字串相加

let agent = "John";
let action = "studies";
let theme = "English";

console.log(agent + action + theme);
console.log(agent + " " + action + " " + theme);

let sentence = agent + " " + action + " " + theme;

console.log(sentence);

// typeof

console.log(typeof agent);
console.log(typeof sentence);

let age = 18;

console.log(typeof age);

age = "18";

console.log(typeof age);

// 字串與數字混合相加，JS 會自動幫忙將數字型態轉化成字串

let weight = 55;
let roleName = "小美";

console.log("今年體重" + weight + "kg" + "的是" + roleName);

let content = "今年體重" + weight + "kg" + "的是" + roleName;

console.log(typeof content)

// 某些情況會出現 NaN 

// 字串在不是相加的狀況下...囧

let roleName2 = "小明";
let age2 = 50;
let total = roleName * age2;

console.log(total);
console.log(typeof total); //NaN 為數字類別

// 字串硬轉成數字...囧
let content2 = "Hello world!";
let content3 = parseInt(content2);

console.log(content3);

// 檢視字串的長度

let myName = "Steven"
let myPhone = "0900222222"

console.log(myName.length);
console.log(myPhone.length);

// 濾除空白

let myEmail = "  aaa@gxxxx.com"

console.log(myEmail.length);
console.log(myEmail);
console.log(myEmail.trim());  //trim()清除前面兩個半形空白

let updateEmail = myEmail.trim();

console.log(updateEmail);

//情境練習：你好我是Mark，我今年20歲，請多多指教！

let x = "Mark";
let y = 20; // or y = "20";

// let text = "你好我是" + x + "，我今年" + y + "歲，請多多指教!";

// console.log(text);

let text = `你好我是${x}，我今年${y}歲，請多多指教！`  //省去連續用加號的麻煩！（樣版字面值寫法）

console.log(text);