<template>
  <div class="container mt-4">

   
    <div id="carouselExampleIndicators" class="carousel slide mb-4" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
      </div>
      <div class="carousel-inner rounded">
        <div class="carousel-item active">
          <img src="/src/assets/slide1.jpg" class="d-block w-100" alt="Slide 1">
          <div class="carousel-caption d-none d-md-block">
            <h5>Tecnología al alcance de todos</h5>
            <br>
            <p>Encuentra los mejores productos aquí</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/src/assets/slide2.jpg" class="d-block w-100" alt="Slide 2">
          <div class="carousel-caption d-none d-md-block">
            <h5>Innovación y calidad</h5>
            <br>
            <p>Los productos más confiables del mercado</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/src/assets/slide3.jpg" class="d-block w-100" alt="Slide 3">
          <div class="carousel-caption d-none d-md-block">
            <h5>Ofertas exclusivas</h5>
            <br>
            <p>No te pierdas nuestras promociones</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>

   
    <Products />

   
    <CartDetail />

    
    <footer class="bg-dark text-white text-center mt-5 p-4">
      <div class="mb-2">Síguenos en nuestras redes sociales:</div>
      <a href="https://www.facebook.com" target="_blank" class="text-white me-3">
        <i class="bi bi-facebook"></i> Facebook
      </a>
      <a href="https://www.instagram.com" target="_blank" class="text-white me-3">
        <i class="bi bi-instagram"></i> Instagram
      </a>
      <a href="https://www.twitter.com" target="_blank" class="text-white">
        <i class="bi bi-twitter"></i> Twitter
      </a>
      <div class="mt-2">&copy; 2025 Tecno Chile. Todos los derechos reservados.</div>
    </footer>

  </div>
</template>

<script>
import Products from "../components/Products.vue";
import CartDetail from "../components/CartDetail.vue";

export default {
  components: { Products, CartDetail }
};
</script>

<style scoped>
.carousel-inner img {
  height: 350px;
  object-fit: cover;
}

.carousel-caption h5 {
  background-color: rgba(0,0,0,0.5);
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
}

.carousel-caption p {
  background-color: rgba(0,0,0,0.5);
  display: inline-block;
  padding: 3px 8px;
  border-radius: 5px;
}
</style>
