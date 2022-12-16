<script >
import appHeader from './components/appHeader.vue'
import appMain from './components/appMain.vue'


export default {
  components: {
    appHeader, appMain
  }
}
</script>


<template>
  <header>
    <appHeader />
  </header>

  <main>
    <appMain />
  </main>


</template>

<style lang="scss">
@use "./components/style/general.scss";
</style>
