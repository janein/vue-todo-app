<template>
  <div class="columns is-mobile is-centered">
    <div class="column is-full-mobile is-two-thirds-tablet is-half-desktop">
      <nav class="panel">
        <p class="panel-heading">Todos</p>
        <TodoItem 
          v-for="(item, index) of items" 
          :item="item"
          :index="index"
          :key="`item-${index}`"
          @onEnter="createNew"
          @updateTodo="updateTodo"
          @toggleTodoState="toggleState"
          @removeTodo="remove"
          ref="item"
        />
          <div class="panel-block">
            <div class="field is-grouped">
              <p class="control">                
                <button @click.prevent="removeDone" class="button is-danger is-outlined">
                  <span class="icon is-small"><i class="fas fa-trash"></i></span>
                  <span>Remove all resolved tasks</span>
                </button>
              </p>
            </div>
          </div>
      </nav>
    </div>
  </div>    
</template>

<script>
import TodoItem from "./TodoItem";
import Vue from "vue";

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  data() {
    return {
      items: [
        {
          title: "Do homework",
          done: false
        },
        {
          title: "buy toilet paper",
          done: false
        },
        {
          title: "build an awesome todo-app",
          done: false
        }
      ]
    };
  },
  methods: {
    removeDone() {
      Vue.set(
        this.$data, "items",
        this.$data.items.filter(item => {
          return !item.done;
        })
      );
    },
    createNew() {
      this.$data.items.push({
        title: "",
        done: false
      });
      this.$nextTick(() => {
        if (this.$refs.item.length > 0) {
          this.$refs.item[this.$refs.item.length - 1].focus();
        }
      });
    },
    remove(index) {
      this.$data.items.splice(index, 1);
    },
    updateTodo(item) {
      Vue.set(this.$data.items, item.index, item);
    },
    toggleState(index) {
      this.$data.items[index].done = !this.$data.items[index].done;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
