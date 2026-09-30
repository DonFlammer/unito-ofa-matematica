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
