var x = 0;
var counter = 0;

function cleanAir(bCode, cb, lonBorough) {
  console.log(bCode, cb);
  var pollutantOne = {
    "Nitrogen Dioxide": [],
    "Ozone": [],
    "PM10 Particulate": [],
    "PM2.5 Particulate": [],
    "Carbon Monoxide": [],
    "Sulphur Dioxide": []
  };
  var finalVal = {};
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      introText(lonBorough);
      var spinner = document.getElementById('spinner');
      spinner.className = "";
      var airResp = JSON.parse(xhr.responseText);
      var siteArr = airResp.DailyAirQualityIndex.LocalAuthority.Site;
      console.log(siteArr);
      for (var i = 0; i < siteArr.length; i++) {
        if (Array.isArray(siteArr[i].Species)) {
          for (var j = 0; j < siteArr[i].Species.length; j++) {
            pollutantOne[siteArr[i].Species[j]['@SpeciesDescription']].push(Number(siteArr[i].Species[j]['@AirQualityIndex']));
          }
        } else {
          pollutantOne[siteArr[i].Species['@SpeciesDescription']].push(Number(siteArr[i].Species['@AirQualityIndex']));
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
      var resultVal;

      var x = cb(null,finalVal);
      // console.log(x);


      }
      else if(xhr.status == 400){
        cb('err');

      }
      if(counter !== 0){
        console.log(x);
        return x;
      }

    };

  xhr.open("GET", "http://api.erg.kcl.ac.uk/AirQuality/Daily/MonitoringIndex/Latest/LocalAuthorityId=" + bCode + "/Json", true);
  xhr.send();

}

function parallelFunction(cleanAir, updateDom,bCode,lonBorough) {
  console.log('running');

  var resultObj = {};

  cleanAir(bCode, function(err,finalVal) {
    if(err){
      addError();
    }
    else{
          resultObj = finalVal;
          updateDom(resultObj);
    }


  }, lonBorough)
}

function updateDom(obj) {

    addInfo(obj);

    var count = 0;
    var keyNo = 0;
    var colour;
    for(var key in obj){
      count = count + obj[key];
      keyNo ++;
    };
 if (count/keyNo <=3.3){
   rating = 'celebration';
   colour = 1;
 } else if (count/keyNo <=6.6){
   rating = 'uncertain';
   colour = 2;
 } else {
   rating = 'hell+no';
   colour = 3;
 };
  console.log(count/keyNo);
  console.log('updateDom', obj);
  console.log(rating);


  //giphy
  var gifObject;
  var accesstoken = 'bwJcKSeE8a0p0nqVeigr2ktmzefR5Pkn';
  var rating;
  var url;
  var image;

  function getUrl(rating, accesstoken) {
    url = "https://api.giphy.com/v1/gifs/random?" + "api_key="+ accesstoken + "&tag=" + rating + "&rating=g";
    return url;
}

  getUrl(rating, accesstoken);


function parallelFunction2(searchGifs, addGif, url) {
  var finalUrl = "";
  searchGifs(url, function(image){
    finalUrl = image;
    addGif(finalUrl);

  });
}
  function searchGifs(url,cb) {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
      gifObject = JSON.parse(xhr.responseText);
      image = gifObject.data.fixed_height_downsampled_url;
      //cb below is callback (function(image) on line 124 above)
      cb(image);
      }

    };
    xhr.open("GET", url, true);
    xhr.send();
  }

    parallelFunction2(searchGifs, addGif, url);
}

var gifObject;
var accesstoken = 'bwJcKSeE8a0p0nqVeigr2ktmzefR5Pkn';
var rating;
var url;
var image;

function getUrl(rating, accesstoken) {
  url = "https://api.giphy.com/v1/gifs/search?q=" + rating + "&api_key="+accesstoken;
  return url;
}

getUrl(rating, accesstoken);
