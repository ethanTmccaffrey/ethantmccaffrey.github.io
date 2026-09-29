const projects = [
  {
    title: "Terrain Renderer",
    label: "Terrain",
    sub: "Tessellated procedural terrain",
    tech: "C++ · HLSL · DirectX 11",
    category: "University Modules",
    coverClass: "cv-terrain",
    kicker: "DirectX 11",
    year: "2025",
    github: "#",
    tags: ["DirectX 11", "HLSL", "RenderDoc"],
    blurb: "A real-time terrain renderer in C++ and HLSL with DirectX 11 includes heightmap displacement, a dynamic day/night lighting cycle, shadow mapping and distance-based tessellation that adds detail near the camera."
  },
  {
    title: "Grapple Hook",
    label: "Grapple",
    sub: "Physics-driven traversal mechanic",
    tech: "C++ · Unreal Engine 5",
    category: "University Modules",
    coverClass: "cv-grapple",
    kicker: "Unreal Engine 5",
    year: "2025",
    github: "#",
    tags: ["Unreal Engine 5", "C++", "Pendulum Physics"],
    blurb: "A physics-driven grappling mechanic in Unreal Engine 5, written in C++. Pull, swing, lower and detach behaviour driven by pendulum dynamics, with a spline-mesh rope and the Enhanced Input System."
  },
  {
    title: "PRISM",
    label: "PRISM",
    sub: "Music-embodiment visualiser",
    tech: "Unity 6 · C# · Python",
    category: "Individual Projects",
    coverClass: "cv-prism",
    kicker: "Individual Project",
    year: "2026",
    github: "#",
    tags: ["Unity 6", "C#", "librosa"],
    blurb: "A real-time audio-driven 3D visualiser that turns a track's acoustic character into abstract visuals rendered on a human head. Built in Unity 6 (URP) with an offline Python/librosa analysis pipeline and custom spatial optimisation for smooth real-time performance."
  },
  {
    title: "Incinder",
    label: "Incinder",
    sub: "Gothic top-down roguelike",
    tech: "Unity 6 · C# · Team Project",
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
    label: "Pokémon",
    sub: "Finding the strongest Pokémon in Gen 1",
    tech: "C++",
    category: "Individual Projects",
    coverClass: "cv-pokemon",
    kicker: "C++",
    year: "2025",
    github: "#",
    tags: ["C++", "Simulation", "Data Analysis"],
    blurb: "A C++ program that pits every first-generation Pokémon against each other in simulated battles — weighing stats and type match-ups — to rank them and work out which is the strongest in Gen 1."
  },
  {
    title: "Evolving Vehicles",
    label: "Evolve",
    sub: "Genetic algorithm for autonomous vehicles",
    tech: "Unity · C#",
    category: "University Modules",
    coverClass: "cv-ai",
    kicker: "Genetic Algorithm",
    year: "2025",
    github: "#",
    tags: ["Unity", "C#", "Genetic Algorithm", "AI"],
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
  const art = p.coverClass
    ? `<div class="art ${p.coverClass}">
         <div class="cover-label">
           <span class="cover-kicker">${p.kicker}</span>
           <span class="cover-title">${p.label || p.title}</span>
         </div>
       </div>`
    : `<div class="art"><img src="${p.cover}" alt="${p.title} cover"></div>`;

  return `<button class="sleeve" data-index="${index}">${art}</button>`;
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


  if (p.itch) {
    playerLink.href = p.itch;
    playerLink.innerHTML = ICON_ITCH + " Play on itch.io";
  } else {
    playerLink.href = p.github || "#";
    playerLink.innerHTML = ICON_GH + " View on GitHub";
  }

  if (p.video) {
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
      <div class="photos">${photos}</div>
      ${logo}`;
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