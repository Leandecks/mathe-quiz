"use strict";

function quiz() {
  // Begrüßung zum Quiz
  alert("Herzlich Willkommen zum Mathe-Quiz!");
  alert("Los geht's!");
  
   // Abfrage des Namens, Begrüßung
  alert("Schön dich kennenzulernen, " + prompt("Wie heißt du eigentlich?") + "!");

  // Stellung der ersten Frage
  let ersteFrage = Number(prompt("Erste Frage: Wie viel ist 123 + 456?"));

  // ife zu ersteFrage
  if (ersteFrage == 579) {
    window.alert("Richtig!");
  }
  else {
    alert("Falsch! Das richtige Ergebnis ist eigentlich 579!");
  }

  // Stellung der zweiten Frage
  let zweiteFrage = Number(prompt("Weiter geht's: Was ist das Ergebnis von 456 - 123?"));

  // ife zu zweiteFrage
  if (zweiteFrage == 333) {
    alert("Stimmt!");
  }
  else {
    alert("Leider falsch... Es wäre 333!");
  }

  // Stellung der dritten Frage
  let dritteFrage = Number(prompt("Und zuletzt: Was ergibt 5 hoch null?"));

  // ife zu dritteFrage
  if (dritteFrage == 1) {
    alert("Stimmt. Und das war nicht leicht!");
  }
  else if (dritteFrage == 0) {
    alert("Nein! Es ist in wirklichkeit 1!");
  }
  else if (dritteFrage == 5) {
    alert("Esel! Das Ergebnis ist 1!");
  }
  else {
    alert("Nööööööööö! Die richtige Antwort wäre 1!!!");
  }

  // ife zum ganzen Quiz

  if (ersteFrage == 579 && zweiteFrage == 333 && dritteFrage == 1) {
    alert("Und übrigens: Du hast alle Fragen richtig gelöst! Kompliment!");
    alert("Tschüß!");
  } else if (ersteFrage != 579 ^ zweiteFrage != 333 ^ dritteFrage != 1) {
    alert("Du hast 2 Fragen richtig gelöst!");
    alert("Das Wars. Tschüß!");
  } else if (ersteFrage == 579 ^ zweiteFrage == 333 ^ dritteFrage == 1) {
    alert("Du hast leider nur eine Frage richtig gelöst...");
    alert("Na dann... Tschüß!")
  } else if (ersteFrage != 579 && zweiteFrage != 333 && dritteFrage != 1) {
    alert("Übrigens: Na ja... du hast alle Fragen falsch gelöst.");
    alert("Wiederhole unbedingt Mathe!");
    alert("Tschüß!");
  }
}
 