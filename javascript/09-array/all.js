// Array
// 當需要紀錄同一個概念下的不同屬性值時，為避免以下情形，我們會使用陣列統一做管理 （陣列＝集合的概念）：

/*
let color1 = "red";
let color2 = "yellow";
let color3 = "green";
*/

// 缺點：資料零散、難以管理，尤其當數量變多時，幾乎無法有效處理（像是統計平均、篩選等操作會變得很麻煩）。


let colors = ["red", "yellow", "green"];

console.log(colors);

// 陣列中可放各種型別，甚至空陣列

let box0 = []; //空陣列
console.log(box0);

let box1 = [1, 10, 500, 5000]; //數字
console.log(box1);

let box2 = [true, false, true]; // 布林值
console.log(box2);

let box3 = ["red", 5, true]; //字串、數字、布林值混合
console.log(box3);

// 讀取陣列資料

let dictionary = ["yellow", "green", "red"];

console.log(dictionary[0]); // 陣列第一筆資料起始點為 0
console.log(dictionary[1]);
console.log(dictionary[2]);

let student = ["John", "May", "Mark", "Park", "Steven"];

let smartStudent = student[3]; // 取出陣列中的一筆資料宣告為變數
let normalStudent = student[0];

console.log(smartStudent);
console.log(normalStudent);

// 讀取陣列長度

let htmlTags = ["<h1>", "<p>", "<a>", "<img>", "<ul>", "<li>", "<div>", "<span>"];

console.log(htmlTags.length);

let tagsNum = htmlTags.length;

console.log(tagsNum);

// 寫入陣列資料

let linguistics = []
console.log(linguistics.length);

/* 寫入第 1 筆資料在名為 linguistics 陣列的第 1 個位置 */
linguistics[0] = "phonetics";
console.log(linguistics);
console.log(linguistics.length);

/* 寫入第 2 筆資料在名為 linguistics 陣列的第 2 個位置 */
linguistics[1] = "phonology";
console.log(linguistics);
console.log(linguistics.length);

/* 寫入第 3 筆資料在名為 linguistics 陣列的第 7 個位置 */
linguistics[6] = "pragmatics";
console.log(linguistics);
console.log(linguistics.length);

// 雖然未在 linguistics 陣列的第 2 個與第 7 個位置寫入資料，但也會占據一個位置，會顯示 undefined
console.log(linguistics[2]);
console.log(linguistics[3]);
console.log(linguistics[4]);
console.log(linguistics[5]);

// .push 不指定位置，直接在陣列結尾塞入新資料

let list = [0, 2, 4, 6, 8, 10]

list.push(12);
list.push(14);

list.push("John");

list.push(true);

console.log(list);
console.log(list.length);

// .unshift 不指定位置，直接在陣列的第一個位置塞入新資料

list.unshift("Tiffany");

console.log(list);
console.log(list.length);

// 新增最後 1 筆資料語法 .push() vs 刪除最後 1 筆資料語法 .pop()

list.push("Fred");
console.log(list);
console.log(list.length);

list.pop();
console.log(list);
console.log(list.length);

/* 如果繼續下 .pop() 的語法，將可連續刪除結尾的資料 */
list.pop();
list.pop();
list.pop();
console.log(list);
console.log(list.length);

// 新增第 1 筆資料語法 .unshift() vs 刪除第 1 筆資料語法 .shift()

list.unshift("Katty");
console.log(list);
console.log(list.length);

list.shift();
console.log(list);
console.log(list.length);

/* 如果繼續下 .shift() 的語法，將可連續刪除開頭的資料 */
list.shift();
list.shift();
list.shift();
console.log(list);
console.log(list.length);

// .splice() 語法：指定取出陣列某個位置的資料

let numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// .splice() 內有兩個參數值：
// 第一個參數，起始位置(注意：需要從 0 開始算，例如：當參數值顯示 4 就是陣列的第 5 個位置)
// 第二個參數，要往後刪除幾筆資料(注意：有包含自己，例如：當參數值顯示 2 就是包含自己本身的資料外，再往後刪除一筆資料)

// numList.splice (0, 5);
// console.log (numList);

// numList.splice (4, 5);
// console.log (numList);

// numList.splice (1, 2);
// console.log (numList);

numList.splice(6, 2);
console.log(numList);