const embLvl = 8;
const embHitDice = new Dice(embLvl, 8);
const embProf = 3;
const embSpd = 5;
const embInt = new Ability(19, embProf);
const embWis = new Ability(30, embProf);
const embCha = new Ability(4, 0);
const embArca = new Skill(embInt, 2);
const embHist = new Skill(embInt, 2);
const embInve = new Skill(embInt, 0);
const embNatu = new Skill(embInt, 2);
const embReli = new Skill(embInt, 2);
const embAnim = new Skill(embWis, 2);
const embInsi = new Skill(embWis, 0);
const embMedi = new Skill(embWis, 0);
const embPerc = new Skill(embWis, 0);
const embSurv = new Skill(embWis, 0);
const embDece = new Skill(embCha, 0);
const embInti = new Skill(embCha, 0);
const embPerf = new Skill(embCha, 0);
const embPers = new Skill(embCha, 0);
let embSplatk = embWis.mod + embProf + 3;
let embSpldc = 8 + embWis.mod + embProf + 3;
const embSplslts = [4, 3, 3, 2, 1];

function embSetScores() {
    const names = ['Intelligence', 'Wisdom', 'Charisma'];
    const abils = [embInt, embWis, embCha];
    for (let i = 0; i < abils.length; i++) {
        const abrv = names[i].substring(0, 3);
        document.getElementById(`emb${abrv}Scr`).innerHTML = `${names[i]}: ${abils[i].score}`;
        document.getElementById(`emb${abrv}Mod`).innerHTML = `Modifier: ${getSign(abils[i].mod)}${abils[i].mod}`;
        document.getElementById(`emb${abrv}Sav`).innerHTML = `Save: ${getSign(abils[i].save)}${abils[i].save}`;
    }
}

function embSetSkills() {
    const names = ['Arcana', 'History', 'Investigation', 'Nature', 'Religion', 'Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival', 'Deception', 'Intimidation', 'Performance', 'Persuasion'];
    const skills = [embArca, embHist, embInve, embNatu, embReli, embAnim, embInsi, embMedi, embPerc, embSurv, embDece, embInti, embPerf, embPers];
    for (let i = 0; i < skills.length; i++) {
        const abrv = names[i].substring(0, 4);
        document.getElementById(`emb${abrv}`).innerHTML = `${names[i]}: ${getSign(skills[i].mod)}${skills[i].mod}`;
    }
}

function embSetSlots() {
    for (let i = 0; i < embSplslts.length; i++) {
        document.getElementById(`embSplslt${i}`).value = embSplslts[i];
    }
}

function embSetVars() {
    document.getElementById('embLevel').innerHTML = `Level: ${embLvl}`;
    document.getElementById('embHitDice').value = embHitDice.num;
    document.getElementById('embProf').innerHTML = `Proficiency: +${embProf}`;
    document.getElementById('embSpd').innerHTML = `Speed: ${embSpd}`;
    document.getElementById('embClvl').innerHTML = `Caster Level: ${embLvl}`;
    document.getElementById('embSplatk').innerHTML = `Spell Attack: ${getSign(embSplatk)}${embSplatk}`;
    document.getElementById('embSpldc').innerHTML = `Spell DC: ${embSpldc}`;
    embSetScores();
    embSetSkills();
    embSetSlots();
}

function embMakeSlots() {
    for (let i = 0; i < embSplslts.length; i++) {
        const e = document.createElement('h3');
        e.innerHTML = `<input type="number" id="embSplslt${i}" min="0" class="num">`;
        document.getElementById('embSplslts').parentElement.append(e);
        document.getElementById(`embSplslt${i}`).parentElement.innerHTML = (`${i + 1}${getPlacement(i + 1)} Level: ${document.getElementById(`embSplslt${i}`).parentElement.innerHTML}`);
        document.querySelector(`input[id=embSplslt${i}]`).addEventListener('change', () => {
            embSplslts[i] = parseInt(document.getElementById(`embSplslt${i}`).value);
            embSetVars();
        });
    }
}

window.onload = () => {
    document.getElementById('embHitDice').parentElement.insertAdjacentHTML('beforeend', `d${embHitDice.sides}`);
    embMakeSlots();
    embSetVars();
}