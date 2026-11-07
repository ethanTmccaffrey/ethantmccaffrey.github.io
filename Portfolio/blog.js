
const posts = [
  {
    id: "november-update",
    title: "Every record has its sleeve",
    date: "2026-11-07",
    tags: ["Update", "Dissertation", "Sand Sim"],
    music: "Colors – Black Pumas",
    stand: "Every project on the shelf now has its full sleeve, the dissertation is under way, and a small sand game is up next.",
    body: `
      <p>Every project on the shelf now has its full sleeve: liner notes, credits, screenshots and something tucked in the middle, whether that's a gameplay video, a results chart or the full report. Each cover also carries stickers for the language and engine it was built with and you can filter the shelf by tool from the bar above it. Evolving Vehicles has its code up on GitHub too.</p>
      <h2>On the turntable</h2>
      <p>Most of my time right now is going into my dissertation artefact for my final year at Abertay. More on that once there's something worth showing.</p>
      <h2>Up next</h2>
      <p>Alongside it, I'm starting a small personal project: a sandcastle survival game built on a falling-sand simulation. Every grain is simulated which makes it a good excuse to dig deeper into the core C++ I want to be stronger at: memory, pointers, data structures and algorithms. I'm keeping it deliberately small and I'll post dev logs here as it comes together.</p>
    `
  },
  {
    id: "welcome",
    title: "Welcome to B-Sides",
    date: "2026-09-29",
    tags: ["Intro"],
    music: "Yoshimi Battles the Pink Robots - The Flaming Lips",
    stand: "What this corner of the site is for, and what you'll find pinned up here.",
    body: `
      <p>This is B-Sides; The stories from development, what im working on and general updates.</p>
      <ul>
        <p>As evident by the website you are currently browsing I have been developing my portfolio, Ive chosen a 70's theme mixed with music to represnt my work. </p>
        <p>My portfolio is a reflection of me as a person and my interests, its only fitting that it matches my interests in music and vinyls.</p>
        <p>Going forward future sections will reflect on what im up to and anything I feel I want to share, as well as an album recommendation from what ive been listening to recently.</p>
      </ul>
    `
  }

  // ---- template for post ----
  // ,{
  //   id: "my-new-post",
  //   title: "My new post",
  //   date: "2026-10-01",
  //   tags: ["Unity", "Incinder"],
  //   stand: "One line for the board.",
  //   body: `
  //     <p>First paragraph…</p>
  //     <h2>A heading</h2>
  //     <p>More writing. Add an image with <img src="images/whatever.png" alt=""> etc.</p>
  //   `
  // }
];

const view = document.getElementById("blog-view");

function esc(s) {
  const d = document.createElement("div");
  d.textContent = s == null ? "" : String(s);
  return d.innerHTML;
}
function fmtDate(str) {
  const d = new Date(str + "T00:00:00");
  return isNaN(d) ? str : d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}
function plain(html) {
  const d = document.createElement("div");
  d.innerHTML = html || "";
  return (d.textContent || "").replace(/\s+/g, " ").trim();
}
function readTime(body) {
  const words = plain(body).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200)) + " min";
}
function standOf(p) {
  if (p.stand) return p.stand;
  const t = plain(p.body);
  return t.length > 150 ? t.slice(0, 150).trim() + "…" : t;
}

function route() {
  const m = location.hash.match(/#post\/(.+)/);
  if (m) {
    const p = posts.find(x => x.id === decodeURIComponent(m[1]));
    if (p) return renderArticle(p);
  }
  renderList();
}

function renderList() {
  if (!posts.length) {
    view.innerHTML = `<div class="blog-state">No posts pinned up yet &mdash; the first B-side is still on the turntable.</div>`;
    return;
  }
  const cards = posts.map(p => {
    const tags = (p.tags || []).map(t => `<span>${esc(t)}</span>`).join("");
    return `<a class="note" href="#post/${encodeURIComponent(p.id)}">
      <span class="pin"></span>
      <p class="date">${fmtDate(p.date)}</p>
      <h3>${esc(p.title)}</h3>
      <p class="stand">${esc(standOf(p))}</p>
      ${p.music ? `<p class="spinning">&#9835; ${esc(p.music)}</p>` : ""}
      ${tags ? `<div class="tags">${tags}</div>` : ""}
      <span class="rt">${readTime(p.body)}</span>
    </a>`;
  }).join("");
  view.innerHTML = `<div class="notes">${cards}</div>`;
  window.scrollTo({ top: 0 });
}
function soundtrackHTML(music) {
  const [track, artist] = music.split(" – ");
  return `
    <div class="soundtrack">
      <span class="sound-disc" aria-hidden="true"></span>
      <div>
        <p class="sound-label">This post's soundtrack</p>
        <p class="sound-title">${esc(track)}</p>
        ${artist ? `<p class="sound-artist">${esc(artist)}</p>` : ""}
      </div>
    </div>`;
}
function renderArticle(p) {
  const tags = (p.tags || []).map(t => `<span>${esc(t)}</span>`).join("");
  view.innerHTML = `
    <div style="text-align:center"><a class="back-link" href="#">&lsaquo; Back to the board</a></div>
    <article class="sheet">
      <span class="pin"></span>
      <p class="kicker">${fmtDate(p.date)} &middot; ${readTime(p.body)} read</p>
      <h1>${esc(p.title)}</h1>
      ${tags ? `<div class="a-tags">${tags}</div>` : ""}
      <div class="article-body">${p.body}</div>
      ${p.music ? soundtrackHTML(p.music) : ""}
    </article>`;
  window.scrollTo({ top: 0 });
}

window.addEventListener("hashchange", route);
route();