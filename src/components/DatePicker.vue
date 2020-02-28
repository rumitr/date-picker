<template>
<div>
  <div class="margin">
    <h3>Month</h3>
    <div class="month horscroll ">
      <template v-for="(month, index) in options.months">
        <input :id="month+'-input'"  v-model="store.month" :value="index" type="radio" v-bind:key="index">
        <label v-bind:class="[index === store.month ? 'selected' : '' ]" :id="month"  v-bind:key="'month-label-'+index" :for="month+'-input'" >{{options.months[index]}}</label>
      </template>
    </div>
  </div>
  
  <div  class="margin">
    <h3>Date</h3>
    <div class="date horscroll">
      <template v-for="(day, index) in options.days">
        <input :id="'input-days'+options.days[index]"   v-model="store.date" :value="day" type="radio" v-bind:key="'days-'+index">
        <label v-bind:class="[day === store.date ? 'selected' : '' ]" :id="'days'+options.days[index]" v-bind:key="'label'+index" :for="'input-days'+options.days[index]" >{{options.days[index]}}</label>
      </template>
    </div>
  </div>
  
  <div class="margin">
    <h3>Year</h3>
    <div class="year horscroll">
      <template v-for="(year, index) in options.years">
        <input  :id="'input-years'+options.years[index]" v-model="store.year" :value="year" type="radio" v-bind:key="'years-'+index">
        <label v-bind:class="[year === store.year ? 'selected' : '' ]" :id="'years'+options.years[index]"  v-bind:key="'label'+index" :for="'input-years'+options.years[index]">{{options.years[index]}}</label>
      </template>
    </div>
  </div>
  

  <div class="margin duration">
    <h3>Duration: <span> {{store.duration}}</span> </h3>
    <div class="slidecontainer">
      <input v-model.number="store.duration" type="range" min="60" max="180"  class="slider" id="myRange">
    </div>
  </div>
</div>
</template>

<script>
import store from '../store';
export default {
  name: 'DatePicker',
  data: function() {
    return {
      store: store.state,
      options: {
        days:[],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December'],
        years: []
      }
    }
  },
  created() {
    store.setDefaults();
    let days = new Date(this.store.year, this.store.month, 0).getDate();
    this.options.days = Array.from({length: days}, (v, i) => i+1);
    this.options.years = [this.store.year, this.store.year+1];
  },
  method: {
    setScroll() {
      document.querySelectorAll('input:checked').forEach(elem => {
        console.log('app', elem)
        document.querySelector(elem.getAttribute('id')).scrollIntoView({
            behavior: 'smooth',
        });
      });
    }
  },
  mounted(){
    let options = {
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    };
    document.getElementsByClassName('selected').forEach(elem => document.getElementById(elem.getAttribute('id')).scrollIntoView(options));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.options {
  display: flex;
  overflow: scroll;
}

.options ul {
  list-style: none;
  display: flex;
}

div.horscroll {
  overflow: auto;
  white-space: nowrap;
}

input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}
label {
  display:inline-block;
  padding:0.3em 1.2em;
  margin:0 0.3em 0.3em 0;
  border-radius:2em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  color:#4eb5f1;
  text-align:center;
  transition: all 0.2s;
  background-color:white;
}

label:hover {
  background-color: #dfd;
}

input[type="radio"]:checked + label {
    background-color: #bfb;
    border-color: #4c4;
}
</style>
