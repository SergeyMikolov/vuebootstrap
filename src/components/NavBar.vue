<template>
  <div class="nav-bar">
    <div :class="{'under-body':toggled}" @click="toggled = !toggled"></div>

    <section class="bg-dark">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" @click="toggled = !toggled">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">Navbar</a>

          <a href="#" class="navbar-toggle collapsed"></a>
        <side-bar></side-bar>
        </nav>
    </section>
    <aside>
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
    }
  }

</script>

<style>
  @import "../assets/style/main.css";
  @import "../assets/style/nav-bar.css";
</style>
