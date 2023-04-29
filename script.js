var numero = document.getElementById("numero").value;
var mensagem = document.getElementById("mensagem").value;

function enviarMensagem() {
  var url = "https://web.whatsapp.com/send?phone=" + numero + "&text=" + encodeURIComponent(mensagem);
  window.open(url);
}

var form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(event) {
  event.preventDefault();
  enviarMensagem();
});