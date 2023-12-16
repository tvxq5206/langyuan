//網頁初始化
function init() {
    getLangInfo();
  };
  
init();

const langInfoCard = document.querySelector(".js-getLangInfoCard");

//串農業部領養平台API
let langData = [];
let str = "";

function getLangInfo() {
  axios.get(`https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=10&$skip=0`)
    .then(function (response) {
      langData = response.data;
      renderLangList();
    })
};

function renderLangList(){
    langData.forEach(function(item){
        str += `
        <div class="col-6">
        <div class="card mb-3 bg-secondary1 text-white" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-6">
                    <img class="img-fluid height-stray-card object-fit-cover"
                        src="${item.album_file}" alt="...">
                </div>
                <div class="col-md-6">
                    <div class="card-body mx-3 mt-2">
                        <h5 class="card-title">${item.animal_colour}</h5>
                        <ul class="card-text">
                            <li>種類：${item.animal_kind}</li>
                            <li>性別：${item.animal_sex}</li>
                            <li>所在地：${item.animal_place}</li>
                            <li>品種：${item.animal_Variety}</li>
                            <li>簡述：${item.animal_remark}</li>
                        </ul>
                        <div class="d-grid col mx-auto pt-3"><button
                                class="btn btn-outline-secondary4 btn-lg" type="button">詳細資訊</button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    })
    langInfoCard.innerHTML = str;
}