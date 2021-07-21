<template>
  <div class="mrt">
    <MyHeader />
    <router-view class="main"></router-view>
    <MyFooter />
  </div>
</template>

<script>
import Selector from "./components/Selector";
import MyHeader from "./components/Header";
import MyFooter from "./components/Footer";

export default {
  components: {
    MyHeader,
    Selector,
    MyFooter,
  },
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Noto Sans TC", sans-serif;
}
.mrt .main {
  min-height: calc(100vh - 141px);
  padding: 0 35%;
  position: relative;
}
@media screen and (max-width: 1200px) {
  .mrt .main {
    padding: 0 30%;
  }
}
@media screen and (max-width: 992px) {
  .mrt .main {
    padding: 0 25%;
  }
}
@media screen and (max-width: 768px) {
  .mrt .main {
    padding: 0 20%;
  }
}
@media screen and (max-width: 576px) {
  .mrt .main {
    padding: 0 5%;
  }
}
</style>
