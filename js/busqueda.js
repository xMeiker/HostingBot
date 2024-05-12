function buscarLugar(event) {
    if (event.keyCode === 13) { // 13 es el código de tecla para "Enter"
        var input = document.getElementById("busqueda");
        var filter = input.value.toUpperCase();
        var lugares = document.getElementsByClassName("lugar");

        for (var i = 0; i < lugares.length; i++) {
            var nombre = lugares[i].getElementsByTagName("h2")[0];
            if (nombre.innerHTML.toUpperCase().indexOf(filter) > -1) {
                lugares[i].style.display = "block";
            } else {
                lugares[i].style.display = "none";
            }
        }
    }
}