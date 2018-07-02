<template>
  <div>
    <div class="columns is-mobile is-centered">
      <div class="column is-full-mobile is-two-thirds-tablet is-half-desktop">
        <router-link :to="{name: 'overview'}" class="button is-outlined is-small is-primary">
          <span class="icon is-small"><i class="fa fa-long-arrow-alt-left"></i></span>
          <span>back</span>
        </router-link>
        <hr/>
        <EditTodo :index="index" :is-new="isNew" />
      </div>
    </div>
  </div>
</template>

<script>
import EditTodo from "../components/EditTodo";

export default {
  name: "DetailPage",
  components: {
    EditTodo
  },
  computed: {
    index() {
      return Number(this.$route.params.idx);
    },
    isNew() {
      return !(this.index >= 0);
    }
  },
  data() {
    return {};
  }
};
</script>
