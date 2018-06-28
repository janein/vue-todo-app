<template>
  <div>
    <div class="columns is-mobile is-centered">
      <div class="column is-full-mobile is-two-thirds-tablet is-half-desktop">
        <nav class="panel">
          <p class="panel-heading">
            Todos
          </p>
          <TodoItem 
            v-for="(item, index) of items" 
            :item="item"
            :index="index"
            :key="`item-${index}`"
            ref="item"
            />
            <div class="panel-block">
              <div class="field is-grouped">
                <p class="control">
                  <button @click.prevent="createNew" class="button is-primary">
                    <span class="icon is-small">
                      <i class="fas fa-plus"></i>
                    </span>
                    <span>Create new</span>
                  </button>
                </p>
                <p class="control">                
                  <button @click.prevent="removeDone" class="button is-danger is-outlined">
                    <span class="icon is-small">
                      <i class="fas fa-trash"></i>
                    </span>
                    <span>Remove all resolved tasks</span>
                  </button>
                </p>
              </div>
            </div>
        </nav>
      </div>
    </div>
      <hr/>
      <br>
    
    <br><br>
    
  </div> 
</template>

<script>
import TodoItem from "./TodoItem";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters({
      items: "todos"
    })
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      removeDone: "removeResolvedTodos"
    }),
    createNew() {
      this.$store.commit("addTodo");
      this.$nextTick(() => {
        if (this.$refs.item.length > 0) {
          this.$refs.item[this.$refs.item.length - 1].focus();
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
