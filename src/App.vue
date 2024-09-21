<script setup>
import { shallowRef } from 'vue'

import SideBar from '@components/SideBar.vue'
import Header from '@components/Header.vue'
import Home from '@components/Home.vue'
import Footer from '@components/Footer.vue'
import Company from '@components/Company.vue'
import Items from '@components/Items.vue'

const contentComponents = {
  home: {
    component: Home,
    title: 'Inicio'
  },
  company: {
    component: Company,
    title: 'Empresas'
  },
  items: {
    component: Items,
    title: 'Articulos'
  }
}

const componentToRender = shallowRef(contentComponents.home)

const changeComponent = (component) => {
  componentToRender.value = contentComponents[component]
}

console.log(componentToRender.value)

</script>

<template>
  <div class="d-flex">
    <div class="d-flex min-vh-100">
      <SideBar @on-menu-click="changeComponent" />
    </div>
    <div class="d-flex flex-column min-vh-100 w-100">
      <div class="d-flex">
        <Header :selected-menu="componentToRender.title" />
      </div>
      <div class="d-flex h-100 w-100">
        <component :is="componentToRender.component" />
      </div>
      <div class="d-flex">
        <Footer />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
