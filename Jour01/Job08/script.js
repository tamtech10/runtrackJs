function nbPremier(n) {
    for (let i = 2; i < n; i++) {
        if(n % i == 0) {
        return false;
        }
        }
      return true;
}

function sommeNbPremiers(x, y) {
if (nbPremier(x) && nbPremier(y)) {
        return x + y;
    } else {
        return false;
    }
}
