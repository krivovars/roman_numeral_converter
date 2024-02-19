const checkBtn = document.getElementById('convert-btn');
const inputValue = document.getElementById('number');
const outputForm = document.getElementById('output')

const mainFunction = () => {
    const number=parseInt(inputValue.value)
    
    if (!number)
    {outputForm.removeAttribute("hidden")
        outputForm.textContent = "Please enter a valid number"
        setTimeout(()=>{
            outputForm.setAttribute("hidden","");
        }, 1500)
    }
    else if (number < 0) {
        outputForm.removeAttribute("hidden")
        outputForm.textContent = "Please enter a number greater than or equal to 1"
        setTimeout(()=>{
            outputForm.setAttribute("hidden","");
        }, 1500)
    }

    else if (number >= 4000) {
        outputForm.removeAttribute("hidden")
        outputForm.textContent = "Please enter a number less than or equal to 3999"
        setTimeout(()=>{
            outputForm.setAttribute("hidden","");
        }, 1500)
    }
    
    else {
        outputForm.removeAttribute("hidden")
        outputForm.textContent = converter(number)
        setTimeout(()=>{
            outputForm.setAttribute("hidden","");
        }, 1500)
    }
    
    inputValue.value="";
}

const converter = (number) => {
    const letters = [
        'M', 'CM', 'D', 'CD',
        'C', 'XC', 'L', 'XL',
        'X', 'IX', 'V', 'IV',
        'I'
    ];
    const lookupNumbers = [
        1000, 900, 500, 400,
        100,  90,  50,  40,
        10,   9,   5,   4,
        1
    ];

let result = ''
    for (let index=0; number; index++) {
        while (number >= lookupNumbers[index]) {
            number -= lookupNumbers[index];
            result += letters[index];
        }
    }
    return result;
}


checkBtn.addEventListener('click', mainFunction)