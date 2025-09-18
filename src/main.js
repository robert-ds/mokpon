
// Solo cuando cargue el Html se carga el script
window.addEventListener('load', () => {

	let botonMascotaJugador = document.getElementById("boton-mascota");

	//  Seleccionamos la Criatura
	botonMascotaJugador.addEventListener('click', () => {

		let inputHipodoge = document.getElementById("Hipodoge");
		let inputCapipepo = document.getElementById("Capipepo");
		let inputRatigueya = document.getElementById("Ratigueya");
		let inputLangostelvis = document.getElementById("Langostelvis");
		let inputTucapalma = document.getElementById("Tucapalma");
		let inputPydos = document.getElementById("Pydos");

		let mascotaJugador = document.getElementById("mascota-jugador");

		if(inputHipodoge.checked){
			alert("Selecionaste: Hipodoge - Agua 💦");
			mascotaJugador.innerHTML = "'Hipodoge', 'Elemento: Agua 💦',";
		}else if(inputCapipepo.checked){
			alert("Selecionaste: Capipepo - Tierra 🌱");
			mascotaJugador.innerHTML = "'Capipepo', 'Elemento: Tierra 🌱',";
		}else if(inputRatigueya.checked){
			alert("Selecionaste: Ratigueya - Fuego 🔥");
			mascotaJugador.innerHTML = "'Ratigueya', 'Elemento: Fuego 🔥',";
		}else if(inputLangostelvis.checked){
			alert("Selecionaste: Langostelvis -  Agua 💦 y Fuego 🔥");
			mascotaJugador.innerHTML = "'Langostelvis', 'Elemento:  Agua 💦 y Fuego 🔥',";
		}else if(inputTucapalma.checked){
			alert("Selecionaste: Tucapalma - Agua 💦 y Tierra 🌱");
			mascotaJugador.innerHTML = "'Tucapalma', 'Elemento: Agua 💦 y Tierra 🌱',";
		}else if(inputPydos.checked){
			alert("Selecionaste: Pydos - Tierra 🌱 y Fuego 🔥");
			mascotaJugador.innerHTML = "'Pydos', 'Elemento: Tierra 🌱 y Fuego 🔥',";
		}else{
			alert("No Seleccionaste una Criatura")
		}
	});

});