function cleanAir(bCode, callback) {
  var pollutantOne = {
    "NO2": [],
    "O3": [],
    "PM10": [],
    "PM25": [],
    "CO": [],
    "SO2": []
  };
  var finalVal = {};
  var xhr = new XMLHttpRequest();
  var counter = 0;
  xhr.onreadystatechange = function(callback) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var airResp = JSON.parse(xhr.responseText);
      var siteArr = airResp.DailyAirQualityIndex.LocalAuthority.Site;
      console.log(siteArr);
      for (var i = 0; i < siteArr.length; i++) {
        if (Array.isArray(siteArr[i].Species)) {
          for (var j = 0; j < siteArr[i].Species.length; j++) {
            pollutantOne[siteArr[i].Species[j]['@SpeciesCode']].push(Number(siteArr[i].Species[j]['@AirQualityIndex']));
          }
        } else {
          pollutantOne[siteArr[i].Species['@SpeciesCode']].push(Number(siteArr[i].Species['@AirQualityIndex']));
        }
      }
      console.log(pollutantOne);
      for (var key in pollutantOne) {
        if (pollutantOne[key].length > 0) {
          finalVal[key] = pollutantOne[key].reduce(function(a, b) {
            return Math.max(a, b);
          })
        }
      }
      }
        callback(counter);
        console.log(counter);
    };


  xhr.open("GET", "http://api.erg.kcl.ac.uk/AirQuality/Daily/MonitoringIndex/Latest/LocalAuthorityId=" + bCode + "/Json", true);
  xhr.send();
//   if(Object.keys(finalVal).length !== 0){
//     return finalVal;
// }
if(counter === 0){
  return finalVal;
}
}

function callback(counter){
  counter = counter + 1;
}

console.log(cleanAir(33, callback));

// var pollRating = cleanAir(33);
// function testFunction(val){
//   return val;
// }
//
// console.log(setTimeout(testFunction(pollRating), 5000));
//
// //setTimeout(testFunction(pollRating), 2000);


// var pollRating = cleanAir(33)
// function calcRating(finalVal){
// console.log("working");
//   var count = 0;
//   var keyNo = 0;
//   for(var key in finalVal){
//     count = count + finalVal[key];
//     keyNo ++;
//   }
//    return (JSON.stringify(finalVal));
// }
// console.log(calcRating(pollRating));
=======
var green = [];
var green__url =[];
var orange = [];
var orange__urls = [];
var red = [];
var red__urls = [];

var gifObject;

// var gifUrl = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=bwJcKSeE8a0p0nqVeigr2ktmzefR5Pkn"
// var called;

function searchGifs() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      gifObject = JSON.parse(xhr.responseText);
      green.push(gifObject.data);
    }
  };

  xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=celebration&api_key=bwJcKSeE8a0p0nqVeigr2ktmzefR5Pkn", true);
  xhr.send();


};

searchGifs();

//Call this after API request has completed

for (var i = 0; i <25; i++){
  green__url.push(green[0][i].images.original.url);
};

