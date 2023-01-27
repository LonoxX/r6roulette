var Attacker  = {
    Iana: {
        name: 'Iana',
        role: 'Attacker',
        img: 'img/Attacker/Iana.png',
        badge: 'img/Attacker/Badge/Iana-Badge.png',
        primary: {
            primary: {
                name: 'ARX200', 
                img: 'img/weapon/ARX200.png',
                attachment: { 
                    attachment2: {name: 'Compensator'},
                    attachment3: {name: 'Flash Hider'},
                    attachment4: {name: 'Suppressor'},
                }
        },
            primary2: {
                name: 'G36C', 
                img: 'img/weapon/G36C.png',
                attachment: {
                    attachment3: {name: 'Flash Hider'},
                    attachment4: {name: 'Suppressor'},
                }
        },
            
        },
        secondary: {
            secondary: {name: 'Mk 1 9mm',
             img: 'img/weapon/Mk1_9mm.png',
             attachment: {
                 attachment3: {name: 'Flash Hider'},
                 attachment4: {name: 'Suppressor'},
             }
            },
            secondary2: {
                name: 'GONNE-6',
                img: 'img/weapon/GONNE-6.png',
                attachment: {
                    attachment3: {name: 'Keins verfügbar'},
                },
            }
        },
        gadgets: {
            gadget1: {name: 'Frag Grenade', img: 'img/gadgets/Frag_Grenade.png'},
            gadget2: {name: 'Smoke Grenade', img: 'img/gadgets/Smoke_Grenade.png'}
        }
    }
}

var Defender = {
}

R6attacker = document.querySelector("#attacker");
R6defender = document.querySelector("#defender");
R6img = document.querySelector(".operator-img");
R6badge = document.querySelector(".operator-badge");
R6name = document.querySelector(".operator-name");

// Main Weapon
operator_weapons = document.querySelector(".weapon-name");
operator_weapons_img = document.querySelector(".weapon-img");
// Secondary Weapon
operator_weapons2 = document.querySelector(".secondweapon-name");
operator_weapons2_img = document.querySelector(".secondweapon-img");
// Gadget
operator_gadgets = document.querySelector(".gadget-name");
operator_gadgets_img = document.querySelector(".gadget-img");


// Attachment
Attachment = document.querySelector(".weapon-attachment-name");
Attachment2 = document.querySelector(".secondweapon-attachment-name");



R6img.style.width = "352px";

R6attacker.addEventListener('click', randomAttacker);
R6defender.addEventListener('click', randomDefender);

function randomAttacker() {
    randomOperator(Object.values(Attacker), Object.values(Defender));
    R6attacker.classList.add('btns2Active');
    R6defender.classList.remove('btns2Active');
}

function randomDefender() {
    randomOperator(Object.values(Defender), Object.values(Attacker));
    R6defender.classList.add('btns2Active');
    R6attacker.classList.remove('btns2Active');
}

function randomOperator(operator) {
    chosen = operator[Math.floor(Math.random() * operator.length)];
    chosenName = chosen.name;
    operatorRole = chosen.role;
    R6img.src = "img/" + operatorRole + "/" + chosenName + ".png";
    R6badge.src = "img/" + operatorRole + "/Badge/" + chosenName + "-Badge" + ".png";
    R6img.style.width = "352px";
    R6name.textContent = chosenName;

    var operatorPrimary = Object.values(chosen.primary);
    var randomPrimary = operatorPrimary[Math.floor(Math.random() * operatorPrimary.length)];

    var operatorPrimaryAttachments = Object.values(randomPrimary.attachment);
    var randomPrimaryAttachment = operatorPrimaryAttachments[Math.floor(Math.random() * operatorPrimaryAttachments.length)];

    var operatorSecondary = Object.values(chosen.secondary);
    var randomSecondary = operatorSecondary[Math.floor(Math.random() * operatorSecondary.length)];

    var operatorPrimaryAttachments2 = Object.values(randomSecondary.attachment);
    var randomPrimaryAttachment2 = operatorPrimaryAttachments2[Math.floor(Math.random() * operatorPrimaryAttachments2.length)];

    var operatorGadgets = Object.values(chosen.gadgets);
    var randomGadget = operatorGadgets[Math.floor(Math.random() * operatorGadgets.length)];

    // Main Weapon
    operator_weapons.textContent = randomPrimary.name;
    operator_weapons_img.src = randomPrimary.img;
    Attachment.textContent = randomPrimaryAttachment.name;
    Attachment2.textContent = randomPrimaryAttachment2.name;
    // Secondary Weapon
    operator_weapons2.textContent = randomSecondary.name;
    operator_weapons2_img.src = randomSecondary.img;
    // Gadget
    operator_gadgets.textContent = randomGadget.name;
    operator_gadgets_img.src = randomGadget.img;
}
