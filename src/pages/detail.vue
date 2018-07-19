<template>
  <div>
    <div class="columns is-mobile is-centered">
      <div class="column is-full-mobile is-two-thirds-tablet is-half-desktop">
        <hr/>
        <EditTodo :index="index" :is-new="isNew" />
      </div>
    </div>
  </div>
</template>

<script>
import EditTodo from '../components/EditTodo';

export default {
  name: 'DetailPage',
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
