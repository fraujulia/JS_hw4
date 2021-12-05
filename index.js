let firstNumber = + prompt ('First Number');
let secondNumber = + prompt ('Second Number');
let operation  = prompt ('Enter operation', '+ - * /' );

if (operation === '+'){
    console.log(sum(firstNumber, secondNumber));
} else if (operation === '-'){
    console.log(substr(firstNumber, secondNumber));
        } else if (operation === '*'){
            console.log(mult(firstNumber, secondNumber));
    } else if (operation === '/'){
        console.log(div(firstNumber, secondNumber));
        }
    else if (firstNumber, secondNumber !== NaN) {
        alert ('Calculation impossible');
    }
    

    function sum(first, second){
        const result = first + second;
        return (`Результат: ${first} ${operation} ${second} = ${result}`);
    } 

    function substr (first, second){
        const result = first - second;
        return (`Результат: ${first} ${operation} ${second} = ${result}`);
    }
    
    function mult (first, second){
            const result = first * second;
            return (`Результат: ${first} ${operation} ${second} = ${result}`);
        }

    function div (first, second){
            const result = first / second;
            return (`Результат: ${first} ${operation} ${second} = ${result}`);
    }

   