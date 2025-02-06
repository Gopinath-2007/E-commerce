var sidenav = document.querySelector(".side-bar")


function showsidenav() {
    sidenav.style.left = "0"
}
function closesidenav() {
    sidenav.style.left = "-70%"
}

var products = document.querySelector(".collection-container");
var box = products.querySelectorAll(".collectionbox");
var search = document.getElementById("collectionsearch");

search.addEventListener("keyup", function (event) {
    var enteredtext = event.target.value.toUpperCase().trim()

    for( var i = 0; i < box.length; ++i)
    {
        var productname = box[i].querySelector("p").textContent.toUpperCase().trim()

        if( productname.indexOf(enteredtext) < 0 )
        {
            box[i].style.display = "none"
        }
        else
        {
            box[i].style.display = "block"
        }
    }
}
)