<div>
      <div :cakes="cakes" class="pizza">
        <div><img src="@/assets/pizza.gif" width="200" height="200" /></div>
       <!-- <div v-for="item in cakes" :key="item.key[0]">
            <CakeDetails
                v-if="item.avaliable"
                :name="item.name"
                :price="item.price"
            > </CakeDetails>
       </div> -->
      </div>

      <div :cakes="cakes" class="pie">
       <!-- <div v-for="item in cakes" :key="item.key">
            <CakeDetails
                v-if="item.avaliable"
                :name="item.name"
                :price="item.price"
            > </CakeDetails>
       </div> -->
        <div><img src="@/assets/pie.jpeg" width="200" height="200" /></div>
      </div>

      <div :cakes="cakes" class="cookies">
        <div><img src="@/assets/cookies.jpeg" width="200" height="200" /></div>
       <!-- <div v-for="item in cakes" :key="item.key">
            <CakeDetails
                v-if="item.avaliable"
                :name="item.name"
                :price="item.price"
            > </CakeDetails>
       </div> -->
      </div>
      <div :cakes="cakes" class="bagels">
       <!-- <div v-for="item in cakes" :key="item.key">
            <CakeDetails
                v-if="item.avaliable"
                :name="item.name"
                :price="item.price"
            > </CakeDetails>
       </div> -->
        <div><img src="@/assets/bagels.jpeg" width="200" height="200" /></div>
      </div>

      <div :cakes="cakes" class="creamchees">
        <div>
          <img src="@/assets/creamchees.jpeg" width="200" height="200" />
        </div>
       <!-- <div v-for="item in cakes" :key="item.key">
            <CakeDetails
                v-if="item.avaliable"
                :name="item.name"
                :price="item.price"
            > </CakeDetails>
       </div> -->
      </div>
      <div :cakes="cakes" class="bananacake">
       <!-- <div v-for="item in cakes" :key="item.key">
            <CakeDetails
                v-if="item.avaliable"
                :name="item.name"
                :price="item.price"
            > </CakeDetails>
       </div> -->
        <div>
          <img src="@/assets/bananabreak.jpeg" width="200" height="200" />
        </div>
      </div>
      <div :cakes="cakes" class="chocolatechip">
        <div>
          <img src="@/assets/chocolatechip.jpeg" width="200" height="200" />
        </div>
       <!-- <div v-for="item in cakes" :key="item.key">
            <CakeDetails
                v-if="item.avaliable"
                :name="item.name"
                :price="item.price"
            > </CakeDetails>
       </div> -->
      </div>
    </div>