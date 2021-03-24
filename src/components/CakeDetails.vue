<template>
  <div class="details-container">

      <div><img src="@/assets/pizza.gif" width="200" height="200"></div>

      <div>
          {{name}}
      </div>
      <div>
          {{price}}
      </div>
  </div>
</template>

<script>
export default {
  name: 'CakeDetails',
  props: {
    name : String,
    price : String ,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.details-container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>
