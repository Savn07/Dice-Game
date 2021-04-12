/*For dice 1 */
var randomnumber1 = Math.floor(Math.random() * 6)+1;

var randomdice1 = "dice"+randomnumber1+".png";

var randomsource1 = "images/"+randomdice1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomsource1);

/* For dice 2 */

var randomnumber2 = Math.floor(Math.random() * 6)+1;

var randomsource2 = "images/dice"+randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomsource2);

if(randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
}
else if(randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}

