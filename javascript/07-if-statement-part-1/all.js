// if, else

// 情境 1

// 如果體溫超過 37.5 度，就不能外出。
// 今天體溫是 32 度

let todayDegree = 32;

if (todayDegree >= 37.5) {
    console.log("很遺憾！今天不能外出");
} else {
    console.log("恭喜！可以外出");
}

// 情境 2

// 小明想吃麥當勞，套餐價格為 220 元，
// 但他忘記錢包剩下多少錢，
// 如果錢不夠，就回家吃飯。

let money = 400;

if (money >= 220) {
    console.log ("小明可以吃麥當勞");
}
else {
    console.log ("小明應該回家吃飯")
}

// 情境 3

// 小明想吃麥當勞，套餐價格為 220 元，
// 但他忘記錢包剩下多少錢，
// 如果有 180 元，就改吃牛丼，
// 如果有 100 元，就吃雞肉飯，
// 如果錢不夠，就回家吃飯。

let wallet = 200;

if (wallet >= 220) {
    console.log ("小明可以吃麥當勞");
} else if (wallet >= 180) {
    console.log ("小明可以吃牛丼");
} else if (wallet >= 100) {
    console.log ("小明可以吃雞肉飯");
} else {
    console.log ("小明應該回家吃飯")
}

// 情境 4

// 如果明天沒有下雨，小明就直接出門去玩。
// 萬一明天下毛毛雨，小明就帶折疊傘出門。
// 萬一明天下大雨，小明就帶大把雨傘出門。
// 萬一明天下豪雨，小明就穿雨衣出門。

// 結果今天的天氣是下大雨，小明會是什麼狀態？

let todayWeather = "大雨";

if (todayWeather == "沒雨"){
    console.log("小明直接出門去玩！");
} else if (todayWeather == "毛毛雨"){
    console.log("小明帶折疊傘出門！");
} else if (todayWeather == "大雨"){
    console.log("小明帶大把雨傘出門！");
} else if (todayWeather == "豪雨"){
    console.log("小明穿雨衣出門！")
} else {
    console.log("小明臨時決定不出門！");
}

// if 與 else 最多只能出現一次，但最後不一定要放 else 作為結尾
// else if 可以有很多個 