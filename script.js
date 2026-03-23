// éléments
const taille = document.getElementById("taille");
const tailleValeur = document.getElementById("tailleValeur");
const resultat = document.getElementById("resultat");

const maj = document.getElementById("maj");
const min = document.getElementById("min");
const chiffre = document.getElementById("chiffre");
const symbole = document.getElementById("symbole");

const btnGen = document.getElementById("generer");
const btnCopy = document.getElementById("copier");

const longueurTexte = document.getElementById("longueurTexte");
const niveauTexte = document.getElementById("niveauTexte");
const tempsTexte = document.getElementById("tempsTexte");
const barre = document.getElementById("barre");

const historique = document.getElementById("listeHistorique");

// caractères
const MAJ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const MIN = "abcdefghijklmnopqrstuvwxyz";
const NUM = "0123456789";
const SYM = "!@#$%^&*()_+[]{}";

// afficher taille
taille.oninput = () => {
  tailleValeur.textContent = taille.value;
};

// générer mot de passe
btnGen.onclick = () => {
  let chars = "";
  if(maj.checked) chars += MAJ;
  if(min.checked) chars += MIN;
  if(chiffre.checked) chars += NUM;
  if(symbole.checked) chars += SYM;

  if(chars === "") return alert("Choisis au moins une option");

  let pass = "";
  for(let i=0;i<taille.value;i++){
    pass += chars[Math.floor(Math.random()*chars.length)];
  }

  resultat.value = pass;

  // DETAILS
  longueurTexte.textContent = pass.length;

  let score = 0;
  if(pass.length > 8) score += 30;
  if(pass.length > 12) score += 30;
  if(symbole.checked) score += 20;
  if(chiffre.checked) score += 20;

  barre.value = score;

  if(score < 40) niveauTexte.textContent = "Faible";
  else if(score < 70) niveauTexte.textContent = "Moyen";
  else niveauTexte.textContent = "Fort";

  tempsTexte.textContent = score < 40 ? "Rapide" : score < 70 ? "Quelques heures" : "Très long";

  // HISTORIQUE
  const li = document.createElement("li");
  li.textContent = pass;
  historique.prepend(li);
};

// copier
btnCopy.onclick = () => {
  if(resultat.value === "") return;
  navigator.clipboard.writeText(resultat.value);
  alert("Copié !");
};