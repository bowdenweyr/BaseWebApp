var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'http://localhost:5000/salesorder/S5255?apikey=' + apiKey + '&configuration=0', true);
xhttp.onload = function () {
    var data = JSON.parse(this.response)
    data.forEach((Ordernumber) => {
        console.log(Ordernumber)
    })
    
}
xhttp.send;