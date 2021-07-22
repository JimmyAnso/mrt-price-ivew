<template>
  <div class="about">
    <Card shadow>
      <div class="about__header" id="profile">
        <img src="../../public/image/about.png" alt="" class="pic" />
        <div class="txt">
          <h3>林俊安</h3>
          <h3>Jimmy Lin</h3>
          <a
            href="https://tw.mail.yahoo.com/d/folders/1?.intl=tw&.lang=zh-Hant-TW"
            target="_blank" class="about__header--firsta"
            ><Icon type="md-mail" size="25" color="#FFDD00"
          /></a>
          <a href="https://codepen.io/jimmyanso" target="_blank"><Icon type="logo-codepen" size="25" color="#F15A22" /></a>
          <a href="https://hackmd.io/@WnIdSEF4Qpe0GD_hA09AZA" target="_blank"
            ><Icon type="md-code-working" size="25" color="#5FAD46"
          /></a>
          <a href="https://github.com/JimmyAnso" target="_blank"><Icon type="logo-github" size="25" color="#478FCD" /></a>
        </div>
      </div>
    </Card>

    <Alert show-icon class="about__title">
      <Icon type="md-pricetags" slot="icon"></Icon>
      <p>認知，決定看世界的視角。</p>
    </Alert>

    <Collapse simple id="content" class="collapse">
      <Panel name="about__content" class="collapse__panel">
        關於台北捷運票價查詢
        <p slot="content" class="collapse__content">
          <Row class="code-row-bg">
            <Col offset="2">
              介紹自己學習的過程：起初連 webAPI
              是甚麼都不知道，並從頭去了解以JavaScript的原生寫法為基礎的
              ajax、$ajax，與以Promise語法為基礎去實現ajax的fetch、axios的操作，在過程中也認識了同步與非同步的應用，以及在API出錯時，可以應用
              try、catch
              來自訂資料錯誤時的處理。在開發的過程中也應用到vue的components，在子主組與父層之間的資料傳遞上也卡關一陣子，嘗試props
              in event out
              許久，但同時也學習到v-model的原始樣貌。頁面做得差不多之後，開始串聯
              router
              ，並藉由網路上的教學影片、專案實例、vue文本重複閱讀，才認識了vue
              router的聲明式與編程式，以及透過路由在組件之間傳遞參數的兩種方法「命名路由」、「查詢參數」;「命名路由」需要在路由註冊router的name可以使用，且若刷新頁面參數將會遺失；「查詢參數」則會在路由網址後面帶入參數並且傳遞參數，刷新頁面參數不會遺失;歷經兩周左右最終完成本作品!!!
            </Col>
          </Row>
        </p>
      </Panel>
    </Collapse>

    <Collapse simple id="tech" class="collapse">
      <Panel name="about__tech" class="collapse__panel">
        Technology Stack
        <p slot="content" class="collapse__content">
          <Row class="code-row-bg">
            <Col offset="2">
              <ul>
                <li>
                  <Tooltip
                    content="本次使用 vue2 框架開發專案"
                    placement="right"
                  >
                    <Button type="info" ghost>vue</Button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content="使用 axios 串接 API" placement="right">
                    <Button type="warning" ghost>axios</Button>
                  </Tooltip>
                </li>

                <li>
                  <Tooltip content="單向資料流處理" placement="right">
                    <Button type="success" ghost>props in event out</Button>
                  </Tooltip>
                </li>

                <li>
                  <Tooltip
                    content="使用 vue router-hash mode 管理路由"
                    placement="right"
                  >
                    <Button type="primary" ghost>router</Button>
                  </Tooltip>
                </li>

                <li>
                  <Tooltip
                    content="引用 ivew css for vue 以優化 UI"
                    placement="right"
                  >
                    <Button type="error" ghost>ivew css for vue</Button>
                  </Tooltip>
                </li>
              </ul>
            </Col>
          </Row>
        </p>
      </Panel>
    </Collapse>

    <Collapse simple id="time" class="collapse">
      <Panel name="about__time" class="collapse__panel">
        View UI for vue 開發時間軸
        <p slot="content" class="collapse__content">
          <Row class="code-row-bg">
            <Col offset="2">
              <Timeline>
                <TimelineItem color="orange"
                  >2021/07/19 - 初步了解 view ui for vue &
                  安裝插件</TimelineItem
                >
                <TimelineItem color="green"
                  >2021/07/20 - view ui 切版 & 資料流處理</TimelineItem
                >
                <TimelineItem color="red">2021/07/21 - 畫面細修</TimelineItem>
                <TimelineItem color="blue">2021/07/22 - 部屬</TimelineItem>
              </Timeline>
            </Col>
          </Row>
        </p>
      </Panel>
    </Collapse>

    <Collapse simple id="used" class="collapse">
      <Panel name="about__used" class="collapse__panel">
        本專案所使用到的 View UI
        <p slot="content" class="collapse__content">
          <Row class="code-row-bg">
            <Col offset="2">
              <Tag type="dot" size="medium" color="#F2AF1D">Color</Tag>
              <Tag type="dot" size="medium" color="#015077">Button</Tag>
              <Tag type="dot" size="medium" color="#EDC9E0">Icon</Tag>
              <Tag type="dot" size="medium" color="#F245BB">Row/Col</Tag>
              <Tag type="dot" size="medium" color="#FEC748">Card</Tag>
              <Tag type="dot" size="medium" color="#D92139">Collapse</Tag>
              <Tag type="dot" size="medium" color="#AEC33A">Divider</Tag>
              <Tag type="dot" size="medium" color="#253F58">Menu</Tag>
              <Tag type="dot" size="medium" color="#33C7F7">Anchor</Tag>
              <Tag type="dot" size="medium" color="#FFA2D3">Select</Tag>
              <Tag type="dot" size="medium" color="#FD9735">Rate</Tag>
              <Tag type="dot" size="medium" color="#A1268E">Alert</Tag>
              <Tag type="dot" size="medium" color="#9EDAE3">Message</Tag>
              <Tag type="dot" size="medium" color="#FEE19F">Drawer</Tag>
              <Tag type="dot" size="medium" color="#181B46">Tooltip</Tag>
              <Tag type="dot" size="medium" color="#85CFB4">Tag</Tag>
              <Tag type="dot" size="medium" color="#ED186B">TimeLine</Tag>
              <Tag type="dot" size="medium" color="#A299CA">BackTop</Tag>
              <Tag type="dot" size="medium" color="#712333">Affix</Tag>
            </Col>
          </Row>
        </p>
      </Panel>
    </Collapse>

    <Collapse simple id="origin" class="collapse">
      <Panel name="origin" class="collapse__panel">
        原始專案參考
        <p slot="content" class="collapse__content">
          <Row class="code-row-bg">
            <Col offset="2">
              <p>原始碼：</p>
              <a href="https://github.com/JimmyAnso/mrt-price/tree/main"
                >https://github.com/JimmyAnso/mrt-price/tree/main</a
              >
              <br /><br /><br />
              <p>GitHub Pages：</p>
              <a href="https://jimmyanso.github.io/mrt-price/"
                >https://jimmyanso.github.io/mrt-price/</a
              >
            </Col>
          </Row>
        </p>
      </Panel>
    </Collapse>

    <Row type="flex" justify="center" class="code-row-bg" id="rate">
      <Col>
        <Rate show-text allow-half v-model="valueCustomText">
          <span class="about__rate">{{ valueCustomText }}</span>
        </Rate>
      </Col>
    </Row>

    <Anchor offset-top="200" show-ink class="anchor">
      <AnchorLink href="#profile" title="個人資訊" />
      <AnchorLink href="#content" title="關於台北捷運票價查詢" />
      <AnchorLink href="#tech" title="Technology Stack" />
      <AnchorLink href="#time" title="View UI for vue 開發時間軸" />
      <AnchorLink href="#used" title="本專案所使用到的 View UI" />
      <AnchorLink href="#origin" title="原始專案參考" />
      <AnchorLink href="#rate" title="評價" />
    </Anchor>

    <BackTop :height="100" :bottom="60"></BackTop>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueCustomText: 4.5,
    };
  },
};
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Sans+TC:wght@100;300;400;500;700;900&family=Noto+Serif+TC:wght@200;300;400;500;600;700;900&display=swap");
.about {
  margin-bottom: 50px;
  position: relative;
}
.about__header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.about__header .pic {
  width: 100px;
  height: 100px;
  margin-bottom: 10%;
}
.about__header .txt {
  text-align: center;
}
.about__header .txt h3 {
  font-weight: 500;
}
.about__header a{
  line-height: 40px;
}
.about__header .txt .about__header--firsta~a{
  margin-left:15px;
}
.about__title {
  padding: 10px;
  margin-top: 20px;
  border: none;
  color: white;
  background-color: rgba(21, 176, 0, 0.37);
}
.about__title p{
  padding-left: 30px;
  font-size: 15px;
}

#rate {
  margin-top: 50%;
}
.about_rate {
  color: #f5a623;
}
.anchor {
  position: absolute;
  top: 5%;
  right: 10%;
}
.collapse {
  margin-top: 30px;
}
.collapse__panel {
  font-size: 22px;
}
.collapse__content {
  margin-top: 30px;
  font-size: 18px;
}
li {
  margin-bottom: 20px;
  list-style: none;
}
@media screen and (max-width: 1200px) {
  .anchor {
    display: none;
  }
}

@media screen and (max-width: 576px) {
  .collapse__panel {
    font-size: 18px;
  }
  .collapse__content {
    font-size: 16px;
  }
}
</style>