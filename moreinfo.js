const frameCatHoverOne = document.querySelector('.frameCatHoverOne');
const frameCatHoverTwo = document.querySelector('.frameCatHoverTwo');
const frameCatHoverThree = document.querySelector('.frameCatHoverThree');


frameCatHoverOne.addEventListener('mouseover',function(e){
  e.target.setAttribute("src", "material/icon_hover/moreInfo-hover.svg");
});

frameCatHoverOne.addEventListener('mouseout',function(e){
  e.target.setAttribute("src", "material/other/FrameCat.svg");
});

frameCatHoverTwo.addEventListener('mouseover',function(e){
  e.target.setAttribute("src", "material/icon_hover/moreInfo-hover.svg");
});

frameCatHoverTwo.addEventListener('mouseout',function(e){
  e.target.setAttribute("src", "material/other/FrameCat.svg");
});

frameCatHoverThree.addEventListener('mouseover',function(e){
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

let currentGroup = 0; // 当前显示的卡片组索引

function showGroup(startIndex) {
    const cards = document.querySelectorAll('.cardItem');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none'; // 隐藏所有卡片
    }
    for (let i = startIndex; i < startIndex + 3; i++) {
        cards[i % cards.length].style.display = 'block'; // 显示指定索引的卡片
    }
}

function changeGroup(direction) {
    currentGroup = currentGroup + direction;
    const totalGroups = Math.ceil(document.querySelectorAll('.cardItem').length / 3);

    // 循环显示卡片组，如果到了最后一组卡片，回到第一组
    if (currentGroup >= totalGroups) {
        currentGroup = 0;
    } else if (currentGroup < 0) {
        currentGroup = totalGroups - 1;
    }

    showGroup(currentGroup * 1); // 显示当前组卡片
}

// 初始化，显示第一组卡片
showGroup(currentGroup * 3);

