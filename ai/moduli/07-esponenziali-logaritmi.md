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
