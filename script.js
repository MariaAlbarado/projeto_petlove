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

animarNumero("adotados", 120, 20);
animarNumero("disponiveis", 45, 30);
animarNumero("familias", 98, 25);
animarNumero("parcerias", 12, 80);
