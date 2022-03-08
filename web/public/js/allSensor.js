var count = 10;
var api_url = `http://luangtai-ngao.go.th/pm/all_reading.php?count=${count}`;

setInterval(() => {
  let div = document.createElement("div");
  div.classList.add("sensorData");
  axios
    .get(api_url)
    .then(function (response) {
      console.log(response.data);
      response.data.forEach((data) => {
        let text = document.createTextNode(
          `${data.pm1} ${data.pm25} ${data.pm10} ${data.temp} ${data.humi} ${data.reading_time} ${data.location}`
        );
        div.appendChild(text);
        document.body.appendChild(div);
      });
    })
    .catch((err) => console.log(err));
}, 5000); // 1000 =  1 วินาที
