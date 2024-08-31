document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById('display');
    let buttons = Array.from(document.getElementsByClassName('btn'));
    let displayValue = '';
    
    buttons.map(button => {
        button.addEventListener('click', function(e) {
            let buttonText = e.target.innerText;

            if (buttonText === 'C') {
                displayValue = '';
                display.innerText = '0';
            } else if (buttonText === '=') {
                try {
                    displayValue = eval(displayValue).toString();
                    display.innerText = displayValue;
                } catch {
                    display.innerText = 'Error';
                }
            } else {
                displayValue += buttonText;
                display.innerText = displayValue;
            }
        });
    });
});
