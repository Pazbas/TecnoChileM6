import { reactive } from "vue"

export const cart = reactive({
  items: [],

  add(product, qty = 1) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) {
      existing.qty += qty;
    } else {
      this.items.push({ ...product, qty });
    }
  },

  remove(id) {
    this.items = this.items.filter(p => p.id !== id);
  },

  clear() {
    this.items = [];
  },

  total() {
    return this.items.reduce((s, p) => s + p.qty * p.price, 0);
  }
});
