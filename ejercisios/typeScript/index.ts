 console.log("hello is typeScript");


function add(a:number , b:number): number{
    return a + b 
};

const suma = add(4,6)



const sum = add(2 ,3 )
// cuando se asigna un tipo de variable asi esta delcarada no se puede asignar un value con un tipo diferente 
let muted: boolean = true;
// no se puede realizar push con otro tipo de dato que no sea string
let people: string[] = [];
people.push("jorge");

let arrayTest: Array< string | number> = [];
arrayTest.push(900)


enum color {
    rojo = "rojo",
    verde = "verde",
    azul = "azul"
}

let colorFavorito = color.rojo;


console.log(`mi color favorito es ${colorFavorito}`);
// cuando a una variable se le asigna un tipo de variable any se le esta diciendo que esta pueda ser cualquier tipo de variable
let comodin: any = "joker";

comodin = 91

// el interrogante antes de los dos puntos de asignacion de tipo, deja este argumento como opcional.
function fullName(firstName?: string , lastName:string =  "smith"): string {
    return `${firstName} ${lastName} `
    
};
 

enum color1 {
    rojo = "rojo",
    verde = "verde"

}

interface rectangulo {
    ancho: number,
    alto: number,
    color: color1,

};

let rect: rectangulo = {
    ancho: 4,
    alto: 6,
    color: color1.rojo,
};

function areaRect (r: rectangulo){
    return r.ancho * r.alto

};

let areaReact2 = areaRect(rect);
console.log(areaReact2)

rect.toString = function(){
return this.color ? `un rectangulo ${this.color1}` : `un rectangulo`

};

console.log(rect.toString());