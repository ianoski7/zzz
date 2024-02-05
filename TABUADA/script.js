function verificar() {
    let num = document.getElementById("txtn");
    let tab = document.getElementById("seltab");

    // Verificar se o campo de número está vazio
    if (num.value.length === 0) {
        alert('DIGITE UM NUMERO');
    } else {
        let n = Number(num.value);

        // Limpar conteúdo anterior do select
        tab.innerHTML = '';

        // Usar um loop for para gerar a tabuada
        for (let c = 1; c <= 10; c++) {
            let option = document.createElement('option');
            option.text = `${n} x ${c} = ${n * c}`;
            option.value = `tab${c}`;
            tab.appendChild(option);
        }
    }
}
