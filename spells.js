const spells = [
    {
      'Name': 'Alarm',
      'Level': '1st',
      'Casting Time': '1 Min.',
      'Duration': '8 hours',
      'Range': '30 feet',
      'Components': 'V, S, M (a tiny bell and a piece of fine silver wire)',
      'Text': 'You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won\'t set off the alarm. You also choose whether the alarm is mental or audible.\nA mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping.\nAn audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Ashardalon\'s Stride',
      'Level': '3rd',
      'Casting Time': 'Bonus',
      'Duration': 'Concentration, up to 1 minute',
      'Range': 'Self',
      'Components': 'V, S',
      'Text': 'The billowing flames of a dragon blast from your feet, granting you explosive speed. For the duration, your speed increases by 20 feet and moving doesn\'t provoke opportunity attacks.\nWhen you move within 5 feet of a creature or an object that isn\'t being worn or carried, it takes 1d6 fire damage from your trail of heat. A creature or object can take this damage only once during a turn.',
      'At Higher Levels': 'At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, increase your speed by 5 feet for each spell slot level above 3rd. The spell deals an additional 1d6 fire damage for each slot level above 3rd.'
    },
    {
      'Name': 'Banishment',
      'Level': '4th',
      'Casting Time': 'Action',
      'Duration': 'Concentration, up to 1 minute',
      'Range': '60 feet',
      'Components': 'V, S, M (an item distasteful to the target)',
      'Text': 'You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a Charisma saving throw or be banished.\nIf the target is native to the plane of existence you\'re on, you banish the target to a harmless demiplane. While there, the target is incapacitated. The target remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.\nIf the target is native to a different plane of existence than the one you\'re on, the target is banished with a faint popping noise, returning to its home plane. If the spell ends before 1 minute has passed, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. Otherwise, the target doesn\'t return.',
      'At Higher Levels': 'At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th.'
    },
    {
      'Name': 'Calm Emotions',
      'Level': '2nd',
      'Casting Time': 'Action',
      'Duration': 'Concentration, up to 1 minute',
      'Range': '60 feet',
      'Components': 'V, S',
      'Text': 'You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a Charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects.\nYou can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime.\nAlternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the DM rules otherwise.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Ceremony',
      'Level': '1st',
      'Casting Time': '1 Hr.',
      'Duration': 'Instantaneous',
      'Range': 'Touch',
      'Components': 'V, S, M (25 gp worth of powdered silver, which the spell consumes)',
      'Text': 'You perform a special religious ceremony that is infused with magic. When you cast the spell, choose one of the following rites, the target of which must be within 10 feet of you throughout the casting. \nAtonement. You touch one willing creature whose alignment has changed, and you make a DC 20 Wisdom (Insight) check. On a successful check, you restore the target to its original alignment. \nBless Water. You touch one vial of water and cause it to become holy water. \nComing of Age. You touch one humanoid who is a young adult. For the next 24 hours, whenever the target makes an ability check, it can roll a d4 and add the number rolled to the ability check. A creature can benefit from this rite only once. \nDedication. You touch one humanoid who wishes to be dedicated to your god\'s service. For the next 24 hours, whenever the target makes a saving throw, it can roll a d4 and add the number rolled to the save. A creature can benefit from this rite only once. \nFuneral Rite. You touch one corpse, and for the next 7 days, the target can\'t become undead by any means short of a wish spell. \nWedding. You touch adult humanoids willing to be bonded together in marriage. For the next 7 days, each target gains a +2 bonus to AC while they are within 30 feet of each other. A creature can benefit from this rite again only if widowed.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Commune',
      'Level': '5th',
      'Casting Time': '1 Min.',
      'Duration': '1 minute',
      'Range': 'Self',
      'Components': 'V, S, M (incense and a vial of holy or unholy water)',
      'Text': 'You contact your deity or a divine proxy and ask up to three questions that can be answered with a yes or no. You must ask your questions before the spell ends. You receive a correct answer for each question.\nDivine beings aren\'t necessarily omniscient, so you might receive \'unclear\' as an answer if a question pertains to information that lies beyond the deity\'s knowledge. In a case where a one-word answer could be misleading or contrary to the deity\'s interests, the DM might offer a short phrase as an answer instead.\nIf you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get no answer. The DM makes this roll in secret.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Comprehend Languages',
      'Level': '1st',
      'Casting Time': 'Action',
      'Duration': '1 hour',
      'Range': 'Self',
      'Components': 'V, S, M (a pinch of soot and salt)',
      'Text': 'For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text.\nThis spell doesn\'t decode secret messages in a text or a glyph, such as an arcane sigil, that isn\'t part of a written language.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Counterspell',
      'Level': '3rd',
      'Casting Time': 'Reaction',
      'Duration': 'Instantaneous',
      'Range': '60 feet',
      'Components': 'S',
      'Text': 'You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell\'s level. On a success, the creature\'s spell fails and has no effect.',
      'At Higher Levels': 'At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used.'
    },
    {
      'Name': 'Crown of Stars',
      'Level': '7th',
      'Casting Time': 'Action',
      'Duration': '1 hour',
      'Range': 'Self',
      'Components': 'V, S',
      'Text': 'Seven star-like motes of light appear and orbit your head until the spell ends. You can use a bonus action to send one of the motes streaking toward one creature or object within 120 feet of you. When you do so, make a ranged spell attack. On a hit, the target takes 4d12 radiant damage. Whether you hit or miss, the mote is expended. The spell ends early if you expend the last mote.\nIf you have four or more motes remaining, they shed bright light in a 30-foot radius and dim light for an additional 30 feet. If you have one to three motes remaining, they shed dim light in a 30-foot radius.',
      'At Higher Levels': 'At Higher Levels. When you cast this spell using a spell slot of 8th level or higher, the number of motes created increases by two for each slot level above 7th.'
    },
    {
      'Name': 'Cure Wounds',
      'Level': '1st',
      'Casting Time': 'Action',
      'Duration': 'Instantaneous',
      'Range': 'Touch',
      'Components': 'V, S',
      'Text': 'A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.',
      'At Higher Levels': 'At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.'
    },
    {
      'Name': 'Detect Magic',
      'Level': '1st',
      'Casting Time': 'Action',
      'Duration': 'Concentration, up to 10 minutes',
      'Range': 'Self',
      'Components': 'V, S',
      'Text': 'For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.\nThe spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Detect Poison and Disease',
      'Level': '1st',
      'Casting Time': 'Action',
      'Duration': 'Concentration, up to 10 minutes',
      'Range': 'Self',
      'Components': 'V, S, M (a yew leaf)',
      'Text': 'For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case.\nThe spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Dimension Door',
      'Level': '4th',
      'Casting Time': 'Action',
      'Duration': 'Instantaneous',
      'Range': '500 feet',
      'Components': 'V',
      'Text': 'You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as \'200 feet straight downward\' or \'upward to the northwest at a 45-degree angle, 300 feet.\'You can bring along objects as long as their weight doesn\'t exceed what you can carry. You can also bring one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell.\nIf you would arrive in a place already occupied by an object or a creature, you and any creature traveling with you each take 4d6 force damage, and the spell fails to teleport you.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Find Familiar',
      'Level': '1st',
      'Casting Time': '1 Hr.',
      'Duration': 'Instantaneous',
      'Range': '10 feet',
      'Components': 'V, S, M (10 gp worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier)',
      'Text': 'You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of a beast.\nAdditional animal form choices may be available at the DM\'s discretion.\nYour familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can\'t attack, but it can take other actions as normal.\nWhen the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again. As an action, you can temporarily dismiss the familiar to a pocket dimension. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you. Whenever the familiar drops to 0 hit points or disappears into the pocket dimension, it leaves behind in its space anything it was wearing or carrying.\nWhile your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar\'s eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses.\nYou can\'t have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature.\nFinally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your attack modifier for the roll.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Fire Bolt',
      'Level': 'Cantrip',
      'Casting Time': 'Action',
      'Duration': 'Instantaneous',
      'Range': '120 feet',
      'Components': 'V, S',
      'Text': 'You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn\'t being worn or carried.\nThis spell\'s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).',
      'At Higher Levels': ''
    },
    {
      'Name': 'Fireball',
      'Level': '3rd',
      'Casting Time': 'Action',
      'Duration': 'Instantaneous',
      'Range': '150 feet',
      'Components': 'V, S, M (a tiny ball of bat guano and sulfur)',
      'Text': 'A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one.\nThe fire spreads around corners. It ignites flammable objects in the area that aren\'t being worn or carried.',
      'At Higher Levels': 'At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.'
    },
    {
      'Name': 'Glyph of Warding',
      'Level': '3rd',
      'Casting Time': '1 Hr.',
      'Duration': 'Until dispelled or triggered',
      'Range': 'Touch',
      'Components': 'V, S, M (incense and powdered diamond worth at least 200 gp, which the spell consumes)',
      'Text': 'When you cast this spell, you inscribe a glyph that later unleashes a magical effect. You inscribe it either on a surface (such as a table or a section of floor or wall) or within an object that can be closed (such as a book, a scroll, or a treasure chest) to conceal the glyph. The glyph can cover an area no larger than 10 feet in diameter. If the surface or object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.\nThe glyph is nearly invisible and requires a successful Intelligence (Investigation) check against your spell save DC to be found.\nYou decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or standing on the glyph, removing another object covering the glyph, approaching within a certain distance of the glyph, or manipulating the object on which the glyph is inscribed. For glyphs inscribed within an object, the most common triggers include opening that object, approaching within a certain distance of the object, or seeing or reading the glyph. Once a glyph is triggered, this spell ends.\nYou can further refine the trigger so the spell activates only under certain circumstances or according to physical characteristics (such as height or weight), creature kind (for example, the ward could be set to affect aberrations or drow), or alignment. You can also set conditions for creatures that don\'t trigger the glyph, such as those who say a certain password.\nWhen you inscribe the glyph, choose explosive runes or a spell glyph. \nExplosive Runes. When triggered, the glyph erupts with magical energy in a 20-foot-radius sphere centered on the glyph. The sphere spreads around corners. Each creature in the area must make a Dexterity saving throw. A creature takes 5d8 acid, cold, fire, lightning, or thunder damage on a failed saving throw (your choice when you create the glyph), or half as much damage on a successful one. \nSpell Glyph. You can store a prepared spell of 3rd level or lower in the glyph by casting it as part of creating the glyph. The spell must target a single creature or an area. The spell being stored has no immediate effect when cast in this way. When the glyph is triggered, the stored spell is cast. If the spell has a target, it targets the creature that triggered the glyph. If the spell affects an area, the area is centered on that creature. If the spell summons hostile creatures or creates harmful objects or traps, they appear as close as possible to the intruder and attack it. If the spell requires concentration, it lasts until the end of its full duration.',
      'At Higher Levels': 'At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage of an explosive runes glyph increases by 1d8 for each slot level above 3rd. If you create a spell glyph, you can store any spell of up to the same level as the slot you use for the glyph of warding.'
    },
    {
      'Name': 'Guiding Hand',
      'Level': '1st',
      'Casting Time': '1 Min.',
      'Duration': 'Concentration, up to 8 hours',
      'Range': '5 feet',
      'Components': 'V, S',
      'Text': 'You create a Tiny incorporeal hand of shimmering light in an unoccupied space you can see within range. The hand exists for the duration, but it disappears if you teleport or you travel to a different plane of existence.\nWhen the hand appears, you name one major landmark, such as a city, mountain, castle, or battlefield on the same plane of existence as you. Someone in history must have visited the site and mapped it. If the landmark appears on no map in existence, the spell fails. Otherwise, whenever you move toward the hand, it moves away from you at the same speed you moved, and it moves in the direction of the landmark, always remaining 5 feet away from you.\nIf you don\'t move toward the hand, it remains in place until you do and beckons for you to follow once every 1d4 minutes.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Hellish Rebuke',
      'Level': '1st',
      'Casting Time': 'Reaction',
      'Duration': 'Instantaneous',
      'Range': '60 feet',
      'Components': 'V, S',
      'Text': 'You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one.',
      'At Higher Levels': 'At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.'
    },
    {
      'Name': 'Identify',
      'Level': '1st',
      'Casting Time': '1 Min.',
      'Duration': 'Instantaneous',
      'Range': 'Touch',
      'Components': 'V, S, M (a pearl worth at least 100 gp and an owl feather)',
      'Text': 'You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it.\nIf you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Illusory Script',
      'Level': '1st',
      'Casting Time': '1 Min.',
      'Duration': '10 days',
      'Range': 'Touch',
      'Components': 'S, M (a lead-based ink worth at least 10 gp, which the spell consumes)',
      'Text': 'You write on parchment, paper, or some other suitable writing material and imbue it with a potent illusion that lasts for the duration.\nTo you and any creatures you designate when you cast the spell, the writing appears normal, written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, you can cause the writing to appear to be an entirely different message, written in a different hand and language, though the language must be one you know.\nShould the spell be dispelled, the original script and the illusion both disappear.\nA creature with truesight can read the hidden message.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Immolation',
      'Level': '5th',
      'Casting Time': 'Action',
      'Duration': 'Concentration, up to 1 minute',
      'Range': '90 feet',
      'Components': 'V',
      'Text': 'Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw. It takes 8d6 fire damage on a failed save, or half as much damage on a successful one. On a failed save, the target also burns for the spell\'s duration. The burning target sheds bright light in a 30-foot radius and dim light for an additional 30 feet. At the end of each of its turns, the target repeats the saving throw. It takes 4d6 fire damage on a failed save, and the spell ends on a successful one. These magical flames can\'t be extinguished by nonmagical means.\nIf damage from this spell kills a target, the target is turned to ash.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Investiture of Flame',
      'Level': '6th',
      'Casting Time': 'Action',
      'Duration': 'Concentration, up to 10 minutes',
      'Range': 'Self',
      'Components': 'V, S',
      'Text': 'Flames race across your body, shedding bright light in a 30-foot radius and dim light for an additional 30 feet for the spell\'s duration. The flames don\'t harm you. Until the spell ends, you gain the following benefits:\nYou are immune to fire damage and have resistance to cold damage.\nAny creature that moves within 5 feet of you for the first time on a turn or ends its turn there takes 1d10 fire damage.\nYou can use your action to create a line of fire 15 feet long and 5 feet wide extending from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 4d8 fire damage on a failed save, or half as much damage on a successful one.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Light',
      'Level': 'Cantrip',
      'Casting Time': 'Action',
      'Duration': '1 hour',
      'Range': 'Touch',
      'Components': 'V, M (a firefly or phosphorescent moss)',
      'Text': 'You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.\nIf you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Mage Hand',
      'Level': 'Cantrip',
      'Casting Time': 'Action',
      'Duration': '1 minute',
      'Range': '30 feet',
      'Components': 'V, S',
      'Text': 'A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.\nYou can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.\nThe hand can\'t attack, activate magic items, or carry more than 10 pounds.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Mass Cure Wounds',
      'Level': '5th',
      'Casting Time': 'Action',
      'Duration': 'Instantaneous',
      'Range': '60 feet',
      'Components': 'V, S',
      'Text': 'A wave of healing energy washes out from a point of your choice within range. Choose up to six creatures in a 30-foot-radius sphere centered on that point. Each target regains hit points equal to 3d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.',
      'At Higher Levels': 'At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the healing increases by 1d8 for each slot level above 5th.'
    },
    {
      'Name': 'Melf\'s Minute Meteors',
      'Level': '3rd',
      'Casting Time': 'Action',
      'Duration': 'Concentration, up to 10 minutes',
      'Range': 'Self',
      'Components': 'V, S, M (niter, sulfur, and pine tar formed into a bead)',
      'Text': 'You create six tiny meteors in your space. They float in the air and orbit you for the spell\'s duration. When you cast the spell—and as a bonus action on each of your turns thereafter—you can expend one or two of the meteors, sending them streaking toward a point or points you choose within 120 feet of you. Once a meteor reaches its destination or impacts against a solid surface, the meteor explodes. Each creature within 5 feet of the point where the meteor explodes must make a Dexterity saving throw. A creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one.',
      'At Higher Levels': 'At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the number of meteors created increases by two for each slot level above 3rd.'
    },
    {
      'Name': 'Message',
      'Level': 'Cantrip',
      'Casting Time': 'Action',
      'Duration': '1 round',
      'Range': '120 feet',
      'Components': 'V, S, M (a short piece of copper wire)',
      'Text': 'You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.\nYou can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn\'t have to follow a straight line and can travel freely around corners or through openings.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Minor Illusion',
      'Level': 'Cantrip',
      'Casting Time': 'Action',
      'Duration': '1 minute',
      'Range': '30 feet',
      'Components': 'S, M (a bit of fleece)',
      'Text': 'You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.\nIf you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else\'s voice, a lion\'s roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.\nIf you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot cube. The image can\'t create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.\nIf a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Modify Spell',
      'Level': '4th',
      'Casting Time': '1 Min.',
      'Duration': 'Instantaneous',
      'Range': 'Self',
      'Components': 'V, S, M (your spellbook)',
      'Text': 'Using arcane formulas in your Spellbook, you magically alter one Arcane spell you have prepared. You can change the spell\'s color, sound, and smell, and you make one of the following modifications to the spell:\nComponents. Remove one of the spell\'s components: Verbal, Somatic, or Material. You can\'t remove the Material component of a spell that consumes that component.\nConcentration. If the spell requiresConcentration, damage can\'t break yourConcentration on the spell.\nDamage Type. If the spell has a damage type, replace it with one of the following types: Acid, Cold, Fire, Lightning, Necrotic, Poison, or Thunder. If the spell has multiple damage types, you can change only one of them.\nRange. If the spell has a range of at least 5 feet and doesn\'t have a range of Self, increase its range by a number of feet equal to 30 times your Wizard level.\nRitual. If the spell lacks the Ritual tag and has a casting time of at least 10 minutes, give it the Ritual tag.\nTargets. If the spell affects one or more creatures and doesn\'t have a range of Self, it now affects only your allies or enemies (choose which when you cast Modify Spell).\nThe chosen alteration lasts until you cast Modify Spell again or you finish a Long Rest. This altered version of the spell can\'t be added to a spellbook or Spell Scroll without first casting Create Spell.',
      'At Higher Levels': 'At Higher Levels. When you cast this spell using a Spell Slot of 5th level or higher, you can choose an additional spell modification for each slot level above 4th.'
    },
    {
      'Name': 'Mold Earth',
      'Level': 'Cantrip',
      'Casting Time': 'Action',
      'Duration': 'Instantaneous or 1 hour (see below)',
      'Range': '30 feet',
      'Components': 'S',
      'Text': 'You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:\nIf you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn\'t involve enough force to cause damage.\nYou cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour.\nIf the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour.\nIf you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Polymorph',
      'Level': '4th',
      'Casting Time': 'Action',
      'Duration': 'Concentration, up to 1 hour',
      'Range': '60 feet',
      'Components': 'V, S, M (a caterpillar cocoon)',
      'Text': 'This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a Wisdom saving throw to avoid the effect. The spell has no effect on a shapechanger or a creature with 0 hit points.\nThe transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast whose challenge rating is equal to or less than the target\'s (or the target\'s level, if it doesn\'t have a challenge rating). The target\'s game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality.\nThe target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn\'t reduce the creature\'s normal form to 0 hit points, it isn\'t knocked unconscious.\nThe creature is limited in the actions it can perform by the nature of its new form, and it can\'t speak, cast spells, or take any other action that requires hands or speech.\nThe target\'s gear melds into the new form. The creature can\'t activate, use, wield, or otherwise benefit from any of its equipment.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Prestidigitation',
      'Level': 'Cantrip',
      'Casting Time': 'Action',
      'Duration': 'Up to 1 hour',
      'Range': '10 feet',
      'Components': 'V, S',
      'Text': 'This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:\nYou create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.\nYou instantaneously light or snuff out a candle, a torch, or a small campfire.\nYou instantaneously clean or soil an object no larger than 1 cubic foot.\nYou chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.\nYou make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.\nYou create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.\nIf you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Prismatic Wall',
      'Level': '9th',
      'Casting Time': 'Action',
      'Duration': '10 minutes',
      'Range': '60 feet',
      'Components': 'V, S',
      'Text': 'A shimmering, multicolored plane of light forms a vertical opaque wall—up to 90 feet long, 30 feet high, and 1 inch thick—centered on a point you can see within range. Alternatively, you can shape the wall into a sphere up to 30 feet in diameter centered on a point you choose within range. The wall remains in place for the duration. If you position the wall so that it passes through a space occupied by a creature, the spell fails, and your action and the spell slot are wasted.\nThe wall sheds bright light out to a range of 100 feet and dim light for an additional 100 feet. You and creatures you designate at the time you cast the spell can pass through and remain near the wall without harm. If another creature that can see the wall moves to within 20 feet of it or starts its turn there, the creature must succeed on a Constitution saving throw or become blinded for 1 minute.\nThe wall consists of seven layers, each with a different color. When a creature attempts to reach into or pass through the wall, it does so one layer at a time through all the wall\'s layers. As it passes or reaches through each layer, the creature must make a Dexterity saving throw or be affected by that layer\'s properties as described below.\nThe wall can be destroyed, also one layer at a time, in order from red to violet, by means specific to each layer. Once a layer is destroyed, it remains so for the duration of the spell. An antimagic field has no effect on a prismatic wall. \nRed. The creature takes 10d6 fire damage on a failed save, or half as much damage on a successful one. While this layer is in place, nonmagical ranged attacks can\'t pass through the wall. The layer can be destroyed by dealing at least 25 cold damage to it. \nOrange. The creature takes 10d6 acid damage on a failed save, or half as much damage on a successful one. While this layer is in place, magical ranged attacks can\'t pass through the wall. The layer is destroyed by a strong wind. \nYellow. The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 60 force damage to it. \nGreen. The creature takes 10d6 poison damage on a failed save, or half as much damage on a successful one. A passwall spell, or another spell of equal or greater level that can open a portal on a solid surface, destroys this layer. \nBlue. The creature takes 10d6 cold damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 25 fire damage to it. \nIndigo. On a failed save, the creature is restrained. It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures don\'t need to be consecutive; keep track of both until the creature collects three of a kind.\nWhile this layer is in place, spells can\'t be cast through the wall. The layer is destroyed by bright light shed by a daylight spell or a similar spell of equal or higher level. \nViolet. On a failed save, the creature is blinded. It must then make a Wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of the DM\'s choosing and is no longer blinded. (Typically, a creature that is on a plane that isn\'t its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.) This layer is destroyed by a dispel magic spell or a similar spell of equal or higher level that can end spells and magical effects.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Produce Flame',
      'Level': 'Cantrip',
      'Casting Time': 'Action',
      'Duration': '10 minutes',
      'Range': 'Self',
      'Components': 'V, S',
      'Text': 'A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again.\nYou can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage.\nThis spell\'s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).',
      'At Higher Levels': ''
    },
    {
      'Name': 'Purify Food and Drink',
      'Level': '1st',
      'Casting Time': 'Action',
      'Duration': 'Instantaneous',
      'Range': '10 feet',
      'Components': 'V, S',
      'Text': 'All nonmagical food and drink within a 5-foot-radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Revivify',
      'Level': '3rd',
      'Casting Time': 'Action',
      'Duration': 'Instantaneous',
      'Range': 'Touch',
      'Components': 'V, S, M (diamonds worth 300 gp, which the spell consumes)',
      'Text': 'You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can\'t return to life a creature that has died of old age, nor can it restore any missing body parts.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Sacred Flame',
      'Level': 'Cantrip',
      'Casting Time': 'Action',
      'Duration': 'Instantaneous',
      'Range': '60 feet',
      'Components': 'V, S',
      'Text': 'Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.\nThe spell\'s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).',
      'At Higher Levels': ''
    },
    {
      'Name': 'Scorching Ray',
      'Level': '2nd',
      'Casting Time': 'Action',
      'Duration': 'Instantaneous',
      'Range': '120 feet',
      'Components': 'V, S',
      'Text': 'You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several.\nMake a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage.',
      'At Higher Levels': 'At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you create one additional ray for each slot level above 2nd.'
    },
    {
      'Name': 'Scribe Spell',
      'Level': '1st',
      'Casting Time': '2 Hours per level of the scribed spell',
      'Duration': 'Instantaneous',
      'Range': 'Self',
      'Components': 'V, S, M (a quill, a book, and 50 GP of fine inks per level of the scribed spell; this spell consumes the inks)',
      'Text': 'Channeling magic through quill and ink, you scribe an Arcane spell in your spellbook or a blank book worth at least 50 GP. The scribed spell must be of a level for which you have Spell Slots, and the book must lack the spell.\nAs you magically scribe the spell, you must copy it from another spellbook or a Spell Scroll, or you must have it prepared. If you copy it from a Spell Scroll, the scroll is destroyed. If you have the spell prepared, the casting time and component costs are halved.\nWhen the scribing is complete, the spell becomes one of your known spells in the book, appearing on its own page if the book was out of pages. The spell appears in a cipher that is understandable only to you or someone casting Identify or Scribe Spell, and if the book was blank before the scribing, that book is now your spellbook.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Scrying',
      'Level': '5th',
      'Casting Time': '10 Min.',
      'Duration': 'Concentration, up to 10 minutes',
      'Range': 'Self',
      'Components': 'V, S, M (a focus worth at least 1,000 gp, such as a crystal ball, a silver mirror, or a font filled with holy water)',
      'Text': 'You can see and hear a particular creature you choose that is on the same plane of existence as you. The target must make a Wisdom saving throw, which is modified by how well you know the target and the sort of physical connection you have to it. If a target knows you\'re casting this spell, it can fail the saving throw voluntarily if it wants to be observed.\nKnowledge of Target\nSecondhand (you have heard of the target) +5\nFirsthand (you have met the target) +0\nFamiliar (you know the target well) -5\nConnection to Target\nLikeness or picture -2\nPossession or garment -4\nBody part, lock of hair, bit of nail, or the like -10\nOn a successful save, the target isn\'t affected, and you can\'t use this spell against it again for 24 hours.\nOn a failed save, the spell creates an invisible sensor within 10 feet of the target. You can see and hear through the sensor as if you were there. The sensor moves with the target, remaining within 10 feet of it for the duration. A creature that can see invisible objects sees the sensor as a luminous orb about the size of your fist.\nInstead of targeting a creature, you can choose a location you have seen before as the target of this spell. When you do, the sensor appears at that location and doesn\'t move.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Sending',
      'Level': '3rd',
      'Casting Time': 'Action',
      'Duration': '1 round',
      'Range': 'Unlimited',
      'Components': 'V, S, M (a short piece of fine copper wire)',
      'Text': 'You send a short message of twenty-five words or less to a creature with which you are familiar. The creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately. The spell enables creatures with Intelligence scores of at least 1 to understand the meaning of your message.\nYou can send the message across any distance and even to other planes of existence, but if the target is on a different plane than you, there is a 5 percent chance that the message doesn\'t arrive.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Shield',
      'Level': '1st',
      'Casting Time': 'Reaction',
      'Duration': '1 round',
      'Range': 'Self',
      'Components': 'V, S',
      'Text': 'An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Shocking Grasp',
      'Level': 'Cantrip',
      'Casting Time': 'Action',
      'Duration': 'Instantaneous',
      'Range': 'Touch',
      'Components': 'V, S',
      'Text': 'Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can\'t take reactions until the start of its next turn.\nThe spell\'s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).',
      'At Higher Levels': ''
    },
    {
      'Name': 'Sickening Radiance',
      'Level': '4th',
      'Casting Time': 'Action',
      'Duration': 'Concentration, up to 10 minutes',
      'Range': '120 feet',
      'Components': 'V, S',
      'Text': 'Dim, greenish light spreads within a 30-foot-radius sphere centered on a point you choose within range. The light spreads around corners, and it lasts until the spell ends.\nWhen a creature moves into the spell\'s area for the first time on a turn or starts its turn there, that creature must succeed on a Constitution saving throw or take 4d10 radiant damage, and it suffers one level of exhaustion and emits a dim, greenish light in a 5-foot radius. This light makes it impossible for the creature to benefit from being invisible. The light and any levels of exhaustion caused by this spell go away when the spell ends.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Silvery Barbs',
      'Level': '1st',
      'Casting Time': 'Reaction',
      'Duration': 'Instantaneous',
      'Range': '60 feet',
      'Components': 'V',
      'Text': 'You magically distract the triggering creature and turn its momentary uncertainty into encouragement for another creature. The triggering creature must reroll the d20 and use the lower roll.\nYou can then choose a different creature you can see within range (you can choose yourself). The chosen creature has advantage on the next attack roll, ability check, or saving throw it makes within 1 minute. A creature can be empowered by only one use of this spell at a time.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Speak with Animals',
      'Level': '1st',
      'Casting Time': 'Action',
      'Duration': '10 minutes',
      'Range': 'Self',
      'Components': 'V, S',
      'Text': 'You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM\'s discretion.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Spirit Shroud',
      'Level': '3rd',
      'Casting Time': 'Bonus',
      'Duration': 'Concentration, up to 1 minute',
      'Range': 'Self',
      'Components': 'V, S',
      'Text': 'You call forth spirits of the dead, which flit around you for the spell\'s duration. The spirits are intangible and invulnerable.\nUntil the spell ends, any attack you make deals 1d8 extra damage when you hit a creature within 10 feet of you. This damage is radiant, necrotic, or cold (your choice when you cast the spell). Any creature that takes this damage can\'t regain hit points until the start of your next turn.\nIn addition, any creature of your choice that you can see that starts its turn within 10 feet of you has its speed reduced by 10 feet until the start of your next turn.',
      'At Higher Levels': 'At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for every two slot levels above 3rd.'
    },
    {
      'Name': 'Sunburst',
      'Level': '8th',
      'Casting Time': 'Action',
      'Duration': 'Instantaneous',
      'Range': '150 feet',
      'Components': 'V, S, M (fire and a piece of sunstone)',
      'Text': 'Brilliant sunlight flashes in a 60-foot radius centered on a point you choose within range. Each creature in that light must make a Constitution saving throw. On a failed save, a creature takes 12d6 radiant damage and is blinded for 1 minute. On a successful save, it takes half as much damage and isn\'t blinded by this spell. Undead and oozes have disadvantage on this saving throw.\nA creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded.\nThis spell dispels any darkness in its area that was created by a spell.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Teleportation Circle',
      'Level': '5th',
      'Casting Time': '1 Min.',
      'Duration': '1 round',
      'Range': '10 feet',
      'Components': 'V, M (rare chalks and inks infused with precious gems worth 50 gp, which the spell consumes)',
      'Text': 'As you cast the spell, you draw a 10-foot-diameter circle on the ground inscribed with sigils that link your location to a permanent teleportation circle of your choice whose sigil sequence you know and that is on the same plane of existence as you. A shimmering portal opens within the circle you drew and remains open until the end of your next turn. Any creature that enters the portal instantly appears within 5 feet of the destination circle or in the nearest unoccupied space if that space is occupied.\nMany major temples, guilds, and other important places have permanent teleportation circles inscribed somewhere within their confines. Each such circle includes a unique sigil sequence—a string of magical runes arranged in a particular pattern. When you first gain the ability to cast this spell, you learn the sigil sequences for two destinations on the Material Plane, determined by the DM. You can learn additional sigil sequences during your adventures. You can commit a new sigil sequence to memory after studying it for 1 minute.\nYou can create a permanent teleportation circle by casting this spell in the same location every day for one year. You need not use the circle to teleport when you cast the spell in this way.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Tenser\'s Floating Disk',
      'Level': '1st',
      'Casting Time': 'Action',
      'Duration': '1 hour',
      'Range': '30 feet',
      'Components': 'V, S, M (a drop of mercury)',
      'Text': 'This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground.\nThe disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. It can move across uneven terrain, up or down stairs, slopes and the like, but it can\'t cross an elevation change of 10 feet or more. For example, the disk can\'t move across a 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom.\nIf you move more than 100 feet from the disk (typically because it can\'t move around an obstacle to follow you), the spell ends.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Unseen Servant',
      'Level': '1st',
      'Casting Time': 'Action',
      'Duration': '1 hour',
      'Range': '60 feet',
      'Components': 'V, S, M (a piece of string and a bit of wood)',
      'Text': 'This spell creates an invisible, mindless, shapeless, Medium force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can\'t attack. If it drops to 0 hit points, the spell ends.\nOnce on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wine. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command.\nIf you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Wall of Fire',
      'Level': '4th',
      'Casting Time': 'Action',
      'Duration': 'Concentration, up to 1 minute',
      'Range': '120 feet',
      'Components': 'V, S, M (a small piece of phosphorus)',
      'Text': 'You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration.\nWhen the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 fire damage, or half as much damage on a successful save.\nOne side of the wall, selected by you when you cast this spell, deals 5d8 fire damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage.',
      'At Higher Levels': 'At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th.'
    },
    {
      'Name': 'Wall of Light',
      'Level': '5th',
      'Casting Time': 'Action',
      'Duration': 'Concentration, up to 10 minutes',
      'Range': '120 feet',
      'Components': 'V, S, M (a hand mirror)',
      'Text': 'A shimmering wall of bright light appears at a point you choose within range. The wall appears in any orientation you choose: horizontally, vertically, or diagonally. It can be free floating, or it can rest on a solid surface. The wall can be up to 60 feet long, 10 feet high, and 5 feet thick. The wall blocks line of sight, but creatures and objects can pass through it. It emits bright light out to 120 feet and dim light for an additional 120 feet.\nWhen the wall appears, each creature in its area must make a Constitution saving throw. On a failed save, a creature takes 4d8 radiant damage, and it is blinded for 1 minute. On a successful save, it takes half as much damage and isn\'t blinded. A blinded creature can make a Constitution saving throw at the end of each of its turns, ending the effect on itself on a success.\nA creature that ends its turn in the wall\'s area takes 4d8 radiant damage.\nUntil the spell ends, you can use an action to launch a beam of radiance from the wall at one creature you can see within 60 feet of it. Make a ranged spell attack. On a hit, the target takes 4d8 radiant damage. Whether you hit or miss, reduce the length of the wall by 10 feet. If the wall\'s length drops to 0 feet, the spell ends.',
      'At Higher Levels': 'At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.'
    },
    {
      'Name': 'Wild Cunning',
      'Level': '1st',
      'Casting Time': 'Action',
      'Duration': 'Instantaneous',
      'Range': '120 feet',
      'Components': 'V, S',
      'Text': 'You call out to the spirits of nature to aid you. When you cast this spell, choose one of the following effects:\nIf there are any tracks on the ground within range, you know where they are, and you make Wisdom (Survival) checks to follow these tracks with advantage for 1 hour or until you cast this spell again.\nIf there is edible forage within range, you know it and where to find it.\nIf there is clean drinking water within range, you know it and where to find it.\nIf there is suitable shelter for you and your companions with range, you know it and where to find.\nSend the spirits to bring back wood for a fire and to set up a campsite in the area using your supplies. The spirits build the fire in a circle of stones, put up tents, unroll bedrolls, and put out any rations and water for consumption.\nHave the spirits instantly break down a campsite, which includes putting out a fire, taking down tents, packing up bags, and burying any rubbish.',
      'At Higher Levels': ''
    },
    {
      'Name': 'Wither and Bloom',
      'Level': '2nd',
      'Casting Time': 'Action',
      'Duration': 'Instantaneous',
      'Range': '60 feet',
      'Components': 'V, S, M (a withered vine twisted into a loop)',
      'Text': 'You invoke both death and life upon a 10-foot-radius sphere centered on a point within range. Each creature of your choice in that area must make a Constitution saving throw, taking 2d6 necrotic damage on a failed save, or half as much damage on a successful one. Nonmagical vegetation in that area withers.\nIn addition, one creature of your choice in that area can spend and roll one of its unspent Hit Dice and regain a number of hit points equal to the roll plus your spellcasting ability modifier.',
      'At Higher Levels': 'At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot above the 2nd, and the number of Hit Dice that can be spent and added to the healing roll increases by one for each slot above 2nd.'
    },
    {
      'Name': 'Wristpocket',
      'Level': '2nd',
      'Casting Time': 'Action',
      'Duration': 'Concentration, up to 1 hour',
      'Range': 'Self',
      'Components': 'S',
      'Text': 'You flick your wrist, causing one object in your hand to vanish. The object, which only you can be holding and can weigh no more than 5 pounds, is transported to an extradimensional space, where it remains for the duration.\nUntil the spell ends, you can use your action to summon the object to your free hand, and you can use your action to return the object to the extradimensional space. An object still in the pocket plane when the spell ends appears in your space, at your feet.',
      'At Higher Levels': ''
    }
  ];