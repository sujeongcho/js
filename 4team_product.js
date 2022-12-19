function dp_menu_02() {
  let click = document.getElementById("drop-content_sort");
  if (click.style.display === "none") {
    click.style.display = "block";
    document.getElementById(this.id + "-toggle").textContent = "+";
  } else {
    click.style.display = "none";
    document.getElementById(this.id + "-toggle").textContent = "-";
  }
}

//items.forEach(item => item.addEventListener('click', dp_menu_01));
const $divFilter = document.querySelector("#drop-content_filter");
const $filterItemList = $divFilter.querySelectorAll("li");
const $btnFilter = document.querySelector(".filter_container #btn_filter");

$filterItemList.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.textContent); //event 안에 있는 타겟을 이용
    // console.log(item); //메모리를 이용해 연결하는 closure를 이용. 위와 결과는 같음
    // $btnFilter.value = e.tasrget.textContent;
    const str = e.target.textContent;
    $btnFilter.textContent = `${str.substring(3)}▼`;
    // 자식의 속성을 바꾸는 방법 3
    // .textsContent
    // .innerText
    // .innerHTML

    //.substring과 .substr 의 차이알기
    dp_menu_01();
  });
});

function dp_menu_01() {
  if ($divFilter.style.display === "none") {
    $divFilter.style.display = "block";
  } else {
    $divFilter.style.display = "none";
  }
}

//items.forEach(item => item.addEventListener('click', dp_menu_02));
const $sortFilter = document.querySelector("#drop-content_sort");
const $sortItemList = $sortFilter.querySelectorAll("li");
const $sortBtnFilter = document.querySelector(".filter_container #sort_brn_filter");

$sortItemList.forEach((item) => {
  item.addEventListener("click", (e) => {
    $sortBtnFilter.textContent = `${e.target.textContent}▼`;
    dp_menu_02();
  });
});

function dp_menu_02() {
  if ($sortFilter.style.display === "none") {
    $sortFilter.style.display = "block";
  } else {
    $sortFilter.style.display = "none";
  }
}

// function makeList(items) {
//   items.forEach((item) => {
//     const b = makeItem(item);
//     $gridContainer.appendChild(b);
//   });
// }

// 정렬 드롭다운
function dp_menu_02() {
  if ($sortFilter.style.display === "none") {
    $sortFilter.style.display = "block";
  } else {
    $sortFilter.style.display = "none";
  }
}

let catalogItem = null;
let lampList = null;

function getData() {
  fetch("js/catalog.json")
    .then((res) => res.json())
    .then((result2) => {
      catalogItem = result2;
    });

  fetch("js/product.json")
    .then((res) => res.json())
    .then((result) => {
      lampList = result;
      console.log(result);
      makeList(result);
    });
}
