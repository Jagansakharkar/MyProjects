function changecolor(){
  var color=["red","yellow","purple","green","cyan","black"]
  let text=document.getElementById('text');
  const randomnumber=getRandomnumber();
  text.innerHTML="Background Color : " + color[randomnumber]
 document.body.style.backgroundColor=color[randomnumber]}
 function getRandomnumber(){
  var color=["red","yellow","purple","green","orange","pink","skyblue","grey"]
  return Math.floor(Math.random()*color.length);
  
 }