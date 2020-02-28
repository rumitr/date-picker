<template>
  <div id="app">
    <header style="text-align:center;" ><h1>Date Picker</h1></header>
    <div class="content">
      <date-picker class="sides" />
      <Output class="sides" />
    </div>
  </div>
</template>

<script>
import DatePicker from './components/DatePicker.vue'
import Output from './components/Output.vue'

export default {
  name: 'App',
  components: {
    DatePicker,
    Output
  }
}
</script>

<style>
.content {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80vh;
}

.sides {
  border: 1px solid black;
  width: 40vw;
  height: 80vh;
  background-color: #f1f1f1;
}


</style>
