const searchFocus = document.getElementById('search-focus');
const keys = [
{ keyCode: 'AltLeft', isTriggered: false },
{ keyCode: 'ControlLeft', isTriggered: false },
];

window.addEventListener('keydown', (e) => {
  keys.forEach((obj) => {
    if (obj.keyCode === e.code) {
      obj.isTriggered = true;
    }
  });

  const shortcutTriggered = keys.filter((obj) => obj.isTriggered).length === keys.length;

  if (shortcutTriggered) {
    searchFocus.focus();
  }
});

window.addEventListener('keyup', (e) => {
  keys.forEach((obj) => {
    if (obj.keyCode === e.code) {
      obj.isTriggered = false;
    }
  });
});

// CHuyển hướng 
var btnContainer = document.getElementById("menu_tab");

var btns = btnContainer.getElementsByClassName("nav-item");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("tab_active");
    current[0].className = current[0].className.replace(" tab_active", "");
    this.className += " tab_active";
  });
}
