
const projects = {
  haccman:{flag:"MSc thesis · Top marks",title:"Haccman",
    desc:"A jailbreaking game where players try to break a RAG-based hospital-assistant chatbot. Built as my master's thesis in Human-Computer Interaction — graded 12.",
    points:["Custom chunking and embeddings with metadata","Combined semantic + full-text retrieval","Playable in the browser at hacc-man.com"],
    kv:[["Type","MSc thesis (HCI)"],["Status","Live · graded 12"],["Stack","React · JavaScript · CSS · Supabase (PostgreSQL) · Edge Functions"]],
    links:[["Visit hacc-man.com","https://hacc-man.com"],["GitHub","https://github.com/emilHojgaard/HaccmanEA"]]},
  hacky:{flag:"Own project · In progress",title:"Hacky",
    desc:"The successor to Haccman — a new visual theme on the same RAG backend, with planned extensions and modifications in progress.",
    points:["Rebuilt with a new visual identity","Same RAG database and retrieval methods","Headed for its own domain — potentially an app"],
    kv:[["Type","Own project"],["Status","In progress"],["Stack","React · RAG"]],
    links:[["GitHub","https://github.com/emilHojgaard/haccman-2.0"]]},
  pozo:{flag:"Client work · Live",title:"Escarleth Romo Pozo",
    desc:"Portfolio website for a working artist, designed and rebuilt across two versions. Version 2 is the live site.",
    points:["Full design and build","Two iterations shipped"],
    kv:[["Type","Client work"],["Status","Live"],["Stack","React · CSS"]],
    links:[["Visit escarlethromopozo.com","https://escarlethromopozo.com"],["GitHub (v2)","https://github.com/emilHojgaard/PozoProductions2.0"],["GitHub (v1)","https://github.com/emilHojgaard/pozo-productions"]]},
  safespace:{flag:"Course project",title:"Safe Space",
    desc:"A moderated chat platform for students facing mental health challenges.",
    points:["Moderation-first chat design","React frontend on a Back4App backend"],
    kv:[["Type","Course project"],["Stack","React · JavaScript · CSS · Back4App"]],
    links:[["GitHub","https://github.com/emilHojgaard/safespace-react-2024"]]},
  hats:{flag:"Course project",title:"Hat Webshop",
    desc:"A webshop frontend in React/TypeScript with Tailwind CSS, backed by a RESTful API written in JavaScript.",
    points:["Typed React frontend","RESTful API backend"],
    kv:[["Type","Course project"],["Stack","TypeScript · React · Tailwind CSS · REST"]],
    links:[["GitHub","https://github.com/antonskoumoller/hat-project-2"]]}
};

const pages=["home","projects","journey","skills","contact"];
function show(p){
  if(!pages.includes(p)) p="home";
  pages.forEach(x=>{
    document.getElementById("page-"+x).classList.toggle("on",x===p);
    document.querySelectorAll('[data-nav="'+x+'"]').forEach(a=>a.classList.toggle("active",x===p));
  });
  window.scrollTo({top:0});
}
window.addEventListener("hashchange",()=>show(location.hash.slice(1)));
show(location.hash.slice(1)||"home");

const overlay=document.getElementById("overlay");
let lastFocus=null;
function openProject(id){
  const p=projects[id]; if(!p) return;
  lastFocus=document.activeElement;
  document.getElementById("m-flag").textContent=p.flag;
  document.getElementById("m-title").textContent=p.title;
  document.getElementById("m-desc").textContent=p.desc;
  document.getElementById("m-shot").textContent=p.title.toUpperCase()+" — SCREENSHOT / DEMO";
  document.getElementById("m-points").innerHTML=p.points.map(x=>"<li>"+x+"</li>").join("");
  document.getElementById("m-kv").innerHTML=p.kv.map(([k,v])=>'<div class="row"><span class="k">'+k+'</span><span>'+v+"</span></div>").join("");
  const linkIcon='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>';
  document.getElementById("m-links").innerHTML=p.links.map(([t,h],i)=>'<a class="alink'+(i===0?"":" dim")+'" href="'+h+'" target="_blank" rel="noopener">'+t+linkIcon+"</a>").join("");
  overlay.classList.add("on"); overlay.setAttribute("aria-hidden","false");
  document.getElementById("m-close").focus();
}
function closeProject(){
  overlay.classList.remove("on"); overlay.setAttribute("aria-hidden","true");
  if(lastFocus) lastFocus.focus();
}
document.querySelectorAll("[data-open]").forEach(el=>{
  el.addEventListener("click",()=>openProject(el.dataset.open));
  el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openProject(el.dataset.open);}});
});
document.getElementById("m-close").addEventListener("click",closeProject);
overlay.addEventListener("click",e=>{if(e.target===overlay)closeProject();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeProject();});

function setupFilter(filterId,itemSelector){
  const box=document.getElementById(filterId); if(!box) return;
  box.querySelectorAll("span").forEach(pill=>{
    pill.addEventListener("click",()=>{
      box.querySelectorAll("span").forEach(s=>s.classList.remove("on"));
      pill.classList.add("on");
      const f=pill.dataset.f;
      document.querySelectorAll(itemSelector).forEach(el=>{
        el.style.display=(f==="all"||(el.dataset.tags||"").split(" ").includes(f))?"":"none";
      });
    });
  });
}
setupFilter("proj-filters","#page-projects .card");
setupFilter("skill-filters","#page-skills .skillsec");

const navEl=document.querySelector("nav");
let lastY=window.scrollY;
window.addEventListener("scroll",()=>{
  const y=window.scrollY;
  if(y>lastY+8&&y>90){navEl.classList.add("nav-hidden");}
  else if(y<lastY-8){navEl.classList.remove("nav-hidden");}
  if(Math.abs(y-lastY)>8)lastY=y;
},{passive:true});

document.querySelectorAll(".tg").forEach(tg=>{
  const detail=tg.querySelector(".tgdetail");
  tg.querySelectorAll(".chips span").forEach(ch=>{
    ch.addEventListener("click",()=>{
      const wasActive=ch.classList.contains("active");
      tg.querySelectorAll(".chips span").forEach(s=>s.classList.remove("active"));
      if(wasActive){detail.textContent=detail.dataset.hint;return;}
      ch.classList.add("active");
      detail.textContent=ch.dataset.desc;
    });
  });
});
