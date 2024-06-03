import { defineStore } from 'pinia';
import { ref } from 'vue';

interface ListTodo {
 mes: string;
 id: string | number;
}

export const useTodoStore = defineStore('todo', () => {
 const list = ref<ListTodo[]>([]);
 function addItem(text) {
  list.value.push({ mes: text, id: Date.now() });
 }
 function resetList() {
  list.value = [];
 }
 return { list, addItem, resetList };
});
