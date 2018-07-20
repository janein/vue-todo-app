<template>
  <div id="app">
    <div class="container">
      <div class="columns is-mobile is-centered">
        <div class="column is-full-mobile is-two-thirds-tablet is-half-desktop">
          <nav class="panel">
            <p class="panel-heading">Todos</p>
            <div class="item panel-block item--done">
              <div class="field has-addons item__field">
                <p class="control item__icon-wrapper">
                  <span class="icon item__icon">
                    <i class="fa fa-shopping-cart"></i>
                  </span>
                </p>
                <input class="item__input input is-medium" placeholder="What would you like to do?" ref="input" value="Do homework" />
                <p class="control">
                  <button class="button is-outlined is-medium is-warning">
                    <span class="icon is-small">
                      <i class="fas fa-ban"></i>
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
            <div class="item panel-block">
              <div class="field has-addons item__field">
                <p class="control item__icon-wrapper">
                </p>
                <input class="item__input input is-medium" placeholder="What would you like to do?" ref="input" value="buy toilet paper" />
                <p class="control">
                  <button class="button is-outlined is-medium is-success">
                    <span class="icon is-small">
                      <i class="fas fa-check"></i>
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
            <div class="item panel-block">
              <div class="field has-addons item__field">
                <p class="control item__icon-wrapper">
                </p>
                <input class="item__input input is-medium" placeholder="What would you like to do?" ref="input" value="build an awesome todo-app" />
                <p class="control">
                  <button class="button is-outlined is-medium is-success">
                    <span class="icon is-small">
                      <i class="fas fa-check"></i>
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
            <div class="item panel-block">
              <div class="field has-addons item__field">
                <p class="control item__icon-wrapper">
                </p>
                <input class="item__input input is-medium" placeholder="What would you like to do?" ref="input" value="" />
                <p class="control">
                  <button class="button is-outlined is-medium is-success">
                    <span class="icon is-small">
                      <i class="fas fa-check"></i>
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
  data() {}
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
