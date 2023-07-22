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
const apykey = "r6roulette"
function randomAttacker() {
  const postData = {
    api_key: apykey
  };

  fetch('https://api.r6roulette.de/role/attacker', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(response => response.json())
    .then(data => {
      randomOperator(data);
    })
    .catch(error => {
      console.error('Error fetching attackers:', error);
    });
}

function randomDefender() {
  fetch(`https://api.r6roulette.de/role/defender?api_key=${apykey}`)
    .then(response => response.json())
    .then(data => {
      randomOperator(data);
    })
    .catch(error => {
      console.error('Error fetching defenders:', error);
    });
}

function randomOperator(operators) {
  const chosen = operators[Math.floor(Math.random() * operators.length)];
  R6img.src = chosen.img;
  R6badge.src = chosen.badge;
  R6img.style.width = "352px";
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
  fetch(`https://api.r6roulette.de/challenges?api_key=${apykey}`)
    .then(response => response.json())
    .then(data => {
      displayRandomChallenge(data);
    })
    .catch(error => {
      console.error('Error fetching challenges:', error);
    });
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
    })
    .catch(error => {
      console.error('Error fetching changelog:', error);
    });
}

function populateChangelogModal(changelog, type) {
  const cardHeader = document.querySelector(`#${type}ChangelogCard .card-header`);
  const changelogList = document.querySelector(`#${type}ChangelogList`);

  const version = changelog[0].version;
  const created_at = changelog[0].created_at;
  const message = changelog[0].message;

  cardHeader.innerHTML = `
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <p class="${type}ChangelogTitle text-uppercase">${type}</p>
      </div>
      <div>
      <i class="fas fa-circle-notch"></i> Version ${version}<p class="Changelog_Date">${created_at}</p>
      </div>
    </div>
  `;

  const messagesArray = message.split('-');
  let listItemHTML = '';
  messagesArray.forEach(msg => {
    const listItem = `<li>${msg.trim()}</li>`;
    listItemHTML += listItem;
  });

  changelogList.innerHTML = listItemHTML;
}



document.addEventListener('DOMContentLoaded', function() {
  randomAttacker();
  randomDefender();
  getChallenges();
  getLastChangelog('web');
  getLastChangelog('bot');
});

