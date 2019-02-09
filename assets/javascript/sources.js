$(document).ready(function () {

    $("#submitBtn").on("click", function() {
        var userZip = $('#userZip').val().trim();
        // alert(userZip);


        
        /* ------------------ START of Weather API ------------------  */
        var apiPath = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/';
        // var zip = 90035; // input.value
        var apiKey = '?apikey=rVL2x1l1YoBDcq5AOfhK8JHDRipgRzr6';


        var queryURL = apiPath + userZip + apiKey;
        console.log(queryURL);



        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response.Headline);
            // for (var i = 0; i < response.Headline.length; i++) {
                
            // }
            var newText = response.Headline.Text;
            
            for (var i = 0; i < response.DailyForecasts.length; i++) {
                var newDate = moment(response.DailyForecasts[i].Date).format('MMMM Do YYYY, h:mm:ss a');
                $('.weather').append(
                    "<div class='col l3 s12 m4'>" +
                    "<div class='card small green'>" +
                    "<span class='card-title white-text'>" + newDate + "</span>" +
                    "<div class='card-content white-text'>" + "<br>Low: " + response.DailyForecasts[i].Temperature.Minimum.Value + "&#176;F" +
                    "<br>High: " + response.DailyForecasts[i].Temperature.Maximum.Value + "&#176;F" + "<br> Summary:" + newText +
                    "</div>" +
                    "<div class='card-action'>" +
                    "</div>" +
                    "</div>")
            }
        });   

      /*-------------------------------END  of document( ready ) ----------------------------------*/


    // $("#findUser").on("click", function() {
    //     console.log("click!!");
    // function geoFindMe() {
    //     var output = document.getElementById("out");
      
    //     if (!navigator.geolocation){
    //       output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    //       return;
    //     }
      
    //     function success(position) {
    //       var userLat  = position.coords.latitude;
    //       var userLong = position.coords.longitude;
      
    //     //   output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
      
    //       var img = new Image();
    //       img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + 113 + "," + -118 + "&zoom=13&size=300x300&sensor=false&key=AIzaSyC5lUnwf-VRtq5kRxiAYacGJ_3RsYznnNE";
      
    //       output.appendChild(img);
    //     }
      
    //     function error() {
    //       output.innerHTML = "Unable to retrieve your location";
    //     }
      
    //     output.innerHTML = "<p>Locating…</p>";
      
    //     navigator.geolocation.getCurrentPosition(success, error);
    // }


    // constructing a queryURL variable we will use instead of the literal string inside of the ajax method
    var queryURL = "https://www.hikingproject.com/data/get-trails?lat=" +"34"+ "&lon=" +"-118"+ "&maxDistance=15&key=200415127-68adde2ff6be3226f8cb65a7535b3ecc";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response.trails);
      for (var i = 0; i < response.trails.length; i++) {
        $(".test").append(
          "<div class='col s12 m4'>" +
          "<div class='card large'>" +
          "<div class='card-image'>" +
          "<img class='generatedImgs' src=" + response.trails[i].imgSmallMed + ">" +
          "<span class='card-title'>" + response.trails[i].name + "</span>" +
          "</div>" +
          "<div class='card-content'>" + response.trails[i].location +
          "<br>Summary: " + response.trails[i].summary +
          "<br>Length: " + response.trails[i].length + " miles" +
          "<br>Ascent: " + response.trails[i].high + " ft" +
          "<br>Condition: " + response.trails[i].conditionStatus + "</div>" +
          "<div class='card-action'>" +
          "<a class='waves-effect waves-light btn-large' target='_blank' href=" + response.trails[i].url + ">Details at Hiking Project</a>" +
          "</div>" +
          "</div>" +
          "</div>")
      }
    });

    
});









// });


















//     // function initMap() {
        
//     //     var map = new google.maps.Map(document.getElementById('map'), {
//     //       zoom: 8,
//     //       center: {lat: -34.397, lng: 150.644}
//     //     });
//     //     var geocoder = new google.maps.Geocoder();

//     //     document.getElementById('submit').addEventListener('click', function() {
//     //       geocodeAddress(geocoder, map);
//     //     });
//     //   }

//     //   function geocodeAddress(geocoder, resultsMap) {
//     //     var address = document.getElementById('address').value;
//     //     geocoder.geocode({'address': address}, function(results, status) {
//     //       if (status === 'OK') {
//     //         resultsMap.setCenter(results[0].geometry.location);
//     //         var marker = new google.maps.Marker({
//     //           map: resultsMap,
//     //           position: results[0].geometry.location
//     //         });
//     //       } else {
//     //         alert('Geocode was not successful for the following reason: ' + status);
//     //       }
//     //     });
//     //   }
//     //    ------> Hiking Project API 

//         // //sidenav
//         // const sideNav = document.querySelector('.sidenav');
//         // M.Sidenav.init(sideNav, {});

//         // $('.slider').slider();

//         // // constructing a queryURL variable we will use instead of the literal string inside of the ajax method
//         // var queryURL = "https://www.hikingproject.com/data/get-trails?lat=" + latUser + "&lon=" + lngUser + "&maxDistance=15&key=200415127-68adde2ff6be3226f8cb65a7535b3ecc";

//         // $.ajax({
//         //     url: queryURL,
//         //     method: "GET"
//         // }).then(function (response) {
//         //     console.log(response.trails);
//         //     for (var i = 0; i < response.trails.length; i++) {
//         //         $(".test").append(

//         //             "<div class='col s12 m4'>" +
//         //             "<div class='card large'>" +
//         //             "<div class='card-image'>" +
//         //             "<img class='generatedImgs' src=" + response.trails[i].imgSmallMed + ">" +
//         //             "<span class='card-title'>" + response.trails[i].name + "</span>" +
//         //             "</div>" +
//         //             "<div class='card-content'>" + response.trails[i].location +
//         //             "<br>Summary: " + response.trails[i].summary +
//         //             "<br>Length: " + response.trails[i].length + " miles" +
//         //             "<br>Ascent: " + response.trails[i].high + " ft" +
//         //             "<br>Condition: " + response.trails[i].conditionStatus + "</div>" +
//         //             "<div class='card-action'>" +
//         //             "<a class='waves-effect waves-light btn-large' target='_blank' href=" + response.trails[i].url + ">Details at Hiking Project</a>" +
//         //             "</div>" +
//         //             "</div>" +
//         //             "</div>")
//         //     }
//         // });

        


//     // /*-------------------------------START  of   Google API  ------------------------------------
//     //             When user enters Zipcode, we are able to get their LAT & LONG coordinates
//     // ------------------------------------------------------------------------------------------- */

//     // function initMap(){
//     //     var map = new google.maps.Map(document.getElementById('map'), {
//     //         zoom: 8,
//     //         center: { lat: -34.397, lng: 150.644 }
//     //     });
//     //     var geocoder = new google.maps.Geocoder();

//     //     ocument.getElementById('submitBtn').addEventListener('click', function () {
//     //     geocodeAddress(geocoder, map);
//     //     });
//     // }      // End of initMap()

//     // latUser = '';
//     // lngUser = '';
//     // function geocodeAddress(geocoder, resultsMap) {
//     //     var userZip = document.getElementById('userZip').value;
//     //     geocoder.geocode({ 'userZip': userZip }, function (results, status) {
//     //         if (status === 'OK') {
//     //             resultsMap.setCenter(results[0].geometry.location);
//     //             // alert("1-- " + results[0].geometry.location); 
//     //             var latUser = results[0].geometry.location.lat();
//     //             var lngUser = results[0].geometry.location.lng();
//     //             alert(latUser);
//     //             alert("LONG: " + lngUser);

//     //             var marker = new google.maps.Marker({
//     //                 map: resultsMap,
//     //                 position: results[0].geometry.location
//     //             });
//     //         } else {
//     //             alert('Geocode was not successful for the following reason: ' + status);
//     //         }
//     //     });
//     // }
        

