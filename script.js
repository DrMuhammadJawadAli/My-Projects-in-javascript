// ====== 1) EDIT THIS LIST ONLY ======
const projects = [
  {
    title: "Hello World Button",
    folder: "1 Hello world Button",  // folder name exactly as in your repo
    description: "Click a button to show ‘Hello, World!’ and change styles via JS.",
    tags: ["basics", "dom", "events"],
    badge: "P1"
  },
  // Add more like this:
  // {
  //   title: "Counter App",
  //   folder: "2 Counter App",
  //   description: "Increment / decrement counter with state and localStorage.",
  //   tags: ["dom", "state", "storage"],
  //   badge: "P2"
  // },
];


// ====== 2) RENDERING & UI (no need to edit) ======
const grid = document.getElementById("grid");
const tagsWrap = document.getElementById("tags");
const searchInput = document.getElementById("search");
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const allTags = Array.from(
  new Set(projects.flatMap(p => p.tags || []))
).sort();

let activeTag = null;
let query = "";

function projectMatches(p) {
  const q = query.trim().toLowerCase();
  const textBlob = [p.title, p.description, ...(p.tags || [])]
    .join(" ")
