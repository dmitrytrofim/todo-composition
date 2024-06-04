import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ListTodo } from '@/model';

export const useTodoStore = defineStore('todo', () => {
 const list = ref<ListTodo[]>([
  { mes: 'sdfsdf', id: 'sdfdsf', complete: false },
 ]);
 const getIndexTodo = (todo) => list.value.findIndex((item) => item === todo);
 const addItem = (text) =>
  list.value.unshift({ mes: text, id: Date.now(), complete: false });
 const resetList = () => (list.value = []);
 const removeTodo = (todo) => list.value.splice(getIndexTodo(todo), 1);
 const completeTodo = (todo) => {
  list.value[getIndexTodo(todo)].complete =
   !list.value[getIndexTodo(todo)].complete;
  if (list.value[getIndexTodo(todo)].complete === true) {
   list.value.push(todo);
   list.value.splice(getIndexTodo(todo), 1);
  }
 };

 return { list, addItem, resetList, removeTodo, completeTodo };
});
