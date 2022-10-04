alert("Bienvenido a Ruta Jardín! Por favor iniciá sesión.");
for (let conteo = 1; conteo <= 3; conteo++) {
    let user = prompt("Igresá tu usuario (Tutor123)");
    let password = prompt("Ingresá tu contraseña (Alagrandelepusecuca)");
    if ((user == "Tutor123") && (password == "Alagrandelepusecuca")) {
        alert("Bienvenido al Ruta Jardín " + user + "!!!")
        break;
    } else {
        alert("Usuario y/o contraseña incorrecta, volvé a intentar. Te quedan " + (3-conteo) + " intentos");
    }
    if (3-conteo==0){
        alert("Ponete en contacto con el administrador. Tu cuenta ha sido bloqueada");
    }
}

let bebidas = parseInt(prompt ("Ingresá la cantidad de bebidas que vas a querer ordenar"));
let comidas = parseInt(prompt ("Ingresá la cantidad de comidas que vas a querer ordenar"));

function sumar (){
    let resultado = bebidas + comidas;
    alert("El total de bebidas más comidas es = "+resultado);
}

sumar();