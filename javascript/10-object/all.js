// 物件 object
// 為何要有物件的概念？與陣列一樣，避免相同概念的屬性做過多的宣告，導致程式碼不乾淨，因此我們會利用物件打包整個相關屬性。

// 描述 home 的概念，我們可能會利用多種變數做宣告：

// home
let motherName = "Kitty";
let fatherName = "Paul";
let childName = "Tiffany";
let catNum = 1;

// 利用物件，打包上述概念：

let home = {
    // 屬性: 值,
    motherName: "Kitty",
    fatherName: "Paul",
    childName: "Tiffany",
    catNum:1,
    pool: false,
    car: true
};

console.log(home);

// 讀取物件中的資料
let homePool = home.pool; // 物件的變數名稱.屬性名稱;

console.log (homePool);

// 寫入資料

let home1 = {}
console.log(home1);

home1.motherName = "Mary"; //新增 motherName = "Mary"，到 home1 物件資料中
console.log(home1);

home1.fatherName = "Paul"; //新增 atherName = "Paul"，到 home1 物件資料中
console.log(home1);

home1.catNum = 2;          //新增 catNum = 2，到 home1 物件資料中
console.log(home1);

home1.pool = true;         //新增 pool = true，到 home1 物件資料中
console.log(home1);

// 修改資料

let famMember = {
    motherName: "Mary",
    fatherName: "Bob",
    dog: 2,
    cat: 1,
}

console.log (famMember);

famMember.motherName = "Vicky"; // 直接做字串的修改
famMember.cat += 1,     // 運算後再儲存新值
famMember.dog = 1,      // 直接賦值做修改

console.log (famMember);

// 刪除資料

delete famMember.dog;
console.log (famMember);

// 查找物件中的資料
console.log (famMember.dog);
console.log (famMember.fatherName);

// 另外一種查找物件中的資料語法
console.log (famMember["motherName"]);

let x = "cat";
console.log (famMember[x]);