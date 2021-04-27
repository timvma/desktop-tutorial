const vm = new Vue({
    el: '#app',
    data: ()=>{ 
        return {
            results:[],
            timeDate:new Date().toLocaleDateString([], {month:'long',day:'numeric'}),
            weekday: new Date().toLocaleDateString([], {weekday:'short'}),
            temp:results.main.temp,
            error:'error', 

        //speed:parseInt(results.wind.speed),
        //speed:this.results.wind.speed,
        //humidity:parseInt(this.results.main.humidity),
        //pressure:parseInt(this.results.main.pressure),
        }
    },

    computed:{
        getNotifications:function () {
            axios
            .get('https://api.openweathermap.org/data/2.5/weather?q=shinjuku&units=metric&appid=1feaed6664354e68716f8f6fbb03ff5a')
            .then(response=>this.results = response.data)
            .catch(error => this.error = error)
        }
    },
    mounted(){

         setInterval(() => this.getNotifications, 1000);
        

    }

  });
