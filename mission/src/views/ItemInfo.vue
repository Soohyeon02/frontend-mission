<template>
<div id='item-info-page'>
  <div class="itemImg">
      <img class="itemImg" src="@/assets/itemImg.png">
  </div>
  <div class="sellerInfo">
    <img class="sellerImg" src="@/assets/sellerImg.png">
    <img class="bookmarkImg" src="@/assets/bookmarkImg.png">
    <div class="sellerName">
    {{ seller.sellerName }}
    </div>
    <br>
    <div class="hashtag">
    {{ seller.hashtag1 }}&nbsp;&nbsp;&nbsp;{{ seller.hashtag2 }}
    </div>
  </div>
  <div class="itemContent">
    <h2 class="title">{{ title }}</h2>
    <div class="priceInfo">
      <span class="discountRate">{{ price.discountRate }}%</span>
      <span class="price">{{ price.price }}원</span>
      <span class="beforePrice">{{price.beforePrice}}원</span>
    </div>
    <div class="itemInfo">
      <h3 class="itemInfoTitle">{{ itemInfoTitle }}</h3>
      <div class="briefExplainText">남친룩의 정석 코디를 위한 트렌치 코트!</div>
      <img class="itemInfoImg" src="@/assets/itemInfoImg.png">
      <img class="itemInfoDetailImg" src="@/assets/itemInfoDetailImg.png">
      <div class="fullExplainText">
        {{ fullExplainText }}
      </div>
    </div>
  </div>
  <div class="review">
    <h3 class="reviewTitle">
      리뷰
    </h3>
    <div class="reviewContent1">
      <img class="reviewImg1" src="@/assets/reviewImg1.png">
      <span class="reviewerName1">{{ review.reviewerName1 }}</span>
      &nbsp;
      <span class="reviewDat1">{{ review.reviewDate1 }}</span>
      <br>
      <span class="reviewTitle1">{{ review.reviewTitle1 }}</span>
      <br>
      <span class="reviewMessage1">{{ review.reviewMessage1 }}</span>
    </div>
    <div class="reviewContent2">
      <span class="reviewerName2">{{ review.reviewerName2 }}</span>
      &nbsp;
      <span class="reviewDat2">{{ review.reviewDate2 }}</span>
      <br>
      <span class="reviewTitle2">{{ review.reviewTitle2 }}</span>
      <br>
      <span class="reviewMessage2">{{ review.reviewMessage2 }}</span>
    </div>
  </div>
  <br><br>
  <div class="footer">
    <button class="buyBotton">{{ price.price }}원</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'ItemInfoPage',
  data() {
    return {
      seller: {
        sellerName: '코트맛집',
        hashtag1: '#남성',
        hashtag2: '#코트',
      },
      title: '세미 오버핏 트렌치 코트',
      itemInfoTitle: '상품정보',
      briefExplainText: '남친룩의 정석 코디를 위한 트렌치 코트!',
      fullExplainText: '특유의 여유있는 세미 오버 사이즈 실루엣을 가지고 있습니다. 정교한 패턴 작업으로 세심하게 라인을 완성하고, 간절기 아우터에 적합한 두께감과 뛰어난 착용감을 자랑하는 제품입니다!',
      price: {
        discountRate: 30,
        price: 140000,
        beforePrice: 200000,
      },
      review: {
        reviewerName1: 'jam******',
        reviewDate1: '2022.01.06.',
        reviewTitle1: '착용감이 좋네요!',
        reviewMessage1: '입었을 때 편해서 앞으로 자주 입을 것 같아요~',
        reviewerName2: 'yug*******',
        reviewDate2: '2022.01.03.',
        reviewTitle2: '느낌 있어요!',
        reviewMessage2: '입었을 때 연출할 수 있는 분위기가 좋아요!',
      },
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
  max-height: 375px;
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
  max-width: 375px;
}
.title {
  text-align: left;
  margin-left: 10px;
  width: 100%;
  max-height: 20px;
  max-width: 375px;
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
  max-width: 375px;
  margin-top: 20px;
  margin-left: 10px;
  text-align: left;
  width: 100%;
  height: 10px;
  font-weight: lighter;
}
.briefExplainText {
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
  max-width: 375px;
}
.fullExplainText {
  text-align: left;
  margin-top: 20px;
  margin-left: 10px;
}
.review {
  max-width: 375px;
  width: 100%;
}
.reviewTitle {
  text-align: left;
  margin-left: 10px;
}
.reviewContent1 {
  max-width: 375px;
  line-height: 30px;
  text-align: left;
  margin-left: 10px;
  border-bottom: 1px #808080;
}
.reviewTitle1 {
  font-weight: bold;
}
.reviewMessage1 {
  font-size: 10px;
}
.reviewImg1 {
  max-width: 375px;
  max-height: 80px;
  display: flex;
  float: right;
  margin-right: 10px;
}
.reviewContent2 {
  max-width: 375px;
  line-height: 30px;
  text-align: left;
  margin-left: 10px;
  border-bottom: 2px;
}
.reviewTitle2 {
  font-weight: bold;
}
.reviewMessage2 {
  font-size: 10px;
}
.footer {
  position: fixed;
  background-color: gray;
  left: 0px;
  right: 0px;
  top: 657px;
  bottom: 0px;
  width: 100%;
  height: 60px;
  text-align: center;
  max-width: 375px;
}
</style>
