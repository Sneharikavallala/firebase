function fetchWeather(){
    var request=new XMLHttpRequest();
    var city=document.getElementById("cityName").value;
    var apikey='52b9dd95d0ae44c3362ea40992ca53b6';
    var url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    request.open('GET',url,true);
    request.onload=function(){
        var result=JSON.parse(this.response);
        console.log(result.main.temp);
        document.getElementById("temperature").value=result.main.temp;
    }
    request.send();
    console.log('fetching......');
}
....
