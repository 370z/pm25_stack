const api_url = "http://luangtai-ngao.go.th/pm/last.php";

let pm1 = document.querySelector(".pm1");
let pm25 = document.querySelector(".pm25");
let pm10 = document.querySelector(".pm10");
let temp = document.querySelector(".temp");
let humi = document.querySelector(".humi");
let last_reading = document.querySelector(".last_reading");
setInterval(() => {
  axios
    .get(api_url)
    .then(function (response) {
      console.log(response.data.pm25);
      pm1.innerHTML = response.data.pm1;
      pm25.innerHTML = response.data.pm25;
      pm10.innerHTML = response.data.pm10;
      temp.innerHTML = response.data.temp;
      humi.innerHTML = response.data.humi;
      last_reading.innerHTML = response.data.last_reading;
    })
    .catch((err) => console.log(err));
}, 5000); // 1000 =  1 วินาที
