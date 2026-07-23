const {
  useState,
  useMemo,
  useEffect
} = React;

/* ================= PALETTE — couleurs exactes du logo Santy ================= */
const C = {
  ink: "#211F20",
  deep: "#1A1819",
  paper: "#F1F1F2",
  card: "#FFFFFF",
  blue: "#4C5EFF",
  blueSoft: "#EAECFF",
  blueLine: "#C9CFFF",
  grey: "#5C5A5C",
  line: "#DEDCDE",
  muted: "#6E6C70",
  amber: "#B45C08",
  amberSoft: "#FBEEDD",
  red: "#A81E1E",
  redSoft: "#FBE9E9",
  green: "#1F7A5C"
};

/* ================= ICÔNES ================= */
const S = ({
  d,
  size = 18,
  color = "currentColor",
  fill = "none",
  sw = 1.8
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: fill,
  stroke: color,
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, d);
const IcCheck = p => /*#__PURE__*/React.createElement(S, {
  ...p,
  d: /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })
});
const IcCal = p => /*#__PURE__*/React.createElement(S, {
  ...p,
  d: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "2",
    x2: "16",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "10",
    x2: "21",
    y2: "10"
  }))
});
const IcList = p => /*#__PURE__*/React.createElement(S, {
  ...p,
  d: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "6",
    x2: "20",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "12",
    x2: "20",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "18",
    x2: "20",
    y2: "18"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "4.5",
    cy: "6",
    r: "1.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "4.5",
    cy: "12",
    r: "1.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "4.5",
    cy: "18",
    r: "1.2"
  }))
});
const IcPill = p => /*#__PURE__*/React.createElement(S, {
  ...p,
  d: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "8",
    width: "19",
    height: "8",
    rx: "4",
    transform: "rotate(-45 12 12)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8.5",
    y1: "8.5",
    x2: "15.5",
    y2: "15.5"
  }))
});
const IcAct = p => /*#__PURE__*/React.createElement(S, {
  ...p,
  d: /*#__PURE__*/React.createElement("polyline", {
    points: "22 12 18 12 15 21 9 3 6 12 2 12"
  })
});
const IcInfo = p => /*#__PURE__*/React.createElement(S, {
  ...p,
  d: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12.01",
    y2: "8"
  }))
});
const IcPhone = p => /*#__PURE__*/React.createElement(S, {
  ...p,
  d: /*#__PURE__*/React.createElement("path", {
    d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"
  })
});
const IcMail = p => /*#__PURE__*/React.createElement(S, {
  ...p,
  d: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "22 6 12 13 2 6"
  }))
});
const IcSearch = p => /*#__PURE__*/React.createElement(S, {
  ...p,
  d: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  }))
});
const IcLeft = p => /*#__PURE__*/React.createElement(S, {
  ...p,
  d: /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  })
});
const IcRight = p => /*#__PURE__*/React.createElement(S, {
  ...p,
  d: /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })
});

/* ================= CONTENU MÉDICAL — validé Dr B. Freychet ================= */
const TASKS = [{
  id: "anesth",
  day: -30,
  g: "Dès réception du dossier",
  t: "Prendre RDV avec l'anesthésiste",
  d: "Consultation obligatoire. 04 37 53 00 50 ou Doctolib (Anesthésistes Santy), 2e étage du Centre Orthopédique Santy. Apportez le questionnaire d'anesthésie rempli et vos ordonnances en cours. Compte-rendu de cardiologue si vous avez plus de 50 ans ou des antécédents."
}, {
  id: "preadm",
  day: -30,
  g: "Dès réception du dossier",
  t: "Faire la pré-admission en ligne",
  d: "Sur le site Ramsay Services ou directement à l'Hôpital Privé Jean Mermoz. Munissez-vous de votre date d'intervention."
}, {
  id: "prepa",
  day: -30,
  g: "Dès réception du dossier",
  t: "Suivre les consignes de préparation physique",
  d: "Elles figurent dans le dossier envoyé par mail."
}, {
  id: "quest",
  day: -30,
  g: "Dès réception du dossier",
  t: "Répondre au questionnaire avant chirurgie du LCA",
  d: "Lien ou QR code présent dans votre dossier envoyé par mail."
}, {
  id: "yousign",
  day: -30,
  g: "Dès réception du dossier",
  t: "Signer les documents sur Yousign",
  d: "Devis, note d'information sur les honoraires, consentement éclairé, fiche ASSPRO. Datez, signez, cochez et paraphez chaque bas de page."
}, {
  id: "mutuelle",
  day: -30,
  g: "Dès réception du dossier",
  t: "Transmettre le devis à votre mutuelle",
  d: "Un exemplaire est à soumettre à votre complémentaire santé."
}, {
  id: "swikly",
  day: -30,
  g: "Dès réception du dossier",
  t: "Réaliser l'empreinte bancaire Swikly",
  d: "Lien reçu par SMS. Aucun débit immédiat. Le prélèvement a lieu un mois après l'intervention. Paiement en 3 fois sans frais possible sur demande. À faire au plus tard 3 jours avant la chirurgie.",
  f: "Sans empreinte bancaire, l'intervention n'est pas validée."
}, {
  id: "matos",
  day: -21,
  g: "Commander le matériel",
  t: "Commander le matériel orthopédique",
  d: "1 paire de béquilles · 2 paires de bas de contention classe II · 1 boîte MEDISET pansement post-opératoire · genouillère de cryocompression GekoFrost, qui prendra le relais de la Game Ready à partir de J+15. Via Medicortho, livraison à domicile sans frais, ou en pharmacie."
}, {
  id: "gr",
  day: -21,
  g: "Commander le matériel",
  t: "Réserver la Game Ready",
  d: "SMS à François Gabriel au 07 56 84 69 10 : nom, prénom, date d'intervention, nom du chirurgien. Réservation conseillée pour 15 jours. 195 € les 15 jours ou 345 € les 30 jours, carte bancaire uniquement, non remboursé par la Sécurité sociale. Empreinte de 3 000 € en caution, annulée au retour. Retrait au 4 rue Jean Sarrazin, 69008 Lyon, service kiné au rez-de-chaussée dès 7h00. Astuce : congelez des bouteilles de 50 ml réutilisables."
}, {
  id: "pharma",
  day: -21,
  g: "Commander le matériel",
  t: "Retirer les traitements en pharmacie",
  d: "Antalgiques, savon Hibiscrub, pansement filmogel, Vogalib."
}, {
  id: "ide",
  day: -21,
  g: "Réserver votre suivi",
  t: "Réserver une infirmière libérale",
  d: "Deux passages : à J+7 pour la réfection du pansement, puis à J+15 pour l'ablation des fils."
}, {
  id: "kine",
  day: -21,
  g: "Réserver votre suivi",
  t: "Réserver votre kinésithérapeute",
  d: "Première séance à J+10, puis, à titre indicatif, 1 à 2 fois par semaine jusqu'à 2 mois et 3 à 5 fois par semaine à partir du 3e mois — c'est votre kinésithérapeute qui adapte. Les 10 premiers jours sont consacrés au cycle glace-contractions à la maison."
}, {
  id: "depil",
  day: -3,
  g: "3 jours avant",
  t: "Dépiler la jambe opérée",
  d: "Tondeuse uniquement — ni rasoir ni cire. Jambe opérée seule, du haut de la cuisse à la cheville. Ne touchez plus à la repousse ensuite."
}, {
  id: "foyer",
  day: -3,
  g: "3 jours avant",
  t: "Inspecter toute votre peau",
  d: "Passez en revue l'ensemble de votre corps, pas seulement la jambe opérée : ongle incarné, ampoule, furoncle, coupure, écorchure, éraflure, piqûre infectée, bouton percé. Signalez toute plaie immédiatement au secrétariat plutôt que le jour même.",
  f: "Une plaie de moins d'une semaine, où qu'elle soit sur le corps, peut faire annuler et reporter la chirurgie — y compris le jour même."
}, {
  id: "dossier",
  day: -3,
  g: "3 jours avant",
  t: "Dossier complet et validé",
  d: "Dernier délai pour la signature Yousign et l'empreinte Swikly."
}, {
  id: "jeune",
  day: -1,
  g: "La veille",
  t: "Ne plus rien manger après minuit",
  d: "Pas de petit-déjeuner le matin de l'intervention. Le jeûne doit être d'au moins 6 heures avant le bloc."
}, {
  id: "douche1",
  day: -1,
  g: "La veille",
  t: "Douche au savon Hibiscrub",
  d: "Chlorhexidine digluconate, en insistant sur la zone à opérer. Non substituable par la Bétadine Scrub."
}, {
  id: "sms",
  day: -1,
  g: "La veille",
  t: "Recevoir votre heure de convocation",
  d: "SMS envoyé vers 14h. Convocations entre 6h30 et 10h environ."
}, {
  id: "grveille",
  day: -1,
  g: "La veille",
  t: "Retirer la Game Ready aujourd'hui",
  d: "Uniquement si votre convocation est avant 7h30. Sinon, retrait demain matin."
}, {
  id: "sac",
  day: -1,
  g: "La veille",
  t: "Préparer votre sac",
  d: "Radiographies · carte Vitale · consentement éclairé signé · genouillère GekoFrost · béquilles · bas de contention."
}, {
  id: "douche2",
  day: 0,
  g: "Le jour J",
  t: "Douche Hibiscrub au plus près de l'intervention",
  d: "Insistez à nouveau sur la zone à opérer."
}, {
  id: "grj0",
  day: 0,
  g: "Le jour J",
  t: "Retirer la Game Ready",
  d: "4 rue Jean Sarrazin, 69008 Lyon, service kiné au rez-de-chaussée dès 7h00. Mise en place en salle de réveil."
}, {
  id: "accueil",
  day: 0,
  g: "Le jour J",
  t: "Se présenter à l'accueil",
  d: "Hôpital Privé Jean Mermoz, 55 avenue Jean Mermoz, 69008 Lyon."
}, {
  id: "sorties",
  day: 0,
  g: "Le jour J",
  t: "Passer au bureau des sorties avant 19h",
  d: "Immédiatement après avoir quitté l'ambulatoire. Votre accompagnant peut s'en charger. C'est ce passage qui déclenche la prise en charge par votre mutuelle. Aucun bon de transport n'est délivré."
}, {
  id: "ide7",
  day: 7,
  g: "Suivi post-opératoire",
  t: "Passage infirmier — pansement",
  d: "Retrait du pansement posé au bloc. Nettoyage des cicatrices au sérum physiologique, puis pose d'un pansement filmogel qui permet de ne plus faire de soin jusqu'à l'ablation des fils. Pour la douche : gant de toilette sur les cicatrices, enroulé de film plastique alimentaire."
}, {
  id: "bas10",
  day: 10,
  g: "Suivi post-opératoire",
  t: "Fin des bas de contention sur la jambe non opérée",
  d: "10 jours sur le membre non opéré. Poursuivez sur la jambe opérée jusqu'à J+21."
}, {
  id: "kine10",
  day: 10,
  g: "Suivi post-opératoire",
  t: "Première séance de kinésithérapie",
  d: "Remettez l'ordonnance à votre kinésithérapeute. Rythme indicatif : 1 à 2 séances par semaine jusqu'à 2 mois, puis 3 à 5 par semaine à partir du 3e mois. Votre kinésithérapeute adapte selon votre évolution. Glaçage de 15 à 20 minutes en fin de séance. Pas de balnéothérapie tant que les croûtes persistent."
}, {
  id: "ide15",
  day: 15,
  g: "Suivi post-opératoire",
  t: "Passage infirmier — ablation des fils",
  d: "Surjet résorbable : l'infirmière coupe seulement les extrémités sous les nœuds, sans tirer. Si les berges de vos cicatrices se rouvrent légèrement, contactez le secrétariat pour une ordonnance de pansements spécifiques."
}, {
  id: "bas21",
  day: 21,
  g: "Suivi post-opératoire",
  t: "Fin des bas de contention sur la jambe opérée",
  d: "21 jours au total."
}, {
  id: "conduite",
  day: 21,
  g: "Suivi post-opératoire",
  t: "Reprise possible de la conduite",
  d: "Autorisée au moment où vous abandonnez vos béquilles, en général entre 3 semaines et 1 mois, dès que votre marche est correcte. Ne conduisez jamais sous IZALGI."
}, {
  id: "travail",
  day: 45,
  g: "Suivi post-opératoire",
  t: "Fin de l'arrêt de travail",
  d: "L'arrêt est de 45 jours. Une reprise en télétravail est possible à partir de 3 semaines."
}];
const CONSULTS = [{
  day: 21,
  t: "Consultation à 3 semaines",
  p: "Médecin du sport",
  o: ["Extension complète", "Marche sans flessum", "Contraction du quadriceps avec verrouillage", "Cicatrices propres"]
}, {
  day: 42,
  t: "Consultation à 6 semaines",
  p: "Médecin du sport",
  o: ["Marche correcte sans canne", "Flexion supérieure à 90°", "Rodage articulaire sur vélo si les objectifs sont atteints"]
}, {
  day: 90,
  t: "Consultation à 3 mois",
  p: "Médecin du sport",
  o: ["Extension et flexion complètes", "Genou sans épanchement", "Renforcement quadriceps et ischio-jambiers", "Début de la proprioception", "Reprise de la course à pied — 3 mois, ou 4 mois et demi en cas de suture méniscale"]
}, {
  day: 180,
  t: "Évaluation à 6 mois",
  p: "Médecin du sport",
  o: ["Test isocinétique", "Test K-STARTS de reprise du sport", "Reprise de l'entraînement en sports pivots selon les tests — la compétition pas avant 9 mois"]
}, {
  day: 365,
  t: "Consultation à 1 an",
  p: "Dr Benjamin Freychet",
  o: []
}, {
  day: 730,
  t: "Consultation à 2 ans",
  p: "Dr Benjamin Freychet",
  o: []
}];
const SPORTS = [[30, "Vélo de rééducation, sans cale-pieds (rodage)"], [45, "Vélo de rééducation avec résistance croissante"], [45, "Rameur, poussée pure et retour très lent"], [45, "Steppeur, tronc incliné vers l'avant"], [45, "Vélo elliptique, vitesse lente"], [45, "Presse, poussée deux jambes (0° à 90°)"], [45, "Squat sans charge (0° à 60°)"], [60, "Rameur avec sangle cale-pieds"], [60, "Steppeur, tronc vertical à vitesse lente"], [75, "Trampoline, course sur place avec support"], [90, "Trotting", null, true], [90, "Vélo de route sans cale-pieds (moulinage)"], [90, "Natation, crawl et dos crawlé"], [90, "Moto de route"], [90, "Raquettes sur piste, peu de dénivelé"], [90, "Marche sur sentier stabilisé, avec bâtons"], [90, "Steppeur, tronc vertical à vitesse rapide"], [90, "Trampoline, bondissements sur deux jambes"], [90, "Presse, poussée avec la jambe opérée"], [90, "Vélo elliptique classique"], [120, "Course à pied sans dénivelé", null, true], [120, "Vélo de route avec cale-pieds"], [120, "Ski de fond classique"], [120, "Équitation en promenade"], [120, "Trampoline, bondissements alternés"], [150, "Accélérations rapides", null, true], [150, "Vélo de route, pédales automatiques"], [150, "Natation avec palmes"], [150, "Tennis, balle au mur"], [180, "Course à pied avec dénivelé", null, true], [180, "VTT"], [180, "Ski de piste"], [180, "Ski de fond en skating"], [180, "Moto enduro"], [180, "Équitation, randonnée et saut d'obstacles"], [180, "Escalade, voie normale et via ferrata"], [180, "Randonnée pédestre"], [180, "Trampoline, réentraînement sportif"], [210, "Tennis avec adversaire (terre battue)"], [240, "Ski en poudreuse ou en compétition"], [270, "Squash"], [null, "Natation, brasse et papillon", "Pas avant la reprise des sports pivots."], [null, "Sports pivots — entraînement", "À partir de 6 mois, selon les résultats des tests."], [null, "Sports pivots — compétition", "Pas avant 9 mois."]];
function meds(d) {
  if (d === 0) return {
    t: "Ce soir",
    l: [["IZALGI 500/25 mg", "2 gélules"], ["BIPROFENID LP 100 mg", "1 comprimé"], ["NEFOPAM 30 mg", "1 comprimé"], ["ESOMÉPRAZOLE 20 mg", "1 comprimé"]]
  };
  if (d >= 1 && d <= 6) return {
    t: "Traitement systématique",
    l: [["IZALGI 500/25 mg", "2 gélules matin, midi et soir"], ["BIPROFENID LP 100 mg", "1 comprimé matin et soir"], ["NEFOPAM 30 mg", "1 à 2 comprimés matin, midi et soir"], ["ESOMÉPRAZOLE 20 mg", "1 comprimé le soir"], ["RIZMOIC 200 µg", "1 comprimé le matin"]]
  };
  if (d >= 7 && d <= 14) return {
    t: "Traitement allégé",
    l: [["IZALGI 500/25 mg", "2 gélules matin, midi et soir"], ["NEFOPAM 30 mg", "1 à 2 comprimés matin, midi et soir"], ["RIZMOIC 200 µg", "1 comprimé le matin"]],
    s: "Vous arrêtez aujourd'hui le Biprofenid et l'Esoméprazole."
  };
  if (d >= 15 && d <= 35) return {
    t: "Traitement de fond",
    l: [["PARACÉTAMOL 1000 mg", "1 comprimé, 4 fois par jour maximum"]],
    s: "Vous arrêtez l'IZALGI, le Nefopam et le Rizmoic."
  };
  return null;
}
const PEAU = {
  t: "Protégez votre peau",
  d: "Votre peau doit être intacte pendant au moins la semaine qui précède l'intervention. Toute plaie de moins d'une semaine — coupure, écorchure, ampoule, ongle incarné, furoncle, bouton percé — peut faire annuler et reporter la chirurgie, y compris le jour même. Cela vaut pour tout le corps. Prévenez le secrétariat dès qu'une plaie apparaît : mieux vaut décaler à l'avance que d'être renvoyé chez vous au bloc."
};
const CONSIGNES = {
  prep: [PEAU, {
    t: "Anticipez le dossier",
    d: "Documents signés sur Yousign et empreinte bancaire Swikly au plus tard 3 jours avant. Sans cela, l'intervention n'est pas validée."
  }],
  veille: [PEAU],
  j0: [PEAU],
  repos: [{
    t: "Le cycle d'une heure",
    d: "30 minutes de Game Ready, 30 minutes de contractions, 5 minutes de marche. À répéter du lever au coucher. C'est le cœur de votre récupération."
  }, {
    t: "Restez chez vous",
    d: "Aucune sortie pendant les 10 premiers jours. Vous pouvez aller aux toilettes, manger à table, prendre votre douche, monter un escalier si nécessaire — mais la marche se fait à l'intérieur."
  }, {
    t: "Le coussin",
    d: "Sous la cheville pendant le glaçage, retiré pendant les contractions. Jamais sous le genou, même si cette position soulage."
  }, {
    t: "Les contractions",
    d: "Jambe à plat, travaillez le quadriceps interne. Contractez 3 à 4 secondes en gardant le talon en l'air, relâchez 3 à 4 secondes, et recommencez pendant 30 minutes. C'est la contraction qui doit faire décoller le talon toute seule — n'écrasez jamais un coussin."
  }, {
    t: "La marche",
    d: "5 minutes debout entre chaque cycle, en appui complet et en déroulant le pas. Les béquilles sécurisent, elles ne portent pas."
  }, {
    t: "Dormir sur le dos ou le ventre",
    d: "Jamais sur le côté en chien de fusil."
  }],
  reeduc: [{
    t: "Le cycle continue",
    d: "Jusqu'à 3 semaines. Même rythme — 30 minutes de cryothérapie, 30 minutes de contractions — mais la marche se fait maintenant dehors."
  }, {
    t: "Sortir progressivement",
    d: "10 minutes dehors, puis 15, puis 20, puis 30, puis davantage. Vous rentrez ensuite reprendre le cycle à la maison."
  }, {
    t: "GekoFrost",
    d: "À partir de J+15, la genouillère GekoFrost remplace la Game Ready. Continuez à glacer au moins jusqu'à 3 semaines — et aussi longtemps que possible ensuite, c'est toujours bénéfique."
  }, {
    t: "Séances de kiné",
    d: "À titre indicatif : 1 à 2 fois par semaine jusqu'à 2 mois, puis 3 à 5 fois par semaine à partir du 3e mois — votre kinésithérapeute adapte. Glaçage de 15 à 20 minutes en fin de séance. Pas de balnéothérapie tant que les croûtes persistent."
  }, {
    t: "À ne pas faire",
    d: "Pas d'exercice « écrase-coussin ». Pas de travail du quadriceps en chaîne ouverte. Pas de renforcement des ischio-jambiers pour l'instant. Ne cherchez pas à récupérer le récurvatum."
  }]
};
const LIEUX = [["Centre Orthopédique Santy", "24 avenue Paul Santy, 69008 Lyon", "Consultations", "santy.png"], ["Gerland Sport Santé", "359 avenue Jean Jaurès, 69007 Lyon", "Consultations", "gerland.png"], ["Hôpital Privé Jean Mermoz", "55 avenue Jean Mermoz, 69008 Lyon", "Interventions", null]];
const CONTACTS = [["Secrétariat / infirmière", "04 37 53 07 08", "0437530708", false], ["Service d'hospitalisation", "04 37 53 84 12", "0437538412", false], ["Service d'hospitalisation (bis)", "04 37 53 84 22", "0437538422", false], ["SAMU — urgences", "15", "15", true]];

/* ================= UTILITAIRES ================= */
const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
const JOURS = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
const addD = (iso, n) => {
  const d = new Date(iso + "T12:00:00");
  d.setDate(d.getDate() + n);
  return d;
};
const lg = dt => `${JOURS[dt.getDay()]} ${dt.getDate()} ${MOIS[dt.getMonth()]} ${dt.getFullYear()}`;
const sh = dt => `${dt.getDate()} ${MOIS[dt.getMonth()].slice(0, 4)}. ${dt.getFullYear()}`;
const jL = d => d === 0 ? "Jour J" : d < 0 ? `J−${Math.abs(d)}` : `J+${d}`;
const diffDays = iso => {
  const a = new Date(iso + "T12:00:00");
  const b = new Date();
  b.setHours(12, 0, 0, 0);
  return Math.round((b - a) / 86400000);
};
function phaseOf(d) {
  if (d < -3) return {
    k: "prep",
    n: "Préparation"
  };
  if (d < 0) return {
    k: "veille",
    n: "Derniers jours"
  };
  if (d === 0) return {
    k: "j0",
    n: "Jour de l'intervention"
  };
  if (d <= 10) return {
    k: "repos",
    n: "Phase de repos"
  };
  if (d <= 45) return {
    k: "reeduc",
    n: "Rééducation"
  };
  if (d <= 180) return {
    k: "reprise",
    n: "Reprise progressive"
  };
  return {
    k: "long",
    n: "Suivi au long cours"
  };
}
const store = {
  get(k, f) {
    try {
      const v = localStorage.getItem("postop_" + k);
      return v ? JSON.parse(v) : f;
    } catch (e) {
      return f;
    }
  },
  set(k, v) {
    try {
      localStorage.setItem("postop_" + k, JSON.stringify(v));
    } catch (e) {}
  }
};

/* ================= EXPORT CALENDRIER (.ics) ================= */
const AGENDA = [[-21, "Commander le matériel orthopédique", "Béquilles, bas de contention classe II, MEDISET, genouillère de cryocompression GekoFrost. Réserver la Game Ready par SMS au 07 56 84 69 10. Réserver l'infirmière (J+7 et J+15) et le kinésithérapeute (J+10).", true], [-3, "Dépilation et inspection de la peau", "Tondeuse uniquement, jambe opérée. Vérifier l'absence de plaie sur tout le corps : une plaie de moins d'une semaine peut faire reporter l'intervention.", true], [-1, "Veille de l'intervention", "Douche au savon Hibiscrub. Ne plus rien manger après minuit. Préparer le sac : radiographies, carte Vitale, consentement signé, attelle, béquilles, bas de contention.", true], [0, "Intervention — ligamentoplastie du LCA", "Hôpital Privé Jean Mermoz, 55 avenue Jean Mermoz, 69008 Lyon. Douche Hibiscrub au plus près. Passer au bureau des sorties avant 19h.", true], [7, "Passage infirmier — pansement", "Nettoyage des cicatrices au sérum physiologique, puis pansement filmogel.", true], [10, "Première séance de kinésithérapie", "Remettre l'ordonnance au kinésithérapeute. Glaçage 15 à 20 minutes en fin de séance.", true], [15, "Passage infirmier — ablation des fils", "Surjet résorbable : couper seulement les extrémités sous les nœuds.", true], [15, "Passage à la GekoFrost", "La genouillère GekoFrost remplace la Game Ready. Pensez à restituer la machine.", true], [21, "Fin des bas de contention et du cycle", "21 jours de bas de contention sur la jambe opérée. Fin du cycle glace-contractions systématique — continuez à glacer aussi souvent que possible.", false], [45, "Fin de l'arrêt de travail", "Reprise en télétravail possible dès 3 semaines.", false]];
function pad(n) {
  return String(n).padStart(2, "0");
}
function icsDate(dt) {
  return dt.getFullYear() + pad(dt.getMonth() + 1) + pad(dt.getDate());
}
function esc(t) {
  return String(t).replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}
function buildICS(dateOp) {
  const L = [];
  const stamp = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  L.push("BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Postop//Dr Benjamin Freychet//FR", "CALSCALE:GREGORIAN", "METHOD:PUBLISH", "X-WR-CALNAME:Postop — mon parcours LCA");
  let i = 0;
  const push = (offset, titre, desc, alarme) => {
    const d = addD(dateOp, offset),
      fin = addD(dateOp, offset + 1);
    L.push("BEGIN:VEVENT");
    L.push("UID:postop-" + i++ + "-" + icsDate(d) + "@freychet");
    L.push("DTSTAMP:" + stamp);
    L.push("DTSTART;VALUE=DATE:" + icsDate(d));
    L.push("DTEND;VALUE=DATE:" + icsDate(fin));
    L.push("SUMMARY:" + esc(titre));
    L.push("DESCRIPTION:" + esc(desc));
    if (alarme) {
      L.push("BEGIN:VALARM", "ACTION:DISPLAY", "DESCRIPTION:" + esc(titre), "TRIGGER:-PT15H", "END:VALARM");
    }
    L.push("END:VEVENT");
  };
  AGENDA.forEach(([o, t, d, a]) => push(o, "Postop — " + t, d, a));
  CONSULTS.forEach(c => push(c.day, "Postop — " + c.t, c.p + ". Date à confirmer avec le secrétariat au 04 37 53 07 08." + (c.o.length ? " Objectifs : " + c.o.join(" · ") : ""), true));
  L.push("END:VCALENDAR");
  return L.map(plier).join("\r\n");
}

/* Le format iCalendar impose des lignes de 75 octets maximum,
   les suivantes commençant par une espace. */
function plier(ligne) {
  const enc = new TextEncoder();
  if (enc.encode(ligne).length <= 75) return ligne;
  const out = [];
  let cur = "";
  let len = 0;
  for (const ch of ligne) {
    const n = enc.encode(ch).length;
    const max = out.length === 0 ? 75 : 74;
    if (len + n > max) {
      out.push(cur);
      cur = "";
      len = 0;
    }
    cur += ch;
    len += n;
  }
  if (cur) out.push(cur);
  return out[0] + out.slice(1).map(x => "\r\n " + x).join("");
}
function telechargerICS(dateOp) {
  try {
    const blob = new Blob([buildICS(dateOp)], {
      type: "text/calendar;charset=utf-8"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "postop-lca.ics";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 1500);
    return true;
  } catch (e) {
    return false;
  }
}

/* ================= LE CYCLE DES 10 PREMIERS JOURS ================= */
const PHASES = [{
  k: "glace",
  t: "Game Ready",
  min: 30,
  c: "#4C5EFF",
  d: "Coussin sous la cheville. Jamais sous le genou.",
  long: "Cryothérapie avec compression. Installez le coussin sous la cheville pour garder le genou en extension."
}, {
  k: "contract",
  t: "Contractions",
  min: 30,
  c: "#211F20",
  d: "Retirez le coussin. Jambe à plat.",
  long: "Contractez 3 à 4 secondes en gardant le talon en l'air, puis relâchez 3 à 4 secondes. Le talon doit se lever par la seule contraction du quadriceps interne — n'écrasez jamais un coussin."
}, {
  k: "marche",
  t: "Marche",
  min: 5,
  c: "#1F7A5C",
  d: "Debout, appui complet, en déroulant le pas.",
  long: "Levez-vous et marchez dans la maison. Appuyez à fond sur la jambe opérée : les béquilles ne servent qu'à vous sécuriser."
}];
function bip() {
  try {
    const A = window.AudioContext || window.webkitAudioContext;
    if (!A) return;
    const c = new A();
    const o = c.createOscillator();
    const g = c.createGain();
    o.connect(g);
    g.connect(c.destination);
    o.type = "sine";
    o.frequency.value = 880;
    g.gain.setValueAtTime(0.0001, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.22, c.currentTime + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.7);
    o.start();
    o.stop(c.currentTime + 0.75);
  } catch (e) {}
}
function vibrer(motif) {
  try {
    navigator.vibrate && navigator.vibrate(motif);
  } catch (e) {}
}
const mmss = ms => {
  const t = Math.max(0, Math.ceil(ms / 1000));
  return Math.floor(t / 60) + ":" + String(t % 60).padStart(2, "0");
};
function Cycle({
  rapide,
  cycles,
  setCycles,
  jour
}) {
  const dehors = jour > 10;
  const [marche, setMarche] = useState(5);
  useEffect(() => {
    setMarche(dehors ? 10 : 5);
  }, [dehors]);
  const minutes = i => i === 2 ? dehors ? marche : 5 : PHASES[i].min;
  const duree = i => minutes(i) * 60000 / (rapide ? 60 : 1);
  const [tm, setTm] = useState(() => ({
    ph: 0,
    left: PHASES[0].min * 60000,
    fin: null,
    run: false
  }));
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    if (!tm.run) return;
    const id = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(id);
  }, [tm.run]);
  const reste = tm.run ? Math.max(0, tm.fin - now) : tm.left;
  useEffect(() => {
    if (!tm.run || tm.fin === null || tm.fin - now > 0) return;
    const suiv = (tm.ph + 1) % 3;
    if (tm.ph === 2) {
      const j = new Date().toISOString().slice(0, 10);
      setCycles(c => c.j === j ? {
        j,
        n: c.n + 1
      } : {
        j,
        n: 1
      });
    }
    bip();
    vibrer(tm.ph === 2 ? [220, 120, 220, 120, 220] : [220, 120, 220]);
    setTm({
      ph: suiv,
      fin: Date.now() + duree(suiv),
      left: duree(suiv),
      run: true
    });
  }, [now, tm]);

  /* Métronome : 3 à 4 secondes de contraction, autant de relâchement */
  const TENUE = 4000,
    CY = TENUE * 2;
  const debutPhase = tm.run && tm.fin !== null ? tm.fin - duree(tm.ph) : null;
  const ecoule = debutPhase !== null ? Math.max(0, now - debutPhase) : 0;
  const dansCy = ecoule % CY;
  const contracte = dansCy < TENUE;
  const resteSeg = contracte ? TENUE - dansCy : CY - dansCy;
  const nbRep = Math.floor(ecoule / CY) + 1;
  const [vibrer2, setVibrer2] = useState(false);
  useEffect(() => {
    if (tm.ph !== 1 || !tm.run || !vibrer2) return;
    vibrer(contracte ? [60] : [25]);
  }, [contracte, tm.ph, tm.run, vibrer2]);
  const P = PHASES[tm.ph];
  const pct = 1 - reste / duree(tm.ph);
  const R = 52,
    CIRC = 2 * Math.PI * R;
  const faitAujourdhui = cycles.j === new Date().toISOString().slice(0, 10) ? cycles.n : 0;
  const demarrer = () => setTm(t => ({
    ...t,
    fin: Date.now() + t.left,
    run: true
  }));
  const pause = () => setTm(t => ({
    ...t,
    left: Math.max(0, t.fin - Date.now()),
    run: false
  }));
  const suivant = () => {
    const n = (tm.ph + 1) % 3;
    bip();
    setTm({
      ph: n,
      fin: Date.now() + duree(n),
      left: duree(n),
      run: tm.run
    });
  };
  const reset = () => setTm({
    ph: 0,
    left: duree(0),
    fin: null,
    run: false
  });
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      borderColor: P.c,
      borderWidth: 2,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: P.c
  }, "Le cycle d'une heure"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: C.muted,
      fontWeight: 700
    }
  }, faitAujourdhui, " ", faitAujourdhui > 1 ? "cycles" : "cycle", " aujourd'hui")), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 5,
      marginTop: 12
    }
  }, PHASES.map((x, i) => /*#__PURE__*/React.createElement("div", {
    key: x.k,
    style: {
      flex: minutes(i),
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: 4,
      background: i < tm.ph ? x.c : i === tm.ph ? "transparent" : C.line,
      overflow: "hidden",
      position: "relative"
    }
  }, i === tm.ph && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: C.line
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      width: (pct * 100).toFixed(1) + "%",
      background: x.c
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9.5,
      marginTop: 5,
      fontWeight: 700,
      letterSpacing: "0.04em",
      color: i === tm.ph ? x.c : C.muted,
      textTransform: "uppercase"
    }
  }, x.t)))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 16,
      alignItems: "center",
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 124,
      height: 124,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "124",
    height: "124",
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "62",
    cy: "62",
    r: R,
    fill: "none",
    stroke: C.line,
    strokeWidth: "8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "62",
    cy: "62",
    r: R,
    fill: "none",
    stroke: P.c,
    strokeWidth: "8",
    strokeLinecap: "round",
    strokeDasharray: CIRC,
    strokeDashoffset: CIRC * (1 - pct),
    style: {
      transition: "stroke-dashoffset .3s linear"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "disp",
    style: {
      fontWeight: 600,
      fontSize: 27,
      color: C.ink,
      letterSpacing: "-0.02em",
      lineHeight: 1
    }
  }, mmss(reste)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: C.muted,
      fontWeight: 700,
      marginTop: 3,
      letterSpacing: "0.06em",
      textTransform: "uppercase"
    }
  }, "restantes"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "disp",
    style: {
      fontWeight: 600,
      fontSize: 19,
      color: C.ink,
      lineHeight: 1.25
    }
  }, P.t, tm.ph === 0 && jour >= 15 ? " · GekoFrost" : ""), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 12.5,
      marginTop: 6,
      lineHeight: 1.5
    }
  }, tm.ph === 0 && jour >= 15 ? "La genouillère GekoFrost remplace la Game Ready à partir de J+15. Coussin sous la cheville." : tm.ph === 2 ? dehors ? "Sortez marcher, en appui complet et en déroulant le pas. Vous rentrez ensuite reprendre le cycle." : "Levez-vous et marchez dans la maison. Appuyez à fond sur la jambe opérée : les béquilles ne servent qu'à vous sécuriser." : P.long))), tm.ph === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 15
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 13,
      overflow: "hidden",
      border: `1.5px solid ${contracte && tm.run ? C.ink : C.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: contracte && tm.run ? C.ink : "#fff",
      padding: "15px 16px",
      transition: "background .15s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "disp",
    style: {
      fontWeight: 600,
      fontSize: 22,
      letterSpacing: "-0.01em",
      color: !tm.run ? C.muted : contracte ? "#fff" : C.ink
    }
  }, !tm.run ? "En pause" : contracte ? "Contractez" : "Relâchez"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: !tm.run ? C.muted : contracte ? "#9B99A0" : C.muted
    }
  }, tm.run ? Math.ceil(resteSeg / 1000) + " s" : "—")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      height: 5,
      borderRadius: 5,
      background: contracte && tm.run ? "#43414A" : C.paper,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      borderRadius: 5,
      transition: "width .1s linear",
      width: tm.run ? ((1 - resteSeg / TENUE) * 100).toFixed(1) + "%" : "0%",
      background: contracte && tm.run ? "#fff" : C.ink
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      marginTop: 9,
      lineHeight: 1.5,
      color: contracte && tm.run ? "#C9C7CB" : C.muted
    }
  }, contracte && tm.run ? "Le talon se lève par la seule contraction du quadriceps interne." : "Relâchez complètement. Le talon redescend."))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: C.muted,
      fontWeight: 700
    }
  }, tm.run ? "Répétition " + nbRep : "3 à 4 s de contraction, 3 à 4 s de relâchement"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setVibrer2(v => !v),
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      color: vibrer2 ? C.blue : C.muted,
      border: `1px solid ${vibrer2 ? C.blue : C.line}`,
      borderRadius: 20,
      padding: "3px 10px",
      background: "#fff"
    }
  }, vibrer2 ? "✓ Vibration" : "Vibration"))), dehors && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: C.muted,
      fontWeight: 700,
      letterSpacing: "0.04em",
      textTransform: "uppercase"
    }
  }, "Marche dehors"), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 6,
      marginTop: 7
    }
  }, [10, 15, 20, 30].map(m => /*#__PURE__*/React.createElement("button", {
    key: m,
    onClick: () => setMarche(m),
    style: {
      flex: 1,
      padding: "8px 0",
      borderRadius: 9,
      fontSize: 13,
      fontWeight: 700,
      textAlign: "center",
      border: `1.5px solid ${marche === m ? PHASES[2].c : C.line}`,
      background: marche === m ? PHASES[2].c : "#fff",
      color: marche === m ? "#fff" : C.muted
    }
  }, m, " min"))), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 11.5,
      marginTop: 7,
      lineHeight: 1.5
    }
  }, "Augmentez progressivement — 10 minutes, puis 15, 20, 30, puis davantage. Sans douleur.")), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 8,
      marginTop: 15
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: tm.run ? pause : demarrer,
    style: {
      flex: 2,
      background: tm.run ? "#fff" : P.c,
      color: tm.run ? C.ink : "#fff",
      border: `1.5px solid ${tm.run ? C.line : P.c}`,
      borderRadius: 11,
      padding: "13px 0",
      fontSize: 14.5,
      fontWeight: 700,
      textAlign: "center"
    }
  }, tm.run ? "Pause" : tm.left < duree(tm.ph) ? "Reprendre" : "Démarrer"), /*#__PURE__*/React.createElement("button", {
    onClick: suivant,
    style: {
      flex: 1,
      border: `1.5px solid ${C.line}`,
      borderRadius: 11,
      padding: "13px 0",
      fontSize: 13,
      fontWeight: 700,
      color: C.muted,
      textAlign: "center",
      background: "#fff"
    }
  }, "Étape suivante")), /*#__PURE__*/React.createElement("button", {
    onClick: reset,
    style: {
      marginTop: 9,
      fontSize: 11.5,
      color: C.muted,
      textDecoration: "underline"
    }
  }, "Recommencer le cycle"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      background: C.paper,
      borderRadius: 10,
      padding: "10px 12px",
      fontSize: 11.5,
      color: C.muted,
      lineHeight: 1.5
    }
  }, dehors ? "Du lever au coucher, jusqu'à 3 semaines. Gardez l'écran allumé ou ajoutez l'application à votre écran d'accueil pour que le minuteur reste actif." : "Du lever au coucher, sans sortir de chez vous pendant 10 jours. Gardez l'écran allumé ou ajoutez l'application à votre écran d'accueil pour que le minuteur reste actif.", rapide && /*#__PURE__*/React.createElement("b", {
    style: {
      color: C.amber,
      display: "block",
      marginTop: 5
    }
  }, "Aperçu : le minuteur tourne 60 fois plus vite."))));
}

/* ================= COMPOSANTS ================= */
const Card = ({
  children,
  style,
  ...r
}) => /*#__PURE__*/React.createElement("div", {
  ...r,
  style: {
    background: C.card,
    border: `1px solid ${C.line}`,
    borderRadius: 16,
    ...style
  }
}, children);
const Eyebrow = ({
  children,
  color
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    color: color || C.muted,
    fontSize: 10.5,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    fontWeight: 700
  }
}, children);

/* Point bleu — signature du Y de Santy */
const Dot = ({
  size = 6,
  style
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    width: size,
    height: size,
    borderRadius: size,
    background: C.blue,
    display: "inline-block",
    ...style
  }
});
function Task({
  task,
  done,
  onT,
  dateStr
}) {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: `1px solid ${C.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 12,
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onT(task.id),
    "aria-label": "Cocher",
    style: {
      flexShrink: 0,
      width: 24,
      height: 24,
      marginTop: 2,
      borderRadius: 8,
      border: `1.5px solid ${done ? C.blue : C.line}`,
      background: done ? C.blue : "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, done && /*#__PURE__*/React.createElement(IcCheck, {
    size: 15,
    color: "#fff",
    sw: 3
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: done ? C.muted : C.ink,
      fontWeight: 600,
      fontSize: 15,
      lineHeight: 1.3,
      textDecoration: done ? "line-through" : "none"
    }
  }, task.t), dateStr && /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 12,
      marginTop: 3
    }
  }, dateStr), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 13.5,
      lineHeight: 1.55,
      marginTop: 8
    }
  }, task.d, task.f && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      background: C.redSoft,
      color: C.red,
      borderRadius: 9,
      padding: "8px 10px",
      fontWeight: 600,
      fontSize: 12.5
    }
  }, task.f)) : /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.blue,
      fontSize: 12,
      marginTop: 5,
      fontWeight: 600
    }
  }, "Voir le détail"))));
}

/* ================= APPLICATION ================= */
function App() {
  const params = new URLSearchParams(location.search);
  const urlOp = params.get("op");
  const urlCote = params.get("cote");
  const demo = params.get("demo") === "1";
  const [dateOp, setDateOp] = useState(() => urlOp || store.get("dateOp", null));
  const [offset, setOffset] = useState(0);
  const [tab, setTab] = useState("today");
  const [done, setDone] = useState(() => store.get("done", {}));
  const [po, setPo] = useState(() => store.get("po", {
    suture: null,
    hbpm: null
  }));
  const [q, setQ] = useState("");
  const [obj, setObj] = useState(() => store.get("obj", null));
  const [cycles, setCycles] = useState(() => store.get("cycles", {
    j: "",
    n: 0
  }));
  const [tmp, setTmp] = useState("");
  const [cote, setCote] = useState(() => urlCote === "d" ? "droit" : urlCote === "g" ? "gauche" : store.get("cote", null));
  useEffect(() => {
    if (dateOp) store.set("dateOp", dateOp);
  }, [dateOp]);
  useEffect(() => {
    store.set("done", done);
  }, [done]);
  useEffect(() => {
    store.set("po", po);
  }, [po]);
  useEffect(() => {
    store.set("obj", obj);
  }, [obj]);
  useEffect(() => {
    store.set("cycles", cycles);
  }, [cycles]);
  useEffect(() => {
    if (cote) store.set("cote", cote);
  }, [cote]);

  /* ---------- Écran d'accueil ---------- */
  if (!dateOp) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: "100vh",
        background: "linear-gradient(145deg,#111113 0%,#1A1819 60%,#20223B 100%)",
        color: "#fff",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "knee.png",
      alt: "",
      "aria-hidden": "true",
      style: {
        position: "absolute",
        right: "-15%",
        bottom: "-5%",
        width: "86%",
        maxWidth: 450,
        opacity: 0.68,
        pointerEvents: "none"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        padding: "52px 24px 40px",
        maxWidth: 460
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "santy-white.png",
      alt: "Santy",
      style: {
        height: 44,
        marginBottom: 34
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "disp",
      "aria-label": "POST point OP",
      style: {
        fontSize: 46,
        fontWeight: 700,
        letterSpacing: "-0.035em",
        lineHeight: 1,
        display: "flex",
        alignItems: "center",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#FFFFFF"
      }
    }, "POST"), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: C.blue,
        fontSize: 34,
        lineHeight: 1
      }
    }, "·"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.blue
      }
    }, "OP")), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#C9C7CB",
        fontSize: 14.5,
        marginTop: 12,
        lineHeight: 1.55
      }
    }, "De la préparation chirurgicale jusqu’au retour au sport."), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: "#38363A",
        margin: "28px 0"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#8E8C92",
        fontSize: 13,
        lineHeight: 1.6
      }
    }, "Indiquez la date de votre intervention.", /*#__PURE__*/React.createElement("br", null), "Toutes vos consignes seront datées automatiquement à partir de là."), /*#__PURE__*/React.createElement("input", {
      type: "date",
      value: tmp,
      onChange: e => setTmp(e.target.value),
      style: {
        marginTop: 16,
        background: "#2E2C30",
        color: "#fff",
        border: "1px solid #4A484C",
        borderRadius: 12,
        padding: "14px 16px",
        fontSize: 16,
        width: "100%"
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        if (tmp) {
          setDateOp(tmp);
        }
      },
      style: {
        marginTop: 16,
        background: tmp ? C.blue : "#343237",
        color: "#fff",
        borderRadius: 12,
        padding: "15px 20px",
        fontSize: 15,
        fontWeight: 700,
        width: "100%",
        textAlign: "center"
      }
    }, "Commencer"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#6E6C72",
        fontSize: 11.5,
        marginTop: 26,
        lineHeight: 1.6
      }
    }, "Vos informations restent sur votre téléphone. Rien n'est transmis ni conservé ailleurs."), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#5C5A60",
        fontSize: 11,
        marginTop: 22,
        lineHeight: 1.5
      }
    }, "Dr Benjamin Freychet · Chirurgien du genou", /*#__PURE__*/React.createElement("br", null), "Ligaments et ménisques")));
  }
  const day = demo ? offset : diffDays(dateOp);
  const ph = phaseOf(day);
  const today = addD(dateOp, day);
  const M = meds(day);
  const toggle = id => setDone(p => ({
    ...p,
    [id]: !p[id]
  }));
  const due = TASKS.filter(t => t.day <= day && !done[t.id]).sort((a, b) => a.day - b.day);
  const nextC = CONSULTS.find(c => c.day >= day);
  /* Suture méniscale : la course à pied est décalée de 3 mois à 4 mois et demi */
  const dec = po.suture === true ? 45 : 0;
  const sports = SPORTS.map(s => s[0] !== null && s[3] && dec ? [s[0] + dec, s[1], s[2], s[3], true] : s).filter(s => s[1].toLowerCase().includes(q.toLowerCase())).sort((a, b) => (a[0] ?? 9999) - (b[0] ?? 9999));
  const needPo = day >= 0 && (po.suture === null || po.hbpm === null);

  /* ---------- Aujourd'hui ---------- */
  const Today = /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.deep,
      borderRadius: 20,
      padding: "26px 22px",
      color: "#fff",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "knee.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: -46,
      top: -28,
      height: "165%",
      opacity: 0.42,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "#9B99A0"
  }, ph.n), /*#__PURE__*/React.createElement("div", {
    className: "disp",
    style: {
      fontWeight: 600,
      fontSize: 58,
      lineHeight: 1,
      marginTop: 12,
      letterSpacing: "-0.035em"
    }
  }, jL(day)), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#C9C7CB",
      fontSize: 13.5,
      marginTop: 10
    }
  }, lg(today)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "#38363A",
      margin: "16px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "#9B99A0"
    }
  }, day < 0 ? "Intervention le " : "Opéré le ", lg(addD(dateOp, 0))))), (() => {
    const cible = obj !== null ? SPORTS.find(x => x[1] === obj) : null;
    if (!cible) {
      return /*#__PURE__*/React.createElement(Card, {
        style: {
          borderStyle: "dashed",
          borderColor: C.blueLine
        }
      }, /*#__PURE__*/React.createElement("button", {
        onClick: () => setTab("sport"),
        style: {
          padding: 16,
          width: "100%"
        }
      }, /*#__PURE__*/React.createElement(Eyebrow, {
        color: C.blue
      }, "Votre objectif"), /*#__PURE__*/React.createElement("div", {
        className: "disp",
        style: {
          fontWeight: 600,
          fontSize: 17,
          color: C.ink,
          marginTop: 7,
          lineHeight: 1.3
        }
      }, "Quel sport voulez-vous retrouver\xA0?"), /*#__PURE__*/React.createElement("div", {
        style: {
          color: C.muted,
          fontSize: 13,
          marginTop: 6,
          lineHeight: 1.5
        }
      }, "Choisissez-le et l'application comptera les jours qui vous en séparent."), /*#__PURE__*/React.createElement("div", {
        style: {
          color: C.blue,
          fontSize: 13,
          marginTop: 9,
          fontWeight: 700
        }
      }, "Choisir mon objectif →")));
    }
    const cd = cible[0],
      reste = cd - day,
      pct = Math.max(0, Math.min(1, day <= 0 ? 0 : day / cd));
    const atteint = day >= cd;
    return /*#__PURE__*/React.createElement(Card, {
      style: {
        borderColor: atteint ? C.green : C.blueLine,
        borderWidth: 2,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "16px 18px 18px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "row",
      style: {
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      color: atteint ? C.green : C.blue
    }, "Votre objectif"), /*#__PURE__*/React.createElement("div", {
      className: "disp",
      style: {
        fontWeight: 600,
        fontSize: 17,
        color: C.ink,
        marginTop: 7,
        lineHeight: 1.3
      }
    }, cible[1])), /*#__PURE__*/React.createElement("button", {
      onClick: () => setTab("sport"),
      style: {
        color: C.muted,
        fontSize: 11.5,
        textDecoration: "underline",
        flexShrink: 0,
        marginTop: 2
      }
    }, "changer")), atteint ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "disp",
      style: {
        fontWeight: 600,
        fontSize: 30,
        color: C.green,
        letterSpacing: "-0.02em"
      }
    }, "Autorisé"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 13,
        marginTop: 4
      }
    }, "depuis le ", sh(addD(dateOp, cd)))) : /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "row",
      style: {
        alignItems: "baseline",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "disp",
      style: {
        fontWeight: 600,
        fontSize: 38,
        color: C.ink,
        letterSpacing: "-0.03em",
        lineHeight: 1
      }
    }, reste), /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 14,
        fontWeight: 600
      }
    }, reste > 1 ? "jours" : "jour")), /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 13,
        marginTop: 6
      }
    }, "à partir du ", sh(addD(dateOp, cd)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        height: 7,
        borderRadius: 7,
        background: C.paper,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: (pct * 100).toFixed(1) + "%",
        borderRadius: 7,
        background: atteint ? C.green : C.blue,
        transition: "width .5s ease"
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "row",
      style: {
        justifyContent: "space-between",
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 10.5,
        fontWeight: 700,
        letterSpacing: "0.06em"
      }
    }, "JOUR J"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 10.5,
        fontWeight: 700,
        letterSpacing: "0.06em"
      }
    }, "J+", cd)), /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 11.5,
        marginTop: 11,
        lineHeight: 1.5
      }
    }, "Délai minimum. Votre médecin du sport peut le repousser selon l'évolution de votre genou.")));
  })(), needPo && /*#__PURE__*/React.createElement(Card, {
    style: {
      borderColor: C.amber,
      background: C.amberSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: C.amber
  }, "À compléter"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: C.ink,
      marginTop: 6,
      fontSize: 15
    }
  }, "Finalisez votre parcours"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 13.5,
      marginTop: 6,
      lineHeight: 1.5
    }
  }, "Ces deux réponses figurent sur vos papiers de sortie. En attendant, l'application affiche le parcours standard."), /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 12,
      marginTop: 12
    }
  }, [["suture", "Une suture méniscale a-t-elle été réalisée ?"], ["hbpm", "Un traitement anticoagulant vous a-t-il été prescrit ?"]].map(([k, lab]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: C.ink,
      fontWeight: 600,
      marginBottom: 5
    }
  }, lab), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 8
    }
  }, [["Oui", true], ["Non", false]].map(([l, v]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setPo(p => ({
      ...p,
      [k]: v
    })),
    style: {
      flex: 1,
      padding: "9px 0",
      borderRadius: 10,
      fontSize: 13.5,
      fontWeight: 600,
      textAlign: "center",
      border: `1.5px solid ${po[k] === v ? C.ink : C.line}`,
      background: po[k] === v ? C.ink : "#fff",
      color: po[k] === v ? "#fff" : C.ink
    }
  }, l)))))))), day >= 0 && day <= 30 && /*#__PURE__*/React.createElement(Card, {
    style: {
      borderColor: C.blue,
      borderWidth: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: C.blue
  }, "L'essentiel"), /*#__PURE__*/React.createElement("div", {
    className: "disp",
    style: {
      fontWeight: 600,
      fontSize: 21,
      color: C.ink,
      marginTop: 8,
      lineHeight: 1.3
    }
  }, "Appuyez à fond sur la jambe opérée."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 13.5,
      marginTop: 10,
      lineHeight: 1.55
    }
  }, "L'appui est complet dès votre sortie de l'hôpital. Les béquilles ne sont là que pour vous sécuriser en cas de déséquilibre — elles ne doivent pas porter votre poids. Ne reportez pas la charge sur vos bras."), day <= 10 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      background: C.blueSoft,
      borderRadius: 10,
      padding: "10px 12px",
      fontSize: 12.5,
      color: C.ink,
      lineHeight: 1.5
    }
  }, "Entre deux cycles, marchez 5 minutes en appui complet. C'est le geste qui compte, plus que la distance."))), day >= 0 && day <= 21 && /*#__PURE__*/React.createElement(Cycle, {
    rapide: demo,
    cycles: cycles,
    setCycles: setCycles,
    jour: day
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 8px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, due.length ? "À faire maintenant" : "Rien à faire")), due.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 16px",
      color: C.muted,
      fontSize: 13.5
    }
  }, "Tout est à jour. Suivez les consignes ci-dessous.") : due.slice(0, 4).map(t => /*#__PURE__*/React.createElement(Task, {
    key: t.id,
    task: t,
    done: !!done[t.id],
    onT: toggle,
    dateStr: `${jL(t.day)} · ${sh(addD(dateOp, t.day))}`
  })), due.length > 4 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setTab("list"),
    style: {
      width: "100%",
      padding: 12,
      color: C.blue,
      fontWeight: 600,
      fontSize: 13.5,
      textAlign: "center"
    }
  }, "Voir les ", due.length - 4, " autres →")), CONSIGNES[ph.k] && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 4px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Consignes permanentes")), CONSIGNES[ph.k].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "row",
    style: {
      gap: 12,
      padding: "12px 16px",
      borderTop: i ? `1px solid ${C.line}` : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      width: 26,
      height: 26,
      borderRadius: 26,
      background: C.blueSoft,
      color: C.blue,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      fontWeight: 800
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: C.ink
    }
  }, c.t), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 13,
      lineHeight: 1.5,
      marginTop: 3
    }
  }, c.d)))), day >= 0 && day <= 21 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      borderTop: `1px solid ${C.line}`,
      fontSize: 13,
      color: C.muted,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: C.ink
    }
  }, "Bas de contention"), " — 21 jours sur la jambe opérée, 10 jours sur l'autre. Retrait possible la nuit.")), day >= 2 && day <= 9 && /*#__PURE__*/React.createElement(Card, {
    style: {
      background: C.blueSoft,
      borderColor: C.blueLine
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: C.blue
  }, "C'est normal"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.ink,
      fontSize: 13.5,
      marginTop: 7,
      lineHeight: 1.55
    }
  }, "Votre jambe devient bleue puis jaune : les hématomes descendent vers la cheville et le pied, c'est attendu.", day >= 5 && " Vers le 7e jour, des douleurs de jambe en position debout sont très classiques. Elles se calment allongé, jambes surélevées, et en retirant les bas de contention la nuit."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      background: "#fff",
      borderRadius: 9,
      padding: "9px 11px",
      fontSize: 12.5,
      color: C.red,
      fontWeight: 600,
      lineHeight: 1.45
    }
  }, "En revanche, une fièvre qui persiste ou s'aggrave, ou une cicatrice qui coule, doivent vous faire appeler le secrétariat."))), day >= 0 && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Qui vous suit"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 13.5,
      marginTop: 7,
      lineHeight: 1.55
    }
  }, "Pendant les six premiers mois, votre suivi est assuré par un ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: C.ink
    }
  }, "médecin du sport"), ", au Centre Orthopédique Santy ou à Gerland Sport Santé : consultations à 3 semaines, 6 semaines, 3 mois et 6 mois."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 13.5,
      marginTop: 9,
      lineHeight: 1.55
    }
  }, "Le ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: C.ink
    }
  }, "Dr Freychet"), " vous revoit systématiquement à 1 an et à 2 ans."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      background: C.blueSoft,
      borderRadius: 10,
      padding: "11px 12px",
      fontSize: 13,
      color: C.ink,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("b", null, "Un problème particulier ?"), " Le Dr Freychet peut vous recevoir à tout moment, sans attendre l'échéance prévue — en général sous une semaine."))), nextC && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Prochain rendez-vous"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: C.ink,
      marginTop: 6,
      fontSize: 15
    }
  }, nextC.t), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 13,
      marginTop: 3
    }
  }, nextC.p, " · ", sh(addD(dateOp, nextC.day))), nextC.o.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "12px 0 0",
      padding: 0,
      listStyle: "none"
    }
  }, nextC.o.map((o, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      color: C.muted,
      fontSize: 13,
      lineHeight: 1.45,
      paddingLeft: 14,
      position: "relative",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 7,
      width: 5,
      height: 5,
      borderRadius: 5,
      background: C.blue
    }
  }), o.indexOf("sauf suture") > -1 && po.suture === true ? "Pas de reprise de la course à pied : suture méniscale associée" : o))))));

  /* ---------- Check-list ---------- */
  const groups = [];
  TASKS.forEach(t => {
    const g = groups.find(x => x.n === t.g);
    g ? g.i.push(t) : groups.push({
      n: t.g,
      day: t.day,
      i: [t]
    });
  });
  const List = /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 12
    }
  }, groups.map(g => {
    const nb = g.i.filter(x => done[x.id]).length;
    const full = nb === g.i.length;
    return /*#__PURE__*/React.createElement(Card, {
      key: g.n
    }, /*#__PURE__*/React.createElement("div", {
      className: "row",
      style: {
        padding: "16px 16px 8px",
        justifyContent: "space-between",
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      color: full ? C.green : C.blue
    }, jL(g.day)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: C.ink,
        fontSize: 15,
        marginTop: 4
      }
    }, g.n)), /*#__PURE__*/React.createElement("div", {
      style: {
        color: full ? C.green : C.muted,
        fontSize: 12.5,
        fontWeight: 700
      }
    }, nb, "/", g.i.length)), g.i.map(t => /*#__PURE__*/React.createElement(Task, {
      key: t.id,
      task: t,
      done: !!done[t.id],
      onT: toggle,
      dateStr: sh(addD(dateOp, t.day))
    })));
  }));

  /* ---------- Traitement ---------- */
  const Meds = /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 12
    }
  }, M ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 8px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: C.blue
  }, jL(day)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: C.ink,
      fontSize: 17,
      marginTop: 5
    }
  }, M.t)), M.s && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 16px 12px",
      background: C.amberSoft,
      color: C.amber,
      borderRadius: 10,
      padding: "9px 11px",
      fontSize: 12.5,
      fontWeight: 600
    }
  }, M.s), M.l.map(([n, p], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "12px 16px",
      borderTop: `1px solid ${C.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: C.ink,
      fontSize: 14
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.blue,
      fontSize: 13.5,
      marginTop: 3,
      fontWeight: 600
    }
  }, p)))) : /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      color: C.muted,
      fontSize: 14,
      lineHeight: 1.55
    }
  }, day < 0 ? "Aucun traitement avant l'intervention. Pensez à retirer vos médicaments en pharmacie." : "Plus de traitement antalgique prescrit à ce stade.")), day >= 0 && day <= 35 && /*#__PURE__*/React.createElement(Card, {
    style: {
      background: C.redSoft,
      borderColor: "#EDCACA"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: C.red
  }, "À retenir"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "8px 0 0",
      padding: 0,
      listStyle: "none"
    }
  }, ["Ne laissez pas la douleur s'installer : prenez les médicaments régulièrement.", "Ne conduisez pas sous IZALGI.", "N'associez jamais IZALGI et Doliprane — risque de surdosage.", "Brûlures d'estomac : arrêtez le Biprofenid et prévenez le secrétariat."].map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      color: C.ink,
      fontSize: 13,
      lineHeight: 1.5,
      paddingLeft: 14,
      position: "relative",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 7,
      width: 5,
      height: 5,
      borderRadius: 5,
      background: C.red
    }
  }), x))))), day >= 0 && day <= 7 && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Si besoin"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: C.ink,
      fontSize: 14,
      marginTop: 6
    }
  }, "VOGALIB 7,5 mg"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 13,
      marginTop: 3,
      lineHeight: 1.5
    }
  }, "1 lyophilisat, 1 à 4 fois par jour en cas de nausées."))), po.hbpm === true && day >= 0 && /*#__PURE__*/React.createElement(Card, {
    style: {
      borderColor: C.amber
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: C.amber
  }, "Anticoagulant"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.ink,
      fontSize: 13.5,
      marginTop: 6,
      lineHeight: 1.55
    }
  }, "Suivez l'ordonnance remise à la sortie et n'interrompez pas le traitement sans avis médical. Une surveillance de la numération plaquettaire est prescrite deux fois par semaine pendant deux semaines."))));

  /* ---------- Sport ---------- */
  const Sport = /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "disp",
    style: {
      fontWeight: 600,
      fontSize: 22,
      color: C.ink,
      lineHeight: 1.3
    }
  }, "Puis-je reprendre… ?"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 13,
      marginTop: 6,
      lineHeight: 1.5
    }
  }, "Ces délais sont des ", /*#__PURE__*/React.createElement("b", null, "minimums"), ". Une insuffisance d'amplitude, une douleur ou une faiblesse musculaire peuvent les repousser."), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      alignItems: "center",
      gap: 8,
      marginTop: 12,
      padding: "0 12px",
      border: `1.5px solid ${C.line}`,
      borderRadius: 11,
      height: 44
    }
  }, /*#__PURE__*/React.createElement(IcSearch, {
    size: 16,
    color: C.muted
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "ski, vélo, natation…",
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      fontSize: 15,
      color: C.ink,
      background: "transparent"
    }
  })))), /*#__PURE__*/React.createElement(Card, null, sports.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      color: C.muted,
      fontSize: 14
    }
  }, "Aucune activité ne correspond. Demandez au secrétariat."), sports.map((s, i) => {
    const ok = s[0] !== null && day >= s[0];
    const cible = obj === s[1];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "row",
      style: {
        gap: 12,
        padding: "12px 16px",
        borderTop: i ? `1px solid ${C.line}` : "none",
        alignItems: "flex-start",
        background: cible ? C.blueSoft : "transparent"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        minWidth: 62,
        textAlign: "center",
        padding: "5px 6px",
        borderRadius: 9,
        background: s[0] === null ? C.amberSoft : ok ? C.blue : C.paper,
        color: s[0] === null ? C.amber : ok ? "#fff" : C.muted,
        fontSize: 12,
        fontWeight: 800
      }
    }, s[0] === null ? "à voir" : `J+${s[0]}`), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.ink,
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 1.35
      }
    }, s[1]), /*#__PURE__*/React.createElement("div", {
      style: {
        color: ok ? C.green : C.muted,
        fontSize: 12.5,
        marginTop: 3
      }
    }, s[2] ? s[2] : ok ? "Autorisé depuis le " + sh(addD(dateOp, s[0])) : "À partir du " + sh(addD(dateOp, s[0]))), s[4] && /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.amber,
        fontSize: 11.5,
        marginTop: 3,
        fontWeight: 600
      }
    }, "Décalé de 6 semaines : suture méniscale"), s[0] !== null && /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setObj(cible ? null : s[1]);
        if (!cible) setTab("today");
      },
      style: {
        marginTop: 6,
        fontSize: 11.5,
        fontWeight: 700,
        color: cible ? C.blue : C.muted,
        border: `1px solid ${cible ? C.blue : C.line}`,
        borderRadius: 20,
        padding: "3px 10px",
        background: "#fff"
      }
    }, cible ? "✓ Mon objectif" : "En faire mon objectif")));
  })));

  /* ---------- Infos ---------- */
  const Infos = /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      background: C.redSoft,
      borderColor: "#EDCACA"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: C.red
  }, "Quand appeler"), /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      gap: 12,
      marginTop: 12
    }
  }, [["Fièvre qui persiste ou s'aggrave", "Contactez le secrétariat — risque infectieux."], ["Cicatrice qui coule ou se rouvre", "Contactez le secrétariat pour une ordonnance de pansements spécifiques."], ["Brûlures d'estomac", "Arrêtez le Biprofenid et prévenez le secrétariat."], ["Douleurs persistantes malgré le traitement", "Ne laissez pas la douleur s'installer."], ["Douleurs nocturnes inhabituelles", "À signaler lors de votre prochain contact."]].map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: C.ink,
      fontSize: 14
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 13,
      marginTop: 2,
      lineHeight: 1.45
    }
  }, d)))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 4px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Vos contacts")), CONTACTS.map(([n, v, tel, urg], i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "tel:" + tel,
    className: "row",
    style: {
      gap: 12,
      padding: "12px 16px",
      borderTop: `1px solid ${C.line}`,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 34,
      background: urg ? C.redSoft : C.blueSoft,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(IcPhone, {
    size: 15,
    color: urg ? C.red : C.blue
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.ink,
      fontSize: 14,
      fontWeight: 600
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      color: urg ? C.red : C.blue,
      fontSize: 13.5,
      fontWeight: 700
    }
  }, v)))), /*#__PURE__*/React.createElement("a", {
    href: "mailto:sec.freychet@gmail.com",
    className: "row",
    style: {
      gap: 12,
      padding: "12px 16px",
      borderTop: `1px solid ${C.line}`,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 34,
      background: C.blueSoft,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(IcMail, {
    size: 15,
    color: C.blue
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.ink,
      fontSize: 14,
      fontWeight: 600
    }
  }, "Écrire au secrétariat"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.blue,
      fontSize: 13.5,
      fontWeight: 700
    }
  }, "sec.freychet@gmail.com")))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 4px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Adresses")), LIEUX.map(([n, a, t, logo], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "row",
    style: {
      gap: 12,
      padding: "14px 16px",
      borderTop: `1px solid ${C.line}`,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "",
    style: {
      maxWidth: 54,
      maxHeight: 34
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 34,
      background: C.paper,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Dot, {
    size: 7
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.ink,
      fontSize: 14,
      fontWeight: 600
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 12.5,
      marginTop: 2
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.blue,
      fontSize: 10.5,
      marginTop: 3,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase"
    }
  }, t))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Mon intervention"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 13,
      marginTop: 7,
      lineHeight: 1.55
    }
  }, "Si votre intervention est reportée, corrigez la date ici : tout le parcours se recalcule et vos cases cochées sont conservées."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: C.muted,
      fontWeight: 700,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      marginTop: 13
    }
  }, "Date d'intervention"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: dateOp,
    onChange: e => e.target.value && setDateOp(e.target.value),
    style: {
      marginTop: 6,
      background: "#fff",
      color: C.ink,
      border: `1.5px solid ${C.line}`,
      borderRadius: 11,
      padding: "12px 14px",
      fontSize: 15,
      width: "100%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: C.muted,
      fontWeight: 700,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      marginTop: 14
    }
  }, "Genou opéré"), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 8,
      marginTop: 6
    }
  }, ["gauche", "droit"].map(x => /*#__PURE__*/React.createElement("button", {
    key: x,
    onClick: () => setCote(x),
    style: {
      flex: 1,
      padding: "11px 0",
      borderRadius: 11,
      fontSize: 14,
      fontWeight: 700,
      textAlign: "center",
      textTransform: "capitalize",
      border: `1.5px solid ${cote === x ? C.blue : C.line}`,
      background: cote === x ? C.blue : "#fff",
      color: cote === x ? "#fff" : C.ink
    }
  }, x))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: C.blue
  }, "Mon calendrier"), /*#__PURE__*/React.createElement("div", {
    className: "disp",
    style: {
      fontWeight: 600,
      fontSize: 17,
      color: C.ink,
      marginTop: 7,
      lineHeight: 1.3
    }
  }, "Toutes vos dates dans votre agenda"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 13,
      marginTop: 7,
      lineHeight: 1.55
    }
  }, "Passages infirmiers, première séance de kiné, fin des bas de contention, consultations de suivi jusqu'à 2 ans. Les rappels se déclenchent la veille à 9h."), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      const ok = telechargerICS(dateOp);
      if (!ok) alert("Téléchargement impossible depuis cet aperçu. Cela fonctionnera sur le site en ligne.");
    },
    style: {
      marginTop: 13,
      background: C.blue,
      color: "#fff",
      borderRadius: 11,
      padding: "13px 16px",
      fontSize: 14.5,
      fontWeight: 700,
      width: "100%",
      textAlign: "center"
    }
  }, "Ajouter à mon calendrier"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 11.5,
      marginTop: 9,
      lineHeight: 1.5
    }
  }, "Les dates de consultation sont indicatives : elles sont fixées par le secrétariat. Ajustez-les dans votre agenda une fois vos rendez-vous confirmés."))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Vie quotidienne"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.ink,
      fontSize: 14,
      fontWeight: 600
    }
  }, "Conduite"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 13,
      marginTop: 2,
      lineHeight: 1.45
    }
  }, "À l'abandon des béquilles, en général entre 3 semaines et 1 mois, dès que la marche est correcte. Jamais sous IZALGI.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.ink,
      fontSize: 14,
      fontWeight: 600
    }
  }, "Travail"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 13,
      marginTop: 2,
      lineHeight: 1.45
    }
  }, "Arrêt de 45 jours. Reprise en télétravail possible à partir de 3 semaines.")))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "À propos"), /*#__PURE__*/React.createElement("img", {
    src: "santy.png",
    alt: "Santy",
    style: {
      height: 34,
      marginTop: 12,
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 12.5,
      marginTop: 12,
      lineHeight: 1.6
    }
  }, "Postop relaie les consignes du ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: C.ink
    }
  }, "Dr Benjamin Freychet"), ", chirurgien du genou — ligaments et ménisques, après ligamentoplastie du ligament croisé antérieur. Cette application ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: C.ink
    }
  }, "ne remplace pas un avis médical"), " et ne réalise aucun diagnostic. En cas d'urgence, appelez le 15."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 12.5,
      marginTop: 10,
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: C.ink
    }
  }, "Vos données."), " La date de votre intervention et vos cases cochées sont enregistrées uniquement dans votre navigateur. Aucune donnée n'est transmise, collectée ni conservée par le cabinet ou par un tiers. Effacer les données de navigation supprime ces informations."), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (confirm("Réinitialiser l'application ?")) {
        localStorage.clear();
        location.href = location.pathname;
      }
    },
    style: {
      marginTop: 14,
      color: C.muted,
      fontSize: 12.5,
      textDecoration: "underline"
    }
  }, "Réinitialiser l'application"))));
  const TABS = [["today", "Aujourd'hui", IcCal], ["list", "Check-list", IcList], ["meds", "Traitement", IcPill], ["sport", "Sport", IcAct], ["sos", "Infos", IcInfo]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: C.paper
    }
  }, demo && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.grey,
      color: "#fff",
      position: "sticky",
      top: 0,
      zIndex: 20,
      padding: "8px 16px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      fontWeight: 700,
      color: "#DAD8DC"
    }
  }, "Mode démonstration"), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      alignItems: "center",
      gap: 8,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOffset(o => o - 1),
    style: {
      background: "#4A484C",
      border: "1px solid #7C7A80",
      borderRadius: 9,
      padding: 6
    }
  }, /*#__PURE__*/React.createElement(IcLeft, {
    size: 15,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: -35,
    max: 280,
    value: offset,
    onChange: e => setOffset(Number(e.target.value)),
    style: {
      flex: 1,
      accentColor: C.blue
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOffset(o => o + 1),
    style: {
      background: "#4A484C",
      border: "1px solid #7C7A80",
      borderRadius: 9,
      padding: 6
    }
  }, /*#__PURE__*/React.createElement(IcRight, {
    size: 15,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    className: "disp",
    style: {
      minWidth: 54,
      textAlign: "right",
      fontWeight: 600,
      fontSize: 16
    }
  }, jL(offset))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 6,
      flexWrap: "wrap",
      marginTop: 8
    }
  }, [[-30, "J−30"], [-3, "J−3"], [-1, "Veille"], [0, "Jour J"], [3, "J+3"], [7, "J+7"], [15, "J+15"], [21, "J+21"], [45, "J+45"], [90, "J+90"], [180, "J+180"]].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setOffset(v),
    style: {
      fontSize: 11.5,
      padding: "4px 9px",
      borderRadius: 20,
      fontWeight: 700,
      background: offset === v ? "#fff" : "#4A484C",
      color: offset === v ? C.ink : "#E4E2E6",
      border: "1px solid #7C7A80"
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.deep,
      borderBottom: "1px solid #343136",
      padding: "12px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "disp",
    "aria-label": "POST point OP",
    style: {
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: "-0.025em",
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#FFFFFF"
    }
  }, "POST"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: C.blue,
      fontSize: 18
    }
  }, "·"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.blue
    }
  }, "OP")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#C9C7CB",
      fontSize: 11,
      marginTop: 3,
      lineHeight: 1.4
    }
  }, "De la préparation chirurgicale au retour au sport"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#9D9AA0",
      fontSize: 11,
      marginTop: 4,
      fontWeight: 600
    }
  }, "LCA · Dr Benjamin Freychet")), /*#__PURE__*/React.createElement("img", {
    src: "santy-white.png",
    alt: "Santy",
    style: {
      height: 36,
      opacity: 0.96
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "safe",
    style: {
      padding: 12
    }
  }, tab === "today" && Today, tab === "list" && List, tab === "meds" && Meds, tab === "sport" && Sport, tab === "sos" && Infos), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      background: C.card,
      borderTop: `1px solid ${C.line}`,
      zIndex: 20,
      paddingBottom: "env(safe-area-inset-bottom)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, TABS.map(([k, n, I]) => {
    const on = tab === k;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => setTab(k),
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        padding: "9px 0 8px",
        position: "relative"
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: 26,
        height: 2.5,
        borderRadius: 3,
        background: C.blue
      }
    }), /*#__PURE__*/React.createElement(I, {
      size: 19,
      color: on ? C.blue : C.muted,
      sw: on ? 2.4 : 1.8
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        fontWeight: on ? 700 : 500,
        color: on ? C.blue : C.muted
      }
    }, n));
  }))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));