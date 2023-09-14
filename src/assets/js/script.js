const R6attacker = document.querySelector("#attacker");
const R6defender = document.querySelector("#defender");
const R6img = document.querySelector(".operator-img");
const R6badge = document.querySelector(".operator-badge");
const R6name = document.querySelector(".operator-name");
const footerHeart = document.querySelector("#heart");
const supportedpatch = document.querySelector("#supportedpatch");

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
const apykey = "Ut1qawz-21bc45e7f3d0"
async function randomAttacker() {
  try {
    const response = await fetch(`https://api.r6roulette.de/role/attacker?api_key=${apykey}`);
    const data = await response.json();
    randomOperator(data);
  } catch (error) {
    console.error('%cError fetching attackers:', 'color: red; font-size: 14px', error);
    console.log('%cPlease check your API key and try again. If the problem persists, create a Ticket at https://pnnet.dev/discord for assistance. ', 'color: red; font-size: 14px');

  }
}

async function randomDefender() {
  try {
    const response = await fetch(`https://api.r6roulette.de/role/defender?api_key=${apykey}`);
    const data = await response.json();
    randomOperator(data);
  } catch (error) {
    console.error('%cError fetching attackers:', 'color: red; font-size: 14px', error);
    console.log('%cPlease check your API key and try again. If the problem persists, create a Ticket at https://pnnet.dev/discord for assistance. ', 'color: red; font-size: 14px');
  }
}

function randomize() {
  select = Math.floor(Math.random() * 2);
  if (select == 0) {
    randomAttacker();
  } else {
    randomDefender();
  }
}

function randomOperator(operators) {
  const chosen = operators[Math.floor(Math.random() * operators.length)];
  R6img.src = chosen.img;
  R6badge.src = chosen.badge;
  R6name.textContent = chosen.name;
  const operatorPrimary = chosen.weapons.filter(weapon => weapon.weapon_type === 'primary');
  const operatorSecondary = chosen.weapons.filter(weapon => weapon.weapon_type === 'secondary');
  const randomPrimary = operatorPrimary[Math.floor(Math.random() * operatorPrimary.length)];
  const randomSecondary = operatorSecondary[Math.floor(Math.random() * operatorSecondary.length)];
  const randomPrimaryAttachment = randomPrimary.attachments[Math.floor(Math.random() * randomPrimary.attachments.length)];
  const randomPrimaryGrip = randomPrimary.gripes[Math.floor(Math.random() * randomPrimary.gripes.length)];
  const randomPrimaryScope = randomPrimary.scopes[Math.floor(Math.random() * randomPrimary.scopes.length)];
  const randomSecondaryAttachment = randomSecondary.attachments[Math.floor(Math.random() * randomSecondary.attachments.length)];
  const randomSecondaryGrip = randomSecondary.gripes[Math.floor(Math.random() * randomSecondary.gripes.length)];
  const randomSecondaryScope = randomSecondary.scopes[Math.floor(Math.random() * randomSecondary.scopes.length)];
  const randomGadget = chosen.gadgets[Math.floor(Math.random() * chosen.gadgets.length)];
  operator_weapons.textContent = randomPrimary.weapon_name;
  operator_weapons_img.src = randomPrimary.img;
  Attachment.textContent = randomPrimaryAttachment;
  Scope.textContent = randomPrimaryScope;
  Grip.textContent = randomPrimaryGrip;

  operator_weapons2.textContent = randomSecondary.weapon_name;
  operator_weapons2_img.src = randomSecondary.img;
  Attachment2.textContent = randomSecondaryAttachment;
  Scope2.textContent = randomSecondaryScope;
  Grip2.textContent = randomSecondaryGrip;

  operator_gadgets.textContent = randomGadget.gadget_name;
  operator_gadgets_img.src = randomGadget.img;

  R6img.onerror = function () {
    this.src = `https://pic.pnnet.dev/300x500?text=${chosenName}`;
  };

  R6badge.onerror = function () {
    this.src = `https://pic.pnnet.dev/201x201?text=${chosenName}`;
  };

  operator_weapons_img.onerror = function () {
    this.src = `https://pic.pnnet.dev/290x100?text=${operator_weapons.textContent}`;
  };

  operator_weapons2_img.onerror = function () {
    this.src = `https://pic.pnnet.dev/290x100?text=${operator_weapons2.textContent}`;
  };

  operator_gadgets_img.onerror = function () {
    this.src = `https://pic.pnnet.dev/290x100?text=${operator_gadgets.textContent}`;
  };
}


async function getChallenges() {
  try {
    const response = await fetch(`https://api.r6roulette.de/challenges?api_key=${apykey}`);
    const data = await response.json();
    displayRandomChallenge(data);
  } catch (error) {
    console.error('%cError fetching challenges:', 'color: red; font-size: 14px', error);
    console.log('%cPlease check your API key and try again. If the problem persists, create a Ticket at https://pnnet.dev/discord for assistance. ', 'color: red; font-size: 14px');
  }
}

function displayRandomChallenge(challenges) {
  const randomChallengeButton = document.querySelector('#random-challenge-button');
  randomChallengeButton.addEventListener('click', () => {
    getrandomchallenges(challenges);
  });
  getrandomchallenges(challenges);
}

function getrandomchallenges(challenges) {
  const challengeDescription_de = document.querySelector('.challenge-description_de');
  const challengeDescription_en = document.querySelector('.challenge-description_en');
  const challengeTitle_de = document.querySelector('.challenge-title_de');
  const challengeTitle_en = document.querySelector('.challenge-title_en');
  const getrandomchallengesdex = Math.floor(Math.random() * challenges.length);
  const randomChallenge = challenges[getrandomchallengesdex];
  challengeTitle_de.textContent = randomChallenge.title_german;
  challengeTitle_en.textContent = randomChallenge.title_english;
  challengeDescription_de.textContent = randomChallenge.description_german;
  challengeDescription_en.textContent = randomChallenge.description_english;
}

function getLastChangelog(type) {
  fetch(`https://api.r6roulette.de/changelog/${type}/latest?api_key=${apykey}`)
    .then(response => response.json())
    .then(data => {
      populateChangelogModal(data, type);

      supportedpatch.innerText = data[0].Upatch;
    })
    .catch(error => {
      console.error('Error fetching changelog:', error);
    });
}


function populateChangelogModal(changelog, type) {
  const log = document.querySelector(`#${type}`);
  const date = new Date(changelog[0].created_at);
  datestring = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
  const messageWithListItems = changelog[0].message.replace(/-/g, '<li>');
  const Item = '<div class="log">' +
    '<ul>' + messageWithListItems + '</ul>' +
    '<code class="">V ' + changelog[0].version + ' | ' + datestring + ' </code>' +
    '</div>';
  log.innerHTML = Item;
}

function openchangelog() {
  const element = document.getElementById('changelogbox');
  element.style.display = 'block';
}

function openimpressum() {
  const element = document.getElementById('impressumbox');
  element.style.display = 'block';
}


document.addEventListener('DOMContentLoaded', function () {
  randomize()
  getChallenges();
  getLastChangelog('web');
  getLastChangelog('bot');
  const myButton1 = document.getElementById('close_imp');
  myButton1.addEventListener('click', function () {
    const element = document.getElementById('impressumbox');
    element.style.display = 'none';
  });

  const myButton = document.getElementById('close_change');
  myButton.addEventListener('click', function () {
    const element = document.getElementById('changelogbox');
    element.style.display = 'none';
  });
});

window.addEventListener("focus", function () {
  footerHeart.classList.add("fa-bounce");
});
window.addEventListener("blur", function () {
  footerHeart.classList.remove("fa-bounce");
});