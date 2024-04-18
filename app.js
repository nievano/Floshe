function showSpell(e) {
    let s;
    for(i in spells) {
        if (spells[i].Name == e.innerText) s = spells[i];
    }
    const d = document.createElement("div");
    d.setAttribute("class", "spell");
    d.appendChild(document.createElement("h1"));
    d.lastElementChild.innerText = `${s.Name}`;
    d.appendChild(document.createElement("h1"));
    d.lastElementChild.innerText = (s.Level == "Cantrip") ? `${s.Level}` : `${s.Level} Level`;
    d.appendChild(document.createElement("h2"));
    d.lastElementChild.innerText = `Casting Time: ${s["Casting Time"]}`;
    d.appendChild(document.createElement("h2"));
    d.lastElementChild.innerText = `Duration: ${s.Duration}`;
    d.appendChild(document.createElement("h2"));
    d.lastElementChild.innerText = `Range: ${s.Range}`;
    d.appendChild(document.createElement("h2"));
    d.lastElementChild.innerText = `Components: ${s.Components}`;
    d.appendChild(document.createElement("h3"));
    d.lastElementChild.innerText = `${s.Text}`;
    d.appendChild(document.createElement("h3"));
    d.lastElementChild.innerText = `${s["At Higher Levels"]}`;
    e.parentElement.parentElement.insertAdjacentElement("beforebegin", d);
}
function hideSpell(e) {
    e.parentElement.parentElement.previousElementSibling.remove();
}
function showFeat(e) {
    let f;
    for(i in features) {
        if (features[i].Name == e.innerText) f = features[i];
    }
    console.log(f);
    const d = document.createElement("div");
    d.setAttribute("class", "pop");
    d.appendChild(document.createElement("h1"));
    d.lastElementChild.innerText = `${f.Name}`;
    d.appendChild(document.createElement("h2"));
    d.lastElementChild.innerText = `${f.Text}`;
    e.parentElement.parentElement.insertAdjacentElement("beforebegin", d);
}
function showEquip(e) {
    let f;
    for(i in equipment) {
        if (equipment[i].Name == e.innerText) f = equipment[i];
    }
    console.log(f);
    const d = document.createElement("div");
    d.setAttribute("class", "equip");
    d.appendChild(document.createElement("h1"));
    d.lastElementChild.innerText = `${f.Name}`;
    d.appendChild(document.createElement("h2"));
    d.lastElementChild.innerText = `${f.Text}`;
    e.parentElement.parentElement.insertAdjacentElement("beforebegin", d);
}