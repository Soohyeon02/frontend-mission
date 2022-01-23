<template>
  <div id="item-list-page">
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
  </div>
</template>

<script>
export default {
  name: 'ItemListPage',
  data() {
    return {
    };
  },
};
</script>

<style>
#item-list-page {
  max-width: 375px;
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
.mypageButtonImg {
  flex-direction: column;
  width: 45px;
  display: flex;
  margin-left: 20px;
}
.homeButtonText, .bookmarkButtonText, .cartButtonText, .mypageButtonText {
  margin: 0px;
}
</style>
