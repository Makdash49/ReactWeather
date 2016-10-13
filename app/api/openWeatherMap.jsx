var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=29a7aa8f8eb907a68f812683b58cd962&units=imperial';

// 29a7aa8f8eb907a68f812683b58cd962
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=29a7aa8f8eb907a68f812683b58cd962

module.exports = {
  getTemp: function (location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl =`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res){
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      if (res.data === undefined) {
        throw new Error("City not found")
      } else {
        throw new Error(res.data.message);
      }
    });
  }
};
