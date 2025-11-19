<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);
</script>
<template>
  <!-- Sidebar -->

  <div :class="{ '-translate-x-full': !modelValue, '-translate-x-0': modelValue }" class="fixed top-0 left-0 z-20 h-screen w-60 bg-gray-100 transition-transform duration-200">
    <aside class="w-60 flex-shrink-0 p-5">
      <div class="align-center mb-5 flex items-center gap-5">
        <button @click="emit('update:modelValue', false)" id="menu-sidebar" class="text-2xl hover:cursor-pointer" type="button">☰</button>
        <div class="h-10 w-10 border-transparent">
          <img src="@/assets/image/logo-unscreen.gif" alt="this is logo" />
        </div>
      </div>
      <nav class="mr-5 flex flex-col gap-2 space-y-4">
        <span class="flex items-center gap-5">
          <router-link to="/"><i class="fi fi-sr-home"></i> <span class="ml-3">หน้าแรก</span></router-link>
        </span>
        <span class="flex items-center gap-5">
          <router-link to="/profile"><i class="fi fi-ss-user"></i> <span class="ml-3">โปรไฟล์</span></router-link>
        </span>
        <span class="flex items-center gap-5">
          <i class="fi fi-ss-music-alt"></i>
          <a href="#">Youtube Music</a>
        </span>
      </nav>
      <footer class="mt-5 mr-5">© 2025 เพลงที่ชอบ</footer>
    </aside>
  </div>
  <!-- end Sidebar -->
</template>
