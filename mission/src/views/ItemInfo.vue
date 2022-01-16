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
</div>
</template>

<script>
export default {
  name: 'ItemInfoPage',
  data() {
    return {
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
</style>
