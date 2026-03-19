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



    
   document.getElementById("formAdocao").addEventListener("submit", function(e) {
    e.preventDefault(); 

    const dados = {
        nomeCompleto: document.getElementById("nome").value,
        telefone: document.getElementById("telefone").value,
        tipoMoradia: document.getElementById("tipoMoradia").value,
        condicaoImovel: document.getElementById("condicaoImovel").value,
        numeroResidentes: parseInt(document.getElementById("numero").value),
        motivoAdocao: document.getElementById("motivo").value
    };

    fetch("/api/adoptions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
        alert("Solicitação enviada com sucesso!");
        console.log(data);
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao enviar!");
    });
});
