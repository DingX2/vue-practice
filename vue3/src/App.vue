<template>
  <div id="app">
    <h1>Todo List</h1>
    <TodoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from './components/TodoList.vue';

export default defineComponent({
  name: 'App',
  components: {
    TodoList
  }
});
</script>

<style scoped> 
/* scoped 해당 컴포넌트 내부에만 스타일 적용 */
</style>
