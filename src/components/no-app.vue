<template>
  <div class="common-no-app">
    <p class='common-empty__app'>暂无应用</p>
  </div>
</template>

<style lang='scss' scoped>
@import '../assets/style/common/variable.scss';
  .common-no-app {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .common-empty__app {
      margin-top: 7px;
      line-height: 27px;
      font-family: MicrosoftYaHeiUI;
      font-size: 20px;
      letter-spacing: 0px;
      color: $__primary-color;
      text-align: center;
    }
  }
</style>
