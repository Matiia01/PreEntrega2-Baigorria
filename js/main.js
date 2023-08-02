// Definición de cursos disponibles
const cursosDisponibles = [
    { id: 1, nombre: "RCP-DEA", precio: 1500 },
    { id: 2, nombre: "Primeros Auxilios", precio: 2500 },
    { id: 3, nombre: "maniobras de Hemblich", precio: 1000 },
    { id: 4, nombre: "incendios de cocina", precio: 2000 },
    { id: 5, nombre: "Monoxido de Carbono", precio: 2000 },
]

// Función para mostrar la lista de cursos disponibles
function mostrarCursos() {
    console.log('Cursos disponibles:')
    cursosDisponibles.forEach((curso) => {
        console.log(`${curso.id}. ${curso.nombre} - Precio: $${curso.precio}`)
    })
}

// Función para buscar un curso por su ID
function buscarCursoPorId(id) {
    return cursosDisponibles.find((curso) => curso.id === id)
}

// Función para filtrar los cursos por un rango de precios
function filtrarCursosPorPrecio(minPrecio, maxPrecio) {
    return cursosDisponibles.filter((curso) => curso.precio >= minPrecio && curso.precio <= maxPrecio)
}

// Función para simular la compra de un curso
function comprarCurso(curso) {
    console.log(`¡Felicidades! Has comprado el curso "${curso.nombre}" por $${curso.precio}.`)
}

// Función principal
function main() {
    console.log('¡Bienvenido/a a nuestra plataforma de cursos!')

    // Muestra la lista de cursos disponibles
    mostrarCursos();
    // Solicita al usuario que ingrese el ID del curso que desea comprar
    const cursoId = parseInt(prompt('Ingresa el ID del curso que deseas comprar:'))

    // Busca el curso por su ID
    const cursoSeleccionado = buscarCursoPorId(cursoId)

    if (cursoSeleccionado) {
        // Muestra la información del curso seleccionado
        console.log(`Has seleccionado el curso "${cursoSeleccionado.nombre}" - Precio: $${cursoSeleccionado.precio}`)

        // Pregunta al usuario si desea continuar con la compra
        const confirmacion = prompt('¿Deseas comprar este curso? (Responde "S" para sí, "N" para no)').toUpperCase()

        if (confirmacion === 'S') {
            // Compra el curso
            comprarCurso(cursoSeleccionado)
        } else {
            console.log('Gracias por tu visita. ¡Vuelve pronto!')
        }
    } else {
        console.log('El curso seleccionado no está disponible.')
    }
}

// Ejecuta el programa
main()