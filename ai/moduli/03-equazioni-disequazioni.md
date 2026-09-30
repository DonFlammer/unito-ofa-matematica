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
