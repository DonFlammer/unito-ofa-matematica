// Controlla i file Markdown del sito OFA: formule, riquadri, esercizi, quiz, simulazioni, grafici, rette, checklist.
// Uso: node strumenti/verifica.mjs <file.md> [altri file…]   → elenca errori e avvisi; esce con 1 se ci sono errori.
import { readFileSync } from 'node:fs';
import { basename } from 'node:path';
import { compila } from './ofamd.mjs';

const RICHIESTI = { moduli: ['modulo', 'titolo', 'breve', 'ore', 'unita'] };
let errori = 0;
for (const file of process.argv.slice(2)) {
  const sorgente = readFileSync(file, 'utf8');
  const tipo = /[\\/]moduli[\\/]/.test(file) ? 'moduli' : '';
  const r = compila(sorgente, { file: basename(file), richiedi: RICHIESTI[tipo] || [] });
  const s = r.stats;
  console.log(`\n${file}\n  ${s.parole} parole · ${r.toc.filter(t => t.livello === 2).length} sezioni · ${s.esercizio} esercizi · ${s.domande} domande (${s.quiz} quiz, ${s.sim} simulazioni) · ${s.grafico} grafici · ${s.retta} rette · ${s.check} checklist`);
  for (const e of r.errori) console.log('  ERRORE ' + e);
  for (const a of r.avvisi) console.log('  avviso ' + a);
  if (!r.errori.length) console.log('  ok, nessun errore');
  errori += r.errori.length;
}
process.exit(errori ? 1 : 0);
