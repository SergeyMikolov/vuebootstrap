<template>
  <div id="app">
    <div  v-if="$auth.ready()">
      <nav-bar></nav-bar>
      <router-view></router-view>
    </div>
    <div v-if="!$auth.ready()">
      <!--todo-->
      Loading ...
    </div>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style>

</style>
