import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ListTodo } from '@/model';

export const useTodoStore = defineStore('todo', () => {
 const list = ref<ListTodo[]>([
  { mes: 'sdfsdf', id: 'sdfdsf', complete: false },
 ]);
 const getIndexTodo = (todo) => list.value.findIndex((item) => item === todo);
 const addItem = (text) =>
  list.value.push({ mes: text, id: Date.now(), complete: false });
 const resetList = () => (list.value = []);
 const removeTodo = (todo) =>
  (list.value = list.value.filter((item) => item !== todo));
 const completeTodo = (todo) => {
  list.value[getIndexTodo(todo)].complete =
   !list.value[getIndexTodo(todo)].complete;
 };

 return { list, addItem, resetList, removeTodo, completeTodo };
});
