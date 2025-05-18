// 物件 與 if 判斷式 的應用

let myStatus = {
    age: 41,
    weight: 77,
    status: ""
}

myStatus.temperature = 39.2;

if (myStatus.temperature >= 37.5) {
    myStatus.status = "不得進入";
    console.log ("很遺憾，您不得進入！");
} else {
    myStatus.status = "可以進入";
    console.log ("恭喜，您可以進入！");
}

console.log (myStatus);

// 物件＋陣列 與 if 判斷式 的混合應用

// 這邊需要思考資料庫怎麼設計？陣列、物件、陣列與物件混合
let consumerData = [
    {
        name: "Paul",
        age: 41,
        weight: 77,
        status: ""
    },
    {
        name: "Bob",
        age: 41,
        weight: 77,
        status: ""
    }
]

consumerData[1].temperature = 36.5;

if (consumerData[1].temperature >= 37.5) {
    consumerData[1].status = "不得進入";
    console.log ("很遺憾，您不得進入！");
} else {
    consumerData[1].status = "可以進入";
    console.log ("恭喜，您可以進入！");
}

console.log (consumerData);