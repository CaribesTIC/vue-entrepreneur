<template>
  <div>



<transition name="modal">

        
          <div class="">    
            <div class="">
              <img :src="pathPhoto + article.photo" class="img-fluid">
              <p class="card-title">
                <span style="font-size: 12px">{{article.name}}</span><br/>
                <span style="font-size: 10px">{{article.descript}}</span>
              </p>
              <p>
                <span class="card-text">&dollar;&nbsp;{{price}}</span>
                <span class="card-text" v-if="qtyCart>0">*&nbsp;{{qtyCart}}&nbsp;=&nbsp;{{priceXQtyCart}}&nbsp;&dollar;</span>
              </p>
              <!--button class="btn btn-info mybtn" v-if="qtyCart===0" @click="addToCart">Agregar&nbsp;al&nbsp;carrito</button-->
              <button class="mybtn" v-if="qtyCart===0" @click="addToCart">Agregar&nbsp;al&nbsp;carrito</button>
              <div class="botones" v-else>
                <button class="btn btn-danger mybtns" @click="dec">-</button>
                <button class="btn btn-success mybtns" @click="inc">+</button>
              </div>
            </div>
          </div>
         

  </transition>








  </div>
  
</template>

<script>
import Logic from './Logic.js';
export default {
  props: {
    article: Array
  },
  
  
  data(){
    return {
      shared:Logic.data,
      //pathPhoto: `../assets/`
      pathPhoto: ``
    }
  },
  
  computed: {
    qtyCart(){           
      var search = this.shared.cart.find(element => element.id === this.article.id);
      if(typeof search == 'object'){
         return search.qty
      } else {
        return 0;
      }
    },    
    price() {
      //return FormatNumber.put((this.article.price * 1), '.', ',', 2);
      return this.article.price;
    },
    priceXQtyCart() {
      let pxqc = this.article.price * this.qtyCart; 
      //return FormatNumber.put((pxqc), '.', ',', 2); 
      return pxqc;
    }  
  },
  
  methods:{
    addToCart(){
      Logic.add(this.article);            
    },
    inc(){
      Logic.inc(this.article);
    },
    dec(){
      Logic.dec(this.article);
    }
  }
  
  
}
</script>
