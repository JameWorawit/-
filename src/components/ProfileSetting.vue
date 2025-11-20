<template>
  <div class="flex min-h-screen w-full items-start justify-center pt-10">
    <div class="w-full max-w-2xl rounded-lg bg-white p-8 shadow-lg">
      <div class="mb-2 flex justify-center">
        <div class="h-40 w-40 overflow-hidden rounded-full">
          <img
            class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <div class="mb-6 border-b pb-4 text-center">
        <h1 class="text-2xl font-bold text-gray-800">แก้ไขข้อมูลส่วนตัว</h1>
        <p class="text-sm text-gray-500">จัดการข้อมูลโปรไฟล์และการติดต่อของคุณ</p>
      </div>

      <form>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div class="flex flex-col gap-2">
            <label for="firstname" class="text-sm font-medium text-gray-700">ชื่อ</label>
            <input
              id="firstname"
              type="text"
              class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              placeholder="สมชาย"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label for="lastname" class="text-sm font-medium text-gray-700">นามสกุล</label>
            <input
              id="lastname"
              type="text"
              class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              placeholder="ใจดี"
            />
          </div>

          <div class="flex flex-col gap-2 md:col-span-2">
            <label for="email" class="text-sm font-medium text-gray-700">อีเมล</label>
            <input
              id="email"
              type="email"
              class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              placeholder="somchai@example.com"
            />
          </div>

          <div class="flex flex-col gap-2 md:col-span-2">
            <label for="phone" class="text-sm font-medium text-gray-700">เบอร์โทรศัพท์</label>
            <input
              id="phone"
              type="tel"
              class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              placeholder="081-234-5678"
            />
          </div>

          <div class="flex flex-col gap-2 md:col-span-2">
            <label for="address" class="text-sm font-medium text-gray-700">ที่อยู่</label>
            <textarea
              id="address"
              rows="3"
              class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              placeholder="บ้านเลขที่, ถนน, แขวง/ตำบล..."
            ></textarea>
          </div>
        </div>

        <div class="mt-8 flex justify-end gap-4">
          <button type="button" class="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">ยกเลิก</button>
          <button type="submit" class="rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
            บันทึกข้อมูล
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
