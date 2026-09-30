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
