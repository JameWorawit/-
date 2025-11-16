<!-- Navbar.vue -->
<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits(['openModel','openSideBar']);

const isMobileSearchOpen = ref(false);

</script>

<template>
  <!-- Navbar  -->
  <div id="navbar" class="fixed top-0 z-10 flex w-full items-center justify-between bg-gray-100 pt-4 pr-5 pb-4">
    <div class="ml-5 flex flex-row items-center gap-5">
      <button @click="emit('openSideBar')" class="text-2xl hover:cursor-pointer" type="button" id="menu-navbar">☰</button>

      <div class="flex items-center gap-2">
        <div class="b-transparent h-10 w-10">
          <a href="#"><img src="/image/logo-unscreen.gif" alt="this is logo" /></a>
        </div>
        <div class="hidden md:block">
          <h1 class="text-base md:text-lg">คลังเพลง</h1>
        </div>
      </div>
    </div>
    <!-- Search bar -->

    <div class="hidden items-center justify-between sm:flex">
      <input
        type="text"
        placeholder="Search..."
        class="rounded-l-full border border-gray-500 px-4 py-1.5 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 sm:w-[250px] md:w-[300px] lg:w-[500px]"
      />
      <div class="ml-0 rounded-r-full border border-l-0 border-gray-500 px-4 py-1.5 hover:cursor-pointer">
        <span><i class="fi fi-rr-search"></i></span>
      </div>
    </div>
    <!--end Search bar -->

    <!-- mobile search bar -->
    <div
      :class="{ 'opacity-100': isMobileSearchOpen, 'pointer-events-none opacity-0': !isMobileSearchOpen }"
      class="fixed top-0 z-50 flex w-screen items-center gap-10 bg-gray-100 pt-4 pr-5 pb-4 pl-5 transition-opacity duration-300 sm:hidden"
    >
      <span @click="isMobileSearchOpen = false" id="back-to-navbar" class="text-xl"><i class="fi fi-rr-angle-circle-left"></i></span>
      <div class="flex w-full max-w-[500px] flex-row items-center">
        <input type="text" placeholder="Search..." class="flex-1 rounded-l-full border border-gray-500 px-4 py-1.5 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400" />
        <div class="ml-0 rounded-r-full border border-l-0 border-gray-500 px-4 py-1.5 hover:cursor-pointer">
          <span><i class="fi fi-rr-search"></i></span>
        </div>
      </div>
    </div>
    <!--end mobile search bar -->

    <!-- profile -->
    <div class="flex items-center justify-center gap-5">
      <!-- icon บนมือถือ -->
      <div @click="isMobileSearchOpen = true" class="block hover:cursor-pointer sm:hidden">
        <span><i class="fi fi-rr-search"></i></span>
      </div>

      <!-- Profile กับ icon อื่นๆ -->

      <button @click="emit('openModel')" type="button" class="flex items-center justify-center gap-2 rounded-2xl bg-gray-300 px-3 py-1 transition hover:bg-gray-400">
        <span class="font-bold">+</span>
        <span class="font-medium">สร้าง</span>
      </button>
      <a href="#" class="block max-sm:hidden"><i class="fi fi-ss-user-add"></i></a>
      <a href="#" class="block max-sm:hidden"><i class="fi fi-ss-bells"></i></a>
      <div class="h-10 w-10 overflow-hidden rounded-full">
        <img
          class="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
    <!--end profile -->
  </div>
  <!-- end Navbar  -->
</template>
