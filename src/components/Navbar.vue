<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white"> 
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/src/assets/logo.jpg" alt="Logo" width="300" class="d-inline-block align-text-top me-2">
       
      </a>
      <ul class="navbar-nav ms-auto">
        <li v-if="!store.user" class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li v-else class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
            {{ store.user.name }}
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" @click="logout">Cerrar Sesión</a></li>
          </ul>
        </li>
      </ul>
      <button class="btn btn-outline-light ms-3" data-bs-toggle="modal" data-bs-target="#cartModal">
        Carrito ({{ store.cart.length }})
      </button>
    </div>
  </nav>
</template>

<script>
import { store } from "../store/store";
export default { setup(){ return { store } }, methods:{ logout(){ store.clearUser(); store.clearCart(); this.$router.push("/login"); } } }
</script>
