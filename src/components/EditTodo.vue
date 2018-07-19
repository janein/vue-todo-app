<template>
  <div>
    <h1 class="title">{{headline}}</h1>
    <form v-if="todo" @submit.prevent="onSubmit">
      <div class="field">
        <label class="label" for="icon">Icon</label>
        <div class="control has-icons-left">
          <div class="select">
            <select v-model="todo.icon" id="icon">
              <option disabled value="">Select icon</option>
              <option v-for="icon in icons" :value="icon.icon" :key="icon.icon">
                {{icon.title}}
              </option>
            </select>
          </div>
          <div class="icon is-small is-left">
            <i class="fa" :class="[`fa-${todo.icon}`]"></i>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label" for="title">Title</label>
        <div class="control">
          <input class="input" id="title" type="text" placeholder="What should I do?" v-model="todo.title" required />
        </div>
      </div>
      <div class="field">
        <label class="label" for="desc">Description</label>
        <div class="control">
          <textarea class="textarea" id="desc" placeholder="Tell me more ..." v-model="todo.desc" />
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
      <template v-if="success">
        <br><br>
        <article class="message is-success">
          <div class="message-header">
            <p>
              <i class="fa fa-check"></i>
              Saved!
            </p>
          </div>
        </article>
      </template>
    </form>    
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import { ICONS } from '../data/icons';

export default {
  name: 'TodoItem',
  computed: {
    ...mapGetters({
      todosCount: 'todosCount',
    }),
    headline() {
      return this.isNew ? 'New Todo' : 'Edit Todo';
    }
  },
  data() {
    return {
      todo: null,
      icons: ICONS,
      success: false,
    };
  },
  props: {
    index: Number,
    isNew: Boolean,
  },
  methods: {
    ...mapMutations({
      create: 'createTodo'
    }),
    onSubmit() {
      if (this.isNew) {
        this.create(this.todo);
        this.$nextTick(() => {
          const idx = this.todosCount - 1;
          this.$router.replace({
            name: 'detail',
            params: {
              idx
            }
          });
          this.showSuccess();
        });
      } else {
        this.$store.commit('updateTodo', {
          idx: this.index,
          todo: this.todo
        });
        this.showSuccess();
      }
    },
    showSuccess() {
      this.success = true;
      window.setTimeout(() => {
        this.success = false;
      }, 1000);
    }
  },
  mounted() {
    this.todo = this.isNew
      ? {
          title: '',
          icon: ''
        }
      : this.$store.getters['todoByIdx'](this.index);
  },
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
