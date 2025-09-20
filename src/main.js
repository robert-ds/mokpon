
// Solo cuando cargue el Html se carga el script
window.addEventListener('load', () => {

	// Almacena el tipo de ataque del jugador
	let ataqueJugador;

	// Almacena el tipo de ataque enemigo
	let ataqueEnemigo;

	// Resultado del Combate
	let resultadoCombate;

	// Vidas de jugador y Enemigo
	let vidasJugador = 3;
	let vidasEnemigo = 3;

	// Resultado Final del Juego
	let resultadoFinal;

	// Función para generar un numero aleatorio del 1 al 6
	const aleatorio = (min, max) => {
		return Math.floor(Math.random() * (max - min + (1)) + min);
	};

	// Selecciona de manera aletoria una Criatura Enemiga
	const seleccionarMascotaEnemigo = () => {
		let mascotaAleatoria = aleatorio(1,3);

		let mascotaEnemigo = document.getElementById("mascota-enemigo");

		if(mascotaAleatoria == 1) {
			mascotaEnemigo.innerHTML = "'Hipodoge', 'Elemento: Agua 💦',";
		}else if(mascotaAleatoria == 2) {
			mascotaEnemigo.innerHTML = "'Capipepo', 'Elemento: Tierra 🌱',";
		}else if(mascotaAleatoria == 3) {
			mascotaEnemigo.innerHTML = "'Ratigueya', 'Elemento: Fuego 🔥',";
		}
	};

	// Obtenemos el boton selecionar
	let botonMascotaJugador = document.getElementById("boton-mascota");

	//  Seleccionamos la Criatura para el jugador
	botonMascotaJugador.addEventListener('click', () => {

		let inputHipodoge = document.getElementById("Hipodoge");
		let inputCapipepo = document.getElementById("Capipepo");
		let inputRatigueya = document.getElementById("Ratigueya");
		let inputLangostelvis = document.getElementById("Langostelvis");
		let inputTucapalma = document.getElementById("Tucapalma");
		let inputPydos = document.getElementById("Pydos");

		let mascotaJugador = document.getElementById("mascota-jugador");

		// Validación de criatura selecionada
		if(inputHipodoge.checked){
			mascotaJugador.innerHTML = "'Hipodoge', 'Elemento: Agua 💦',";
		}else if(inputCapipepo.checked){
			mascotaJugador.innerHTML = "'Capipepo', 'Elemento: Tierra 🌱',";
		}else if(inputRatigueya.checked){
			mascotaJugador.innerHTML = "'Ratigueya', 'Elemento: Fuego 🔥',";
		}else{
			alert("No Seleccionaste una Criatura")
		}

		// Despues que el jugador selecciona una criatura, se selecciona de forma aleatoria una enemiga
		seleccionarMascotaEnemigo();

		let botonReiniciar = document.getElementById("boton-reiniciar");
		botonReiniciar.addEventListener('click', reiniciarJuego);

	});


	// Creamos la ĺogica para los botones de ataque
	let botonFuego = document.getElementById("boton-fuego");
	botonFuego.addEventListener("click", () => {
		ataqueJugador = "Fuego"
		ataqueAleatorioEnemigo();
	});

	let botonAgua = document.getElementById("boton-agua");
	botonAgua.addEventListener("click", () => {
		ataqueJugador = "Agua"
		ataqueAleatorioEnemigo();
	});

	let botonTierra = document.getElementById("boton-tierra");
	botonTierra.addEventListener("click", () => {
		ataqueJugador = "Tierra"
		ataqueAleatorioEnemigo();
	});


	// Creamos la lógica para el ataque del jugador enemigo
	const ataqueAleatorioEnemigo = () => {
		let ataqueAleatorio = aleatorio(1,3);
		
		if (ataqueAleatorio == 1) {
			ataqueEnemigo = "Fuego";
		}else if (ataqueAleatorio == 2) {
			ataqueEnemigo == "Agua";
		}else if (ataqueAleatorio == 3) {
			ataqueEnemigo = "Tierra";
		}

		combate();

	}

		// Crear mensajes
		const crearMensaje = (resultadoCombate) => {
			let seccionMensaje = document.getElementById('mensajes');
			let parrafo = document.createElement('p');

			parrafo.innerHTML = "Tu mascota Ataco con "+ ataqueJugador + ", la mascota del enemigo ataco con " + ataqueEnemigo + " - " + resultadoCombate;

			seccionMensaje.appendChild(parrafo);

		}

		// Crear mensaje final
		const crearMensajeFinal = (resultadoFinal) => {
			let seccionMensaje = document.getElementById('mensajes');
			let parrafo = document.createElement('p');

			parrafo.innerHTML = resultadoFinal;

			seccionMensaje.appendChild(parrafo);

		}

		// Logica de combate
		const combate = () => {

			let spanVidasJugador = document.getElementById("vidas-jugador");
			let spanVidasEnemigo = document.getElementById("vidas-enemigo");

			if (ataqueEnemigo == ataqueJugador) {
				crearMensaje("Empate");
			}else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") {
				crearMensaje("Ganaste");
				vidasEnemigo--;
				spanVidasEnemigo.innerHTML = vidasEnemigo;
			}else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua") {
				crearMensaje("Ganaste");
				vidasEnemigo--;
				spanVidasEnemigo.innerHTML = vidasEnemigo;
			}else if (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") {
				crearMensaje("Ganaste");
				vidasEnemigo--;
				spanVidasEnemigo.innerHTML = vidasEnemigo;
			}else {
				crearMensaje("Perdiste");
				vidasJugador--;
				spanVidasJugador.innerHTML = vidasJugador;
			}

			revisarVidas();

	}

	const revisarVidas = () => {
		if (vidasEnemigo == 0) {
			crearMensajeFinal("Felicitaciones 🥳🥳🥳 Ganaste los Combates");

			let botonFuego = document.getElementById("boton-fuego");
			botonFuego.disabled = true;

			let botonAgua = document.getElementById("boton-agua");
			botonAgua.disabled = true;

			let botonTierra = document.getElementById("boton-tierra");
			botonTierra.disabled = true;

		}else if (vidasJugador == 0) {
			crearMensajeFinal("Que Mal Perdiste 😡😡😡");

			let botonFuego = document.getElementById("boton-fuego");
			botonFuego.disabled = true;

			let botonAgua = document.getElementById("boton-agua");
			botonAgua.disabled = true;

			let botonTierra = document.getElementById("boton-tierra");
			botonTierra.disabled = true;
			
		}
	}

	const reiniciarJuego = () => {
		location.reload();
	}

	
});