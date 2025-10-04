<template>
  <!-- Sidebar -->
  <div id="side-bar" class="fixed left-0 top-0 h-screen bg-gray-100 w-60 z-20 -translate-x-full transition-transform duration-200">
    <aside class="flex-shrink-0 w-60 p-5">
      <div class="flex items-center mb-5 gap-5 align-center">
        <button id="menu-sidebar" class="hover:cursor-pointer text-2xl" type="button">☰</button>
        <div class="w-10 h-10 border-transparent">
          <a href="/index.html"><img src="/image/logo-unscreen.gif" alt="this is logo" /></a>
        </div>
      </div>
      <nav class="flex flex-col space-y-4 gap-2 mr-5">
        <span class="gap-5 flex items-center">
          <i class="fi fi-sr-home"></i>
          <a href="#">หน้าแรก</a>
        </span>
        <span class="gap-5 flex items-center">
          <i class="fi fi-ss-user-add"></i>
          <a href="#">การติดตาม</a>
        </span>
        <span class="gap-5 flex items-center">
          <i class="fi fi-ss-music-alt"></i>
          <a href="#">Youtube Music</a>
        </span>
      </nav>
      <footer class="mt-5 mr-5">© 2025 เพลงที่ชอบ</footer>
    </aside>
  </div>
  <!-- end Sidebar -->
</template>
