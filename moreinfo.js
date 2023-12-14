const frameCatHoverOne = document.querySelector('.frameCatHoverOne');
const frameCatHoverTwo = document.querySelector('.frameCatHoverTwo');
const frameCatHoverThree = document.querySelector('.frameCatHoverThree');


frameCatHoverOne.addEventListener('mouseover',function(e){
  console.log('111');
  e.target.setAttribute("src", "material/icon_hover/moreInfo-hover.svg");
});

frameCatHoverOne.addEventListener('mouseout',function(e){
  e.target.setAttribute("src", "material/other/FrameCat.svg");
});

frameCatHoverTwo.addEventListener('mouseover',function(e){
  console.log('111');
  e.target.setAttribute("src", "material/icon_hover/moreInfo-hover.svg");
});

frameCatHoverTwo.addEventListener('mouseout',function(e){
  e.target.setAttribute("src", "material/other/FrameCat.svg");
});

frameCatHoverThree.addEventListener('mouseover',function(e){
  console.log('111');
  e.target.setAttribute("src", "material/icon_hover/moreInfo-hover.svg");
});

frameCatHoverThree.addEventListener('mouseout',function(e){
  e.target.setAttribute("src", "material/other/FrameCat.svg");
});


// 學習更多知識 Hover
const moreInfoHover = document.querySelector('.imgHover');

moreInfoHover.addEventListener('mouseover',function(e){
  e.target.setAttribute("src", "material/icon_hover/arrow-right-circle-hover.svg");
});

moreInfoHover.addEventListener('mouseout',function(e){
  e.target.setAttribute("src", "material/icon/moreinfo.svg");
});