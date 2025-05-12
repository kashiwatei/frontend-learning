// if DEMO

let myTemperature = 32;

if (myTemperature >= 37.5) {
    console.log ("不得進入");
} else {
    console.log ("可以進入");
}

// if else DEMO

let score1 = 60;

if (score1 < 60) {
    console.log ("成績不及格");
} else {
    console.log ("成績及格");
}

// if else if DEMO

let score2 = 100;

if (score2 >= 80) {
    console.log ("優秀");
} else if (score2 >= 60 && score2 <= 79) {
    console.log ("普通");
} else if (score2 <= 59) {
    console.log ("不及格");
} else {
    console.log ("無法判定");
}

// if includes if DEMO

let sex = "male";
let weight = 70;

if (sex === "male") {
    console.log ("是男生");
    if (weight >= 90) {
        console.log ("體重過胖");
    } else {
        console.log ("體重正常");
    }
} else {
    console.log ("是女生");
    if (weight >= 80) {
        console.log ("體重過胖");
    } else {
        console.log ("體重正常");
    }
}