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

knowMoreBtn.addEventListener("mouseover", function (e) {
  e.target.setAttribute("src", "material/icon/arrow-right-circle-hover.svg");
});

knowMoreBtn.addEventListener("mouseout", function (e) {
  e.target.setAttribute("src", "material/icon/arrow-right-circle-default.svg");
});

//網頁初始化
function init() {
  getLangInfo();
};

init();

//串農業部領養平台API
const langInfo = document.querySelector(".js-langInfo");

let langData = [];
let str = "";

function getLangInfo() {
  axios.get(`https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=10&$skip=0`)
    .then(function (response) {
      langData = response.data;
      renderLangList();
      changeBackgroundImages();
    })
};

//重複的內容結合
function combineLangInfo(item) {
  return `<div class="col">
   <div class="text-end name-breed-position">
       <p class="text-secondary1">${item.animal_Variety}</p>
       <p class="h5-font-size">${item.animal_colour}</p>
   </div>
   <div class="row justify-content-center">
       <div class="col">
           <div class="left-mask lang-index-container img-fluid">
           <img id="apiImage" src="${item.album_file}"></div>
       </div>
       <div class="row justify-content-center mt-4">
           <div class="w-100"></div>
           <div class="col-2">
               <p class="text-secondary1 text-center">類別</p>
               <img src="material/icon/dog.svg" alt="">
           </div>
           <div class="col-2 text-borderline">
               <p class="text-secondary1 text-center mb-2">年齡</p>
               <p class="text-center" style="font-size: 16px">${item.animal_age}</p>
           </div>
           <div class="col-2">
               <p class="text-secondary1 text-center">性別</p>
               <img src="material/icon/male.svg" alt="">
           </div>
           <div class="w-100"></div>
           <div class="text-center col-8 mt-3">
               <p>
                   <img src="material/icon/map-marker-alt.svg" alt="">${item.animal_place}
               </p>
           </div>
       </div>
   </div>
</div>`;
};


//渲染全部的條件
function renderLangList() {
  langData.forEach(function (item) {
    str += combineLangInfo(item);
  })
  langInfo.innerHTML = str;
};

//性別圖示遍歷
