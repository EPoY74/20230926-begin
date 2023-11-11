let myButton = document.querySelector("#myButton");
myButton.addEventListener("click", doSomething, false)

function doSomething(e){
    //alert ("Is this working?")
    console.log("Is this working&" );
    console.log("We clicked on: " + e.target.id)
}