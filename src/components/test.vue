<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// 1. ข้อมูลสมมติ 50 อัน (Mock Data)
// สร้าง array [Item 1, Item 2, ..., Item 50]
const allItems = Array.from({ length: 50 }, (_, i) => `Card Item ${i + 1}`);

// 2. ข้อมูลที่จะโชว์จริง (เริ่มต้นแค่ 5 อัน)
const displayedItems = ref(allItems.slice(0, 5));

// 3. ตัวแปรสำหรับอ้างอิง "div ตัวล่อ" ที่อยู่ล่างสุด
const sentinelRef = ref(null);

let observer = null;

// ฟังก์ชันโหลดเพิ่ม
function loadMore() {
  console.log('เห็นตัวล่อแล้ว! กำลังโหลดเพิ่ม...');
  
  // จำลองความหน่วงนิดหน่อย (เหมือนโหลดจากเน็ต)
  setTimeout(() => {
    // คำนวณว่าตอนนี้มีกี่อันแล้ว
    const currentLength = displayedItems.value.length;
    console.log(currentLength)
    // หยิบจากตระกร้าใหญ่ มาใส่ตระกร้าโชว์ เพิ่มอีก 5 อัน
    const nextBatch = allItems.slice(currentLength, currentLength + 5);
    
    // เอาไปต่อท้าย
    displayedItems.value.push(...nextBatch);
    
  }, 500); // หน่วงเวลา 0.5 วิ
}

onMounted(() => {
  // 4. สร้าง "ยาม" (IntersectionObserver)
  observer = new IntersectionObserver((entries) => {
    // entries คือสิ่งที่ยามเห็น (ในที่นี้มีตัวเดียว)
    const entry = entries[0];
    
    // "isIntersecting" แปลว่า "โผล่เข้ามาในจอแล้วใช่ไหม?"
    if (entry.isIntersecting) {
      // ถ้าโผล่มาแล้ว ก็โหลดเพิ่มเลย!
      loadMore();
    }
  });

  // 5. สั่งยามให้เฝ้า "div ตัวล่อ"
  if (sentinelRef.value) {
    observer.observe(sentinelRef.value);
  }
});

// (Optional) ทำลายยามเมื่อปิดหน้าเว็บ (เพื่อคืนหน่วยความจำ)
onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <div class="container">
    <h1>Infinite Scroll / Lazy Load</h1>
    
    <div v-for="item in displayedItems" :key="item" class="card">
      {{ item }}
    </div>

    <div ref="sentinelRef" class="loading-trigger">
      <span v-if="displayedItems.length < allItems.length">
        Loading more...
      </span>
      <span v-else>
        -- หมดแล้วจ้า --
      </span>
    </div>

  </div>
</template>

<style>
.container {
  height: 400px; /* จำกัดความสูง */
  overflow-y: auto; /* ให้มี scrollbar */
  border: 2px solid #333;
  padding: 20px;
}

.card {
  background: #f0f0f0;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  font-size: 1.2rem;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.loading-trigger {
  text-align: center;
  padding: 20px;
  color: #888;
}
</style>