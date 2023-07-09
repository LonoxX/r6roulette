const R6attacker = document.querySelector("#attacker");
const R6defender = document.querySelector("#defender");
const R6img = document.querySelector(".operator-img");
const R6badge = document.querySelector(".operator-badge");
const R6name = document.querySelector(".operator-name");

const operator_weapons = document.querySelector(".weapon-name");
const operator_weapons_img = document.querySelector(".weapon-img");
const operator_weapons2 = document.querySelector(".secondweapon-name");
const operator_weapons2_img = document.querySelector(".secondweapon-img");
const operator_gadgets = document.querySelector(".gadget-name");
const operator_gadgets_img = document.querySelector(".gadget-img");
const Attachment = document.querySelector(".weapon-attachment-name");
const Attachment2 = document.querySelector(".secondweapon-attachment-name");
const Grip = document.querySelector(".weapon-grip-name");
const Grip2 = document.querySelector(".secondweapon-grip-name");
const Scope = document.querySelector(".weapon-scope-name");
const Scope2 = document.querySelector(".secondweapon-scope-name");

R6attacker.addEventListener('click', randomAttacker);
R6defender.addEventListener('click', randomDefender);

function randomAttacker() {
  randomOperator(Object.values(Attacker), Object.values(Defender));
}

function randomDefender() {
  randomOperator(Object.values(Defender), Object.values(Attacker));
}

function randomOperator(operator) {
  const chosen = operator[Math.floor(Math.random() * operator.length)];
  const chosenName = chosen.name;
  const operatorRole = chosen.role;
  R6img.src = `assets/img/${operatorRole}/${chosenName}.png`;
  R6badge.src = `assets/img/${operatorRole}/Badge/${chosenName}-Badge.png`;
  R6img.style.width = "352px";
  R6name.textContent = chosenName;

  const operatorPrimary = Object.values(chosen.primary);
  const randomPrimary = operatorPrimary[Math.floor(Math.random() * operatorPrimary.length)];
  const operatorPrimaryAttachments = Object.values(randomPrimary.attachment);
  const randomPrimaryAttachment = operatorPrimaryAttachments[Math.floor(Math.random() * operatorPrimaryAttachments.length)];
  const operatorPrimarygripe = Object.values(randomPrimary.gripe);
  const randomPrimaryGrip = operatorPrimarygripe[Math.floor(Math.random() * operatorPrimarygripe.length)];    
  const operatorPrimaryScope = Object.values(randomPrimary.scope);
  const randomPrimaryScope = operatorPrimaryScope[Math.floor(Math.random() * operatorPrimaryScope.length)]; 

  const operatorSecondary = Object.values(chosen.secondary);
  const randomSecondary = operatorSecondary[Math.floor(Math.random() * operatorSecondary.length)];
  const operatorSecondaryScope = Object.values(randomSecondary.scope);
  const randomSecondaryScope = operatorSecondaryScope[Math.floor(Math.random() * operatorSecondaryScope.length)];
  const operatorSecondarygripe = Object.values(randomSecondary.gripe);
  const randomSecondaryGrip = operatorSecondarygripe[Math.floor(Math.random() * operatorSecondarygripe.length)];
  const operatorSecondaryAttachments = Object.values(randomSecondary.attachment);
  const randomSecondaryAttachment = operatorSecondaryAttachments[Math.floor(Math.random() * operatorSecondaryAttachments.length)];
  const operatorGadgets = Object.values(chosen.gadgets);
  const randomGadget = operatorGadgets[Math.floor(Math.random() * operatorGadgets.length)];

  operator_weapons.textContent = randomPrimary.name;
  operator_weapons_img.src = randomPrimary.img;
  Attachment.textContent = randomPrimaryAttachment.name;
  Scope.textContent = randomPrimaryScope.name;
  Grip.textContent = randomPrimaryGrip.name;

  operator_weapons2.textContent = randomSecondary.name;
  operator_weapons2_img.src = randomSecondary.img;
  Attachment2.textContent = randomSecondaryAttachment.name;
  Scope2.textContent = randomSecondaryScope.name;
  Grip2.textContent = randomSecondaryGrip.name;

  operator_gadgets.textContent = randomGadget.name;
  operator_gadgets_img.src = randomGadget.img;

  R6img.onerror = function() {
    this.src = `https://pic.pnnet.dev/300x500?text=${chosenName}`;
  };

  R6badge.onerror = function() {
    this.src = `https://pic.pnnet.dev/201x201?text=${chosenName}`;
  };

  operator_weapons_img.onerror = function() {
    this.src = `https://pic.pnnet.dev/290x100?text=${operator_weapons.textContent}`;
  };

  operator_weapons2_img.onerror = function() {
    this.src = `https://pic.pnnet.dev/290x100?text=${operator_weapons2.textContent}`;
  };

  operator_gadgets_img.onerror = function() {
    this.src = `https://pic.pnnet.dev/290x100?text=${operator_gadgets.textContent}`;
  };
}
 
function getChallenges() {
  fetch('https://api.pnnet.dev/r6roulette/challenges')
    .then(response => response.json())
    .then(data => {
      displayRandomChallenge(data);
    })
    .catch(error => {
      console.error('Error fetching challenges:', error);
    });
}
  
function displayRandomChallenge(challenges) {
  const challengeDescription = document.querySelector('.challenge-description');
  const randomChallengeButton = document.querySelector('#random-challenge-button');

  randomChallengeButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    const randomChallenge = challenges[randomIndex];
    challengeDescription.textContent = randomChallenge.description;
  });

  const randomIndex = Math.floor(Math.random() * challenges.length);
  const randomChallenge = challenges[randomIndex];
  challengeDescription.textContent = randomChallenge.description;
}

document.addEventListener('DOMContentLoaded', function() {
  randomOperator(Object.values(Attacker), Object.values(Defender));
  getChallenges();
});
