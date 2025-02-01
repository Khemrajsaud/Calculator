// function appendValue(value) {
//     document.getElementById('display').value += value;
// }
// function clearDisplay() {
//     document.getElementById('display').value = '';
// }
// function calculateResult() {
//     try {
//         document.getElementById('display').value = eval(document.getElementById('display').value);
//     } catch (error) {
//         alert('Invalid Expression');
//     }
// }


window.onload = function() {
    if (localStorage.getItem('savedValue')) {
        document.getElementById('display').value = localStorage.getItem('savedValue');
    }
};


function appendValue(value) {
    let display = document.getElementById('display');
    display.value += value;
    localStorage.setItem('savedValue', display.value);
}


function clearDisplay() {
    document.getElementById('display').value = '';
    localStorage.removeItem('savedValue');  
}


function calculateResult() {
    try {
        let display = document.getElementById('display');
        display.value = eval(display.value);
        localStorage.setItem('savedValue', display.value); 
    } catch (error) {
        alert('Invalid Expression');
    }
}
