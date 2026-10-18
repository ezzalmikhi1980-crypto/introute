// Language toggle (EN/AR, RTL) and hash router
import {$} from './utils';
/* language + router */
function L(l:string){const d=document.documentElement;d.lang=l;d.dir=l=='ar'?'rtl':'ltr';document.querySelectorAll<HTMLElement>('option[data-t]').forEach(o=>o.textContent=o.dataset.t!.split('|')[l=='ar'?1:0]);$('#lb').textContent=l=='ar'?'EN':'عربي';document.title=l=='ar'?'المسار الدولي':'The International Route';try{localStorage.setItem('l',l)}catch(e){}}
$('#lb').onclick=()=>L(document.documentElement.lang=='ar'?'en':'ar');
let sl0=null;try{sl0=localStorage.getItem('l')}catch(e){}
L(sl0||((navigator.language||'').startsWith('ar')?'ar':'en'));
const PG=['home','services','quote','partners'];
function go(){let h=location.hash.slice(1);if(!PG.includes(h))h='home';document.body.dataset.p=h;PG.forEach(p=>$('#p-'+p).classList.toggle('on',p==h));document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('cur',a.getAttribute('href')=='#'+h));scrollTo(0,0)}
addEventListener('hashchange',go);go();
