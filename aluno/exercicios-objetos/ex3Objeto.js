const carro = {
    nome: "Fox",
    cor:"Vermelho",
    modelo:"Hatch",
    opcional: {
        arcondicionado: true,
        direçãoEletrica: true,
        multiMidia: true 
    }
}

function detalhes (car){
    console.log ("Carro: " + car.nome + " Cor: " + car.cor + " Modelo: " + car.modelo)

    console.log ("Opcional: Arcondicionado " + car.opcional.arcondicionado + " | direção elétrica " + car.opcional.direçãoEletrica + " | multiMidia " + car.opcional.multiMidia)
}

function alterarOpcional (car1, opc, possui){
    car1.opcional[opc] = possui;
}

detalhes(carro)

console.log("Alterando opcional: ")

alterarOpcional(carro, "multiMidia", false)

console.log(carro.opcional)