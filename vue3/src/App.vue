<template>
  <div id="app">
    <h1>Todo List</h1>
    <TodoList :todos="todos" />
    <AddTodo @add-todo="addTodo"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TodoList from './components/TodoList.vue';
import AddTodo from './components/AddTodo.vue';
import { Todo } from './types/todo';

export default defineComponent({
  name: 'App',
  components: {
    TodoList,
    AddTodo
  },
  setup(){
    const todos = ref<Todo[]>([]);

    const addTodo = (text: string) =>{
      todos.value.push({ id: Date.now(), text });
    }

    return{
      todos,
      addTodo
    }
  }
});
</script>

<style scoped> 
/* scoped 해당 컴포넌트 내부에만 스타일 적용 */
</style>
