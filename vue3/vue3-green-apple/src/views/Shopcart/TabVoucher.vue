<template>
  <div class="demo-tab">
    
   
  
  
  Posts component<br>
    <span>{{ propiedad }}</span>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
        
         
         <div class="todo">
    <h2>Verifique su carrito</h2>
    <table border ="1" class="table table-sm table-striped table-hover table-bordered" style="background-color:#F5F5DC;">
      <thead>
        <tr class="table-info">
          <th style="text-align:left;font-weight:bold;padding:10px;" colspan="2">Producto(s)</th>
          <th style="text-align:right;font-weight:bold;padding:10px;">Precio</th>
          <th style="text-align:right;font-weight:bold;padding:10px;">Cantidad</th>
          <th style="text-align:right;font-weight:bold;padding:10px;">SubTotal</th>
        </tr>
      </thead>
      <tbody>
        <tr class="car_pro" v-for="item in items">
          <td width="10%"><img :src="pathPhoto + item.photo" class="imgsd"></td>
          <td style="text-align:right;padding:10px;">{{ article(item) }}</td>
          <td style="text-align:right;padding:10px;">{{ price(item) }}&nbsp;&dollar;</td>
          <td style="text-align:right;padding:10px;">{{ item.qty }}</td>
          <td style="text-align:right;padding:10px;">{{ priceXQty(item) }}&nbsp;&dollar;</td>
        </tr>
      </tbody>
      <tfoot class="table-success" style="text-align:right;font-weight:normal;">
        <tr>
          <th colspan ="4">
            <p>SubTotal:</p>
          </th>
          <td colspan ="1">
            <p><span id="total">{{ totalFormat }}</span>&nbsp;&dollar;</p>
          </td>
        </tr>
        <tr>
          <th colspan ="4">
            <p>10% Iva:</p>
          </th>
          <td colspan ="1">
            <p><span id="tax">{{ taxFormat }}</span>&nbsp;&dollar;</p>
          </td>
        </tr>
        <tr>
          <th colspan ="4">
            <p>Total:</p>
          </th>
          <td colspan ="1">
            <p><span id="total-general">{{ totalGenFormat }}</span>&nbsp;&dollar;</p>
          </td>
        </tr>
      </tfoot>
    </table>   
    
  </div>
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
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
    propiedad: String
  },
      data() {    
      return {      
        items: Logic.data.cart,
        //pathPhoto: `${process.env.MIX_APP_URL}../storage/article/` 
        pathPhoto: ``     
      }      
    },

    computed: {    
      total(){
        const sumBy = (arr, func) => arr.reduce((acc, item) => acc + func(item), 0);
        return sumBy(this.items, function(it) {
          return  (it.price * it.qty)
        })
      },
      totalFormat(){
        //return FormatNumber.put(this.total, '.', ',', 2);
        return this.total;
      },
      tax() {
        return (this.total*10)/100;
      },
      taxFormat() {
        //return FormatNumber.put(this.tax, '.', ',', 2);
        return this.tax;
      },
      totalGen() {
        return this.total+this.tax;
      },
      totalGenFormat() {
        //return FormatNumber.put(this.totalGen, '.', ',', 2);
        return this.totalGen;
      }
    },
    
    methods:{
      article(item) {        
        return `${item.name} - ${item.descript}`;
      },
      price(item) {
        //return FormatNumber.put((item.price * 1), '.', ',', 2);
        return item.price;
      },
      priceXQty(item) {
        let pxq = item.price * item.qty;  
        //return FormatNumber.put((pxq), '.', ',', 2);
        return pxq;
      }
    }
  
  }
</script>
