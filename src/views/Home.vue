<template>
  <div class="home">

    <HeaderBar></HeaderBar>

    <div class="app-container">
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import HeaderBar from '@/components/header-bar.vue'

@Component({
  components: {
    HelloWorld,
    HeaderBar
  }
})
export default class Home extends Vue {}
</script>
