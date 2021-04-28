new Vue({
    el: '#app',
    data: {
        results: [],
        datenow: '',
        datemonth:'Month',
        datetime: '00:00',
        dateweek: 'weekday',
        weekday: Array(
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"),
        city:'shinjuku',
        latlocation:'0',
        lonlocation:'0',

    },
    methods: {
        time() {
            var d = new Date();
           
            this.datenow = d.getDate();
            this.datetime =  d.getHours() +" : "
            +d.getMinutes();
            this.datemonth =  d.getMonth() +" "+ d.getDate();
            this.dateweek =  this.weekday[1];
        },
        
        weather(){
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.latlocation}&lon=${this.lonlocation}&units=metric&appid=1feaed6664354e68716f8f6fbb03ff5a`)
          .then(response=>this.results = response.data)
          .catch(error=>console.log(error))
        },

        getLocation() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.successz,this.errorz)
          } else { 
            alert('GEO NEEDED');
          }
        },
        successz(pos) {
          var crd = pos.coords;
          this.latlocation = crd.latitude;
          this.lonlocation = crd.longitude;
          this.cityName();
        },
        errorz(e){
          alert('error')
        },

        cityName() {
          axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${this.latlocation}&longitude=${this.lonlocation}&localityLanguage=en`)
          .then(response=>this.city = response.data)
          .catch(console.log('error'))
        }

    },
    mounted() {
      this.getLocation();
      this.weather();
      this.interval = setInterval(this.time, 1000)
      this.interval = setInterval(this.weather, 50000) // 10secs
      
      

    },
    beforeDestroy() {
      clearInterval(this.interval)
    }
});