/*// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var navbar = document.getElementById("navbar-fixed");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}*/

//了解更多按鈕hover
const knowMoreBtn = document.querySelector(".know-more-btn");

knowMoreBtn.addEventListener("mouseover", function(e){
  e.target.setAttribute("src", "material/icon/arrow-right-circle-hover.svg");
});

knowMoreBtn.addEventListener("mouseout", function (e){
  e.target.setAttribute("src", "material/icon/arrow-right-circle-default.svg");
});

//網頁初始化
function init(){
  getLangInfo();
};

//串農業部領養平台API
const langBreed = document.querySelector("#js-langBreed");

let langData = [];
let str = "";
function getLangInfo(){
  axios.get(`https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=50&$skip=0`)
  .then(function(response){
    langData = response.data[0, 1, 2].animal_Variety;
    renderLangList();
  })
};

//渲染全部的條件
function renderLangList() {
  //已被填入陣列的資料，可以用forEach遍歷其中的資料
  langData.forEach(function (item) {
    //利用上方已宣告的空字串組字串
    str += `<p class="text-secondary1" id="js-langBreed">${item[0].animal_Variety}</p>`
  })
  //利用上方已宣告的productList(抓到的DOM)填入剛組好的字串(html標籤)
  langBreed.innerHTML = str;
};