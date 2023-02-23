// Get th elements from the DOM
const inputs = document.querySelectorAll(".panel input");
const c = document.querySelector("#celsius");
const f = document.querySelector("#fahrenheit");
const k = document.querySelector("#kelvin");

// Loop through all inputs
inputs.forEach(input=>{
    // Add an input event on all inputs
    input.addEventListener("input", e=>{
        // Get the id from the input the event takes place on
        const unit = e.target.id;
        // Get the value from the input the event takes place on
        const v = parseInt(e.target.value);
        // If the input event takes place in the celsius input
        if(unit==="celsius"){
            // Convert the value to fahrenheit
            f.value=parseFloat((v*1.8)+32).toFixed(4)*1;
            // Convert the value to kelvin
            k.value=parseFloat(v+273.15).toFixed(4)*1;
        }
        else if(unit === "fahrenheit"){
            // If in fahrenheit

            // Convert the value to celsius
            c.value=parseFloat((v-32)*5/9).toFixed(4)*1;
            // Convert the value to kelvin
            k.value=parseFloat(((v-32)*5/9)+273.15).toFixed(4)*1;
        }
        else if(unit==="kelvin"){
            // If in kelvin

            // Convert the value to celsius
            c.value=parseFloat(v-273.15).toFixed(4)*1;
            // Convert the value to fahrenheit
            f.value=parseFloat((v-273.15)*9/5 +32).toFixed(4)*1;
        }
    });
});

// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="S".charCodeAt(0)){
        return false;
    }
};