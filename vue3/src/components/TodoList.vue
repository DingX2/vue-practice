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
  emit : ['delete-todo'],
  setup(props, { emit }) {
    const deleteTodo = (id: number)=> {
      emit('delete-todo', id);
    }

    return{
      todos: props.todos,
      deleteTodo
    }
  }
});
</script>

<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id" class="todo-item">{{ todo.text }}
        <button type="button" class="delete-btn" @click="deleteTodo(todo.id)"> delete </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .todo-item {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
  }
  .delete-btn {
    display: none;
    margin-left: 1rem;
  }

  .todo-item:hover .delete-btn {
    display: block;
    transition: all 0.3s;
  }
</style>
