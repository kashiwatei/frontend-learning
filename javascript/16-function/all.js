// 設定一個機器人，讓機器人執行一連串的早起活動任務 （起床-刷牙-洗臉-吃飯-出門）
function morningAction(){
    console.log("起床");
    console.log("刷牙");
    console.log("洗臉");
    console.log("吃飯");
    console.log("出門");
}

// 設定機器人的晚上活動
function nightAction(){
    console.log("回家");
    console.log("吃飯");
    /* 函式中仍可執行函式 */
    showerAction();    //執行淋浴活動 
    console.log("刷牙");
    console.log("睡覺");
}

// 設定一個淋浴活動，插入 nightAction 的函式中
function showerAction(){
    console.log("洗臉");
    console.log("刮鬍子");
    console.log("洗頭");
    console.log("洗身體");
}

// 執行函式(依序執行)
morningAction();
nightAction();

// 函式參數

function robot(num1, num2){
    console.log(num1, num2);
    console.log(num1);
    console.log(num2);
}

/* robot(1); */
robot(1,2);

// 函式括號內可以放多個參數 num，但呼叫函式時，參數的數量也要一致，否則數量不夠時，會回傳 undefined 

// 四則運算小工具

function add(num1, num2){
    console.log(`您相加的數字為${num1 + num2}`);
}

add(212445, 249550);

function substract(num1, num2){
    console.log(`您相減的數字為${num1 - num2}`);
}

substract(10, 5);

function multiply(num1, num2){
    console.log(`您相乘的數字為${num1 * num2}`);
}

multiply(2, 5);

function divide(num1, num2){
    console.log(`您相除的數字為${num1 / num2}`);
}

divide(10, 2);

function divide2(num1, num2){
    console.log(`您相除得到的餘數為${num1 % num2}`);
}

divide2(5, 2);

