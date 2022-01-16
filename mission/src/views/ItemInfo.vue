<template>
<div id='item-info-page'>
  <div class="itemImg">
      <img class="itemImg" src="@/assets/itemImg.png">
  </div>
  <div class="sellerInfo">
    <img class="sellerImg" src="@/assets/sellerImg.png">
    <img class="bookmarkImg" src="@/assets/bookmarkImg.png">
    <div class="sellerName">
    코트맛집
    </div>
    <br>
    <div class="hashtag">
    #남성&nbsp;&nbsp;&nbsp;#코트
    </div>
  </div>
  <div class="itemContent">
    <h2 class="title">세미 오버핏 트렌치 코트</h2>
    <div class="priceInfo">
      <span class="discountRate">{{ discountRate }}%</span>
      <span class="price">{{ price }}원</span>
      <span class="beforePrice">{{beforePrice}}원</span>
    </div>
    <div class="itemInfo">
      <h3 class="itemInfoTitle">상품정보</h3>
      <div class="explainText1">남친룩의 정석 코디를 위한 트렌치 코트!</div>
      <img class="itemInfoImg" src="@/assets/itemInfoImg.png">
      <img class="itemInfoDetailImg" src="@/assets/itemInfoDetailImg.png">
      <div class="explainText2">
        - 특유의 여유있는 세미 오버 사이즈 실루엣
        <br>
        - 정교한 패턴 작업으로 세심하게 라인을 완성
        <br>
        - 간절기 아우터에 적합한 두께감과 뛰어난 착용감
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ItemInfoPage',
  data() {
    return {
      discountRate: 30,
      price: 140000,
      beforePrice: 200000,
    };
  },
  methods: {

  },
  computed: {

  },
};
</script>

<style scoped>
.itemImg {
  width: 100%;
  height: 100%;
  max-width: 375px;
  max-height: 375px
}
.sellerInfo {
  height: 50px;
  margin-top: 10px;
  line-height: 20px;
  border-bottom: 2px solid #dadada;
}
.sellerImg {
  float: left;
  border-radius: 50px;
  width:45px;
  height:45px;
  margin-left:10px;
  display: flex;
}
.sellerName {
  font-size: 14px;
  float: left;
  font-weight: bold;
  display: flex;
  margin-left: 8px;
}
.hashtag {
  float: left;
  font-size: 12px;
  color: #808080;
  display: flex;
  margin-left: 8px;
}
.bookmarkImg {
  width: 8%;
  float: right;
  display: flex;
  margin-top: 5px;
  margin-right: 13px;
}
.title {
  text-align: left;
  margin-left: 10px;
  width: 100%;
  max-height: 20px;
}
.discountRate {
  float: left;
  margin-top: 5px;
  margin-left: 10px;
  font-size: 20px;
  color: rgb(194, 0, 0);
}
.price {
  float: left;
  margin-left: 10px;
  font-size: 20px;
}
.beforePrice {
  float: left;
  margin-top: 3px;
  margin-left: 10px;
  font-size: 15px;
  color: #808080;
  text-decoration: line-through;
}
.priceInfo {
    display: block;
    height: 30px;
    max-height: 30px;
    max-width: 375px;
}
.itemInfoTitle {
  margin-top: 20px;
  margin-left: 10px;
  text-align: left;
  width: 100%;
  height: 10px;
  font-weight: lighter;
}
.explainText1 {
  margin-top: 30px;
  margin-left: 10px;
  font-weight: bold;
  width: 100%;
  text-align: left;
}
.itemInfoImg {
  margin-top: 10px;
  width: 100%;
}
.itemInfoDetailImg {
  width: 100%;
}
.explainText2 {
  text-align: left;
  margin-top: 20px;
  margin-left: 10px;
  line-height: 40px;
}
</style>
