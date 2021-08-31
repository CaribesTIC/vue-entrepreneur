/**
 * Mocking client-server processing
 */
 
import axios from 'axios'
 
const apiGetProducts = async () => {
    return await axios.get("http://api.mv.com/api/products");
};

let _products = [];

export default {

  async getProducts(cb) {
    if (_products.length === 0) {
      let response = await apiGetProducts();
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
