// Genera il sito dai file Markdown in ai/: home, appunti dei moduli, formulario, piano di studio,
// test d'ingresso, simulazioni, regole e il file unico per le AI.
// Uso (dalla cartella del sito): node strumenti/genera.mjs   ·   OFA_RADICE=<cartella> per costruire una copia di prova
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { compila, esc } from './ofamd.mjs';

// script in linea in fondo alla <head>, dopo i fogli di stile:
// - animazioni ridotte scelte prima: la classe meno-moto c'è già al primo disegno;
// - calcolo degli stili appena caricati. Serve alla dissolvenza tra le pagine: Chrome decide se farla (regola
//   @view-transition di sito.css) al primo fotogramma con gli stili calcolati fino a quel momento, e se il primo
//   fotogramma arriva prima di qualunque calcolo, come quando la pagina è già tutta scaricata (precaricata o dalla
//   cache), la dissolvenza salta. Misurato il 01/10/2026: senza questa lettura saltava in 3 cambi di pagina su 8.
// Politica di sicurezza dei contenuti (CSP): GitHub Pages non permette intestazioni HTTP, quindi va in un <meta>. Solo
// gli script del sito più quelli in linea qui sotto (con la loro impronta SHA-256), niente gestori in linea (onclick,
// onerror…), niente risorse esterne
const SCRIPT_MOTO = `try { if (localStorage.getItem('ofa:moto') === '"ridotto"') document.documentElement.classList.add('meno-moto'); } catch (e) {} getComputedStyle(document.documentElement).opacity;`;
// precaricamento delle pagine del sito (regole di speculazione): se il puntatore resta un attimo su un link, o lo si
// preme, il browser scarica già la pagina e il clic la apre senza aspettare la rete. Solo pagine .html della stessa
// origine; anche queste regole sono in linea, quindi la loro impronta sta nella CSP
const REGOLE_PRECARICO = '{"prefetch":[{"where":{"href_matches":"/*.html"},"eagerness":"moderate"}]}';
// Primo fotogramma di ogni pagina: il browser non disegna niente finché non ha letto il link «Salta al contenuto», che
// viene subito dopo stelle.js (link rel=expect, blocking=render). Così nel primo fotogramma ci sono già le stelle al
// loro posto, e con loro la barra, invece di un fotogramma nero mentre stelle.js arriva; stelle.js si chiede già nella
// <head> (preload), insieme ai fogli di stile, perché quell'attesa sia la più breve possibile.
const impronta = s => `'sha256-${createHash('sha256').update(s).digest('base64')}'`;
const CSP = `default-src 'none'; script-src 'self' ${impronta(SCRIPT_MOTO)} ${impronta(REGOLE_PRECARICO)}; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; base-uri 'none'; form-action 'none'`;
// indirizzi esterni (costanti e portale): solo https, sempre con escape
const httpsSicuro = url => { if (!/^https:\/\/[^\s"'<>]+$/.test(url)) throw new Error(`indirizzo esterno non valido (serve https): ${url}`); return esc(url); };

const R = process.env.OFA_RADICE || join(dirname(fileURLToPath(import.meta.url)), '..');
const leggi = p => readFileSync(join(R, p), 'utf8');
const esiste = p => existsSync(join(R, p));
const scrivi = (p, s) => { mkdirSync(dirname(join(R, p)), { recursive: true }); writeFileSync(join(R, p), s); };

const REPO = 'https://github.com/DonFlammer/unito-ofa-matematica';
const APPUNTI_PRIMO_ANNO = 'https://donflammer.github.io/unito-informatica/';
const PORTALE = 'https://www.ofa.unito.it/course/view.php?id=20';
const REQUISITI = 'https://laurea.informatica.unito.it/do/home.pl/View?doc=Requisiti_di_ammissione.html';
const ESSE3 = 'https://esse3.unito.it/ListaAppelliOfferta.do';
const AGGIORNATO = '30 settembre 2026';
const SITO_EN = 'https://donflammer.github.io/unito-ofa-maths/';

// la stessa pagina nella versione inglese (link «English» di ogni pagina)
const PAGINA_EN = { 'index.html': 'index.html', 'info.html': 'rules.html', 'piano.html': 'plan.html', 'simulazioni.html': 'mock-tests.html', 'test-ingresso.html': 'entry-test.html', 'formulario.html': 'formulas.html', 'corso.html': 'course.html', '404.html': 'index.html' };
const MODULI_EN = ['01-language-sets-numbers', '02-polynomials', '03-equations-inequalities', '04-rational-radical-absolute-value', '05-analytic-geometry', '06-functions', '07-exponentials-logarithms', '08-trigonometry'];
const ELENCO = [
  [1, '01-linguaggio-numeri', 'Linguaggio, insiemi, logica e numeri'],
  [2, '02-polinomi', 'Polinomi e scomposizione'],
  [3, '03-equazioni-disequazioni', 'Equazioni e disequazioni di 1° e 2° grado, sistemi'],
  [4, '04-fratte-irrazionali-modulo', 'Fratte, irrazionali e con valore assoluto'],
  [5, '05-geometria-analitica', 'Geometria analitica: retta e coniche'],
  [6, '06-funzioni', 'Funzioni reali di variabile reale'],
  [7, '07-esponenziali-logaritmi', 'Esponenziali e logaritmi'],
  [8, '08-trigonometria', 'Trigonometria'],
];

let errori = 0;
function compilaFile(percorso, richiedi = []) {
  const r = compila(leggi(percorso), { file: percorso, richiedi });
  r.errori.forEach(e => console.error('ERRORE ' + e));
  r.avvisi.forEach(e => console.error('avviso ' + e));
  errori += r.errori.length;
  return r;
}

const portale = JSON.parse(leggi('strumenti/portale.json'));
const moduli = ELENCO.map(([n, base, titolo]) => {
  const md = `ai/moduli/${base}.md`;
  if (!esiste(md)) return { n, base, titolo, pronto: false };
  const r = compilaFile(md, ['modulo', 'titolo', 'breve', 'ore', 'unita']);
  return { n, base, pronto: true, ...r, titolo: r.meta.titolo || titolo, url: `moduli/${base}.html` };
});
const pronti = moduli.filter(m => m.pronto);
// refusi del materiale ufficiale, modulo per modulo (sezione «Refusi nel materiale» di ai/corso-ufficiale.md)
const refusi = {};
if (esiste('ai/corso-ufficiale.md')) {
  const sezione = leggi('ai/corso-ufficiale.md').split(/^## /m).find(s => s.startsWith('Refusi nel materiale')) || '';
  for (const [, n, testo] of sezione.matchAll(/^### Modulo (\d+)\s*\n([\s\S]*?)(?=^### |(?![\s\S]))/gm)) refusi[n] = compila(testo.trim(), { file: 'ai/corso-ufficiale.md' }).html;
}
const datiModuli = pronti.map(m => ({ numero: m.n, titolo: m.titolo, ore: Number(m.meta.ore) || 6, unita: m.meta.unita || [], url: m.url }));
const sigleUnita = m => (m.meta?.unita || []).map(u => (String(u).match(/^\d+(?:\.\d+)+/) || [])[0]).filter(Boolean);

/* ---------- pezzi comuni ---------- */

const ICONA = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="#000"/><rect x="14" y="14" width="10" height="10" fill="#d7263f"/><path d="M14 50h36M14 39h36" stroke="#e8e5de" stroke-width="4"/></svg>');
const est = (url, testo, classe = 'link') => `<a class="${classe} esterno" href="${httpsSicuro(url)}" target="_blank" rel="noopener">${testo}</a>`;
const sep = '<span aria-hidden="true">/</span>';

function barra(r, attivo, lettura, urlEn) {
  const voce = (id, href, testo) => `<a href="${r}${href}"${attivo === id ? ' class="attivo" aria-current="page"' : ''}>${testo}</a>`;
  return `<header class="barra"><div class="contenitore barra-in">
<a class="logo" href="${r}index.html"><span class="logo-segno" aria-hidden="true"></span><span class="logo-nome">OFA di matematica</span><small>guida non ufficiale · Informatica UniTo</small></a>
<button class="menu-btn" type="button" aria-label="Apri il menu" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span></button>
<nav class="menu" id="menu" aria-label="Sezioni del sito">
${voce('appunti', 'index.html#programma', 'Appunti')}
${voce('formulario', 'formulario.html', 'Formulario')}
${voce('test', 'test-ingresso.html', "Test d'ingresso")}
${voce('piano', 'piano.html', 'Piano di studio')}
${voce('simulazioni', 'simulazioni.html', 'Simulazioni')}
${voce('info', 'info.html', 'Regole e date')}
<a class="lingua" href="${urlEn}" hreflang="en" lang="en">English</a>
<button type="button" class="anim-menu" id="anim-toggle" aria-pressed="false" aria-label="Animazioni ridotte" title="Animazioni ridotte: resta solo lo sfondo nero"><span class="anim-icona" aria-hidden="true"></span><span class="anim-testo">Animazioni ridotte</span></button>
</nav>
</div>${lettura ? '<span class="progresso-lettura" aria-hidden="true"></span>' : ''}</header>`;
}

function piede(r) {
  return `<footer class="piede"><div class="contenitore">
<div class="piede-in">
<div>
<h4>OFA di matematica</h4>
<p>Guida non ufficiale al recupero dell'OFA di matematica per il corso di laurea in Informatica dell'Università di Torino, a.a. 2026/27. Aggiornata al ${AGGIORNATO}.</p>
<p>Guida non ufficiale, sul programma del corso OFA e sulle pagine ufficiali di UniTo; la pubblico io, DonFlammer. Può contenere errori: per regole, date e iscrizioni valgono solo le fonti ufficiali. ${est(`${REPO}/blob/main/AVVERTENZE.md`, 'Avvertenze')}</p>
</div>
<div>
<h4>La guida</h4>
<ul>
<li><a href="${r}index.html#programma">Appunti degli otto moduli</a></li>
<li><a href="${r}formulario.html">Formulario</a></li>
<li><a href="${r}test-ingresso.html">Test d'ingresso</a></li>
<li><a href="${r}piano.html">Piano di studio</a></li>
<li><a href="${r}simulazioni.html">Simulazioni della prova</a></li>
<li><a href="${r}info.html">Regole, date e contatti</a></li>
<li><a href="${r}corso.html">Il corso ufficiale e i refusi</a></li>
<li>${est(`${REPO}/tree/main/ai`, 'Contesto per le AI', '')}</li>
</ul>
</div>
<div>
<h4>Fonti e servizi ufficiali</h4>
<ul>
<li>${est(PORTALE, 'Corso «OFA Matematica»', '')}</li>
<li>${est(REQUISITI, 'Requisiti di ammissione e OFA', '')}</li>
<li>${est('https://my.unito.it', 'MyUnito', '')}</li>
<li>${est(ESSE3, 'Bacheca appelli di Esse3', '')}</li>
<li>${est(APPUNTI_PRIMO_ANNO, 'Appunti del primo anno di Informatica', '')}</li>
<li>${est('https://t.me/rapsodico', 'Contatto: Telegram @rapsodico', '')}</li>
<li>${est(REPO, 'Sorgente su GitHub', '')}</li>
</ul>
</div>
</div>
<div class="piede-fondo"><span>Licenza CC BY-NC-SA 4.0 · DonFlammer · non è un sito dell'Università di Torino</span><button type="button" class="interruttore" id="interruttore-moto" aria-pressed="false"><span class="pista" aria-hidden="true"></span>Animazioni ridotte</button></div>
</div></footer>`;
}

function pagina({ percorso, titolo, descrizione, corpo, attivo = '', lettura = false, katex = true, dati = {}, datiModuli: dm = false }) {
  const r = percorso.includes('/') ? '../' : '';
  const modEn = percorso.match(/^moduli\/0(\d)-/);
  if (modEn) PAGINA_EN[percorso] = `modules/${MODULI_EN[Number(modEn[1]) - 1]}.html`;
  const attr = Object.entries(dati).map(([k, v]) => ` data-${k}="${esc(v)}"`).join('');
  const urlEn = SITO_EN + (PAGINA_EN[percorso] || 'index.html');
  const html = `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta http-equiv="Content-Security-Policy" content="${CSP}">
<meta name="referrer" content="strict-origin-when-cross-origin">
<script src="${r}assets/js/memoria.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(titolo)}</title>
<meta name="description" content="${esc(descrizione)}">
<meta name="theme-color" content="#000000">
<meta name="color-scheme" content="dark">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(titolo)}">
<meta property="og:description" content="${esc(descrizione)}">
<link rel="alternate" hreflang="en" href="${urlEn}">
<link rel="icon" href="${ICONA}">
<link rel="preload" href="${r}assets/fonts/source-serif-normal-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${r}assets/js/stelle.js" as="script">
<link rel="stylesheet" href="${r}assets/css/sito.css">
<link rel="expect" href="#salta-al-contenuto" blocking="render">
<script type="speculationrules">${REGOLE_PRECARICO}</script>
${katex ? `<link rel="stylesheet" href="${r}assets/katex/katex.min.css">\n` : ''}<script>${SCRIPT_MOTO}</script>
</head>
<body data-radice="${r}"${attr}>
<canvas id="stelle" aria-hidden="true"></canvas>
<script src="${r}assets/js/stelle.js"></script>
<a class="salta" id="salta-al-contenuto" href="#contenuto">Salta al contenuto</a>
${barra(r, attivo, lettura, urlEn)}
<main id="contenuto">
${corpo}
</main>
${piede(r)}
${dm ? `<script type="application/json" id="dati-moduli">${JSON.stringify(datiModuli).replace(/</g, '\\u003c')}</script>\n` : ''}<script src="${r}assets/js/sito.js" defer></script>
<script src="${r}assets/js/studio.js" defer></script>
</body>
</html>
`;
  scrivi(percorso, html.replace(/href="sito:/g, `href="${r}`));
}

function indice(toc, extra = []) {
  const voci = [...toc, ...extra].map(t => `<li class="l${t.livello}"><a href="#${t.id}">${t.html}</a></li>`).join('');
  return `<aside class="indice" aria-label="Indice della pagina"><details open><summary>Indice della pagina</summary><p class="indice-titolo">In questa pagina</p><ol>${voci}</ol></details></aside>`;
}

function testata({ briciole, occhiello = '', titolo, sotto, extra = '' }) {
  return `<section class="testata-pagina"><div class="contenitore">
<nav class="briciole entra" style="--i:0" aria-label="Percorso">${briciole}</nav>
${occhiello ? `<span class="occhiello entra" style="--i:1">${occhiello}</span>` : ''}
<h1 class="entra" style="--i:1">${titolo}</h1>
${sotto ? `<p class="sotto entra" style="--i:2">${sotto}</p>` : ''}
${extra ? `<div class="entra" style="--i:3">${extra}</div>` : ''}
</div></section>`;
}

/* ---------- appunti dei moduli ---------- */

for (const [k, m] of moduli.entries()) {
  if (!m.pronto) continue;
  const p = portale.find(x => x.modulo === m.n);
  const extra = `<div class="meta-chip"><span>circa ${esc(m.meta.ore)} ore di studio</span>${est(p ? p.url : PORTALE, 'materiale sul portale OFA', '')}<a href="../formulario.html#modulo-${m.n}">voci nel formulario</a><span class="mt-progresso"><span class="barra-avanz"><i></i></span><small>checklist 0 di 0</small></span></div>`;
  const portaleHtml = p ? `<section class="portale" aria-labelledby="sul-portale-ofa"><h2 id="sul-portale-ofa">Sul portale OFA</h2>
<p>La prova è costruita su questo materiale. Dopo gli appunti, leggi il libro di ogni unità, prova i fogli «Esplora», svolgi gli esercizi in PDF e i test online. Serve l'accesso con le credenziali SCU e l'iscrizione al corso «OFA Matematica»; come usare ogni attività è spiegato nella pagina <a href="../corso.html">Il corso ufficiale</a>.</p>
<ul class="portale-lista">${p.attivita.map(a => `<li><a href="${httpsSicuro(a.url)}" target="_blank" rel="noopener"><span class="tipo">${esc(a.tipo)}</span><span>${esc(a.nome)}</span></a></li>`).join('')}</ul>
${refusi[m.n] ? `<h3 id="refusi-noti">Refusi noti in questo materiale</h3>
<p>Nel materiale di questo modulo sono stati trovati alcuni refusi, verificati sulle pagine e sui PDF originali; negli appunti c'è la versione corretta.</p>
${refusi[m.n]}<p class="nota-piccola"><a href="../corso.html#modulo-${m.n}">I refusi di tutti i moduli</a>, con le avvertenze.</p>` : ''}</section>` : '';
  const prec = moduli.slice(0, k).reverse().find(x => x.pronto), succ = moduli.slice(k + 1).find(x => x.pronto);
  const nav = `<nav class="nav-moduli" aria-label="Altri moduli">
${prec ? `<a class="prec" href="${prec.base}.html"><span class="dir">← Modulo ${prec.n}</span><b>${esc(prec.titolo)}</b></a>` : '<span></span>'}
${succ ? `<a class="succ" href="${succ.base}.html"><span class="dir">Modulo ${succ.n} →</span><b>${esc(succ.titolo)}</b></a>` : '<a class="succ" href="../simulazioni.html"><span class="dir">Dopo i moduli →</span><b>Le simulazioni della prova</b></a>'}
</nav>`;
  const corpo = testata({
    briciole: `<a href="../index.html">OFA di matematica</a>${sep}<a href="../index.html#programma">Appunti</a>${sep}<span>Modulo ${m.n}</span>`,
    occhiello: `<span class="rosso">Modulo ${m.n}</span> · unità ${sigleUnita(m).join(', ')}`,
    titolo: esc(m.titolo), sotto: esc(m.meta.breve), extra,
  }) + `<div class="contenitore pagina-modulo">${indice(m.toc, p ? [{ livello: 2, id: 'sul-portale-ofa', html: 'Sul portale OFA' }, ...(refusi[m.n] ? [{ livello: 3, id: 'refusi-noti', html: 'Refusi noti' }] : [])] : [])}<article class="testo lungo">${m.html}${portaleHtml}${nav}</article></div>`;
  pagina({ percorso: m.url, titolo: `Modulo ${m.n}. ${m.titolo} — OFA di matematica`, descrizione: `Appunti per l'OFA di matematica di Informatica UniTo, modulo ${m.n}: ${m.meta.breve}`, corpo, attivo: 'appunti', lettura: true, dati: { modulo: m.n } });
}

/* ---------- formulario ---------- */

{
  const toc = [], blocchi = [];
  for (const m of pronti) {
    const regole = m.riquadri.filter(q => q.tipo === 'DEF' || q.tipo === 'PROP');
    if (!regole.length) continue;
    const id = `modulo-${m.n}`;
    toc.push({ livello: 2, id, html: `Modulo ${m.n}` });
    let html = `<h2 id="${id}">Modulo ${m.n}. ${esc(m.titolo)}</h2><p><a href="${m.url}">Appunti del modulo ${m.n}</a>, con spiegazioni, esempi ed esercizi.</p>`;
    let sezione = null;
    for (const q of regole) {
      if (q.sezione !== sezione) { sezione = q.sezione; html += `<h3>${esc(sezione)}</h3>`; }
      const copia = q.html.replace(/ id="r\d+"/, '').replace(/id="gc(\d+)"/g, `id="gc${m.n}x$1"`).replace(/url\(#gc(\d+)\)/g, `url(#gc${m.n}x$1)`).replace(/id="(grafico|retta)-(\d+)"/g, `id="$1-${m.n}x$2"`);
      html += copia.replace('</div><div class="rq-corpo">', ` <a class="rimando" href="${m.url}#${q.id}">nel modulo</a></div><div class="rq-corpo">`);
    }
    blocchi.push(html);
  }
  const corpo = testata({
    briciole: `<a href="index.html">OFA di matematica</a>${sep}<span>Formulario</span>`,
    titolo: 'Formulario',
    sotto: 'Le definizioni e le regole degli otto moduli, nell\'ordine degli appunti, per il ripasso. Ogni voce rimanda al punto in cui è spiegata con esempi.',
  }) + `<div class="contenitore pagina-modulo">${indice(toc)}<article class="testo lungo">${blocchi.join('') || '<p>Il formulario si completa man mano che gli appunti dei moduli sono pronti.</p>'}</article></div>`;
  pagina({ percorso: 'formulario.html', titolo: 'Formulario — OFA di matematica', descrizione: 'Definizioni e regole di tutti gli otto moduli del corso OFA di matematica, in una pagina.', corpo, attivo: 'formulario', lettura: true });
}

/* ---------- test d'ingresso, simulazioni, regole, piano ---------- */

function paginaMarkdown({ md, percorso, attivo, briciola, titoloPredef, sotto, descrizione, conIndice = true, prima = '', dopo = '', dm = false }) {
  const r = esiste(md) ? compilaFile(md) : null;
  const titolo = r?.meta.titolo || titoloPredef;
  const contenuto = r ? r.html : '<p>Questa pagina è in preparazione.</p>';
  const corpo = testata({ briciole: `<a href="index.html">OFA di matematica</a>${sep}<span>${briciola}</span>`, titolo: esc(titolo), sotto: sotto || esc(r?.meta.breve || '') })
    + (conIndice && r ? `<div class="contenitore pagina-modulo">${indice(r.toc)}<article class="testo">${prima}${contenuto}${dopo}</article></div>`
      : `<div class="contenitore"><article class="testo stretto" style="margin-inline:auto">${prima}${contenuto}${dopo}</article></div>`);
  pagina({ percorso, titolo: `${titolo} — OFA di matematica`, descrizione, corpo, attivo, lettura: true, datiModuli: dm });
  return r;
}

paginaMarkdown({ md: 'ai/test-ingresso.md', percorso: 'test-ingresso.html', attivo: 'test', briciola: "Test d'ingresso", titoloPredef: "Test d'ingresso",
  descrizione: "Test d'ingresso di 24 domande per capire da quali moduli partire per recuperare l'OFA di matematica.", conIndice: false, dm: true });

{
  const r = esiste('ai/simulazioni.md') ? compila(leggi('ai/simulazioni.md'), { file: 'ai/simulazioni.md' }) : null;
  const sims = r ? r.toc.filter(t => t.livello === 2 && /^simulazione-\d+$/.test(t.id)) : [];
  const lista = sims.length ? `<div class="lista-sim">${sims.map((s, k) => `<a href="#${s.id}" data-sim="sim-${k + 1}"><b>${s.html}</b><span>non ancora svolta</span></a>`).join('')}</div>` : '';
  paginaMarkdown({ md: 'ai/simulazioni.md', percorso: 'simulazioni.html', attivo: 'simulazioni', briciola: 'Simulazioni', titoloPredef: 'Simulazioni della prova',
    sotto: 'Otto prove nel formato di quella vera: cinque domande da due punti, 45 minuti, sufficienza 6/10, senza calcolatrice. Il tempo parte quando premi «Inizia»; alla consegna compaiono voto e spiegazioni.',
    descrizione: "Simulazioni della prova OFA di matematica di Informatica UniTo, con cronometro e correzione.", prima: lista });
}

paginaMarkdown({ md: 'ai/regole-ofa.md', percorso: 'info.html', attivo: 'info', briciola: 'Regole e date', titoloPredef: 'Regole, date e contatti',
  descrizione: "Chi ha l'OFA di matematica a Informatica UniTo, come si recupera, date delle prove, sede e contatti, con le fonti ufficiali." });

paginaMarkdown({ md: 'ai/corso-ufficiale.md', percorso: 'corso.html', attivo: 'corso', briciola: 'Il corso ufficiale', titoloPredef: 'Il corso «OFA Matematica»',
  descrizione: "Com'è organizzato il corso «OFA Matematica» della piattaforma OFA di UniTo: moduli, unità, attività, notazione e refusi verificati del materiale." });

{
  const r = esiste('ai/piano-di-studio.md') ? compilaFile('ai/piano-di-studio.md') : null;
  const oreTot = datiModuli.reduce((a, m) => a + m.ore, 0);
  const strumento = `<section id="piano" class="pannello" aria-labelledby="crea-il-tuo-piano">
<h2 id="crea-il-tuo-piano">Il piano, settimana per settimana</h2>
<p style="color:var(--testo-2);margin:0 0 1.2rem">Scegli la sessione e le ore a settimana: il piano distribuisce gli otto moduli (circa ${Math.round(oreTot) || 55} ore) e le simulazioni fino alla prova. Se hai svolto il <a class="link" href="test-ingresso.html">test d'ingresso</a>, assegna più tempo ai moduli in cui è andato peggio. Le spunte restano salvate in questo browser.</p>
<div class="piano-form">
<div class="campo"><label for="piano-esame">Sessione</label><select id="piano-esame">
<option value="2026-11-24">Fine novembre 2026 (stima)</option>
<option value="2027-01-14">Metà gennaio 2027 (stima)</option>
<option value="2027-05-28">Fine maggio 2027 (stima)</option>
<option value="2027-09-03">Inizio settembre 2027 (stima)</option>
<option value="altra">Un'altra data</option>
</select></div>
<div class="campo" hidden><label for="piano-data">Data della prova</label><input type="date" id="piano-data"></div>
<div class="campo"><label for="piano-ore">Ore a settimana: <output id="piano-ore-val" for="piano-ore">7 ore</output></label><input type="range" id="piano-ore" min="3" max="20" step="1" value="7"></div>
</div>
<p class="nota-piccola">Le date 2026/27 non sono ancora pubblicate: le stime ricalcano il calendario 2025/26 (turni il 24 e 28 novembre, il 14, 19 e 26 gennaio, il 29 maggio e 4 giugno, il 3 e 18 settembre). Le date ufficiali sono nella pagina <a class="link" href="info.html#date-e-iscrizioni">Regole e date</a>.</p>
<div id="piano-sintesi" class="piano-sintesi"></div>
<div id="piano-avviso" class="avviso" hidden></div>
<ol id="piano-settimane" class="settimane"></ol>
</section>`;
  const corpo = testata({ briciole: `<a href="index.html">OFA di matematica</a>${sep}<span>Piano di studio</span>`, titolo: 'Piano di studio',
    sotto: esc(r?.meta.breve || 'Un piano settimana per settimana fino alla prova, con il metodo per studiare ogni modulo.') })
    + `<div class="contenitore">${strumento}</div>`
    + (r ? `<div class="contenitore pagina-modulo" style="margin-top:3rem">${indice(r.toc)}<article class="testo">${r.html}</article></div>` : '');
  pagina({ percorso: 'piano.html', titolo: 'Piano di studio — OFA di matematica', descrizione: "Piano di studio settimana per settimana per recuperare l'OFA di matematica, tarato sulla data della prova.", corpo, attivo: 'piano', lettura: false, datiModuli: true });
}

/* ---------- home ---------- */

{
  const righe = moduli.map(m => {
    const unita = m.pronto ? sigleUnita(m).join(' · ') : '';
    const titolo = m.pronto ? `<a href="${m.url}">${esc(m.titolo)}</a><small>${esc(m.meta.breve)}</small>` : `${esc(m.titolo)}<small>in preparazione</small>`;
    const avanz = m.pronto ? '<span class="avanz"><span class="barra-avanz"><i></i></span><span>—</span></span>' : '';
    return `<tr${m.pronto ? ` data-modulo="${m.n}"` : ' class="in-arrivo"'}><td class="n">${m.n}</td><td class="titolo">${titolo}</td><td class="meta">${unita}</td><td class="meta">${m.pronto ? `circa ${esc(m.meta.ore)} h` : ''}</td><td class="meta">${avanz}</td></tr>`;
  }).join('\n');
  const passi = [
    ['Verifica di avere l\'OFA.', 'Nel libretto di <a href="https://my.unito.it" target="_blank" rel="noopener">MyUnito</a> compare l\'attività «INT1475 OFA - MATEMATICA» se al TOLC-S il punteggio in Matematica di base è inferiore a 5/20.'],
    ['Iscriviti al corso «OFA Matematica».', `Sulla <a href="${PORTALE}" target="_blank" rel="noopener">piattaforma OFA</a>, con le credenziali SCU; l'iscrizione non richiede chiavi.`],
    ['Studia il programma degli otto moduli.', 'Le domande della prova sono preparate su tutto il materiale del corso. Gli appunti di questa guida seguono lo stesso programma; il <a href="piano.html">piano di studio</a> lo distribuisce per settimane.'],
    ['Prenota un turno su MyUnito.', 'Sezione Esami, attività INT1475: un solo turno per sessione, a numero chiuso (circa 60 posti nel 2025/26).'],
    ['Sostieni la prova.', 'In Laboratorio Turing, con un documento d\'identità e le credenziali SCU: cinque domande in 45 minuti, sufficienza 6/10, senza calcolatrice.'],
  ].map(([t, p]) => `<li><div><b>${t}</b><p>${p}</p></div></li>`).join('');
  const calendario = [
    ['24 e 28 novembre 2025', 'tre turni', 'dal 7 novembre'],
    ['14, 19 e 26 gennaio 2026', 'tre turni', 'da fine novembre'],
    ['29 maggio e 4 giugno 2026', 'due turni', 'dal 27 febbraio'],
    ['3 e 18 settembre 2026', 'due turni, senza limite di posti', 'da luglio'],
  ].map(([q, t, i]) => `<tr><td>${q}</td><td>${t}</td><td>${i}</td></tr>`).join('');
  const faq = [
    ['Come si sa se si ha l\'OFA?', '<p>Dal punteggio del TOLC-S: meno di 5 punti su 20 nella sezione Matematica di base. Nel libretto di MyUnito compare l\'attività «INT1475 OFA - MATEMATICA».</p>'],
    ['Che cosa succede se non si supera entro il primo anno?', '<p>Non si possono registrare esami del secondo anno finché l\'OFA non è superato: la Guida del corso di laurea 2026/27 richiede, per gli esami degli anni successivi al primo, almeno 21 CFU del primo anno <em>e</em> l\'OFA di matematica superato.</p>'],
    ['Nel frattempo si possono sostenere gli esami del primo anno?', '<p>Sì: l\'OFA blocca solo gli esami del secondo anno.</p>'],
    ['Quante volte si può sostenere la prova?', '<p>Un turno per sessione, ma le sessioni sono diverse nel corso dell\'anno: nel 2025/26 a novembre, gennaio, maggio-giugno e settembre.</p>'],
    ['È ammessa la calcolatrice?', '<p>No. Chi ha una disabilità o un DSA può chiedere strumenti compensativi e un terzo di tempo in più, seguendo la procedura di Ateneo prima della prova.</p>'],
  ].map(([d, r]) => `<details><summary>${d}</summary><div class="risposta">${r}</div></details>`).join('');
  const corpo = `<section class="frontespizio"><div class="contenitore">
<p class="lingua-nota entra" style="--i:0" lang="en"><strong>Don't speak Italian?</strong> Read the <a class="link" href="${SITO_EN}" hreflang="en">English version</a> of this guide, for students who don't speak Italian.</p>
<span class="occhiello entra" style="--i:0">Guida non ufficiale · Corso di laurea in Informatica · Università di Torino · a.a. 2026/27</span>
<h1 class="entra" style="--i:1">Recupero dell'OFA di matematica</h1>
<p class="sotto entra" style="--i:2">Chi al TOLC-S ha ottenuto meno di 5 punti su 20 nella sezione Matematica di base deve assolvere l'obbligo formativo aggiuntivo entro il primo anno. Questa guida raccoglie le regole ufficiali, gli <strong>appunti degli otto moduli</strong> del corso di riallineamento e gli strumenti per preparare la prova.</p>
<p class="data-agg entra" style="--i:3"><span>Aggiornata al ${AGGIORNATO}</span><span>Fonti nella pagina <a class="link" href="info.html#fonti">Regole e date</a></span></p>
</div></section>

<section><div class="contenitore sintesi rivela">
<div>
<h2>In sintesi</h2>
<dl class="fatti-tab">
<dt>Chi ha l'OFA</dt><dd>Chi ha meno di 5/20 in Matematica di base al TOLC-S</dd>
<dt>Come si recupera</dt><dd>Corso «OFA Matematica» su www.ofa.unito.it e prova in presenza</dd>
<dt>La prova</dt><dd>Cinque domande, 45 minuti, sufficienza 6/10, senza calcolatrice</dd>
<dt>Sede</dt><dd>Laboratorio Turing, Dipartimento di Informatica, via Pessinetto 12</dd>
<dt>Iscrizione</dt><dd>MyUnito, attività INT1475: un turno per sessione, posti limitati</dd>
<dt>Scadenza</dt><dd>Entro il primo anno; altrimenti non si registrano esami del secondo anno</dd>
</dl>
</div>
<div>
<h2>In questa guida</h2>
<ol class="contenuti">
<li><a href="#programma"><span>Appunti degli otto moduli<small>Teoria, esempi svolti, esercizi e verifiche</small></span></a></li>
<li><a href="formulario.html"><span>Formulario<small>Definizioni e regole in una pagina</small></span></a></li>
<li><a href="test-ingresso.html"><span>Test d'ingresso<small>24 domande per scegliere da dove partire</small></span></a></li>
<li><a href="piano.html"><span>Piano di studio<small>Settimana per settimana fino alla prova</small></span></a></li>
<li><a href="simulazioni.html"><span>Simulazioni della prova<small>Otto prove a tempo, con correzione</small></span></a></li>
<li><a href="info.html"><span>Regole, date e contatti<small>Con le fonti ufficiali</small></span></a></li>
<li><a href="corso.html"><span>Il corso ufficiale<small>Moduli, attività e refusi del materiale</small></span></a></li>
</ol>
</div>
</div></section>

<section class="sezione" id="programma"><div class="contenitore">
<div class="sezione-testa rivela"><h2><span class="num">1</span>Il programma: otto moduli</h2><p>Gli appunti seguono i moduli del corso di riallineamento «OFA Matematica», su cui è costruita la prova. Ogni modulo contiene la teoria spiegata dall'inizio, definizioni e regole, metodi, esempi svolti, errori frequenti e grafici; in fondo, esercizi con soluzione, una verifica e una checklist.</p></div>
<div class="rivela"><table class="programma">
<thead><tr><th>N.</th><th>Modulo</th><th>Unità</th><th>Studio</th><th>Checklist</th></tr></thead>
<tbody>
${righe}
</tbody></table></div>
<p class="nota-piccola rivela">Dopo il <a class="link" href="test-ingresso.html">test d'ingresso</a>, un punto rosso accanto al numero segnala i moduli da riprendere con più calma.</p>
</div></section>

<section class="sezione" id="procedura"><div class="contenitore">
<div class="sezione-testa rivela"><h2><span class="num">2</span>Come si recupera</h2><p>La procedura indicata dal corso di laurea per l'a.a. 2026/27: frequentare il corso di riallineamento sulla piattaforma OFA e superare la prova in presenza entro il primo anno.</p></div>
<ol class="passi-lista rivela">${passi}</ol>
</div></section>

<section class="sezione" id="calendario"><div class="contenitore">
<div class="sezione-testa rivela"><h2><span class="num">3</span>Calendario delle prove</h2><p>Il calendario 2026/27 non è ancora stato pubblicato (verifica del ${AGGIORNATO}). Il corso di laurea raccomanda di sostenere la prova nei turni d'autunno. Per riferimento, le sessioni del 2025/26, tutte in Laboratorio Turing:</p></div>
<div class="tabella rivela" style="max-width:50rem"><table><thead><tr><th>Sessione</th><th>Turni</th><th>Iscrizioni</th></tr></thead><tbody>${calendario}</tbody></table></div>
<p class="nota-piccola rivela">Le date ufficiali compaiono sulla ${est(REQUISITI, 'pagina dei requisiti del corso di laurea')} e nella ${est(ESSE3, 'bacheca appelli di Esse3')} (attività INT1475). Tutti i turni del 2025/26, con iscritti e posti, sono nella pagina <a class="link" href="info.html#date-e-iscrizioni">Regole e date</a>.</p>
</div></section>

<section class="sezione" id="domande"><div class="contenitore">
<div class="sezione-testa rivela"><h2><span class="num">4</span>Domande frequenti</h2><p>Le regole complete, con le fonti, sono nella pagina <a class="link" href="info.html">Regole e date</a>.</p></div>
<div class="faq rivela">${faq}</div>
</div></section>

<section class="sezione" id="primo-anno"><div class="contenitore">
<div class="sezione-testa rivela"><h2><span class="num">5</span>Il resto del primo anno</h2><p>L'OFA è solo un pezzo del primo anno. Per i corsi veri e propri c'è la guida gemella di questa, gli <strong>appunti di Informatica</strong>: lezione per lezione, con esempi svolti, simulatori ed esercizi, più le schede di tutti gli insegnamenti del primo anno per i canali A, B e C, con esami, appelli e docenti.</p></div>
<p class="rivela"><a class="btn" href="${APPUNTI_PRIMO_ANNO}">Apri gli appunti del primo anno</a></p>
</div></section>`;
  pagina({ percorso: 'index.html', titolo: "Recupero dell'OFA di matematica — Informatica UniTo 2026/27", descrizione: "Guida non ufficiale al recupero dell'OFA di matematica per Informatica all'Università di Torino: regole, appunti degli otto moduli, piano di studio e simulazioni.", corpo, katex: false });
}

/* ---------- pagina non trovata (GitHub Pages usa 404.html con indirizzi assoluti) ---------- */

{
  const base = '/unito-ofa-matematica/';
  const corpo = `<section class="frontespizio"><div class="contenitore"><span class="occhiello entra" style="--i:0">Errore 404</span>
<h1 class="entra" style="--i:1">Pagina non trovata</h1>
<p class="sotto entra" style="--i:2">L'indirizzo potrebbe essere cambiato. Dalla pagina iniziale trovi tutte le sezioni della guida.</p>
<p class="entra" style="--i:3;margin-top:1.6rem"><a class="btn" href="${base}index.html">Pagina iniziale</a> <a class="btn" href="${base}index.html#programma">Appunti</a> <a class="btn" href="${base}info.html">Regole e date</a></p></div></section>`;
  pagina({ percorso: '404.html', titolo: 'Pagina non trovata — OFA di matematica', descrizione: 'Pagina non trovata.', corpo, katex: false });
  scrivi('404.html', leggi('404.html').replace(/(href|src)="(?!https?:|data:|#|\/)([^"]*)"/g, (_, a, u) => `${a}="${base}${u}"`));
}

/* ---------- file unico per le AI ---------- */

{
  const avvertenza = "> Avvertenze: ricerche e testi si basano su fonti pubbliche del corso di laurea e di UniTo e sul materiale del corso «OFA Matematica»; ogni risultato matematico è stato ricalcolato in modo indipendente con il calcolo simbolico. Sono accurati e con fonti, ma possono contenere errori o dati superati; io, DonFlammer, che pubblico questa guida, non mi assumo alcuna responsabilità. Per regole, date e iscrizioni fanno fede solo le fonti ufficiali (pagina dei requisiti del corso di laurea, Esse3, piattaforma OFA). Testo completo: AVVERTENZE.md nella radice del repository. Licenza CC BY-NC-SA 4.0.";
  const unisci = (nome, titolo, descrizione, parti) => {
    const testa = `# ${titolo}\n\n${descrizione} Generato da \`strumenti/genera.mjs\` (contenuti aggiornati al ${AGGIORNATO}): non modificarlo a mano, modifica i singoli file e rigenera. Prima di allegarlo compila la scheda «Chi studia» (file \`ai/studente.md\`), se vuoi un aiuto su misura.\n\n${avvertenza}\n`;
    const corpo = parti.filter(esiste).map(p => `\n\n---\n\n<!-- FILE: ${p} -->\n> File: \`${p}\`\n\n${leggi(p).trim()}`).join('');
    scrivi(`ai/${nome}`, (testa + corpo + '\n').replace(/\]\(sito:/g, '](https://donflammer.github.io/unito-ofa-matematica/'));
  };
  const base = ['ai/README.md', 'ai/istruzioni-per-ai.md', 'ai/studente.md', 'ai/regole-ofa.md', 'ai/corso-ufficiale.md', 'ai/piano-di-studio.md'];
  unisci('_TUTTO_IN_UNO.md', 'OFA di matematica, Informatica UniTo 2026/27 — contesto completo',
    "Tutti i file di `ai/` uniti in uno: regole, corso ufficiale e refusi, piano di studio, appunti degli otto moduli, test d'ingresso, simulazioni e sintassi dei file.",
    [...base, ...pronti.map(m => `ai/moduli/${m.base}.md`), 'ai/test-ingresso.md', 'ai/simulazioni.md', 'ai/FORMATO.md']);
  unisci('_ESSENZIALE.md', 'OFA di matematica, Informatica UniTo 2026/27 — contesto essenziale',
    'Istruzioni, scheda studente, regole, corso ufficiale e piano di studio, senza gli appunti dei moduli: basta per le domande su regole, date, iscrizioni e organizzazione dello studio.', base);
}

console.log(`${pronti.length}/8 moduli · ${errori} errori`);
process.exit(errori ? 1 : 0);
