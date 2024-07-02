<template>
  <div id="app">
    <h1>Todo List</h1>
    <TodoList :todos="todos" @delete-todo="deleteTodo"/>
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

    const addTodo = (text: string) => {
      todos.value.push({ id: Date.now(), text });
    }

    const deleteTodo = (id: number) => {
      const newTodos = todos.value.filter(todo => todo.id !== id);
      console.log('Todo deleted. Updated todos:', todos.value);
      todos.value = [...newTodos];
    }

    return{
      todos,
      addTodo,
      deleteTodo
    }
  }
});
</script>

<style scoped> 
/* scoped 해당 컴포넌트 내부에만 스타일 적용 */
</style>
