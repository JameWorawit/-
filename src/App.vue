<!-- App.vue -->
<script setup>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import Card from './components/Card.vue';
import AddMusic from './components/AddMusic.vue';

import { ref } from 'vue';
import { musicListData } from './data/music.js';

const showModel = ref(false);

const musicList = ref(musicListData);

const handleAddMusic = (newMusic) => {
  if(!newMusic){
    console.error("ไม่ได้ข้อมูลอะ")
    return
  }
  musicList.value.unshift(newMusic);
};

const handleLike = (id) =>{
  const music = musicList.value.find( m => m.id === id);
  if(music){
    music.likes++;
  }
}
</script>

<template>
  <Navbar @open-model="showModel = true" />
  <Sidebar />
  <main>
    <div class="mt-20 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5 p-5">
      <Card v-for="music in musicList" :key="music.id" :item="music" @increment-like="handleLike" />
    </div>
  </main>
  <AddMusic :show="showModel" @close-model="showModel = false" @add-music="handleAddMusic" />

</template>
