<template>
 <div class="flex flex-col gap-[10px] pt-[10px] mb-[20px]">
  <input
   @keydown.enter="addItem"
   v-model="message"
   ref="field"
   class="border w-full text-[20px] rounded-[10px] p-[10px]"
   type="text"
   placeholder="Сегодня я хочу..."
  />
  <div class="flex justify-center gap-[10px]">
   <BtnPanel
    @click="addItem"
    :class="checkField ? 'bg-[gray]' : 'bg-[black]'"
    text="Добавить"
   />
   <BtnPanel
    @click="resetField"
    :class="checkField ? 'bg-[gray]' : 'bg-[black]'"
    text="Очистить"
   />
   <BtnPanel
    @click="resetList"
    :class="store.list.length === 0 ? 'bg-[gray]' : 'bg-[black]'"
    text="Удалить всё"
   />
  </div>
 </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useTodoStore } from '@/store/index';
import BtnPanel from '@/components/BtnPanel.vue';
import { computed } from '@vue/reactivity';

const field = ref<HTMLInputElement | null>(null);
const checkField = computed(() => message.value?.trim() === '');
const store = useTodoStore();
const message = defineModel({
 type: String,
 default: '',
});

function addItem() {
 field.value!.focus();
 if (checkField.value) return;
 store.addItem(message.value);
 message.value = '';
}

function resetField() {
 message.value = '';
 field.value!.focus();
}

function resetList() {
 if (store.list.length === 0) return;
 if (!confirm('Are you sure?')) return;
 store.resetList();
 field.value!.focus();
}
</script>

<style scoped></style>
