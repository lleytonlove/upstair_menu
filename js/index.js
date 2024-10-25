const menu = [
  {
    id: 1,
    title: "등심샐러드",
    category: "APPETIZER",
    price: "22,000원",
    img: "./img/APPETIZER1.jpeg",
    desc: `소고기 등심에 만다린드레싱으로 맛을 낸 샐러드 * 만다린 : 오렌지과에 속하는 감귤`,
  },
  {
    id: 2,
    title: "깔조네 리코타",
    category: "APPETIZER",
    price: "20,000원",
    img: "./img/APPETIZER2.jpeg",
    desc: `신선한 야채와 과일, 수제 리코타치즈를 화덕빵에 싸먹는 샐러드`,
  },
  {
    id: 3,
    title: "수제 유자에이드",
    category: "DRINK",
    price: "7,000원",
    img: "./img/DRINK1.jpeg",
    desc: `상큼한 수제 유자에이드 ※ 블루, 레드, 옐로우, 그린 선택`,
  },
  {
    id: 4,
    title: "어부의 만찬(오일)",
    category: "PASTA",
    price: "25,000원",
    img: "./img/PASTA1.jpeg",
    desc: `싱싱한 해산물로 맛을 낸 피셔맨스키친 시그니처 파스타 ※ 토마토, 크림, 오일 선택`,
  },
  {
    id: 5,
    title: "새우 로제",
    category: "PASTA",
    price: "25,000원",
    img: "./img/PASTA2.jpeg",
    desc: `큼직한 새우와 분홍빛의 토마토크림소스로 맛을 낸 로제파스타`,
  },
  {
    id: 6,
    title: "라구 리가토니(건면)",
    category: "PASTA",
    price: "24,000원",
    img: "./img/PASTA3.jpeg",
    desc: `72시간 푹끓인 라구소스로 만든 나폴리식 토마토파스타 ※ 리가토니 : 숏파스타면의 한종류`,
  },
  {
    id: 7,
    title: "비스마르크",
    category: "PIZZA",
    price: "25,000원",
    img: "./img/PIZZA1.jpeg",
    desc: `리코타치즈, 프로볼로네, 피오르디라떼, 모르타텔라, 트러플오일로 맛을 낸 담백한피자 * 프로볼로네 : 이탈리아 남부 캄파니아 지방의 특산치즈 * 피오르디라떼 : 모짜렐라치즈의 한 종류로 젖산발효균으로 만든 나폴리 화덕피자 전용치즈 * 모르타텔라 : 돼지어깨의 살고기와 목부위의 지방을 섞어 만든 이탈리아생햄`,
  },
  {
    id: 8,
    title: "디아볼로",
    category: "PIZZA",
    price: "24,000원",
    img: "./img/PIZZA2.jpeg",
    desc: `살라미햄과 양파,페퍼로치노를 올려 만든 클래식한 이탈리아에 대표적인 매콤한 맛의 피자`,
  },
  {
    id: 9,
    title: "프로슈토 루꼴라",
    category: "PIZZA",
    price: "26,000원",
    img: "./img/PIZZA3.jpeg",
    desc: `렌치소스에 프로슈토생햄과 루꼴라로 맛을 낸 피셔맨스키친 시그니처피자`,
  },
  {
    id: 10,
    title: "소고기 버섯 리조또",
    category: "RISOTTO",
    price: "24,000원",
    img: "./img/RISOTTO1.jpeg",
    desc: `최상급 소고기와 포르치니 버섯으로 맛을 낸 리조또 ※ 포르치니 : 버섯중에 왕이라 불리는 이탈리아 대표 식재료`,
  },
  {
    id: 11,
    title: "먹물관자 리조또",
    category: "RISOTTO",
    price: "24,000원",
    img: "./img/RISOTTO2.jpeg",
    desc: `팬프라이한 신선한 관자, 먹물크림으로 맛을 낸 리조또`,
  },
  {
    id: 12,
    title: "채끝등심300g",
    category: "STEAK",
    price: "49,000원",
    img: "./img/STEAK1.jpeg",
    desc: `40일 숙성후 웻에징한 그릴 등심스테이크 ※ 스테이크에 제공되는 소금은 일반소금이 아닌 '말돈소금'으로 영국황실에서만 사용했던 칼슘과 칼륨, 마그네슘 함량이 풍부한 건강식 '고급소금' 입니다.`,
  },
  {
    id: 13,
    title: "씨푸드와 채끝등심300g",
    category: "STEAK",
    price: "63,000원",
    img: "./img/STEAK2.jpeg",
    desc: `갈릭 오일로 구워 낸 해산물과 채끝등심 스테이크 ※ 스테이크에 제공되는 소금은 일반소금이 아닌 '말돈소금'으로 영국황실에서만 사용했던 칼슘과 칼륨, 마그네슘 함량이 풍부한 건강식 '고급소금' 입니다.`,
  },
];
// get parent element
const mainContainer = document.querySelector(".main-container");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<div class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </div>`;
  });
  displayMenu = displayMenu.join("");

  mainContainer.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
