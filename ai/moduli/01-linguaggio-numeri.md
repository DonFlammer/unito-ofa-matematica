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
