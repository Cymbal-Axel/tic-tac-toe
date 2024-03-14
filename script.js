const jugador1 = "O"
const jugador2 = "X"
var turno = jugador1
const casillas = document.querySelectorAll(".cell");


const combinacionesGanadoras = [
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
]



const cambiarTurno = () => {
  if (turno == jugador1) {
    turno = jugador2
  } else {
    turno = jugador1
  }
}


const obtenerValorActualDeTablero = (turno) => {
  // interactuar con el html
  // transformar lo de arriba a [numero, numero, numero]
  let casillasDeJugador = []

  casillas.forEach(casilla => {
    if (casilla.value == turno) {
      casillasDeJugador.push(parseInt(casilla.id))
    }

  })

  // return resultado
  return casillasDeJugador
}

const limpiarTablero = () => {

	casillas.forEach(casilla => {
		casilla.value = "";
		casilla.innerHTML = "";
		casilla.disponible = true;
	})
}


const actualizarCasilla = (casilla, valor) => {

  casilla.value = valor
  casilla.innerHTML = valor
  casilla.disponible = false

}


const checkearSiHayGanador = (casillasDelJugador) => {
  // ej: casillasDelJugador[4,7,1,3]
  // ver si alguna de las combinaciones ganadoras se da en casillas del jugador
  let hayGanador = false
  combinacionesGanadoras.forEach(combinacion => {
    if (
      casillasDelJugador.includes(combinacion[0]) &&
      casillasDelJugador.includes(combinacion[1]) &&
      casillasDelJugador.includes(combinacion[2])
    ) {

      hayGanador = true
      return // es como un break pero para el forEach
    };

  })
  console.log(hayGanador)
  return hayGanador
}



const ejecutarTurno = (elemento) => {
  if (elemento.disponible !== false) {
    actualizarCasilla(elemento, turno)
    const casillasDelJugador = obtenerValorActualDeTablero(turno)
    const hayGanador = checkearSiHayGanador(casillasDelJugador)

    // if(hayGanador == true){
    //   alert(`gano el jugador ${turno}`)
    // }

    cambiarTurno()
  }
}