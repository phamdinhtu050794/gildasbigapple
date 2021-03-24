<template>
  <div id="app">
     <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />



      <button v-if="this.$route.name != 'RelaxClub'" id="home-btn">
         <router-link :to="{ name: 'Home'}">
        <i class="material-icons" style="font-size: 48px;color:black">&#xe88a;</i>
        </router-link>
      </button>
    <router-view/>
  </div>
</template>

<style lang="scss">
#home-btn{
  position: absolute;
  top: 0; 
  left: 10px;
    height: 50px;
    border: none;
    
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
