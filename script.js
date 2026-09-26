const movies=[
 {title:"Night Chase",year:2025,genre:"thriller",genreAr:"إثارة",rating:"8.1",desc:"فيلم إثارة خيالي للتجربة على هذا القالب.",poster:"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80"},
 {title:"Dark House",year:2024,genre:"horror",genreAr:"رعب",rating:"7.8",desc:"قصة رعب خيالية داخل منزل غامض.",poster:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"},
 {title:"Final Mission",year:2025,genre:"action",genreAr:"أكشن",rating:"8.4",desc:"مهمة أخيرة مليئة بالمطاردات والمفاجآت.",poster:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80"},
 {title:"The Last Letter",year:2023,genre:"drama",genreAr:"دراما",rating:"8.0",desc:"دراما خيالية عن رسالة تغيّر حياة صاحبها.",poster:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80"},
 {title:"Shadow",year:2022,genre:"thriller",genreAr:"إثارة",rating:"7.5",desc:"لغز غامض يبدأ بعد ظهور ظل غير متوقع.",poster:"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80"},
 {title:"Red Zone",year:2024,genre:"action",genreAr:"أكشن",rating:"7.9",desc:"مغامرة أكشن خيالية في منطقة محظورة.",poster:"https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80"}
];

const grid=document.querySelector("#movieGrid"),search=document.querySelector("#search"),empty=document.querySelector("#empty");
let active="all";

function render(){
 const q=search.value.trim().toLowerCase();
 const list=movies.filter(m=>(active==="all"||m.genre===active)&&m.title.toLowerCase().includes(q));
 grid.innerHTML=list.map((m,i)=>`
 <article class="card" data-i="${movies.indexOf(m)}">
  <img class="poster" src="${m.poster}" alt="${m.title}" loading="lazy">
  <div class="card-body"><h3>${m.title}</h3><div class="meta">${m.year} · ⭐ ${m.rating} · ${m.genreAr}</div></div>
 </article>`).join("");
 empty.style.display=list.length?"none":"block";
}
render();
search.addEventListener("input",render);
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{
 document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));
 b.classList.add("active"); active=b.dataset.genre; render();
}));

const modal=document.querySelector("#modal");
grid.addEventListener("click",e=>{
 const card=e.target.closest(".card"); if(!card)return;
 const m=movies[Number(card.dataset.i)];
 document.querySelector("#modalPoster").src=m.poster;
 document.querySelector("#modalTitle").textContent=m.title;
 document.querySelector("#modalGenre").textContent=m.genreAr;
 document.querySelector("#modalDesc").textContent=m.desc;
 document.querySelector("#modalYear").textContent=m.year;
 document.querySelector("#modalRating").textContent=m.rating;
 modal.classList.remove("hidden");
});
document.querySelector("#close").onclick=()=>modal.classList.add("hidden");
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.add("hidden")});
document.querySelector("#themeBtn").onclick=()=>{
 document.body.classList.toggle("light");
 document.querySelector("#themeBtn").textContent=document.body.classList.contains("light")?"🌙":"☀️";
};
