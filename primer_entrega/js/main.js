/*
==================================================
SKYNET COMPANY
Primer entregable de Javascript.==================================================
*/

// ================================================
// 1. INICIO DEL PROGRAMA
// ================================================

document.querySelector(".botonAlerta").addEventListener("click", function () {

    // --------------------------------------------
    // Saludo inicial
    // --------------------------------------------

    alert(
        "BUENOS DIAS\n\n" +
        "BIENVENIDO A SKYNET COMPANY 👋\n" +
        "Soy T-1000 el asistente virtual de la empresa."
    );

    // ============================================
    // 2. DATOS DEL USUARIO
    // ============================================

    const nombre = prompt(
        "¿Cómo te llamás?"
    );

    const john = prompt(
        "Hola " + nombre + " 👋\n\n" +
        "¿Lo conocés a John Connor?"
    );

    // ============================================
    // 3. FECHA DE NACIMIENTO
    // ============================================

    const anoNacimiento = parseInt(
        prompt("¿En qué año naciste?\n\n")
    );

    const mesNacimiento = parseInt(
        prompt("¿En qué mes naciste? (1-12)\n\n")
    );

    const diaNacimiento = parseInt(
        prompt("¿En qué día naciste?\n\n")
    );

    // ============================================
    // 4. FECHA ACTUAL
    // ============================================

    const hoy = new Date();

    const anoActual = hoy.getFullYear();
    const mesActual = hoy.getMonth() + 1;
    const diaActual = hoy.getDate();

    // ============================================
    // 5. CÁLCULO DE EDAD
    // ============================================

    let edad = anoActual - anoNacimiento;

    // Si todavía no cumplió años este año,
    // restamos un año a la edad.

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

    if (john.toLowerCase() === "si") {
        terrorista = true;
    }

    // ============================================
    // 7. PREPARAR MENSAJE FINAL
    // ============================================

    let mensajeJohn = "";

    if (terrorista === true) {

        mensajeJohn =
            "¡CUIDADO! John Connor es un terrorista \n" + "y eso te hace complice de sus actos. \n" +
            "¡Debes decirnos su ubicación!";

    } else {

        mensajeJohn =
            "Cualquier dato de John Connor que nos \n" +
            "proporciones nos ayudará a crear un mundo mejor.";
    }

    // ============================================
    // 8. RESULTADO FINAL
    // ============================================

    alert(
        "Hola " + nombre + " 👋\n\n" +
        "Tu edad es: " + edad + " años.\n\n" +
        mensajeJohn
    );

});
