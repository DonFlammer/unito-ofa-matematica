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
