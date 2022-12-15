console.log("Boas vindas ao jogo de Blackjack!");


if (confirm
   (`Boas vindas ao jogo de Blackjack! 
Quer iniciar uma nova rodada?"`
   )){
   const cartaDoUsuario = comprarCarta();
   const cartaDoUsuario1 = comprarCarta();
   const cartaDoComputador = comprarCarta();
   const cartaDoComputador1 = comprarCarta();
   const somaDoUsuario = (cartaDoUsuario.valor + cartaDoUsuario1.valor);
   const somaDoComputador = (cartaDoComputador.valor + cartaDoComputador1.valor);
   
if(somaDoUsuario < 21 && (somaDoComputador < 21 || somaDoComputador !== 21)){

   console.log(`Usuário - cartas: ${cartaDoUsuario.texto} ${cartaDoUsuario1.texto} - ${somaDoUsuario}`)
   console.log(`Computador - cartas: ${cartaDoComputador.texto} ${cartaDoComputador1.texto} - ${somaDoComputador}`)

   if(confirm(`Suas cartas são ${cartaDoUsuario.texto} ${cartaDoUsuario1.texto}. A soma da suas cartas são ${somaDoUsuario}. 
A carta revelada do computador é ${cartaDoComputador.texto}. 
Deseja comprar mais uma carta?`)) {
   const cartaDoUsuarioExtra = comprarCarta();
   const segundaSomaDoUsuario = (somaDoUsuario + cartaDoUsuarioExtra.valor);
      if(segundaSomaDoUsuario < 21){
         if(confirm(`Suas cartas são ${cartaDoUsuario.texto} ${cartaDoUsuario1.texto}.` + "/n" + `A soma da suas cartas são ${somaDoUsuario}.` +  `A carta revelada do computador é ${cartaDoComputador.texto}.` + "/n" +  `Deseja comprar mais uma carta?`)) {
            
      }
   } else{
      if (somaDoComputador === somaDoUsuario){
    console.log("Jogo Empatado")
    } else if (somaDoComputador > somaDoUsuario){
       console.log("Computador venceu")
    } else if (somaDoComputador < somaDoUsuario){
       console.log("Você venceu")
    }else {
       console.log("Jogo Finalizado")
    } 

   }



} else{
   if (somaDoComputador === somaDoUsuario){
 console.log("Jogo Empatado")
 } else if (somaDoComputador > somaDoUsuario){
    console.log("Computador venceu")
 } else if (somaDoComputador < somaDoUsuario){
    console.log("Você venceu")
 }else {
    console.log("Jogo Finalizado")
 } 
}
} else{
   if (somaDoComputador === somaDoUsuario){
 console.log("Jogo Empatado")
 } else if (somaDoComputador > somaDoUsuario){
    console.log("Computador venceu")
 } else if (somaDoComputador < somaDoUsuario){
    console.log("Você venceu")
 }else {
    console.log("Jogo Finalizado")
 } 
}



























{
   let carta1UsuarioExtra = comprarCarta()
   const somaDoUsuarioTotal = somaDoUsuario.valor + carta1UsuarioExtra.valor  
   if(confirm(`Usuário - Carta:${cartaDoUsuario.texto} ${cartaDoUsuario1.texto} ${cartaDoUsuarioExtra.texto} - Pontuaçã: ${somaDoUsuarioTotal}
Computador - Carta` )){

   }
}
   // confirm(`Usuario - Cartas ${cartaDoUsuario} ${cartaDoUsuario1} - Pontuação: 4{}`)
   // console.log(`Cartas do usuario ${cartaDoUsuario.texto}, ${cartaDoUsuario1.texto} Pontuação: ${somaDoUsuario}`);
   console.log(`Cartas do computador ${cartaDoComputador.texto}, ${cartaDoComputador1.texto} pontuação: ${somaDoComputador}`);
}