function bisextile(annee) {
    if ((annee % 4) == 0 ) {
        console.log("L'annee " + annee + " est bisextile.");
        return true;
    } else {
        console.log("L'année " + annee + " n'est pas une année bissextile.");
        return false;
    }
}