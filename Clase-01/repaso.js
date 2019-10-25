// -----------------------------------------------------------------------
// 1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia 
//     https://en.wikipedia.org/wiki/List_of_fictional_penguins
//     Crea un objeto llamado myPenguin con propiedades que representen
//     la información listada en cada columna en esa página de wikipedia
//     (por ejemplo: character, origin...)
// ---------------------------------------------------------------------
// 2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje
//     de bienvenida. La salida debe ser algo como:
//     "Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]"
// -----------------------------------------------------------------------
// /*
// -----------------------------------------------------------------------
// 3.- Escribe otra línea de código que añada una nueva propiedad a tu 
//     pingüino llamada puedeVolar y asignalo a falso.
//     Nota: No modifiques el código original donde definiste a tu pingüino
// -----------------------------------------------------------------------
// */
// -----------------------------------------------------------------------
// 4.- Añade un método a tu pingüino llamado 'graznar' que muestre en 
//     consola: "kaww kaww!!"
//     Nota: Sí, así suenan los pingüinos
//     Nota de la Nota: No modifiques el código previo. Hazlo en una
//     nueva línea de código.
// -----------------------------------------------------------------------
// */
// -----------------------------------------------------------------------
// 5.- Añade otro método a tu pingüino llamado 'saludar' que imprima en
//     consola el mismo mensaje que escribimos para la bienvenida.
//     Esta vez, emplea la palabra reservada "this" para resolverlo.
// -----------------------------------------------------------------------


const myPenguin = {
    character: "Frobisher",
    origin: "Doctor Who Magazine and two Big Finish audio dramas",
    creator: "Steve Parkhouse and John Ridgway",
    notes: "A humanoid from a shape-changing extra-terrestrial race who prefers to take the guise of a penguin",
}

console.log("hola soy el pinguino mi nombre es:" + myPenguin.character);

myPenguin.puedeVolar = false;

console.log(myPenguin.puedeVolar);

let hola = "hello hello"

myPenguin.graznar = function(x){
    return console.log(x);
}

myPenguin.graznar();