import{a as P}from"./chunk-V6VP5ZUC.js";import{d as c,e as u,f as D}from"./chunk-DBID6Z5F.js";import{a as R}from"./chunk-T5C3MTIU.js";import{a as A}from"./chunk-NYWSPOYR.js";import{a as m}from"./chunk-XMISJKZ6.js";import{i as S,m as g}from"./chunk-TLY6E2EZ.js";import{d as b}from"./chunk-ZWOUEGUH.js";import{Ua as T,i as p,qa as y,wa as n}from"./chunk-XNENNAZS.js";import{g as v}from"./chunk-VB56BUGO.js";var w=v(P());var I=(()=>{let s=class s{constructor(){this._doc=n(b),this.platform=n(A)}_getDoc(){return this._doc||document}_getWin(){return this._getDoc().defaultView||window}getScrollPosition(t){if(!this.platform.isBrowser)return[0,0];let e=this._getWin();return t&&t!==e?[t.scrollLeft,t.scrollTop]:[e.pageXOffset,e.pageYOffset]}scrollToPosition(t,e){this.platform.isBrowser&&(t||this._getWin()).scrollTo(e[0],e[1])}scrollToElement(t,e=0){if(!this.platform.isBrowser)return;t||(t=this._getDoc().body),t.scrollIntoView();let r=this._getWin();r&&r.scrollBy&&(r.scrollBy(0,t.getBoundingClientRect().top-e),r.pageYOffset<20&&r.scrollBy(0,-r.pageYOffset))}scrollToTop(t=0){this.platform.isBrowser&&this.scrollToElement(this._getDoc().body,t)}};s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=y({token:s,factory:s.\u0275fac,providedIn:"root"});let i=s;return i})();var h=(()=>{let s=class s{constructor(){this.destroyRef=n(T),this.doc=n(b),this.scrollService=n(I),this.isShowTab$=n(R).getThemesMode()}static deleteRouteSnapshot(t){s.handlers[t]&&(s.handlers[t].componentRef&&s.handlers[t].componentRef.destroy(),delete s.handlers[t],delete s.scrollHandlers[t])}static deleteAllRouteSnapshot(t){return new Promise(e=>{Object.keys(s.handlers).forEach(r=>{s.deleteRouteSnapshot(r)}),s.waitDelete=c(t),e()})}shouldDetach(t){let e=!1;return this.isShowTab$.pipe(m(this.destroyRef)).subscribe(r=>{e=r.isShowTab}),t.data.shouldDetach!=="no"&&e}store(t,e){if(t.data.shouldDetach==="no")return;let r=u(t);if(s.waitDelete===r){this.runHook("_onReuseDestroy",e.componentRef),e.componentRef.destroy(),s.waitDelete=null,delete s.scrollHandlers[r];return}let a=[];t.data.needKeepScroll!=="no"&&((t.data.scrollContain??[]).forEach(l=>{let d=this.doc.querySelector(l);if(d){let f=this.scrollService.getScrollPosition(d);a.push({[l]:f})}}),a.push({window:this.scrollService.getScrollPosition()})),s.scrollHandlers[r]={scroll:a},s.handlers[r]=e,e&&e.componentRef&&this.runHook("_onReuseDestroy",e.componentRef)}shouldAttach(t){let e=u(t);return!!e&&!!s.handlers[e]}retrieve(t){let e=u(t);return e?s.handlers[e]:null}shouldReuseRoute(t,e){let r=u(t),a=u(e);r&&s.handlers[r]&&this.runHook("_onReuseInit",s.handlers[r].componentRef);let o=r===a;for(;t.firstChild;)t=t.firstChild;let l=u(t);return l&&s.scrollHandlers[l]&&s.scrollHandlers[l].scroll.forEach(d=>{Object.keys(d).forEach(f=>{setTimeout(()=>{this.scrollService.scrollToPosition(this.doc.querySelector(f),d[f])},1)})}),o}runHook(t,e){if(e==null||!e.instance)return;let r=e.instance,a=r[t];typeof a=="function"&&a.call(r)}};s.handlers={},s.scrollHandlers={};let i=s;return i})();var X=(()=>{let s=class s{constructor(){this.tabArray$=new p([]),this.tabArray=[],this.currSelectedIndexTab=0,this.router=n(g),this.activatedRoute=n(S)}getTabArray$(){return this.tabArray$.asObservable()}setTabArray$(t){this.tabArray$.next(t)}setTabsSourceData(){this.setTabArray$(this.tabArray)}clearTabs(){this.tabArray=[],this.setTabsSourceData()}addTab(t,e=!1){this.tabArray.forEach(r=>{r.title===t.title&&!e&&(r.snapshotArray=w.default.uniqBy([...r.snapshotArray,...t.snapshotArray],a=>a._routerState.url),r.path=t.path)}),this.tabArray.find(r=>r.path===t.path)||this.tabArray.push(t),this.setTabsSourceData()}getTabArray(){return this.tabArray}changeTabTitle(t){this.tabArray[this.getCurrentTabIndex()].title=t,this.setTabArray$(this.tabArray)}delReuseStrategy(t){this.getSnapshotArrayKey(t).forEach(r=>{h.deleteRouteSnapshot(r)})}getSnapshotArrayKey(t){let e=[];return t.forEach(r=>{let a=c(r);e.push(a)}),e}delRightTab(t,e){let r=this.tabArray.filter((a,o)=>o>e);this.tabArray.length=e+1,r.forEach(({snapshotArray:a})=>{this.delReuseStrategy(a)}),e<this.currSelectedIndexTab&&(h.waitDelete=c(this.activatedRoute.snapshot),this.router.navigateByUrl(this.tabArray[e].path)),this.setTabsSourceData()}delLeftTab(t,e){let r=this.tabArray.filter((a,o)=>o<e);this.currSelectedIndexTab===e?this.currSelectedIndexTab=0:this.currSelectedIndexTab<e?(h.waitDelete=c(this.activatedRoute.snapshot),this.currSelectedIndexTab=0):this.currSelectedIndexTab>e&&(this.currSelectedIndexTab=this.currSelectedIndexTab-r.length),this.tabArray=this.tabArray.splice(r.length),r.forEach(({snapshotArray:a})=>{this.delReuseStrategy(a)}),this.setTabsSourceData(),this.router.navigateByUrl(this.tabArray[this.currSelectedIndexTab].path)}delOtherTab(t,e){let r=this.tabArray.filter((a,o)=>o!==e);this.tabArray=[this.tabArray[e]],r.forEach(({snapshotArray:a})=>{this.delReuseStrategy(a)}),e!==this.currSelectedIndexTab&&(h.waitDelete=c(this.activatedRoute.snapshot)),this.router.navigateByUrl(t),this.setTabsSourceData()}delTab(t,e){if(e===this.currSelectedIndexTab){let r=c(this.activatedRoute.snapshot);this.tabArray.splice(e,1),this.currSelectedIndexTab=e-1<0?0:e-1,this.router.navigateByUrl(this.tabArray[this.currSelectedIndexTab].path),h.waitDelete=r}else e<this.currSelectedIndexTab?(this.tabArray.splice(e,1),this.currSelectedIndexTab=this.currSelectedIndexTab-1):e>this.currSelectedIndexTab&&this.tabArray.splice(e,1);this.delReuseStrategy(t.snapshotArray),this.setTabsSourceData()}findIndex(t){let e=this.tabArray.findIndex(r=>t===r.path);return this.currSelectedIndexTab=e,e}getCurrentPathWithoutParam(t,e){let r=[],a=Object.values(e);return t.forEach(o=>{a.includes(o.path)||r.push(o.path)}),`${r.join("/")}`}refresh(){let t=this.activatedRoute.snapshot,e=c(t);for(;t.firstChild;)t=t.firstChild;let r,a="";if(Object.keys(t.params).length>0)r=t.params,a=this.getCurrentPathWithoutParam(t._urlSegment.segments,r),this.router.navigateByUrl("/blank/global-loading",{skipLocationChange:!0}).then(()=>{h.deleteRouteSnapshot(e),this.router.navigate([a,...Object.values(r)])});else{r=t.queryParams;let o=this.router.url,l=D(o);this.router.navigateByUrl("/blank/global-loading",{skipLocationChange:!0}).then(()=>{h.deleteRouteSnapshot(e),this.router.navigate([l],{queryParams:r})})}}getCurrentTabIndex(){return this.currSelectedIndexTab}};s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=y({token:s,factory:s.\u0275fac,providedIn:"root"});let i=s;return i})();export{I as a,h as b,X as c};