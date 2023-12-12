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

const puzzleImg01 = document.querySelector(".puzzleImg01");
const puzzleIcon01 = document.querySelector(".puzzleIcon01");
puzzleImg01.addEventListener("mouseover", function () {
  puzzleIcon01.style.display = "none";
});
puzzleImg01.addEventListener("mouseout", function () {
  puzzleIcon01.style.display = "block";
});

//AOS套件
AOS.init();
