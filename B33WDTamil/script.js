// step 01 ; create an XHR object
var request = new XMLHttpRequest();
// step 02:request a connection(which data you need to recieve)
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// step 03: sending a connection request
request.send();
// sttep 04: once the data sucessfully received
// from the server(200)
request.onload=function(){
    var data=JSON.parse(request.response);
    // console.log(data);
    // console.log(data[0].capital);
    // console.log(data[1].currencies);
    for(var i = 0;i<data.length;i++){
    // console.log(data[i].name);
    // console.log(`name:${data[i].name} capital:${data[i].capital}`)
    // console.log(`flag:${data[i].flag}`);
    console.log(`name:${data[i].name} Lat:${data[i].latlng[0]} long ${data[i].latlng[1]} `)
    }
}
