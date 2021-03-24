<template>
  <div class="menu-container">
    <div class="header-container">
        
        <div class="title"><h1>Gilda's Big Apple</h1></div>
    
     <router-link class="router-link" :to="{ name: 'About', params: { residentialsId: 123 }}"><h1>About</h1></router-link>
    </div>
    <div>
          <div v-for="item in cakes" :key="item.key" class="cakes-item" >
        <CakeDetails
          v-if="item.avaliable"
          :name="item.name"
          :price="item.price"
        ></CakeDetails>
      </div>     
    </div>
  </div>
</template>

<script>
import About from '../views/About.vue';
import CakeDetails from "./../components/CakeDetails.vue";
import store from './../store/index'

export default {
  name: "MenuPage",
  components: {
    CakeDetails,
    About,
  },
    data(){
        return{

        }
    },
  props: {
    foods: Array,
  },

  computed:{
      cakes(){
          return store.state.Cakes
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.router-link{
position: absolute;
top:0;
right: 0;
border: 2px solid black;
border-radius: 50%;
text-decoration: none;
background-color: rgb(9, 110, 177);
}
</style>
