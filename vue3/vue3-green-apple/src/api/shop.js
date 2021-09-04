/**
 * Mocking client-server processing
 */
 
import axios from 'axios'
import Cookies from 'js-cookie'
import store from '../store'


let _products = [];

export default {

  async getProducts(cb) {
    if (_products.length === 0) {

      const sToken = store.getters.token

      const params = { token: sToken.access_token}

      let response = await axios.get("http://api.mv.com/api/auth/products",{params: params});
      _products = response.data;
      cb(_products);
    }        
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      Math.random() > 0.5 || navigator.userAgent.indexOf("PhantomJS") > -1
        ? cb()
        : errorCb();
    }, 100);
  }
};
