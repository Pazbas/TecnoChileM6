import { reactive } from "vue";

export const store = reactive({
  user: JSON.parse(localStorage.getItem("user")) || null,
  cart: [],

  setUser(user){
    this.user = user;
    localStorage.setItem("user", JSON.stringify(user));
  },
  clearUser(){
    this.user = null;
    localStorage.removeItem("user");
  },

  addToCart(product){
    const item = this.cart.find(p => p.id === product.id);
    if(item){
      item.qty++;
    } else {
      this.cart.push({id:product.id, name:product.name, price:product.price, qty:1});
    }
  },

  removeFromCart(id){
    const index = this.cart.findIndex(p => p.id===id);
    if(index!==-1) this.cart.splice(index,1);
  },

  clearCart(){
    this.cart.splice(0,this.cart.length);
  }
});
