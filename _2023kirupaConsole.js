let myButton = document.querySelector("#myButton");
let counter = 0

myButton.addEventListener("click", doSomething, false)


function doSomething(e){
    counter++;

    //alert ("Is this working?")
    console.log("Is this working&" );
    console.log("We clicked on: " + e.target.id)
    console.log("Button clicked " + counter + "times!")

    if (counter == 3){
        showMore()
    }
}

function showMore(){
    console.warn("This is warning!")
    console.error("This is error!")
}
