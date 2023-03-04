let varOld = null

let varAction = ""



items = document.querySelectorAll('input[type=button]:not(.has_action)')

// numero
items.forEach(item => {
    item.addEventListener('click', function(){
        const valInput = document.getElementById('display').value
        document.getElementById('display').value = valInput + item.value
    })
});

itemAction = document.querySelectorAll('.has_action');

// action
itemAction.forEach(item => {
    item.addEventListener('click', function(){
        if(item.value === '=') {
            let varNew = document.getElementById('display').value
            switch (varAction) {
                case '+':
                    document.getElementById('display').value = parseFloat(varOld.replace(',', '.')) + parseFloat(varNew.replace(',', '.'))
                    break;
                case '-':
                    document.getElementById('display').value = parseFloat(varOld.replace(',', '.')) - parseFloat(varNew.replace(',', '.')) 
                    break;
                case '÷':
                    document.getElementById('display').value = parseFloat(varOld.replace(',', '.')) / parseFloat(varNew.replace(',', '.')) 
                    break;
                case 'x':
                    console.log(varAction)
                    document.getElementById('display').value = parseFloat(varOld.replace(',', '.')) * parseFloat(varNew.replace(',', '.')) 
                    break;
                case 'AC':
                    document.getElementById('display').value= ''
                    varOld = null
                    break;
                case '%':
                    document.getElementById('display').value = parseFloat(varOld.replace(',', '.')) % parseFloat(varNew.replace(',', '.'))
                    break;
                default:
                    break;
            }
        } else if (item.value === '<-') {
            let value = document.getElementById('display').value
            document.getElementById('display').value = value.toString().slice(0, - 1)

        } else if (item.value === '+/-') {
            let valueNew = document.getElementById('display').value
            valueNew = parseFloat(valueNew) * -1
            document.getElementById('display').value = valueNew
        } else {
            varAction = item.value
            varOld = document.getElementById('display').value
            document.getElementById('display').value = ""
        }
    })
})

console.log(items)

