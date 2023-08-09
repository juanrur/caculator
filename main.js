let actualOperator= ''
let numero1;
let numero2;
let números = document.querySelectorAll("#numero");
let operators = document.querySelectorAll("#operator")


operators.forEach( operator =>{
    operator.addEventListener('click', (evt) => {

        const symbol = evt.target.innerHTML
        const funciones = {
            'c': c,
            'ce': ce,
            '.': punto,
            '=': igual
        }
        if(Object.keys(funciones).some(key => key === symbol)) {funciones[symbol]()}
        else {
            if(!numero1){
                actualOperator = symbol
                numero1 = pantalla.value
                pantalla.value = ''
            }
        }
    })
})

números.forEach( numero =>{
    numero.addEventListener('click', (evt) => {
        if (pantalla.value == 0 && evt.target.innerHTML == 0) return
        else pantalla.value += evt.target.innerHTML
    })
})


const c = () => {
    pantalla.value = pantalla.value.slice(0, -1);
}

const ce = () => {
    pantalla.value = '';
    actualOperator = '';
    numero1 = '';
    numero2 = '';
}

const punto = () => {
    
    if (pantalla.value.includes('.')) return
    pantalla.value += "."   
}


const igual = () => {
    
    numero2 = pantalla.value;

    const Operaciones = {
        '': pantalla.value,
        '-': numero1 - numero2,
        '+': Number(numero1) + Number(numero2),
        'x': numero1 * numero2,
        '/': numero1 / numero2 
    }
    pantalla.value = Operaciones[actualOperator] 
    numero1=''
    numero2=''
    actualOperator=''
}




