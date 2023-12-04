if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(function (registration) {
      console.log("Service Worker registrado com sucesso:", registration);
    })
    .catch(function (err) {
      console.log("Falha ao registrar o Service Worker:", err);
    });
}


document.addEventListener('DOMContentLoaded', function () {
  var imagemClicavel = document.getElementById('home');

  imagemClicavel.addEventListener('click', function () {
    window.location.href = '/';
  });
});