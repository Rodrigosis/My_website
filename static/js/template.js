var veri = 1;

var trigger = document.getElementById('menu').addEventListener("click", function (){
var menu = document.getElementById('sidebar');
    if (veri == 1) {
        menu.style.left = "0px";
        veri = 0;
    }else{
        menu.style.left = "-100%";
        veri = 1;
    }
})

var trigger = document.getElementById('activate_menu').addEventListener("click", function (){
var menu = document.getElementById('sidebar');
    if (veri == 1) {
        menu.style.left = "0px";
        veri = 0;
    }else{
        menu.style.left = "-100%";
        veri = 1;
    }
})

var i = 0;

function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}