import { fullCountries } from "./countries.js"

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];
//1.
const hola = new Set();
//2.
let nums = 0;
let numContainer = new Set()
for (let i = 0; i <= 9; i++) {
    nums += 1;
    numContainer.add(nums);
}
console.log(numContainer);
//3.
numContainer.delete(2);
console.log(numContainer);
//4.
numContainer.clear(nums)
console.log(numContainer);
//5
const namesArr = ["Aiman", "Hector", "Jerson", "Sebas", "Steven"]
const namesSet = new Set(namesArr);
console.log(namesSet)
//6

const mapPaises = new Map();

mapPaises.set("España", "España".length)
mapPaises.set("Venezuela", "Venezuela".length)
mapPaises.set("Marruecos", "Marruecos".length)
console.log(mapPaises);


//===========================NIVEL 2======================================

//1
const union = new Set([...a], [...b]);
console.log(union);

//2
const difference = a.filter(x => !b.includes(x));
let Dif = new Set(difference)
console.log(Dif)

//3
const encuentro = new Map()
encuentro.set(a, b)
console.log(encuentro)
//==============================NIVEL 3===================================
//1

let foundLang = function () {

    let Lenguages = []

    for (let element of fullCountries) {
        for (let lang of element.languages) {
            Lenguages.push(lang)
        }
    }

    let setLenguages = new Set(Lenguages);
    return "En total hay " + setLenguages.size + " idiomas";

}
console.log(foundLang());

//2


let foundMostRepeatedLang = function () {

    let Lenguages = []
    let newArr = []
    let quant = 0;
    let langName = ""
    let mapMostTalkedLang = new Map()
    for (let element of fullCountries) {
        for (let lang of element.languages) {
            Lenguages.push(lang)
        }
    }
    let setLenguages = new Set(Lenguages);
    setLenguages.forEach(e => newArr.push(e))
    for (let elm of newArr) {

        for (let language of Lenguages) {

            if (elm == language) {
                langName = language;
                quant += 1
            }
        }
        mapMostTalkedLang.set(langName, quant);
        quant = 0;
    }
    return mapMostTalkedLang

}
console.log(foundMostRepeatedLang());