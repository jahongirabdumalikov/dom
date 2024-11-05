
setInterval(function(){
    
    const time = new Date();
const hours = document.getElementById('hou');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

hours.innerHTML = time.getHours();
min.innerHTML = time.getMinutes();
sec.innerHTML = time.getSeconds();

});




