// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse(array);
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort((a, b) => {
    return a - b;  
  })
  return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let par = []
    for (let numero of array) {
        if (numero % 2 === 0) {
            par.push(numero)
            }
        }
        return par
    }

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let par = []
    for (let numero of array) {
        if (numero % 2 === 0) {
            numero = numero**2
            par.push(numero)
            }
        }
        return par
    }
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = -Infinity
  for(let i = 0; i < array.length; i++){
      if(array[i] > maior){
          maior = array[i]
      }
  }
  return maior
}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if((ladoA === ladoB) && (ladoA === ladoC) && (ladoB === ladoC)){
    return "Equilátero"
  } else if((ladoA === ladoC) || (ladoA === ladoB) || (ladoB != ladoC)){
    return "Isósceles"
  }  else if((ladoA != ladoC) && (ladoA != ladoB) && (ladoB != ladoC)){
    return "Escaleno"
  }  
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}