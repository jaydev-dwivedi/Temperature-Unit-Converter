let fromUnit = document.getElementById('from');
let toUnit = document.getElementById('to');
let fromInput = document.getElementById('temp');
let toInput = document.getElementById('temp2');
let fromValue = "";
let toValue = "";

// const pattern = /^[a-zA-Z!@#$%^&*()_+.,/?'";:|=-]+$/;
// const pattern = /^[0-9]+$/;
let input = document.getElementsByTagName("input");
const regex = /^\d+$/;
// const isMatch = pattern.test(input.value);

fromUnit.addEventListener('click', () => {
    // isMatch = pattern.test(input.value);
    fromValue = fromUnit.value;
    toValue = toUnit.value;
    input = document.getElementsByTagName("input");
    if (!regex.test(input)) {
        alert("Please enter a proper value");
        fromInput.value = "";
    }
    result = parseFloat(fromInput.value);
    // console.log("Type of isMatch: ", typeof(isMatch));
    // const isMatch = pattern.test(input.value);

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
});

toUnit.addEventListener('click', () => {
    // isMatch = pattern.test(input.value);
    fromValue = fromUnit.value;
    toValue = toUnit.value;
    input = document.getElementsByTagName("input");
    if (!regex.test(input)) {
        alert("Please enter a proper value");
        fromInput.value = "";
    }
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
});

fromInput.addEventListener('keyup', () => {

    input = document.getElementsByTagName("input");
    if (regex.test(input)) {
        alert("Please enter a proper value");
        fromInput.value = "";
        toInput.value = "";
    }
    result = parseFloat(fromInput.value);
    // isMatch = pattern.test(input.value);
    // console.log("Type of isMatch: ", isMatch);

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
});
