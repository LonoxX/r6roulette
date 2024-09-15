const R6attacker = document.querySelector("#attacker");
const R6defender = document.querySelector("#defender");
const R6img = document.querySelector(".operator-img");
const R6badge = document.querySelector(".operator-badge");
const R6name = document.querySelector(".operator-name");
const footerHeart = document.querySelector("#heart");
const supportedpatch = document.querySelector("#supportedpatch");

const operatorWeapons = document.querySelector(".weapon-name");
const operatorWeaponsImg = document.querySelector(".weapon-img");
const operatorWeapons2 = document.querySelector(".secondweapon-name");
const operatorWeapons2Img = document.querySelector(".secondweapon-img");
const operatorGadgets = document.querySelector(".gadget-name");
const operatorGadgetsImg = document.querySelector(".gadget-img");

const attachment = document.querySelector(".weapon-attachment-name");
const attachment2 = document.querySelector(".secondweapon-attachment-name");
const grip = document.querySelector(".weapon-grip-name");
const grip2 = document.querySelector(".secondweapon-grip-name");
const scope = document.querySelector(".weapon-scope-name");
const scope2 = document.querySelector(".secondweapon-scope-name");

const API_KEY = "r6roulette-web";
const API_BASE_URL = "https://api.r6roulette.de";

async function fetchData(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}?api_key=${API_KEY}`);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`%cError fetching ${endpoint}:`, "color: red; font-size: 14px", error);
    console.log(`%cPlease check your API key and try again. If the problem persists, create a Ticket at https://pnnet.dev/discord for assistance.`, "color: red; font-size: 14px");

    setFallbackValues();
    showErrorModal();
  }
}


async function getRandomOperator(role) {
  const data = await fetchData(`role/${role}`);
  if (data) randomOperator(data);
}

function randomOperator(operators) {
  const chosen = randomItem(operators);

  if (!chosen) {
    setFallbackValues();
    return;
  }

  R6img.src = chosen.img || "";
  R6badge.src = chosen.badge || "";
  R6name.textContent = chosen.name || "N/A";

  const primaryWeapon = randomItem(chosen.weapons.filter(weapon => weapon.weapon_type === "primary"));
  const secondaryWeapon = randomItem(chosen.weapons.filter(weapon => weapon.weapon_type === "secondary"));
  const gadget = randomItem(chosen.gadgets);

  displayWeapon(primaryWeapon, operatorWeapons, operatorWeaponsImg, attachment, grip, scope);
  displayWeapon(secondaryWeapon, operatorWeapons2, operatorWeapons2Img, attachment2, grip2, scope2);

  operatorGadgets.textContent = gadget?.gadget_name || "N/A";
  operatorGadgetsImg.src = gadget?.img || "";

}

function randomItem(items) {
  if (!items || items.length === 0) {
    return null;
  }
  return items[Math.floor(Math.random() * items.length)];
}

function displayWeapon(weapon, weaponNameElem, weaponImgElem, attachmentElem, gripElem, scopeElem) {
  weaponNameElem.textContent = weapon.weapon_name || "N/A";
  weaponImgElem.src = weapon.img || "";

  attachmentElem.textContent = randomItem(weapon.attachments) || "N/A";
  gripElem.textContent = randomItem(weapon.gripes) || "N/A";
  scopeElem.textContent = randomItem(weapon.scopes) || "N/A";
}



R6attacker.addEventListener("click", () => getRandomOperator("attacker"));
R6defender.addEventListener("click", () => getRandomOperator("defender"));

function randomize() {
  const role = Math.random() < 0.5 ? "attacker" : "defender";
  getRandomOperator(role);
}

async function getChallenges() {
  const challenges = await fetchData("challenges");
  if (challenges) displayRandomChallenge(challenges);
}

function displayRandomChallenge(challenges) {
  const randomChallengeButton = document.querySelector("#random-challenge-button");
  randomChallengeButton.addEventListener("click", () => getRandomChallenge(challenges));
  getRandomChallenge(challenges);
}

function getRandomChallenge(challenges) {
  const randomChallenge = randomItem(challenges);
  const challengeTitle_de = document.querySelector(".challenge-title_de");
  const challengeTitle_en = document.querySelector(".challenge-title_en");
  const challengeDescription_de = document.querySelector(".challenge-description_de");
  const challengeDescription_en = document.querySelector(".challenge-description_en");

  challengeTitle_de.textContent = randomChallenge.title_german || "N/A";
  challengeTitle_en.textContent = randomChallenge.title_english || "N/A";
  challengeDescription_de.textContent = randomChallenge.description_german || "N/A";
  challengeDescription_en.textContent = randomChallenge.description_english || "N/A";
}

async function getLastChangelog(type) {
  const changelog = await fetchData(`changelog/${type}/latest`);
  if (changelog) populateChangelogModal(changelog, type);
}

function populateChangelogModal(changelog, type) {
  const log = document.querySelector(`#${type}`);
  const firstLog = changelog[0];
  if (firstLog) {
    const date = new Date(firstLog.created_at);
    const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    const sanitizedMessage = firstLog.message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    log.innerHTML = `
      <div class="log">
        <ul>${sanitizedMessage.replace(/-/g, "</li><li>")}</ul>
        <code>V ${firstLog.version} | ${formattedDate}</code>
      </div>`;
    supportedpatch.textContent = firstLog.Upatch || "N/A";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  randomize();
  getChallenges();
  getLastChangelog("web");
  getLastChangelog("bot");
  setupCloseButton("close_imp", "impressumbox");
  setupCloseButton("close_privacy", "privacybox");
  setupCloseButton("close_change", "changelogbox");
});

function setupCloseButton(buttonId, boxId) {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", () => {
    document.getElementById(boxId).style.display = "none";
  });
}


function openchangelog() {
  const element = document.getElementById("changelogbox");
  element.style.display = "block";
}

function openimpressum() {
  const element = document.getElementById("impressumbox");
  element.style.display = "block";
}

function openprivacy() {
  const element = document.getElementById("privacybox");
  element.style.display = "block";
}


function showErrorModal() {
  const modal = document.getElementById("error-modal");
  modal.style.display = "block";

  const closeModal = document.getElementById("close-modal");
  closeModal.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

window.addEventListener("focus", function () {
  footerHeart.classList.add("fa-bounce");
});
window.addEventListener("blur", function () {
  footerHeart.classList.remove("fa-bounce");
});

function setFallbackValues() {
  R6img.src = `assets/img/Fallback/Ace.png`;
  R6badge.src = `assets/img/Fallback/Ace-Badge.png`;
  R6name.textContent = "Fallback Values";

  operatorWeapons.textContent = "Primary Weapon";
  operatorWeaponsImg.src = `assets/img/Fallback/AK-12.png`;
  attachment.textContent = "Attachment";
  grip.textContent = "Grip";
  scope.textContent = "Scope";

  operatorWeapons2.textContent = "Secondary Weapon";
  operatorWeapons2Img.src = `assets/img/Fallback/P9.png`;
  attachment2.textContent = "Attachment";
  grip2.textContent = "Grip";
  scope2.textContent = "Scope";

  operatorGadgets.textContent = "Gadget";
  operatorGadgetsImg.src = `assets/img/Fallback/Claymore.png`;
  const challengeTitle_de = document.querySelector(".challenge-title_de");
  const challengeTitle_en = document.querySelector(".challenge-title_en");
  const challengeDescription_de = document.querySelector(".challenge-description_de");
  const challengeDescription_en = document.querySelector(".challenge-description_en");

  challengeTitle_de.textContent = "Aktuell nicht verfügbar";
  challengeTitle_en.textContent = "Currently Unavailable";
  challengeDescription_de.textContent = "Der Dienst ist aktuell nicht verfügbar. Bitte versuchen Sie es später erneut.";
  challengeDescription_en.textContent = "Service Currently Unavailable Please try again later.";

  supportedpatch.textContent = "x.x.x";
}
