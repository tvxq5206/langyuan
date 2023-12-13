//拼圖 hover效果

const puzzleImgs = document.querySelectorAll(".puzzle");

function handleMouseEvents(e, hoverSrc, originalSrc) {
  e.target.setAttribute("src", hoverSrc);
  e.target.addEventListener("mouseout", function () {
    e.target.setAttribute("src", originalSrc);
  });
}
puzzleImgs.forEach(function (img) {
  const originalSrc = img.getAttribute("src");
  const hoverSrc = "material/puzzle/" + img.getAttribute("data-hover");
  img.addEventListener("mouseover", function (e) {
    handleMouseEvents(e, hoverSrc, originalSrc);
  });
});

//Icon hover效果

const puzzleImgsForIcon = document.querySelectorAll('[class^="puzzleImg"]');
const puzzleIcons = document.querySelectorAll('[class^="puzzleIcon"]');

Array.from(puzzleImgsForIcon).forEach((puzzleImg, index) => {
  const puzzleIcon = puzzleIcons[index];

  puzzleImg.addEventListener("mouseover", function () {
    puzzleIcon.style.display = "none";
  });

  puzzleImg.addEventListener("mouseout", function () {
    puzzleIcon.style.display = "block";
  });
});

//AOS套件
AOS.init();
