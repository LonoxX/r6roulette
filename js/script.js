var Attacker = {
    Ace: {name: 'Ace'},
    Amaru: {name: 'Amaru'},
    Ash: {name: 'Ash'},
    Blackbeard: {name: 'Blackbeard'},
    Blitz: {name: 'Blitz'},
    Buck: {name: 'Buck'},
    Capitao: {name: 'Capitao'},
    Dokkaebi: {name: 'Dokkaebi'},
    Finka:{name: 'Finka'},
    Flores: {name: 'Flores'},
    Fuze: {name: 'Fuze'},
    Glaz: {name: 'Glaz'},
    Gridlock: {name: 'Gridlock'},
    Grim: {name: 'Grim'},
    Hibana: {name: 'Hibana'},
    Iana: {name: 'Iana'},
    IQ: {name: 'IQ'},
    Jackal: {name: 'Jackal'},
    Kali: {name: 'Kali'},
    Lion: {name: 'Lion'},
    Maverick: {name: 'Maverick'},
    Montagne: {name: 'Montagne'},
    Nokk: {name: 'Nokk'},
    Nomad: {name: 'Nomad'},
    Osa: {name: 'Osa'},
    Sens: {name: 'Sens'},
    Sledge: {name: 'Sledge'},
    Thatcher: {name: 'Thatcher'},
    Thermite: {name: 'Thermite'},
    Twitch: {name: 'Twitch'},
    Ying: {name: 'Ying'},
    Zero: {name: 'Zero'},
    Zofia: {name: 'Zofia'}
}

var Defender = {
    Alibi:{name: 'Alibi'},
    Aruni:{name: 'Aruni'},
    Azami:{name: 'Azami'},
    Bandit: {name: 'Bandit'},
    Castle: {name: 'Castle'},
    Caveira:{name: 'Caveira'},
    Clash:{name: 'Clash'},
    Doc:{name: 'Doc'},
    Echo: {name: 'Echo'},
    Ela:{name: 'Ela'},
    Frost:{name: 'Frost'},
    Goyo: {name: 'Goyo'},
    Jäger:{name: 'Jäger'},
    Kaid: {name: 'Kaid'},
    Kapkan: {name: 'Kapkan'},
    Lesion: {name: 'Lesion'},
    Melusi: {name: 'Melusi'},
    Maestro: {name: 'Maestro'},
    Mira: {name: 'Mira'},
    Mozzie: {name: 'Mozzie'},
    Mute: {name: 'Mute'},
    Oryx: {name: 'Oryx'},
    Pulse:{name: 'Pulse'},
    Rook:{name: 'Rook'},
    Smoke:{name: 'Smoke'},
    Solis:{name: 'Solis'},
    Tachanka:{name: 'Tachanka'},
    Thorn:{name: 'Thorn'},
    Thunderbird:{name: 'Thunderbird'},
    Valkyrie:{name: 'Valkyrie'},
    Vigil:{name: 'Vigil'},
    Wamai:{name: 'Wamai'},
    Warden: {name: 'Warden'}
}


//R6
R6attacker = document.querySelector("#attacker");
R6defender = document.querySelector("#defender");
R6img = document.querySelector(".op-img");
R6badge = document.querySelector(".op-badge");
R6name = document.querySelector(".op-name");


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
    R6img.src = "img/"+chosenName+".png";
    R6badge.src = "img/"+chosenName+"-Badge"+".png";
    R6img.style.width = "352px";
    R6name.textContent = chosenName;
}