<template>
  <div class="item panel-block" :class="{
    'item--done': item.done
  }">
    <div class="field has-addons item__field">     
      <p class="control item__icon-wrapper">
          <span class="icon item__icon" v-if="item.icon">
            <i class="fa" :class="[`fa-${item.icon}`]"></i>
          </span>
        </p>
      <input class="item__input input is-medium" v-model="item.title" @keyup="updateTodo" placeholder="What would you like to do?" @keyup.enter.prevent="onEnter" @keyup.delete="onDelete" ref="input" />    
      <p class="control">
        <button @click="toggleState(index)" class="button is-outlined is-medium" 
          :class="{
            'is-success': !item.done,
            'is-warning': item.done
          }"
        >
          <span class="icon is-small">
            <i class="fas fa-ban" v-if="item.done"></i>
            <i class="fas fa-check" v-else></i>
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

export default {
  name: 'TodoItem',
  data() {
    return {};
  },
  methods: {
    updateTodo() {
      this.$emit('updateTodo', {
        idx: this.index,
        todo: this.item,
      });
    },
    remove(index) {
      this.$emit('removeTodo', index);
    },
    toggleState(index) {
      this.$emit('toggleTodoState', index);
    },
    focus() {
      this.$refs.input.focus();
    },
    onEnter() {
      this.$emit('onEnter');
    },
    onDelete(e) {
      if (this.item.title === '') {
        e.preventDefault();
        this.remove(this.index);
      }
    }
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
<style scoped lang="scss">
.item--done input {
  text-decoration: line-through;
}
.item__field {
  width: 100%;
}

.item__input {
  flex-grow: 1;

  &:not(:focus) {
    border: 0;
    -webkit-appearance: none;
    box-shadow: none;
  }
}

.item__icon-wrapper {
  min-width: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item__icon {
}
</style>
