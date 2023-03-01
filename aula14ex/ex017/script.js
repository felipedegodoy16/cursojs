function calcular() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('txtt')
    
    if (num.value.length == 0) {
        alert('Preencha o campo necessário!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let option = document.createElement('option')
            option.text = `${n} X ${c} = ${n*c}`
            option.value = `valor${c}`
            tab.appendChild(option)
        }
    }
}