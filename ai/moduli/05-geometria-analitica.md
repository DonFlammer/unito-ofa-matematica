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
