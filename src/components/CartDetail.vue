<template>
  <div class="modal fade" id="cartModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">

       
        <div class="modal-header">
          <h5 class="modal-title">Carrito de {{ store.user ? store.user.name : 'Invitado' }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <ul class="list-group">
            <li 
              v-for="item in store.cart" 
              :key="item.id" 
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{{ item.name }}</strong> <br>
                Precio: ${{ item.price }} x {{ item.qty }} = ${{ item.price * item.qty }}
              </div>
              <button class="btn btn-sm btn-danger" @click="remove(item.id)">Quitar</button>
            </li>
          </ul>
          <p v-if="store.cart.length === 0" class="text-center mt-2">El carrito está vacío</p>
        </div>

    
        <div class="modal-footer d-flex justify-content-between align-items-center">
          <span><strong>Total: ${{ total }}</strong></span>
          <div>
            <button class="btn btn-secondary me-2" @click="clear">Vaciar carrito</button>
            <button class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store/store";

export default {
  setup() {
    return { store };
  },
  computed: {
    total() {
      // Suma precio * cantidad de todos los productos
      return store.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    }
  },
  methods: {
    remove(id) {
      store.removeFromCart(id);
    },
    clear() {
      store.clearCart();
    }
  }
};
</script>

<style scoped>
.modal-body {
  max-height: 300px;
  overflow-y: auto;
}
</style>
