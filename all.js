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
  axios.get(`https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=3&$skip=0`)
    .then(function (response) {
      langData = response.data;
      renderLangList();
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
               <p class="text-secondary1 text-center js-kindIcon">類別</p>
               <p class="text-center">${item.animal_kind}</p>
           </div>
           <div class="col-2 text-borderline">
               <p class="text-secondary1 text-center">年齡</p>
               <p class="text-center">${item.animal_age}</p>
           </div>
           <div class="col-2">
               <p class="text-secondary1 text-center">性別</p>
               <p class="text-center">${item.animal_sex}</p>
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
/*const genderIcon = document.querySelector(".js-genderIcon");
let strImg = "";
function langGender(){
  langData.forEach(function(item){
    if (item.animal_sex == "F"){
      strImg += `<img class="js-genderIcon" src="material/icon/female.svg" alt="">`;
    }else {
      strImg += `<img class="js-genderIcon" src="material/icon/male.svg" alt="">`;
    }
  })
  genderIcon.innerHTML = strImg;
}

//貓狗類別圖示遍歷
const kindIcon = document.querySelector(".js-kindIcon");
let strKindImg = "";
function langKind(){
  langData.forEach(function(item){
    if (item.animal_kind == "狗"){
      strKindImg += `<img src="material/icon/dog.svg" alt="">`;
    }else {
      strKindImg += `<img src="material/icon/cat.svg" alt="">`;
    }
  })
  kindIcon.innerHTML = strKindImg;
}
*/