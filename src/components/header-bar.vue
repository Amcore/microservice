<template>
  <div class="head-nav">

    <div class="head-nav__left">
      <div
        class="head-nav__item"
        :class="{
          'active-item': $route.path.indexOf(app.appRouter) !== -1
        }"
        v-for="app in appConfig"
        :key="app.path"
        @click="goRouter(app.appRouter)">
          {{ app.name }}
      </div>
    </div>

  </div>
</template>

<script lang='ts'>
import {
  Component,
  Prop,
  Vue,
  Provide,
  Watch
} from 'vue-property-decorator'

@Component({
})
export default class Header extends Vue {
  @Provide() appConfig: any[] = [{
    path: '/',
    name: 'About',
    appRouter: '/about'
  }]

  goRouter(path: string) {
    this.$router.push(path)
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/common/variable.scss";
.head-nav {
  position: sticky;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  padding: $__normal-width 0 $__normal-width $__max-width;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9em;
  z-index: 1000;
  transition: 0.2s cubic-bezier(0, 0, 0, 1);
  height: 64px;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(13, 72, 127, 0.08);

  .head-nav__left {
    flex: 1;
    display: flex;

    .head-nav__item {
      position: relative;
      font-size: 16px;
      color: #333;
      padding: 0 20px;
      padding: 14px 8px;
      color: #33404d;
      text-align: center;
      cursor: pointer;
      transform: all 0.3s;
      text-align: center;
      & + .head-nav__item {
        margin-left: 10px;
      }

      &:hover {
        color: $__primary-color;
      }
    }
    .active-item {
      color: $__primary-color;
      &:after {
        content: "";
        position: absolute;
        bottom: -6px;
        left: 0px;
        display: inline-block;
        height: 2px;
        width: 100%;
        background: $__primary-color;
      }
    }
  }

}
</style>
