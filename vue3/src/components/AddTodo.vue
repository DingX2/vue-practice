<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'AddTodo',
    emits: ['add-todo'],
    setup(_, { emit }) {
    const newTodo = ref('');

    const emitAddTodo = () => {
      if (newTodo.value.trim() !== '') {
        emit('add-todo', newTodo.value);  // 부모 컴포넌트로 'add-todo' 이벤트 발송
        newTodo.value = '';  // 입력 필드 초기화
      }
    };

    return {
      newTodo,
      emitAddTodo
    };
  }
})
</script>

<template>
  <div>
    <!-- v-model 양방향 바인딩 구현 -->
    <input type="text" v-model="newTodo" placeholder="add Todo"/>
    <button @click="emitAddTodo">Add Todo</button>
  </div>
</template>

<style>
</style>