export default {
  data:{
    cart: []
  },
  add(article){
    var search = this.data.cart.find(element => element.id === article.id);
      //if it is not
    if(typeof search != 'object'){
      this.data.cart.push({
        id:article.id,        
        name:article.name, 
        descript:article.descript,       
        price:article.price,
        photo:article.photo,
        qty:1,
      })
    }
  },
  inc(article){
    var search = this.data.cart.find(element => element.id === article.id);
    //if it is
    if(typeof search == 'object'){
      //if it is in the cart give me the index in the position of the array
      var index = this.data.cart.indexOf(search)
      this.data.cart[index].qty++
    }
  },
  dec(article){
    var search = this.data.cart.find(element => element.id === article.id);
    //if it is
    if(typeof search == 'object'){
      //if it is in the cart give me the index in the position of the array
      var index = this.data.cart.indexOf(search)
      if(this.data.cart[index].qty == 1){
        this.data.cart.splice(index, 1);
      } else {
        this.data.cart[index].qty--
      }
    }
  }
}
