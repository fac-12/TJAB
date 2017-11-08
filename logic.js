function cleanAir(bCode) {
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
  xhr.onreadystatechange = function() {
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
      for(var key in pollutantOne){
      if(pollutantOne[key].length > 0){
      finalVal[key] = pollutantOne[key].reduce(function(a, b) {
        return Math.max(a, b);
      })
    }
  }
  console.log(finalVal);
      // var nitroLevel = pollutantOne['NO2'];
      // finalVal["NO2"] = nitroLevel.reduce(function(a, b) {
      //   return Math.max(a, b);
      // });
    }
  };

  xhr.open("GET", "http://api.erg.kcl.ac.uk/AirQuality/Daily/MonitoringIndex/Latest/LocalAuthorityId=" + bCode + "/Json", true);
  xhr.send();
}

cleanAir(33);
