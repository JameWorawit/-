// App.vue (Layout Component)
<script setup>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import AddMusic from './components/AddMusic.vue';
import { musicListData } from '@/data/music.js';
import { ref } from 'vue';

const showSideBar = ref(false);
const openModel = ref(false);

const musicList = ref(musicListData);

const handleAddMusic = (newMusic) => {
  if (!newMusic) {
    console.error('400 Bad Request');
    return;
  }
  musicList.value.unshift(newMusic);
  openModel.value = false;
};
</script>

<template>
  <Navbar @open-side-bar="showSideBar = true" @open-model-create-card="openModel = true" />
  <Sidebar v-model="showSideBar" />
  <AddMusic :show-model="openModel" @add-music="handleAddMusic" @show-model="openModel = $event" />
  <main>
    <RouterView> </RouterView>
  </main>
</template>
