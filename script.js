let a = 0;
document.getElementById("modeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (a == 0) {
    a++;
  } else {
    a = 0;
  }
});

/*faq accardion*/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/*dark mode*/

/*modal*/
function openNav() {
  document.getElementById("navbar").style.height = "100vh";
}

function closeNav() {
  document.getElementById("navbar").style.height = "0vh";
}
/*modal*/
