new Vue({
    el: '#app',
    data: {
        results: [],
        dateDay: '',
        dateDate:'Month Day',
        dateTime: '00:00',
        
        city:'City',
        latlocation:'0',
        lonlocation:'0',
        months:[
          'January',
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        weekday: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          unit:'Metric',
          unitM:true,
          loading:true,
          gpsNotFound:false,
    },
    beforeMount(){
        this.weather();
        this.interval = setInterval(this.time, 1000)
        this.interval = setInterval(this.weather, 100000) // 10secs
        this.time()
        this.weather()
    },
    methods: {
        time() {
            var d = new Date();
            this.dateDay = this.weekday[d.getDay()];
            this.dateTime =  d.getHours() +" : "+d.getMinutes();
            this.dateDate =  this.months[d.getMonth()] +" "+ d.getDate();
            
        },
        
        async weather() {
            this.getLocation();
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=1feaed6664354e68716f8f6fbb03ff5a`);
            this.results = await res.json();
        },


        getLocation() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.successz, this.errorz)
          } 
        },

        successz(pos) {
          axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${pos.coords.latitude}&longitude=${ pos.coords.longitude}&localityLanguage=en`)
          .then(response=>this.city = response.data)
          .catch(console.log(e))
        
        },
        errorz(e){
          this.gpsNotFound=true;
        },
       
        changeUnit(){
            this.unitM = !this.unitM;
        }

    },
 
    mounted() {
      
      this.loading= 0;
      
    },
    beforeDestroy() {
      clearInterval(this.interval)
      
    },

        
    
});