import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ListTodo } from '@/model';

export const useTodoStore = defineStore('todo', () => {
 const list = ref<ListTodo[]>([]);
 const getIndexTodo = (todo) => list.value.findIndex((item) => item === todo);
 const addItem = (text) => {
  list.value.unshift({ mes: text, id: Date.now(), complete: false });
  addLocalStorage();
 };
 const resetList = () => {
  list.value = [];
  addLocalStorage();
 };
 const removeTodo = (todo) => {
  list.value.splice(getIndexTodo(todo), 1);
  addLocalStorage();
 };
 const completeTodo = (todo) => {
  list.value[getIndexTodo(todo)].complete =
   !list.value[getIndexTodo(todo)].complete;
  addLocalStorage();
  if (list.value[getIndexTodo(todo)].complete === true) {
   list.value.push(todo);
   list.value.splice(getIndexTodo(todo), 1);
   addLocalStorage();
  }
 };
 const todoListMount = () => {
  const todos = localStorage.getItem('todos');
  if (todos) list.value = JSON.parse(todos);
 };
 const refreshLocalStorageDrag = () => {
  addLocalStorage();
 };
 const addLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(list.value));
 };

 return {
  list,
  addItem,
  resetList,
  removeTodo,
  completeTodo,
  todoListMount,
  refreshLocalStorageDrag,
 };
});
