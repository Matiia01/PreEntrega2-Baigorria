// Defini los cursos disponibles como objetos constantes
const cursosDisponibles = [
    { nombre: "rcp", costo: 100 },
    { nombre: "primeros auxilios", costo: 80 },
    { nombre: "maniobras de hemblich", costo: 120 },
    { nombre: "incendio de cocina", costo: 90 },
    { nombre: "monoxido de carbono", costo: 110 }
]

function costoTotalCursos(cursosDisponibles) {
    // Se obtiene la cantidad de cursos que desea adquirir el usuario
    const cantidadCursos = parseInt(prompt("Ingrese la cantidad de cursos que desea adquirir:"))
    const cursosSeleccionados = []

    // Se le solicita al usuario los nombres de los cursos que desea adquirir
    for (let i = 0; i < cantidadCursos; i++) {
        const nombreCurso = prompt("Ingrese el nombre del curso:  RCP  -  Primeros Auxilios  -  Maniobras de Hemblich  -  Incendio de Cocina  -  Monoxido de Carbono.")
        const nombreCursoMin = nombreCurso.toLocaleLowerCase()
        cursosSeleccionados.push(nombreCursoMin)
    }

    // Se calcula el costo total de los cursos seleccionados
    let costoTotal = 0;

    for (let i = 0; i < cursosSeleccionados.length; i++) {
        const nombreCurso = cursosSeleccionados[i]

        // Se busca el curso en la lista de cursos disponibles
        const cursoEncontrado = cursosDisponibles.find(curso => curso.nombre === nombreCurso)

        // Si se encuentra el curso, se suma su costo al costo total
        if (cursoEncontrado) {
            costoTotal += cursoEncontrado.costo
        } else {
            //si no se encuentra el curso, se mostrara el cartel corresponiente a que no esta en disponible.
            alert("El curso " + nombreCurso + " no está disponible.")
        }
    }
    return costoTotal
}

// Se muestra el costo total de los cursos adquiridos
alert("El costo total de los cursos adquiridos es de: $" + costoTotalCursos(cursosDisponibles))