document.querySelector('input[id=armor]').addEventListener('change', () => {
    if (document.getElementById('armor').checked) {
        calcAc(17);
    }
    else {
        calcAc(13);
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
        resimus.push(new Resimu('Nonmagical Physical', 1));
        resimus.push(new Resimu('Fire', 2));
    }
    else {
        hpMax -= 40;
        hpAll -= 40;
        spd -= 10;
        calcStr(str.score - 2);
        calcDex(dex.score - 2);
        resimus.splice(resimus.findIndex((a) => a.equals(new Resimu('Fire', 2))), 1);
        resimus.splice(resimus.findIndex((a) => a.equals(new Resimu('Nonmagical Physical', 1))), 1);
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
        resimus.push(new Resimu('Nonmagical Physical', 1));
        resimus.push(new Resimu('Radiant', 2));
    }
    else {
        spd -= 30;
        calcInt(int.score - 2);
        calcWis(wis.score - 2);
        resimus.splice(resimus.findIndex((a) => a.equals(new Resimu('Radiant', 2))), 1);
        resimus.splice(resimus.findIndex((a) => a.equals(new Resimu('Nonmagical Physical', 1))), 1);
    }
    setVars();
});
document.querySelector('input[id=hpTemp]').addEventListener('change', () => {
    hpAll -= hpTemp;
    hpTemp = parseInt(document.getElementById('hpTemp').value);
    hpAll += hpTemp;
    setVars();
});
document.querySelector('input[id=hpAll]').addEventListener('change', () => {
    hpAll = parseInt(document.getElementById('hpAll').value);
    setVars();
});
document.querySelector('input[id=hitDice]').addEventListener('change', () => {
    hitDice.num = parseInt(document.getElementById('hitDice').value);
    setVars();
});
for (let i = 0; i < 2; i++) {
    let abrv = i === 0 ? 'spl' : 'cvn';
    for (let j = 0; j < splslts.length; j++) {
        document.getElementById(`${abrv}slt${j + 1}`).parentElement.innerHTML = (`${j + 1}${getPlacement(j + 1)} Level: ${document.getElementById(`${abrv}slt${j + 1}`).parentElement.innerHTML}`);
        document.querySelector(`input[id=${abrv}slt${j + 1}]`).addEventListener('change', () => {
            if (i === 0) splslts[j] = parseInt(document.getElementById(`${abrv}slt${j + 1}`).value);
            else cvnslts[j] = parseInt(document.getElementById(`${abrv}slt${j + 1}`).value);
            setVars();
        });
    }
}
document.querySelector('input[id=affBrim]').addEventListener('change', () => {
    affBrim = parseInt(document.getElementById('affBrim').value);
    setVars();
});
document.querySelector('input[id=healLit]').addEventListener('change', () => {
    healLit.num = parseInt(document.getElementById('healLit').value);
    setVars();
});
document.querySelector('input[id=touchSera]').addEventListener('change', () => {
    touchSera = parseInt(document.getElementById('touchSera').value);
    setVars();
});