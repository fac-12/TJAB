



function createListener(){
  for (var i=1; i<=33;i++){
    document.getElementById(i.toString()).addEventListener('click',function(event){
    parallelFunction(cleanAir,updateDom,event.target.id);
  });
  }

}

function addInfo(obj){
  var information=document.getElementById('info');
  for (var key in obj){
    var para=document.createElement('p');
    var text=document.createTextContent(key+':'+obj[key]);
    para.appendChild(text);
    information.appendChild(para);
  }


}

function addGif(image){
  var giffy =document.getElementById('gif');
  giffy.src= image;
}

function addColor(num){
  var ratingColor= document.getElementById('rat')
    if(num===1){
      ratingColor.className='green';
      }
      else(num===2){
        ratingColor.className= 'orange';
      }
      else(num===3){
        ratingColor.className= 'red';
      }
}
