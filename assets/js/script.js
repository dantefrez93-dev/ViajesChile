/* ==============================
   Script principal
   Proyecto: Viajes Chile
   ============================== */

$(document).ready(function () {
  /* Activar tooltips de Bootstrap */
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

  [...tooltipTriggerList].forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });

  /* Smooth scroll con jQuery */
  $("a.nav-link, .navbar-brand").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 70,
        },
        800
      );
    }
  });

  /* Cerrar menú móvil al hacer clic en un enlace */
  $(".navbar-nav .nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  /* Cambiar color del navbar al hacer scroll */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
  });

  /* Alerta simple al enviar el formulario */
  $("form").submit(function (event) {
    event.preventDefault();
    alert("Mensaje enviado correctamente. ¡Gracias por contactarnos!");
    this.reset();
  });
  // Ajuste final JavaScript
});