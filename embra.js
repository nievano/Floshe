const embLvl = 8;
const embHitDice = new Dice(embLvl, 8);
const embProf = 3;
const embInt = new Ability(17, embProf);
const embWis = new Ability(30, embProf);
const embCha = new Ability(4, 0);

function embSetScores() {
    const names = ['Intelligence', 'Wisdom', 'Charisma'];
    const abils = [embInt, embWis, embCha];
    for (let i = 0; i < abils.length; i++) {
        const abrv = names[i].substring(0, 3)
        document.getElementById(`emb${abrv}Scr`).innerHTML = `${names[i]}: ${abils[i].score}`;
        document.getElementById(`emb${abrv}Mod`).innerHTML = `Modifier: ${getSign(abils[i].mod)}${abils[i].mod}`;
        document.getElementById(`emb${abrv}Sav`).innerHTML = `Save: ${getSign(abils[i].save)}${abils[i].save}`;
    }
}

function embSetVars() {
    document.getElementById('embLevel').innerHTML = `Level: ${embLvl}`;
    document.getElementById('embHitDice').value = embHitDice.num;
    document.getElementById('embProf').innerHTML = `Proficiency: +${embProf}`;
    embSetScores();
}

window.onload = () => {
    document.getElementById('embHitDice').parentElement.insertAdjacentHTML('beforeend', `d${embHitDice.sides}`);
    embSetVars();
}