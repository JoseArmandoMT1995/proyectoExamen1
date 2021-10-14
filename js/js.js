$(document).ready(function () {
    var boton;
    $(".nav-hamburguesa").hide();
    $( ".boton-hamburguesa" ).click(function() {
        var proporcion = "(max-width: 767px)";
        var mediaQuery = window.matchMedia(proporcion)
        mediaQuery = mediaQuery.matches;
        if (mediaQuery === false) {
            $(".nav-hamburguesa").hide();
            $(".hamburguesa").hide();
            $("#hamburguesa").hide();
        }
        if (mediaQuery === true) {
            $("#hamburguesa").show();
            $(".nav-hamburguesa").show();
        }
    });
    $( ".botonH" ).click(function() {
        $(".nav-hamburguesa").hide();
    });
    
});