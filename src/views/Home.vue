<!-- //Home.vue (Home Route Component) -->
<script setup>
import Card from '@/components/Card.vue';

import { ref } from 'vue';
import { musicListData } from '@/data/music.js';

const musicList = ref(musicListData);

const emit = defineEmits(['close-modal']);

const handleLike = (id) => {
  const music = musicList.value.find((m) => m.id === id);
  if (music) {
    music.likes++;
  }
};
</script>

<template>
  <div class="mt-20 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5 p-5">
    <Card v-for="music in musicList" :key="music.id" :item="music" @increment-like="handleLike" />
  </div>
 
</template>
