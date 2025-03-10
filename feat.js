class Feature {
    constructor(name, id, desc, bullets) {
        this.name = name;
        this.id = id;
        this.desc = desc;
        this.bullets = bullets;
    }
    toDiv() {
        const e = document.createElement('div');
        e.id = this.id;
        // e.innerHTML = `<details><br><summary>${this.name}<ul>`;
        // console.log(e.innerHTML);
        // for (let b in this.bullets) e.innerHTML += `<li>${b}</li>`;
        // e.innerHTML += `${this.desc}`;
        // return e;
        e.appendChild(document.createElement('details'));
        e.firstChild.appendChild(document.createElement('br'));
        e.firstChild.appendChild(document.createElement('summary'));
        e.firstChild.lastChild.innerHTML = this.name;
        e.firstChild.lastChild.appendChild(document.createElement('ul'));
        for (let i = 0; i < this.bullets.length; i++) {
            e.firstChild.lastElementChild.firstElementChild.appendChild(document.createElement('li'));
            e.firstChild.lastElementChild.firstElementChild.lastChild.innerHTML = this.bullets[i]
        }
        e.firstChild.innerHTML += this.desc;
        return e;
    }
}

const feats = [
    new Feature(
        'Resilience of the Archfiend',
        'rota',
        'Starting at 1st level, when you finish a long rest, you gain temporary HP equal to double your Warlock level.',
        [
            'gain 2*lvl temp hp',
            'activates on long rest'
        ]
    ),
    new Feature(
        'Brimstone Affinity',
        'braf',
        'Starting at 6th level, when you deal acid, cold, fire, thunder, or lightning damage, you can change the damage type to fire. You can do this a number of times equal to 1 + your proficiency bonus, regaining all uses back on a short or long rest.',
        [
            'change elemental dmg to fire',
            'prof+1 uses',
            'activates on dmg dealt',
            'regain uses on short/long rest'
        ]
    ),
    new Feature(
        'Brimstone Transformation',
        'brtr',
        'Starting at 10th level, as bonus action, or as part of the same bonus action to activate any other transformation, you can transform yourself into a Brimstone Elemental. When first transforming, your max HP increases by 40, and then you heal by that amount. This extra max health\'s condition is saved when exiting the transformation, resetting after you get the full duration back. While transformed, You have immunity to fire damage, and resistance to non-magical physical damage. Your movement increases by 10 feet and you can move through lava as if it was water, and have a \'swimming speed\' equal to your walking speed, and can walk on top of water and lava. Your Strength and Dexterity scores increases by 2, you have advantage on Constitution checks and all saving throws, and you count as one size larger when determining grappling and carry weight. Any creatures within 30 feet of you of your choice take 4d8 fire damage at the start of your turn. This transformation has a duration of 1 minute, which you can stop as another bonus action. Stopping the transformation early saves the remaining time left in the transformation for later. While in the underworld, the transformation timer is paused.<br><br>You regain the full duration for the transformation back on a short or long rest.',
        [
            'activates on bonus action or with other bonus action transformation',
            '+40 max hp',
            'fire immunity and nonmagical physical resistance',
            '+10 spd',
            'str/dex +2',
            'advantage on con checks and all saves',
            '+1 size for grappling',
            '4d8 fire dmg in 30ft radius at start of turn to choice creatures',
            '1min duration regained on short/long rest'
        ]
    ),
    new Feature(
        'Brimstone Crags',
        'brcr',
        'Starting at 14th level, as an action, you can temporarily transform your surroundings into the Brimstone Crags, a world of fire, lava, and a sea of lost, tortured souls. Upon using this feature, you regain the temporary HP From your Resilience of the Archfiend feature, replacing any temporary HP you previously had, unless the previous amount was larger. The radius is 90 feet around you, which lasts for a minute, following everywhere you go with you as the center. Every creature except you while inside the Brimstone crags have their Fire immunity reduced to Resistance, Resistance reduced to nothing, and nothing reduced to Vulnerability. An already vulnerable creature always takes max fire damage. At the start of each of your turns while in the Brimstone Crags, you can cast the Fireball spell at 5th level for free (no action required by you). The area, even the air, counts as difficult terrain for all creatures except you and creatures that have Fire Resistance. While inside the radius, creatures cannot be banished, plane shift, or otherwise leave by means that aren\'t simply walking out of the area. Similarly, creatures cannot enter via the previously mentioned methods. This area transformation lasts for 1 minute.<br><br>You can use this feature once, regaining its use on a long rest.',
        [
            'activates on action',
            'brimstone domain in 90ft radius',
            'follows user',
            'gain 2*lvl temp hp',
            'fire immunity > resistance > neutral > vulnerable > max',
            'free 5th lvl fireball at start of turn',
            'difficult terrain without fire resistance',
            'area can only be left/entered through mundane means',
            '1min duration regained on long rest'
        ]
    ),
    new Feature(
        'Healing Light',
        'heli',
        'At 1st level, you gain the ability to channel celestial energy to heal wounds. You have a pool of d8s that you spend to fuel this healing. The number of dice in the pool equals your proficiency bonus + your warlock level.<br><br>As a bonus action, you can heal one creature you can see within 60 feet of you, spending dice from the pool. The maximum number of dice you can spend at once equals your Charisma modifier (minimum of one die). Roll the dice you spend, add them together, and restore a number of hit points equal to the total.<br><br>Your pool regains all expended dice when you finish a long rest.',
        [
            'pool of prof+lvl d8s',
            'activates on bonus action',
            '60ft single target heal',
            'max burst is cha mod',
            'pool replenishes on long rest'
        ]
    ),
    new Feature(
        'Radiant Soul',
        'raso',
        'Starting at 6th level, your link to the Celestial allows you to serve as a conduit for radiant energy. You have resistance to radiant damage, and when you cast a spell that deals radiant or fire damage, you add your Charisma modifier to one radiant or fire damage roll of that spell against one of its targets. You can also add your Charisma modifier to healing spells if you didn\'t already, or double your modifier if you already did. You do not ignore your own resistance to radiant damage.',
        [
            'radiant dmg resistance',
            'add cha mod to one fire/radiant dmg roll',
            'activates on cast of fire/radiant spell',
            'affects a single target',
            'add cha mod to healing spells',
            'double existing cha mod on healing spells',
            'do not ignore own resistance to radiant'
        ]
    ),
    new Feature(
        'Seraphim\'s Touch',
        'seto',
        'Starting at 10th level, you can as a bonus, or as part of the same bonus action that you used Healing Light on, you and a number of creatures you choose equal to your Charisma modifier that you can see to become protected by the Seraphim, causing all fire or radiant damage dealt by you to instead heal them. This lasts until the start of your next turn.<br><br>This feature can be used 3 times, and you regain all uses back on a long rest.',
        [
            'activates on bonues action or with healing light',
            'target self and cha mod creatures in sight',
            'fire/radiant dmg dealt by self heals affected creatures',
            'lasts until start of nex turn',
            '3 uses regained on long rest'
        ]
    ),
    new Feature(
        'Seraph Transformation',
        'setr',
        'Starting at 14th level, as bonus action, or as part of the same bonus action to activate any other transformation, you can transform yourself into a partial angel. When first transforming, you heal to your max HP.  You have immunity to Radiant damage, and resistance to non-magical physical damage. You gain a flying speed equal to your walking speed, and your walking speed increases by 30 feet. Your Wisdom and intelligence scores increase by 2, you have advantage on Charisma checks against non-demons or fiends, and you count as one size larger when determining grappling and carry weight. As a reaction you can give yourself a +5 to a saving throw. If this bonus causes you to succeed, you can move up to your walking speed immediately. This transformation has a duration of 1 minute, which you can stop as another bonus action. Stopping the transformation early saves the remaining time left in the transformation for later. While in firmament, the transformation timer is paused.<br><br>You regain the full duration for the transformation back on a short or long rest.',
        [
            'activates on bonus action or with other bonus action transformation',
            'heal to max hp',
            'immunity to radiant and resistance to nonmagical physical',
            '+30 spd',
            'gain flying spd equal to walking spd',
            '+2 int and wis',
            'advantage on cha checks except against demons and fiends',
            '+1 size for grappling',
            '+5 to saving throw on reaction',
            'move up to walking speed if +5 to save causes success',
            '1min duration regained on short/long rest'
        ]
    ),
    new Feature(
        'Not Dead Yet',
        'nody',
        'You have advantage on Death Saving throws, need to fail 5 Death Saving throws to die, and are Resistant to Necrotic damage. You also gain proficiency in a saving throw of your choice.',
        [
            'advantage on death saves',
            'die at 5 fails',
            'resistance to necrotic'
        ]
    ),
    new Feature(
        'Soul Fire',
        'sofi',
        'When you deal Necrotic damage, you can choose to change the damage type to Fire. Any Necrotic damage you change to fire damage heals you.',
        [
            'necrotic dmg can convert to fire',
            'necrotic fire dmg heals self'
        ]
    ),
    new Feature(
        'Undying Transformation',
        'untf',
        'Starting at 10th level, as bonus action or as a reaction to going down or making a Death Saving throw, you can transform into your undying form. When first transforming, your failed Death saving throws are reset to 0. While you\'re transformed, having 0 hit points doesn’t knock you unconscious. You still must make death saving throws, and you suffer the normal effects of taking damage while at 0 hit points, and 5 Death Saving throws can still kill you. While transformed, You have immunity to Necrotic damage, and resistance to non-magical physical damage. As long as you will it, you become invisible to all undead creatures without True sight. If you damage an undead creature while invisible to it in this way, you become visible to the creature until the start of its next turn. This transformation has a duration of 1 minute, which you can stop as another bonus action. Stopping the transformation early saves the remaining time left in the transformation for later. While at 0 HP, the transformation timer is paused.<br><br>You regain the full duration for the transformation and gain your Failed Death saving throw reset back on a short or long rest.',
        [
            'activates on bonus action or as a reaction to going down or making a death saving throw',
            'failed death saves reset to 0',
            'stay conscious at 0 hp',
            'immunity to necrottic and resistance to nonmagical physical',
            'become invisible to undead at will',
            'become visible to undead you dmg until start of its next turn',
            '1min duration regained on short/long rest',
            'duration paused while at 0 hp'
        ]
    ),
    new Feature(
        'Your Contract has Expired',
        'yoce',
        'As an action, you pick a single creature within 120 feet of you that you can see then pick a contract to offer to them. Time stops for all creatures except you and the chosen creature. Both you and the creature cannot move, take actions, or otherwise interact with other creatures or objects during this time. The chosen creature has 1 minute in this frozen time span to either deny or accept the Contract. If the creature does not make a choice, they are counted as having denied it. After the creatures choice, time resumes as normal.',
        [
            'activates on action',
            'targets single creature withn 120ft range',
            'time stops for self and target for 1 min',
            'target must accept or deny given contract'
        ]
    ),
    new Feature(
        'For Nothing',
        'fono',
        'When you deal Force damage, you can choose to change the damage type to Fire (WHY). Additionally, when a creature fails a saving throw you forced it to make, you can move the creature up to 15 feet in a horizontal direction of your choice.',
        [
            'change force dmg to fire',
            'move creature 15ft on save fail'
        ]
    ),
    new Feature(
        'For Everything',
        'foev',
        'When forced to make a saving throw, you can now expand a charge from your Contact Patron ability, and add the dice roll to the saving throw.',
        [
            'on save throw can add contact patron die'
        ]
    ),
    new Feature(
        'Visitors\' Gift',
        'vigi',
        'You gain +5 to AC.',
        [
            '+5 ac'
        ]
    ),
    new Feature(
        'Voidling Transformation',
        'votr',
        'Starting at 14th level, as bonus action or as a reaction to getting plane shifted, you can transform into your Voidling form. When first transforming, you can teleport yourself to a location you can see within 120 feet of yourself. While you\'re transformed, you can occupy friendly creatures spaces without any penalty, and other creatures spaces count as difficult terrain. You have immunity to Force damage, and resistance to non-magical physical damage. You are immune to involuntary Plane shifting or teleportation, and automatically succeed saving throws from Banish spells or similar effects. Void and Abyss creatures will regard you as one of their own during the duration. This transformation has a duration of 1 minute, which you can stop as another bonus action. Stopping the transformation early saves the remaining time left in the transformation for later. While in the Void, or the Abyss, the transformation timer is paused.<br><br>You regain the full duration for the transformation and gain your Failed Death saving throw reset back on a short or long rest.',
        [
            'activate on bonus action or reaction to plane shift',
            'teleport 120ft on transform',
            'occupy space with ally without penalty',
            'others count as difficult terrain',
            'immunity to force and resistance to nonmagical physical dmg',
            'immune to involuntary plane shifting',
            'succeed saves against banish or similar effects',
            'void and abbyss creatures regard u as one of them',
            '1min duration paused in void and abyss'
        ]
    ),
];

/*
    new Feature(
        '',
        '',
        '',
        [

        ]
    ),
*/

window.onload = () => {
    for (let i = 0; i < feats.length; i++) document.body.firstElementChild.appendChild(feats[i].toDiv());
}