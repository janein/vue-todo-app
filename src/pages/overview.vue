<template>
  <div>
    <TodoList/>
  </div>
</template>

<script>
import TodoList from '../components/TodoList';

export default {
  name: 'OverviewPage',
  components: {
    TodoList
  },
  data() {
    return {};
  }
};
</script>
