/** assets/main.js */

/**
 * Étape 1 - Récuperer les éléments du DOM concernant les champs du formulaire.
 * Étape 2 - Une fois les éléments du DOM récuperer, vous pouvez faire un console.log() qui indique que le message est bien envoyé. (ou une alerte, au choix).
 * Étape 3 - Si un champ du formulaire n'est pas rempli, alors vous devez indiquer à l'utiliseur que ce champ est requis (Ne pas utiliser l'attribut `required` de l'HTML5)
 *
 * 👨‍🏫 petit conseil !
 * Créer une balise dédiée aux erreurs dans votre HTML (dans notre cas, champ vide + email)
 *
 * 👨‍💻 Autre conseil !
 *
 * Concernant la verification des erreurs, il n'y a pas 1 solution qui les gouvernes tous.
 * Moi je vous conseil de créer des function dédiées.
 *
 * Par exemple, une `function errors()`, une `function isEmpty()`, une `function checkForm()`
 * Une boucle for, un switch case. etc.
 *
 * C'est à vous de déterminer si oui ou non il faut des paramètres 😘
 *
 * Quoi qu'il arrive, je reste disponible 🥰
 *
 *   Nous n'avons pas vu les regex, c'est quoi les regex ?
 *  Justement, dès que vous en êtes la, je vous explique (vite fait parce que je suis pas très bon la dedans) ce que c'est et comment ça marche !
 *
 * 🚀
 * 🚀🚀
 * 🚀🚀🚀
 *
 *  Et c'est partiiiiiiiiiiiiiiiiiiiiii
 *
 * 🚀🚀🚀
 * 🚀🚀
 * 🚀
 *
 *
 */

/* les données quon doi recuperer pour le formulaire */
const INPUTS = document.querySelectorAll("input");
const FORM = document.querySelector("form");
const errorResponse = document.querySelectorAll(".error-response");

/* le fonction regex doit verifier la conformité de l'email  */
const regex = (/^([a-zA-Z][\w\.-]*[a-zA-Z0-9])@([a-zA-Z][\w\.-]*[a-zA-Z0-9])\.([a-zA-Z]{2,})$/);

/* ici ma fonction error qui recupere mes differentes parties de mon FORMULAIRE */

function error(propertie, id) {


	switch (propertie) {
		case "firstname":
			firstname.classList.add("error");
			errorResponse[id].innerHTML = "First Name cannot be empty";
			break;
		case "lastname":
			lastname.classList.add("error");
			errorResponse[id].innerHTML = "Last Name cannot be empty";
			break;
		case "email":
			email.classList.add("error");
			errorResponse[id].innerHTML = "Looks loke this is not an email";
			break;
		case "password":
			password.classList.add("error");
			errorResponse[id].innerHTML = "Password cannot be empty";
			break;
		default:
			console.log(`Sorry we are out of ${propertie}`);
	}
}

/** Function isEmpty is boolean if empty return false else true*/
function isEmpty(id, value) {
	if (value !== "") {
		/** If value different of empty i test id === email and check my regex */
		if (id === "email") {
			return regex.test(value);
		}
		return true;
	} else {
		return false;
	}
}

/** I call the function from the index.html */
FORM.addEventListener("submit", (e) => {
	/** allows not to refresh the page */
	e.preventDefault();

	/** a for loop to test each entry in the form */
	for (let index = 0; index < INPUTS.length; index++) {
		if (!isEmpty(INPUTS[index].name, INPUTS[index].value)) {
			error(INPUTS[index].name, index);
		} else {
			INPUTS[index].classList.remove("error");
			if (errorResponse[index] !== undefined) {
				errorResponse[index].innerHTML = "";
			}
		}
	}
});


