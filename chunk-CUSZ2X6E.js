import{d as _e,i as H,j as L,k as R}from"./chunk-XF3P377I.js";import{a as O,c as B}from"./chunk-HG7U7QCD.js";import{a as ge,b as ye}from"./chunk-6ZE6SAQI.js";import{b as Se}from"./chunk-FMV2SP2L.js";import{f as j,g as E}from"./chunk-YGFGTHXD.js";import{I as Ce,f as fe}from"./chunk-LMT2TBSV.js";import{l as A}from"./chunk-7PKCM743.js";import{a as ue,b as ve}from"./chunk-MCCZJH2J.js";import{W as J,X as M,ca as N,da as C,ea as he}from"./chunk-NYWSPOYR.js";import{$b as S,Aa as d,Ac as m,Ba as te,Bc as g,Eb as ae,Ic as U,Jc as f,K as X,Kc as b,Lb as G,Lc as ze,Ma as ne,Na as ie,O as Y,Ob as u,Pb as re,Qb as c,Sb as T,Tb as se,Uc as w,Xa as oe,Zb as Q,ac as _,bc as x,cc as a,dc as r,dd as q,ec as p,fc as F,gc as k,hd as y,ia as D,ic as le,oc as ce,qc as h,r as I,ra as ee,rc as V,sc as Z,ub as s,vb as z,wc as pe,xc as me,yc as de,zc as P}from"./chunk-XNENNAZS.js";var Ee=["*"],ke=["collapseHeader"];function Pe(e,t){if(e&1&&(F(0),p(1,"span",7),k()),e&2){let l=t.$implicit,i=h(2);s(),c("nzType",l||"right")("nzRotate",i.nzActive?90:0)}}function be(e,t){if(e&1&&(a(0,"div"),u(1,Pe,2,2,"ng-container",3),r()),e&2){let l=h();s(),c("nzStringTemplateOutlet",l.nzExpandedIcon)}}function we(e,t){if(e&1&&(F(0),m(1),k()),e&2){let l=h();s(),g(l.nzHeader)}}function Oe(e,t){if(e&1&&(F(0),m(1),k()),e&2){let l=h(2);s(),g(l.nzExtra)}}function Be(e,t){if(e&1&&(a(0,"div",4),u(1,Oe,2,1,"ng-container",3),r()),e&2){let l=h();s(),c("nzStringTemplateOutlet",l.nzExtra)}}var xe="collapse",K=(()=>{let t=class t{constructor(i,n,o,v){this.nzConfigService=i,this.cdr=n,this.directionality=o,this.destroy$=v,this._nzModuleName=xe,this.nzAccordion=!1,this.nzBordered=!0,this.nzGhost=!1,this.nzExpandIconPosition="start",this.dir="ltr",this.listOfNzCollapsePanelComponent=[],this.nzConfigService.getConfigChangeEventForComponent(xe).pipe(D(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){this.directionality.change?.pipe(D(this.destroy$)).subscribe(i=>{this.dir=i,this.cdr.detectChanges()}),this.dir=this.directionality.value}addPanel(i){this.listOfNzCollapsePanelComponent.push(i)}removePanel(i){this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(i),1)}click(i){this.nzAccordion&&!i.nzActive&&this.listOfNzCollapsePanelComponent.filter(n=>n!==i).forEach(n=>{n.nzActive&&(n.nzActive=!1,n.nzActiveChange.emit(n.nzActive),n.markForCheck())}),i.nzActive=!i.nzActive,i.nzActiveChange.emit(i.nzActive)}};t.\u0275fac=function(n){return new(n||t)(z(J),z(q),z(he,8),z(A))},t.\u0275cmp=d({type:t,selectors:[["nz-collapse"]],hostAttrs:[1,"ant-collapse"],hostVars:10,hostBindings:function(n,o){n&2&&T("ant-collapse-icon-position-start",o.nzExpandIconPosition==="start")("ant-collapse-icon-position-end",o.nzExpandIconPosition==="end")("ant-collapse-ghost",o.nzGhost)("ant-collapse-borderless",!o.nzBordered)("ant-collapse-rtl",o.dir==="rtl")},inputs:{nzAccordion:[2,"nzAccordion","nzAccordion",y],nzBordered:[2,"nzBordered","nzBordered",y],nzGhost:[2,"nzGhost","nzGhost",y],nzExpandIconPosition:"nzExpandIconPosition"},exportAs:["nzCollapse"],standalone:!0,features:[U([A]),G,f],ngContentSelectors:Ee,decls:1,vars:0,template:function(n,o){n&1&&(V(),Z(0))},encapsulation:2,changeDetection:0});let e=t;return I([M()],e.prototype,"nzAccordion",void 0),I([M()],e.prototype,"nzBordered",void 0),I([M()],e.prototype,"nzGhost",void 0),e})(),Ne="collapsePanel",W=(()=>{let t=class t{markForCheck(){this.cdr.markForCheck()}constructor(i,n,o,v,Te,Fe){this.nzConfigService=i,this.ngZone=n,this.cdr=o,this.destroy$=v,this.nzCollapseComponent=Te,this.noAnimation=Fe,this._nzModuleName=Ne,this.nzActive=!1,this.nzDisabled=!1,this.nzShowArrow=!0,this.nzActiveChange=new oe,this.nzConfigService.getConfigChangeEventForComponent(Ne).pipe(D(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){this.nzCollapseComponent.addPanel(this),this.ngZone.runOutsideAngular(()=>X(this.collapseHeader.nativeElement,"click").pipe(Y(()=>!this.nzDisabled),D(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>{this.nzCollapseComponent.click(this),this.cdr.markForCheck()})}))}ngOnDestroy(){this.nzCollapseComponent.removePanel(this)}};t.\u0275fac=function(n){return new(n||t)(z(J),z(ae),z(q),z(A),z(K,1),z(Ce,8))},t.\u0275cmp=d({type:t,selectors:[["nz-collapse-panel"]],viewQuery:function(n,o){if(n&1&&pe(ke,7),n&2){let v;me(v=de())&&(o.collapseHeader=v.first)}},hostAttrs:[1,"ant-collapse-item"],hostVars:6,hostBindings:function(n,o){n&2&&T("ant-collapse-no-arrow",!o.nzShowArrow)("ant-collapse-item-active",o.nzActive)("ant-collapse-item-disabled",o.nzDisabled)},inputs:{nzActive:[2,"nzActive","nzActive",y],nzDisabled:[2,"nzDisabled","nzDisabled",y],nzShowArrow:[2,"nzShowArrow","nzShowArrow",y],nzExtra:"nzExtra",nzHeader:"nzHeader",nzExpandedIcon:"nzExpandedIcon"},outputs:{nzActiveChange:"nzActiveChange"},exportAs:["nzCollapsePanel"],standalone:!0,features:[U([A]),G,f],ngContentSelectors:Ee,decls:9,vars:8,consts:[["collapseHeader",""],["role","button",1,"ant-collapse-header"],[1,"ant-collapse-header-text"],[4,"nzStringTemplateOutlet"],[1,"ant-collapse-extra"],[1,"ant-collapse-content"],[1,"ant-collapse-content-box"],["nz-icon","",1,"ant-collapse-arrow",3,"nzType","nzRotate"]],template:function(n,o){n&1&&(V(),a(0,"div",1,0),u(2,be,2,1,"div"),a(3,"span",2),u(4,we,2,1,"ng-container",3),r(),u(5,Be,2,1,"div",4),r(),a(6,"div",5)(7,"div",6),Z(8),r()()),n&2&&(re("aria-expanded",o.nzActive),s(2),Q(o.nzShowArrow?2:-1),s(2),c("nzStringTemplateOutlet",o.nzHeader),s(),Q(o.nzExtra?5:-1),s(),T("ant-collapse-content-active",o.nzActive),c("@.disabled",!!(o.noAnimation!=null&&o.noAnimation.nzNoAnimation))("@collapseMotion",o.nzActive?"expanded":"hidden"))},dependencies:[ve,ue,C,N],encapsulation:2,data:{animation:[fe]},changeDetection:0});let e=t;return I([M()],e.prototype,"nzShowArrow",void 0),e})(),Ie=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=te({type:t}),t.\u0275inj=ee({imports:[W]});let e=t;return e})();var Le=()=>({padding:0});function Re(e,t){if(e&1&&(a(0,"nz-collapse-panel",3)(1,"p",4),m(2,"\u6211\u8FD8\u5728\u7D27\u5F20\u5F00\u53D1\u4E2D\u3002\u3002\u3002\u563B\u563B"),r()()),e&2){let l=t.$implicit;h();let i=P(5);c("nzActive",l.active)("nzDisabled",l.disabled)("nzExtra",i)("nzHeader",l.name)}}function $e(e,t){if(e&1){let l=le();a(0,"span",5),ce("click",function(n){return ne(l),ie(n.stopPropagation())}),r(),p(1,"span",6)}}var xt=(()=>{let t=class t{constructor(){this.panels=[{active:!0,name:"Kubernetes cluster meeting last tuesday",disabled:!1}]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["app-task-list-panel"]],standalone:!0,features:[f],decls:6,vars:2,consts:[["extraTpl",""],[3,"nzBodyStyle"],["nzGhost",""],[3,"nzActive","nzDisabled","nzExtra","nzHeader"],[2,"margin","0"],["nz-icon","","nzTheme","outline","nzType","holder",3,"click"],["nz-icon","","nzTheme","outline","nzType","delete"]],template:function(n,o){n&1&&(a(0,"nz-card",1)(1,"nz-collapse",2),_(2,Re,3,4,"nz-collapse-panel",3,S),r()(),u(4,$e,2,0,"ng-template",null,0,w)),n&2&&(c("nzBodyStyle",b(1,Le)),s(2),x(o.panels))},dependencies:[Ie,W,K,E,j,C,N]});let e=t;return e})();var Ve=e=>({background:e});function Ze(e,t){if(e&1&&(a(0,"nz-list-item",3)(1,"div",4),p(2,"nz-avatar",5),a(3,"div",6),m(4),r()()()),e&2){let l=t.$implicit;s(2),se(ze(4,Ve,l.color)),c("nzSize",12),s(2),g(l.title)}}function Ue(e,t){if(e&1&&(a(0,"nz-list-item",3)(1,"div",4),p(2,"nz-avatar",7),a(3,"div",6),m(4),r()()()),e&2){let l=t.$implicit;s(2),c("nzSize",12),s(2),g(l)}}function qe(e,t){if(e&1&&(a(0,"nz-list-item",3)(1,"div",4),p(2,"span",8),a(3,"div",6),m(4),r()()()),e&2){let l=t.$implicit;s(4),g(l)}}var De=(()=>{let t=class t{constructor(){this.data1=[{color:"red",title:"Meetings"},{color:"green",title:"Devops"},{color:"yellow",title:"Frontend"},{color:"blue",title:"Architecture"},{color:"pink",title:"API"},{color:"orange",title:"Issues"},{color:"purple",title:"Features"},{color:"red",title:"Other"}],this.data2=["John Belinda","Reta Collen","Elizabeth Mozelle","Marys Rob","Adoree Morgan"],this.data3=["2020-Q2","2020-Q1","2019-Q4","2019-Q3"]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["app-task-search-filters"]],standalone:!0,features:[f],decls:18,vars:0,consts:[["nzItemLayout","horizontal","nzSize","small","nzSplit","false",1,"p-0"],[1,"p-0","m-l-10","m-r-10","m-t-8"],[1,"p-l-10","sp-14"],[1,"p-0","m-l-10","m-r-10","m-b-4"],[1,"p-r-16","p-l-10","center","hand-model","list-item","full-with"],[3,"nzSize"],[1,"m-l-8","flex-auto"],["nzIcon","user","nzSrc","/imgs/avatar2.jpg",3,"nzSize"],["nz-icon","","nzTheme","outline","nzType","cloud-server"]],template:function(n,o){n&1&&(a(0,"nz-list",0)(1,"nz-list-item",1)(2,"span",2),m(3,"TAGS"),r()(),_(4,Ze,5,6,"nz-list-item",3,S),r(),a(6,"nz-list",0)(7,"nz-list-item",1)(8,"span",2),m(9,"TEAM MEMBERS"),r()(),_(10,Ue,5,2,"nz-list-item",3,S),r(),a(12,"nz-list",0)(13,"nz-list-item",1)(14,"span",2),m(15,"ARCHIVES"),r()(),_(16,qe,5,1,"nz-list-item",3,S),r()),n&2&&(s(4),x(o.data1),s(6),x(o.data2),s(6),x(o.data3))},dependencies:[R,H,L,Se,B,O,C,N],styles:[".list-item[_ngcontent-%COMP%]{height:30px;border-radius:4px}.list-item.active[_ngcontent-%COMP%]{background:#edf5ff}.list-item[_ngcontent-%COMP%]:hover{background:#e5e5e5e5}"]});let e=t;return e})();function Je(e,t){e&1&&p(0,"nz-avatar",4),e&2&&c("nzSize",40)}var Me=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["app-user-info"]],standalone:!0,features:[f],decls:5,vars:1,consts:[["avatar",""],["nzItemLayout","horizontal"],[1,"p-l-16","p-r-16"],["nzDescription","david@youpez.com","nzTitle","David Robson",1,"center",3,"nzAvatar"],["nzIcon","user","nzSrc","/imgs/avatar2.jpg",3,"nzSize"]],template:function(n,o){if(n&1&&(a(0,"nz-list",1)(1,"nz-list-item",2)(2,"nz-list-item-meta",3),u(3,Je,1,1,"ng-template",null,0,w),r()()()),n&2){let v=P(4);s(2),c("nzAvatar",v)}},dependencies:[E,B,O,C,R,H,L,_e],styles:[".icon-sm[_ngcontent-%COMP%]{font-size:48px}"]});let e=t;return e})();var Ke=()=>({padding:0}),Lt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["app-task-search-info"]],standalone:!0,features:[f],decls:4,vars:2,consts:[[3,"nzBodyStyle"],[1,"m-0"]],template:function(n,o){n&1&&(a(0,"nz-card",0),p(1,"app-user-info")(2,"nz-divider",1)(3,"app-task-search-filters"),r()),n&2&&c("nzBodyStyle",b(1,Ke))},dependencies:[Me,De,ye,ge,E,j]});let e=t;return e})();export{xt as a,Lt as b};
