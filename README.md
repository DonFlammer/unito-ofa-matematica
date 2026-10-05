# OFA di matematica — Informatica UniTo 2026/27

**Sito: https://donflammer.github.io/unito-ofa-matematica/**

Guida non ufficiale per recuperare l'**OFA di matematica** (obbligo formativo aggiuntivo) del corso di laurea in Informatica dell'Università di Torino: chi al TOLC-S ha preso meno di 5/20 in Matematica di base deve seguire il corso «OFA Matematica» su www.ofa.unito.it e superarne l'esame entro il primo anno.

> Guida non ufficiale, costruita sul programma del corso OFA ufficiale e sulle pagine di UniTo. Può contenere errori: per regole, date e iscrizioni valgono solo le fonti ufficiali. Leggi le [avvertenze](AVVERTENZE.md).

## Cosa c'è

- **Appunti degli 8 moduli** del corso ufficiale (linguaggio e numeri, polinomi, equazioni e disequazioni, fratte/irrazionali/valore assoluto, geometria analitica, funzioni, esponenziali e logaritmi, trigonometria): teoria spiegata da zero, definizioni e regole, metodi, esempi svolti, errori frequenti, grafici, esercizi con soluzione, quiz e checklist. In tutto 134 esercizi, 127 domande di quiz e 72 grafici.
- **Formulario** con tutte le definizioni e le regole.
- **Piano di studio** che divide i moduli per settimane fino all'appello scelto.
- **Test d'ingresso** di 24 domande, con il risultato modulo per modulo.
- **Simulazioni** del test nel formato vero (5 domande, 45 minuti, sufficienza 6/10), con cronometro e correzione.
- **Regole, date e contatti** con le fonti ufficiali.
- **Il corso ufficiale**: com'è organizzato il corso «OFA Matematica» della piattaforma e i refusi del suo materiale, verificati sugli originali.
- **Contesto per le AI** nella cartella [`ai/`](ai/): tutte le ricerche e tutti i contenuti in Markdown, da dare a qualsiasi AI senza rifare le ricerche. C'è un file unico con tutto ([`ai/_TUTTO_IN_UNO.md`](ai/_TUTTO_IN_UNO.md)) e uno leggero con regole e organizzazione ([`ai/_ESSENZIALE.md`](ai/_ESSENZIALE.md)); istruzioni e prompt da copiare sono in [`ai/README.md`](ai/README.md).

I progressi restano nel browser. I profili locali e le copie di trasferimento cifrate valgono per tutte e quattro le guide; vedi [profili locali e sicurezza](SECURITY.md). Il sito non usa cookie né servizi esterni: caratteri e formule sono ospitati qui.

## Come è fatto

- I contenuti sono file Markdown in [`ai/`](ai/); la sintassi (formule, riquadri, esercizi, quiz, grafici) è in [`ai/FORMATO.md`](ai/FORMATO.md).
- `strumenti/genera.mjs` crea le pagine HTML; `strumenti/verifica.mjs <file>` controlla un file. La prima volta serve `npm install` nella cartella `strumenti/` (Node 20 o più recente).
- Grafica e comportamento: `assets/css/sito.css`, `assets/js/sito.js`, `assets/js/stelle.js`.

## Licenza

Testi: [CC BY-NC-SA 4.0](LICENSE). Caratteri Source Serif 4 e Geist: SIL Open Font License ([`assets/fonts/OFL-source-serif.txt`](assets/fonts/OFL-source-serif.txt), [`assets/fonts/OFL-geist.txt`](assets/fonts/OFL-geist.txt)). KaTeX: licenza MIT ([`assets/katex/LICENSE`](assets/katex/LICENSE)).

## Altro

Appunti del primo anno di Informatica UniTo: [DonFlammer/unito-informatica](https://github.com/DonFlammer/unito-informatica). Contatti: Telegram [@rapsodico](https://t.me/rapsodico).
