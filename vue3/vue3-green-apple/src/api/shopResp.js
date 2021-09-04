/**
 * Mocking client-server processing
 */
const _products = [
  { id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 2, photo:'cafe.jpg' },
  { id: 2, title: "H&M T-Shirt White", price: 10.99, inventory: 10, photo:'cebolla.jpg' },
  { id: 3, title: "Charli XCX - Sucker CD", price: 19.99, inventory: 5,  photo:'patata.jpg' },
  { id: 4, title: "Xharli XXX - Xucker CD", price: 29.99, inventory: 3, photo:'pina.jpg'  },
  { id: 5, title: "oPad 4 oini", price: 500.01, inventory: 2, photo:'cafe.jpg' },
  { id: 6, title: "R&M R-Shirt White", price: 10.99, inventory: 10, photo:'cebolla.jpg' },
  { id: 7, title: "Aharli ACX - Aucker CD", price: 19.99, inventory: 5,  photo:'patata.jpg' },
  { id: 8, title: "Zharli ZXX - Xucker CD", price: 29.99, inventory: 3, photo:'pina.jpg'  }
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 100);
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
