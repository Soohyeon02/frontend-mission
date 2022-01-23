<template>
  <div id="item-list-page">
    <div class="navbar" :class="{ 'navbar--hidden': !showNavbar }" >
      <h3>{{ shopName }}</h3>
    </div>
    <footer class="footer">
      <button class="footerHomeButton">
        <img class="homeButtonImg" src="@/assets/homeButtonImg.png">
        <p class="homeButtonText">홈</p>
      </button>
      <button class="footerBookmarkButton">
        <img class="bookmarkButtonImg" src="@/assets/bookmarkButtonImg.png">
        <p class="bookmarkButtonText">찜</p>
      </button>
      <button class="footerCartButton">
        <img class="cartButtonImg" src="@/assets/cartButtonImg.png">
        <p class="cartButtonText">장바구니</p>
      </button>
      <button class="footerMypageButton">
        <img class="mypageButtonImg" src="@/assets/mypageButtonImg.png">
        <p class="mypageButtonText">마이페이지</p>
      </button>
    </footer>
    <br><br><br><br>
    <span class="itemListLeft">
      <span class="itemProduct0">
        <img class="itemListImg0" :src="require(`@/assets/itemList/${product[0].img}.png`)">
        <br>
        <div class="productInfo">
          <span class="productDiscountRate">
            {{ product[0].discountRate }}%
          </span>
          <span class="productPrice">
            {{ product[0].price }}원
          </span>
          <br>
          <span class="productName">
            {{ product[0].name }}
          </span>
          <br>
          <span class="productDescription">
            {{ product[0].description }}
          </span>
        </div>
      </span>
      <span class="itemProduct2">
        <img class="itemListImg2" :src="require(`@/assets/itemList/${product[2].img}.png`)">
        <br>
        <div class="productInfo">
          <span class="productDiscountRate">
            {{ product[2].discountRate }}%
          </span>
          <span class="productPrice">
            {{ product[2].price }}원
          </span>
          <br>
          <span class="productName">
            {{ product[2].name }}
          </span>
          <br>
          <span class="productDescription">
            {{ product[2].description }}
          </span>
        </div>
      </span>
      <span class="itemProduct4">
        <img class="itemListImg4" :src="require(`@/assets/itemList/${product[4].img}.png`)">
        <br>
        <div class="productInfo">
          <span class="productDiscountRate">
            {{ product[4].discountRate }}%
          </span>
          <span class="productPrice">
            {{ product[4].price }}원
          </span>
          <br>
          <span class="productName">
            {{ product[4].name }}
          </span>
          <br>
          <span class="productDescription">
            {{ product[4].description }}
          </span>
        </div>
      </span>
      <span class="itemProduct6">
        <img class="itemListImg6" :src="require(`@/assets/itemList/${product[6].img}.png`)">
        <br>
        <div class="productInfo">
          <span class="productDiscountRate">
            {{ product[6].discountRate }}%
          </span>
          <span class="productPrice">
            {{ product[6].price }}원
          </span>
          <br>
          <span class="productName">
            {{ product[6].name }}
          </span>
          <br>
          <span class="productDescription">
            {{ product[6].description }}
          </span>
        </div>
      </span>
    </span>
    <span class="itemListRight">
      <span class="itemProduct1">
        <img class="itemListImg1" :src="require(`@/assets/itemList/${product[1].img}.png`)">
        <br>
        <div class="productInfo">
          <span class="productDiscountRate">
            {{ product[1].discountRate }}%
          </span>
          <span class="productPrice">
            {{ product[1].price }}원
          </span>
          <br>
          <span class="productName">
            {{ product[1].name }}
          </span>
          <br>
          <span class="productDescription">
            {{ product[1].description }}
          </span>
        </div>
      </span>
      <span class="itemProduct3">
        <img class="itemListImg3" :src="require(`@/assets/itemList/${product[3].img}.png`)">
        <br>
        <div class="productInfo">
          <span class="productDiscountRate">
            {{ product[3].discountRate }}%
          </span>
          <span class="productPrice">
            {{ product[3].price }}원
          </span>
          <br>
          <span class="productName">
            {{ product[3].name }}
          </span>
          <br>
          <span class="productDescription">
            {{ product[3].description }}
          </span>
        </div>
      </span>
      <span class="itemProduct5">
        <img class="itemListImg5" :src="require(`@/assets/itemList/${product[5].img}.png`)">
        <br>
        <div class="productInfo">
          <span class="productDiscountRate">
            {{ product[5].discountRate }}%
          </span>
          <span class="productPrice">
            {{ product[5].price }}원
          </span>
          <br>
          <span class="productName">
            {{ product[5].name }}
          </span>
          <br>
          <span class="productDescription">
            {{ product[5].description }}
          </span>
        </div>
      </span>
      <span class="itemProduct7">
        <img class="itemListImg7" :src="require(`@/assets/itemList/${product[7].img}.png`)">
        <br>
        <div class="productInfo">
          <span class="productDiscountRate">
            {{ product[7].discountRate }}%
          </span>
          <span class="productPrice">
            {{ product[7].price }}원
          </span>
          <br>
          <span class="productName">
            {{ product[7].name }}
          </span>
          <br>
          <span class="productDescription">
            {{ product[7].description }}
          </span>
        </div>
      </span>
      <br><br><br><br><br><br>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ItemListPage',
  data() {
    return {
      product: [
        {
          id: 0,
          img: 'trenchcoatImg',
          name: '트렌치 코트',
          discountRate: 30,
          price: '140,000',
          description: '트렌치 코트 BEST 상품! 가을 멋쟁이가 되어봐요!',
        },
        {
          id: 1,
          img: 'ma1Img',
          name: 'ma 1 자켓',
          discountRate: 30,
          price: '140,000',
          description: '꾸안꾸 연출이 가능해요. 츄리닝 바지와도 잘 어울려요!',
        },
        {
          id: 2,
          img: 'neatImg',
          name: '니트',
          discountRate: 15,
          price: '53,550',
          description: '남친룩의 정석 니트. 캐주얼한 느낌을 낼 수 있어요!',
        },
        {
          id: 3,
          img: 'hoodjacketImg',
          name: '후드집업',
          discountRate: 5,
          price: '81,700',
          description: '간편하게 입고 다녀요. 학생들에게 인기 만점 제품!',
        },
        {
          id: 4,
          img: 'cardiganImg',
          name: '가디건',
          discountRate: 23,
          price: '62,370',
          description: '편안한 분위기를 연출해요. 안에 흰티와 함께 입어봐요!',
        },
        {
          id: 5,
          img: 'hoodieImg',
          name: '후드티',
          discountRate: 13,
          price: '54,810',
          description: '짱짱한 기본 후드티. 레이어드하면 더 예뻐요!',
        },
        {
          id: 6,
          img: 'blackjeanImg',
          name: '와이드 블랙진',
          discountRate: 12,
          price: '58,960',
          description: '적당한 세미 와이드핏으로 스타일링 하기 편해요!',
        },
        {
          id: 7,
          img: 'wideslacksImg',
          name: '와이드 슬랙스',
          discountRate: 8,
          price: '41,860',
          description: '간편하게 입고 다녀요!',
        },
      ],
      showNavbar: true,
      lastScrollPosition: 0,
      shopName: '뚜뚜샵',
    };
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPostion) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  berforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
};
</script>

<style>
#item-list-page {
  max-width: 375px;
}
.navbar {
  height: 60px;
  width: 375px;
  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: 1s all ease-out;
  background-color: rgb(189, 187, 187);
}
.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
  background-color: rgb(189, 187, 187);
}
.footer {
  position: fixed;
  width: 375px;
  height: 60px;
  bottom: 0px;
  display: flex;
  background-color: rgb(241, 241, 241);
}
button {
  border: none;
  width: 25%;
  cursor: pointer;
  font-size: 15px;
  background-color: rgb(241, 241, 241);
}
.homeButtonImg {
  flex-direction: column;
  width: 25px;
  display: flex;
  margin-left: 29px;
}
.cartButtonImg {
  flex-direction: column;
  width: 20px;
  display: flex;
  margin-left: 31px;
  margin-bottom: 3px;
}
.bookmarkButtonImg {
  flex-direction: column;
  width: 43px;
  display: flex;
  margin-left: 20px;
}
.homeButtonText, .bookmarkButtonText, .cartButtonText, .mypageButtonText {
  margin: 0px;
}
.mypageButtonImg {
  flex-direction: column;
  width: 45px;
  display: flex;
  margin-left: 20px;
}
.itemListLeft {
  width: 50%;
  float: left;
}
.itemListRight {
  width: 50%;
  float: right;
}
.itemListLeft img {
  width: 85%;
  align-items: flex-start;
  margin-top: 20px;
}
.itemListRight img {
  width: 85%;
  align-items: flex-start;
  margin-top: 20px;
}
.productDiscountRate {
  display: flex;
  color: red;
  float: left;
  margin-left: 30px;
  margin-top: 3px;
}
.productPrice {
  display: flex;
  float: left;
  margin-left: 10px;
}
.productName {
  display: flex;
  float: left;
  margin-left: 30px;
  font-weight: bold;
  font-size: 20px;
}
.productDescription {
  display: flex;
  float: left;
  text-align: left;
  margin-left: 20px;
  font-size: 13px;
}
</style>
