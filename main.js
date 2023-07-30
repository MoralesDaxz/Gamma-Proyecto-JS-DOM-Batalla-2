//#region Estructura
//Elementos principales
let list1 = ["Santiago", "Javier", "Otniel", "Oscar", "Morales"];
let list2 = ["Marcos", "Angel", "Millar", "Daniel", "Pedro"];
let nombre1 = list1[Math.floor(Math.random() * list1.length)];
let nombre2 = list2[Math.floor(Math.random() * list2.length)];
let jugador1 = { hp: 50, str: 20, def: 5, name: nombre1 }
let jugador2 = { hp: 50, str: 10, def: 5, name: nombre2 }

let body = document.querySelector('body');
let divContentPrincipal = document.querySelector('div')
let navNombres = document.querySelector('nav')
let tituloJugador1 = navNombres.children[0]
let tituloJugador2 = navNombres.children[1]
let colecSection = document.getElementsByTagName('section')
let sectionUno = colecSection[0]
let sectionDos = colecSection[1]
let sectionTres = colecSection[2]
let sectionCuatro = colecSection[3]

let colecArticulo = document.getElementsByTagName('article')
let articuloUno = colecArticulo[0]
let articuloDos = colecArticulo[1]
let articuloTres = colecArticulo[2]
let articuloCuatro = colecArticulo[3]
let contentBarra1 = document.createElement('div')
let contentBarra2 = document.createElement('div')
let divContentJugador1 = document.createElement('div')
let divContentJugador2 = document.createElement('div')

let divTags1 = document.createElement('div')
let divTags2 = document.createElement('div')
let divEstadistica1 = document.createElement('div')
let divEstadistica2 = document.createElement('div')

let divBotonAtk1 = sectionTres.children[0]
let divBotonAtk2 = sectionTres.children[1]
console.log(articuloUno);
console.log(articuloDos);

//#region sectionUno 
//articuloUno
articuloUno.appendChild(contentBarra1)//barra1 = sectionUno.children[0].children[0]
articuloUno.appendChild(divContentJugador1)
let tagName1 = document.createElement('h4')
let tagHp1 = document.createElement('h4')
let tagStr1 = document.createElement('h4')
let tagDef1 = document.createElement('h4')
let prfName1 = document.createElement('p')
let prfHp1 = document.createElement('p')
let prfStr1 = document.createElement('p')
let prfDef1 = document.createElement('p')
//divTags1
divContentJugador1.appendChild(divTags1)
divTags1.appendChild(tagName1)
divTags1.appendChild(tagHp1)
divTags1.appendChild(tagStr1)
divTags1.appendChild(tagDef1)
tagName1.innerText = `Nombre:`
tagHp1.innerText = `Vida:`
tagStr1.innerText = `Fuerza:`
tagDef1.innerText = `Defensa:`
//divEstadistica1
divContentJugador1.appendChild(divEstadistica1)
divEstadistica1.appendChild(prfName1)
divEstadistica1.appendChild(prfHp1)
divEstadistica1.appendChild(prfStr1)
divEstadistica1.appendChild(prfDef1)
prfName1.innerText = jugador1.name
prfHp1.innerText = jugador1.hp
prfStr1.innerText = jugador1.str
prfDef1.innerText = jugador1.def
//articuloDos
articuloDos.appendChild(contentBarra2)//barra2 = sectionUno.children[1].children[0]
articuloDos.appendChild(divContentJugador2)
let tagName2 = document.createElement('h4')
let tagHp2 = document.createElement('h4')
let tagStr2 = document.createElement('h4')
let tagDef2 = document.createElement('h4')
let prfName2 = document.createElement('p')
let prfHp2 = document.createElement('p')
let prfStr2 = document.createElement('p')
let prfDef2 = document.createElement('p')
//divTags2
divContentJugador2.appendChild(divTags2)
divTags2.appendChild(tagName2)
divTags2.appendChild(tagHp2)
divTags2.appendChild(tagStr2)
divTags2.appendChild(tagDef2)
tagName2.innerText = `Nombre:`
tagHp2.innerText = `Vida:`
tagStr2.innerText = `Fuerza:`
tagDef2.innerText = `Defensa:`
//divEstadistica2
divContentJugador2.appendChild(divEstadistica2)
divEstadistica2.appendChild(prfName2)
divEstadistica2.appendChild(prfHp2)
divEstadistica2.appendChild(prfStr2)
divEstadistica2.appendChild(prfDef2)
prfName2.innerText = jugador2.name
prfHp2.innerText = jugador2.hp
prfStr2.innerText = jugador2.str
prfDef2.innerText = jugador2.def

//styles
body.style = `display:flex; flex-direction:column;align-items:center;min-width:1000px;background-color:#06202b`
divContentPrincipal.style = `display:flex; flex-direction:column;width:1000px`
navNombres.style = `width: 100%;height:50px;display:flex; justify-content:space-around;align-items:center;background-color:#879b8b;color:#fff;width:1000px;color:white; font-weight:700`
tituloJugador1.innerText = `Héroe: ${jugador1.name}`
tituloJugador2.innerText = `Rey Demonio: ${jugador2.name} `
colecSection.style = `display:flex; flex-direction:column;`
sectionUno.style = `display:flex; justify-content:space-between;height:120px;background-color:#bcbdc4`
sectionDos.style = `display:flex; justify-content:space-between;height:90px;color:#fff;`
sectionTres.style = `display:flex; justify-content:space-evenly;border: solid 1px black;height:110px;background-color:#bcbdc4`
articuloUno.style = `display:flex; flex-direction:column;border: solid 1px black;width:50%`
articuloDos.style = `display:flex; flex-direction:column;border: solid 1px black;width:50%`
articuloTres.style = `border: solid 1px black;width:50%`
articuloCuatro.style = `border: solid 1px black;width:50%`
contentBarra1.style = `margin-left:10%;margin-top:2%; display:flex;border:solid 2px #22f178;border-radius:4px;width:fit-content`//008839
contentBarra2.style = `margin-left:10%;margin-top:2%; display:flex;border:solid 2px #22f178;border-radius:4px;width:fit-content`
divContentJugador1.style = `font-weight:600;margin-top:3%;display:flex; flex-direction:row; align-items:center;justify-content:space-around`
divContentJugador2.style = `font-weight:600;margin-top:3%;display:flex; flex-direction:row; align-items:center;justify-content:space-around`
prfName1.style = `border-radius:3px;background-color:white;width:180px;text-align:center;margin-top:2px`
prfHp1.style = `border-radius:3px;background-color:white;width:180px;text-align:center;margin-top:2px`
prfStr1.style = `border-radius:3px;background-color:white;width:180px;text-align:center;margin-top:2px`
prfDef1.style = `border-radius:3px;background-color:white;width:180px;text-align:center;margin-top:2px`
prfName2.style = `border-radius:3px;background-color:white;width:180px;text-align:center;margin-top:2px`
prfHp2.style = `border-radius:3px;background-color:white;width:180px;text-align:center;margin-top:2px`
prfStr2.style = `border-radius:3px;background-color:white;width:180px;text-align:center;margin-top:2px`
prfDef2.style = `border-radius:3px;background-color:white;width:180px;text-align:center;margin-top:2px`
tagName1.style = `border-bottom: solid 1px #06202b;width:190px;`
tagHp1.style = `border-bottom: solid 1px #06202b;width:190px;`
tagStr1.style = `border-bottom: solid 1px #06202b;width:190px;`
tagDef1.style = `border-bottom: solid 1px #06202b;width:190px;`
tagName2.style = `border-bottom: solid 1px #06202b;width:190px;`
tagHp2.style = `border-bottom: solid 1px #06202b;width:190px;`
tagStr2.style = `border-bottom: solid 1px #06202b;width:190px;`
tagDef2.style = `border-bottom: solid 1px #06202b;width:190px;`
divBotonAtk1.style = `margin-top:2%`
divBotonAtk2.style = `margin-top:2%`
//#endregion




//#endregion
//#region Funcionalidad

//Creacion de jugadores
const creaJugador1 = () => {
    let a = { hp: 50, str: 20, def: 5, name: nombre1 }
    return a
}
const creaJugador2 = () => {
    let b = { hp: 50, str: 20, def: 5, name: nombre2 }
    return b
}

//Barra de vida 'dinamica'
function barraVida(param1, param2) {
    let contador = 0
    function creadorBarra() {
        if (contador == param1.hp) {
            return clearInterval(tiempo)
        } else if (contador < param1.hp) {
            for (let i = 0; i < 1; i++) {
                let unidad = document.createElement('h2')
                unidad.style = `width:8px;height:8px;background-color:#008839;`//008839//22f178
                param2.appendChild(unidad)
            }
            contador += 1
        }
    }
    let tiempo = setInterval(creadorBarra, 15)
}
barraVida(jugador1, contentBarra1)
barraVida(jugador2, contentBarra2)
//#endregion