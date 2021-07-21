<template>
  <!-- 搜尋結果 -->
  <div class="result">
    <Row type="flex" justify="center" class="code-row-bg">
      <Col span="12">
        <div class="result__header">
          <Icon type="md-pin" size="25"/> 
          <div class="result__header--input">
            <div class="from inputList">
              <p>從{{ title }}</p>
              
              <h3><Alert type="success">{{ $route.query.start }}</Alert></h3>
            </div>
            <div class="to inputList">
              <p>至</p>
              
              <h3><Alert type="error">{{ $route.query.end }}</Alert></h3>
            </div>
          </div>
        </div>

        <Divider />

        <Row class="result__output">
          <Col span="12">
            <Card class="general output">
              <p slot="title" class="title">普通</p>
              <p>{{ $route.query.adult }} <span>元</span></p>
            </Card></Col
          >
          <Col span="12">
            <Card class="seniorDisabled output">
              <p slot="title" class="title">敬老/愛心</p>
              <p>{{ $route.query.disabled }} <span>元</span></p>
            </Card>
          </Col>
        </Row>

        <div class="result__button">

          <ButtonGroup size="large" shape="circle" class="buttongroup">
            <Button @click="goBack" type="primary" icon="ios-arrow-back"
              >重新查詢</Button
            >
          </ButtonGroup>

          <ButtonGroup size="large" shape="circle" class="buttongroup">
            <Button
              @click="copyUrlToClipboard"
              type="primary"
              icon="ios-download-outline"
              >複製連結</Button
            >
          </ButtonGroup>

        </div>

        <router-link class="result__about" to="/about">
        <Button type="info" ghost>關於此程式</Button>
        </router-link>

      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    copyUrlToClipboard() {
      navigator.clipboard.writeText(window.location.href);
    },
    goBack() {
      // this.$router.go(-1);
      this.$router.push({ path: "/home" });
    },
    softwhy() {
      console.log("window.location.href:", window.location.href);

      console.log("window.location.pathName:", window.location.pathName);

      console.log("window.location.origin:", window.location.origin);

      console.log("this.$route.path:", this.$route.path);

      console.log("this.$route.fullPath:", this.$route.fullPath);

      console.log("this.$route.query:", this.$route.query.path);

      navigator.clipboard.writeText(window.location.href);
    },
  },
};
</script>

<style lang="css" scoped>
.result__button {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 60px;
}
.result__button--research,
.result__button--copy {
  font-size: 18px;
  border-radius: 100px;
  padding: 15px 40px;
  border: none;
}
.result__button--research:hover,
.result__button--copy:hover {
  cursor: pointer;
  color: white;
  background-color: #0097d9;
}
.result {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.result__header {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.result__header .landmark {
  width: 25px;
  height: 25px;
  margin: 0 1vw;
}
.result__header--input .inputList {
  display: flex;
  margin-top: 10px;
  align-items: center;
}
.result__header--input .inputList p {
  font-size: 14px;
  margin: 0 5vw;
}
.result__header--input .inputList h3 {
  font-size: 18px;
  background-color: #eee;
  border-radius: 5px;
  height: 30px;
  width: 250px;
  font-weight: 500;
}

.result__output {
  display: flex;
  box-shadow: 0 0 10px 10px #eee;
  margin-bottom: 40px;
  border-radius: 5px;
}
.result__output .general .title {
  /* border-right: 2px solid white;
  border-radius: 5px 0 0 0; */
}
.result__output .general .price {
  /* border-right: 2px solid lightgray;
  border-radius: 0 0 0 5px; */
}
.result__output .seniorDisabled .title {
  /* border-radius: 0 5px 0 0; */
}
.result__output .seniorDisabled .price {
  /* border-radius: 0 0 5px 0; */
}
.result__output .output .title {
  background-color: #434a42;
  color: white;
  /* padding: 15px 20px; */
  /* width: 80px; */
  /* height: 25px; */
  text-align: center;
}
.result__output .output .price {
  text-align: center;
  padding: 25px;
  font-size: 40px;
}
.result__output .output .price span {
  font-size: 18px;
}
.result__button--copy {
  background-color: #007ab0;
  color: white;
}
.result__about {
  color: #007ab0;
  font-size: 18px;
  text-decoration: none;
  position: relative;
}
.result__about::after {
  /* content: "";
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -1px;
  border-bottom: 2px solid #007ab0; */
}
.buttongroup{
  margin:0 20%;
}
</style>