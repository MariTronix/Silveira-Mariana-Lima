console.log("Boas vindas ao jogo de Blackjack!");


if (confirm
   (`Boas vindas ao jogo de Blackjack! 
Quer iniciar uma nova rodada?"`
   )){
   let cartaDoUsuario = comprarCarta();
   let cartaDoUsuario1 = comprarCarta();
   let cartaDoComputador = comprarCarta();
   let cartaDoComputador1 = comprarCarta();
   let somaDoUsuario = (cartaDoUsuario.valor + cartaDoUsuario1.valor);
   let somaDoComputador = (cartaDoComputador.valor + cartaDoComputador1.valor);

   if(cartaDoUsuario === "A"){
      cartaDoUsuario = comprarCarta();
      somaDoComputador = (cartaDoUsuario.valor + cartaDoUsuario1.valor);

      if(somaDoUsuario < 21 && (somaDoComputador < 21 || somaDoComputador !== 21)){
      console.log(`Usuário - cartas: ${cartaDoUsuario.texto} ${cartaDoUsuario1.texto} - ${somaDoUsuario}`)
      console.log(`Computador - cartas: ${cartaDoComputador.texto} ${cartaDoComputador1.texto} - ${somaDoComputador}`)
      if(confirm(
         `Suas cartas são ${cartaDoUsuario.texto} ${cartaDoUsuario1.texto}. A soma da suas cartas são ${somaDoUsuario}. 
         A carta revelada do computador é ${cartaDoComputador.texto}. 
         Deseja comprar mais uma carta?`)){
         const cartaDoUsuarioExtra = comprarCarta();
         const segundaSomaDoUsuario = (somaDoUsuario + cartaDoUsuarioExtra.valor);
         console.log(`Usuário - cartas: ${cartaDoUsuario.texto} ${cartaDoUsuario1.texto} ${cartaDoUsuarioExtra.texto} - ${segundaSomaDoUsuario}`)
         console.log(`Computador - cartas: ${cartaDoComputador.texto} ${cartaDoComputador1.texto} - ${somaDoComputador}`)

         if(segundaSomaDoUsuario < 21){
            if(confirm(`Suas cartas são ${cartaDoUsuario.texto} ${cartaDoUsuario1.texto} ${cartaDoUsuarioExtra.texto}. A soma da suas cartas são ${segundaSomaDoUsuario}.  
            A carta revelada do computador é ${cartaDoComputador.texto}.
            Deseja comprar mais uma carta?`)) {
               const cartaDoUsuarioExtra1 = comprarCarta();
               const terceiraSomaDoUsuario = (segundaSomaDoUsuario + cartaDoUsuarioExtra1.valor);
               if (somaDoComputador === terceiraSomaDoUsuario){
                  console.log("Jogo Empatado");
                  alert("Jogo Empatado");
               } else if (somaDoComputador > terceiraSomaDoUsuario){
                  console.log("Computador venceu");
                  alert("Computador venceu");
               } else if (terceiraSomaDoUsuario > 21){
                  console.log("Computador venceu");
                  alert("Computador vencendo");
               } else if (somaDoComputador < terceiraSomaDoUsuario){
                  console.log("Você venceu");
                  alert("Você venceu");
               }else {
                  console.log("Jogo Finalizado");
                  alert("Jogo Finalizado");
               } 
            } else{
               if (somaDoComputador === segundaSomaDoUsuario){
                  console.log("Jogo Empatado");
                  alert("Jogo Empatado");
               } else if (somaDoComputador > segundaSomaDoUsuario){
                  console.log("Computador venceu");
                  alert("Computador venceu");
               } else if (segundaSomaDoUsuario > 21){
                  console.log("Computador venceu");
                  alert("Computador vencendo");
               } else if (somaDoComputador < segundaSomaDoUsuario){
                  console.log("Você venceu");
                  alert("Você venceu");
               }else {
                  console.log("Jogo Finalizado");
                  alert("Jogo Finalizado");
               } 
               }
            } else{
               if (somaDoComputador === segundaSomaDoUsuario){
                  console.log("Jogo Empatado");
                  alert("Jogo Empatado");
               } else if (somaDoComputador > segundaSomaDoUsuario){
                  console.log("Computador venceu");
                  alert("Computador venceu");
               } else if (segundaSomaDoUsuario > 21){
                  console.log("Computador venceu");
                  alert("Computador vencendo");
               } else if (somaDoComputador < segundaSomaDoUsuario){
                  console.log("Você venceu");
                  alert("Você venceu");
               }else {
                  console.log("Jogo Finalizado");
                  alert("Jogo Finalizado");
               } 
            }  
      } else{
         if (somaDoComputador === somaDoUsuario){
            console.log("Jogo Empatado");
            alert("Jogo Empatado");
            } else if (somaDoComputador > somaDoUsuario){
               console.log("Computador venceu");
               alert("Computador vencendo");
            } else if (somaDoUsuario > 21){
               console.log("Computador venceu");
               alert("Computador vencendo");
            } else if (somaDoComputador < somaDoUsuario){
               console.log("Você venceu");
               alert("Você venceu");
            }else {
               console.log("Jogo Finalizado");
               alert("Jogo Finalizado");
            } 
      }
      } else{
      if (somaDoComputador === somaDoUsuario){
         console.log("Jogo Empatado");
         alert("Jogo Empatado");
         } else if (somaDoComputador > somaDoUsuario){
            console.log("Computador venceu");
            alert("Computador vencendo");
         } else if (somaDoUsuario > 21){
            console.log("Computador venceu");
            alert("Computador vencendo");
         } else if (somaDoComputador < somaDoUsuario){
            console.log("Você venceu");
            alert("Você venceu");
         }else {
            console.log("Jogo Finalizado");
            alert("Jogo Finalizado");
         } 
      }

   }else{}

   
} else {
         console.log("Jogo Finalizado")
         alert("Jogo Finalizado")
      }
