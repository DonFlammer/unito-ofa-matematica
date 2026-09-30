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
