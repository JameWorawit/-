<template>
  <!-- Navbar  -->
  <div id="navbar" class="flex justify-between bg-gray-100 w-full pt-4 pb-4 pr-5 items-center fixed top-0 z-10">
    <div class="flex flex-row items-center ml-5 gap-5">
      <button class="hover:cursor-pointer text-2xl" type="button" id="menu-navbar">☰</button>

      <div class="flex items-center gap-2">
        <div class="w-10 h-10 b-transparent">
          <a href="#"><img src="/image/logo-unscreen.gif" alt="this is logo" /></a>
        </div>
        <div class="hidden md:block">
          <h1 class="text-base md:text-lg">คลังเพลง</h1>
        </div>
      </div>
    </div>
    <!-- Search bar -->

    <div class="hidden sm:flex justify-between items-center">
      <input
        type="text"
        placeholder="Search..."
        class="outline-none border sm:w-[250px] md:w-[300px] lg:w-[500px] focus:border-blue-400 focus:ring-1 focus:ring-blue-400 rounded-l-full px-4 py-1.5 border-gray-500"
      />
      <div class="ml-0 border border-l-0 border-gray-500 rounded-r-full px-4 py-1.5 hover:cursor-pointer">
        <span><i class="fi fi-rr-search"></i></span>
      </div>
    </div>
    <!--end Search bar -->

    <!-- mobile search bar -->
    <div id="mobile-search-bar" class="hidden sm:hidden opacity-0 transition-opacity duration-300 items-center gap-10 bg-gray-100 w-screen pt-4 pb-4 pr-5 pl-5 fixed top-0 z-50">
      <span id="back-to-navbar" class="text-xl"><i class="fi fi-rr-angle-circle-left"></i></span>
      <div class="flex items-center w-full max-w-[500px]">
        <input type="text" placeholder="Search..." class="outline-none border flex-1 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 rounded-l-full px-4 py-1.5 border-gray-500" />
        <div class="ml-0 border border-l-0 border-gray-500 rounded-r-full px-4 py-1.5 hover:cursor-pointer">
          <span><i class="fi fi-rr-search"></i></span>
        </div>
      </div>
    </div>
    <!--end mobile search bar -->

    <!-- profile -->
    <div class="flex items-center justify-center gap-5">
      <!-- icon บนมือถือ -->
      <div id="open-search-bar" class="block sm:hidden hover:cursor-pointer">
        <span><i class="fi fi-rr-search"></i></span>
      </div>

      <!-- Profile กับ icon อื่นๆ -->

      <a href="#" class="flex items-center justify-center gap-2 bg-gray-300 rounded-2xl px-3 py-1 hover:bg-gray-400 transition">
        <span class="font-bold">+</span>
        <span class="font-medium">สร้าง</span>
      </a>
      <a href="#" class="block max-sm:hidden"><i class="fi fi-ss-user-add"></i></a>
      <a href="#" class="block max-sm:hidden"><i class="fi fi-ss-bells"></i></a>
      <div class="rounded-full overflow-hidden w-10 h-10">
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
    <!--end profile -->
  </div>
  <!-- end Navbar  -->
</template>
