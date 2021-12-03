let firstNumber = + prompt ('First Number');
let secondNumber = + prompt ('Second Number');
let operation  = prompt ('Enter operation', '+ - * /' );

if (operation === '+'){
    function sum(firstNumber, secondNumber){
        const result = firstNumber + secondNumber;
        console.log(`Результат: ${firstNumber} ${operation} ${secondNumber} = ${result}`);
    } 
    sum(firstNumber, secondNumber);
} else if (operation === '-'){
        function substr (firstNumber, secondNumber){
            const result = firstNumber - secondNumber;
            console.log(`Результат: ${firstNumber} ${operation} ${secondNumber} = ${result}`);
        } 
        substr(firstNumber, secondNumber);
    } else if (operation === '*'){
        function mult (firstNumber, secondNumber){
            const result = firstNumber * secondNumber;
            console.log(`Результат: ${firstNumber} ${operation} ${secondNumber} = ${result}`);
        }
        mult(firstNumber, secondNumber);
    } else if (operation === '/'){
        function div (firstNumber, secondNumber){
            const result = firstNumber * secondNumber;
            console.log(`Результат: ${firstNumber} ${operation} ${secondNumber} = ${result}`);
        }
        div(firstNumber, secondNumber);
    }




  

