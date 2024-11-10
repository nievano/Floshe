class Ability {
    constructor(score, bon) {
        this.bon = bon;
        this.setScore(score)
    }
    setScore(score) {
        this.score = score;
        this.mod = Math.floor((score - 10) / 2);
        this.save = this.mod + this.bon;
    }
}
class Dice {
    constructor(num, sides) {
        this.num = num;
        this.sides = sides
    }
    toString() {
        return `${this.num}d${this.sides}`;
    }
}
class Skill {
    constructor(abil, bon) {
        this.abil = abil;
        this.bon = bon;
        this.setMod(abil);
    }
    setMod(abil) {
        this.mod = abil.mod + (prof * this.bon);
    }
}
class Resimu {
    constructor(type, num) {
        this.type = type;
        this.num = num;
    }
    equals(resimu) {
        if(this.type === resimu.type && this.num === resimu.num) return true;
        return false;
    }
}
const lvl = 19;
const prof = 6;
const str = new Ability(8, 0);
const dex = new Ability(18, prof);
const con = new Ability(19, 1);
const int = new Ability(14, 0);
const wis = new Ability(18, prof);
const cha = new Ability(26, prof);
let hpMax = (con.mod + 5) * lvl + 8;
let hpTemp = lvl * 2;
let hpAll = hpMax + hpTemp;
const hitDice = new Dice(lvl, 8);
let ac = 22 + dex.mod;
let spd = 30;
let init = dex.mod;
const athl = new Skill(str, 1);
const acro = new Skill(dex, 0);
const slei = new Skill(dex, 0);
const stea = new Skill(dex, 0);
const arca = new Skill(int, 0);
const hist = new Skill(int, 1);
const inve = new Skill(int, 1);
const natu = new Skill(int, 0);
const reli = new Skill(int, 0);
const anim = new Skill(wis, 0);
const insi = new Skill(wis, 2);
const medi = new Skill(wis, 1);
const perc = new Skill(wis, 2);
const surv = new Skill(wis, 1);
const dece = new Skill(cha, 1);
const inti = new Skill(cha, 0);
const perf = new Skill(cha, 0);
const pers = new Skill(cha, 2);
let splatk = cha.mod + prof + 3;
let spldc = 8 + cha.mod + prof + 3;
const splslts = [0, 0, 0, 0, 0, 4, 0, 0, 2, 2];
const cvnslts = [2, 2, 2, 2, 2, 0, 0, 0, 0];
const resimus = [new Resimu('Radiant', 1), new Resimu('Necrotic', 1)]; 
let affBrim = 1 + prof;
const healLit = new Dice(prof + lvl, 8);
let touchSera = 3;
let yche = 3;
const conPat = new Dice(prof, 8);

getSign = (num) => { return Math.sign(num) != -1 ? '+' : ''; }
getPlacement = (num) => {
    if (num > 3) return 'th';
    else if (num === 3) return 'rd';
    else return num === 2 ? 'nd' : 'st';
}

function calcAc(bon) {
    ac = bon + 5 + dex.mod;
}

function calcStr(score) {
    str.setScore(score);
    athl.setMod(str);
}

function calcDex(score) {
    ac -= dex.mod;
    dex.setScore(score);
    acro.setMod(dex);
    slei.setMod(dex);
    stea.setMod(dex);
    ac += dex.mod;
    init = dex.mod;
}

function calcCon(score) {
    con.setScore(score);
    calcHpMax();
}

function calcInt(score) {
    int.setScore(score)
    arca.setMod(int);
    hist.setMod(int);
    inve.setMod(int);
    natu.setMod(int);
    reli.setMod(int);
}

function calcWis(score) {
    wis.setScore(score);
    anim.setMod(wis);
    insi.setMod(wis);
    medi.setMod(wis);
    perc.setMod(wis);
    surv.setMod(wis);
}

function calcCha(score) {
    splatk -= cha.mod;
    spldc -= cha.mod;
    cha.setScore(score);
    dece.setMod(cha);
    inti.setMod(cha);
    perf.setMod(cha);
    pers.setMod(cha);
    splatk += cha.mod;
    spldc += cha.mod;
}

function calcHpMax() {
    hpAll -= hpMax
    hpMax = (con.mod + 5) * lvl + 8;
    hpAll += hpMax;
}

function setVars() {
    document.getElementById('level').innerHTML = `Level: ${lvl}`;
    document.getElementById('hpMax').innerHTML = `Max HP: ${hpMax}`;
    document.getElementById('hpTemp').value = hpTemp;
    document.getElementById('hpAll').value= hpAll;
    document.getElementById('hitDice').value = hitDice.num;
    document.getElementById('ac').innerHTML = `AC: ${ac}`;
    document.getElementById('prof').innerHTML = `Proficiency: +${prof}`;
    document.getElementById('spd').innerHTML = `Speed: ${spd}`;
    document.getElementById('init').innerHTML = `Initiative: ${getSign(init)}${init}`;
    document.getElementById('clvl').innerHTML = `Caster Level: ${lvl}`;
    document.getElementById('splatk').innerHTML = `Spell Attack: ${getSign(splatk)}${splatk}`;
    document.getElementById('spldc').innerHTML = `Spell DC: ${spldc}`;
    document.getElementById('affBrim').value = affBrim;
    document.getElementById('healLit').value = healLit.num;
    document.getElementById('touchSera').value = touchSera;
    document.getElementById('yche').value = yche;
    document.getElementById('conPat').value = conPat.num;
    setScores();
    setSkills();
    setSlots();
    setResimus();
}

function setScores() {
    const names = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
    const abils = [str, dex, con, int, wis, cha];
    for (let i = 0; i < abils.length; i++) {
        const abrv = names[i].substring(0, 3).toLowerCase()
        document.getElementById(`${abrv}Scr`).innerHTML = `${names[i]}: ${abils[i].score}`;
        document.getElementById(`${abrv}Mod`).innerHTML = `Modifier: ${getSign(abils[i].mod)}${abils[i].mod}`;
        document.getElementById(`${abrv}Sav`).innerHTML = `Save: ${getSign(abils[i].save)}${abils[i].save}`;
    }
}

function setSkills() {
    const names = ['Athletics', 'Acrobatics', 'Sleight of Hand', 'Stealth', 'Arcana', 'History', 'Investigation', 'Nature', 'Religion', 'Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival', 'Deception', 'Intimidation', 'Performance', 'Persuasion'];
    const skills = [athl, acro, slei, stea, arca, hist, inve, natu, reli, anim, insi, medi, perc, surv, dece, inti, perf, pers];
    for (let i = 0; i < skills.length; i++) {
        const abrv = names[i].substring(0, 4).toLowerCase();
        document.getElementById(`${abrv}`).innerHTML = `${names[i]}: ${getSign([skills[i]])}${skills[i].mod}`
    }
}

function setSlots() {
    const abrv = ['spl', 'cvn'];
    const slts = [splslts, cvnslts];
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < splslts.length; j++) {
            if (i === 1 && j === cvnslts.length) break;
            document.getElementById(`${abrv[i]}slt${j + 1}`).value = slts[i][j];
        }
    }
}

function setResimus() {
    const resimu = document.getElementById('resimu');
    for (let i = 0; i < resimu.childElementCount; i++) {
        if (resimu.children[i].tagName === 'H3') {
            resimu.children[i].remove();
            i--;
        }
    }
    resimus.sort((a, b) => { return b.num - a.num });
    resimus.sort((a, b) => {
        if (a.type < b.type) return -1;
        if (a.type > b.type) return 1;
        return 0;
    });
    for(let i = 0; i < resimus.length; i++) {
        if(i === 0 || resimus[i].type !== resimus[i - 1].type) {
            const e = document.createElement('h3')
            e.innerHTML = `${resimus[i].type}`;
            if (resimus[i].num === 2) resimu.appendChild(e);
            else resimu.insertBefore(e, document.getElementById('imu'));
        }
    }
}

function setChecks() {
    document.getElementById('armor').checked = true;
    document.getElementById('amulet').checked = true;
    document.getElementById('pendant').checked = true;
    document.getElementById('rod').checked = false;
    document.getElementById('transBrim').checked = false;
    document.getElementById('domBrim').checked = false;
    document.getElementById('transSera').checked = false;
    document.getElementById('transUnd').checked = false;
    document.getElementById('transVoid').checked = false;
    document.getElementById('potEag').checked = false;
}

window.onload = () => {
    document.getElementById('hitDice').parentElement.insertAdjacentHTML('beforeend', `d${hitDice.sides}`);
    document.getElementById('healLit').parentElement.insertAdjacentHTML('beforeend', `d${healLit.sides}`);
    document.getElementById('conPat').parentElement.insertAdjacentHTML('beforeend', `d${conPat.sides}`);
    setChecks();
    setVars();
}