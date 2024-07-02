<script lang="ts">
import { defineComponent, ref } from 'vue';

// Composition API 사용
export default defineComponent({
  name: 'TodoList',
  setup() {
    const todos = ref([
      { id: 1, text: '더미데이터' },
      { id: 2, text: '더미데이터2' }
    ]);

    return {
      todos
    };
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
