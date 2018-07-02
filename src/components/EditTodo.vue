<template>
  <div>
    <h1 class="title">{{headline}}</h1>
    <form v-if="todo" @submit.prevent="onSubmit">
      <div class="field">
        <label class="label" for="title">Title</label>
        <div class="control">
          <input class="input" type="text" placeholder="What whould I do?" v-model="todo.title" />
        </div>
      </div>
      <button type="submit" class="button"
        :class="{
          'is-success': isNew,
          'is-primary': !isNew 
        }"
      >
        <span class="icon is-small">
          <i class="fa fa-plus" v-if="isNew"></i>
          <i class="fa fa-save" v-else></i>
        </span>
        <span>Save</span>
      </button>
    </form>    
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "TodoItem",
  computed: {
    ...mapGetters({
      todosCount: "todosCount"
    }),
    headline() {
      return this.isNew ? "New Todo" : "Edit Todo";
    }
  },
  data() {
    return {
      todo: null
    };
  },
  props: {
    index: Number,
    isNew: Boolean
  },
  methods: {
    ...mapMutations({
      create: "createTodo"
    }),
    onSubmit() {
      if (this.isNew) {
        this.create(this.todo);
        this.$nextTick(() => {
          const idx = this.todosCount - 1;
          this.$router.replace({
            name: "detail",
            params: {
              idx
            }
          });
        });
      } else {
        this.$store.commit("updateTodo", {
          idx: this.index,
          todo: this.todo
        });
      }
    }
  },
  mounted() {
    this.todo = this.isNew
      ? {
          title: ""
        }
      : this.$store.getters["todoByIdx"](this.index);
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
