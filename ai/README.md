# Contesto per le AI

Questa cartella raccoglie in Markdown tutto ciò che serve a un'AI per aiutare a recuperare l'**OFA di matematica** del corso di laurea in Informatica dell'Università di Torino **senza rifare le ricerche da zero**: le regole ufficiali con le fonti, le date, com'è fatta la prova, com'è organizzato il corso della piattaforma OFA (con i refusi del materiale già verificati), gli appunti completi degli otto moduli, un test d'ingresso, otto simulazioni della prova e un piano di studio. Le pagine del sito sono generate da questi stessi file, quindi il contenuto è identico.

> **⚠️ Avvertenze.** Ricerche e testi si basano su fonti pubbliche del corso di laurea e di UniTo e sul materiale del corso «OFA Matematica», consultato sulla piattaforma con l'accesso di uno studente. Ogni risultato matematico è stato ricalcolato una seconda volta, in modo indipendente, con il calcolo simbolico. Sono accurati e con fonti, ma possono contenere errori o dati superati. **Io, DonFlammer, che pubblico questa guida, non mi assumo alcuna responsabilità**; chi li usa lo fa a proprio rischio e deve verificare le informazioni importanti (regole, date, iscrizioni) sulle fonti ufficiali. Testo completo: [../AVVERTENZE.md](../AVVERTENZE.md).

## Uso rapido

**Un solo file:** allega `_TUTTO_IN_UNO.md`, che contiene tutti gli altri (viene rigenerato a ogni aggiornamento). È grande, circa 550 KB, perché contiene tutti gli appunti: se la tua AI non lo accetta, usa uno dei due modi qui sotto.

**Solo regole e organizzazione:** per domande su chi ha l'OFA, come si recupera, date, iscrizioni e piano di studio basta `_ESSENZIALE.md` (circa 45 KB: istruzioni, scheda studente, regole, corso ufficiale e piano, senza gli appunti).

**Oppure solo i file che servono:** sempre `istruzioni-per-ai.md` e `studente.md` compilato, poi il modulo che stai studiando (per esempio `moduli/04-fratte-irrazionali-modulo.md`), oppure `test-ingresso.md` o `simulazioni.md` per allenarti.

Prompt da incollare insieme ai file:

```text
Ti allego i file di contesto per recuperare l'OFA di matematica (Informatica, Università di Torino, a.a. 2026/27).
Leggi prima istruzioni-per-ai.md e seguine le regole; usa questi file come fonte principale
invece di rifare le ricerche, e dimmi se qualcosa ti sembra superato. Le mie informazioni sono in studente.md.
La mia richiesta: <scrivi qui la domanda>
```

## Mappa dei file

| File | Contenuto |
|---|---|
| `istruzioni-per-ai.md` | regole per l'AI: che cosa è verificato e che cosa no, come aiutare (test d'ingresso, esercizi, simulazioni con i punteggi veri), come leggere i file, come scrivere contenuti nuovi |
| `studente.md` | scheda da compilare: punteggio al TOLC-S, turno scelto, ore a settimana, risultato del test d'ingresso, come vuoi essere aiutato |
| `regole-ofa.md` | chi ha l'OFA, la procedura, com'è fatta la prova, tutti i turni 2025/26 con iscritti e posti, come trovare i turni 2026/27 su Esse3, sede, DSA, cosa succede se non lo superi, contatti, fonti |
| `corso-ufficiale.md` | il corso «OFA Matematica» della piattaforma: moduli, unità, attività di ogni unità, notazione, refusi verificati del materiale |
| `piano-di-studio.md` | metodo per studiare un modulo, esempio di piano settimana per settimana, calcoli senza calcolatrice, strategia per i 45 minuti |
| `moduli/01-linguaggio-numeri.md` … `moduli/08-trigonometria.md` | gli appunti degli otto moduli: teoria, definizioni e regole, metodi, esempi svolti, errori frequenti, grafici, esercizi con soluzione, quiz di verifica e checklist (134 esercizi, 127 domande, 72 grafici in tutto) |
| `test-ingresso.md` | test diagnostico di 24 domande, 3 per modulo, con soluzioni |
| `simulazioni.md` | 8 simulazioni nel formato della prova (5 domande, 45 minuti), con soluzioni e spiegazioni |
| `FORMATO.md` | la sintassi dei file (riquadri, esercizi, quiz, grafici) |
| `_ESSENZIALE.md` | istruzioni, scheda studente, regole, corso ufficiale e piano uniti in un file (generato da `strumenti/genera.mjs`) |
| `_TUTTO_IN_UNO.md` | tutti i file precedenti uniti (generato da `strumenti/genera.mjs`) |

Il sito con gli stessi contenuti, quiz interattivi, simulazioni a tempo e piano di studio calcolato sulle tue date: https://donflammer.github.io/unito-ofa-matematica/
Appunti del primo anno di Informatica UniTo, con il loro contesto per le AI: [DonFlammer/unito-informatica](https://github.com/DonFlammer/unito-informatica).
Sono DonFlammer · Telegram @rapsodico (https://t.me/rapsodico), senza impegno di risposta. Licenza CC BY-NC-SA 4.0.

Ultimo aggiornamento: 30/09/2026 (prima versione completa: regole verificate il 29/09/2026, appunti degli otto moduli, test d'ingresso, simulazioni, piano di studio, corso ufficiale e refusi verificati).
