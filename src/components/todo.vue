<template>
  <div class="todo">
    <div v-bind:key="todo._id" v-for="todo in todos">
        <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo'
        ,todo._id)"/>
   </div>
  </div>
</template>

<script>
import TodoItem from './todo-item.vue';

export default {
  name: 'Todos',
  components:{
      TodoItem,
  },
  props:["todos"],
}
</script>