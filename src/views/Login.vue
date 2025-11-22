<template>
  <div class="container mt-5" style="max-width:450px;">
    <h2 class="mb-4 text-center">Iniciar Sesión</h2>
    <form @submit.prevent="login">
      <input v-model="name" class="form-control mb-3" type="text" placeholder="Nombre">
      <input v-model="email" class="form-control mb-3" type="email" placeholder="usuario@email.com">
      <input v-model="password" class="form-control mb-3" type="password" placeholder="password">
      <button class="btn btn-primary w-100">Entrar</button>
      <p v-if="error" class="text-danger mt-2">{{ error }}</p>
    </form>
    <p class="text-center mt-3">
      <router-link to="/home">Volver a la tienda sin iniciar sesión</router-link>
    </p>
  </div>
</template>

<script>
import { Auth } from "../services/Auth";
import { store } from "../store/store";
export default {
  data(){ return {name:'', email:'', password:'', error:''} },
  methods:{
    async login(){
      this.error='';
      try{
        const user = await Auth.login({name:this.name,email:this.email,password:this.password});
        store.setUser(user);
        this.$router.push("/home");
      } catch(err){ this.error='Credenciales inválidas'; }
    }
  }
}
</script>
