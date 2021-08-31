var i=1;
var images = [
"The Family Book.jpg",
"dad.png",
"mom.jpg",
"girl.png"
];

var names = [
    "The Family Book",
    "Saurav Mitra",
    "Dolley Mitra",
    "Shruti Mitra"
];

function update()
{
    document.getElementById("family").src = images [i];
    document.getElementById("name").innerHTML = names [i];
    i=i+1;
    if (i==4) {i=0;}
}
