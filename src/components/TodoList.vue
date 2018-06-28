<template>
  <div>
    <TodoItem 
      v-for="(item, index) of items" 
      :item="item"
      :index="index"
      :key="`item-${index}`"
      ref="item"
       />
      <hr/>
      <br>
    <button @click.prevent="createNew">Create new</button>
    <br><br>
    <button @click.prevent="removeDone">Remove all resolved tasks</button>
  </div> 
</template>

<script>
import TodoItem from './TodoItem';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  computed: {
    ...mapGetters({
      items: 'todos',
    }),
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      removeDone: 'removeResolvedTodos',
    }),
    createNew() {
      this.$store.commit('addTodo');
      this.$nextTick(() => {
        if (this.$refs.item.length > 0) {
          this.$refs.item[this.$refs.item.length - 1].focus();
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
