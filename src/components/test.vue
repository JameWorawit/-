<script setup>
import { ref, onMounted, nextTick } from 'vue';

const API_URL = 'https://jsonplaceholder.typicode.com/comments';

const allComments = ref([]);
const displayedChat = ref([]);
const isLoading = ref(true);
const chatBoxRef = ref(null);

// 1. (ใหม่!)
// สร้าง "สถานะ" เพื่อจำว่า user อยู่ล่างสุดหรือไม่
// เราเริ่มที่ true (เริ่มแบบล็อคเลย)
const isUserAtBottom = ref(true); 

let chatInterval = null;
let currentIndex = 0;

// 2. (แก้ไข)
// ฟังก์ชันเลื่อนลง (จะถูกเรียก "เมื่อมีข้อความใหม่")
async function scrollToBottom() {
  await nextTick(); // รอ DOM อัปเดต
  const chatBox = chatBoxRef.value;
  if (!chatBox) return;

  // เช็ก "สถานะ" ของเรา
  // ถ้า user อยู่ล่างสุด (isUserAtBottom เป็น true)...
  if (isUserAtBottom.value) {
    // ...ก็เลื่อนลงไปให้สุด
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  // ถ้า isUserAtBottom เป็น false (แปลว่า user เลื่อนขึ้นไป)
  // เราก็ไม่ต้องทำอะไรเลย ปล่อยให้เขาอ่านไป
}

// 3. (ใหม่!)
// ฟังก์ชันนี้จะถูกเรียก "ทุกครั้งที่ user เลื่อนเมาส์" ในกล่องแชท
function handleScroll() {
  const chatBox = chatBoxRef.value;
  if (!chatBox) return;

  // คำนวณว่าตอนนี้เราอยู่ล่างสุดจริงหรือไม่ (เผื่อ buffer 20px)
  const buffer = 200;
  const isAtBottom = 
    chatBox.scrollTop + chatBox.clientHeight >= chatBox.scrollHeight - buffer;

  // อัปเดต "สถานะ" ตามการกระทำจริงของ user
  // ถ้าเลื่อนลงสุด -> true, ถ้าเลื่อนขึ้น -> false
  isUserAtBottom.value = isAtBottom;
}

// ฟังก์ชันเริ่มแชท (เหมือนเดิม)
function startChatSimulation() {
  chatInterval = setInterval(() => {
    if (currentIndex < allComments.value.length) {
      const nextComment = allComments.value[currentIndex];
      
      // จำกัด 10 ข้อความ (เหมือนเดิม)
      displayedChat.value.push(nextComment);
      if (displayedChat.value.length > 10) {
        displayedChat.value.shift();
      }
      currentIndex++;
      
      // เรียกใช้ฟังก์ชันเลื่อนลง (ตัวที่แก้ไขแล้ว)
      scrollToBottom();

    } else {
      clearInterval(chatInterval);
      displayedChat.value.push({ id: 'end', email: 'System', body: '--- End of simulation ---' });
      if (displayedChat.value.length > 10) {
        displayedChat.value.shift();
      }
    }
  }, 100); // 2 วินาที
}

// onMounted (เหมือนเดิม)
onMounted(async () => {
  try {
    const response = await fetch(API_URL);
    allComments.value = await response.json();
    startChatSimulation();

    // บังคับเลื่อนลง 1 ครั้งตอนเริ่ม
    await nextTick();
    if(chatBoxRef.value) {
      chatBoxRef.value.scrollTop = chatBoxRef.value.scrollHeight;
    }

  } catch (error) {
    console.error('Failed to fetch comments:', error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="chat-container">
    <h2>Live Chat Simulation (Sticky Lock)</h2>
    
    <div 
      class="chat-box" 
      ref="chatBoxRef"
      @scroll="handleScroll" 
    >
      
      <div v-if="isLoading">Fetching comments...</div>

      <div 
        v-for="chat in displayedChat" 
        :key="chat.id" 
        class="chat-message"
      >
        <strong>{{ chat.email }}:</strong> 
        <p>{{ chat.body }}</p>
      </div>

    </div>
  </div>
</template>

<style>
/* (ใช้ CSS เดิมได้เลย) */
.chat-box {
  border: 1px solid #ccc;
  border-radius: 8px;
  height: 400px;
  overflow-y: auto; 
  padding: 10px;
  background-color: #f9f9f9;
  scroll-behavior: smooth; /* เพิ่มอันนี้เพื่อให้เลื่อนนุ่มนวล */
}
.chat-message {
  margin-bottom: 12px;
  background-color: #fff;
  padding: 8px 12px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.chat-message strong {
  color: #007bff;
  font-size: 0.9em;
}
.chat-message p {
  margin: 4px 0 0;
}
</style>