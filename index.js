function calculateSquare(){
    let value = document.getElementById('number').value;
    let result = document.getElementById('result');

    let num = parseFloat(value);
    if (isNaN(num)) {
        result.innerHTML = 'Invalid, please enter a number';
    } else {
        result.innerHTML = num * num;
    }
    
}

document.getElementById('calculate').addEventListener('click', calculateSquare);
