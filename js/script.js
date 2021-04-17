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


// Milestone 1
// iconsContainer -> salviamo il div icons-container nella variabile
const iconsContainer = $('#icons-container');
const arrayIconsColor = colorArray(icons, colors);
printIcons(arrayIconsColor, iconsContainer);

// FUNCTIOS
// printIcons -> funzione di stampa dell'array di oggetti
// 
// iconsArray -> è l'argomento dell'array di oggetti arrayIconsColor
// container -> è l'argomento collegato all'HTML( iconsContainer )
function printIcons(iconsArray, container) {
	
	// Usiamo il forEach per ciclare l'array di oggetti
	iconsArray.forEach((element) => {

		// con il destructuring su element prendiamo le chiavi che ci servono 
		const {name, prefix, family, color} = element;

		// iconHtml -> Template Literal per creare il codice che verrà inserito nel container
		const iconHtml = `
		<div class="icon">
			<i class="${family} ${prefix}${name}" style="color: ${color}"></i>
			<div>
				${name.toUpperCase()}
			</div>
		</div> 
		`;

		// stampiamo in HTML tutte le icone usando .append
		container.append(iconHtml);
		
	});
}

// Milestone 2
// Coloriamo le icone per tipo
// colorArray -> funzione che prende l'array orginale e aggiunge il colore in base al tipo di icona
// 
// arrayIconsOriginal -> è l'argomento dell'array di oggetti Icons
// arrayColor -> è l'argomento dell'array di oggetti colors
// 
// return: array di oggetti con colori in base al type di icona
function colorArray(arrayIconsOriginal, arrayColor) {

	// typeIcon -> array di stringhe con i tipi di icone
	const typeIcon = arrayIconsType(arrayIconsOriginal);
	
	// newArrayColor -> nuovo array contenete il colore in base al tipo di icona
	// per creare un nuovo arrai uso .map
	const newArrayColor = arrayIconsOriginal.map((element) => {
		
		// newArray -> lavorando su element modifico l'array originale, quindi creo un "clone"
		const newArray = {
			...element
		}

		// iconsTypeIndex -> salviamo l'indice in base al typo di icona...
		const iconsTypeIndex = typeIcon.indexOf(newArray.type);
		// console.log(iconsTypeIndex);

		// ... nel nuovo array verrà inserito il colore in base all'indice
		if( iconsTypeIndex != -1 ) {
			newArray.color = arrayColor[iconsTypeIndex];
		}
		
		return newArray;
	});

	return newArrayColor;
}

// arrayIconsType -> funzione che crea un artray di stringhe contenente solamente i tipi di icone senza duplicati
// 
// arrayIconsOriginal -> è l'argomento dell'array di oggetti Icons
// 
// return : arrayTypeIcons che è l'array di stringhe contenente solamente il type di icone
function arrayIconsType(arrayIconsOriginal) {

	// arrayTypeIcons -> array vuoto che verrà popolato dai tipi di icone
	const arrayTypeIcons= [];
	
	// Usiamo il forEach per ciclare l'array di oggetti
	arrayIconsOriginal.forEach((element) => {
		
		let typeIconObject = element.type;
		
		// se type non è incluso nell'arrayTypeIcons allora lo pushamo dentro, in questo modo evitiamo i duplicati
		if( !arrayTypeIcons.includes(typeIconObject)) {
			arrayTypeIcons.push(typeIconObject);
		}

	});
	
	return arrayTypeIcons;
}


});