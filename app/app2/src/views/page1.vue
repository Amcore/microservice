<template>
  <div class="page1">
    <h1>
      this is app2 page1
    </h1>
    <button @click="$router.push('/page2')">go Page2</button>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Provide,
  Watch
} from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Home extends Vue {
  mounted () {
  }
}
</script>
