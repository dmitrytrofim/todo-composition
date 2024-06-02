<template>
 <div class="flex flex-col gap-[10px] pt-[10px] mb-[20px]">
  <input
   @keydown.enter="addItem"
   v-model="message"
   ref="input"
   class="border w-full text-[20px] rounded-[10px] p-[10px]"
   type="text"
   placeholder="Сегодня я хочу..."
  />
  <div class="flex justify-center">
   <BtnPanel @click="addItem" text="Добавить" />
  </div>
 </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useTodoStore } from '@/store/index';
import BtnPanel from '@/components/BtnPanel.vue';

const input = ref(null);
const store = useTodoStore();
const message = ref('');

function addItem() {
 store.addItem(message.value);
 message.value = '';
 (input.value! as HTMLInputElement).focus();
}
</script>

<style scoped></style>
