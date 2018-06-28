<template>
  <div class="item" :class="{
    'item--done': item.done
  }">
    <h3>{{index + 1}}. {{item.title}} ({{item.done}})</h3>
    <input v-model="item.title" @keyup="updateTodo" placeholder="What would you like to do?" ref="input" />
    <button @click="toggleState(index)">
      {{ item.done ? 'unmark done' : 'mark done' }}
    </button>
    <button @click="remove(index)">x</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'TodoItem',
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      toggleState: 'toggleTodoState',
      remove: 'removeTodo',
    }),
    updateTodo() {
      this.$store.commit('updateTodo', {
        idx: this.index,
        todo: this.item,
      });
    },
    focus() {
      this.$refs.input.focus();
    },
  },
  props: {
    index: Number,
    item: {
      title: String,
      done: Boolean,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item--done {
  text-decoration: line-through;
}
</style>
