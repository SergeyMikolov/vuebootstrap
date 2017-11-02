<template>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link to="/blog" class="nav-link">Blog</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/user" class="nav-link">User</router-link>
              </li>
            </ul>

            <div class="user-menu">
              <b-dropdown right variant="link">
                <span slot="text">
                  <img class="avatar rounded-circle img-fluid" src="./../assets/img/avatar.jpg">
                </span>
                <span slot="text" class="user-name">
                  Admin
                </span>
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
              </b-dropdown>
            </div>

          </div>
</template>

<script>
  export default {
    data:function(){
      return {
      }
    }
  }
</script>

<style>
  @import "../assets/style/side-bar.css";
  .router-link-active {
    color: red !important;
  }
</style>
