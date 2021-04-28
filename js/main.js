new Vue({
    el: '#app',
    data: {
        results: [],
        datenow: '',
        datemonth:'Month',
        datetime: '',
        dateweek: '',
    },
    methods: {
        time() {
            var d = new Date();
            this.datenow = d.getDate();
            this.datetime =  d.getHours() +" : "
            +d.getMinutes();
            this.datemonth =  d.getMonth();
            this.dateweek =  d.getDate();

      },
      weather(){
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=shinjuku&units=metric&appid=1feaed6664354e68716f8f6fbb03ff5a')
        .then(response=>this.results = response.data)
        .catch(error=>console.log(error))
      }

    },
    mounted() {
      this.interval = setInterval(this.time, 1000)
      this.interval = setInterval(this.weather, 1000) // 10secs
    },
    beforeDestroy() {
      clearInterval(this.interval)
    }
});