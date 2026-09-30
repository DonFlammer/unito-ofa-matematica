# OFA di matematica, Informatica UniTo 2026/27 — contesto completo

Tutti i file di `ai/` uniti in uno: regole, corso ufficiale e refusi, piano di studio, appunti degli otto moduli, test d'ingresso, simulazioni e sintassi dei file. Generato da `strumenti/genera.mjs` (contenuti aggiornati al 30 settembre 2026): non modificarlo a mano, modifica i singoli file e rigenera. Prima di allegarlo compila la scheda «Chi studia» (file `ai/studente.md`), se vuoi un aiuto su misura.

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

---

<!-- FILE: ai/moduli/01-linguaggio-numeri.md -->
> File: `ai/moduli/01-linguaggio-numeri.md`

---
modulo: 1
titolo: "Linguaggio, insiemi, logica e numeri"
breve: "Insiemi e operazioni, connettivi e quantificatori, negazioni, dimostrazioni e controesempi; insiemi numerici, frazioni, decimali, potenze, radicali, percentuali e intervalli."
ore: 7
unita:
  - "1.1 Elementi di teoria degli insiemi e logica"
  - "1.2 Numeri"
---

## In breve

- Un insieme si descrive **per elenco** o con una **proprietà caratteristica**. Il simbolo $\in$ ("appartiene") lega un elemento a un insieme, il simbolo $\subseteq$ ("è contenuto in") lega due insiemi.
- Le operazioni tra insiemi traducono i connettivi logici: intersezione = "e", unione = "o", complementare = "non", differenza simmetrica = "o… o…".
- "Se $p$ allora $q$" è falsa solo quando $p$ è vera e $q$ è falsa. Equivale alla **contronominale** "se non $q$ allora non $p$", **non** all'inversa "se $q$ allora $p$".
- Per negare: "e" diventa "o" (e viceversa), "per ogni" diventa "esiste almeno uno che non", "esiste" diventa "per ogni… non". La negazione di $x > 3$ è $x \le 3$.
- Un solo **controesempio** basta per dire che un'affermazione generale è falsa; per dire che è vera serve una dimostrazione.
- $\N \subset \Z \subset \Q \subset \R$ (naturali, interi, razionali, reali). I razionali hanno decimali finiti o periodici, gli irrazionali ($\sqrt2$, $\pi$…) decimali infiniti e non periodici.
- Frazioni, potenze, radicali e percentuali si fanno a mano: servono poche regole sicure (tabella delle potenze, portare fuori dalla radice, razionalizzare, aumenti e sconti come moltiplicazioni).
- Negli intervalli la parentesi quadra include l'estremo, la tonda lo esclude; accanto a $+\infty$ e $-\infty$ c'è sempre la tonda.

## 1.1 Elementi di teoria degli insiemi e logica

### Insiemi ed elementi

In matematica **insieme** è un concetto primitivo: non si definisce, si usa. Pensalo come una collezione di oggetti, gli **elementi**, per cui è sempre chiaro se un oggetto ne fa parte oppure no. "I numeri pari" è un insieme; "i numeri grandi" no, perché "grande" non è un criterio oggettivo.

Di solito gli insiemi si indicano con lettere maiuscole ($A$, $B$, $X$) e gli elementi con lettere minuscole.

> [!DEF] Appartenenza
> $x \in A$ si legge "$x$ appartiene ad $A$": $x$ è un elemento di $A$.
> $x \notin A$ si legge "$x$ non appartiene ad $A$".
> I simboli $\in$ e $\notin$ si usano **solo** tra un elemento (a sinistra) e un insieme (a destra).

Un insieme si può rappresentare in tre modi.

1. **Per elenco**: scrivi gli elementi tra parentesi graffe, per esempio $V = \{a, e, i, o, u\}$. L'ordine non conta e gli elementi ripetuti contano una volta sola: $\{2, 5, 5, 7\} = \{7, 2, 5\}$.
2. **Con una proprietà caratteristica**: $P = \{n \in \N \mid n \text{ è pari}\}$. La barra verticale $\mid$ si legge "tale che" (qualche libro usa i due punti). Quindi: "l'insieme degli $n$ naturali tali che $n$ è pari".
3. **Con un diagramma di Eulero-Venn**: una linea chiusa con dentro dei punti che rappresentano gli elementi.

L'insieme che non ha elementi si chiama **insieme vuoto** e si indica con $\varnothing$. Per esempio $\{x \in \R \mid x^2 = -1\} = \varnothing$, perché nessun numero reale ha il quadrato negativo.

Gli insiemi più usati sono quelli numerici, che studierai nella seconda parte del modulo: $\N$ (naturali), $\Z$ (interi relativi), $\Q$ (razionali), $\R$ (reali).

> [!ESEMPIO] Dall'elenco alla proprietà e ritorno
> - $A = \{n \in \N \mid n < 5\}$ per elenco è $A = \{0, 1, 2, 3, 4\}$ (ricorda che $0 \in \N$).
> - $B = \{1, 4, 9, 16, 25\}$ con una proprietà è $B = \{n^2 \mid n \in \N,\ 1 \le n \le 5\}$: i quadrati dei numeri da 1 a 5.
> - $C = \{x \in \Z \mid -2 \le x < 2\} = \{-2, -1, 0, 1\}$: il $-2$ c'è (c'è l'uguale), il $2$ no.

### Sottoinsiemi e uguaglianza

> [!DEF] Inclusione
> $A \subseteq B$ si legge "$A$ è contenuto (o incluso) in $B$" oppure "$A$ è un **sottoinsieme** di $B$": **ogni** elemento di $A$ è anche elemento di $B$. Non esclude che sia $A = B$.
> $A \subset B$ (o $A \subsetneq B$) vuol dire che $A \subseteq B$ e in più $A \ne B$: $A$ è **strettamente** incluso in $B$.
> $A \not\subseteq B$ vuol dire che almeno un elemento di $A$ non sta in $B$.

Per ogni insieme $A$ valgono sempre $\varnothing \subseteq A$ e $A \subseteq A$: sono i **sottoinsiemi impropri** di $A$. Tutti gli altri sottoinsiemi si dicono **propri**.

> [!PROP] Quando due insiemi sono uguali
> $A = B$ se e solo se $A \subseteq B$ e $B \subseteq A$: hanno esattamente gli stessi elementi.

> [!TRAPPOLA] $\in$ oppure $\subseteq$?
> Con $A = \{1, 2, 3\}$: $2 \in A$ è giusto e $\{2\} \subseteq A$ è giusto; invece $2 \subseteq A$ e $\{2\} \in A$ sono sbagliati. A sinistra di $\subseteq$ ci vuole un insieme; a sinistra di $\in$ ci vuole un elemento di $A$, e l'insieme $\{2\}$ non è tra gli elementi di $A$.
> L'insieme vuoto è sottoinsieme di tutti gli insiemi, ma di solito **non** è un loro elemento: $\varnothing \subseteq A$ è vero, $\varnothing \in A$ è falso.
> Alcuni libri usano $\subset$ anche per l'inclusione non stretta: se la differenza conta, guarda il contesto.

### Insieme delle parti

> [!DEF] Insieme delle parti
> L'**insieme delle parti** di $X$, indicato con $\mathcal{P}(X)$, è l'insieme che ha come elementi **tutti i sottoinsiemi** di $X$, compresi $\varnothing$ e $X$:
> $$
> \mathcal{P}(X) = \{A \mid A \subseteq X\}
> $$

> [!ESEMPIO] Le parti di insiemi con due e con tre elementi
> Se $X = \{a, b\}$: $\mathcal{P}(X) = \{\varnothing, \{a\}, \{b\}, \{a, b\}\}$, cioè 4 elementi.
> Se $Y = \{\text{rosso}, \text{verde}, \text{blu}\}$ i sottoinsiemi sono: $\varnothing$; tre con un elemento; tre con due elementi ($\{\text{rosso}, \text{verde}\}$, $\{\text{rosso}, \text{blu}\}$, $\{\text{verde}, \text{blu}\}$); $Y$ stesso. Totale $1 + 3 + 3 + 1 = 8$.

> [!PROP] Quanti sono i sottoinsiemi
> Se $X$ ha $n$ elementi, $\mathcal{P}(X)$ ha $2^n$ elementi.
> Il motivo: per costruire un sottoinsieme decidi, elemento per elemento, "lo prendo" oppure "non lo prendo". Sono $n$ scelte con 2 possibilità ciascuna: $2 \cdot 2 \cdots 2 = 2^n$. Anche il caso $n = 0$ torna: $\mathcal{P}(\varnothing) = \{\varnothing\}$ ha $2^0 = 1$ elemento.

### Operazioni tra insiemi

Considera due insiemi $A$ e $B$ contenuti in un insieme "ambiente" $X$, detto **insieme universo**.

> [!DEF] Le operazioni
> - **Intersezione**: $A \cap B = \{x \mid x \in A \text{ e } x \in B\}$, gli elementi **comuni**. Se $A \cap B = \varnothing$, $A$ e $B$ si dicono **disgiunti**.
> - **Unione**: $A \cup B = \{x \mid x \in A \text{ o } x \in B\}$, gli elementi che stanno in almeno uno dei due (anche in entrambi).
> - **Differenza**: $A \setminus B = \{x \mid x \in A \text{ e } x \notin B\}$, gli elementi di $A$ che non stanno in $B$ (si scrive anche $A - B$).
> - **Differenza simmetrica**: $A \,\Delta\, B$, gli elementi che stanno in **uno solo** dei due insiemi: $A \,\Delta\, B = (A \setminus B) \cup (B \setminus A)$.
> - **Complementare** di $A$ in $X$: $\overline{A} = X \setminus A = \{x \in X \mid x \notin A\}$.
> - **Prodotto cartesiano**: $A \times B = \{(a, b) \mid a \in A,\ b \in B\}$, l'insieme delle **coppie ordinate** con il primo elemento in $A$ e il secondo in $B$.

> [!ESEMPIO] Tutte le operazioni su due insiemi
> $A = \{\text{divisori di } 12\} = \{1, 2, 3, 4, 6, 12\}$ e $B = \{\text{numeri primi minori di } 10\} = \{2, 3, 5, 7\}$.
> - $A \cap B = \{2, 3\}$
> - $A \cup B = \{1, 2, 3, 4, 5, 6, 7, 12\}$ (il 2 e il 3 si scrivono una volta sola)
> - $A \setminus B = \{1, 4, 6, 12\}$ e $B \setminus A = \{5, 7\}$: la differenza **non** è commutativa
> - $A \,\Delta\, B = \{1, 4, 5, 6, 7, 12\}$: tutto $A \cup B$ tranne la parte comune
> - con universo $X = \{1, 2, \dots, 12\}$: $\overline{B} = \{1, 4, 6, 8, 9, 10, 11, 12\}$

```grafico
titolo: Diagramma di Eulero-Venn di $A$ e $B$; in rosso l'intersezione $A \cap B = \{2, 3\}$
x: -5 5
y: -3 3
assi: no
griglia: no
area: sqrt(abs(5.76-(abs(x)+1.2)^2)) | -sqrt(abs(5.76-(abs(x)+1.2)^2)) | -1.2 1.2 | rosso
cerchio: -1.2 0 2.4
cerchio: 1.2 0 2.4
testo: -3.4 2.3 | $A$ | bianco
testo: 3.4 2.3 | $B$ | bianco
testo: -2.4 0.5 | $1,\ 4$
testo: -2.4 -0.5 | $6,\ 12$
testo: 0 0 | $2,\ 3$
testo: 2.4 0 | $5,\ 7$
```

> [!PROP] Proprietà utili
> - $A \cap B \subseteq A \subseteq A \cup B$.
> - Se $A \subseteq B$, allora $A \cap B = A$ e $A \cup B = B$.
> - **Leggi di De Morgan**: $\overline{A \cup B} = \overline{A} \cap \overline{B}$ e $\overline{A \cap B} = \overline{A} \cup \overline{B}$.
> - Per contare, indica con $|A|$ il numero di elementi di $A$: allora $|A \cup B| = |A| + |B| - |A \cap B|$ (gli elementi comuni altrimenti li conti due volte) e $|A \times B| = |A| \cdot |B|$.

> [!ESEMPIO] Il prodotto cartesiano
> $A = \{1, 2\}$ e $B = \{a, b, c\}$.
> $A \times B = \{(1, a), (1, b), (1, c),$ $(2, a), (2, b), (2, c)\}$: $2 \cdot 3 = 6$ coppie.
> $B \times A = \{(a, 1), (a, 2), (b, 1),$ $(b, 2), (c, 1), (c, 2)\}$ è un insieme diverso, perché $(1, a) \ne (a, 1)$: il prodotto cartesiano **non** è commutativo.
> Il piano cartesiano è $\R \times \R$ (si scrive anche $\R^2$): ogni punto è una coppia ordinata $(x, y)$ di numeri reali.

> [!ESEMPIO] Contare con i diagrammi
> In una classe di 28 persone, 17 giocano a calcio, 12 a pallavolo e 5 fanno entrambi gli sport. Quante persone non ne praticano nessuno?
> Chiama $C$ l'insieme di chi gioca a calcio e $P$ quello di chi gioca a pallavolo. Chi pratica almeno uno sport: $|C \cup P| = 17 + 12 - 5 = 24$ (i 5 sono contati sia in $C$ sia in $P$, quindi si tolgono una volta). Nessuno sport: $28 - 24 = 4$.

### Proposizioni e predicati

> [!DEF] Proposizione logica
> Una **proposizione** è un'affermazione di cui si può stabilire in modo oggettivo se è vera o falsa. Ogni proposizione è vera oppure falsa, mai tutte e due le cose: il suo **valore di verità** è V (vero) o F (falso).

Esempi: "7 è un numero dispari" è una proposizione vera; "10 è divisibile per 4" è una proposizione falsa; "il blu è il colore più bello" non è una proposizione (è un'opinione); "$x + 1 = 5$" non è ancora una proposizione, perché dipende da $x$.

> [!DEF] Predicato
> Un **predicato** è un'affermazione che contiene una o più variabili: diventa vera o falsa solo quando alle variabili dai un valore. Esempio: $P(x)$: "$x^2 > 4$", con $x \in \Z$. $P(3)$ è vera, $P(1)$ è falsa.

### Quantificatori

> [!DEF] Quantificatori
> - $\forall$ è il **quantificatore universale**, si legge "per ogni".
> - $\exists$ è il **quantificatore esistenziale**, si legge "esiste" (almeno uno).
> - $\exists!$ si legge "esiste uno e un solo".

Un predicato preceduto da un quantificatore diventa una proposizione, cioè è vero o falso.

- $\forall x \in \R,\ x^2 \ge 0$: "ogni numero reale ha quadrato maggiore o uguale a zero". Vera.
- $\exists x \in \N \mid x + 3 = 1$: "esiste un naturale che sommato a 3 dà 1". Falsa: servirebbe $x = -2$, che non è naturale.
- $\exists x \in \Z \mid x^2 = 9$: vera, e i valori sono addirittura due ($3$ e $-3$). "Esiste" vuol dire **almeno** uno.
- $\exists!\, x \in \R \mid 2x + 1 = 7$: vera, l'unica soluzione è $x = 3$. Invece $\exists!\, x \in \Z \mid x^2 = 9$ è falsa, perché le soluzioni sono due.

Il quantificatore si può scrivere anche in fondo: "$x^2 + 1 > 0,\ \forall x \in \R$" vuol dire la stessa cosa di "$\forall x \in \R,\ x^2 + 1 > 0$".

> [!ESEMPIO] Dalle parole ai quantificatori
> - "Ogni numero reale positivo è il quadrato di qualche numero reale": $\forall x \in \R,\ x > 0 \Rightarrow \exists y \in \R \mid y^2 = x$. Vera (basta $y = \sqrt{x}$).
> - "Tra due numeri reali diversi ce n'è sempre un terzo": $\forall a, b \in \R,\ a < b \Rightarrow \exists c \in \R \mid a < c < b$. Vera (per esempio la media $c = \tfrac{a + b}{2}$).
> - "Nessun numero naturale è negativo": $\forall n \in \N,\ n \ge 0$, oppure, in modo equivalente, $\lnot\left(\exists n \in \N \mid n < 0\right)$.

> [!TRAPPOLA] L'ordine dei quantificatori conta
> "$\forall n \in \N\ \exists m \in \N \mid m > n$" dice: per ogni naturale ce n'è uno più grande (basta $m = n + 1$). **Vera**.
> "$\exists m \in \N \mid \forall n \in \N,\ m > n$" dice: c'è un naturale più grande di tutti i naturali, anche di sé stesso. **Falsa**.
> Stessi simboli, ordine diverso, significato diverso. Scambiare due quantificatori **dello stesso tipo** (due "per ogni" o due "esiste") invece non cambia nulla.

### Connettivi logici

A partire da due proposizioni $p$ e $q$ se ne costruiscono altre con i **connettivi**.

> [!DEF] I connettivi
> - **Negazione** $\lnot p$ ("non $p$"): vera quando $p$ è falsa, falsa quando $p$ è vera.
> - **Congiunzione** $p \wedge q$ ("$p$ e $q$"): vera solo se $p$ e $q$ sono **entrambe** vere.
> - **Disgiunzione inclusiva** $p \vee q$ ("$p$ o $q$"): falsa solo se $p$ e $q$ sono **entrambe** false.
> - **Disgiunzione esclusiva** $p \,\dot{\vee}\, q$ ("o $p$ o $q$"): vera se è vera **una sola** delle due.
> - **Implicazione** $p \Rightarrow q$ ("se $p$ allora $q$"): falsa **solo** se $p$ è vera e $q$ è falsa. $p$ si chiama **antecedente** (o ipotesi), $q$ **conseguente** (o tesi).
> - **Doppia implicazione** (o **equivalenza logica**) $p \Leftrightarrow q$ ("$p$ se e solo se $q$"): vera se $p$ e $q$ hanno lo **stesso** valore di verità. Vuol dire $p \Rightarrow q$ e anche $q \Rightarrow p$.
>
> La **tavola di verità** riassume tutti i casi:
>
> | | | non | e | o | o… o… | se… allora | se e solo se |
> |---|---|---|---|---|---|---|---|
> | $p$ | $q$ | $\lnot p$ | $p \wedge q$ | $p \vee q$ | $p \,\dot{\vee}\, q$ | $p \Rightarrow q$ | $p \Leftrightarrow q$ |
> | V | V | F | V | V | F | V | V |
> | V | F | F | F | V | V | F | F |
> | F | V | V | F | V | V | V | F |
> | F | F | V | F | F | F | V | V |

> [!NOTA] Perché "se $p$ allora $q$" è vera quando $p$ è falsa
> Pensa a una promessa: "se superi l'esame, ti regalo un libro". La promessa è **tradita** solo se superi l'esame e il libro non arriva. Se non superi l'esame, qualunque cosa succeda la promessa non è stata violata: l'implicazione è vera.

> [!PROP] Condizione necessaria e sufficiente
> Se $p \Rightarrow q$ è vera:
> - $p$ è **condizione sufficiente** per $q$: basta che valga $p$ perché valga $q$;
> - $q$ è **condizione necessaria** per $p$: senza $q$ non può esserci $p$.
>
> Se vale $p \Leftrightarrow q$, ciascuna è condizione **necessaria e sufficiente** per l'altra.

Esempio: "se un numero è multiplo di 4, allora è pari" è vera. Essere multiplo di 4 è **sufficiente** per essere pari; essere pari è **necessario** per essere multiplo di 4, ma non sufficiente (6 è pari e non è multiplo di 4).

> [!PROP] Le implicazioni collegate a $p \Rightarrow q$
> | nome | forma | equivale all'implicazione di partenza? |
> |---|---|---|
> | inversa | $q \Rightarrow p$ | no |
> | contraria | $\lnot p \Rightarrow \lnot q$ | no |
> | contronominale | $\lnot q \Rightarrow \lnot p$ | **sì**, sempre |
>
> Esempio: "se un numero è multiplo di 4, allora è pari" è vera; la contronominale "se un numero non è pari, allora non è multiplo di 4" è vera anche lei; l'inversa "se un numero è pari, allora è multiplo di 4" è falsa (controesempio: 6).

> [!ESEMPIO] Correggere un'implicazione falsa
> "Se $x^2 = 25$, allora $x = 5$" ($x$ reale) è falsa: con $x = -5$ l'antecedente è vero e il conseguente è falso.
> Per renderla vera puoi **allargare il conseguente**: "se $x^2 = 25$, allora $x = 5$ oppure $x = -5$". Oppure puoi **restringere l'antecedente**: "se $x^2 = 25$ e $x > 0$, allora $x = 5$".

### Negare una proposizione

> [!PROP] Regole di negazione
> | frase | negazione |
> |---|---|
> | $p \wedge q$ | $\lnot p \vee \lnot q$ |
> | $p \vee q$ | $\lnot p \wedge \lnot q$ |
> | $p \Rightarrow q$ | $p \wedge \lnot q$ |
> | $\forall x,\ P(x)$ | $\exists x \mid \lnot P(x)$ |
> | $\exists x \mid P(x)$ | $\forall x,\ \lnot P(x)$ |
> | $\lnot p$ | $p$ (doppia negazione) |
> | $x > a$ | $x \le a$ |
> | $x \ge a$ | $x < a$ |
>
> Le prime due righe sono le **leggi di De Morgan** della logica.

> [!ESEMPIO] Negazioni passo per passo
> - "Il numero è positivo e dispari" → "Il numero **non** è positivo **oppure non** è dispari".
> - "Vado al cinema o a teatro" → "Non vado al cinema **e** non vado a teatro".
> - "Tutti i treni oggi sono in orario" → "**Almeno un** treno oggi **non** è in orario" (e non "nessun treno è in orario").
> - "Esiste un numero primo pari" → "**Ogni** numero primo è dispari", cioè nessun numero primo è pari.
> - "Se studio, supero l'esame" → "Studio **e** non supero l'esame".
> - "Ogni studente ha almeno un libro" → "Esiste uno studente che non ha nessun libro".
> - "Tutti i partecipanti hanno più di 18 anni" → "Almeno un partecipante ha **al massimo** 18 anni": la negazione di "più di 18" è "18 o meno", non "meno di 18".

> [!TRAPPOLA] Gli errori più comuni
> - Negare "tutti" con "nessuno": la negazione di "tutti sono promossi" è "qualcuno non è promosso", non "nessuno è promosso".
> - Dimenticare di scambiare "e" con "o".
> - Negare $x > 5$ con $x < 5$: così perdi il caso $x = 5$. La negazione giusta è $x \le 5$.
> - Negare un'implicazione con un'altra implicazione: la negazione di "se $p$ allora $q$" non è "se $p$ allora non $q$", ma "$p$ e non $q$".

### Dimostrazioni e controesempi

Molti teoremi hanno la forma $H \Rightarrow T$: dalle **ipotesi** $H$ segue la **tesi** $T$. A volte il "se… allora…" è nascosto: "la somma di due numeri dispari è pari" vuol dire "se $a$ e $b$ sono dispari, allora $a + b$ è pari".

Per ragionare su pari e dispari usa queste scritture: $n$ è **pari** se $n = 2k$ con $k \in \Z$; $n$ è **dispari** se $n = 2k + 1$ con $k \in \Z$.

> [!METODO] Dimostrazione diretta
> Parti dalle ipotesi e, con passaggi corretti, arrivi alla tesi.

> [!ESEMPIO] La somma di due numeri dispari è pari
> Ipotesi: $a = 2h + 1$ e $b = 2k + 1$ con $h, k \in \Z$ (due lettere diverse: i due numeri non sono per forza uguali). Allora
> $$
> a + b = 2h + 1 + 2k + 1 = 2h + 2k + 2 = 2(h + k + 1)
> $$
> che è il doppio di un intero: $a + b$ è pari.

> [!METODO] Dimostrazione per contronominale
> Invece di $H \Rightarrow T$ dimostri $\lnot T \Rightarrow \lnot H$, che è equivalente. Conviene quando la negazione della tesi è più facile da usare.

> [!ESEMPIO] Se $a + b > 10$, almeno uno dei due numeri supera 5
> Qui $a$ e $b$ sono numeri reali. Tesi: "$a > 5$ oppure $b > 5$". La sua negazione, per De Morgan, è "$a \le 5$ e $b \le 5$".
> Contronominale: se $a \le 5$ e $b \le 5$, allora $a + b \le 10$. Questo è immediato: sommando le due disuguaglianze, $a + b \le 5 + 5 = 10$. L'enunciato di partenza è dimostrato.

> [!METODO] Dimostrazione per assurdo
> Supponi vere le ipotesi **e** la negazione della tesi; con passaggi corretti arrivi a una **contraddizione** (qualcosa di impossibile, o contrario alle ipotesi). Quindi la negazione della tesi non può valere: la tesi è vera.
> Quando la contraddizione è proprio con l'ipotesi, hai ricavato $\lnot H$ da $\lnot T$: in pratica hai dimostrato la contronominale $\lnot T \Rightarrow \lnot H$.

> [!ESEMPIO] Non esiste un numero naturale più grande di tutti
> Supponiamo per assurdo che esista un naturale $M$ maggiore o uguale a ogni naturale. Anche $M + 1$ è un naturale, quindi dovrebbe valere $M \ge M + 1$, cioè $0 \ge 1$: contraddizione. Quindi un tale $M$ non esiste.
> Un altro esempio famoso di dimostrazione per assurdo è l'irrazionalità di $\sqrt2$, nella parte sui numeri.

> [!DEF] Controesempio
> Per mostrare che un'affermazione del tipo "per ogni $x$ vale $P(x)$", o "se $H$ allora $T$", è **falsa** basta un **controesempio**: un solo caso che rispetta le ipotesi ma non la tesi.

> [!ESEMPIO] Tre controesempi
> - "Ogni numero primo è dispari": falso, $2$ è primo ed è pari.
> - "Se $a^2 = b^2$ allora $a = b$": falso, con $a = 3$ e $b = -3$ si ha $9 = 9$ ma $3 \ne -3$.
> - "Per ogni $x \in \R$, $x^2 \ge x$": falso, con $x = \tfrac12$ si ha $x^2 = \tfrac14 < \tfrac12$.

> [!TRAPPOLA] Gli esempi non sono dimostrazioni
> Verificare un'affermazione su 3, 10 o 1000 casi non la dimostra: potrebbe fallire sul caso successivo. Il numero $n^2 + n + 41$ è primo per $n = 0, 1, 2, \dots, 39$, ma per $n = 40$ vale $1681 = 41^2$. Un solo controesempio basta per **smentire**; per **dimostrare** serve un ragionamento che valga in tutti i casi.

### Logica e insiemi: lo stesso linguaggio

> [!PROP] Dizionario tra logica e insiemi
> Se $A = \{x \in X \mid p(x)\}$ e $B = \{x \in X \mid q(x)\}$ sono gli insiemi in cui valgono due predicati $p(x)$ e $q(x)$, ogni connettivo corrisponde a un'operazione tra insiemi.
>
> | logica | insiemi |
> |---|---|
> | congiunzione $p(x) \wedge q(x)$ | intersezione $A \cap B$ |
> | disgiunzione inclusiva $p(x) \vee q(x)$ | unione $A \cup B$ |
> | disgiunzione esclusiva $p(x) \,\dot{\vee}\, q(x)$ | differenza simmetrica $A \,\Delta\, B$ |
> | negazione $\lnot p(x)$ | complementare $\overline{A}$ |
> | $p(x) \Rightarrow q(x)$ vera per ogni $x$ | inclusione $A \subseteq B$ |
> | $p(x) \Leftrightarrow q(x)$ vera per ogni $x$ | uguaglianza $A = B$ |

Le leggi di De Morgan per gli insiemi e per la logica sono la stessa regola scritta in due lingue.

> [!ESEMPIO] Dai predicati agli insiemi
> Universo $X = \{1, 2, \dots, 10\}$, $p(x)$: "$x$ è pari", $q(x)$: "$x > 6$". Allora $A = \{2, 4, 6, 8, 10\}$ e $B = \{7, 8, 9, 10\}$.
> - "$x$ è pari **e** maggiore di 6": $A \cap B = \{8, 10\}$.
> - "$x$ è pari **o** maggiore di 6": $A \cup B = \{2, 4, 6, 7, 8, 9, 10\}$.
> - "**o** $x$ è pari **o** è maggiore di 6" (uno solo dei due): $A \,\Delta\, B = \{2, 4, 6, 7, 9\}$.
> - "$x$ **non** è pari": $\overline{A} = \{1, 3, 5, 7, 9\}$.

> [!TEST] Insiemi e logica
> - **Negazioni**, per esempio a scelta una su quattro: applica le regole una parola alla volta e diffida delle opzioni con "nessuno" al posto di "almeno uno… non", con la "e" non trasformata in "o", o con $<$ al posto di $\le$.
> - **Vero/falso su affermazioni generali**: cerca subito un controesempio con numeri piccoli ($0$, $1$, $-1$, $\tfrac12$, $2$). Se lo trovi, la risposta è "falso".
> - **Condizione necessaria o sufficiente**: riscrivi la frase come "se… allora…". Ciò che sta dopo "se" è sufficiente, ciò che sta dopo "allora" è necessario.
> - **Insiemi** dati per elenco: scrivi gli elementi uno per uno, non a colpo d'occhio. Per contare usa $|A \cup B| = |A| + |B| - |A \cap B|$.
> - **Insieme delle parti**, per esempio a risposta numerica: $2^n$ sottoinsiemi, compresi $\varnothing$ e l'insieme stesso.

## 1.2 Numeri

### Numeri naturali

> [!DEF] Numeri naturali
> $\N = \{0, 1, 2, 3, \dots\}$ è l'insieme dei **numeri naturali**. Ha infiniti elementi e il più piccolo è $0$.

I numeri si scrivono in **notazione posizionale** in base dieci: si usano le cifre $0, 1, \dots, 9$ e il valore di ogni cifra dipende dal posto che occupa. Per esempio $5037 = 5 \cdot 10^3 + 0 \cdot 10^2 + 3 \cdot 10 + 7$.

> [!ESEMPIO] Ragionare sulle cifre
> Qual è il più piccolo numero di tre cifre con somma delle cifre uguale a 20?
> Per avere un numero piccolo la prima cifra (le centinaia) deve essere la più piccola possibile. Le altre due cifre valgono al massimo $9 + 9 = 18$, quindi la prima cifra è almeno $20 - 18 = 2$. Con la prima cifra uguale a 2 servono due cifre con somma 18, cioè $9$ e $9$. Il numero è $299$.

In $\N$ la somma e il prodotto di due naturali sono sempre naturali.

> [!PROP] Proprietà di somma e prodotto
> Per ogni $a$, $b$, $c$:
>
> | proprietà | somma | prodotto |
> |---|---|---|
> | commutativa | $a + b = b + a$ | $a \cdot b = b \cdot a$ |
> | associativa | $(a + b) + c = a + (b + c)$ | $(a \cdot b) \cdot c = a \cdot (b \cdot c)$ |
> | elemento neutro | $a + 0 = 0 + a = a$ | $a \cdot 1 = 1 \cdot a = a$ |
>
> La **proprietà distributiva** lega le due operazioni: $a(b + c) = ab + ac$.

Le operazioni inverse invece non sempre si possono fare in $\N$: $3 - 5$ e $3 : 5$ non sono naturali. Per poter sempre sottrarre si passa agli interi relativi, per poter sempre dividere (per un numero diverso da zero) ai razionali.

### Divisibilità, numeri primi, MCD e mcm

> [!DEF] Divisori e numeri primi
> $a$ è **divisibile** per $b$ ($b$ è un **divisore** di $a$, $a$ è un **multiplo** di $b$) se $a = b \cdot k$ con $k$ intero.
> Un naturale $p > 1$ è **primo** se i suoi unici divisori positivi sono $1$ e $p$: $2, 3, 5, 7, 11, 13, 17, 19, 23, \dots$ Il numero $1$ non è primo e $2$ è l'unico primo pari.

Criteri utili senza calcolatrice: un numero è divisibile per $2$ se l'ultima cifra è pari; per $3$ (o per $9$) se la somma delle cifre è divisibile per $3$ (o per $9$); per $4$ se lo è il numero formato dalle ultime due cifre; per $5$ se finisce con $0$ o $5$; per $10$ se finisce con $0$.

> [!PROP] Scomposizione in fattori primi, MCD e mcm
> Ogni naturale maggiore di 1 si scrive in **un solo modo** come prodotto di numeri primi (a meno dell'ordine). Esempio: $360 = 2^3 \cdot 3^2 \cdot 5$.
> - **MCD** (massimo comune divisore): prodotto dei fattori primi **comuni**, ciascuno con l'esponente **più piccolo**.
> - **mcm** (minimo comune multiplo): prodotto dei fattori primi **comuni e non comuni**, ciascuno con l'esponente **più grande**.
> - Per due numeri vale $\text{MCD}(a, b) \cdot \text{mcm}(a, b) = a \cdot b$.

> [!ESEMPIO] MCD e mcm di 84 e 90
> $84 = 2^2 \cdot 3 \cdot 7$ e $90 = 2 \cdot 3^2 \cdot 5$.
> $\text{MCD} = 2 \cdot 3 = 6$ e $\text{mcm} = 2^2 \cdot 3^2 \cdot 5 \cdot 7 = 1260$. Controllo: $6 \cdot 1260 = 7560 = 84 \cdot 90$.

### Numeri interi relativi

> [!DEF] Interi relativi
> $\Z = \{\dots, -3, -2, -1, 0, 1, 2, 3, \dots\}$: i naturali insieme ai loro **opposti**. L'**opposto** di $a$ è il numero $-a$ tale che $a + (-a) = 0$: l'opposto di $4$ è $-4$, l'opposto di $-7$ è $7$, l'opposto di $0$ è $0$.

In $\Z$ la sottrazione si può sempre fare: l'equazione $m + x = n$ ha sempre la soluzione intera $x = n - m$. La divisione invece no: $2x = 3$ non ha soluzioni intere.

> [!PROP] Regola dei segni e parentesi
> Nel prodotto e nel quoziente: segni uguali danno $+$, segni diversi danno $-$. Quindi $(-3) \cdot (-4) = 12$, $(-3) \cdot 4 = -12$, $(-12) : (-4) = 3$.
> Una parentesi preceduta da $-$ si toglie cambiando segno a **tutti** i termini dentro: $5 - (3 - x) = 5 - 3 + x = 2 + x$.

Il **valore assoluto** $|a|$ è la distanza di $a$ da $0$: vale $a$ se $a \ge 0$ e $-a$ se $a < 0$. Per esempio $|-7| = 7$ e $|7| = 7$.

### Numeri razionali e frazioni

> [!DEF] Numeri razionali
> $\Q = \left\{ \dfrac{m}{n} \mid m, n \in \Z,\ n \ne 0 \right\}$ è l'insieme dei numeri **razionali**: quelli che si possono scrivere come **frazione** di due interi, con denominatore diverso da zero.

Ogni intero è razionale ($5 = \tfrac51$), quindi $\Z \subset \Q$. In $\Q$ ogni numero diverso da zero ha il **reciproco** (o inverso): il reciproco di $\tfrac{a}{b}$ è $\tfrac{b}{a}$, perché $\tfrac{a}{b} \cdot \tfrac{b}{a} = 1$. Per questo l'equazione $ax = b$ con $a \ne 0$ ha sempre la soluzione $x = \tfrac{b}{a}$. Lo zero non ha reciproco: **non si divide per zero**.

Lo stesso razionale si scrive con infinite **frazioni equivalenti**: $\tfrac{a}{b} = \tfrac{a \cdot k}{b \cdot k}$ per ogni $k \ne 0$, per esempio $\tfrac23 = \tfrac46 = \tfrac{-10}{-15}$. Una frazione è **ridotta ai minimi termini** quando numeratore e denominatore non hanno divisori comuni maggiori di 1; per ridurla li dividi entrambi per il loro MCD: $\tfrac{84}{90} = \tfrac{14}{15}$ (diviso 6).

> [!PROP] Operazioni con le frazioni
> $$
> \frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd} \qquad \frac{a}{b} \cdot \frac{c}{d} = \frac{ac}{bd} \qquad \frac{a}{b} : \frac{c}{d} = \frac{a}{b} \cdot \frac{d}{c} \qquad \left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}
> $$
> Nella somma conviene usare come denominatore il **mcm** dei denominatori. Per confrontare due frazioni con denominatori positivi: $\tfrac{a}{b} < \tfrac{c}{d}$ se e solo se $ad < bc$.

> [!ESEMPIO] Un'espressione con le frazioni
> $$
> \left(\frac{5}{6} - \frac{3}{4}\right) : \frac{1}{8} = \left(\frac{10}{12} - \frac{9}{12}\right) \cdot 8 = \frac{1}{12} \cdot 8 = \frac{8}{12} = \frac{2}{3}
> $$
> Il mcm di 6 e 4 è 12; dividere per $\tfrac18$ è come moltiplicare per $8$.

> [!TRAPPOLA] Errori classici con le frazioni
> - $\tfrac{a}{b} + \tfrac{c}{d}$ **non** è $\tfrac{a + c}{b + d}$: $\tfrac12 + \tfrac12 = 1$, non $\tfrac24$.
> - Si semplificano **fattori**, non addendi: $\tfrac{2 + 6}{2} = \tfrac82 = 4$, non $6$.
> - "I tre quarti di 20" è $\tfrac34 \cdot 20 = 15$: la frazione di una quantità è una moltiplicazione.

### Decimali finiti e periodici

Ogni frazione si trasforma in numero decimale dividendo il numeratore per il denominatore. Il risultato è di due tipi:
- **decimale finito**: $\tfrac78 = 0{,}875$;
- **decimale periodico**: da un certo punto in poi un gruppo di cifre, il **periodo**, si ripete all'infinito, e si indica con una lineetta sopra: $\tfrac23 = 0{,}666\ldots = 0{,}\overline{6}$, $\tfrac{3}{11} = 0{,}\overline{27}$, $\tfrac56 = 0{,}8\overline{3}$ (qui la cifra $8$ tra la virgola e il periodo si chiama **antiperiodo**).

> [!PROP] Finito o periodico?
> Riduci la frazione ai minimi termini e scomponi il denominatore: se contiene **solo** i fattori primi $2$ e $5$ il decimale è **finito**; se compare anche un altro primo è **periodico**.
> - $\tfrac{7}{40}$: $40 = 2^3 \cdot 5$, finito ($0{,}175$).
> - $\tfrac{7}{30}$: $30 = 2 \cdot 3 \cdot 5$ contiene il 3, periodico ($0{,}2\overline{3}$).
> - $\tfrac{9}{12}$: prima si riduce, $\tfrac{9}{12} = \tfrac34$, e $4 = 2^2$ dà un decimale finito ($0{,}75$).

> [!METODO] Dal decimale alla frazione: la frazione generatrice
> - Decimale **finito**: scrivi il numero senza virgola e dividi per $1$ seguito da tanti zeri quante sono le cifre dopo la virgola, poi riduci: $2{,}35 = \tfrac{235}{100} = \tfrac{47}{20}$.
> - Decimale **periodico**: al numeratore metti il numero scritto senza virgola e senza lineetta, meno il numero formato dalle cifre che precedono il periodo; al denominatore tanti $9$ quante sono le cifre del periodo, seguiti da tanti $0$ quante sono le cifre dell'antiperiodo.
> $$
> 0{,}\overline{4} = \frac{4}{9} \qquad 1{,}\overline{36} = \frac{136 - 1}{99} = \frac{135}{99} = \frac{15}{11} \qquad 0{,}1\overline{6} = \frac{16 - 1}{90} = \frac{15}{90} = \frac16
> $$

> [!NOTA] Perché la regola funziona
> Con $x = 1{,}\overline{36}$ si ha $100x = 136{,}\overline{36}$. Sottraendo, $100x - x = 136{,}\overline{36} - 1{,}\overline{36} = 135$, quindi $99x = 135$ e $x = \tfrac{135}{99} = \tfrac{15}{11}$.
> Lo stesso trucco mostra che $0{,}\overline{9} = 1$: se $x = 0{,}\overline{9}$, allora $10x - x = 9{,}\overline{9} - 0{,}\overline{9} = 9$, quindi $x = 1$.

### Percentuali

> [!DEF] Percentuale
> "$p$ per cento", scritto $p\%$, significa $\tfrac{p}{100}$. Il $p\%$ di una quantità $x$ è $\tfrac{p}{100} \cdot x$: il 15% di 80 è $0{,}15 \cdot 80 = 12$.

> [!PROP] Aumenti e sconti sono moltiplicazioni
> - Aumentare $x$ del $p\%$: $x \cdot \left(1 + \tfrac{p}{100}\right)$. Un aumento del 20% è $\times 1{,}2$.
> - Diminuire $x$ del $p\%$: $x \cdot \left(1 - \tfrac{p}{100}\right)$. Uno sconto del 5% è $\times 0{,}95$.
> - Due variazioni una dopo l'altra si **moltiplicano**, non si sommano.
> - Per tornare al valore iniziale si **divide** per lo stesso fattore.

> [!ESEMPIO] Tre problemi tipici
> - Quale percentuale di 60 è 21? $\tfrac{21}{60} = \tfrac{35}{100}$, cioè il 35%.
> - Un prezzo di 50 euro aumenta del 10% e poi cala del 10%: $50 \cdot 1{,}1 \cdot 0{,}9 = 50 \cdot 0{,}99 = 49{,}5$ euro. Il prezzo finale è **più basso** dell'iniziale, dell'1%.
> - Dopo uno sconto del 20% un oggetto costa 36 euro. Prezzo iniziale: $0{,}8\,x = 36$, quindi $x = \tfrac{36}{0{,}8} = 45$ euro, e non $36 \cdot 1{,}2 = 43{,}2$ euro.

> [!TRAPPOLA] Le percentuali non si sommano
> Un aumento del 10% seguito da un calo del 10% non riporta al valore iniziale. Uno sconto del 20% seguito da un altro del 30% non fa 50%: $0{,}8 \cdot 0{,}7 = 0{,}56$, cioè uno sconto totale del 44%.

### Potenze

> [!DEF] Potenza
> Per $n$ naturale, $n \ge 1$: $a^n = \underbrace{a \cdot a \cdots a}_{n \text{ volte}}$; $a$ è la **base** e $n$ l'**esponente**.
> Per $a \ne 0$ si pone $a^0 = 1$ e $a^{-n} = \dfrac{1}{a^n}$. Di conseguenza $\left(\tfrac{a}{b}\right)^{-n} = \left(\tfrac{b}{a}\right)^{n}$.

> [!PROP] Proprietà delle potenze, con basi diverse da zero
> | regola | esempio |
> |---|---|
> | $a^m \cdot a^n = a^{m+n}$ | $2^3 \cdot 2^4 = 2^7$ |
> | $a^m : a^n = a^{m-n}$ | $5^6 : 5^4 = 5^2 = 25$ |
> | $(a^m)^n = a^{m \cdot n}$ | $(3^2)^3 = 3^6$ |
> | $a^n \cdot b^n = (a \cdot b)^n$ | $2^5 \cdot 5^5 = 10^5$ |
> | $a^n : b^n = (a : b)^n$ | $6^3 : 2^3 = 3^3 = 27$ |
> | $a^{-n} = \frac{1}{a^n}$ | $2^{-3} = \frac18$ |
> | $a^0 = 1$ | $(-7)^0 = 1$ |

> [!PROP] Il segno di una potenza
> Una base negativa con esponente **pari** dà un risultato positivo, con esponente **dispari** negativo: $(-2)^4 = 16$, $(-2)^3 = -8$.
> Attenzione alle parentesi: $-2^4 = -(2^4) = -16$, mentre $(-2)^4 = 16$.

> [!TRAPPOLA] Le potenze non si sommano
> - $2^3 + 2^4$ non è $2^7$: vale $8 + 16 = 24$, mentre $2^7 = 128$.
> - $(a + b)^2$ non è $a^2 + b^2$ (manca $2ab$).
> - $2^3 \cdot 2^4 = 2^7$, non $4^7$: la base resta la stessa.
> - $(2^3)^2 = 2^6$, ma $2^{3^2} = 2^9$.

> [!ESEMPIO] Riportare tutto alla stessa base
> $$
> \frac{4^3 \cdot 8^{-1}}{2^5} = \frac{(2^2)^3 \cdot (2^3)^{-1}}{2^5} = \frac{2^6 \cdot 2^{-3}}{2^5} = 2^{6 - 3 - 5} = 2^{-2} = \frac14
> $$

Le potenze di 10 servono per la **notazione scientifica**: un numero si scrive come $c \cdot 10^n$ con $1 \le c < 10$. Per esempio $3\,500\,000 = 3{,}5 \cdot 10^6$ e $0{,}00042 = 4{,}2 \cdot 10^{-4}$.

### Radicali

> [!DEF] Radice quadrata e radice $n$-esima
> Per $a \ge 0$, $\sqrt{a}$ è il numero **maggiore o uguale a zero** che al quadrato dà $a$: $\sqrt{25} = 5$, non $\pm 5$ ("più o meno 5"), anche se pure $(-5)^2 = 25$.
> Più in generale $\sqrt[n]{a}$ è il numero che elevato alla $n$ dà $a$. Con indice $n$ **pari** serve $a \ge 0$ e il risultato è $\ge 0$; con indice **dispari** va bene ogni $a$: $\sqrt[3]{-8} = -2$.
> Le radici si scrivono anche come potenze con esponente frazionario: $\sqrt[n]{a^m} = a^{m/n}$ (per $a > 0$). Per esempio $8^{2/3} = \left(\sqrt[3]{8}\right)^2 = 2^2 = 4$.

> [!PROP] Proprietà dei radicali, con radicandi maggiori o uguali a zero
> $$
> \sqrt{a} \cdot \sqrt{b} = \sqrt{ab} \qquad \frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\frac{a}{b}}\ \ (b > 0) \qquad \sqrt{a^2 b} = a\sqrt{b}\ \ (a \ge 0) \qquad \sqrt{a^2} = |a|
> $$
> L'ultima vale per ogni $a$ reale: $\sqrt{(-3)^2} = \sqrt9 = 3 = |-3|$.

> [!METODO] Semplificare e sommare radicali
> 1. Scomponi il radicando cercando il **quadrato perfetto** più grande che lo divide, e portalo fuori: $\sqrt{72} = \sqrt{36 \cdot 2} = 6\sqrt2$.
> 2. Somma solo radicali **simili** (stesso indice e stesso radicando), sommando i coefficienti: $\sqrt{75} - \sqrt{12} = 5\sqrt3 - 2\sqrt3 = 3\sqrt3$.

> [!METODO] Razionalizzare il denominatore
> - Se sotto c'è $\sqrt{b}$, moltiplica sopra e sotto per $\sqrt{b}$: $\dfrac{10}{\sqrt5} = \dfrac{10\sqrt5}{5} = 2\sqrt5$.
> - Se sotto c'è una somma o una differenza con una radice, moltiplica per il **coniugato** (stessi termini, segno centrale opposto) e usa $(x - y)(x + y) = x^2 - y^2$:
> $$
> \frac{2}{\sqrt3 - 1} = \frac{2\left(\sqrt3 + 1\right)}{\left(\sqrt3 - 1\right)\left(\sqrt3 + 1\right)} = \frac{2\left(\sqrt3 + 1\right)}{3 - 1} = \sqrt3 + 1
> $$

> [!TRAPPOLA] La radice di una somma
> $\sqrt{a + b}$ non è $\sqrt{a} + \sqrt{b}$: $\sqrt{9 + 16} = \sqrt{25} = 5$, mentre $\sqrt9 + \sqrt{16} = 7$. Allo stesso modo $\sqrt{x^2 + 1}$ non è $x + 1$.

> [!METODO] Confrontare numeri con radici senza calcolatrice
> Tra due numeri **positivi** è più grande quello con il quadrato più grande. $2\sqrt3$ o $3\sqrt2$? $\left(2\sqrt3\right)^2 = 12$ e $\left(3\sqrt2\right)^2 = 18$, quindi $2\sqrt3 < 3\sqrt2$.
> Per stimare una radice cerca i quadrati vicini: $\sqrt{50}$ sta tra $7$ e $8$ perché $49 < 50 < 64$, ed è molto vicino a $7$. Conviene ricordare $\sqrt2 \approx 1{,}41$, $\sqrt3 \approx 1{,}73$ e $\pi \approx 3{,}14$ (il simbolo $\approx$ si legge "circa uguale a").

### Numeri irrazionali

La diagonale di un quadrato di lato $1$ misura, per il teorema di Pitagora, $\sqrt{1^2 + 1^2} = \sqrt2$. Questo numero **non** è razionale.

> [!ESEMPIO] $\sqrt2$ è irrazionale: dimostrazione per assurdo
> Supponiamo per assurdo che $\sqrt2 = \tfrac{m}{n}$, con $m$ e $n$ interi positivi e frazione ridotta ai minimi termini (nessun fattore comune).
> Elevando al quadrato: $2 = \tfrac{m^2}{n^2}$, cioè $m^2 = 2n^2$. Quindi $m^2$ è pari, e allora anche $m$ è pari (il quadrato di un dispari è dispari). Scriviamo $m = 2k$.
> Sostituendo: $4k^2 = 2n^2$, cioè $n^2 = 2k^2$. Anche $n^2$ è pari, quindi $n$ è pari.
> Ma allora $m$ e $n$ sono entrambi pari e la frazione si poteva ancora semplificare per 2: contraddizione. Quindi $\sqrt2 \notin \Q$.

> [!DEF] Numeri irrazionali
> Un numero **irrazionale** è un numero reale che non si può scrivere come frazione di interi. La sua scrittura decimale è **infinita e non periodica**: $\sqrt2 = 1{,}41421356\ldots$, $\pi = 3{,}14159265\ldots$, $e = 2{,}71828\ldots$ (il **numero di Nepero**).

> [!PROP] Quando una radice è razionale
> Se $n$ è un naturale, $\sqrt{n}$ è razionale solo quando $n$ è un **quadrato perfetto** ($\sqrt{49} = 7$); altrimenti è irrazionale: $\sqrt3$, $\sqrt5$, $\sqrt8$, $\sqrt{12}$ sono irrazionali.
> Per un razionale positivo $q$: $\sqrt{q}$ è razionale se e solo se $q$ è il quadrato di un razionale. Per esempio $\sqrt{\tfrac{9}{25}} = \tfrac35$.

> [!PROP] Operazioni tra razionali e irrazionali
> - razionale $+$ irrazionale è irrazionale: $1 + \sqrt2$;
> - razionale diverso da zero $\times$ irrazionale è irrazionale: $3\sqrt2$;
> - la somma e il prodotto di due irrazionali possono essere razionali: $\sqrt2 + \left(-\sqrt2\right) = 0$ e $\sqrt2 \cdot \sqrt8 = \sqrt{16} = 4$.

### Numeri reali e ordinamento

> [!DEF] Numeri reali
> $\R$ è l'insieme dei **numeri reali**: l'unione dei razionali e degli irrazionali. I reali corrispondono ai punti di una retta: fissati un'**origine** (il punto $0$), un **verso** e un'**unità di misura**, a ogni punto corrisponde uno e un solo numero reale e viceversa. È la **retta reale**.

In $\R$ valgono tutte le proprietà di somma e prodotto viste finora: commutativa, associativa, elemento neutro, opposto, reciproco dei numeri diversi da zero, distributiva. In più $\R$ è **totalmente ordinato**: dati due reali $a$ e $b$, vale sempre $a \le b$ oppure $b \le a$. La relazione $\le$ ("minore o uguale") è:
- **riflessiva**: $a \le a$;
- **antisimmetrica**: se $a \le b$ e $b \le a$, allora $a = b$;
- **transitiva**: se $a \le b$ e $b \le c$, allora $a \le c$.

> [!PROP] Tra due numeri ce n'è sempre un altro
> Tra due razionali diversi c'è sempre un altro razionale, per esempio la loro **media**: tra $\tfrac13$ e $\tfrac12$ c'è $\tfrac12\left(\tfrac13 + \tfrac12\right) = \tfrac{5}{12}$. Ripetendo il ragionamento se ne trovano infiniti.
> Con i decimali è ancora più rapido: tra $2{,}71$ e $2{,}72$ ci sono $2{,}711$, $2{,}715$, $2{,}7199$ e infiniti altri.

> [!METODO] Mettere in ordine numeri scritti in modi diversi
> Porta tutto nella stessa forma (decimali con qualche cifra, oppure frazioni con lo stesso denominatore) e poi confronta.
> Esempio: $\tfrac58$, $0{,}6$, $\tfrac23$, $\tfrac{\sqrt2}{2}$. In decimali: $\tfrac58 = 0{,}625$; $0{,}6$; $\tfrac23 = 0{,}\overline{6}$; $\tfrac{\sqrt2}{2} \approx 0{,}707$. Quindi $0{,}6 < \tfrac58 < \tfrac23 < \tfrac{\sqrt2}{2}$.

### Intervalli

> [!DEF] Intervalli
> Un **intervallo** è l'insieme dei reali compresi tra due estremi $a < b$ (un segmento della retta) oppure dei reali maggiori o minori di un numero dato (una semiretta). La parentesi **quadra** vuol dire estremo **incluso**, la **tonda** estremo **escluso**. Nelle semirette compaiono i simboli $+\infty$ ("più infinito") e $-\infty$ ("meno infinito").
>
> | intervallo | disuguaglianza | nome |
> |---|---|---|
> | $[a, b]$ | $a \le x \le b$ | chiuso |
> | $(a, b)$ | $a < x < b$ | aperto |
> | $[a, b)$ | $a \le x < b$ | chiuso a sinistra, aperto a destra |
> | $(a, b]$ | $a < x \le b$ | aperto a sinistra, chiuso a destra |
> | $[a, +\infty)$ | $x \ge a$ | semiretta chiusa |
> | $(a, +\infty)$ | $x > a$ | semiretta aperta |
> | $(-\infty, b]$ | $x \le b$ | semiretta chiusa |
> | $(-\infty, b)$ | $x < b$ | semiretta aperta |
> | $(-\infty, +\infty)$ | qualunque $x$ | tutto $\R$ |

Sulla retta un estremo incluso si disegna con un pallino pieno, uno escluso con un pallino vuoto.

```retta
titolo: $[-2, 3)$: $-2$ incluso (pallino pieno), $3$ escluso (pallino vuoto)
da: -4 5
int: [-2, 3)
```

> [!TRAPPOLA] Accanto all'infinito c'è la tonda
> $+\infty$ e $-\infty$ non sono numeri reali, quindi non possono essere inclusi: accanto a loro c'è sempre la parentesi tonda. $[3, +\infty]$ è una scrittura sbagliata.
> Alcuni libri scrivono $]a, b[$ al posto di $(a, b)$: è la stessa cosa.

> [!ESEMPIO] Unione, intersezione e complementare di intervalli
> $A = [-1, 4)$ e $B = (2, 6]$. Immaginali uno sopra l'altro sulla retta e leggi il risultato.
> - $A \cap B = (2, 4)$: servono **entrambe** le condizioni, $-1 \le x < 4$ **e** $2 < x \le 6$.
> - $A \cup B = [-1, 6]$: basta **una** delle due condizioni (i due intervalli si sovrappongono, quindi non ci sono buchi).
> - $A \setminus B = [-1, 2]$: il $2$ sta in $A$ ma non in $B$, quindi resta.
> - $\overline{A} = \R \setminus A = (-\infty, -1) \cup [4, +\infty)$: il $4$ non sta in $A$, quindi sta nel complementare.

```retta
titolo: Il complementare di $[-1, 4)$ è $(-\infty, -1) \cup [4, +\infty)$
da: -3 6
int: (-inf, -1)
int: [4, +inf)
```

Questo è De Morgan in azione: la negazione di "$x \ge -1$ **e** $x < 4$" è "$x < -1$ **oppure** $x \ge 4$".

### Inclusioni tra gli insiemi numerici

Ogni insieme numerico contiene il precedente: $\N \subset \Z \subset \Q \subset \R$. Gli irrazionali sono i reali che non sono razionali, cioè $\R \setminus \Q$.

```grafico
titolo: $\N \subset \Z \subset \Q \subset \R$, con qualche esempio in ogni zona
x: -6 6
y: -3.5 3.5
assi: no
griglia: no
ellisse: -2.9 0 1.3 0.85
ellisse: -2 0 2.55 1.55
ellisse: -1 0 3.9 2.3
ellisse: 0 0 5.5 3.1 | rosso
testo: -2.9 0.3 | $\N$ | bianco
testo: -2.9 -0.35 | $0,\ 1,\ 7$
testo: -0.5 0.8 | $\Z$ | bianco
testo: -0.5 0 | $-3$
testo: 1.7 1.2 | $\Q$ | bianco
testo: 1.7 0 | $\tfrac34,\ 0{,}\overline{6}$
testo: 4.2 1.2 | $\R$ | bianco
testo: 4.2 0 | $\sqrt2,\ \pi$
```

> [!PROP] Quali operazioni restano nell'insieme
> La tabella dice quali operazioni danno **sempre** un risultato che resta nello stesso insieme ("no" vuol dire che almeno in un caso si esce: $3 - 5 \notin \N$, $2 : 3 \notin \Z$, $\sqrt2 \notin \Q$).
>
> | insieme | somma | differenza | prodotto | divisione per un numero $\ne 0$ | radice quadrata di un numero $\ge 0$ |
> |---|---|---|---|---|---|
> | $\N$ | sì | no | sì | no | no |
> | $\Z$ | sì | sì | sì | no | no |
> | $\Q$ | sì | sì | sì | sì | no |
> | $\R$ | sì | sì | sì | sì | sì |

### Dal linguaggio comune alle formule

Molti problemi chiedono di tradurre una frase in simboli.

> [!PROP] Le traduzioni più frequenti
> | a parole | in simboli |
> |---|---|
> | il doppio di $x$; il triplo di $x$ | $2x$; $3x$ |
> | la metà di $x$ | $\tfrac{x}{2}$ |
> | il doppio di $x$, aumentato di 3 | $2x + 3$ |
> | il doppio della somma di $x$ e 3 | $2(x + 3)$ |
> | il quadrato della somma di $a$ e $b$ | $(a + b)^2$ |
> | la somma dei quadrati di $a$ e $b$ | $a^2 + b^2$ |
> | $a$ supera $b$ di 5 | $a = b + 5$ |
> | $a$ è il triplo di $b$ | $a = 3b$ |
> | tre interi consecutivi | $n$, $n + 1$, $n + 2$ |
> | un numero pari; un numero dispari | $2k$; $2k + 1$, con $k \in \Z$ |
> | un multiplo di 7 | $7k$, con $k \in \Z$ |
> | $x$ aumentato del 12% | $1{,}12\,x$ |
> | il reciproco di $x$; l'opposto di $x$ | $\tfrac{1}{x}$ (con $x \ne 0$); $-x$ |

> [!METODO] Tradurre un problema
> 1. Dai un nome (una lettera) a ogni quantità e scrivi che cosa rappresenta.
> 2. Traduci ogni frase del testo in un'uguaglianza.
> 3. Ricava la quantità richiesta e controlla che abbia senso: un numero di persone o di mesi deve essere naturale.

> [!ESEMPIO] Costo fisso più costo a consumo
> Una palestra chiede una quota d'iscrizione di 40 euro più 25 euro al mese. Se in tutto hai speso 290 euro, per quanti mesi hai frequentato?
> Con $m$ = numero di mesi e $C$ = spesa totale in euro: $C = 40 + 25m$. Ricavo $m$: $m = \dfrac{C - 40}{25}$. Con $C = 290$: $m = \dfrac{250}{25} = 10$ mesi.
> La formula vale per qualunque spesa: con $C = 190$ euro, $m = \dfrac{150}{25} = 6$ mesi.

> [!TEST] Numeri
> - **Calcoli senza calcolatrice**, per esempio a risposta numerica: espressioni con frazioni e potenze. Riduci tutto alla stessa base o allo stesso denominatore prima di fare i conti.
> - **"Quale di questi numeri è razionale (o irrazionale)?"**: semplifica ogni opzione. $\sqrt{0{,}49} = 0{,}7$ e $0{,}\overline{3} = \tfrac13$ sono razionali, $\sqrt8 = 2\sqrt2$ no.
> - **Percentuali**, anche a risposta numerica: scrivi sempre il fattore moltiplicativo ($\times 1{,}2$, $\times 0{,}75$) invece di sommare o sottrarre percentuali.
> - **Ordinamento**: porta i numeri alla stessa forma; per le radici confronta i quadrati.
> - **Vero/falso sugli intervalli**: "se $a$ e $b$ stanno in $(0, 1)$, anche $a + b$ ci sta?" Falso: $0{,}7 + 0{,}6 = 1{,}3$. Il prodotto $ab$ invece resta sempre in $(0, 1)$.
> - **Problemi a parole**: prima la formula con le lettere, poi i numeri.

## Esercizi

::: esercizio base Operazioni tra insiemi
Sia $X$ l'insieme delle lettere della parola MATEMATICA e $Y$ l'insieme delle lettere della parola STATISTICA. Scrivi $X$ e $Y$ per elenco, poi calcola $X \cap Y$, $X \cup Y$, $X \setminus Y$, $Y \setminus X$ e $X \,\Delta\, Y$.
::: soluzione
Ogni lettera si scrive una volta sola: $X = \{M, A, T, E, I, C\}$ e $Y = \{S, T, A, I, C\}$.
- $X \cap Y = \{A, T, I, C\}$ (le lettere presenti in tutte e due le parole).
- $X \cup Y = \{M, A, T, E, I, C, S\}$.
- $X \setminus Y = \{M, E\}$ e $Y \setminus X = \{S\}$.
- $X \,\Delta\, Y = (X \setminus Y) \cup (Y \setminus X) = \{M, E, S\}$.

Controllo con il conteggio: $|X \cup Y| = |X| + |Y| - |X \cap Y| = 6 + 5 - 4 = 7$, come le lettere dell'unione.
:::

::: esercizio base Elementi, sottoinsiemi e parti
Sia $X = \{0, 5, 9\}$.
1. Scrivi tutti gli elementi di $\mathcal{P}(X)$.
2. Di' se sono vere o false: $5 \in X$; $\{5\} \in X$; $\{5\} \subseteq X$; $\{5\} \in \mathcal{P}(X)$; $\varnothing \in \mathcal{P}(X)$; $\varnothing \in X$.
3. Quanti elementi ha l'insieme delle parti di un insieme con 6 elementi?
::: soluzione
1. $\mathcal{P}(X) = \{\varnothing, \{0\}, \{5\}, \{9\},$ $\{0, 5\}, \{0, 9\}, \{5, 9\}, X\}$: sono $2^3 = 8$ elementi.
2. $5 \in X$: vero. $\{5\} \in X$: falso, gli elementi di $X$ sono numeri e non insiemi. $\{5\} \subseteq X$: vero. $\{5\} \in \mathcal{P}(X)$: vero, perché è un sottoinsieme di $X$. $\varnothing \in \mathcal{P}(X)$: vero, $\varnothing$ è un sottoinsieme di $X$. $\varnothing \in X$: falso.
3. $2^6 = 64$.
:::

::: esercizio base Una tavola di verità
Completa la tavola di verità di $\lnot p \vee q$ e confrontala con quella di $p \Rightarrow q$. Che cosa noti?
::: soluzione
| | | non | o | se… allora |
|---|---|---|---|---|
| $p$ | $q$ | $\lnot p$ | $\lnot p \vee q$ | $p \Rightarrow q$ |
| V | V | F | V | V |
| V | F | F | F | F |
| F | V | V | V | V |
| F | F | V | V | V |

Le ultime due colonne coincidono: $p \Rightarrow q$ è **equivalente** a $\lnot p \vee q$ ("non $p$, oppure $q$"). Da qui, con De Morgan, esce anche la negazione dell'implicazione: $\lnot(\lnot p \vee q)$ è $p \wedge \lnot q$.
:::

::: esercizio base In quale insieme numerico?
Per ciascun numero indica il più piccolo tra gli insiemi $\N$, $\Z$, $\Q$, $\R$ che lo contiene, e di' se è irrazionale:
$-6$, $\sqrt{36}$, $\tfrac94$, $\sqrt{10}$, $0{,}\overline{18}$, $-\tfrac{12}{3}$, $\pi - 1$, $\sqrt{0{,}01}$.
::: soluzione
- $-6$: $\Z$.
- $\sqrt{36} = 6$: $\N$.
- $\tfrac94 = 2{,}25$: $\Q$.
- $\sqrt{10}$: $10$ non è un quadrato perfetto, quindi è irrazionale; sta in $\R$.
- $0{,}\overline{18} = \tfrac{18}{99} = \tfrac{2}{11}$: periodico, quindi razionale; $\Q$.
- $-\tfrac{12}{3} = -4$: $\Z$ (la frazione è solo una scrittura diversa di un intero).
- $\pi - 1$: irrazionale meno razionale dà un irrazionale; sta in $\R$.
- $\sqrt{0{,}01} = 0{,}1 = \tfrac{1}{10}$: $\Q$.
:::

::: esercizio base Frazioni e potenze
Calcola senza calcolatrice:
1. $\left(\dfrac34 + \dfrac16\right) \cdot \dfrac{8}{11}$
2. $\left(\dfrac23\right)^{-2} - 2^{-1}$
3. $\dfrac{9^2 \cdot 3^{-3}}{27^{-1}}$
::: soluzione
1. Il mcm di 4 e 6 è 12: $\tfrac34 + \tfrac16 = \tfrac{9}{12} + \tfrac{2}{12} = \tfrac{11}{12}$. Poi $\tfrac{11}{12} \cdot \tfrac{8}{11} = \tfrac{8}{12} = \tfrac23$.
2. $\left(\tfrac23\right)^{-2} = \left(\tfrac32\right)^2 = \tfrac94$ e $2^{-1} = \tfrac12 = \tfrac24$. Risultato: $\tfrac94 - \tfrac24 = \tfrac74$.
3. Tutto in base 3: $9^2 = 3^4$ e $27^{-1} = 3^{-3}$. Quindi $\dfrac{3^4 \cdot 3^{-3}}{3^{-3}} = 3^{4 - 3 + 3} = 3^4 = 81$.
:::

::: esercizio medio Negazioni
Scrivi la negazione di ogni frase senza usare "non è vero che" e, quando si può, di' se è vera la frase o la sua negazione.
1. "Tutti i numeri primi sono dispari."
2. "Esiste un numero reale $x$ tale che $x^2 < 0$."
3. "Ogni studente del corso ha superato almeno un esame."
4. "$x > -2$ e $x \le 7$."
5. "Per ogni numero naturale, se è divisibile per 6 allora è divisibile per 4."
::: soluzione
1. "Esiste un numero primo che non è dispari." È vera la negazione: $2$ è primo e pari.
2. "Per ogni numero reale $x$, $x^2 \ge 0$." È vera la negazione: un quadrato non è mai negativo.
3. "Esiste uno studente del corso che non ha superato nessun esame." Due negazioni in una: "ogni" diventa "esiste… che non", e "almeno un esame" diventa "nessun esame". Qui non puoi sapere quale delle due è vera.
4. "$x \le -2$ oppure $x > 7$": la "e" diventa "o" e ogni disuguaglianza si nega. Dipende da $x$, quindi non è né vera né falsa finché $x$ non ha un valore.
5. "Esiste un numero naturale divisibile per 6 e non divisibile per 4." È vera la negazione: $6$ è divisibile per 6 e non per 4.
:::

::: esercizio medio Dimostra o smentisci
Per ciascuna affermazione scrivi una dimostrazione oppure un controesempio.
1. La somma di un numero pari e di un numero dispari è dispari.
2. Se $n^2$ è divisibile per 4, allora $n$ è divisibile per 4.
3. Per ogni $x \in \R$ con $x \ne 0$ vale $x + \tfrac1x \ge 2$.
4. Il prodotto di due numeri dispari è dispari.
::: soluzione
1. Vera. Con $a = 2h$ e $b = 2k + 1$ ($h, k \in \Z$): $a + b = 2h + 2k + 1 = 2(h + k) + 1$, che è dispari.
2. Falsa. Controesempio: $n = 2$. $n^2 = 4$ è divisibile per 4, ma $2$ non lo è.
3. Falsa. Controesempio: $x = -1$ dà $x + \tfrac1x = -1 - 1 = -2 < 2$. (L'affermazione diventa vera se si chiede $x > 0$.)
4. Vera. Con $a = 2h + 1$ e $b = 2k + 1$: $ab = 4hk + 2h + 2k + 1 = 2(2hk + h + k) + 1$, che è dispari.
:::

::: esercizio medio Decimali e frazioni
1. Trasforma in frazione ridotta ai minimi termini: $0{,}\overline{45}$; $2{,}1\overline{6}$; $0{,}125$.
2. Senza fare la divisione, di' se $\tfrac{11}{16}$ e $\tfrac{7}{15}$ hanno decimale finito o periodico.
::: soluzione
1. $0{,}\overline{45} = \tfrac{45}{99} = \tfrac{5}{11}$. $2{,}1\overline{6} = \tfrac{216 - 21}{90} = \tfrac{195}{90} = \tfrac{13}{6}$. $0{,}125 = \tfrac{125}{1000} = \tfrac18$.
2. $16 = 2^4$ contiene solo il fattore 2: decimale finito ($\tfrac{11}{16} = 0{,}6875$). $\tfrac{7}{15}$ è già ridotta e $15 = 3 \cdot 5$ contiene il 3: decimale periodico ($0{,}4\overline{6}$).
:::

::: esercizio medio Radicali
1. Semplifica $\sqrt{48} - \sqrt{27} + \sqrt{12}$.
2. Razionalizza $\dfrac{6}{\sqrt3}$ e $\dfrac{4}{\sqrt5 + 1}$.
3. Metti in ordine crescente $3\sqrt2$, $2\sqrt5$, $\sqrt{17}$.
::: soluzione
1. $\sqrt{48} = \sqrt{16 \cdot 3} = 4\sqrt3$, $\sqrt{27} = \sqrt{9 \cdot 3} = 3\sqrt3$, $\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt3$. Totale: $(4 - 3 + 2)\sqrt3 = 3\sqrt3$.
2. $\dfrac{6}{\sqrt3} = \dfrac{6\sqrt3}{3} = 2\sqrt3$. Per il secondo si moltiplica per il coniugato: $\dfrac{4\left(\sqrt5 - 1\right)}{\left(\sqrt5 + 1\right)\left(\sqrt5 - 1\right)} = \dfrac{4\left(\sqrt5 - 1\right)}{5 - 1} = \sqrt5 - 1$.
3. Sono tutti positivi, quindi confronto i quadrati: $\left(3\sqrt2\right)^2 = 18$, $\left(2\sqrt5\right)^2 = 20$, $\left(\sqrt{17}\right)^2 = 17$. Ordine: $\sqrt{17} < 3\sqrt2 < 2\sqrt5$.
:::

::: esercizio medio Intervalli
Siano $A = [-3, 2)$ e $B = (0, 5]$. Calcola $A \cap B$, $A \cup B$, $A \setminus B$, $B \setminus A$ e il complementare di $B$ in $\R$. Rappresenta $A \setminus B$ sulla retta.
::: soluzione
- $A \cap B = (0, 2)$: serve $x > 0$ (per stare in $B$) e $x < 2$ (per stare in $A$).
- $A \cup B = [-3, 5]$.
- $A \setminus B = [-3, 0]$: lo $0$ sta in $A$ ma non in $B$ (in $B$ è escluso), quindi resta.
- $B \setminus A = [2, 5]$: il $2$ non sta in $A$, quindi resta.
- $\overline{B} = (-\infty, 0] \cup (5, +\infty)$.

```retta
titolo: $A \setminus B = [-3, 0]$
da: -5 6
int: [-3, 0]
```
:::

::: esercizio test Sconti e aumenti
1. Un paio di scarpe, dopo uno sconto del 30%, costa 63 euro. Quanto costava prima dello sconto?
2. Un abbonamento aumenta del 20% e l'anno dopo del 10%. Di quanto è aumentato in tutto, in percentuale?
3. Il prezzo di un biglietto era $x$ ed è aumentato del 6%. Quale espressione dà il nuovo prezzo? (a) $x + 6$ (b) $0{,}06\,x$ (c) $1{,}06\,x$ (d) $1{,}6\,x$
::: soluzione
1. Dopo lo sconto resta il 70%: $0{,}7\,x = 63$, quindi $x = \tfrac{63}{0{,}7} = \tfrac{630}{7} = 90$ euro.
2. I fattori si moltiplicano: $1{,}2 \cdot 1{,}1 = 1{,}32$. L'aumento totale è del 32%, non del 30%.
3. (c): $x + \tfrac{6}{100}x = (1 + 0{,}06)\,x = 1{,}06\,x$. La (a) aggiunge 6 euro, non il 6%; la (b) è solo l'aumento; la (d) corrisponde a un aumento del 60%.
:::

::: esercizio test Dalla frase alla formula
1. Una bici in condivisione costa 1 euro allo sblocco più 0,25 euro al minuto. Scrivi il costo $C$ di una corsa di $t$ minuti e trova quanto dura una corsa pagata 6,50 euro.
2. Traduci in simboli: "il quadrato della somma di due numeri supera di 12 la somma dei loro quadrati". Che cosa puoi dire del prodotto dei due numeri?
::: soluzione
1. $C = 1 + 0{,}25\,t$. Con $C = 6{,}5$: $0{,}25\,t = 5{,}5$, quindi $t = \tfrac{5{,}5}{0{,}25} = 22$ minuti.
2. Chiamo $a$ e $b$ i due numeri: $(a + b)^2 = a^2 + b^2 + 12$. Sviluppando, $a^2 + 2ab + b^2 = a^2 + b^2 + 12$, cioè $2ab = 12$: il prodotto è $ab = 6$.
:::

::: esercizio test Contare con gli insiemi
In un gruppo di 40 studenti, 25 seguono il corso di Programmazione, 18 quello di Matematica discreta e 7 non seguono nessuno dei due. Quanti seguono entrambi i corsi? Quanti seguono **solo** Programmazione?
::: soluzione
Chiama $P$ l'insieme di chi segue Programmazione e $M$ quello di chi segue Matematica discreta. Chi segue almeno un corso: $|P \cup M| = 40 - 7 = 33$. Dalla formula $|P \cup M| = |P| + |M| - |P \cap M|$ si ha $33 = 25 + 18 - |P \cap M|$, quindi $|P \cap M| = 43 - 33 = 10$.
Solo Programmazione: $|P \setminus M| = 25 - 10 = 15$. Controllo: solo Matematica discreta $18 - 10 = 8$, e $15 + 10 + 8 + 7 = 40$.
:::

::: esercizio test Necessaria o sufficiente?
Completa con "necessaria ma non sufficiente", "sufficiente ma non necessaria", "necessaria e sufficiente" oppure "né necessaria né sufficiente" ($x$ è un numero reale, $n$ un numero naturale).
1. "$x > 5$" è condizione … per "$x > 3$".
2. "$x^2 = 16$" è condizione … per "$x = 4$".
3. "$n$ è pari" è condizione … per "$n^2$ è pari".
4. "$x > 0$" è condizione … per "$x^2 > 1$".
::: soluzione
1. Sufficiente ma non necessaria: se $x > 5$ allora $x > 3$; ma $x = 4$ soddisfa $x > 3$ senza soddisfare $x > 5$.
2. Necessaria ma non sufficiente: se $x = 4$ allora $x^2 = 16$; ma $x^2 = 16$ vale anche per $x = -4$.
3. Necessaria e sufficiente: se $n$ è pari, $n^2$ è pari; e se $n^2$ è pari, $n$ è pari (per contronominale: se $n$ è dispari, $n^2$ è dispari).
4. Né necessaria né sufficiente: $x = \tfrac12$ è positivo ma $x^2 = \tfrac14 < 1$; $x = -2$ ha $x^2 = 4 > 1$ ma non è positivo.
:::

::: esercizio test Cavalieri e furfanti
Su un'isola vivono cavalieri, che dicono sempre la verità, e furfanti, che mentono sempre. Incontri due abitanti, $A$ e $B$. $A$ dice: "Almeno uno di noi due è un furfante". Che cosa sono $A$ e $B$?
::: soluzione
Si ragiona per casi, come in una dimostrazione per assurdo.
- Se $A$ fosse un furfante, la sua frase sarebbe falsa, quindi nessuno dei due sarebbe un furfante, compreso $A$: contraddizione.
- Quindi $A$ è un cavaliere e la sua frase è vera: almeno uno dei due è furfante, e non è $A$. Dunque $B$ è un furfante.

Risposta: $A$ è un cavaliere, $B$ è un furfante.
:::

::: esercizio test Vero o falso sui numeri
Di' se ogni affermazione è vera o falsa, motivando.
1. La somma di due numeri irrazionali è sempre irrazionale.
2. $\sqrt3 \cdot \sqrt{12}$ è un numero naturale.
3. Tra $0{,}25$ e $0{,}26$ non ci sono numeri razionali.
4. $0{,}\overline{9} = 1$.
5. Se $a$ e $b$ appartengono a $(0, 1)$, anche $a \cdot b$ appartiene a $(0, 1)$.
::: soluzione
1. Falsa: $2 + \sqrt3$ e $2 - \sqrt3$ sono irrazionali, ma la loro somma è $4$.
2. Vera: $\sqrt3 \cdot \sqrt{12} = \sqrt{36} = 6$.
3. Falsa: per esempio $0{,}255 = \tfrac{51}{200}$ sta in mezzo, e anzi ce ne sono infiniti.
4. Vera: con la frazione generatrice $0{,}\overline{9} = \tfrac99 = 1$.
5. Vera: se $0 < a < 1$ e $0 < b < 1$, moltiplicando $a < 1$ per $b > 0$ si ha $ab < b < 1$, e $ab > 0$ perché è il prodotto di due positivi.
:::

## Quiz di verifica

```quiz
D: Qual è la negazione di "Tutti gli iscritti hanno consegnato il compito"?
+ Almeno un iscritto non ha consegnato il compito
- Nessun iscritto ha consegnato il compito
- Almeno un iscritto ha consegnato il compito
- Esattamente un iscritto non ha consegnato il compito
= "Per ogni" si nega con "esiste almeno uno che non". "Nessuno ha consegnato" è molto più forte della negazione; "esattamente uno" è troppo preciso, perché la negazione è vera anche se non hanno consegnato in due o in dieci; "almeno uno ha consegnato" può essere vera insieme alla frase di partenza.

D: Qual è la negazione di "$x \ge 2$ e $x < 5$"?
+ $x < 2$ oppure $x \ge 5$
- $x < 2$ e $x \ge 5$
- $x \le 2$ oppure $x > 5$
- $x > 2$ oppure $x \le 5$
= Per De Morgan la "e" diventa "o"; la negazione di $x \ge 2$ è $x < 2$ e quella di $x < 5$ è $x \ge 5$. Con la "e" la condizione non sarebbe vera per nessun $x$.

D: Vero o falso: se $A \subseteq B$, allora $A \cap B = A$.
+ Vero
- Falso
= Ogni elemento di $A$ sta anche in $B$, quindi gli elementi comuni sono proprio quelli di $A$. Allo stesso modo $A \cup B = B$.

D: Quanti elementi ha l'insieme delle parti di $X = \{a, b, c, d\}$?
N: 16
= $X$ ha 4 elementi, quindi $\mathcal{P}(X)$ ne ha $2^4 = 16$, compresi $\varnothing$ e $X$.

D: In quale caso l'implicazione $p \Rightarrow q$ è falsa?
+ $p$ vera e $q$ falsa
- $p$ falsa e $q$ vera
- $p$ falsa e $q$ falsa
- $p$ vera e $q$ vera
= L'implicazione è falsa solo quando l'antecedente è vero e il conseguente è falso; negli altri tre casi è vera.

D: L'affermazione "se $n$ è multiplo di 6, allora $n$ è pari" è vera. Quali delle seguenti sono equivalenti a essa?
+ Se $n$ non è pari, allora $n$ non è multiplo di 6
+ Essere multiplo di 6 è condizione sufficiente per essere pari
+ Essere pari è condizione necessaria per essere multiplo di 6
- Se $n$ è pari, allora $n$ è multiplo di 6
- Se $n$ non è multiplo di 6, allora $n$ non è pari
= La contronominale (se $n$ non è pari, allora non è multiplo di 6) è sempre equivalente; le frasi con "sufficiente" e "necessaria" sono modi diversi di dire "se… allora…". L'inversa (se $n$ è pari, allora è multiplo di 6) e la contraria (se $n$ non è multiplo di 6, allora non è pari) non sono equivalenti, e qui sono false: $4$ è pari ma non è multiplo di 6.

D: Scrivi $0{,}1\overline{6}$ come frazione ridotta ai minimi termini.
N: 1/6 ± 0,001
= Frazione generatrice: $\tfrac{16 - 1}{90} = \tfrac{15}{90} = \tfrac16$.

D: Quale dei seguenti numeri è irrazionale?
+ $\sqrt{12}$
- $\sqrt{\tfrac94}$
- $0{,}\overline{12}$
- $\sqrt{0{,}25}$
= $\sqrt{12} = 2\sqrt3$ e $12$ non è un quadrato perfetto. Gli altri sono razionali: $\sqrt{\tfrac94} = \tfrac32$, $0{,}\overline{12} = \tfrac{12}{99} = \tfrac{4}{33}$ (periodico), $\sqrt{0{,}25} = 0{,}5$.

D: Dopo uno sconto del 25% un giubbotto costa 60 euro. Quanti euro costava prima dello sconto?
N: 80
= Resta il 75% del prezzo: $0{,}75\,x = 60$, quindi $x = 80$. Aggiungere a 60 il suo 25% (e ottenere 75) è l'errore tipico.

D: Vero o falso: la frazione $\tfrac{7}{12}$ ha una rappresentazione decimale finita.
- Vero
+ Falso
= $\tfrac{7}{12}$ è ridotta e $12 = 2^2 \cdot 3$ contiene il fattore 3: il decimale è periodico, $0{,}58\overline{3}$.

D: Quale intervallo rappresenta l'insieme $\{x \in \R \mid -1 < x \le 4\}$?
+ $(-1, 4]$
- $[-1, 4)$
- $[-1, 4]$
- $(-1, 4)$
= $-1$ è escluso (disuguaglianza stretta, parentesi tonda), $4$ è incluso ($\le$, parentesi quadra).

D: Quali delle seguenti affermazioni sono vere?
+ $\N \subset \Z$
+ $0{,}\overline{3} \in \Q$
+ $\pi \in \R \setminus \Q$
- $\sqrt2 \in \Q$
- $-3 \in \N$
= $0{,}\overline{3} = \tfrac13$ è razionale e $\pi$ è irrazionale, cioè sta in $\R$ ma non in $\Q$. $\sqrt2$ è irrazionale; $-3$ è intero ma non naturale.

D: Calcola $\dfrac{2^5 \cdot 4^{-2}}{8^{-1}}$.
N: 16
= Tutto in base 2: $\dfrac{2^5 \cdot 2^{-4}}{2^{-3}} = 2^{5 - 4 + 3} = 2^4 = 16$.

D: A che cosa è uguale $\sqrt{50} - \sqrt{18}$?
+ $2\sqrt2$
- $\sqrt{32}$
- $8\sqrt2$
- $2$
= $\sqrt{50} = 5\sqrt2$ e $\sqrt{18} = 3\sqrt2$, quindi la differenza è $2\sqrt2$. $\sqrt{32} = 4\sqrt2$ viene dall'errore $\sqrt{a} - \sqrt{b} = \sqrt{a - b}$; $8\sqrt2$ è la somma; $2$ dimentica la radice.

D: Quale espressione traduce "il doppio della somma di un numero $x$ e di 3"?
+ $2(x + 3)$
- $2x + 3$
- $x^2 + 3$
- $2 + x + 3$
= "Il doppio della somma": prima la somma $x + 3$, poi si moltiplica per 2. $2x + 3$ è "il doppio di $x$, aumentato di 3".

D: Quale delle seguenti proposizioni è vera?
+ $\forall x \in \R\ \exists y \in \R \mid y < x$
- $\exists y \in \R \mid \forall x \in \R,\ y < x$
- $\exists x \in \R \mid x^2 < 0$
- $\forall x \in \R,\ x^2 > 0$
= Per ogni $x$ basta prendere $y = x - 1$. Con i quantificatori scambiati si chiede invece un $y$ più piccolo di tutti i reali, anche di sé stesso: falsa. $\exists x \in \R \mid x^2 < 0$ è falsa perché nessun quadrato è negativo; $\forall x \in \R,\ x^2 > 0$ è falsa per $x = 0$.
```

## Checklist

```checklist
So distinguere $\in$ da $\subseteq$ e scrivere un insieme per elenco e con una proprietà
So calcolare intersezione, unione, differenza, differenza simmetrica, complementare e prodotto cartesiano
So che un insieme con $n$ elementi ha $2^n$ sottoinsiemi e so contare con $|A \cup B| = |A| + |B| - |A \cap B|$
So usare $\forall$, $\exists$, $\exists!$ e so che l'ordine dei quantificatori conta
So costruire la tavola di verità di negazione, congiunzione, disgiunzioni, implicazione e doppia implicazione
So negare frasi con "e", "o", "per ogni", "esiste", "se… allora"
So riconoscere condizione necessaria e sufficiente, contronominale e inversa
So dimostrare in modo diretto, per contronominale e per assurdo, e smentire con un controesempio
So dire a quale insieme numerico appartiene un numero e se è razionale o irrazionale
So passare da frazione a decimale e viceversa, anche con i numeri periodici
So applicare le proprietà delle potenze, semplificare e razionalizzare i radicali
So calcolare percentuali, aumenti, sconti e variazioni successive
So scrivere e disegnare intervalli e calcolarne unione, intersezione e complementare
So tradurre un problema a parole in una formula
```

---

<!-- FILE: ai/moduli/02-polinomi.md -->
> File: `ai/moduli/02-polinomi.md`

---
modulo: 2
titolo: "Polinomi e scomposizione"
breve: "Monomi e polinomi, operazioni, prodotti notevoli, divisione e regola di Ruffini, scomposizione in fattori e frazioni algebriche."
ore: 6
unita:
  - "2.1 Polinomi e fattorizzazione"
---

## In breve

- Un **polinomio** in $x$ è una somma di termini del tipo $a x^k$ con esponenti naturali; il **grado** è l'esponente più alto che compare con coefficiente diverso da zero.
- Somma e differenza: si sommano i termini simili. Prodotto: ogni termine per ogni termine, e i gradi si sommano.
- I **prodotti notevoli** vanno saputi a memoria nei due versi: da sinistra a destra per sviluppare, da destra a sinistra per scomporre.
- La **regola di Ruffini** divide un polinomio per $x - a$ in pochi passaggi; per il **teorema del resto** il resto è il valore del polinomio in $a$.
- $x - a$ è un fattore di $P(x)$ se e solo se $P(a) = 0$. Le radici razionali si cercano tra le frazioni $\pm\frac{\text{divisore del termine noto}}{\text{divisore del coefficiente direttivo}}$, sia con il segno più sia con il segno meno.
- Per scomporre si segue un ordine: raccoglimento totale, prodotti notevoli, trinomio somma e prodotto, raccoglimento parziale, Ruffini. Poi si controlla se i fattori trovati si scompongono ancora.
- Non tutti i polinomi si scompongono: $x^2 + 1$ e $x^2 + x + 1$ non hanno fattori di primo grado.
- Nelle **frazioni algebriche** si semplificano solo i fattori, mai gli addendi, e si scrivono le condizioni di esistenza (denominatore diverso da zero).

## 2.1 Polinomi e fattorizzazione

### Monomi

> [!DEF] Monomio
> Un **monomio** è il prodotto di un numero, il **coefficiente**, per una o più lettere con esponenti naturali, la **parte letterale**. Esempi: $-5x^3$, $\tfrac23 x^2 y$, $7$ (un numero da solo è un monomio senza lettere).
> Il **grado** di un monomio è la somma degli esponenti delle sue lettere: $-5x^3$ ha grado 3, $\tfrac23 x^2 y$ ha grado $2 + 1 = 3$, $7$ ha grado 0.
> Due monomi sono **simili** se hanno la stessa parte letterale: $4x^2$ e $-x^2$ sono simili, $4x^2$ e $4x^3$ no.

> [!PROP] Operazioni con i monomi
> - Si sommano solo monomi simili, sommando i coefficienti: $4x^2 - x^2 = 3x^2$. Invece $4x^2 + 4x^3$ resta così.
> - Nel prodotto si moltiplicano i coefficienti e si **sommano** gli esponenti delle lettere uguali: $(3x^2)(-2x^5) = -6x^7$.
> - Nella potenza si eleva il coefficiente e si **moltiplicano** gli esponenti: $(-2x^3)^2 = 4x^6$.
> - Nella divisione si dividono i coefficienti e si **sottraggono** gli esponenti: $12x^5 : 4x^2 = 3x^3$.

### Che cos'è un polinomio

Il nome viene dal greco e vuol dire "molti termini": un polinomio è una somma di monomi.

> [!DEF] Polinomio in una variabile
> Un **polinomio** nella variabile $x$ è un'espressione del tipo
> $$
> P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_2 x^2 + a_1 x + a_0 \qquad n \in \N
> $$
> - $a_n, a_{n-1}, \dots, a_0$ sono i **coefficienti**: numeri presi da un insieme numerico ($\Z$, $\Q$ oppure $\R$).
> - Se $a_n \ne 0$, $n$ è il **grado** del polinomio e $a_n$ è il **coefficiente direttivo** (il coefficiente del termine di grado più alto).
> - $a_0$ è il **termine noto**.

Un polinomio è **ordinato** se i termini sono scritti per esponenti decrescenti ed è **completo** se ci sono tutte le potenze di $x$, dal grado massimo fino al termine noto. Un termine che manca ha coefficiente $0$: $4x^3 - x + 2 = 4x^3 + 0x^2 - x + 2$. Nella divisione e nella regola di Ruffini questi zeri vanno scritti.

> [!ESEMPIO] Riconoscere un polinomio
> - $3 - x + 2x^4$: polinomio di grado 4. Ordinato diventa $2x^4 - x + 3$; coefficiente direttivo $2$, termine noto $3$; non è completo (mancano $x^3$ e $x^2$).
> - $\tfrac{x^2}{5} - \sqrt3\,x$: polinomio di grado 2 con termine noto $0$. I coefficienti ($\tfrac15$ e $-\sqrt3$) possono essere frazioni o irrazionali: conta solo che gli **esponenti** di $x$ siano naturali.
> - $x^3 + \tfrac4x$: **non** è un polinomio, perché $\tfrac4x = 4x^{-1}$ ha esponente negativo.
> - $x^2 - 2\sqrt{x}$: **non** è un polinomio, perché $\sqrt{x} = x^{1/2}$ ha esponente frazionario.
> - $-6$: polinomio di grado 0, cioè una costante.

Il **valore** di un polinomio in un numero $a$ si ottiene sostituendo $a$ al posto di $x$ e si indica con $P(a)$. Se $P(x) = 2x^3 - x + 5$, allora $P(-1) = 2(-1)^3 - (-1) + 5 = -2 + 1 + 5 = 4$. Metti sempre tra parentesi i numeri negativi che sostituisci.

> [!PROP] Principio di identità dei polinomi
> Due polinomi sono uguali, cioè danno lo stesso valore per ogni $x$, se e solo se hanno gli stessi coefficienti, termine per termine.

> [!ESEMPIO] Trovare coefficienti incogniti
> Per quali numeri $a$ e $b$ vale $(x + a)^2 = x^2 + 6x + b$ per ogni $x$?
> Sviluppo il primo membro: $x^2 + 2ax + a^2 = x^2 + 6x + b$. Confronto i coefficienti dello stesso grado: $2a = 6$ e $a^2 = b$. Quindi $a = 3$ e $b = 9$.

> [!NOTA] Polinomi in più lettere
> Esistono anche polinomi in più variabili, come $x^2 - 3xy + y^2$: il grado è il più alto tra i gradi dei suoi monomi (qui 2). Le regole di calcolo e di scomposizione sono le stesse.

### Somma e differenza

> [!METODO] Sommare e sottrarre polinomi
> 1. Togli le parentesi: se davanti c'è un $+$ i segni restano; se c'è un $-$ cambiano **tutti** i segni dentro la parentesi.
> 2. Raggruppa i termini simili (stesso esponente di $x$) e somma i loro coefficienti.

> [!ESEMPIO] Somma e differenza
> $A(x) = 4x^3 - 2x^2 + 5$ e $B(x) = -x^3 + 6x^2 - 3x - 1$.
> $$
> A + B = (4 - 1)x^3 + (-2 + 6)x^2 - 3x + (5 - 1) = 3x^3 + 4x^2 - 3x + 4
> $$
> $$
> A - B = 4x^3 - 2x^2 + 5 + x^3 - 6x^2 + 3x + 1 = 5x^3 - 8x^2 + 3x + 6
> $$

Il grado di una somma è al massimo il grado più alto dei due addendi, ma può anche scendere: $(x^2 + x) + (-x^2 + 1) = x + 1$.

### Prodotto

> [!METODO] Moltiplicare due polinomi
> Moltiplica **ogni** termine del primo per **ogni** termine del secondo (proprietà distributiva), poi somma i termini simili. Il grado del prodotto è la **somma** dei gradi.

> [!ESEMPIO] Un prodotto svolto e controllato
> $$
> (2x - 3)(x^2 + 4x - 1) = 2x^3 + 8x^2 - 2x - 3x^2 - 12x + 3 = 2x^3 + 5x^2 - 14x + 3
> $$
> Controllo veloce con $x = 1$: a sinistra $(2 - 3)(1 + 4 - 1) = -4$, a destra $2 + 5 - 14 + 3 = -4$. I due valori coincidono.

### Prodotti notevoli

> [!PROP] I prodotti notevoli
> | nome | formula |
> |---|---|
> | quadrato di binomio | $(A \pm B)^2 = A^2 \pm 2AB + B^2$ |
> | somma per differenza | $(A + B)(A - B) = A^2 - B^2$ |
> | cubo di binomio | $(A \pm B)^3 = A^3 \pm 3A^2B + 3AB^2 \pm B^3$ |
> | quadrato di trinomio | $(A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2AC + 2BC$ |
> | somma di cubi | $A^3 + B^3 = (A + B)(A^2 - AB + B^2)$ |
> | differenza di cubi | $A^3 - B^3 = (A - B)(A^2 + AB + B^2)$ |
>
> $A^2 - AB + B^2$ e $A^2 + AB + B^2$ si chiamano **falsi quadrati**: somigliano allo sviluppo di un quadrato di binomio, ma il termine centrale è $AB$ invece di $2AB$.

Il simbolo $\pm$ ("più o meno") riassume due formule in una: quella con tutti i segni di sopra e quella con tutti i segni di sotto. Nelle formule $A$ e $B$ possono essere qualunque cosa: numeri, $x$, $3x$, $x^2$…

> [!ESEMPIO] Sviluppi
> - $(3x - 2)^2 = 9x^2 - 12x + 4$: il doppio prodotto è $2 \cdot 3x \cdot (-2) = -12x$.
> - $(2x + 5)(2x - 5) = 4x^2 - 25$.
> - $(x + 2)^3 = x^3 + 3 \cdot x^2 \cdot 2 + 3 \cdot x \cdot 2^2 + 2^3 = x^3 + 6x^2 + 12x + 8$.
> - $(x - y + 1)^2 = x^2 + y^2 + 1 - 2xy + 2x - 2y$ (quadrato di trinomio con $B = -y$).

> [!TRAPPOLA] Il doppio prodotto dimenticato
> $(x + 3)^2$ non è $x^2 + 9$: manca $6x$. E $(x - 3)^2 = x^2 - 6x + 9$ ha il $+9$ positivo, perché è $(-3)^2$.
> $(A - B)^2 = (B - A)^2$, perché il quadrato cancella il segno; invece $(A - B)^3 = -(B - A)^3$.

> [!NOTA] Il triangolo di Tartaglia
> I coefficienti di $(A + B)^n$ si leggono sulle righe del triangolo di Tartaglia, in cui ogni numero è la somma dei due sopra: $1\ \ 1$, poi $1\ \ 2\ \ 1$, poi $1\ \ 3\ \ 3\ \ 1$, poi $1\ \ 4\ \ 6\ \ 4\ \ 1$. Per esempio $(A + B)^4 = A^4 + 4A^3B + 6A^2B^2 + 4AB^3 + B^4$.

### Divisione tra polinomi

> [!PROP] Divisione con resto
> Dati $A(x)$ (il **dividendo**) e $B(x)$ (il **divisore**, non nullo), esistono e sono unici due polinomi $Q(x)$, il **quoziente**, e $R(x)$, il **resto**, tali che
> $$
> A(x) = B(x) \cdot Q(x) + R(x) \qquad \text{con grado di } R < \text{grado di } B
> $$
> Se $R(x) = 0$ si dice che $A$ è **divisibile** per $B$, e $B$ è un **fattore** di $A$.

> [!METODO] La divisione in colonna
> 1. Ordina dividendo e divisore per potenze decrescenti e completa il dividendo con gli zeri.
> 2. Dividi il primo termine del dividendo per il primo termine del divisore: ottieni il primo termine del quoziente.
> 3. Moltiplica questo termine per tutto il divisore e **sottrai** il risultato dal dividendo.
> 4. Ripeti con il polinomio ottenuto, finché il suo grado diventa minore di quello del divisore: quello è il resto.

> [!ESEMPIO] Dividere $x^3 + 2x^2 - 5x + 7$ per $x^2 - x + 1$
> - $x^3 : x^2 = x$ è il primo termine del quoziente. $x \cdot (x^2 - x + 1) = x^3 - x^2 + x$. Sottraggo: $(x^3 + 2x^2 - 5x + 7) - (x^3 - x^2 + x) = 3x^2 - 6x + 7$.
> - $3x^2 : x^2 = 3$. $3 \cdot (x^2 - x + 1) = 3x^2 - 3x + 3$. Sottraggo: $(3x^2 - 6x + 7) - (3x^2 - 3x + 3) = -3x + 4$.
> - $-3x + 4$ ha grado 1, minore di 2: mi fermo.
>
> Quoziente $Q(x) = x + 3$, resto $R(x) = -3x + 4$. Verifica: $(x^2 - x + 1)(x + 3) + (-3x + 4) = x^3 + 2x^2 - 5x + 7$.

### La regola di Ruffini

Quando il divisore è di primo grado, del tipo $x - a$, la divisione si fa molto più in fretta con la **regola di Ruffini**.

> [!METODO] Dividere $P(x)$ per $x - a$ con Ruffini
> 1. Scrivi in riga i coefficienti di $P(x)$ ordinato e completo (con gli zeri al posto dei termini mancanti); separa il termine noto con una barra.
> 2. In basso a sinistra scrivi $a$, il numero che **annulla** il divisore: per $x - 2$ scrivi $2$, per $x + 3$ scrivi $-3$.
> 3. Riporta il primo coefficiente nell'ultima riga.
> 4. Moltiplicalo per $a$, scrivi il prodotto sotto il coefficiente successivo e somma in colonna. Ripeti fino all'ultima colonna.
> 5. Nell'ultima riga leggi i coefficienti del quoziente, che ha un grado in meno di $P$, e dopo la barra il resto.

> [!ESEMPIO] Dividere $3x^3 - 5x^2 + 4$ per $x - 2$
> Il dividendo completo è $3x^3 - 5x^2 + 0x + 4$: coefficienti $3,\ -5,\ 0,\ 4$. Il divisore $x - 2$ si annulla per $x = 2$.
> $$
> \begin{array}{c|ccc|c}
>  & 3 & -5 & 0 & 4 \\
> 2 &  & 6 & 2 & 4 \\
> \hline
>  & 3 & 1 & 2 & 8
> \end{array}
> $$
> Passaggi: riporto $3$; $3 \cdot 2 = 6$ e $-5 + 6 = 1$; $1 \cdot 2 = 2$ e $0 + 2 = 2$; $2 \cdot 2 = 4$ e $4 + 4 = 8$.
> Quoziente $3x^2 + x + 2$, resto $8$. Cioè $3x^3 - 5x^2 + 4 = (x - 2)(3x^2 + x + 2) + 8$.

> [!ESEMPIO] Divisore del tipo $x + a$: dividere $x^4 - 1$ per $x + 1$
> Coefficienti $1,\ 0,\ 0,\ 0,\ -1$ (mancano $x^3$, $x^2$ e $x$). Il divisore si annulla per $x = -1$.
> $$
> \begin{array}{c|cccc|c}
>  & 1 & 0 & 0 & 0 & -1 \\
> -1 &  & -1 & 1 & -1 & 1 \\
> \hline
>  & 1 & -1 & 1 & -1 & 0
> \end{array}
> $$
> Quoziente $x^3 - x^2 + x - 1$, resto $0$: $x^4 - 1 = (x + 1)(x^3 - x^2 + x - 1)$.

> [!NOTA] Perché la regola funziona
> Ruffini è la divisione in colonna scritta in forma compatta: i numeri dell'ultima riga sono i coefficienti del quoziente, trovati uno dopo l'altro come nella divisione. Nella divisione, a ogni passaggio si sottrae un multiplo di $x - a$: togliere $q \cdot (x - a)$ vuol dire togliere $qx$ e **aggiungere** $q \cdot a$. Per questo nello schema si moltiplica per $a$ e si somma.

> [!TRAPPOLA] Gli errori con Ruffini
> - Dimenticare gli zeri dei termini mancanti: tutto il quoziente viene sbagliato.
> - Sbagliare il segno di $a$: per dividere per $x + 3$ si scrive $-3$, non $3$.
> - Leggere male il risultato: il quoziente ha grado **uno in meno** del dividendo e l'ultimo numero è il resto, non un coefficiente.

> [!NOTA] Divisori come $2x - 1$
> Ruffini funziona con divisori del tipo $x - a$. Per dividere per $2x - 1 = 2\left(x - \tfrac12\right)$ puoi dividere per $x - \tfrac12$ (con $a = \tfrac12$) e poi dividere per 2 il quoziente ottenuto; il resto non cambia.

### Teorema del resto e teorema di Ruffini

> [!PROP] Teorema del resto
> Il resto della divisione di $P(x)$ per $x - a$ è $P(a)$.

Il motivo: $P(x) = (x - a) \cdot Q(x) + R$, dove $R$ è un numero (il resto ha grado minore di quello del divisore $x - a$, che è 1). Sostituendo $x = a$ il primo pezzo si annulla e resta $P(a) = R$. Nell'esempio di prima: $3 \cdot 2^3 - 5 \cdot 2^2 + 4 = 24 - 20 + 4 = 8$, proprio il resto trovato con Ruffini.

> [!PROP] Teorema di Ruffini
> $P(x)$ è divisibile per $x - a$ se e solo se $P(a) = 0$.
> Un numero $a$ tale che $P(a) = 0$ si chiama **radice** (o **zero**) del polinomio.

> [!ESEMPIO] Trovare un parametro
> Per quale valore di $k$ il polinomio $P(x) = 2x^3 - x^2 + kx + 6$ è divisibile per $x + 2$?
> Il divisore si annulla per $x = -2$, quindi serve $P(-2) = 0$:
> $$
> 2(-8) - 4 - 2k + 6 = 0 \quad\Longrightarrow\quad -14 - 2k = 0 \quad\Longrightarrow\quad k = -7
> $$
> Controllo: $2x^3 - x^2 - 7x + 6$ in $-2$ vale $-16 - 4 + 14 + 6 = 0$.

### Scomporre in fattori: da dove partire

**Scomporre** (o **fattorizzare**) un polinomio vuol dire scriverlo come prodotto di polinomi di grado più basso. Un polinomio che non si può scomporre si dice **irriducibile**. La forma scomposta serve per semplificare le frazioni algebriche, per risolvere equazioni e disequazioni (moduli 3 e 4) e per studiare il segno di un'espressione.

> [!METODO] Strategia di scomposizione
> 1. **Raccoglimento totale**: c'è un fattore comune a tutti i termini? Raccoglilo per primo.
> 2. Conta i termini che restano:
>    - **2 termini**: differenza di quadrati, somma o differenza di cubi;
>    - **3 termini**: quadrato di binomio, trinomio somma e prodotto (anche con coefficiente direttivo diverso da 1);
>    - **4 termini**: cubo di binomio, oppure raccoglimento parziale.
> 3. Se non funziona niente: **Ruffini**, cercando una radice tra i candidati razionali.
> 4. Controlla ogni fattore ottenuto: si scompone ancora? Ti fermi quando tutti i fattori sono irriducibili.
> 5. Verifica il risultato: rimoltiplica, oppure confronta i valori in un punto (per esempio $x = 1$ o $x = 0$).

La tabella riassume quale metodo provare guardando la forma del polinomio.

| come si presenta | metodo | esempio |
|---|---|---|
| un fattore comune a tutti i termini | raccoglimento totale | $6x^3 - 9x^2 = 3x^2(2x - 3)$ |
| due quadrati separati dal meno | differenza di quadrati | $4x^2 - 9 = (2x - 3)(2x + 3)$ |
| due cubi | somma o differenza di cubi | $x^3 + 8 = (x + 2)(x^2 - 2x + 4)$ |
| tre termini: due quadrati e il loro doppio prodotto | quadrato di binomio | $x^2 + 8x + 16 = (x + 4)^2$ |
| tre termini del tipo $x^2 + Sx + P$ | somma e prodotto | $x^2 + x - 6 = (x + 3)(x - 2)$ |
| quattro termini: due cubi e i due tripli prodotti | cubo di binomio | $x^3 + 3x^2 + 3x + 1 = (x + 1)^3$ |
| quattro termini con fattori comuni a coppie | raccoglimento parziale | $x^3 + x^2 + 2x + 2 = (x + 1)(x^2 + 2)$ |
| nessuno dei casi precedenti | Ruffini | $x^3 - 7x + 6 = (x - 1)(x - 2)(x + 3)$ |

> [!ESEMPIO] Tre scomposizioni in più passaggi
> - $x^5 - x = x(x^4 - 1) = x(x^2 - 1)(x^2 + 1) = x(x - 1)(x + 1)(x^2 + 1)$: raccoglimento totale, poi due differenze di quadrati una dopo l'altra; $x^2 + 1$ è irriducibile e resta così.
> - $3x^3 - 12x^2 + 12x = 3x(x^2 - 4x + 4) = 3x(x - 2)^2$: raccoglimento totale, poi quadrato di binomio.
> - $-x^2 + 6x - 9 = -(x^2 - 6x + 9) = -(x - 3)^2$: quando il primo termine è negativo conviene raccogliere il segno meno, così dentro la parentesi si riconosce il prodotto notevole.

> [!TRAPPOLA] Fermarsi troppo presto
> $2x^2 - 8 = 2(x^2 - 4)$ non è ancora scomposto del tutto: $x^2 - 4$ è una differenza di quadrati, quindi $2x^2 - 8 = 2(x - 2)(x + 2)$. Dopo ogni passaggio chiediti se i fattori ottenuti si scompongono ancora.

### Raccoglimento totale e parziale

> [!METODO] Raccoglimento totale
> Se tutti i termini hanno un fattore comune, lo metti in evidenza (si dice anche **raccoglimento a fattor comune**): $AB + AC = A(B + C)$. Di solito si raccoglie il MCD dei coefficienti per la potenza di $x$ con l'esponente più basso.

> [!ESEMPIO] Raccoglimenti totali
> - $6x^3 - 9x^2 + 3x = 3x(2x^2 - 3x + 1)$. Attenzione all'ultimo termine: $3x : 3x = 1$, non $0$. Il trinomio si scompone ancora (lo vedrai più avanti): $2x^2 - 3x + 1 = (2x - 1)(x - 1)$, quindi alla fine $6x^3 - 9x^2 + 3x = 3x(2x - 1)(x - 1)$.
> - $5x^4 + 10x^2 = 5x^2(x^2 + 2)$.
> - $3x(x - 2) + 5(x - 2) = (x - 2)(3x + 5)$: si può raccogliere anche un fattore che è un polinomio.

> [!METODO] Raccoglimento parziale
> Se non c'è un fattore comune a tutti i termini, raggruppa i termini a coppie (o a gruppi) con un fattore comune e raccoglilo in ogni gruppo. Se tra parentesi compare lo **stesso** polinomio, raccoglilo di nuovo.

> [!ESEMPIO] Raccoglimenti parziali
> - $x^3 - 3x^2 + 2x - 6 = x^2(x - 3) + 2(x - 3) = (x - 3)(x^2 + 2)$.
> - $2x^3 + x^2 - 8x - 4 = x^2(2x + 1) - 4(2x + 1) = (2x + 1)(x^2 - 4) = (2x + 1)(x - 2)(x + 2)$. Qui si continua, perché $x^2 - 4$ è una differenza di quadrati.
> - $ax - ay + 3x - 3y = a(x - y) + 3(x - y) = (x - y)(a + 3)$.

> [!TRAPPOLA] Il segno nel raccoglimento parziale
> In $2x^3 + x^2 - 8x - 4$, dagli ultimi due termini si raccoglie $-4$: $-8x - 4 = -4(2x + 1)$, perché $-4 \cdot 2x = -8x$ e $-4 \cdot 1 = -4$. Raccogliendo $+4$ si otterrebbe $4(-2x - 1)$ e la parentesi non coinciderebbe più con $2x + 1$.

### Scomposizione con i prodotti notevoli

> [!ESEMPIO] Differenze di quadrati
> - $9x^2 - 16 = (3x)^2 - 4^2 = (3x - 4)(3x + 4)$.
> - $x^4 - 16 = (x^2 - 4)(x^2 + 4) = (x - 2)(x + 2)(x^2 + 4)$: il primo fattore si scompone ancora, $x^2 + 4$ no.
> - $(x + 1)^2 - 25 = (x + 1 - 5)(x + 1 + 5) = (x - 4)(x + 6)$.

> [!ESEMPIO] Quadrati e cubi di binomio
> - $x^2 - 10x + 25 = (x - 5)^2$: $x^2$ e $25$ sono i quadrati di $x$ e di $5$, e il termine centrale è il doppio prodotto $2 \cdot x \cdot 5 = 10x$, con il segno meno.
> - $12x^2 + 12x + 3 = 3(4x^2 + 4x + 1) = 3(2x + 1)^2$.
> - $x^6 - 6x^3 + 9 = (x^3)^2 - 2 \cdot x^3 \cdot 3 + 3^2 = (x^3 - 3)^2$: i prodotti notevoli funzionano anche con potenze più alte.
> - $x^3 - 6x^2 + 12x - 8 = (x - 2)^3$: $x^3$ e $-8 = (-2)^3$ sono cubi, e i termini centrali sono $3 \cdot x^2 \cdot 2 = 6x^2$ e $3 \cdot x \cdot 2^2 = 12x$, con i segni alterni.

> [!ESEMPIO] Somma e differenza di cubi
> - $x^3 - 27 = x^3 - 3^3 = (x - 3)(x^2 + 3x + 9)$.
> - $8a^3 + 1 = (2a)^3 + 1^3 = (2a + 1)(4a^2 - 2a + 1)$.
>
> Il falso quadrato che resta non si scompone più (con coefficienti reali).

> [!TRAPPOLA] La somma di due quadrati non si scompone
> $x^2 + 9$ non è $(x + 3)^2$ (che ha anche $6x$) e non è $(x + 3)(x - 3)$ (che fa $x^2 - 9$). Con coefficienti reali $x^2 + 9$ è irriducibile: nessun numero reale ha $x^2 = -9$.

### Il trinomio somma e prodotto

> [!PROP] Trinomio $x^2 + Sx + P$
> Se trovi due numeri $m$ e $n$ con **somma** $m + n = S$ e **prodotto** $m \cdot n = P$, allora
> $$
> x^2 + Sx + P = (x + m)(x + n)
> $$
> Infatti $(x + m)(x + n) = x^2 + (m + n)x + mn$.

> [!METODO] Trovare $m$ e $n$ a mente
> 1. Guarda il segno di $P$: se $P > 0$, $m$ e $n$ hanno lo **stesso** segno, quello di $S$; se $P < 0$ hanno segni **opposti**, e quello più grande in valore assoluto ha il segno di $S$.
> 2. Elenca le coppie di divisori di $|P|$ e cerca quella con la somma giusta.

> [!ESEMPIO] Quattro trinomi
> - $x^2 + 7x + 12$: $P = 12 > 0$ e $S = 7 > 0$, entrambi positivi. Coppie: $1 \cdot 12$, $2 \cdot 6$, $3 \cdot 4$; la somma 7 è di $3$ e $4$. Risultato $(x + 3)(x + 4)$.
> - $x^2 - 9x + 20$: prodotto positivo e somma negativa, entrambi negativi: $-4$ e $-5$. Risultato $(x - 4)(x - 5)$.
> - $x^2 - x - 12$: prodotto negativo, segni opposti; somma $-1$: $-4$ e $3$. Risultato $(x - 4)(x + 3)$.
> - $x^2 + 2x - 15$: segni opposti, somma $+2$: $5$ e $-3$. Risultato $(x + 5)(x - 3)$.

> [!METODO] Coefficiente direttivo diverso da 1: $ax^2 + bx + c$
> Cerca due numeri con somma $b$ e prodotto $a \cdot c$, spezza il termine centrale e fai un raccoglimento parziale.
> Esempio: $2x^2 + x - 1$. Servono somma $1$ e prodotto $2 \cdot (-1) = -2$: sono $2$ e $-1$.
> $$
> 2x^2 + x - 1 = 2x^2 + 2x - x - 1 = 2x(x + 1) - (x + 1) = (x + 1)(2x - 1)
> $$
> Nel modulo 3 vedrai il metodo generale: se $x_1$ e $x_2$ sono le soluzioni di $ax^2 + bx + c = 0$, allora $ax^2 + bx + c = a(x - x_1)(x - x_2)$.

> [!ESEMPIO] Un trinomio in $x^2$
> Lo stesso metodo funziona con $x^2$ al posto di $x$. In $x^4 - 5x^2 + 4$ servono somma $-5$ e prodotto $4$: $-1$ e $-4$. Quindi $x^4 - 5x^2 + 4 = (x^2 - 1)(x^2 - 4)$ e, con le differenze di quadrati,
> $$
> x^4 - 5x^2 + 4 = (x - 1)(x + 1)(x - 2)(x + 2)
> $$

### Radici e scomposizione con Ruffini

Se $a$ è una radice di $P(x)$, per il teorema di Ruffini $P(x) = (x - a) \cdot Q(x)$, e il quoziente $Q(x)$ si trova proprio con la regola di Ruffini. Il problema è trovare una radice: per quelle razionali c'è un criterio preciso.

> [!PROP] Dove cercare le radici razionali
> Se $P(x)$ ha coefficienti **interi** e la frazione ridotta $\tfrac{p}{q}$ è una sua radice, allora $p$ divide il termine noto e $q$ divide il coefficiente direttivo. In pratica i candidati sono
> $$
> \pm \frac{\text{divisori del termine noto}}{\text{divisori del coefficiente direttivo}}
> $$
> Se il coefficiente direttivo è $1$, i candidati sono solo i divisori del termine noto, con il segno $+$ e con il segno $-$.

> [!NOTA] Attenzione ai nomi
> Il nome preciso di questo criterio è **teorema delle radici razionali**. In alcuni testi compare con il nome di "teorema del resto", perché si usa insieme al teorema del resto: si calcola $P(a)$ sui candidati e ci si ferma quando si trova $P(a) = 0$.

> [!METODO] Scomporre con Ruffini
> 1. Elenca i candidati.
> 2. Calcola $P(a)$ sui candidati più semplici ($\pm1$, $\pm2$, …) finché trovi $P(a) = 0$.
> 3. Dividi $P(x)$ per $x - a$ con Ruffini (il resto deve venire $0$): $P(x) = (x - a) \cdot Q(x)$.
> 4. Scomponi $Q(x)$, che ha un grado in meno, con i metodi già visti o di nuovo con Ruffini.
>
> Due scorciatoie: $P(1)$ è la **somma dei coefficienti**, quindi $1$ è radice se questa somma è $0$. $P(-1)$ si ottiene sommando i coefficienti dopo aver cambiato segno a quelli dei termini di grado dispari.

> [!ESEMPIO] $P(x) = x^3 - 2x^2 - 5x + 6$
> Candidati: i divisori di $6$, cioè $\pm1, \pm2, \pm3, \pm6$. La somma dei coefficienti è $1 - 2 - 5 + 6 = 0$, quindi $P(1) = 0$ e $x - 1$ è un fattore.
> $$
> \begin{array}{c|ccc|c}
>  & 1 & -2 & -5 & 6 \\
> 1 &  & 1 & -1 & -6 \\
> \hline
>  & 1 & -1 & -6 & 0
> \end{array}
> $$
> Quoziente $x^2 - x - 6$, che si scompone con somma $-1$ e prodotto $-6$: $(x - 3)(x + 2)$. In conclusione
> $$
> x^3 - 2x^2 - 5x + 6 = (x - 1)(x - 3)(x + 2)
> $$
> Controllo con due valori: per $x = 0$ il prodotto vale $(-1)(-3)(2) = 6$ e $P(0) = 6$; per $x = 2$ vale $(1)(-1)(4) = -4$ e $P(2) = 8 - 8 - 10 + 6 = -4$.
> Le radici $-2$, $1$ e $3$ sono i punti in cui il grafico di $y = P(x)$ taglia l'asse $x$.

```grafico
titolo: $y = x^3 - 2x^2 - 5x + 6 = (x - 1)(x - 3)(x + 2)$ taglia l'asse $x$ nelle radici $-2$, $1$ e $3$
x: -3 4
y: -8 10
proporzioni: libere
f: x^3 - 2x^2 - 5x + 6
punto: -2 0 | rosso
punto: 1 0 | rosso
punto: 3 0 | rosso
```

> [!ESEMPIO] Coefficiente direttivo diverso da 1: $P(x) = 2x^3 - 3x^2 - 3x + 2$
> Candidati: $\pm1, \pm2, \pm\tfrac12$. Provo: $P(1) = 2 - 3 - 3 + 2 = -2$, no. $P(-1) = -2 - 3 + 3 + 2 = 0$, sì.
> $$
> \begin{array}{c|ccc|c}
>  & 2 & -3 & -3 & 2 \\
> -1 &  & -2 & 5 & -2 \\
> \hline
>  & 2 & -5 & 2 & 0
> \end{array}
> $$
> Quoziente $2x^2 - 5x + 2$: servono somma $-5$ e prodotto $2 \cdot 2 = 4$, cioè $-4$ e $-1$. Quindi $2x^2 - 4x - x + 2 = 2x(x - 2) - (x - 2) = (x - 2)(2x - 1)$.
> Risultato: $P(x) = (x + 1)(x - 2)(2x - 1)$. Le radici sono $-1$, $2$ e $\tfrac12$: la radice frazionaria $\tfrac12$ corrisponde al fattore $2x - 1 = 2\left(x - \tfrac12\right)$.

> [!PROP] Forma scomposta e radici
> Un polinomio di grado $n$ ha **al massimo** $n$ radici reali; può averne meno, o nessuna. Se ne ha esattamente $n$, cioè $x_1, x_2, \dots, x_n$ (una radice che compare due volte, come in $(x - 5)^2$, si conta due volte), allora
> $$
> P(x) = a_n (x - x_1)(x - x_2) \cdots (x - x_n)
> $$
> dove $a_n$ è il coefficiente direttivo. Per esempio $2x^3 - 3x^2 - 3x + 2$ ha coefficiente direttivo $2$ e radici $-1$, $2$ e $\tfrac12$, quindi è uguale a $2(x + 1)(x - 2)\left(x - \tfrac12\right) = (x + 1)(x - 2)(2x - 1)$.

### Polinomi irriducibili

> [!PROP] Quando un polinomio non si scompone
> - Ogni polinomio di **primo grado** è irriducibile.
> - Un polinomio di **secondo grado** si scompone in due fattori di primo grado (a coefficienti reali) se e solo se ha radici reali. $x^2 + 1$, $x^2 + 4$ e $x^2 + x + 1$ non ne hanno: sono irriducibili.
> - Nel modulo 3 userai il **discriminante** $b^2 - 4ac$: se è negativo, il trinomio $ax^2 + bx + c$ è irriducibile.

> [!ESEMPIO] Perché $x^2 + x + 1$ non si scompone
> Completando il quadrato: $x^2 + x + 1 = \left(x + \tfrac12\right)^2 + \tfrac34$. Un quadrato è sempre maggiore o uguale a zero, quindi il polinomio vale sempre almeno $\tfrac34$: non è mai zero, non ha radici e non ha fattori di primo grado.
> Nel grafico si vede che la sua parabola non tocca mai l'asse $x$, mentre quella di $x^2 + x - 2 = (x + 2)(x - 1)$ lo taglia in $-2$ e in $1$.

```grafico
titolo: $y = x^2 + x + 1$ (irriducibile) non tocca l'asse $x$; in rosso $y = x^2 + x - 2 = (x + 2)(x - 1)$
x: -3.5 2.5
y: -3 7
proporzioni: libere
f: x^2 + x + 1
f: x^2 + x - 2 | rosso
punto: -2 0 | rosso
punto: 1 0 | rosso
```

### Frazioni algebriche

> [!DEF] Frazione algebrica e condizioni di esistenza
> Una **frazione algebrica** è un quoziente $\dfrac{A(x)}{B(x)}$ tra due polinomi. Ha senso solo dove il denominatore non si annulla: le **condizioni di esistenza** (C.E.) sono $B(x) \ne 0$.
> Esempio: $\dfrac{x + 5}{x^2 - 9}$ esiste per $x^2 - 9 \ne 0$, cioè per $x \ne 3$ e $x \ne -3$.

> [!METODO] Semplificare
> 1. Scomponi numeratore e denominatore.
> 2. Scrivi le condizioni di esistenza guardando il denominatore scomposto, **prima** di semplificare.
> 3. Dividi numeratore e denominatore per i fattori **comuni**.

> [!ESEMPIO] Una semplificazione
> $$
> \frac{x^2 - 9}{x^2 + 3x} = \frac{(x - 3)(x + 3)}{x(x + 3)} = \frac{x - 3}{x} \qquad \text{C.E. } x \ne 0,\ x \ne -3
> $$
> La condizione $x \ne -3$ resta anche se il fattore $x + 3$ è sparito: la frazione di partenza in $-3$ non esiste.

> [!METODO] Sommare e sottrarre
> 1. Scomponi i denominatori e scrivi le C.E.
> 2. Il denominatore comune è il **mcm** dei denominatori: tutti i fattori, comuni e non comuni, ciascuno con l'esponente più alto.
> 3. Per ogni frazione dividi il denominatore comune per il suo denominatore e moltiplica il risultato per il suo numeratore.
> 4. Somma i numeratori e, se si può, semplifica.

> [!ESEMPIO] Il denominatore comune
> Per sommare $\dfrac{1}{x^2 - 1}$, $\dfrac{2}{x^2 + 2x + 1}$ e $\dfrac{3}{x}$ si scompongono i denominatori: $(x - 1)(x + 1)$, $(x + 1)^2$ e $x$. Il mcm prende ogni fattore una sola volta, con l'esponente più alto: $x(x - 1)(x + 1)^2$. Le C.E. sono $x \ne 0$, $x \ne 1$ e $x \ne -1$.

> [!ESEMPIO] Una somma che alla fine si semplifica
> $$
> \frac{x}{x - 2} - \frac{4}{x^2 - 2x} = \frac{x}{x - 2} - \frac{4}{x(x - 2)} = \frac{x \cdot x - 4}{x(x - 2)} = \frac{(x - 2)(x + 2)}{x(x - 2)} = \frac{x + 2}{x}
> $$
> con C.E. $x \ne 0$ e $x \ne 2$.

> [!ESEMPIO] Prodotto e divisione
> Nel prodotto si scompone tutto e si semplificano i fattori comuni, anche tra frazioni diverse:
> $$
> \frac{x^2 - 4}{x + 1} \cdot \frac{x^2 + x}{x - 2} = \frac{(x - 2)(x + 2)}{x + 1} \cdot \frac{x(x + 1)}{x - 2} = x(x + 2)
> $$
> con C.E. $x \ne -1$ e $x \ne 2$. Per dividere si moltiplica per la frazione **reciproca**; in quel caso serve anche che il numeratore della seconda frazione sia diverso da zero.

> [!TRAPPOLA] Semplificare gli addendi
> In $\dfrac{x + 3}{x}$ la $x$ del numeratore è un addendo, non un fattore: non si "cancella". Il risultato corretto è $\dfrac{x + 3}{x} = 1 + \dfrac3x$, non $3$ e nemmeno $4$. Anche $\dfrac{x^2 + 1}{x + 1}$ non si semplifica: $x^2 + 1$ non contiene il fattore $x + 1$.

> [!TRAPPOLA] Fattori opposti
> $2 - x$ e $x - 2$ non sono uguali, sono **opposti**: $2 - x = -(x - 2)$. Semplificandoli resta un segno meno:
> $$
> \frac{x - 2}{2 - x} = \frac{x - 2}{-(x - 2)} = -1 \qquad \frac{x^2 - 9}{3 - x} = \frac{(x - 3)(x + 3)}{-(x - 3)} = -(x + 3)
> $$
> con C.E. $x \ne 2$ nel primo caso e $x \ne 3$ nel secondo.

> [!NOTA] A che cosa serve scomporre
> Nei moduli 3 e 4 la scomposizione serve per risolvere equazioni come $x^3 - 2x^2 - 5x + 6 = 0$ grazie alla **legge di annullamento del prodotto** (un prodotto vale zero se e solo se almeno un fattore vale zero) e per studiare il segno delle frazioni algebriche. Per esempio $x^3 - 4x = 0$ diventa $x(x - 2)(x + 2) = 0$, che è vera per $x = 0$, per $x = 2$ e per $x = -2$. La fattorizzazione dei polinomi ha anche applicazioni fuori dalla scuola, per esempio in crittografia e nei codici per trasmettere dati senza errori.

> [!TEST] Polinomi e scomposizione
> - **"Quale delle seguenti è la scomposizione di…"** (per esempio a scelta una su quattro): invece di scomporre, controlla le opzioni. Con $x = 0$ confronti i termini noti, con $x = 1$ la somma dei coefficienti: spesso bastano per scartare tre opzioni.
> - **Resto della divisione per $x - a$** (per esempio a risposta numerica): non fare la divisione, calcola $P(a)$. Se il divisore ha grado 2 o più questa scorciatoia non vale: serve la divisione in colonna.
> - **Parametro per la divisibilità per $x - a$** (anche a risposta numerica): imponi $P(a) = 0$ e risolvi l'equazione nel parametro, di solito di primo grado.
> - **Vero/falso su identità** come $(a - b)^2 = a^2 - b^2$ o $a^3 + b^3 = (a + b)^3$: prova con numeri piccoli, per esempio $a = 2$ e $b = 1$.
> - **Scelta multipla sui fattori**: $x - a$ è un fattore se e solo se $P(a) = 0$; controlla ogni opzione così.
> - **Frazioni algebriche**: diffida delle opzioni che semplificano addendi o dimenticano le C.E.

## Esercizi

::: esercizio base Riconoscere i polinomi
Per ogni espressione di' se è un polinomio in $x$; se lo è, indica grado, coefficiente direttivo e termine noto.
1. $5 - 2x^3 + x^2$
2. $x^2 + \dfrac3x$
3. $\sqrt3\,x^4 - x$
4. $7$
5. $\sqrt{x} + 1$
::: soluzione
1. È un polinomio. Ordinato: $-2x^3 + x^2 + 5$. Grado 3, coefficiente direttivo $-2$, termine noto $5$.
2. Non è un polinomio: $\tfrac3x = 3x^{-1}$ ha esponente negativo.
3. È un polinomio di grado 4, con coefficiente direttivo $\sqrt3$ (un coefficiente irrazionale va benissimo) e termine noto $0$.
4. È un polinomio di grado 0 (una costante): coefficiente direttivo e termine noto coincidono e valgono $7$.
5. Non è un polinomio: $\sqrt{x} = x^{1/2}$ ha esponente frazionario.
:::

::: esercizio base Somma e differenza
Dati $A(x) = 2x^3 - x^2 + 4$ e $B(x) = x^3 + 3x^2 - 5x - 1$, calcola $A + B$, $A - B$ e $B - A$.
::: soluzione
- $A + B = (2 + 1)x^3 + (-1 + 3)x^2 - 5x + (4 - 1) = 3x^3 + 2x^2 - 5x + 3$.
- $A - B = 2x^3 - x^2 + 4 - x^3 - 3x^2 + 5x + 1 = x^3 - 4x^2 + 5x + 5$ (il meno davanti a $B$ cambia tutti i suoi segni).
- $B - A$ è l'opposto di $A - B$: $-x^3 + 4x^2 - 5x - 5$.
:::

::: esercizio base Prodotti
Calcola: $(x - 4)(2x + 3)$; $(2x - 3)^2$; $(x + 1)^3$; $(5 - x)(5 + x)$.
::: soluzione
- $(x - 4)(2x + 3) = 2x^2 + 3x - 8x - 12 = 2x^2 - 5x - 12$.
- $(2x - 3)^2 = 4x^2 - 12x + 9$: il doppio prodotto è $2 \cdot 2x \cdot (-3) = -12x$.
- $(x + 1)^3 = x^3 + 3x^2 + 3x + 1$.
- $(5 - x)(5 + x) = 25 - x^2$.
:::

::: esercizio base Raccoglimenti
Scomponi: $4x^3 - 8x^2$; $10x^4 + 15x^3 + 5x^2$; $x(x - 1) + 3(x - 1)$.
::: soluzione
- $4x^3 - 8x^2 = 4x^2(x - 2)$.
- $10x^4 + 15x^3 + 5x^2 = 5x^2(2x^2 + 3x + 1)$. Il trinomio si scompone ancora: somma $3$ e prodotto $2 \cdot 1 = 2$ danno $2$ e $1$, quindi $2x^2 + 2x + x + 1 = 2x(x + 1) + (x + 1) = (x + 1)(2x + 1)$. Risultato: $5x^2(x + 1)(2x + 1)$.
- $x(x - 1) + 3(x - 1) = (x - 1)(x + 3)$.
:::

::: esercizio base Ruffini
Dividi $P(x) = x^3 - 4x^2 + x + 6$ per $x - 3$ con la regola di Ruffini. Che cosa puoi concludere? Poi scomponi $P(x)$ completamente.
::: soluzione
$$
\begin{array}{c|ccc|c}
 & 1 & -4 & 1 & 6 \\
3 &  & 3 & -3 & -6 \\
\hline
 & 1 & -1 & -2 & 0
\end{array}
$$
Quoziente $x^2 - x - 2$, resto $0$: $P(x)$ è divisibile per $x - 3$, cioè $3$ è una radice. Infatti $P(3) = 27 - 36 + 3 + 6 = 0$.
Il quoziente si scompone con somma $-1$ e prodotto $-2$, cioè $-2$ e $1$. Quindi $P(x) = (x - 3)(x - 2)(x + 1)$.
:::

::: esercizio medio Prodotti notevoli al contrario
Scomponi: $25x^2 - 1$; $x^2 - 12x + 36$; $2x^3 - 50x$; $x^3 - 64$; $27x^3 + 27x^2 + 9x + 1$.
::: soluzione
- $25x^2 - 1 = (5x - 1)(5x + 1)$.
- $x^2 - 12x + 36 = (x - 6)^2$.
- $2x^3 - 50x = 2x(x^2 - 25) = 2x(x - 5)(x + 5)$: prima il raccoglimento, poi la differenza di quadrati.
- $x^3 - 64 = x^3 - 4^3 = (x - 4)(x^2 + 4x + 16)$.
- $27x^3 + 27x^2 + 9x + 1 = (3x + 1)^3$. Controllo: $(3x)^3 = 27x^3$, $3 \cdot (3x)^2 \cdot 1 = 27x^2$, $3 \cdot 3x \cdot 1^2 = 9x$, $1^3 = 1$.
:::

::: esercizio medio Trinomi
Scomponi: $x^2 + 8x + 15$; $x^2 - 2x - 24$; $x^2 - 11x + 30$; $3x^2 - 6x - 9$; $3x^2 + 5x - 2$.
::: soluzione
- $x^2 + 8x + 15 = (x + 3)(x + 5)$: somma 8, prodotto 15.
- $x^2 - 2x - 24 = (x - 6)(x + 4)$: prodotto negativo, quindi segni opposti; somma $-2$.
- $x^2 - 11x + 30 = (x - 5)(x - 6)$.
- $3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x - 3)(x + 1)$: prima si raccoglie il 3.
- $3x^2 + 5x - 2$: servono somma $5$ e prodotto $3 \cdot (-2) = -6$, cioè $6$ e $-1$. Quindi $3x^2 + 6x - x - 2 = 3x(x + 2) - (x + 2) = (x + 2)(3x - 1)$.
:::

::: esercizio medio Raccoglimento parziale
Scomponi: $x^3 + 5x^2 - 4x - 20$; $ab - 2a + 3b - 6$; $x^3 - x^2 + x - 1$.
::: soluzione
- $x^3 + 5x^2 - 4x - 20 = x^2(x + 5) - 4(x + 5) = (x + 5)(x^2 - 4) = (x + 5)(x - 2)(x + 2)$.
- $ab - 2a + 3b - 6 = a(b - 2) + 3(b - 2) = (b - 2)(a + 3)$.
- $x^3 - x^2 + x - 1 = x^2(x - 1) + (x - 1) = (x - 1)(x^2 + 1)$, e $x^2 + 1$ è irriducibile.
:::

::: esercizio medio Teorema del resto
1. Senza fare la divisione, trova il resto di $(x^5 - 3x^2 + 2) : (x + 1)$.
2. Trova $k$ in modo che $x^3 + kx^2 - 4$ sia divisibile per $x - 2$.
::: soluzione
1. Con $P(x) = x^5 - 3x^2 + 2$: il divisore si annulla per $x = -1$, quindi il resto è $P(-1) = (-1)^5 - 3(-1)^2 + 2 = -1 - 3 + 2 = -2$.
2. Con $P(x) = x^3 + kx^2 - 4$ serve $P(2) = 0$: $8 + 4k - 4 = 0$, cioè $4k = -4$ e $k = -1$. Controllo: $x^3 - x^2 - 4$ in $2$ vale $8 - 4 - 4 = 0$.
:::

::: esercizio medio Ruffini due volte
Scomponi $P(x) = x^4 - x^3 - 7x^2 + x + 6$.
::: soluzione
Candidati: $\pm1, \pm2, \pm3, \pm6$. La somma dei coefficienti è $1 - 1 - 7 + 1 + 6 = 0$, quindi $P(1) = 0$.
$$
\begin{array}{c|cccc|c}
 & 1 & -1 & -7 & 1 & 6 \\
1 &  & 1 & 0 & -7 & -6 \\
\hline
 & 1 & 0 & -7 & -6 & 0
\end{array}
$$
$P(x) = (x - 1)(x^3 - 7x - 6)$. Per $Q(x) = x^3 - 7x - 6$ provo $-1$: $Q(-1) = -1 + 7 - 6 = 0$.
$$
\begin{array}{c|ccc|c}
 & 1 & 0 & -7 & -6 \\
-1 &  & -1 & 1 & 6 \\
\hline
 & 1 & -1 & -6 & 0
\end{array}
$$
$Q(x) = (x + 1)(x^2 - x - 6) = (x + 1)(x - 3)(x + 2)$. In conclusione
$$
P(x) = (x - 1)(x + 1)(x - 3)(x + 2)
$$
:::

::: esercizio test Riconoscere la scomposizione giusta
Quale delle seguenti è la scomposizione di $x^2 - 2x - 15$?
(a) $(x + 5)(x - 3)$ (b) $(x - 5)(x + 3)$ (c) $(x - 5)(x - 3)$ (d) $(x - 15)(x + 1)$
::: soluzione
Metodo veloce: il termine noto è $-15$, quindi i due numeri hanno segni opposti e la (c), che ha prodotto $+15$, è da scartare. La somma deve essere $-2$: nella (a) è $5 - 3 = 2$, nella (d) è $-15 + 1 = -14$, nella (b) è $-5 + 3 = -2$. Risposta (b).
Controllo: $(x - 5)(x + 3) = x^2 + 3x - 5x - 15 = x^2 - 2x - 15$.
:::

::: esercizio test Semplificare una frazione algebrica
Semplifica $\dfrac{x^2 - 4x + 4}{x^2 - 4}$, con le condizioni di esistenza, e calcolane il valore per $x = 3$.
::: soluzione
Numeratore: $(x - 2)^2$. Denominatore: $(x - 2)(x + 2)$. C.E.: $x \ne 2$ e $x \ne -2$.
$$
\frac{(x - 2)^2}{(x - 2)(x + 2)} = \frac{x - 2}{x + 2}
$$
Per $x = 3$, che rispetta le C.E.: $\dfrac{3 - 2}{3 + 2} = \dfrac15$.
:::

::: esercizio test Somma di frazioni algebriche
Calcola $\dfrac{2}{x - 1} - \dfrac{4}{x^2 - 1}$ e semplifica il risultato.
::: soluzione
$x^2 - 1 = (x - 1)(x + 1)$, quindi le C.E. sono $x \ne 1$ e $x \ne -1$, e il denominatore comune è $(x - 1)(x + 1)$:
$$
\frac{2(x + 1) - 4}{(x - 1)(x + 1)} = \frac{2x - 2}{(x - 1)(x + 1)} = \frac{2(x - 1)}{(x - 1)(x + 1)} = \frac{2}{x + 1}
$$
con $x \ne 1$ e $x \ne -1$.
:::

::: esercizio test Un parametro
Per quale valore di $k$ il polinomio $x^3 - kx + 6$ è divisibile per $x + 2$? Con quel valore di $k$, scomponi il polinomio.
::: soluzione
Chiamo $P(x) = x^3 - kx + 6$. Il divisore si annulla per $x = -2$, quindi serve $P(-2) = 0$: $(-2)^3 - k \cdot (-2) + 6 = -8 + 2k + 6 = 2k - 2 = 0$, quindi $k = 1$.
Con $k = 1$ il polinomio è $x^3 - x + 6$, con coefficienti $1, 0, -1, 6$. Ruffini con $-2$:
$$
\begin{array}{c|ccc|c}
 & 1 & 0 & -1 & 6 \\
-2 &  & -2 & 4 & -6 \\
\hline
 & 1 & -2 & 3 & 0
\end{array}
$$
Quindi $x^3 - x + 6 = (x + 2)(x^2 - 2x + 3)$. Il secondo fattore è irriducibile: $x^2 - 2x + 3 = (x - 1)^2 + 2$ vale sempre almeno 2.
:::

::: esercizio test Vero o falso
1. $x^2 + 9 = (x + 3)^2$.
2. $x^2 + 9$ non si può scrivere come prodotto di due polinomi di primo grado a coefficienti reali.
3. $x^3 - 1 = (x - 1)(x^2 + x + 1)$.
4. $(x - y)^2 = (y - x)^2$.
5. $x^4 - 1 = (x^2 - 1)^2$.
::: soluzione
1. Falso: $(x + 3)^2 = x^2 + 6x + 9$. Con $x = 1$ si vede subito: $10 \ne 16$.
2. Vero: $x^2 + 9 \ge 9$ per ogni $x$ reale, quindi non ha radici e non ha fattori di primo grado.
3. Vero: è la differenza di cubi con $A = x$ e $B = 1$.
4. Vero: $y - x = -(x - y)$ e il quadrato cancella il segno.
5. Falso: $x^4 - 1 = (x^2 - 1)(x^2 + 1) = (x - 1)(x + 1)(x^2 + 1)$. Con $x = 0$: $-1 \ne 1$.
:::

::: esercizio test Una radice frazionaria
Verifica che $\tfrac23$ è una radice di $P(x) = 3x^3 - 2x^2 + 3x - 2$. Quale fattore di primo grado compare di sicuro nella scomposizione? Scomponi $P(x)$.
::: soluzione
$P\left(\tfrac23\right) = 3 \cdot \tfrac{8}{27} - 2 \cdot \tfrac49 + 3 \cdot \tfrac23 - 2 = \tfrac89 - \tfrac89 + 2 - 2 = 0$.
Per il teorema di Ruffini compare il fattore $x - \tfrac23$, o equivalentemente $3x - 2 = 3\left(x - \tfrac23\right)$. Con un raccoglimento parziale:
$$
3x^3 - 2x^2 + 3x - 2 = x^2(3x - 2) + (3x - 2) = (3x - 2)(x^2 + 1)
$$
e $x^2 + 1$ è irriducibile.
:::

## Quiz di verifica

```quiz
D: Qual è il grado del polinomio $(2x^3 - x + 1)(x^2 + 4)$?
N: 5
= Nel prodotto i gradi si sommano: $3 + 2 = 5$. Il termine di grado più alto è $2x^3 \cdot x^2 = 2x^5$.

D: A che cosa è uguale $(x - 3)^2$?
+ $x^2 - 6x + 9$
- $x^2 - 9$
- $x^2 + 9$
- $x^2 - 3x + 9$
= Quadrato del primo termine, doppio prodotto $2 \cdot x \cdot (-3) = -6x$, quadrato del secondo $(-3)^2 = 9$.

D: Vero o falso: $(a - b)^3 = a^3 - b^3$ per ogni $a$ e $b$.
- Vero
+ Falso
= $(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$. Controesempio: con $a = 2$ e $b = 1$ a sinistra si ha $1$, a destra $7$.

D: Qual è la scomposizione di $x^2 - x - 20$?
+ $(x - 5)(x + 4)$
- $(x + 5)(x - 4)$
- $(x - 10)(x + 2)$
- $(x - 5)(x - 4)$
= Servono due numeri con prodotto $-20$ e somma $-1$: $-5$ e $4$. $(x + 5)(x - 4)$ ha somma $+1$, $(x - 5)(x - 4)$ ha prodotto $+20$, $(x - 10)(x + 2)$ ha somma $-8$.

D: Qual è il resto della divisione di $x^3 - 2x + 5$ per $x - 2$?
N: 9
= Per il teorema del resto è il valore del polinomio in $2$: $2^3 - 2 \cdot 2 + 5 = 8 - 4 + 5 = 9$.

D: Quali dei seguenti polinomi sono fattori di $x^3 - 4x$?
+ $x$
+ $x - 2$
+ $x + 2$
- $x - 4$
- $x^2 + 4$
= $x^3 - 4x = x(x^2 - 4) = x(x - 2)(x + 2)$. $x - 4$ non è un fattore perché il polinomio in $4$ vale $64 - 16 = 48 \ne 0$; $x^2 + 4$ non compare nella scomposizione.

D: Qual è la scomposizione di $8x^3 + 1$?
+ $(2x + 1)(4x^2 - 2x + 1)$
- $(2x + 1)^3$
- $(2x + 1)(4x^2 + 2x + 1)$
- $(2x - 1)(4x^2 + 2x + 1)$
= Somma di cubi con $A = 2x$ e $B = 1$: $(A + B)(A^2 - AB + B^2)$. Il cubo $(2x + 1)^3$ avrebbe anche i termini $12x^2 + 6x$; $(2x - 1)(4x^2 + 2x + 1)$ è la scomposizione di $8x^3 - 1$; in $(2x + 1)(4x^2 + 2x + 1)$ il falso quadrato ha il segno sbagliato.

D: Vero o falso: $x^2 + 4$ si può scrivere come prodotto di due polinomi di primo grado a coefficienti reali.
- Vero
+ Falso
= $x^2 + 4 \ge 4$ per ogni $x$ reale: non ha radici, quindi non ha fattori di primo grado. Attenzione: $(x + 2)^2 = x^2 + 4x + 4$ e $(x + 2)(x - 2) = x^2 - 4$.

D: Per quale valore di $k$ il polinomio $x^2 + kx + 6$ è divisibile per $x - 2$?
N: -5
= Serve che il polinomio valga zero in $2$: $4 + 2k + 6 = 0$, quindi $k = -5$. Infatti $x^2 - 5x + 6 = (x - 2)(x - 3)$.

D: Qual è il quoziente della divisione $(x^3 - 1) : (x - 1)$?
+ $x^2 + x + 1$
- $x^2 - x + 1$
- $x^2 + 1$
- $x^2 + x - 1$
= Con Ruffini (coefficienti $1, 0, 0, -1$ e numero $1$) l'ultima riga è $1,\ 1,\ 1$ con resto $0$. È la differenza di cubi: $x^3 - 1 = (x - 1)(x^2 + x + 1)$.

D: Quali numeri sono radici di $P(x) = x^3 - x^2 - 4x + 4$?
+ $1$
+ $-2$
- $4$
- $-1$
= Raccoglimento parziale: $x^2(x - 1) - 4(x - 1) = (x - 1)(x - 2)(x + 2)$, quindi le radici sono $1$, $2$ e $-2$. Invece $P(4) = 36$ e $P(-1) = 6$.

D: A che cosa è uguale $\dfrac{x^2 - 1}{x^2 + 2x + 1}$, per $x \ne -1$?
+ $\dfrac{x - 1}{x + 1}$
- $\dfrac{-1}{2x + 1}$
- $\dfrac{x + 1}{x - 1}$
- $x - 1$
= $\dfrac{(x - 1)(x + 1)}{(x + 1)^2} = \dfrac{x - 1}{x + 1}$. $\dfrac{-1}{2x + 1}$ nasce dall'errore di "cancellare" $x^2$, che è un addendo e non un fattore.

D: Qual è la somma dei coefficienti del polinomio che si ottiene sviluppando $(2x - 1)^5$?
N: 1
= La somma dei coefficienti di un polinomio è il suo valore in $x = 1$: $(2 \cdot 1 - 1)^5 = 1^5 = 1$. Non serve sviluppare.

D: A che cosa è uguale $\dfrac{2}{x - 3} + \dfrac{1}{x + 3}$?
+ $\dfrac{3x + 3}{x^2 - 9}$
- $\dfrac{3}{2x}$
- $\dfrac{3}{x^2 - 9}$
- $\dfrac{3x - 3}{x^2 - 9}$
= Denominatore comune $(x - 3)(x + 3) = x^2 - 9$; numeratore $2(x + 3) + (x - 3) = 3x + 3$. $\tfrac{3}{2x}$ viene dall'errore di sommare numeratori con numeratori e denominatori con denominatori.

D: Quale delle seguenti espressioni **non** è un polinomio?
+ $\dfrac{1}{x^2} + 1$
- $\dfrac{x^2}{5} - 1$
- $\sqrt2\,x + 1$
- $0{,}5x^3$
= $\tfrac{1}{x^2} = x^{-2}$ ha esponente negativo. Nelle altre gli esponenti di $x$ sono naturali: frazioni e radici nei **coefficienti** vanno bene.
```

## Checklist

```checklist
So riconoscere un polinomio e trovarne grado, coefficiente direttivo e termine noto
So sommare, sottrarre e moltiplicare monomi e polinomi
So sviluppare e riconoscere i prodotti notevoli, compresi somma e differenza di cubi
So fare la divisione in colonna tra due polinomi
So applicare la regola di Ruffini, anche con termini mancanti e con divisori del tipo $x + a$
So usare il teorema del resto per trovare un resto o un parametro senza fare la divisione
So fare un raccoglimento totale e un raccoglimento parziale
So scomporre i trinomi $x^2 + Sx + P$ e $ax^2 + bx + c$
So elencare le radici razionali candidate e scomporre con Ruffini
So riconoscere i polinomi irriducibili come $x^2 + 1$ e $x^2 + x + 1$
So semplificare, sommare e moltiplicare frazioni algebriche con le condizioni di esistenza
```

---

<!-- FILE: ai/moduli/03-equazioni-disequazioni.md -->
> File: `ai/moduli/03-equazioni-disequazioni.md`

---
modulo: 3
titolo: "Equazioni e disequazioni di 1° e 2° grado, sistemi"
breve: "Equazioni e disequazioni di primo e secondo grado, sistemi lineari e problemi da tradurre in equazioni."
ore: 8
unita:
  - "3.1 Equazioni e disequazioni di 1° grado"
  - "3.2 Equazioni e disequazioni di 2° grado"
  - "3.3 Sistemi di equazioni"
---

## In breve

- Un'equazione di primo grado si riduce sempre a $ax + b = 0$. Se $a \neq 0$ ha una sola soluzione, $x = -\frac{b}{a}$; se $a = 0$ è **impossibile** (quando $b \neq 0$) oppure è un'**identità** (quando anche $b = 0$).
- Le disequazioni si risolvono come le equazioni, con una regola in più: se moltiplichi o dividi per un numero negativo, il verso si ribalta ($<$ diventa $>$ e viceversa).
- Per $ax^2 + bx + c = 0$ calcola prima il discriminante $\Delta = b^2 - 4ac$: due soluzioni se $\Delta > 0$, una sola (doppia) se $\Delta = 0$, nessuna soluzione reale se $\Delta < 0$. Poi usa $x_{1,2} = \frac{-b \pm \sqrt{\Delta}}{2a}$.
- Somma e prodotto delle soluzioni, $x_1 + x_2 = -\frac{b}{a}$ e $x_1 x_2 = \frac{c}{a}$, servono per controllare un risultato in pochi secondi.
- Per una disequazione di secondo grado pensa alla parabola: con $a > 0$ e $\Delta > 0$ il trinomio è positivo **fuori** dalle soluzioni e negativo **tra** le soluzioni.
- Un sistema lineare di due equazioni si risolve per sostituzione o per riduzione; può avere una soluzione, nessuna (**impossibile**) o infinite (**indeterminato**).
- Il grado di un sistema è il prodotto dei gradi delle sue equazioni.
- Nei problemi: scegli l'incognita, scrivi l'equazione, risolvi e controlla che la soluzione abbia senso (lunghezze ed età positive, numero intero di persone e così via).

## 3.1 Equazioni e disequazioni di primo grado

### Che cos'è un'equazione

> [!DEF] Equazione e soluzione
> Un'**equazione** è un'uguaglianza tra due espressioni che contiene una lettera, l'**incognita** (di solito $x$). L'espressione a sinistra dell'uguale è il **primo membro**, quella a destra il **secondo membro**.
> Una **soluzione** è un numero che, messo al posto di $x$, rende vera l'uguaglianza. **Risolvere** un'equazione significa trovare tutte le sue soluzioni.

Per esempio $2x + 1 = 7$ ha la soluzione $x = 3$: infatti $2 \cdot 3 + 1 = 7$. Il numero $1$ invece non è soluzione, perché $2 \cdot 1 + 1 = 3 \neq 7$ (il simbolo $\neq$ si legge "diverso da").

Un'equazione è **di primo grado** (o lineare) quando, dopo aver fatto tutti i conti, la $x$ compare solo alla prima potenza. Si può sempre scrivere nella forma
$$
ax + b = 0
$$
dove $a$ e $b$ sono numeri reali. Due equazioni sono **equivalenti** se hanno le stesse soluzioni: risolvere vuol dire passare da un'equazione a un'altra equivalente ma più semplice, fino ad arrivare a "$x$ uguale a un numero".

### I principi di equivalenza

> [!PROP] I due principi di equivalenza
> 1. **Primo principio.** Se aggiungi o togli la stessa espressione a entrambi i membri, ottieni un'equazione equivalente.
> 2. **Secondo principio.** Se moltiplichi o dividi entrambi i membri per lo stesso numero **diverso da zero**, ottieni un'equazione equivalente.

Dai due principi vengono le regole pratiche che userai sempre:

- **Trasporto**: un termine può passare da un membro all'altro cambiando segno. Da $3x - 5 = 7$ si passa a $3x = 7 + 5$ (hai aggiunto $5$ a entrambi i membri).
- **Cancellazione**: un termine uguale nei due membri si può togliere. In $x^2 + 2x = x^2 + 6$ togli $x^2$ da entrambe le parti e resta $2x = 6$.
- **Denominatori numerici**: moltiplichi tutti i termini per il minimo comune multiplo (m.c.m.) dei denominatori e le frazioni spariscono.
- **Cambio di segno**: moltiplicando tutto per $-1$ cambiano i segni di tutti i termini, e $-x = 4$ diventa $x = -4$.

> [!TRAPPOLA] Moltiplicare per zero
> Il secondo principio vale solo con numeri diversi da zero. Moltiplicando per $0$ qualunque equazione diventa $0 = 0$ e perdi tutte le informazioni. Allo stesso modo non si divide per un'espressione che contiene $x$ (per esempio per $x$ stessa) senza sapere se può valere zero: rischi di perdere soluzioni.

### Determinata, impossibile, indeterminata

Quando sei arrivato alla forma $ax + b = 0$, cioè $ax = -b$, ci sono tre casi.

| Coefficienti | Tipo di equazione | Soluzioni |
|---|---|---|
| $a \neq 0$ | **determinata** | una sola: $x = -\frac{b}{a}$ |
| $a = 0$ e $b \neq 0$ | **impossibile** | nessuna: diventa $0 \cdot x = -b$, falsa per ogni $x$ |
| $a = 0$ e $b = 0$ | **indeterminata** (identità) | tutti i numeri reali: diventa $0 \cdot x = 0$ |

L'insieme dei numeri reali si indica con $\R$; l'insieme vuoto, cioè "nessuna soluzione", con $\emptyset$.

> [!METODO] Risolvere un'equazione di primo grado
> 1. Svolgi i prodotti e togli le parentesi.
> 2. Se ci sono denominatori numerici, moltiplica **ogni** termine per il loro m.c.m.
> 3. Porta i termini con la $x$ al primo membro e i numeri al secondo (trasporto, cambiando segno).
> 4. Somma i termini simili fino ad arrivare a $ax = -b$.
> 5. Se $a \neq 0$ dividi per $a$; se $a = 0$ decidi se è impossibile o un'identità.
> 6. Controllo (facoltativo ma utile): sostituisci il risultato nell'equazione di partenza.

> [!ESEMPIO] Con le parentesi: $3(x - 4) = 5(x - 2) + 4$
> Svolgi i prodotti: $3x - 12 = 5x - 10 + 4$, cioè $3x - 12 = 5x - 6$.
>
> Porta le $x$ a sinistra e i numeri a destra: $3x - 5x = -6 + 12$, quindi $-2x = 6$.
>
> Dividi per $-2$: $x = -3$.
>
> Controllo: a sinistra $3(-3 - 4) = -21$, a destra $5(-3 - 2) + 4 = -25 + 4 = -21$. Giusto.

> [!ESEMPIO] Con i denominatori: $\frac{x - 1}{4} + \frac{x}{6} = \frac{x + 3}{3}$
> Il m.c.m. di $4$, $6$ e $3$ è $12$. Moltiplica ogni termine per $12$: $12 \cdot \frac{x - 1}{4} = 3(x - 1)$, $12 \cdot \frac{x}{6} = 2x$, $12 \cdot \frac{x + 3}{3} = 4(x + 3)$. Ottieni
> $$
> 3(x - 1) + 2x = 4(x + 3)
> $$
> cioè $3x - 3 + 2x = 4x + 12$, poi $5x - 4x = 12 + 3$ e infine $x = 15$.
>
> Controllo: $\frac{14}{4} + \frac{15}{6} = 3{,}5 + 2{,}5 = 6$ e $\frac{18}{3} = 6$.

> [!ESEMPIO] Un'equazione impossibile e un'identità
> $2(x + 3) - x = x + 4$ diventa $2x + 6 - x = x + 4$, cioè $x + 6 = x + 4$. Portando le $x$ a sinistra: $0 \cdot x = -2$. Nessun numero moltiplicato per $0$ dà $-2$: l'equazione è **impossibile**.
>
> $3(x - 1) + 2 = 3x - 1$ diventa $3x - 1 = 3x - 1$, cioè $0 \cdot x = 0$: vera per ogni $x$. È un'**identità** e l'insieme delle soluzioni è $\R$.

> [!TRAPPOLA] Il meno davanti a una frazione
> In $\frac{x}{2} - \frac{x - 3}{4} = 1$ il meno vale per **tutto** il numeratore. Moltiplicando per $4$ ottieni $2x - (x - 3) = 4$, cioè $2x - x + 3 = 4$, e quindi $x = 1$. Scrivere $2x - x - 3 = 4$ è l'errore più comune (porterebbe a $x = 7$). E ricorda di moltiplicare per $4$ anche il $1$ del secondo membro.

> [!TRAPPOLA] $0 \cdot x = 0$ non vuol dire $x = 0$
> $x = 0$ è un'equazione con una sola soluzione, lo zero. $0 \cdot x = 0$ invece è vera per **tutti** i numeri, e $0 \cdot x = 5$ non è vera per nessuno.

### Disequazioni di primo grado

Una **disequazione** è come un'equazione, ma al posto dell'uguale c'è uno di questi simboli: $>$ (maggiore), $\geq$ (maggiore o uguale), $<$ (minore), $\leq$ (minore o uguale). Le soluzioni di solito sono infinite e formano uno o più **intervalli**. Ogni disequazione di primo grado si riduce a una delle forme $ax > b$, $ax \geq b$, $ax < b$, $ax \leq b$.

Un insieme di soluzioni si scrive in tre modi equivalenti: con una disuguaglianza, come intervallo, oppure disegnato sulla retta dei numeri.

| Disuguaglianza | Intervallo | Significato |
|---|---|---|
| $x > 2$ | $(2, +\infty)$ | i numeri maggiori di $2$, escluso $2$ |
| $x \geq 2$ | $[2, +\infty)$ | i numeri maggiori di $2$, compreso $2$ |
| $x < 2$ | $(-\infty, 2)$ | i numeri minori di $2$, escluso $2$ |
| $x \leq 2$ | $(-\infty, 2]$ | i numeri minori di $2$, compreso $2$ |
| $-1 < x \leq 2$ | $(-1, 2]$ | tra $-1$ (escluso) e $2$ (compreso) |

La parentesi tonda indica un estremo **escluso**, la quadra un estremo **compreso**. Il simbolo $\infty$ (infinito) non è un numero: accanto a lui la parentesi è sempre tonda. Per mettere insieme due intervalli si usa il simbolo di **unione** $\cup$: $(-\infty, 1) \cup (3, +\infty)$ vuol dire "$x < 1$ oppure $x > 3$". A volte "oppure" si scrive $\vee$ e "e" si scrive $\wedge$.

> [!PROP] Principi di equivalenza per le disequazioni
> 1. Aggiungere o togliere la stessa espressione a entrambi i membri non cambia le soluzioni (il trasporto funziona come nelle equazioni).
> 2. Moltiplicare o dividere entrambi i membri per un numero **positivo** non cambia le soluzioni.
> 3. Moltiplicare o dividere entrambi i membri per un numero **negativo** cambia il **verso**: $<$ diventa $>$, $\leq$ diventa $\geq$ e viceversa.

Il motivo della terza regola: $2 < 5$ è vero, ma moltiplicando per $-1$ ottieni $-2$ e $-5$, e $-2 > -5$. Moltiplicare per un numero negativo "ribalta" l'ordine dei numeri sulla retta.

> [!METODO] Risolvere una disequazione di primo grado
> 1. Togli parentesi e denominatori numerici (il m.c.m. dei denominatori è positivo: il verso non cambia).
> 2. Porta le $x$ a sinistra e i numeri a destra.
> 3. Arriva alla forma $ax > b$ (o con uno degli altri tre simboli).
> 4. Dividi per $a$: se $a > 0$ il verso resta, se $a < 0$ il verso si ribalta.
> 5. Scrivi la soluzione come disuguaglianza e come intervallo; se aiuta, disegnala sulla retta.

> [!ESEMPIO] $2(x + 1) - 5 \leq 4x + 3$
> Svolgi: $2x + 2 - 5 \leq 4x + 3$, cioè $2x - 3 \leq 4x + 3$.
>
> Trasporta: $2x - 4x \leq 3 + 3$, quindi $-2x \leq 6$.
>
> Dividi per $-2$, che è negativo, e **ribalta il verso**: $x \geq -3$.
>
> Soluzione: $x \geq -3$, cioè l'intervallo $[-3, +\infty)$.
>
> ```retta
> titolo: Soluzioni di $2(x + 1) - 5 \leq 4x + 3$
> da: -6 3
> int: [-3, +inf)
> ```

> [!ESEMPIO] Con i denominatori: $\frac{x}{3} - \frac{x - 1}{2} > 1$
> Il m.c.m. è $6$ (positivo, il verso resta): $2x - 3(x - 1) > 6$, cioè $2x - 3x + 3 > 6$, quindi $-x > 3$.
>
> Moltiplica per $-1$ e ribalta: $x < -3$, cioè l'intervallo $(-\infty, -3)$.
>
> Controllo veloce con un numero che dovrebbe andare bene, $x = -6$: $\frac{-6}{3} - \frac{-7}{2} = -2 + 3{,}5 = 1{,}5 > 1$. Sì.

> [!NOTA] Quando il coefficiente di $x$ si annulla
> Se dopo i conti la $x$ sparisce, resta una disuguaglianza tra numeri. Se è vera, la disequazione vale per ogni $x \in \R$ (si legge "$x$ appartenente a $\R$"); se è falsa, non ha soluzioni. Per esempio $x + 5 > x + 2$ diventa $0 \cdot x > -3$, sempre vera; $x + 2 \geq x + 5$ diventa $0 \cdot x \geq 3$, mai vera.

> [!TRAPPOLA] Quando si ribalta il verso
> Il verso si ribalta **solo** quando moltiplichi o dividi per un numero negativo. Spostare un termine da un membro all'altro non cambia il verso. E dividere per un numero positivo non lo cambia, anche se il secondo membro è negativo: da $3x < -6$ segue $x < -2$.

### Più disequazioni insieme: sistemi e doppie disequazioni

Un **sistema di disequazioni** chiede i numeri che soddisfano **tutte** le disequazioni contemporaneamente: risolvi ciascuna disequazione e prendi la parte comune, cioè l'**intersezione** (simbolo $\cap$). Questo strumento servirà molto nel modulo 4.

> [!ESEMPIO] Un sistema di due disequazioni
> $$
> \begin{cases} 2x - 1 > 3 \\ x + 4 \leq 10 \end{cases}
> $$
> La prima dà $2x > 4$, cioè $x > 2$. La seconda dà $x \leq 6$. I numeri che vanno bene per entrambe sono quelli con $2 < x \leq 6$, cioè l'intervallo $(2, 6]$.
>
> ```retta
> titolo: Parte comune di $x > 2$ e $x \leq 6$
> da: 0 8
> int: (2, 6]
> ```
>
> Se le due soluzioni non hanno parti comuni (per esempio $x < 1$ e $x > 3$) il sistema non ha soluzioni.

Una **doppia disequazione** come $-1 < 2x + 3 \leq 7$ è un sistema scritto in forma compatta: puoi operare su tutti e tre i "membri" insieme. Togli $3$: $-4 < 2x \leq 4$; dividi per $2$: $-2 < x \leq 2$.

### Problemi di primo grado

> [!METODO] Dal testo all'equazione
> 1. Scegli l'incognita e scrivi **a parole** che cosa rappresenta (con l'unità di misura).
> 2. Esprimi con l'incognita tutte le altre quantità del problema.
> 3. Traduci la condizione del testo in un'equazione, oppure in una disequazione se il testo dice "al massimo", "almeno", "non più di".
> 4. Risolvi.
> 5. Controlla che il risultato abbia senso (una lunghezza è positiva, un numero di persone è intero) e rispondi proprio alla domanda.

> [!ESEMPIO] Un rettangolo
> In un rettangolo un lato è il triplo dell'altro e il perimetro è $48$ cm. Quanto vale l'area?
>
> Sia $x$ il lato corto (in cm): il lato lungo è $3x$. Il perimetro è la somma dei quattro lati: $2(x + 3x) = 48$, cioè $8x = 48$ e $x = 6$. I lati sono $6$ cm e $18$ cm, l'area è $6 \cdot 18 = 108$ cm².

> [!ESEMPIO] Età
> Di due sorelle, la maggiore ha $3$ anni più della minore. Tra $5$ anni la somma delle loro età sarà $29$. Quanti anni hanno oggi?
>
> Sia $x$ l'età della minore: la maggiore ha $x + 3$ anni. Tra $5$ anni avranno $x + 5$ e $x + 8$ anni, quindi $(x + 5) + (x + 8) = 29$, cioè $2x + 13 = 29$ e $x = 8$. La minore ha $8$ anni, la maggiore $11$.

> [!ESEMPIO] Un problema con una disequazione
> Una palestra chiede $30$ euro di iscrizione più $8$ euro per ogni ingresso. Con $100$ euro, quanti ingressi puoi fare al massimo?
>
> Sia $n$ il numero di ingressi. La spesa non deve superare $100$ euro: $30 + 8n \leq 100$, cioè $8n \leq 70$ e $n \leq 8{,}75$. Poiché $n$ è un numero intero, al massimo **8** ingressi.

> [!TEST] Come può comparire al test
> - Scelta tra quattro valori ("la soluzione di ... è"): spesso fai prima a **sostituire** le opzioni nell'equazione che a risolverla.
> - Risposta numerica: tieni le frazioni esatte fino alla fine, semplificale e ricontrolla il segno; con i decimali senza calcolatrice è facile sbagliare.
> - Vero/falso su "impossibile" e "indeterminata": porta tutto nella forma $ax = -b$ e guarda $a$ e $b$.
> - Intervalli: controlla le parentesi (tonda o quadra) e prova un numero dell'intervallo proposto nella disequazione di partenza.
> - Nei problemi con "al massimo" o "almeno" il risultato va arrotondato nel verso giusto: $n \leq 8{,}75$ dà $8$, non $9$.

## 3.2 Equazioni e disequazioni di secondo grado

### La forma normale

> [!DEF] Equazione di secondo grado
> Un'equazione di **secondo grado** in forma normale è
> $$
> ax^2 + bx + c = 0 \qquad \text{con } a \neq 0
> $$
> I numeri $a$, $b$, $c$ sono i **coefficienti**; $c$ si chiama **termine noto**. Le soluzioni si chiamano anche **radici** e sono al massimo due, indicate con $x_1$ e $x_2$.

Prima di tutto devi portare l'equazione in forma normale (tutto a sinistra, zero a destra, termini simili sommati) e leggere i coefficienti **con il loro segno**. Per esempio:

- $3x^2 - x + 5 = 0$: $a = 3$, $b = -1$, $c = 5$;
- $4 - x^2 = 0$, cioè $-x^2 + 4 = 0$: $a = -1$, $b = 0$, $c = 4$;
- $2x^2 = 7x$, cioè $2x^2 - 7x = 0$: $a = 2$, $b = -7$, $c = 0$.

### Equazioni incomplete

Se $b = 0$ oppure $c = 0$ non serve la formula: bastano due idee semplici.

> [!PROP] Legge di annullamento del prodotto
> Un prodotto vale zero se e solo se almeno uno dei fattori vale zero: $A \cdot B = 0$ equivale a $A = 0$ oppure $B = 0$.

| Tipo | Forma | Come si risolve |
|---|---|---|
| **pura** ($b = 0$) | $ax^2 + c = 0$ | $x^2 = -\frac{c}{a}$: se $-\frac{c}{a} > 0$ ci sono due soluzioni opposte $x = \pm\sqrt{-\frac{c}{a}}$; se è negativo nessuna |
| **spuria** ($c = 0$) | $ax^2 + bx = 0$ | raccogli: $x(ax + b) = 0$, quindi $x = 0$ oppure $x = -\frac{b}{a}$ |
| **monomia** ($b = c = 0$) | $ax^2 = 0$ | $x = 0$ (soluzione doppia) |

Il simbolo $\pm$ si legge "più o meno" e riassume due numeri: $\pm 3$ vuol dire $3$ e $-3$.

> [!ESEMPIO] Tre equazioni incomplete
> - $2x^2 - 18 = 0$: $x^2 = 9$, quindi $x = 3$ oppure $x = -3$.
> - $x^2 + 4 = 0$: $x^2 = -4$, impossibile nei reali (un quadrato non è mai negativo).
> - $3x^2 - 12x = 0$: raccogli $3x$ e ottieni $3x(x - 4) = 0$, quindi $x = 0$ oppure $x = 4$.

> [!TRAPPOLA] Non dividere per $x$
> Da $3x^2 = 12x$ viene voglia di dividere per $x$ e scrivere $3x = 12$, cioè $x = 4$. Così perdi la soluzione $x = 0$: porta tutto a sinistra e raccogli. E da $x^2 = 9$ non scrivere solo $x = 3$: anche $(-3)^2 = 9$.

### La formula risolutiva e il discriminante

> [!PROP] Formula risolutiva
> Le soluzioni di $ax^2 + bx + c = 0$ sono
> $$
> x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
> $$
> Il numero sotto radice si chiama **discriminante** e si indica con la lettera greca $\Delta$ ("delta"): $\Delta = b^2 - 4ac$.
>
> - $\Delta > 0$: due soluzioni reali **distinte**, $x_1 = \frac{-b - \sqrt{\Delta}}{2a}$ e $x_2 = \frac{-b + \sqrt{\Delta}}{2a}$.
> - $\Delta = 0$: due soluzioni **coincidenti**, cioè una sola soluzione (detta doppia): $x_1 = x_2 = -\frac{b}{2a}$.
> - $\Delta < 0$: **nessuna soluzione reale** (la radice quadrata di un numero negativo non è un numero reale).

> [!METODO] Risolvere un'equazione di secondo grado
> 1. Porta l'equazione in forma normale $ax^2 + bx + c = 0$.
> 2. Se è incompleta, usa le scorciatoie viste sopra.
> 3. Scrivi $a$, $b$, $c$ con i loro segni.
> 4. Calcola $\Delta = b^2 - 4ac$ e decidi quante soluzioni ci sono.
> 5. Se $\Delta \geq 0$ applica la formula e semplifica la radice se puoi.
> 6. Controlla con somma e prodotto (li trovi più avanti) oppure sostituendo.

> [!ESEMPIO] $\Delta > 0$: $2x^2 + x - 6 = 0$
> $a = 2$, $b = 1$, $c = -6$. $\Delta = 1^2 - 4 \cdot 2 \cdot (-6) = 1 + 48 = 49$, positivo: due soluzioni.
> $$
> x_{1,2} = \frac{-1 \pm \sqrt{49}}{2 \cdot 2} = \frac{-1 \pm 7}{4}
> $$
> quindi $x_1 = \frac{-8}{4} = -2$ e $x_2 = \frac{6}{4} = \frac{3}{2}$.

> [!ESEMPIO] $\Delta = 0$ e $\Delta < 0$
> $4x^2 - 12x + 9 = 0$: $\Delta = 144 - 4 \cdot 4 \cdot 9 = 144 - 144 = 0$. Una sola soluzione: $x = -\frac{b}{2a} = \frac{12}{8} = \frac{3}{2}$. Infatti il trinomio è il quadrato $(2x - 3)^2$.
>
> $x^2 - 2x + 5 = 0$: $\Delta = 4 - 20 = -16 < 0$. Nessuna soluzione reale.

> [!ESEMPIO] Prima si riordina: $2x(x + 3) - (x + 1)^2 = 2x + 14$
> Svolgi: $2x^2 + 6x - (x^2 + 2x + 1) = 2x + 14$. Il meno davanti alla parentesi cambia il segno di **tutti** i suoi termini: $x^2 + 4x - 1 = 2x + 14$.
>
> Porta tutto a sinistra: $x^2 + 2x - 15 = 0$. $\Delta = 4 + 60 = 64$ e $\sqrt{64} = 8$:
> $$
> x_{1,2} = \frac{-2 \pm 8}{2} \quad\Rightarrow\quad x_1 = -5, \quad x_2 = 3
> $$
> (La freccia $\Rightarrow$ si legge "quindi": da ciò che sta a sinistra segue ciò che sta a destra.)

> [!PROP] Formula ridotta (quando $b$ è pari)
> Se $b$ è un numero pari conviene usare la sua metà $\frac{b}{2}$:
> $$
> x_{1,2} = \frac{-\frac{b}{2} \pm \sqrt{\left(\frac{b}{2}\right)^2 - ac}}{a}
> $$
> Il numero sotto radice, $\left(\frac{b}{2}\right)^2 - ac$, è $\frac{\Delta}{4}$: ha lo stesso segno di $\Delta$ e decide il numero di soluzioni allo stesso modo. I conti sono più piccoli, il risultato è identico.

> [!ESEMPIO] Formula ridotta: $x^2 - 4x - 8 = 0$
> $b = -4$, quindi $\frac{b}{2} = -2$. Sotto radice: $(-2)^2 - 1 \cdot (-8) = 4 + 8 = 12$. Allora
> $$
> x_{1,2} = \frac{2 \pm \sqrt{12}}{1} = 2 \pm 2\sqrt{3}
> $$
> perché $\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt{3}$. Con la formula completa: $\Delta = 16 + 32 = 48$ e $\frac{4 \pm \sqrt{48}}{2} = \frac{4 \pm 4\sqrt{3}}{2} = 2 \pm 2\sqrt{3}$. Stesso risultato, conti più lunghi.

### Da dove viene la formula

La formula si ottiene con il **completamento del quadrato**: si aggiunge a entrambi i membri il numero che trasforma la parte con la $x$ nel quadrato di un binomio. Guarda prima un caso con i numeri, $x^2 + 6x + 5 = 0$:

- porta il termine noto a destra: $x^2 + 6x = -5$;
- prendi metà del coefficiente di $x$, cioè $3$, e il suo quadrato, $9$; aggiungilo a entrambi i membri: $x^2 + 6x + 9 = 4$;
- a sinistra c'è un quadrato: $(x + 3)^2 = 4$;
- quindi $x + 3 = 2$ oppure $x + 3 = -2$, cioè $x = -1$ oppure $x = -5$.

Nel caso generale si fa lo stesso, dopo aver diviso tutto per $a$ (metà del coefficiente di $x$ è $\frac{b}{2a}$, e il suo quadrato è $\frac{b^2}{4a^2}$):
$$
\begin{aligned}
x^2 + \frac{b}{a}x + \frac{c}{a} &= 0 \\
x^2 + \frac{b}{a}x &= -\frac{c}{a} \\
x^2 + \frac{b}{a}x + \frac{b^2}{4a^2} &= \frac{b^2}{4a^2} - \frac{c}{a} \\
\left(x + \frac{b}{2a}\right)^2 &= \frac{b^2 - 4ac}{4a^2}
\end{aligned}
$$
Se il secondo membro è positivo o nullo puoi prendere la radice quadrata di entrambi i membri, con il $\pm$:
$$
x + \frac{b}{2a} = \pm\frac{\sqrt{b^2 - 4ac}}{2a}
$$
Isolando $x$ trovi la formula risolutiva. Si vede anche perché conta il segno di $\Delta = b^2 - 4ac$: il primo membro è un quadrato e non può essere negativo, mentre il secondo membro ha lo stesso segno di $\Delta$ (il denominatore $4a^2$ è positivo). Se $\Delta < 0$ l'uguaglianza è impossibile.

### Scomposizione, somma e prodotto delle radici

> [!PROP] Scomposizione del trinomio di secondo grado
> Se $\Delta \geq 0$ e $x_1$, $x_2$ sono le soluzioni di $ax^2 + bx + c = 0$, allora
> $$
> ax^2 + bx + c = a(x - x_1)(x - x_2)
> $$
> Se $\Delta < 0$ il trinomio non si può scomporre nei reali.
>
> Sviluppando il prodotto si trovano due relazioni utilissime:
> $$
> x_1 + x_2 = -\frac{b}{a} \qquad\qquad x_1 \cdot x_2 = \frac{c}{a}
> $$

Questa regola generalizza il trinomio notevole del modulo 2, $x^2 + sx + p = (x + A)(x + B)$ quando $A + B = s$ e $A \cdot B = p$. Adesso puoi scomporre qualunque trinomio di secondo grado con $\Delta \geq 0$, anche quando i due numeri non si indovinano.

> [!ESEMPIO] Scomporre $2x^2 + x - 6$
> Le radici sono $-2$ e $\frac{3}{2}$ (esempio precedente). Quindi
> $$
> 2x^2 + x - 6 = 2(x + 2)\left(x - \frac{3}{2}\right) = (x + 2)(2x - 3)
> $$
> dove il $2$ è entrato nell'ultima parentesi. Controllo: $(x + 2)(2x - 3) = 2x^2 - 3x + 4x - 6 = 2x^2 + x - 6$.

> [!ESEMPIO] Due numeri con somma e prodotto dati
> Quali numeri hanno somma $7$ e prodotto $10$? Sono le soluzioni di $t^2 - 7t + 10 = 0$ (in questa equazione la somma delle radici è $7$ e il prodotto è $10$). $\Delta = 49 - 40 = 9$, $t = \frac{7 \pm 3}{2}$: i numeri sono $5$ e $2$.

> [!TRAPPOLA] Non dimenticare $a$
> $2x^2 + x - 6$ **non** è $(x + 2)\left(x - \frac{3}{2}\right)$: quel prodotto vale $x^2 + \frac{1}{2}x - 3$, cioè la metà. Il coefficiente $a$ va sempre davanti.

> [!TEST] Controlli rapidi senza calcolatrice
> - "Quali sono le soluzioni di $x^2 - x - 12 = 0$?": cerca due numeri con somma $1$ e prodotto $-12$, cioè $4$ e $-3$. Spesso basta per scegliere l'opzione giusta senza calcolare $\Delta$.
> - "Quante soluzioni reali ha...": ti serve solo il segno di $\Delta$. Se $a$ e $c$ hanno segni opposti, $-4ac$ è positivo e quindi $\Delta > 0$ di sicuro.
> - Con coefficienti interi, se $\Delta$ è un quadrato perfetto ($1, 4, 9, 16, 25, \ldots$) le soluzioni sono frazioni o interi; se $\Delta$ è positivo ma non è un quadrato perfetto compaiono radici, e le opzioni con soli numeri interi sono sbagliate.
> - Domande con un parametro ("per quale $k$ ci sono due soluzioni coincidenti?"): imponi $\Delta = 0$ (oppure $\Delta > 0$, $\Delta < 0$) e risolvi rispetto a $k$.

### Disequazioni di secondo grado con la parabola

Una disequazione di secondo grado si riduce a una delle forme $ax^2 + bx + c > 0$, $\geq 0$, $< 0$, $\leq 0$, con $a \neq 0$. Il modo più sicuro per risolverla è pensare al grafico di $y = ax^2 + bx + c$, che è una **parabola** (la studierai nel modulo 5):

- se $a > 0$ la parabola ha la concavità verso l'alto (è "aperta in su"), se $a < 0$ verso il basso;
- i punti in cui taglia l'asse $x$ sono le soluzioni dell'**equazione associata** $ax^2 + bx + c = 0$;
- il trinomio è **positivo** dove la parabola sta **sopra** l'asse $x$ e **negativo** dove sta **sotto**.

```grafico
titolo: $y = x^2 - 2x - 3$ è negativa tra $-1$ e $3$ (zona rossa) e positiva fuori
x: -3 5
y: -5 3
f: x^2 - 2x - 3 | $y = x^2 - 2x - 3$ | e
area: x^2 - 2x - 3 | 0 | -1 3 | rosso
punto: -1 0 | $-1$ | no
punto: 3 0 | $3$ | ne
```

> [!PROP] Segno di $ax^2 + bx + c$ quando $a > 0$
> Siano $x_1 < x_2$ le soluzioni dell'equazione associata quando $\Delta > 0$, e $x_0 = -\frac{b}{2a}$ la soluzione doppia quando $\Delta = 0$.
>
> | Verso | $\Delta > 0$ | $\Delta = 0$ | $\Delta < 0$ |
> |---|---|---|---|
> | $> 0$ | $x < x_1$ oppure $x > x_2$ | ogni $x \neq x_0$ | ogni $x \in \R$ |
> | $\geq 0$ | $x \leq x_1$ oppure $x \geq x_2$ | ogni $x \in \R$ | ogni $x \in \R$ |
> | $< 0$ | $x_1 < x < x_2$ | nessuna soluzione | nessuna soluzione |
> | $\leq 0$ | $x_1 \leq x \leq x_2$ | solo $x = x_0$ | nessuna soluzione |
>
> In breve, con $\Delta > 0$: verso $>$ → intervalli **esterni**, verso $<$ → intervallo **interno**. Se $a < 0$ moltiplica tutto per $-1$, ribalta il verso e poi usa la tabella.

```grafico
titolo: Parabole con $a > 0$: due, una o nessuna intersezione con l'asse $x$
x: -8.5 8.5
y: -2 5
f: (x+5)^2 - 1
f: x^2
f: (x-5)^2 + 1
testo: -5 4.4 | $\Delta > 0$
testo: 1.3 4.4 | $\Delta = 0$
testo: 5 4.4 | $\Delta < 0$
```

> [!METODO] Risolvere una disequazione di secondo grado
> 1. Porta la disequazione in forma normale: trinomio a sinistra, $0$ a destra.
> 2. Se $a < 0$, moltiplica per $-1$ e ribalta il verso.
> 3. Risolvi l'equazione associata: trova $x_1$ e $x_2$, oppure scopri che $\Delta \leq 0$.
> 4. Disegna a mano una parabola aperta in su che passa per le radici e scegli dove sta sopra l'asse (verso $>$) o sotto (verso $<$).
> 5. Con $\geq$ o $\leq$ includi le radici, con $>$ o $<$ escludile.

> [!ESEMPIO] $x^2 - 2x - 3 > 0$
> Equazione associata: $x^2 - 2x - 3 = 0$, con $\Delta = 4 + 12 = 16$ e $x = \frac{2 \pm 4}{2}$, cioè $x_1 = -1$ e $x_2 = 3$. La parabola è aperta in su (primo grafico qui sopra) e sta sopra l'asse fuori dalle radici. Soluzione: $x < -1$ oppure $x > 3$, cioè $(-\infty, -1) \cup (3, +\infty)$.
>
> ```retta
> titolo: Soluzioni di $x^2 - 2x - 3 > 0$
> da: -4 6
> int: (-inf, -1)
> int: (3, +inf)
> ```

> [!ESEMPIO] Con $a < 0$: $-2x^2 + 5x + 3 \geq 0$
> Moltiplica per $-1$ e ribalta: $2x^2 - 5x - 3 \leq 0$. $\Delta = 25 + 24 = 49$, $x = \frac{5 \pm 7}{4}$: $x_1 = -\frac{1}{2}$ e $x_2 = 3$. Verso $\leq$: intervallo interno, estremi compresi. Soluzione: $-\frac{1}{2} \leq x \leq 3$, cioè $\left[-\frac{1}{2}, 3\right]$.
>
> ```retta
> titolo: Soluzioni di $-2x^2 + 5x + 3 \geq 0$
> da: -2 4
> int: [-1/2, 3]
> tacca: -1/2 | $-1/2$
> ```

> [!ESEMPIO] $\Delta = 0$ e $\Delta < 0$
> $x^2 + 4x + 4 > 0$: il trinomio è il quadrato $(x + 2)^2$, che vale zero solo per $x = -2$ ed è positivo altrove. Soluzione: $x \neq -2$. Con il verso $\leq 0$ invece l'unica soluzione sarebbe $x = -2$.
>
> $x^2 + x + 1 < 0$: $\Delta = 1 - 4 = -3 < 0$ e la parabola sta tutta sopra l'asse. Nessuna soluzione. Con il verso $> 0$ la soluzione sarebbe ogni $x \in \R$.

> [!TRAPPOLA] $x^2 < 9$ non è "$x < \pm 3$"
> $x^2 < 9$ ha soluzioni $-3 < x < 3$ (intervallo interno), mentre $x^2 > 9$ ha soluzioni $x < -3$ oppure $x > 3$. E $x^2 > -4$ è vera per ogni $x$, perché un quadrato non è mai negativo. Altro errore frequente: moltiplicare per $-1$ per rendere $a$ positivo e dimenticare di ribaltare il verso.

> [!TEST] Scartare le opzioni in fretta
> Quando le risposte sono quattro insiemi, prova un numero comodo (spesso $x = 0$) nella disequazione di partenza. Per $x^2 - 2x - 3 > 0$, con $x = 0$ ottieni $-3 > 0$, falso: tutte le opzioni che contengono lo $0$ sono sbagliate. Poi controlla gli estremi: sono inclusi solo se il verso è $\geq$ o $\leq$.

### Problemi di secondo grado

Il metodo è lo stesso dei problemi di primo grado, ma spesso trovi due soluzioni e una delle due può essere **non accettabile** (una lunghezza negativa, un'età negativa, un numero non intero di oggetti).

> [!ESEMPIO] I lati di un rettangolo
> Un rettangolo ha area $60$ cm² e un lato supera l'altro di $7$ cm. Sia $x$ il lato corto: l'altro è $x + 7$ e $x(x + 7) = 60$, cioè $x^2 + 7x - 60 = 0$. $\Delta = 49 + 240 = 289 = 17^2$, quindi $x = \frac{-7 \pm 17}{2}$: $x = 5$ oppure $x = -12$. Una lunghezza non può essere negativa: i lati sono $5$ cm e $12$ cm.

> [!ESEMPIO] Numeri consecutivi
> Il prodotto di due numeri naturali consecutivi è $132$. Con $x$ il più piccolo: $x(x + 1) = 132$, cioè $x^2 + x - 132 = 0$. $\Delta = 1 + 528 = 529 = 23^2$, $x = \frac{-1 \pm 23}{2}$: $x = 11$ oppure $x = -12$. I numeri naturali non sono negativi: i numeri cercati sono $11$ e $12$.

> [!ESEMPIO] Un sasso lanciato verso l'alto
> L'altezza (in metri) di un sasso dopo $t$ secondi è $h = 20t - 5t^2$. Quando si trova a $15$ m? E per quanto tempo sta sopra i $15$ m?
>
> $20t - 5t^2 = 15$ diventa $5t^2 - 20t + 15 = 0$, cioè, dividendo per $5$, $t^2 - 4t + 3 = 0$: $t = 1$ oppure $t = 3$. Il sasso passa a $15$ m salendo dopo $1$ secondo e scendendo dopo $3$ secondi.
>
> Sopra i $15$ m: $20t - 5t^2 > 15$, cioè $-5t^2 + 20t - 15 > 0$; dividendo per $-5$ il verso si ribalta: $t^2 - 4t + 3 < 0$, che vale per $1 < t < 3$. Il sasso resta sopra i $15$ m per $2$ secondi.
>
> ```grafico
> titolo: L'altezza $h = 20t - 5t^2$ in funzione del tempo $t$ e la quota $h = 15$
> x: -0.5 4.5
> y: -2 22
> nomi: t h
> proporzioni: libere
> f: 20x - 5x^2 | da=0 | a=4
> orizzontale: 15 | rosso | tratteggio | $h = 15$
> punto: 1 15 | $t = 1$ | no
> punto: 3 15 | $t = 3$ | ne
> ```

## 3.3 Sistemi di equazioni

### Che cos'è un sistema

> [!DEF] Sistema e soluzione
> Un **sistema** è un gruppo di due o più equazioni che devono valere **contemporaneamente**. Si scrive con una parentesi graffa:
> $$
> \begin{cases} x + y = 5 \\ x - y = 1 \end{cases}
> $$
> Una **soluzione** di un sistema in due incognite è una **coppia ordinata** $(x, y)$ che rende vere tutte le equazioni; con tre incognite è una terna $(x, y, z)$, e così via. Qui la soluzione è $(3, 2)$: $3 + 2 = 5$ e $3 - 2 = 1$. La coppia $(2, 3)$ invece non va bene, perché l'ordine conta.

Un sistema può avere:

- **una sola soluzione** (nei sistemi di grado superiore al primo anche più di una, ma in numero finito): si dice **determinato**;
- **infinite soluzioni**: si dice **indeterminato**;
- **nessuna soluzione**: si dice **impossibile** o **incompatibile**.

Nei primi due casi il sistema è **compatibile**.

> [!DEF] Grado di un sistema
> Il **grado** di un'equazione polinomiale in più incognite è il grado più alto dei suoi termini; in un termine come $x^2y$ si sommano gli esponenti ($2 + 1 = 3$). Il **grado di un sistema** è il **prodotto** dei gradi delle sue equazioni. Per esempio:
> $$
> \begin{cases} x + y = 3 \\ xy = 2 \end{cases} \text{ ha grado } 1 \cdot 2 = 2, \qquad \begin{cases} x^3 - y = 0 \\ x^2 + y^2 = 1 \end{cases} \text{ ha grado } 3 \cdot 2 = 6.
> $$

Un sistema di grado $1$, fatto solo di equazioni di primo grado, si chiama **sistema lineare**. Con due equazioni e due incognite la sua forma normale è
$$
\begin{cases} a_1 x + b_1 y = c_1 \\ a_2 x + b_2 y = c_2 \end{cases}
$$
dove $a_1, b_1, c_1, a_2, b_2, c_2$ sono numeri reali. Se i termini noti $c_1$ e $c_2$ sono entrambi zero il sistema si dice **omogeneo**, e ha sempre almeno la soluzione $(0, 0)$, detta **soluzione nulla**.

### Metodo di sostituzione

> [!METODO] Sostituzione
> 1. Da una delle equazioni ricava un'incognita in funzione dell'altra (scegli quella con coefficiente $1$ o $-1$: niente frazioni).
> 2. Sostituisci l'espressione trovata nell'altra equazione: ottieni un'equazione con una sola incognita.
> 3. Risolvila.
> 4. Metti il valore trovato nell'espressione del punto 1 e calcola l'altra incognita.
> 5. Scrivi la coppia $(x, y)$ e verificala in **entrambe** le equazioni.

> [!ESEMPIO] Sostituzione
> $$
> \begin{cases} 2x + y = 7 \\ 3x - 2y = 7 \end{cases}
> $$
> Dalla prima: $y = 7 - 2x$. Sostituisci nella seconda: $3x - 2(7 - 2x) = 7$, cioè $3x - 14 + 4x = 7$, quindi $7x = 21$ e $x = 3$. Poi $y = 7 - 2 \cdot 3 = 1$.
>
> Soluzione: $(3, 1)$. Verifica: $6 + 1 = 7$ e $9 - 2 = 7$.

### Metodo del confronto

È una variante della sostituzione: ricavi **la stessa** incognita da entrambe le equazioni e poi uguagli le due espressioni.

> [!ESEMPIO] Confronto
> $$
> \begin{cases} y = 2x - 1 \\ y = -x + 5 \end{cases}
> $$
> Le due espressioni di $y$ devono essere uguali: $2x - 1 = -x + 5$, quindi $3x = 6$ e $x = 2$. Poi $y = 2 \cdot 2 - 1 = 3$. Soluzione: $(2, 3)$.

Ogni equazione lineare in $x$ e $y$ rappresenta una **retta** nel piano cartesiano (modulo 5): risolvere il sistema vuol dire trovare il punto in cui le due rette si incontrano.

```grafico
titolo: Le rette $y = 2x - 1$ e $y = -x + 5$ si incontrano nel punto $(2, 3)$
x: -2 6
y: -3 5
f: 2x - 1 | da=-2 | a=0.5 | $y = 2x - 1$ | e
f: 2x - 1 | da=0.5 | a=6
f: -x + 5 | rosso | $y = -x + 5$ | ne
punto: 2 3 | $(2, 3)$ | e
```

### Metodo di riduzione

> [!METODO] Riduzione (o eliminazione, detto anche metodo di Gauss)
> 1. Moltiplica una o entrambe le equazioni per numeri **diversi da zero** in modo che una delle incognite abbia coefficienti opposti (oppure uguali) nelle due equazioni.
> 2. Somma membro a membro le due equazioni (o sottraile, se i coefficienti sono uguali): quell'incognita sparisce.
> 3. Risolvi l'equazione in una incognita che resta.
> 4. Sostituisci il valore trovato in una delle equazioni di partenza e trova l'altra incognita.
>
> L'equazione ottenuta sommando può prendere il posto di una delle due equazioni di partenza: il nuovo sistema è **equivalente**, cioè ha le stesse soluzioni.

> [!ESEMPIO] Coefficienti già opposti
> $$
> \begin{cases} 3x + 2y = 12 \\ 5x - 2y = 4 \end{cases}
> $$
> I coefficienti di $y$ sono $2$ e $-2$: sommando membro a membro ottieni $8x = 16$, quindi $x = 2$. Dalla prima: $6 + 2y = 12$, cioè $y = 3$. Soluzione: $(2, 3)$.

> [!ESEMPIO] Prima si moltiplica
> $$
> \begin{cases} 2x + 3y = 1 \\ 3x + 4y = 2 \end{cases}
> $$
> Moltiplica la prima per $3$ e la seconda per $2$: $6x + 9y = 3$ e $6x + 8y = 4$. Sottrai la seconda dalla prima: $y = -1$. Poi $2x - 3 = 1$, quindi $x = 2$. Soluzione: $(2, -1)$.

> [!TRAPPOLA] Moltiplica tutti i termini
> Quando moltiplichi un'equazione per un numero, moltiplica **anche il termine noto**. E attento ai segni quando sottrai: $(6x + 9y) - (6x + 8y) = y$, ma a destra $3 - 4 = -1$.

> [!NOTA] La regola di Cramer
> Per il sistema $a_1x + b_1y = c_1$, $a_2x + b_2y = c_2$ calcola il numero $D = a_1b_2 - a_2b_1$. Se $D \neq 0$ la soluzione è unica ed è
> $$
> x = \frac{c_1b_2 - c_2b_1}{D} \qquad y = \frac{a_1c_2 - a_2c_1}{D}
> $$
> Nell'esempio precedente: $D = 2 \cdot 4 - 3 \cdot 3 = -1$, $x = \frac{1 \cdot 4 - 2 \cdot 3}{-1} = 2$, $y = \frac{2 \cdot 2 - 3 \cdot 1}{-1} = -1$. È comoda per controllare un risultato. Se $D = 0$ il sistema è impossibile oppure indeterminato.

### Quante soluzioni ha un sistema lineare

Se risolvendo un sistema le incognite spariscono tutte insieme, resta un'uguaglianza tra numeri:

- se è **falsa** (per esempio $0 = 1$) il sistema è **impossibile**;
- se è **vera** ($0 = 0$) il sistema è **indeterminato**: una delle equazioni non aggiunge informazioni.

> [!PROP] Confronto dei coefficienti
> Per il sistema $a_1 x + b_1 y = c_1$, $a_2 x + b_2 y = c_2$, con coefficienti diversi da zero:
>
> | Condizione | Sistema | Rette |
> |---|---|---|
> | $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$ | determinato (una soluzione) | incidenti |
> | $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}$ | impossibile | parallele e distinte |
> | $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$ | indeterminato | coincidenti |

> [!ESEMPIO] Un sistema impossibile
> $$
> \begin{cases} x + 2y = 3 \\ 2x + 4y = 5 \end{cases}
> $$
> Moltiplica la prima per $2$: $2x + 4y = 6$. Ma la seconda dice $2x + 4y = 5$: sottraendo ottieni $0 = 1$, falso. Il sistema è impossibile: le due rette sono parallele. Con i rapporti: $\frac{1}{2} = \frac{2}{4}$, ma $\frac{3}{5}$ è diverso.

```grafico
titolo: Rette parallele: $x + 2y = 3$ e $2x + 4y = 5$ non si incontrano mai
x: -3 5
y: -2 4
f: (3 - x)/2 | da=-3 | a=-1 | $x + 2y = 3$ | ne
f: (3 - x)/2 | da=-1 | a=5
f: (5 - 2x)/4 | rosso
testo: 1.2 0.3 | $2x + 4y = 5$ | bianco
```

> [!ESEMPIO] Un sistema indeterminato
> $$
> \begin{cases} x - y = 2 \\ 3x - 3y = 6 \end{cases}
> $$
> La seconda equazione è la prima moltiplicata per $3$: rappresentano la stessa retta. Va bene ogni coppia con $x - y = 2$: posto $y = t$, dove $t$ è un numero reale qualsiasi (un **parametro**), le soluzioni sono le coppie $(2 + t, t)$. Per esempio $(2, 0)$, $(3, 1)$, $(0, -2)$.

### Sistemi con tre incognite

Con tre equazioni in tre incognite si usano gli stessi metodi: con una sostituzione (o una riduzione) elimini un'incognita e ti riduci a un sistema di due equazioni in due incognite.

> [!ESEMPIO] Un sistema di tre equazioni in tre incognite
> $$
> \begin{cases} x + y + z = 6 \\ x - y = -1 \\ y + 2z = 8 \end{cases}
> $$
> Dalla seconda: $x = y - 1$. Sostituisci nella prima: $(y - 1) + y + z = 6$, cioè $2y + z = 7$. Ora hai un sistema in $y$ e $z$:
> $$
> \begin{cases} 2y + z = 7 \\ y + 2z = 8 \end{cases}
> $$
> Dalla prima $z = 7 - 2y$; nella seconda $y + 14 - 4y = 8$, quindi $-3y = -6$ e $y = 2$. Poi $z = 3$ e $x = 1$. Soluzione: la terna $(1, 2, 3)$.

Anche con tre incognite un sistema può essere impossibile (a un certo punto trovi un'uguaglianza falsa, come $0 = -2$) o indeterminato: in quel caso le soluzioni si scrivono in funzione di un parametro, come nel sistema indeterminato visto sopra.

### Sistemi di grado superiore (cenni)

**Sistema somma e prodotto.** Il sistema
$$
\begin{cases} x + y = s \\ xy = p \end{cases}
$$
ha grado $2$. I numeri $x$ e $y$ sono le soluzioni dell'equazione $t^2 - st + p = 0$ (è la stessa idea di somma e prodotto delle radici). È il sistema che risolvi senza accorgertene quando scomponi $x^2 + sx + p$ cercando due numeri con somma $s$ e prodotto $p$.

> [!ESEMPIO] Somma $5$ e prodotto $6$
> $t^2 - 5t + 6 = 0$ ha soluzioni $t = 2$ e $t = 3$. Il sistema $x + y = 5$, $xy = 6$ ha quindi **due** soluzioni: $(2, 3)$ e $(3, 2)$.

**Un'equazione di secondo grado e una di primo.** Si usa la sostituzione: ricavi un'incognita dall'equazione di primo grado e la sostituisci in quella di secondo grado.

> [!ESEMPIO] Circonferenza e retta
> $$
> \begin{cases} x^2 + y^2 = 10 \\ x - y = 2 \end{cases}
> $$
> Dalla seconda $x = y + 2$. Nella prima: $(y + 2)^2 + y^2 = 10$, cioè $2y^2 + 4y - 6 = 0$ e, dividendo per $2$, $y^2 + 2y - 3 = 0$, con soluzioni $y = 1$ e $y = -3$. Da $x = y + 2$: se $y = 1$ allora $x = 3$; se $y = -3$ allora $x = -1$. Soluzioni: $(3, 1)$ e $(-1, -3)$.

```grafico
titolo: La circonferenza $x^2 + y^2 = 10$ e la retta $y = x - 2$ si incontrano in due punti
x: -5 5
y: -5 5
cerchio: 0 0 sqrt(10)
f: x - 2 | rosso | da=-5 | a=3.5
f: x - 2 | rosso | da=3.5 | a=5 | $y = x - 2$ | no
punto: 3 1 | $(3, 1)$ | ne
punto: -1 -3 | $(-1, -3)$ | no
```

Un sistema lineare ha al massimo una soluzione (se non è indeterminato); un sistema di secondo grado come questo può averne due. Per gradi più alti i conti diventano presto molto complicati.

### Problemi con i sistemi

Quando in un problema ci sono due quantità sconosciute è spesso più naturale usare due incognite e un sistema.

> [!ESEMPIO] Un numero di due cifre
> In un numero di due cifre la somma delle cifre è $9$; scambiando le cifre si ottiene un numero che supera quello di partenza di $27$. Qual è il numero?
>
> Siano $d$ la cifra delle decine e $u$ quella delle unità: il numero vale $10d + u$ e quello con le cifre scambiate vale $10u + d$. Allora
> $$
> \begin{cases} d + u = 9 \\ (10u + d) - (10d + u) = 27 \end{cases}
> $$
> La seconda diventa $9u - 9d = 27$, cioè $u - d = 3$. Sommandola alla prima: $2u = 12$, quindi $u = 6$ e $d = 3$. Il numero è $36$ (infatti $63 - 36 = 27$).

> [!ESEMPIO] Quaderni e penne
> $3$ quaderni e $2$ penne costano $9$ euro; $1$ quaderno e $4$ penne costano $8$ euro. Con $q$ il prezzo di un quaderno e $p$ quello di una penna:
> $$
> \begin{cases} 3q + 2p = 9 \\ q + 4p = 8 \end{cases}
> $$
> Dalla seconda $q = 8 - 4p$; nella prima $24 - 12p + 2p = 9$, cioè $-10p = -15$ e $p = 1{,}5$. Poi $q = 8 - 6 = 2$. Un quaderno costa $2$ euro, una penna $1{,}50$ euro.

> [!TEST] Sistemi al test
> - "Quale coppia è soluzione del sistema?": sostituisci le coppie proposte in **entrambe** le equazioni. I distrattori tipici soddisfano una sola equazione oppure hanno $x$ e $y$ scambiati.
> - "Il sistema è determinato, impossibile o indeterminato?": confronta i rapporti tra i coefficienti, senza risolvere.
> - "Qual è il grado del sistema?": moltiplica i gradi delle equazioni, non sommarli.
> - Con un parametro ("per quale valore di $k$ il sistema è impossibile?"): imponi che i rapporti dei coefficienti di $x$ e di $y$ siano uguali e controlla che quello dei termini noti sia diverso.

## Esercizi

::: esercizio base Un'equazione con le parentesi
Risolvi $5x - 2(x + 3) = x + 4$.
::: soluzione
Svolgi il prodotto: $5x - 2x - 6 = x + 4$, cioè $3x - 6 = x + 4$.

Trasporta: $3x - x = 4 + 6$, quindi $2x = 10$ e $x = 5$.

Verifica: a sinistra $25 - 2 \cdot 8 = 9$, a destra $5 + 4 = 9$.
:::

::: esercizio base Che tipo di equazione?
Stabilisci se ciascuna equazione è determinata, impossibile o indeterminata, e risolvi quella determinata.

1. $3(x - 2) = 3x - 6$
2. $2x + 1 = 2(x + 1)$
3. $4x - 3 = x + 3$
::: soluzione
1. $3x - 6 = 3x - 6$, cioè $0 \cdot x = 0$: **indeterminata** (identità), ogni $x \in \R$ è soluzione.
2. $2x + 1 = 2x + 2$, cioè $0 \cdot x = 1$: **impossibile**.
3. $4x - x = 3 + 3$, cioè $3x = 6$: **determinata**, con soluzione $x = 2$.
:::

::: esercizio base Una disequazione e un sistema di disequazioni
1. Risolvi $3 - 2x \geq x - 9$.
2. Risolvi il sistema formato da $3 - 2x \geq x - 9$ e $2x + 1 > 0$.
::: soluzione
1. Trasporta: $-2x - x \geq -9 - 3$, cioè $-3x \geq -12$. Dividi per $-3$ e ribalta il verso: $x \leq 4$, cioè $(-\infty, 4]$.
2. La seconda disequazione dà $2x > -1$, cioè $x > -\frac{1}{2}$. La parte comune con $x \leq 4$ è $-\frac{1}{2} < x \leq 4$, cioè $\left(-\frac{1}{2}, 4\right]$.

```retta
titolo: Soluzioni del sistema: $-\frac{1}{2} < x \leq 4$
da: -2 6
int: (-1/2, 4]
tacca: -1/2 | $-1/2$
```
:::

::: esercizio base Equazioni di secondo grado
Risolvi:

1. $x^2 - 7x + 10 = 0$
2. $3x^2 - 27 = 0$
3. $5x^2 + 10x = 0$
::: soluzione
1. $\Delta = 49 - 40 = 9$, $x = \frac{7 \pm 3}{2}$: $x = 2$ oppure $x = 5$. Controllo: somma $7$ e prodotto $10$, come $-\frac{b}{a}$ e $\frac{c}{a}$.
2. Equazione pura: $x^2 = 9$, quindi $x = \pm 3$.
3. Equazione spuria: $5x(x + 2) = 0$, quindi $x = 0$ oppure $x = -2$.
:::

::: esercizio base Un sistema lineare
Risolvi per sostituzione:
$$
\begin{cases} x + 3y = 5 \\ 2x - y = 3 \end{cases}
$$
::: soluzione
Dalla prima $x = 5 - 3y$. Nella seconda: $2(5 - 3y) - y = 3$, cioè $10 - 6y - y = 3$, quindi $-7y = -7$ e $y = 1$. Poi $x = 5 - 3 = 2$.

Soluzione: $(2, 1)$. Verifica: $2 + 3 = 5$ e $4 - 1 = 3$.
:::

::: esercizio medio Un'equazione con i denominatori
Risolvi $\frac{2x - 1}{3} - \frac{x + 2}{4} = \frac{x}{6} - 1$.
::: soluzione
Il m.c.m. di $3$, $4$ e $6$ è $12$. Moltiplica ogni termine per $12$, anche il $-1$:
$$
4(2x - 1) - 3(x + 2) = 2x - 12
$$
Svolgi: $8x - 4 - 3x - 6 = 2x - 12$, cioè $5x - 10 = 2x - 12$. Trasporta: $3x = -2$, quindi $x = -\frac{2}{3}$.

Verifica: a sinistra $\frac{-7/3}{3} - \frac{4/3}{4} = -\frac{7}{9} - \frac{3}{9} = -\frac{10}{9}$; a destra $-\frac{1}{9} - 1 = -\frac{10}{9}$.
:::

::: esercizio medio Una disequazione con i denominatori
Risolvi $\frac{x - 2}{3} - \frac{x + 1}{2} \geq \frac{x}{6}$ e scrivi la soluzione come intervallo.
::: soluzione
Moltiplica per $6$ (positivo, il verso resta): $2(x - 2) - 3(x + 1) \geq x$, cioè $2x - 4 - 3x - 3 \geq x$, quindi $-x - 7 \geq x$.

Trasporta: $-2x \geq 7$. Dividi per $-2$ e ribalta: $x \leq -\frac{7}{2}$.

Soluzione: $\left(-\infty, -\frac{7}{2}\right]$.
:::

::: esercizio medio Tre disequazioni di secondo grado
Risolvi:

1. $-x^2 + 4x + 5 > 0$
2. $x^2 - 6x + 9 > 0$
3. $2x^2 + 3 \leq 0$
::: soluzione
1. Moltiplica per $-1$ e ribalta: $x^2 - 4x - 5 < 0$. Le radici di $x^2 - 4x - 5 = 0$ sono $-1$ e $5$ (somma $4$, prodotto $-5$). Verso $<$: intervallo interno, $-1 < x < 5$.
2. $x^2 - 6x + 9 = (x - 3)^2$ è positivo tranne che in $x = 3$, dove vale zero. Soluzione: $x \neq 3$.
3. $2x^2 + 3$ vale sempre almeno $3$ (un quadrato non è negativo), quindi non è mai $\leq 0$: nessuna soluzione.
:::

::: esercizio medio Un gruppo di amici
Un terzo di un gruppo di amici va al cinema, un quarto va a teatro e i restanti $10$ restano a casa. Quante persone ci sono nel gruppo?
::: soluzione
Sia $x$ il numero di persone. Al cinema ne vanno $\frac{x}{3}$, a teatro $\frac{x}{4}$, a casa ne restano $10$, e in tutto sono $x$:
$$
\frac{x}{3} + \frac{x}{4} + 10 = x
$$
Moltiplica per $12$: $4x + 3x + 120 = 12x$, quindi $120 = 5x$ e $x = 24$. Controllo: $8$ al cinema, $6$ a teatro, $10$ a casa, e $8 + 6 + 10 = 24$.
:::

::: esercizio medio Un orto rettangolare
Un orto rettangolare ha perimetro $26$ m e area $40$ m². Quanto misurano i lati?
::: soluzione
Se $x$ e $y$ sono i lati, $2(x + y) = 26$ e $xy = 40$, cioè
$$
\begin{cases} x + y = 13 \\ xy = 40 \end{cases}
$$
È un sistema somma e prodotto: $x$ e $y$ sono le soluzioni di $t^2 - 13t + 40 = 0$. $\Delta = 169 - 160 = 9$, $t = \frac{13 \pm 3}{2}$: $t = 8$ oppure $t = 5$. I lati misurano $5$ m e $8$ m.
:::

::: esercizio medio Un sistema con tre incognite
Risolvi
$$
\begin{cases} x + y - z = 1 \\ 2x + y = 3 \\ x + z = 2 \end{cases}
$$
::: soluzione
Dalla terza $z = 2 - x$. Nella prima: $x + y - (2 - x) = 1$, cioè $2x + y = 3$: è **la stessa** equazione della seconda. Restano solo due equazioni diverse per tre incognite: il sistema è **indeterminato**.

Poni $x = t$ (parametro): dalla seconda $y = 3 - 2t$, dalla terza $z = 2 - t$. Le soluzioni sono le terne $(t, 3 - 2t, 2 - t)$ con $t \in \R$; per esempio con $t = 0$ si ha $(0, 3, 2)$ e con $t = 1$ si ha $(1, 1, 1)$.
:::

::: esercizio test Un'equazione con un parametro
Considera l'equazione $(k - 2)x = k + 1$, dove $k$ è un numero reale.

1. Per quale valore di $k$ è impossibile?
2. Esiste un valore di $k$ per cui è indeterminata?
3. Per $k = 5$, qual è la soluzione?
::: soluzione
1. È impossibile quando il coefficiente di $x$ è zero e il termine noto no: $k - 2 = 0$, cioè $k = 2$. Allora diventa $0 \cdot x = 3$, falsa per ogni $x$.
2. Servirebbero insieme $k - 2 = 0$ e $k + 1 = 0$, cioè $k = 2$ e $k = -1$: non può succedere. Nessun valore di $k$ la rende indeterminata.
3. Con $k = 5$: $3x = 6$, quindi $x = 2$.
:::

::: esercizio test Discriminante con parametro
Per quali valori di $k$ l'equazione $x^2 - 6x + k = 0$ ha due soluzioni reali distinte? Per quale valore ne ha una sola, e qual è?
::: soluzione
$\Delta = 36 - 4k$. Due soluzioni distinte se $36 - 4k > 0$, cioè $k < 9$. Una sola soluzione se $\Delta = 0$, cioè $k = 9$: l'equazione diventa $x^2 - 6x + 9 = (x - 3)^2 = 0$ e la soluzione è $x = 3$. Per $k > 9$ non ci sono soluzioni reali.
:::

::: esercizio test Somma e prodotto
Senza risolvere l'equazione $2x^2 - 7x + 3 = 0$, calcola la somma e il prodotto delle soluzioni. Poi trova le soluzioni e controlla.
::: soluzione
Somma $= -\frac{b}{a} = \frac{7}{2}$, prodotto $= \frac{c}{a} = \frac{3}{2}$.

$\Delta = 49 - 24 = 25$, $x = \frac{7 \pm 5}{4}$: $x_1 = \frac{1}{2}$ e $x_2 = 3$. Controllo: $\frac{1}{2} + 3 = \frac{7}{2}$ e $\frac{1}{2} \cdot 3 = \frac{3}{2}$.
:::

::: esercizio test Un sistema con parametro
Per quale valore di $a$ il sistema
$$
\begin{cases} 2x + ay = 1 \\ 4x + 6y = 5 \end{cases}
$$
è impossibile? Per gli altri valori di $a$ quante soluzioni ha?
::: soluzione
Rapporti tra i coefficienti: $\frac{2}{4} = \frac{1}{2}$ per la $x$, $\frac{a}{6}$ per la $y$, $\frac{1}{5}$ per i termini noti. I primi due sono uguali se $\frac{a}{6} = \frac{1}{2}$, cioè $a = 3$; in quel caso il rapporto dei termini noti, $\frac{1}{5}$, è diverso da $\frac{1}{2}$ e il sistema è **impossibile**. Controllo: con $a = 3$, moltiplicando la prima per $2$ si ha $4x + 6y = 2$, in contrasto con $4x + 6y = 5$.

Per $a \neq 3$ i rapporti dei coefficienti di $x$ e di $y$ sono diversi: il sistema ha **una sola** soluzione.
:::

::: esercizio test Biglietti
Per uno spettacolo sono stati venduti $120$ biglietti, in parte interi da $10$ euro e in parte ridotti da $6$ euro, con un incasso di $1000$ euro. Quanti biglietti di ciascun tipo sono stati venduti?
::: soluzione
Con $i$ il numero di biglietti interi e $r$ quello dei ridotti:
$$
\begin{cases} i + r = 120 \\ 10i + 6r = 1000 \end{cases}
$$
Dalla prima $r = 120 - i$; nella seconda $10i + 720 - 6i = 1000$, cioè $4i = 280$ e $i = 70$. Quindi $r = 50$. Controllo: $700 + 300 = 1000$.
:::

::: esercizio test La somma dei primi numeri naturali
La somma dei numeri naturali da $1$ a $n$ vale $\frac{n(n + 1)}{2}$. Per quale $n$ la somma vale $78$?
::: soluzione
$\frac{n(n + 1)}{2} = 78$ diventa $n^2 + n = 156$, cioè $n^2 + n - 156 = 0$. $\Delta = 1 + 624 = 625 = 25^2$, $n = \frac{-1 \pm 25}{2}$: $n = 12$ oppure $n = -13$. Serve un numero naturale: $n = 12$. Controllo: $\frac{12 \cdot 13}{2} = 78$.
:::

## Quiz di verifica

```quiz
D: Qual è la soluzione di $3(x - 1) = x + 5$?
+ $x = 4$
- $x = 3$
- $x = 2$
- $x = -4$
= $3x - 3 = x + 5$, quindi $2x = 8$ e $x = 4$. Il valore $3$ viene dal dimenticare di moltiplicare il $-1$ per $3$; il valore $2$ da un errore di segno nel trasporto.

D: Risolvi $\frac{x}{2} - \frac{x}{3} = 2$. Quanto vale $x$?
N: 12
= Moltiplica per $6$: $3x - 2x = 12$, cioè $x = 12$.

D: Vero o falso: l'equazione $2(x + 3) = 2x + 6$ è impossibile.
- Vero
+ Falso
= Svolgendo si ottiene $2x + 6 = 2x + 6$, cioè $0 \cdot x = 0$: è un'identità, vera per ogni $x$.

D: L'insieme delle soluzioni di $-3x + 6 < 0$ è
+ $(2, +\infty)$
- $(-\infty, 2)$
- $[2, +\infty)$
- $(-2, +\infty)$
= $-3x < -6$; dividendo per $-3$ il verso si ribalta e si ottiene $x > 2$. Il $2$ è escluso perché il verso è stretto; $(-\infty, 2)$ è l'errore di chi non ribalta il verso.

D: Quanto vale il discriminante di $2x^2 - 3x - 2 = 0$?
N: 25
= $\Delta = b^2 - 4ac = 9 - 4 \cdot 2 \cdot (-2) = 9 + 16 = 25$.

D: Quali numeri sono soluzioni di $x^2 - x - 6 = 0$?
+ $3$
+ $-2$
- $-3$
- $2$
= Servono due numeri con somma $1$ e prodotto $-6$: sono $3$ e $-2$. Con $-3$ e $2$ la somma verrebbe $-1$.

D: La disequazione $x^2 - 4 < 0$ è verificata per
+ $-2 < x < 2$
- $x < -2$ oppure $x > 2$
- $x < 2$
- nessun $x$ reale
= Radici $\pm 2$, parabola aperta in su, verso $<$: intervallo interno. La risposta $x < 2$ dimentica che anche i numeri minori di $-2$ hanno il quadrato maggiore di $4$.

D: Vero o falso: la disequazione $x^2 + 2x + 3 > 0$ è verificata per ogni $x$ reale.
+ Vero
- Falso
= $\Delta = 4 - 12 = -8 < 0$ e $a = 1 > 0$: la parabola sta tutta sopra l'asse $x$.

D: Quanto vale il prodotto delle soluzioni di $3x^2 - 5x - 12 = 0$?
N: -4
= Prodotto $= \frac{c}{a} = \frac{-12}{3} = -4$. Le soluzioni infatti sono $3$ e $-\frac{4}{3}$.

D: Per quale valore di $k$ l'equazione $x^2 + 8x + k = 0$ ha due soluzioni coincidenti?
+ $k = 16$
- $k = 64$
- $k = -16$
- $k = 4$
= Serve $\Delta = 64 - 4k = 0$, cioè $k = 16$: l'equazione diventa $(x + 4)^2 = 0$.

D: Qual è la soluzione del sistema formato da $x + y = 7$ e $x - y = 3$?
+ $(5, 2)$
- $(2, 5)$
- $(4, 3)$
- $(6, 3)$
= Sommando le equazioni $2x = 10$, quindi $x = 5$ e $y = 2$. La coppia $(2, 5)$ ha le coordinate scambiate; $(4, 3)$ soddisfa solo la prima equazione e $(6, 3)$ solo la seconda.

D: Quali di questi sistemi sono impossibili?
+ $x + y = 1$ e $x + y = 3$
+ $x + 2y = 3$ e $2x + 4y = 1$
- $2x - y = 1$ e $4x - 2y = 2$
- $x - y = 0$ e $x + y = 2$
= Nel sistema $x + y = 1$, $x + y = 3$ la stessa somma dovrebbe valere $1$ e $3$. Nel sistema $x + 2y = 3$, $2x + 4y = 1$ i coefficienti sono proporzionali ($\frac{1}{2} = \frac{2}{4}$) ma i termini noti no. Il sistema con $4x - 2y = 2$ è indeterminato (la seconda equazione è il doppio della prima); il sistema $x - y = 0$, $x + y = 2$ ha l'unica soluzione $(1, 1)$.

D: Qual è il grado del sistema formato da $x^2y + y = 1$ e $x - y^2 = 0$?
N: 6
= La prima equazione ha grado $3$ (il termine $x^2y$ ha grado $2 + 1$), la seconda ha grado $2$: il grado del sistema è il prodotto $3 \cdot 2 = 6$.

D: Un numero sommato al suo doppio e diminuito di $5$ dà $16$. Il numero è
+ $7$
- $\frac{11}{3}$
- $21$
- $5$
= $x + 2x - 5 = 16$, quindi $3x = 21$ e $x = 7$. Il valore $\frac{11}{3}$ viene dal sommare $5$ invece di toglierlo; $21$ è $3x$, non $x$.

D: Vero o falso: il sistema formato da $2x + 4y = 6$ e $x + 2y = 3$ ha infinite soluzioni.
+ Vero
- Falso
= La prima equazione è la seconda moltiplicata per $2$: rappresentano la stessa retta e il sistema è indeterminato.

D: Quale disequazione ha come insieme delle soluzioni l'intervallo $[-1, 3]$?
+ $(x + 1)(x - 3) \leq 0$
- $(x + 1)(x - 3) \geq 0$
- $(x - 1)(x + 3) \leq 0$
- $(x + 1)(x - 3) < 0$
= Le radici devono essere $-1$ e $3$, quindi i fattori sono $(x + 1)$ e $(x - 3)$; serve l'intervallo interno (verso $\leq$) con gli estremi inclusi (verso non stretto). $(x - 1)(x + 3) \leq 0$ dà invece $[-3, 1]$.
```

## Checklist

```checklist
So riconoscere se un'equazione di primo grado è determinata, impossibile o indeterminata
So usare i due principi di equivalenza, anche per eliminare i denominatori numerici
So risolvere una disequazione di primo grado e ribaltare il verso quando moltiplico o divido per un numero negativo
So scrivere le soluzioni come disuguaglianza, come intervallo e sulla retta dei numeri
So risolvere un sistema di disequazioni prendendo la parte comune delle soluzioni
So calcolare il discriminante e dire quante soluzioni reali ha un'equazione di secondo grado
So usare la formula risolutiva (anche ridotta) e risolvere al volo le equazioni incomplete
So scomporre un trinomio di secondo grado e usare somma e prodotto delle radici
So risolvere una disequazione di secondo grado pensando alla parabola
So risolvere un sistema lineare per sostituzione, per confronto e per riduzione
So riconoscere un sistema determinato, impossibile o indeterminato e calcolare il grado di un sistema
So risolvere un sistema di secondo grado che contiene un'equazione di primo grado
So tradurre un problema in equazione, disequazione o sistema e scartare le soluzioni non accettabili
```

---

<!-- FILE: ai/moduli/04-fratte-irrazionali-modulo.md -->
> File: `ai/moduli/04-fratte-irrazionali-modulo.md`

---
modulo: 4
titolo: "Fratte, irrazionali e con valore assoluto"
breve: "Equazioni e disequazioni fratte, con le radici e con il valore assoluto, senza perdere di vista le condizioni di esistenza."
ore: 9
unita:
  - "4.1 Equazioni e disequazioni fratte"
  - "4.2 Equazioni e disequazioni irrazionali"
  - "4.3 Equazioni e disequazioni con valore assoluto"
---

## In breve

- Prima di tutto scrivi le **condizioni di esistenza**: ogni denominatore diverso da zero, ogni radicando di una radice di indice pari maggiore o uguale a zero.
- Equazione fratta: porta tutto nella forma $\frac{N(x)}{D(x)} = 0$. Una frazione vale zero quando si annulla il numeratore: risolvi $N(x) = 0$ e scarta le soluzioni che annullano un denominatore.
- Disequazione fratta: **non** moltiplicare per il denominatore, perché il suo segno cambia con $x$. Porta a $\frac{N(x)}{D(x)} > 0$ (o $<$, $\geq$, $\leq$), studia il segno di numeratore e denominatore e usa la tabella dei segni.
- Radice di indice dispari: elevi alla potenza e basta, senza perdere né aggiungere soluzioni.
- Radice di indice pari: una radice quadrata non è mai negativa. Per $\sqrt{f(x)} = g(x)$ servono $f(x) = g(x)^2$ e $g(x) \geq 0$; per le disequazioni ci sono due schemi da sapere.
- Il valore assoluto di un numero è la sua distanza da zero; $|x - a|$ è la distanza tra $x$ e $a$.
- Con $c > 0$: $|A| = c$ significa $A = \pm c$; $|A| < c$ significa $-c < A < c$; $|A| > c$ significa $A < -c$ oppure $A > c$. Se $c < 0$ le risposte sono "mai" (per $=$ e $<$) e "sempre" (per $>$).
- Con più valori assoluti dividi la retta in intervalli secondo il segno di ciascun argomento.

## 4.1 Equazioni e disequazioni fratte

### Condizioni di esistenza

> [!DEF] Equazioni fratte e condizioni di esistenza
> Un'equazione (o disequazione) è **fratta** quando l'incognita compare in almeno un denominatore. Una frazione non ha senso se il denominatore vale zero, perciò prima di tutto si scrivono le **condizioni di esistenza** (in breve **C.E.**): i valori di $x$ che annullano un denominatore vanno esclusi. L'insieme dei valori ammessi si chiama **campo di esistenza** (o dominio).

> [!METODO] Trovare le condizioni di esistenza
> 1. Scomponi ogni denominatore in fattori (raccoglimento, prodotti notevoli, trinomio).
> 2. Poni ogni fattore diverso da zero.
> 3. Un fattore che non si annulla mai, come $x^2 + 1$, non dà condizioni.

> [!ESEMPIO] C.E. di $\frac{3}{x^2 - 9} + \frac{1}{2x} = \frac{x}{x + 3}$
> $x^2 - 9 = (x - 3)(x + 3)$ si annulla per $x = 3$ e per $x = -3$; $2x$ si annulla per $x = 0$; $x + 3$ di nuovo per $x = -3$.
>
> C.E.: $x \neq 0$, $x \neq 3$, $x \neq -3$ (in breve: $x \neq 0$ e $x \neq \pm 3$).

### Equazioni fratte

> [!METODO] Risolvere un'equazione fratta
> 1. Scrivi le condizioni di esistenza.
> 2. Porta tutto al primo membro e fai il denominatore comune (il minimo comune multiplo dei denominatori scomposti): arrivi a $\frac{N(x)}{D(x)} = 0$.
> 3. Una frazione vale zero solo quando vale zero il numeratore: risolvi $N(x) = 0$, cioè l'equazione ridotta **in forma intera** (senza $x$ al denominatore). È come moltiplicare entrambi i membri per $D(x)$, cosa lecita perché con le C.E. $D(x) \neq 0$.
> 4. Confronta le soluzioni con le C.E. e tieni solo quelle **accettabili**.

> [!NOTA] Il denominatore comune
> Il denominatore comune è il minimo comune multiplo dei denominatori e si calcola come con i numeri: scomponi ogni denominatore e prendi **tutti** i fattori che compaiono, ciascuno una sola volta e con l'esponente più alto. Per esempio con i denominatori $x - 2$, $x^2 - 4 = (x - 2)(x + 2)$ e $x^2 + 2x = x(x + 2)$ il denominatore comune è $x(x - 2)(x + 2)$. Poi ogni numeratore va moltiplicato per i fattori che mancano al suo denominatore.
>
> Attento ai **fattori opposti**, come $1 - x = -(x - 1)$ oppure $x - 3x^2 = -x(3x - 1)$: porta fuori il meno e riconoscerai lo stesso fattore. Per esempio in $\frac{2}{x - 1} + \frac{3}{1 - x} = \frac{1}{x}$ (C.E.: $x \neq 0$ e $x \neq 1$) la seconda frazione è $-\frac{3}{x - 1}$, quindi il primo membro vale $-\frac{1}{x - 1}$; moltiplicando per $x(x - 1)$ ottieni $-x = x - 1$, cioè $x = \frac{1}{2}$, accettabile.

> [!ESEMPIO] Due frazioni uguali: $\frac{3}{x - 1} = \frac{2}{x + 1}$
> C.E.: $x \neq 1$ e $x \neq -1$.
>
> Con il denominatore comune $(x - 1)(x + 1)$:
> $$
> \frac{3(x + 1) - 2(x - 1)}{(x - 1)(x + 1)} = 0
> $$
> Il numeratore deve annullarsi: $3x + 3 - 2x + 2 = 0$, cioè $x + 5 = 0$ e $x = -5$. È diverso da $\pm 1$: accettabile.
>
> Controllo: $\frac{3}{-6} = -\frac{1}{2}$ e $\frac{2}{-4} = -\frac{1}{2}$.

> [!ESEMPIO] Una soluzione da scartare: $\frac{x}{x - 1} + \frac{1}{x + 1} = \frac{2}{x^2 - 1}$
> Scomponi: $x^2 - 1 = (x - 1)(x + 1)$. C.E.: $x \neq 1$ e $x \neq -1$.
>
> Con il denominatore comune $(x - 1)(x + 1)$, il numeratore deve annullarsi:
> $$
> x(x + 1) + (x - 1) - 2 = 0 \quad\Rightarrow\quad x^2 + 2x - 3 = 0
> $$
> (la freccia $\Rightarrow$ si legge "quindi"). Le soluzioni sono $x = -3$ e $x = 1$ (somma $-2$, prodotto $-3$). Ma $x = 1$ annulla i denominatori: **non accettabile**. Unica soluzione: $x = -3$.
>
> Controllo: $\frac{-3}{-4} + \frac{1}{-2} = \frac{3}{4} - \frac{2}{4} = \frac{1}{4}$ e $\frac{2}{9 - 1} = \frac{1}{4}$.

> [!ESEMPIO] Tutte le soluzioni scartate: $\frac{x}{x - 2} - \frac{2}{x} = \frac{4}{x^2 - 2x}$
> $x^2 - 2x = x(x - 2)$. C.E.: $x \neq 0$ e $x \neq 2$.
>
> Con il denominatore comune $x(x - 2)$, il numeratore deve annullarsi: $x \cdot x - 2(x - 2) - 4 = 0$, cioè $x^2 - 2x = 0$, quindi $x = 0$ oppure $x = 2$. Sono **entrambe** escluse dalle C.E.: l'equazione è **impossibile**.

> [!TRAPPOLA] Semplificare senza guardare le C.E.
> $\frac{x^2 - 4}{x - 2} = 4$: semplificando $\frac{(x - 2)(x + 2)}{x - 2} = x + 2$ si arriva a $x + 2 = 4$, cioè $x = 2$. Ma $x = 2$ annulla il denominatore di partenza: l'equazione è **impossibile**. Le C.E. si scrivono **prima** di semplificare, e alla fine si controllano sempre.

> [!ESEMPIO] Un problema: lavorare insieme
> Un rubinetto riempie una vasca in $3$ ore, un altro in $6$ ore. Aperti insieme, in quanto tempo la riempiono?
>
> In un'ora il primo riempie $\frac{1}{3}$ di vasca e il secondo $\frac{1}{6}$. Se insieme impiegano $x$ ore, in un'ora ne riempiono $\frac{1}{x}$:
> $$
> \frac{1}{3} + \frac{1}{6} = \frac{1}{x} \qquad (x \neq 0)
> $$
> A sinistra $\frac{2}{6} + \frac{1}{6} = \frac{1}{2}$, quindi $\frac{1}{x} = \frac{1}{2}$ e $x = 2$ ore. La stessa idea funziona per ogni problema in cui due persone (o macchine) fanno insieme un lavoro, ciascuna con la propria velocità.

### Disequazioni fratte e tabella dei segni

Nelle disequazioni fratte **non puoi moltiplicare per il denominatore** come nelle equazioni: il denominatore contiene $x$ e il suo segno cambia a seconda di $x$, quindi non sai se il verso va ribaltato o no. Si ragiona invece sui segni.

> [!PROP] Regola dei segni
> Un quoziente (o un prodotto) è **positivo** se i due fattori hanno lo **stesso segno** ed è **negativo** se hanno segni **opposti**:
> $$
> \frac{+}{+} = +, \qquad \frac{-}{-} = +, \qquad \frac{+}{-} = -, \qquad \frac{-}{+} = -
> $$
> Una frazione vale zero dove si annulla il numeratore e **non esiste** dove si annulla il denominatore.

> [!METODO] Risolvere una disequazione fratta
> 1. Scrivi le C.E.
> 2. Porta tutto al primo membro e fai il denominatore comune: arrivi a $\frac{N(x)}{D(x)} > 0$ (oppure $\geq 0$, $< 0$, $\leq 0$). A destra deve esserci $0$.
> 3. Studia il segno del numeratore: risolvi $N(x) > 0$, oppure $N(x) \geq 0$ se il verso della disequazione è $\geq$ o $\leq$.
> 4. Studia il segno del denominatore: risolvi $D(x) > 0$, sempre con il segno stretto, perché $D(x)$ non può mai essere zero.
> 5. Riporta i risultati in una tabella dei segni e applica la regola dei segni colonna per colonna.
> 6. Scegli gli intervalli con il segno richiesto: positivi per $>$ e $\geq$, negativi per $<$ e $\leq$. Con $\geq$ o $\leq$ aggiungi gli zeri del numeratore; gli zeri del denominatore sono **sempre esclusi**.

> [!ESEMPIO] $\frac{x - 2}{x + 3} \geq 0$
> C.E.: $x \neq -3$.
>
> Numeratore: $x - 2 \geq 0$ per $x \geq 2$. Denominatore: $x + 3 > 0$ per $x > -3$.
>
> Nella tabella dei segni ogni riga è un tratto della retta; le colonne sono il numeratore $x - 2$, il denominatore $x + 3$ e la frazione.
>
> | Tratto | Numeratore | Denominatore | Frazione |
> |---|---|---|---|
> | $x < -3$ | $-$ | $-$ | $+$ |
> | $x = -3$ | $-$ | $0$ | non esiste |
> | $-3 < x < 2$ | $-$ | $+$ | $-$ |
> | $x = 2$ | $0$ | $+$ | $0$ |
> | $x > 2$ | $+$ | $+$ | $+$ |
>
> Il verso è $\geq$: servono i tratti positivi e lo zero del numeratore. Soluzione: $x < -3$ oppure $x \geq 2$, cioè $(-\infty, -3) \cup [2, +\infty)$.
>
> ```retta
> titolo: Soluzioni di $\frac{x - 2}{x + 3} \geq 0$
> da: -6 5
> int: (-inf, -3)
> int: [2, +inf)
> ```

Il grafico della funzione $y = \frac{x - 2}{x + 3}$ conferma la tabella: sta sopra l'asse $x$ a sinistra di $-3$ e a destra di $2$, sotto l'asse tra $-3$ e $2$. In $x = -3$ il grafico si spezza, perché lì la frazione non esiste.

```grafico
titolo: $y = \frac{x - 2}{x + 3}$ è positiva per $x < -3$ e per $x > 2$
x: -10 6
y: -6 6
f: (x - 2)/(x + 3)
verticale: -3 | tratteggio | grigio | $x = -3$
punto: 2 0
```

> [!ESEMPIO] Numeratore di secondo grado: $\frac{x^2 - 4x + 3}{x - 2} < 0$
> C.E.: $x \neq 2$.
>
> Numeratore: $x^2 - 4x + 3 > 0$. Le radici sono $1$ e $3$, quindi è positivo per $x < 1$ oppure $x > 3$ e negativo tra $1$ e $3$. Denominatore: $x - 2 > 0$ per $x > 2$.
>
> | Tratto | Numeratore | Denominatore | Frazione |
> |---|---|---|---|
> | $x < 1$ | $+$ | $-$ | $-$ |
> | $1 < x < 2$ | $-$ | $-$ | $+$ |
> | $2 < x < 3$ | $-$ | $+$ | $-$ |
> | $x > 3$ | $+$ | $+$ | $+$ |
>
> Verso $<$: tratti negativi, estremi esclusi. Soluzione: $x < 1$ oppure $2 < x < 3$.
>
> ```retta
> titolo: Soluzioni di $\frac{x^2 - 4x + 3}{x - 2} < 0$
> da: -1 5
> int: (-inf, 1)
> int: (2, 3)
> ```

> [!ESEMPIO] Prima si porta tutto a sinistra: $\frac{2x + 1}{x - 1} \leq 1$
> C.E.: $x \neq 1$.
>
> $\frac{2x + 1}{x - 1} - 1 \leq 0$ diventa $\frac{2x + 1 - (x - 1)}{x - 1} \leq 0$, cioè $\frac{x + 2}{x - 1} \leq 0$.
>
> Numeratore: $x + 2 \geq 0$ per $x \geq -2$. Denominatore: $x - 1 > 0$ per $x > 1$. La frazione è negativa tra $-2$ e $1$ e vale zero in $x = -2$. Soluzione: $-2 \leq x < 1$, cioè $[-2, 1)$.

> [!TRAPPOLA] Moltiplicare per il denominatore
> Se nell'esempio precedente moltiplichi per $x - 1$ come in un'equazione, trovi $2x + 1 \leq x - 1$, cioè $x \leq -2$: risultato **sbagliato**. Per esempio $x = 0$ è una soluzione vera ($\frac{1}{-1} = -1 \leq 1$), ma con quel metodo la perderesti. Il guaio è che per $x < 1$ il denominatore è negativo e il verso andava ribaltato.

> [!ESEMPIO] Un caso classico: $\frac{1}{x} > 2$
> La tentazione è scrivere $1 > 2x$, cioè $x < \frac{1}{2}$: sbagliato, perché include i numeri negativi, per i quali $\frac{1}{x}$ è negativo e non può essere maggiore di $2$.
>
> Porta tutto a sinistra: $\frac{1}{x} - 2 > 0$, cioè $\frac{1 - 2x}{x} > 0$. Il numeratore è positivo per $x < \frac{1}{2}$, il denominatore per $x > 0$: la frazione è positiva quando sono positivi entrambi, cioè per $0 < x < \frac{1}{2}$ (per $x < 0$ il numeratore è positivo e il denominatore negativo). Soluzione: $0 < x < \frac{1}{2}$.

> [!ESEMPIO] Un numeratore sempre positivo: $\frac{x^2 + 4}{x^2 - x - 6} < 0$
> Il numeratore $x^2 + 4$ è sempre positivo, quindi il segno della frazione è quello del denominatore. Basta risolvere $x^2 - x - 6 < 0$: le radici sono $-2$ e $3$ e serve l'intervallo interno. Soluzione: $-2 < x < 3$ (gli estremi sono esclusi anche perché annullano il denominatore).

> [!NOTA] Anche per i prodotti
> La tabella dei segni funziona allo stesso modo per un prodotto di più fattori. Per esempio in $(x + 1)(x - 2)(x - 5) \geq 0$ studi il segno di ogni fattore, lo riporti in tabella e applichi la regola dei segni colonna per colonna: la soluzione è $-1 \leq x \leq 2$ oppure $x \geq 5$.

> [!TEST] Fratte al test
> - Molte opzioni sbagliate nascono da due errori: includere uno zero del denominatore, oppure moltiplicare per il denominatore. Controlla sempre gli estremi.
> - Per scegliere tra più insiemi, prova un numero comodo di ciascun intervallo nella disequazione **di partenza**.
> - Domande numeriche del tipo "quanti numeri interi soddisfano...": trova l'insieme e conta gli interi, attento agli estremi esclusi. In $[-2, 1)$ ci sono $-2$, $-1$ e $0$, cioè $3$ interi.
> - In un'equazione fratta con quattro opzioni, sostituisci: un valore che annulla un denominatore non è mai soluzione.

## 4.2 Equazioni e disequazioni irrazionali

### Radici di indice pari e dispari

Un'equazione o disequazione è **irrazionale** quando l'incognita compare sotto il segno di radice. Il simbolo $\sqrt[n]{a}$ ("radice $n$-esima di $a$") indica il numero che elevato alla $n$ dà $a$: il numero $n$ è l'**indice**, $a$ è il **radicando**. Quando l'indice non è scritto vale $2$ (radice quadrata).

> [!PROP] Indice pari e indice dispari
> - **Indice dispari** (radice cubica $\sqrt[3]{\ }$, radice quinta, ...): la radice esiste per ogni radicando e ha lo stesso segno del radicando. Esempi: $\sqrt[3]{8} = 2$, $\sqrt[3]{-8} = -2$.
> - **Indice pari** (radice quadrata, radice quarta, ...): la radice esiste solo se il radicando è **maggiore o uguale a zero**, e il risultato è **maggiore o uguale a zero**. Esempi: $\sqrt{9} = 3$ (non $-3$), $\sqrt[4]{16} = 2$, mentre $\sqrt{-4}$ non è un numero reale.

L'idea per risolvere è sempre **togliere la radice elevando alla potenza** giusta. Il punto delicato è che elevare a una potenza pari **non** è un passaggio sicuro:

> [!PROP] Elevare a potenza
> - Se $n$ è **dispari**, $a = b$ equivale a $a^n = b^n$ per tutti i numeri reali $a$ e $b$.
> - Se $n$ è **pari**, $a = b$ equivale a $a^n = b^n$ solo se $a$ e $b$ hanno lo **stesso segno** (sono concordi). Per esempio $-3 \neq 3$, ma $(-3)^2 = 3^2$.
>
> Elevando al quadrato un'equazione possono quindi comparire **soluzioni estranee**, che risolvono l'equazione elevata ma non quella di partenza.

> [!NOTA] Perché il quadrato aggiunge soluzioni
> L'equazione $x = 3$ ha una sola soluzione. Elevando al quadrato ottieni $x^2 = 9$, che ne ha due: $3$ e $-3$. Il quadrato "dimentica" il segno, quindi l'equazione elevata accetta anche i valori che rendono i due membri **opposti** invece che uguali. Per questo, dopo aver elevato al quadrato, bisogna controllare il segno (con una condizione come $g(x) \geq 0$) oppure verificare le soluzioni.

### Equazioni con un radicale

Consideriamo equazioni del tipo $\sqrt[n]{f(x)} = g(x)$, dove $f(x)$ e $g(x)$ sono polinomi.

> [!METODO] Indice dispari
> Eleva entrambi i membri alla $n$: $\sqrt[n]{f(x)} = g(x)$ equivale a $f(x) = g(x)^n$. Non servono condizioni e non si perdono né si aggiungono soluzioni.

> [!ESEMPIO] $\sqrt[3]{x^3 + 5x^2 + 2x} = x + 1$
> Eleva al cubo: $x^3 + 5x^2 + 2x = (x + 1)^3 = x^3 + 3x^2 + 3x + 1$.
>
> Semplifica $x^3$ e porta tutto a sinistra: $2x^2 - x - 1 = 0$. $\Delta = 1 + 8 = 9$, $x = \frac{1 \pm 3}{4}$: $x = 1$ oppure $x = -\frac{1}{2}$. Sono entrambe soluzioni (indice dispari, nessuna condizione).
>
> Controllo con $x = 1$: $\sqrt[3]{1 + 5 + 2} = \sqrt[3]{8} = 2$ e $1 + 1 = 2$.

> [!METODO] Indice pari
> Per $\sqrt{f(x)} = g(x)$ imposta il sistema
> $$
> \begin{cases} f(x) = g(x)^2 \\ g(x) \geq 0 \end{cases}
> $$
> Con un altro indice pari $n$ (radice quarta, sesta, ...) si eleva alla $n$: il sistema diventa $f(x) = g(x)^n$ e $g(x) \geq 0$.
> - $g(x) \geq 0$ perché una radice di indice pari non è mai negativa, quindi non può essere uguale a un numero negativo.
> - La condizione $f(x) \geq 0$ non serve scriverla: se $f(x) = g(x)^2$ (o $g(x)^n$ con $n$ pari), allora $f(x)$ è una potenza pari e non è negativa.
>
> In alternativa puoi elevare al quadrato (o alla $n$) senza condizioni e poi **verificare** ogni soluzione sostituendola nell'equazione di partenza.

> [!ESEMPIO] Una soluzione estranea: $\sqrt{x + 7} = x + 1$
> Condizione: $x + 1 \geq 0$, cioè $x \geq -1$.
>
> Eleva al quadrato: $x + 7 = x^2 + 2x + 1$, cioè $x^2 + x - 6 = 0$, con soluzioni $x = 2$ e $x = -3$.
>
> $x = -3$ non rispetta $x \geq -1$ e si scarta: infatti $\sqrt{-3 + 7} = 2$, mentre $-3 + 1 = -2$. Unica soluzione: $x = 2$ (controllo: $\sqrt{9} = 3 = 2 + 1$).

Il grafico mostra da dove viene la soluzione estranea. Elevando al quadrato risolvi insieme $\sqrt{x + 7} = x + 1$ e $-\sqrt{x + 7} = x + 1$: la soluzione $x = -3$ appartiene alla seconda equazione, non alla nostra.

```grafico
titolo: La retta rossa $y = x + 1$ incontra $y = \sqrt{x + 7}$ (curva piena) solo in $x = 2$; in $x = -3$ incontra $y = -\sqrt{x + 7}$ (tratteggiata)
x: -8 5
y: -4 5
f: sqrt(x + 7)
f: -sqrt(x + 7) | grigio | tratteggio
f: x + 1 | rosso
punto: 2 3 | $(2, 3)$ | se
punto: -3 -2 | vuoto | $(-3, -2)$ | e
```

> [!ESEMPIO] Due soluzioni accettabili e un caso impossibile
> $\sqrt{x^2 - 16} = 3$: il secondo membro è positivo, quindi basta elevare al quadrato. $x^2 - 16 = 9$, $x^2 = 25$, $x = \pm 5$. Sono accettabili entrambe: $\sqrt{25 - 16} = 3$.
>
> $\sqrt{x^2 + 1} = -2$: una radice quadrata non può valere un numero negativo. **Impossibile**, senza fare conti.

> [!TRAPPOLA] Il quadrato del binomio
> $(x + 1)^2 = x^2 + 2x + 1$, non $x^2 + 1$. Dimenticare il doppio prodotto è l'errore più frequente quando si eleva al quadrato un secondo membro come $x + 1$ o $3 - x$.

### Equazioni con due o più radicali quadratici

Con più radici quadrate, per esempio $\sqrt{f(x)} \pm \sqrt{g(x)} = h(x)$ oppure $\sqrt{f(x)} \pm \sqrt{g(x)} = \sqrt{h(x)}$, si eleva al quadrato più volte finché le radici spariscono. Scrivere tutte le condizioni diventa lungo, perciò di solito si procede così:

> [!METODO] Più radicali quadratici
> 1. Scrivi le C.E.: tutti i radicandi maggiori o uguali a zero.
> 2. Isola una radice da un lato, così il quadrato è più semplice.
> 3. Eleva al quadrato; se resta una radice, isolala di nuovo ed eleva ancora.
> 4. Risolvi l'equazione senza radici che ottieni.
> 5. **Verifica** ogni soluzione sostituendola nell'equazione di partenza e tieni solo quelle che la rendono vera.

> [!ESEMPIO] $\sqrt{2x + 1} + \sqrt{x} = 1$
> C.E.: $x \geq 0$ (con $x \geq 0$ anche $2x + 1$ è positivo).
>
> Isola la prima radice: $\sqrt{2x + 1} = 1 - \sqrt{x}$. Eleva al quadrato:
> $$
> 2x + 1 = 1 - 2\sqrt{x} + x \quad\Rightarrow\quad x = -2\sqrt{x}
> $$
> Eleva ancora al quadrato: $x^2 = 4x$, cioè $x(x - 4) = 0$: $x = 0$ oppure $x = 4$.
>
> Verifica: con $x = 0$ ottieni $\sqrt{1} + \sqrt{0} = 1$, vero. Con $x = 4$ ottieni $\sqrt{9} + \sqrt{4} = 5 \neq 1$: soluzione estranea. Unica soluzione: $x = 0$.
>
> Si poteva anche ragionare così: in $x = -2\sqrt{x}$ il primo membro è $\geq 0$ e il secondo è $\leq 0$, quindi devono essere entrambi zero.

### Disequazioni con un radicale

> [!METODO] Indice dispari
> Eleva entrambi i membri alla $n$ senza condizioni: il verso resta lo stesso, perché con $n$ dispari $a < b$ equivale a $a^n < b^n$.

> [!ESEMPIO] $\sqrt[3]{1 - 2x} \geq -1$
> Eleva al cubo: $1 - 2x \geq -1$, cioè $-2x \geq -2$. Dividi per $-2$ e ribalta: $x \leq 1$.

Con l'indice pari bisogna distinguere se la radice deve essere **minore** o **maggiore** di $g(x)$. Gli schemi qui sotto sono scritti per la radice quadrata; con un altro indice pari $n$ sono identici, con $g(x)^n$ al posto di $g(x)^2$.

> [!PROP] Radice quadrata minore di $g(x)$
> $$
> \sqrt{f(x)} < g(x) \quad\Longleftrightarrow\quad \begin{cases} f(x) \geq 0 \\ g(x) > 0 \\ f(x) < g(x)^2 \end{cases}
> $$
> La doppia freccia $\Longleftrightarrow$ si legge "equivale a": a sinistra e a destra ci sono le stesse soluzioni.
>
> - $f(x) \geq 0$: la radice deve esistere;
> - $g(x) > 0$: la radice è positiva o nulla, quindi può essere minore di $g(x)$ solo se $g(x)$ è positivo;
> - $f(x) < g(x)^2$: ora i due membri sono positivi o nulli e si può elevare al quadrato senza cambiare il verso.
>
> Con $\leq$ al posto di $<$ il sistema diventa $f(x) \geq 0$, $g(x) \geq 0$, $f(x) \leq g(x)^2$.

> [!PROP] Radice quadrata maggiore di $g(x)$
> $$
> \sqrt{f(x)} > g(x) \quad\Longleftrightarrow\quad \begin{cases} g(x) < 0 \\ f(x) \geq 0 \end{cases} \;\cup\; \begin{cases} g(x) \geq 0 \\ f(x) > g(x)^2 \end{cases}
> $$
> - Primo sistema: se $g(x)$ è negativo, la disequazione è vera ovunque la radice esista.
> - Secondo sistema: se $g(x) \geq 0$ si eleva al quadrato; la condizione $f(x) \geq 0$ è già contenuta in $f(x) > g(x)^2$.
> - Le soluzioni sono l'**unione** delle soluzioni dei due sistemi.
>
> Con $\geq$ al posto di $>$ nel secondo sistema si scrive $f(x) \geq g(x)^2$.

> [!ESEMPIO] $\sqrt{x + 2} < x$
> $$
> \begin{cases} x + 2 \geq 0 \\ x > 0 \\ x + 2 < x^2 \end{cases}
> $$
> La prima dà $x \geq -2$, la seconda $x > 0$. La terza è $x^2 - x - 2 > 0$: radici $-1$ e $2$, intervalli esterni, cioè $x < -1$ oppure $x > 2$. La parte comune alle tre è $x > 2$.

> [!ESEMPIO] $\sqrt{x + 2} > x$
> Primo sistema: $x < 0$ e $x + 2 \geq 0$, cioè $-2 \leq x < 0$.
>
> Secondo sistema: $x \geq 0$ e $x + 2 > x^2$, cioè $x^2 - x - 2 < 0$, che vale per $-1 < x < 2$; insieme a $x \geq 0$ dà $0 \leq x < 2$.
>
> Unione: $-2 \leq x < 2$, cioè $[-2, 2)$.

Il grafico mette insieme i due esempi: la radice sta **sopra** la retta $y = x$ per $-2 \leq x < 2$ e **sotto** per $x > 2$; in $x = 2$ le due curve si incontrano ($\sqrt{4} = 2$), e a sinistra di $-2$ la radice non esiste.

```grafico
titolo: $y = \sqrt{x + 2}$ sta sopra la retta rossa $y = x$ per $-2 \leq x < 2$ e sotto per $x > 2$
x: -3 5
y: -3 4
f: sqrt(x + 2) | da=-2 | a=-0.5 | $y = \sqrt{x + 2}$ | no
f: sqrt(x + 2) | da=-0.5 | a=5
f: x | rosso | da=-3 | a=-1 | $y = x$ | se
f: x | rosso | da=-1 | a=5
punto: 2 2 | $(2, 2)$ | se
punto: -2 0 | $-2$ | no
```

> [!ESEMPIO] La radice a destra: $x - 1 \leq \sqrt{x + 5}$
> Leggi la disequazione da destra a sinistra: è la stessa cosa di $\sqrt{x + 5} \geq x - 1$, cioè una radice "maggiore o uguale" di $g(x) = x - 1$.
>
> Primo sistema: $x - 1 < 0$ e $x + 5 \geq 0$, cioè $-5 \leq x < 1$.
>
> Secondo sistema: $x - 1 \geq 0$ e $x + 5 \geq (x - 1)^2 = x^2 - 2x + 1$, cioè $x \geq 1$ e $x^2 - 3x - 4 \leq 0$ (radici $-1$ e $4$), quindi $1 \leq x \leq 4$.
>
> Unione: $-5 \leq x \leq 4$.

> [!NOTA] Casi con un numero al secondo membro
> Quando $g(x)$ è un numero $c$ bastano pochi ragionamenti:
> - $\sqrt{f(x)} < c$ con $c \leq 0$: **nessuna** soluzione. Con $c > 0$: $0 \leq f(x) < c^2$.
> - $\sqrt{f(x)} > c$ con $c < 0$: vale per **tutti gli $x$ del campo di esistenza**, cioè dove $f(x) \geq 0$. Con $c \geq 0$: $f(x) > c^2$.
>
> Esempio: $\sqrt{3 - x} \leq 2$ equivale a $0 \leq 3 - x \leq 4$, cioè $-1 \leq x \leq 3$.

> [!TRAPPOLA] "Maggiore di un numero negativo" non vuol dire "per ogni $x$"
> $\sqrt{x - 1} > -3$ è vera per tutti gli $x$ **per cui la radice esiste**: la soluzione è $x \geq 1$, non tutto $\R$. Per $x = 0$, per esempio, $\sqrt{-1}$ non esiste e la disequazione non ha senso.

### Disequazioni con due radicali quadratici

Qui non c'è uno schema unico: si usano gli stessi ragionamenti, con attenzione. Due idee aiutano:

- se entrambi i membri sono **maggiori o uguali a zero** si può elevare al quadrato senza cambiare il verso;
- le condizioni di esistenza di **tutte** le radici vanno messe a sistema con il resto.

> [!ESEMPIO] $\sqrt{x + 1} < \sqrt{5 - x}$
> C.E.: $x + 1 \geq 0$ e $5 - x \geq 0$, cioè $-1 \leq x \leq 5$. I due membri sono positivi o nulli: eleva al quadrato, $x + 1 < 5 - x$, cioè $x < 2$. Insieme alle C.E.: $-1 \leq x < 2$.

> [!ESEMPIO] $\sqrt{x + 3} + \sqrt{x - 2} > 5$
> C.E.: $x \geq -3$ e $x \geq 2$, cioè $x \geq 2$. Entrambi i membri sono positivi: eleva al quadrato.
> $$
> x + 3 + x - 2 + 2\sqrt{(x + 3)(x - 2)} > 25 \quad\Rightarrow\quad \sqrt{(x + 3)(x - 2)} > 12 - x
> $$
> (nel secondo passaggio hai portato $2x + 1$ a destra e diviso per $2$). È una disequazione "radice maggiore di $g(x)$" con $g(x) = 12 - x$:
> - primo sistema: $12 - x < 0$ e $(x + 3)(x - 2) \geq 0$, cioè $x > 12$;
> - secondo sistema: $12 - x \geq 0$ e $x^2 + x - 6 > 144 - 24x + x^2$, cioè $x \leq 12$ e $25x > 150$, quindi $6 < x \leq 12$.
>
> Unione: $x > 6$. Tutti questi valori rispettano le C.E. ($x \geq 2$), quindi la soluzione è $x > 6$. Controllo: con $x = 6$ si ha $\sqrt{9} + \sqrt{4} = 5$, proprio il valore di confine.

> [!TEST] Irrazionali al test
> - Guarda subito i segni: $\sqrt{\ldots} = -2$ e $\sqrt{\ldots} < -1$ non hanno soluzioni; $\sqrt{\ldots} > -1$ vale in tutto il campo di esistenza.
> - Nelle domande a scelta **sostituisci** le soluzioni proposte nell'equazione di partenza: è il modo più veloce per smascherare le soluzioni estranee.
> - "Quante soluzioni ha...": risolvi l'equazione elevata al quadrato e poi scarta le soluzioni con $g(x) < 0$.
> - Con l'indice dispari (radice cubica) nessuna condizione: una radice cubica può essere negativa.

## 4.3 Equazioni e disequazioni con valore assoluto

### Il valore assoluto

> [!DEF] Valore assoluto (o modulo)
> Il **valore assoluto** (o **modulo**) di un'espressione $A$, scritto $|A|$, è
> $$
> |A| = \begin{cases} A & \text{se } A \geq 0 \\ -A & \text{se } A < 0 \end{cases}
> $$
> Se $A$ è positivo o zero lo lascia com'è; se $A$ è negativo gli cambia il segno. Il risultato non è mai negativo.

Esempi con i numeri: $|7| = 7$, $|-7| = 7$, $|0| = 0$, $|3 - 5| = |-2| = 2$. Con un'espressione il risultato dipende da $x$:
$$
|x - 2| = \begin{cases} x - 2 & \text{se } x \geq 2 \\ 2 - x & \text{se } x < 2 \end{cases}
$$

> [!PROP] Proprietà utili
> - $|A| \geq 0$ sempre, e $|A| = 0$ solo se $A = 0$.
> - $|-A| = |A|$ e $|A \cdot B| = |A| \cdot |B|$.
> - $\sqrt{A^2} = |A|$: per esempio $\sqrt{(-3)^2} = \sqrt{9} = 3$.
> - $|x - a|$ è la **distanza** tra i punti $x$ e $a$ sulla retta dei numeri. In particolare $|x|$ è la distanza di $x$ da $0$.

> [!TRAPPOLA] Errori da evitare
> - $|a + b|$ in generale **non** è $|a| + |b|$: $|3 + (-5)| = 2$, mentre $|3| + |-5| = 8$.
> - $|-x|$ non è sempre $x$: se $x = -4$, allora $|-x| = |4| = 4$, che è $-x$.
> - Il valore assoluto non "toglie i meno" dentro un'espressione: $|x - 3|$ non è $x + 3$.

```grafico
titolo: $y = \lvert x - 1 \rvert$ e la retta $y = 2$: si incontrano in $x = -1$ e in $x = 3$
x: -3 5
y: -1 5
f: abs(x - 1)
orizzontale: 2 | rosso | tratteggio | $y = 2$
punto: -1 2 | $x = -1$ | so
punto: 3 2 | $x = 3$ | se
```

### Equazioni con valore assoluto

> [!PROP] $|A(x)| = c$ con $c$ numero
> - $c < 0$: **nessuna soluzione**, perché un valore assoluto non è mai negativo.
> - $c = 0$: equivale a $A(x) = 0$.
> - $c > 0$: equivale a $A(x) = c$ **oppure** $A(x) = -c$.
>
> L'ultimo caso viene dalla definizione. Si risolvono i due sistemi
> $$
> \begin{cases} A(x) \geq 0 \\ A(x) = c \end{cases} \qquad \text{oppure} \qquad \begin{cases} A(x) < 0 \\ -A(x) = c \end{cases}
> $$
> e si uniscono le soluzioni. Con $c > 0$ le condizioni sul segno sono vere da sole, e restano $A(x) = c$ e $A(x) = -c$.

> [!ESEMPIO] $|2x - 3| = 5$
> $2x - 3 = 5$ dà $x = 4$; $2x - 3 = -5$ dà $x = -1$. Soluzioni: $x = 4$ e $x = -1$.
>
> Controllo: $|8 - 3| = 5$ e $|-2 - 3| = |-5| = 5$.

> [!ESEMPIO] Con la distanza: $|x + 1| = 3$
> $|x + 1| = |x - (-1)|$ è la distanza di $x$ da $-1$. I punti a distanza $3$ da $-1$ sono $-1 + 3 = 2$ e $-1 - 3 = -4$. Soluzioni: $x = 2$ e $x = -4$, lo stesso risultato di $x + 1 = \pm 3$.

> [!ESEMPIO] Quattro soluzioni: $|x^2 - 5| = 4$
> $x^2 - 5 = 4$ dà $x^2 = 9$, cioè $x = \pm 3$. $x^2 - 5 = -4$ dà $x^2 = 1$, cioè $x = \pm 1$. Soluzioni: $-3$, $-1$, $1$, $3$.

> [!ESEMPIO] Casi immediati
> $|x + 4| = -2$ è impossibile. $|3x - 6| = 0$ equivale a $3x - 6 = 0$, cioè $x = 2$.

Se anche l'altro membro contiene $x$, come in $|A(x)| = B(x)$, si usa direttamente la definizione: due sistemi, uno per $A(x) \geq 0$ e uno per $A(x) < 0$.

> [!ESEMPIO] $|x - 2| = 2x - 1$
> Primo caso, $x - 2 \geq 0$, cioè $x \geq 2$: l'equazione diventa $x - 2 = 2x - 1$, cioè $x = -1$. Ma $-1$ non è $\geq 2$: si scarta.
>
> Secondo caso, $x < 2$: l'equazione diventa $-(x - 2) = 2x - 1$, cioè $-x + 2 = 2x - 1$, $3x = 3$ e $x = 1$. Va bene, perché $1 < 2$.
>
> Soluzione: $x = 1$. Controllo: $|1 - 2| = 1$ e $2 \cdot 1 - 1 = 1$.

> [!NOTA] Due valori assoluti uguali
> $|A(x)| = |B(x)|$ equivale a $A(x) = B(x)$ oppure $A(x) = -B(x)$: due numeri con lo stesso valore assoluto sono uguali oppure opposti. Per esempio in $|x - 1| = |2x + 4|$, da $x - 1 = 2x + 4$ viene $x = -5$ e da $x - 1 = -2x - 4$ viene $x = -1$.

### Disequazioni con valore assoluto

> [!PROP] Disequazioni con $c$ numero
> Con $c > 0$:
> $$
> |A(x)| < c \iff -c < A(x) < c \qquad\qquad |A(x)| > c \iff A(x) < -c \;\text{ oppure }\; A(x) > c
> $$
> Con $\leq$ e $\geq$ gli estremi si includono. Il secondo caso si ottiene anche dalla definizione, unendo i sistemi $A(x) \geq 0$, $A(x) > c$ e $A(x) < 0$, $-A(x) > c$.
>
> Pensando alla distanza: $|x - a| < r$ sono i punti che distano da $a$ **meno** di $r$, cioè l'intervallo $(a - r, a + r)$; $|x - a| > r$ sono i punti **più lontani** di $r$.

La tabella riassume tutti i casi, secondo il segno del numero $c$ (colonne: $c > 0$, $c = 0$, $c < 0$).

| Disequazione | Numero positivo | Numero nullo | Numero negativo |
|---|---|---|---|
| $|A| < c$ | $-c < A < c$ | nessuna soluzione | nessuna soluzione |
| $|A| \leq c$ | $-c \leq A \leq c$ | $A = 0$ | nessuna soluzione |
| $|A| > c$ | $A < -c$ oppure $A > c$ | $A \neq 0$ | ogni $x$ |
| $|A| \geq c$ | $A \leq -c$ oppure $A \geq c$ | ogni $x$ | ogni $x$ |

(Qui "ogni $x$" vuol dire ogni $x$ per cui $A$ esiste.)

> [!TRAPPOLA] Come si scrive la soluzione di $|x| > 3$
> La soluzione è $x < -3$ oppure $x > 3$: due pezzi separati, uniti da "oppure" (come intervalli, $(-\infty, -3) \cup (3, +\infty)$). Scriverla come $-3 > x > 3$ non ha senso, perché nessun numero è insieme minore di $-3$ e maggiore di $3$. Invece la soluzione di $|x| < 3$ si scrive giustamente come $-3 < x < 3$: lì i numeri devono stare **tra** $-3$ e $3$.

> [!ESEMPIO] $|x - 1| < 2$
> $-2 < x - 1 < 2$; aggiungi $1$ a tutti i membri: $-1 < x < 3$. Sono i punti che distano da $1$ meno di $2$: nel grafico qui sopra, dove la "V" di $y = |x - 1|$ sta sotto la retta $y = 2$.

> [!ESEMPIO] $|2x + 1| \geq 3$
> $2x + 1 \leq -3$ oppure $2x + 1 \geq 3$, cioè $x \leq -2$ oppure $x \geq 1$.
>
> ```retta
> titolo: Soluzioni di $\lvert 2x + 1 \rvert \geq 3$
> da: -5 4
> int: (-inf, -2]
> int: [1, +inf)
> ```

> [!ESEMPIO] Con un'espressione di secondo grado: $|x^2 - 5| \leq 4$
> $-4 \leq x^2 - 5 \leq 4$ e, aggiungendo $5$, $1 \leq x^2 \leq 9$. Sono due condizioni insieme:
> - $x^2 \geq 1$: $x \leq -1$ oppure $x \geq 1$;
> - $x^2 \leq 9$: $-3 \leq x \leq 3$.
>
> Parte comune: $-3 \leq x \leq -1$ oppure $1 \leq x \leq 3$.
>
> ```retta
> titolo: Soluzioni di $\lvert x^2 - 5 \rvert \leq 4$
> da: -5 5
> int: [-3, -1]
> int: [1, 3]
> ```

> [!ESEMPIO] Casi immediati
> $|x - 4| > -1$: vera per ogni $x \in \R$. $|x - 4| < 0$: nessuna soluzione. $|x - 4| \leq 0$: solo $x = 4$.

> [!ESEMPIO] Una tolleranza
> Un pezzo meccanico deve essere lungo $50$ mm con una tolleranza di $0{,}2$ mm: la lunghezza $x$ va bene se $|x - 50| \leq 0{,}2$, cioè $49{,}8 \leq x \leq 50{,}2$. Il valore assoluto è il modo naturale per scrivere "vicino a un valore, entro un certo margine".

### Più valori assoluti

> [!METODO] Studio dei segni
> 1. Trova dove si annulla l'argomento di ciascun valore assoluto.
> 2. Questi punti dividono la retta in intervalli; in ognuno ogni argomento ha segno costante.
> 3. In ogni intervallo sostituisci $|A|$ con $A$ (se lì $A \geq 0$) oppure con $-A$ (se $A < 0$).
> 4. Risolvi in ogni intervallo e tieni solo le soluzioni che cadono **dentro** quell'intervallo (è un sistema: intervallo più equazione o disequazione).
> 5. Unisci i risultati.

> [!ESEMPIO] $|x| + |x - 4| = 6$
> Gli argomenti si annullano in $0$ e in $4$.
> - $x < 0$: $-x - (x - 4) = 6$, cioè $-2x + 4 = 6$ e $x = -1$. È $< 0$: accettabile.
> - $0 \leq x < 4$: $x - (x - 4) = 6$, cioè $4 = 6$: falso, nessuna soluzione.
> - $x \geq 4$: $x + x - 4 = 6$, cioè $x = 5$. È $\geq 4$: accettabile.
>
> Soluzioni: $x = -1$ e $x = 5$.

> [!ESEMPIO] $|x + 2| + |x - 1| < 5$
> Gli argomenti si annullano in $-2$ e in $1$.
>
> Nella tabella: il segno del primo argomento, $x + 2$, quello del secondo, $x - 1$, e l'espressione $|x + 2| + |x - 1|$ scritta senza valori assoluti in ogni tratto.
>
> | Tratto | Primo argomento | Secondo argomento | Espressione |
> |---|---|---|---|
> | $x < -2$ | $-$ | $-$ | $-(x + 2) - (x - 1) = -2x - 1$ |
> | $-2 \leq x < 1$ | $+$ | $-$ | $(x + 2) - (x - 1) = 3$ |
> | $x \geq 1$ | $+$ | $+$ | $(x + 2) + (x - 1) = 2x + 1$ |
>
> - $x < -2$: $-2x - 1 < 5$ dà $x > -3$; insieme a $x < -2$: $-3 < x < -2$.
> - $-2 \leq x < 1$: $3 < 5$ è sempre vero, quindi va bene tutto l'intervallo.
> - $x \geq 1$: $2x + 1 < 5$ dà $x < 2$; insieme a $x \geq 1$: $1 \leq x < 2$.
>
> Unione: $-3 < x < 2$.

```grafico
titolo: $y = \lvert x + 2 \rvert + \lvert x - 1 \rvert$ sta sotto la retta $y = 5$ per $-3 < x < 2$
x: -5 4
y: -1 8
f: abs(x + 2) + abs(x - 1)
orizzontale: 5 | rosso | tratteggio | $y = 5$
punto: -3 5 | vuoto | $-3$ | so
punto: 2 5 | vuoto | $2$ | se
```

> [!TEST] Valore assoluto al test
> - $|x - a| < r$ e $|x - a| > r$ si risolvono a occhio pensando alla distanza da $a$.
> - Vero/falso tipici: "$|a + b| = |a| + |b|$ per ogni $a$ e $b$" (falso), "$\sqrt{a^2} = a$ per ogni $a$" (falso, è $|a|$), "$|x| = -3$ ha soluzioni" (falso).
> - Con due valori assoluti, prima dei conti pensa alle distanze: $|x| + |x - 2|$ è la somma delle distanze di $x$ da $0$ e da $2$. Non è mai minore di $2$ e vale esattamente $2$ per tutti gli $x$ tra $0$ e $2$.
> - "Quanti interi soddisfano...": trova l'intervallo e conta, controllando se gli estremi sono inclusi.

## Esercizi

::: esercizio base Un'equazione fratta
Risolvi $\frac{2}{x} + \frac{1}{x - 2} = 0$.
::: soluzione
C.E.: $x \neq 0$ e $x \neq 2$.

Con il denominatore comune $x(x - 2)$, il numeratore deve annullarsi: $2(x - 2) + x = 0$, cioè $3x - 4 = 0$ e $x = \frac{4}{3}$. È diverso da $0$ e da $2$: accettabile.

Controllo: $\frac{2}{4/3} = \frac{3}{2}$ e $\frac{1}{4/3 - 2} = \frac{1}{-2/3} = -\frac{3}{2}$; la somma è $0$.
:::

::: esercizio base Una disequazione fratta
Risolvi $\frac{x - 3}{x + 1} > 0$.
::: soluzione
C.E.: $x \neq -1$. Il numeratore è positivo per $x > 3$, il denominatore per $x > -1$.

| Tratto | Numeratore | Denominatore | Frazione |
|---|---|---|---|
| $x < -1$ | $-$ | $-$ | $+$ |
| $-1 < x < 3$ | $-$ | $+$ | $-$ |
| $x > 3$ | $+$ | $+$ | $+$ |

Verso $>$: $x < -1$ oppure $x > 3$, cioè $(-\infty, -1) \cup (3, +\infty)$.
:::

::: esercizio medio Attenzione alle C.E.
Risolvi $\frac{x + 2}{x - 1} - \frac{x}{x + 1} = \frac{6}{x^2 - 1}$.
::: soluzione
$x^2 - 1 = (x - 1)(x + 1)$. C.E.: $x \neq 1$ e $x \neq -1$.

Con il denominatore comune $(x - 1)(x + 1)$, il numeratore deve annullarsi:
$$
(x + 2)(x + 1) - x(x - 1) - 6 = 0
$$
cioè $x^2 + 3x + 2 - x^2 + x - 6 = 0$, quindi $4x - 4 = 0$ e $x = 1$. Ma $x = 1$ è escluso dalle C.E.: l'equazione è **impossibile**.
:::

::: esercizio medio Numeratore di secondo grado
Risolvi $\frac{x^2 - 9}{x - 1} \leq 0$.
::: soluzione
C.E.: $x \neq 1$. Numeratore: $x^2 - 9 \geq 0$ per $x \leq -3$ oppure $x \geq 3$. Denominatore: $x - 1 > 0$ per $x > 1$.

| Tratto | Numeratore | Denominatore | Frazione |
|---|---|---|---|
| $x < -3$ | $+$ | $-$ | $-$ |
| $-3 < x < 1$ | $-$ | $-$ | $+$ |
| $1 < x < 3$ | $-$ | $+$ | $-$ |
| $x > 3$ | $+$ | $+$ | $+$ |

Verso $\leq$: tratti negativi più gli zeri del numeratore ($\pm 3$), mai lo zero del denominatore. Soluzione: $x \leq -3$ oppure $1 < x \leq 3$.

```retta
titolo: Soluzioni di $\frac{x^2 - 9}{x - 1} \leq 0$
da: -5 5
int: (-inf, -3]
int: (1, 3]
```
:::

::: esercizio test Una frazione maggiore o uguale a un numero
Risolvi $\frac{3}{x - 2} \geq 1$ e indica quanti numeri interi soddisfano la disequazione.
::: soluzione
C.E.: $x \neq 2$. Porta tutto a sinistra: $\frac{3}{x - 2} - 1 \geq 0$, cioè $\frac{3 - (x - 2)}{x - 2} \geq 0$, quindi $\frac{5 - x}{x - 2} \geq 0$.

Numeratore: $5 - x \geq 0$ per $x \leq 5$. Denominatore: $x - 2 > 0$ per $x > 2$. La frazione è positiva per $2 < x < 5$ e vale zero in $x = 5$. Soluzione: $2 < x \leq 5$.

Gli interi sono $3$, $4$ e $5$: sono **3**. Attenzione: moltiplicando per $x - 2$ senza pensare al segno avresti trovato $x \leq 5$, che contiene anche valori sbagliati come $x = 0$ (infatti $\frac{3}{-2} < 1$).
:::

::: esercizio test Lavoro in due
Due operai insieme dipingono una stanza in $3$ ore; il primo da solo impiega $4$ ore. Quanto impiega il secondo da solo?
::: soluzione
Sia $x$ il tempo in ore del secondo operaio, con $x \neq 0$. In un'ora il primo fa $\frac{1}{4}$ del lavoro, il secondo $\frac{1}{x}$, e insieme ne fanno $\frac{1}{3}$:
$$
\frac{1}{4} + \frac{1}{x} = \frac{1}{3}
$$
Quindi $\frac{1}{x} = \frac{1}{3} - \frac{1}{4} = \frac{1}{12}$ e $x = 12$ ore.
:::

::: esercizio base Un radicale di indice pari
Risolvi $\sqrt{x + 3} = x - 3$.
::: soluzione
Condizione: $x - 3 \geq 0$, cioè $x \geq 3$. Eleva al quadrato: $x + 3 = x^2 - 6x + 9$, cioè $x^2 - 7x + 6 = 0$, con soluzioni $x = 1$ e $x = 6$.

$x = 1$ non rispetta $x \geq 3$ e si scarta (infatti $\sqrt{4} = 2$, mentre $1 - 3 = -2$). Soluzione: $x = 6$. Controllo: $\sqrt{9} = 3 = 6 - 3$.
:::

::: esercizio base Indice dispari e segni
Risolvi:

1. $\sqrt[3]{x^2 - 1} = 2$
2. $\sqrt{x^2 + 4} = -2$
::: soluzione
1. Indice dispari: eleva al cubo, $x^2 - 1 = 8$, quindi $x^2 = 9$ e $x = \pm 3$. Vanno bene entrambe.
2. Una radice quadrata non è mai negativa: **nessuna soluzione**.
:::

::: esercizio medio Due radicali
Risolvi $\sqrt{x + 4} - \sqrt{x - 1} = 1$.
::: soluzione
C.E.: $x \geq 1$. Isola una radice: $\sqrt{x + 4} = 1 + \sqrt{x - 1}$. Eleva al quadrato:
$$
x + 4 = 1 + 2\sqrt{x - 1} + x - 1 \quad\Rightarrow\quad 4 = 2\sqrt{x - 1} \quad\Rightarrow\quad \sqrt{x - 1} = 2
$$
Eleva ancora: $x - 1 = 4$, cioè $x = 5$. Verifica: $\sqrt{9} - \sqrt{4} = 3 - 2 = 1$. Soluzione: $x = 5$.
:::

::: esercizio medio Tre radicali
Risolvi $\sqrt{x + 4} + \sqrt{x - 1} = \sqrt{4x + 5}$.
::: soluzione
C.E.: $x + 4 \geq 0$, $x - 1 \geq 0$ e $4x + 5 \geq 0$, cioè $x \geq 1$. I due membri sono positivi o nulli: eleva al quadrato.
$$
x + 4 + x - 1 + 2\sqrt{(x + 4)(x - 1)} = 4x + 5 \quad\Rightarrow\quad 2\sqrt{(x + 4)(x - 1)} = 2x + 2
$$
Dividi per $2$: $\sqrt{x^2 + 3x - 4} = x + 1$. Con $x \geq 1$ il secondo membro è positivo, quindi eleva ancora: $x^2 + 3x - 4 = x^2 + 2x + 1$, cioè $x = 5$.

Verifica: $\sqrt{9} + \sqrt{4} = 5$ e $\sqrt{25} = 5$. Soluzione: $x = 5$.
:::

::: esercizio medio Radice minore di $g(x)$
Risolvi $\sqrt{x + 1} < x - 1$.
::: soluzione
$$
\begin{cases} x + 1 \geq 0 \\ x - 1 > 0 \\ x + 1 < (x - 1)^2 \end{cases}
$$
La prima dà $x \geq -1$, la seconda $x > 1$. La terza: $x + 1 < x^2 - 2x + 1$, cioè $x^2 - 3x > 0$, $x(x - 3) > 0$, quindi $x < 0$ oppure $x > 3$.

Parte comune: $x > 3$. Controllo: con $x = 3$ si ha $\sqrt{4} = 2$, uguale e non minore di $3 - 1 = 2$; con $x = 8$ si ha $3 < 7$.
:::

::: esercizio test Radice maggiore di $g(x)$
Risolvi $\sqrt{4 - x} > x - 2$.
::: soluzione
Primo sistema, $x - 2 < 0$ e $4 - x \geq 0$: $x < 2$ e $x \leq 4$, cioè $x < 2$.

Secondo sistema, $x - 2 \geq 0$ e $4 - x > (x - 2)^2$: $x \geq 2$ e $4 - x > x^2 - 4x + 4$, cioè $x^2 - 3x < 0$, che vale per $0 < x < 3$. Insieme: $2 \leq x < 3$.

Unione: $x < 3$, cioè $(-\infty, 3)$. Tutti questi valori rispettano $4 - x \geq 0$.
:::

::: esercizio test Senza fare conti
Trova le soluzioni di:

1. $\sqrt{x - 5} > -2$
2. $\sqrt{x - 5} < -2$
3. $\sqrt[3]{x - 5} < -2$
::: soluzione
1. La radice, quando esiste, è $\geq 0$ e quindi maggiore di $-2$: la soluzione è il campo di esistenza, $x \geq 5$ (non tutto $\R$).
2. Una radice quadrata non può essere negativa: **nessuna soluzione**.
3. Indice dispari: eleva al cubo, $x - 5 < -8$, cioè $x < -3$.
:::

::: esercizio base Equazione e disequazioni con il modulo
Risolvi:

1. $|3x - 6| = 9$
2. $|x + 2| \leq 3$
3. $|x + 2| > 3$
::: soluzione
1. $3x - 6 = 9$ dà $x = 5$; $3x - 6 = -9$ dà $x = -1$.
2. $-3 \leq x + 2 \leq 3$, cioè $-5 \leq x \leq 1$.
3. $x + 2 < -3$ oppure $x + 2 > 3$, cioè $x < -5$ oppure $x > 1$. Sono proprio i numeri esclusi al punto 2.
:::

::: esercizio medio Modulo uguale a un'espressione
Risolvi $|x^2 - 4| = 3x$.
::: soluzione
Primo caso, $x^2 - 4 \geq 0$, cioè $x \leq -2$ oppure $x \geq 2$: l'equazione è $x^2 - 4 = 3x$, cioè $x^2 - 3x - 4 = 0$, con soluzioni $x = 4$ e $x = -1$. Solo $x = 4$ rispetta la condizione.

Secondo caso, $x^2 - 4 < 0$, cioè $-2 < x < 2$: l'equazione è $-(x^2 - 4) = 3x$, cioè $x^2 + 3x - 4 = 0$, con soluzioni $x = 1$ e $x = -4$. Solo $x = 1$ rispetta la condizione.

Soluzioni: $x = 1$ e $x = 4$. Controllo: $|1 - 4| = 3 = 3 \cdot 1$ e $|16 - 4| = 12 = 3 \cdot 4$.
:::

::: esercizio medio Due valori assoluti
Risolvi $|x - 1| + |x + 1| \leq 4$.
::: soluzione
Gli argomenti si annullano in $1$ e in $-1$.

- $x < -1$: $-(x - 1) - (x + 1) = -2x \leq 4$, cioè $x \geq -2$; quindi $-2 \leq x < -1$.
- $-1 \leq x < 1$: $-(x - 1) + (x + 1) = 2 \leq 4$, sempre vero: va bene tutto l'intervallo.
- $x \geq 1$: $(x - 1) + (x + 1) = 2x \leq 4$, cioè $x \leq 2$; quindi $1 \leq x \leq 2$.

Unione: $-2 \leq x \leq 2$.
:::

::: esercizio test Prima isola il modulo
Risolvi $5 - |x^2 - 2| < 4$.
::: soluzione
Isola il valore assoluto: $-|x^2 - 2| < -1$, e moltiplicando per $-1$ (verso ribaltato) $|x^2 - 2| > 1$. Quindi $x^2 - 2 < -1$ oppure $x^2 - 2 > 1$:

- $x^2 - 2 < -1$ dà $x^2 < 1$, cioè $-1 < x < 1$;
- $x^2 - 2 > 1$ dà $x^2 > 3$, cioè $x < -\sqrt{3}$ oppure $x > \sqrt{3}$.

Soluzione: $x < -\sqrt{3}$ oppure $-1 < x < 1$ oppure $x > \sqrt{3}$ (ricorda che $\sqrt{3}$ vale circa $1{,}73$).

```retta
titolo: Soluzioni di $5 - \lvert x^2 - 2 \rvert < 4$
da: -3 3
int: (-inf, -sqrt(3))
int: (-1, 1)
int: (sqrt(3), +inf)
tacca: -sqrt(3) | "−√3"
tacca: sqrt(3) | "√3"
```
:::

::: esercizio test Quanti interi
Quanti numeri interi soddisfano $|2x - 1| < 7$?
::: soluzione
$-7 < 2x - 1 < 7$; aggiungi $1$: $-6 < 2x < 8$; dividi per $2$: $-3 < x < 4$. Gli interi sono $-2$, $-1$, $0$, $1$, $2$, $3$: sono **6**.
:::

## Quiz di verifica

```quiz
D: Quali sono le condizioni di esistenza di $\frac{1}{x^2 - 4} + \frac{2}{x}$?
+ $x \neq 0$ e $x \neq \pm 2$
- $x \neq \pm 2$
- $x \neq 0$ e $x \neq 2$
- $x \neq 0$ e $x \neq 4$
= $x^2 - 4 = (x - 2)(x + 2)$ si annulla in $2$ e in $-2$; il secondo denominatore si annulla in $0$. Vanno esclusi tutti e tre i valori.

D: Risolvi $\frac{x + 1}{x - 2} = 4$. Quanto vale $x$?
N: 3
= C.E. $x \neq 2$. $x + 1 = 4(x - 2)$, cioè $x + 1 = 4x - 8$, quindi $3x = 9$ e $x = 3$, che è accettabile.

D: Vero o falso: $x = 1$ è soluzione dell'equazione $\frac{x^2 - 1}{x - 1} = 2$.
- Vero
+ Falso
= Per $x = 1$ il denominatore vale zero, quindi $x = 1$ è escluso dalle C.E. Semplificando si trova $x + 1 = 2$, cioè $x = 1$: l'equazione è impossibile.

D: La disequazione $\frac{x}{x - 3} < 0$ è verificata per
+ $0 < x < 3$
- $x < 0$ oppure $x > 3$
- $x < 0$
- $0 \leq x < 3$
= Numeratore e denominatore devono avere segni opposti, e succede solo tra $0$ e $3$. In $x = 0$ la frazione vale $0$, che non è minore di $0$. La risposta $x < 0$ viene dal moltiplicare per il denominatore.

D: Quali di questi numeri sono soluzioni di $\frac{x + 2}{x - 1} \geq 0$?
+ $-2$
+ $3$
- $1$
- $0$
= La soluzione è $x \leq -2$ oppure $x > 1$. In $-2$ la frazione vale $0$, che va bene; in $3$ vale $\frac{5}{2}$. In $1$ non esiste; in $0$ vale $-2$.

D: Quante soluzioni reali ha l'equazione $\sqrt{x + 5} = x - 1$?
N: 1
= Serve $x \geq 1$. Elevando al quadrato: $x + 5 = x^2 - 2x + 1$, cioè $x^2 - 3x - 4 = 0$, con soluzioni $4$ e $-1$. Solo $x = 4$ rispetta $x \geq 1$: infatti $\sqrt{9} = 3 = 4 - 1$.

D: Le soluzioni dell'equazione $\sqrt{2x + 7} = x + 2$ sono
+ solo $x = 1$
- $x = 1$ e $x = -3$
- solo $x = -3$
- nessuna soluzione reale
= Elevando al quadrato: $2x + 7 = x^2 + 4x + 4$, cioè $x^2 + 2x - 3 = 0$, con soluzioni $1$ e $-3$. Con $x = -3$ il secondo membro vale $-1$, negativo, mentre $\sqrt{1} = 1$: è una soluzione estranea.

D: Vero o falso: l'equazione $\sqrt[3]{x} = -2$ non ha soluzioni reali.
- Vero
+ Falso
= La radice cubica può essere negativa: elevando al cubo si trova $x = -8$, e infatti $\sqrt[3]{-8} = -2$.

D: La disequazione $\sqrt{x - 1} < 2$ è verificata per
+ $1 \leq x < 5$
- $x < 5$
- $1 < x < 5$
- $x \geq 1$
= Servono $x - 1 \geq 0$ (la radice esiste) e $x - 1 < 4$: quindi $1 \leq x < 5$. In $x = 1$ la radice vale $0 < 2$, quindi $1$ è compreso; "$x < 5$" dimentica le condizioni di esistenza.

D: L'insieme delle soluzioni di $\sqrt{x + 3} > -1$ è
+ $x \geq -3$
- ogni $x$ reale
- nessun $x$ reale
- $x > -2$
= Una radice quadrata, quando esiste, è sempre maggiore di $-1$: la soluzione è il campo di esistenza $x + 3 \geq 0$. Non è tutto $\R$, perché per $x < -3$ la radice non esiste.

D: Quanto vale la somma delle soluzioni di $|3x + 1| = 8$?
N: -2/3
= $3x + 1 = 8$ dà $x = \frac{7}{3}$; $3x + 1 = -8$ dà $x = -3$. La somma è $\frac{7}{3} - 3 = -\frac{2}{3}$.

D: Quali di queste equazioni sono impossibili?
+ $|x - 1| = -2$
+ $\sqrt{x} = -3$
- $|x + 5| = 0$
- $\sqrt[3]{x} = -1$
= Un valore assoluto e una radice quadrata non sono mai negativi. $|x + 5| = 0$ ha la soluzione $x = -5$; $\sqrt[3]{x} = -1$ ha la soluzione $x = -1$.

D: La disequazione $|x + 3| < 2$ equivale a
+ $-5 < x < -1$
- $x < -1$
- $x < -5$ oppure $x > -1$
- $1 < x < 5$
= $-2 < x + 3 < 2$; togliendo $3$: $-5 < x < -1$. Sono i punti a distanza minore di $2$ da $-3$. La risposta $1 < x < 5$ confonde $|x + 3|$ con $|x - 3|$.

D: Vero o falso: per ogni numero reale $a$ vale $\sqrt{a^2} = |a|$.
+ Vero
- Falso
= La radice quadrata restituisce il numero non negativo che elevato al quadrato dà $a^2$, cioè $|a|$. Per esempio $\sqrt{(-5)^2} = 5$.

D: Quanti numeri interi soddisfano $|x + 1| \leq 2$?
N: 5
= $-2 \leq x + 1 \leq 2$, cioè $-3 \leq x \leq 1$. Gli interi sono $-3$, $-2$, $-1$, $0$, $1$.

D: L'insieme delle soluzioni di $|x + 1| + |x - 3| = 4$ è
+ $-1 \leq x \leq 3$
- solo $x = -1$ e $x = 3$
- nessun $x$ reale
- ogni $x$ reale
= Per $-1 \leq x \leq 3$ l'espressione vale $(x + 1) + (3 - x) = 4$ qualunque sia $x$. Fuori da quell'intervallo vale più di $4$: per esempio con $x = 5$ vale $6 + 2 = 8$. È la somma delle distanze di $x$ da $-1$ e da $3$, che vale $4$ esattamente per i punti tra $-1$ e $3$.
```

## Checklist

```checklist
So scrivere le condizioni di esistenza quando ci sono denominatori e radici di indice pari
So risolvere un'equazione fratta e scartare le soluzioni che annullano un denominatore
So risolvere una disequazione fratta con lo studio del segno di numeratore e denominatore
So perché in una disequazione non si moltiplica per un denominatore che contiene $x$
So risolvere equazioni e disequazioni con una radice di indice dispari elevando alla potenza
So impostare il sistema per $\sqrt{f(x)} = g(x)$ e riconoscere le soluzioni estranee
So risolvere un'equazione con due radicali quadratici elevando due volte e verificando le soluzioni
So usare gli schemi per $\sqrt{f(x)} < g(x)$ e per $\sqrt{f(x)} > g(x)$
So riconoscere al volo i casi con una radice uguale, minore o maggiore di un numero negativo
So la definizione di valore assoluto e il suo significato di distanza
So risolvere $|A(x)| = c$, $|A(x)| < c$ e $|A(x)| > c$ per ogni segno di $c$
So risolvere equazioni e disequazioni con più valori assoluti dividendo la retta in intervalli
```

---

<!-- FILE: ai/moduli/05-geometria-analitica.md -->
> File: `ai/moduli/05-geometria-analitica.md`

---
modulo: 5
titolo: "Geometria analitica: retta e coniche"
breve: "Piano cartesiano, distanza e punto medio, la retta e le sue equazioni, circonferenza, parabola, ellisse e iperbole."
ore: 9
unita:
  - "Introduzione: il piano cartesiano"
  - "5.1 La retta nel piano cartesiano"
  - "5.2 Le coniche"
---

## In breve

- **Distanza** e **punto medio** di $A = (x_A, y_A)$ e $B = (x_B, y_B)$: $d(A, B) = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$ e $M = \left(\frac{x_A + x_B}{2}, \frac{y_A + y_B}{2}\right)$.
- Ogni retta ha un'equazione $ax + by + c = 0$; se non è verticale si scrive $y = mx + q$, con **coefficiente angolare** $m = -\frac{a}{b}$ e **ordinata all'origine** $q$.
- Retta per un punto: $y - y_P = m(x - x_P)$. Per due punti: prima $m = \frac{y_B - y_A}{x_B - x_A}$, poi la formula precedente.
- **Parallele**: stesso $m$. **Perpendicolari**: $m \cdot m' = -1$. Il punto comune a due rette si trova risolvendo il sistema.
- **Distanza punto-retta**: $\frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$; serve anche per capire se una retta è tangente a una circonferenza.
- **Circonferenza** $x^2 + y^2 + ax + by + c = 0$: centro $\left(-\frac{a}{2}, -\frac{b}{2}\right)$, raggio $\sqrt{\frac{a^2}{4} + \frac{b^2}{4} - c}$; se sotto radice viene un numero negativo non è una circonferenza reale.
- **Parabola** $y = ax^2 + bx + c$: vertice in $x_V = -\frac{b}{2a}$, concavità verso l'alto se $a > 0$. Il suo grafico risolve le disequazioni di 2° grado.
- **Ellisse** $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ e **iperbole** $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$: vertici, fuochi ($c^2 = a^2 - b^2$ per l'ellisse con $a > b$, $c^2 = a^2 + b^2$ per l'iperbole) e, per l'iperbole, asintoti $y = \pm\frac{b}{a}x$. L'iperbole equilatera riferita agli asintoti è $xy = k$.

## Introduzione: il piano cartesiano

La **geometria analitica** traduce la geometria in algebra: un punto diventa una coppia di numeri, una retta o una curva diventano un'equazione in $x$ e $y$. Così i problemi geometrici si risolvono con equazioni, sistemi e disequazioni, e al contrario un'equazione si può "vedere" come una figura.

### Il riferimento cartesiano

> [!DEF] Riferimento cartesiano
> Un **riferimento cartesiano** è formato da due rette perpendicolari e orientate che si incontrano nell'**origine** $O$: l'**asse delle ascisse** (asse $x$, orizzontale, orientato verso destra) e l'**asse delle ordinate** (asse $y$, verticale, orientato verso l'alto). Su entrambe si rappresentano i numeri reali, con lo $0$ in $O$.
> Ogni punto $P$ corrisponde a una sola coppia ordinata $P = (x, y)$: $x$ è l'**ascissa** di $P$, $y$ è la sua **ordinata**.

Gli assi dividono il piano in quattro **quadranti**, numerati in senso antiorario a partire dal semiasse positivo delle $x$. I punti che stanno sugli assi non appartengono a nessun quadrante: sull'asse $x$ hanno $y = 0$, sull'asse $y$ hanno $x = 0$.

| Quadrante | Segni delle coordinate | Esempio |
|---|---|---|
| I | $x > 0$, $y > 0$ | $P = (3, 2)$ |
| II | $x < 0$, $y > 0$ | $Q = (-2, 3)$ |
| III | $x < 0$, $y < 0$ | $R = (-3, -2)$ |
| IV | $x > 0$, $y < 0$ | $S = (2, -3)$ |

```grafico
titolo: I quattro quadranti e i punti della tabella
x: -5 5
y: -4 4
punto: 3 2 | $P$ | ne
punto: -2 3 | $Q$ | no
punto: -3 -2 | $R$ | so
punto: 2 -3 | $S$ | se
segmento: 3 0 3 2 | tratteggio | grigio
segmento: 0 2 3 2 | tratteggio | grigio
testo: 4 3 | "I"
testo: -4 3 | "II"
testo: -4 -3 | "III"
testo: 4 -3 | "IV"
```

> [!NOTA] Punti simmetrici
> Ti serviranno con le coniche e con le funzioni. Il simmetrico di $P = (x, y)$ rispetto all'asse $x$ è $(x, -y)$; rispetto all'asse $y$ è $(-x, y)$; rispetto all'origine è $(-x, -y)$; rispetto alla bisettrice $y = x$ è $(y, x)$, cioè le coordinate si scambiano.

> [!ESEMPIO] Un punto e i suoi simmetrici
> $P = (-1, 4)$ ha ascissa negativa e ordinata positiva: sta nel II quadrante. Il simmetrico rispetto all'asse $x$ è $(-1, -4)$, nel III quadrante; rispetto all'asse $y$ è $(1, 4)$, nel I; rispetto all'origine è $(1, -4)$, nel IV; rispetto alla bisettrice $y = x$ è $(4, -1)$, nel IV.

### Distanza tra due punti

> [!PROP] Distanza tra due punti
> La distanza tra $A = (x_A, y_A)$ e $B = (x_B, y_B)$ è
> $$
> d(A, B) = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}
> $$

Non serve impararla a memoria: è il **teorema di Pitagora**. Il segmento $AB$ è l'ipotenusa di un triangolo rettangolo che ha un cateto orizzontale lungo $|x_B - x_A|$ e uno verticale lungo $|y_B - y_A|$ (le barre $|\ldots|$ indicano il valore assoluto). Le differenze vengono elevate al quadrato, quindi l'ordine della sottrazione non conta. Se i due punti hanno la stessa ordinata la distanza è semplicemente $|x_B - x_A|$; se hanno la stessa ascissa è $|y_B - y_A|$.

```grafico
titolo: Distanza tra $A = (1, 2)$ e $B = (4, 6)$: cateti $3$ e $4$, ipotenusa $5$
x: -1 6
y: 0 7
segmento: 1 2 4 6 | rosso | $d = 5$ | no
segmento: 1 2 4 2 | tratteggio | $3$ | s
segmento: 4 2 4 6 | tratteggio | $4$ | e
punto: 1 2 | $A$ | so
punto: 4 6 | $B$ | ne
```

> [!ESEMPIO] Due distanze
> $A = (1, 2)$, $B = (4, 6)$: $d = \sqrt{(4 - 1)^2 + (6 - 2)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$.
>
> $A = (-2, -1)$, $B = (4, 1)$: $x_B - x_A = 4 - (-2) = 6$ e $y_B - y_A = 1 - (-1) = 2$, quindi $d = \sqrt{36 + 4} = \sqrt{40} = 2\sqrt{10}$.

> [!TRAPPOLA] I segni meno
> Con coordinate negative si sbaglia facilmente la sottrazione: $4 - (-2) = 6$, non $2$. Scrivi sempre la parentesi prima di sostituire.

### Punto medio di un segmento

> [!PROP] Punto medio
> Le coordinate del punto medio del segmento $AB$ sono le medie delle coordinate degli estremi:
> $$
> M = \left(\frac{x_A + x_B}{2}, \frac{y_A + y_B}{2}\right)
> $$

> [!ESEMPIO] Punto medio e problema inverso
> $A = (-3, 5)$, $B = (7, -1)$: $M = \left(\frac{-3 + 7}{2}, \frac{5 - 1}{2}\right) = (2, 2)$.
>
> Problema inverso: $M = (3, 1)$ è il punto medio di $AB$ e $A = (1, -2)$; trova $B$. Da $\frac{1 + x_B}{2} = 3$ viene $x_B = 5$; da $\frac{-2 + y_B}{2} = 1$ viene $y_B = 4$. Quindi $B = (5, 4)$, che è anche il simmetrico di $A$ rispetto a $M$.

> [!TEST] Distanze senza calcolatrice
> Le terne pitagoriche fanno risparmiare tempo: se le differenze delle coordinate sono $3$ e $4$ (oppure $6$ e $8$, $5$ e $12$, $8$ e $15$) la distanza è $5$ (oppure $10$, $13$, $17$) senza calcolare radici. Se il risultato è una radice, semplificala: $\sqrt{40} = \sqrt{4 \cdot 10} = 2\sqrt{10}$. Per trovare un punto "equidistante" da due punti dati eguaglia i **quadrati** delle distanze: spariscono le radici e i termini di secondo grado si cancellano.

## 5.1 La retta nel piano cartesiano

In questa unità ogni retta viene descritta da un'equazione di primo grado in $x$ e $y$. Un punto appartiene a una retta (o a qualsiasi curva) **se e solo se** le sue coordinate, sostituite nell'equazione, la rendono vera.

### Rette particolari

- L'asse $x$ è formato dai punti con ordinata nulla: ha equazione $y = 0$. L'asse $y$ ha equazione $x = 0$.
- Le rette **orizzontali**, parallele all'asse $x$, hanno equazione $y = k$: tutti i loro punti hanno ordinata $k$. Le rette **verticali**, parallele all'asse $y$, hanno equazione $x = h$.
- Le rette che passano per l'origine, tranne l'asse $y$, hanno equazione $y = mx$: per ogni loro punto $(x, y)$ con $x \ne 0$ il rapporto $\frac{y}{x}$ vale sempre $m$.
- La **bisettrice** del I e III quadrante contiene i punti con coordinate uguali, del tipo $(x, x)$: ha equazione $y = x$. La bisettrice del II e IV quadrante contiene i punti $(x, -x)$: ha equazione $y = -x$.

```grafico
titolo: Le rette $y = 2$, $x = -3$ e le bisettrici $y = x$, $y = -x$
x: -5 5
y: -4 4
f: 2 | $y = 2$ | so
verticale: -3 | $x = -3$
f: x | rosso | a=4 | $y = x$ | no
f: -x | rosso | tratteggio | a=4 | $y = -x$ | ne
```

> [!ESEMPIO] Rette per un punto parallele agli assi
> La retta verticale che passa per $(5, -2)$ è $x = 5$ (tutti i suoi punti hanno ascissa $5$); la retta orizzontale per lo stesso punto è $y = -2$. Il punto $(-3, 3)$ sta sulla bisettrice $y = -x$, perché $3 = -(-3)$; non sta sulla bisettrice $y = x$.

### Forma esplicita: coefficiente angolare e ordinata all'origine

> [!DEF] Forma esplicita
> Una retta non verticale ha equazione $y = mx + q$. Il numero $m$ è il **coefficiente angolare** (o **pendenza**), il numero $q$ è l'**ordinata all'origine**: la retta taglia l'asse $y$ nel punto $(0, q)$.

Il coefficiente angolare misura quanto sale la retta: se $x$ aumenta di $1$, $y$ aumenta di $m$. Presi due punti qualsiasi $A$ e $B$ della retta,
$$
m = \frac{\Delta y}{\Delta x} = \frac{y_B - y_A}{x_B - x_A}
$$
dove $\Delta$ (si legge "delta") indica una variazione: $\Delta x$ è di quanto cambia l'ascissa, $\Delta y$ di quanto cambia l'ordinata. Vale anche $m = \tan\alpha$, dove $\alpha$ (si legge "alfa") è l'angolo che la retta forma con il semiasse positivo delle $x$ (la tangente $\tan$ la ritroverai in trigonometria).

- $m > 0$: la retta sale da sinistra a destra e forma un angolo acuto con l'asse $x$;
- $m < 0$: la retta scende, angolo ottuso;
- $m = 0$: retta orizzontale;
- retta verticale: $m$ non esiste, perché $\Delta x = 0$.

Più $|m|$ è grande, più la retta è ripida.

```grafico
titolo: Rette per $(0, 1)$ con coefficienti angolari diversi
x: -4 4
y: -3 5
f: 2x + 1 | da=-2 | a=2 | $m = 2$ | o
f: x/2 + 1 | grigio | $m = \frac{1}{2}$
f: 1 | tratteggio | $m = 0$
f: -x + 1 | rosso | $m = -1$ | so
punto: 0 1 | $q = 1$ | no
```

> [!ESEMPIO] Leggere una retta
> $y = -2x + 3$ ha $m = -2$ (scende di $2$ per ogni passo verso destra) e $q = 3$, quindi passa per $(0, 3)$. Taglia l'asse $x$ dove $y = 0$: $-2x + 3 = 0$, cioè $x = \frac{3}{2}$.
> Il punto $(2, -1)$ appartiene alla retta, perché $-2 \cdot 2 + 3 = -1$; il punto $(1, 2)$ no, perché $-2 \cdot 1 + 3 = 1 \ne 2$.

### Forma implicita

> [!PROP] Tutte e sole le rette
> Ogni equazione di primo grado $ax + by + c = 0$, con $a$ e $b$ non entrambi nulli, rappresenta una retta; viceversa, ogni retta del piano ha un'equazione di questo tipo, detta **forma implicita**.
> Se $b \ne 0$ si può ricavare $y$: $y = -\frac{a}{b}x - \frac{c}{b}$, quindi
> $$
> m = -\frac{a}{b}, \qquad q = -\frac{c}{b}
> $$

Casi particolari:

- $b = 0$: resta $ax + c = 0$, cioè $x = -\frac{c}{a}$, una retta verticale senza coefficiente angolare. È l'unico caso che la forma esplicita non comprende.
- $a = 0$: $y = -\frac{c}{b}$, retta orizzontale.
- $c = 0$: la retta passa per l'origine.

La stessa retta ha infinite equazioni implicite: moltiplicando tutti i coefficienti per lo stesso numero $k \ne 0$ la retta non cambia. Per esempio $2x - y + 1 = 0$ e $4x - 2y + 2 = 0$ sono la stessa retta.

> [!ESEMPIO] Da implicita a esplicita
> $3x - 2y + 6 = 0$. Isola $y$: $-2y = -3x - 6$; dividi per $-2$: $y = \frac{3}{2}x + 3$. Quindi $m = \frac{3}{2}$ (con la formula: $-\frac{a}{b} = -\frac{3}{-2} = \frac{3}{2}$) e $q = 3$.
> Intersezioni con gli assi: per $x = 0$ trovi $y = 3$, punto $(0, 3)$; per $y = 0$ trovi $3x + 6 = 0$, cioè $x = -2$, punto $(-2, 0)$. Due punti bastano per disegnarla.

```grafico
titolo: La retta $3x - 2y + 6 = 0$: spostandosi di $2$ a destra si sale di $3$, quindi $m = \frac{3}{2}$
x: -5 3
y: -4 5
f: 3x/2 + 3
punto: 0 3 | $(0, 3)$ | e
punto: -2 0 | $(-2, 0)$ | no
segmento: -4 -3 -2 -3 | rosso | tratteggio | $\Delta x = 2$ | s
segmento: -2 -3 -2 0 | rosso | tratteggio | $\Delta y = 3$ | e
```

> [!TRAPPOLA] Il segno di $m$
> In $ax + by + c = 0$ il coefficiente angolare è $-\frac{a}{b}$, con il meno davanti. Per $2x - 4y + 1 = 0$: $m = -\frac{2}{-4} = \frac{1}{2}$, non $-\frac{1}{2}$. Nel dubbio isola $y$.

### Retta per un punto e retta per due punti

> [!PROP] Retta per un punto con pendenza data
> La retta che passa per $P = (x_P, y_P)$ e ha coefficiente angolare $m$ è
> $$
> y - y_P = m(x - x_P)
> $$
> Al variare di $m$ si ottengono tutte le rette per $P$ tranne la verticale $x = x_P$.

> [!METODO] Retta per due punti $A$ e $B$
> 1. Se $x_A = x_B$ la retta è verticale: $x = x_A$. Se $y_A = y_B$ è orizzontale: $y = y_A$.
> 2. Altrimenti calcola $m = \frac{y_B - y_A}{x_B - x_A}$.
> 3. Scrivi $y - y_A = m(x - x_A)$ e semplifica.
> 4. Controlla che anche $B$ verifichi l'equazione.
>
> In un colpo solo si può usare $\frac{x - x_A}{x_B - x_A} = \frac{y - y_A}{y_B - y_A}$, quando i denominatori non sono nulli.

> [!ESEMPIO] Due rette per due punti
> $A = (1, 2)$, $B = (3, 8)$: $m = \frac{8 - 2}{3 - 1} = 3$; $y - 2 = 3(x - 1)$, cioè $y = 3x - 1$. Controllo con $B$: $3 \cdot 3 - 1 = 8$.
>
> $A = (-2, 5)$, $B = (4, 2)$: $m = \frac{2 - 5}{4 - (-2)} = \frac{-3}{6} = -\frac{1}{2}$; $y - 5 = -\frac{1}{2}(x + 2)$, cioè $y = -\frac{1}{2}x + 4$, in forma implicita $x + 2y - 8 = 0$. Controllo con $B$: $-2 + 4 = 2$.

### Intersezione di due rette

Un punto comune a due rette deve verificare entrambe le equazioni: si risolve il **sistema** formato dalle due equazioni, con i metodi dei sistemi lineari. I casi sono tre:

- una sola soluzione: rette **incidenti** (coefficienti angolari diversi);
- nessuna soluzione (sistema impossibile): rette **parallele distinte**;
- infinite soluzioni (sistema indeterminato): rette **coincidenti**.

> [!ESEMPIO] Dove si incontrano
> $r: 2x + y - 7 = 0$ e $s: x - y - 2 = 0$. Sommando membro a membro: $3x - 9 = 0$, quindi $x = 3$; da $s$ ricavi $y = x - 2 = 1$. Il punto comune è $(3, 1)$. Controllo in $r$: $6 + 1 - 7 = 0$.

> [!ESEMPIO] Quale tariffa conviene
> Per noleggiare una bici, la tariffa A costa $2$ € all'ora; la tariffa B costa $5$ € fissi più $1$ € all'ora. Con $x$ = ore e $y$ = costo in euro: A è la retta $y = 2x$, B è la retta $y = x + 5$. Si incontrano dove $2x = x + 5$, cioè per $x = 5$ (costo $10$ €). Per meno di $5$ ore la retta di A sta sotto quella di B e conviene A; oltre le $5$ ore conviene B.

```grafico
titolo: Tariffa A $y = 2x$ e tariffa B $y = x + 5$: si incontrano in $(5, 10)$
x: -1 10
y: -2 16
proporzioni: libere
f: 2x | da=0 | a=8 | $A$ | no
f: x + 5 | rosso | da=0 | $B$ | s
punto: 5 10 | $(5, 10)$ | se
verticale: 5 | tratteggio | grigio
```

### Parallelismo e perpendicolarità

> [!PROP] Parallele e perpendicolari
> Per $r: y = mx + q$ e $r': y = m'x + q'$:
> - $r$ e $r'$ sono **parallele** ($r \parallel r'$) se e solo se $m = m'$;
> - $r$ e $r'$ sono **perpendicolari** ($r \perp r'$) se e solo se $m \cdot m' = -1$, cioè $m' = -\frac{1}{m}$: la pendenza della perpendicolare è l'**antireciproco**.
>
> In forma implicita, $ax + by + c = 0$ e $a'x + b'y + c' = 0$ sono parallele se $ab' = a'b$ e perpendicolari se $aa' + bb' = 0$. Queste due condizioni valgono anche per le rette orizzontali e verticali: due rette verticali sono parallele, una retta orizzontale e una verticale sono perpendicolari.

> [!ESEMPIO] Parallela e perpendicolare per un punto
> Retta per $P = (2, -1)$ parallela a $r: y = 3x + 5$: stessa pendenza $3$, quindi $y + 1 = 3(x - 2)$, cioè $y = 3x - 7$.
> Retta per $P$ perpendicolare a $r$: pendenza $-\frac{1}{3}$, quindi $y + 1 = -\frac{1}{3}(x - 2)$, cioè $y = -\frac{1}{3}x - \frac{1}{3}$.
>
> Con la forma implicita: $2x - 3y + 1 = 0$ e $6x - 9y + 4 = 0$ sono parallele, perché $2 \cdot (-9) = 6 \cdot (-3) = -18$; $2x - 3y + 1 = 0$ e $3x + 2y - 5 = 0$ sono perpendicolari, perché $2 \cdot 3 + (-3) \cdot 2 = 0$.

```grafico
titolo: Per $P = (2, -1)$: la parallela $s$ e la perpendicolare $t$ alla retta $r: y = 3x + 5$
x: -4 5
y: -5 4
f: 3x + 5 | grigio | da=-3 | a=-1/3 | $r$ | o
f: 3x - 7 | da=2/3 | a=11/3 | $s$ | o
f: -x/3 - 1/3 | rosso | $t$ | n
punto: 2 -1 | $P$ | se
```

> [!TRAPPOLA] Antireciproco, non solo opposto
> La perpendicolare a una retta di pendenza $\frac{2}{3}$ ha pendenza $-\frac{3}{2}$: si cambia il segno **e** si capovolge la frazione. Scrivere $-\frac{2}{3}$ (solo opposto) o $\frac{3}{2}$ (solo reciproco) sono errori tipici.

### Distanza di un punto da una retta

> [!PROP] Distanza punto-retta
> La distanza di $P_0 = (x_0, y_0)$ dalla retta $r: ax + by + c = 0$ è
> $$
> d(P_0, r) = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}
> $$
> È la lunghezza del segmento $P_0H$, dove $H$ è il piede della perpendicolare condotta da $P_0$ a $r$. Se $P_0$ sta sulla retta, il numeratore vale $0$.

La retta va scritta **in forma implicita**. Per le rette parallele agli assi è più semplice: la distanza di $P_0$ dalla retta $x = h$ è $|x_0 - h|$, dalla retta $y = k$ è $|y_0 - k|$.

> [!ESEMPIO] Due distanze
> $P = (2, -1)$ e $r: 3x + 4y + 8 = 0$: $d = \frac{|3 \cdot 2 + 4 \cdot (-1) + 8|}{\sqrt{9 + 16}} = \frac{|10|}{5} = 2$.
> Se la retta è data in forma esplicita, per esempio $y = 2x - 3$, prima portala nella forma $2x - y - 3 = 0$. La distanza dell'origine è allora $\frac{|-3|}{\sqrt{4 + 1}} = \frac{3}{\sqrt5} = \frac{3\sqrt5}{5}$.

```grafico
titolo: La distanza di $P = (2, -1)$ dalla retta $3x + 4y + 8 = 0$ è la lunghezza di $PH$
x: -4 4
y: -5 2
f: -3x/4 - 2 | $r$ | so
punto: 2 -1 | $P$ | ne
punto: 4/5 -13/5 | $H$ | so
segmento: 2 -1 4/5 -13/5 | rosso | $d = 2$ | e
```

### Fasci di rette

> [!DEF] Fasci di rette
> Il **fascio improprio** è l'insieme di tutte le rette parallele a una retta data: $y = mx + q$ con $m$ fisso e $q$ che varia; le rette verticali formano il fascio $x = k$, con $k$ che varia.
> Il **fascio proprio** di **centro** $C = (x_C, y_C)$ è l'insieme di tutte le rette che passano per $C$: $y - y_C = m(x - x_C)$ al variare di $m$, più la verticale $x = x_C$.
> Se due rette $ax + by + c = 0$ e $a'x + b'y + c' = 0$ si incontrano in $C$, il fascio proprio si scrive anche $\lambda(ax + by + c) + \mu(a'x + b'y + c') = 0$, con $\lambda$ (lambda) e $\mu$ (mu) numeri reali non entrambi nulli.

> [!ESEMPIO] Scegliere una retta del fascio
> Il fascio $y - 2 = m(x - 1)$ ha centro $(1, 2)$. Quale sua retta passa anche per $(3, 6)$? Sostituisci: $6 - 2 = m(3 - 1)$, quindi $m = 2$, e la retta è $y - 2 = 2(x - 1)$, cioè $y = 2x$.

```grafico
titolo: Alcune rette del fascio proprio di centro $C = (1, 2)$; in rosso quella per $(3, 6)$
x: -3 5
y: -2 7
f: 2 + (x - 1) | grigio
f: 2 - (x - 1) | grigio
f: 2 | grigio
verticale: 1 | grigio
f: 2x | rosso | da=-1 | a=3.5 | $y = 2x$ | o
punto: 1 2 | $C$ | se
punto: 3 6 | $(3, 6)$ | e
```

> [!METODO] Centro di un fascio scritto con un parametro
> Un'equazione come $(k + 1)x - y + 2k = 0$, con $k$ parametro, rappresenta una retta diversa per ogni valore di $k$. Raccogli $k$: $k(x + 2) + (x - y) = 0$. Il centro annulla entrambe le parentesi, qualunque sia $k$: $x + 2 = 0$ e $x - y = 0$, quindi $C = (-2, -2)$.
> Attenzione: con un solo parametro manca proprio la retta che moltiplica $k$ (qui la verticale $x = -2$), che nessun valore di $k$ produce. È il motivo per cui la forma generale usa due parametri, $\lambda$ e $\mu$.

> [!TEST] Rette al test
> Nelle domande a scelta tra quattro conviene **controllare le opzioni** invece di rifare tutto: sostituisci il punto dato (scarta le rette che non ci passano), poi confronta i coefficienti angolari. Per una retta in forma implicita usa subito $m = -\frac{a}{b}$. Con un parametro $k$ ("per quale $k$ la retta è parallela, perpendicolare, passa per…") scrivi $m$ in funzione di $k$ e imponi la condizione: il risultato è un numero, adatto a una risposta numerica.

## 5.2 Le coniche

Circonferenza, parabola, ellisse e iperbole si chiamano **coniche**. Sono tutte descritte da equazioni di secondo grado in $x$ e $y$.

> [!NOTA] Perché "coniche"
> Sono le curve che si ottengono tagliando con un piano un **cono circolare retto** (immagina due coni gelato infiniti uniti per la punta). Un piano perpendicolare all'asse del cono dà una circonferenza; un piano un po' inclinato dà un'ellisse; un piano parallelo a una retta del cono dà una parabola; un piano che taglia entrambe le parti del cono dà un'iperbole. Se il piano passa per il vertice si ottengono le **coniche degeneri**: il solo vertice, oppure due rette incidenti, oppure due rette coincidenti.

### La circonferenza

> [!DEF] Circonferenza
> La **circonferenza** di **centro** $C$ e **raggio** $r > 0$ è il luogo dei punti $P$ del piano che distano $r$ da $C$: $d(P, C) = r$. "Luogo" vuol dire: l'insieme di tutti e soli i punti con quella proprietà.

Con $C = (\alpha, \beta)$ (si leggono "alfa" e "beta"), la formula della distanza elevata al quadrato dà l'equazione.

> [!PROP] Equazione della circonferenza
> $$
> (x - \alpha)^2 + (y - \beta)^2 = r^2
> $$
> Sviluppando i quadrati si ottiene la forma $x^2 + y^2 + ax + by + c = 0$, da cui
> $$
> C = \left(-\frac{a}{2}, -\frac{b}{2}\right), \qquad r = \sqrt{\frac{a^2}{4} + \frac{b^2}{4} - c}
> $$
> L'equazione rappresenta una circonferenza reale solo se $\frac{a^2}{4} + \frac{b^2}{4} - c \ge 0$, cioè $a^2 + b^2 - 4c \ge 0$; se vale $0$ la "circonferenza" si riduce al solo centro.

Si riconosce così: equazione di secondo grado in $x$ e $y$, **senza il termine $xy$**, con i coefficienti di $x^2$ e $y^2$ **uguali**. Se non valgono $1$, dividi prima tutta l'equazione per quel numero.

> [!ESEMPIO] Dal centro e dal raggio all'equazione, e ritorno
> Centro $(2, -1)$ e raggio $3$: $(x - 2)^2 + (y + 1)^2 = 9$, cioè $x^2 - 4x + 4 + y^2 + 2y + 1 - 9 = 0$, ossia $x^2 + y^2 - 4x + 2y - 4 = 0$.
>
> Ritorno: in $x^2 + y^2 - 4x + 2y - 4 = 0$ hai $a = -4$, $b = 2$, $c = -4$. Centro $\left(-\frac{-4}{2}, -\frac{2}{2}\right) = (2, -1)$, raggio $\sqrt{4 + 1 + 4} = 3$.
>
> L'equazione $2x^2 + 2y^2 - 8x + 4y - 8 = 0$, divisa per $2$, è la stessa circonferenza.

```grafico
titolo: La circonferenza $x^2 + y^2 - 4x + 2y - 4 = 0$, di centro $(2, -1)$ e raggio $3$
x: -2 6
y: -5 3
cerchio: 2 -1 3 | rosso
punto: 2 -1 | $C$ | so
segmento: 2 -1 5 -1 | tratteggio | $r = 3$ | n
```

> [!ESEMPIO] Circonferenza per l'origine e circonferenza non reale
> $x^2 + y^2 - 6x + 8y = 0$: centro $(3, -4)$, raggio $\sqrt{9 + 16 - 0} = 5$. Il termine noto è $0$, quindi passa per l'origine.
> $x^2 + y^2 + 2x - 4y + 10 = 0$: il "centro" sarebbe $(-1, 2)$, ma $1 + 4 - 10 = -5 < 0$. Nessun punto reale verifica l'equazione: non è una circonferenza.

> [!METODO] Circonferenza per tre punti
> Tre punti non allineati individuano una sola circonferenza. Sostituisci le loro coordinate in $x^2 + y^2 + ax + by + c = 0$: ottieni un sistema lineare di tre equazioni nelle incognite $a$, $b$, $c$.
> Con $O = (0, 0)$, $A = (4, 0)$, $B = (0, 2)$: da $O$ viene $c = 0$; da $A$: $16 + 4a = 0$, $a = -4$; da $B$: $4 + 2b = 0$, $b = -2$. La circonferenza è $x^2 + y^2 - 4x - 2y = 0$, con centro $(2, 1)$ e raggio $\sqrt{4 + 1} = \sqrt5$.
> In alternativa, il centro è il punto d'incontro degli assi di due corde (l'**asse** di un segmento è la retta perpendicolare al segmento nel suo punto medio), per esempio degli assi dei segmenti $OA$ e $OB$: $x = 2$ e $y = 1$.

> [!TRAPPOLA] Centro con i segni cambiati
> Il centro ha coordinate $-\frac{a}{2}$ e $-\frac{b}{2}$: per $x^2 + y^2 + 6x - 2y = 0$ il centro è $(-3, 1)$, non $(3, -1)$. E nella forma $(x - \alpha)^2 + (y - \beta)^2 = r^2$ a destra c'è $r^2$: se trovi $25$, il raggio è $5$.

### Retta e circonferenza

> [!PROP] Posizione di una retta rispetto a una circonferenza
> Sia $d$ la distanza del centro $C$ dalla retta e $r$ il raggio:
> - $d > r$: retta **esterna**, nessun punto comune;
> - $d = r$: retta **tangente**, un solo punto comune;
> - $d < r$: retta **secante**, due punti comuni.
>
> Lo stesso risultato si ottiene mettendo a sistema retta e circonferenza: l'equazione di secondo grado che si ricava ha $\Delta < 0$, $\Delta = 0$ oppure $\Delta > 0$.

> [!ESEMPIO] Tre rette e la circonferenza $x^2 + y^2 = 25$
> Centro $O$, raggio $5$.
> - $3x + 4y - 25 = 0$: $d = \frac{|-25|}{5} = 5 = r$, tangente. Il punto di contatto è $T = (3, 4)$: sta su entrambe, perché $9 + 16 = 25$ e $9 + 16 - 25 = 0$.
> - $y = x - 1$: sostituendo, $x^2 + (x - 1)^2 = 25$, cioè $2x^2 - 2x - 24 = 0$, ossia $x^2 - x - 12 = 0$, con soluzioni $x = 4$ e $x = -3$. Secante nei punti $(4, 3)$ e $(-3, -4)$.
> - $y = x + 8$, cioè $x - y + 8 = 0$: $d = \frac{8}{\sqrt2} = 4\sqrt2$, circa $5{,}66 > 5$. Esterna.

```grafico
titolo: Retta esterna, tangente e secante alla circonferenza $x^2 + y^2 = 25$
x: -9 9
y: -7 8
cerchio: 0 0 5
f: x + 8 | grigio | da=-9 | a=0 | "esterna" | o
f: -3x/4 + 25/4 | rosso
f: x - 1 | "secante" | no
testo: 1.6 6.3 | "tangente" | bianco
punto: 3 4 | rosso | $T$ | ne
punto: 4 3 | se
punto: -3 -4 | so
```

> [!METODO] Tangente in un punto della circonferenza
> La tangente in un punto $P_0$ della circonferenza è perpendicolare al raggio $CP_0$. Quindi calcola il coefficiente angolare di $CP_0$, prendi l'antireciproco e scrivi la retta per $P_0$.
> Per $x^2 + y^2 = 25$ in $T = (3, 4)$: la retta $OT$ ha pendenza $\frac{4}{3}$, la tangente ha pendenza $-\frac{3}{4}$: $y - 4 = -\frac{3}{4}(x - 3)$, cioè $3x + 4y - 25 = 0$, la retta dell'esempio precedente.
> Se $CP_0$ è orizzontale la tangente è verticale, e viceversa.

### Fasci di circonferenze

Date due circonferenze con centri diversi, $C_1: x^2 + y^2 + a_1x + b_1y + c_1 = 0$ e $C_2: x^2 + y^2 + a_2x + b_2y + c_2 = 0$, il **fascio** che individuano è
$$
\lambda(x^2 + y^2 + a_1x + b_1y + c_1) + \mu(x^2 + y^2 + a_2x + b_2y + c_2) = 0
$$
- se $\lambda + \mu \ne 0$ si ottiene una circonferenza (dividi per $\lambda + \mu$);
- se $\lambda + \mu = 0$ i termini di secondo grado spariscono e resta una retta, l'**asse radicale**. In pratica si trova **sottraendo** le due equazioni: $(a_1 - a_2)x + (b_1 - b_2)y + (c_1 - c_2) = 0$.

> [!PROP] Proprietà del fascio di circonferenze
> - I punti comuni a $C_1$ e $C_2$ appartengono a tutte le circonferenze del fascio e all'asse radicale.
> - I centri di tutte le circonferenze del fascio stanno sull'**asse centrale**, la retta che passa per i centri di $C_1$ e $C_2$; l'asse radicale è perpendicolare all'asse centrale.
> - Se $C_1$ e $C_2$ si tagliano in due punti, l'asse radicale è la retta per quei punti; se sono tangenti, passa per il punto di contatto; se non hanno punti comuni, l'asse radicale non incontra nessuna circonferenza del fascio.
> - Per ogni punto del piano passa un elemento del fascio (una circonferenza oppure l'asse radicale): il fascio "riempie" il piano.

> [!ESEMPIO] Due circonferenze che si tagliano
> $C_1: x^2 + y^2 - 4 = 0$ (centro $O$, raggio $2$) e $C_2: x^2 + y^2 - 4x = 0$ (centro $(2, 0)$, raggio $2$).
> Asse radicale: $(x^2 + y^2 - 4) - (x^2 + y^2 - 4x) = 4x - 4 = 0$, cioè $x = 1$. Punti comuni: con $x = 1$ in $C_1$ trovi $1 + y^2 = 4$, $y = \pm\sqrt3$ (si legge "più o meno": $y = \sqrt3$ oppure $y = -\sqrt3$), quindi $P_1 = (1, \sqrt3)$ e $P_2 = (1, -\sqrt3)$. L'asse centrale è l'asse $x$, perpendicolare a $x = 1$.
> Circonferenza del fascio che passa per $(3, 0)$: sostituendo in $\lambda(x^2 + y^2 - 4) + \mu(x^2 + y^2 - 4x) = 0$ trovi $5\lambda - 3\mu = 0$. Scegli $\lambda = 3$, $\mu = 5$: $8x^2 + 8y^2 - 20x - 12 = 0$, cioè $x^2 + y^2 - \frac{5}{2}x - \frac{3}{2} = 0$, con centro $\left(\frac{5}{4}, 0\right)$ sull'asse centrale e raggio $\frac{7}{4}$.

```grafico
titolo: $x^2 + y^2 = 4$, $x^2 + y^2 - 4x = 0$, l'asse radicale $x = 1$ e (tratteggiata) la circonferenza del fascio per $(3, 0)$
x: -3 5
y: -3 3
cerchio: 0 0 2
cerchio: 2 0 2
cerchio: 5/4 0 7/4 | rosso | tratteggio
verticale: 1 | rosso | $x = 1$
punto: 1 sqrt(3) | $P_1$ | ne
punto: 1 -sqrt(3) | $P_2$ | se
punto: 3 0 | rosso | e
```

### La parabola

> [!DEF] Parabola
> Fissati un punto $F$, il **fuoco**, e una retta $f$ che non passa per $F$, la **direttrice**, la **parabola** è il luogo dei punti $P$ equidistanti dal fuoco e dalla direttrice: $d(P, F) = d(P, f)$.
> Il punto della parabola più vicino al fuoco e alla direttrice è il **vertice** $V$; la retta per $F$ perpendicolare alla direttrice è l'**asse di simmetria**.

Prendendo $F = (0, c)$ e la direttrice $y = -c$, la condizione è $\sqrt{x^2 + (y - c)^2} = |y + c|$; elevando al quadrato e semplificando resta $x^2 = 4cy$, cioè $y = \frac{1}{4c}x^2$.

> [!PROP] Parabola con vertice nell'origine
> - Fuoco $(0, c)$ e direttrice $y = -c$: la parabola è $y = ax^2$ con $a = \frac{1}{4c}$. Il suo asse è l'asse $y$; il fuoco è $\left(0, \frac{1}{4a}\right)$ e la direttrice $y = -\frac{1}{4a}$.
> - Fuoco $(c, 0)$ e direttrice $x = -c$: la parabola è $x = ay^2$, con asse l'asse $x$, fuoco $\left(\frac{1}{4a}, 0\right)$ e direttrice $x = -\frac{1}{4a}$.
>
> In $y = ax^2$: se $a > 0$ la **concavità** è verso l'alto, se $a < 0$ verso il basso; più $|a|$ è grande, più la parabola è stretta. In $x = ay^2$: aperta verso destra se $a > 0$, verso sinistra se $a < 0$.

> [!ESEMPIO] Fuoco e direttrice
> $y = \frac{1}{8}x^2$: $a = \frac{1}{8}$ e $\frac{1}{4a} = 2$, quindi fuoco $(0, 2)$ e direttrice $y = -2$. Verifica con il punto $(4, 2)$ della parabola: dista $4$ dal fuoco e $2 - (-2) = 4$ dalla direttrice.
> $x = \frac{1}{4}y^2$: $\frac{1}{4a} = 1$, fuoco $(1, 0)$ e direttrice $x = -1$.

> [!PROP] Parabola con asse verticale
> $y = ax^2 + bx + c$, con $a \ne 0$ e $\Delta = b^2 - 4ac$:
> - vertice $V = \left(-\frac{b}{2a}, -\frac{\Delta}{4a}\right)$;
> - asse di simmetria $x = -\frac{b}{2a}$;
> - fuoco $F = \left(-\frac{b}{2a}, \frac{1 - \Delta}{4a}\right)$ e direttrice $y = -\frac{1 + \Delta}{4a}$;
> - taglia l'asse $y$ in $(0, c)$ e l'asse $x$ nelle soluzioni di $ax^2 + bx + c = 0$: due punti se $\Delta > 0$, uno solo (il vertice) se $\Delta = 0$, nessuno se $\Delta < 0$.
>
> $a$ decide concavità e apertura; $b$ e $c$ spostano la parabola.

Per l'ordinata del vertice spesso è più comodo sostituire $x_V$ nell'equazione. Il fuoco sta sull'asse, a distanza $\frac{1}{4|a|}$ dal vertice, dalla parte verso cui la parabola è aperta ("dentro" la parabola); la direttrice è perpendicolare all'asse e sta alla stessa distanza dal vertice, dalla parte opposta.

> [!ESEMPIO] Tutti gli elementi di $y = x^2 - 4x + 3$
> $a = 1$, $b = -4$, $c = 3$, $\Delta = 16 - 12 = 4$.
> - Vertice: $x_V = -\frac{-4}{2} = 2$, $y_V = 4 - 8 + 3 = -1$, quindi $V = (2, -1)$ (con la formula: $-\frac{4}{4} = -1$).
> - Asse $x = 2$; concavità verso l'alto.
> - Fuoco $\left(2, \frac{1 - 4}{4}\right) = \left(2, -\frac{3}{4}\right)$; direttrice $y = -\frac{1 + 4}{4} = -\frac{5}{4}$.
> - Asse $x$: $x^2 - 4x + 3 = 0$ per $x = 1$ e $x = 3$. Asse $y$: $(0, 3)$.

```grafico
titolo: $y = x^2 - 4x + 3$ con vertice $V$, fuoco $F$, asse $x = 2$ e direttrice $y = -\frac{5}{4}$
x: -1 5
y: -2 4
f: x^2 - 4x + 3 | $y = x^2 - 4x + 3$ | e
verticale: 2 | tratteggio | grigio
orizzontale: -5/4 | rosso | tratteggio | $f$
punto: 2 -1 | $V$ | se
punto: 2 -3/4 | rosso | $F$ | ne
punto: 1 0 | no
punto: 3 0 | ne
punto: 0 3 | e
```

> [!ESEMPIO] Concavità verso il basso
> $y = -2x^2 + 4x$: $x_V = -\frac{4}{-4} = 1$, $y_V = -2 + 4 = 2$, vertice $(1, 2)$. Poiché $a = -2 < 0$ il fuoco sta sotto il vertice, a distanza $\frac{1}{8}$: $F = \left(1, \frac{15}{8}\right)$; la direttrice è $y = \frac{17}{8}$. Zeri: $-2x(x - 2) = 0$, cioè $x = 0$ e $x = 2$.

> [!METODO] Trovare una parabola da tre condizioni
> Per trovare $a$, $b$, $c$ servono tre condizioni: il passaggio per un punto ne dà una, il vertice ne dà due.
> - Vertice $(1, -3)$ e passaggio per $(3, 5)$: usa la forma $y = a(x - x_V)^2 + y_V$, qui $y = a(x - 1)^2 - 3$. Con $(3, 5)$: $5 = 4a - 3$, quindi $a = 2$ e $y = 2(x - 1)^2 - 3 = 2x^2 - 4x - 1$.
> - Passaggio per tre punti: sostituisci i tre punti in $y = ax^2 + bx + c$ e risolvi il sistema lineare.

> [!NOTA] Parabola con asse orizzontale
> $x = ay^2 + by + c$ ha asse orizzontale $y = -\frac{b}{2a}$ ed è aperta verso destra se $a > 0$. Per il vertice calcola prima $y_V = -\frac{b}{2a}$, poi $x_V$ sostituendo. Per esempio $x = y^2 - 2y - 3$ ha $y_V = 1$, $x_V = 1 - 2 - 3 = -4$, vertice $(-4, 1)$; taglia l'asse $y$ dove $y^2 - 2y - 3 = 0$, cioè in $(0, 3)$ e $(0, -1)$.

Retta e parabola si studiano come retta e circonferenza: si mette a sistema e si guarda il $\Delta$ dell'equazione di secondo grado che si ottiene. Per esempio $y = x^2$ e $y = 2x - 1$ danno $x^2 - 2x + 1 = 0$, con $\Delta = 0$: la retta è tangente nel punto $(1, 1)$. Attenzione: una retta parallela all'asse, come $x = 1$, incontra la parabola in un solo punto ma non è tangente.

### Applicazione: la parabola per risolvere le disequazioni

Risolvere $ax^2 + bx + c > 0$ significa trovare le $x$ in cui la parabola $y = ax^2 + bx + c$ sta **sopra** l'asse $x$; per $< 0$, quelle in cui sta **sotto**. Le soluzioni dell'equazione associata $ax^2 + bx + c = 0$ sono le ascisse dei punti in cui la parabola incontra l'asse $x$, cioè le soluzioni del sistema tra $y = ax^2 + bx + c$ e $y = 0$.

> [!METODO] Disequazione di 2° grado con la parabola
> 1. Porta tutto a primo membro: $ax^2 + bx + c > 0$ (oppure $<$, $\ge$, $\le$).
> 2. Risolvi l'equazione associata: trovi gli zeri $x_1$ e $x_2$, uno solo se $\Delta = 0$, nessuno se $\Delta < 0$.
> 3. Disegna a mano la parabola: contano solo la concavità (segno di $a$) e i punti sull'asse $x$.
> 4. Leggi le $x$ in cui il grafico sta sopra l'asse (per $> 0$) o sotto (per $< 0$); se c'è l'uguale includi gli zeri.

Riassunto per $a > 0$. Se $a < 0$, moltiplica prima entrambi i membri per $-1$ cambiando il verso della disequazione (per esempio $-x^2 + 9 > 0$ diventa $x^2 - 9 < 0$), poi usa la tabella.

| | $\Delta > 0$, zeri $x_1 < x_2$ | $\Delta = 0$, zero $x_1$ | $\Delta < 0$ |
|---|---|---|---|
| $ax^2 + bx + c > 0$ | $x < x_1$ oppure $x > x_2$ | ogni $x \ne x_1$ | ogni $x$ reale |
| $ax^2 + bx + c < 0$ | $x_1 < x < x_2$ | nessuna $x$ | nessuna $x$ |
| $ax^2 + bx + c \ge 0$ | $x \le x_1$ oppure $x \ge x_2$ | ogni $x$ reale | ogni $x$ reale |
| $ax^2 + bx + c \le 0$ | $x_1 \le x \le x_2$ | solo $x = x_1$ | nessuna $x$ |

> [!ESEMPIO] Quattro disequazioni
> - $x^2 - x - 6 < 0$: zeri $-2$ e $3$, parabola verso l'alto, sotto l'asse tra gli zeri: $-2 < x < 3$.
> - $2x^2 - 3x \ge 0$: $x(2x - 3) = 0$ per $x = 0$ e $x = \frac{3}{2}$; sopra l'asse fuori dagli zeri: $x \le 0$ oppure $x \ge \frac{3}{2}$.
> - $x^2 + 2x + 5 > 0$: $\Delta = 4 - 20 < 0$, la parabola sta tutta sopra l'asse: vera per ogni $x$ reale.
> - $-x^2 + 4x - 4 \ge 0$: è $-(x - 2)^2 \ge 0$. La parabola, rivolta verso il basso, tocca l'asse solo in $x = 2$: l'unica soluzione è $x = 2$.

```grafico
titolo: $x^2 - x - 6 < 0$ dove la parabola sta sotto l'asse $x$, cioè tra $-2$ e $3$
x: -4 5
y: -7 6
proporzioni: libere
f: x^2 - x - 6 | $y = x^2 - x - 6$ | e
area: x^2 - x - 6 | 0 | -2 3 | rosso
punto: -2 0 | vuoto | $-2$ | no
punto: 3 0 | vuoto | $3$ | ne
```

```retta
titolo: Soluzioni di $2x^2 - 3x \ge 0$: $x \le 0$ oppure $x \ge \frac{3}{2}$
da: -2 3
int: (-inf, 0]
int: [3/2, +inf)
tacca: 3/2 | $\frac{3}{2}$
```

> [!TRAPPOLA] "Oppure", non "e"
> Per $x^2 - x - 6 > 0$ le soluzioni sono $x < -2$ **oppure** $x > 3$: l'unione $(-\infty, -2) \cup (3, +\infty)$. Scrivere "$x < -2$ e $x > 3$" vuol dire cercare un numero minore di $-2$ e contemporaneamente maggiore di $3$: non ne esistono. Attenzione anche agli estremi: con $<$ e $>$ sono esclusi (parentesi tonda), con $\le$ e $\ge$ sono inclusi (quadra).

### L'ellisse

> [!DEF] Ellisse
> Fissati due punti $F$ e $F'$, i **fuochi**, l'**ellisse** è il luogo dei punti $P$ per cui la somma delle distanze dai fuochi è costante: $d(P, F) + d(P, F') = 2a$, con $2a > d(F, F')$.

> [!PROP] Equazione canonica dell'ellisse
> Con i fuochi $F = (c, 0)$ e $F' = (-c, 0)$ sull'asse $x$ e il centro nell'origine:
> $$
> \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1, \qquad b^2 = a^2 - c^2 \quad (a > b)
> $$
> - **vertici** $A = (a, 0)$, $A' = (-a, 0)$, $B = (0, b)$, $B' = (0, -b)$; **centro** $O$;
> - simmetrica rispetto ai due assi e all'origine; contenuta nel rettangolo $-a \le x \le a$, $-b \le y \le b$;
> - **eccentricità** $e = \frac{c}{a}$, con $0 \le e < 1$: più è vicina a $0$, più l'ellisse è "rotonda". Se $a = b$ allora $c = 0$ e l'ellisse è una circonferenza.
>
> Se nell'equazione $b > a$, i fuochi stanno sull'asse $y$: $(0, \pm c)$ con $c^2 = b^2 - a^2$, e l'eccentricità è $\frac{c}{b}$ (sempre il rapporto tra $c$ e il semiasse maggiore).

In pratica: i fuochi stanno sull'asse del **denominatore più grande** e $c^2$ è la differenza tra il denominatore maggiore e quello minore. Il legame $a^2 = b^2 + c^2$ si vede nel vertice $B = (0, b)$: dista $a$ da ciascun fuoco (la somma è $2a$), e $a$ è l'ipotenusa del triangolo rettangolo con cateti $b$ e $c$.

> [!ESEMPIO] Leggere un'ellisse
> $\frac{x^2}{25} + \frac{y^2}{9} = 1$: $a = 5$, $b = 3$ (radici dei denominatori), $c = \sqrt{25 - 9} = 4$. Vertici $(\pm 5, 0)$ e $(0, \pm 3)$, fuochi $(\pm 4, 0)$, eccentricità $\frac{4}{5}$. Nel vertice $B = (0, 3)$ le distanze dai fuochi sono $5$ e $5$, con somma $10 = 2a$.
>
> $4x^2 + y^2 = 16$: dividi per $16$, $\frac{x^2}{4} + \frac{y^2}{16} = 1$. Il denominatore maggiore è sotto $y^2$: $a = 2$, $b = 4$, $c = \sqrt{16 - 4} = 2\sqrt3$. Vertici $(\pm 2, 0)$ e $(0, \pm 4)$, fuochi $(0, \pm 2\sqrt3)$ sull'asse $y$.

```grafico
titolo: L'ellisse $\frac{x^2}{25} + \frac{y^2}{9} = 1$: da $B$ ai fuochi $5 + 5 = 10 = 2a$
x: -7 7
y: -5 5
ellisse: 0 0 5 3 | rosso
punto: 4 0 | $F$ | so
punto: -4 0 | $F'$ | se
punto: 0 3 | $B$ | n
punto: 5 0 | $A$ | e
punto: -5 0 | $A'$ | o
segmento: -4 0 0 3 | tratteggio | grigio | $5$ | no
segmento: 4 0 0 3 | tratteggio | grigio | $5$ | ne
```

> [!TRAPPOLA] Prima il secondo membro uguale a 1
> Semiassi e fuochi si leggono solo quando a destra c'è $1$: $9x^2 + 4y^2 = 36$ va prima divisa per $36$. E $a$ è la **radice** del denominatore: in $\frac{x^2}{16}$ il semiasse è $4$, non $16$.

### L'iperbole

> [!DEF] Iperbole
> Fissati i fuochi $F$ e $F'$, l'**iperbole** è il luogo dei punti $P$ per cui la differenza delle distanze dai fuochi, in valore assoluto, è costante: $|d(P, F) - d(P, F')| = 2a$, con $2a < d(F, F')$.

> [!PROP] Equazione canonica dell'iperbole
> Con i fuochi $F = (c, 0)$ e $F' = (-c, 0)$:
> $$
> \frac{x^2}{a^2} - \frac{y^2}{b^2} = 1, \qquad b^2 = c^2 - a^2 \quad (c^2 = a^2 + b^2)
> $$
> - **vertici** $A = (a, 0)$ e $A' = (-a, 0)$, dove l'iperbole è tangente alle rette $x = \pm a$; nessun punto sull'asse $y$ e nessun punto con $-a < x < a$, quindi la curva è formata da due **rami**;
> - simmetrica rispetto ai due assi e all'origine;
> - **asintoti** $y = \pm\frac{b}{a}x$: rette per l'origine a cui i rami si avvicinano sempre di più senza mai toccarle; sono le diagonali del rettangolo di vertici $(\pm a, \pm b)$;
> - eccentricità $e = \frac{c}{a} > 1$.
>
> L'equazione $\frac{x^2}{a^2} - \frac{y^2}{b^2} = -1$ è un'iperbole con vertici $(0, \pm b)$ e fuochi $(0, \pm c)$ sull'asse $y$; gli asintoti restano $y = \pm\frac{b}{a}x$ e ancora $c^2 = a^2 + b^2$.

Trucco per gli asintoti: sostituisci il secondo membro con $0$. Da $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 0$ ricavi $y^2 = \frac{b^2}{a^2}x^2$, cioè $y = \pm\frac{b}{a}x$. Gli asintoti dividono le rette per l'origine in due famiglie: per l'iperbole $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, quelle con pendenza $m$ tale che $|m| < \frac{b}{a}$ la tagliano in due punti, le altre (asintoti compresi) non la incontrano.

> [!ESEMPIO] Leggere un'iperbole
> $\frac{x^2}{9} - \frac{y^2}{16} = 1$: $a = 3$, $b = 4$, $c = \sqrt{9 + 16} = 5$. Vertici $(\pm 3, 0)$, fuochi $(\pm 5, 0)$, asintoti $y = \pm\frac{4}{3}x$, eccentricità $\frac{5}{3}$.
>
> $4x^2 - 9y^2 = -36$: dividi per $36$, $\frac{x^2}{9} - \frac{y^2}{4} = -1$. Con il $-1$ i vertici stanno sull'asse $y$: $(0, \pm 2)$; $c = \sqrt{9 + 4} = \sqrt{13}$, fuochi $(0, \pm\sqrt{13})$; asintoti $y = \pm\frac{2}{3}x$.

```grafico
titolo: L'iperbole $\frac{x^2}{9} - \frac{y^2}{16} = 1$ con gli asintoti $y = \pm\frac{4}{3}x$
x: -8 8
y: -7 7
fy: 3sqrt(1 + y^2/16) | rosso
fy: -3sqrt(1 + y^2/16) | rosso
f: 4x/3 | tratteggio | grigio
f: -4x/3 | tratteggio | grigio
poligono: -3 -4 3 -4 3 4 -3 4 | tratteggio | grigio
punto: 3 0 | $A$ | se
punto: -3 0 | $A'$ | so
punto: 5 0 | $F$ | s
punto: -5 0 | $F'$ | s
```

### Iperbole equilatera

> [!PROP] Iperbole equilatera
> Se $a = b$ l'iperbole si dice **equilatera**: $x^2 - y^2 = a^2$. Gli asintoti sono le bisettrici $y = x$ e $y = -x$, perpendicolari tra loro; i fuochi sono $(\pm a\sqrt2, 0)$ e l'eccentricità è $\sqrt2$.
> L'equazione $x^2 - y^2 = 0$, cioè $(x - y)(x + y) = 0$, rappresenta le due bisettrici: è un'iperbole degenere.

> [!PROP] Iperbole equilatera riferita agli asintoti
> Se si prendono come assi cartesiani i due asintoti, l'iperbole equilatera ha equazione
> $$
> xy = k \qquad (k \ne 0)
> $$
> Gli asintoti sono gli assi $x$ e $y$. Se $k > 0$ i rami stanno nel I e nel III quadrante e i vertici sono sulla bisettrice $y = x$, in $(\sqrt{k}, \sqrt{k})$ e $(-\sqrt{k}, -\sqrt{k})$; sulla stessa bisettrice stanno i fuochi, in $(\sqrt{2k}, \sqrt{2k})$ e $(-\sqrt{2k}, -\sqrt{2k})$; se $k < 0$ i rami stanno nel II e nel IV quadrante e i vertici sono sulla bisettrice $y = -x$. È il grafico di $y = \frac{k}{x}$, la proporzionalità inversa.

> [!ESEMPIO] L'iperbole $xy = 4$
> Passa per $(1, 4)$, $(2, 2)$, $(4, 1)$ e per i simmetrici rispetto all'origine $(-1, -4)$, $(-2, -2)$, $(-4, -1)$. I vertici sono $(2, 2)$ e $(-2, -2)$: distano $2\sqrt2$ dall'origine, che è il semiasse $a$ (infatti $k = \frac{a^2}{2} = \frac{8}{2} = 4$). I fuochi sono $(2\sqrt2, 2\sqrt2)$ e $(-2\sqrt2, -2\sqrt2)$: distano $4 = a\sqrt2$ dall'origine, come nell'iperbole equilatera.

```grafico
titolo: Iperboli equilatere riferite agli asintoti: $xy = 4$ e $xy = -2$
x: -6 6
y: -5 5
f: 4/x | rosso | $xy = 4$ | so
f: -2/x | tratteggio | $xy = -2$ | no
f: x | grigio | sottile
punto: 2 2 | rosso | $V$ | se
punto: -2 -2 | rosso | $V'$ | no
```

### Riconoscere una conica

| Equazione | Conica |
|---|---|
| $x^2 + y^2 + ax + by + c = 0$ | circonferenza, se $a^2 + b^2 - 4c > 0$ |
| $y = ax^2 + bx + c$ | parabola con asse verticale |
| $x = ay^2 + by + c$ | parabola con asse orizzontale |
| $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ | ellisse (circonferenza se $a = b$) |
| $\frac{x^2}{a^2} - \frac{y^2}{b^2} = \pm 1$ | iperbole |
| $x^2 - y^2 = a^2$ oppure $xy = k$ | iperbole equilatera |

Un'equazione del tipo $Ax^2 + By^2 = C$ con $C > 0$ è una circonferenza se $A = B > 0$, un'ellisse se $A$ e $B$ sono positivi e diversi, un'iperbole se $A$ e $B$ hanno segni opposti.

> [!ESEMPIO] Tre equazioni simili, tre coniche diverse
> - $25x^2 + 25y^2 = 100$: dividi per $25$, $x^2 + y^2 = 4$, circonferenza di centro $O$ e raggio $2$.
> - $25x^2 + 4y^2 = 100$: dividi per $100$, $\frac{x^2}{4} + \frac{y^2}{25} = 1$, ellisse con fuochi sull'asse $y$ e $c = \sqrt{25 - 4} = \sqrt{21}$.
> - $25x^2 - 4y^2 = 100$: dividi per $100$, $\frac{x^2}{4} - \frac{y^2}{25} = 1$, iperbole con vertici $(\pm 2, 0)$ e asintoti $y = \pm\frac{5}{2}x$.

> [!TEST] Coniche al test
> Le richieste più naturali sono: riconoscere la conica da un'equazione, dare centro e raggio di una circonferenza, il vertice di una parabola, fuochi o asintoti di ellisse e iperbole, dire se un punto sta sulla curva, stabilire se una retta è tangente. Per il punto: sostituisci. Per la tangenza: distanza centro-retta uguale al raggio (circonferenza) oppure $\Delta = 0$ nel sistema (parabola). Prima di leggere $a$ e $b$ controlla che il secondo membro sia $1$, e ricorda: ellisse $c^2 = a^2 - b^2$ (sottrai), iperbole $c^2 = a^2 + b^2$ (somma).

## Esercizi

::: esercizio base Distanza e punto medio
Dati $A = (-1, 3)$ e $B = (5, -5)$, calcola la distanza $AB$ e il punto medio $M$. In quale quadrante sta $M$?
::: soluzione
Differenze: $x_B - x_A = 5 - (-1) = 6$ e $y_B - y_A = -5 - 3 = -8$.
$$
d(A, B) = \sqrt{6^2 + (-8)^2} = \sqrt{36 + 64} = \sqrt{100} = 10
$$
Punto medio: $M = \left(\frac{-1 + 5}{2}, \frac{3 + (-5)}{2}\right) = (2, -1)$. Ha ascissa positiva e ordinata negativa: sta nel IV quadrante.
:::

::: esercizio base Retta per due punti
Scrivi l'equazione della retta per $A = (2, -1)$ e $B = (4, 3)$, in forma esplicita e implicita. Trova dove taglia gli assi e stabilisci se $P = (3, 1)$ e $Q = (1, -2)$ le appartengono.
::: soluzione
$m = \frac{3 - (-1)}{4 - 2} = \frac{4}{2} = 2$. Retta per $A$: $y + 1 = 2(x - 2)$, cioè $y = 2x - 5$; in forma implicita $2x - y - 5 = 0$. Controllo con $B$: $2 \cdot 4 - 5 = 3$.

Asse $y$ ($x = 0$): $y = -5$, punto $(0, -5)$. Asse $x$ ($y = 0$): $2x - 5 = 0$, $x = \frac{5}{2}$, punto $\left(\frac{5}{2}, 0\right)$.

$P$: $2 \cdot 3 - 5 = 1$, appartiene. $Q$: $2 \cdot 1 - 5 = -3 \ne -2$, non appartiene.
:::

::: esercizio base Centro e raggio
Trova centro e raggio della circonferenza $x^2 + y^2 + 6x - 2y - 6 = 0$. Passa per l'origine?
::: soluzione
$a = 6$, $b = -2$, $c = -6$. Centro $\left(-\frac{6}{2}, -\frac{-2}{2}\right) = (-3, 1)$. Raggio $r = \sqrt{9 + 1 - (-6)} = \sqrt{16} = 4$.

Non passa per l'origine: sostituendo $(0, 0)$ resta $-6 \ne 0$. Una circonferenza passa per l'origine solo se il termine noto è $0$.
:::

::: esercizio base Gli elementi di una parabola
Per $y = x^2 + 2x - 8$ trova vertice, asse, fuoco, direttrice e intersezioni con gli assi.
::: soluzione
$a = 1$, $b = 2$, $c = -8$, $\Delta = 4 + 32 = 36$.

Vertice: $x_V = -\frac{2}{2} = -1$, $y_V = 1 - 2 - 8 = -9$, quindi $V = (-1, -9)$. Asse $x = -1$. Concavità verso l'alto ($a > 0$).

Fuoco: $\left(-1, \frac{1 - 36}{4}\right) = \left(-1, -\frac{35}{4}\right)$, cioè $\frac{1}{4}$ sopra il vertice. Direttrice: $y = -\frac{1 + 36}{4} = -\frac{37}{4}$, $\frac{1}{4}$ sotto il vertice.

Asse $x$: $x^2 + 2x - 8 = (x + 4)(x - 2) = 0$, punti $(-4, 0)$ e $(2, 0)$. Asse $y$: $(0, -8)$.
:::

::: esercizio base Disequazioni con la parabola
Risolvi: a) $x^2 - 5x + 4 \le 0$; b) $-x^2 + 9 > 0$; c) $x^2 - 6x + 9 > 0$; d) $x^2 + x + 1 < 0$.
::: soluzione
- a) Zeri $1$ e $4$; parabola verso l'alto, sotto l'asse (o sull'asse) tra gli zeri: $1 \le x \le 4$, cioè $[1, 4]$.
- b) Zeri $-3$ e $3$; $a = -1 < 0$, parabola verso il basso, sopra l'asse tra gli zeri: $-3 < x < 3$.
- c) $x^2 - 6x + 9 = (x - 3)^2$: la parabola tocca l'asse solo in $x = 3$ e altrove sta sopra. Soluzioni: ogni $x \ne 3$.
- d) $\Delta = 1 - 4 = -3 < 0$ e $a > 0$: la parabola sta tutta sopra l'asse e non è mai negativa. Nessuna soluzione.

```retta
titolo: Soluzioni di a) $x^2 - 5x + 4 \le 0$
da: -1 6
int: [1, 4]
```
:::

::: esercizio medio Un punto equidistante
Trova il punto $P$ dell'asse $y$ che ha la stessa distanza da $A = (2, 1)$ e da $B = (4, 3)$.
::: soluzione
Un punto dell'asse $y$ ha la forma $P = (0, y)$. Imponi $d(P, A)^2 = d(P, B)^2$, così spariscono le radici:
$$
(0 - 2)^2 + (y - 1)^2 = (0 - 4)^2 + (y - 3)^2
$$
$4 + y^2 - 2y + 1 = 16 + y^2 - 6y + 9$. I termini $y^2$ si cancellano: $-2y + 5 = -6y + 25$, cioè $4y = 20$, $y = 5$.

$P = (0, 5)$. Controllo: $d(P, A) = \sqrt{4 + 16} = \sqrt{20}$ e $d(P, B) = \sqrt{16 + 4} = \sqrt{20}$.
:::

::: esercizio medio Parallela, perpendicolare e distanza
Data la retta $r: 2x + 3y - 6 = 0$ e il punto $P = (-1, 2)$, scrivi la retta per $P$ parallela a $r$ e quella per $P$ perpendicolare a $r$; calcola la distanza di $P$ da $r$.
::: soluzione
$m_r = -\frac{2}{3}$.

Parallela: $y - 2 = -\frac{2}{3}(x + 1)$; moltiplicando per $3$: $3y - 6 = -2x - 2$, cioè $2x + 3y - 4 = 0$. Ha gli stessi $a$ e $b$ di $r$: cambia solo il termine noto.

Perpendicolare: pendenza $\frac{3}{2}$; $y - 2 = \frac{3}{2}(x + 1)$, cioè $2y - 4 = 3x + 3$, ossia $3x - 2y + 7 = 0$. Controllo: $3 \cdot (-1) - 2 \cdot 2 + 7 = 0$.

Distanza: $d = \frac{|2 \cdot (-1) + 3 \cdot 2 - 6|}{\sqrt{4 + 9}} = \frac{|-2|}{\sqrt{13}} = \frac{2}{\sqrt{13}} = \frac{2\sqrt{13}}{13}$.
:::

::: esercizio medio Circonferenza tangente a una retta
Scrivi l'equazione della circonferenza di centro $C = (2, 3)$ tangente alla retta $3x + 4y + 2 = 0$.
::: soluzione
Tangente vuol dire che il raggio è uguale alla distanza del centro dalla retta:
$$
r = \frac{|3 \cdot 2 + 4 \cdot 3 + 2|}{\sqrt{9 + 16}} = \frac{20}{5} = 4
$$
Equazione: $(x - 2)^2 + (y - 3)^2 = 16$, cioè $x^2 + y^2 - 4x - 6y + 4 + 9 - 16 = 0$, ossia $x^2 + y^2 - 4x - 6y - 3 = 0$.
:::

::: esercizio medio Centro nel vertice di una parabola
Scrivi l'equazione della circonferenza che ha il centro nel vertice della parabola $x = y^2 - 2y - 3$ e passa per l'origine.
::: soluzione
La parabola ha asse orizzontale: $y_V = -\frac{-2}{2} = 1$ e $x_V = 1 - 2 - 3 = -4$, vertice $(-4, 1)$.

Il raggio è la distanza del centro dall'origine: $r = \sqrt{16 + 1} = \sqrt{17}$.

$(x + 4)^2 + (y - 1)^2 = 17$, cioè $x^2 + y^2 + 8x - 2y + 16 + 1 - 17 = 0$, ossia $x^2 + y^2 + 8x - 2y = 0$. Il termine noto è $0$: la circonferenza passa davvero per l'origine.
:::

::: esercizio medio Ellisse e iperbole
Trova vertici, fuochi ed eccentricità dell'ellisse $16x^2 + 25y^2 = 400$; poi vertici, fuochi e asintoti dell'iperbole $9x^2 - 16y^2 = 144$.
::: soluzione
Ellisse: dividi per $400$, $\frac{x^2}{25} + \frac{y^2}{16} = 1$. $a = 5$, $b = 4$, $c = \sqrt{25 - 16} = 3$. Vertici $(\pm 5, 0)$ e $(0, \pm 4)$; fuochi $(\pm 3, 0)$; eccentricità $\frac{3}{5}$.

Iperbole: dividi per $144$, $\frac{x^2}{16} - \frac{y^2}{9} = 1$. $a = 4$, $b = 3$, $c = \sqrt{16 + 9} = 5$. Vertici $(\pm 4, 0)$; fuochi $(\pm 5, 0)$; asintoti $y = \pm\frac{3}{4}x$.
:::

::: esercizio test Una retta con un parametro
Considera le rette $(k - 1)x + (k + 1)y - 4 = 0$, con $k$ reale. Trova $k$ in modo che la retta: a) passi per $(1, 3)$; b) sia parallela all'asse $x$; c) sia parallela alla bisettrice del I e III quadrante; d) sia perpendicolare a $y = \frac{1}{3}x$; e) sia verticale; f) formi un angolo acuto con l'asse $x$. Infine trova il punto per cui passano tutte.
::: soluzione
Per $k \ne -1$ il coefficiente angolare è $m = -\frac{k - 1}{k + 1}$.

- a) $(k - 1) \cdot 1 + (k + 1) \cdot 3 - 4 = 0$, cioè $4k - 2 = 0$, $k = \frac{1}{2}$.
- b) Orizzontale: il coefficiente di $x$ deve essere nullo, $k = 1$. Retta $2y - 4 = 0$, cioè $y = 2$.
- c) $m = 1$: $-(k - 1) = k + 1$, cioè $-k + 1 = k + 1$, $k = 0$. Retta $-x + y - 4 = 0$, cioè $y = x + 4$.
- d) $m = -3$: $-(k - 1) = -3(k + 1)$, cioè $-k + 1 = -3k - 3$, $2k = -4$, $k = -2$.
- e) Verticale: il coefficiente di $y$ deve essere nullo, $k = -1$. Retta $-2x - 4 = 0$, cioè $x = -2$.
- f) Angolo acuto vuol dire $m > 0$: $-\frac{k - 1}{k + 1} > 0$, cioè $\frac{k - 1}{k + 1} < 0$. Numeratore e denominatore devono avere segni opposti: $-1 < k < 1$.

Punto comune: raccogli $k$, $k(x + y) + (-x + y - 4) = 0$. Servono $x + y = 0$ e $-x + y - 4 = 0$; sommando, $2y - 4 = 0$, quindi $y = 2$ e $x = -2$. Tutte le rette passano per $(-2, 2)$: infatti le rette trovate in b) ed e) sono $y = 2$ e $x = -2$.
:::

::: esercizio test Tangente in un punto
Verifica che $P = (-2, 6)$ sta sulla circonferenza $x^2 + y^2 - 2x - 4y - 20 = 0$ e scrivi la retta tangente in $P$.
::: soluzione
Sostituisci: $4 + 36 + 4 - 24 - 20 = 0$, quindi $P$ sta sulla circonferenza. Centro $C = (1, 2)$, raggio $\sqrt{1 + 4 + 20} = 5$.

Pendenza del raggio $CP$: $\frac{6 - 2}{-2 - 1} = -\frac{4}{3}$. La tangente è perpendicolare al raggio: pendenza $\frac{3}{4}$.

$y - 6 = \frac{3}{4}(x + 2)$; moltiplicando per $4$: $4y - 24 = 3x + 6$, cioè $3x - 4y + 30 = 0$.

Controllo: la distanza di $C$ dalla retta è $\frac{|3 - 8 + 30|}{5} = \frac{25}{5} = 5$, proprio il raggio.
:::

::: esercizio test Tangenti con un parametro
Per quali valori di $q$ la retta $y = x + q$ è tangente alla circonferenza $x^2 + y^2 = 8$? Per quali è secante?
::: soluzione
Centro $O$, raggio $\sqrt8 = 2\sqrt2$. La retta in forma implicita è $x - y + q = 0$ e dista dal centro $d = \frac{|q|}{\sqrt2}$.

Tangente: $\frac{|q|}{\sqrt2} = 2\sqrt2$, cioè $|q| = 4$: $q = 4$ oppure $q = -4$.

Secante: $d < r$, cioè $|q| < 4$: $-4 < q < 4$. Per $q < -4$ oppure $q > 4$ la retta è esterna.

Controllo con $q = 4$: $x^2 + (x + 4)^2 = 8$ dà $2x^2 + 8x + 8 = 0$, cioè $(x + 2)^2 = 0$: un solo punto comune, $(-2, 2)$.
:::

::: esercizio test Parabola per tre punti
Trova la parabola $y = ax^2 + bx + c$ che passa per $(0, 1)$, $(1, 0)$ e $(2, 3)$, e il suo vertice.
::: soluzione
Da $(0, 1)$: $c = 1$. Da $(1, 0)$: $a + b + 1 = 0$, cioè $a + b = -1$. Da $(2, 3)$: $4a + 2b + 1 = 3$, cioè $2a + b = 1$.

Sottraendo la seconda dalla terza: $a = 2$, quindi $b = -3$. La parabola è $y = 2x^2 - 3x + 1$.

Vertice: $x_V = \frac{3}{4}$, $y_V = 2 \cdot \frac{9}{16} - \frac{9}{4} + 1 = \frac{9}{8} - \frac{18}{8} + \frac{8}{8} = -\frac{1}{8}$. Quindi $V = \left(\frac{3}{4}, -\frac{1}{8}\right)$.
:::

::: esercizio test Parabola sopra una retta
Per quali $x$ la parabola $y = x^2 - 2x - 3$ sta sopra la retta $y = x + 1$? In quali punti si incontrano?
::: soluzione
"Sopra" vuol dire $x^2 - 2x - 3 > x + 1$, cioè $x^2 - 3x - 4 > 0$. Zeri: $(x - 4)(x + 1) = 0$, $x = -1$ e $x = 4$. La parabola associata è rivolta verso l'alto: positiva fuori dagli zeri, quindi $x < -1$ oppure $x > 4$.

Punti d'incontro: per $x = -1$ si ha $y = 0$, per $x = 4$ si ha $y = 5$: $(-1, 0)$ e $(4, 5)$.

```grafico
titolo: $y = x^2 - 2x - 3$ sta sopra $y = x + 1$ per $x < -1$ oppure $x > 4$
x: -3 6
y: -5 8
proporzioni: libere
f: x^2 - 2x - 3 | rosso | $y = x^2 - 2x - 3$ | o
f: x + 1
testo: -2.1 -2.2 | $y = x + 1$ | bianco
punto: -1 0 | $(-1, 0)$ | no
punto: 4 5 | $(4, 5)$ | e
```
:::

::: esercizio test Riconosci la conica
Di che curva si tratta? a) $x^2 + y^2 - 2x + 4y + 6 = 0$; b) $x = -y^2 + 2y$; c) $4x^2 + 9y^2 = 36$; d) $xy = -3$; e) $x^2 - 4y^2 = 4$.
::: soluzione
- a) Ha la forma di una circonferenza, ma $\frac{a^2}{4} + \frac{b^2}{4} - c = 1 + 4 - 6 = -1 < 0$: nessun punto reale.
- b) Parabola con asse orizzontale, aperta verso sinistra ($a = -1$): $y_V = -\frac{2}{-2} = 1$, $x_V = -1 + 2 = 1$, vertice $(1, 1)$.
- c) Dividi per $36$: $\frac{x^2}{9} + \frac{y^2}{4} = 1$, ellisse con $a = 3$, $b = 2$, $c = \sqrt{9 - 4} = \sqrt5$.
- d) Iperbole equilatera riferita agli asintoti con $k = -3 < 0$: rami nel II e nel IV quadrante.
- e) Dividi per $4$: $\frac{x^2}{4} - y^2 = 1$, iperbole con $a = 2$, $b = 1$, $c = \sqrt5$, asintoti $y = \pm\frac{1}{2}x$.
:::

## Quiz di verifica

```quiz
D: Qual è la distanza tra $A = (1, -3)$ e $B = (6, 9)$?
N: 13
= Le differenze sono $6 - 1 = 5$ e $9 - (-3) = 12$: $d = \sqrt{25 + 144} = \sqrt{169} = 13$ (terna pitagorica $5$, $12$, $13$).

D: Il coefficiente angolare della retta $4x - 2y + 7 = 0$ è
+ $2$
- $-2$
- $\frac{1}{2}$
- $\frac{7}{2}$
= $m = -\frac{a}{b} = -\frac{4}{-2} = 2$; isolando $y$ si ottiene $y = 2x + \frac{7}{2}$. $-2$ dimentica il meno della formula, $\frac{7}{2}$ è l'ordinata all'origine.

D: La retta per $(1, 3)$ perpendicolare a $y = 2x - 5$ è
+ $y = -\frac{1}{2}x + \frac{7}{2}$
- $y = 2x + 1$
- $y = \frac{1}{2}x + \frac{5}{2}$
- $y = -2x + 5$
= Tutte passano per $(1, 3)$: decide la pendenza. La perpendicolare a $m = 2$ ha $m' = -\frac{1}{2}$, l'antireciproco. $y = 2x + 1$ è la parallela; $\frac{1}{2}$ è solo il reciproco, $-2$ solo l'opposto.

D: Quanto dista il punto $P = (3, -2)$ dalla retta $5x + 12y - 4 = 0$?
N: 1
= $d = \frac{|15 - 24 - 4|}{\sqrt{25 + 144}} = \frac{|-13|}{13} = 1$.

D: Vero o falso: le rette $2x - 3y + 1 = 0$ e $6x + 4y - 5 = 0$ sono perpendicolari.
+ Vero
- Falso
= $aa' + bb' = 2 \cdot 6 + (-3) \cdot 4 = 0$. Con le pendenze: $\frac{2}{3} \cdot \left(-\frac{3}{2}\right) = -1$.

D: Vero o falso: $x^2 + y^2 - 2x + 4y + 7 = 0$ è l'equazione di una circonferenza.
- Vero
+ Falso
= Il centro sarebbe $(1, -2)$, ma $r^2 = 1 + 4 - 7 = -2 < 0$: nessun punto reale verifica l'equazione.

D: Centro e raggio della circonferenza $x^2 + y^2 + 8x - 6y = 0$ sono
+ $C = (-4, 3)$ e $r = 5$
- $C = (4, -3)$ e $r = 5$
- $C = (-4, 3)$ e $r = 25$
- $C = (-8, 6)$ e $r = 10$
= Centro $\left(-\frac{8}{2}, -\frac{-6}{2}\right) = (-4, 3)$, raggio $\sqrt{16 + 9 - 0} = 5$. Gli errori tipici: segni del centro non cambiati, $r^2$ scambiato per $r$, coefficienti non divisi per $2$.

D: Quali punti appartengono alla parabola $y = x^2 - 3x + 2$?
+ $(0, 2)$
+ $(2, 0)$
+ $(-1, 6)$
- $(3, 0)$
- $(1, 1)$
= Sostituisci l'ascissa: per $x = 0$ viene $2$, per $x = 2$ viene $4 - 6 + 2 = 0$, per $x = -1$ viene $1 + 3 + 2 = 6$. Invece per $x = 3$ viene $2$ e per $x = 1$ viene $0$.

D: Qual è l'ordinata del vertice della parabola $y = 2x^2 - 8x + 3$?
N: -5
= $x_V = -\frac{-8}{4} = 2$ e $y_V = 2 \cdot 4 - 16 + 3 = -5$. Con la formula: $\Delta = 64 - 24 = 40$ e $-\frac{40}{8} = -5$.

D: Le soluzioni di $x^2 - 4x < 0$ sono
+ $0 < x < 4$
- $x < 0$ oppure $x > 4$
- $x < 4$
- $-2 < x < 2$
= $x(x - 4) = 0$ per $x = 0$ e $x = 4$; la parabola è rivolta verso l'alto e sta sotto l'asse tra gli zeri. "$x < 0$ oppure $x > 4$" risolve la disequazione con $>$; "$x < 4$" nasce dal dividere per $x$ senza conoscerne il segno.

D: I fuochi dell'ellisse $\frac{x^2}{100} + \frac{y^2}{36} = 1$ sono
+ $(\pm 8, 0)$
- $(\pm 10, 0)$
- $(0, \pm 8)$
- $(\pm 2\sqrt{34}, 0)$
= Il denominatore maggiore è sotto $x^2$, quindi i fuochi stanno sull'asse $x$, e $c = \sqrt{100 - 36} = 8$. $(\pm 10, 0)$ sono i vertici; $2\sqrt{34} = \sqrt{136}$ si ottiene sommando i denominatori, come si fa per l'iperbole.

D: Gli asintoti dell'iperbole $\frac{x^2}{16} - \frac{y^2}{4} = 1$ sono
+ $y = \pm\frac{1}{2}x$
- $y = \pm 2x$
- $y = \pm\frac{1}{4}x$
- $y = \pm 4x$
= $a = 4$ e $b = 2$, quindi $y = \pm\frac{b}{a}x = \pm\frac{1}{2}x$. $\pm 2x$ inverte il rapporto; $\pm\frac{1}{4}x$ usa i denominatori senza farne la radice.

D: Quali affermazioni sulla retta $3x + 4y - 12 = 0$ sono vere?
+ Taglia l'asse $x$ in $(4, 0)$.
+ Taglia l'asse $y$ in $(0, 3)$.
+ È parallela alla retta $6x + 8y + 1 = 0$.
- Ha coefficiente angolare $\frac{3}{4}$.
- Passa per l'origine.
= Con $y = 0$ trovi $x = 4$, con $x = 0$ trovi $y = 3$. $m = -\frac{3}{4}$ (non $\frac{3}{4}$), uguale a quello di $6x + 8y + 1 = 0$: sono parallele. Il termine noto non è $0$, quindi non passa per l'origine.

D: Vero o falso: la retta $y = 2x + 1$ è tangente alla parabola $y = x^2 + 2$.
+ Vero
- Falso
= Mettendo a sistema: $x^2 + 2 = 2x + 1$, cioè $x^2 - 2x + 1 = 0$, con $\Delta = 0$. C'è un solo punto comune, $(1, 3)$.

D: Per quale valore di $k$ la retta $(k - 1)x + 2y - 3 = 0$ è perpendicolare alla retta $y = \frac{1}{2}x$?
N: 5
= La pendenza $m = -\frac{k - 1}{2}$ deve essere l'antireciproco di $\frac{1}{2}$, cioè $-2$: $\frac{k - 1}{2} = 2$, quindi $k = 5$.

D: In quali quadranti si trova l'iperbole $xy = -6$?
+ Nel II e nel IV
- Nel I e nel III
- Solo nel IV
- In tutti e quattro
= $xy = -6 < 0$ significa che $x$ e $y$ hanno segni opposti: II quadrante ($x < 0$, $y > 0$) e IV quadrante ($x > 0$, $y < 0$).
```

## Checklist

```checklist
So calcolare la distanza tra due punti e le coordinate del punto medio
So riconoscere le rette parallele agli assi, le bisettrici e le rette per l'origine
So passare dalla forma implicita a quella esplicita e leggere $m$ e $q$
So scrivere la retta per un punto con pendenza data e la retta per due punti
So trovare il punto comune a due rette risolvendo un sistema
So riconoscere rette parallele e perpendicolari e scriverne l'equazione
So calcolare la distanza di un punto da una retta
So riconoscere un fascio di rette e trovarne il centro
So trovare centro e raggio di una circonferenza e capire se è reale
So stabilire se una retta è esterna, tangente o secante a una circonferenza e scrivere la tangente in un punto
So usare un fascio di circonferenze e trovare l'asse radicale
So trovare vertice, asse, fuoco e direttrice di una parabola
So risolvere una disequazione di 2° grado con il grafico della parabola
So riconoscere ellisse e iperbole e trovarne vertici, fuochi e asintoti, anche per l'iperbole $xy = k$
```

---

<!-- FILE: ai/moduli/06-funzioni.md -->
> File: `ai/moduli/06-funzioni.md`

---
modulo: 6
titolo: "Funzioni reali di variabile reale"
breve: "Cos'è una funzione, dominio e grafico, le proprietà principali (iniettiva, inversa, composta, pari, periodica, monotona, limitata, continua), le traslazioni e le funzioni più usate."
ore: 7
unita:
  - "6.1 Definizione di funzione e principali caratteristiche"
  - "6.2 Esempi di funzioni utili"
---

## In breve

- Una **funzione** associa a ogni $x$ del dominio **uno e un solo** valore $f(x)$: nel grafico, ogni retta verticale incontra la curva al massimo una volta.
- **Dominio**: escludi gli zeri dei denominatori e imponi radicando $\ge 0$ nelle radici di indice pari ($> 0$ se la radice sta a denominatore); le radici di indice dispari non pongono condizioni.
- Gli **zeri** di $f$ sono le soluzioni di $f(x) = 0$, cioè le ascisse dei punti in cui il grafico taglia l'asse $x$.
- **Iniettiva**: $x$ diverse danno valori diversi. **Suriettiva**: l'immagine è tutto il codominio. **Biiettiva** vuol dire entrambe, cioè invertibile; il grafico di $f^{-1}$ è il simmetrico di quello di $f$ rispetto alla retta $y = x$.
- **Composta**: $(g \circ f)(x) = g(f(x))$, prima $f$ e poi $g$; in generale $g \circ f \ne f \circ g$.
- **Pari**: $f(-x) = f(x)$, grafico simmetrico rispetto all'asse $y$. **Dispari**: $f(-x) = -f(x)$, simmetrico rispetto all'origine. **Periodica**: $f(x + T) = f(x)$.
- **Traslazioni** (con $c > 0$): $f(x - c)$ sposta il grafico a destra, $f(x + c)$ a sinistra, $f(x) + c$ in alto, $f(x) - c$ in basso.
- Funzioni da riconoscere al volo: costante, a tratti, $|x|$ e $|f(x)|$, lineare $y = mx + q$ (proporzionalità diretta se $q = 0$ e $m \ne 0$), $y = \frac{k}{x}$ (proporzionalità inversa).

## 6.1 Definizione di funzione e principali caratteristiche

### Definizione e nomenclatura

> [!DEF] Funzione
> Una **funzione** $f$ da un insieme $A$ a un insieme $B$ è una legge che associa a **ogni** elemento $x$ di $A$ **uno e un solo** elemento di $B$, indicato con $f(x)$. Si scrive
> $$
> f: A \to B, \qquad x \mapsto f(x)
> $$
> e si legge "$f$ da $A$ in $B$, che a $x$ associa $f(x)$". Qui $A$ e $B$ sono sottoinsiemi di $\R$, l'insieme dei numeri reali: si parla di **funzioni reali di variabile reale**. Spesso si scrive $y = f(x)$.

I nomi da conoscere:

- $A$ è il **dominio**, $B$ il **codominio** (l'insieme di arrivo).
- $x$ è la **variabile indipendente**, $y = f(x)$ la **variabile dipendente**, perché il suo valore dipende da $x$ attraverso la legge.
- $f(x)$ è l'**immagine** di $x$. L'**immagine** di tutta la funzione, $f(A)$, è l'insieme dei valori assunti: può essere più piccola del codominio.
- La **controimmagine** di un valore $y$ è l'insieme delle $x$ del dominio per cui $f(x) = y$: può contenere un solo elemento, più elementi, oppure nessuno (è l'insieme vuoto, $\emptyset$).

> [!ESEMPIO] Immagini e controimmagini di $f(x) = x^2$
> Con $f: \R \to \R$, $f(x) = x^2$: l'immagine di $3$ è $f(3) = 9$. La controimmagine di $4$ è $\{-2, 2\}$ (due elementi), quella di $0$ è $\{0\}$, quella di $-1$ è vuota, perché nessun quadrato è negativo. L'immagine di $f$ è $[0, +\infty)$, più piccola del codominio $\R$.

Altri esempi: $f(x) = 3x - 1$ ha per grafico una retta (funzione lineare); $f(x) = x^2 - 2x$ ha per grafico una parabola (funzione polinomiale di 2° grado); $f: \N \to \N$, $f(n) = 2n$ associa a ogni numero naturale il suo doppio, e la sua immagine, l'insieme dei numeri pari, è più piccola del codominio $\N$.

> [!NOTA] Funzioni algebriche e trascendenti
> Le funzioni **algebriche** si costruiscono a partire da polinomi con somme, differenze, prodotti, quozienti ed estrazioni di radice: sono quelle di questo modulo. Le altre si dicono **trascendenti**: esponenziali, logaritmi e funzioni goniometriche, che hanno moduli propri. Le proprietà che seguono valgono per tutte.

### Il dominio

Quando una funzione è data solo con una formula, il suo **dominio** (o **campo di esistenza**) è l'insieme dei numeri reali per cui la formula ha senso.

> [!METODO] Condizioni di esistenza
> - Frazione: il **denominatore** deve essere $\ne 0$.
> - Radice di indice **pari** ($\sqrt{\;}$, $\sqrt[4]{\;}$, …): **radicando** $\ge 0$.
> - Radice di indice pari **a denominatore**: radicando $> 0$ (deve essere $\ge 0$ e anche $\ne 0$).
> - Radice di indice **dispari** ($\sqrt[3]{\;}$, …): nessuna condizione sul radicando.
> - Se ci sono più condizioni, devono valere **tutte insieme**: si mettono a sistema.
>
> Logaritmi ed esponenziali hanno regole proprie, che vedrai insieme a quelle funzioni.

> [!ESEMPIO] Sei domini
> - $f(x) = \frac{x + 1}{x^2 - 4}$: $x^2 - 4 \ne 0$, quindi $x \ne 2$ e $x \ne -2$. Dominio $\R \setminus \{-2, 2\}$, che si legge "$\R$ privato di $-2$ e $2$".
> - $f(x) = \sqrt{6 - 2x}$: $6 - 2x \ge 0$, cioè $x \le 3$. Dominio $(-\infty, 3]$.
> - $f(x) = \sqrt{x^2 - 5x + 6}$: $(x - 2)(x - 3) \ge 0$; la parabola è rivolta verso l'alto, quindi $x \le 2$ oppure $x \ge 3$.
> - $f(x) = \frac{\sqrt{x}}{x - 4}$: $x \ge 0$ e $x \ne 4$. Dominio $[0, 4) \cup (4, +\infty)$.
> - $f(x) = \frac{1}{\sqrt{x + 3}}$: radice a denominatore, quindi $x + 3 > 0$, cioè $x > -3$.
> - $f(x) = \sqrt[3]{x - 1}$: radice cubica, nessuna condizione. Dominio $\R$.

```retta
titolo: Dominio di $\sqrt{x^2 - 5x + 6}$: $x \le 2$ oppure $x \ge 3$
da: 0 5
int: (-inf, 2]
int: [3, +inf)
```

> [!TRAPPOLA] Il dominio si trova prima di semplificare
> $f(x) = \frac{x^2 - 1}{x - 1}$ ha dominio $x \ne 1$. Semplificando si ottiene $x + 1$, ma il valore $x = 1$ resta escluso: il grafico è la retta $y = x + 1$ **senza il punto** $(1, 2)$. Ricorda anche che le condizioni di un denominatore e di una radice valgono insieme ("e"), non in alternativa.

### Zeri e segno di una funzione

Un numero $c$ è uno **zero** di $f$ se $f(c) = 0$. Trovare gli zeri equivale a risolvere l'equazione $f(x) = 0$, cioè il sistema tra $y = f(x)$ e $y = 0$: graficamente, gli zeri sono le ascisse dei punti in cui il grafico **taglia l'asse $x$**. Allo stesso modo $f(x) > 0$ dove il grafico sta sopra l'asse $x$ e $f(x) < 0$ dove sta sotto; le soluzioni di $f(x) = g(x)$ sono le ascisse dei punti comuni ai due grafici. Il grafico taglia l'asse $y$ nel punto $(0, f(0))$, se $0$ sta nel dominio.

> [!ESEMPIO] Zeri e segno di un polinomio
> $f(x) = x^3 - x^2 - 6x$. Raccogli $x$ e scomponi il trinomio: $f(x) = x(x^2 - x - 6) = x(x - 3)(x + 2)$. Gli zeri sono $-2$, $0$ e $3$. Con lo studio del segno dei fattori: $f(x) > 0$ per $-2 < x < 0$ oppure $x > 3$; $f(x) < 0$ per $x < -2$ oppure $0 < x < 3$.

```grafico
titolo: Gli zeri di $f(x) = x^3 - x^2 - 6x$ sono $-2$, $0$ e $3$
x: -3 4
y: -10 10
proporzioni: libere
f: x^3 - x^2 - 6x | rosso
punto: -2 0
punto: 0 0
punto: 3 0
```

> [!TRAPPOLA] Gli zeri devono stare nel dominio
> $f(x) = \frac{x^2 - 4}{x - 2}$: il numeratore si annulla per $x = 2$ e per $x = -2$, ma $x = 2$ è escluso dal dominio. L'unico zero è $x = -2$.

### Grafico di una funzione

> [!DEF] Grafico
> Il **grafico** di $f$ è l'insieme dei punti del piano $(x, f(x))$, con $x$ nel dominio. Una curva è il grafico di una funzione se e solo se **ogni retta verticale la incontra al massimo in un punto**: due punti sulla stessa verticale vorrebbero dire due valori per la stessa $x$.

Dal grafico si leggono il dominio, proiettando la curva sull'asse $x$, e l'immagine, proiettandola sull'asse $y$.

> [!ESEMPIO] Circonferenza e semicirconferenza
> La circonferenza $x^2 + y^2 = 4$ non è il grafico di una funzione: la retta $x = 1$ la incontra in $(1, \sqrt3)$ e in $(1, -\sqrt3)$. La semicirconferenza superiore $y = \sqrt{4 - x^2}$ invece è una funzione, con dominio $[-2, 2]$ (serve $4 - x^2 \ge 0$) e immagine $[0, 2]$.

```grafico
titolo: La retta $x = 1$ incontra la circonferenza in due punti, la semicirconferenza $y = \sqrt{4 - x^2}$ in uno solo
x: -3 3
y: -3 3
cerchio: 0 0 2 | grigio | tratteggio
f: sqrt(4 - x^2) | rosso | $y = \sqrt{4 - x^2}$ | ne
verticale: 1 | $x = 1$
punto: 1 sqrt(3) | rosso
punto: 1 -sqrt(3) | vuoto
```

### Funzioni iniettive, suriettive, biiettive

> [!DEF] Iniettiva, suriettiva, biiettiva
> - $f$ è **iniettiva** se a elementi distinti del dominio corrispondono immagini distinte: $x_1 \ne x_2 \Rightarrow f(x_1) \ne f(x_2)$ (la freccia $\Rightarrow$ si legge "implica"). In modo equivalente: $f(x_1) = f(x_2) \Rightarrow x_1 = x_2$. Una funzione iniettiva non assume mai due volte lo stesso valore.
> - $f: A \to B$ è **suriettiva** se ogni elemento del codominio è immagine di almeno un elemento del dominio: per ogni $y \in B$ esiste $x \in A$ con $f(x) = y$ (il simbolo $\in$ si legge "appartiene a"). In altre parole $f(A) = B$.
> - $f$ è **biiettiva** (o **biunivoca**) se è sia iniettiva sia suriettiva: c'è una corrispondenza uno a uno tra dominio e codominio.

Sul grafico si guardano le rette orizzontali $y = k$, con $k$ nel codominio: $f$ è iniettiva se ciascuna incontra il grafico **al massimo** una volta, suriettiva se ciascuna lo incontra **almeno** una volta, biiettiva se **esattamente** una volta.

> [!ESEMPIO] Quattro casi
> - $f(x) = 5x - 2$, da $\R$ in $\R$: iniettiva, perché $5x_1 - 2 = 5x_2 - 2$ implica $x_1 = x_2$; suriettiva, perché per ogni $y$ basta prendere $x = \frac{y + 2}{5}$. È biiettiva, come ogni retta non orizzontale.
> - $f(x) = x^2$, da $\R$ in $\R$: non è iniettiva ($f(-2) = f(2) = 4$: per negarlo basta un **controesempio**) e non è suriettiva (i valori negativi non vengono mai assunti). Se come codominio si prende $[0, +\infty)$ diventa suriettiva: la suriettività dipende dal codominio scelto.
> - $f(x) = x^3$, da $\R$ in $\R$: biiettiva; ogni retta orizzontale taglia il grafico una sola volta.
> - $f(x) = \frac{1}{x}$, da $\R \setminus \{0\}$ in $\R$: iniettiva ma non suriettiva, perché il valore $0$ non viene mai assunto.

```grafico
titolo: $y = x^2$ non è iniettiva: la retta $y = 4$ la incontra in $(-2, 4)$ e in $(2, 4)$
x: -4 4
y: -1 6
f: x^2 | rosso | da=-sqrt(6) | a=sqrt(6) | $y = x^2$ | e
orizzontale: 4 | tratteggio | $y = 4$
punto: -2 4 | no
punto: 2 4 | ne
```

### Restrizione di una funzione

> [!DEF] Restrizione
> Se $D \subseteq A$ ($D$ è contenuto in $A$), la **restrizione** di $f$ a $D$ è la funzione $f|_D: D \to B$ che agisce come $f$ ma solo sui punti di $D$: $f|_D(x) = f(x)$ per ogni $x \in D$. Si restringe il dominio; il codominio resta lo stesso.

Serve soprattutto per ottenere una funzione iniettiva: $x^2$ non lo è su $\R$, ma le sue restrizioni a $[0, +\infty)$ e a $(-\infty, 0]$ sì.

### Funzione inversa

> [!DEF] Funzione inversa
> Se $f: A \to B$ è biiettiva, la sua **inversa** $f^{-1}: B \to A$ (si legge "$f$ alla meno uno") associa a ogni $y \in B$ l'unica $x \in A$ tale che $f(x) = y$. Quindi $f^{-1}(f(x)) = x$ e $f(f^{-1}(y)) = y$: la variabile dipendente di $f$ diventa la variabile indipendente di $f^{-1}$.
> Una funzione è **invertibile** se e solo se è biiettiva, e il dominio di $f^{-1}$ è l'immagine di $f$. Il grafico di $f^{-1}$ è il **simmetrico** di quello di $f$ rispetto alla bisettrice $y = x$.

> [!METODO] Calcolare l'inversa
> 1. Controlla che $f$ sia biiettiva; se non lo è, restringi il dominio (e prendi come codominio l'immagine).
> 2. Scrivi $y = f(x)$ e ricava $x$ in funzione di $y$.
> 3. Scambia i nomi delle variabili, per tornare alla scrittura abituale con $x$ variabile indipendente.
> 4. Verifica che $f(f^{-1}(x)) = x$.

> [!ESEMPIO] Inversa di una funzione lineare
> $f(x) = 2x - 6$, da $\R$ in $\R$. Da $y = 2x - 6$ ricavi $x = \frac{y + 6}{2}$; scambiando i nomi, $f^{-1}(x) = \frac{x}{2} + 3$. Verifica: $f\left(\frac{x}{2} + 3\right) = 2\left(\frac{x}{2} + 3\right) - 6 = x$.
> Il punto $(3, 0)$ del grafico di $f$ diventa il punto $(0, 3)$ del grafico di $f^{-1}$; le due rette si incontrano sulla bisettrice, in $(6, 6)$.

```grafico
titolo: $f(x) = 2x - 6$ e $f^{-1}(x) = \frac{x}{2} + 3$ sono simmetriche rispetto a $y = x$
x: -4 10
y: -7 8
f: 2x - 6 | rosso | da=-1/2 | a=7
f: x/2 + 3
f: x | tratteggio | grigio
testo: 1.75 -3.5 | $f$ | bianco
testo: -2.6 2.35 | $f^{-1}$ | bianco
testo: -1.9 -2.9 | $y = x$ | bianco
punto: 3 0 | rosso | $(3, 0)$ | no
punto: 0 3 | $(0, 3)$ | no
punto: 6 6
```

> [!ESEMPIO] Invertire dopo una restrizione
> $f(x) = x^2$ non è invertibile su $\R$. La restrizione a $[0, +\infty)$, con codominio $[0, +\infty)$, è biiettiva: da $y = x^2$ con $x \ge 0$ si ricava $x = \sqrt{y}$, quindi l'inversa è $\sqrt{x}$. La restrizione a $(-\infty, 0]$ ha invece come inversa $-\sqrt{x}$.

```grafico
titolo: La restrizione di $y = x^2$ a $[0, +\infty)$ e la sua inversa $y = \sqrt{x}$
x: -1 4
y: -1 4
f: x^2 | rosso | da=0 | a=2 | $y = x^2$ | o
f: sqrt(x) | $y = \sqrt{x}$ | no
f: x | tratteggio | grigio
f: x^2 | grigio | tratteggio | da=-2 | a=0
```

> [!TRAPPOLA] $f^{-1}$ non è $\frac{1}{f}$
> Qui l'esponente $-1$ non indica il reciproco: per $f(x) = 2x - 6$ l'inversa è $\frac{x}{2} + 3$, mentre $\frac{1}{f(x)} = \frac{1}{2x - 6}$ è tutta un'altra funzione.

### Composizione di funzioni

> [!DEF] Funzione composta
> Date $f: A \to B$ e $g: B \to C$, la **composta** $g \circ f$ (si legge "$g$ composto $f$") è la funzione da $A$ in $C$ definita da
> $$
> (g \circ f)(x) = g(f(x))
> $$
> Si applica **prima** $f$ (funzione **interna**) e **poi** $g$ (funzione **esterna**). Perché si possa fare, l'immagine di $f$ deve essere contenuta nel dominio di $g$; se non lo è, si restringe il dominio di $f$.

> [!ESEMPIO] L'ordine conta
> $f(x) = 2x + 1$ e $g(x) = x^2 - 3$.
> $(g \circ f)(x) = g(2x + 1) = (2x + 1)^2 - 3 = 4x^2 + 4x - 2$.
> $(f \circ g)(x) = f(x^2 - 3) = 2(x^2 - 3) + 1 = 2x^2 - 5$.
> In un punto: $(g \circ f)(1) = g(f(1)) = g(3) = 6$, mentre $(f \circ g)(1) = f(g(1)) = f(-2) = -3$.

> [!ESEMPIO] Composte e dominio
> $f(x) = x - 3$ e $g(x) = \sqrt{x}$. La composta $(g \circ f)(x) = \sqrt{x - 3}$ esiste solo per $x \ge 3$: bisogna restringere $f$ a $[3, +\infty)$, dove $f(x) \ge 0$. L'altra, $(f \circ g)(x) = \sqrt{x} - 3$, ha dominio $x \ge 0$.

Saper riconoscere una composta è utile: $h(x) = (3x - 1)^5$ è $g(f(x))$ con $f(x) = 3x - 1$ e $g(t) = t^5$. Si possono comporre anche tre o più funzioni, sempre partendo da quella più interna.

> [!TRAPPOLA] Composta, non prodotto
> $(g \circ f)(x)$ si legge da destra a sinistra: prima $f$. E non è il prodotto $g(x) \cdot f(x)$: con $f(x) = x - 1$ e $g(x) = x^2$ si ha $(g \circ f)(x) = (x - 1)^2$, mentre $g(x) \cdot f(x) = x^3 - x^2$.

### Funzioni pari e dispari

> [!DEF] Pari e dispari
> Il dominio deve essere simmetrico rispetto a $0$: se contiene $x$, contiene anche $-x$.
> - $f$ è **pari** se $f(-x) = f(x)$ per ogni $x$ del dominio: il grafico è **simmetrico rispetto all'asse $y$**.
> - $f$ è **dispari** se $f(-x) = -f(x)$ per ogni $x$ del dominio: il grafico è **simmetrico rispetto all'origine**.

I nomi vengono dai polinomi: quelli con solo potenze pari di $x$ (le costanti contano come potenze pari), come $x^2$ o $x^4 - 3x^2 + 2$, sono pari; quelli con solo potenze dispari, come $x$ o $x^3 - 3x$, sono dispari. Ma ci sono molte funzioni pari o dispari che non sono polinomi: $|x|$ e $\cos x$ sono pari, $\frac{1}{x}$ e $\sin x$ sono dispari. La maggior parte delle funzioni non è né pari né dispari. Se una funzione dispari è definita in $0$, vale $f(0) = 0$. Sapere che una funzione è pari o dispari permette di studiarla solo per $x \ge 0$ e ottenere il resto per simmetria.

> [!METODO] Stabilire se una funzione è pari o dispari
> 1. Controlla che il dominio sia simmetrico; se non lo è, la funzione non è né pari né dispari.
> 2. Calcola $f(-x)$ mettendo $-x$ al posto di ogni $x$, e semplifica.
> 3. Se ritrovi $f(x)$ è pari; se ritrovi $-f(x)$ è dispari; altrimenti non è né l'una né l'altra (per mostrarlo basta un valore, per esempio $x = 1$).

> [!ESEMPIO] Quattro verifiche
> - $f(x) = x^4 - 3x^2 + 2$: $f(-x) = (-x)^4 - 3(-x)^2 + 2 = x^4 - 3x^2 + 2 = f(x)$, pari.
> - $h(x) = \frac{x}{x^2 + 1}$: $h(-x) = \frac{-x}{x^2 + 1} = -h(x)$, dispari.
> - $k(x) = x^2 - 2x$: $k(-x) = x^2 + 2x$, che non è né $k(x)$ né $-k(x)$ (per esempio $k(1) = -1$ e $k(-1) = 3$): né pari né dispari.
> - $\sqrt{x^2 - 4}$ è pari, con dominio simmetrico $x \le -2$ oppure $x \ge 2$; $\sqrt{x - 1}$ non è né pari né dispari, perché il suo dominio $[1, +\infty)$ non è simmetrico.

```grafico
titolo: $f(x) = x^2 - 2$ è pari: il grafico è simmetrico rispetto all'asse $y$
x: -4 4
y: -3 5
f: x^2 - 2 | rosso
segmento: -2 2 2 2 | tratteggio | grigio
punto: -2 2 | $(-2, 2)$ | no
punto: 2 2 | $(2, 2)$ | ne
```

```grafico
titolo: $g(x) = x^3 - 3x$ è dispari: il grafico è simmetrico rispetto all'origine
x: -4 4
y: -4 4
f: x^3 - 3x | rosso
segmento: -1 2 1 -2 | tratteggio | grigio
punto: -1 2 | $(-1, 2)$ | no
punto: 1 -2 | $(1, -2)$ | se
```

> [!TRAPPOLA] "Non pari" non vuol dire "dispari"
> Le possibilità sono tre, non due: pari, dispari, né l'una né l'altra (l'unica funzione sia pari sia dispari è quella che vale sempre $0$). E attenzione ai segni: $(-x)^3 = -x^3$ ma $(-x)^2 = x^2$, mentre $-x^2$ significa $-(x^2)$.

### Funzioni periodiche

> [!DEF] Funzione periodica
> $f$ è **periodica** di **periodo** $T > 0$ se $f(x + T) = f(x)$ per ogni $x$ del dominio, e $T$ è il più piccolo numero positivo con questa proprietà. Il grafico si ripete identico ogni $T$: basta studiarlo su un intervallo di ampiezza $T$.

Di conseguenza $f(x + 2T) = f(x)$, $f(x - T) = f(x)$ e in generale $f(x + nT) = f(x)$ per ogni numero intero $n$. Gli esempi tipici sono le funzioni goniometriche: $\sin x$ e $\cos x$ hanno periodo $2\pi$.

```grafico
titolo: $y = \sin x$ ha periodo $2\pi$: il tratto tra $0$ e $2\pi$ si ripete uguale
x: -pi 4pi
y: -1.5 1.5
proporzioni: libere
passo-x: pi
passo-y: 1
f: sin(x) | rosso
segmento: 0 -1.25 2pi -1.25 | $T = 2\pi$ | s
segmento: 2pi -1.25 4pi -1.25 | tratteggio | grigio
```

> [!ESEMPIO] Usare il periodo
> $f$ ha periodo $3$ e $f(1) = 5$. Allora $f(4) = f(1 + 3) = 5$, $f(10) = f(1 + 3 \cdot 3) = 5$ e $f(-2) = f(1 - 3) = 5$.

> [!NOTA] Il periodo di $f(kx)$
> Se $f$ ha periodo $T$, allora $f(kx)$ ha periodo $\frac{T}{|k|}$: $\sin(2x)$ ha periodo $\pi$, $\cos\left(\frac{x}{2}\right)$ ha periodo $4\pi$. Una traslazione invece non cambia il periodo.

### Funzioni crescenti, decrescenti, monotone

> [!DEF] Monotonia su un intervallo $I$ del dominio
> Per ogni $x_1, x_2 \in I$ con $x_1 < x_2$:
> - $f$ è **crescente** su $I$ se $f(x_1) < f(x_2)$: il grafico, percorso da sinistra a destra, sale;
> - $f$ è **decrescente** su $I$ se $f(x_1) > f(x_2)$: il grafico scende;
> - $f$ è **non decrescente** su $I$ se $f(x_1) \le f(x_2)$, **non crescente** se $f(x_1) \ge f(x_2)$: sono ammessi tratti orizzontali.
>
> Una funzione che ha una di queste proprietà su $I$ si dice **monotòna** su $I$. Alcuni libri chiamano "strettamente crescente" quella che qui è crescente e "crescente" quella non decrescente.

> [!ESEMPIO] Intervalli di monotonia
> - $y = mx + q$: crescente su tutto $\R$ se $m > 0$, decrescente se $m < 0$; se $m = 0$ è costante, cioè non crescente e non decrescente insieme.
> - $f(x) = x^2 - 6x + 5$: parabola verso l'alto con vertice $(3, -4)$. È decrescente su $(-\infty, 3]$ e crescente su $[3, +\infty)$; non è monotona su tutto $\R$.

> [!TRAPPOLA] Monotona a pezzi non vuol dire monotona
> $f(x) = \frac{1}{x}$ è decrescente su $(-\infty, 0)$ e su $(0, +\infty)$, ma **non** su tutto il suo dominio: $-1 < 1$ e anche $f(-1) = -1 < f(1) = 1$. Gli intervalli di monotonia vanno indicati separatamente.

```grafico
titolo: $y = \frac{1}{x}$ è decrescente su $(-\infty, 0)$ e su $(0, +\infty)$, ma $f(-1) < f(1)$
x: -5 5
y: -4 4
f: 1/x | rosso
punto: -1 -1 | $(-1, -1)$ | so
punto: 1 1 | $(1, 1)$ | ne
```

Una funzione crescente (o decrescente) su tutto il dominio è iniettiva: è un modo comodo per mostrare che è invertibile.

### Funzioni limitate

> [!DEF] Funzione limitata
> - $f$ è **limitata superiormente** se esiste un numero $K$ tale che $f(x) \le K$ per ogni $x$ del dominio;
> - $f$ è **limitata inferiormente** se esiste un numero $K$ tale che $f(x) \ge K$ per ogni $x$ del dominio;
> - $f$ è **limitata** se lo è sia superiormente sia inferiormente: il suo grafico sta tutto in una **striscia orizzontale** del piano.

> [!ESEMPIO] Limitate e non
> - $\sin x$ e $\cos x$ assumono valori tra $-1$ e $1$: sono limitate. Di conseguenza anche $\cos x + 1$, che ha valori tra $0$ e $2$, è limitata.
> - $x^2$ è limitata inferiormente ($x^2 \ge 0$) ma non superiormente.
> - $x^3$ e $\frac{1}{x}$ non sono limitate né superiormente né inferiormente.
> - $f(x) = \frac{1}{x^2 + 1}$: il denominatore vale almeno $1$, quindi $0 < f(x) \le 1$. È limitata, e il valore $1$, raggiunto in $x = 0$, è il suo **massimo**.

```grafico
titolo: $f(x) = \frac{1}{x^2 + 1}$ è limitata: il grafico sta nella striscia tra $y = 0$ e $y = 1$
x: -5 5
y: -1 2
f: 1/(x^2 + 1) | rosso
orizzontale: 1 | tratteggio | $y = 1$
punto: 0 1 | $(0, 1)$ | ne
```

### Funzioni continue

Una definizione precisa di continuità richiede strumenti di analisi matematica; qui basta l'idea intuitiva: una funzione è **continua** su un intervallo se il suo grafico, su quell'intervallo, si traccia **senza staccare la penna dal foglio**. Rette, parabole, polinomi, $|x|$ e $\sqrt{x}$ sono continue. Il grafico di $\frac{1}{x}$ ha due rami perché $x = 0$ non sta nel dominio, ma ciascun ramo si disegna senza staccare la penna.

Una funzione è **discontinua** in un punto del suo dominio quando lì il grafico "salta". Succede spesso con le funzioni definite a tratti e con le grandezze che si contano: il numero di persone presenti in una stanza, in funzione del tempo, cambia a scatti; la temperatura della stanza, invece, varia con continuità.

> [!ESEMPIO] Un salto
> $g(x) = 2x$ per $x \le 1$ e $g(x) = x + 3$ per $x > 1$. In $x = 1$ vale $g(1) = 2$, ma subito a destra di $1$ i valori sono vicini a $1 + 3 = 4$: il grafico salta da $2$ a $4$, e $g$ è discontinua in $x = 1$.

```grafico
titolo: $g(x) = 2x$ per $x \le 1$, $g(x) = x + 3$ per $x > 1$: in $x = 1$ il grafico salta da $2$ a $4$
x: -2 4
y: -3 7
proporzioni: libere
f: 2x | rosso | a=1
f: x + 3 | rosso | da=1
punto: 1 2 | rosso | $(1, 2)$ | se
punto: 1 4 | vuoto | $(1, 4)$ | no
```

### Traslazioni

> [!PROP] Traslare il grafico di $f$ (con $c > 0$)
> - $y = f(x - c)$: il grafico di $f$ spostato **a destra** di $c$;
> - $y = f(x + c)$: spostato **a sinistra** di $c$;
> - $y = f(x) + c$: spostato **in alto** di $c$;
> - $y = f(x) - c$: spostato **in basso** di $c$.
>
> Se la costante sta **dentro** l'argomento la traslazione è orizzontale e va "al contrario" del segno; se sta **fuori** è verticale e segue il segno. Insieme: $y = f(x - h) + k$ è il grafico di $f$ spostato di $h$ in orizzontale e di $k$ in verticale.

Perché "al contrario": in $y = f(x - 2)$ il valore che $f$ assumeva in $0$ viene assunto quando $x - 2 = 0$, cioè in $x = 2$. Tutto succede $2$ unità più a destra.

> [!ESEMPIO] Tre traslazioni
> - $y = (x - 2)^2 + 1$: la parabola $y = x^2$ spostata di $2$ a destra e di $1$ in alto; il vertice passa da $(0, 0)$ a $(2, 1)$. Sviluppando: $y = x^2 - 4x + 5$, e infatti $x_V = \frac{4}{2} = 2$.
> - $y = |x + 3| - 2$: il grafico di $|x|$ spostato di $3$ a sinistra e di $2$ in basso; il vertice della "V" è $(-3, -2)$.
> - $y = \frac{1}{x - 1} + 2$: il grafico di $\frac{1}{x}$ spostato di $1$ a destra e di $2$ in alto. Le rette a cui i rami si avvicinano (gli asintoti) diventano $x = 1$ e $y = 2$; il dominio è $x \ne 1$ e l'immagine è $y \ne 2$.

```grafico
titolo: Da $y = x^2$ a $y = (x - 2)^2 + 1$: $2$ a destra e $1$ in alto
x: -3 5
y: -1 7
f: x^2 | grigio | tratteggio | da=-2.6 | a=2.6 | $y = x^2$ | o
f: (x - 2)^2 + 1 | rosso | $y = (x - 2)^2 + 1$ | e
freccia: 0 0 2 1
punto: 2 1 | rosso | $V$ | s
```

```grafico
titolo: $y = \frac{1}{x - 1} + 2$: il grafico di $\frac{1}{x}$ spostato di $1$ a destra e di $2$ in alto
x: -4 6
y: -3 7
f: 1/(x - 1) + 2 | rosso
verticale: 1 | tratteggio | grigio | $x = 1$
orizzontale: 2 | tratteggio | grigio | $y = 2$
```

> [!TRAPPOLA] Quando davanti a $x$ c'è un coefficiente
> La traslazione orizzontale si legge dopo aver raccolto il coefficiente di $x$: $\sqrt{2x - 4} = \sqrt{2(x - 2)}$ è il grafico di $\sqrt{2x}$ spostato di $2$ a destra, non di $4$. Allo stesso modo, se $g(x) = \cos\left(\frac{x}{2}\right)$, lo spostamento di $c$ a sinistra è $g(x + c) = \cos\left(\frac{x + c}{2}\right)$: quindi $\cos\left(\frac{x}{2} + 1\right) = \cos\left(\frac{x + 2}{2}\right)$ si ottiene da $\cos\left(\frac{x}{2}\right)$ spostando di $2$ a sinistra.

> [!NOTA] Simmetrie
> $y = -f(x)$ è il simmetrico del grafico di $f$ rispetto all'asse $x$; $y = f(-x)$ è il simmetrico rispetto all'asse $y$. Una funzione pari coincide con $f(-x)$; per una dispari $f(-x) = -f(x)$.

> [!TEST] Funzioni al test
> Nelle domande sul dominio a scelta tra quattro prova i valori "di confine" delle opzioni: un numero che annulla un denominatore non può stare nel dominio; un numero che annulla il radicando di una radice pari (non a denominatore) di solito sì. Per pari e dispari, anche in una scelta multipla, calcola $f(-x)$ per ciascuna opzione, oppure confronta $f(1)$ e $f(-1)$ per scartare in fretta. Una composta calcolata in un punto dà un numero: calcola prima la funzione interna. Per le traslazioni: dentro l'argomento al contrario del segno, fuori come il segno.

## 6.2 Esempi di funzioni utili

### Funzione costante

> [!DEF] Funzione costante
> $f: \R \to \R$, $f(x) = k$, con $k$ numero reale fissato: tutti gli elementi del dominio hanno la stessa immagine $k$. Il grafico è la retta orizzontale $y = k$.

Una funzione costante è pari, limitata e non iniettiva; la sua immagine è il solo valore $k$. Per esempio $f(x) = -2$ è una funzione costante negativa: il suo grafico sta tutto sotto l'asse $x$.

```grafico
titolo: Due funzioni costanti: $y = 3$ e $y = -2$
x: -5 5
y: -3 4
f: 3 | $y = 3$ | n
f: -2 | rosso | $y = -2$ | s
```

### Funzioni definite a tratti

Una funzione è **definita a tratti** quando è data da espressioni diverse su intervalli diversi del dominio. Si scrive con una parentesi graffa:
$$
f(x) = \begin{cases} -x + 1 & \text{se } x < 1 \\ x^2 - 1 & \text{se } x \ge 1 \end{cases}
$$
Per calcolare $f$ in un punto, prima si guarda in quale intervallo cade $x$, poi si usa la formula di quel tratto: $f(-2) = 2 + 1 = 3$, $f(0) = 1$, $f(1) = 1 - 1 = 0$, $f(2) = 4 - 1 = 3$. Il grafico è un pezzo di retta per $x < 1$ e un pezzo di parabola per $x \ge 1$; qui i due tratti si raccordano nel punto $(1, 0)$ e la funzione è continua. L'immagine è $[0, +\infty)$, e $f$ non è iniettiva, perché $f(-2) = f(2) = 3$.

```grafico
titolo: La funzione a tratti $f(x) = -x + 1$ per $x < 1$, $f(x) = x^2 - 1$ per $x \ge 1$
x: -3 3
y: -1 5
f: -x + 1 | rosso | a=1
f: x^2 - 1 | rosso | da=1 | a=sqrt(6)
orizzontale: 3 | tratteggio | grigio
punto: 1 0 | rosso | $(1, 0)$ | se
punto: -2 3 | $(-2, 3)$ | no
punto: 2 3 | $(2, 3)$ | no
```

> [!TRAPPOLA] Condizioni che si sovrappongono
> Gli intervalli dei tratti non devono assegnare due valori diversi alla stessa $x$. Se due condizioni comprendono lo stesso punto (per esempio "$x \le 0$" e "$x \ge 0$"), lì le due formule devono dare lo stesso valore. Per capire a quale tratto appartiene un estremo, guarda dove c'è l'uguale.

### Funzione valore assoluto

> [!DEF] Valore assoluto
> $$
> f(x) = |x| = \begin{cases} x & \text{se } x \ge 0 \\ -x & \text{se } x < 0 \end{cases}
> $$
> Il grafico è una "V" con vertice nell'origine, formata dalla bisettrice $y = x$ per $x \ge 0$ e da $y = -x$ per $x < 0$. La funzione è pari, ha immagine $[0, +\infty)$, è decrescente su $(-\infty, 0]$ e crescente su $[0, +\infty)$.

> [!METODO] Grafico di $y = |f(x)|$
> $$
> |f(x)| = \begin{cases} f(x) & \text{dove } f(x) \ge 0 \\ -f(x) & \text{dove } f(x) < 0 \end{cases}
> $$
> 1. Disegna il grafico di $y = f(x)$.
> 2. Lascia com'è la parte che sta sopra l'asse $x$ (o sull'asse).
> 3. Ribalta verso l'alto, simmetricamente rispetto all'asse $x$, la parte che sta sotto.
>
> Il risultato non va mai sotto l'asse $x$.

> [!ESEMPIO] $y = |x^2 - 4|$
> La parabola $y = x^2 - 4$ sta sotto l'asse $x$ per $-2 < x < 2$, con vertice $(0, -4)$. Ribaltando quel tratto si ottiene un arco con il punto più alto in $(0, 4)$; fuori da $[-2, 2]$ il grafico non cambia.
> Il grafico permette di contare le soluzioni di $|x^2 - 4| = k$: la retta $y = 3$ lo taglia in $4$ punti ($x = \pm 1$ e $x = \pm\sqrt7$), la retta $y = 4$ in $3$ punti ($x = 0$ e $x = \pm 2\sqrt2$), la retta $y = 5$ in $2$ punti ($x = \pm 3$).

```grafico
titolo: $y = |x^2 - 4|$: il tratto della parabola sotto l'asse $x$ viene ribaltato
x: -4 4
y: -4.5 5.5
f: x^2 - 4 | grigio | tratteggio | da=-3 | a=3 | $y = x^2 - 4$ | se
f: abs(x^2 - 4) | rosso | $y = \lvert x^2 - 4 \rvert$ | e
orizzontale: 3 | grigio | sottile | $y = 3$
punto: 0 4 | rosso | $(0, 4)$ | ne
```

### Funzione lineare e proporzionalità diretta

> [!DEF] Funzione lineare
> $f: \R \to \R$, $f(x) = mx + q$, con $m$ e $q$ reali: il grafico è la retta con coefficiente angolare $m$ e ordinata all'origine $q$. Se $q = 0$ diventa $y = mx$ e la retta passa per l'origine.

> [!DEF] Proporzionalità diretta
> Due grandezze $x$ e $y$ sono **direttamente proporzionali** se $y = kx$, con $k \ne 0$ costante, cioè se il **rapporto** $\frac{y}{x}$ è costante (per $x \ne 0$). Se $x$ raddoppia, $y$ raddoppia; se $x$ triplica, $y$ triplica. Il numero $k$ è la **costante di proporzionalità** e il grafico è una retta per l'origine.

Esempi: il prezzo di $x$ quaderni da $3$ € l'uno è $y = 3x$, con costante $3$. In fisica, dalla seconda legge della dinamica $F = ma$ (forza uguale a massa per accelerazione) si ricava che, a parità di massa, l'accelerazione è direttamente proporzionale alla forza: raddoppiando la forza, l'accelerazione raddoppia.

> [!TRAPPOLA] Una retta che non passa per l'origine non è proporzionalità
> Un taxi che costa $3$ € alla partenza più $2$ € al chilometro ha costo $y = 2x + 3$: la relazione è lineare, ma raddoppiando i chilometri il costo non raddoppia ($1$ km costa $5$ €, $2$ km costano $7$ €). Non è una proporzionalità diretta.

### Funzione $\frac{1}{x}$ e proporzionalità inversa

> [!DEF] Proporzionalità inversa
> Due grandezze sono **inversamente proporzionali** se $y = \frac{k}{x}$, con $k \ne 0$ costante, cioè se il **prodotto** $xy = k$ è costante. Se $x$ raddoppia, $y$ si dimezza. Il caso più semplice è
> $$
> f(x) = \frac{1}{x}, \qquad x \ne 0
> $$
> il cui grafico è l'iperbole equilatera riferita agli asintoti, $xy = 1$: gli asintoti sono gli assi cartesiani.

Proprietà di $\frac{1}{x}$: dominio e immagine $\R \setminus \{0\}$; dispari; iniettiva; decrescente su $(-\infty, 0)$ e su $(0, +\infty)$ presi separatamente; non limitata.

> [!ESEMPIO] Tempo e velocità
> Per percorrere $120$ km: a $60$ km/h servono $2$ ore, a $40$ km/h $3$ ore, a $120$ km/h $1$ ora. Il prodotto velocità per tempo vale sempre $120$: $t = \frac{120}{v}$, proporzionalità inversa. Anche $a = \frac{F}{m}$: a parità di forza, se la massa raddoppia l'accelerazione si dimezza.

```grafico
titolo: Proporzionalità diretta $y = 3x$ e inversa $y = \frac{12}{x}$, per $x > 0$
x: -0.6 8
y: -1.2 13
proporzioni: libere
f: 3x | da=0 | a=13/3 | $y = 3x$ | o
f: 12/x | rosso | da=12/13 | $y = \frac{12}{x}$ | ne
punto: 2 6 | $(2, 6)$ | e
```

### Carta d'identità delle funzioni viste

| $f(x)$ | Dominio | Immagine | Simmetria | Monotonia |
|---|---|---|---|---|
| $k$ | $\R$ | $\{k\}$ | pari (se $k = 0$ anche dispari) | costante |
| $mx + q$, $m \ne 0$ | $\R$ | $\R$ | dispari se $q = 0$, altrimenti nessuna | crescente se $m > 0$, decrescente se $m < 0$ |
| $x^2$ e $|x|$ | $\R$ | $[0, +\infty)$ | pari | decrescente su $(-\infty, 0]$, crescente su $[0, +\infty)$ |
| $x^3$ | $\R$ | $\R$ | dispari | crescente |
| $\frac{1}{x}$ | $\R \setminus \{0\}$ | $\R \setminus \{0\}$ | dispari | decrescente su $(-\infty, 0)$ e su $(0, +\infty)$ |
| $\sqrt{x}$ | $[0, +\infty)$ | $[0, +\infty)$ | nessuna | crescente |

> [!TEST] Funzioni utili al test
> Per contare le soluzioni di un'equazione come $|f(x)| = k$ disegna il grafico e conta le intersezioni con la retta orizzontale $y = k$. Per riconoscere una proporzionalità da una tabella di valori: rapporto $\frac{y}{x}$ costante vuol dire diretta, prodotto $xy$ costante vuol dire inversa, nessuno dei due vuol dire nessuna proporzionalità. Con le funzioni a tratti, prima di calcolare guarda sempre in quale tratto cade $x$.

## Esercizi

::: esercizio base Domini
Trova il dominio di: a) $f(x) = \frac{2x + 1}{x^2 - 9}$; b) $g(x) = \sqrt{8 - 2x}$; c) $h(x) = \frac{\sqrt[3]{x - 5}}{x + 1}$; d) $k(x) = \sqrt{x^2 - 3x - 4}$.
::: soluzione
- a) $x^2 - 9 \ne 0$: $x \ne 3$ e $x \ne -3$. Dominio $\R \setminus \{-3, 3\}$.
- b) $8 - 2x \ge 0$: $x \le 4$. Dominio $(-\infty, 4]$.
- c) La radice cubica non pone condizioni; resta il denominatore: $x \ne -1$.
- d) $x^2 - 3x - 4 \ge 0$, cioè $(x - 4)(x + 1) \ge 0$: la parabola è rivolta verso l'alto ed è positiva fuori dagli zeri. Dominio $x \le -1$ oppure $x \ge 4$, cioè $(-\infty, -1] \cup [4, +\infty)$.
:::

::: esercizio base Pari o dispari?
Stabilisci se sono pari, dispari o nessuna delle due: $f(x) = x^4 - 2x^2$, $g(x) = x^3 - 4x$, $h(x) = x^2 + x$, $k(x) = |x| + x^2$, $l(x) = \frac{x}{x^2 + 4}$.
::: soluzione
Tutti i domini sono $\R$, che è simmetrico.
- $f(-x) = x^4 - 2x^2 = f(x)$: pari.
- $g(-x) = -x^3 + 4x = -(x^3 - 4x) = -g(x)$: dispari.
- $h(-x) = x^2 - x$, né $h(x)$ né $-h(x)$ (per esempio $h(1) = 2$ e $h(-1) = 0$): né pari né dispari.
- $k(-x) = |-x| + (-x)^2 = |x| + x^2 = k(x)$: pari.
- $l(-x) = \frac{-x}{x^2 + 4} = -l(x)$: dispari.
:::

::: esercizio base Due composte
Con $f(x) = x^2 + 1$ e $g(x) = 3x - 2$ calcola $(f \circ g)(x)$, $(g \circ f)(x)$, $(f \circ g)(1)$ e $(g \circ f)(1)$.
::: soluzione
$(f \circ g)(x) = f(3x - 2) = (3x - 2)^2 + 1 = 9x^2 - 12x + 5$.

$(g \circ f)(x) = g(x^2 + 1) = 3(x^2 + 1) - 2 = 3x^2 + 1$.

$(f \circ g)(1) = f(g(1)) = f(1) = 2$ (controllo: $9 - 12 + 5 = 2$). $(g \circ f)(1) = g(f(1)) = g(2) = 4$ (controllo: $3 + 1 = 4$). I due valori sono diversi: la composizione non è commutativa.
:::

::: esercizio base Un'inversa
Trova l'inversa di $f(x) = 4x - 3$ e verifica che $f^{-1}(f(2)) = 2$.
::: soluzione
$f$ è una retta non orizzontale, quindi è biiettiva da $\R$ in $\R$. Da $y = 4x - 3$ si ricava $x = \frac{y + 3}{4}$; scambiando i nomi, $f^{-1}(x) = \frac{x + 3}{4}$.

Verifica: $f(2) = 8 - 3 = 5$ e $f^{-1}(5) = \frac{8}{4} = 2$.
:::

::: esercizio base Una traslazione
Descrivi come si ottiene il grafico di $y = (x + 1)^2 - 4$ da quello di $y = x^2$; trova il vertice, gli zeri e il punto sull'asse $y$.
::: soluzione
$x + 1$ dentro l'argomento: $1$ a sinistra; $-4$ fuori: $4$ in basso. Il vertice passa da $(0, 0)$ a $(-1, -4)$.

Zeri: $(x + 1)^2 = 4$, cioè $x + 1 = 2$ oppure $x + 1 = -2$: $x = 1$ e $x = -3$. Asse $y$: $(0 + 1)^2 - 4 = -3$, punto $(0, -3)$.

```grafico
titolo: Da $y = x^2$ a $y = (x + 1)^2 - 4$
x: -5 3
y: -5 4
f: x^2 | grigio | tratteggio | da=-2 | a=2
f: (x + 1)^2 - 4 | rosso | a=2
testo: 2.9 -4.5 | $y = (x + 1)^2 - 4$ | rosso | o
punto: -1 -4 | rosso | $V$ | s
punto: 1 0 | se
punto: -3 0 | so
punto: 0 -3 | se
```
:::

::: esercizio medio Domini con frazioni e radici
Trova il dominio di $f(x) = \sqrt{\frac{x - 2}{x + 3}}$ e di $g(x) = \frac{\sqrt{x + 4}}{x - 1}$.
::: soluzione
$f$: serve $\frac{x - 2}{x + 3} \ge 0$, con $x \ne -3$. Il numeratore è $\ge 0$ per $x \ge 2$, il denominatore è $> 0$ per $x > -3$; la frazione è positiva o nulla quando hanno lo stesso segno: $x < -3$ oppure $x \ge 2$. Il valore $-3$ è escluso (annulla il denominatore), il $2$ è incluso (annulla il numeratore).

$g$: $x + 4 \ge 0$ **e** $x - 1 \ne 0$, cioè $x \ge -4$ con $x \ne 1$: dominio $[-4, 1) \cup (1, +\infty)$.

```retta
titolo: Dominio di $\sqrt{\frac{x - 2}{x + 3}}$: $x < -3$ oppure $x \ge 2$
da: -6 5
int: (-inf, -3)
int: [2, +inf)
```
:::

::: esercizio medio Zeri e segno
a) Trova zeri e segno di $f(x) = x^3 - 4x^2 + 3x$. b) Trova gli zeri di $g(x) = \frac{x}{x + 1} - \frac{2}{x - 2}$.
::: soluzione
a) $f(x) = x(x^2 - 4x + 3) = x(x - 1)(x - 3)$: zeri $0$, $1$, $3$. Con la tabella dei segni dei tre fattori: $f(x) > 0$ per $0 < x < 1$ oppure $x > 3$; $f(x) < 0$ per $x < 0$ oppure $1 < x < 3$.

b) Dominio: $x \ne -1$ e $x \ne 2$. Con il denominatore comune $(x + 1)(x - 2)$, $g(x) = 0$ quando $x(x - 2) - 2(x + 1) = 0$, cioè $x^2 - 4x - 2 = 0$:
$$
x = \frac{4 \pm \sqrt{16 + 8}}{2} = \frac{4 \pm 2\sqrt6}{2} = 2 \pm \sqrt6
$$
Nessuno dei due valori è $-1$ o $2$: gli zeri sono $2 + \sqrt6$ e $2 - \sqrt6$.
:::

::: esercizio medio Una funzione a tratti
$$
f(x) = \begin{cases} x + 3 & \text{se } x < -1 \\ x^2 + 1 & \text{se } -1 \le x \le 1 \\ 2 & \text{se } x > 1 \end{cases}
$$
Calcola $f(-3)$, $f(-1)$, $f(0)$ e $f(5)$; disegna il grafico; stabilisci se $f$ è continua, qual è la sua immagine, se è limitata e dove cresce o decresce.
::: soluzione
$f(-3) = -3 + 3 = 0$; $f(-1) = 1 + 1 = 2$; $f(0) = 1$; $f(5) = 2$.

In $x = -1$ il primo tratto arriva a $-1 + 3 = 2$, lo stesso valore di $f(-1)$; in $x = 1$ il secondo tratto vale $2$, come il terzo. Non ci sono salti: $f$ è continua.

Immagine: il primo tratto dà tutti i valori minori di $2$, il secondo i valori tra $1$ e $2$, il terzo il valore $2$. Immagine $(-\infty, 2]$: $f$ è limitata superiormente (il massimo è $2$) ma non inferiormente.

Crescente su $(-\infty, -1]$, decrescente su $[-1, 0]$, crescente su $[0, 1]$, costante su $[1, +\infty)$. Non è iniettiva: $f(1) = f(5) = 2$.

```grafico
titolo: La funzione a tratti dell'esercizio
x: -5 4
y: -2 4
f: x + 3 | rosso | a=-1
f: x^2 + 1 | rosso | da=-1 | a=1
f: 2 | rosso | da=1
punto: -1 2 | $(-1, 2)$ | no
punto: 0 1 | $(0, 1)$ | se
punto: -3 0 | $(-3, 0)$ | no
```
:::

::: esercizio medio Contare le soluzioni con il valore assoluto
Disegna $y = |x^2 - 2x - 3|$ e usa il grafico per dire quante soluzioni ha l'equazione $|x^2 - 2x - 3| = k$ per $k = 2$, $k = 4$, $k = 5$.
::: soluzione
$x^2 - 2x - 3 = (x - 3)(x + 1)$: zeri $-1$ e $3$, vertice $(1, -4)$. Tra $-1$ e $3$ la parabola sta sotto l'asse: ribaltata, diventa un arco con il punto più alto in $(1, 4)$.
- $k = 2$: la retta $y = 2$ taglia i due rami esterni e l'arco due volte: $4$ soluzioni.
- $k = 4$: tocca l'arco solo nel punto più alto e taglia i due rami esterni: $3$ soluzioni.
- $k = 5$: passa sopra l'arco e taglia solo i rami esterni: $2$ soluzioni.

Controllo algebrico per $k = 4$: $x^2 - 2x - 3 = 4$ dà $x = 1 \pm 2\sqrt2$; $x^2 - 2x - 3 = -4$ dà $(x - 1)^2 = 0$, cioè $x = 1$.

```grafico
titolo: $y = |x^2 - 2x - 3|$ e le rette $y = 2$, $y = 4$, $y = 5$
x: -3 5
y: -5 7
proporzioni: libere
f: abs(x^2 - 2x - 3) | rosso
f: x^2 - 2x - 3 | grigio | tratteggio | da=-1 | a=3
orizzontale: 2 | grigio | sottile | $y = 2$
orizzontale: 4 | grigio | sottile | $y = 4$
orizzontale: 5 | grigio | sottile | $y = 5$
```
:::

::: esercizio medio Un grafico spazio-tempo
Il grafico mostra la distanza $s$ da casa, in km, di un'auto in funzione del tempo $t$, in ore. Racconta il viaggio; indica dove la funzione è crescente, decrescente o costante; è continua? È iniettiva? È limitata?

```grafico
titolo: Distanza da casa $s$ (km) in funzione del tempo $t$ (ore)
x: -0.4 5
y: -8 70
nomi: t s
proporzioni: libere
passo-y: 10
segmento: 0 0 1 60 | rosso
segmento: 1 60 2 60 | rosso
segmento: 2 60 3 20 | rosso
segmento: 3 20 4 20 | rosso
```
::: soluzione
Nella prima ora l'auto si allontana da casa fino a $60$ km: la funzione è crescente su $[0, 1]$. Dalla prima alla seconda ora è ferma: costante su $[1, 2]$. Poi torna indietro fino a $20$ km da casa: decrescente su $[2, 3]$. Infine si ferma di nuovo: costante su $[3, 4]$.

È continua: la posizione non può "saltare", e il grafico si traccia senza staccare la penna. Non è iniettiva: per esempio la distanza di $40$ km viene raggiunta due volte, all'andata e al ritorno. È limitata: $0 \le s \le 60$.
:::

::: esercizio medio Usare la periodicità
$f$ è periodica di periodo $4$, con $f(1) = 3$ e $f(2) = -1$. Calcola $f(9)$, $f(-2)$, $f(14)$ e $f(-7)$.
::: soluzione
Si può aggiungere o togliere il periodo quante volte si vuole:
$f(9) = f(1 + 2 \cdot 4) = f(1) = 3$; $f(-2) = f(2 - 4) = f(2) = -1$; $f(14) = f(2 + 3 \cdot 4) = f(2) = -1$; $f(-7) = f(1 - 2 \cdot 4) = f(1) = 3$.
:::

::: esercizio test Proporzionalità da una tabella
Per ciascuna riga di valori di $y$ stabilisci se $y$ è direttamente proporzionale a $x$, inversamente proporzionale, o nessuna delle due; se c'è una legge, scrivila.

| $x$ | $2$ | $4$ | $5$ | $10$ |
|---|---|---|---|---|
| $y$, riga A | $10$ | $5$ | $4$ | $2$ |
| $y$, riga B | $5$ | $10$ | $12{,}5$ | $25$ |
| $y$, riga C | $7$ | $11$ | $13$ | $23$ |

::: soluzione
- A: i prodotti $xy$ valgono sempre $20$: proporzionalità inversa, $y = \frac{20}{x}$. Per esempio per $x = 8$ si avrebbe $y = \frac{20}{8} = 2{,}5$.
- B: i rapporti $\frac{y}{x}$ valgono sempre $2{,}5$: proporzionalità diretta, $y = \frac{5}{2}x$.
- C: non sono costanti né i rapporti ($\frac{7}{2} \ne \frac{11}{4}$) né i prodotti ($14 \ne 44$). I valori crescono di $2$ per ogni unità di $x$: $y = 2x + 3$, lineare ma non proporzionale.
:::

::: esercizio test Limitata o no?
Sapendo che $\cos x$ assume tutti e soli i valori dell'intervallo $[-1, 1]$, stabilisci se queste funzioni sono limitate e trova la loro immagine: a) $\cos(x + 5)$; b) $\cos x - 4$; c) $\frac{1}{\cos x + 2}$; d) $\frac{1}{\cos x - 1}$.
::: soluzione
- a) È una traslazione orizzontale: i valori assunti non cambiano. Immagine $[-1, 1]$, limitata.
- b) Traslazione verso il basso di $4$: immagine $[-5, -3]$, limitata.
- c) $\cos x + 2$ assume i valori di $[1, 3]$, sempre positivi; il reciproco va da $\frac{1}{3}$ (quando il denominatore vale $3$) a $1$ (quando vale $1$). Immagine $\left[\frac{1}{3}, 1\right]$, limitata.
- d) Dove $\cos x = 1$ il denominatore si annulla e la funzione non è definita. Altrove $\cos x - 1$ assume tutti i valori di $[-2, 0)$, sempre negativi. Il reciproco vale $-\frac{1}{2}$ quando il denominatore vale $-2$; quando il denominatore si avvicina a $0$, il reciproco è negativo e grande quanto si vuole in valore assoluto. Immagine $\left(-\infty, -\frac{1}{2}\right]$: la funzione è limitata superiormente (il massimo è $-\frac{1}{2}$) ma non inferiormente.
:::

::: esercizio test Inversa di una funzione fratta
Considera $f(x) = \frac{2x - 1}{x + 3}$. Trova il dominio, l'immagine e l'inversa.
::: soluzione
Dominio: $x \ne -3$. Da $y = \frac{2x - 1}{x + 3}$: $y(x + 3) = 2x - 1$, cioè $xy + 3y = 2x - 1$, quindi $x(y - 2) = -3y - 1$ e
$$
x = \frac{-3y - 1}{y - 2} = \frac{3y + 1}{2 - y}
$$
Si può ricavare $x$ per ogni $y \ne 2$, e in un solo modo: l'immagine di $f$ è $\R \setminus \{2\}$ e $f$ è biiettiva da $\R \setminus \{-3\}$ in $\R \setminus \{2\}$. Scambiando i nomi: $f^{-1}(x) = \frac{3x + 1}{2 - x}$, definita per $x \ne 2$.

Verifica in un punto: $f(0) = -\frac{1}{3}$ e $f^{-1}\left(-\frac{1}{3}\right) = \frac{-1 + 1}{2 + \frac{1}{3}} = 0$.
:::

::: esercizio test Il dominio nascosto delle composte
Con $f(x) = \sqrt{x}$ e $g(x) = 4 - x^2$, scrivi $f \circ g$ e $g \circ f$ con i loro domini.
::: soluzione
$(f \circ g)(x) = \sqrt{4 - x^2}$: serve $4 - x^2 \ge 0$, cioè $-2 \le x \le 2$.

$(g \circ f)(x) = 4 - (\sqrt{x})^2 = 4 - x$, ma solo dove esiste $\sqrt{x}$: il dominio è $x \ge 0$. La formula semplificata $4 - x$ "nasconde" una condizione che viene dalla funzione interna.
:::

::: esercizio test Traslazioni, dominio e immagine
$f$ ha dominio $[0, 5]$ e immagine $[-3, 4]$. Trova dominio e immagine di $g(x) = f(x + 2) - 1$.
::: soluzione
Il grafico di $g$ è quello di $f$ spostato di $2$ a sinistra e di $1$ in basso. Dominio: serve $0 \le x + 2 \le 5$, cioè $-2 \le x \le 3$: $[-2, 3]$. Immagine: ogni valore diminuisce di $1$: $[-4, 3]$.
:::

::: esercizio test Quale formula?
Il grafico rappresenta una di queste tre funzioni. Quale? Motiva la risposta scartando le altre.
$$
f_1(x) = \begin{cases} x + 2 & \text{se } x < 0 \\ 2 - x^2 & \text{se } x \ge 0 \end{cases}
$$
$$
f_2(x) = \begin{cases} x + 2 & \text{se } x < 0 \\ x^2 + 2 & \text{se } x \ge 0 \end{cases}
$$
$$
f_3(x) = \begin{cases} -x + 2 & \text{se } x < 0 \\ 2 - x^2 & \text{se } x \ge 0 \end{cases}
$$

```grafico
titolo: Quale funzione?
x: -4 3
y: -3 4
f: x + 2 | rosso | a=0
f: 2 - x^2 | rosso | da=0
```
::: soluzione
Per $x < 0$ il grafico è una retta che **sale** e passa per $(-2, 0)$: è $y = x + 2$ (la retta $y = -x + 2$ di $f_3$ scende). Per $x \ge 0$ è una parabola rivolta verso il **basso** con vertice $(0, 2)$: è $y = 2 - x^2$ (la $x^2 + 2$ di $f_2$ è rivolta verso l'alto). Il grafico è quello di $f_1$. Controllo: $f_1(1) = 1$ e $f_1(2) = -2$, come si legge dalla figura.
:::

## Quiz di verifica

```quiz
D: Qual è il dominio di $f(x) = \frac{\sqrt{x + 2}}{x - 3}$?
+ $[-2, 3) \cup (3, +\infty)$
- $(-2, 3) \cup (3, +\infty)$
- $[-2, +\infty)$
- $\R \setminus \{3\}$
= Servono $x + 2 \ge 0$ (la radice non è a denominatore, quindi $-2$ è incluso) e $x - 3 \ne 0$. Le altre opzioni escludono $-2$, dimenticano il denominatore o dimenticano la radice.

D: Data $f(x) = 2x^2 - 3x$, quanto vale $f(-2)$?
N: 14
= $f(-2) = 2 \cdot (-2)^2 - 3 \cdot (-2) = 8 + 6 = 14$. Errore tipico: scrivere $-2^2 = -4$ invece di $(-2)^2 = 4$.

D: Con $f(x) = x - 1$ e $g(x) = x^2$, la funzione $(g \circ f)(x)$ è
+ $(x - 1)^2$
- $x^2 - 1$
- $x^3 - x^2$
- $x^2 + x - 1$
= Prima $f$, poi $g$: $g(x - 1) = (x - 1)^2$. $x^2 - 1$ è $(f \circ g)(x)$, $x^3 - x^2$ è il prodotto $g(x) \cdot f(x)$, $x^2 + x - 1$ è la somma.

D: Se $f(x) = 3x + 6$, quanto vale $f^{-1}(9)$?
N: 1
= $f^{-1}(9)$ è la $x$ per cui $f(x) = 9$: $3x + 6 = 9$, quindi $x = 1$. Non va confuso con $\frac{1}{f(9)} = \frac{1}{33}$.

D: Quali di queste funzioni sono dispari?
+ $x^3 + x$
+ $\frac{1}{x}$
+ $x|x|$
- $x^2 + x$
- $|x|$
= Calcola $f(-x)$: $(-x)^3 + (-x) = -(x^3 + x)$; $\frac{1}{-x} = -\frac{1}{x}$; $(-x)|-x| = -x|x|$. Invece $x^2 + x$ non è né pari né dispari e $|x|$ è pari.

D: Vero o falso: la funzione $f(x) = x^2$, da $\R$ in $\R$, è iniettiva.
- Vero
+ Falso
= Basta un controesempio: $f(-3) = f(3) = 9$.

D: Vero o falso: $f(x) = \frac{1}{x}$ è decrescente su tutto il suo dominio.
- Vero
+ Falso
= È decrescente su $(-\infty, 0)$ e su $(0, +\infty)$ presi separatamente, ma $-1 < 1$ e $f(-1) = -1 < f(1) = 1$.

D: Il grafico di $y = (x - 3)^2 + 1$ si ottiene da quello di $y = x^2$ spostandolo
+ di $3$ a destra e di $1$ in alto
- di $3$ a sinistra e di $1$ in alto
- di $3$ a destra e di $1$ in basso
- di $3$ a sinistra e di $1$ in basso
= Dentro l'argomento c'è $x - 3$: $3$ a destra (al contrario del segno); fuori c'è $+1$: $1$ in alto. Il vertice va in $(3, 1)$.

D: L'immagine di $f(x) = |x - 2| - 3$ è
+ $[-3, +\infty)$
- $[0, +\infty)$
- $[-2, +\infty)$
- $\R$
= $|x - 2|$ assume tutti i valori $\ge 0$; togliendo $3$ si ottengono tutti i valori $\ge -3$. Il grafico è una "V" con vertice in $(2, -3)$.

D: $f$ è periodica di periodo $5$ e $f(2) = 7$. Quanto vale $f(-8)$?
N: 7
= $-8 = 2 - 2 \cdot 5$, quindi $f(-8) = f(2) = 7$.

D: Quali affermazioni su $f(x) = \frac{1}{x^2 + 1}$ sono vere?
+ È limitata.
+ È pari.
- È iniettiva.
- È crescente su tutto $\R$.
- Assume il valore $0$.
= $0 < f(x) \le 1$ per ogni $x$: è limitata, ma il valore $0$ non viene mai raggiunto (il numeratore è $1$). $f(-x) = f(x)$, quindi è pari e non iniettiva: $f(-1) = f(1) = \frac{1}{2}$. Cresce per $x \le 0$ e decresce per $x \ge 0$.

D: Quale di queste leggi esprime una proporzionalità diretta tra $x$ e $y$?
+ $y = 4x$
- $y = 4x + 1$
- $y = \frac{4}{x}$
- $xy = 4$
= Proporzionalità diretta vuol dire rapporto $\frac{y}{x}$ costante: retta per l'origine. $y = 4x + 1$ è lineare ma non passa per l'origine; le ultime due opzioni sono la stessa proporzionalità inversa.

D: $x$ e $y$ sono inversamente proporzionali e per $x = 4$ si ha $y = 6$. Quanto vale $y$ per $x = 8$?
N: 3
= Il prodotto $xy = 24$ è costante: per $x = 8$, $y = \frac{24}{8} = 3$ ($x$ raddoppia, $y$ si dimezza). Chi risponde $12$ ha usato la proporzionalità diretta.

D: Qual è il dominio di $f(x) = \frac{\sqrt[3]{x - 1}}{x^2 + 4}$?
+ $\R$
- $x \ge 1$
- $x \ne 2$ e $x \ne -2$
- $x > 1$
= La radice cubica è definita per ogni numero reale, e $x^2 + 4 \ge 4$ non si annulla mai. L'opzione $x \ne \pm 2$ confonde $x^2 + 4$ con $x^2 - 4$; le altre trattano la radice cubica come una radice quadrata.

D: Sia $f(x) = x^2$ per $x < 1$ e $f(x) = 3 - x$ per $x \ge 1$. Quanto vale $f(1) + f(-2)$?
N: 6
= $1$ sta nel secondo tratto: $f(1) = 3 - 1 = 2$. $-2$ sta nel primo: $f(-2) = (-2)^2 = 4$. La somma è $6$.

D: Quante soluzioni reali ha l'equazione $|x^2 - 1| = 1$?
+ $3$
- $2$
- $4$
- $1$
= Il grafico di $|x^2 - 1|$ ha un arco ribaltato con il punto più alto in $(0, 1)$: la retta $y = 1$ lo tocca lì e taglia i due rami esterni. Algebricamente: $x^2 - 1 = 1$ dà $x = \pm\sqrt2$ e $x^2 - 1 = -1$ dà $x = 0$.
```

## Checklist

```checklist
So spiegare cosa sono dominio, codominio, immagine e controimmagine
So trovare il dominio di funzioni con frazioni e radici
So riconoscere se una curva è il grafico di una funzione
So trovare zeri e segno di una funzione e leggerli sul grafico
So stabilire se una funzione è iniettiva, suriettiva o biiettiva
So restringere il dominio di una funzione e calcolarne l'inversa
So calcolare $g \circ f$ e $f \circ g$, anche in un punto, con il loro dominio
So riconoscere se una funzione è pari, dispari o nessuna delle due
So usare il periodo per calcolare i valori di una funzione periodica
So dire dove una funzione cresce o decresce e se è limitata
So spiegare a parole quando una funzione è continua e riconoscere un salto
So disegnare $f(x \pm c)$ e $f(x) \pm c$ a partire dal grafico di $f$
So disegnare funzioni costanti, a tratti, $|x|$ e $|f(x)|$
So distinguere la proporzionalità diretta da quella inversa
```

---

<!-- FILE: ai/moduli/07-esponenziali-logaritmi.md -->
> File: `ai/moduli/07-esponenziali-logaritmi.md`

---
modulo: 7
titolo: "Esponenziali e logaritmi"
breve: "Potenze con esponente reale, funzione esponenziale, logaritmi e loro proprietà, equazioni e disequazioni esponenziali e logaritmiche."
ore: 8
unita:
  - "7.1 Esponenziali e logaritmi"
  - "7.2 Equazioni e disequazioni esponenziali e logaritmiche"
---

## In breve

- La **funzione esponenziale** $y = a^x$ ha senso solo con base $a > 0$ e $a \neq 1$. È sempre positiva, passa per il punto $(0, 1)$, cresce se $a > 1$ e decresce se $0 < a < 1$.
- Il **logaritmo** $\log_a b$ è l'esponente da dare alla base $a$ per ottenere $b$: dire $\log_a b = y$ è come dire $a^y = b$. Esiste solo se $a > 0$, $a \neq 1$ e $b > 0$.
- Le proprietà dei logaritmi trasformano i prodotti in somme, i quozienti in differenze e le potenze in fattori; il cambio di base porta ogni logaritmo nella base che preferisci. Per $\log_a(x + y)$ non esiste nessuna regola.
- $\ln$ indica il logaritmo in base $e$ (logaritmo naturale; $e$ è un numero irrazionale che vale circa $2{,}718$), $\log_{10}$ il logaritmo in base 10.
- Esponenziale e logaritmo con la stessa base sono funzioni inverse: i loro grafici sono simmetrici rispetto alla retta $y = x$.
- Equazioni esponenziali: con la stessa base si uguagliano gli esponenti, altrimenti si passa ai logaritmi. Equazioni logaritmiche: prima le condizioni di esistenza, poi i calcoli, alla fine si scartano le soluzioni non accettabili.
- Disequazioni: con base maggiore di 1 il verso resta, con base tra 0 e 1 il verso si inverte. Nelle disequazioni logaritmiche il risultato va messo a sistema con le condizioni di esistenza.

## 7.1 Esponenziali e logaritmi

### Dalle potenze agli esponenti reali

Una potenza $a^n$ è un modo breve per scrivere un prodotto: $2^3 = 2 \cdot 2 \cdot 2 = 8$. Il numero $a$ si chiama **base**, il numero $n$ si chiama **esponente**. Per costruire la funzione esponenziale bisogna dare un significato ad $a^x$ per *ogni* esponente reale $x$: anche negativo, frazionario o irrazionale. Il significato si costruisce a tappe, in modo che le regole delle potenze restino sempre valide.

| Esponente | Significato | Esempio |
|---|---|---|
| naturale $n \geq 1$ | prodotto di $n$ fattori uguali ad $a$ | $2^3 = 8$ |
| zero | $a^0 = 1$ (con $a \neq 0$) | $5^0 = 1$ |
| intero negativo | $a^{-n} = \dfrac{1}{a^n}$ | $2^{-3} = \dfrac{1}{8}$ |
| frazione $\dfrac{m}{n}$ | $a^{m/n} = \sqrt[n]{a^m}$ | $8^{2/3} = \sqrt[3]{64} = 4$ |
| irrazionale | si approssima l'esponente con frazioni sempre più vicine | $2^{\sqrt{2}} \approx 2{,}67$ |

Qui $\sqrt[n]{a}$ è la **radice $n$-esima** di $a$ e il simbolo $\approx$ si legge «circa uguale a».

**Perché la base deve essere positiva.** Con esponente $\frac{1}{2}$ si ha $a^{1/2} = \sqrt{a}$: se $a$ fosse negativo, per esempio $a = -4$, bisognerebbe calcolare $\sqrt{-4}$, che nei numeri reali non esiste. Per questo nella funzione esponenziale si chiede sempre $a > 0$; anche $a = 0$ resta fuori, perché $0^{-1} = \frac{1}{0}$ non esiste. Si esclude anche $a = 1$: $1^x = 1$ per ogni $x$, e si otterrebbe una funzione costante, sempre uguale a 1. Con base positiva il risultato è sempre positivo: $a^x > 0$ per ogni $x$.

> [!PROP] Proprietà delle potenze (con $a > 0$, $b > 0$ ed esponenti reali qualsiasi)
> | Regola | Esempio |
> |---|---|
> | $a^m \cdot a^n = a^{m+n}$ | $2^3 \cdot 2^4 = 2^7$ |
> | $\dfrac{a^m}{a^n} = a^{m-n}$ | $\dfrac{5^6}{5^4} = 5^2$ |
> | $(a^m)^n = a^{m \cdot n}$ | $(3^2)^3 = 3^6$ |
> | $a^n \cdot b^n = (ab)^n$ | $2^3 \cdot 5^3 = 10^3$ |
> | $\dfrac{a^n}{b^n} = \left(\dfrac{a}{b}\right)^n$ | $\dfrac{6^2}{3^2} = 2^2$ |
> | $\left(\dfrac{1}{a}\right)^n = a^{-n}$ | $\left(\dfrac{1}{3}\right)^2 = 3^{-2}$ |

> [!ESEMPIO] Esponenti frazionari e negativi
> - $27^{2/3} = \left(\sqrt[3]{27}\right)^2 = 3^2 = 9$. Conviene fare prima la radice: i numeri restano piccoli.
> - $16^{-3/4} = \dfrac{1}{16^{3/4}} = \dfrac{1}{\left(\sqrt[4]{16}\right)^3} = \dfrac{1}{2^3} = \dfrac{1}{8}$.
> - $\left(\dfrac{1}{4}\right)^{-1/2} = 4^{1/2} = \sqrt{4} = 2$: l'esponente negativo capovolge la frazione.

> [!TRAPPOLA] Errori con le potenze
> - Un esponente negativo capovolge, non cambia il segno: $2^{-3} = \frac{1}{8}$, non $-8$.
> - $a^{m+n}$ non è $a^m + a^n$: $2^{1+2} = 8$, mentre $2^1 + 2^2 = 6$.
> - $-2^2 = -4$ (il meno resta fuori dalla potenza), mentre $(-2)^2 = 4$.

> [!NOTA] Potenza o esponenziale?
> In $y = x^2$ la variabile sta nella base e l'esponente è fisso: è una **funzione potenza**. In $y = 2^x$ la base è fissa e la variabile sta all'esponente: è una **funzione esponenziale**. Sono funzioni molto diverse. Per esempio $3^2 = 9$ è più grande di $2^3 = 8$, ma $10^2 = 100$ è molto più piccolo di $2^{10} = 1024$: andando avanti, l'esponenziale supera qualsiasi potenza.

### La funzione esponenziale

> [!DEF] Funzione esponenziale
> Fissato un numero $a$ con $a > 0$ e $a \neq 1$, la **funzione esponenziale di base $a$** è la funzione $f(x) = a^x$, che associa a ogni numero reale $x$ il numero $a^x$.

> [!PROP] Caratteristiche di $y = a^x$
> - **Dominio**: tutto $\R$, l'insieme dei numeri reali: ogni $x$ va bene.
> - **Segno**: $a^x > 0$ sempre; l'immagine è l'intervallo $(0, +\infty)$, dove il simbolo $\infty$ si legge «infinito».
> - **Punti notevoli**: il grafico passa sempre per $(0, 1)$, perché $a^0 = 1$, e per $(1, a)$, perché $a^1 = a$.
> - **Monotonia**: se $a > 1$ la funzione è **crescente**, se $0 < a < 1$ è **decrescente**. In entrambi i casi è monotona, quindi $a^u = a^v$ solo quando $u = v$.
> - **Asintoto**: il grafico si avvicina all'asse $x$ senza mai toccarlo (l'asse $x$ è un **asintoto orizzontale**): verso sinistra se $a > 1$, verso destra se $0 < a < 1$.

```grafico
titolo: $y = 2^x$ (crescente) e $y = \left(\frac{1}{2}\right)^x$ (decrescente)
x: -4 4
y: -1 6
f: 2^x
f: (1/2)^x | rosso
punto: 0 1 | $(0, 1)$ | ne
punto: 1 2 | $(1, 2)$ | se
punto: -1 2 | rosso | $(-1, 2)$ | so
testo: 3.2 3.2 | $y = 2^x$ | bianco
testo: -3.2 3.2 | $y = \left(\frac{1}{2}\right)^x$ | bianco
```

I due grafici sono simmetrici rispetto all'asse $y$: infatti $\left(\frac{1}{2}\right)^x = 2^{-x}$, quindi il valore di $\left(\frac12\right)^x$ in $x = 3$ è uguale al valore di $2^x$ in $x = -3$.

> [!PROP] Confrontare due potenze con la stessa base
> - Se $a > 1$: $a^u < a^v$ esattamente quando $u < v$ (l'ordine degli esponenti si conserva).
> - Se $0 < a < 1$: $a^u < a^v$ esattamente quando $u > v$ (l'ordine si inverte).
>
> In simboli, per $a > 1$ si scrive $a^u < a^v \iff u < v$, dove $\iff$ si legge «se e solo se».

> [!ESEMPIO] Confronti senza calcolatrice
> - $2^{0{,}3}$ e $2^{0{,}5}$: la base 2 è maggiore di 1 e $0{,}3 < 0{,}5$, quindi $2^{0{,}3} < 2^{0{,}5}$.
> - $\left(\frac{1}{3}\right)^{0{,}3}$ e $\left(\frac{1}{3}\right)^{0{,}5}$: la base è tra 0 e 1, l'ordine si inverte: $\left(\frac13\right)^{0{,}3} > \left(\frac13\right)^{0{,}5}$.
> - $2^{30}$ e $3^{20}$: le basi sono diverse, ma gli esponenti hanno il divisore comune 10. $2^{30} = (2^3)^{10} = 8^{10}$ e $3^{20} = (3^2)^{10} = 9^{10}$. Con lo stesso esponente positivo vince la base più grande: $8^{10} < 9^{10}$, quindi $2^{30} < 3^{20}$.

### Il logaritmo

L'equazione $2^x = 8$ si risolve a occhio: $x = 3$. Ma $2^x = 5$? L'esponente cercato sta tra 2 e 3, perché $2^2 = 4 < 5 < 8 = 2^3$, e non è un numero «semplice». Gli si dà un nome: è il logaritmo in base 2 di 5, e si scrive $\log_2 5$.

> [!DEF] Logaritmo
> Siano $a > 0$ con $a \neq 1$, e $b > 0$. Il **logaritmo in base $a$ di $b$**, scritto $\log_a b$, è l'esponente a cui bisogna elevare $a$ per ottenere $b$:
> $$
> \log_a b = y \iff a^y = b
> $$
> Il numero $a$ è la **base**, il numero $b$ è l'**argomento** del logaritmo.

Le condizioni sulla base sono quelle degli esponenziali. L'argomento deve essere positivo perché $a^y$ è sempre positivo: nessun esponente trasforma $a$ in zero o in un numero negativo.

> [!METODO] Calcolare un logaritmo a mano
> 1. Scrivi la base e l'argomento come potenze dello stesso numero: $a = c^m$ e $b = c^n$.
> 2. Cerchi $y$ con $a^y = b$, cioè $c^{my} = c^n$: gli esponenti devono essere uguali, $my = n$.
> 3. Quindi $\log_a b = \dfrac{n}{m}$. Controlla sempre al contrario: $a$ elevato al risultato deve dare $b$.

> [!ESEMPIO] Logaritmi calcolati con la definizione
> - $\log_3 81 = 4$, perché $3^4 = 81$.
> - $\log_2 \frac{1}{8} = -3$, perché $2^{-3} = \frac{1}{8}$.
> - $\log_{1/2} 8 = -3$, perché $\left(\frac12\right)^{-3} = 2^3 = 8$.
> - $\log_9 3 = \frac{1}{2}$, perché $9^{1/2} = \sqrt{9} = 3$.
> - $\log_4 8$: $4 = 2^2$ e $8 = 2^3$, quindi $\log_4 8 = \frac{3}{2}$. Controllo: $4^{3/2} = \left(\sqrt{4}\right)^3 = 8$.
> - $\log_{1/4} 32$: $\frac14 = 2^{-2}$ e $32 = 2^5$, quindi $\log_{1/4} 32 = \frac{5}{-2} = -\frac{5}{2}$.
> - $\log_{10} 0{,}01 = -2$, perché $10^{-2} = \frac{1}{100} = 0{,}01$.
> - $\log_{\sqrt{3}} 9 = 4$, perché $\left(\sqrt{3}\right)^4 = 3^2 = 9$.

> [!PROP] Quattro uguaglianze da sapere a memoria
> Per ogni base ammessa $a$:
> - $\log_a 1 = 0$, perché $a^0 = 1$;
> - $\log_a a = 1$, perché $a^1 = a$;
> - $\log_a a^x = x$ per ogni $x$ reale: il logaritmo «smonta» la potenza;
> - $a^{\log_a x} = x$ per ogni $x > 0$: la potenza «smonta» il logaritmo.

> [!ESEMPIO] Usare le quattro uguaglianze
> - $5^{\log_5 7} = 7$ e $\log_3 3^{-4} = -4$.
> - $2^{3 + \log_2 5} = 2^3 \cdot 2^{\log_2 5} = 8 \cdot 5 = 40$.
> - $10^{2\log_{10} 3} = \left(10^{\log_{10} 3}\right)^2 = 3^2 = 9$.

> [!TRAPPOLA] Che cosa non esiste
> - Il logaritmo di zero o di un numero negativo **non esiste**: $\log_2(-4)$ e $\log_3 0$ non hanno senso. Invece il *risultato* di un logaritmo può essere negativo o zero: $\log_2 \frac12 = -1$, $\log_7 1 = 0$.
> - La base 1 non è ammessa, e nemmeno una base negativa.
> - $\log_a b$ e $\log_b a$ in generale sono numeri diversi, uno è il reciproco dell'altro: $\log_2 8 = 3$, mentre $\log_8 2 = \frac13$.

### Le proprietà dei logaritmi

Le proprietà dei logaritmi sono le proprietà delle potenze lette dal punto di vista degli esponenti. Se $x = a^m$ e $y = a^n$, allora $xy = a^{m+n}$: quindi $\log_a(xy) = m + n = \log_a x + \log_a y$. Moltiplicando due potenze gli esponenti si sommano, e il logaritmo è proprio un esponente.

> [!PROP] Proprietà dei logaritmi (con $a > 0$, $a \neq 1$, $x > 0$, $y > 0$)
> | Nome | Formula | Esempio |
> |---|---|---|
> | prodotto | $\log_a(xy) = \log_a x + \log_a y$ | $\log_6 4 + \log_6 9 = \log_6 36 = 2$ |
> | quoziente | $\log_a \dfrac{x}{y} = \log_a x - \log_a y$ | $\log_2 40 - \log_2 5 = \log_2 8 = 3$ |
> | potenza | $\log_a x^n = n \log_a x$ | $\log_3 \sqrt{27} = \frac{1}{2}\log_3 27 = \frac{3}{2}$ |
> | reciproco | $\log_a \dfrac{1}{x} = -\log_a x$ | $\log_5 \frac{1}{25} = -\log_5 25 = -2$ |
> | cambio di base | $\log_a b = \dfrac{\log_c b}{\log_c a}$ | $\log_4 32 = \dfrac{\log_2 32}{\log_2 4} = \dfrac{5}{2}$ |
>
> Nel cambio di base l'argomento $b$ è positivo e la nuova base $c$ è positiva e diversa da 1. Una conseguenza utile: $\log_a b = \dfrac{1}{\log_b a}$ (con $b \neq 1$). Per esempio $\log_5 2 \cdot \log_2 25 = \dfrac{1}{\log_2 5} \cdot 2\log_2 5 = 2$.

> [!NOTA] Perché a volte compare il valore assoluto
> Le formule chiedono argomenti positivi. Se $x$ e $y$ sono entrambi negativi, il prodotto $xy$ è positivo e $\log_a(xy)$ esiste, mentre $\log_a x$ e $\log_a y$ no. In generale valgono $\log_a(xy) = \log_a |x| + \log_a |y|$ (per $xy > 0$) e $\log_a x^2 = 2\log_a |x|$ (per $x \neq 0$), dove $|x|$ è il valore assoluto di $x$. Nelle equazioni la differenza conta: $\log_3 x^2$ esiste per ogni $x \neq 0$, mentre $2\log_3 x$ solo per $x > 0$.

> [!ESEMPIO] Sviluppare e riunire
> **Sviluppare** $\log_3 \dfrac{9x^2}{y}$, con $x > 0$ e $y > 0$: prima il quoziente, poi il prodotto, poi la potenza.
> $$
> \log_3 \frac{9x^2}{y} = \log_3 9 + \log_3 x^2 - \log_3 y = 2 + 2\log_3 x - \log_3 y
> $$
> Allo stesso modo $\log_2 \dfrac{x^3\sqrt{y}}{4} = 3\log_2 x + \dfrac{1}{2}\log_2 y - 2$, perché $\sqrt{y} = y^{1/2}$ e $\log_2 4 = 2$.
>
> **Riunire** $2\log_2 x + \log_2 3 - \log_2 y$ in un solo logaritmo: prima i coefficienti diventano esponenti, poi le somme diventano prodotti e le differenze quozienti.
> $$
> 2\log_2 x + \log_2 3 - \log_2 y = \log_2 x^2 + \log_2 3 - \log_2 y = \log_2 \frac{3x^2}{y}
> $$

> [!TRAPPOLA] Gli errori più comuni
> | Sbagliato | Giusto | Controesempio |
> |---|---|---|
> | $\log_a(x + y) = \log_a x + \log_a y$ | per la somma non c'è regola | $\log_2(4 + 4) = 3$, ma $\log_2 4 + \log_2 4 = 4$ |
> | $\log_a(xy) = \log_a x \cdot \log_a y$ | $\log_a(xy) = \log_a x + \log_a y$ | $\log_2(4 \cdot 8) = 5$, ma $2 \cdot 3 = 6$ |
> | $\dfrac{\log_a x}{\log_a y} = \log_a \dfrac{x}{y}$ | $\dfrac{\log_a x}{\log_a y} = \log_y x$ | $\dfrac{\log_2 8}{\log_2 4} = \dfrac{3}{2}$, ma $\log_2 2 = 1$ |
> | $(\log_a x)^2 = \log_a x^2$ | $\log_a x^2 = 2\log_a x$ (con $x > 0$) | $(\log_2 8)^2 = 9$, ma $\log_2 64 = 6$ |

### Le basi $e$ e 10

Due basi sono usate più di tutte le altre, e sono quelle che trovi sulle calcolatrici.

Il **numero di Nepero** $e$ è un numero irrazionale: $e \approx 2{,}71828$. Il logaritmo in base $e$ si chiama **logaritmo naturale** (o neperiano) e si scrive $\ln x$, senza indicare la base. Quindi $\ln e = 1$, $\ln 1 = 0$, $\ln e^3 = 3$ ed $e^{\ln 5} = 5$. La base $e$ ha una proprietà comoda: quando $y$ è vicino a zero,

$$
\ln(1 + y) \approx y
$$

Per esempio $\ln 1{,}01 \approx 0{,}01$ (il valore vero è $0{,}00995\ldots$).

Il logaritmo in base 10 si chiama **logaritmo decimale**. In molti libri e sulle calcolatrici si scrive solo $\log$; qui scriviamo sempre la base, $\log_{10}$. Sulle potenze di 10 si calcola subito: $\log_{10} 1000 = 3$ e $\log_{10} 0{,}001 = -3$.

> [!NOTA] Notazione scientifica: caratteristica e mantissa
> Ogni numero positivo si può scrivere in **notazione scientifica**, $x = m \cdot 10^k$ con $1 \leq m < 10$ e $k$ intero. Allora
> $$
> \log_{10} x = k + \log_{10} m, \qquad 0 \leq \log_{10} m < 1
> $$
> La parte intera $k$ si chiama **caratteristica**, la parte decimale $\log_{10} m$ si chiama **mantissa**. Esempio: $4500 = 4{,}5 \cdot 10^3$, quindi $\log_{10} 4500 = 3 + \log_{10} 4{,}5 \approx 3 + 0{,}653 = 3{,}653$. E $45 = 4{,}5 \cdot 10^1$ dà $\log_{10} 45 \approx 1{,}653$: stesse cifre, stessa mantissa, cambia solo la caratteristica. Questo funziona solo in base 10. Conseguenza pratica: se un numero maggiore o uguale a 1 ha $n$ cifre prima della virgola, il suo logaritmo decimale è almeno $n - 1$ e minore di $n$.

Le calcolatrici di solito hanno i tasti solo per $\ln$ e per il logaritmo in base 10: le altre basi si ottengono con il cambio di base, per esempio $\log_3 7 = \dfrac{\ln 7}{\ln 3}$. Al test non c'è la calcolatrice, quindi un numero come $\log_3 7$ resta scritto così, oppure nella forma equivalente $\dfrac{\ln 7}{\ln 3}$.

### La funzione logaritmica

> [!DEF] Funzione logaritmica
> Fissato $a > 0$ con $a \neq 1$, la **funzione logaritmica di base $a$** è la funzione $f(x) = \log_a x$, definita per $x > 0$.

> [!PROP] Caratteristiche di $y = \log_a x$
> - **Dominio**: $(0, +\infty)$: solo argomenti positivi.
> - **Immagine**: tutto $\R$.
> - **Punti notevoli**: il grafico passa per $(1, 0)$, perché $\log_a 1 = 0$, e per $(a, 1)$.
> - **Monotonia**: crescente se $a > 1$, decrescente se $0 < a < 1$.
> - **Asintoto**: l'asse $y$ è un **asintoto verticale**: vicino a $x = 0$ il grafico scende verso $-\infty$ se $a > 1$ e sale verso $+\infty$ se $0 < a < 1$.
> - **Segno**: se $a > 1$, $\log_a x$ è negativo per $0 < x < 1$ e positivo per $x > 1$; se $0 < a < 1$ succede il contrario.

```grafico
titolo: $y = \log_2 x$ (crescente) e $y = \log_{1/2} x$ (decrescente)
x: -1 8
y: -4 4
f: log(2, x) | $y = \log_2 x$ | n
f: log(1/2, x) | rosso | $y = \log_{1/2} x$ | s
punto: 1 0 | $(1, 0)$ | se
punto: 2 1 | $(2, 1)$ | se
punto: 0.5 1 | rosso | $\left(\frac{1}{2}, 1\right)$ | ne
```

Anche qui i due grafici sono simmetrici, questa volta rispetto all'asse $x$: con il cambio di base, $\log_{1/2} x = \dfrac{\log_2 x}{\log_2 \frac12} = -\log_2 x$.

> [!METODO] Dominio di una funzione con logaritmi
> 1. Scrivi la condizione «argomento $> 0$» per ogni logaritmo, con il maggiore stretto.
> 2. Aggiungi le altre condizioni: denominatori diversi da zero, radicandi delle radici di indice pari maggiori o uguali a zero.
> 3. Risolvi il sistema: il dominio è l'insieme dei valori che rispettano tutte le condizioni insieme.

> [!ESEMPIO] Domini
> - $f(x) = \log_2(x - 3)$: serve $x - 3 > 0$, dominio $(3, +\infty)$.
> - $f(x) = \ln(4 - x^2)$: serve $4 - x^2 > 0$, cioè $x^2 < 4$, dominio $(-2, 2)$.
> - $f(x) = \ln(x^2 + 1)$: $x^2 + 1$ è sempre positivo, dominio $\R$.
> - $f(x) = \log_3 \dfrac{x + 1}{x - 2}$: serve $\dfrac{x + 1}{x - 2} > 0$. Il numeratore è positivo per $x > -1$, il denominatore per $x > 2$; la frazione è positiva quando hanno lo stesso segno, cioè per $x < -1$ oppure $x > 2$. Dominio $(-\infty, -1) \cup (2, +\infty)$, dove $\cup$ indica l'unione.
>
> ```retta
> titolo: Dominio di $\log_3 \frac{x+1}{x-2}$
> da: -4 5
> int: (-inf, -1)
> int: (2, +inf)
> ```

### Esponenziale e logaritmo sono funzioni inverse

> [!PROP] Funzioni inverse
> Con la stessa base $a$:
> $$
> \log_a\left(a^x\right) = x \ \text{ per ogni } x \in \R, \qquad a^{\log_a x} = x \ \text{ per ogni } x > 0
> $$
> ($\in$ si legge «appartiene a»). Ciascuna funzione annulla l'altra: $y = a^x$ e $y = \log_a x$ sono **funzioni inverse**. I loro grafici sono simmetrici rispetto alla retta $y = x$, la bisettrice del primo e del terzo quadrante: se il punto $(p, q)$ sta sul grafico dell'esponenziale, il punto $(q, p)$ sta sul grafico del logaritmo.

```grafico
titolo: $y = 2^x$ e $y = \log_2 x$ sono simmetriche rispetto alla retta $y = x$
x: -4 6
y: -4 6
f: x | grigio | tratteggio | $y = x$ | no
f: 2^x | a=2.58 | $y = 2^x$ | no
f: log(2, x) | rosso
punto: 0 1
punto: 1 0 | rosso
punto: 2 4
punto: 4 2 | rosso
segmento: 2 4 4 2 | grigio | tratteggio
testo: 5 1.5 | $y = \log_2 x$ | bianco
```

| | $y = a^x$ | $y = \log_a x$ |
|---|---|---|
| dominio | $\R$ | $(0, +\infty)$ |
| immagine | $(0, +\infty)$ | $\R$ |
| passa per | $(0, 1)$ e $(1, a)$ | $(1, 0)$ e $(a, 1)$ |
| asintoto | asse $x$ (orizzontale) | asse $y$ (verticale) |
| monotonia | crescente se $a > 1$, decrescente se $0 < a < 1$ | la stessa dell'esponenziale |

Dominio e immagine si scambiano, come succede sempre tra una funzione e la sua inversa.

### Modelli esponenziali

Molti fenomeni crescono o diminuiscono della stessa percentuale a intervalli di tempo regolari: una popolazione di batteri, un capitale investito, una sostanza radioattiva che decade. A ogni intervallo la quantità viene moltiplicata per lo stesso fattore $q$, quindi dopo $t$ intervalli

$$
N(t) = N_0 \cdot q^t
$$

dove $N_0$ è la quantità iniziale. Se $q > 1$ la quantità cresce, se $0 < q < 1$ diminuisce.

- Aumento del $p\%$ a ogni passo: $q = 1 + \frac{p}{100}$. Per esempio un aumento del $10\%$ all'anno dà $q = 1{,}1$.
- Diminuzione del $p\%$ a ogni passo: $q = 1 - \frac{p}{100}$.
- Raddoppio a ogni passo: $q = 2$; dimezzamento: $q = \frac12$.

> [!ESEMPIO] Batteri che raddoppiano
> Un batterio si divide in due ogni ora. Partendo da un solo batterio si hanno $1, 2, 4, 8, \ldots$ batteri: dopo $t$ ore sono $N(t) = 2^t$, e dopo 10 ore sono $2^{10} = 1024$.
>
> Se all'inizio i batteri sono 3, il modello è $N(t) = 3 \cdot 2^t$. Quando si superano i 1000 batteri? Serve $3 \cdot 2^t > 1000$, cioè $2^t > \frac{1000}{3} \approx 333$. Poiché $2^8 = 256$ e $2^9 = 512$, contando le ore intere il superamento avviene dopo 9 ore: $3 \cdot 2^8 = 768$, mentre $3 \cdot 2^9 = 1536$.

> [!ESEMPIO] Decadimento radioattivo
> Una sostanza radioattiva si dimezza ogni 5 anni. Dopo $t$ anni ne resta $M(t) = M_0 \left(\frac{1}{2}\right)^{t/5}$, dove $M_0$ è la quantità iniziale. Dopo 15 anni l'esponente è $\frac{15}{5} = 3$: resta $\left(\frac12\right)^3 = \frac18$ della quantità iniziale.

> [!NOTA] I limiti del modello
> Nella realtà nessuna popolazione cresce in modo esponenziale per sempre: cibo, spazio e altre risorse sono limitati. Questi **fattori limitanti** rallentano la crescita fino a stabilizzarla o a fermarla. Il modello esponenziale descrive bene un fenomeno solo per un periodo limitato.

> [!TEST] Esponenziali e logaritmi nelle domande del test
> - **Calcolo di logaritmi** (risposta numerica o una su quattro): scrivi base e argomento come potenze dello stesso numero e controlla al contrario, elevando la base al risultato.
> - **Vero o falso sulle proprietà**: se non ricordi una formula, provala con numeri semplici (base 2, argomenti 4 e 8). Un solo controesempio basta per rispondere «falso».
> - **Stime senza calcolatrice**: $\log_2 10$ è tra 3 e 4, perché $2^3 = 8 < 10 < 16 = 2^4$. Spesso una stima così basta per scartare le opzioni sbagliate.
> - **Riconoscere i grafici**: il grafico di $y = a^x$ passa per $(0, 1)$ e sta tutto sopra l'asse $x$; quello di $y = \log_a x$ passa per $(1, 0)$ e sta tutto a destra dell'asse $y$. Se il grafico scende, la base è tra 0 e 1.
> - **Dominio**: l'argomento di ogni logaritmo deve essere strettamente positivo; poi si prendono i valori che rispettano tutte le condizioni.

## 7.2 Equazioni e disequazioni esponenziali e logaritmiche

Le equazioni e le disequazioni in cui l'incognita sta all'esponente o nell'argomento di un logaritmo si dicono **trascendenti**: non sono algebriche come quelle dei moduli 3 e 4. Tutti i metodi si basano su due fatti visti sopra: esponenziali e logaritmi sono funzioni monotone (quindi danno lo stesso valore solo con lo stesso esponente o lo stesso argomento), e sono una l'inversa dell'altra.

### Equazioni esponenziali

In un'**equazione esponenziale** l'incognita compare all'esponente. Le condizioni sulle basi ($a > 0$, $a \neq 1$) si danno per scontate. Qui sotto $f(x)$ e $g(x)$ indicano espressioni che contengono $x$.

> [!METODO] I quattro casi tipici
> 1. **Stessa base**: $a^{f(x)} = a^{g(x)} \iff f(x) = g(x)$. Spesso bisogna prima scrivere tutto come potenza della stessa base ($4 = 2^2$, $\frac19 = 3^{-2}$, $\sqrt{5} = 5^{1/2}$).
> 2. **Esponenziale uguale a un numero**: $a^{f(x)} = c$. Se $c \leq 0$ l'equazione è impossibile. Se $c > 0$ si applica $\log_a$ ai due membri: $f(x) = \log_a c$.
> 3. **Basi diverse**: $a^{f(x)} = b^{g(x)}$. Si applica lo stesso logaritmo ai due membri (per esempio $\ln$): $f(x)\ln a = g(x)\ln b$, e si risolve.
> 4. **Equazioni riconducibili**: si raccoglie una potenza, oppure si pone $t = a^x$ (con $t > 0$) e si risolve un'equazione algebrica in $t$.

> [!ESEMPIO] Stessa base
> - $4^{x+1} = 8^x$. Tutto in base 2: $4^{x+1} = \left(2^2\right)^{x+1} = 2^{2x+2}$ e $8^x = 2^{3x}$. Quindi $2x + 2 = 3x$, cioè $x = 2$. Controllo: $4^3 = 64$ e $8^2 = 64$.
> - $\left(\frac{1}{3}\right)^x = 9^{x-3}$. Tutto in base 3: $3^{-x} = 3^{2x-6}$, quindi $-x = 2x - 6$ e $x = 2$.
> - $2^{x^2 - 3x} = \frac{1}{4}$. Poiché $\frac14 = 2^{-2}$: $x^2 - 3x = -2$, cioè $x^2 - 3x + 2 = 0$, con soluzioni $x = 1$ e $x = 2$.

> [!ESEMPIO] Esponenziale uguale a un numero
> - $5^{x+1} = 7$: $x + 1 = \log_5 7$, quindi $x = \log_5 7 - 1$.
> - $e^{2x-1} = 3$: $2x - 1 = \ln 3$, quindi $x = \dfrac{1 + \ln 3}{2}$.
> - $6^{x+3} = 1$: $1 = 6^0$, quindi $x + 3 = 0$ e $x = -3$. Uguale a 1 non vuol dire impossibile.
> - $3^{2x} = -9$: impossibile, perché un esponenziale non è mai negativo.

> [!ESEMPIO] Basi diverse
> $3^x = 2^{x+1}$. Applico $\ln$ ai due membri e uso la proprietà della potenza:
> $$
> x\ln 3 = (x + 1)\ln 2 \;\Rightarrow\; x\ln 3 - x\ln 2 = \ln 2 \;\Rightarrow\; x = \frac{\ln 2}{\ln 3 - \ln 2} = \frac{\ln 2}{\ln \frac{3}{2}}
> $$
> Il simbolo $\Rightarrow$ si legge «quindi». Si poteva anche dividere per $2^x$: $\left(\frac32\right)^x = 2$, cioè $x = \log_{3/2} 2$. È lo stesso numero scritto in un'altra forma: tra le opzioni di una domanda la soluzione può comparire in una qualsiasi di queste forme.

> [!ESEMPIO] Raccoglimento e sostituzione
> - $2^{x+2} - 2^x = 24$. Poiché $2^{x+2} = 4 \cdot 2^x$, raccolgo $2^x$: $2^x(4 - 1) = 24$, quindi $2^x = 8$ e $x = 3$.
> - $4^x - 6 \cdot 2^x + 8 = 0$. Poiché $4^x = \left(2^x\right)^2$, pongo $t = 2^x$: $t^2 - 6t + 8 = 0$, con soluzioni $t = 2$ e $t = 4$. Torno a $x$: $2^x = 2$ dà $x = 1$, $2^x = 4$ dà $x = 2$.
> - $9^x + 3^x - 12 = 0$. Con $t = 3^x$: $t^2 + t - 12 = 0$, con soluzioni $t = 3$ e $t = -4$. Il valore $t = -4$ si scarta ($3^x$ è sempre positivo), quindi resta $3^x = 3$, cioè $x = 1$.

> [!TRAPPOLA] Errori nelle equazioni esponenziali
> - $2^x + 2^x = 2 \cdot 2^x = 2^{x+1}$: non è $2^{2x}$.
> - Gli esponenti si possono uguagliare solo quando ogni membro è una **singola** potenza della stessa base. In $2^x + 2 = 8$ non si può «togliere la base»: prima si isola la potenza, $2^x = 6$, e poi $x = \log_2 6$.
> - Dopo la sostituzione $t = a^x$ bisogna tornare a $x$: i valori di $t$ non sono le soluzioni.

### Equazioni logaritmiche

In un'**equazione logaritmica** l'incognita compare nell'argomento di uno o più logaritmi.

> [!METODO] Risolvere un'equazione logaritmica
> 1. **Condizioni di esistenza** (in breve C.E.): ogni argomento deve essere maggiore di zero. Si scrivono sull'equazione di partenza, prima di qualunque trasformazione.
> 2. Con le proprietà si arriva a una di queste due forme:
>    - $\log_a f(x) = c$: per la definizione di logaritmo, $f(x) = a^c$;
>    - $\log_a f(x) = \log_a g(x)$: gli argomenti devono essere uguali, $f(x) = g(x)$.
> 3. Si risolve l'equazione algebrica ottenuta.
> 4. Si tengono solo le soluzioni che rispettano le C.E.

> [!ESEMPIO] Le due forme di base
> - $\log_3(2x + 1) = 2$. C.E.: $2x + 1 > 0$, cioè $x > -\frac12$. Per la definizione $2x + 1 = 3^2 = 9$, quindi $x = 4$: rispetta le C.E., è accettabile.
> - $\ln(x - 1) = 2$. C.E.: $x > 1$. Per la definizione $x - 1 = e^2$, quindi $x = 1 + e^2$ (circa $8{,}39$): accettabile.
> - $\log_2(x + 3) = \log_2(2x - 1)$. C.E.: $x + 3 > 0$ e $2x - 1 > 0$, cioè $x > \frac12$. Argomenti uguali: $x + 3 = 2x - 1$, quindi $x = 4$: accettabile.

> [!ESEMPIO] Con le proprietà: soluzioni da scartare
> $\log_2 x + \log_2(x - 2) = 3$.
>
> C.E.: $x > 0$ e $x - 2 > 0$, quindi $x > 2$.
>
> Con la proprietà del prodotto: $\log_2[x(x - 2)] = 3$, cioè $x(x - 2) = 2^3 = 8$, quindi $x^2 - 2x - 8 = 0$, con soluzioni $x = 4$ e $x = -2$. Solo $x = 4$ rispetta le C.E. Controllo: $\log_2 4 + \log_2 2 = 2 + 1 = 3$.
>
> Da dove viene $x = -2$? L'espressione $\log_2[x(x-2)]$ esiste anche per $x < 0$, quella di partenza no: la trasformazione ha allargato il dominio. Per questo le C.E. si scrivono sempre sull'equazione iniziale.

> [!ESEMPIO] Con la proprietà del quoziente
> $\log_2(x + 6) - \log_2 x = 2$. C.E.: $x + 6 > 0$ e $x > 0$, quindi $x > 0$.
>
> Con la proprietà del quoziente: $\log_2 \dfrac{x + 6}{x} = 2$, cioè $\dfrac{x + 6}{x} = 2^2 = 4$. Moltiplico per $x$, che è positivo: $x + 6 = 4x$, quindi $x = 2$, accettabile. Controllo: $\log_2 8 - \log_2 2 = 3 - 1 = 2$.

> [!ESEMPIO] Le C.E. scartano la soluzione più «naturale»
> $\log_{10}(x^2 - 9) = \log_{10}(3 - x)$.
>
> C.E.: $x^2 - 9 > 0$ dà $x < -3$ oppure $x > 3$; $3 - x > 0$ dà $x < 3$. Insieme: $x < -3$.
>
> Argomenti uguali: $x^2 - 9 = 3 - x$, cioè $x^2 + x - 12 = 0$, con soluzioni $x = 3$ e $x = -4$. Solo $x = -4$ rispetta le C.E.: è l'unica soluzione.

> [!ESEMPIO] Sostituzione
> $(\log_2 x)^2 - \log_2 x - 2 = 0$. C.E.: $x > 0$. Con $t = \log_2 x$: $t^2 - t - 2 = 0$, con soluzioni $t = 2$ e $t = -1$. Quindi $x = 2^2 = 4$ oppure $x = 2^{-1} = \frac12$: entrambe accettabili.

> [!TRAPPOLA] Il logaritmo di un quadrato
> $\log_3 x^2 = 2$. C.E.: $x^2 > 0$, cioè $x \neq 0$. Per la definizione $x^2 = 9$, quindi $x = 3$ oppure $x = -3$: **due** soluzioni. Chi scrive subito $2\log_3 x = 2$ trova solo $x = 3$ e perde $x = -3$, perché $\log_3 x^2 = 2\log_3|x|$, non $2\log_3 x$.

### Disequazioni esponenziali

> [!PROP] Il verso dipende dalla base
> - Se $a > 1$: $a^{f(x)} > a^{g(x)} \iff f(x) > g(x)$ (il verso resta).
> - Se $0 < a < 1$: $a^{f(x)} > a^{g(x)} \iff f(x) < g(x)$ (il verso si inverte).
>
> Lo stesso vale con $<$, $\geq$, $\leq$. Il motivo è la monotonia: con base maggiore di 1 l'esponenziale cresce, con base tra 0 e 1 decresce.

> [!METODO] Risolvere una disequazione esponenziale
> 1. Porta i due membri alla stessa base e confronta gli esponenti, invertendo il verso se la base è tra 0 e 1.
> 2. Se un membro è un numero $c \leq 0$: $a^{f(x)} > c$ è sempre vera (dove $f$ è definita), $a^{f(x)} < c$ non è mai vera. Se $c > 0$, scrivi $c = a^{\log_a c}$ e torna al punto 1.
> 3. Con basi diverse applica un logaritmo di base maggiore di 1 (per esempio $\ln$), che non cambia il verso; poi, quando dividi per il coefficiente di $x$, controlla il suo segno.
> 4. Con la sostituzione $t = a^x$ risolvi la disequazione in $t$ e poi torna a $x$.

> [!ESEMPIO] Stessa base
> - $3^{2x-1} > 3^{x+2}$: base $3 > 1$, il verso resta. $2x - 1 > x + 2$, quindi $x > 3$.
> - $\left(\frac12\right)^{x-1} \geq \frac18$: $\frac18 = \left(\frac12\right)^3$ e la base è tra 0 e 1, il verso si inverte: $x - 1 \leq 3$, quindi $x \leq 4$.
> - $\left(\frac13\right)^x < 9$: $9 = \left(\frac13\right)^{-2}$, il verso si inverte: $x > -2$. Si arriva allo stesso risultato in base 3: $3^{-x} < 3^2$, quindi $-x < 2$, cioè $x > -2$.
> - $2^{x^2} < 2^{x+2}$: base 2, il verso resta: $x^2 < x + 2$, cioè $x^2 - x - 2 < 0$. Le radici sono $-1$ e $2$ e la parabola è negativa tra le radici: $-1 < x < 2$.
>
> ```retta
> titolo: Soluzioni di $2^{x^2} < 2^{x+2}$
> da: -3 4
> int: (-1, 2)
> ```

> [!ESEMPIO] Un numero al secondo membro
> - $5^x > -1$: sempre vera, perché $5^x$ è positivo. Soluzioni: tutto $\R$.
> - $e^x < 0$: mai vera, nessuna soluzione.
> - $3^x \leq 1$: $1 = 3^0$, quindi $x \leq 0$.
> - $\left(\frac12\right)^x > 3$: applico $\log_{1/2}$, che inverte il verso: $x < \log_{1/2} 3 = -\log_2 3$.

> [!ESEMPIO] Basi diverse: attenzione al segno del coefficiente
> $2^x > 3^{x-1}$. Applico $\ln$ (base $e > 1$, il verso resta):
> $$
> x\ln 2 > (x - 1)\ln 3 \;\Rightarrow\; x\ln 2 - x\ln 3 > -\ln 3 \;\Rightarrow\; x(\ln 2 - \ln 3) > -\ln 3
> $$
> Il coefficiente $\ln 2 - \ln 3$ è **negativo** (perché $2 < 3$): dividendo per lui il verso si inverte.
> $$
> x < \frac{-\ln 3}{\ln 2 - \ln 3} = \frac{\ln 3}{\ln 3 - \ln 2} \approx 2{,}71
> $$
>
> ```grafico
> titolo: $y = 2^x$ sta sopra $y = 3^{x-1}$ per $x < 2{,}71$ circa
> x: -2 4
> y: -1 10
> proporzioni: libere
> area: 2^x | 3^(x-1) | -2 ln(3)/(ln(3)-ln(2)) | rosso
> f: 2^x | a=3.33 | $y = 2^x$ | no
> f: 3^(x-1) | rosso | a=3.1 | $y = 3^{x-1}$ | se
> punto: ln(3)/(ln(3)-ln(2)) 2^(ln(3)/(ln(3)-ln(2)))
> ```

> [!ESEMPIO] Sostituzione
> $4^x - 5 \cdot 2^x + 4 < 0$. Con $t = 2^x$: $t^2 - 5t + 4 < 0$, con radici $1$ e $4$, quindi $1 < t < 4$. Torno a $x$: $1 < 2^x < 4$, cioè $2^0 < 2^x < 2^2$, quindi $0 < x < 2$.

> [!TRAPPOLA] Errori nelle disequazioni esponenziali
> - Con base tra 0 e 1 il verso si inverte: è l'errore più frequente.
> - Dividere per un numero negativo, come $\ln 2 - \ln 3$, inverte il verso.
> - $2^x > 3^x$ non è «mai vera»: dividendo per $3^x > 0$ si ottiene $\left(\frac23\right)^x > 1 = \left(\frac23\right)^0$ e, con base tra 0 e 1, $x < 0$. Infatti per $x = -1$: $2^{-1} = 0{,}5 > 3^{-1} \approx 0{,}33$.

### Disequazioni logaritmiche

> [!PROP] Confronto tra logaritmi con la stessa base
> Con $f(x) > 0$ e $g(x) > 0$:
> - se $a > 1$: $\log_a f(x) > \log_a g(x) \iff f(x) > g(x)$ (il verso resta);
> - se $0 < a < 1$: $\log_a f(x) > \log_a g(x) \iff f(x) < g(x)$ (il verso si inverte).

> [!METODO] Risolvere una disequazione logaritmica
> 1. C.E.: ogni argomento maggiore di zero.
> 2. Scrivi i numeri come logaritmi nella stessa base: $c = \log_a a^c$ (per esempio $3 = \log_2 8$ e $-1 = \log_{1/2} 2$).
> 3. Confronta gli argomenti, invertendo il verso se la base è tra 0 e 1.
> 4. **Metti a sistema** il risultato con le C.E.: devono valere insieme, quindi tieni solo i valori comuni.

> [!ESEMPIO] Base maggiore di 1
> $\log_3(x - 1) < \log_3(5 - x)$.
>
> C.E.: $x - 1 > 0$ e $5 - x > 0$, cioè $1 < x < 5$.
>
> Base $3 > 1$, il verso resta: $x - 1 < 5 - x$, quindi $x < 3$.
>
> Sistema con le C.E.: $1 < x < 3$.
>
> ```retta
> titolo: Soluzioni di $\log_3(x-1) < \log_3(5-x)$
> da: 0 6
> int: (1, 3)
> ```

> [!ESEMPIO] Un numero al secondo membro
> - $\log_2(x + 1) \leq 3$. C.E.: $x > -1$. Poiché $3 = \log_2 8$: $x + 1 \leq 8$, cioè $x \leq 7$. Soluzioni: $-1 < x \leq 7$, cioè l'intervallo $(-1, 7]$.
> - $\log_{1/2}(x - 2) \geq -1$. C.E.: $x > 2$. Poiché $-1 = \log_{1/2} 2$ e la base è tra 0 e 1, il verso si inverte: $x - 2 \leq 2$, cioè $x \leq 4$. Soluzioni: $2 < x \leq 4$.
> - $\ln(2x - 1) < 0$. C.E.: $x > \frac12$. Poiché $0 = \ln 1$: $2x - 1 < 1$, cioè $x < 1$. Soluzioni: $\frac12 < x < 1$.
>
> ```retta
> titolo: Soluzioni di $\log_2(x+1) \leq 3$: l'estremo $-1$ è escluso, il 7 è incluso
> da: -2 8
> int: (-1, 7]
> ```

> [!ESEMPIO] Soluzione in due intervalli
> $\log_{10}(x^2 - 3x) < 1$.
>
> C.E.: $x^2 - 3x > 0$, cioè $x(x - 3) > 0$: $x < 0$ oppure $x > 3$.
>
> Poiché $1 = \log_{10} 10$: $x^2 - 3x < 10$, cioè $x^2 - 3x - 10 < 0$. Le radici sono $-2$ e $5$, quindi $-2 < x < 5$.
>
> Sistema: servono insieme le C.E. e $-2 < x < 5$. Si ottiene $-2 < x < 0$ oppure $3 < x < 5$.
>
> ```retta
> titolo: Soluzioni di $\log_{10}(x^2 - 3x) < 1$
> da: -3 6
> int: (-2, 0)
> int: (3, 5)
> ```

> [!TRAPPOLA] Errori nelle disequazioni logaritmiche
> - Senza C.E. si sbaglia quasi sempre: le soluzioni di $\log_2 x < 3$ non sono $x < 8$, ma $0 < x < 8$.
> - Anche qui, con base tra 0 e 1, il verso si inverte.
> - Attenzione a «e» e «oppure»: le C.E. e la disequazione devono valere **insieme**; la soluzione finale può essere fatta di più pezzi, uniti da «oppure».

### Un'applicazione: il pH

In chimica l'acidità di una soluzione si misura con il **pH**:

$$
\mathrm{pH} = -\log_{10}[\mathrm{H}^+]
$$

dove $[\mathrm{H}^+]$ è la concentrazione di ioni idrogeno. Se $\mathrm{pH} < 7$ la soluzione è **acida**, se $\mathrm{pH} > 7$ è **basica**.

- $[\mathrm{H}^+] = 10^{-3}$ dà $\mathrm{pH} = -\log_{10} 10^{-3} = 3$: soluzione acida.
- Se $\mathrm{pH} = 9$, allora $\log_{10}[\mathrm{H}^+] = -9$ e $[\mathrm{H}^+] = 10^{-9}$: soluzione basica.
- Un'unità di pH in meno significa una concentrazione 10 volte più grande; due unità in meno, 100 volte più grande.

> [!ESEMPIO] Dal pH alla concentrazione
> Una soluzione ha $\mathrm{pH} = 4{,}5$. Chiamo $x$ la concentrazione: $-\log_{10} x = 4{,}5$, cioè $\log_{10} x = -4{,}5$. Per la definizione di logaritmo:
> $$
> x = 10^{-4{,}5} = 10^{0{,}5} \cdot 10^{-5} = \sqrt{10} \cdot 10^{-5} \approx 3{,}16 \cdot 10^{-5}
> $$
> E quando una soluzione è acida? $\mathrm{pH} < 7$ significa $-\log_{10} x < 7$, cioè $\log_{10} x > -7$ (moltiplicando per $-1$ il verso si inverte), quindi $x > 10^{-7}$.

> [!TEST] Equazioni e disequazioni nelle domande del test
> - **Equazioni**: spesso è più veloce sostituire le opzioni nell'equazione che risolverla. Prima di tutto scarta le opzioni che non rispettano le condizioni di esistenza.
> - **Disequazioni**: prova un valore comodo (come $x = 0$ o $x = 1$) nella disequazione di partenza ed elimina le opzioni che lo trattano nel modo sbagliato. Poi guarda gli estremi: sono esclusi se lo impongono le C.E. o il segno stretto.
> - **Errori da evitare**: il verso non invertito con base tra 0 e 1, le C.E. dimenticate, i valori di $t$ scambiati per soluzioni. Ricorda anche che la stessa soluzione si può scrivere in forme diverse: $\log_{3/2} 2$ e $\frac{\ln 2}{\ln 3 - \ln 2}$ sono lo stesso numero.
> - **Risposta numerica**: senza calcolatrice un numero come $\log_3 7$ non si trasforma in decimale. Se una domanda che chiede un numero ti porta lì, ricontrolla i passaggi.

## Esercizi

::: esercizio base Calcolare logaritmi
Calcola senza calcolatrice:

- $\log_2 32$
- $\log_3 \frac{1}{27}$
- $\log_{1/2} 16$
- $\log_{25} 5$
- $\log_{10} 0{,}001$
- $\log_8 4$
::: soluzione
Per ciascuno cerco l'esponente da dare alla base per ottenere l'argomento.

- $32 = 2^5$, quindi $\log_2 32 = 5$.
- $\frac{1}{27} = 3^{-3}$, quindi $\log_3 \frac{1}{27} = -3$.
- $16 = 2^4 = \left(\frac12\right)^{-4}$, quindi $\log_{1/2} 16 = -4$.
- $5 = \sqrt{25} = 25^{1/2}$, quindi $\log_{25} 5 = \frac12$.
- $0{,}001 = \frac{1}{1000} = 10^{-3}$, quindi $\log_{10} 0{,}001 = -3$.
- $8 = 2^3$ e $4 = 2^2$, quindi $\log_8 4 = \frac{2}{3}$. Controllo: $8^{2/3} = \left(\sqrt[3]{8}\right)^2 = 2^2 = 4$.
:::

::: esercizio base Potenze con esponente frazionario e negativo
Calcola: $16^{3/4}$, $\;27^{-2/3}$, $\;\left(\frac{4}{9}\right)^{-1/2}$, $\;2^3 \cdot 4^{-1} \cdot 8^{1/3}$.
::: soluzione
- $16^{3/4} = \left(\sqrt[4]{16}\right)^3 = 2^3 = 8$.
- $27^{-2/3} = \dfrac{1}{\left(\sqrt[3]{27}\right)^2} = \dfrac{1}{3^2} = \dfrac{1}{9}$.
- $\left(\frac{4}{9}\right)^{-1/2} = \left(\frac{9}{4}\right)^{1/2} = \sqrt{\frac94} = \frac{3}{2}$.
- Tutto in base 2: $4^{-1} = 2^{-2}$ e $8^{1/3} = \sqrt[3]{8} = 2$. Quindi $2^3 \cdot 2^{-2} \cdot 2^1 = 2^{3 - 2 + 1} = 2^2 = 4$.
:::

::: esercizio base Mettere in ordine senza calcolatrice
Metti in ordine dal più piccolo al più grande: $2^{-1}$, $\;2^{0{,}5}$, $\;\left(\frac12\right)^{-2}$, $\;4^0$.
::: soluzione
Scrivo tutto come potenza di 2: $\left(\frac12\right)^{-2} = 2^2$ e $4^0 = 1 = 2^0$. Ora ho $2^{-1}$, $2^{0{,}5}$, $2^2$, $2^0$.

La base 2 è maggiore di 1: è più grande la potenza con l'esponente più grande. Gli esponenti in ordine sono $-1 < 0 < 0{,}5 < 2$, quindi

$$
2^{-1} < 4^0 < 2^{0{,}5} < \left(\frac12\right)^{-2}
$$

cioè $0{,}5 < 1 < \sqrt{2} < 4$ (con $\sqrt2 \approx 1{,}41$).
:::

::: esercizio base Equazioni esponenziali elementari
Risolvi: $3^{x+1} = 27$, $\;5^{2x} = \frac{1}{5}$, $\;2^x = -8$, $\;7^{x-2} = 1$.
::: soluzione
- $27 = 3^3$, quindi $x + 1 = 3$ e $x = 2$.
- $\frac15 = 5^{-1}$, quindi $2x = -1$ e $x = -\frac12$.
- $2^x$ è sempre positivo e non può valere $-8$: l'equazione è impossibile.
- $1 = 7^0$, quindi $x - 2 = 0$ e $x = 2$.
:::

::: esercizio base Equazioni logaritmiche elementari
Risolvi: $\log_2(3x - 1) = 3$ e $\log_5(x + 4) = \log_5(2x + 1)$.
::: soluzione
**Prima equazione.** C.E.: $3x - 1 > 0$, cioè $x > \frac13$. Per la definizione di logaritmo $3x - 1 = 2^3 = 8$, quindi $3x = 9$ e $x = 3$. Poiché $3 > \frac13$, la soluzione è accettabile.

**Seconda equazione.** C.E.: $x + 4 > 0$ e $2x + 1 > 0$, cioè $x > -4$ e $x > -\frac12$: insieme, $x > -\frac12$. Argomenti uguali: $x + 4 = 2x + 1$, quindi $x = 3$, accettabile. Controllo: $\log_5 7 = \log_5 7$.
:::

::: esercizio medio Sviluppare e riunire
Sviluppa $\log_2 \dfrac{8a^3}{\sqrt{b}}$ (con $a > 0$ e $b > 0$). Poi scrivi come un solo logaritmo $2\ln x - \ln(x + 1) + \ln 3$ (con $x > 0$).
::: soluzione
**Sviluppo.** Quoziente, poi prodotto, poi potenze ($\sqrt{b} = b^{1/2}$):

$$
\log_2 \frac{8a^3}{\sqrt{b}} = \log_2 8 + \log_2 a^3 - \log_2 b^{1/2} = 3 + 3\log_2 a - \frac{1}{2}\log_2 b
$$

**Riunione.** Il coefficiente 2 diventa un esponente, poi somme e differenze diventano prodotti e quozienti:

$$
2\ln x - \ln(x + 1) + \ln 3 = \ln x^2 + \ln 3 - \ln(x + 1) = \ln \frac{3x^2}{x + 1}
$$
:::

::: esercizio medio Calcolare con le proprietà
Calcola: $\log_6 12 + \log_6 3$, $\;\log_3 54 - \log_3 2$, $\;\log_9 27$, $\;\log_2 3 \cdot \log_3 16$.
::: soluzione
- Prodotto: $\log_6 12 + \log_6 3 = \log_6 36 = 2$.
- Quoziente: $\log_3 54 - \log_3 2 = \log_3 27 = 3$.
- Cambio di base, in base 3: $\log_9 27 = \dfrac{\log_3 27}{\log_3 9} = \dfrac{3}{2}$.
- Cambio di base, in base $e$: $\log_2 3 \cdot \log_3 16 = \dfrac{\ln 3}{\ln 2} \cdot \dfrac{\ln 16}{\ln 3} = \dfrac{\ln 16}{\ln 2} = \log_2 16 = 4$.
:::

::: esercizio medio Raccogliere una potenza
Risolvi $3^{x+1} + 3^{x-1} = 30$.
::: soluzione
Scrivo le due potenze come multipli di $3^x$: $3^{x+1} = 3 \cdot 3^x$ e $3^{x-1} = \frac13 \cdot 3^x$. Raccolgo:

$$
3^x\left(3 + \frac{1}{3}\right) = 30 \;\Rightarrow\; 3^x \cdot \frac{10}{3} = 30 \;\Rightarrow\; 3^x = 9 \;\Rightarrow\; x = 2
$$

Controllo: $3^3 + 3^1 = 27 + 3 = 30$.
:::

::: esercizio medio Equazione logaritmica con il prodotto
Risolvi $\log_3 x + \log_3(x + 6) = 3$.
::: soluzione
C.E.: $x > 0$ e $x + 6 > 0$; insieme, $x > 0$.

Con la proprietà del prodotto: $\log_3[x(x + 6)] = 3$, quindi $x(x + 6) = 3^3 = 27$, cioè $x^2 + 6x - 27 = 0$. Si scompone: $(x + 9)(x - 3) = 0$, quindi $x = -9$ oppure $x = 3$.

$x = -9$ non rispetta le C.E. e si scarta. L'unica soluzione è $x = 3$. Controllo: $\log_3 3 + \log_3 9 = 1 + 2 = 3$.
:::

::: esercizio medio Una esponenziale e una logaritmica
Risolvi: $\left(\frac{1}{2}\right)^{2x - 3} > \frac{1}{8}$ e $\log_2(x - 3) \leq 2$.
::: soluzione
**Prima.** $\frac18 = \left(\frac12\right)^3$, quindi $\left(\frac12\right)^{2x-3} > \left(\frac12\right)^3$. La base è tra 0 e 1: il verso si inverte, $2x - 3 < 3$, cioè $x < 3$.

**Seconda.** C.E.: $x > 3$. Poiché $2 = \log_2 4$ e la base è maggiore di 1: $x - 3 \leq 4$, cioè $x \leq 7$. Sistema con le C.E.: $3 < x \leq 7$, cioè l'intervallo $(3, 7]$.
:::

::: esercizio medio Base tra 0 e 1
Risolvi $\log_{1/3}(2x - 1) > -2$.
::: soluzione
C.E.: $2x - 1 > 0$, cioè $x > \frac12$.

Scrivo $-2$ come logaritmo in base $\frac13$: $-2 = \log_{1/3}\left(\frac13\right)^{-2} = \log_{1/3} 9$. La disequazione diventa $\log_{1/3}(2x - 1) > \log_{1/3} 9$. La base è tra 0 e 1, il verso si inverte:

$$
2x - 1 < 9 \;\Rightarrow\; x < 5
$$

Sistema con le C.E.: $\frac12 < x < 5$.
:::

::: esercizio test Sostituzione
L'equazione $9^x - 4 \cdot 3^x + 3 = 0$: quante soluzioni ha e quanto vale la loro somma?
::: soluzione
Poiché $9^x = \left(3^x\right)^2$, pongo $t = 3^x$ (con $t > 0$): $t^2 - 4t + 3 = 0$, con soluzioni $t = 1$ e $t = 3$, entrambe positive.

Torno a $x$: $3^x = 1$ dà $x = 0$; $3^x = 3$ dà $x = 1$. Le soluzioni sono due e la loro somma è $0 + 1 = 1$.

Attenzione: 4 è la somma dei valori di $t$, non delle soluzioni in $x$.
:::

::: esercizio test Una disequazione in due pezzi
Risolvi $\log_2(x^2 - 4x) < 5$.
::: soluzione
C.E.: $x^2 - 4x > 0$, cioè $x(x - 4) > 0$: $x < 0$ oppure $x > 4$.

Poiché $5 = \log_2 32$ e la base è maggiore di 1: $x^2 - 4x < 32$, cioè $x^2 - 4x - 32 < 0$. Si scompone: $(x - 8)(x + 4) < 0$, vera tra le radici: $-4 < x < 8$.

Sistema con le C.E.: $-4 < x < 0$ oppure $4 < x < 8$.

```retta
titolo: Soluzioni di $\log_2(x^2 - 4x) < 5$
da: -6 10
int: (-4, 0)
int: (4, 8)
```
:::

::: esercizio test Basi diverse e stima
Risolvi $2^{x+1} = 5^x$ e stabilisci tra quali due numeri interi consecutivi cade la soluzione.
::: soluzione
Applico $\ln$ ai due membri: $(x + 1)\ln 2 = x\ln 5$, quindi $\ln 2 = x(\ln 5 - \ln 2)$ e

$$
x = \frac{\ln 2}{\ln 5 - \ln 2} = \frac{\ln 2}{\ln \frac{5}{2}}
$$

Oppure: divido i due membri per $2^x$ e ottengo $2 = \left(\frac52\right)^x$, cioè $x = \log_{5/2} 2$.

Stima: $\left(\frac52\right)^0 = 1 < 2 < \frac52 = \left(\frac52\right)^1$ e la base $\frac52$ è maggiore di 1, quindi l'esponente cercato sta tra 0 e 1: $0 < x < 1$ (vale circa $0{,}76$).
:::

::: esercizio test Crescita di una colonia
Una colonia di batteri raddoppia ogni 3 ore. Alle 8 del mattino ci sono 500 batteri. A che ora saranno 8000?
::: soluzione
Dopo $t$ ore la colonia ha raddoppiato $\frac{t}{3}$ volte, quindi $N(t) = 500 \cdot 2^{t/3}$. Impongo $N(t) = 8000$:

$$
500 \cdot 2^{t/3} = 8000 \;\Rightarrow\; 2^{t/3} = 16 = 2^4 \;\Rightarrow\; \frac{t}{3} = 4 \;\Rightarrow\; t = 12
$$

Dodici ore dopo le 8 del mattino: alle 20.
:::

::: esercizio test Una fratta con l'esponenziale
Risolvi $\dfrac{3^x - 9}{x + 1} \geq 0$.
::: soluzione
C.E.: $x + 1 \neq 0$, cioè $x \neq -1$.

Studio il segno dei due pezzi:

- numeratore: $3^x - 9 \geq 0$ quando $3^x \geq 3^2$, cioè $x \geq 2$;
- denominatore: $x + 1 > 0$ quando $x > -1$.

Tabella dei segni: per $x < -1$ numeratore negativo e denominatore negativo, frazione positiva; per $-1 < x < 2$ numeratore negativo e denominatore positivo, frazione negativa; per $x > 2$ frazione positiva. In $x = 2$ il numeratore vale zero e la frazione è nulla: con il $\geq$ il valore $x = 2$ è accettato.

Soluzioni: $x < -1$ oppure $x \geq 2$.

```retta
titolo: Soluzioni di $\frac{3^x - 9}{x+1} \geq 0$
da: -3 4
int: (-inf, -1)
int: [2, +inf)
```
:::

::: esercizio test Attenzione al quadrato
Quante soluzioni ha l'equazione $\ln(x^2) = \ln(x + 6)$?
::: soluzione
C.E.: $x^2 > 0$, cioè $x \neq 0$, e $x + 6 > 0$, cioè $x > -6$.

Argomenti uguali: $x^2 = x + 6$, cioè $x^2 - x - 6 = 0$, che si scompone in $(x - 3)(x + 2) = 0$: $x = 3$ oppure $x = -2$.

Tutte e due rispettano le C.E. (per $x = -2$: $x^2 = 4 > 0$ e $x + 6 = 4 > 0$). Le soluzioni sono **due**. Chi trasforma $\ln(x^2)$ in $2\ln x$ impone $x > 0$ e perde $x = -2$.
:::

## Quiz di verifica

```quiz
D: Quanto vale $\log_3 \dfrac{1}{81}$?
N: -4
= $\dfrac{1}{81} = \dfrac{1}{3^4} = 3^{-4}$, quindi l'esponente da dare a 3 è $-4$.

D: Quanto vale $\log_2 24 - \log_2 3$?
N: 3
= La differenza di due logaritmi con la stessa base è il logaritmo del quoziente: $\log_2 \dfrac{24}{3} = \log_2 8 = 3$.

D: Qual è il dominio della funzione $f(x) = \ln(9 - x^2)$?
+ $(-3, 3)$
- $(-\infty, -3) \cup (3, +\infty)$
- $[-3, 3]$
- $(0, 3)$
= Serve $9 - x^2 > 0$, cioè $x^2 < 9$, quindi $-3 < x < 3$. Gli estremi sono esclusi perché l'argomento deve essere strettamente positivo ($\ln 0$ non esiste). $(0, 3)$ nasce dal confondere la condizione sull'argomento con $x > 0$; $(-\infty, -3) \cup (3, +\infty)$ è invece l'insieme in cui $9 - x^2$ è negativo.

D: Vero o falso: per ogni $x > 0$ e $y > 0$ vale $\log_2(x + y) = \log_2 x + \log_2 y$.
- Vero
+ Falso
= Per la somma non esiste nessuna regola. Controesempio: $\log_2(4 + 4) = \log_2 8 = 3$, mentre $\log_2 4 + \log_2 4 = 2 + 2 = 4$. La regola vera riguarda il prodotto: $\log_2(xy) = \log_2 x + \log_2 y$.

D: Vero o falso: $2^{\sqrt{2}} < 2^{1{,}5}$.
+ Vero
- Falso
= La base 2 è maggiore di 1, quindi è più grande la potenza con l'esponente più grande. Poiché $1{,}5^2 = 2{,}25 > 2$, si ha $\sqrt{2} < 1{,}5$ e quindi $2^{\sqrt 2} < 2^{1{,}5}$.

D: Sia $f(x) = a^x$ con $0 < a < 1$. Quali affermazioni sono vere?
+ Il grafico di $f$ passa per il punto $(0, 1)$.
+ $f(x) > 0$ per ogni $x$ reale.
+ $f(2) > f(3)$.
- $f$ è crescente.
- Il dominio di $f$ è $(0, +\infty)$.
= Ogni esponenziale vale 1 in $x = 0$ ed è sempre positivo. Con base tra 0 e 1 la funzione è decrescente, quindi a una $x$ più grande corrisponde un valore più piccolo: $f(2) > f(3)$. Il dominio è tutto $\R$; $(0, +\infty)$ è l'immagine.

D: Risolvi l'equazione $4^x = 8$. Quanto vale $x$?
N: 3/2
= Scrivi tutto in base 2: $2^{2x} = 2^3$, quindi $2x = 3$ e $x = \dfrac{3}{2}$.

D: Quali sono le soluzioni dell'equazione $\log_3 x + \log_3(x - 8) = 2$?
+ Solo $x = 9$
- $x = 9$ e $x = -1$
- Solo $x = -1$
- Nessuna soluzione
= Condizioni di esistenza: $x > 0$ e $x > 8$, quindi $x > 8$. Poi $\log_3[x(x - 8)] = 2$ dà $x^2 - 8x = 9$, cioè $x^2 - 8x - 9 = 0$, con radici $9$ e $-1$. Solo $x = 9$ rispetta le condizioni di esistenza.

D: L'insieme delle soluzioni di $\left(\dfrac{1}{3}\right)^{x-2} > 9$ è
+ $x < 0$
- $x > 0$
- $x < 4$
- $x > 4$
= $9 = \left(\dfrac{1}{3}\right)^{-2}$, quindi la disequazione è $\left(\dfrac{1}{3}\right)^{x-2} > \left(\dfrac{1}{3}\right)^{-2}$. La base è tra 0 e 1 e il verso si inverte: $x - 2 < -2$, cioè $x < 0$. Chi non inverte il verso trova $x > 0$; chi scrive per errore $9 = \left(\frac13\right)^2$ trova $x < 4$ (o $x > 4$ se sbaglia anche il verso).

D: L'insieme delle soluzioni di $\log_{1/2}(x - 1) > 1$ è
+ $1 < x < \dfrac{3}{2}$
- $x < \dfrac{3}{2}$
- $x > \dfrac{3}{2}$
- $x > 3$
= Condizione di esistenza: $x > 1$. Poi $1 = \log_{1/2} \dfrac{1}{2}$ e, con base tra 0 e 1, il verso si inverte: $x - 1 < \dfrac{1}{2}$, cioè $x < \dfrac{3}{2}$. Insieme alla condizione $x > 1$ si ottiene $1 < x < \dfrac32$. La risposta $x < \frac32$ dimentica le condizioni di esistenza, $x > \frac32$ dimentica di invertire il verso.

D: Quali uguaglianze valgono per ogni $x > 0$?
+ $\ln(e^2 x) = 2 + \ln x$
+ $\log_2(8x) = 3 + \log_2 x$
+ $\log_3 \dfrac{1}{x} = -\log_3 x$
- $\ln(x^2) = (\ln x)^2$
- $\log_2(x + 8) = \log_2 x + 3$
= Le tre uguaglianze vere sono le proprietà del prodotto e del reciproco: $\ln(e^2x) = \ln e^2 + \ln x$ e $\log_2(8x) = \log_2 8 + \log_2 x$. Invece $\ln(x^2) = 2\ln x$, che per $x = e$ vale 2, mentre $(\ln e)^2 = 1$; e $\log_2(x + 8)$ non si spezza: per $x = 8$ vale 4, mentre $\log_2 8 + 3 = 6$.

D: Quanto vale $2^{3 + \log_2 5}$?
N: 40
= $2^{3 + \log_2 5} = 2^3 \cdot 2^{\log_2 5} = 8 \cdot 5 = 40$, perché $a^{\log_a x} = x$.

D: Il grafico di $y = \log_a x$ passa per il punto $(9, 2)$. Quanto vale la base $a$?
+ $a = 3$
- $a = 81$
- $a = \dfrac{9}{2}$
- $a = 3$ oppure $a = -3$
= Il punto $(9, 2)$ sul grafico significa $\log_a 9 = 2$, cioè $a^2 = 9$. La base deve essere positiva, quindi $a = 3$. $a = 81$ viene da $9^2$ (ruoli di base e argomento scambiati), $\frac92$ dal dividere invece di usare la definizione, $-3$ non è una base ammessa.

D: Vero o falso: l'equazione $5^x = -25$ ha la soluzione $x = -2$.
- Vero
+ Falso
= $5^{-2} = \dfrac{1}{25}$, non $-25$. Un esponenziale con base positiva è sempre positivo, quindi $5^x = -25$ è impossibile.

D: Una soluzione ha $[\mathrm{H}^+] = 10^{-4}$. Un'altra ha una concentrazione di ioni idrogeno 100 volte più piccola. Qual è il pH della seconda soluzione?
+ $6$
- $2$
- $4$
- $-6$
= La seconda concentrazione è $\dfrac{10^{-4}}{100} = 10^{-4} \cdot 10^{-2} = 10^{-6}$, quindi $\mathrm{pH} = -\log_{10} 10^{-6} = 6$. Una concentrazione più piccola dà un pH più alto (soluzione meno acida). $-6$ nasce dal dimenticare il segno meno nella definizione, $2$ dal sottrarre invece di aggiungere.

D: Quali numeri sono soluzioni di $4^x - 5 \cdot 2^x + 4 = 0$?
+ $0$
+ $2$
- $1$
- $4$
= Con $t = 2^x$ l'equazione diventa $t^2 - 5t + 4 = 0$, con soluzioni $t = 1$ e $t = 4$. Tornando a $x$: $2^x = 1$ dà $x = 0$ e $2^x = 4$ dà $x = 2$. I numeri 1 e 4 sono i valori di $t$, non di $x$.
```

## Checklist

```checklist
So calcolare potenze con esponente negativo e frazionario
So per quali basi è definita $a^x$ e so disegnarne il grafico nei casi $a > 1$ e $0 < a < 1$
So confrontare due potenze senza calcolatrice
So calcolare un logaritmo scrivendo base e argomento come potenze dello stesso numero
So usare le proprietà dei logaritmi per sviluppare un'espressione o riunirla in un solo logaritmo
So riconoscere gli errori tipici, come $\log_a(x+y)$ spezzato o $(\log_a x)^2$ confuso con $\log_a x^2$
So usare il cambio di base e so che cosa indicano $\ln$ e $\log_{10}$
So che esponenziale e logaritmo con la stessa base sono funzioni inverse, con grafici simmetrici rispetto a $y = x$
So trovare il dominio di una funzione che contiene logaritmi
So risolvere equazioni esponenziali con la stessa base, con basi diverse e con la sostituzione $t = a^x$
So risolvere equazioni logaritmiche scrivendo le condizioni di esistenza e scartando le soluzioni non accettabili
So risolvere disequazioni esponenziali e logaritmiche, invertendo il verso quando la base è tra 0 e 1
So impostare un modello di crescita esponenziale e usare la formula del pH
```

---

<!-- FILE: ai/moduli/08-trigonometria.md -->
> File: `ai/moduli/08-trigonometria.md`

---
modulo: 8
titolo: "Trigonometria"
breve: "Angoli in gradi e radianti, seno, coseno e tangente sulla circonferenza goniometrica, formule, equazioni e disequazioni trigonometriche, triangoli."
ore: 9
unita:
  - "Introduzione: circonferenza goniometrica e angoli"
  - "8.1 Funzioni trigonometriche"
  - "8.2 Equazioni e disequazioni trigonometriche"
---

## In breve

- $180^\circ$ corrispondono a $\pi$ radianti: per passare dai gradi ai radianti si moltiplica per $\frac{\pi}{180}$, per tornare indietro per $\frac{180}{\pi}$.
- Sulla circonferenza goniometrica (centro nell'origine, raggio 1) il punto dell'angolo $x$ è $P = (\cos x, \sin x)$; la tangente è $\tan x = \frac{\sin x}{\cos x}$.
- Relazione fondamentale: $\sin^2 x + \cos^2 x = 1$. Il segno di seno, coseno e tangente dipende dal quadrante.
- I valori di $0$, $\frac{\pi}{6}$, $\frac{\pi}{4}$, $\frac{\pi}{3}$, $\frac{\pi}{2}$ vanno saputi a memoria; gli altri angoli si riportano al primo quadrante con gli archi associati.
- Le formule di addizione, sottrazione, duplicazione e bisezione danno i valori esatti di angoli come $15^\circ$ o $105^\circ$.
- Seno e coseno hanno periodo $2\pi$ e valori in $[-1, 1]$; la tangente ha periodo $\pi$ e non esiste in $\frac{\pi}{2} + k\pi$, con $k$ intero.
- $\sin x = c$ e $\cos x = c$ hanno soluzioni solo se $-1 \leq c \leq 1$, e allora ne hanno infinite: si scrivono con $+2k\pi$ ($+k\pi$ per la tangente). Le disequazioni si risolvono leggendo archi sulla circonferenza.
- Nel triangolo rettangolo un cateto è l'ipotenusa per il seno dell'angolo opposto; in ogni triangolo valgono il teorema del coseno e il teorema dei seni.

## Introduzione: circonferenza goniometrica e angoli

### La circonferenza goniometrica

> [!DEF] Circonferenza goniometrica
> La **circonferenza goniometrica** è la circonferenza del piano cartesiano con centro nell'origine $O$ e raggio 1. La sua equazione è $x^2 + y^2 = 1$.

Gli angoli si disegnano con il vertice nell'origine. Il primo lato è sempre il semiasse positivo delle $x$, cioè va verso il punto $A = (1, 0)$; il secondo lato taglia la circonferenza in un punto $P$. A ogni angolo corrispondono un solo punto $P$ e un arco $AP$. Per convenzione:

- ruotando in **senso antiorario** si ottengono angoli **positivi**;
- ruotando in **senso orario** si ottengono angoli **negativi**.

Gli angoli si indicano spesso con lettere greche: $\alpha$ (alfa), $\beta$ (beta), $\gamma$ (gamma), $\theta$ (theta). Quando si studiano le funzioni si usa anche la solita $x$. Gli assi dividono il piano in quattro **quadranti**, numerati in senso antiorario: il I va da $0^\circ$ a $90^\circ$, il II da $90^\circ$ a $180^\circ$, il III da $180^\circ$ a $270^\circ$, il IV da $270^\circ$ a $360^\circ$.

```grafico
titolo: La circonferenza goniometrica e l'angolo $\alpha = 120^\circ$, nel II quadrante
x: -1.6 1.6
y: -1.4 1.4
passo-x: 1
passo-y: 1
cerchio: 0 0 1
segmento: 0 0 cos(2pi/3) sin(2pi/3) | rosso
arco: 0 0 0.3 0 2pi/3 | rosso | $\alpha$
punto: 1 0 | $A$ | no
punto: cos(2pi/3) sin(2pi/3) | rosso | $P$ | no
testo: 1.15 1.15 | "I"
testo: -1.15 1.15 | "II"
testo: -1.15 -1.15 | "III"
testo: 1.15 -1.15 | "IV"
```

### Gradi e radianti

> [!DEF] Grado e radiante
> - Il **grado** ($1^\circ$) è l'angolo che corrisponde a $\frac{1}{360}$ dell'angolo giro.
> - Il **radiante** è l'angolo al centro che, su una circonferenza qualsiasi, stacca un arco lungo quanto il raggio.

Una circonferenza di raggio $r$ è lunga $2\pi r$, cioè contiene $2\pi$ volte il raggio: l'angolo giro misura quindi $2\pi$ radianti. Il numero $\pi$ («pi greco») vale circa $3{,}14$. Dunque $360^\circ$ corrispondono a $2\pi$ radianti e $180^\circ$ a $\pi$ radianti. Quando un angolo è scritto senza unità di misura, è in radianti.

> [!PROP] Conversione tra gradi e radianti
> Se $\alpha$ è la misura in gradi e $x$ quella in radianti, vale la proporzione $\alpha : 360 = x : 2\pi$, da cui
> $$
> x = \alpha \cdot \frac{\pi}{180} \qquad\qquad \alpha = x \cdot \frac{180}{\pi}
> $$

| Gradi | Radianti | Gradi | Radianti |
|---|---|---|---|
| $0^\circ$ | $0$ | $180^\circ$ | $\pi$ |
| $30^\circ$ | $\frac{\pi}{6}$ | $210^\circ$ | $\frac{7\pi}{6}$ |
| $45^\circ$ | $\frac{\pi}{4}$ | $225^\circ$ | $\frac{5\pi}{4}$ |
| $60^\circ$ | $\frac{\pi}{3}$ | $240^\circ$ | $\frac{4\pi}{3}$ |
| $90^\circ$ | $\frac{\pi}{2}$ | $270^\circ$ | $\frac{3\pi}{2}$ |
| $120^\circ$ | $\frac{2\pi}{3}$ | $300^\circ$ | $\frac{5\pi}{3}$ |
| $135^\circ$ | $\frac{3\pi}{4}$ | $315^\circ$ | $\frac{7\pi}{4}$ |
| $150^\circ$ | $\frac{5\pi}{6}$ | $330^\circ$ | $\frac{11\pi}{6}$ |

Un trucco: i multipli di $30^\circ$ si scrivono con $\pi$ fratto 6 (o fratto 3, o fratto 2), i multipli di $45^\circ$ con $\pi$ fratto 4. Per esempio $210^\circ = 7 \cdot 30^\circ$, quindi $\frac{7\pi}{6}$. L'angolo giro, $360^\circ$, è $2\pi$.

> [!ESEMPIO] Conversioni
> - $150^\circ = 150 \cdot \frac{\pi}{180} = \frac{5\pi}{6}$.
> - $40^\circ = 40 \cdot \frac{\pi}{180} = \frac{2\pi}{9}$.
> - $\frac{7\pi}{4} = \frac{7\pi}{4} \cdot \frac{180}{\pi} = 7 \cdot 45 = 315^\circ$.
> - $\frac{2\pi}{5}$ radianti corrispondono a $\frac{2 \cdot 180^\circ}{5} = 72^\circ$: al posto di $\pi$ si mette $180^\circ$.
> - $1$ radiante $= \frac{180^\circ}{\pi} \approx 57{,}3^\circ$ (il simbolo $\approx$ si legge «circa»).

> [!NOTA] Lunghezza di un arco
> Su una circonferenza di raggio $r$, un angolo al centro di $x$ radianti stacca un arco lungo $\ell = r \cdot x$. Per esempio, con raggio 3 e angolo $\frac{\pi}{3}$ l'arco è lungo $\pi$. Sulla circonferenza goniometrica ($r = 1$) la misura in radianti è proprio la lunghezza dell'arco.

### Angoli maggiori di un giro e angoli negativi

Aggiungendo o togliendo un giro completo ($2\pi$, cioè $360^\circ$) si torna nello stesso punto $P$. Quindi gli angoli $x$ e $x + 2k\pi$, dove $k$ è un numero intero qualsiasi, corrispondono allo stesso punto. Si scrive $k \in \Z$, dove $\in$ si legge «appartiene a» e $\Z$ è l'insieme dei numeri interi $0, \pm 1, \pm 2, \ldots$ (il simbolo $\pm$ si legge «più o meno»).

> [!ESEMPIO] Riportare un angolo nel primo giro
> - $\frac{17\pi}{3}$: tolgo due giri, cioè $4\pi = \frac{12\pi}{3}$. Resta $\frac{5\pi}{3}$, che è nel IV quadrante.
> - $-\frac{5\pi}{6}$: aggiungo un giro, $-\frac{5\pi}{6} + 2\pi = \frac{7\pi}{6}$, che è nel III quadrante.
> - $390^\circ = 360^\circ + 30^\circ$: stesso punto di $30^\circ$.

> [!TRAPPOLA] Radianti e numeri
> - $\pi$ radianti corrispondono a $180^\circ$, ma $\pi$ come numero vale circa $3{,}14$: non scrivere $\pi = 180$.
> - L'angolo $-\frac{\pi}{4}$ si percorre in senso orario e arriva nel IV quadrante, nello stesso punto di $\frac{7\pi}{4}$, non di $\frac{3\pi}{4}$.

> [!TEST] Angoli nelle domande del test
> - Le conversioni si fanno a mente partendo da $180^\circ = \pi$: $\frac{\pi}{12}$ corrisponde a $\frac{180^\circ}{12} = 15^\circ$, quindi $\frac{5\pi}{12}$ radianti sono $5 \cdot 15^\circ = 75^\circ$.
> - Per capire in che quadrante cade un angolo, togli i giri interi e confronta con $\frac{\pi}{2}$, $\pi$, $\frac{3\pi}{2}$ scritti con lo stesso denominatore. Esempio: $\frac{11\pi}{4} - 2\pi = \frac{3\pi}{4}$, che sta tra $\frac{2\pi}{4}$ e $\frac{4\pi}{4}$: II quadrante.

## 8.1 Funzioni trigonometriche

### Seno e coseno

> [!DEF] Seno e coseno
> Sia $P$ il punto della circonferenza goniometrica che corrisponde all'angolo $x$.
> - Il **coseno** di $x$, scritto $\cos x$, è l'ascissa di $P$.
> - Il **seno** di $x$, scritto $\sin x$, è l'ordinata di $P$.
>
> Quindi $P = (\cos x, \sin x)$.

Se $H$ è la proiezione di $P$ sull'asse $x$, il segmento $OH$ misura $|\cos x|$ e il segmento $HP$ misura $|\sin x|$. Il segno dice da che parte sta $P$: il coseno è positivo a destra dell'asse $y$, il seno è positivo sopra l'asse $x$.

```grafico
titolo: $\cos x$ è l'ascissa di $P$, $\sin x$ è la sua ordinata
x: -1.4 1.4
y: -1.2 1.2
passo-x: 1
passo-y: 1
cerchio: 0 0 1
segmento: 0 0 cos(pi/3) sin(pi/3) | grigio
segmento: 0 0 cos(pi/3) 0 | rosso | spesso | $\cos x$ | s
segmento: cos(pi/3) 0 cos(pi/3) sin(pi/3) | spesso | $\sin x$ | e
arco: 0 0 0.25 0 pi/3 | $x$
punto: cos(pi/3) sin(pi/3) | $P$ | ne
punto: cos(pi/3) 0 | $H$ | se
punto: 1 0 | $A$ | no
```

> [!PROP] Valori limitati e angoli sugli assi
> Poiché $P$ sta su una circonferenza di raggio 1, seno e coseno sono sempre compresi tra $-1$ e $1$:
> $$
> -1 \leq \sin x \leq 1 \qquad\qquad -1 \leq \cos x \leq 1
> $$
>
> | $x$ | $0$ | $\frac{\pi}{2}$ | $\pi$ | $\frac{3\pi}{2}$ | $2\pi$ |
> |---|---|---|---|---|---|
> | punto $P$ | $(1, 0)$ | $(0, 1)$ | $(-1, 0)$ | $(0, -1)$ | $(1, 0)$ |
> | $\cos x$ | $1$ | $0$ | $-1$ | $0$ | $1$ |
> | $\sin x$ | $0$ | $1$ | $0$ | $-1$ | $0$ |

I nomi vengono dal latino: «seno» da *sinus* (insenatura, piega), «coseno» da *complementi sinus*, il seno dell'angolo complementare. Infatti, come vedremo, $\cos x = \sin\left(\frac{\pi}{2} - x\right)$.

### Tangente e cotangente

> [!DEF] Tangente e cotangente
> La **tangente** di $x$ è
> $$
> \tan x = \frac{\sin x}{\cos x}
> $$
> ed esiste solo se $\cos x \neq 0$, cioè per $x \neq \frac{\pi}{2} + k\pi$ con $k \in \Z$.
>
> La **cotangente** di $x$ è
> $$
> \operatorname{cotan} x = \frac{\cos x}{\sin x}
> $$
> ed esiste solo se $\sin x \neq 0$, cioè per $x \neq k\pi$. Dove esistono entrambe, $\operatorname{cotan} x = \dfrac{1}{\tan x}$. La cotangente si scrive anche $\cot x$.

**Significato geometrico.** Traccia la retta tangente alla circonferenza nel punto $A$ (il nome viene dal latino *tangere*, «toccare»): è la retta verticale $x = 1$. La retta $OP$ la incontra in un punto $R$, e l'ordinata di $R$ è $\tan x$. Se $P$ sta a sinistra dell'asse $y$ (II e III quadrante), per arrivare a $R$ bisogna prolungare $OP$ dall'altra parte, oltre l'origine. Il motivo: i triangoli $OHP$ e $OAR$ sono simili, quindi $\frac{AR}{OA} = \frac{HP}{OH}$; poiché $OA = 1$, si ottiene $AR = \frac{\sin x}{\cos x}$ (a meno del segno). Allo stesso modo la retta orizzontale $y = 1$ è tangente alla circonferenza nel punto $B = (0, 1)$: la retta $OP$ la incontra in un punto che ha ascissa $\operatorname{cotan} x$.

```grafico
titolo: La tangente di $x$ è l'ordinata del punto $R$, sulla retta $x = 1$
x: -1.4 2
y: -1.2 2.1
passo-x: 1
passo-y: 1
cerchio: 0 0 1
verticale: 1 | grigio
segmento: 0 0 1 tan(pi/3) | grigio
segmento: 1 0 1 tan(pi/3) | rosso | spesso | $\tan x$ | e
arco: 0 0 0.25 0 pi/3 | $x$
punto: cos(pi/3) sin(pi/3) | $P$ | no
punto: 1 tan(pi/3) | rosso | $R$ | e
punto: 1 0 | $A$ | ne
```

**Collegamento con la retta.** La tangente è la pendenza della retta $OP$. In generale, una retta che forma un angolo $\alpha$ con il semiasse positivo delle $x$ ha coefficiente angolare $m = \tan\alpha$. Per esempio $y = \sqrt{3}\,x$ forma un angolo di $60^\circ$ con l'asse $x$, perché $\tan 60^\circ = \sqrt3$; la bisettrice $y = x$ forma un angolo di $45^\circ$.

> [!PROP] Segni nei quadranti
> | Quadrante | I | II | III | IV |
> |---|---|---|---|---|
> | $\sin x$ | $+$ | $+$ | $-$ | $-$ |
> | $\cos x$ | $+$ | $-$ | $-$ | $+$ |
> | $\tan x$ e $\operatorname{cotan} x$ | $+$ | $-$ | $+$ | $-$ |

### La relazione fondamentale

> [!PROP] Relazione fondamentale della trigonometria
> Per ogni angolo $x$:
> $$
> \sin^2 x + \cos^2 x = 1
> $$
> Il motivo: $P = (\cos x, \sin x)$ sta sulla circonferenza $x^2 + y^2 = 1$. È anche il teorema di Pitagora nel triangolo rettangolo $OHP$, che ha ipotenusa $OP = 1$.

La scrittura $\sin^2 x$ significa $(\sin x)^2$, il quadrato del seno; non è $\sin(x^2)$. Dalla relazione fondamentale si ricavano $\cos x = \pm\sqrt{1 - \sin^2 x}$ e $\sin x = \pm\sqrt{1 - \cos^2 x}$: il segno giusto si sceglie guardando il quadrante.

> [!METODO] Da una funzione alle altre
> 1. Con $\sin^2 x + \cos^2 x = 1$ trovi l'altra funzione, a meno del segno.
> 2. Scegli il segno in base al quadrante in cui cade $x$.
> 3. Calcoli $\tan x = \dfrac{\sin x}{\cos x}$ e $\operatorname{cotan} x = \dfrac{\cos x}{\sin x}$.

> [!ESEMPIO] Seno noto nel secondo quadrante
> $\sin x = \frac{5}{13}$ con $\frac{\pi}{2} < x < \pi$.
>
> $\cos^2 x = 1 - \frac{25}{169} = \frac{144}{169}$, quindi $\cos x = \pm\frac{12}{13}$. Nel II quadrante il coseno è negativo: $\cos x = -\frac{12}{13}$.
>
> Poi $\tan x = \dfrac{5/13}{-12/13} = -\dfrac{5}{12}$ e $\operatorname{cotan} x = -\dfrac{12}{5}$.

> [!ESEMPIO] Coseno noto nel quarto quadrante
> $\cos x = \frac{8}{17}$ con $\frac{3\pi}{2} < x < 2\pi$. $\sin^2 x = 1 - \frac{64}{289} = \frac{225}{289}$; nel IV quadrante il seno è negativo, quindi $\sin x = -\frac{15}{17}$ e $\tan x = -\frac{15}{8}$.

> [!NOTA] Se conosci la tangente
> Dividendo la relazione fondamentale per $\cos^2 x$ si ottiene $1 + \tan^2 x = \dfrac{1}{\cos^2 x}$. Per esempio, se $\tan x = 2$ e $x$ è nel III quadrante: $\cos^2 x = \frac{1}{1 + 4} = \frac15$, quindi $\cos x = -\frac{1}{\sqrt5} = -\frac{\sqrt5}{5}$ (negativo nel III quadrante) e $\sin x = \tan x \cdot \cos x = -\frac{2\sqrt5}{5}$.

> [!TRAPPOLA] Errori con la relazione fondamentale
> - $\sin^2 x$ è $(\sin x)^2$, non $\sin(x^2)$.
> - La radice dà due segni: è il quadrante a decidere quale tenere.
> - $\sin x + \cos x = 1$ **non** è la relazione fondamentale: vale solo per alcuni angoli. Per $x = \frac{\pi}{4}$, per esempio, la somma vale $\sqrt2$.

### Valori notevoli

> [!PROP] Tabella dei valori notevoli
> | Angolo | $\sin$ | $\cos$ | $\tan$ | $\operatorname{cotan}$ |
> |---|---|---|---|---|
> | $0$ ($0^\circ$) | $0$ | $1$ | $0$ | non esiste |
> | $\frac{\pi}{6}$ ($30^\circ$) | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{3}}{3}$ | $\sqrt{3}$ |
> | $\frac{\pi}{4}$ ($45^\circ$) | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{2}}{2}$ | $1$ | $1$ |
> | $\frac{\pi}{3}$ ($60^\circ$) | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $\sqrt{3}$ | $\frac{\sqrt{3}}{3}$ |
> | $\frac{\pi}{2}$ ($90^\circ$) | $1$ | $0$ | non esiste | $0$ |
> | $\pi$ ($180^\circ$) | $0$ | $-1$ | $0$ | non esiste |
> | $\frac{3\pi}{2}$ ($270^\circ$) | $-1$ | $0$ | non esiste | $0$ |

**Da dove vengono.** Per $45^\circ$ il triangolo $OHP$ è rettangolo e isoscele, con ipotenusa 1: i cateti sono uguali e, chiamata $\ell$ la loro lunghezza, per il teorema di Pitagora $2\ell^2 = 1$, quindi $\ell = \frac{1}{\sqrt2} = \frac{\sqrt2}{2}$. Per $30^\circ$ e $60^\circ$ si usa metà di un triangolo equilatero di lato 1: ha lati $1$ e $\frac12$ e altezza $\sqrt{1 - \frac14} = \frac{\sqrt3}{2}$; il lato $\frac12$ sta di fronte all'angolo di $30^\circ$. Infine $\tan\frac{\pi}{6} = \frac{1/2}{\sqrt3/2} = \frac{1}{\sqrt3} = \frac{\sqrt3}{3}$, razionalizzando.

**Per ricordarli.** I seni di $0^\circ$, $30^\circ$, $45^\circ$, $60^\circ$, $90^\circ$ sono $\frac{\sqrt0}{2}$, $\frac{\sqrt1}{2}$, $\frac{\sqrt2}{2}$, $\frac{\sqrt3}{2}$, $\frac{\sqrt4}{2}$; i coseni sono gli stessi numeri in ordine inverso.

```grafico
titolo: I punti degli angoli $\frac{\pi}{6}$, $\frac{\pi}{4}$ e $\frac{\pi}{3}$
x: -0.3 1.5
y: -0.3 1.3
passo-x: 0.5
passo-y: 0.5
cerchio: 0 0 1
segmento: 0 0 cos(pi/6) sin(pi/6) | grigio
segmento: 0 0 cos(pi/4) sin(pi/4) | grigio
segmento: 0 0 cos(pi/3) sin(pi/3) | grigio
punto: cos(pi/6) sin(pi/6) | $\left(\frac{\sqrt3}{2}, \frac12\right)$ | e
punto: cos(pi/4) sin(pi/4) | rosso | $\left(\frac{\sqrt2}{2}, \frac{\sqrt2}{2}\right)$ | ne
punto: cos(pi/3) sin(pi/3) | $\left(\frac12, \frac{\sqrt3}{2}\right)$ | no
```

### Archi associati

Per calcolare seno, coseno e tangente di un angolo qualsiasi lo si riporta a un angolo del primo quadrante, sfruttando le simmetrie della circonferenza. Gli angoli $x$, $\pi - x$, $\pi + x$ e $-x$ hanno punti simmetrici: cambiano solo i segni delle coordinate.

```grafico
titolo: I punti di $x$, $\pi - x$, $\pi + x$ e $-x$ (qui $x = \frac{\pi}{6}$)
x: -1.6 1.6
y: -1.3 1.3
passo-x: 1
passo-y: 1
cerchio: 0 0 1
segmento: cos(pi/6) sin(pi/6) -cos(pi/6) sin(pi/6) | grigio | tratteggio
segmento: cos(pi/6) -sin(pi/6) -cos(pi/6) -sin(pi/6) | grigio | tratteggio
segmento: cos(pi/6) sin(pi/6) cos(pi/6) -sin(pi/6) | grigio | tratteggio
punto: cos(pi/6) sin(pi/6) | rosso | $x$ | ne
punto: -cos(pi/6) sin(pi/6) | $\pi - x$ | no
punto: -cos(pi/6) -sin(pi/6) | $\pi + x$ | so
punto: cos(pi/6) -sin(pi/6) | $-x$ | se
```

> [!PROP] Formule degli archi associati
> | Angolo | Simmetria del punto | $\sin$ | $\cos$ | $\tan$ |
> |---|---|---|---|---|
> | $-x$ (opposto) | rispetto all'asse $x$ | $-\sin x$ | $\cos x$ | $-\tan x$ |
> | $\pi - x$ (supplementare) | rispetto all'asse $y$ | $\sin x$ | $-\cos x$ | $-\tan x$ |
> | $\pi + x$ | rispetto all'origine | $-\sin x$ | $-\cos x$ | $\tan x$ |
> | $2\pi - x$ | rispetto all'asse $x$ | $-\sin x$ | $\cos x$ | $-\tan x$ |
> | $\frac{\pi}{2} - x$ (complementare) | rispetto alla retta $y = x$ | $\cos x$ | $\sin x$ | $\operatorname{cotan} x$ |
>
> Inoltre, per la periodicità, $x + 2k\pi$ ha gli stessi valori di $x$.

> [!METODO] Riportare un angolo al primo quadrante
> 1. Togli i giri interi (multipli di $2\pi$).
> 2. Guarda in quale quadrante cade l'angolo.
> 3. Trova l'angolo acuto di riferimento: $\pi - x$ nel II quadrante, $x - \pi$ nel III, $2\pi - x$ nel IV.
> 4. Prendi il valore dell'angolo di riferimento con il segno del quadrante dell'angolo **di partenza**.

> [!ESEMPIO] Angoli ridotti al primo quadrante
> - $\sin\frac{5\pi}{6} = \sin\left(\pi - \frac{\pi}{6}\right) = \sin\frac{\pi}{6} = \frac12$.
> - $\cos\frac{5\pi}{4} = \cos\left(\pi + \frac{\pi}{4}\right) = -\cos\frac{\pi}{4} = -\frac{\sqrt2}{2}$.
> - $\tan\frac{2\pi}{3} = \tan\left(\pi - \frac{\pi}{3}\right) = -\tan\frac{\pi}{3} = -\sqrt3$.
> - $\cos\frac{7\pi}{4} = \cos\left(2\pi - \frac{\pi}{4}\right) = \cos\frac{\pi}{4} = \frac{\sqrt2}{2}$.
> - $\sin\left(-\frac{\pi}{3}\right) = -\sin\frac{\pi}{3} = -\frac{\sqrt3}{2}$.
> - $\sin\frac{19\pi}{6}$: tolgo un giro, $\frac{19\pi}{6} - 2\pi = \frac{7\pi}{6} = \pi + \frac{\pi}{6}$, quindi $\sin\frac{19\pi}{6} = -\sin\frac{\pi}{6} = -\frac12$.
> - In gradi: $\cos 300^\circ = \cos(360^\circ - 60^\circ) = \cos 60^\circ = \frac12$.

> [!TRAPPOLA] Il segno viene dall'angolo di partenza
> In $\cos\frac{5\pi}{4}$ l'angolo di riferimento $\frac{\pi}{4}$ è nel I quadrante, dove il coseno è positivo, ma $\frac{5\pi}{4}$ è nel III quadrante: il risultato è negativo, $-\frac{\sqrt2}{2}$.

### Formule di addizione, sottrazione, duplicazione e bisezione

> [!PROP] Formule trigonometriche
> **Addizione e sottrazione**
> $$
> \sin(\alpha \pm \beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta
> $$
> $$
> \cos(\alpha \pm \beta) = \cos\alpha\cos\beta \mp \sin\alpha\sin\beta
> $$
> Nel coseno il segno si inverte: il simbolo $\mp$ vuol dire «meno quando a sinistra c'è più, più quando a sinistra c'è meno».
>
> **Duplicazione**
> $$
> \sin 2\alpha = 2\sin\alpha\cos\alpha \qquad \cos 2\alpha = \cos^2\alpha - \sin^2\alpha = 1 - 2\sin^2\alpha = 2\cos^2\alpha - 1
> $$
>
> **Bisezione**
> $$
> \sin^2\frac{\alpha}{2} = \frac{1 - \cos\alpha}{2} \qquad \cos^2\frac{\alpha}{2} = \frac{1 + \cos\alpha}{2}
> $$
> Il segno di $\sin\frac{\alpha}{2}$ e di $\cos\frac{\alpha}{2}$ dipende dal quadrante in cui cade $\frac{\alpha}{2}$.

Le formule di duplicazione sono quelle di addizione con $\beta = \alpha$; le altre due forme di $\cos 2\alpha$ si ottengono dalla relazione fondamentale. Le formule di bisezione si ricavano da $\cos 2\beta = 1 - 2\sin^2\beta$ e da $\cos 2\beta = 2\cos^2\beta - 1$ ponendo $\beta = \frac{\alpha}{2}$.

> [!ESEMPIO] Addizione e sottrazione
> $\sin 15^\circ = \sin(45^\circ - 30^\circ) = \sin 45^\circ\cos 30^\circ - \cos 45^\circ\sin 30^\circ$:
> $$
> \sin 15^\circ = \frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2} - \frac{\sqrt2}{2}\cdot\frac12 = \frac{\sqrt6 - \sqrt2}{4}
> $$
> $\cos 105^\circ = \cos(60^\circ + 45^\circ) = \cos 60^\circ\cos 45^\circ - \sin 60^\circ\sin 45^\circ$:
> $$
> \cos 105^\circ = \frac12\cdot\frac{\sqrt2}{2} - \frac{\sqrt3}{2}\cdot\frac{\sqrt2}{2} = \frac{\sqrt2 - \sqrt6}{4}
> $$
> Il risultato è negativo, come deve essere: $105^\circ$ è nel II quadrante.
>
> Per la tangente basta il rapporto tra seno e coseno. Con lo stesso calcolo, ma con il più, $\cos 15^\circ = \cos(45^\circ - 30^\circ) = \frac{\sqrt6 + \sqrt2}{4}$. Quindi:
> $$
> \tan 15^\circ = \frac{\sqrt6 - \sqrt2}{\sqrt6 + \sqrt2} = \frac{\left(\sqrt6 - \sqrt2\right)^2}{6 - 2} = \frac{8 - 4\sqrt3}{4} = 2 - \sqrt3
> $$
> Nel secondo passaggio si moltiplicano numeratore e denominatore per $\sqrt6 - \sqrt2$, per togliere le radici dal denominatore.

> [!ESEMPIO] Duplicazione
> $\sin x = \frac13$ con $0 < x < \frac{\pi}{2}$. Prima il coseno: $\cos x = \sqrt{1 - \frac19} = \sqrt{\frac89} = \frac{2\sqrt2}{3}$, positivo nel I quadrante. Poi
> $$
> \sin 2x = 2 \cdot \frac13 \cdot \frac{2\sqrt2}{3} = \frac{4\sqrt2}{9} \qquad \cos 2x = 1 - 2\sin^2 x = 1 - \frac29 = \frac79
> $$

> [!ESEMPIO] Bisezione
> $\sin\frac{\pi}{12}$, con $\frac{\pi}{12} = \frac12 \cdot \frac{\pi}{6}$:
> $$
> \sin^2\frac{\pi}{12} = \frac{1 - \cos\frac{\pi}{6}}{2} = \frac{1 - \frac{\sqrt3}{2}}{2} = \frac{2 - \sqrt3}{4}
> $$
> L'angolo $\frac{\pi}{12}$ è nel I quadrante, quindi $\sin\frac{\pi}{12} = \dfrac{\sqrt{2 - \sqrt3}}{2}$.

> [!NOTA] Lo stesso numero in due forme
> $\frac{\pi}{12}$ è $15^\circ$: il valore appena trovato deve coincidere con $\frac{\sqrt6 - \sqrt2}{4}$. Infatti $\left(\frac{\sqrt6 - \sqrt2}{4}\right)^2 = \frac{6 - 2\sqrt{12} + 2}{16} = \frac{8 - 4\sqrt3}{16} = \frac{2 - \sqrt3}{4}$. Lo stesso valore può comparire tra le opzioni in forme diverse: se hai dubbi, controlla che i due numeri abbiano lo stesso segno e poi confronta i quadrati.

> [!TRAPPOLA] Le formule non sono «lineari»
> - $\sin(\alpha + \beta) \neq \sin\alpha + \sin\beta$: con $\alpha = \beta = \frac{\pi}{2}$ si ha $\sin\pi = 0$, mentre $\sin\frac{\pi}{2} + \sin\frac{\pi}{2} = 2$.
> - $\sin 2x \neq 2\sin x$: per $x = \frac{\pi}{2}$ il primo vale $\sin\pi = 0$, il secondo 2.
> - In $\cos(\alpha + \beta)$ c'è un meno: $\cos\alpha\cos\beta - \sin\alpha\sin\beta$.

### Grafici e caratteristiche

Ora l'angolo $x$ (in radianti) varia su tutti i numeri reali e guardiamo $y = \sin x$, $y = \cos x$, $y = \tan x$ come funzioni, con gli strumenti del modulo 6. La loro caratteristica principale è che sono **periodiche**: ripetono gli stessi valori a intervalli regolari, e per questo descrivono bene i fenomeni che oscillano.

> [!PROP] Caratteristiche delle funzioni trigonometriche
> | Funzione | Dominio | Immagine | Periodo | Simmetria | Zeri |
> |---|---|---|---|---|---|
> | $y = \sin x$ | $\R$ | $[-1, 1]$ | $2\pi$ | dispari | $x = k\pi$ |
> | $y = \cos x$ | $\R$ | $[-1, 1]$ | $2\pi$ | pari | $x = \frac{\pi}{2} + k\pi$ |
> | $y = \tan x$ | $x \neq \frac{\pi}{2} + k\pi$ | $\R$ | $\pi$ | dispari | $x = k\pi$ |
> | $y = \operatorname{cotan} x$ | $x \neq k\pi$ | $\R$ | $\pi$ | dispari | $x = \frac{\pi}{2} + k\pi$ |
>
> Seno e coseno sono continue e **limitate**. Tangente e cotangente non sono limitate: vicino ai punti esclusi dal dominio il grafico ha asintoti verticali. La tangente è crescente in ogni intervallo $\left(-\frac{\pi}{2} + k\pi, \frac{\pi}{2} + k\pi\right)$, la cotangente è decrescente in ogni intervallo $(k\pi, \pi + k\pi)$.

Il periodo del seno è $2\pi$ perché dopo un giro completo si torna nello stesso punto. La tangente ha periodo $\pi$: i punti di $x$ e di $x + \pi$ sono simmetrici rispetto all'origine, seno e coseno cambiano entrambi segno e il loro rapporto resta uguale.

```grafico
titolo: $y = \sin x$ e $y = \cos x$ (in rosso): la stessa onda, spostata di $\frac{\pi}{2}$
x: -2pi 2pi
y: -1.6 1.6
passo-x: pi/2
proporzioni: libere
f: sin(x)
f: cos(x) | rosso
testo: -3pi/2 1.3 | $y = \sin x$ | bianco
testo: pi -1.3 | $y = \cos x$ | bianco
```

```grafico
titolo: $y = \tan x$: periodo $\pi$, asintoti verticali in $x = \frac{\pi}{2} + k\pi$
x: -3pi/2 3pi/2
y: -4 4
passo-x: pi/2
f: tan(x)
verticale: -pi/2 | grigio | tratteggio
verticale: pi/2 | grigio | tratteggio
```

La cotangente ha lo stesso periodo $\pi$, ma i suoi asintoti sono nei punti $x = k\pi$, dove il seno si annulla, e in ogni ramo scende invece di salire.

```grafico
titolo: $y = \operatorname{cotan} x$: periodo $\pi$, asintoti verticali in $x = k\pi$
x: -3pi/2 3pi/2
y: -4 4
passo-x: pi/2
f: cos(x)/sin(x) | rosso
verticale: -pi | grigio | tratteggio
verticale: pi | grigio | tratteggio
```

> [!PROP] Ampiezza e periodo
> Per $y = A\sin(\omega x)$ e $y = A\cos(\omega x)$, con $A$ e $\omega$ («omega») numeri diversi da zero:
> - l'immagine è $[-|A|, |A|]$: il numero $|A|$ si chiama **ampiezza**;
> - il **periodo** è $T = \dfrac{2\pi}{|\omega|}$.
>
> Per $y = \tan(\omega x)$ il periodo è $\dfrac{\pi}{|\omega|}$. Aggiungere una costante, come in $y = d + \sin x$, sposta il grafico in verticale: l'immagine diventa $[d - 1, d + 1]$.

> [!ESEMPIO] Periodi e immagini
> - $y = 3\sin(2x)$: immagine $[-3, 3]$, periodo $\frac{2\pi}{2} = \pi$.
> - $y = \cos(3x)$: immagine $[-1, 1]$, periodo $\frac{2\pi}{3}$.
> - $y = 2 + \cos x$: immagine $[1, 3]$, periodo $2\pi$.
> - $y = \sin\frac{x}{3}$: periodo $\frac{2\pi}{1/3} = 6\pi$.
> - $y = \tan(2x)$: periodo $\frac{\pi}{2}$.

```grafico
titolo: $y = \sin x$ (in grigio) e $y = 3\sin(2x)$ (in rosso): ampiezza 3, periodo $\pi$
x: -pi 2pi
y: -3.5 3.5
passo-x: pi/2
proporzioni: libere
f: sin(x) | grigio
f: 3sin(2x) | rosso
```

> [!NOTA] Onde e oscillazioni
> Le funzioni seno e coseno servono a descrivere tutto ciò che si ripete nel tempo: l'oscillazione di un pendolo o di una molla, le onde sonore, le onde radio, la luce. Un'onda sonora reale è una somma di tanti termini con seni e coseni. Per il suono, all'ampiezza è legata l'intensità, al periodo (o alla frequenza, il numero di oscillazioni al secondo) l'altezza della nota, e al modo in cui si combinano i vari termini il timbro.

> [!TEST] Funzioni trigonometriche nelle domande del test
> - **Valori** (una su quattro o risposta numerica): prima decidi il segno con il quadrante, poi il valore assoluto con l'angolo di riferimento. Gli errori più frequenti sono il segno sbagliato e lo scambio tra $\frac12$ e $\frac{\sqrt3}{2}$: controlla proprio questi due punti prima di scegliere.
> - **Identità vere o false**: prova con angoli comodi ($0$, $\frac{\pi}{2}$, $\frac{\pi}{4}$). Se l'uguaglianza non vale per un angolo, è falsa. Attenzione: se vale per un angolo, non è ancora detto che valga per tutti.
> - **Periodo**: per $\sin(\omega x)$ e $\cos(\omega x)$ è $\frac{2\pi}{|\omega|}$; il coefficiente davanti cambia solo l'ampiezza.
> - **Disegna la circonferenza**: uno schizzo con il punto $P$ risolve la maggior parte dei dubbi sui segni.

## 8.2 Equazioni e disequazioni trigonometriche

### Equazioni elementari

In un'**equazione trigonometrica** l'incognita $x$, che rappresenta un angolo, compare dentro seno, coseno o tangente. Sono equazioni **trascendenti**, come quelle del modulo 7. Per la periodicità, se un'equazione trigonometrica ha una soluzione ne ha infinite: si scrivono tutte insieme usando $k \in \Z$.

> [!PROP] Le tre equazioni elementari
> - $\sin x = c$: se $c < -1$ o $c > 1$ non ci sono soluzioni. Altrimenti, se $\alpha$ è una soluzione, tutte le soluzioni sono
> $$
> x = \alpha + 2k\pi \quad \text{oppure} \quad x = \pi - \alpha + 2k\pi
> $$
> - $\cos x = c$: se $c < -1$ o $c > 1$ non ci sono soluzioni. Altrimenti, se $\alpha$ è una soluzione,
> $$
> x = \pm\alpha + 2k\pi
> $$
> - $\tan x = c$: ci sono soluzioni per ogni numero reale $c$, e se $\alpha$ è una soluzione
> $$
> x = \alpha + k\pi
> $$

Perché: sulla circonferenza i punti con ordinata $c$ sono due, simmetrici rispetto all'asse $y$ (angoli $\alpha$ e $\pi - \alpha$); i punti con ascissa $c$ sono due, simmetrici rispetto all'asse $x$ (angoli $\alpha$ e $-\alpha$); la tangente si ripete dopo mezzo giro.

```grafico
titolo: $\sin x = \frac{\sqrt{3}}{2}$: i punti con ordinata $\frac{\sqrt3}{2}$ sono due
x: -1.6 1.6
y: -1.3 1.3
passo-x: 1
passo-y: 1
cerchio: 0 0 1
orizzontale: sqrt(3)/2 | rosso | tratteggio
segmento: 0 0 cos(pi/3) sin(pi/3) | grigio
segmento: 0 0 cos(2pi/3) sin(2pi/3) | grigio
punto: cos(pi/3) sin(pi/3) | rosso | $\frac{\pi}{3}$ | ne
punto: cos(2pi/3) sin(2pi/3) | rosso | $\frac{2\pi}{3}$ | no
```

> [!PROP] Casi particolari
> | Equazione | Soluzioni |
> |---|---|
> | $\sin x = 0$ | $x = k\pi$ |
> | $\sin x = 1$ | $x = \frac{\pi}{2} + 2k\pi$ |
> | $\sin x = -1$ | $x = \frac{3\pi}{2} + 2k\pi$ |
> | $\cos x = 0$ | $x = \frac{\pi}{2} + k\pi$ |
> | $\cos x = 1$ | $x = 2k\pi$ |
> | $\cos x = -1$ | $x = \pi + 2k\pi$ |
>
> In questi casi le due famiglie di soluzioni coincidono o si fondono in una sola.

> [!ESEMPIO] Equazioni elementari
> - $\sin x = \frac{\sqrt3}{2}$: $\alpha = \frac{\pi}{3}$, e anche $\pi - \frac{\pi}{3} = \frac{2\pi}{3}$. Soluzioni: $x = \frac{\pi}{3} + 2k\pi$ oppure $x = \frac{2\pi}{3} + 2k\pi$.
> - $2\cos x + 1 = 0$: $\cos x = -\frac12$, con $\alpha = \frac{2\pi}{3}$. Soluzioni: $x = \pm\frac{2\pi}{3} + 2k\pi$; nel primo giro sono $\frac{2\pi}{3}$ e $\frac{4\pi}{3}$.
> - $\sin x = -\frac{\sqrt2}{2}$: $\alpha = -\frac{\pi}{4}$, e $\pi - \alpha = \pi + \frac{\pi}{4} = \frac{5\pi}{4}$. Soluzioni: $x = -\frac{\pi}{4} + 2k\pi$ oppure $x = \frac{5\pi}{4} + 2k\pi$; nel primo giro $\frac{5\pi}{4}$ e $\frac{7\pi}{4}$.
> - $\tan x = -\sqrt3$: $\alpha = -\frac{\pi}{3}$, quindi $x = -\frac{\pi}{3} + k\pi$; nel primo giro $\frac{2\pi}{3}$ e $\frac{5\pi}{3}$.
> - $\cos x = 2$: impossibile, il coseno non supera 1.
> - $\sin 2x = \frac12$: l'argomento è $2x$. $2x = \frac{\pi}{6} + 2k\pi$ oppure $2x = \frac{5\pi}{6} + 2k\pi$; dividendo tutto per 2, $x = \frac{\pi}{12} + k\pi$ oppure $x = \frac{5\pi}{12} + k\pi$. Nel primo giro le soluzioni sono quattro: $\frac{\pi}{12}$, $\frac{5\pi}{12}$, $\frac{13\pi}{12}$, $\frac{17\pi}{12}$.
> - $\cos\left(x - \frac{\pi}{4}\right) = 0$: $x - \frac{\pi}{4} = \frac{\pi}{2} + k\pi$, quindi $x = \frac{3\pi}{4} + k\pi$.

> [!TRAPPOLA] Errori nelle equazioni elementari
> - Quando l'argomento è $2x$ bisogna dividere per 2 anche il $2k\pi$, che diventa $k\pi$: chi lo dimentica perde metà delle soluzioni.
> - Per il seno la seconda famiglia è $\pi - \alpha$, per il coseno è $-\alpha$: non scambiarle.
> - Prima di cercare gli angoli controlla che $c$ sia tra $-1$ e $1$.

### Equazioni con la stessa funzione nei due membri

> [!PROP] Quando due angoli hanno lo stesso seno, coseno o tangente
> Se $A$ e $B$ sono espressioni che contengono $x$:
> - $\sin A = \sin B \iff A = B + 2k\pi$ oppure $A = \pi - B + 2k\pi$;
> - $\cos A = \cos B \iff A = B + 2k\pi$ oppure $A = -B + 2k\pi$;
> - $\tan A = \tan B \iff A = B + k\pi$, purché $\tan A$ e $\tan B$ esistano.
>
> Il simbolo $\iff$ si legge «se e solo se».

> [!ESEMPIO] Stesso seno, stesso coseno
> $\sin 3x = \sin x$:
> - $3x = x + 2k\pi$ dà $2x = 2k\pi$, cioè $x = k\pi$;
> - $3x = \pi - x + 2k\pi$ dà $4x = \pi + 2k\pi$, cioè $x = \frac{\pi}{4} + \frac{k\pi}{2}$.
>
> $\cos 3x = \cos x$:
> - $3x = x + 2k\pi$ dà $x = k\pi$;
> - $3x = -x + 2k\pi$ dà $x = \frac{k\pi}{2}$.
>
> La prima famiglia è contenuta nella seconda (basta prendere $k$ pari), quindi le soluzioni sono $x = \frac{k\pi}{2}$.

> [!ESEMPIO] Seno uguale a coseno
> $\sin 2x = \cos x$. Uso $\cos x = \sin\left(\frac{\pi}{2} - x\right)$:
> - $2x = \frac{\pi}{2} - x + 2k\pi$ dà $x = \frac{\pi}{6} + \frac{2k\pi}{3}$;
> - $2x = \pi - \left(\frac{\pi}{2} - x\right) + 2k\pi$ dà $x = \frac{\pi}{2} + 2k\pi$.
>
> Nel primo giro: $\frac{\pi}{6}$, $\frac{5\pi}{6}$, $\frac{3\pi}{2}$ dalla prima famiglia e $\frac{\pi}{2}$ dalla seconda.

> [!NOTA] Le stesse soluzioni scritte in modi diversi
> L'equazione $\sin 2x = \cos x$ si può risolvere anche con la duplicazione: $2\sin x\cos x - \cos x = 0$, cioè $\cos x(2\sin x - 1) = 0$. Si trova $x = \frac{\pi}{2} + k\pi$ oppure $x = \frac{\pi}{6} + 2k\pi$ oppure $x = \frac{5\pi}{6} + 2k\pi$. Sembra un risultato diverso, ma nel primo giro dà gli stessi quattro angoli. Per confrontare due scritture (per esempio due opzioni di una domanda) elenca le soluzioni comprese tra $0$ e $2\pi$.

> [!ESEMPIO] Un'equazione omogenea
> $\sqrt3\sin x = \cos x$. Se fosse $\cos x = 0$ si avrebbe $\sin x = \pm 1$ e l'equazione darebbe $\pm\sqrt3 = 0$, falso: quindi posso dividere per $\cos x$. Ottengo $\sqrt3\tan x = 1$, cioè $\tan x = \frac{1}{\sqrt3} = \frac{\sqrt3}{3}$, e quindi $x = \frac{\pi}{6} + k\pi$.

### Equazioni riconducibili a quelle elementari

> [!METODO] Ricondursi alle equazioni elementari
> 1. Porta tutto a una sola funzione, usando la relazione fondamentale e le formule.
> 2. Raccogli a fattor comune, oppure poni $t = \sin x$ (o $t = \cos x$, $t = \tan x$) e risolvi l'equazione algebrica in $t$.
> 3. Scarta i valori di $t$ impossibili: per seno e coseno quelli minori di $-1$ o maggiori di $1$.
> 4. Risolvi le equazioni elementari che restano.

> [!ESEMPIO] Raccoglimento
> $\sin 2x = \sin x$. Con la duplicazione: $2\sin x\cos x - \sin x = 0$, cioè $\sin x(2\cos x - 1) = 0$. Un prodotto è zero quando lo è uno dei fattori:
> - $\sin x = 0$ dà $x = k\pi$;
> - $\cos x = \frac12$ dà $x = \pm\frac{\pi}{3} + 2k\pi$.

> [!TRAPPOLA] Non dividere per un fattore che può annullarsi
> Nell'esempio precedente, chi divide per $\sin x$ ottiene solo $2\cos x = 1$ e perde tutte le soluzioni $x = k\pi$. Si raccoglie, non si divide.

> [!ESEMPIO] Equazione di secondo grado nel seno
> $2\sin^2 x - \sin x - 1 = 0$. Con $t = \sin x$: $2t^2 - t - 1 = 0$, quindi $t = \frac{1 \pm 3}{4}$, cioè $t = 1$ oppure $t = -\frac12$.
> - $\sin x = 1$ dà $x = \frac{\pi}{2} + 2k\pi$;
> - $\sin x = -\frac12$ dà $x = \frac{7\pi}{6} + 2k\pi$ oppure $x = \frac{11\pi}{6} + 2k\pi$.

> [!ESEMPIO] Con la relazione fondamentale
> $2\cos^2 x - 3\sin x = 0$. Sostituisco $\cos^2 x = 1 - \sin^2 x$: $2 - 2\sin^2 x - 3\sin x = 0$, cioè $2\sin^2 x + 3\sin x - 2 = 0$. Con $t = \sin x$: $t = \frac{-3 \pm 5}{4}$, quindi $t = \frac12$ oppure $t = -2$. Il valore $-2$ è impossibile per un seno. Resta $\sin x = \frac12$: $x = \frac{\pi}{6} + 2k\pi$ oppure $x = \frac{5\pi}{6} + 2k\pi$.

> [!ESEMPIO] Con le formule di addizione
> $\cos\left(x - \frac{\pi}{3}\right) + \cos\left(x + \frac{\pi}{3}\right) = \frac12$. Sviluppo i due coseni:
> $$
> \cos x\cos\frac{\pi}{3} + \sin x\sin\frac{\pi}{3} + \cos x\cos\frac{\pi}{3} - \sin x\sin\frac{\pi}{3} = 2\cos x \cdot \frac12 = \cos x
> $$
> L'equazione diventa $\cos x = \frac12$, quindi $x = \pm\frac{\pi}{3} + 2k\pi$.

> [!ESEMPIO] Con la tangente al quadrato
> $\tan^2 x = 3$ dà $\tan x = \sqrt3$ oppure $\tan x = -\sqrt3$, quindi $x = \pm\frac{\pi}{3} + k\pi$.

### Equazioni lineari in seno e coseno

Sono le equazioni della forma $a\sin x + b\cos x + c = 0$, con $a$, $b$, $c$ numeri.

- Se $c = 0$ l'equazione è **omogenea**: con $a \neq 0$, i valori con $\cos x = 0$ non sono soluzioni (lì $\sin x = \pm 1$), quindi si può dividere per $\cos x$ e si ottiene $\tan x = -\frac{b}{a}$, come nell'esempio $\sqrt3\sin x = \cos x$ visto sopra.
- In generale si pone $X = \cos x$ e $Y = \sin x$ e si mette a sistema l'equazione con la relazione fondamentale:

$$
\begin{cases} aY + bX + c = 0 \\ X^2 + Y^2 = 1 \end{cases}
$$

È l'intersezione tra una retta e la circonferenza goniometrica, come nel modulo 5: nel disegno l'ascissa di un punto è $X = \cos x$ e la sua ordinata è $Y = \sin x$. Ogni punto di intersezione dà un angolo.

- In alternativa si usano le **formule parametriche**: posto $t = \tan\frac{x}{2}$,

$$
\sin x = \frac{2t}{1 + t^2} \qquad \cos x = \frac{1 - t^2}{1 + t^2}
$$

Valgono solo se $\tan\frac{x}{2}$ esiste, cioè per $x \neq \pi + 2k\pi$: per questo, prima di sostituire, bisogna controllare a parte se $x = \pi$ è una soluzione.

> [!ESEMPIO] Metodo del sistema
> $\sqrt3\sin x + \cos x = 1$. Con $X = \cos x$ e $Y = \sin x$:
> $$
> \begin{cases} \sqrt{3}\,Y + X = 1 \\ X^2 + Y^2 = 1 \end{cases}
> $$
> Dalla prima $X = 1 - \sqrt3\,Y$. Sostituisco nella seconda: $(1 - \sqrt3\,Y)^2 + Y^2 = 1$, cioè $1 - 2\sqrt3\,Y + 3Y^2 + Y^2 = 1$, quindi $4Y^2 - 2\sqrt3\,Y = 0$ e $2Y(2Y - \sqrt3) = 0$.
> - $Y = 0$ dà $X = 1$: il punto $A = (1, 0)$, cioè $x = 2k\pi$.
> - $Y = \frac{\sqrt3}{2}$ dà $X = 1 - \frac32 = -\frac12$: il punto $Q = \left(-\frac12, \frac{\sqrt3}{2}\right)$, cioè $x = \frac{2\pi}{3} + 2k\pi$.
>
> Controllo con $x = \frac{2\pi}{3}$: $\sqrt3 \cdot \frac{\sqrt3}{2} - \frac12 = \frac32 - \frac12 = 1$.
>
> ```grafico
> titolo: La retta $X + \sqrt{3}\,Y = 1$ taglia la circonferenza nei punti $A$ (angolo $0$) e $Q$ (angolo $\frac{2\pi}{3}$)
> x: -1.6 1.8
> y: -1.3 1.4
> passo-x: 1
> passo-y: 1
> cerchio: 0 0 1
> f: (1-x)/sqrt(3) | rosso
> punto: 1 0 | $A$ | ne
> punto: -1/2 sqrt(3)/2 | $Q$ | n
> ```

> [!ESEMPIO] Formule parametriche
> $\sin x + \cos x + 1 = 0$.
>
> **Primo passo.** Controllo $x = \pi$: $\sin\pi + \cos\pi + 1 = 0 - 1 + 1 = 0$. È una soluzione: $x = \pi + 2k\pi$.
>
> **Secondo passo.** Per $x \neq \pi + 2k\pi$ pongo $t = \tan\frac{x}{2}$:
> $$
> \frac{2t}{1 + t^2} + \frac{1 - t^2}{1 + t^2} + 1 = 0
> $$
> Moltiplico per $1 + t^2$, che non è mai zero: $2t + 1 - t^2 + 1 + t^2 = 0$, cioè $2t + 2 = 0$ e $t = -1$.
>
> **Terzo passo.** $\tan\frac{x}{2} = -1$ dà $\frac{x}{2} = -\frac{\pi}{4} + k\pi$, cioè $x = -\frac{\pi}{2} + 2k\pi$.
>
> Soluzioni: $x = \pi + 2k\pi$ oppure $x = -\frac{\pi}{2} + 2k\pi$ (cioè $\frac{3\pi}{2} + 2k\pi$). Senza il controllo del primo passo avremmo perso $x = \pi$. Con il metodo del sistema si ritrovano gli stessi punti: la retta $X + Y = -1$ taglia la circonferenza in $(-1, 0)$ e $(0, -1)$.

### Disequazioni elementari

> [!METODO] Disequazioni con la circonferenza
> 1. Risolvi l'equazione associata nel primo giro (per esempio $\sin x = c$).
> 2. Sulla circonferenza individua i punti buoni: per $\sin x > c$ quelli **sopra** la retta orizzontale di ordinata $c$, per $\sin x < c$ quelli sotto; per $\cos x > c$ quelli **a destra** della retta verticale di ascissa $c$, per $\cos x < c$ quelli a sinistra; per la tangente usa la retta tangente in $A$ oppure il grafico di $y = \tan x$.
> 3. Leggi gli archi in senso antiorario, da $0$ a $2\pi$, e scrivi gli intervalli. Gli angoli trovati al punto 1 sono inclusi solo con $\geq$ o $\leq$. Gli estremi $0$ e $2\pi$ sono inclusi quando lì la disequazione è vera, anche con $>$ o $<$: per esempio $\cos x > \frac12$ vale in $x = 0$, quindi si scrive $0 \leq x < \frac{\pi}{3}$. I punti in cui la funzione non esiste non sono mai inclusi.
> 4. Se la disequazione è chiesta su tutto $\R$, aggiungi $2k\pi$ agli estremi ($k\pi$ per la tangente).

> [!PROP] Casi limite
> - $\sin x > c$ con $c < -1$: vera per ogni $x$. Con $c \geq 1$: nessuna soluzione.
> - $\sin x \geq 1$: il seno non supera mai 1, quindi è vera solo quando $\sin x = 1$, cioè per $x = \frac{\pi}{2} + 2k\pi$.
> - $\sin x > -1$: vera per ogni $x$ tranne $x = \frac{3\pi}{2} + 2k\pi$.
> - $\cos x < 1$: vera per ogni $x$ tranne $x = 2k\pi$. $\cos x \leq 1$: vera per ogni $x$.
> - $\sin x < 2$: vera per ogni $x$. $\cos x > \frac32$: nessuna soluzione.

> [!ESEMPIO] Seno maggiore di un numero
> $\sin x > \frac12$ in $[0, 2\pi]$. L'equazione $\sin x = \frac12$ ha soluzioni $\frac{\pi}{6}$ e $\frac{5\pi}{6}$. I punti sopra la retta $y = \frac12$ formano l'arco tra questi due angoli:
> $$
> \frac{\pi}{6} < x < \frac{5\pi}{6}
> $$
> Su tutto $\R$: $\frac{\pi}{6} + 2k\pi < x < \frac{5\pi}{6} + 2k\pi$.
>
> ```grafico
> titolo: $\sin x > \frac{1}{2}$: l'arco sopra la retta $y = \frac{1}{2}$
> x: -1.6 1.6
> y: -1.3 1.3
> passo-x: 1
> passo-y: 1
> cerchio: 0 0 1 | grigio
> arco: 0 0 1 pi/6 5pi/6 | rosso | spesso
> orizzontale: 0.5 | tratteggio
> punto: cos(pi/6) 0.5 | vuoto | $\frac{\pi}{6}$ | ne
> punto: -cos(pi/6) 0.5 | vuoto | $\frac{5\pi}{6}$ | no
> ```
>
> ```retta
> titolo: $\sin x > \frac{1}{2}$ in $[0, 2\pi]$
> da: 0 2pi
> int: (pi/6, 5pi/6)
> tacca: 0 | $0$
> tacca: pi/6 | $\frac{\pi}{6}$
> tacca: 5pi/6 | $\frac{5\pi}{6}$
> tacca: 2pi | $2\pi$
> ```

> [!ESEMPIO] Un arco che passa per lo zero
> $\cos x \geq -\frac{\sqrt2}{2}$ in $[0, 2\pi]$. L'equazione $\cos x = -\frac{\sqrt2}{2}$ ha soluzioni $\frac{3\pi}{4}$ e $\frac{5\pi}{4}$. I punti a destra della retta verticale di ascissa $-\frac{\sqrt2}{2}$ formano un arco che passa per l'angolo 0: in $[0, 2\pi]$ si spezza in due pezzi.
> $$
> 0 \leq x \leq \frac{3\pi}{4} \quad \text{oppure} \quad \frac{5\pi}{4} \leq x \leq 2\pi
> $$
> Su tutto $\R$ è un solo intervallo che si ripete: $-\frac{3\pi}{4} + 2k\pi \leq x \leq \frac{3\pi}{4} + 2k\pi$.
>
> ```retta
> titolo: $\cos x \geq -\frac{\sqrt{2}}{2}$ in $[0, 2\pi]$
> da: 0 2pi
> int: [0, 3pi/4]
> int: [5pi/4, 2pi]
> tacca: 3pi/4 | $\frac{3\pi}{4}$
> tacca: 5pi/4 | $\frac{5\pi}{4}$
> tacca: 2pi | $2\pi$
> ```

> [!ESEMPIO] Tangente
> $\tan x > 1$ in $[0, 2\pi]$. L'equazione $\tan x = 1$ ha soluzioni $\frac{\pi}{4}$ e $\frac{5\pi}{4}$. In ogni ramo la tangente cresce fino all'asintoto, che non è mai incluso:
> $$
> \frac{\pi}{4} < x < \frac{\pi}{2} \quad \text{oppure} \quad \frac{5\pi}{4} < x < \frac{3\pi}{2}
> $$
> Su tutto $\R$: $\frac{\pi}{4} + k\pi < x < \frac{\pi}{2} + k\pi$.
>
> ```retta
> titolo: $\tan x > 1$ in $[0, 2\pi]$
> da: 0 2pi
> int: (pi/4, pi/2)
> int: (5pi/4, 3pi/2)
> tacca: 0 | $0$
> tacca: pi/4 | $\frac{\pi}{4}$
> tacca: pi/2 | $\frac{\pi}{2}$
> tacca: 5pi/4 | $\frac{5\pi}{4}$
> tacca: 3pi/2 | $\frac{3\pi}{2}$
> tacca: 2pi | $2\pi$
> ```

> [!ESEMPIO] Seno minore o uguale
> $\sin x \leq -\frac{\sqrt3}{2}$ in $[0, 2\pi]$: l'equazione associata ha soluzioni $\frac{4\pi}{3}$ e $\frac{5\pi}{3}$; i punti sotto la retta $y = -\frac{\sqrt3}{2}$, estremi compresi, danno $\frac{4\pi}{3} \leq x \leq \frac{5\pi}{3}$.

### Disequazioni riconducibili

> [!ESEMPIO] Argomento doppio
> $\sin 2x > 0$ in $[0, 2\pi]$. Pongo $u = 2x$: quando $x$ va da $0$ a $2\pi$, $u$ va da $0$ a $4\pi$ (due giri). Il seno è positivo per $0 < u < \pi$ e per $2\pi < u < 3\pi$. Dividendo per 2:
> $$
> 0 < x < \frac{\pi}{2} \quad \text{oppure} \quad \pi < x < \frac{3\pi}{2}
> $$
>
> ```retta
> titolo: $\sin 2x > 0$ in $[0, 2\pi]$
> da: 0 2pi
> int: (0, pi/2)
> int: (pi, 3pi/2)
> tacca: pi/2 | $\frac{\pi}{2}$
> tacca: pi | $\pi$
> tacca: 3pi/2 | $\frac{3\pi}{2}$
> tacca: 2pi | $2\pi$
> ```

> [!ESEMPIO] Secondo grado nel coseno, con punti isolati
> $2\cos^2 x - \cos x - 1 \geq 0$ in $[0, 2\pi]$. Con $t = \cos x$: $2t^2 - t - 1 \geq 0$, cioè $(2t + 1)(t - 1) \geq 0$, vera per $t \leq -\frac12$ oppure $t \geq 1$.
> - $\cos x \leq -\frac12$ dà $\frac{2\pi}{3} \leq x \leq \frac{4\pi}{3}$.
> - $\cos x \geq 1$ vale solo quando $\cos x = 1$, cioè per $x = 0$ e $x = 2\pi$.
>
> Soluzioni: $x = 0$, $\frac{2\pi}{3} \leq x \leq \frac{4\pi}{3}$, $x = 2\pi$. I due punti isolati si perdono facilmente.
>
> ```retta
> titolo: $2\cos^2 x - \cos x - 1 \geq 0$ in $[0, 2\pi]$: un intervallo e due punti isolati
> da: 0 2pi
> punto: 0 | $0$
> int: [2pi/3, 4pi/3]
> punto: 2pi | $2\pi$
> tacca: 2pi/3 | $\frac{2\pi}{3}$
> tacca: 4pi/3 | $\frac{4\pi}{3}$
> ```

### Trigonometria e triangoli

La trigonometria serve a **risolvere i triangoli**: trovare i lati e gli angoli che non si conoscono partendo da quelli noti. In un triangolo $ABC$ chiamiamo $a$, $b$, $c$ i lati opposti ai vertici $A$, $B$, $C$, e $\alpha$, $\beta$, $\gamma$ gli angoli in $A$, $B$, $C$. Così il lato $a$ sta di fronte all'angolo $\alpha$.

```grafico
titolo: Triangolo rettangolo in $C$, con $a = 3$, $b = 4$ e ipotenusa $c = 5$
x: -1 5
y: -0.8 3.8
assi: no
griglia: no
poligono: 0 0 4 0 0 3
poligono: 0 0 0.3 0 0.3 0.3 0 0.3 | grigio | sottile
punto: 0 0 | $C$ | so
punto: 4 0 | $A$ | se
punto: 0 3 | $B$ | no
testo: -0.3 1.5 | $a$ | bianco
testo: 2 -0.35 | $b$ | bianco
testo: 2.2 1.75 | $c$ | bianco
testo: 3.3 0.25 | $\alpha$ | bianco
testo: 0.25 2.4 | $\beta$ | bianco
```

> [!PROP] Triangolo rettangolo (angolo retto in $C$, ipotenusa $c$)
> - $a = c\sin\alpha = c\cos\beta$ e $b = c\sin\beta = c\cos\alpha$: un cateto è l'ipotenusa per il seno dell'angolo opposto, oppure per il coseno dell'angolo acuto adiacente.
> - $a = b\tan\alpha = b\operatorname{cotan}\beta$ e $b = a\tan\beta = a\operatorname{cotan}\alpha$: un cateto è l'altro cateto per la tangente dell'angolo opposto al primo, oppure per la cotangente dell'angolo adiacente al primo.
> - $\alpha + \beta = 90^\circ$.
>
> In parole: $\sin\alpha = \dfrac{\text{cateto opposto}}{\text{ipotenusa}}$, $\cos\alpha = \dfrac{\text{cateto adiacente}}{\text{ipotenusa}}$, $\tan\alpha = \dfrac{\text{cateto opposto}}{\text{cateto adiacente}}$.

> [!ESEMPIO] Risolvere un triangolo rettangolo
> - Ipotenusa $c = 10$ e $\alpha = 30^\circ$: $a = 10\sin 30^\circ = 5$, $b = 10\cos 30^\circ = 5\sqrt3$, $\beta = 60^\circ$.
> - Cateto $b = 6$ e $\alpha = 60^\circ$: $a = b\tan\alpha = 6\sqrt3$ e $c = \dfrac{b}{\cos\alpha} = \dfrac{6}{1/2} = 12$. Controllo con Pitagora: $(6\sqrt3)^2 + 6^2 = 108 + 36 = 144 = 12^2$.
> - Cateti $a = 1$ e $b = \sqrt3$: $\tan\alpha = \frac{a}{b} = \frac{1}{\sqrt3}$, quindi $\alpha = 30^\circ$, $\beta = 60^\circ$ e l'ipotenusa è $\sqrt{1 + 3} = 2$.

> [!PROP] Triangolo qualsiasi
> **Teorema del coseno** (detto anche teorema di Carnot): il quadrato di un lato è la somma dei quadrati degli altri due, meno il doppio del loro prodotto per il coseno dell'angolo che formano.
> $$
> a^2 = b^2 + c^2 - 2bc\cos\alpha \qquad b^2 = a^2 + c^2 - 2ac\cos\beta \qquad c^2 = a^2 + b^2 - 2ab\cos\gamma
> $$
> Con un angolo retto il coseno vale 0 e si ritrova il teorema di Pitagora.
>
> **Teorema dei seni**: i lati sono proporzionali ai seni degli angoli opposti.
> $$
> \frac{a}{\sin\alpha} = \frac{b}{\sin\beta} = \frac{c}{\sin\gamma}
> $$
> Il teorema del coseno serve quando conosci due lati e l'angolo tra loro (per trovare il terzo lato) oppure tre lati (per trovare un angolo). Il teorema dei seni serve quando conosci due angoli e un lato. Ricorda anche che $\alpha + \beta + \gamma = 180^\circ$.

> [!ESEMPIO] Teorema del coseno
> - Lati $b = 3$ e $c = 5$, angolo compreso $\alpha = 120^\circ$: $a^2 = 9 + 25 - 2 \cdot 3 \cdot 5 \cdot \cos 120^\circ = 34 - 30 \cdot \left(-\frac12\right) = 34 + 15 = 49$, quindi $a = 7$.
> - Lati 5, 7 e 8: l'angolo $\theta$ opposto al lato 7 ha $\cos\theta = \dfrac{5^2 + 8^2 - 7^2}{2 \cdot 5 \cdot 8} = \dfrac{40}{80} = \dfrac12$, quindi $\theta = 60^\circ$.

> [!ESEMPIO] Teorema dei seni
> $a = 6$, $\alpha = 45^\circ$, $\beta = 30^\circ$. Allora $b = \dfrac{a\sin\beta}{\sin\alpha} = \dfrac{6 \cdot \frac12}{\frac{\sqrt2}{2}} = \dfrac{6}{\sqrt2} = 3\sqrt2$, e il terzo angolo è $\gamma = 180^\circ - 45^\circ - 30^\circ = 105^\circ$.

> [!TEST] Equazioni, disequazioni e triangoli nelle domande del test
> - **Soluzioni scritte come famiglie**: per confrontare le opzioni elenca le soluzioni tra $0$ e $2\pi$, oppure sostituisci un valore dell'opzione nell'equazione.
> - **Quante soluzioni in un intervallo** (risposta numerica): scrivi le famiglie, prova i valori interi di $k$ ($0, 1, 2, \ldots$ e, se serve, anche quelli negativi) e conta solo i valori di $x$ che cadono nell'intervallo. Per esempio $x = -\frac{\pi}{3} + k\pi$ in $[0, 2\pi)$ dà $\frac{2\pi}{3}$ e $\frac{5\pi}{3}$, con $k = 1$ e $k = 2$.
> - **Vero o falso sull'esistenza delle soluzioni**: $\sin x = c$ e $\cos x = c$ hanno soluzioni solo se $-1 \leq c \leq 1$. Attenzione ai numeri travestiti: $\frac{\pi}{3} \approx 1{,}05$ è maggiore di 1.
> - **Disequazioni**: prova un angolo comodo ($0$, $\frac{\pi}{2}$, $\pi$) per scartare le opzioni; controlla gli estremi, e ricorda che con la tangente $\frac{\pi}{2}$ e $\frac{3\pi}{2}$ non sono mai inclusi.
> - **Triangoli**: con angoli di $30^\circ$, $45^\circ$, $60^\circ$, $120^\circ$ i conti vengono puliti. Fai sempre uno schizzo per vedere quale lato sta di fronte a quale angolo.

## Esercizi

::: esercizio base Gradi e radianti
Converti $210^\circ$ e $36^\circ$ in radianti; converti $\frac{3\pi}{4}$ e $\frac{11\pi}{6}$ in gradi. Infine converti $\frac{5\pi}{2}$ in gradi e di' a quale punto della circonferenza goniometrica corrisponde.
::: soluzione
- $210^\circ = 210 \cdot \frac{\pi}{180} = \frac{7\pi}{6}$.
- $36^\circ = 36 \cdot \frac{\pi}{180} = \frac{\pi}{5}$.
- $\frac{3\pi}{4} = 3 \cdot \frac{180^\circ}{4} = 135^\circ$.
- $\frac{11\pi}{6} = 11 \cdot \frac{180^\circ}{6} = 330^\circ$.
- $\frac{5\pi}{2} = 5 \cdot 90^\circ = 450^\circ = 360^\circ + 90^\circ$: stesso punto di $90^\circ$, cioè $(0, 1)$.
:::

::: esercizio base Valori con gli archi associati
Calcola $\sin\frac{2\pi}{3}$, $\;\cos\frac{7\pi}{6}$, $\;\tan\frac{5\pi}{4}$, $\;\sin\left(-\frac{5\pi}{6}\right)$, $\;\cos\frac{5\pi}{3}$, $\;\sin\frac{3\pi}{2}$.
::: soluzione
- $\frac{2\pi}{3} = \pi - \frac{\pi}{3}$ (II quadrante, seno positivo): $\sin\frac{2\pi}{3} = \sin\frac{\pi}{3} = \frac{\sqrt3}{2}$.
- $\frac{7\pi}{6} = \pi + \frac{\pi}{6}$ (III quadrante, coseno negativo): $\cos\frac{7\pi}{6} = -\cos\frac{\pi}{6} = -\frac{\sqrt3}{2}$.
- $\frac{5\pi}{4} = \pi + \frac{\pi}{4}$ (III quadrante, tangente positiva): $\tan\frac{5\pi}{4} = \tan\frac{\pi}{4} = 1$.
- Il seno è dispari: $\sin\left(-\frac{5\pi}{6}\right) = -\sin\frac{5\pi}{6} = -\sin\frac{\pi}{6} = -\frac12$.
- $\frac{5\pi}{3} = 2\pi - \frac{\pi}{3}$ (IV quadrante, coseno positivo): $\cos\frac{5\pi}{3} = \cos\frac{\pi}{3} = \frac12$.
- $\frac{3\pi}{2}$ corrisponde al punto $(0, -1)$: $\sin\frac{3\pi}{2} = -1$.
:::

::: esercizio base Dal coseno alle altre funzioni
Sai che $\cos x = -\frac{7}{25}$ e che $\pi < x < \frac{3\pi}{2}$. Calcola $\sin x$, $\tan x$ e $\operatorname{cotan} x$.
::: soluzione
Relazione fondamentale: $\sin^2 x = 1 - \frac{49}{625} = \frac{576}{625}$, quindi $\sin x = \pm\frac{24}{25}$. Nel III quadrante il seno è negativo: $\sin x = -\frac{24}{25}$.

Poi $\tan x = \dfrac{-24/25}{-7/25} = \dfrac{24}{7}$ (positiva, come deve essere nel III quadrante) e $\operatorname{cotan} x = \dfrac{7}{24}$.
:::

::: esercizio base Equazioni elementari
Risolvi: $2\sin x = \sqrt2$, $\;\cos x = 0$, $\;\tan x = \sqrt3$, $\;\sin x = \frac54$.
::: soluzione
- $\sin x = \frac{\sqrt2}{2}$: $x = \frac{\pi}{4} + 2k\pi$ oppure $x = \pi - \frac{\pi}{4} + 2k\pi = \frac{3\pi}{4} + 2k\pi$.
- $\cos x = 0$: $x = \frac{\pi}{2} + k\pi$.
- $\tan x = \sqrt3$: $x = \frac{\pi}{3} + k\pi$.
- $\frac54 > 1$ e il seno non supera 1: nessuna soluzione.
:::

::: esercizio base Periodo e immagine
Trova immagine e periodo di $y = 4\sin x$, $\;y = \cos 4x$, $\;y = 1 - \cos x$, $\;y = \tan\frac{x}{2}$.
::: soluzione
- $y = 4\sin x$: ampiezza 4, immagine $[-4, 4]$; periodo $2\pi$.
- $y = \cos 4x$: immagine $[-1, 1]$; periodo $\frac{2\pi}{4} = \frac{\pi}{2}$.
- $y = 1 - \cos x$: poiché $-1 \leq \cos x \leq 1$, anche $-\cos x$ sta tra $-1$ e $1$, quindi $1 - \cos x$ sta tra $0$ e $2$: immagine $[0, 2]$; periodo $2\pi$.
- $y = \tan\frac{x}{2}$: immagine $\R$; periodo $\frac{\pi}{1/2} = 2\pi$.
:::

::: esercizio medio Formule di addizione
Calcola il valore esatto di $\sin 105^\circ$ e di $\cos 165^\circ$.
::: soluzione
$\sin 105^\circ = \sin(60^\circ + 45^\circ) = \sin 60^\circ\cos 45^\circ + \cos 60^\circ\sin 45^\circ$:

$$
\sin 105^\circ = \frac{\sqrt3}{2}\cdot\frac{\sqrt2}{2} + \frac12\cdot\frac{\sqrt2}{2} = \frac{\sqrt6 + \sqrt2}{4}
$$

$\cos 165^\circ = \cos(120^\circ + 45^\circ) = \cos 120^\circ\cos 45^\circ - \sin 120^\circ\sin 45^\circ$:

$$
\cos 165^\circ = \left(-\frac12\right)\cdot\frac{\sqrt2}{2} - \frac{\sqrt3}{2}\cdot\frac{\sqrt2}{2} = -\frac{\sqrt2 + \sqrt6}{4}
$$

Controllo dei segni: $105^\circ$ e $165^\circ$ sono nel II quadrante, dove il seno è positivo e il coseno negativo.
:::

::: esercizio medio Formule di duplicazione
Sai che $\sin x = \frac23$ e che $\frac{\pi}{2} < x < \pi$. Calcola $\sin 2x$ e $\cos 2x$.
::: soluzione
Prima il coseno: $\cos^2 x = 1 - \frac49 = \frac59$; nel II quadrante il coseno è negativo, quindi $\cos x = -\frac{\sqrt5}{3}$.

$$
\sin 2x = 2\sin x\cos x = 2 \cdot \frac23 \cdot \left(-\frac{\sqrt5}{3}\right) = -\frac{4\sqrt5}{9}
$$

$$
\cos 2x = 1 - 2\sin^2 x = 1 - 2 \cdot \frac49 = \frac19
$$

Controllo: $\left(\frac{4\sqrt5}{9}\right)^2 + \left(\frac19\right)^2 = \frac{80}{81} + \frac{1}{81} = 1$.
:::

::: esercizio medio Verificare due identità
Dimostra che $(\sin x + \cos x)^2 = 1 + \sin 2x$ per ogni $x$, e che $\dfrac{1 - \cos 2x}{\sin 2x} = \tan x$ per ogni $x$ in cui i due membri esistono.
::: soluzione
**Prima.** Sviluppo il quadrato e uso la relazione fondamentale e la duplicazione:

$$
(\sin x + \cos x)^2 = \sin^2 x + 2\sin x\cos x + \cos^2 x = 1 + \sin 2x
$$

**Seconda.** $1 - \cos 2x = 1 - (1 - 2\sin^2 x) = 2\sin^2 x$ e $\sin 2x = 2\sin x\cos x$, quindi

$$
\frac{1 - \cos 2x}{\sin 2x} = \frac{2\sin^2 x}{2\sin x\cos x} = \frac{\sin x}{\cos x} = \tan x
$$

La semplificazione per $\sin x$ è lecita perché dove il primo membro esiste si ha $\sin 2x \neq 0$, quindi $\sin x \neq 0$.
:::

::: esercizio medio Secondo grado nel coseno
Risolvi $2\cos^2 x + 3\cos x + 1 = 0$.
::: soluzione
Con $t = \cos x$: $2t^2 + 3t + 1 = 0$, cioè $(2t + 1)(t + 1) = 0$, quindi $t = -\frac12$ oppure $t = -1$. Tutti e due i valori sono tra $-1$ e $1$.

- $\cos x = -\frac12$ dà $x = \pm\frac{2\pi}{3} + 2k\pi$.
- $\cos x = -1$ dà $x = \pi + 2k\pi$.

Nel primo giro le soluzioni sono $\frac{2\pi}{3}$, $\pi$, $\frac{4\pi}{3}$.
:::

::: esercizio medio Una disequazione elementare
Risolvi $2\sin x + \sqrt3 < 0$ in $[0, 2\pi]$.
::: soluzione
La disequazione equivale a $\sin x < -\frac{\sqrt3}{2}$. L'equazione $\sin x = -\frac{\sqrt3}{2}$ ha soluzioni $\frac{4\pi}{3}$ e $\frac{5\pi}{3}$ (angolo di riferimento $\frac{\pi}{3}$, III e IV quadrante). I punti della circonferenza sotto la retta $y = -\frac{\sqrt3}{2}$ formano l'arco tra i due angoli, estremi esclusi:

$$
\frac{4\pi}{3} < x < \frac{5\pi}{3}
$$

```retta
titolo: $2\sin x + \sqrt{3} < 0$ in $[0, 2\pi]$
da: 0 2pi
int: (4pi/3, 5pi/3)
tacca: 0 | $0$
tacca: 4pi/3 | $\frac{4\pi}{3}$
tacca: 5pi/3 | $\frac{5\pi}{3}$
tacca: 2pi | $2\pi$
```
:::

::: esercizio medio Un triangolo rettangolo
Un triangolo rettangolo ha ipotenusa 8 e un angolo acuto $\alpha = 60^\circ$. Trova i cateti, l'altro angolo acuto e il perimetro.
::: soluzione
- Cateto opposto ad $\alpha$: $a = 8\sin 60^\circ = 8 \cdot \frac{\sqrt3}{2} = 4\sqrt3$.
- Cateto adiacente ad $\alpha$: $b = 8\cos 60^\circ = 8 \cdot \frac12 = 4$.
- L'altro angolo acuto: $\beta = 90^\circ - 60^\circ = 30^\circ$.
- Perimetro: $8 + 4 + 4\sqrt3 = 12 + 4\sqrt3$.

Controllo con Pitagora: $(4\sqrt3)^2 + 4^2 = 48 + 16 = 64 = 8^2$.
:::

::: esercizio test Lineare in seno e coseno
Risolvi $\sin x + \sqrt3\cos x = \sqrt3$. Quante soluzioni ci sono nell'intervallo $[0, 2\pi)$?
::: soluzione
Con $X = \cos x$ e $Y = \sin x$ metto a sistema con la relazione fondamentale:

$$
\begin{cases} Y + \sqrt3\,X = \sqrt3 \\ X^2 + Y^2 = 1 \end{cases}
$$

Dalla prima $Y = \sqrt3(1 - X)$. Sostituisco: $X^2 + 3(1 - X)^2 = 1$, cioè $4X^2 - 6X + 2 = 0$, quindi $2X^2 - 3X + 1 = 0$, con soluzioni $X = 1$ e $X = \frac12$.

- $X = 1$ dà $Y = 0$: il punto $(1, 0)$, cioè $x = 2k\pi$.
- $X = \frac12$ dà $Y = \frac{\sqrt3}{2}$: il punto $\left(\frac12, \frac{\sqrt3}{2}\right)$, cioè $x = \frac{\pi}{3} + 2k\pi$.

In $[0, 2\pi)$ le soluzioni sono $0$ e $\frac{\pi}{3}$: **due**. Controllo con $x = \frac{\pi}{3}$: $\frac{\sqrt3}{2} + \sqrt3 \cdot \frac12 = \sqrt3$.
:::

::: esercizio test Attenzione al dominio
Risolvi $\tan 3x = \tan x$.
::: soluzione
Condizioni di esistenza: $\tan x$ esiste per $x \neq \frac{\pi}{2} + k\pi$, $\tan 3x$ esiste per $3x \neq \frac{\pi}{2} + k\pi$.

Due tangenti sono uguali quando gli angoli differiscono di un multiplo di $\pi$: $3x = x + k\pi$, cioè $x = \frac{k\pi}{2}$.

Ora controllo le condizioni. Se $k$ è dispari, $x = \frac{\pi}{2}, \frac{3\pi}{2}, \ldots$: lì $\tan x$ non esiste, quindi questi valori si scartano. Se $k$ è pari, $x = 0, \pi, 2\pi, \ldots$: entrambe le tangenti esistono e valgono 0.

Soluzioni: $x = k\pi$.
:::

::: esercizio test Disequazione con la tangente
Risolvi $\tan x > -\frac{\sqrt3}{3}$ in $[0, 2\pi]$.
::: soluzione
L'equazione $\tan x = -\frac{\sqrt3}{3}$ ha soluzioni $\frac{5\pi}{6}$ e $\frac{11\pi}{6}$ (angolo di riferimento $\frac{\pi}{6}$, II e IV quadrante). La tangente non esiste in $\frac{\pi}{2}$ e $\frac{3\pi}{2}$ e in ogni ramo è crescente:

- da $0$ a $\frac{\pi}{2}$ la tangente è positiva: va bene;
- da $\frac{\pi}{2}$ a $\frac{5\pi}{6}$ sale da $-\infty$ a $-\frac{\sqrt3}{3}$: non va bene;
- da $\frac{5\pi}{6}$ a $\frac{3\pi}{2}$ sale da $-\frac{\sqrt3}{3}$ a $+\infty$: va bene;
- da $\frac{3\pi}{2}$ a $\frac{11\pi}{6}$ non va bene; da $\frac{11\pi}{6}$ a $2\pi$ va bene.

$$
0 \leq x < \frac{\pi}{2} \quad \text{oppure} \quad \frac{5\pi}{6} < x < \frac{3\pi}{2} \quad \text{oppure} \quad \frac{11\pi}{6} < x \leq 2\pi
$$

```retta
titolo: $\tan x > -\frac{\sqrt{3}}{3}$ in $[0, 2\pi]$
da: 0 2pi
int: [0, pi/2)
int: (5pi/6, 3pi/2)
int: (11pi/6, 2pi]
tacca: pi/2 | $\frac{\pi}{2}$
tacca: 5pi/6 | $\frac{5\pi}{6}$
tacca: 3pi/2 | $\frac{3\pi}{2}$
tacca: 11pi/6 | $\frac{11\pi}{6}$
tacca: 2pi | $2\pi$
```
:::

::: esercizio test Disequazione riconducibile
Risolvi $2\sin^2 x - \sin x < 0$ in $[0, 2\pi]$.
::: soluzione
Raccolgo: $\sin x(2\sin x - 1) < 0$. Con $t = \sin x$, il prodotto $t(2t - 1)$ è negativo tra le radici $0$ e $\frac12$: serve $0 < \sin x < \frac12$.

- $\sin x > 0$ per $0 < x < \pi$.
- $\sin x < \frac12$ per $0 \leq x < \frac{\pi}{6}$ oppure $\frac{5\pi}{6} < x \leq 2\pi$.

Le due condizioni devono valere insieme:

$$
0 < x < \frac{\pi}{6} \quad \text{oppure} \quad \frac{5\pi}{6} < x < \pi
$$

```retta
titolo: $2\sin^2 x - \sin x < 0$ in $[0, 2\pi]$
da: 0 2pi
int: (0, pi/6)
int: (5pi/6, pi)
tacca: pi/6 | $\frac{\pi}{6}$
tacca: 5pi/6 | $\frac{5\pi}{6}$
tacca: pi | $\pi$
tacca: 2pi | $2\pi$
```
:::

::: esercizio test Teorema del coseno
Un triangolo ha lati 3, 5 e 7. Quanto misura il suo angolo più grande?
::: soluzione
L'angolo più grande sta di fronte al lato più lungo, 7. Con il teorema del coseno:

$$
\cos\gamma = \frac{3^2 + 5^2 - 7^2}{2 \cdot 3 \cdot 5} = \frac{9 + 25 - 49}{30} = \frac{-15}{30} = -\frac12
$$

Tra $0^\circ$ e $180^\circ$ l'unico angolo con coseno $-\frac12$ è $120^\circ$, cioè $\frac{2\pi}{3}$: il triangolo è ottusangolo.
:::

::: esercizio test Teorema dei seni
In un triangolo $b = 5\sqrt2$, $\beta = 45^\circ$ e $\gamma = 60^\circ$. Trova l'angolo $\alpha$ e il lato $c$.
::: soluzione
Somma degli angoli: $\alpha = 180^\circ - 45^\circ - 60^\circ = 75^\circ$.

Teorema dei seni: $\dfrac{c}{\sin\gamma} = \dfrac{b}{\sin\beta}$, quindi

$$
c = \frac{b\sin\gamma}{\sin\beta} = \frac{5\sqrt2 \cdot \frac{\sqrt3}{2}}{\frac{\sqrt2}{2}} = 5\sqrt3
$$
:::

## Quiz di verifica

```quiz
D: Quanti gradi misura un angolo di $\dfrac{7\pi}{12}$ radianti?
N: 105
= $\dfrac{7\pi}{12} \cdot \dfrac{180}{\pi} = 7 \cdot 15 = 105$.

D: Quanto vale $\cos\dfrac{2\pi}{3}$?
+ $-\dfrac{1}{2}$
- $\dfrac{1}{2}$
- $-\dfrac{\sqrt{3}}{2}$
- $\dfrac{\sqrt{3}}{2}$
= $\dfrac{2\pi}{3} = \pi - \dfrac{\pi}{3}$ è nel II quadrante, dove il coseno è negativo: $\cos\dfrac{2\pi}{3} = -\cos\dfrac{\pi}{3} = -\dfrac12$. Le opzioni con $\sqrt3$ scambiano il coseno con il seno.

D: Quanto vale $\sin\dfrac{\pi}{6} + \cos\dfrac{\pi}{3} + \tan\dfrac{\pi}{4}$?
N: 2
= $\dfrac12 + \dfrac12 + 1 = 2$.

D: Vero o falso: $\sin(\alpha + \beta) = \sin\alpha + \sin\beta$ per ogni coppia di angoli $\alpha$ e $\beta$.
- Vero
+ Falso
= Basta un controesempio: con $\alpha = \beta = \dfrac{\pi}{2}$ il primo membro vale $\sin\pi = 0$, il secondo $1 + 1 = 2$. La formula giusta è $\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$.

D: Vero o falso: se $\dfrac{\pi}{2} < x < \pi$, allora $\tan x < 0$.
+ Vero
- Falso
= Nel II quadrante il seno è positivo e il coseno è negativo, quindi il loro rapporto è negativo.

D: Sapendo che $\sin x = \dfrac{4}{5}$ e che $\dfrac{\pi}{2} < x < \pi$, quanto vale $\cos x$?
+ $-\dfrac{3}{5}$
- $\dfrac{3}{5}$
- $-\dfrac{1}{5}$
- $\dfrac{9}{25}$
= $\cos^2 x = 1 - \dfrac{16}{25} = \dfrac{9}{25}$, quindi $\cos x = \pm\dfrac35$; nel II quadrante il coseno è negativo, $\cos x = -\dfrac35$. $\frac{9}{25}$ è $\cos^2 x$ (manca la radice); $-\frac15$ viene da $1 - \frac45$, senza i quadrati.

D: Quali espressioni sono uguali a $\sin x$ per ogni $x$?
+ $\sin(\pi - x)$
+ $\cos\left(\dfrac{\pi}{2} - x\right)$
+ $-\sin(-x)$
- $\sin(\pi + x)$
- $\cos(-x)$
= $\sin(\pi - x) = \sin x$ (angoli supplementari), $\cos\left(\frac\pi2 - x\right) = \sin x$ (angoli complementari) e $-\sin(-x) = -(-\sin x) = \sin x$. Invece $\sin(\pi + x) = -\sin x$ e $\cos(-x) = \cos x$.

D: Qual è il periodo della funzione $y = 3\sin(4x)$?
+ $\dfrac{\pi}{2}$
- $8\pi$
- $2\pi$
- $\dfrac{2\pi}{3}$
= Il periodo di $\sin(\omega x)$ è $\dfrac{2\pi}{|\omega|}$: qui $\dfrac{2\pi}{4} = \dfrac{\pi}{2}$. Il coefficiente 3 cambia l'ampiezza (i valori vanno da $-3$ a $3$), non il periodo. $8\pi$ viene dal moltiplicare per 4 invece di dividere.

D: Le soluzioni dell'equazione $2\cos x - \sqrt{3} = 0$ sono
+ $x = \pm\dfrac{\pi}{6} + 2k\pi$, con $k \in \Z$
- $x = \dfrac{\pi}{6} + 2k\pi$ oppure $x = \dfrac{5\pi}{6} + 2k\pi$, con $k \in \Z$
- $x = \pm\dfrac{\pi}{3} + 2k\pi$, con $k \in \Z$
- $x = \dfrac{\pi}{6} + k\pi$, con $k \in \Z$
= $\cos x = \dfrac{\sqrt3}{2}$ vale per $x = \dfrac\pi6$; per il coseno l'altra soluzione è l'angolo opposto, $-\dfrac\pi6$. La risposta con $\frac{5\pi}{6}$ usa la regola del seno ($\pi - \alpha$), quella con $\pm\frac{\pi}{3}$ confonde $\frac{\sqrt3}{2}$ con $\frac12$, quella con $+k\pi$ usa il periodo della tangente.

D: Quante soluzioni ha l'equazione $\sin(3x) = 1$ nell'intervallo $[0, 2\pi)$?
N: 3
= $3x = \dfrac{\pi}{2} + 2k\pi$, quindi $x = \dfrac{\pi}{6} + \dfrac{2k\pi}{3}$. Con $k = 0, 1, 2$ si ottengono $\dfrac{\pi}{6}$, $\dfrac{5\pi}{6}$, $\dfrac{3\pi}{2}$; con $k = 3$ si arriva a $\dfrac{13\pi}{6}$, che supera $2\pi$.

D: Quali valori di $x$ sono soluzioni di $\cos x - \sin x = 1$?
+ $x = 0$
+ $x = \dfrac{3\pi}{2}$
+ $x = -\dfrac{\pi}{2}$
- $x = \dfrac{\pi}{2}$
- $x = \pi$
= Sostituisci: $\cos 0 - \sin 0 = 1$; $\cos\frac{3\pi}{2} - \sin\frac{3\pi}{2} = 0 - (-1) = 1$; $-\frac\pi2$ corrisponde allo stesso punto di $\frac{3\pi}{2}$. Invece in $\frac\pi2$ si ottiene $0 - 1 = -1$ e in $\pi$ si ottiene $-1 - 0 = -1$.

D: L'insieme delle soluzioni di $\cos x > \dfrac{1}{2}$ nell'intervallo $[0, 2\pi]$ è
+ $0 \leq x < \dfrac{\pi}{3}$ oppure $\dfrac{5\pi}{3} < x \leq 2\pi$
- $\dfrac{\pi}{3} < x < \dfrac{5\pi}{3}$
- $\dfrac{\pi}{6} < x < \dfrac{5\pi}{6}$
- $\dfrac{\pi}{3} < x < \dfrac{2\pi}{3}$
= $\cos x = \dfrac12$ in $\dfrac\pi3$ e in $\dfrac{5\pi}{3}$. Il coseno è maggiore di $\frac12$ a destra della retta verticale di ascissa $\frac12$, cioè sull'arco che passa per l'angolo 0, che in $[0, 2\pi]$ si spezza in due pezzi. L'intervallo tra $\frac{\pi}{3}$ e $\frac{5\pi}{3}$ è la soluzione di $\cos x < \frac12$, quello tra $\frac{\pi}{6}$ e $\frac{5\pi}{6}$ è la soluzione di $\sin x > \frac12$.

D: Vero o falso: l'equazione $\sin x = \dfrac{\pi}{3}$ ha soluzioni.
- Vero
+ Falso
= $\dfrac{\pi}{3}$ è un numero, circa $1{,}05$: è maggiore di 1, e il seno non supera mai 1. Non confondere il valore del seno con l'angolo: $\sin\dfrac\pi3 = \dfrac{\sqrt3}{2}$, ma qui $\frac\pi3$ è il valore che dovrebbe avere il seno.

D: Un triangolo rettangolo ha ipotenusa 12 e un angolo acuto di $30^\circ$. Quanto misura il cateto opposto a quell'angolo?
+ $6$
- $6\sqrt{3}$
- $4\sqrt{3}$
- $24$
= Cateto uguale a ipotenusa per il seno dell'angolo opposto: $12 \cdot \sin 30^\circ = 12 \cdot \frac12 = 6$. $6\sqrt3$ è l'altro cateto, quello adiacente all'angolo; $4\sqrt3 = 12\tan 30^\circ$ usa la formula sbagliata; $24$ viene dal dividere per $\sin 30^\circ$.

D: In un triangolo due lati misurano 5 e 8 e l'angolo compreso tra loro è di $60^\circ$. Quanto misura il terzo lato?
N: 7
= Teorema del coseno: $a^2 = 5^2 + 8^2 - 2 \cdot 5 \cdot 8 \cdot \cos 60^\circ = 25 + 64 - 40 = 49$, quindi $a = 7$.

D: Quale affermazione sulla funzione $y = \tan x$ è vera?
+ È definita per $x \neq \dfrac{\pi}{2} + k\pi$ e ha periodo $\pi$.
- È definita su tutto $\R$ e ha periodo $2\pi$.
- È definita per $x \neq k\pi$ e ha periodo $\pi$.
- Assume solo valori compresi tra $-1$ e $1$.
= La tangente è $\frac{\sin x}{\cos x}$: non esiste dove il coseno si annulla, cioè in $\frac\pi2 + k\pi$, e si ripete ogni mezzo giro. L'insieme $x \neq k\pi$ è il dominio della cotangente. La tangente assume tutti i valori reali.
```

## Checklist

```checklist
So passare da gradi a radianti e viceversa
So collocare un angolo sulla circonferenza goniometrica, anche negativo o maggiore di un giro, e dire in che quadrante cade
So definire seno, coseno e tangente sulla circonferenza goniometrica e ricordo i loro segni nei quadranti
So a memoria seno, coseno e tangente di $0$, $\frac{\pi}{6}$, $\frac{\pi}{4}$, $\frac{\pi}{3}$, $\frac{\pi}{2}$
So usare la relazione fondamentale per ricavare una funzione dalle altre, scegliendo il segno giusto
So riportare un angolo al primo quadrante con gli archi associati
So applicare le formule di addizione, sottrazione, duplicazione e bisezione
So dominio, immagine e periodo di seno, coseno e tangente, e so trovare il periodo di $y = A\sin(\omega x)$
So risolvere $\sin x = c$, $\cos x = c$ e $\tan x = c$ scrivendo tutte le soluzioni con $k \in \Z$
So risolvere equazioni riconducibili: raccoglimento, secondo grado, stessa funzione nei due membri, lineari in seno e coseno
So risolvere una disequazione trigonometrica in $[0, 2\pi]$ leggendo gli archi sulla circonferenza
So risolvere un triangolo rettangolo e usare il teorema del coseno e il teorema dei seni
```

---

<!-- FILE: ai/test-ingresso.md -->
> File: `ai/test-ingresso.md`

---
titolo: "Test d'ingresso"
breve: "24 domande, 3 per modulo, per capire da quali moduli cominciare a studiare."
---

## Come funziona

- Sono 24 domande, 3 per ognuno degli 8 moduli, di livello base e medio. Ci vogliono circa **30 minuti**.
- Lavora **senza calcolatrice**, con un foglio per i conti, come al test OFA.
- Non serve prepararsi: il test serve a capire **da quali moduli partire**. Se una domanda proprio non la sai fare, lasciala in bianco invece di tirare a indovinare: così il risultato dice davvero che cosa ti manca.
- Alla fine premi «Correggi il test»: vedi il risultato modulo per modulo. Comincia dai moduli con più errori e rileggi le spiegazioni delle domande sbagliate.

## Le domande

```quiz diagnostico
D(M1): Qual è la negazione della frase «tutti i numeri primi sono dispari»?
+ esiste almeno un numero primo pari
- tutti i numeri primi sono pari
- nessun numero primo è dispari
- esiste almeno un numero primo dispari
= Per negare «tutti gli elementi hanno una proprietà» si dice «esiste almeno un elemento che non ha quella proprietà». Qui: esiste almeno un numero primo che non è dispari, cioè pari. La negazione è vera ($2$ è primo e pari), quindi la frase di partenza è falsa. «Tutti i numeri primi sono pari» non è la negazione: è falsa anche lei (per esempio $3$ è primo e dispari), mentre una frase e la sua negazione hanno sempre valori di verità opposti. «Nessun numero primo è dispari» dice la stessa cosa, quindi è sbagliata per lo stesso motivo. «Esiste almeno un numero primo dispari» è vera, ma non nega la proprietà «dispari»: non è la negazione.

D(M1): Un paio di scarpe costa $80$ €. Con uno sconto del $15\%$, quanti euro si pagano?
N: 68
= Lo sconto è il $15\%$ di $80$: $\frac{15}{100} \cdot 80 = 12$ €, quindi si pagano $80 - 12 = 68$ €. In un solo passaggio: si paga il $100\% - 15\% = 85\%$ del prezzo, cioè $0{,}85 \cdot 80 = 68$.

D(M1): Quali delle seguenti frazioni hanno una rappresentazione decimale finita?
+ $\frac{7}{40}$
+ $\frac{21}{35}$
- $\frac{5}{6}$
- $\frac{4}{15}$
= Una frazione ridotta ai minimi termini ha rappresentazione decimale finita se e solo se il suo denominatore, scomposto in fattori primi, contiene solo i fattori $2$ e $5$. $\frac{7}{40}$: $40 = 2^3 \cdot 5$, finita ($0{,}175$). $\frac{21}{35}$ va prima ridotta: $\frac{21}{35} = \frac{3}{5} = 0{,}6$, finita, anche se $35 = 5 \cdot 7$ contiene un $7$. $\frac{5}{6}$: $6 = 2 \cdot 3$, periodica ($0{,}8\overline{3}$). $\frac{4}{15}$: $15 = 3 \cdot 5$, periodica ($0{,}2\overline{6}$).

D(M2): Lo sviluppo di $(2x - 3)^2$ è
+ $4x^2 - 12x + 9$
- $4x^2 - 9$
- $4x^2 + 9$
- $4x^2 - 6x + 9$
= Quadrato di un binomio: $(A - B)^2 = A^2 - 2AB + B^2$, con $A = 2x$ e $B = 3$: $(2x)^2 - 2 \cdot 2x \cdot 3 + 3^2 = 4x^2 - 12x + 9$. Errori tipici: dimenticare il doppio prodotto ($4x^2 - 9$ è invece il prodotto $(2x - 3)(2x + 3)$) oppure scriverlo senza il fattore $2$ (così viene $-6x$).

D(M2): Qual è il resto della divisione di $x^3 - 3x + 5$ per $x - 2$?
N: 7
= Per il teorema del resto, il resto della divisione di un polinomio $P(x)$ per $x - a$ è $P(a)$. Qui $a = 2$: $P(2) = 8 - 6 + 5 = 7$. Con Ruffini (coefficienti $1, 0, -3, 5$: attenzione allo $0$ al posto del termine in $x^2$, che manca) si trovano il quoziente $x^2 + 2x + 1$ e il resto $7$.

D(M2): Quali dei seguenti polinomi sono fattori di $2x^3 - 8x$?
+ $x$
+ $x - 2$
+ $x + 2$
- $x - 4$
- $x^2 + 4$
= Prima raccolgo il fattore comune $2x$: $2x^3 - 8x = 2x(x^2 - 4)$. Poi $x^2 - 4$ è una differenza di quadrati: $x^2 - 4 = (x - 2)(x + 2)$. Quindi $2x^3 - 8x = 2x(x - 2)(x + 2)$, e $x$, $x - 2$, $x + 2$ sono fattori. $x - 4$ non lo è: per $x = 4$ il polinomio vale $128 - 32 = 96 \ne 0$. $x^2 + 4$ non lo è: $2x^3 - 8x = 2x(x^2 + 4) - 16x$, quindi la divisione per $x^2 + 4$ lascia il resto $-16x$, che non è zero.

D(M3): Quanto vale la soluzione dell'equazione $\dfrac{x - 1}{2} - \dfrac{x + 1}{3} = 1$?
N: 11
= Moltiplico entrambi i membri per $6$, il minimo comune multiplo dei denominatori: $3(x - 1) - 2(x + 1) = 6$. Tolgo le parentesi, attento al meno davanti alla seconda: $3x - 3 - 2x - 2 = 6$, cioè $x - 5 = 6$, quindi $x = 11$. Verifica: $\frac{10}{2} - \frac{12}{3} = 5 - 4 = 1$.

D(M3): Le soluzioni della disequazione $x^2 - x - 6 \le 0$ sono
+ $-2 \le x \le 3$
- $x \le -2$ oppure $x \ge 3$
- $-3 \le x \le 2$
- $-2 < x < 3$
= L'equazione associata $x^2 - x - 6 = 0$ ha soluzioni $-2$ e $3$ (somma $1$, prodotto $-6$). La parabola $y = x^2 - x - 6$ è rivolta verso l'alto (coefficiente di $x^2$ positivo), quindi è negativa tra le radici e nulla nelle radici: con $\le$ la soluzione è $-2 \le x \le 3$, estremi compresi. Gli intervalli esterni risolvono $\ge 0$; $-3 \le x \le 2$ viene da un errore di segno nelle radici.

D(M3): Vero o falso: il sistema $\begin{cases} x + 2y = 3 \\ 2x + 4y = 5 \end{cases}$ non ha soluzioni.
+ Vero
- Falso
= Moltiplico la prima equazione per $2$: $2x + 4y = 6$. La seconda dice $2x + 4y = 5$. La stessa quantità $2x + 4y$ non può valere insieme $6$ e $5$: il sistema è impossibile (incompatibile). Nel piano cartesiano le due equazioni sono rette parallele distinte, entrambe con coefficiente angolare $-\frac{1}{2}$.

D(M4): Le soluzioni della disequazione $\dfrac{x + 1}{x - 2} > 0$ sono
+ $x < -1$ oppure $x > 2$
- $-1 < x < 2$
- $x > 2$
- $x \le -1$ oppure $x > 2$
= Condizione di esistenza: $x \ne 2$. Il numeratore è positivo per $x > -1$, il denominatore per $x > 2$. Una frazione è positiva quando numeratore e denominatore hanno lo stesso segno: entrambi negativi per $x < -1$, entrambi positivi per $x > 2$. Soluzione: $x < -1$ oppure $x > 2$. Il valore $x = -1$ è escluso perché lì la frazione vale $0$ e la disuguaglianza è stretta; tra $-1$ e $2$ la frazione è negativa.

D(M4): L'equazione $\sqrt{2x + 3} = x$ ha una sola soluzione reale. Quanto vale?
N: 3
= La radice quadrata è maggiore o uguale a zero, quindi deve essere $x \ge 0$. Elevo al quadrato: $2x + 3 = x^2$, cioè $x^2 - 2x - 3 = 0$, con soluzioni $3$ e $-1$ (somma $2$, prodotto $-3$). $x = -1$ non rispetta $x \ge 0$ e va scartata: sostituendo si otterrebbe $\sqrt{1} = 1$ a sinistra e $-1$ a destra. Resta $x = 3$: $\sqrt{9} = 3$.

D(M4): Vero o falso: l'equazione $|2x - 4| = x$ ha due soluzioni.
+ Vero
- Falso
= Un valore assoluto è sempre $\ge 0$, quindi serve $x \ge 0$. Con questa condizione $|2x - 4| = x$ equivale a $2x - 4 = x$ oppure $2x - 4 = -x$. La prima dà $x = 4$, la seconda $3x = 4$, cioè $x = \frac{4}{3}$; entrambe rispettano $x \ge 0$. Verifica: $|8 - 4| = 4$ e $\left|\frac{8}{3} - 4\right| = \frac{4}{3}$. Le soluzioni sono due: è vero.

D(M5): Quanto misura la distanza tra i punti $A = (1, 2)$ e $B = (4, 6)$?
N: 5
= $AB = \sqrt{(4 - 1)^2 + (6 - 2)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$. È il teorema di Pitagora nel triangolo rettangolo che ha per cateti lo spostamento orizzontale ($3$) e quello verticale ($4$).

D(M5): La retta che passa per $P = (1, 3)$ ed è perpendicolare alla retta $y = 2x + 1$ ha equazione
+ $y = -\frac{1}{2}x + \frac{7}{2}$
- $y = 2x + 1$
- $y = -2x + 5$
- $y = \frac{1}{2}x + \frac{5}{2}$
= Due rette non verticali sono perpendicolari quando il prodotto dei loro coefficienti angolari è $-1$. La retta data ha $m = 2$, quindi la perpendicolare ha $m' = -\frac{1}{2}$, l'antireciproco. Retta per un punto: $y - 3 = -\frac{1}{2}(x - 1)$, cioè $y = -\frac{1}{2}x + \frac{1}{2} + 3 = -\frac{1}{2}x + \frac{7}{2}$. Tutte le opzioni passano per $P$, ma $y = 2x + 1$ è la retta data, $y = -2x + 5$ usa solo l'opposto di $m$ e $y = \frac{1}{2}x + \frac{5}{2}$ solo il reciproco: servono tutti e due insieme.

D(M5): La circonferenza $x^2 + y^2 - 6x + 2y + 6 = 0$ ha
+ centro $(3, -1)$ e raggio $2$
- centro $(-3, 1)$ e raggio $2$
- centro $(3, -1)$ e raggio $4$
- centro $(-6, 2)$ e raggio $6$
= Per $x^2 + y^2 + ax + by + c = 0$ il centro è $\left(-\frac{a}{2}, -\frac{b}{2}\right)$ e il raggio è $\sqrt{\frac{a^2}{4} + \frac{b^2}{4} - c}$. Qui $a = -6$, $b = 2$, $c = 6$: centro $(3, -1)$, raggio $\sqrt{9 + 1 - 6} = \sqrt{4} = 2$. Si può anche completare i quadrati: $(x - 3)^2 + (y + 1)^2 = 9 + 1 - 6 = 4$. Raggio $4$ è l'errore di chi dimentica la radice, centro $(-3, 1)$ quello di chi sbaglia il segno, centro $(-6, 2)$ e raggio $6$ quello di chi prende i coefficienti $a$, $b$, $c$ così come sono.

D(M6): Il dominio della funzione $f(x) = \dfrac{\sqrt{x + 1}}{x - 3}$ è
+ $[-1, 3) \cup (3, +\infty)$
- $(-1, 3) \cup (3, +\infty)$
- $[-1, +\infty)$
- $\R \setminus \{3\}$
= Servono due condizioni insieme. La radice quadrata richiede il radicando non negativo: $x + 1 \ge 0$, cioè $x \ge -1$, con $-1$ compreso perché $\sqrt{0} = 0$ esiste. Il denominatore non deve annullarsi: $x \ne 3$. Il dominio è $[-1, 3) \cup (3, +\infty)$. $(-1, 3) \cup (3, +\infty)$ esclude per errore $-1$, $[-1, +\infty)$ dimentica il denominatore, $\R \setminus \{3\}$ dimentica la radice.

D(M6): Quali delle seguenti funzioni sono pari?
+ $f(x) = x^4 - x^2$
+ $f(x) = |x|$
+ $f(x) = \cos x$
- $f(x) = x^3$
- $f(x) = x^2 + x$
= Una funzione è pari se $f(-x) = f(x)$ per ogni $x$ del dominio: il suo grafico è simmetrico rispetto all'asse $y$. $(-x)^4 - (-x)^2 = x^4 - x^2$: pari. $|-x| = |x|$: pari. $\cos(-x) = \cos x$: pari. $(-x)^3 = -x^3$: è dispari, non pari. $(-x)^2 + (-x) = x^2 - x$, diverso da $x^2 + x$ (per esempio $f(1) = 2$ e $f(-1) = 0$): né pari né dispari.

D(M6): Siano $f(x) = x^2 - 1$ e $g(x) = 2x + 1$. Quanto vale $f(g(1))$?
N: 8
= Si calcola dall'interno verso l'esterno: prima $g(1) = 2 \cdot 1 + 1 = 3$, poi $f(3) = 3^2 - 1 = 8$. Nell'ordine opposto si avrebbe $g(f(1)) = g(0) = 1$: la composizione di funzioni in generale non è commutativa.

D(M7): Quanto vale la soluzione dell'equazione $3^{2x - 1} = 27$?
N: 2
= Scrivo $27$ come potenza di $3$: $27 = 3^3$. Due potenze con la stessa base sono uguali quando hanno lo stesso esponente: $2x - 1 = 3$, quindi $x = 2$. Verifica: $3^{4 - 1} = 3^3 = 27$.

D(M7): Vero o falso: $\log_2 12 - \log_2 3 = 2$.
+ Vero
- Falso
= La differenza di due logaritmi nella stessa base è il logaritmo del quoziente: $\log_2 12 - \log_2 3 = \log_2 \frac{12}{3} = \log_2 4 = 2$, perché $2^2 = 4$. È vero. Attenzione: $\log_2 12 - \log_2 3$ non è $\log_2(12 - 3)$.

D(M7): Le soluzioni della disequazione $\log_2(x - 1) < 3$ sono
+ $1 < x < 9$
- $x < 9$
- $1 < x < 7$
- $x > 9$
= Condizione di esistenza: $x - 1 > 0$, cioè $x > 1$. Scrivo $3$ come logaritmo in base $2$: $3 = \log_2 2^3 = \log_2 8$. La base $2$ è maggiore di $1$, quindi il logaritmo è crescente e il verso resta lo stesso: $x - 1 < 8$, cioè $x < 9$. Con la condizione di esistenza: $1 < x < 9$. $x < 9$ dimentica la condizione di esistenza (per esempio $\log_2(-1)$ non esiste); $1 < x < 7$ confonde $2^3 = 8$ con $2 \cdot 3 = 6$.

D(M8): Quanti gradi misura un angolo di $\frac{5}{6}\pi$ radianti?
N: 150
= Gradi e radianti sono proporzionali: $\theta : 360° = \rho : 2\pi$, cioè a $\pi$ radianti corrispondono $180°$. Quindi $\frac{5}{6}\pi$ radianti sono $\frac{5}{6} \cdot 180° = 150°$.

D(M8): Quanto vale $\sin\frac{5}{6}\pi + \cos\frac{2}{3}\pi$?
N: 0
= Uso gli archi associati. $\frac{5}{6}\pi = \pi - \frac{\pi}{6}$ e $\sin(\pi - \alpha) = \sin\alpha$, quindi $\sin\frac{5}{6}\pi = \sin\frac{\pi}{6} = \frac{1}{2}$. $\frac{2}{3}\pi = \pi - \frac{\pi}{3}$ e $\cos(\pi - \alpha) = -\cos\alpha$, quindi $\cos\frac{2}{3}\pi = -\cos\frac{\pi}{3} = -\frac{1}{2}$. La somma è $\frac{1}{2} - \frac{1}{2} = 0$. Sulla circonferenza goniometrica: nel secondo quadrante il seno è positivo e il coseno è negativo.

D(M8): Le soluzioni dell'equazione $\cos x = \frac{1}{2}$ nell'intervallo $[0, 2\pi)$ sono
+ $\frac{\pi}{3}$ e $\frac{5}{3}\pi$
- $\frac{\pi}{3}$ e $\frac{2}{3}\pi$
- $\frac{\pi}{6}$ e $\frac{5}{6}\pi$
- $\frac{\pi}{6}$ e $\frac{11}{6}\pi$
= L'angolo del primo quadrante con coseno $\frac{1}{2}$ è $\frac{\pi}{3}$, cioè $60°$. Due angoli hanno lo stesso coseno quando sono opposti: l'altra soluzione è $-\frac{\pi}{3}$, che in $[0, 2\pi)$ si scrive $2\pi - \frac{\pi}{3} = \frac{5}{3}\pi$ (quarto quadrante, dove il coseno è ancora positivo). $\frac{2}{3}\pi$ ha coseno $-\frac{1}{2}$; $\frac{\pi}{6}$ e $\frac{5}{6}\pi$ sono le soluzioni di $\sin x = \frac{1}{2}$; $\frac{\pi}{6}$ e $\frac{11}{6}\pi$ quelle di $\cos x = \frac{\sqrt{3}}{2}$.
```

---

<!-- FILE: ai/simulazioni.md -->
> File: `ai/simulazioni.md`

---
titolo: "Simulazioni del test"
breve: "Otto prove complete come il test OFA: 5 domande, 45 minuti, correzione con tutti i passaggi."
---

## Come usarle

- Fai ogni simulazione tutta di seguito, come al test: **45 minuti** col cronometro, **niente calcolatrice**, un foglio per la brutta.
- Ogni domanda vale 2 punti; quando è divisa in a) e b), ogni parte vale 1 punto. La sufficienza è **6/10**.
- Nelle domande a scelta multipla qui il punteggio è pieno solo se scegli **tutte** le risposte giuste e nessuna sbagliata. Non sappiamo se il test vero dia punti parziali: ci alleniamo con la regola più severa.
- Le risposte sbagliate non tolgono punti: **rispondi sempre**, anche a una domanda che non sai fare, scegliendo tra le opzioni che non hai scartato.
- Nelle risposte numeriche puoi scrivere un intero, un decimale (con la virgola o col punto) o una frazione: `2,5`, `2.5` e `5/2` vanno bene tutti.
- Le simulazioni vanno in ordine di difficoltà: la 1 e la 2 sono le più semplici, dalla 3 alla 6 il livello è intermedio, la 7 e la 8 sono le più impegnative (parametri, casi da distinguere, formule meno usate).
- Dopo la correzione leggi la spiegazione di **ogni** domanda, anche di quelle giuste: spesso c'è una strada più corta. Sotto ogni simulazione trovi il modulo di ogni domanda: se sbagli sempre sullo stesso, torna agli appunti di quel modulo e rifai i suoi esercizi prima della simulazione successiva.

## Simulazione 1

```simulazione
D: Sia $A$ l'insieme dei divisori naturali di $12$ e sia $B = \{x \in \N \mid 2 \le x < 7\}$.
a) Quanti elementi ha l'insieme $A \cup B$?
N: 7
= Scrivo prima gli insiemi per elenco. I divisori di $12$ sono $A = \{1, 2, 3, 4, 6, 12\}$; in $B$ ci sono i naturali da $2$ a $6$ (il $7$ è escluso perché la disuguaglianza $x < 7$ è stretta): $B = \{2, 3, 4, 5, 6\}$. L'unione contiene gli elementi che stanno in almeno uno dei due insiemi, contati una volta sola: $A \cup B = \{1, 2, 3, 4, 5, 6, 12\}$, cioè $7$ elementi. Errore tipico: sommare $6 + 5 = 11$. I $4$ elementi comuni ($2, 3, 4, 6$) vanno contati una volta sola: $6 + 5 - 4 = 7$.
b) La differenza simmetrica $A \, \Delta \, B$ (gli elementi che stanno in uno solo dei due insiemi) è
+ $\{1, 5, 12\}$
- $\{2, 3, 4, 6\}$
- $\{1, 12\}$
- $\{1, 2, 3, 4, 5, 6, 12\}$
= Gli elementi comuni sono $A \cap B = \{2, 3, 4, 6\}$: sono proprio quelli da togliere dall'unione. Restano $1$ e $12$ (solo in $A$) e $5$ (solo in $B$), quindi $A \, \Delta \, B = \{1, 5, 12\}$. In simboli: $A \, \Delta \, B = (A \cup B) \setminus (A \cap B)$. Le altre opzioni: $\{2, 3, 4, 6\}$ è l'intersezione, $\{1, 12\}$ contiene solo gli elementi di $A$ che non stanno in $B$ (manca il $5$), $\{1, 2, 3, 4, 5, 6, 12\}$ è l'unione.

D: Quali dei seguenti numeri sono radici del polinomio $P(x) = x^3 - 2x^2 - 5x + 6$?
+ $1$
+ $3$
+ $-2$
- $-1$
- $2$
- $-3$
= Le radici intere vanno cercate tra i divisori del termine noto $6$: $\pm 1, \pm 2, \pm 3, \pm 6$. Provo $x = 1$: $P(1) = 1 - 2 - 5 + 6 = 0$, quindi $1$ è radice e $P(x)$ è divisibile per $x - 1$. Con Ruffini (coefficienti $1, -2, -5, 6$ e radice $1$) il quoziente è $x^2 - x - 6$ con resto $0$. Il trinomio si scompone con due numeri di somma $-1$ e prodotto $-6$, cioè $-3$ e $2$: $$P(x) = (x - 1)(x^2 - x - 6) = (x - 1)(x - 3)(x + 2)$$ Le radici sono $1$, $3$ e $-2$. Controllo sulle altre opzioni: $P(-1) = -1 - 2 + 5 + 6 = 8$, $P(2) = 8 - 8 - 10 + 6 = -4$, $P(-3) = -27 - 18 + 15 + 6 = -24$, nessuna è zero. Un polinomio di terzo grado ha al massimo tre radici: trovate le prime tre, puoi fermarti.

D: Un rettangolo ha perimetro $20$ cm e area $21$ cm². Chiama $x$ la lunghezza, in cm, di un lato.
a) Quanto misura, in cm, il lato più lungo?
N: 7
= Il semiperimetro è $10$, quindi se un lato misura $x$ l'altro misura $10 - x$ (con $0 < x < 10$). L'area dà l'equazione $x(10 - x) = 21$, cioè $x^2 - 10x + 21 = 0$. Due numeri con somma $10$ e prodotto $21$ sono $3$ e $7$ (con la formula: $\Delta = 100 - 84 = 16$ e $x = \frac{10 \pm 4}{2}$). I lati misurano $3$ cm e $7$ cm: il più lungo è $7$ cm.
b) Se il perimetro resta $20$ cm, per quali valori di $x$ l'area del rettangolo è almeno $16$ cm²?
+ $2 \le x \le 8$
- $x \le 2$ oppure $x \ge 8$
- $2 < x < 8$
- $0 < x \le 2$
= L'area è $x(10 - x)$ e deve essere $x(10 - x) \ge 16$, cioè $-x^2 + 10x - 16 \ge 0$. Moltiplico per $-1$ e **cambio il verso**: $x^2 - 10x + 16 \le 0$. L'equazione associata ha soluzioni $2$ e $8$ (somma $10$, prodotto $16$). La parabola $y = x^2 - 10x + 16$ è rivolta verso l'alto, quindi è negativa o nulla tra le due radici, estremi compresi: $2 \le x \le 8$, che sta già dentro $0 < x < 10$. Chi dimentica di cambiare il verso trova gli intervalli esterni; chi dimentica l'uguale perde $x = 2$ e $x = 8$, eppure il rettangolo $2 \times 8$ ha area esattamente $16$.

D: L'insieme delle soluzioni della disequazione $\dfrac{x^2 - 4}{x - 1} \ge 0$ è
+ $[-2, 1) \cup [2, +\infty)$
- $[-2, 1] \cup [2, +\infty)$
- $(-\infty, -2] \cup (1, 2]$
- $[-2, 2]$
= Condizione di esistenza: $x \ne 1$. Studio separatamente il segno di numeratore e denominatore. Numeratore: $x^2 - 4 \ge 0$ per $x \le -2$ oppure $x \ge 2$. Denominatore: $x - 1 > 0$ per $x > 1$ (il denominatore non può essere zero, quindi solo il $>$). Regola dei segni: per $x < -2$ ho $(+)$ fratto $(-)$, negativo; per $-2 < x < 1$ ho $(-)$ fratto $(-)$, positivo; per $1 < x < 2$ ho $(-)$ fratto $(+)$, negativo; per $x > 2$ ho $(+)$ fratto $(+)$, positivo. Prendo gli intervalli positivi più gli zeri del numeratore $x = \pm 2$, dove la frazione vale $0$: $[-2, 1) \cup [2, +\infty)$. Il valore $1$ è sempre escluso perché annulla il denominatore: per questo $[-2, 1] \cup [2, +\infty)$ è sbagliato. $(-\infty, -2] \cup (1, 2]$ è la soluzione della disequazione opposta, $\le 0$. $[-2, 2]$ contiene $1$, dove la frazione non esiste, e i valori tra $1$ e $2$, dove è negativa.

D: Nel piano cartesiano sono dati i punti $A = (-1, 1)$ e $B = (5, 9)$.
a) Quanto misura il segmento $AB$?
N: 10
= Formula della distanza tra due punti: $$AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2} = \sqrt{(5 + 1)^2 + (9 - 1)^2} = \sqrt{36 + 64} = \sqrt{100} = 10$$ Attenzione al segno: $x_B - x_A = 5 - (-1) = 6$, non $4$.
b) Vero o falso: il punto $P = (6, 2)$ è equidistante da $A$ e da $B$.
+ Vero
- Falso
= Calcolo le due distanze: $PA = \sqrt{(6 + 1)^2 + (2 - 1)^2} = \sqrt{49 + 1} = \sqrt{50}$ e $PB = \sqrt{(6 - 5)^2 + (2 - 9)^2} = \sqrt{1 + 49} = \sqrt{50}$. Sono uguali, quindi è vero. Detto in altro modo, $P$ sta sull'asse del segmento $AB$, cioè sulla retta perpendicolare ad $AB$ nel suo punto medio $M = (2, 5)$. Il coefficiente angolare di $AB$ è $\frac{9 - 1}{5 + 1} = \frac{4}{3}$, quello dell'asse è l'antireciproco $-\frac{3}{4}$, e l'asse ha equazione $y - 5 = -\frac{3}{4}(x - 2)$: per $x = 6$ si ottiene proprio $y = 5 - 3 = 2$.
```

**Moduli delle domande.** 1: insiemi (modulo 1) · 2: radici di un polinomio e Ruffini (modulo 2) · 3: problema di 2° grado e disequazione (modulo 3) · 4: disequazione fratta (modulo 4) · 5: distanza tra punti e asse di un segmento (modulo 5).

## Simulazione 2

```simulazione
D: In una cartoleria $3$ quaderni e $2$ penne costano in tutto $9{,}50$ €, mentre $2$ quaderni e $5$ penne costano $10$ €. I quaderni hanno tutti lo stesso prezzo, e anche le penne. Quanto costa un quaderno, in euro?
N: 2,5
= Chiamo $q$ il prezzo di un quaderno e $p$ quello di una penna. Il testo dà il sistema formato da $3q + 2p = 9{,}5$ e $2q + 5p = 10$. Metodo di riduzione: moltiplico la prima equazione per $2$ e la seconda per $3$, così $q$ ha lo stesso coefficiente in entrambe: $6q + 4p = 19$ e $6q + 15p = 30$. Sottraggo la prima dalla seconda: $11p = 11$, quindi $p = 1$. Sostituisco nella seconda equazione di partenza: $2q + 5 = 10$, da cui $q = 2{,}5$. Un quaderno costa $2{,}50$ €. Verifica nella prima equazione: $3 \cdot 2{,}5 + 2 \cdot 1 = 7{,}5 + 2 = 9{,}5$. Conviene sempre ricontrollare la soluzione di un sistema sostituendola in **tutte** le equazioni: un errore di calcolo salta subito all'occhio.

D: L'equazione $\sqrt{x + 7} = x - 5$ ha come soluzioni
+ solo $x = 9$
- $x = 2$ e $x = 9$
- solo $x = 2$
- nessuna soluzione reale
= La radice ha indice pari, quindi è maggiore o uguale a zero: deve esserlo anche il secondo membro, $x - 5 \ge 0$, cioè $x \ge 5$. Con questa condizione posso elevare al quadrato (il radicando sarà automaticamente non negativo, perché uguale a un quadrato): $x + 7 = (x - 5)^2 = x^2 - 10x + 25$, cioè $x^2 - 11x + 18 = 0$. Due numeri con somma $11$ e prodotto $18$: $2$ e $9$. Confronto con la condizione $x \ge 5$: $x = 2$ va scartato, $x = 9$ è accettabile. Verifica: $\sqrt{9 + 7} = \sqrt{16} = 4$ e $9 - 5 = 4$. Con $x = 2$ invece si ottiene $\sqrt{9} = 3$ a sinistra e $-3$ a destra: è una soluzione estranea, nata dall'elevamento al quadrato.

D: Considera le funzioni $f(x) = 2x - 3$ e $g(x) = x^2 + 1$, definite su tutto $\R$.
a) Quanto vale $(g \circ f)(2)$?
N: 2
= $g \circ f$ vuol dire: prima applico $f$, poi $g$. Quindi $(g \circ f)(2) = g(f(2))$. Calcolo $f(2) = 2 \cdot 2 - 3 = 1$ e poi $g(1) = 1^2 + 1 = 2$. Errore tipico: invertire l'ordine e calcolare $f(g(2)) = f(5) = 7$.
b) Quali delle seguenti affermazioni sono vere?
+ $f$ è iniettiva
+ la funzione inversa di $f$ è $f^{-1}(x) = \dfrac{x + 3}{2}$
- $f$ è una funzione pari
- $(f \circ g)(x) = (2x - 3)^2 + 1$
- $f$ esprime una proporzionalità diretta tra $x$ e $f(x)$
= Il grafico di $f$ è una retta non orizzontale (coefficiente angolare $2$): a valori diversi di $x$ corrispondono valori diversi di $f(x)$, quindi $f$ è iniettiva (anzi biiettiva da $\R$ in $\R$). Per l'inversa ricavo $x$ da $y = 2x - 3$: $x = \frac{y + 3}{2}$; poi chiamo di nuovo $x$ la variabile: $f^{-1}(x) = \frac{x + 3}{2}$. $f$ non è pari: per esempio $f(1) = -1$ ma $f(-1) = -5$. Infine $(f \circ g)(x) = f(g(x)) = 2(x^2 + 1) - 3 = 2x^2 - 1$; l'espressione $(2x - 3)^2 + 1$ è invece $(g \circ f)(x)$. Nemmeno la proporzionalità diretta va bene: ha la forma $y = mx$, con il grafico che passa per l'origine, mentre $f(0) = -3$; infatti raddoppiando $x$ non raddoppia $f(x)$: $f(1) = -1$ e $f(2) = 1$.

D: Considera l'equazione $4^x - 3 \cdot 2^x - 4 = 0$.
a) Ha una sola soluzione reale. Quanto vale?
N: 2
= Osservo che $4^x = (2^2)^x = (2^x)^2$. Pongo $t = 2^x$, con $t > 0$ perché un esponenziale è sempre positivo: l'equazione diventa $t^2 - 3t - 4 = 0$, con soluzioni $t = 4$ e $t = -1$ (somma $3$, prodotto $-4$). $t = -1$ va scartata, perché $2^x = -1$ è impossibile. Resta $2^x = 4 = 2^2$, quindi $x = 2$. Verifica: $4^2 - 3 \cdot 2^2 - 4 = 16 - 12 - 4 = 0$.
b) Vero o falso: l'equazione $e^{2x} - 3e^x - 4 = 0$ ha come unica soluzione reale $x = \ln 4$.
+ Vero
- Falso
= È la stessa equazione con la base $e$ al posto di $2$. Pongo $t = e^x$, con $t > 0$: di nuovo $t^2 - 3t - 4 = 0$, quindi $t = 4$ (la soluzione $t = -1$ va scartata). Ora però $e^x = 4$ non si risolve a occhio: si passa al logaritmo nella stessa base, cioè al logaritmo naturale $\ln$, che è la funzione inversa di $e^x$. Quindi $x = \ln 4$ (si può scrivere anche $2\ln 2$): è vero. Errore tipico: rispondere $x = 2$ come nel punto a), ma $e^2$ vale circa $7{,}39$, non $4$.

D: Considera l'equazione $2\cos x + \sqrt{3} = 0$.
a) Le sue soluzioni nell'intervallo $[0, 2\pi)$ sono
+ $x = \frac{5}{6}\pi$ e $x = \frac{7}{6}\pi$
- $x = \frac{\pi}{6}$ e $x = \frac{11}{6}\pi$
- $x = \frac{5}{6}\pi$ e $x = \frac{11}{6}\pi$
- $x = \frac{2}{3}\pi$ e $x = \frac{4}{3}\pi$
= Isolo il coseno: $\cos x = -\frac{\sqrt{3}}{2}$. L'angolo del primo quadrante con coseno $\frac{\sqrt{3}}{2}$ è $\frac{\pi}{6}$. Il coseno è negativo nel secondo e nel terzo quadrante, quindi gli angoli cercati sono $\pi - \frac{\pi}{6} = \frac{5}{6}\pi$ e $\pi + \frac{\pi}{6} = \frac{7}{6}\pi$ (sono opposti a meno di un giro: $\frac{7}{6}\pi = 2\pi - \frac{5}{6}\pi$). Le altre coppie: $\frac{\pi}{6}$ e $\frac{11}{6}\pi$ risolvono $\cos x = \frac{\sqrt{3}}{2}$; $\frac{2}{3}\pi$ e $\frac{4}{3}\pi$ risolvono $\cos x = -\frac{1}{2}$; in $\frac{11}{6}\pi$ il coseno è positivo.
b) Vero o falso: $\tan\left(\frac{7}{6}\pi\right) = \frac{\sqrt{3}}{3}$.
+ Vero
- Falso
= $\frac{7}{6}\pi = \pi + \frac{\pi}{6}$ è un angolo del terzo quadrante, dove seno e coseno sono entrambi negativi. Per gli archi associati $\sin(\pi + \alpha) = -\sin\alpha$ e $\cos(\pi + \alpha) = -\cos\alpha$, quindi $\sin\left(\frac{7}{6}\pi\right) = -\frac{1}{2}$ e $\cos\left(\frac{7}{6}\pi\right) = -\frac{\sqrt{3}}{2}$ (il valore del punto a). La tangente è il rapporto tra seno e coseno: $$\tan\left(\frac{7}{6}\pi\right) = \frac{-\frac{1}{2}}{-\frac{\sqrt{3}}{2}} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$$ ed è positiva, quindi è vero. Più in fretta: la tangente ha periodo $\pi$, quindi $\tan\left(\pi + \frac{\pi}{6}\right) = \tan\frac{\pi}{6} = \frac{\sqrt{3}}{3}$. Errore tipico: pensare che nel terzo quadrante la tangente sia negativa come seno e coseno, mentre il rapporto di due numeri negativi è positivo.
```

**Moduli delle domande.** 1: sistema lineare in un problema (modulo 3) · 2: equazione irrazionale (modulo 4) · 3: composizione, funzione inversa e proporzionalità (modulo 6) · 4: equazioni esponenziali e logaritmo naturale (modulo 7) · 5: equazione goniometrica, archi associati e tangente (modulo 8).

## Simulazione 3

```simulazione
D: Considera la proposizione «per ogni numero naturale $n$ esiste un numero naturale $m$ tale che $m > n$», in simboli $\forall n \in \N, \; \exists m \in \N \mid m > n$ (il simbolo $\mid$ si legge «tale che»).
a) La sua negazione è
+ esiste un numero naturale $n$ tale che, per ogni numero naturale $m$, si ha $m \le n$
- esiste un numero naturale $n$ tale che, per ogni numero naturale $m$, si ha $m < n$
- per ogni numero naturale $n$ esiste un numero naturale $m$ tale che $m \le n$
- esiste un numero naturale $m$ tale che, per ogni numero naturale $n$, si ha $m > n$
= Per negare una frase con i quantificatori si scambia ogni «per ogni» con «esiste» (e viceversa) e si nega la proprietà finale. Qui $\forall n$ diventa $\exists n$, $\exists m$ diventa $\forall m$, e $m > n$ diventa $m \le n$: il contrario di «maggiore» è «minore **o uguale**». La negazione è quindi $\exists n \in \N \mid \forall m \in \N, \; m \le n$, cioè «esiste un naturale maggiore o uguale a tutti i naturali». È falsa, com'è giusto: la frase di partenza è vera (basta prendere $m = n + 1$). Le altre risposte: con «$m < n$» la disuguaglianza è negata male; «per ogni $n$ esiste $m$ tale che $m \le n$» non scambia i quantificatori; «esiste $m$ tale che, per ogni $n$, $m > n$» inverte solo l'ordine dei quantificatori: cambia il senso della frase, ma non è la sua negazione.
b) Vero o falso: per ogni $x \in \R$ vale l'implicazione «se $x^2 > 4$, allora $x > 2$».
- Vero
+ Falso
= Un'implicazione è falsa se c'è anche un solo caso in cui l'antecedente è vero e il conseguente è falso: basta un controesempio. Con $x = -3$ si ha $x^2 = 9 > 4$, ma $-3 > 2$ è falso. In realtà $x^2 > 4$ equivale a $x < -2$ oppure $x > 2$. È vera invece l'implicazione inversa «se $x > 2$, allora $x^2 > 4$»: $x > 2$ è condizione sufficiente per $x^2 > 4$, ma non necessaria.

D: Considera il polinomio $P(x) = 2x^3 + kx^2 - 5x + 6$, dove $k$ è un numero reale.
a) Per quale valore di $k$ il polinomio $P(x)$ è divisibile per $x - 2$?
N: -3
= Per il teorema del resto, il resto della divisione di $P(x)$ per $x - 2$ è $P(2)$, e il polinomio è divisibile quando questo resto è zero. $P(2) = 2 \cdot 8 + k \cdot 4 - 10 + 6 = 4k + 12$. Pongo $4k + 12 = 0$: $k = -3$.
b) Con il valore di $k$ trovato, la scomposizione di $P(x)$ in fattori di primo grado è
+ $(x - 2)(x - 1)(2x + 3)$
- $(x - 2)(x + 1)(2x - 3)$
- $(x + 2)(x - 1)(2x - 3)$
- $(x - 2)(2x^2 - x + 3)$
= Con $k = -3$ il polinomio è $P(x) = 2x^3 - 3x^2 - 5x + 6$. Divido per $x - 2$ con Ruffini: coefficienti $2, -3, -5, 6$, radice $2$. Abbasso il $2$; $2 \cdot 2 = 4$ e $-3 + 4 = 1$; $1 \cdot 2 = 2$ e $-5 + 2 = -3$; $-3 \cdot 2 = -6$ e $6 - 6 = 0$. Il quoziente è $2x^2 + x - 3$, con resto $0$. Il trinomio ha $\Delta = 1 + 24 = 25$ e radici $x = \frac{-1 \pm 5}{4}$, cioè $1$ e $-\frac{3}{2}$, quindi $2x^2 + x - 3 = 2(x - 1)\left(x + \frac{3}{2}\right) = (x - 1)(2x + 3)$. In tutto $P(x) = (x - 2)(x - 1)(2x + 3)$. Per scartare le altre opzioni basta sviluppare: per esempio $(x - 2)(x + 1)(2x - 3) = 2x^3 - 5x^2 - x + 6$, diverso da $P(x)$.

D: Per quali valori di $k$ la retta $3x - 4y + k = 0$ è tangente alla circonferenza $x^2 + y^2 - 4x + 6y - 12 = 0$?
+ $k = 7$
+ $k = -43$
- $k = 43$
- $k = -7$
- $k = 25$
= Nella forma $x^2 + y^2 + ax + by + c = 0$ il centro è $\left(-\frac{a}{2}, -\frac{b}{2}\right) = (2, -3)$ e il raggio è $r = \sqrt{2^2 + (-3)^2 - (-12)} = \sqrt{4 + 9 + 12} = 5$. Una retta è tangente quando la sua distanza dal centro è uguale al raggio: $$\frac{|3 \cdot 2 - 4 \cdot (-3) + k|}{\sqrt{3^2 + 4^2}} = \frac{|18 + k|}{5} = 5$$ quindi $|18 + k| = 25$, cioè $18 + k = 25$ oppure $18 + k = -25$: $k = 7$ oppure $k = -43$. I valori $43$ e $-7$ nascono da un errore di segno sul centro (usando $(-2, 3)$); $k = 25$ dimentica il $18$. Controllo: con $k = 7$ la retta tocca la circonferenza nel solo punto $(-1, 1)$.

D: Considera la funzione $f(x) = x^2 - 4x + 3$, definita su $\R$. Quali delle seguenti affermazioni sono vere?
+ $f$ è decrescente nell'intervallo $(-\infty, 2]$
+ $f$ è limitata inferiormente ma non superiormente
+ il grafico di $f$ si ottiene da quello di $y = x^2$ con una traslazione di $2$ verso destra e di $1$ verso il basso
- $f$ è iniettiva su tutto $\R$
- $f$ è una funzione pari
= Completo il quadrato: $x^2 - 4x + 3 = (x^2 - 4x + 4) - 1 = (x - 2)^2 - 1$. Il grafico è una parabola rivolta verso l'alto con vertice $(2, -1)$. Quindi $f$ scende fino a $x = 2$ e poi sale: è decrescente in $(-\infty, 2]$. Il valore più piccolo è $-1$ (limitata inferiormente), ma i valori crescono senza limite (non è limitata superiormente). La scrittura $(x - 2)^2 - 1$ dice proprio: in $x^2$ metto $x - 2$ al posto di $x$ (traslazione di $2$ verso destra) e poi sottraggo $1$ (traslazione di $1$ verso il basso). Non è iniettiva: $f(1) = f(3) = 0$. Non è pari: $f(-1) = 1 + 4 + 3 = 8$, mentre $f(1) = 0$; il suo asse di simmetria è la retta $x = 2$, non l'asse $y$.

D: Considera l'equazione $\log_2(x + 1) + \log_2(x - 1) = 3$.
a) Quanto vale la sua unica soluzione?
N: 3
= Condizioni di esistenza: entrambi gli argomenti devono essere positivi, $x + 1 > 0$ e $x - 1 > 0$, cioè $x > 1$. Con queste condizioni posso usare la proprietà del prodotto: $\log_2\left[(x + 1)(x - 1)\right] = 3$, cioè $x^2 - 1 = 2^3 = 8$, quindi $x^2 = 9$ e $x = \pm 3$. Solo $x = 3$ rispetta $x > 1$. Verifica: $\log_2 4 + \log_2 2 = 2 + 1 = 3$.
b) Vero o falso: $x = -3$ è una soluzione dell'equazione $\log_2\left[(x + 1)(x - 1)\right] = 3$.
+ Vero
- Falso
= Questa è un'equazione diversa da quella del punto a): qui c'è un solo logaritmo, che esiste quando il **prodotto** $(x + 1)(x - 1)$ è positivo, cioè per $x < -1$ oppure $x > 1$. Per $x = -3$: $(-3 + 1)(-3 - 1) = (-2)(-4) = 8$ e $\log_2 8 = 3$, quindi è vero. La lezione: la proprietà $\log_a(bc) = \log_a b + \log_a c$ vale solo se $b$ e $c$ sono entrambi positivi. Per questo le condizioni di esistenza si scrivono sull'equazione di partenza, **prima** di trasformarla: nel punto a) $x = -3$ va scartata perché $\log_2(-2)$ non esiste.
```

**Moduli delle domande.** 1: quantificatori, negazione, controesempio (modulo 1) · 2: teorema del resto e Ruffini (modulo 2) · 3: circonferenza e retta tangente (modulo 5) · 4: caratteristiche di una funzione e traslazioni (modulo 6) · 5: equazione logaritmica e condizioni di esistenza (modulo 7).

## Simulazione 4

```simulazione
D: Per $x \ne \pm 2$, l'espressione $\dfrac{x^3 - 8}{x^2 - 4} - \dfrac{4}{x + 2}$ è uguale a
+ $x$
- $x + 2$
- $\dfrac{x^2 + 2x}{x - 2}$
- $\dfrac{x^2 + 2x + 8}{x + 2}$
= Scompongo: $x^3 - 8$ è una differenza di cubi, $x^3 - 2^3 = (x - 2)(x^2 + 2x + 4)$; $x^2 - 4$ è una differenza di quadrati, $(x - 2)(x + 2)$. Semplifico il fattore $x - 2$ (lecito perché $x \ne 2$): $$\frac{x^3 - 8}{x^2 - 4} = \frac{x^2 + 2x + 4}{x + 2}$$ Ora le due frazioni hanno lo stesso denominatore: $$\frac{x^2 + 2x + 4 - 4}{x + 2} = \frac{x^2 + 2x}{x + 2} = \frac{x(x + 2)}{x + 2} = x$$ dove ho semplificato $x + 2$, lecito perché $x \ne -2$. Controllo con un numero: per $x = 0$ l'espressione vale $\frac{-8}{-4} - \frac{4}{2} = 2 - 2 = 0$, proprio come $x$. Errori tipici: scrivere il falso quadrato con il segno sbagliato, $x^2 - 2x + 4$, oppure sommare il $4$ invece di sottrarlo (così al numeratore compare $+8$).

D: Considera l'equazione $x^2 - 6x + k = 0$, dove $k$ è un numero reale.
a) Per quale valore di $k$ l'equazione ha due soluzioni reali coincidenti?
N: 9
= Le soluzioni coincidono quando il discriminante è nullo: $\Delta = (-6)^2 - 4 \cdot 1 \cdot k = 36 - 4k = 0$, cioè $k = 9$. In quel caso $x^2 - 6x + 9 = (x - 3)^2$ e l'unica soluzione è $x = 3$. Per $k < 9$ le soluzioni sono due e distinte, per $k > 9$ non ci sono soluzioni reali.
b) Per $k = 5$, le soluzioni della disequazione $x^2 - 6x + k < 0$ sono
+ $1 < x < 5$
- $x < 1$ oppure $x > 5$
- $1 \le x \le 5$
- $-5 < x < -1$
= Con $k = 5$ la disequazione è $x^2 - 6x + 5 < 0$. L'equazione associata $x^2 - 6x + 5 = 0$ ha soluzioni $1$ e $5$ (somma $6$, prodotto $5$). Il coefficiente di $x^2$ è positivo, quindi la parabola $y = x^2 - 6x + 5$ è rivolta verso l'alto ed è negativa **tra** le radici: $1 < x < 5$, estremi esclusi perché la disuguaglianza è stretta (in $1$ e in $5$ il trinomio vale $0$). Gli intervalli esterni sono le soluzioni di $x^2 - 6x + 5 > 0$; $-5 < x < -1$ viene dallo sbagliare il segno delle radici.

D: L'insieme delle soluzioni della disequazione $|2x - 1| < x + 4$ è
+ $(-1, 5)$
- $(-\infty, -1) \cup (5, +\infty)$
- $\left[\frac{1}{2}, 5\right)$
- $(-\infty, -1) \cup \left[\frac{1}{2}, 5\right)$
= Distinguo i due casi della definizione di valore assoluto. Primo caso, $2x - 1 \ge 0$, cioè $x \ge \frac{1}{2}$: il modulo si toglie così com'è, $2x - 1 < x + 4$, da cui $x < 5$; soluzioni $\frac{1}{2} \le x < 5$. Secondo caso, $x < \frac{1}{2}$: il modulo vale $-(2x - 1) = 1 - 2x$, quindi $1 - 2x < x + 4$, cioè $-3x < 3$; divido per $-3$ **cambiando il verso**: $x > -1$; soluzioni $-1 < x < \frac{1}{2}$. Unisco i due casi: $-1 < x < 5$. Più in fretta: $|A| < B$ equivale a $-B < A < B$, cioè $-x - 4 < 2x - 1 < x + 4$, che dà $x > -1$ e $x < 5$. $(-\infty, -1) \cup \left[\frac{1}{2}, 5\right)$ è l'errore di chi non cambia il verso dividendo per $-3$; $\left[\frac{1}{2}, 5\right)$ dimentica il secondo caso; $(-\infty, -1) \cup (5, +\infty)$ risolve la disequazione opposta, $|2x - 1| > x + 4$.

D: Considera la parabola $y = x^2 - 4x + 3$ e la retta $y = x - 1$.
a) Quanto vale l'ordinata del fuoco della parabola?
N: -3/4
= Per $y = ax^2 + bx + c$ il vertice è $V = \left(-\frac{b}{2a}, -\frac{\Delta}{4a}\right)$ e il fuoco è $F = \left(-\frac{b}{2a}, \frac{1 - \Delta}{4a}\right)$. Qui $a = 1$, $b = -4$, $c = 3$ e $\Delta = 16 - 12 = 4$: vertice $V = (2, -1)$, fuoco $F = \left(2, \frac{1 - 4}{4}\right) = \left(2, -\frac{3}{4}\right)$, quindi l'ordinata è $-\frac{3}{4} = -0{,}75$. Controllo: il fuoco sta sull'asse $x = 2$, a distanza $\frac{1}{4a} = \frac{1}{4}$ dal vertice, dalla parte verso cui è rivolta la parabola (verso l'alto): $-1 + \frac{1}{4} = -\frac{3}{4}$. La direttrice è la retta $y = -\frac{5}{4}$, alla stessa distanza dal vertice ma dall'altra parte.
b) Quali dei seguenti punti appartengono sia alla parabola sia alla retta?
+ $(1, 0)$
+ $(4, 3)$
- $(2, -1)$
- $(3, 2)$
- $(0, 3)$
= I punti comuni si trovano mettendo a sistema le due equazioni: $x^2 - 4x + 3 = x - 1$, cioè $x^2 - 5x + 4 = 0$, con soluzioni $x = 1$ e $x = 4$ (somma $5$, prodotto $4$). Le ordinate si ricavano dalla retta: $y = 0$ e $y = 3$. I punti comuni sono $(1, 0)$ e $(4, 3)$. Gli altri: $(2, -1)$ e $(0, 3)$ stanno sulla parabola ma non sulla retta ($2 - 1 = 1 \ne -1$ e $0 - 1 = -1 \ne 3$); $(3, 2)$ sta sulla retta ma non sulla parabola ($9 - 12 + 3 = 0 \ne 2$). Un punto è comune solo se soddisfa **entrambe** le equazioni.

D: Un triangolo ha i lati lunghi $a = 7$, $b = 5$ e $c = 3$. Indica con $\alpha$ l'angolo opposto al lato $a$ e con $\beta$ l'angolo opposto al lato $b$.
a) L'angolo $\alpha$ misura
+ $\frac{2}{3}\pi$
- $\frac{\pi}{3}$
- $\frac{5}{6}\pi$
- $\frac{3}{4}\pi$
= Conosco i tre lati, quindi uso il teorema del coseno (di Carnot) sul lato $a$: $a^2 = b^2 + c^2 - 2bc\cos\alpha$. Sostituisco: $49 = 25 + 9 - 30\cos\alpha$, quindi $30\cos\alpha = 34 - 49 = -15$ e $\cos\alpha = -\frac{1}{2}$. In un triangolo ogni angolo è compreso tra $0$ e $\pi$, e l'unico angolo di quell'intervallo con coseno $-\frac{1}{2}$ è $\frac{2}{3}\pi$, cioè $120°$. $\frac{\pi}{3}$ ha coseno $+\frac{1}{2}$: è l'errore di segno più comune.
b) Vero o falso: $\sin\beta = \dfrac{5\sqrt{3}}{14}$.
+ Vero
- Falso
= Con il teorema dei seni: $\frac{a}{\sin\alpha} = \frac{b}{\sin\beta}$, quindi $\sin\beta = \frac{b \sin\alpha}{a} = \frac{5 \cdot \frac{\sqrt{3}}{2}}{7} = \frac{5\sqrt{3}}{14}$, perché $\sin\frac{2}{3}\pi = \frac{\sqrt{3}}{2}$. È vero. Controllo con Carnot sul lato $b$: $25 = 49 + 9 - 42\cos\beta$, da cui $\cos\beta = \frac{33}{42} = \frac{11}{14}$, e infatti $\sin^2\beta + \cos^2\beta = \frac{75}{196} + \frac{121}{196} = 1$.
```

**Moduli delle domande.** 1: scomposizione e frazioni algebriche (modulo 2) · 2: discriminante e disequazione di 2° grado (modulo 3) · 3: disequazione con valore assoluto (modulo 4) · 4: parabola, fuoco, intersezione con una retta (modulo 5) · 5: triangoli, teoremi del coseno e dei seni (modulo 8).

## Simulazione 5

```simulazione
D: Un negozio aumenta del $20\%$ il prezzo di una giacca. Qualche settimana dopo, con i saldi, applica uno sconto del $20\%$ sul nuovo prezzo.
a) Di che percentuale è diminuito il prezzo finale rispetto a quello iniziale? Scrivi solo il numero (per esempio $7$ per una diminuzione del $7\%$).
N: 4
= Chiamo $p$ il prezzo iniziale. Aumentare del $20\%$ vuol dire moltiplicare per $1 + \frac{20}{100} = 1{,}2$; scontare del $20\%$ vuol dire moltiplicare per $1 - \frac{20}{100} = 0{,}8$. Il prezzo finale è $$0{,}8 \cdot 1{,}2 \cdot p = 0{,}96\,p$$ cioè il $96\%$ di quello iniziale: è diminuito del $4\%$. Errore tipico: pensare che $+20\%$ e $-20\%$ si annullino. Non succede perché lo sconto è calcolato su un prezzo più alto di quello su cui era stato calcolato l'aumento.
b) Vero o falso: dopo i saldi, per riportare la giacca esattamente al prezzo iniziale basta aumentarne il prezzo del $4\%$.
- Vero
+ Falso
= Dopo i saldi il prezzo è $0{,}96\,p$. Aumentandolo del $4\%$ si ottiene $0{,}96\,p \cdot 1{,}04 = 0{,}9984\,p$, ancora meno di $p$: il $4\%$ di $0{,}96\,p$ è meno del $4\%$ di $p$. Per tornare a $p$ bisogna moltiplicare per $\frac{1}{0{,}96} = \frac{100}{96} = \frac{25}{24}$, cioè aumentare di $\frac{1}{24}$ del prezzo, circa il $4{,}17\%$. Una percentuale si calcola sempre sul valore a cui viene applicata.

D: Il sistema $\begin{cases} x + y + z = 6 \\ 2x - y + z = 3 \\ x + 2y - z = 2 \end{cases}$ ha una sola soluzione $(x, y, z)$. Quanto vale $z$?
N: 3
= Uso il metodo di sostituzione. Dalla prima equazione ricavo $z = 6 - x - y$ e la sostituisco nelle altre due. Seconda: $2x - y + 6 - x - y = 3$, cioè $x - 2y = -3$. Terza: $x + 2y - (6 - x - y) = 2$, cioè $2x + 3y = 8$. Ora ho un sistema di due equazioni in due incognite. Dalla prima ricavo $x = 2y - 3$ e sostituisco nella seconda: $2(2y - 3) + 3y = 8$, cioè $7y = 14$ e $y = 2$. Allora $x = 2 \cdot 2 - 3 = 1$ e $z = 6 - 1 - 2 = 3$. La soluzione è $(1, 2, 3)$. Verifica in tutte e tre le equazioni: $1 + 2 + 3 = 6$, $2 - 2 + 3 = 3$, $1 + 4 - 3 = 2$. Scorciatoia: sommando la prima e la terza equazione la $z$ sparisce e si ottiene subito $2x + 3y = 8$.

D: L'equazione $\dfrac{x}{x - 2} - \dfrac{2}{x + 2} = \dfrac{8}{x^2 - 4}$
+ non ha soluzioni reali
- ha le soluzioni $x = 2$ e $x = -2$
- ha la sola soluzione $x = 2$
- ha la sola soluzione $x = -2$
= Condizioni di esistenza: i denominatori $x - 2$, $x + 2$ e $x^2 - 4 = (x - 2)(x + 2)$ non devono annullarsi, quindi $x \ne 2$ e $x \ne -2$. Il denominatore comune è $(x - 2)(x + 2)$; moltiplico entrambi i membri per esso, che è diverso da zero per le condizioni di esistenza: $x(x + 2) - 2(x - 2) = 8$, cioè $x^2 + 2x - 2x + 4 = 8$, quindi $x^2 = 4$ e $x = \pm 2$. Entrambi i valori sono esclusi dalle condizioni di esistenza: l'equazione non ha soluzioni. Chi salta le condizioni di esistenza risponde $x = 2$ e $x = -2$, ma per questi valori nell'equazione compare una divisione per zero.

D: Considera la funzione $f(x) = \dfrac{2x + 1}{x - 3}$.
a) Per quale valore di $x$ si ha $f(x) = 3$?
N: 10
= Risolvo $\frac{2x + 1}{x - 3} = 3$ con la condizione $x \ne 3$: moltiplico per $x - 3$ e ottengo $2x + 1 = 3x - 9$, quindi $x = 10$, accettabile. Verifica: $f(10) = \frac{21}{7} = 3$. In altre parole $10$ è la controimmagine di $3$, cioè $f^{-1}(3) = 10$.
b) Quali delle seguenti affermazioni sono vere?
+ il dominio di $f$ è $\R \setminus \{3\}$
+ il numero $2$ non appartiene all'immagine di $f$
+ considerata come funzione dal suo dominio alla sua immagine, $f$ è invertibile e $f^{-1}(x) = \dfrac{3x + 1}{x - 2}$
- $f(0) = \dfrac{1}{3}$
- $f$ è una funzione pari
= Dominio: l'unica condizione è $x - 3 \ne 0$, quindi $x \ne 3$. Per l'immagine risolvo $f(x) = y$ rispetto a $x$: $2x + 1 = y(x - 3)$, cioè $2x - xy = -3y - 1$, quindi $x(2 - y) = -3y - 1$ e $x = \frac{3y + 1}{y - 2}$. Si può fare per ogni $y \ne 2$; per $y = 2$ l'equazione diventa $2x + 1 = 2x - 6$, impossibile. Quindi $2$ non è immagine di nessun $x$, la funzione è biiettiva da $\R \setminus \{3\}$ a $\R \setminus \{2\}$ e, scambiando i nomi delle variabili, l'inversa è $f^{-1}(x) = \frac{3x + 1}{x - 2}$. Poi $f(0) = \frac{1}{-3} = -\frac{1}{3}$, non $\frac{1}{3}$. Infine $f$ non è pari: $f(1) = -\frac{3}{2}$, mentre $f(-1) = \frac{-1}{-4} = \frac{1}{4}$; del resto il dominio non è nemmeno simmetrico rispetto a $0$ (contiene $-3$ ma non $3$).

D: L'insieme delle soluzioni della disequazione $\left(\dfrac{1}{2}\right)^{x^2 - 3} > \dfrac{1}{4^x}$ è
+ $-1 < x < 3$
- $x < -1$ oppure $x > 3$
- $-3 < x < 1$
- $x > 3$
= Scrivo tutto con la stessa base $\frac{1}{2}$: $\frac{1}{4^x} = \left(\frac{1}{4}\right)^x = \left(\left(\frac{1}{2}\right)^2\right)^x = \left(\frac{1}{2}\right)^{2x}$. La disequazione diventa $\left(\frac{1}{2}\right)^{x^2 - 3} > \left(\frac{1}{2}\right)^{2x}$. La base è compresa tra $0$ e $1$, quindi l'esponenziale è decrescente e, passando agli esponenti, il verso **si inverte**: $x^2 - 3 < 2x$, cioè $x^2 - 2x - 3 < 0$. Le radici di $x^2 - 2x - 3 = 0$ sono $-1$ e $3$, e il trinomio è negativo tra le radici: $-1 < x < 3$. Chi non inverte il verso trova gli intervalli esterni; chi scrive $\frac{1}{4^x} = \left(\frac{1}{2}\right)^{-2x}$ sbaglia il segno dell'esponente e trova $-3 < x < 1$. Controllo con $x = 0$: $\left(\frac{1}{2}\right)^{-3} = 8$ e $\frac{1}{4^0} = 1$, e $8 > 1$ è vero.
```

**Moduli delle domande.** 1: percentuali (modulo 1) · 2: sistema lineare di tre equazioni (modulo 3) · 3: equazione fratta e condizioni di esistenza (modulo 4) · 4: dominio, immagine e funzione inversa (modulo 6) · 5: disequazione esponenziale con base minore di 1 (modulo 7).

## Simulazione 6

```simulazione
D: Siano $A = \{a, b, c\}$ e $B = \{1, 2\}$.
a) Quanti elementi ha l'insieme delle parti del prodotto cartesiano, $\mathcal{P}(A \times B)$?
N: 64
= Il prodotto cartesiano $A \times B$ contiene tutte le coppie ordinate $(u, v)$ con $u \in A$ e $v \in B$: sono $3 \cdot 2 = 6$, cioè $(a, 1), (a, 2), (b, 1), (b, 2), (c, 1), (c, 2)$. Un insieme con $n$ elementi ha $2^n$ sottoinsiemi, quindi $\mathcal{P}(A \times B)$ ha $2^6 = 64$ elementi (compresi l'insieme vuoto e $A \times B$ stesso). Errori tipici: rispondere $6$ (gli elementi di $A \times B$) oppure $2^3 \cdot 2^2 = 32$.
b) Quali delle seguenti affermazioni sono vere?
+ $(a, 1) \in A \times B$
+ $\{a\} \in \mathcal{P}(A)$
+ $\varnothing \subseteq A$
- $(1, a) \in A \times B$
- $\{a, b\} \in A$
= $(a, 1)$ ha il primo elemento in $A$ e il secondo in $B$: sta in $A \times B$. $(1, a)$ invece no: nelle coppie ordinate conta l'ordine, e $(1, a)$ sta in $B \times A$. Gli elementi di $\mathcal{P}(A)$ sono i sottoinsiemi di $A$, e $\{a\}$ è un sottoinsieme di $A$: quindi $\{a\} \in \mathcal{P}(A)$. L'insieme vuoto è sottoinsieme di qualunque insieme. Infine gli elementi di $A$ sono $a$, $b$, $c$: l'insieme $\{a, b\}$ è **contenuto** in $A$ ($\{a, b\} \subseteq A$), ma non è un suo elemento. Attenzione alla differenza tra $\in$ (tra un elemento e un insieme) e $\subseteq$ (tra due insiemi).

D: Quali dei seguenti polinomi sono fattori (cioè divisori) del polinomio $P(x) = x^4 - 5x^2 + 4$?
+ $x + 2$
+ $x^2 - 3x + 2$
+ $x^2 - 1$
- $x^2 + 4$
- $x - 4$
= $P(x)$ contiene solo potenze pari di $x$: pongo $t = x^2$ e ottengo $t^2 - 5t + 4$, che si scompone con due numeri di somma $-5$ e prodotto $4$: $(t - 1)(t - 4)$. Torno a $x$: $P(x) = (x^2 - 1)(x^2 - 4)$, e con la differenza di quadrati $$P(x) = (x - 1)(x + 1)(x - 2)(x + 2)$$ I fattori di $P(x)$ sono i prodotti di alcuni di questi quattro (a meno di una costante). $x + 2$ è uno di essi; $x^2 - 1 = (x - 1)(x + 1)$ e $x^2 - 3x + 2 = (x - 1)(x - 2)$ sono prodotti di due. $x^2 + 4$ non lo è: dividendo $P(x)$ per $x^2 + 4$ resta $40$. $x - 4$ non è fattore perché, per il teorema del resto, $P(4) = 256 - 80 + 4 = 180 \ne 0$.

D: Considera l'ellisse di equazione $\dfrac{x^2}{25} + \dfrac{y^2}{9} = 1$.
a) Quanto misura la distanza tra i due fuochi?
N: 8
= L'equazione è in forma canonica $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ con $a^2 = 25$ e $b^2 = 9$, cioè $a = 5$ e $b = 3$. Poiché $a > b$, i fuochi stanno sull'asse $x$, nei punti $(\pm c, 0)$ con $c^2 = a^2 - b^2 = 25 - 9 = 16$, quindi $c = 4$. I fuochi sono $(4, 0)$ e $(-4, 0)$ e distano $2c = 8$. Errore tipico: usare $c^2 = a^2 + b^2$, che vale per l'iperbole, non per l'ellisse. I vertici sono $(\pm 5, 0)$ e $(0, \pm 3)$.
b) Vero o falso: l'iperbole di equazione $\dfrac{x^2}{9} - \dfrac{y^2}{7} = 1$ ha gli stessi fuochi dell'ellisse.
+ Vero
- Falso
= Anche l'iperbole in forma canonica $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ ha i fuochi sull'asse $x$, nei punti $(\pm c, 0)$, ma per l'iperbole $c^2 = a^2 + b^2$ (per l'ellisse invece $c^2 = a^2 - b^2$). Qui $a^2 = 9$ e $b^2 = 7$: $c^2 = 9 + 7 = 16$ e $c = 4$. I fuochi sono $(4, 0)$ e $(-4, 0)$, gli stessi dell'ellisse: è vero. Chi usa la formula dell'ellisse trova $c^2 = 9 - 7 = 2$ e risponde falso. Della stessa iperbole: i vertici sono $(\pm 3, 0)$ e gli asintoti sono le rette $y = \pm\frac{b}{a}x = \pm\frac{\sqrt{7}}{3}x$. Quando $a = b$ l'iperbole si dice equilatera e i suoi asintoti sono le bisettrici $y = \pm x$.

D: Considera la funzione definita a tratti $f(x) = \begin{cases} x^2 - 1 & \text{se } x < 1 \\ 3 - 2x & \text{se } x \ge 1 \end{cases}$. Quali delle seguenti affermazioni sono vere?
+ $f(f(2)) = 0$
+ gli zeri di $f$ sono $x = -1$ e $x = \frac{3}{2}$
+ $f$ non è iniettiva
- $f$ è continua in $x = 1$
- $f$ è limitata superiormente
= Per calcolare $f$ in un punto bisogna prima capire quale tratto usare. $f(2)$: $2 \ge 1$, quindi $f(2) = 3 - 4 = -1$; poi $f(-1)$: $-1 < 1$, quindi $f(-1) = 1 - 1 = 0$. Dunque $f(f(2)) = 0$. Zeri: nel primo tratto $x^2 - 1 = 0$ dà $x = \pm 1$, ma il tratto vale solo per $x < 1$, quindi resta $x = -1$; nel secondo tratto $3 - 2x = 0$ dà $x = \frac{3}{2}$, che rispetta $x \ge 1$. Gli zeri sono $-1$ e $\frac{3}{2}$ (attenzione: $f(1) = 3 - 2 = 1$, non $0$). $f$ non è iniettiva, perché assume il valore $0$ due volte. Non è continua in $1$: avvicinandosi a $1$ da sinistra i valori $x^2 - 1$ si avvicinano a $0$, ma $f(1) = 1$, quindi il grafico fa un salto. Infine per $x$ molto negativo $x^2 - 1$ diventa grande quanto si vuole: $f$ non è limitata superiormente.

D: Considera l'equazione $2\sin^2 x - \sin x - 1 = 0$.
a) Quante soluzioni ha nell'intervallo $[0, 2\pi)$?
N: 3
= È un'equazione di secondo grado in $\sin x$. Pongo $t = \sin x$: $2t^2 - t - 1 = 0$, con $\Delta = 1 + 8 = 9$ e $t = \frac{1 \pm 3}{4}$, cioè $t = 1$ oppure $t = -\frac{1}{2}$, entrambi accettabili perché compresi tra $-1$ e $1$. $\sin x = 1$ ha in $[0, 2\pi)$ la sola soluzione $x = \frac{\pi}{2}$. $\sin x = -\frac{1}{2}$ ha due soluzioni, nel terzo e nel quarto quadrante: $x = \pi + \frac{\pi}{6} = \frac{7}{6}\pi$ e $x = 2\pi - \frac{\pi}{6} = \frac{11}{6}\pi$. In tutto $3$ soluzioni.
b) La somma delle soluzioni nell'intervallo $[0, 2\pi)$ è
+ $\frac{7}{2}\pi$
- $3\pi$
- $\frac{3}{2}\pi$
- $\frac{5}{2}\pi$
= Sommo le tre soluzioni trovate: $\frac{\pi}{2} + \frac{7}{6}\pi + \frac{11}{6}\pi = \frac{3\pi + 7\pi + 11\pi}{6} = \frac{21}{6}\pi = \frac{7}{2}\pi$. $3\pi$ è la somma di chi dimentica $\sin x = 1$ (solo $\frac{7}{6}\pi + \frac{11}{6}\pi$); $\frac{3}{2}\pi$ è la somma di chi sbaglia il segno e risolve $\sin x = \frac{1}{2}$ ($\frac{\pi}{6} + \frac{5}{6}\pi + \frac{\pi}{2}$); $\frac{5}{2}\pi$ è quella di chi sbaglia il segno di entrambe le radici e risolve $\sin x = \frac{1}{2}$ e $\sin x = -1$ ($\frac{\pi}{6} + \frac{5}{6}\pi + \frac{3}{2}\pi$).
```

**Moduli delle domande.** 1: prodotto cartesiano e insieme delle parti (modulo 1) · 2: scomposizione di un polinomio (modulo 2) · 3: ellisse e iperbole (modulo 5) · 4: funzione definita a tratti (modulo 6) · 5: equazione goniometrica di 2° grado (modulo 8).

## Simulazione 7

```simulazione
D: Considera l'equazione $(k - 1)x^2 - 2kx + k + 3 = 0$, dove $k$ è un parametro reale.
a) L'equazione ha due soluzioni reali distinte se e solo se
+ $k < \frac{3}{2}$ e $k \ne 1$
- $k < \frac{3}{2}$
- $k > \frac{3}{2}$
- $k \le \frac{3}{2}$ e $k \ne 1$
= Due soluzioni distinte richiedono un'equazione di secondo grado, quindi $k - 1 \ne 0$, cioè $k \ne 1$, e un discriminante positivo. Il coefficiente di $x$ è pari ($-2k$), quindi conviene $\frac{\Delta}{4} = \left(\frac{b}{2}\right)^2 - ac$: $$\frac{\Delta}{4} = k^2 - (k - 1)(k + 3) = k^2 - (k^2 + 2k - 3) = 3 - 2k$$ e $3 - 2k > 0$ per $k < \frac{3}{2}$. Mettendo insieme: $k < \frac{3}{2}$ e $k \ne 1$. Con $k = \frac{3}{2}$ il discriminante è nullo (due soluzioni coincidenti): per questo «$k \le \frac{3}{2}$ e $k \ne 1$» è sbagliata. «$k < \frac{3}{2}$» dimentica il caso $k = 1$, che il punto b) esamina.
b) Vero o falso: per $k = 1$ l'equazione ha esattamente una soluzione reale.
+ Vero
- Falso
= Per $k = 1$ il termine in $x^2$ sparisce: $0 \cdot x^2 - 2x + 1 + 3 = 0$, cioè $-2x + 4 = 0$. È un'equazione di primo grado determinata, con l'unica soluzione $x = 2$: è vero. Quando il coefficiente di $x^2$ contiene un parametro, il caso in cui si annulla va sempre studiato a parte, perché lì la formula risolutiva non si può usare (si dividerebbe per $2a = 0$).

D: Quanti numeri interi soddisfano la disequazione $\sqrt{x + 5} > x - 1$?
N: 9
= È del tipo $\sqrt{f(x)} > g(x)$ con indice pari: le soluzioni sono l'unione di due sistemi. **Primo sistema**: $g(x) < 0$ e radicando non negativo, cioè $x - 1 < 0$ e $x + 5 \ge 0$. Qui la disequazione è sempre vera, perché una radice, che è $\ge 0$, è maggiore di un numero negativo: soluzioni $-5 \le x < 1$. **Secondo sistema**: $g(x) \ge 0$ ed elevo al quadrato, cioè $x \ge 1$ e $x + 5 > (x - 1)^2$. La seconda condizione diventa $x + 5 > x^2 - 2x + 1$, cioè $x^2 - 3x - 4 < 0$, con radici $-1$ e $4$: $-1 < x < 4$. Insieme a $x \ge 1$: $1 \le x < 4$. Unisco i due sistemi: $-5 \le x < 4$. Gli interi di questo intervallo sono $-5, -4, -3, -2, -1, 0, 1, 2, 3$, cioè $9$: $-5$ è compreso ($\sqrt{0} = 0 > -6$), $4$ no ($\sqrt{9} = 3$ non è maggiore di $3$). Chi eleva subito al quadrato senza distinguere i casi trova $-1 < x < 4$ e conta solo $4$ interi, perdendo i valori da $-5$ a $-1$, che invece vanno bene: con $x = -4$ si ha $\sqrt{1} = 1 > -5$.

D: Considera la circonferenza $x^2 + y^2 = 5$ e il punto $P = (0, 5)$, esterno alla circonferenza.
a) Quali delle seguenti rette passano per $P$ e sono tangenti alla circonferenza?
+ $y = 2x + 5$
+ $y = -2x + 5$
- $y = x + 5$
- $y = 2x - 5$
- $y = 5$
= Le rette per $P$ (il fascio di centro $P$) sono $y = mx + 5$, più la retta verticale $x = 0$, che passa per il centro e quindi è secante. La circonferenza ha centro $O = (0, 0)$ e raggio $\sqrt{5}$. Scrivo la retta come $mx - y + 5 = 0$ e impongo che la distanza dal centro sia uguale al raggio: $$\frac{|5|}{\sqrt{m^2 + 1}} = \sqrt{5} \quad\Rightarrow\quad 25 = 5(m^2 + 1) \quad\Rightarrow\quad m^2 = 4$$ quindi $m = 2$ oppure $m = -2$. Le altre: $y = x + 5$ dista $\frac{5}{\sqrt{2}} > \sqrt{5}$ dal centro, quindi è esterna; $y = 5$ dista $5$, anch'essa esterna; $y = 2x - 5$ è tangente (dista $\frac{5}{\sqrt{5}} = \sqrt{5}$) ma non passa per $P$, perché per $x = 0$ dà $y = -5$.
b) Qual è l'ascissa del punto di contatto tra la circonferenza e la tangente con coefficiente angolare positivo?
N: -2
= Metto a sistema $y = 2x + 5$ con $x^2 + y^2 = 5$: $x^2 + (2x + 5)^2 = 5$, cioè $5x^2 + 20x + 20 = 0$ e, dividendo per $5$, $x^2 + 4x + 4 = (x + 2)^2 = 0$. Il discriminante nullo conferma la tangenza; la soluzione doppia è $x = -2$ e il punto di contatto è $(-2, 1)$. Controllo: $(-2)^2 + 1^2 = 5$. In alternativa: il raggio che arriva nel punto di contatto è perpendicolare alla tangente, quindi sta sulla retta $y = -\frac{1}{2}x$; intersecandola con $y = 2x + 5$ si ritrova $x = -2$.

D: L'insieme delle soluzioni della disequazione $\log_{\frac{1}{3}}(x - 1) + \log_{\frac{1}{3}}(x + 1) \ge -1$ è
+ $(1, 2]$
- $[-2, 2]$
- $[2, +\infty)$
- $(-\infty, -2] \cup [2, +\infty)$
= Condizioni di esistenza: $x - 1 > 0$ e $x + 1 > 0$, cioè $x > 1$. Con queste condizioni uso la proprietà del prodotto e scrivo anche $-1$ come logaritmo in base $\frac{1}{3}$: $-1 = \log_{\frac{1}{3}} 3$, perché $\left(\frac{1}{3}\right)^{-1} = 3$. La disequazione diventa $\log_{\frac{1}{3}}(x^2 - 1) \ge \log_{\frac{1}{3}} 3$. La base è compresa tra $0$ e $1$, quindi il logaritmo è decrescente e, passando agli argomenti, il verso **si inverte**: $x^2 - 1 \le 3$, cioè $x^2 \le 4$, cioè $-2 \le x \le 2$. Intersecando con $x > 1$: $1 < x \le 2$. Controllo con $x = 2$: $\log_{\frac{1}{3}} 1 + \log_{\frac{1}{3}} 3 = 0 - 1 = -1$, e $-1 \ge -1$ è vero. Le altre opzioni: $[-2, 2]$ dimentica le condizioni di esistenza, $[2, +\infty)$ non inverte il verso, $(-\infty, -2] \cup [2, +\infty)$ fa entrambi gli errori.

D: Nell'intervallo $[0, 2\pi]$, le soluzioni della disequazione $2\sin^2 x + 3\cos x - 3 > 0$ sono
+ $\left(0, \frac{\pi}{3}\right) \cup \left(\frac{5}{3}\pi, 2\pi\right)$
- $\left[0, \frac{\pi}{3}\right) \cup \left(\frac{5}{3}\pi, 2\pi\right]$
- $\left(\frac{\pi}{3}, \frac{5}{3}\pi\right)$
- $\left(0, \frac{\pi}{6}\right) \cup \left(\frac{11}{6}\pi, 2\pi\right)$
= Porto tutto al coseno con la relazione fondamentale, $\sin^2 x = 1 - \cos^2 x$: $2 - 2\cos^2 x + 3\cos x - 3 > 0$, cioè $-2\cos^2 x + 3\cos x - 1 > 0$; cambio segno e verso: $2\cos^2 x - 3\cos x + 1 < 0$. Con $t = \cos x$: $2t^2 - 3t + 1 < 0$, con radici $t = \frac{1}{2}$ e $t = 1$; il trinomio è negativo tra le radici: $\frac{1}{2} < \cos x < 1$. Sulla circonferenza goniometrica $\cos x > \frac{1}{2}$ per $0 \le x < \frac{\pi}{3}$ oppure $\frac{5}{3}\pi < x \le 2\pi$; tolgo i punti in cui $\cos x = 1$, cioè $x = 0$ e $x = 2\pi$, e resta $\left(0, \frac{\pi}{3}\right) \cup \left(\frac{5}{3}\pi, 2\pi\right)$. $\left[0, \frac{\pi}{3}\right) \cup \left(\frac{5}{3}\pi, 2\pi\right]$ include $0$ e $2\pi$, dove il primo membro vale $0 + 3 - 3 = 0$, che non è $> 0$. $\left(\frac{\pi}{3}, \frac{5}{3}\pi\right)$ è l'errore di chi non cambia il verso; $\left(0, \frac{\pi}{6}\right) \cup \left(\frac{11}{6}\pi, 2\pi\right)$ confonde i valori notevoli ($\cos\frac{\pi}{6} = \frac{\sqrt{3}}{2}$, non $\frac{1}{2}$).
```

**Moduli delle domande.** 1: equazione di 2° grado con parametro (modulo 3) · 2: disequazione irrazionale (modulo 4) · 3: rette tangenti a una circonferenza da un punto esterno (modulo 5) · 4: disequazione logaritmica con base minore di 1 (modulo 7) · 5: disequazione goniometrica (modulo 8).

## Simulazione 8

```simulazione
D: Sia $X = \{1, 2, 3, 4, 5\}$.
a) Quanti sottoinsiemi di $X$ contengono sia $1$ sia $2$?
N: 8
= Un sottoinsieme che contiene $1$ e $2$ è deciso dalla scelta degli altri suoi elementi, cioè da un sottoinsieme qualsiasi di $\{3, 4, 5\}$: per ognuno dei tre elementi scelgo se metterlo o no. Un insieme con $3$ elementi ha $2^3 = 8$ sottoinsiemi. Eccoli: $\{1, 2\}$, $\{1, 2, 3\}$, $\{1, 2, 4\}$, $\{1, 2, 5\}$, $\{1, 2, 3, 4\}$, $\{1, 2, 3, 5\}$, $\{1, 2, 4, 5\}$ e $X$. In tutto $X$ ha $2^5 = 32$ sottoinsiemi, e un quarto di essi contiene sia $1$ sia $2$.
b) Quali delle seguenti affermazioni sono vere?
+ se $n$ è un numero intero e $n^2$ è dispari, allora $n$ è dispari
- la somma di due numeri irrazionali è sempre un numero irrazionale
+ il prodotto di un numero razionale diverso da zero per un numero irrazionale è irrazionale
- per ogni $a, b \in \R$, se $a < b$ allora $a^2 < b^2$
= «Se $n^2$ è dispari, allora $n$ è dispari»: vera. Dimostro la contronominale, «se $n$ è pari, allora $n^2$ è pari»: se $n = 2h$, allora $n^2 = 4h^2 = 2 \cdot 2h^2$, che è pari. Un'implicazione e la sua contronominale sono equivalenti. «La somma di due irrazionali è sempre irrazionale»: falsa, controesempio $\sqrt{2} + (-\sqrt{2}) = 0$, che è razionale. «Il prodotto di un razionale non nullo per un irrazionale è irrazionale»: vera, per assurdo. Se $q \ne 0$ è razionale, $\alpha$ è irrazionale e $q\alpha = r$ fosse razionale, allora $\alpha = \frac{r}{q}$ sarebbe un quoziente di razionali, quindi razionale: contraddizione. «Se $a < b$ allora $a^2 < b^2$»: falsa, controesempio $a = -3$ e $b = 1$: $-3 < 1$ ma $9 > 1$. Per dimostrare che una frase è falsa basta un controesempio; per dimostrare che è vera non bastano gli esempi, serve un ragionamento valido in tutti i casi.

D: Il polinomio $P(x) = x^3 + ax^2 + bx - 6$ è divisibile sia per $x - 1$ sia per $x + 2$.
a) Quanto vale $a$?
N: 4
= Per il teorema del resto, $P(x)$ è divisibile per $x - 1$ se $P(1) = 0$ e per $x + 2$ se $P(-2) = 0$. $P(1) = 1 + a + b - 6 = 0$ dà $a + b = 5$. $P(-2) = -8 + 4a - 2b - 6 = 0$ dà $4a - 2b = 14$, cioè $2a - b = 7$. Sommo le due equazioni: $3a = 12$, quindi $a = 4$ e $b = 1$. Il polinomio è $P(x) = x^3 + 4x^2 + x - 6$.
b) Vero o falso: con i valori di $a$ e $b$ trovati, $P(x)$ è divisibile anche per $x + 3$.
+ Vero
- Falso
= Basta calcolare $P(-3) = -27 + 4 \cdot 9 - 3 - 6 = -27 + 36 - 9 = 0$: il resto è zero, quindi è vero. Si vede anche così: $P(x)$ è divisibile per $(x - 1)(x + 2) = x^2 + x - 2$ e il quoziente è di primo grado, del tipo $x + c$; confrontando i termini noti, $-2c = -6$, quindi $c = 3$ e $P(x) = (x - 1)(x + 2)(x + 3)$.

D: Considera le funzioni $f(x) = \sqrt{4 - x}$ e $g(x) = x^2$. Quali delle seguenti affermazioni sono vere?
+ il dominio di $f \circ g$ è $[-2, 2]$
+ $f \circ g$ è una funzione pari
+ l'immagine di $f \circ g$ è $[0, 2]$
- $(g \circ f)(x) = 4 - x$ per ogni $x \in \R$
- $f \circ g$ è iniettiva
= $(f \circ g)(x) = f(g(x)) = f(x^2) = \sqrt{4 - x^2}$. Dominio: il radicando deve essere non negativo, $4 - x^2 \ge 0$, cioè $-2 \le x \le 2$. È pari: $\sqrt{4 - (-x)^2} = \sqrt{4 - x^2}$. Immagine: $x^2$ varia tra $0$ e $4$, quindi $4 - x^2$ varia tra $0$ e $4$ e la sua radice tra $0$ (per $x = \pm 2$) e $2$ (per $x = 0$): l'immagine è $[0, 2]$. Non è iniettiva, proprio perché è pari: per esempio vale $\sqrt{3}$ sia in $1$ sia in $-1$. Infine $(g \circ f)(x) = \left(\sqrt{4 - x}\right)^2 = 4 - x$ solo dove $f$ è definita, cioè per $x \le 4$: per esempio $f(5) = \sqrt{-1}$ non esiste. Il grafico di $f \circ g$ è la semicirconferenza superiore di centro $O$ e raggio $2$.

D: Quanto vale la soluzione dell'equazione $\log_2 x + \log_4 x + \log_{16} x = 7$?
N: 16
= Condizione di esistenza: $x > 0$. Porto tutti i logaritmi in base $2$ con la formula del cambiamento di base, $\log_a x = \frac{\log_2 x}{\log_2 a}$: $\log_4 x = \frac{\log_2 x}{2}$ e $\log_{16} x = \frac{\log_2 x}{4}$. Chiamo $L = \log_2 x$: l'equazione diventa $L + \frac{L}{2} + \frac{L}{4} = 7$, cioè $\frac{7}{4}L = 7$, quindi $L = 4$ e $x = 2^4 = 16$, che rispetta $x > 0$. Verifica: $\log_2 16 + \log_4 16 + \log_{16} 16 = 4 + 2 + 1 = 7$.

D: Siano $\alpha$ e $\beta$ due angoli compresi tra $0$ e $\frac{\pi}{2}$, con $\sin\alpha = \frac{4}{5}$ e $\sin\beta = \frac{5}{13}$.
a) Quanto vale $\sin(\alpha + \beta)$?
+ $\frac{63}{65}$
- $\frac{33}{65}$
- $\frac{16}{65}$
- $\frac{56}{65}$
= Servono anche i coseni. Dalla relazione fondamentale, $\cos\alpha = \sqrt{1 - \frac{16}{25}} = \frac{3}{5}$ e $\cos\beta = \sqrt{1 - \frac{25}{169}} = \frac{12}{13}$, con il segno $+$ perché gli angoli sono nel primo quadrante. Formula di addizione: $$\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta = \frac{4}{5} \cdot \frac{12}{13} + \frac{3}{5} \cdot \frac{5}{13} = \frac{48 + 15}{65} = \frac{63}{65}$$ Le altre opzioni sono i valori di formule vicine: $\frac{33}{65} = \sin(\alpha - \beta)$, $\frac{16}{65} = \cos(\alpha + \beta)$, $\frac{56}{65} = \cos(\alpha - \beta)$.
b) Quanto vale $\cos(2\alpha)$?
N: -7/25
= Formula di duplicazione: $\cos(2\alpha) = \cos^2\alpha - \sin^2\alpha = \frac{9}{25} - \frac{16}{25} = -\frac{7}{25}$, cioè $-0{,}28$. Il risultato è negativo perché $\sin\alpha > \cos\alpha$, quindi $\alpha > \frac{\pi}{4}$ e $2\alpha > \frac{\pi}{2}$: l'angolo $2\alpha$ sta nel secondo quadrante, dove il coseno è negativo.
```

**Moduli delle domande.** 1: insieme delle parti, dimostrazioni e controesempi (modulo 1) · 2: divisibilità di un polinomio con due parametri (modulo 2) · 3: composizione di funzioni, dominio e immagine (modulo 6) · 4: equazione logaritmica con cambiamento di base (modulo 7) · 5: formule di addizione e di duplicazione (modulo 8).

---

<!-- FILE: ai/FORMATO.md -->
> File: `ai/FORMATO.md`

# Formato dei file Markdown del sito

I file in `ai/` sono la fonte del sito: `strumenti/genera.mjs` li trasforma in pagine HTML. Sono Markdown normale più alcune aggiunte. Se sei un'AI e leggi questi file, qui trovi come interpretarli (per esempio: nei quiz la riga che inizia con `+` è la risposta giusta).

Controllo: `node strumenti/verifica.mjs ai/moduli/03-equazioni.md` segnala formule sbagliate, blocchi non chiusi, quiz senza risposta giusta e così via.

## Frontmatter dei moduli

```yaml
---
modulo: 3
titolo: "Equazioni e disequazioni di 1° e 2° grado, sistemi"
breve: "Una riga che dice cosa impari."
ore: 7                     # ore di studio stimate
unita:                     # unità del corso ufficiale coperte
  - "3.1 Equazioni e disequazioni di 1° grado"
  - "3.2 Equazioni e disequazioni di 2° grado"
  - "3.3 Sistemi di equazioni"
---
```

## Link tra le pagine

`[testo](https://donflammer.github.io/unito-ofa-matematica/info.html)` punta a una pagina del sito (qui a <https://donflammer.github.io/unito-ofa-matematica/info.html>): funziona sia nelle pagine generate sia nel file unico per le AI. Tra un modulo e l'altro basta il nome del file: `[modulo 3](https://donflammer.github.io/unito-ofa-matematica/moduli/03-equazioni-disequazioni.html)`.

## Titoli

`##` per le sezioni (vanno nell'indice laterale), `###` per le sottosezioni. Mai `#`: il titolo della pagina viene dal frontmatter. Niente titoli dentro riquadri ed esercizi.

## Formule

- In linea: `$x^2 - 5x + 6 = 0$`. Niente spazio subito dopo il `$` iniziale né subito prima di quello finale.
- A blocco, su righe proprie:

  ```
  $$
  x_{1,2} = \frac{-b \pm \sqrt{\Delta}}{2a}
  $$
  ```
- LaTeX di KaTeX. Scorciatoie: `\R \N \Z \Q \C` per gli insiemi numerici.
- Decimali con la virgola: `$3{,}5$` (le graffe tolgono lo spazio dopo la virgola).
- Un dollaro vero si scrive `\$`.
- Le formule funzionano anche nelle tabelle, compreso il valore assoluto `$|x|$`.

## Riquadri

```
> [!TIPO] Titolo facoltativo, anche con $formule$
> Testo del riquadro, anche su più righe,
> con elenchi, formule a blocco e grafici.
```

| Tipo | Etichetta | Quando |
|---|---|---|
| `DEF` | Definizione | definizioni |
| `PROP` | Regola | proprietà, formule, teoremi da ricordare |
| `METODO` | Metodo | procedimento passo per passo |
| `ESEMPIO` | Esempio | esempio risolto per intero |
| `TRAPPOLA` | Errore frequente | errori tipici (in rosso) |
| `TEST` | Nella prova | come l'argomento compare nel test OFA |
| `NOTA` | Nota | osservazioni, curiosità, collegamenti |

Definizioni, regole ed esempi si numerano da soli dentro ogni modulo, come in un libro, ognuno con la sua serie: nel modulo 3 «Definizione 3.1», «Definizione 3.2», …, «Regola 3.1», …, «Esempio 3.1», ….

## Esercizi

```
::: esercizio medio Titolo facoltativo
Testo dell'esercizio (Markdown, formule, grafici).
::: soluzione
Soluzione passo per passo.
:::
```

Livelli: `base`, `medio`, `test` (come le domande del test OFA). Gli esercizi sono numerati da soli.

## Quiz

````
```quiz
D: Testo della domanda, anche con $formule$.
+ risposta giusta
- risposta sbagliata
- risposta sbagliata
- risposta sbagliata
= Spiegazione, mostrata dopo la verifica.

D: Domanda con più risposte giuste: basta segnarle tutte con +.
+ giusta
+ giusta
- sbagliata
- sbagliata
= Spiegazione.

D: Vero o falso: $(a+b)^2 = a^2 + b^2$.
- Vero
+ Falso
= Manca il doppio prodotto $2ab$.

D: Domanda a risposta numerica.
N: -3/4
= Spiegazione.
```
````

- `D:` apre una domanda; `+` risposta giusta, `-` risposta sbagliata; `=` spiegazione (obbligatoria).
- `N:` risposta numerica: intero, decimale (`1,5` o `1.5`) o frazione (`-3/4`); tolleranza facoltativa `N: 1,41 ± 0,01`. Chi risponde può scrivere `0,75`, `0.75` o `3/4`.
- Più righe `+` = domanda a scelta multipla ("una o più risposte giuste").
- Esattamente le opzioni `Vero` e `Falso` = domanda vero/falso.
- Le opzioni vengono mescolate quando il sito viene generato (non quelle vero/falso): l'ordine nel file non conta e le spiegazioni non devono citare lettere come "(B)".
- Una riga che non inizia con un marcatore continua la riga precedente.
- ```` ```quiz diagnostico ````: test d'ingresso, ogni domanda indica il modulo, `D(M3): …`; alla fine il sito dice quali moduli ripassare.

## Simulazioni del test

Stessa sintassi dei quiz, nel blocco ```` ```simulazione ````, con esattamente 5 domande da 2 punti (sufficienza 6/10, 45 minuti, come il test vero). Una domanda può avere due sotto-domande da 1 punto:

```
D: Considera l'equazione $x^2 - 5x + 6 = 0$.
a) Quante soluzioni reali ha?
N: 2
= Spiegazione.
b) La somma delle soluzioni vale
+ $5$
- $-5$
= Spiegazione.
```

Un titolo facoltativo si scrive con `# Titolo` come prima riga del blocco.

## Grafici

````
```grafico
titolo: La parabola $y = x^2 - 4x + 3$
x: -1 5                      # finestra: x minimo e massimo
y: -2 5
f: x^2 - 4x + 3 | $y = x^2 - 4x + 3$
f: 2x - 5 | rosso | tratteggio
fy: y^2 - 1                  # curva x = g(y)
punto: 1 0 | $A$
punto: 2 -1 | vuoto | $V$ | s
segmento: 0 0 3 4
freccia: 0 0 1 2
poligono: 0 0 4 0 4 3 | $T$
cerchio: 0 0 2               # centro x, centro y, raggio
ellisse: 0 0 3 2             # centro, semiasse orizzontale, semiasse verticale
arco: 0 0 1 0 pi/3           # centro, raggio, angolo iniziale e finale (radianti)
verticale: 1 | tratteggio | $x = 1$
orizzontale: 2
testo: 3 2 | $\Delta > 0$
area: x^2 - 4x + 3 | 0 | 1 3 | rosso    # zona tra due curve per x da 1 a 3
```
````

- Espressioni: `+ - * / ^`, moltiplicazione implicita (`2x`, `3(x+1)`), `sqrt abs exp ln log10 log2 log(b, x) sin cos tan asin acos atan`, costanti `pi` ed `e`. Le coordinate si scrivono senza spazi interni (`1+sqrt(2)`).
- Opzioni dopo `|`: `rosso`, `grigio`, `tratteggio`, `sottile`, `spesso`, `tenue`, `vuoto` (punto vuoto), `da=…` e `a=…` (limitano una curva), la posizione dell'etichetta (`n s e o ne no se so c`) e l'etichetta `$…$` o `"testo"`.
- Altre righe: `assi: no`, `griglia: no`, `nomi: t s` (nomi degli assi al posto di x e y; le espressioni si scrivono comunque in `x`), `passo-x: pi/2` (tacche in multipli di π), `passo-y: 2`, `proporzioni: libere` (di norma 1 unità su x = 1 unità su y).
- Le righe `testo:` sono grigie; con `bianco` o `rosso` prendono il colore delle curve.
- Se la finestra parte da 0 (per esempio `x: 0 10`), i numeri delle tacche vanno dal lato interno dell'asse.
- Asintoti e salti vengono interrotti da soli.

## Retta dei numeri

````
```retta
titolo: Soluzioni di $x^2 - 4 > 0$
da: -4 4
int: (-inf, -2)
int: (2, +inf)
int: [0, 1]
punto: 3 | vuoto
tacca: 1+sqrt(2) | $1+\sqrt2$
```
````

Parentesi tonda = estremo escluso (pallino vuoto), quadra = incluso (pallino pieno). Il titolo può contenere `|` (per esempio `$|x| < 2$`); nelle altre righe `|` separa le opzioni. Le etichette con frazioni o radici allargano la figura da sole.

## Checklist

````
```checklist
So calcolare il discriminante e dire quante soluzioni ci sono
So risolvere una disequazione di 2° grado con la parabola
```
````

Ogni riga è una voce da spuntare. Il sito ricorda le spunte nel browser.
