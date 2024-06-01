<template>
 <ul class="">
  <TodoItem v-for="item in store.list" :key="item.id" :mes="item.mes" />
 </ul>
</template>

<script lang="ts" setup>
import TodoItem from './TodoItem.vue';
import { useTodoStore } from '@/store';
const store = useTodoStore();
</script>

<style scoped></style>
