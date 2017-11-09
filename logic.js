
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
