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
                <span slot="text" style="color: aliceblue; text-decoration: none" class="user-name">
                  <img class="avatar rounded-circle img-fluid" src="./../assets/img/avatar.jpg">
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

  .user-menu button:hover{
    text-decoration: none;
    text-shadow: 0.3px 0.3px cornsilk;

  }  .user-menu:hover{
    text-shadow: cornsilk;
  }

  .dropdown-toggle::after {
    color: cornsilk;
  }

  .user-menu {

  }

</style>
