<template>
  <div id="app">
    <div class="container">
      <div class="columns is-mobile is-centered">
        <div class="column is-full-mobile is-two-thirds-tablet is-half-desktop">
          <nav class="panel">
            <p class="panel-heading">Todos</p>
            <div 
            v-for="(item, index) of items"
            :item="item"
            :index="index"
            :key="`item-${index}`"
            ref="item"
            class="item panel-block"
            :class="{
    'item--done': item.done
  }"
            >
              <div class="field has-addons item__field">
                <p class="control item__icon-wrapper">
                  <span class="icon item__icon" v-if="item.icon">
                    <i class="fa" :class="[`fa-${item.icon}`]"></i>
                  </span>
                </p>
                <input 
                class="item__input input is-medium" 
                v-model="item.title" 
                placeholder="What would you like to do?" 
                ref="input" />
                <p class="control">
                  <button class="button is-outlined is-medium" :class="{
            'is-success': !item.done,
            'is-warning': item.done
          }">
                    <span class="icon is-small">
                      <i class="fas fa-ban" v-if="item.done"></i>
                      <i class="fas fa-check" v-else></i>
                    </span>
                  </button>
                </p>
                <p class="control">
                  <button class="button is-danger is-outlined is-medium">
                    <span class="icon is-small">
                      <i class="fas fa-trash"></i>
                    </span>
                  </button>
                </p>
              </div>
            </div>
            <div class="panel-block">
              <div class="field is-grouped">
                <p class="control">
                  <button class="button is-danger is-outlined">
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
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      items: [
        {
          title: "Do homework",
          done: false,
          icon: "shopping-cart"
        },
        {
          title: "buy toilet paper",
          done: false,
        },
        {
          title: "build an awesome todo-app",
          done: false,
        },
      ]
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

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
