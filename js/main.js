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

    const john = prompt(
        "Hola " + nombre + " \n" +
        "¿Lo conocés a John Connor? (si/no)"
    );

    // ============================================
    // 3. FECHA DE NACIMIENTO
    // ============================================

    const anoNacimiento = parseInt(
        prompt("¿En qué año naciste? \n")
    );

    const mesNacimiento = parseInt(
        prompt("¿En qué mes naciste? (1-12) \n")
    );

    const diaNacimiento = parseInt(
        prompt("¿En qué día naciste?\n")
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

    if (john.toLowerCase() === "si") {
        terrorista = true;
    }

    // ============================================
    // 7. PREPARAR MENSAJE FINAL
    // ============================================

    let mensajeJohn = "";

    if (terrorista === true) {

        mensajeJohn =
            "¡CUIDADO! John Connor es un terrorista\n" +
            "y eso te hace cómplice de sus actos.\n" +
            "¡Debes decirnos su ubicación!";

    } else {

        mensajeJohn =
            "Cualquier dato de John Connor que nos\n" +
            "proporciones nos ayudará a crear un mundo mejor.";
    }

    // ============================================
    // 8. RESULTADO FINAL
    // ============================================

    alert(
        "Hola " + nombre \n\n" +
        "Tu edad es: " + edad + " años. \n" +
        mensajeJohn
    
    );
}

// ================================================
// 9. BOTÓN
// ================================================

const botonAlerta = document.querySelector(".botonAlerta");

botonAlerta.addEventListener("click", iniciarPrograma);
