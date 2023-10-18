let latitude, longitude, destination;

$ (function () {
    $("#navigate-button").click(function () {
        window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination.lat};${destination.lng}`
    } )
})

$(document).ready(function () {
    alert("Please allow the device to know your location!")
    initGeolocation();
})

function initGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    }
    else {
        alert("Sorry, your browser does not support geolocation services.");
    }
}
function success(position) {
    //console.log(position)
    longitude = position.coords.longitude;
    latitude = position.coords.latitude

    mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';
    var map = new mapboxgl.Map({
        container:"map",
        style: "mapbox://styles/mapbox/streets-v11" ,
        center : [longitude,latitude],
        zoom: 4
    })
    
    var img1 =document.querySelector("#gateway")
    var marker1 = new mapboxgl.Marker({
        element:img1
    })
    .setLngLat([ 72.877426,19.076090])
    .addTo(map)
    
    
    var img2 =document.querySelector("#masjid")
    var marker2 = new mapboxgl.Marker({
        element:img2
    })
    .setLngLat([77.2340,28.6510])
    .addTo(map)
    
    var img3 =document.querySelector("#tajmahal")
    var marker3 = new mapboxgl.Marker({
        element:img3
    })
    .setLngLat([78.042068,27.173891])
    .addTo(map)
    
    
    var img4 =document.querySelector("#memorial")
    var marker4 = new mapboxgl.Marker({
        element:img4
    })
    .setLngLat([88.3425,22.5449])
    .addTo(map)
    
    var img5 =document.querySelector("#minar")
    var marker5 = new mapboxgl.Marker({
        element:img5
    })
    .setLngLat([77.1855,28.5245])
    .addTo(map)
    
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: { enableHighAccuracy: true },
            trackUserLocation: true,
        })
    )

    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxg
        }).on("result" , function (e){
                destination = e.result.center
        })
        
    );

    map.on("click",function(e){
      
       destination = e.lnglat
    })

}
