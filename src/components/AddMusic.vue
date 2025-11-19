<!-- AddMusic.vue -->
<script setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
  showModel: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['showModel', 'addMusic']);

const createDefaultMusic = () => ({
  id: 0,
  title: '',
  artist: '',
  image: null, 
  spotifyUrl: '',
  youtubeUrl: '',
  likes: 0,
});
const newMusic = ref(createDefaultMusic());

const imagePreviewUrl = ref(null);

const onFileChange = (event) => {
  const file = event.target.files[0]; // ดึงไฟล์ที่ผู้ใช้เลือก

  
  if (imagePreviewUrl.value) {
    URL.revokeObjectURL(imagePreviewUrl.value);
  }

  if (!file) {
    imagePreviewUrl.value = null;
    newMusic.value.image = null;
    return;
  }

  imagePreviewUrl.value = URL.createObjectURL(file);

  newMusic.value.image = file;

};

const isFormValid = computed(() => {
  return newMusic.value.title.trim() !== '' && newMusic.value.artist.trim() !== '';
});

watch(
  () => props.showModel,
  (newShowValue) => {
    if (newShowValue === false) {
      if (imagePreviewUrl.value) {
        URL.revokeObjectURL(imagePreviewUrl.value);
        imagePreviewUrl.value = null;
      }
      newMusic.value = createDefaultMusic();
    }
  }
);

const handleSubmit = () => {
  emit('addMusic', { ...newMusic.value, id: Date.now() });
  emit('showModel', false);
};
</script>
<template>
  <div v-if="props.showModel" class="fixed inset-0 flex items-center justify-center backdrop-blur-2xl">
    <div class="flex h-fit w-fit flex-col items-center justify-center gap-3 rounded-sm bg-gray-100 p-8">
      <h2 class="text-lg font-bold">เพิ่มเพลง</h2>

      <form @submit.prevent="handleSubmit" class="flex w-[30rem] flex-col flex-wrap items-start justify-center gap-y-3 rounded-sm bg-white p-8">
        <label class="text-sm font-bold" for="title">ชือเพลง</label>
        <input class="bg-white-200 w-full rounded-sm border border-gray-300 p-2 focus:outline-2 focus:outline-blue-500" type="text" v-model="newMusic.title" id="title" placeholder="ฟ้า" required />

        <label class="text-sm font-bold" for="artist">ชื่อศิลปิน</label>
        <input
          class="bg-white-200 w-full rounded-sm border border-gray-300 p-2 focus:outline-2 focus:outline-blue-500"
          type="text"
          v-model="newMusic.artist"
          id="artist"
          placeholder="Landokmai"
          required
        />

        <label class="text-sm font-bold" for="image">เพิ่มรูป</label>
        <input class="bg-white-200 w-full rounded-sm border border-gray-300 p-2 focus:outline-2 focus:outline-blue-500" type="file" @change="onFileChange" id="image" accept="image/*" />
        <div class="self-center" v-if="imagePreviewUrl">
          <img :src="imagePreviewUrl" alt="Image Preview" class="h-32 rounded-md object-cover" />
        </div>

        <label class="text-sm font-bold" for="spotifyUrl">Spotify</label>
        <input
          class="bg-white-200 w-full rounded-sm border border-gray-300 p-2 focus:outline-2 focus:outline-blue-500"
          type="text"
          v-model="newMusic.spotifyUrl"
          id="spotifyUrl"
          placeholder="https://open.spotify.com/track/3RPiQqgZbe4jFNMIZtGoaU?si=3dcc900d81b24317"
        />

        <label class="text-sm font-bold" for="youtubeUrl">Youtube</label>
        <input
          class="bg-white-200 w-full rounded-sm border border-gray-300 p-2 focus:outline-2 focus:outline-blue-500"
          type="text"
          v-model="newMusic.youtubeUrl"
          id="youtubeUrl"
          placeholder="https://www.youtube.com/watch?v=74cOUSKXMz0&t=4902s"
        />

        <div class="flex gap-10">
          <button @click="emit('showModel', false)" type="button" class="flex h-5 w-fit items-center rounded-sm bg-red-500 p-5">ปิด</button>
          <button :class="{ 'bg-emerald-500': isFormValid, 'cursor-not-allowed bg-gray-500': !isFormValid }" class="flex h-5 w-full items-center rounded-sm p-5" type="submit" :disabled="!isFormValid">
            บันทึก
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
