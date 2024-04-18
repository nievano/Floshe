const features = [
    {
        'Name': 'Aspect of the Moon',
        'Text': 'You no longer need to sleep and can\'t be forced to sleep by any means. To gain the benefits of a long rest, you can spend all 8 hours doing light activity, such as reading your Book of Shadows and keeping watch.'
    },
    {
        'Name': 'Book of Ancient Secrets',
        'Text': 'You can now inscribe magical rituals in your Book of Shadows. Choose two 1st-level spells that have the ritual tag from any class\'s spell list. The spells needn\'t be from the same spell list. The spells appear in the book and don\'t count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can\'t cast the spells except as rituals, unless you\'ve learned them by some other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag.\nOn your adventures, you can add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell\'s level is equal to or less than half your warlock level (rounded up) and if you can spare the time to transcribe the spell. For each level of the spell, the transcription process takes 2 hours and costs 50 gp for the rare inks needed to inscribe it.'
    },
    {
        'Name': 'Brimstone Affinity',
        'Text': 'Starting at 6th level, when you deal acid, cold, fire, thunder, or lightning damage, you can change the damage type to fire. You can do this a number of times equal to 1 + your proficiency bonus, regaining all uses back on a short or long rest'
    },
    {
        'Name': 'Brimstone Crags',
        'Text': 'Starting at 14th level, as an action, you can temporarily transform your surroundings into the Brimstone Crags, a world of fire, lava, and a sea of lost, tortured souls. Upon using this feature, you regain the temporary HP From your Resilience of the Archfiend feature, replacing any temporary HP you previously had, unless the previous amount was larger. The radius is 90 feet around you, which lasts for a minute, following everywhere you go with you as the center. Every creature except you while inside the Brimstone crags have their Fire immunity reduced to Resistance, Resistance reduced to nothing, and nothing reduced to Vulnerability. An already vulnerable creature always takes max fire damage. At the start of each of your turns while in the Brimstone Crags, you can cast the Fireball spell at 5th level for free (no action required by you). The area, even the air, counts as difficult terrain for all creatures except you and creatures that have Fire Resistance. While inside the radius, creatures cannot be banished, plane shift, or otherwise leave by means that aren\'t simply walking out of the area. Similarly, creatures cannot enter via the previously mentioned methods. This area transformation lasts for 1 minute.\nYou can use this feature once, regaining its use on a long rest.'
    },
    {
        'Name': 'Brimstone Transformation',
        'Text': 'Starting at 10th level, as bonus action, or as part of the same bonus action to activate any other transformation, you can transform yourself into a Brimstone Elemental. When first transforming, your max HP increases by 40, and then you heal by that amount. This extra max health\'s condition is saved when exiting the transformation, resetting after you get the full duration back. While transformed, You have immunity to fire damage, and resistance to non-magical physical damage. Your movement increases by 10 feet and you can move through lava as if it was water, and have a \'swimming speed\' equal to your walking speed, and can walk on top of water and lava. Your Strength and Dexterity scores increases by 2, you have advantage on Constitution checks and all saving throws, and you count as one size larger when determining grappling and carry weight. Any creatures within 30 feet of you of your choice take 4d8 fire damage at the start of your turn. This transformation has a duration of 1 minute, which you can stop as another bonus action. Stopping the transformation early saves the remaining time left in the transformation for later. While in the underworld, the transformation timer is paused.\nYou regain the full duration for the transformation back on a short or long rest.'
    },
    {
        'Name': 'Contact Patron',
        'Text': 'Starting at 3th level, When you make an ability check, you can call upon the help of your Patron to aid you in your check. As part of the ability check, you can request a window of communication between you and your Patron. Upon answering, your Patron can provide advantage and an extra + 1d8 to the check. On top of this, you may ask your patron additional questions, for additional help, or for general aid in your situation. Your patron may occasionally be too busy to answer your call, in which you still gain the + 1d8 to the check even if they don\'t answer. Your Patron may also not know anything about the questions you ask, but can or will go researching on your behalf if they have time, requesting a channel of communication which you can open for free, no action required by you.\nWhile you can request the window of communication for free and at any time, you can only gain the Advantage and + 1d8 to the check a number of times equal to your proficiency bonus, regaining all back on a short or long rest.'
    },
    {
        'Name': 'Court Functionary',
        'Text': 'Your knowledge of how bureaucracies function lets you gain access to the records and inner workings of any noble court or government you encounter. You know who the movers and shakers are, whom to go to for the favors you seek, and what the current intrigues of interest in the group are.'
    },
    {
        'Name': 'Devil\'s Sight',
        'Text': 'You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.'
    },
    {
        'Name': 'Eldritch Invocations',
        'Text': 'In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.\nAt 2nd level, you gain two eldritch invocations of your choice. A list of the available options can be found on the Optional Features page. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.\nAdditionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level.\nIf an eldritch invocation has prerequisites, you must meet them to learn it. You can learn the invocation at the same time that you meet its prerequisites. A level prerequisite refers to your level in this class.'
    },
    {
        'Name': 'Elemental Adept (Fire)',
        'Text': 'When you gain this feat, choose one of the following damage types: acid, cold, fire, lightning, or thunder.\nSpells you cast ignore resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2.\nYou can select this feat multiple times. Each time you do so, you must choose a different damage type.'
    },
    {
        'Name': 'Eyes of the Rune Keeper',
        'Text': 'You can read all writing. This ability doesn\'t decode secret messages in a text; you read the surface meaning and must rely on other capabilities to decode something.'
    },
    {
        'Name': 'Ghostly Gaze',
        'Text': 'As an action, you gain the ability to see through solid objects to a range of 30 feet. Within that range, you have darkvision if you don\'t already have it. This special sight lasts for 1 minute or until your concentration ends (as if you were concentrating on a spell). During that time, you perceive objects as ghostly, transparent images.\nOnce you use this invocation, you can\'t use it again until you finish a short or long rest.'
    },
    {
        'Name': 'Healing Light',
        'Text': 'At 1st level, you gain the ability to channel celestial energy to heal wounds. You have a pool of d8s that you spend to fuel this healing. The number of dice in the pool equals your proficiency bonus + your warlock level.\nAs a bonus action, you can heal one creature you can see within 60 feet of you, spending dice from the pool. The maximum number of dice you can spend at once equals your Charisma modifier (minimum of one die). Roll the dice you spend, add them together, and restore a number of hit points equal to the total.\nYour pool regains all expended dice when you finish a long rest.'
    },
    {
        'Name': 'Leviathan Will',
        'Text': 'You have advantage on saving throws against being charmed, frightened, paralyzed, poisoned, stunned, put to sleep, or pressured.'
    },
    {
        'Name': 'Limited Amphibiousness',
        'Text': 'You can breathe air and water, but you need to be submerged at least once every 4 hours to avoid suffocating.'
    },
    {
        'Name': 'Linguist',
        'Text': 'You can ably create written ciphers. Others can\'t decipher a code you create unless you teach them, they succeed on an Intelligence check (DC equal to your Intelligence score + your proficiency bonus), or they use magic to decipher it.'
    },
    {
        'Name': 'Mystic Arcanum',
        'Text': 'At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum.\nYou can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.\nAt higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th-level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest.\nWhen you finish a long or short rest you can change your chosen arcanum spell with another viable spell.'
    },
    {
        'Name': 'Natural Armor',
        'Text': 'You have tough, scaly skin. When you aren\'t wearing armor, your AC is 12 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield\'s benefits apply as normal while you use your natural armor.'
    },
    {
        'Name': 'Observant',
        'Text': 'If you can see a creature\'s mouth while it is speaking a language you understand, you can interpret what it\'s saying by reading its lips.\nYou have a +5 bonus to your passive Wisdom (Perception) and passive Intelligence (Investigation) scores.'
    },
    {
        'Name': 'Otherworldly Patron (Fiend, Celestial)',
        'Text': 'At 1st level, you have struck a bargain with an otherworldly being chosen from the list of available patrons. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.'
    },
    {
        'Name': 'Pact Boon (Tome)',
        'Text': 'At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice.\nPact of the Tome\nYour patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class\'s spell list. The cantrips do not need to be from the same spell list. While the book is on your person, you can cast those cantrips at will. They don\'t count against your number of cantrips known. Any cantrip you cast with this feature is considered a warlock cantrip for you. If you lose your Book of Shadows, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous book. The book turns to ash when you die.'
    },
    {
        'Name': 'Pact Magic',
        'Text': 'Your arcane research and the magic bestowed on you by your patron have given you facility with spells. See chapter 10 for the general rules of spellcasting and chapter 11 for the warlock spell list.\nCantrips\nYou know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.\nSpell Slots\nThe Warlock table shows how many spell slots you have to cast your warlock spells of 1st through 5th level. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.\nFor example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell witch bolt, you must spend one of those slots, and you cast it as a 3rd-level spell.\nSpells Known of 1st Level and Higher\nAt 1st level, you know two 1st-level spells of your choice from the warlock spell list.\nThe Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level and higher. A spell you choose must be of a level no higher than what\'s shown in the table\'s Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.\nAdditionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.\nSpellcasting Ability\nCharisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.\nSpell save DC = 8 + your proficiency bonus + your Charisma modifier\nSpell attack modifier = your proficiency bonus + your Charisma modifier\nSpellcasting Focus\nYou can use an arcane focus as a spellcasting focus for your warlock spells.'
    },
    {
        'Name': 'Radiant Soul',
        'Text': 'Starting at 6th level, your link to the Celestial allows you to serve as a conduit for radiant energy. You have resistance to radiant damage, and when you cast a spell that deals radiant or fire damage, you add your Charisma modifier to one radiant or fire damage roll of that spell against one of its targets. You can also add your Charisma modifier to healing spells if you didn\'t already, or double your modifier if you already did. You do not ignore your own resistance to radiant damage.'
    },
    {
        'Name': 'Resilience of the Archfiend',
        'Text': 'Starting at 1st level, when you finish a long rest, you gain temporary HP equal to double your Warlock level.'
    },
    {
        'Name': 'Seraph Transformation',
        'Text': 'Starting at 14th level, as bonus action, or as part of the same bonus action to activate any other transformation, you can transform yourself into a partial angel. When first transforming, you heal to your max HP.  You have immunity to Radiant damage, and resistance to non-magical physical damage. You gain a flying speed equal to your walking speed, and your walking speed increases by 30 feet. Your Wisdom and intelligence scores increase by 2, you have advantage on Charisma checks against non-demons or fiends, and you count as one size larger when determining grappling and carry weight. As a reaction you can give yourself a +5 to a saving throw. If this bonus causes you to succeed, you can move up to your walking speed immediately. This transformation has a duration of 1 minute, which you can stop as another bonus action. Stopping the transformation early saves the remaining time left in the transformation for later. While in firmament, the transformation timer is paused.\nYou regain the full duration for the transformation back on a short or long rest.'
    },
    {
        'Name': 'Seraphim\'s Touch',
        'Text': 'Seraphims\' Touch\nStarting at 10th level, you can as a bonus, or as part of the same bonus action that you used Healing Light on, you and a number of creatures you choose equal to your Charisma modifier that you can see to become protected by the Seraphim, causing all fire or radiant damage dealt by you to instead heal them. This lasts until the start of your next turn.\nThis feature can be used 3 times, and you regain all uses back on a long rest.'
    },
    {
        'Name': 'Spell Sniper',
        'Text': 'You have learned techniques to enhance your attacks with certain kinds of spells, gaining the following benefits:\nAbility Score Increase. Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\nBypass Cover. Your Attack Rolls for Spells ignore Half Cover and Three-Quarters Cover\nCasting in Melee. Being within 5 feet of an enemy doesn\'t impose Disadvantage on your Attack Rolls with Spells.\nIncreased Range. When you cast a Spell that has a range of at least 10 feet and that requires you to make an Attack Roll, you can increase the Spell\'s range by 60 feet.'
    },
    {
        'Name': 'War Caster',
        'Text': 'You have practiced casting spells in the midst of combat, learning techniques that grant you the following benefits:\nYou have advantage on Constitution saving throws that you make to maintain your concentration on a spell when you take damage.\nYou can perform the somatic components of spells even when you have weapons or a shield in one or both hands.\nWhen a hostile creature\'s movement provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature.'
    },
    {
        'Name': 'Witch Sight',
        'Text': 'You have Truesight with a range of 30 feet.'
    }
];