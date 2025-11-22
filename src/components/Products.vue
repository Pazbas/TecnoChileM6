<template>
  <div>


    <div class="input-group mb-4">
      <input type="text" class="form-control" placeholder="Buscar producto por nombre..." v-model="searchTerm" @keyup.enter="filterProducts">
      <button class="btn btn-primary" @click="filterProducts">Buscar</button>
      <button class="btn btn-secondary" @click="resetFilter">Mostrar todos</button>
    </div>

    
    <div class="row">
      <div class="col-md-4 mb-3" v-for="product in filteredProducts" :key="product.id">
        <div class="card h-100">
          <img :src="product.img" class="card-img-top" :alt="product.name">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Precio: ${{ product.price }}</p>
            <p class="card-text">Stock: {{ product.stock }}</p>
            <button class="btn btn-primary" :disabled="product.stock <= 0" @click="add(product)">Agregar al carrito</button>
          </div>
        </div>
      </div>
      <p v-if="filteredProducts.length === 0" class="text-center mt-3">No se encontraron productos.</p>
    </div>

  </div>
</template>

<script>
import { Products } from "../services/API";
import { store } from "../store/store";

export default {
  data() {
    return {
      products: [],
      filteredProducts: [],
      searchTerm: ""
    };
  },
  async mounted() {
    // Obtener productos de la "API" de manera asíncrona
    this.products = await Products.all();
    this.filteredProducts = this.products;
  },
  methods: {
    add(product) {
      if (product.stock <= 0) return;
      store.addToCart(product);
      product.stock--;
    },
    filterProducts() {
      // Filtrar productos por nombre (case insensitive)
      const term = this.searchTerm.trim().toLowerCase();
      if (!term) {
        this.filteredProducts = this.products;
        return;
      }
      this.filteredProducts = this.products.filter(p => p.name.toLowerCase().includes(term));
    },
    resetFilter() {
      this.searchTerm = "";
      this.filteredProducts = this.products;
    }
  }
};
</script>
