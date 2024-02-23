function curri(CVName)
{
	let nodo = document.getElementById("cv");
	nodo.setAttribute("class", "cv1 disp");
	console.log(nodo);
	if (CVName == "kevin")
	{
		let element = document.getElementById("cv")
		let div = document.createElement("div")
		let h2 = document.createElement("h2");
		let h3 = document.createElement("h3");
		let p = document.createElement("p");
		let text = document.createTextNode("Kevin Luna Botey");
		let img = document.createElement("img");
		let divExperiencia = document.createElement("div");

		// primera parte
		div.setAttribute("class", "cvKevin");
		img.setAttribute("src", "https://cdn.intra.42.fr/users/a152c1f2c53f556709fe86cb23f7cdf4/kluna-bo.png");
		img.setAttribute("class", "imgKevin");
		div.appendChild(img)
		h2.appendChild(text);
		h3.setAttribute("class", "cont_h3");
		div.appendChild(h2);
		text = document.createTextNode("Programador SENIOR");
		h3.appendChild(text);
		div.appendChild(h3);

		// segunda parte
		// experiencia 1
		divExperiencia.setAttribute("class", "cvKevinExperiencia");
		text = document.createTextNode("Técnico en farmacia")
		h3 = document.createElement("h3");
		h3.appendChild(text);
		divExperiencia.appendChild(h3);
		text = document.createTextNode("2016 - actualidad")
		p = document.createElement("p");
		p.appendChild(text);
		divExperiencia.appendChild(p);
		text = document.createTextNode("Trabajo en farmacia coliseum desde hace 10 años realizando tareas de gestión de equipo, SEO y mejoras en su página web")
		p = document.createElement("p");
		p.appendChild(text);
		divExperiencia.appendChild(p);
		// experiencia 2
		divExperiencia.setAttribute("class", "cvKevinExperiencia");
		text = document.createTextNode("Habilidades técnicas")
		h3 = document.createElement("h3");
		h3.appendChild(text);
		divExperiencia.appendChild(h3);
		// imagenes
		img = document.createElement("img");
		img.setAttribute("src", "https://cdn-icons-png.flaticon.com/128/1051/1051277.png");
		img.setAttribute("class", "icono_hab");
		divExperiencia.appendChild(img);
		img = document.createElement("img");
		img.setAttribute("src", "https://cdn-icons-png.flaticon.com/128/732/732190.png");
		img.setAttribute("class", "icono_hab");
		divExperiencia.appendChild(img);
		img = document.createElement("img");
		img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png");
		img.setAttribute("class", "icono_hab");
		divExperiencia.appendChild(img);
		img = document.createElement("img");
		img.setAttribute("src", "https://cdn-icons-png.flaticon.com/128/5968/5968292.png");
		img.setAttribute("class", "icono_hab");
		divExperiencia.appendChild(img);

		//soft skills
		text = document.createTextNode("Soft Skills")
		h3 = document.createElement("h3");
		h3.appendChild(text);
		//skill 1
		divExperiencia.appendChild(h3);
		text = document.createTextNode("*Gestion de la frustración")
		p = document.createElement("p");
		p.appendChild(text);
		divExperiencia.appendChild(p);
		text = document.createTextNode("Gracias a estudiar en 42 Barcelona he adquirido la capacidad de gestinar correctamente la frustración. Esto es gracias a su metodología de estudio.")
		p = document.createElement("p");
		p.appendChild(text);
		divExperiencia.appendChild(p);
		//skill 2
		text = document.createTextNode("*Capacidades comunicativas")
		p = document.createElement("p");
		p.appendChild(text);
		divExperiencia.appendChild(p);
		text = document.createTextNode("Tras 10 años trabajando de cara al publico he aprendido a gestionar conversaciones de todo tipo, desde las  más formales hasta la resolución de incidencias con los clientes.")
		p = document.createElement("p");
		p.appendChild(text);
		divExperiencia.appendChild(p);
		//skill 3
		text = document.createTextNode("*Rápido aprendizaje")
		p = document.createElement("p");
		p.appendChild(text);
		divExperiencia.appendChild(p);
		text = document.createTextNode("Llevo muchos años estudiando y aquiriendo diversos conocimientos anto teóricos cómo pràcticos que me han permitido adquirir un aprendizaje àgil.")
		p = document.createElement("p");
		p.appendChild(text);
		divExperiencia.appendChild(p);
		
		// contacto
		divExperiencia.setAttribute("class", "cvKevincontacto");
		text = document.createTextNode("Contáctame")
		h3 = document.createElement("h3");
		h3.appendChild(text);
		divExperiencia.appendChild(h3);
		text = document.createTextNode("telf")
		p = document.createElement("p");
		p.appendChild(text);
		divExperiencia.appendChild(p);
		text = document.createTextNode("email")
		p = document.createElement("p");
		p.appendChild(text);
		divExperiencia.appendChild(p);
		
		// llevado el divExperiencia al dom
		div.appendChild(divExperiencia);
		element.appendChild(div);
	}
	else
	{

	}
}