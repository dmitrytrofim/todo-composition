<template>
 <h2 class="text-[24px] text-center mb-[10px]">
  Список задач{{ store.list.length === 0 ? ' пуст' : '' }}...
 </h2>
 <draggable
  class="dragArea list-group w-full flex flex-col gap-[5px]"
  :list="store.list"
  tag="ul"
 >
  <TodoItem
   v-for="todo in store.list"
   :key="todo.id"
   :complete="todo.complete"
   @complete="store.completeTodo(todo)"
   @remove="store.removeTodo(todo)"
   :mes="todo.mes"
  />
 </draggable>
</template>

<script lang="ts" setup>
import { useTodoStore } from '@/store';
import { VueDraggableNext } from 'vue-draggable-next';
import TodoItem from '@/components/TodoItem.vue';
const draggable = VueDraggableNext;
const store = useTodoStore();
</script>

<style scoped></style>
