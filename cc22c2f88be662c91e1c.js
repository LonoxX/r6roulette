const R6attacker=document.querySelector("#attacker"),R6defender=document.querySelector("#defender"),R6img=document.querySelector(".operator-img"),R6badge=document.querySelector(".operator-badge"),R6name=document.querySelector(".operator-name"),footerHeart=document.querySelector("#heart"),supportedpatch=document.querySelector("#supportedpatch"),operatorWeapons=document.querySelector(".weapon-name"),operatorWeaponsImg=document.querySelector(".weapon-img"),operatorWeapons2=document.querySelector(".secondweapon-name"),operatorWeapons2Img=document.querySelector(".secondweapon-img"),operatorGadgets=document.querySelector(".gadget-name"),operatorGadgetsImg=document.querySelector(".gadget-img"),attachment=document.querySelector(".weapon-attachment-name"),attachment2=document.querySelector(".secondweapon-attachment-name"),grip=document.querySelector(".weapon-grip-name"),grip2=document.querySelector(".secondweapon-grip-name"),scope=document.querySelector(".weapon-scope-name"),scope2=document.querySelector(".secondweapon-scope-name"),API_KEY="r6roulette-web",API_BASE_URL="https://api.r6roulette.de";async function fetchData(e){try{const t=await fetch(`${API_BASE_URL}/${e}?api_key=${API_KEY}`);if(!t.ok)throw new Error(`Error ${t.status}: ${t.statusText}`);return await t.json()}catch(t){console.error(`%cError fetching ${e}:`,"color: red; font-size: 14px",t),console.log("%cPlease check your API key and try again. If the problem persists, create a Ticket at https://pnnet.dev/discord for assistance.","color: red; font-size: 14px"),setFallbackValues(),showErrorModal()}}async function getRandomOperator(e){const t=await fetchData(`role/${e}`);t&&randomOperator(t)}function randomOperator(e){const t=randomItem(e);if(!t)return void setFallbackValues();R6img.src=t.img||"",R6badge.src=t.badge||"",R6name.textContent=t.name||"N/A";const n=randomItem(t.weapons.filter((e=>"primary"===e.weapon_type))),o=randomItem(t.weapons.filter((e=>"secondary"===e.weapon_type))),a=randomItem(t.gadgets);displayWeapon(n,operatorWeapons,operatorWeaponsImg,attachment,grip,scope),displayWeapon(o,operatorWeapons2,operatorWeapons2Img,attachment2,grip2,scope2),operatorGadgets.textContent=a?.gadget_name||"N/A",operatorGadgetsImg.src=a?.img||""}function randomItem(e){return e&&0!==e.length?e[Math.floor(Math.random()*e.length)]:null}function displayWeapon(e,t,n,o,a,r){t.textContent=e.weapon_name||"N/A",n.src=e.img||"",o.textContent=randomItem(e.attachments)||"N/A",a.textContent=randomItem(e.gripes)||"N/A",r.textContent=randomItem(e.scopes)||"N/A"}function randomize(){getRandomOperator(Math.random()<.5?"attacker":"defender")}async function getChallenges(){const e=await fetchData("challenges");e&&displayRandomChallenge(e)}function displayRandomChallenge(e){document.querySelector("#random-challenge-button").addEventListener("click",(()=>getRandomChallenge(e))),getRandomChallenge(e)}function getRandomChallenge(e){const t=randomItem(e),n=document.querySelector(".challenge-title_de"),o=document.querySelector(".challenge-title_en"),a=document.querySelector(".challenge-description_de"),r=document.querySelector(".challenge-description_en");n.textContent=t.title_german||"N/A",o.textContent=t.title_english||"N/A",a.textContent=t.description_german||"N/A",r.textContent=t.description_english||"N/A"}async function getLastChangelog(e){const t=await fetchData(`changelog/${e}/latest`);t&&populateChangelogModal(t,e)}function populateChangelogModal(e,t){const n=document.querySelector(`#${t}`),o=e[0];if(o){const e=new Date(o.created_at),t=`${e.getDate()}.${e.getMonth()+1}.${e.getFullYear()}`,a=o.message.replace(/</g,"&lt;").replace(/>/g,"&gt;");n.innerHTML=`\n      <div class="log">\n        <ul>${a.replace(/-/g,"</li><li>")}</ul>\n        <code>V ${o.version} | ${t}</code>\n      </div>`,supportedpatch.textContent=o.Upatch||"N/A"}}function setupCloseButton(e,t){document.getElementById(e).addEventListener("click",(()=>{document.getElementById(t).style.display="none"}))}function openchangelog(){document.getElementById("changelogbox").style.display="block"}function openimpressum(){document.getElementById("impressumbox").style.display="block"}function openprivacy(){document.getElementById("privacybox").style.display="block"}function showErrorModal(){const e=document.getElementById("error-modal");e.style.display="block",document.getElementById("close-modal").onclick=function(){e.style.display="none"},window.onclick=function(t){t.target===e&&(e.style.display="none")}}function setFallbackValues(){R6img.src="assets/img/Fallback/Ace.png",R6badge.src="assets/img/Fallback/Ace-Badge.png",R6name.textContent="Fallback Values",operatorWeapons.textContent="Primary Weapon",operatorWeaponsImg.src="assets/img/Fallback/AK-12.png",attachment.textContent="Attachment",grip.textContent="Grip",scope.textContent="Scope",operatorWeapons2.textContent="Secondary Weapon",operatorWeapons2Img.src="assets/img/Fallback/P9.png",attachment2.textContent="Attachment",grip2.textContent="Grip",scope2.textContent="Scope",operatorGadgets.textContent="Gadget",operatorGadgetsImg.src="assets/img/Fallback/Claymore.png";const e=document.querySelector(".challenge-title_de"),t=document.querySelector(".challenge-title_en"),n=document.querySelector(".challenge-description_de"),o=document.querySelector(".challenge-description_en");e.textContent="Aktuell nicht verfügbar",t.textContent="Currently Unavailable",n.textContent="Der Dienst ist aktuell nicht verfügbar. Bitte versuchen Sie es später erneut.",o.textContent="Service Currently Unavailable Please try again later.",supportedpatch.textContent="x.x.x"}R6attacker.addEventListener("click",(()=>getRandomOperator("attacker"))),R6defender.addEventListener("click",(()=>getRandomOperator("defender"))),document.addEventListener("DOMContentLoaded",(()=>{randomize(),getChallenges(),getLastChangelog("web"),getLastChangelog("bot"),setupCloseButton("close_imp","impressumbox"),setupCloseButton("close_privacy","privacybox"),setupCloseButton("close_change","changelogbox")})),window.addEventListener("focus",(function(){footerHeart.classList.add("fa-bounce")})),window.addEventListener("blur",(function(){footerHeart.classList.remove("fa-bounce")}));