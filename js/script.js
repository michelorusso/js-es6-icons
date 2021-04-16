$(document).ready(function() {

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const colors = [
    'blue',
    'orange',
    'purple'
];

// Milestone 1
// Partendo dalla seguente struttura dati , 
// mostriamo in pagina tutte le icone disponibili come da layout.

// Milestone 2
// Coloriamo le icone per tipo

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone


/* 
<div class="icon">
		<i class="fas fa-cat"></i>
	<div>
		nome
	</div>
</div> 
*/

// Milestone 1
// iconsContainer -> salviamo il div icons-container nella variabile
const iconsContainer = $('#icons-container');

printIcons(icons, iconsContainer);

// FUNCTIOS
// printIcons -> funzione di stampa dell'array di oggetti
// 
// iconsArray -> è l'argomento dell'array di oggetti Icons
// container -> è l'argomento collegato all'HTML( iconsContainer )
function printIcons(iconsArray, container) {
	
	// Usiamo il forEach per ciclare l'array di oggetti
	iconsArray.forEach((element) => {

		// con il destructuring su element prendiamo le chiavi che ci servono 
		const {name, prefix, family} = element;

		// iconHtml -> Template Literal per creare il codice che verrà inserito nel container
		const iconHtml = `
		<div class="icon">
			<i class="${family} ${prefix}${name}"></i>
			<div>
				${name.toUpperCase()}
			</div>
		</div> 
		`;

		// stampiamo in HTML tutte le icone usando .append
		container.append(iconHtml);
		
	});
}


});