function abrirMenu(){
    if(itens.style.display == 'none'){
        itens.style.display = 'block'
    
    }else {
        itens.style.display = 'none'
    }
}

function mudarTela(){
    if(window.innerWidth >= 768){
        itens.style.display = 'flex'
    
    }else{
        itens.style.display = 'none'
    }
}