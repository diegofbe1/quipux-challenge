<template>
  <div class="d-flex flex-column flex-lg-row w-100 gap-5 g-0 px-5 pt-4">
    <div
      class="col-auto col-lg-4 d-flex flex-column align-content-center align-items-center g-0 bg-white p-2 rounded-2 gap-4">
      <span class="fw-bold align-self-start">INFORMACIÓN DE LA EMPRESA</span>
      <div class="data-container">
        <span class="fw-bold">Nombre</span>
        <span>{{ companyInfo.name }}</span>
      </div>
      <div class="data-container">
        <span class="fw-bold">Fecha de creación</span>
        <span>{{ companyInfo.creationDate }}</span>
      </div>
      <div class="data-container">
        <span class="fw-bold">Dirección</span>
        <span v-html="companyInfo.address"></span>
      </div>
      <div class="data-container">
        <span class="fw-bold">Número de teléfonos</span>
        <span v-html="companyInfo.phone"></span>
      </div>
      <div class="data-container">
        <span class="fw-bold">Sitio Web</span>
        <a target="_blank" :href="companyInfo.webSite">{{ companyInfo.webSite }}</a>
      </div>
    </div>
    <div class="row w-100 d-flex flex-column align-content-center align-items-center g-0 bg-white px-2 pt-2 rounded-2">
      <span class="fw-bold mb-5 align-self-start">INFORMACIÓN DEL CONTACTO</span>
      <div class="d-flex flex-column flex-lg-row col gap-4 gap-lg-0">
        <div class="col d-flex flex-column g-0 gap-5 border-2 border-end align-items-center">
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
        </div>
        <div class="col d-flex flex-column g-0 gap-5 align-items-center">
          <div class="data-container">
            <span class="fw-bold">Dirección de correspondencia de correo</span>
            <span v-html="contactInfo.mailAddress"></span>
          </div>
          <div class="data-container">
            <span class="fw-bold">Número de teléfonos</span>
            <span v-html="contactInfo.phone"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const companyInfo =
{
  name: "Quipux S.A.S",
  creationDate: "1995/05/06",
  address: "Carrera 43A No. 3 Sur-130 Ed. Milla de Oro Distrito de negocios Torre 1 Piso 12 <br><br> Medellín - Colombia",
  phone: "Fijo<br>+57 (4) 313-70-00<br>Fax<br>+57 (4) 313-44-77",
  webSite: "www.quipux.com/site",
}

const contactInfo =
{
  address: "Carrera 52 # 91-66 <br> Medellín - Colombia",
  email: "usuarioapellido@hotmail.com",
  website: "www.usuarioapellido.com",
  socialNetwork: "<a href='www.instagram.com/usuarioapellido' target='_blank'>www.instagram.com/usuarioapellido</a> <br> <a href='www.linkeind.com/usuarioapellido' target='_blank'>www.linkeind.comm/usuarioapellido</a>",
  mailAddress: "Carrera 52 # 91-66 <br> Medellín - Colombia",
  phone: "Fijo<br>+57 (4) 313-70-00<br>Fax<br>+57 (4) 313-44-77",
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
</style>
