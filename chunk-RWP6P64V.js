import{d as y}from"./chunk-ZWOUEGUH.js";import{O as h,da as f,i as d,qa as u,wa as m}from"./chunk-XNENNAZS.js";import{a,b as l}from"./chunk-VB56BUGO.js";var k=(()=>{let o=class o{constructor(){this.list={},this.cached={},this._notify=new d([]),this.doc=m(y)}get change(){return this._notify.asObservable().pipe(f(),h(t=>t.length!==0))}clear(){this.list={},this.cached={}}load(t){Array.isArray(t)||(t=[t]);let r=[];return t.forEach(s=>{s.endsWith(".js")?r.push(this.loadScript(s)):r.push(this.loadStyle(s))}),Promise.all(r).then(s=>(this._notify.next(s),Promise.resolve(s)))}loadScript(t,r){return new Promise(s=>{if(this.list[t]===!0){s(l(a({},this.cached[t]),{status:"loading"}));return}this.list[t]=!0;let c=i=>{this.cached[t]=i,s(i),this._notify.next([i])},e=this.doc.createElement("script");e.type="text/javascript",e.src=t,e.charset="utf-8",r&&(e.innerHTML=r),e.readyState?e.onreadystatechange=()=>{(e.readyState==="loaded"||e.readyState==="complete")&&(e.onreadystatechange=null,c({path:t,status:"ok"}))}:e.onload=()=>c({path:t,status:"ok"}),e.onerror=i=>c({path:t,status:"error",error:i}),this.doc.getElementsByTagName("head")[0].appendChild(e)})}loadStyle(t,r="stylesheet",s){return new Promise(c=>{if(this.list[t]===!0){c(this.cached[t]);return}this.list[t]=!0;let e=this.doc.createElement("link");e.rel=r,e.type="text/css",e.href=t,s&&(e.innerHTML=s),this.doc.getElementsByTagName("head")[0].appendChild(e);let i={path:t,status:"ok"};this.cached[t]=i,c(i)})}};o.\u0275fac=function(r){return new(r||o)},o.\u0275prov=u({token:o,factory:o.\u0275fac,providedIn:"root"});let n=o;return n})();export{k as a};