let activate=true;
let homebtn=document.getElementById(
  'inn');
let bg=document.getElementById('b-4');
window.onload=function(){
  bg.style.backgroundImage="url('https://www.dropbox.com/s/4iwczthzh5v1d4i/Screenshot_20210525-130232.png?raw=1')";
  bg.addEventListener('click', ()=>{
    alert('Under Development');
  })
}
setTimeout(screen, 15000);
function screen(){
  bg.style.background='#FFFFFF';
  switch (activate){
    case true:
      on();
      break;
      default:
      off();
      break;
  }
}
function on(){
  bg.style.backgroundImage="url('https://www.dropbox.com/s/7101n81mn5cefqu/1621947269107%20%281%29.png?raw=1')";
  bg.style.backgroundSize='100% 100%';
  activate=false;
}
function off(){
  bg.style.background="#000000";
  activate=true;
}