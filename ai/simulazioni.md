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
