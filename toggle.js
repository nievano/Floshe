document.querySelector('input[id=armor]').addEventListener('change', () => {
    if (document.getElementById('armor').checked) {
        calcAc(17);
    }
    else {
        calcAc(12);
    }
    setVars();
});
document.querySelector('input[id=amulet]').addEventListener('change', () => {
    if (document.getElementById('amulet').checked) {
        calcCon(19);
    }
    else {
        calcCon(9);
    }
    setVars();
});
document.querySelector('input[id=pendant]').addEventListener('change', () => {
    if (document.getElementById('pendant').checked) {
        splatk += 3; 
        spldc += 3;
        splslts[5] = splslts[4];
        splslts[4] = 0;
        splslts[8] += 2;
    }
    else {
        splatk -= 3;
        spldc -= 3;
        splslts[4] = splslts[5];
        splslts[5] = 0;
        splslts[8] -= 2;
    }
    setVars();
});
document.querySelector('input[id=rod]').addEventListener('change', () => {
    if (document.getElementById('rod').checked) {
        splatk += 3;
        spldc += 3;
    }
    else {
        splatk -= 3;
        spldc -= 3;
    }
    setVars();
});
document.querySelector('input[id=transBrim]').addEventListener('change', () => {
    if (document.getElementById('transBrim').checked) {
        hpMax += 40;
        hpAll += 40;
        spd += 10;
        calcStr(str.score + 2);
        calcDex(dex.score + 2);
    }
    else {
        hpMax -= 40;
        hpAll -= 40;
        spd -= 10;
        calcStr(str.score - 2);
        calcDex(dex.score - 2);
    }
    setVars();
});
document.querySelector('input[id=domBrim]').addEventListener('change', () => {
    if (document.getElementById('domBrim').checked) {
        if (hpTemp < lvl * 2) {
            hpAll -= hpTemp;
            hpTemp = lvl * 2;
            hpAll += hpTemp;
        }
    }
    setVars();
});
document.querySelector('input[id=transSera]').addEventListener('change', () => {
    if (document.getElementById('transSera').checked) {
        hpAll = hpMax + hpTemp;
        spd += 30;
        calcInt(int.score + 2);
        calcWis(wis.score + 2);
    }
    else {
        spd -= 30;
        calcInt(int.score - 2);
        calcWis(wis.score - 2);
    }
    setVars();
});