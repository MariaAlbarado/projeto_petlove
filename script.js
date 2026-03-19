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
        nome: document.getElementById("nome").value,
        telefone: document.getElementById("telefone").value,
        tipoMoradia: document.getElementById("tipoMoradia").value,
        condicaoImovel: document.getElementById("condicaoImovel").value,
        numeroPessoas: document.getElementById("numeroPessoas").value,
        motivo: document.getElementById("motivo").value,
        termos: document.getElementById("termos").checked
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
        alert("Formulário enviado com sucesso!");
        document.getElementById("formAdocao").reset();
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao enviar.");
    });
});

