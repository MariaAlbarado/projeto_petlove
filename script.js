function animarNumero(id, valorFinal, tempo) {
  var numero = 0;
  var intervalo = setInterval(function () {
    numero++;

    document.getElementById(id).innerText = numero;

    if (numero >= valorFinal) {
      clearInterval(intervalo);
    }
  }, tempo);
}

fetch("http://localhost:3000/api/info")
.then(function(resposta){
    return resposta.json();
})
.then(function (dados){

    animarNumero("adotados",
        dados.adotados,20);
    animarNumero("disponiveis",
        dados.disponiveis,30);
        animarNumero("familias",
        dados.familias_felizes,25);
        animarNumero("parcerias",
            dados.parceiros,80);

        })
    .catch(function (erro){
        console.log("Erro ao buscar API:",
            erro);
    });

   
