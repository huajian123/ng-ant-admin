import{b as y,c as I}from"./chunk-4FT5N35B.js";import{a as g}from"./chunk-HYXQY7LQ.js";import{a as h}from"./chunk-3D3NKZKE.js";import{b as T}from"./chunk-BR5TRSLO.js";import{a as b}from"./chunk-DXHFQZTB.js";import{a as w}from"./chunk-WHSVXWNJ.js";import{a as u,b as f}from"./chunk-ZMRRVVPG.js";import{a as S}from"./chunk-XMISJKZ6.js";import{i as d,m as v}from"./chunk-TLY6E2EZ.js";import{Ua as l,Z as p,i as m,qa as s,wa as o}from"./chunk-XNENNAZS.js";var j=(()=>{let e=class e{constructor(){this.http=o(g)}login(t){return this.http.post("/login",t,{needSuccessInfo:!1})}getMenuByUserId(t){return this.http.get(`/sysPermission/menu/${t}`)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var R=(()=>{let e=class e{constructor(){this.menuArray$=new m([])}setMenuArrayStore(t){this.menuArray$.next(t)}getMenuArrayStore(){return this.menuArray$.asObservable()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var V=(()=>{let e=class e{constructor(){this.destroyRef=o(l),this.activatedRoute=o(d),this.tabService=o(I),this.loginService=o(j),this.router=o(v),this.userInfoService=o(w),this.menuService=o(R),this.windowServe=o(b)}getMenuByUserId(t){return this.loginService.getMenuByUserId(t)}loginIn(t){return new Promise(i=>{this.windowServe.setSessionStorage(f,u+t);let n=this.userInfoService.parsToken(u+t);n.authCode.push(h.TabsDetail),n.authCode.push(h.SearchTableDetail),this.userInfoService.setUserInfo(n),this.getMenuByUserId(n.userId).pipe(p(()=>{i()}),S(this.destroyRef)).subscribe(a=>{a=a.filter(c=>(c.selected=!1,c.open=!1,c.menuType==="C"));let C=T(a);this.menuService.setMenuArrayStore(C),i()})})}clearTabCash(){return y.deleteAllRouteSnapshot(this.activatedRoute.snapshot).then(()=>new Promise(t=>{this.tabService.clearTabs(),t()}))}clearSessionCash(){return new Promise(t=>{this.windowServe.removeSessionStorage(f),this.menuService.setMenuArrayStore([]),t()})}loginOut(){return this.clearTabCash().then(()=>this.clearSessionCash()).then(()=>{this.router.navigate(["/login/login-form"])})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();export{j as a,R as b,V as c};
