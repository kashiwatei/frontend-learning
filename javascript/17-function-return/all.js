// 科目分數相加

function calTotalScore(englishScore, mathScore){
    return englishScore + mathScore;
}

// Tom 英文的分數為 82，數學的分數為 63
let tomTotalScore = calTotalScore(82, 63);
console.log(`Tom 的總分為 ${tomTotalScore}`);

// Bill 英文的分數為 21，數學的分數為 73
let billTotalScore = calTotalScore(21, 73);
console.log(`Bill 的總分為 ${billTotalScore}`);

// return 會中斷函式執行，因此後面若有其他程式碼將不執行!!!!!
function scores(num1, num2){
    let total = num1 + num2;
    return total; 

    console.log("Do you any questions?"); // 這段程式碼就不再執行
}

let myTotalScore = scores(72, 80);
console.log(myTotalScore);

// 體溫檢測小工具 （檢查是否發燒）

function tempCheck (degree) {
    // 可搭配 if 判斷式
    if (degree < 37.5) {
        return "正常";
    } else {
        return "發燒";
    }
}

let myTemperature1 = tempCheck (39);
let myTemperature2 = tempCheck (36.5);

console.log (myTemperature1);
console.log (myTemperature2);

// 小結：函式可以放流程控制或數字運算或直接印出等各種任務，以便客製自己要的功能

// 檢查數字是否為偶數與計算次數

let count = 0; // 宣告計算次數的起始值為 0

function numCheck(num){
    // 每運作函式一次，count 就會自動 +1
    count += 1;
    // 執行 num 的判斷
    if (num % 2 == 0) {
        return "是偶數";
    } else {
        return "不是偶數";
    }
}

let number1 = numCheck(0);
console.log (`這個數字${number1}`);
let number2 = numCheck(10);
console.log (`這個數字${number2}`);
let number3 = numCheck(17);
console.log (`這個數字${number3}`);
let number4 = numCheck(19);
console.log (`這個數字${number4}`);

console.log (`您一共計算了${count}次`);