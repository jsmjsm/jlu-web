var myip = document.getElementById('myip')
var newip = document.createElement("a");
newip.id = "myip"
var ip = returnCitySN["cip"];
newip.innerHTML = ip
myip.parentNode.replaceChild(newip, myip);