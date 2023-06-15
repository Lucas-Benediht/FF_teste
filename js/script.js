let count = 1;
document.getElementById("slide1").checked = true;

setInterval(function (){
  proximaImagem()
}, 3200)

function proximaImagem() {
  count++;
  if(count>5){
    count = 1;
  }

  document.getElementById("slide"+count).checked = true
}