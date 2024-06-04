<template>
 <h2 class="text-[24px] text-center mb-[10px]">
  Список задач{{ store.list.length === 0 ? ' пуст' : '' }}...
 </h2>
 <draggable
  class="dragArea list-group w-full flex flex-col gap-[5px]"
  :list="store.list"
  tag="ul"
 >
  <transition-group name="list">
   <TodoItem
    v-for="todo in store.list"
    :key="todo.id"
    :complete="todo.complete"
    @complete="store.completeTodo(todo)"
    @remove="store.removeTodo(todo)"
    :mes="todo.mes"
   />
  </transition-group>
 </draggable>
</template>

<script lang="ts" setup>
import { useTodoStore } from '@/store';
import { VueDraggableNext } from 'vue-draggable-next';
import TodoItem from '@/components/TodoItem.vue';
const draggable = VueDraggableNext;
const store = useTodoStore();
store.$subscribe(
 () => {
  store.addLocalStorage();
 },
 { detached: true }
);
</script>

<style scoped>
.list-enter-active {
 transition: all 0.5s ease;
}
.list-leave-active {
 transition: all 0.3s ease;
}
.list-enter-from {
 opacity: 0;
 transform: translateY(-20px);
}
.list-leave-to {
 opacity: 0;
 transform: translateX(20px);
}
</style>
