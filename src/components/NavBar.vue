<template>
  <div class="nav-bar">
    <div class="swipe-menu" v-touch:swipe.right="sideBar"></div>
    <div :class="{'under-body':toggled}" @click="sideBar" v-touch:swipe.left="sideBar"></div>

    <section class="bg-dark">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" @click="sideBar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <router-link class="navbar-brand" to="/">Navbar</router-link>

          <a href="#" class="navbar-toggle collapsed"></a>
          <side-bar></side-bar>
        </nav>
    </section>
    <aside @click="sideBar" v-touch:swipe.left="sideBar">
      <transition name="slide-fade">
        <side-bar v-show="toggled" class="side-bar col-7"></side-bar>
      </transition>
    </aside>
  </div>
</template>

<script>
  import SideBar from './SideBar.vue'

  export default {
    data:function(){
      return {
        toggled: false
      }
    },
    components: {
      SideBar
    },
    methods: {
      sideBar: function () {
         this.toggled = !this.toggled
      }
    }
  }
</script>

<style>
  @import "../assets/style/main.css";
  @import "../assets/style/nav-bar.css";
</style>
