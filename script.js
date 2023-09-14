let fromUnit = document.getElementById('from');
let toUnit = document.getElementById('to');
let fromInput = document.getElementById('temp');
let toInput = document.getElementById('temp2');
let fromValue = "";
let toValue = "";

fromUnit.addEventListener('click', ()=> {
    fromValue = fromUnit.value;
});

toUnit.addEventListener('click', () => {
    toValue = toUnit.value;
});

fromInput.addEventListener('keyup', () => {

    fromValue = fromUnit.value;
    toValue = toUnit.value;
    result = parseFloat(fromInput.value);

    if (fromValue == toValue) {
        console.log("Enter key pressed!");
        toInput.value = result;
    }
    else if (fromValue == 'celsius') {
        if (toValue == 'kelvin') {
            toInput.value = (result + 273.15);
        }
        else if (toValue == 'fehrenheit') {
            toInput.value = (result * (9 / 5)) + 32;
        }
    }
    else if (fromValue == 'fehrenheit') {
        if (toValue == 'celsius') {
            toInput.value = (result - 32) * (5 / 9);
        }
        else if (toValue == 'kelvin') {
            toInput.value = (result - 32) * (5 / 9) + 273.15;
        }
    }
    else if (fromValue == 'kelvin') {
        if (toValue == 'fehrenheit') {
            toInput.value = (result - 273.15) * (9 / 5) + 32;
        }
        else if (toValue == 'celsius') {
            toInput.value = result - 273.15;
        }
    }
    fromValue = fromUnit.value;
    toValue = toUnit.value;
    // console.log(typeof (result));
});