<template>
  <div class="item panel-block" :class="{
    'item--done': item.done
  }">
    <div class="field has-addons item__field">     
      <input class="item__input input is-medium" v-model="item.title" @keyup="updateTodo" placeholder="What would you like to do?" ref="input" />    
      <p class="control">
        <button @click="toggleState(index)" class="button is-outlined is-medium" 
          :class="{
            'is-success': !item.done,
            'is-warning': item.done
          }"
        >
          <span class="icon is-small">
            <i class="fas fa-ban" v-if="item.done"></i>
            <i class="fas fa-check" v-else="item.done"></i>
          </span>
        </button>
      </p>
      <p class="control">
        <button @click="remove(index)" class="button is-danger is-outlined is-medium">
          <span class="icon is-small"><i class="fas fa-trash"></i></span>
        </button>
      </p>    
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TodoItem",
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      toggleState: "toggleTodoState",
      remove: "removeTodo"
    }),
    updateTodo() {
      this.$store.commit("updateTodo", {
        idx: this.index,
        todo: this.item
      });
    },
    focus() {
      this.$refs.input.focus();
    }
  },
  props: {
    index: Number,
    item: {
      title: String,
      done: Boolean
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item--done input {
  text-decoration: line-through;
}
.item__field {
  width: 100%;
}

.item__input {
  flex-grow: 1;
}
</style>
