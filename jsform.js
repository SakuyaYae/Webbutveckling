//var form = document.querySelector("form");
let form = document.querySelector("form");
var object;
console.log("Hej");
form.addEventListener("submit", event => {
    var name = form.elements.name.value;
    var dark = form.elements.dark.value;
    console.log("Hej");
    object = {
        "name":name,
        "dark":dark
    }
    console.log(JSON.stringify(object));
    event.preventDefault();
});
