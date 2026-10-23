(function(){
var NUM="254746816008",D=document;
function $(s,r){return (r||D).querySelector(s)}function $$(s,r){return Array.prototype.slice.call((r||D).querySelectorAll(s))}
function wa(m){window.open("https://wa.me/"+NUM+"?text="+encodeURIComponent(m),"_blank","noopener")}
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
/* menu */
var bg=$("#burger"),lk=$("#links");if(bg)bg.onclick=function(){var o=lk.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
/* reveal */
if("IntersectionObserver" in window){var ob=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");ob.unobserve(e.target)}})},{rootMargin:"0px 0px -8% 0px",threshold:.08});$$(".rv").forEach(function(e){ob.observe(e)})}else $$(".rv").forEach(function(e){e.classList.add("in")});
/* hero slideshow */
var sl=$$(".slide");if(sl.length){var cap=$("#cap"),caps=["Welcome to Silver Side","In the heart of Nakuru","A warm welcome awaits","Bright, comfortable spaces","Friendly front desk"],ds=$$("#dots button"),cur=0,tm;
function go(i){cur=(i+sl.length)%sl.length;sl.forEach(function(e,k){e.classList.toggle("on",k==cur)});ds.forEach(function(e,k){e.classList.toggle("on",k==cur)});cap.textContent=caps[cur]}
function auto(){clearInterval(tm);if(!rm)tm=setInterval(function(){go(cur+1)},5500)}
ds.forEach(function(b,i){b.onclick=function(){go(i);auto()}});
function loadRest(){$$(".slide img[data-src]").forEach(function(im){im.src=im.dataset.src;im.removeAttribute("data-src")});auto()}
if(D.readyState=="complete")loadRest();else addEventListener("load",loadRest)}
/* forms */
function on(id,fn){var f=$(id);if(f)f.onsubmit=function(e){e.preventDefault();wa(fn())}}
function v(id){return $(id).value}
on("#bar",function(){return "Hello Silver Side Hotel, I would like to check availability and rates.\nCheck-in: "+v("#b-in")+"\nCheck-out: "+v("#b-out")+"\nRoom: "+v("#b-type")+"\nGuests: "+v("#b-g")});
on("#ff",function(){return "Hello Silver Side Hotel, I would like to reserve a room.\nName: "+v("#f-n")+"\nPhone: "+v("#f-p")+"\nCheck-in: "+v("#f-in")+"\nCheck-out: "+v("#f-out")+"\nRoom: "+v("#f-t")+"\nGuests: "+v("#f-g")+"\nMessage: "+(v("#f-m")||"-")+"\nPlease share availability and rates."});
on("#tf",function(){return "Hello Silver Side Hotel, I would like to reserve a table.\nName: "+v("#t-n")+"\nGuests: "+v("#t-g")+"\nDate: "+v("#t-d")+"\nTime: "+v("#t-t")+"\nNotes: "+(v("#t-m")||"-")});
var today=new Date().toISOString().slice(0,10);$$("input[type=date]").forEach(function(i){i.min=today});
var ft=$("#f-t");if(ft&&!ft.options.length){ft.innerHTML="<option>Any room</option>"+$$("[data-room]").map(function(r){return "<option>"+r.dataset.name+"</option>"}).join("")}
/* room dialog */
var dlg=$("#dlg"),sel;
D.addEventListener("click",function(e){var vb=e.target.closest("[data-view]");
 if(vb&&dlg){var c=vb.closest("[data-room]");sel=c.dataset;$("#dlg-t").textContent=sel.name;$("#dlg-d").textContent=sel.desc;$("#dlg-m").innerHTML="<span>Sleeps "+sel.sleeps+"</span><span>Free Wi-Fi</span><span>Rates on request</span>";$("#dlg-img").innerHTML='<img src="'+sel.full+'" alt="'+sel.alt+'" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">';$("#dlg-r").href="https://wa.me/"+NUM+"?text="+encodeURIComponent("Hello Silver Side Hotel, I would like to reserve the "+sel.name+". Please share availability and rates.");dlg.showModal()}
 if(dlg&&(e.target==dlg||e.target.id=="dlg-x"))dlg.close()});
/* lightbox */
var lb=$("#lb"),set=[],li=0,tx=0;
function show(i){li=(i+set.length)%set.length;var im=set[li],t=$("#lb-i");t.removeAttribute("data-fb");t.src=im.dataset.full||im.currentSrc||im.src;t.alt=im.alt;$("#lb-c").textContent=set.length>1?(li+1)+" / "+set.length:"";$("#lb-p").hidden=$("#lb-n").hidden=set.length<2;if(set.length>1){var nx=set[(li+1)%set.length];new Image().src=nx.dataset.full||nx.src}}
D.addEventListener("click",function(e){var im=e.target.closest(".ph img[data-full]");
 if(im&&lb&&!im.closest("#dlg")){var box=im.closest(".mosaic,.tour,#gal-food");set=box?$$("img[data-full]",box).filter(function(x){return !x.closest(".hide")}):[im];li=set.indexOf(im);show(li);lb.showModal();return}
 if(lb){if(e.target==lb||e.target.id=="lb-x"||e.target.id=="lb-i")lb.close();if(e.target.id=="lb-n")show(li+1);if(e.target.id=="lb-p")show(li-1)}});
if(lb){lb.addEventListener("keydown",function(e){if(e.key=="ArrowRight")show(li+1);if(e.key=="ArrowLeft")show(li-1)});
 lb.addEventListener("touchstart",function(e){tx=e.changedTouches[0].clientX},{passive:true});
 lb.addEventListener("touchend",function(e){var d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50&&set.length>1)show(li+(d<0?1:-1))},{passive:true})}
/* if a photo fails to load, try its other size */
addEventListener("error",function(e){var t=e.target;if(t&&t.tagName=="IMG"&&!t.dataset.fb){var s=t.getAttribute("src")||"",o=s.indexOf("-1400.webp")>-1?s.replace("-1400.webp","-800.webp"):s.indexOf("-800.webp")>-1?s.replace("-800.webp","-1400.webp"):"";if(o){t.dataset.fb=1;t.removeAttribute("srcset");t.src=o}}},true);
/* tour filter */
var fil=$("#fil");if(fil)fil.onclick=function(e){var b=e.target.closest("button");if(!b)return;$$("#fil button").forEach(function(x){x.classList.toggle("on",x==b)});$$("#tour-grid .ph").forEach(function(p){p.classList.toggle("hide",b.textContent!="All"&&p.dataset.c!=b.textContent)})};
/* cookie */
var ck=$("#ck");if(ck){var val=null;try{val=localStorage.getItem("ss-cookie")}catch(x){}if(!val)ck.hidden=false;
function set2(x){try{localStorage.setItem("ss-cookie",x)}catch(y){}ck.hidden=true}$("#ck-y").onclick=function(){set2("yes")};$("#ck-n").onclick=function(){set2("no")}}
})();