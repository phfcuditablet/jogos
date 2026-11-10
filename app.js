// Dados compartilhados entre a página inicial e o painel admin.
const CHAVE = 'jogos-links-v1';
const SENHA_HASH = '34c1746f05216f00b9fc9f52e53a30649d704f257ab499936656d2c67586e2c2';
const PADRAO = [
  { "titulo": "Tetris", "url": "https://phfcuditablet.github.io/tetris/", "icone": "🧱", "ativo": true },
  { "titulo": "Snake", "url": "https://phfcuditablet.github.io/snake/", "icone": "🐍", "ativo": true },
  { "titulo": "Pong", "url": "https://phfcuditablet.github.io/pong/", "icone": "🏓", "ativo": true },
  { "titulo": "Setinhas", "url": "https://phfcuditablet.github.io/setinhas/", "icone": "➡️", "ativo": true },
  { "titulo": "Tetris 2", "url": "https://phfcuditablet.github.io/tetris2/", "icone": "🧩", "ativo": true },
  { "titulo": "Gatinhos", "url": "https://phfcuditablet.github.io/gatinhos/", "icone": "🐱", "ativo": true }
];

async function carregarLinks() {
  try {
    const salvo = localStorage.getItem(CHAVE);
    if (salvo) return JSON.parse(salvo);
  } catch (e) {}
  try {
    const r = await fetch('links.json', { cache: 'no-store' });
    if (r.ok) return await r.json();
  } catch (e) {}
  return PADRAO.map(l => ({ ...l }));
}

function salvarLinks(lista) {
  localStorage.setItem(CHAVE, JSON.stringify(lista));
}

function limparSalvo() {
  try { localStorage.removeItem(CHAVE); } catch (e) {}
}
