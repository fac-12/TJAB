
function createListener(){
  for (var i=1; i<=33;i++){
    console.log("EL on");
    document.getElementById(i.toString()).addEventListener('click',function(event){
    var lonBorough = event.target.innerText;
    parallelFunction(cleanAir,updateDom,event.target.id,lonBorough);
    var spinnner = document.getElementById('spinner');
    spinner.className = "spinner";
  });
  }
}

createListener();

function addInfo(obj){
  var information=document.getElementById('info');
  while (information.firstChild) {
    information.removeChild(information.firstChild);
  }
  for (var key in obj){
    var para=document.createElement('p');
    var text=document.createTextNode(key+ ':  ' +obj[key]);
    para.appendChild(text);
    information.appendChild(para);
  }
}

function introText(lonBorough){
  var introTitle = document.getElementById("title")
  while (introTitle.firstChild) {
    introTitle.removeChild(introTitle.firstChild);
  }
  var introText=document.createElement('p');
  var intro=document.createTextNode("The latest daily air quality levels in " + lonBorough + " are:");
  introText.appendChild(intro)
  introTitle.appendChild(introText);
}

function addGif(image){
  var img = document.createElement('img');
  var giffy =document.getElementById('gif');
  while (giffy.firstChild) {
    giffy.removeChild(giffy.firstChild);
  }
  img.src= image;
  giffy.appendChild(img);

}

function addColor(num){
  var ratingColor= document.getElementById('rat')
    if(num===1){
      ratingColor.className='green';
      }
      else if(num===2){
        ratingColor.className= 'orange';
      }
      else if(num===3){
        ratingColor.className= 'red';
      }
}
