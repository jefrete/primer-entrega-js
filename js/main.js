/*
==================================================
SKYNET COMPANY
Primer entregable de JavaScript
==================================================
*/

// ================================================
// 1. PROGRAMA
// ================================================

function iniciarPrograma() {
    // --------------------------------------------
    // Saludo inicial
    // --------------------------------------------

    alert(
        "BUENOS DIAS\n" +
        "BIENVENIDO A SKYNET COMPANY \n" +
        "Soy T-1000 el asistente virtual de la empresa."
    );

    // ============================================
    // 2. DATOS DEL USUARIO
    // ============================================

    const nombre = prompt(
        "¿Cómo te llamás?"
    );

    const apellido = prompt(
        "Hola " + nombre + "\n" +
        "¿Cuál es tu apellido?"
    );

    const respuestaJohn = (prompt(
        "¿Lo conoces a John Connor? Responde SI o NO"
    )).toLowerCase();

    // ============================================
    // 3. FECHA DE NACIMIENTO
    // ============================================

    const anoNacimiento = parseInt(
        prompt("¿En qué año naciste?")
    );

    const mesNacimiento = parseInt(
        prompt("¿En qué mes naciste? (1-12)")
    );

    const diaNacimiento = parseInt(
        prompt("¿En qué día naciste?")
    );

    // ============================================
    // 4. FECHA ACTUAL
    // ============================================

    const hoy = new Date();

    const anoActual = hoy.getFullYear();
    const mesActual = hoy.getMonth() + 1;
    const diaActual = hoy.getDate();

    console.log("Fecha actual: " + diaActual + "/" + mesActual + "/" + anoActual);

    // ============================================
    // 5. CÁLCULO DE EDAD
    // ============================================

    let edad = anoActual - anoNacimiento;

    if (
        mesNacimiento > mesActual ||
        (mesNacimiento === mesActual && diaNacimiento > diaActual)
    ) {
        edad = edad - 1;
    }

    // ============================================
    // 6. ANALIZAR RESPUESTA SOBRE JOHN CONNOR
    // ============================================

    let terrorista = false;

    if (respuestaJohn === "si") {
        terrorista = true;
    }

    let mensajeJohn = "";

    if (terrorista === true) {

        mensajeJohn =
            "¡CUIDADO! John Connor es un terrorista\n" +
            "y eso te hace cómplice de sus actos.\n" +
            "¡Debes decirnos su ubicación!";

    } else {

        mensajeJohn =
            "Cualquier dato de John Connor que nos\n" +
            "proporciones, nos ayudará a crear un mundo mejor.";
    }

    // ============================================
    // 7. RESULTADO FINAL
    // ============================================

    alert(
        "Hola " + nombre + " " + apellido + ". \n" +
        "Tu edad es: " + edad + " años. \n" +
        mensajeJohn
    );
}

// ================================================
// 9. BOTÓN
// ================================================

const botonAlerta = document.querySelector(".botonAlerta");

botonAlerta.addEventListener("click", iniciarPrograma);
