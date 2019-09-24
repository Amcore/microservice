<template>
  <div class="home">

    <HeaderBar></HeaderBar>

    <div class="app-container">
      <div class="app-main">
        <NoApp v-if='appConfig.length === 0'></NoApp>
        <div
          class="app-item"
          v-for='app in appConfig'
          :class="[
            $route.path.indexOf(app.appRouter) === -1 ? 'no-active-app' : ''
          ]"
          :key='app.id'>
          <div :id='app.id'>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import NoApp from '@/components/no-app.vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import HeaderBar from '@/components/header-bar.vue'

import {
  Component,
  Prop,
  Vue,
  Provide,
  Watch
} from 'vue-property-decorator'

@Component({
  components: {
    HelloWorld,
    HeaderBar,
    NoApp
  }
})
export default class Home extends Vue {
  @Provide() appConfig: [] = []
}
</script>
