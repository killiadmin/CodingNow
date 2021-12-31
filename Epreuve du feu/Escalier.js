// Exercice n1 : Escalier

const [nd, sc, escfire] = process.argv;
var espace, marche, escal
function escalier(x) {
    for(var i = 1; i<=x && typeof i === "number"; i++){
        espace = x - i;
        marche = i;
        escal = " ".repeat(espace) + "#".repeat(marche);
        console.log(escal)
    }
 }

 escalier(escfire);