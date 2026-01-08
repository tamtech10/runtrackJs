let numbers = [4, 32, 7, 21, 11];

function tri (tab, order) {
    if (order == "asc") {
        for(let i = 0; i <= tab.length; i++) {
            for(let j = i + 1; j <= tab.length; j++) {
                if (tab[i] > tab[j]) {
                    let temp = tab[i];
                    tab[i] = tab[j];
                    tab[j] = temp;
                }
            }
        }
        return tab;
    } else if (order =="desc") {
           for(let j = i + 1; j <= tab.length; j++) {
                    if (tab[i] < tab[j]) {
                        let temp = tab[i];
                        tab[i] = tab[j];
                        tab[j] = temp;
                    }
                }
            }
            return tab;
    }

