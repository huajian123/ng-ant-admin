import{a as n}from"./chunk-HYXQY7LQ.js";import{qa as r,wa as i}from"./chunk-XNENNAZS.js";var a=(()=>{let s=class s{constructor(){this.http=i(n)}getMenuList(t){return this.http.post("/sysPermission/list",t)}addMenus(t){return this.http.post("/sysPermission",t,{needSuccessInfo:!0})}editMenus(t){return this.http.put("/sysPermission",t,{needSuccessInfo:!0})}delMenus(t){return this.http.post("/sysPermission/del",{ids:[t]},{needSuccessInfo:!0})}getMenuDetail(t){return this.http.get(`/sysPermission/${t}`)}};s.\u0275fac=function(o){return new(o||s)},s.\u0275prov=r({token:s,factory:s.\u0275fac,providedIn:"root"});let e=s;return e})();export{a};