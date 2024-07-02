<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Todo {
  id: number;
  text: string;
}

// Composition API 사용
export default defineComponent({
  name: 'TodoList',
  props: {
    todos:{
      type: Array as PropType<Todo[]>,
      required: true
    }
  },
  setup(props) {
    return{
      todos: props.todos
    }
  }
});
</script>

<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
    </ul>
  </div>
</template>

<style scoped>
</style>
