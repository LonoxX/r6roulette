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

// Grip
Grip = document.querySelector(".weapon-grip-name");
Grip2 = document.querySelector(".secondweapon-grip-name");

// Scope
Scope = document.querySelector(".weapon-scope-name");
Scope2 = document.querySelector(".secondweapon-scope-name");



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
    var operatorPrimarygripe = Object.values(randomPrimary.gripe);
    var randomPrimaryGrip = operatorPrimarygripe[Math.floor(Math.random() * operatorPrimarygripe.length)];    var operatorPrimaryScope = Object.values(randomPrimary.scope);
    var randomPrimaryScope = operatorPrimaryScope[Math.floor(Math.random() * operatorPrimaryScope.length)]; 

    var operatorSecondary = Object.values(chosen.secondary);
    var randomSecondary = operatorSecondary[Math.floor(Math.random() * operatorSecondary.length)];
    var operatorSecondaryScope = Object.values(randomSecondary.scope);
    var randomSecondaryScope = operatorSecondaryScope[Math.floor(Math.random() * operatorSecondaryScope.length)];
    var operatorSecondarygripe = Object.values(randomSecondary.gripe);
    var randomSecondaryGrip = operatorSecondarygripe[Math.floor(Math.random() * operatorSecondarygripe.length)];
    var operatorSecondaryAttachments = Object.values(randomSecondary.attachment);
    var randomSecondaryAttachment = operatorSecondaryAttachments[Math.floor(Math.random() * operatorSecondaryAttachments.length)];





    var operatorGadgets = Object.values(chosen.gadgets);
    var randomGadget = operatorGadgets[Math.floor(Math.random() * operatorGadgets.length)];

    // Main Weapon
    operator_weapons.textContent = randomPrimary.name;
    operator_weapons_img.src = randomPrimary.img;
    Attachment.textContent = randomPrimaryAttachment.name;
    Scope.textContent = randomPrimaryScope.name;
    console.log(randomPrimaryScope.name);
    Grip.textContent = randomPrimaryGrip.name;

    // Secondary Weapon
    operator_weapons2.textContent = randomSecondary.name;
    operator_weapons2_img.src = randomSecondary.img;
    Attachment2.textContent = randomSecondaryAttachment.name;
    Scope2.textContent = randomSecondaryScope.name;
    Grip2.textContent = randomSecondaryGrip.name;
    console.log(randomSecondaryAttachment.name);


    // Gadget
    operator_gadgets.textContent = randomGadget.name;
    operator_gadgets_img.src = randomGadget.img;
}
