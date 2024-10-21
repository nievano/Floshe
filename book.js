document.querySelector('input[id=embHitDice]').addEventListener('change', () => {
    embHitDice.num = parseInt(document.getElementById('embHitDice').value);
    embSetVars();
});