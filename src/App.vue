<script setup>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import Card from './components/Card.vue';

import { ref } from 'vue';

// API MUSIC LIST
const musicList = ref([
  {
    id: 1,
    title: 'Christian Kuria - Too Good',
    artist: 'Christian Kuria',
    image: 'Christian.jpg',
    spotifyUrl: '',
    youtubeUrl: 'https://www.youtube.com/watch?v=W7O03rIvP3w&list=RDW7O03rIvP3w&start_radio=1',
    likes: 0,
  },
  {
    id: 2,
    title: 'Christian Kuria - Too Good',
    artist: 'Christian Kuria',
    image: 'Christian.jpg',
    spotifyUrl: '',
    youtubeUrl: 'https://www.youtube.com/watch?v=W7O03rIvP3w&list=RDW7O03rIvP3w&start_radio=1',
    likes: 0,
  },
]);
</script>

<template>
  <Navbar />
  <Sidebar />
  <main>
    <div class="mt-20 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5 p-5">
      <Card v-for="music in musicList" :key="music.id" :item="music" />
    </div>
  </main>
</template>
