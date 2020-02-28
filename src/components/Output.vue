<template>
    <div class="flex">
        <div class="center">
            <h3>Date: {{date.toDateString()}}</h3> 
            <h3>Duration: {{store.duration}} days</h3>
        </div>
    </div>
</template>

<script>
import store from '../store';
export default {
  name: 'DatePicker',
  data() {
      return {
          store: store.state,
      }
  },
  computed: {
      date: function() {
        return new Date(this.store.year, this.store.month, this.store.date);
      }
  },
  methods: {
      reset() {
          this.store.showDate = false;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex {
    display: flex;
    align-items: center;
    justify-content: center
}
</style>

