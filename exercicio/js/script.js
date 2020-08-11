function iniciaTabuada() {
    let num = document.getElementById('input-table')
    let tab = document.getElementById('show-table-screen')
    let erro = document.getElementById('erro')
    let title_table = document.getElementById('title-table')
    if(num.value == 0) {
        alert('Por favor, digite um número no campu para numero.')
        document.getElementById('erro').style.background = '#f00'
        document.getElementById('erro').style.color = '#fff'
        document.getElementById('erro').style.borderRadius = '1rem 2rem'
        document.getElementById('erro').style.padding = '5px'
        document.getElementById('erro').style.textAlign = 'center'
        erro.innerHTML = `Por favor, digite um número no campu para numero.`
    }else{
        let tabuada = Number(num.value)
        let create_h1 = document.createElement('h1')
        create_h1.innerHTML = `Tabuada do ${tabuada}`
        title_table.appendChild(create_h1)
        tab.innerHTML = ''
        for(let cont = 1; cont <= 10; cont++) {
            let create = document.createElement('option')
            create.innerHTML = `${tabuada} x ${cont} = ${tabuada * cont}`
            tab.appendChild(create)
        }
    }
}
function iniciaComentario() {
    let res_comentario = document.getElementById('res-comentario')
    let commentary = document.getElementById('commentary')
    if(commentary.value.length == 0) {
        alert('[ERRO!] Por favor, digite um comentário antes de postar.')
        res_comentario.style.background = '#f00'
        res_comentario.style.color = '#fff'
        res_comentario.style.padding = '5px'
        res_comentario.style.textAlign = 'center'
        res_comentario.style.borderRadius = '2rem 1rem'
        res_comentario.style.marginBottom = '12px'
        res_comentario.innerHTML = `[ERRO!] Por favor, digite um comentário antes de postar.`
    }else{
        let comentario = String(commentary.value)
        let nome = ' '
        while(true) {
            nome = prompt('Informe o seu nome, por favor: ').toUpperCase()
            if(nome.length !== 0) {
                break
            }
        }
        // Para criar um p dentro da section
        let create_p = document.createElement('p')
        res_comentario.style.background = '#005800'
        res_comentario.style.color = '#fff'
        res_comentario.style.padding = '5px'
        res_comentario.style.textAlign = 'center'
        res_comentario.style.borderRadius = '2rem 1rem'
        res_comentario.style.marginBottom = '12px'
        create_p.innerHTML = `${nome}: ${comentario}`
        res_comentario.appendChild(create_p)
    }
}