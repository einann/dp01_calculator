let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');

let prevNum = '';
let currentNum = '';
let result = '';

buttons.forEach(button => {
    button.addEventListener('click', e => {
        let kontrol = e.target.textContent;

        if((kontrol == '+' || kontrol == '*' || kontrol == '/' || kontrol == '=') && input.value == '') {
            console.log('invalid');
        }


        else {
            input.value += e.target.textContent;
            let ival = input.value;
            
            let plusSymbol = ival.includes('+');
            let minusSymbol = ival.includes('-');
            let asterSymbol = ival.includes('*');
            let divideSymbol = ival.includes('/');
            
            if(e.target.textContent == '=') {

                if(plusSymbol) {
                    let plusLoc = ival.indexOf('+');
                    let plusCount = ival.match(/[+]/g)||[];

                    console.log(plusCount);

                    if(plusCount.length < 2) {
                        prevNum = ival.slice(0, plusLoc);
                        currentNum = ival.slice(plusLoc+1, ival.length-1);
                        result = parseFloat(prevNum) + parseFloat(currentNum);
                        input.value = result;
                    }
                    else {
                        input.value = 'HATA';
                        console.log('birden fazla operator.');
                    }
                }

                else if(minusSymbol && !asterSymbol && !divideSymbol) {
                    let minusLocFirst = ival.indexOf('-');
                    let minusLocLast = ival.lastIndexOf('-');
                    
                    let minusCount = ival.match(/[-]/g)||[];

                    if(minusCount.length < 2) {
                        prevNum = ival.slice(0, minusLocFirst);
                        currentNum = ival.slice(minusLocFirst+1, ival.length-1);
                        result = parseFloat(prevNum) - parseFloat(currentNum);
                        input.value = result;
                    }
                    else if(minusCount.length == 2) {
                        prevNum = ival.slice(minusLocFirst+1, minusLocLast);
                        currentNum = ival.slice(minusLocLast+1, ival.length-1)
                        result = parseFloat(prevNum)*-1 - parseFloat(currentNum);
                        input.value = result;
                    }
                    
                }

                else if(!minusSymbol) {
                    if(asterSymbol) {
                        let asterLoc = ival.indexOf('*');
                        prevNum = ival.slice(0, asterLoc);
                        currentNum = ival.slice(asterLoc+1, ival.length-1);
                        result = parseFloat(prevNum) * parseFloat(currentNum);
                        input.value = result;
                    }
                    else if(divideSymbol) {
                        let divideLoc = ival.indexOf('/');
                        prevNum = ival.slice(0, divideLoc);
                        currentNum = ival.slice(divideLoc+1, ival.length-1);
                        result = parseFloat(prevNum) / parseFloat(currentNum);
                        input.value = result;
                    }
                    
                }

                else if(asterSymbol && minusSymbol) {
                    let asterLocNeg = ival.indexOf('*');
                    let minusLocNeg = ival.indexOf('-');

                    if(minusLocNeg == 0) {
                        prevNum = ival.slice(minusLocNeg+1, asterLocNeg) * -1;
                        currentNum = ival.slice(asterLocNeg+1, ival.length-1);
                        result = parseFloat(prevNum) * parseFloat(currentNum);
                        input.value = result;
                    }
                    else if(minusLocNeg > asterLocNeg) {
                        prevNum = ival.slice(0, asterLocNeg);
                        currentNum = ival.slice(minusLocNeg+1, ival.length-1) * -1;
                        result = parseFloat(prevNum) * parseFloat(currentNum);
                        input.value = result;
                    }
                }

                else if(divideSymbol && minusSymbol) {
                    
                    let divideLocNeg = ival.indexOf('/');
                    let minusLocNegDiv = ival.indexOf('-');

                    if(minusLocNegDiv == 0) {
                        prevNum = ival.slice(minusLocNegDiv+1, divideLocNeg) * -1;
                        currentNum = ival.slice(divideLocNeg+1, ival.length-1);
                        result = parseFloat(prevNum) / parseFloat(currentNum);
                        input.value = result;
                    }
                    else if(minusLocNegDiv > divideLocNeg) {
                        prevNum = ival.slice(0, divideLocNeg);
                        currentNum = ival.slice(minusLocNegDiv+1, ival.length-1) * -1;
                        result = parseFloat(prevNum) / parseFloat(currentNum);
                        input.value = result;
                    }
                }

                
            }

            else if(e.target.textContent == 'AC') {
                input.value = '';
            }
            
        }

    });
});