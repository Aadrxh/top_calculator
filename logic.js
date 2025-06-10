let buttons=document.getElementById(`buttons`)
let display=document.getElementById(`display`)

let firstOperand=null
let currentInput=''
let operator=null


buttons.addEventListener('click',function(e){
    if(e.target.tagName==='BUTTON'){
        let value=e.target.textContent

        if (!isNaN(value) || value==='.'){
            if(value==='.' && currentInput.includes('.')) return;
            currentInput+=value
            display.textContent=currentInput
        }
        else if(['+', '-', '*', '/','%'].includes(value)){
            if(currentInput!==''){
                firstOperand=parseFloat(currentInput)
                operator=value
                currentInput=''
            }
        }
        else if (value==='='){
            if(firstOperand!==null && operator && currentInput!==''){
                let secondOperand=parseFloat(currentInput)
                let result;

                switch(operator){
                    case '+': result=firstOperand+secondOperand;break;
                    case '-': result=firstOperand-secondOperand;break;
                    case '*': result=firstOperand*secondOperand;break;
                    case '/': result=secondOperand!==0 ? firstOperand/secondOperand: 'Error';break;
                    case '%': result=secondOperand!==0 ? firstOperand%secondOperand: 'Error';break;
                }
                display.textContent=result.toFixed(9)
                currentInput=result.toString()
                firstOperand=null
                operator=null
            }


        }
        else if (value === 'C') {
            currentInput = '';
            firstOperand = null;
            operator = null;
            display.textContent = '0';
        }
        else if(value==='⌫'){
            currentInput=currentInput.slice(0,-1)
            display.textContent=currentInput 
        }
        else if (value=== 'ABS') {
            if (currentInput !== '') {
                currentInput = Math.abs(parseFloat(currentInput)).toString();
                display.textContent = currentInput;
    }
}

        
    }
});
