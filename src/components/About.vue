<template>
   <div class="add container">
     <h1 class="page-header">{{msg}}</h1>
   </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to the about page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
