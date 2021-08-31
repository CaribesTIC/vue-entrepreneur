<template>
  <!--https://stackoverflow.com/questions/24132943/overflow-x-not-working
  style="border: 1px solid #FF0000; float: left; height: auto; overflow-x: auto; width: 400px;"
  https://codepen.io/paulobrien/pen/gJgqqZ
  -->
  <div class="demo-tab mx-10">
    <h2>Carrito</h2>
    <hr />
    <div class="table-data__wrapper">
      <table class="table-data">
      <thead>
        <tr class="">             
          <th colspan="2">Producto(s)</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <!--th style="text-align:right;font-weight:bold;padding:10px;">SubTotal</th-->
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, $index) in cartItems" :key="item.id">
          <td><img :src="pathPhoto + item.photo" class="w-20"></td>          
          <td>{{ item.title }}</td>
          <td>{{ priceItems(item.price.toString()) }}</td>
          <td>{{ item.quantity }}</td>
          <td><button @click="removeItem($index)" class="btn btn-danger">Eliminar</button></td>
        </tr>
      </tbody>
      <tfoot class="table-success" style="text-align:right;font-weight:normal;">
        <!--tr>
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
        </tr-->
        <tr>
          <th colspan ="4">
            <p>Total:</p>
          </th>
          <td colspan ="1">
            <!--p><span id="total-general">{{ totalGenFormat }}</span>&nbsp;&dollar;</p-->
            <p><span id="total-general">{{ cartTotal || 0 }}</span></p>
          </td>
        </tr>
      </tfoot>
      
      
      
      
      
      
      
      
      
    </table>
    </div>
    <!--button v-if="cartItems.length" @click="checkout">Checkout</button-->
    <hr />
    <!--h4>Total {{ cartTotal || 0 }}</h4-->
    <div v-if="$store.state.checkoutError">
      <p>Error procesando los productos...</p>
    </div>
  </div>
</template>
<script>
import { currency } from "@/utils/currency.js";
export default {
  name: "AppShoppingCart",
  data(){
    return {      
      //pathPhoto: `../assets/`
      pathPhoto: ``
    }
  },
  methods: {
    removeItem(index) {
      this.$store.dispatch("removeProductFromCart", index);
    },
    checkout() {
      this.$store.dispatch("checkout");
    },
    priceItems(val) {
        return currency(val, " $");
    },
  },
  computed: {
    cartItems() {
      return this.$store.getters.productsOnCart;
    },
    cartTotal() {
      return currency(this.$store.getters.cartTotal, " $");
    }
  }
};
</script>

<style scoped>
ul {
  text-align: left;
}
</style>
