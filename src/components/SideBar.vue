<template>
          <div class="collapse navbar-collapse" id="navbarCollapse">
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
</style>
