let myFamily = {
    // 物件包物件寫法
    motherStatus: {
        name: "Alice",
        age: 35,
        interest: "writing",
    },
    fatherStatus: {
        name: "Bob",
        age: 38,
        interest: "coding",
    },
    // 一般寫法
    catNum: 1,
    isSleeping: false
}

// 讀取方式
console.log (myFamily);
console.log (myFamily.fatherStatus);
console.log (myFamily.fatherStatus.age);