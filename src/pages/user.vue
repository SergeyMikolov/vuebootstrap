<template>
  <div class="container">
  <div class="row">
    <div class="col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-10 offset-xs-1">
<h1>USER <button @click="test1">adas</button></h1>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    data:function(){
      return {
      }
    },
    methods: {
      test1 : function () {
        // GET /someUrl
        this.$http.get('http://192.168.11.166:133/public/get-all-countries-with-verticals').then(response => {

          // get body data
          console.log(response.body);

        }, response => {
          // error callback
        });
      }
    }
  }
</script>

<style>
  .col-xs-10 {
    padding: 5%;
  }
</style>
