<template>
  <div class="d-flex flex-column flex-lg-row gap-5 g-0 px-5 pt-4">
    <div
      class="col-auto col-lg-4 d-flex flex-column align-content-center align-items-center g-0 bg-white p-2 rounded-2 gap-4">
      <span class="fw-bold align-self-start">INFORMACIÓN DE LA EMPRESA</span>
      <div class="data-container">
        <span class="fw-bold">Dirección</span>
        <span v-html="contactInfo.address"></span>
      </div>
      <div class="data-container">
        <span class="fw-bold">Correo electrónico</span>
        <span>{{ contactInfo.email }}</span>
      </div>
      <div class="data-container">
        <span class="fw-bold">Sitio Web</span>
        <span>{{ contactInfo.website }}</span>
      </div>
      <div class="data-container">
        <span class="fw-bold">Red social</span>
        <span v-html="contactInfo.socialNetwork"></span>
      </div>
      <div class="data-container">
        <span class="fw-bold">Dirección de correspondencia de correo</span>
        <span v-html="contactInfo.mailAddress"></span>
      </div>
      <div class="data-container">
        <span class="fw-bold">Número de teléfonos</span>
        <span v-html="contactInfo.phone"></span>
      </div>
    </div>
    <div class="col w-100 d-flex flex-column g-0 gap-5">
      <div class="d-flex row bg-white px-2 pt-2 rounded-2 h-100">
        <div id="carouselExample" class="carousel slide d-flex align-items-lg-center">
          <div class="carousel-inner d-flex justify-content-center align-content-center">
            <div class="carousel-item active">
              <img src="https://via.placeholder.com/100" class="d-block" alt="...">
            </div>
            <div class="carousel-item">
              <img src="https://via.placeholder.com/100" class="d-block" alt="...">
            </div>
            <div class="carousel-item">
              <img src="https://via.placeholder.com/100" class="d-block" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon text-bg-info rounded-5" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon text-bg-info rounded-5" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="d-flex row bg-white px-5 py-3 rounded-2 overflow-y-auto h-100">
        <div v-for="articulo in articulos" :key="articulo.id"
          class="d-flex flex-column align-items-center col-6 col-lg-3 gap-3 mb-4">
          <img src="https://via.placeholder.com/100" class="item-image" alt="...">
          <span class="fw-bold">{{ articulo.titulo }}</span>
          <span class=" text-center">{{ articulo.descripcion }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import articulos from '../assets/data/articulos.json'
import { ref } from 'vue';

const contactInfo =
{
  address: "Carrera 52 # 91-66 <br> Medellín - Colombia",
  email: "usuarioapellido@hotmail.com",
  website: "www.usuarioapellido.com",
  socialNetwork: "<a href='www.instagram.com/usuarioapellido' target='_blank'>www.instagram.com/usuarioapellido</a> <br> <a href='www.linkeind.com/usuarioapellido' target='_blank'>www.linkeind.comm/usuarioapellido</a>",
  mailAddress: "Carrera 52 # 91-66 <br> Medellín - Colombia",
  phone: "Fijo<br>+57 (4) 313-70-00<br>Fax<br>+57 (4) 313-44-77",
}

const caruselImages = [
  {
    id: 1,
    src: "https://via.placeholder.com/150",
    alt: "..."
  },
  {
    id: 2,
    src: "https://via.placeholder.com/150",
    alt: "..."
  },
  {
    id: 3,
    src: "https://via.placeholder.com/150",
    alt: "..."
  },
]

const activeImage = ref(caruselImages[0].src)

const passImage = (direction) => {
  const currentIndex = caruselImages.findIndex((image) => image.id === activeImage.value.id)
  if (direction === 'next') {
    if (currentIndex === caruselImages.length - 1) {
      activeImage.value = caruselImages[0]
    } else {
      activeImage.value = caruselImages[currentIndex + 1]
    }
  } else {
    if (currentIndex === 0) {
      activeImage.value = caruselImages[caruselImages.length - 1]
    } else {
      activeImage.value = caruselImages[currentIndex - 1]
    }
  }
}

</script>

<style scoped lang="scss">
.data-container {
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.item-image {
  width: 100px;
  height: 100px;
  border-radius: 100%;
}
</style>
