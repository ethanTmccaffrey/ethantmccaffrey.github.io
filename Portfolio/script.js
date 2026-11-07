const projects = [
  {
    title: "Terrain Renderer",
    tools: ["C++", "HLSL", "DirectX11"],
    label: "Terrain",
    sub: "Tessellated procedural terrain",
    tech: "C++ - HLSL - DirectX 11",
    category: "University Modules",
    coverClass: "cv-terrain",
    kicker: "DirectX 11",
    time: "3:01",
    year: "2025",
    github: "#",
        tags: ["DirectX 11", "HLSL", "Tessellation", "RenderDoc"],
    sleeveClass: "sb-terrain",
    liner: [
      "Terrain Renderer is a real-time valley landscape built for CMP301 Graphics Programming in DirectX 11, written in C++ and HLSL with no engine underneath. A low-poly plane goes to the GPU, the hull shader subdivides it, and the domain shader lifts every new vertex from a heightmap and rebuilds its normals. A sun circles through a day/night cycle, dragging the shadow map with it so the hills' shadows sweep across the lake.",
      "Most of the work happened in RenderDoc, at the seams between stages: two textures fighting over one shader register, a light matrix that collapsed whenever the sun passed overhead, and a heightmap being gamma-corrected as if it were a colour. None of them crashed; they just drew the wrong thing. Each fix taught me to design so that kind of mistake is hard to make in the first place."
    ],
    credits: [
      ["Role", "Solo developer"],
      ["Built with", "C++, HLSL, DirectX 11"],
      ["Module", "CMP301 Graphics Programming"],
      ["Debugging", "RenderDoc"],
      ["Year", "2025"]
    ],
    photos: ["images/terrain-1.png", "images/terrain-2.png", "images/terrain-3.png", "images/terrain-4.png"],
    report: "assets/terrain-report.pdf",
    blurb: "A real-time terrain renderer in C++ and HLSL with DirectX 11: GPU tessellation and heightmap displacement, a day/night cycle with shadow mapping, and a post-processing pass, with every pipeline stage written by hand."
  },
  {
    title: "Grapple Hook",
    tools: ["C++", "Unreal"],
    label: "Grapple",
    sub: "Physics-driven traversal mechanic",
    tech: "C++ - Unreal Engine 5",
    category: "University Modules",
    coverClass: "cv-grapple",
    kicker: "Unreal Engine 5",
    year: "2025",
    github: "#",
    time: "3:02",
    tags: ["Unreal Engine 5", "C++", "Pendulum Physics"],
    sleeveClass: "sb-grapple",
    liner: [
      "Grapple Hook is a first-person traversal mechanic built for CMP302 Game Mechanics Development in Unreal Engine 5, with all logic and physics in C++ and Blueprints only for assets and tuning. Fire a line trace up to 2,000 units, hold to reel in, release to swing, hold right-click to lower and press Shift to let go. A small state machine swaps the character's movement mode and gravity for each state, and every value a designer might want, from pull speed to swing damping, is exposed in the editor.",
      "The swing is where the time went. A pure pendulum, which projects velocity onto the rope, strips the inward part and clamps the player to the rope length, was accurate but floaty. Game feel won: 1.5x gravity, player-driven swing acceleration and a damping of 0.992 made it feel right. The rope took the same route, from a cable component that sagged under its own gravity to spline mesh segments rebuilt every third frame."
    ],
    credits: [
      ["Role", "Solo developer"],
      ["Built with", "Unreal Engine 5, C++"],
      ["Module", "CMP302 Game Mechanics Development"],
      ["Inspired by", "Just Cause 2, ARK: Survival Evolved, Marvel's Spider-Man"],
      ["Year", "2025"]
    ],
    youtube: "XqPbuizWG8M",
    photos: ["images/grapple-1.png", "images/grapple-2.png", "images/grapple-3.png", "images/grapple-4.png"],
    blurb: "A physics-driven grappling mechanic in Unreal Engine 5, written in C++. Pull, swing, lower and detach behaviour driven by pendulum dynamics, with a spline-mesh rope and the Enhanced Input System."
  },
  {
    title: "PRISM",
    tools: ["C#", "Unity"],
    label: "PRISM",
    sub: "Music-embodiment visualiser",
    tech: "Unity 6 - C# - Python",
    category: "Individual Projects",
    coverClass: "cv-prism",
    kicker: "Individual Project",
    year: "2026",
    github: "#",
    tags: ["Unity 6", "C#", "librosa"],
    sleeveClass: "sb-prism",
    liner: [
      "PRISM is a real-time music embodiment system built in Unity 6. Feed it any song and a human head slowly fills as the track plays. The music is measured for its character, such as how percussive, gritty, regular, bright and harmonically dense it is. Those measurements weight eighteen visual generators, each built on one of Klüver’s form constants: the tunnels, spirals, lattices and cobwebs that recur in hallucination and synaesthesia. Nothing is ever erased, so by the final note the skull holds a painting of the whole song.",
      "The hardest part wasn’t the visuals, it was the measuring. Textbook audio features kept returning numbers that couldn’t tell Slipknot from Avicii, so I rebuilt the analysis layer. It now measures each segment rather than an averaged spectrum, autocorrelates onsets for rhythm, and uses a peak-to-valley inharmonicity measure I designed to separate distortion from clean sound. Inside the head, an invisible ellipsoid keeps every mark in the cranial vault, while the shell generators paint straight into the skull’s vertex colours."
    ],
    credits: [
      ["Role", "Solo developer"],
      ["Built with", "Unity 6, C#"],
      ["Type", "Individual project"],
      ["Year", "2026"],
      ["Music", "Skull Fire - Jingle Punks"]
    ],
    photos: ["images/prism-1.png", "images/prism-2.png"],
    youtube: "N7VyHryvj3M",
    blurb: "A real-time music embodiment system: any song is measured for its character as it plays, weighting eighteen visual generators that paint a persistent record of the track inside a human head."
  },
  {
    title: "Incinder",
    tools: ["C#", "Unity"],
    label: "Incinder",
    sub: "Gothic top-down roguelike",
    tech: "Unity 6 - C# - Team Project",
    category: "Team Project",
    coverClass: "cv-incinder",
    kicker: "Happy Golem Games",
    year: "2026",
    github: "#",
    itch: "https://happy-golem-games.itch.io/happy-golem-315",
    time: "3:15",
    progress: 56,
    tags: ["Unity 6", "C#", "Team", "Procedural Gen", "NavMesh AI"],
    blurb: "A gothic top-down roguelike built in Unity 6 with a seven-person team, where I developed core, tools and gameplay features including procedural dungeon generation and NavMesh-driven enemy AI among the systems I built.",

    liner: [
      "Incinder is a gothic top-down roguelike built over 4 months with Happy Golem Games, a seven-person team. Every run drops the player into a fresh, procedurally built dungeon and challenges them to fight their way down through it.",
      "I worked across core, tools and gameplay. The two systems I'm proudest of are the procedural dungeon generation which stitches rooms into a coherent, playable layout every seed, and the NavMesh-driven enemy AI that hunts the player through it. Building tooling alongside the game meant the rest of the team could design levels and tune encounters without touching the underlying code."
    ],
    credits: [
      ["Role", "Core tools and Gameplay Programmer"],
      ["Team", "Happy Golem Games"],
      ["Built with", "Unity 6, C#"],
      ["Year", "2026"]
    ],
    video: "images/incinder-gameplay.mp4",
    poster: "images/incinder-gameplay.jpg",
    photos: ["images/incinder-combat.png", "images/incinder-inventory.png"],
    logo: "images/happy-golem.png"
  },
  {
    title: "Gen 1 Battle Sim",
    tools: ["C++"],
    label: "Battle Sim",
    sub: "Finding the strongest Pokémon in Gen 1",
    tech: "C++",
    category: "Individual Projects",
    coverClass: "cv-battle",
    kicker: "C++",
    year: "2025",
    github: "#",
    tags: ["C++", "Simulation", "CSV Parsing"],
    sleeveClass: "sb-battle",
    liner: [
      "Gen 1 Battle Sim started with a question: which of the original 151 is actually the strongest? It's a C++ console program that reads every Pokémon's stats and type from a CSV, then runs a full round robin: 11,325 turn-based battles, with a point for each win. The faster side moves first, damage is Attack minus half the target's Defence scaled by a Gen 1 type chart, and every hit has a 10% chance of a critical that doubles it.",
      "It began as a simple stat-by-stat comparison and grew into a turn-based battle and then a full tournament. Over 500 runs Mewtwo wins 86% of them, but the rankings say as much about my rules as about the Pokémon: Special is never used, and dual types collapse to one, so Gengar fights as Poison. Those are the next things to fix."
    ],
    credits: [
      ["Role", "Solo side project"],
      ["Built with", "C++, Visual Studio"],
      ["Data", "151 Pokémon from a CSV"],
      ["Year", "2025"],
      ["Note", "Fan project. Pokémon © Nintendo / Game Freak"]
    ],
    insertImage: "images/pokemon-chart.png",
    insertAlt: "Bar chart of average tournament points: Mewtwo 145.3 at the top, Magikarp, Chansey and Abra joint last on 1.0",
    photos: ["images/pokemon-1.png", "images/pokemon-2.png"],
    blurb: "A C++ console program that reads all 151 first-generation Pokémon from a CSV and runs a full round robin of turn-based battles, with type effectiveness and critical hits, to find the strongest."
  },
  {
    title: "Evolving Vehicles",
    tools: ["C#", "Unity"],
    label: "Evolve",
    sub: "Genetic algorithm for autonomous vehicles",
    tech: "Unity - C#",
    category: "University Modules",
    coverClass: "cv-ai",
    kicker: "Genetic Algorithm",
    year: "2025",
    time: "3:04",
    github: "https://github.com/ethanTmccaffrey/Evolving-Vehicles",
    tags: ["Unity", "C#", "Genetic Algorithm", "AI"],
    sleeveClass: "sb-evolve",
    liner: [
      "Evolving Vehicles is my CMP304 Artificial Intelligence project: a genetic algorithm in Unity that teaches cars to drive a hill-climbing course. Each car reads the road as one of 96 states, made of six slope bands, four speeds and four fuel levels. Its DNA holds 192 genes, an acceleration and a lean for every state. Every generation, the elites survive, tournament selection picks parents, and single-point crossover and mutation breed the next population.",
      "Four runs told the story. Growing the population from 10 to 30 more than doubled the best distance, peaking at 1,853 m, but every run kept collapsing. The data pointed to nose-diving cars that wedged into the terrain, kept their score and passed their genes on. Stuck detection that punished them, plus a gentle self-righting torque, cut the collapses and raised the average without driving for the AI."
    ],
    credits: [
      ["Role", "Solo developer"],
      ["Built with", "Unity, C#"],
      ["Module", "CMP304 Artificial Intelligence"],
      ["Base game", "Adapted from a Sasquatch B Studios tutorial"],
      ["Year", "2025"]
    ],
    insertImage: "images/evolve-chart.png",
    insertAlt: "Bar chart of peak distance for four runs (829, 1453, 1854 and 1781 m) and a line chart comparing collapses in runs 3 and 4",
    photos: ["images/Evolve1.png", "images/Evolve2.png", "images/Evolve3.png", "images/Evolve4.png"],
    blurb: "A CMP304 Artificial Intelligence assessment: a genetic algorithm in Unity where AI-controlled vehicles evolve to cross hilly terrain. Each vehicle's DNA encodes decisions across 96 game states of slope, velocity and fuel, and over generations the population learns — reaching a peak distance of 1853m across runs that varied population size, mutation rate and elite selection."
  }
];


const categories = ["Team Project", "Individual Projects", "University Modules"];


const categoryMeta = {
  "University Modules": "Solo",
  "Individual Projects": "In Progress",
  "Team Project": "Team Project"
};

function sleeveHTML(p, index) {
  const tools = (p.tools || []).map(t => `<span class="tool">${t}</span>`).join("");
  const stickers = tools ? `<span class="tools">${tools}</span>` : "";

  const art = p.coverClass
    ? `<div class="art ${p.coverClass}">
         <div class="cover-label">
           <span class="cover-kicker">${p.kicker}</span>
           <span class="cover-title">${p.label || p.title}</span>
         </div>
         ${stickers}
       </div>`
    : `<div class="art"><img src="${p.cover}" alt="${p.title} cover">${stickers}</div>`;

  return `<button class="sleeve" data-index="${index}" data-tools="${(p.tools || []).join("|")}">${art}</button>`;
}

function rowHTML(category) {
  const inCategory = projects.filter(p => p.category === category);
  if (inCategory.length === 0) return "";

  const sleeves = inCategory.map(p => sleeveHTML(p, projects.indexOf(p))).join("");
  const count = String(inCategory.length).padStart(2, "0");

  return `
    <section class="unit">
      <div class="row-head">
        <h2>${category}</h2>
        <span class="count">${count}</span>
        <span class="side">${categoryMeta[category] || ""}</span>
      </div>
      <div class="crate">${sleeves}</div>
      <div class="ledge"></div>
    </section>
  `;
}

const shelf = document.getElementById("shelf");
shelf.innerHTML = categories.map(rowHTML).join("");

const TOOL_ORDER = ["C++", "C#", "HLSL", "Unity", "Unreal", "DirectX 11"];
const allTools = [...new Set(projects.flatMap(p => p.tools || []))]
  .sort((a, b) => (TOOL_ORDER.indexOf(a) + 1 || 99) - (TOOL_ORDER.indexOf(b) + 1 || 99));

const filterBar = document.getElementById("tool-filter");
filterBar.innerHTML = `<span class="filter-label">Browse: </span>` +
  ["All", ...allTools].map(t =>
    `<button class="filter-btn${t === "All" ? " is-active" : ""}" data-tool="${t}">${t}</button>`
  ).join("");

filterBar.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("is-active", b === btn));
  const tool = btn.dataset.tool;
  shelf.querySelectorAll(".sleeve").forEach(s => {
    const match = tool === "All" || s.dataset.tools.split("|").includes(tool);
    s.classList.toggle("is-dimmed", !match);
  });
});

const player = document.getElementById("player");
const playerArt = document.querySelector(".player-art");
const playerKicker = document.querySelector(".player-kicker");
const playerTitle = document.querySelector(".player-title");
const playerSub = document.querySelector(".player-sub");
const playerTech = document.querySelector(".player-tech");
const playerBlurb = document.querySelector(".player-blurb");
const playerLink = document.getElementById("player-link");
const playerCtx = document.getElementById("player-ctx");
const playerYear = document.getElementById("player-year");
const playerTime = document.getElementById("player-time");
const playerProg = document.getElementById("player-progress");
const playerTags = document.getElementById("player-tags");
const playerInsert = document.getElementById("player-insert");
const sleeveBack = document.getElementById("player-sleeve");

const ICON_ITCH = '<svg viewBox="0 0 24 24"><path d="M3 5h18v14H3zM7 9v6l5-3z"/></svg>';
const ICON_GH   = '<svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 8.8 21.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.9-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1a3.6 3.6 0 0 1 .1 2.7 3.9 3.9 0 0 1 1 2.7c0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg>';

let currentIndex = 0;

function openPlayer(index) {
  currentIndex = index;
  const p = projects[index];

  playerKicker.textContent = p.kicker;
  playerTitle.textContent = p.title;
  playerSub.textContent = p.sub;
  playerTech.textContent = p.tech;
  playerBlurb.textContent = p.blurb;
  playerCtx.textContent = p.category;
  playerYear.textContent = p.year;
  playerTime.textContent = p.time || "1:24";
  playerProg.style.right = (100 - (p.progress ?? 40)) + "%";

  playerTags.innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join("");
  playerArt.className   = "player-art art " + p.coverClass;


  playerLink.style.display = "";
  if (p.itch) {
    playerLink.href = p.itch;
    playerLink.innerHTML = ICON_ITCH + " Play on itch.io";
  } else if (p.github && p.github !== "#") {
    playerLink.href = p.github;
    playerLink.innerHTML = ICON_GH + " View on GitHub";
  } else {
    playerLink.style.display = "none";
  }

  if (p.youtube) {
    playerInsert.innerHTML = `
      <div class="insert-card">
        <iframe src="https://www.youtube-nocookie.com/embed/${p.youtube}?rel=0"
          title="${p.title} with sound" allow="encrypted-media; picture-in-picture; fullscreen"
          allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
      </div>`;
    playerInsert.hidden = false;
  } else if (p.report) {
    playerInsert.innerHTML = `
      <div class="insert-card insert-report">
        <div class="report-bar">
          <span>Reflective Report</span>
          <a href="${p.report}" target="_blank" rel="noopener">Open full size &#8599;</a>
        </div>
        <iframe src="${p.report}#toolbar=0&navpanes=0&view=FitH" title="${p.title} reflective report"></iframe>
      </div>`;
    playerInsert.hidden = false;
  } else if (p.insertImage) {
    playerInsert.innerHTML = `
      <div class="insert-card insert-image">
        <img src="${p.insertImage}" alt="${p.insertAlt || ""}">
      </div>`;
    playerInsert.hidden = false;
  } else if (p.video) {
    playerInsert.innerHTML = `
      <div class="insert-card">
        <video src="${p.video}"${p.poster ? ` poster="${p.poster}"` : ""} autoplay muted loop playsinline></video>
      </div>`;
    playerInsert.hidden = false;
  } else {
    playerInsert.innerHTML = "";
    playerInsert.hidden = true;
  }

  if (p.liner) {
    const liner   = p.liner.map(t => `<p>${t}</p>`).join("");
    const credits = (p.credits || []).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("");
    const photos  = (p.photos || []).map(src => `<figure class="photo"><img src="${src}" alt=""></figure>`).join("");
    const logo    = p.logo ? `<img class="studio-logo" src="${p.logo}" alt="">` : "";
    sleeveBack.innerHTML = `
      <div class="sb-left">
        <span class="sb-accent"></span>
        <div class="liner">${liner}</div>
        <dl class="credits">${credits}</dl>
      </div>
            <div class="photos${(p.photos || []).length > 2 ? " pile" : ""}">${photos}</div>
      ${logo}`;
    sleeveBack.className = "sleeve-back " + (p.sleeveClass || "");
    sleeveBack.hidden = false;
  } else {
    sleeveBack.innerHTML = "";
    sleeveBack.hidden = true;
  }

  player.classList.add("open");
  player.setAttribute("aria-hidden", "false");
  player.scrollTop = 0;
}

function closePlayer() {
  player.classList.remove("open");
  player.setAttribute("aria-hidden", "true");
}

function nextProject() { openPlayer((currentIndex + 1) % projects.length); }
function prevProject() { openPlayer((currentIndex - 1 + projects.length) % projects.length); }

shelf.addEventListener("click", (e) => {
  const sleeve = e.target.closest(".sleeve");
  if (!sleeve) return;
  openPlayer(Number(sleeve.dataset.index));
});

document.getElementById("back").addEventListener("click", closePlayer);
document.getElementById("next").addEventListener("click", nextProject);
document.getElementById("prev").addEventListener("click", prevProject);

document.addEventListener("keydown", (e) => {
  if (!player.classList.contains("open")) return;
  if (e.key === "Escape") closePlayer();
  if (e.key === "ArrowRight") nextProject();
  if (e.key === "ArrowLeft") prevProject();
});


const wall = document.getElementById("wall");
const wx = wall.getContext("2d");
const STRIPES = ["#e6b34a", "#9bb06a", "#2f7d8a", "#df6a2e", "#efdcb0", "#e59a4c", "#c14a2b"];

function drawWall() {
  const W = wall.width = innerWidth;
  const H = wall.height = innerHeight;
  const sw = Math.max(46, W / 16);
  const amp = sw * 0.85;
  const k = 6.283 / (H / 2.3);
  for (let y = 0; y < H; y += 3) {
    const off = Math.sin(y * k) * amp;
    for (let i = -3; i * sw < W + sw + amp; i++) {
      wx.fillStyle = STRIPES[((i % STRIPES.length) + STRIPES.length) % STRIPES.length];
      wx.fillRect(i * sw + off, y, sw + 1, 4);
    }
  }
}
drawWall();
addEventListener("resize", drawWall);