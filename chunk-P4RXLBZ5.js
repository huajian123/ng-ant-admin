import{a as p}from"./chunk-HYXQY7LQ.js";import{qa as s,wa as n}from"./chunk-XNENNAZS.js";var u=(()=>{let e=class e{constructor(){this.http=n(p)}getDepts(t){return this.http.post("/department/list/",t)}getDeptsDetail(t){return this.http.get(`/department/${t}/`)}addDepts(t){return this.http.post("/department/",t,{needSuccessInfo:!0})}delDepts(t){return this.http.post("/department/del/",{ids:t},{needSuccessInfo:!0})}editDepts(t){return this.http.put("/department/",t,{needSuccessInfo:!0})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();export{u as a};
