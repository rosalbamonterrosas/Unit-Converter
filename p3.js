//Writes the final output on the web app
var report = function (correct_output) {
    document.getElementById("result").innerHTML =
            correct_output;
};

//First checks for valid input, then determines the correct output
document.getElementById("convert_button").onclick = function () {
    let initial_value = document.getElementById("initial_value").value;
    let validInput = inputValidation(initial_value);
    
    if(!validInput) { 
        report("You did not enter a number. Please try again.");
    } else {
        let initial_unit = document.getElementById("initial_unit").value;
        let final_unit = document.getElementById("final_unit").value;
        let final_value = conversion (initial_value, initial_unit, final_unit);
        let correct_output = result(initial_value, initial_unit, final_unit, final_value);
        report(correct_output);
    }
};

//Concatenates the final output
function result (initial_value, initial_unit, final_unit, final_value) {

    let correct_output = parseFloat(initial_value).toExponential(2) + " " + initial_unit + " = " + parseFloat(final_value).toExponential(2) + " " + final_unit;
    return correct_output;
}

//Retruns true if input is valid, otherwise return false
function inputValidation (initial_value) {
    if (initial_value === null || initial_value.trim() === '') {  
        return false;
    }
    initial_value = Number(initial_value);      
    if(Number.isNaN(initial_value)) {
        return false;
    }
    return true;                                
}

//Function that creates and returns an object which contains the prefixes and their corresponding values
function makeConversionFunctionObject(){
    let prefixes = {
        exa: Math.pow(10, 18),
        peta: Math.pow(10, 15),
        tera: Math.pow(10, 12),
        giga: Math.pow(10, 9),
        mega: Math.pow(10, 6),
        kilo: Math.pow(10, 3),
        hecto: Math.pow(10, 2),
        deka: Math.pow(10, 1),
        unit: Math.pow(10,0),
        deci: Math.pow(10, -1),
        centi: Math.pow(10, -2),
        milli: Math.pow(10, -3),
        micro: Math.pow(10, -6),
        nano: Math.pow(10, -9),
        pico: Math.pow(10, -12),
        femto: Math.pow(10, -15),
        atto: Math.pow(10, -18)
    };
    return prefixes;
}

//Calculates the final value
function conversion (initial_value, initial_unit, final_unit) {
    let prefixes = makeConversionFunctionObject();
    return (initial_value * prefixes[initial_unit] / prefixes[final_unit]);
}