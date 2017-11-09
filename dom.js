
function createListener(){
  for (var i=1; i<=33;i++){
    console.log("EL on");
    document.getElementById(i.toString()).addEventListener('click',function(event){
    console.log('click working');
    parallelFunction(cleanAir,updateDom,event.target.id);
  });
  }

}

createListener();

function addInfo(obj){
  var information=document.getElementById('info');
  for (var key in obj){
    var para=document.createElement('p');
    var text=document.createTextNode(key+':'+obj[key]);
    para.appendChild(text);
    information.appendChild(para);
  }


}

function addGif(image){
  var img = document.createElement('img');
  var giffy =document.getElementById('gif');
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
