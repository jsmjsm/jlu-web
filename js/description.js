// 网站主页描述
var descriptionText = "This is a Website project for Jilin University Software College.<br> With html, css, JavaScript and Vue"

var oldel = document.getElementById("parallax_description")
var newel = document.createElement("p")
newel.id = "parallax_description";
newel.innerHTML = descriptionText;
oldel.parentNode.replaceChild(newel, oldel)