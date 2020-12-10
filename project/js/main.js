const xhr = new XMLHttpRequest();
const Firebird = require('node-firebird');
//const { response } = require('express');
var options = {
    host: 'EliteBook840G2',
    //port : 3050,
    database: '\\Ostendo/Database/IndustrialAir/OSTENDO.FDB',
    user: 'SYSDBA',
    password: 'masterkey',
    lowercase_keys: false,
    role: null,
    pageSize: 4096
};

//$(document).ready(function(){
//    getNewContacts();
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



//function getNewContacts() {
//    var url = "http://localhost:5000/salesorder/S5261?&apikey=Ytm1VIhM2ai7fewNDR1az4r%2FmK3wR6%2BlpIEDHx%2Bf%2BODwOsQaU%2BXkvAGyOjBN%2BeS%2BU9F4UzCz7u%2FMCLVoovlGfxWzCTwu1L8Od8ZHGdvGX1NZgmcqRQfW7sk%3D&format=xml&configuration=1"
//    if (xhr) {
//        xhr.open('GET', url);
//        xhr.setRequestHeader('Content-Type', 'application/xml')       
//        xhr.send();
//    }
    
    //$.ajax(url, {
    //    success: function (data) {
    //        console.log(data);
    //    }, error: function (error) {
    //        console.log(error);
    //    }
    //})
//}

Firebird.attach(options, function (err, db) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("successful connection");
    db.query('Select Customer from Customermaster where customer = "3D Print Ltd"', function (err, result) {
        // $(".ContactInfo").text("result", result);
        console.log(result);
        db.detach();
    })
});