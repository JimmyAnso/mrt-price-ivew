<template>
  <div class="header">
    <div class="header__menu">
      <Menu mode="horizontal" :theme="theme1" active-name="1" class="menu">
        <router-link
          to="/home"
          @click="hamStatusFalse"
          class="router-link-active"
          ><MenuItem name="1" class="menu__item">
            <Icon type="ios-train" />
            台北捷運票價
          </MenuItem></router-link
        >

        <router-link to="/about" @click="hamStatusFalse"
          ><MenuItem name="2" class="menu__item"
            ><Icon type="ios-paper" />
            關於此程式
          </MenuItem></router-link
        >
      </Menu>

      <!-- hamburger 3span -->
      <Affix :offset-top="3">
        <input type="checkbox" id="hamburger-control" v-model="menuSwitch" />

        <label class="header__menu--hamburger" for="hamburger-control">
          <span class="top"></span>
          <span class="middle"></span>
          <span class="bottom"></span>
        </label>
      </Affix>

      <Drawer
        title="Menu"
        placement="top"
        v-model="menuSwitch"
        :mask-closable="true"
        height="160"
        class-name="aaa"
      >
        <router-link to="/home">
          <Button
            type="text"
            @click="menuSwitch = false"
            class="router-link-button"
          >
            <Icon type="logo-usd" /> 台北捷運票價
          </Button>
        </router-link>

        <Divider class="header__divider" />

        <router-link to="/about">
          <Button
            type="text"
            @click="menuSwitch = false"
            class="router-link-button"
          >
            <Icon type="ios-paper" /> 關於此程式
          </Button>
        </router-link>
      </Drawer>
    </div>
    <div class="header__github">
      <a
        href="https://github.com/JimmyAnso/mrt-price-ivew/tree/main"
        target="_blank"
      >
        <Icon
          type="md-code"
          class="header__github--icon"
          size="36"
          color="black"
        />
        <!-- <Icon type="md-git-branch" class="header__github--icon" size="36" color="black"/> -->
        <!-- <Icon class="header__github--icon" type="logo-github" size="36" color="black"/> -->
      </a>
    </div>
    <div
      class="positionAbsolute"
      :class="{ header__mask: hamStatus }"
      @click="hamStatusFalse"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuSwitch: false,
      hamStatus: false,
    };
  },
  methods: {
    hamStatusFalse() {
      this.hamStatus = false;
    },
  },
};
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap");
.header {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 45px;
  background-color: white;
}
.header__menu--hamburger .top,
.header__menu--hamburger .middle,
.header__menu--hamburger .bottom {
  display: block;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: #000;
  margin-bottom: 6px;
  transition: 0.3s;
}
.header {
  box-shadow: 0 5px 10px -10px black;
}
.header__menu {
  display: flex;
  margin-left: 25px;
}
.menu__item {
  font-size: 18px;
}
.header__menu #hamburger-control {
  display: none;
}
.header__menu--hamburger {
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 40px;
  height: 40px;
  margin: auto;
  padding: 3px;
  border: 1px solid lightgray;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 0px 5px 1px lightgray;
  opacity: 0.8;
}
.header__menu--hamburger:hover {
  cursor: pointer;
}
.header__menu--hamburger .middle {
  width: 60%;
  transform: translate(-32%, 0%);
}
.header__menu--hamburger .bottom {
  margin-bottom: 0px;
}
.header__github {
  margin-right: 18px;
}
.header__github--icon {
  padding: 5px;
  position: relative;
}
.header__github--icon::after {
  content: "";
  position: absolute;
  width: 2.5px;
  height: 25px;
  background-color: black;
  top: 23%;
  /* right: 100; */
  left: 47.5%;
  transform: rotate(0.05turn);
  transition: .3s;
  opacity: 0;
}
.header__github--icon:hover::after{
  opacity: 1;
}
.header__mask {
  display: none;
  top: 130px;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #434a42;
  opacity: 0.41;
}
.header .positionAbsolute {
  position: absolute;
}
.router-link-button {
  border: none;
  outline: none;
  font-size: 18px;
  margin: 0;
  padding: 0;
}
.header__divider {
  margin: 5px 0;
}
@media screen and (max-width: 768px) {
  .menu {
    display: none;
  }
  .header {
    justify-content: space-between;
  }
  .header__menu--hamburger {
    display: flex;
  }
  .header__menu .navUnavailable {
    display: none;
  }
  .header__menu #hamburger-control:checked ~ .header__menu--hamburger .top {
    transform: translate(0%, 240%) rotate(45deg);
  }
  .header__menu #hamburger-control:checked ~ .header__menu--hamburger .middle {
    opacity: 0;
  }
  .header__menu #hamburger-control:checked ~ .header__menu--hamburger .bottom {
    transform: translate(0%, -240%) rotate(-45deg);
  }
  .header__mask {
    display: block;
  }
}
@media screen and (max-width: 576px) {
  .header {
    padding: 0 0%;
  }
}
</style>