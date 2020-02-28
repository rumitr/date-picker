const store = {
    state: {
        date: '',
        month: '',
        year: '',
        duration: '',
        showDate: false
        
    },
    setOptionsDays(newNumber) {
      this.state.numbers.push(newNumber);
    },
    setDefaults() {
        // let date = new Date();
        const date = new Date('August 19, 2020 23:15:30');

        this.state.date = date.getDate(),
        this.state.month = date.getMonth(),
        this.state.year = date.getFullYear(),
        this.state.duration = 60;
    },

};

export default store;