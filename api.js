var inputValue = document.querySelector('.inputValue');
        var button = document.querySelector('.button');
        var cityName = document.querySelector('.name');
        var desc = document.querySelector('.desc');
        var temp = document.querySelector('.temp');
        var minTemp = document.querySelector('.min');
        var maxTemp = document.querySelector('.max');

        button.addEventListener('click',function()
        {
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=46c4d143651db89410e08a6e7010ad41&units=metric')
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => {
  var nameCityValue = data['name'];
  var tempValue = data['main']['temp'];
  var tempMinValue = data['main']['temp_min'];
  var tempMaxValue = data['main']['temp_max'];
  var descValue = data['weather'][0]['description'];

  cityName.innerHTML = nameCityValue;
  temp.innerHTML = tempValue;
  desc.innerHTML = descValue;
  minTemp.innerHTML = tempMinValue;
  maxTemp.innerHTML = tempMaxValue;

})
        .catch(err => alert("wrong city name"))

        })

  const str = new Date().toLocaleString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
})
document.getElementById("time").innerHTML = str;

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const dateObj = new Date();
    const month = monthNames[dateObj.getMonth()];
    const date = dateObj.getDate();
    const year = dateObj.getFullYear();
    const day = weekday[dateObj.getDay()];
    const output = day + ' ' + month  + '\n'+ date  + ',' + year;

    document.querySelector('.date').textContent = output;