import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';
import { ListTodo } from '@/model';

export const useTodoStore = defineStore('todo', () => {
 const list = ref<ListTodo[]>([]);
 const getIndexTodo = (todo) => list.value.findIndex((item) => item === todo);
 const addItem = (text) =>
  list.value.unshift({ mes: text, id: Date.now(), complete: false });
 const resetList = () => (list.value = []);
 const removeTodo = (todo) => list.value.splice(getIndexTodo(todo), 1);
 const completeTodo = (todo) => {
  const todoIndex = getIndexTodo(todo);
  list.value[todoIndex].complete = !list.value[todoIndex].complete;
  if (list.value[todoIndex].complete === true) {
   list.value.push(todo);
   list.value.splice(todoIndex, 1);
  }
 };
 onMounted(() => {
  const todos = localStorage.getItem('todos');
  if (todos) list.value = JSON.parse(todos);
 });
 const addLocalStorage = () =>
  localStorage.setItem('todos', JSON.stringify(list.value));

 return {
  list,
  addItem,
  resetList,
  removeTodo,
  completeTodo,
  addLocalStorage,
 };
});
