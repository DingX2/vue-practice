<template>
  <div id="app">
    <h1>Todo List</h1>
    <TodoList :todos="todos" @delete-todo="deleteTodo"/>
    <AddTodo @add-todo="addTodo"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, reactive } from 'vue';
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
      const todos = reactive<Todo[]>([]);

  const addTodo = (text: string) => {
    todos.push({ id: Date.now(), text });
    console.log('Todo added:', todos);
  };

  const deleteTodo = (id: number) => {
    const index = todos.findIndex((todo: Todo) => todo.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
      console.log('Todo deleted. Updated todos:', todos);
    }
  };

  watch(todos, (newTodos) => {
    console.log('Todos updated:', newTodos);
  });

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
