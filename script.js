function move() {
    alert("Nice, you found Bigfoot :D");
    var forest = document.getElementById("bigfootImage");
    var x = Math.random() * 300;
    var y = Math.random() * 300;

    forest.style.top = x + 'px';
    forest.style.left = y + 'px';
}