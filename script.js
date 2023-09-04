function contar(){
    var ini = document.getElementById(`txti`)
    var fim = document.getElementById(`txtf`)
    var pas = document.getElementById(`txtp`)
    var res = document.getElementById(`res`)
    if(ini.value == 0 || fim.value == 0 || pas.value == 0){
        window.alert(`[ERRO]Insira um número válido!`)
    }else{
        res.innerHTML = 'contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        
        if(i < f){
            //contagem crescente 
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449}`
        } 
        }else{
            //contagem regressiva 
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `  ${c} \u{1f449}`
            }
        }

        }
        res.innerHTML += ` \u{1f3c1}`
          
        }

