<template>
  <div class="nav-bar">
    <div :class="{'under-body':toggled}" @click="toggled = !toggled"></div>

    <section class="bg-dark">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4" style="position: relative !important;">

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" @click="toggled = !toggled">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">Navbar</a>

          <a href="#" class="navbar-toggle collapsed"></a>
          <transition name="slide-fade">
            <div class="collapse navbar-collapse" id="navbarCollapse" :class="{'side-bar':toggled, 'col-5':toggled}" v-if="toggled">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Disabled</a>
                </li>
              </ul>
            </div>
          </transition>
        </nav>
    </section>
  </div>
</template>

<script>
  export default {
    data:function(){
      return {
        toggled: false
      }
    }
  }

</script>

<style>
  @import "../assets/style/nav-bar.css";
</style>
