/**
 * Mocking client-server processing
 */

import Api from "./api";
import Csrf from "./csrf";

let _products = [];

export default {
  async getProducts(cb) {
    if (_products.length === 0) {
      await Csrf.getCookie();

      let response = await Api.get("/api/auth/products");
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
  },
};
