
// Solo cuando cargue el Html se carga el script
window.addEventListener('load', () => {

	// Almacena el tipo de ataque
	let ataqueJugador;

	// Función para generar un numero aleatorio del 1 al 6
	const aleatorio = (min, max) => {
		return Math.floor(Math.random() * (max - min + (1)) + min);
	};

	// Selecciona de manera aletoria una Criatura Enemiga
	const seleccionarMascotaEnemigo = () => {
		let ataqueAleatorio = aleatorio(1,6);

		let mascotaEnemigo = document.getElementById("mascota-enemigo");

		if(ataqueAleatorio == 1) {
			mascotaEnemigo.innerHTML = "'Hipodoge', 'Elemento: Agua 💦',";
		}else if(ataqueAleatorio == 2) {
			mascotaEnemigo.innerHTML = "'Capipepo', 'Elemento: Tierra 🌱',";
		}else if(ataqueAleatorio == 3) {
			mascotaEnemigo.innerHTML = "'Ratigueya', 'Elemento: Fuego 🔥',";
		}else if(ataqueAleatorio == 4) {
			mascotaEnemigo.innerHTML = "'Langostelvis', 'Elemento:  Agua 💦 y Fuego 🔥',";
		}else if(ataqueAleatorio == 5) {
			mascotaEnemigo.innerHTML = "'Tucapalma', 'Elemento: Agua 💦 y Tierra 🌱',";
		}else if(ataqueAleatorio == 6){
			mascotaEnemigo.innerHTML = "'Pydos', 'Elemento: Tierra 🌱 y Fuego 🔥',";
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
		}else if(inputLangostelvis.checked){
			mascotaJugador.innerHTML = "'Langostelvis', 'Elemento:  Agua 💦 y Fuego 🔥',";
		}else if(inputTucapalma.checked){
			mascotaJugador.innerHTML = "'Tucapalma', 'Elemento: Agua 💦 y Tierra 🌱',";
		}else if(inputPydos.checked){
			mascotaJugador.innerHTML = "'Pydos', 'Elemento: Tierra 🌱 y Fuego 🔥',";
		}else{
			alert("No Seleccionaste una Criatura")
		}

		// Despues que el jugador selecciona una criatura, se selecciona de forma aleatoria una enemiga
		seleccionarMascotaEnemigo();

	});


	// Creamos la ĺogica para los botones de ataque
	let botonFuego = document.getElementById("boton-fuego");
	botonFuego.addEventListener("click", () => {
		ataqueJugador = "Fuego"
		alert(ataqueJugador);
	});

	let botonAgua = document.getElementById("boton-agua");
	botonAgua.addEventListener("click", () => {
		ataqueJugador = "Agua"
		alert(ataqueJugador);
	});

	let botonTierra = document.getElementById("boton-tierra");
	botonTierra.addEventListener("click", () => {
		ataqueJugador = "Tierra"
		alert(ataqueJugador);
	});

	


});