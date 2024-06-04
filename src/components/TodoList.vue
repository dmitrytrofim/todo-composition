<template>
 <h2 class="text-[24px] text-center mb-[10px]">Список задач...</h2>
 <ul class="flex flex-col gap-[5px]">
  <TodoItem
   v-for="todo in store.list"
   :key="todo.id"
   :complete="todo.complete"
   @complete="store.completeTodo(todo)"
   @remove="store.removeTodo(todo)"
   :mes="todo.mes"
  />
 </ul>
</template>

<script lang="ts" setup>
import { useTodoStore } from '@/store';
import TodoItem from '@/components/TodoItem.vue';
const store = useTodoStore();
</script>

<style scoped></style>
