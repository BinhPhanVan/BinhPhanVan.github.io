// chuyển hướng
var btnContainer = document.getElementById("menu_tab");

var btns = btnContainer.getElementsByClassName("nav-item");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("tab_active");
    current[0].className = current[0].className.replace(" tab_active", "");
    this.className += " tab_active";
  });
}
