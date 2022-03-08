const api_url = "http://luangtai-ngao.go.th/pm/last2.php";

let pm25 = document.querySelector(".pm25");
let location1 = document.querySelector(".location1");
let last_reading = document.querySelector(".last_reading");
setInterval(() => {
  axios
    .get(api_url)
    .then(function (response) {
      console.log(response.data);
      pm25.innerHTML = response.data.pm25;
      location1.innerHTML = response.data.location;
      last_reading.innerHTML = response.data.last_reading;
    })
    .catch((err) => console.log(err));
}, 5000); // 1000 =  1 วินาที
