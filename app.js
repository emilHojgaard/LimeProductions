
const projects = {
  haccman:{flag:"MSc thesis · Top marks",title:"Haccman",
    desc:"A jailbreaking game where players try to break a RAG-based hospital-assistant chatbot. Built as my master's thesis in Human-Computer Interaction — graded 12.",
    points:["Custom chunking and embeddings with metadata","Combined semantic + full-text retrieval","Playable in the browser at hacc-man.com"],
    kv:[["Type","MSc thesis (HCI)"],["Status","Live · graded 12"],["Stack","React · JavaScript · CSS · Supabase (PostgreSQL) · Edge Functions"]],
    shots:[["assets/shots/haccman-1.jpg","The arcade landing screen"],["assets/shots/haccman-2.jpg","Choosing an opponent — each has its own jailbreak challenge"],["assets/shots/haccman-3.jpg","The challenge briefing and chat interface"],["assets/shots/haccman-4.jpg","A jailbreak attempt, and the hospital bot refusing to leak patient data"]],
    links:[["Visit hacc-man.com","https://hacc-man.com"],["GitHub","https://github.com/emilHojgaard/Haccman-EA"]]},
  hacky:{flag:"Own project · In progress",title:"Hacky",
    desc:"The successor to Haccman — a new visual theme on the same RAG backend, with planned extensions and modifications in progress.",
    points:["Rebuilt with a new visual identity","Same RAG database and retrieval methods","Headed for its own domain — potentially an app"],
    kv:[["Type","Own project"],["Status","In progress"],["Stack","React · RAG"]],
    shots:[["assets/shots/hacky-1.jpg","The rebuilt landing screen"],["assets/shots/hacky-2.jpg","Same onboarding flow on the new theme"]],
    links:[["GitHub","https://github.com/emilHojgaard/haccman-2.0"]]},
  pozo:{flag:"Client work · Live",title:"Escarleth Romo Pozo",
    desc:"Portfolio website for a working artist, designed and rebuilt across two versions. Version 2 is the live site.",
    points:["Full design and build","Two iterations shipped"],
    kv:[["Type","Client work"],["Status","Live"],["Stack","React · CSS"]],
    versions:[
      {id:"v2",label:"Version 2",note:"Live today",flag:"Client work · Live",
       desc:"The site as it stands today — a full rebuild with a new visual identity: acid green on black, the works index reduced to three cut-out figures.",
       links:[["Visit escarlethromopozo.com","https://escarlethromopozo.com"],["GitHub","https://github.com/emilHojgaard/PozoProductions2.0"]],
       proto:{start:"home",frames:{home:{src:"assets/shots/pozo-home.jpg",cap:"The landing page",hs:[{x:3.13,y:34.65,w:30,h:2.5,t:"about",l:"Bio"},{x:78.52,y:44.25,w:16.48,h:7.38,t:"works",l:"Works"},{x:79.45,y:53.25,w:15.55,h:7.38,t:"about",l:"About"},{x:74.32,y:63,w:20.68,h:6,t:"contact",l:"Contact"}]},
      works:{src:"assets/shots/pozo-works.jpg",cap:"The works index — open any piece",hs:[{x:3.13,y:3,w:22.57,h:4,t:"home",l:"Escarleth romo pozo"},{x:79.47,y:3.88,w:4.02,h:2.13,t:"about",l:"About"},{x:86.61,y:3.88,w:5.58,h:2.13,t:"contact",l:"Contact"},{x:2.5,y:29.5,w:30,h:32,t:"work",l:"La mala"},{x:35,y:29.5,w:30,h:32,t:"work",l:"Yielding"},{x:67.5,y:29.5,w:30,h:32,t:"work",l:"Tender points"}]},
      work:{src:"assets/shots/pozo-work.jpg",cap:"A single work in detail",hs:[{x:3.13,y:3,w:22.57,h:4,t:"home",l:"Escarleth romo pozo"},{x:72.08,y:3.88,w:4.26,h:2.13,t:"works",l:"Works"},{x:79.47,y:3.88,w:4.02,h:2.13,t:"about",l:"About"},{x:86.61,y:3.88,w:5.58,h:2.13,t:"contact",l:"Contact"}]},
      about:{src:"assets/shots/pozo-about.jpg",cap:"About the artist",hs:[{x:3.13,y:3,w:22.57,h:4,t:"home",l:"Escarleth romo pozo"},{x:72.08,y:3.88,w:4.26,h:2.13,t:"works",l:"Works"},{x:86.61,y:3.88,w:5.58,h:2.13,t:"contact",l:"Contact"}]},
      contact:{src:"assets/shots/pozo-contact.jpg",cap:"The contact page",hs:[{x:3.13,y:3,w:22.57,h:4,t:"home",l:"Escarleth romo pozo"},{x:72.08,y:3.88,w:4.26,h:2.13,t:"works",l:"Works"},{x:79.47,y:3.88,w:4.02,h:2.13,t:"about",l:"About"}]}}}},
      {id:"v1",label:"Version 1",note:"Shattered Pieces",flag:"Client work · Retired",
       desc:"The first version, built under the title Shattered Pieces — full-bleed performance photography with a red display face laid over it, and the navigation tucked into the top-left corner.",
       links:[["GitHub","https://github.com/emilHojgaard/pozo-productions"]],
       proto:{start:"home",frames:{home:{src:"assets/shots/pozoA-home.jpg",cap:"The landing page",hs:[{x:4.46,y:18.63,w:4.71,h:2.63,t:"works",l:"Works"},{x:4.46,y:22.13,w:4.46,h:2.63,t:"about",l:"About"},{x:4.46,y:25.62,w:6.31,h:2.63,t:"contact",l:"Contact"}]},
        works:{src:"assets/shots/pozoA-works.jpg",cap:"The works index — open any piece",hs:[{x:1.88,y:1.75,w:37.34,h:7.88,t:"home",l:"Shattered pieces / escarleth"},{x:82.87,y:4.44,w:3.47,h:2,t:"about",l:"About"},{x:88.84,y:4.44,w:4.91,h:2,t:"contact",l:"Contact"},{x:1.88,y:23.25,w:30.42,h:36.5,t:"work",l:"La mala"},{x:34.79,y:23.25,w:30.42,h:36.5,t:"work",l:"Yielding"},{x:67.71,y:23.25,w:30.42,h:36.5,t:"work",l:"Tender points"}]},
        work:{src:"assets/shots/pozoA-work.jpg",cap:"A single work in detail",hs:[{x:1.88,y:1.75,w:37.34,h:7.88,t:"home",l:"Shattered pieces / escarleth"},{x:76.71,y:4.44,w:3.66,h:2,t:"works",l:"Works"},{x:82.87,y:4.44,w:3.47,h:2,t:"about",l:"About"},{x:88.84,y:4.44,w:4.91,h:2,t:"contact",l:"Contact"}]},
        about:{src:"assets/shots/pozoA-about.jpg",cap:"About the artist",hs:[{x:1.88,y:1.75,w:37.34,h:7.88,t:"home",l:"Shattered pieces / escarleth"},{x:76.71,y:4.44,w:3.66,h:2,t:"works",l:"Works"},{x:88.84,y:4.44,w:4.91,h:2,t:"contact",l:"Contact"}]},
        contact:{src:"assets/shots/pozoA-contact.jpg",cap:"The contact page",hs:[{x:1.88,y:1.75,w:37.34,h:7.88,t:"home",l:"Shattered pieces / escarleth"},{x:76.71,y:4.44,w:3.66,h:2,t:"works",l:"Works"},{x:82.87,y:4.44,w:3.47,h:2,t:"about",l:"About"}]}}}}
    ],
    links:[]},
  safespace:{flag:"Course project",title:"Safe Space",
    desc:"A moderated chat platform for students facing mental health challenges.",
    points:["Moderation-first chat design","React frontend on a Back4App backend"],
    kv:[["Type","Course project"],["Stack","React · JavaScript · CSS · Back4App"]],
    shots:[["assets/shots/safespace-1.jpg","The landing page, explaining diagnosis-based matchmaking"]],
    links:[["GitHub","https://github.com/emilHojgaard/safe-space-react-2024"]]},
  hats:{flag:"Course project",title:"Hat Webshop",
    desc:"A webshop frontend in React/TypeScript with Tailwind CSS, backed by a RESTful API written in JavaScript.",
    points:["Typed React frontend","RESTful API backend"],
    kv:[["Type","Course project"],["Stack","TypeScript · React · Tailwind CSS · REST"]],
    shots:[["assets/shots/hats-1.jpg","The storefront, served by the project's own REST API"],["assets/shots/hats-2.jpg","Browsing the shop"]],
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

// ---- project demo: a walk-through of the running application ----
let demoFrames=[], demoAt=0, demoTimer=null;
function renderFrame(){
  const [src,caption]=demoFrames[demoAt];
  const img=document.getElementById("m-demo-img");
  img.src=src;
  img.alt=caption;
  document.getElementById("m-demo-cap").textContent=caption;
  document.getElementById("m-demo-step").textContent=(demoAt+1)+" / "+demoFrames.length;
  document.querySelectorAll("#m-demo-dots button").forEach((d,i)=>d.classList.toggle("on",i===demoAt));
}
function goFrame(i){
  demoAt=(i+demoFrames.length)%demoFrames.length;
  renderFrame();
}
function buildDemo(p){
  clearInterval(demoTimer);
  const wrap=document.getElementById("m-demo");
  const proto=document.getElementById("m-proto");
  demoFrames=[]; protoFrames=null;

  const shell=document.querySelector(".modal-wrap");
  if(p.proto){                       // ---- clickable prototype ----
    wrap.style.display="none"; proto.style.display="";
    shell.classList.add("proto-mode");
    protoFrames=p.proto.frames;
    showProtoFrame(p.proto.start);
    return;
  }
  shell.classList.remove("proto-mode");
  proto.style.display="none";
  demoFrames=p.shots||[];
  if(!demoFrames.length){ wrap.style.display="none"; return; }
  wrap.style.display="";
  document.getElementById("m-demo-dots").innerHTML=
    demoFrames.map((_,i)=>'<button type="button" aria-label="Frame '+(i+1)+'"></button>').join("");
  document.querySelectorAll("#m-demo-dots button").forEach((d,i)=>d.addEventListener("click",()=>{clearInterval(demoTimer);goFrame(i);}));
  demoAt=0; renderFrame();
  wrap.classList.toggle("single",demoFrames.length===1);
  if(demoFrames.length>1) demoTimer=setInterval(()=>goFrame(demoAt+1),3800);
}

// ---- prototype mode: navigate the screenshots like the real thing ----
let protoFrames=null, protoAt=null;
function showProtoFrame(id){
  const f=protoFrames[id]; if(!f) return;
  protoAt=id;
  const img=document.getElementById("m-proto-img");
  img.src=f.src; img.alt=f.cap;
  document.getElementById("m-proto-cap").textContent=f.cap;
  document.getElementById("m-proto-spots").innerHTML=f.hs.map(h=>
    '<button type="button" class="spot" style="left:'+h.x+'%;top:'+h.y+'%;width:'+h.w+'%;height:'+h.h+'%" '+
    'data-t="'+h.t+'" aria-label="Go to '+h.l+'"><span>'+h.l+'</span></button>').join("");
  document.querySelectorAll("#m-proto-spots .spot").forEach(b=>
    b.addEventListener("click",()=>showProtoFrame(b.dataset.t)));
  const stage=document.querySelector(".proto-stage");
  stage.classList.remove("hint"); void stage.offsetWidth; stage.classList.add("hint");
  const mo=document.querySelector(".modal"); mo.scrollTop=0; mo.classList.remove("scrolled");
}

function openProject(id){
  const p=projects[id]; if(!p) return;
  lastFocus=document.activeElement;
  document.getElementById("m-flag").textContent=p.flag;
  document.getElementById("m-title").textContent=p.title;
  document.getElementById("m-points").innerHTML=p.points.map(x=>"<li>"+x+"</li>").join("");
  document.getElementById("m-kv").innerHTML=p.kv.map(([k,v])=>'<div class="row"><span class="k">'+k+'</span><span>'+v+"</span></div>").join("");

  const tabs=document.getElementById("m-vtabs");
  if(p.versions&&p.versions.length>1){
    tabs.innerHTML=p.versions.map((v,i)=>
      '<button type="button" class="vtab'+(i===0?" on":"")+'" data-v="'+i+'">'+v.label+'<small>'+v.note+'</small></button>').join("");
    tabs.querySelectorAll(".vtab").forEach(b=>b.addEventListener("click",()=>{
      tabs.querySelectorAll(".vtab").forEach(x=>x.classList.remove("on"));
      b.classList.add("on");
      showVersion(p,+b.dataset.v);
    }));
    showVersion(p,0);
  }else{
    tabs.innerHTML="";
    showVersion(p,null);
  }
  overlay.classList.add("on"); overlay.setAttribute("aria-hidden","false");
  document.getElementById("m-close").focus();
}

// a project may ship several versions; each carries its own text, links and prototype
function showVersion(p,i){
  const v=(i===null)?p:p.versions[i];
  document.getElementById("m-flag").textContent=v.flag||p.flag;
  document.getElementById("m-desc").textContent=v.desc||p.desc;
  const links=(v.links&&v.links.length)?v.links:(p.links||[]);
  const visit=document.getElementById("m-visit");
  const primary=links.find(([t])=>/^visit/i.test(t));
  const icon='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>';
  if(primary){ visit.href=primary[1]; visit.innerHTML=primary[0]+icon; }
  else { visit.removeAttribute("href"); visit.innerHTML=""; }
  document.getElementById("m-links").innerHTML=links.filter(l=>l!==primary)
    .map(([t,h],n)=>'<a class="alink'+(n===0&&!primary?"":" dim")+'" href="'+h+'" target="_blank" rel="noopener">'+t+icon+"</a>").join("");
  buildDemo(v.proto?v:p);
}

function closeProject(){
  clearInterval(demoTimer);
  overlay.classList.remove("on"); overlay.setAttribute("aria-hidden","true");
  if(lastFocus) lastFocus.focus();
}
document.querySelectorAll("[data-open]").forEach(el=>{
  el.addEventListener("click",()=>openProject(el.dataset.open));
  el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openProject(el.dataset.open);}});
});
document.querySelector(".modal").addEventListener("scroll",function(){
  this.classList.toggle("scrolled",this.scrollTop>12);
},{passive:true});
document.getElementById("m-close").addEventListener("click",closeProject);
overlay.addEventListener("click",e=>{if(e.target===overlay)closeProject();});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape")closeProject();
  if(!overlay.classList.contains("on")||demoFrames.length<2)return;
  if(e.key==="ArrowRight"){clearInterval(demoTimer);goFrame(demoAt+1);}
  if(e.key==="ArrowLeft"){clearInterval(demoTimer);goFrame(demoAt-1);}
});

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
