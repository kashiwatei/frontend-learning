// 陣列與物件整合運用
// 陣列的資料型別可以是數字、字串、布林值，也可以是物件

// 情境練習
// 假設在市場中有兩個水果攤，
// 第一個水果攤，老闆叫 Tom，香蕉有 12 個，蘋果有 14 個，還沒打烊。
// 第二個水果攤，老闆叫 Steven，香蕉有 10 個，蘋果有 8 個，已打烊。

let marketFruit = [
    {
        bossName: "Tom",
        bananaNum: 12,
        appleNum: 14,
        isClosed: false
    },
    {
        bossName: "Steven",
        bananaNum: 10,
        appleNum: 8,
        isClosed: true
    }
];

console.log (marketFruit);
console.log (marketFruit.length);

//讀取陣列第 2 筆的物件資料，再進一步讀取物件中 apple 數量的資料
console.log (marketFruit[1].appleNum);
console.log (marketFruit[0].isClosed);