window.onload = () => {
    const section = document.querySelector('section'),
        result = document.querySelector('#display');
    tempResult = document.querySelector('#result');
    let temp;
    let firstNum, lastNum, oper ="";
    let ispoint = false;
    let error = false;
    result.style.color = 'white';

    calc = (event) => {
    
            let btn = event.target;
            if (btn.tagName != 'BUTTON') return;
    
            if (btn.innerHTML === 'AC') {
                result.innerHTML = tempResult.innerHTML = '0';
                temp = firstNum =  0;
                result.style.fontSize = '5em';
                result.style.color = 'white';
                error = false;
                lastNum = undefined;
                oper = '';
                return;
        }
        if (!error) {
            if (result.innerHTML == '0' && btn.innerHTML !== '=') {
                if (btn.innerHTML == '+' || btn.innerHTML == '-' || btn.innerHTML == '÷' || btn.innerHTML == '×' || btn.innerHTML == '+/-' || btn.innerHTML == '%' || btn.innerHTML == '.') return;
                result.innerHTML = btn.innerHTML;
                temp = +result.innerHTML;
                tempResult.innerHTML = lastNum = calculate();
                return;
            }
            if (btn.innerHTML !== '=') {
            
                switch (btn.innerHTML) {
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                    case '0':
                    case '.':
                        if (!ispoint) {
                            temp += btn.innerHTML;
                            result.innerHTML += btn.innerHTML;
                            ispoint = ((btn.innerHTML == '.' ? true : false));
                        }
                        else if (ispoint && btn.innerHTML !== '.') {
                            temp += btn.innerHTML;
                            result.innerHTML += btn.innerHTML;
                        }
                        if (result.innerHTML.length > 9) result.style.fontSize = '2.5em'
                        else if (result.innerHTML.length > 40) result.style.fontSize = '2em'
                        else result.style.fontSize = '5em';
                        tempResult.innerHTML = lastNum = calculate();
                        break;
                
                    case '+':
                        oper = "+";
                        firstNum = temp;
                        temp = 0;
                        result.innerHTML += btn.innerHTML;
                        break;
                
                    case '-':
                        oper = "-";
                        firstNum = temp;
                        temp = 0;
                        result.innerHTML += btn.innerHTML;
                        break;
                
                    case '÷':
                        oper = "/";
                        firstNum = temp;
                        temp = 0;
                        result.innerHTML += btn.innerHTML;
                        break;
                
                    case '×':
                        oper = "*";
                        firstNum = temp;
                        temp = 0;
                        result.innerHTML += btn.innerHTML;

                        break;
                
                    case '%':
                        oper = "%";
                        if (lastNum == undefined) {
                            lastNum = tempResult.innerHTML = Math.round(parseFloat(temp)) / 100;
                        }
                        else {
                            lastNum = tempResult.innerHTML = Math.round(parseFloat(lastNum)) / 100;
                        }
                        temp = 0;
                        result.innerHTML += btn.innerHTML;
                        break;
                
                    case '+/-':
                        if ((temp == '0') || (temp == undefined)) temp = result.innerHTML;
                        
                        if (result.innerHTML[0] === '-') {
                            result.innerHTML = result.innerHTML.replace(/^-/, '');
                            tempResult.innerHTML = tempResult.innerHTML.replace(/^-/, '');
                            lastNum = temp = temp.replace(/^-/, '');
                        }
                        else {
                            result.innerHTML = `-${result.innerHTML}`;
                            if (tempResult.innerHTML == '0') { tempResult.innerHTML = `${result.innerHTML}` }
                            else {
                                tempResult.innerHTML = `-${tempResult.innerHTML}`;
                            }
                            lastNum = temp = `-${temp}`;
                        }
                        break;
                
                    default:
                        tempResult.innerHTML = calculate();
                }
            }
            else {
                result.innerHTML = tempResult.innerHTML;
                firstNum = temp = '0';
                if (result.innerHTML.length > 9) result.style.fontSize = '2.5em'
                else if (result.innerHTML.length > 40) 'division by zero!'
                else result.style.fontSize = '5em';
            }
        
        };
    

        function calculate() {
            lastNum = (lastNum == undefined ? firstNum : lastNum);
            switch (oper) {
                case '+':
                
                    return Math.round((parseFloat(lastNum) + parseFloat(temp)) * 100) / 100;
                    break;
                case '-': return Math.round((parseFloat(lastNum) - parseFloat(temp)) * 100) / 100;
                    break;
                case '*':
                    return Math.round((parseFloat(lastNum) * parseFloat(temp)) * 100) / 100;
                    break;
                case '/':
                    if (parseFloat(temp) == 0) {
                        result.style.fontSize = '3em';
                        result.style.color = 'red';
                        result.innerHTML = 'division by zero!'
                        temp = firstNum = lastNum = 0;
                        error = true;
                        return ('Error!');
                    }
                    else {
                        return Math.round((parseFloat(lastNum) / parseFloat(temp)) * 100) / 100;
                    }
                case "%":
                    if (lastNum == undefined) {
                        return Math.round((parseFloat(temp) / 100) * 100 / 100);
                    }
                    else {
                        return Math.round((parseFloat(lastNum) / 100) * 100) / 100;
                    }
                    break;
                default: return temp;

            }
        }
    }
    // Объявляем событие
        section.addEventListener('click', calc, false);
    
}