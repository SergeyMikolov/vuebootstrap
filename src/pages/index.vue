<template>
  <div class="container">
  <div class="row">
    <div class="col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-10 offset-xs-1">
      Notice that the key names within this object match the names that we specify within the ref attribute, and the values are the DOM elements. In this case, we can see that the key is myButton and that the value is a native button element which has nothing to do with Vue.js.

      Therefore we can simply access the DOM element by accessing the name of our reference as a property on the $refs object. Let’s see that in action. As an example, I will change the text of the button when clicking it.
    </div>
  </div>
  </div>
</template>

<script>
</script>

<style>

</style>
