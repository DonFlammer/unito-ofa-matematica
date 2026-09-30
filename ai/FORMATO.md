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

`[testo](sito:info.html)` punta a una pagina del sito (qui a <https://donflammer.github.io/unito-ofa-matematica/info.html>): funziona sia nelle pagine generate sia nel file unico per le AI. Tra un modulo e l'altro basta il nome del file: `[modulo 3](sito:moduli/03-equazioni-disequazioni.html)`.

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
