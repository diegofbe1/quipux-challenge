<template>
  <div :class="['sidebar', { 'expanded': isExpanded }]">
    <div :class="['menu-items gap-3', { 'expanded': isExpanded }]">
      <div class="toggle-button" @click="toggleSidebar">
        <i class="bi-list" style="font-size: 2rem; color: white;"></i>
        <img v-if="isExpanded" width="160px" src="../assets/logo-white.png" alt="">
      </div>
      <div class="d-flex align-items-center w-100 gap-2">
        <i class="bi-house" style="font-size: 2rem; color: white;"></i>
        <div class="menu-button" @click="onMenuClick('home')" v-if="isExpanded">
          <span class="w-100 text-white">Inicio</span>
        </div>
      </div>
      <div class="d-flex align-items-center w-100 gap-2">
        <i class="bi-handbag" style="font-size: 2rem; color: white;"></i>
        <div class="menu-button" @click="onMenuClick('company')" v-if="isExpanded">
          <span class="w-100 text-white">Empresas</span>
        </div>
      </div>
      <div class="d-flex align-items-center w-100 gap-2">
        <i class="bi-file-earmark-text" style="font-size: 2rem; color: white;"></i>
        <div class="menu-button" @click="onMenuClick('items')" v-if="isExpanded">
          <span class="w-100 text-white">Articulos</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const isExpanded = ref(false);

function toggleSidebar() {
  isExpanded.value = !isExpanded.value;
}

const emit = defineEmits(['on-menu-click']);

const onMenuClick = (component) => {
  emit('on-menu-click', component);
  toggleSidebar();
}
</script>

<style scoped lang="scss">
.sidebar {
  padding: 1.5rem;
  position: relative;
  z-index: 10;
  background-color: #302634;
  width: 80px;
  transition: width 0.3s ease;

  &.expanded {
    width: 400px;
  }

  .toggle-button {
    display: flex;
    cursor: pointer;
    width: 100%;
    justify-content: space-between;
  }

  .menu-items {
    display: flex;
    flex-direction: column;

    &.expanded {
      align-items: start;

    }
  }

  .menu-button {
    cursor: pointer;
  }
}
</style>
