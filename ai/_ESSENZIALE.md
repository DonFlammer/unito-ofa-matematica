# OFA di matematica, Informatica UniTo 2026/27 — contesto essenziale

Istruzioni, scheda studente, regole, corso ufficiale e piano di studio, senza gli appunti dei moduli: basta per le domande su regole, date, iscrizioni e organizzazione dello studio. Generato da `strumenti/genera.mjs` (contenuti aggiornati al 30 settembre 2026): non modificarlo a mano, modifica i singoli file e rigenera. Prima di allegarlo compila la scheda «Chi studia» (file `ai/studente.md`), se vuoi un aiuto su misura.

> Avvertenze: ricerche e testi si basano su fonti pubbliche del corso di laurea e di UniTo e sul materiale del corso «OFA Matematica»; ogni risultato matematico è stato ricalcolato in modo indipendente con il calcolo simbolico. Sono accurati e con fonti, ma possono contenere errori o dati superati; io, DonFlammer, che pubblico questa guida, non mi assumo alcuna responsabilità. Per regole, date e iscrizioni fanno fede solo le fonti ufficiali (pagina dei requisiti del corso di laurea, Esse3, piattaforma OFA). Testo completo: AVVERTENZE.md nella radice del repository. Licenza CC BY-NC-SA 4.0.


---

<!-- FILE: ai/README.md -->
> File: `ai/README.md`

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

English version of this folder, for those who don't speak Italian (an English translation; if the two differ, the Italian version prevails): [ai/](https://github.com/DonFlammer/unito-ofa-maths/tree/main/ai) in DonFlammer/unito-ofa-maths.
Il sito con gli stessi contenuti, quiz interattivi, simulazioni a tempo e piano di studio calcolato sulle tue date: https://donflammer.github.io/unito-ofa-matematica/
Appunti del primo anno di Informatica UniTo, con il loro contesto per le AI: [DonFlammer/unito-informatica](https://github.com/DonFlammer/unito-informatica).
Sono DonFlammer · Telegram @rapsodico (https://t.me/rapsodico), senza impegno di risposta. Licenza CC BY-NC-SA 4.0.

Ultimo aggiornamento: 30/09/2026 (prima versione completa: regole verificate il 29/09/2026, appunti degli otto moduli, test d'ingresso, simulazioni, piano di studio, corso ufficiale e refusi verificati).

---

<!-- FILE: ai/istruzioni-per-ai.md -->
> File: `ai/istruzioni-per-ai.md`

# Istruzioni per l'AI che legge questi file

Sei il tutor di una matricola di **Informatica all'Università di Torino (a.a. 2026/27)** che deve recuperare l'**OFA di matematica**: al TOLC-S ha preso meno di 5/20 in Matematica di base e deve superare la prova OFA entro il primo anno, altrimenti non potrà registrare esami del secondo anno. Le sue informazioni (data della prova, ore disponibili, moduli deboli) sono in `studente.md`, se l'ha compilato.

Questi file contengono ricerche già fatte e verificate: **usali come fonte principale invece di ricercare da zero**, e segnala se qualcosa ti sembra superato (le regole possono cambiare ogni anno accademico).

## Che cosa è verificato e che cosa no

- **Regole, prova, sede, contatti** (`regole-ofa.md`): dalle fonti ufficiali del corso di laurea e di UniTo, controllate il 29 settembre 2026; ogni sezione cita la fonte.
- **Date**: il calendario delle prove **2026/27 non era ancora pubblicato** al 30 settembre 2026 (ricontrollato sulla pagina dei requisiti del corso di laurea). Le date del 2025/26 sono dati veri della bacheca appelli di Esse3; le date 2026/27 del piano di studio sono **stime** ricalcate sul 2025/26. Non inventare date: rimanda alla pagina dei requisiti del corso di laurea e alla bacheca appelli di Esse3 (la procedura è in `regole-ofa.md`).
- **Corso della piattaforma** (`corso-ufficiale.md`): struttura letta sulla piattaforma con l'accesso di uno studente. Il materiale ufficiale non è copiato qui. Contiene l'elenco dei **refusi verificati** del materiale: se chi studia ti porta un esercizio ufficiale la cui soluzione non torna, controlla prima quell'elenco.
- **Matematica** (moduli, esercizi, quiz, test d'ingresso, simulazioni): segue il programma del corso; **ogni risultato è stato ricalcolato in modo indipendente** con Python e SymPy (oltre 3300 controlli automatici, comprese tutte le opzioni sbagliate dei quiz) e ogni grafico è stato controllato a vista. Restano possibili errori di formulazione: se trovi un risultato che non torna, ricalcolalo e dillo.
- **Non si sa**: se nelle domande a scelta multipla della prova vera ci siano punti parziali (nelle simulazioni di questi file il punto vale solo se tutte le scelte sono giuste), e quali domande precise usi la prova, oltre al fatto che sono preparate su tutto il materiale del corso.

## Come aiutare

1. **Capisci da dove parte**: se non ha fatto il test d'ingresso, proponi `test-ingresso.md` una domanda alla volta, senza mostrare opzioni giuste o spiegazioni, e alla fine riassumi il risultato modulo per modulo (meno di 2 risposte giuste su 3 = modulo da riprendere).
2. **Segui il programma in ordine** (i moduli usano quelli prima) e il piano di `piano-di-studio.md`, adattato alle ore e alla data in `studente.md`.
3. **Spiega con gli appunti del modulo giusto**, con la loro notazione, che è quella del corso: $\sin$, $\cos$, $\tan$, $\operatorname{cotan}$, $\ln$, $\log_a$, intervalli con tonde e quadre. Parti dagli esempi svolti; i riquadri «Errore frequente» dicono dove si sbaglia di più.
4. **Fai lavorare chi studia**: proponi un esercizio, aspetta il tentativo, poi correggi i passaggi, non solo il risultato. Prima dei suggerimenti, poi la soluzione completa solo se la chiede.
5. **Niente calcolatrice**: alla prova è vietata. Se servono conti, mostra come farli a mano e con quali trucchi (semplificare prima di moltiplicare, riconoscere le potenze, stimare).
6. **Controlla sempre** condizioni di esistenza, verso delle disequazioni, soluzioni da scartare ed estremi degli intervalli: sono gli errori che costano più punti.
7. **Simula la prova** con `simulazioni.md`: 5 domande, 45 minuti (60 con il tempo aggiuntivo), niente calcolatrice. Mostra le domande senza le soluzioni, raccogli le risposte, poi correggi: 2 punti a domanda, 1 per parte nelle domande in due parti, nessuna penalità, sufficienza 6/10. Poi le spiegazioni, anche delle risposte giuste.
8. **Casi particolari** delle regole (trasferimenti, seconde lauree, iscrizioni tardive, DSA): non improvvisare, rimanda alla commissione OFA, commofa@educ.di.unito.it.

## Come leggere i file

La sintassi è descritta in `FORMATO.md`. In breve:

- `> [!DEF]`, `> [!PROP]` (regola), `> [!METODO]`, `> [!ESEMPIO]`, `> [!TRAPPOLA]` (errore frequente), `> [!TEST]` (consiglio per la prova), `> [!NOTA]`: riquadri; nel sito definizioni, regole ed esempi sono numerati per modulo («Definizione 3.1»).
- `::: esercizio base|medio|test titolo` … `::: soluzione` … `:::`: esercizio con la sua soluzione.
- Blocchi `quiz`, `quiz diagnostico` e `simulazione`: `D:` è la domanda, `+` un'opzione giusta, `-` una sbagliata, `N:` una risposta numerica (con l'eventuale tolleranza `±`), `=` la spiegazione, `a)` e `b)` le parti di una domanda da 1 punto ciascuna.
- Blocchi `grafico` e `retta`: descrivono le figure del sito (funzioni disegnate, punti, intervalli sulla retta dei numeri); si leggono anche come testo.
- I link `sito:pagina.html` puntano al sito: https://donflammer.github.io/unito-ofa-matematica/pagina.html.

## Se devi scrivere o correggere contenuti

1. Segui `FORMATO.md` e la struttura dei moduli esistenti: frontmatter, «In breve», una sezione per unità del corso ufficiale, riquadri, esercizi dei tre livelli, quiz di verifica e checklist.
2. Scrivi da capo: non copiare testi, esercizi o figure del materiale ufficiale.
3. Ricalcola ogni risultato, comprese le opzioni sbagliate dei quiz, con uno strumento di calcolo simbolico, e non riprendere i refusi elencati in `corso-ufficiale.md`.
4. Controlla il file con `node strumenti/verifica.mjs <file>` e rigenera il sito con `node strumenti/genera.mjs` (che rigenera anche `_TUTTO_IN_UNO.md` e `_ESSENZIALE.md`).

---

<!-- FILE: ai/studente.md -->
> File: `ai/studente.md`

# Chi studia (scheda da compilare)

Questa scheda serve all'AI per adattare l'aiuto a te. Compilala prima di allegare i file: sostituisci i trattini, e lascia vuoto quello che non sai. Chi ha fatto un fork del repository può tenerla già compilata.

- **Corso di laurea**: Informatica, Università di Torino, a.a. 2026/27. *(Se sei di un altro corso di laurea scrivilo: soglie e regole dell'OFA cambiano da corso a corso, e le regole di questi file valgono solo per Informatica.)*
- **Punteggio al TOLC-S in Matematica di base**: — / 20
- **Turno della prova a cui punto**: — *(data, oppure «non ancora deciso»)*
- **Ore a settimana che posso dedicare all'OFA**: —
- **Tempo aggiuntivo o strumenti compensativi (DSA o disabilità)**: sì / no *(con il tempo aggiuntivo la prova dura 1 ora invece di 45 minuti)*
- **Risultato del test d'ingresso di questa guida**, se l'ho fatto (risposte giuste su 3 per modulo): M1 —, M2 —, M3 —, M4 —, M5 —, M6 —, M7 —, M8 —
- **Moduli che ho già studiato**: —
- **Argomenti che mi mettono in difficoltà**: —
- **Come voglio essere aiutato**: — *(per esempio: spiegazioni passo passo, un esercizio alla volta con suggerimenti, correzione dei miei svolgimenti, simulazioni a tempo, ripasso veloce prima della prova)*
- **Lingua e tono**: italiano; risposte brevi / dettagliate.

---

<!-- FILE: ai/regole-ofa.md -->
> File: `ai/regole-ofa.md`

---
titolo: "Regole, date e contatti"
breve: "Tutto quello che dicono il corso di laurea e l'Università di Torino sull'OFA di matematica di Informatica, con le fonti. Controllato il 29 settembre 2026."
---

## In breve

- Hai l'**OFA di matematica** se nel TOLC-S hai preso **meno di 5 punti su 20** nella sezione Matematica di base. Nel libretto di MyUnito compare l'attività **«INT1475 OFA - MATEMATICA»**.
- Per recuperarlo devi seguire il **corso di riallineamento «OFA Matematica»** su [www.ofa.unito.it](https://www.ofa.unito.it/course/view.php?id=20) e **superare l'esame in presenza**.
- L'esame: **5 domande** da 2 punti, **45 minuti**, sufficienza **6/10**, **niente calcolatrice**, al computer in **Laboratorio Turing**.
- Ti iscrivi agli appelli su **MyUnito**, a **un solo turno per sessione**; i posti sono limitati.
- Va superato **entro il primo anno**: senza, non puoi registrare esami del secondo anno. Gli esami del primo anno invece puoi darli.

## Chi ha l'OFA

Informatica è ad accesso libero, ma per iscriversi bisogna sostenere il **TARM** (test di accertamento dei requisiti minimi), che si fa con il **TOLC-S** del CISIA. Il TOLC-S ha 55 quesiti in 6 sezioni (Matematica di base; Ragionamento, comprensione, problemi; Biologia; Chimica; Fisica; Scienze della Terra) più 30 quesiti di inglese, in 120 + 15 minuti.

Per il corso di laurea il test è superato con **almeno 5 punti su 20 nella sezione Matematica di base**. Chi resta sotto riceve l'OFA di matematica. Non ci sono altre soglie.

> [!NOTA] Fisica
> Se nella sezione Fisica hai preso meno di 2/10, il corso di laurea **consiglia** (non obbliga) di seguire il corso di riallineamento di fisica, sempre su www.ofa.unito.it. Non è un OFA e non c'è un esame da superare.

Fonti: regolamento didattico del corso di laurea (coorte 2026), articolo 2, commi 7–11; pagina [Requisiti di ammissione, TARM e TOLC](https://laurea.informatica.unito.it/do/home.pl/View?doc=Requisiti_di_ammissione.html).

## Cosa devi fare

> [!METODO] Dal libretto al test
> 1. **Controlla il libretto** su [MyUnito](https://my.unito.it): se c'è «INT1475 OFA - MATEMATICA», l'OFA ce l'hai.
> 2. **Entra su [www.ofa.unito.it](https://www.ofa.unito.it)** con le credenziali SCU di UniTo (le stesse di MyUnito). Serve essere già iscritti e avere lo stato di studente attivo.
> 3. **Iscriviti al corso «OFA Matematica»**: dal menu Corsi → Attività OFA, oppure [direttamente qui](https://www.ofa.unito.it/course/view.php?id=20). L'iscrizione non chiede chiavi.
> 4. **Studia tutto il materiale** degli 8 moduli: le domande dell'esame sono preparate su tutto quello che c'è sulla piattaforma. Gli appunti di questo sito seguono gli stessi moduli; com'è organizzato il corso, e quali refusi sono stati trovati nel suo materiale, lo trovi nella pagina [Il corso ufficiale](https://donflammer.github.io/unito-ofa-matematica/corso.html).
> 5. **Prenota un turno d'esame** su MyUnito, sezione Esami, appena aprono le iscrizioni: uno solo per sessione, posti a numero chiuso.
> 6. **Presentati puntuale** in Laboratorio Turing con un documento d'identità.

Il corso di laurea raccomanda di prepararsi subito e di puntare ai **turni d'autunno**, per andare avanti con gli studi più spediti: la preparazione di base è importante per tutto lo studio.

## L'esame

Dalle istruzioni ufficiali del corso di laurea (aggiornamento di gennaio 2026):

| Cosa | Come funziona |
|---|---|
| Domande | 5, da 2 punti ciascuna. Alcune sono divise in due sotto-domande da 1 punto; altre, più complesse, valgono 2 punti senza sotto-domande. |
| Formati | scelta una su quattro, scelta multipla, vero/falso, risposta numerica |
| Sufficienza | 6 punti su 10 |
| Penalità | nessuna per le risposte sbagliate: conviene rispondere a tutto |
| Tempo | 45 minuti (1 ora con il tempo aggiuntivo per DSA o disabilità) |
| Calcolatrice | vietata, sia scientifica sia normale (salvo concessione richiesta nei tempi per DSA o disabilità) |
| Brutta | un foglio consegnato dalla sorveglianza, ritirato alla fine |
| Dove | Laboratorio Turing, al computer, sulla piattaforma esami |
| Accesso | credenziali SCU di UniTo; **con SPID non si entra** |
| Cosa portare | un documento d'identità |
| Programma | tutto il materiale del corso «OFA Matematica» sulla piattaforma |

> [!TEST] Cosa significa per come studiare
> Con 45 minuti per 5 domande hai circa 9 minuti a domanda, senza calcolatrice. Le domande sono esercizi veri (una disequazione, un sistema, un logaritmo, un'equazione trigonometrica…), non definizioni a memoria. Allenati a fare i conti a mano e a tempo: le [simulazioni](https://donflammer.github.io/unito-ofa-matematica/simulazioni.html) hanno lo stesso formato.

## Date e iscrizioni

**2026/27.** Al 30 settembre 2026 il calendario non è ancora uscito. Il corso di laurea lo pubblica nella pagina [Requisiti di ammissione](https://laurea.informatica.unito.it/do/home.pl/View?doc=Requisiti_di_ammissione.html), sezione «Recupero obblighi formativi aggiuntivi (OFA) a.a. 2026-2027». I turni compaiono anche nella [bacheca appelli di Esse3](https://esse3.unito.it/ListaAppelliOfferta.do), che si può consultare senza login.

> [!METODO] Trovare i turni su Esse3
> 1. Apri la [bacheca appelli](https://esse3.unito.it/ListaAppelliOfferta.do) e allarga l'intervallo di date (per esempio da oggi a fine settembre dell'anno dopo).
> 2. Dipartimento: **[010088] INFORMATICA**.
> 3. Corso di studio: **[0801L31] INFORMATICA**.
> 4. Attività didattica: **[INT1475] OFA - MATEMATICA**, poi «Avvia ricerca».

**Com'è andata nel 2025/26.** Dieci turni, tutti in Laboratorio Turing (dati della bacheca appelli di Esse3):

| Turno | Iscrizioni | Iscritti / posti |
|---|---|---|
| lunedì 24 novembre 2025, 10:00 | 7–19 novembre | 45 / 60 |
| lunedì 24 novembre 2025, 12:00 | 7–20 novembre | 19 / 60 |
| venerdì 28 novembre 2025, 12:00 | 7–23 novembre | 46 / 60 |
| mercoledì 14 gennaio 2026, 14:00 | 28 novembre – 9 gennaio | 49 / 65 |
| lunedì 19 gennaio 2026, 15:00 | 28 novembre – 14 gennaio | 52 / 60 |
| lunedì 26 gennaio 2026, 16:00 | 27 dicembre – 21 gennaio | 39 / 60 |
| venerdì 29 maggio 2026, 14:00 | 27 febbraio – 24 maggio | 57 / 60 |
| giovedì 4 giugno 2026, 11:00 | 27 febbraio – 30 maggio | 50 / 60 |
| giovedì 3 settembre 2026, 14:00 | 1 luglio – 29 agosto | 23, senza limite |
| venerdì 18 settembre 2026, 14:00 | 20 luglio – 13 settembre | 23, senza limite |

> [!TRAPPOLA] Un solo turno per sessione
> Le istruzioni chiedono di iscriversi a **uno e un solo** turno per sessione, e i turni hanno numero chiuso. Nel 2025/26 le iscrizioni ai turni di novembre si sono aperte il 7 novembre, 17–21 giorni prima dei turni: tieni d'occhio le date e prenota subito.

## Dove

Il test si svolge nel **Laboratorio Turing** del **Dipartimento di Informatica**, **via Pessinetto 12, Torino**, al piano rialzato (lo stesso palazzo delle aule A e B). Su Esse3 l'aula compare come «Lab Turing Informatica». Mappa: [OpenStreetMap](https://www.openstreetmap.org/search?query=Via%20Pessinetto%2012%2C%20Torino).

## DSA e disabilità

Chi ha una disabilità o un DSA, quando si prenota all'appello, segue la stessa procedura degli altri esami: le indicazioni di Ateneo sono nella pagina [Supporto per studenti con DSA](https://www.unito.it/servizi/lo-studio/studenti-e-studentesse-con-disturbi-specifici-di-apprendimento-dsa/supporto) e la documentazione va mandata ai docenti del turno (elenco nella [pagina docenti del corso di laurea](https://laurea.informatica.unito.it/do/docenti.pl/Search?format=8&rs=1;title=Ricevimento%20studenti&max=5000)). Il tempo aggiuntivo è di un terzo: **1 ora invece di 45 minuti**. La calcolatrice si può concedere solo a chi ne ha fatto richiesta entro i termini.

## Se non lo superi

- Riprovi alla **sessione successiva** (un turno per sessione).
- L'OFA va superato **entro il primo anno di corso**. Se non ce la fai, **non puoi registrare esami del secondo anno** finché non lo superi.
- Gli **esami del primo anno** puoi sostenerli anche con l'OFA aperto.

> [!PROP] La regola per gli esami del secondo anno
> La Guida del corso di laurea 2026/27 dice che si possono registrare esami di un anno successivo al primo solo dopo aver registrato **almeno 21 CFU di esami del primo anno** e **avendo superato l'OFA di matematica** (per chi non ha superato la soglia del TOLC-S).

Il regolamento didattico (articolo 9) prevede la stessa soglia dei 21 CFU; l'OFA la aggiunge per chi ce l'ha.

## Aiuto e contatti

| Per | Contatto |
|---|---|
| Domande sull'OFA (regole, casi particolari) | commissione OFA, [commofa@educ.di.unito.it](mailto:commofa@educ.di.unito.it) |
| Problemi di accesso alla piattaforma OFA | [helpdesk della piattaforma](https://www.ofa.unito.it/helpdesk/index.php?t=tcre) («Crea ticket») |
| Consigli pratici da studenti dell'ultimo anno | tutorato matricole, [tutorato.informatica@unito.it](mailto:tutorato.informatica@unito.it), e il [gruppo Telegram del 1° anno](https://t.me/+0sR7CugDQlllNzU0) indicato dal corso di laurea |
| Difficoltà nel percorso di studi | [SUPERA](https://www.unito.it/servizi/pari-opportunita-benessere-e-assistenza/sportello-unito-la-riuscita-accademica-supera), lo sportello di Ateneo |

Il corso di laurea ha anche una commissione di **tutorato individuale** per le matricole, con una pagina su [informatica.i-learn.unito.it](https://informatica.i-learn.unito.it/) a cui le matricole vengono iscritte d'ufficio: cerca quella del tuo anno accademico. Tutte le informazioni sono nella pagina [Tutorato](https://laurea.informatica.unito.it/do/home.pl/View?doc=tutorato.html).

## Domande frequenti

**Ho preso 5/20 o più in Matematica di base: devo fare qualcosa?** No, l'OFA non ce l'hai.

**Posso recuperare l'OFA superando un esame di matematica del primo anno?** Le istruzioni ufficiali indicano un solo modo: il corso sulla piattaforma e il suo esame. Se sei in un caso particolare (per esempio arrivi da un trasferimento o da un'altra laurea), chiedi alla commissione OFA.

**Il corso sulla piattaforma è obbligatorio?** Il corso di laurea «richiede la frequenza e il superamento» del corso di riallineamento, cioè studiarne il materiale e superarne l'esame. In ogni caso le domande sono preparate su quel materiale: studialo tutto.

**Posso iscrivermi a due turni della stessa sessione?** No: uno e uno solo.

**Il test è su carta?** No, al computer sulla piattaforma esami, con le credenziali SCU. Hai solo un foglio per la brutta.

**Cosa succede con le domande divise in due parti?** Ogni parte vale 1 punto: puoi prenderne uno anche se sbagli l'altra.

## Fonti

- Corso di laurea in Informatica, [Requisiti di ammissione, TARM e TOLC](https://laurea.informatica.unito.it/do/home.pl/View?doc=Requisiti_di_ammissione.html), a.a. 2026/27: soglia 5/20, recupero con il corso su www.ofa.unito.it e l'esame in presenza, contatto della commissione.
- [Istruzioni per assolvere l'OFA, corso di laurea in Informatica](https://docs.google.com/document/d/1hiHaiepYJW2I5e-kx4gEYXZy3HCJBoNn/edit), aggiornamento gennaio 2026, collegate dalla pagina dei requisiti: formato dell'esame, iscrizione ai turni, DSA.
- [Regolamento didattico del corso di laurea](https://laurea.informatica.unito.it/do/home.pl/View?doc=regolamenti.html), coorte 2026, articoli 2 e 9.
- [Guida del corso di laurea 2026/27](https://laurea.informatica.unito.it/do/home.pl/View?doc=Guida_al_corso_di_laurea.html), pagine 10–11: regola dei 21 CFU e dell'OFA per gli esami del secondo anno.
- [Bacheca appelli di Esse3](https://esse3.unito.it/ListaAppelliOfferta.do), attività INT1475: turni 2025/26, aula e iscritti.
- Piattaforma [www.ofa.unito.it](https://www.ofa.unito.it), corso «OFA Matematica»: 8 moduli, con libri, esercizi e test online.
- CISIA, [struttura e sillabo del TOLC-S](https://www.cisiaonline.it/tolc/tolc-s/struttura-della-prova-e-sillabo).
- Corso di laurea in Informatica, pagina [Tutorato](https://laurea.informatica.unito.it/do/home.pl/View?doc=tutorato.html).

---

<!-- FILE: ai/corso-ufficiale.md -->
> File: `ai/corso-ufficiale.md`

---
titolo: "Il corso «OFA Matematica»"
breve: "Com'è organizzato il corso della piattaforma OFA, su cui è costruita la prova: moduli, unità e attività, la notazione che usa e i refusi trovati nel suo materiale. Controllato il 30 settembre 2026."
---

## In breve

- Il corso di riallineamento si chiama **«OFA Matematica»** e sta su [www.ofa.unito.it](https://www.ofa.unito.it/course/view.php?id=20) (corso numero 20). Si entra con le credenziali SCU di UniTo e ci si iscrive da soli, senza chiavi.
- Ha **8 moduli**, divisi in **unità** numerate (1.1, 1.2, 2.1, …). Per ogni unità ci sono un **libro**, quasi sempre un foglio interattivo **«Esplora»**, spesso una pagina di **applicazioni**, **esercizi e soluzioni** in PDF e un **test online**; in fondo a ogni modulo c'è un **test di fine modulo**.
- Le domande della prova sono preparate **su tutto il materiale del corso**: gli appunti di questa guida seguono gli stessi moduli e le stesse unità, ma non lo sostituiscono.
- Nel materiale ci sono alcuni **refusi**: li trovi in fondo a questa pagina, già verificati. Negli appunti c'è la versione corretta.

## Le attività di ogni unità

| Attività | Che cos'è | Come usarla |
|---|---|---|
| Libro | la teoria dell'unità, divisa in capitoli, con esempi svolti | leggila dopo gli appunti dello stesso argomento, per abituarti alla notazione del corso |
| Esplora | un foglio di lavoro Maple interattivo, con grafici e calcoli sull'argomento dell'unità | usalo per vedere che cosa succede quando cambia un coefficiente |
| Applicazioni | una pagina o un PDF con un problema concreto risolto con la matematica dell'unità | leggila come esempio svolto in più |
| Esercizi e Soluzioni | due PDF: prima gli esercizi, poi le soluzioni (spesso solo il risultato) | svolgili tutti a mano e controlla alla fine |
| Test | un test online (Maple T.A.) dell'unità; alla fine del modulo c'è il test di fine modulo | rifallo finché non esce senza errori |

Il libro scrive le formule come immagini: se una formula non si legge bene, ingrandisci la pagina.

## I moduli e le unità

### Modulo 1 · Linguaggio, insiemi, logica e numeri

[Sezione del modulo sul portale](https://www.ofa.unito.it/course/view.php?id=20&section=1) · appunti: [modulo 1](https://donflammer.github.io/unito-ofa-matematica/moduli/01-linguaggio-numeri.html)

- **1.1 Elementi di teoria degli insiemi e logica**: libro; Esplora «Gli insiemi»; Applicazioni «Un rompicapo tra logica e vita quotidiana» (PDF); esercizi e soluzioni «Ulteriori esercizi di logica»; Test 1.1.
- **1.2 Numeri**: libro; Esplora «Operazioni tra numeri»; Applicazioni «Dal linguaggio quotidiano alla simbologia matematica»; esercizi e soluzioni «Ulteriori esercizi sui numeri»; Test 1.2.
- Test modulo 1.

### Modulo 2 · Polinomi e scomposizione

[Sezione del modulo sul portale](https://www.ofa.unito.it/course/view.php?id=20&section=2) · appunti: [modulo 2](https://donflammer.github.io/unito-ofa-matematica/moduli/02-polinomi.html)

- **2.1 Polinomi e fattorizzazione**: libro; Esplora «Polinomi e loro fattorizzazione»; Applicazioni «La fattorizzazione di polinomi in matematica e non solo»; esercizi e soluzioni «Ulteriori esercizi sui polinomi»; Test 2.1.
- Test modulo 2.

### Modulo 3 · Equazioni e disequazioni di 1° e 2° grado, sistemi

[Sezione del modulo sul portale](https://www.ofa.unito.it/course/view.php?id=20&section=3) · appunti: [modulo 3](https://donflammer.github.io/unito-ofa-matematica/moduli/03-equazioni-disequazioni.html)

- **3.1 Equazioni e disequazioni algebriche di 1° grado con una incognita**: libro; Esplora «Le equazioni di 1° grado con una incognita»; Applicazioni «Un'equazione di 1° grado per esprimere l'età di tre fratelli»; esercizi e soluzioni; Test 3.1.
- **3.2 Equazioni e disequazioni algebriche di 2° grado con una incognita**: libro; Esplora «Le equazioni di 2° grado con una incognita»; esercizi e soluzioni «Applicazione di equazioni di 2° grado alla risoluzione di problemi»; Test 3.2.
- **3.3 Sistemi di equazioni**: libro; Applicazione «Alla ricerca di un numero che soddisfi le richieste»; esercizi e soluzioni «Sistemi lineari di equazioni».
- Test modulo 3.

### Modulo 4 · Fratte, irrazionali e con valore assoluto

[Sezione del modulo sul portale](https://www.ofa.unito.it/course/view.php?id=20&section=4) · appunti: [modulo 4](https://donflammer.github.io/unito-ofa-matematica/moduli/04-fratte-irrazionali-modulo.html)

- **4.1 Equazioni e disequazioni algebriche fratte**: libro; Esplora; Applicazione «Le equazioni fratte e la realtà: un binomio possibile?»; esercizi e soluzioni; Test 4.1.
- **4.2 Equazioni e disequazioni irrazionali**: libro; Esplora «Le disequazioni irrazionali»; esercizi e soluzioni; Test 4.2.
- **4.3 Equazioni e disequazioni con valore assoluto**: libro; Esplora; Applicazione «Una disequazione con valore assoluto per esprimere la temperatura corporea»; esercizi e soluzioni; Test 4.3.
- Test finale modulo 4.

### Modulo 5 · Geometria analitica: retta e coniche

[Sezione del modulo sul portale](https://www.ofa.unito.it/course/view.php?id=20&section=5) · appunti: [modulo 5](https://donflammer.github.io/unito-ofa-matematica/moduli/05-geometria-analitica.html)

- **Introduzione: il piano cartesiano** (una pagina).
- **5.1 La retta nel piano cartesiano**: libro; Esplora; Applicazioni «Quale parcheggio è più conveniente?»; esercizi e soluzioni «Ulteriori esercizi su piano cartesiano e retta»; Test 5.1.
- **5.2 Le coniche**: libro (circonferenza, parabola, ellisse, iperbole); Esplora «La parabola nel piano cartesiano»; Applicazioni «La parabola per la risoluzione di disequazioni»; Curiosità «Perché le coniche si chiamano "coniche"?»; esercizi e soluzioni; Test 5.2.
- Test fine modulo 5.

### Modulo 6 · Funzioni reali di variabile reale

[Sezione del modulo sul portale](https://www.ofa.unito.it/course/view.php?id=20&section=6) · appunti: [modulo 6](https://donflammer.github.io/unito-ofa-matematica/moduli/06-funzioni.html)

- **Nota introduttiva** (PDF).
- **6.1 Definizione di funzione e principali caratteristiche**: libro; Esplora «Grafici di funzione»; Applicazioni «Legame tra grafici ed equazioni»; esercizi e soluzioni; Test 6.1.
- **6.2 Esempi di funzioni utili**: libro; Esplora «Il valore assoluto di una funzione»; Applicazioni «Proporzionalità diretta e inversa in fisica»; esercizi e soluzioni; Test 6.2.
- Test fine modulo 6.

### Modulo 7 · Esponenziali e logaritmi

[Sezione del modulo sul portale](https://www.ofa.unito.it/course/view.php?id=20&section=7) · appunti: [modulo 7](https://donflammer.github.io/unito-ofa-matematica/moduli/07-esponenziali-logaritmi.html)

- **7.1 Esponenziali e logaritmi**: libro; Nota «La base $e$, la base $10$»; Esplora «La funzione esponenziale» e «La funzione logaritmica»; Applicazioni «Esponenziali per modellizzare la realtà»; esercizi e soluzioni «Ulteriori esercizi sui logaritmi»; Test 7.1.
- **7.2 Equazioni e disequazioni esponenziali e logaritmiche**: libro; Applicazioni «Il pH di una soluzione chimica»; esercizi e soluzioni; Test 7.2.
- Test fine modulo 7.

### Modulo 8 · Trigonometria

[Sezione del modulo sul portale](https://www.ofa.unito.it/course/view.php?id=20&section=8) · appunti: [modulo 8](https://donflammer.github.io/unito-ofa-matematica/moduli/08-trigonometria.html)

- **Introduzione: circonferenza goniometrica e angoli** (una pagina).
- **8.1 Funzioni trigonometriche**: libro; Esplora «La funzione trigonometrica seno» e «La funzione trigonometrica coseno»; Applicazioni «Legami con la fisica»; esercizi e soluzioni; Test 8.1.
- **8.2 Equazioni e disequazioni trigonometriche**: libro; Applicazioni «Trigonometria e triangoli»; esercizi e soluzioni; Test 8.2.
- Test fine modulo 8.

## La notazione del corso

Gli appunti usano la stessa notazione, così alla prova non trovi sorprese:

- funzioni goniometriche $\sin x$, $\cos x$, $\tan x$ e $\operatorname{cotan} x$; logaritmo naturale $\ln x$, logaritmo in base $a$ $\log_a x$;
- intervalli con le parentesi tonde (estremo escluso) e quadre (estremo incluso): $(-2, 3]$, $(-\infty, 1)$;
- nelle soluzioni: $\forall x \in \R$ (ogni numero reale), $\nexists x \in \R$ (nessuna soluzione), $\vee$ per «oppure»; «t.c.» per «tale che»;
- negli esercizi di trigonometria le soluzioni generali si scrivono con $k \in \Z$, per esempio $x = \frac{\pi}{4} + k\pi$.

## Refusi nel materiale

Ricalcolando gli esercizi del corso per scrivere gli appunti si sono trovati alcuni refusi. Ognuno è stato ricontrollato con il calcolo simbolico e **confrontato con la pagina o il PDF originale** il 30 settembre 2026. Negli appunti c'è la versione corretta. L'elenco riporta solo i refusi verificati e non è una revisione completa del materiale; nel modulo 3 non se ne sono trovati. Se ne trovi altri puoi segnalarli all'[helpdesk della piattaforma](https://www.ofa.unito.it/helpdesk/index.php?t=tcre).

### Modulo 1

- **Libro 1.1**, dimostrazione per assurdo che se $n^2$ è pari anche $n$ è pari: con $n = 2p + 1$ si ha $n^2 = 4p^2 + 4p + 1$, non $4p^2 + 2p + 1$. La conclusione ($n^2$ è dispari) resta giusta.
- **Libro 1.1**, esempio sul modo di enunciare un teorema: due numeri reali con lo stesso valore assoluto sono uguali **o** opposti ($a = b$ oppure $a = -b$), non «uguali ed opposti».
- **Libro 1.2**, estensione da $\Z$ a $\Q$: l'equazione $ax = b$ ha la soluzione $x = \frac{b}{a}$ quando $a \ne 0$; il libro scrive $b \ne 0$.
- **Soluzioni 1.1, esercizio 2**, punti iv e v: la negazione di «tutti i bambini hanno più di 6 anni» è «almeno un bambino ha **al più** 6 anni», non «meno di 6 anni» (un bambino di 6 anni esatti rende falsa la frase di partenza). Allo stesso modo la negazione di «esiste un palazzo con più di 10 piani» è «ogni palazzo ha al più 10 piani».
- **Soluzioni 1.2, esercizio 1**: il più grande numero di quattro cifre in cui unità più decine fa quanto centinaia più migliaia è $9999$ ($9 + 9 = 9 + 9$), non $9054$. Anche chiedendo cifre tutte diverse ci sono numeri più grandi di $9054$, per esempio $9687$.
- **Soluzioni 1.2, esercizio 5**: $\frac{27}{8}$ non è uguale a $\frac{9}{2}$; una frazione equivalente è $\frac{27}{6}$.

### Modulo 2

- **Libro 2.1**, raccoglimento totale: $15x^3 + 3x^2 - 6x = 3x(5x^2 + x - 2)$, non $3x(5x^3 + x^2 - 2)$.
- **Soluzioni 2.1, esercizio 3**: $(2x^3 - 10x^2 + 3x - 15) : (x - 5)$ dà quoziente $2x^2 + 3$ (resto $0$), non $2x^3 + 3$.
- **Soluzioni 2.1, esercizio 6**: $8x^3 + 36x^2 + 54x + 27 = (2x + 3)^3$, non $(2x + 3)^2$: il testo stesso parla di cubo di un binomio.

### Modulo 4

- **Libro 4.3, esempio 4** ($|x + 1| + |x - 2| \le 5$): il primo sistema dà $-2 \le x < -1$, non $-2 \le x < 1$. Il risultato finale, $-2 \le x \le 3$, è giusto.
- **Soluzioni 4.2, esercizio 6** ($\sqrt{7x + 2} + \sqrt{16 - x^2} > -5$): la soluzione è il campo di esistenza, $-\frac{2}{7} \le x \le 4$, non «per ogni $x$ reale». Il ragionamento del foglio (una somma di radici quadrate non è mai negativa) è giusto, ma vale solo dove le radici esistono.

### Modulo 5

- **Libro 5.2**, circonferenza, retta tangente a $x^2 + y^2 + 6x - 4y = 0$ nel punto $P_0 = (-6, 4)$: la retta per $P_0$ con coefficiente angolare $\frac{3}{2}$ si scrive $y - 4 = \frac{3}{2}(x + 6)$. Il libro scrive $y - 2 = \frac{3}{2}(x + 3)$, che passa per il centro $(-3, 2)$; il risultato finale, $y = \frac{3}{2}x + 13$, è giusto.

### Modulo 6

- **Libro 6.1**, traslazioni: $\cos\left(\frac{x}{2} + 1\right)$ si ottiene da $\cos\frac{x}{2}$ con una traslazione verso sinistra di **2** unità, non di una, perché $\cos\left(\frac{x}{2} + 1\right) = \cos\frac{x + 2}{2}$. Allo stesso modo $\cos\left(\frac{x}{2} - 1\right)$ è spostato di 2 unità verso destra. Gli spostamenti verticali ($\pm 1$) sono giusti.
- **Soluzioni 6.1, esercizio 1**: il dominio di $f(x) = \sqrt{2x^2 - x - 3}$ è $x \le -1$ oppure $x \ge \frac{3}{2}$, non $x \le 1$ oppure $x \ge \frac{3}{2}$.

### Modulo 7

- **Soluzioni 7.2, esercizio 6** ($\left(\frac{1}{3}\right)^{x^2 - 1} < 9^{2x}$): la soluzione è $x < -2 - \sqrt{5}$ oppure $x > -2 + \sqrt{5}$. Il foglio scrive $x < -1 - \sqrt{5}$ nella prima parte; la seconda è giusta.

### Modulo 8

- **Libro 8.2**, disequazioni, esempio 2 ($\cos 2x < 1$ in $[0, 2\pi]$): $\cos 2x = 1$ quando $2x$ vale $0$, $2\pi$ o $4\pi$, cioè per $x = 0$, $x = \pi$ e $x = 2\pi$. La soluzione è $0 < x < \pi$ oppure $\pi < x < 2\pi$; il libro esclude solo $0$ e $2\pi$.
- **Soluzioni 8.2, esercizio 10** ($\tan x \ge 1$ in $[0, 2\pi]$): la soluzione è $\frac{\pi}{4} \le x < \frac{\pi}{2}$ oppure $\frac{5}{4}\pi \le x < \frac{3}{2}\pi$. Quella del foglio ($0 \le x < \frac{\pi}{2}$, $\frac{3}{4}\pi \le x < \frac{3}{2}\pi$, $\frac{7}{4}\pi \le x \le 2\pi$) è la soluzione di $\tan x \ge -1$.

---

<!-- FILE: ai/piano-di-studio.md -->
> File: `ai/piano-di-studio.md`

---
titolo: "Il tuo piano di studio"
breve: "Un piano settimana per settimana fino al giorno del test, con il metodo per studiare ogni modulo e la strategia per i 45 minuti."
---

## Da dove partire

1. Fai il [test d'ingresso](https://donflammer.github.io/unito-ofa-matematica/test-ingresso.html): 24 domande, circa 30 minuti, senza calcolatrice. Alla fine vedi il risultato modulo per modulo e il piano qui sopra dà più tempo ai moduli dove sei andato peggio.
2. Scegli l'appello a cui puntare. Il corso di laurea consiglia i **turni d'autunno** (nel 2025/26 erano il 24 e il 28 novembre): prima recuperi le basi, più spedito vai avanti con gli studi.
3. Decidi quante ore a settimana puoi dedicare, oltre alle lezioni. Se parti da lacune serie servono in tutto circa 75 ore: una sessantina per gli otto moduli, il resto per le simulazioni e il ripasso. Vuol dire circa 10 ore a settimana per 8 settimane, oppure 6 ore a settimana per 13 settimane. Se nel test d'ingresso alcuni moduli vanno bene, il piano toglie tempo a quelli.
4. Segui i moduli **in ordine**: ogni modulo usa quelli prima (le fratte usano la scomposizione, le disequazioni logaritmiche usano quelle di secondo grado, e così via).

## Come studiare un modulo

> [!METODO] Un modulo in sei passi
> 1. **Leggi gli appunti** del modulo con carta e penna. Quando arrivi a un esempio svolto, coprilo e prova a farlo da solo, poi confronta.
> 2. **Apri il libro dello stesso modulo** sul [portale OFA](https://www.ofa.unito.it/course/view.php?id=20): è il materiale su cui è costruito il test. Serve anche per abituarti alla notazione che troverai.
> 3. **Esercizi**: prima quelli degli appunti, dal livello base al livello test, poi i PDF «Esercizi» del portale, controllando con i PDF «Soluzioni».
> 4. **Test online del portale**: il «Test» di ogni unità e il «Test modulo». Rifallo finché non esce senza errori.
> 5. **Quiz e checklist** in fondo agli appunti. Se una voce della checklist non ti torna, rileggi quella sezione.
> 6. **Ripasso a intervalli**: ogni due moduli, 20 minuti sul [formulario](https://donflammer.github.io/unito-ofa-matematica/formulario.html) dei moduli precedenti.

> [!TRAPPOLA] Leggere non basta
> Rileggere gli appunti dà l'impressione di aver capito, ma al test serve saper fare i conti da solo, a mano e con il tempo che corre. Per ogni ora di lettura, almeno un'ora di esercizi.

## Un esempio: otto settimane per fine novembre

Questo è il piano che il sito propone a chi parte a fine settembre con 10 ore a settimana e punta a un turno di fine novembre. Il piano in cima alla pagina lo ricalcola sulle tue date e sulle tue ore.

| Settimana | Cosa fare |
|---|---|
| 1 | libretto, iscrizione al corso OFA, test d'ingresso; modulo 1 (linguaggio, insiemi, numeri) |
| 2 | modulo 2 (polinomi e scomposizione); modulo 3, equazioni e disequazioni di 1° e 2° grado |
| 3 | modulo 3, sistemi; modulo 4, fratte e irrazionali |
| 4 | modulo 4, valore assoluto; modulo 5, piano cartesiano, retta e prime coniche |
| 5 | fine del modulo 5; modulo 6 (funzioni) |
| 6 | **prenota il turno** appena aprono le iscrizioni; modulo 7 (esponenziali e logaritmi); inizio del modulo 8 |
| 7 | modulo 8 (trigonometria); simulazione 1 |
| 8 | simulazioni 2–8 e ripasso mirato dei moduli sbagliati; il giorno dopo, la prova |

## Senza calcolatrice

Al test i numeri sono scelti per fare i conti a mano, ma bisogna essere svelti. Allenati fin da subito così:

- **Frazioni**: semplifica prima di moltiplicare; per sommare usa il minimo comune multiplo, non il prodotto dei denominatori.
- **Potenze e radici**: impara a memoria i quadrati fino a $20^2$, i cubi fino a $10^3$, le potenze di 2 fino a $2^{10} = 1024$, le potenze di 3 fino a $3^5 = 243$.
- **Logaritmi**: riconosci le potenze: $\log_2 32 = 5$ perché $2^5 = 32$; $\log_{10} 0{,}001 = -3$.
- **Trigonometria**: i valori di seno, coseno e tangente per $0$, $\frac{\pi}{6}$, $\frac{\pi}{4}$, $\frac{\pi}{3}$, $\frac{\pi}{2}$ vanno saputi senza pensarci; gli altri si ricavano dalla circonferenza goniometrica.
- **Controllo**: prima di scegliere una risposta, stima l'ordine di grandezza e sostituisci il risultato nell'equazione di partenza. Nei quiz a scelta, spesso è il modo più rapido.

## Durante i 45 minuti

> [!METODO] Strategia per il test
> 1. **Leggi tutte e 5 le domande** (un minuto): capisci quali sai fare subito.
> 2. **Parti dalla più facile**: fare punti presto toglie ansia.
> 3. **Tieni il ritmo**: circa 9 minuti a domanda. Se dopo 12 minuti sei ancora bloccato, passa alla successiva e torna dopo.
> 4. **Domande in due parti**: ogni parte vale 1 punto. Se la seconda è difficile, assicurati almeno la prima.
> 5. **Risposte numeriche**: scrivi il numero nella forma richiesta (intero, decimale o frazione) e ricontrolla il segno.
> 6. **Nessuna penalità**: non lasciare mai una risposta vuota; se non sai, escludi le opzioni impossibili e scegli.
> 7. **Ultimi 5 minuti**: ricontrolla le condizioni di esistenza e i versi delle disequazioni, dove si perdono più punti.

## Se ti blocchi

- Rileggi la sezione degli appunti e rifai gli esempi svolti prima degli esercizi.
- Chiedi ai tutor del primo anno ([tutorato.informatica@unito.it](mailto:tutorato.informatica@unito.it)) o nel gruppo Telegram del primo anno: spesso qualcuno sta preparando lo stesso turno.
- Per dubbi sulle regole dell'OFA: [commofa@educ.di.unito.it](mailto:commofa@educ.di.unito.it). Tutti i contatti sono nella pagina [Informazioni](https://donflammer.github.io/unito-ofa-matematica/info.html#aiuto-e-contatti).
