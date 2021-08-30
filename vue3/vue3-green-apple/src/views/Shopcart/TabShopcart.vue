<template>
  <div class="demo-tab mx-10">
    Home component<br>
    <span>{{ propiedad }}</span>
    <div class="flex flex-wrap m-4">
    <Shopcart
      v-for="article in articles"
      :article="article"
      :key="article.id"
      class="demo-tab mx-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      </Shopcart>
    </div>
  </div>
  
</template>

<script>
import Shopcart from './Shopcart.vue'
export default {
  components: {
    Shopcart    
  },  
  props: {
    propiedad: String
  },
  data() {
    return {      
      articles:[
        {id: 1, name: 'eee', descript:'ddddddd', price: 23, photo:'cafe.jpg'},
        {id:2, name: 'aaa', descript:'ddddddd', price: 24, photo:'cebolla.jpg'},
        {id:3, name: 'sss', descript:'ddddddd', price: 25, photo:'patata.jpg'},
        {id:4, name: 'sss', descript:'ddddddd', price: 25, photo:'pina.jpg'},
      ]                 
    }
  },
}
</script>
