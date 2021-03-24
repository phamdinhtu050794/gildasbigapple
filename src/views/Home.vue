<template>
  <div class="home">
    <MenuPage></MenuPage>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import MenuPage from '@/components/MenuPage.vue'

export default {
  name: 'Home',
  components: {
    MenuPage
    // HelloWorld
  }
}
</script>
