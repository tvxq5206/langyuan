const frameCatHoverOne = document.querySelector('.frameCatHoverOne');
const frameCatHoverTwo = document.querySelector('.frameCatHoverTwo');
const frameCatHoverThree = document.querySelector('.frameCatHoverThree');
const frameCatHoverFore = document.querySelector('.frameCatHoverFore');
const frameCatHoverFive = document.querySelector('.frameCatHoverFive');
const frameCatHoverSix = document.querySelector('.frameCatHoverSix');

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

frameCatHoverFore.addEventListener('mouseover',function(e){
  e.target.setAttribute("src", "material/icon_hover/moreInfo-hover.svg");
});

frameCatHoverFore.addEventListener('mouseout',function(e){
  e.target.setAttribute("src", "material/other/FrameCat.svg");
});

frameCatHoverFive.addEventListener('mouseover',function(e){
  e.target.setAttribute("src", "material/icon_hover/moreInfo-hover.svg");
});

frameCatHoverSix.addEventListener('mouseout',function(e){
  e.target.setAttribute("src", "material/other/FrameCat.svg");
});
frameCatHoverSix.addEventListener('mouseover',function(e){
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

let currentCard = 0; // 目前顯示的卡片索引

function showCards(startIndex) {
    const cards = document.querySelectorAll('.cardItem');
    cards.forEach(card => card.style.display = 'none'); // 隱藏所有卡片
    for (let i = startIndex; i < startIndex + 3; i++) {
        cards[i % cards.length].style.display = 'block'; // 顯示指定索引的卡片
    }
}

function changeCard(direction) {
    const totalCards = document.querySelectorAll('.cardItem').length;

    currentCard = (currentCard + direction + totalCards) % totalCards; // 更新卡片索引

    showCards(currentCard); // 顯示新的三張卡片

    // 如果想持續同一方向循環，可以將下一次切換方向設為相同的值
    // changeCard(direction); // 註解掉這行可以停止無限循環
}

// 初始化，顯示第一組三張卡片
showCards(currentCard);

// 获取按钮元素
const backToTopButton = document.getElementById('backToTopButton');

// 监听页面滚动事件
window.addEventListener('scroll', function() {
    // 检查页面滚动位置
    if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
        // 如果滚动位置大于0，为按钮添加显示类名
        backToTopButton.classList.add('show');
    } else {
        // 否则移除显示类名
        backToTopButton.classList.remove('show');
    }
});
