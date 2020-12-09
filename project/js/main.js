
//$(document).ready(function(){
//    getWeather();
//})

//function getWeather(searchQuery){
//    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + searchQuery + "&units=metric&appid=" + apiKey;
//    $(".city").text("");
//    $(".temp").text("");
//    $(".error-message").text("");

//    $.ajax(url, {
//        success: function (data) {
//            $(".city").text(data.name);
//            $(".temp").text(data.main.temp);
//            console.log(data);
//        }, error: function (error) {
//            $(".error-message").text("An error occured");
//        }
//    })
//}

//function searchWeather() {
//    var searchQuery = $(".search").val();
//    getWeather(searchQuery);
//}

Firebird.attach(options, function (err, db) {
    if (err)
        throw err;
    db.query('Select Customer from Customermaster', function (err, result) {
        console.log(result);
        db.detach();
    })
});