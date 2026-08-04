function verificarBanimento(listaBanidos, apelido) {
    // Retorna true se estiver na lista, false se não estiver
    return listaBanidos.includes(apelido);
}
 
let banidos = ["WiseScorpion", "Plabbernom", "xxx33Fibberflop"];
 
// Usuário que ESTÁ banido
let usuario1 = "WiseScorpion";
let status1 = verificarBanimento(banidos, usuario1);
 
if (status1) {
    console.log("O usuário " + usuario1 + " está BANIDO!");
} else {
    console.log("O usuário " + usuario1 + " está liberado.");
}
 
// Usuário que NÃO está banido
let usuario2 = "DevFrontEnd";
let status2 = verificarBanimento(banidos, usuario2);
 
if (status2) {
    console.log("O usuário " + usuario2 + " está BANIDO!");
} else {
    console.log("O usuário " + usuario2 + " está liberado.");
}