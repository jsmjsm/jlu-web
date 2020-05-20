// t1 写在了html头部
var UsedTime = new Date().getTime() - t1;
var el = document.getElementById("loadtime")
var newel = document.createElement("a")
newel.id = "loadtime";
newel.innerHTML = UsedTime + "ms"
el.parentNode.replaceChild(newel, el)