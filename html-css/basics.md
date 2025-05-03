# HTML 與 CSS 相關知識庫

## HTML
主要用來處理網頁結構（如：標題、段落、連結、表格、表單、圖片等。）

## CSS
主要用來處理網頁樣式（如：字體、文字顏色、大小、高度、寬度等。）

## CSS 選擇器
### 標籤選擇器（html 標籤作為選擇器 (selector)）

```CSS
h1 {
    color: red;
    font-size: 18px;
}
```
### 類別選擇器

```CSS
.wrap {
    color: red;
    font-size: 18px;
}
```
### 擬態選擇器 (:hover, :active)

```CSS
a:hover {
    color: red;
    font-size: 18px;
}
```
### 後代選擇器（Descendant Selector）

```CSS
.header a {
    color: red;
    font-size: 18px;
}

.content .text {
    color: red;
    font-size: 18px;
}

```

## 補充：常見的 CSS 文字屬性

```CSS
p {
    color: red;
    font-family: verdana;
    font-size: 18px;
    letter-spacing: 5px;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    text-indent: 36px;
}
```

## CSS 權重

- HTML 標籤：1 分
- Class 類別：10 分
- #id：100 分
- html 標籤內加入樣式：1,000 分
- CSS 內的屬性值後方放置 !imporatant：10,000分

```
權重大小：!important > style = "" > #id > class = "" > tags
```

*先比權重，再比前後順序，當比較順序時後者樣式會覆蓋前者樣式*

```CSS
.title {
    color: red;
}

h1 {
    color: blue;
}

/*以上瀏覽器會顯示：紅色*/

.container {
    color: red
}

.container {
    color: blue
}

/*以上瀏覽器會顯示：藍色*/

.title p {
    color: red
}

p {
    color: blue
}

/*以上瀏覽器會顯示：紅色*/
```

*請特別注意：不建議使用#id選擇器。*

## CSS Reset

```CSS
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```
## 區塊元素（Block Element）vs. 行內元素（Inline Element）

### 區塊元素的特性

- 預設寬度佔滿整個瀏覽器頁面
- 每個區塊會另起一行，不會並排
- 可自由調整寬度與高度

### 行內元素的特性

- 預設寬度與文字同寬
- 每個區塊會以並排方式呈現
- "不可"自由調整寬度與高度

## 補充：Box-sizing (CSS3)

- 一般呈現方式

```CSS
.box {
    width: 100px;
    height: 100px;
    background: pink;
    box-sizing: border-box;
}
```
- 利用「偽元素」套用至所有CSS標籤

```CSS
*, *:before, *:after {
    box-sizing: border-box;
}
```

## 補充：Debug 專用

常在規劃網頁版面配置時，只要網頁標籤、容器一多，就會較難以掌握其排版、位置變化的狀況，尤其在使用flexbox，
甚至導致破版且抓不到關鍵出錯問題為何，這時可利用CSS將所有標籤容器（*）加入邊（border:）的效果來除錯。

```CSS
* {
    border: 1px solid pink;
}
```

## 補充：網頁的渲染效能

- 類別選擇器的階層建議不要超過四層，過多的階層會影響網頁渲染的效能，如：

```CSS
/* 五層 */
.wrap .header .menu ul li a {
    color: pink;
    display: block;
    padding: 20px;
    text-align: center;
    text-decoration: none;
}
```

##### [HINT] 網頁如何渲染路徑

- 當使用者輸入網址時，HTML 與 CSS 會各自解析成 DOM、CSSOM 的結構，完成後會再將兩個結構合併再由網頁渲染出來，讓使用者看到。
- 若階層過多，就會在解析與合併過程間降低解析效能。

