<template>
 <h2 class="text-[24px] text-center mb-[10px]">Список задач...</h2>
 <ul class="flex flex-col gap-[5px]">
  <TodoItem v-for="item in store.list" :key="item.id" :mes="item.mes" />
 </ul>
</template>

<script lang="ts" setup>
import { useTodoStore } from '@/store';
import TodoItem from '@/components/TodoItem.vue';
const store = useTodoStore();
</script>

<style scoped></style>
