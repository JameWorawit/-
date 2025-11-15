<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['incrementLike']);
</script>

<template>
  <!-- card -->
  <div class="flex max-h-[300px] cursor-pointer justify-center rounded-2xl bg-gray-100 p-5 shadow-2xl transition-transform duration-100 hover:scale-105">
    <div class="max-h-[300px] w-full max-w-[200px] text-center">
      <img :src="item.image" :alt="item.title" class="w-full rounded-xl" />
      <h1 class="overflow-hidden pt-1 text-ellipsis whitespace-nowrap">{{ item.title }}</h1>
   
      <p class="text-sm text-gray-600">{{ item.artist }}</p>
      <div class="flex items-center justify-center gap-2 pt-1">
        <a v-if="item.spotifyUrl" :href="item.spotifyUrl" target="_blank" class="hover:scale-120">
          <img class="h-5 w-5" src="/brands/spotify.png" alt="" />
        </a>
        <a v-if="item.youtubeUrl" :href="item.youtubeUrl" target="_blank" class="hover:scale-120">
          <img class="h-5 w-5" src="/brands/youtube.png" alt="" />
        </a>
        <a href="#" class="flex flex-row items-center gap-1">
          <img @click.prevent="emit('incrementLike', item.id)" class="h-5 w-5 transition hover:scale-125 active:scale-100" src="/brands/favourite.png" alt="favourite" />
          <span class="inline-block w-2 text-center">{{ item.likes }}</span>
        </a>
      </div>
    </div>
  </div>
  <!--end card -->
</template>
