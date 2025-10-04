<script setup>
function getItem(fileName) {
  return new URL(`/src/assets/thumbnail/${fileName}`, import.meta.url).href;
}
</script>

<template>
  <div class="grid gap-5 mt-20 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] p-5">
    <!-- card -->
    <div class="max-h-[300px] rounded-2xl p-5 bg-gray-100 flex justify-center shadow-2xl transition-transform duration-100 hover:scale-105 cursor-pointer">
      <div class="w-full max-w-[200px] max-h-[300px] text-center">
        <img :src="getItem('Christian.jpg')" alt="" class="rounded-xl w-full" />
        <h1 class="pt-1 overflow-hidden whitespace-nowrap text-ellipsis">Christian Kuria - Too Good</h1>
        <p class="text-sm text-gray-600">Christian Kuria</p>
        <div class="flex justify-center items-center gap-2 pt-1">
          <a href="#" class="hover:scale-120">
            <img class="w-5 h-5" src="/brands/spotify.png" alt="" />
          </a>
          <a href="https://www.youtube.com/watch?v=W7O03rIvP3w&list=RDW7O03rIvP3w&start_radio=1" class="hover:scale-120">
            <img class="w-5 h-5" src="/brands/youtube.png" alt="" />
          </a>
          <a href="#" class="flex flex-row items-center gap-0.5">
            <img class="w-5 h-5" src="/brands/favourite.png" alt="favourite" />
            <span>1000+</span>
          </a>
        </div>
      </div>
    </div>

    <div class="max-h-[300px] rounded-2xl p-5 bg-gray-100 flex justify-center shadow-2xl transition-transform duration-100 hover:scale-105 cursor-pointer">
      <div class="w-full max-w-[200px] max-h-[300px] text-center">
        <img :src="getItem('landokmai.jpg')" alt="" class="rounded-xl w-full" />
        <h1 class="pt-1 overflow-hidden whitespace-nowrap text-ellipsis">LANDOKMAI - เพลงรักเพลงแรก (Blooming)</h1>
        <p class="text-sm text-gray-600">LANDOKMAI</p>
        <span class="flex justify-center items-center gap-2 pt-1">
          <a href="#" class="hover:scale-120">
            <img class="w-5 h-5" src="/brands/spotify.png" alt="" />
          </a>
          <a href="https://www.youtube.com/watch?v=W7O03rIvP3w&list=RDW7O03rIvP3w&start_radio=1" class="hover:scale-120">
            <img class="w-5 h-5" src="/brands/youtube.png" alt="" />
          </a>
          <a href="#" class="flex flex-row items-center gap-0.5">
            <img class="w-5 h-5" src="/brands/favourite.png" alt="favourite" />
            <span>1000+</span>
          </a>
        </span>
      </div>
    </div>

    <!--end card -->
  </div>
</template>
