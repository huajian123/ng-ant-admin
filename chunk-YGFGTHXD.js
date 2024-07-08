import{a as R,b as $}from"./chunk-MCCZJH2J.js";import{W as et,X as b,ea as nt,fa as it,z as tt}from"./chunk-NYWSPOYR.js";import{q as X,r as Y,v as L,w as Q}from"./chunk-ZWOUEGUH.js";import{Aa as h,Ac as A,Ba as O,Bc as w,Ca as F,Jc as C,Kc as K,La as j,Lb as x,Ob as s,Qb as c,Rb as k,Sb as g,Zb as z,_b as U,ac as W,bc as Z,cc as p,dc as d,dd as I,ec as v,fc as u,g as V,gc as f,hd as m,ia as q,qc as l,r as T,ra as P,rc as D,sc as N,ub as r,vb as _,vc as H,wc as J,xb as G,xc as E,yc as B}from"./chunk-XNENNAZS.js";import{a as S}from"./chunk-VB56BUGO.js";var ct=["nzType","avatar"];var dt=["*"];function pt(t,e){if(t&1&&(p(0,"div",5),v(1,"nz-skeleton-element",6),d()),t&2){let o=l(2);r(),c("nzSize",o.avatar.size||"default")("nzShape",o.avatar.shape||"circle")}}function zt(t,e){if(t&1&&v(0,"h3",7),t&2){let o=l(2);k("width",o.toCSSUnit(o.title.width))}}function mt(t,e){if(t&1&&v(0,"li"),t&2){let o=e.index,a=l(3);k("width",a.toCSSUnit(a.widthList[o]))}}function ut(t,e){if(t&1&&(p(0,"ul",8),s(1,mt,1,2,"li",9),d()),t&2){let o=l(2);r(),c("ngForOf",o.rowsList)}}function ft(t,e){if(t&1&&(u(0),s(1,pt,2,2,"div",1),p(2,"div",2),s(3,zt,1,2,"h3",3)(4,ut,2,1,"ul",4),d(),f()),t&2){let o=l();r(),c("ngIf",!!o.nzAvatar),r(2),c("ngIf",!!o.nzTitle),r(),c("ngIf",!!o.nzParagraph)}}function ht(t,e){t&1&&(u(0),N(1),f())}var gt=(()=>{let e=class e{constructor(){this.nzActive=!1,this.nzBlock=!1}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=F({type:e,selectors:[["nz-skeleton-element"]],hostAttrs:[1,"ant-skeleton","ant-skeleton-element"],hostVars:4,hostBindings:function(i,n){i&2&&g("ant-skeleton-active",n.nzActive)("ant-skeleton-block",n.nzBlock)},inputs:{nzActive:[2,"nzActive","nzActive",m],nzType:"nzType",nzBlock:[2,"nzBlock","nzBlock",m]},standalone:!0,features:[x]});let t=e;return t})();var vt=(()=>{let e=class e{constructor(){this.nzShape="circle",this.nzSize="default",this.styleMap={}}ngOnChanges(a){if(a.nzSize&&typeof this.nzSize=="number"){let i=`${this.nzSize}px`;this.styleMap={width:i,height:i,"line-height":i}}else this.styleMap={}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=h({type:e,selectors:[["nz-skeleton-element","nzType","avatar"]],inputs:{nzShape:"nzShape",nzSize:"nzSize"},standalone:!0,features:[j,C],attrs:ct,decls:1,vars:9,consts:[[1,"ant-skeleton-avatar",3,"ngStyle"]],template:function(i,n){i&1&&v(0,"span",0),i&2&&(g("ant-skeleton-avatar-square",n.nzShape==="square")("ant-skeleton-avatar-circle",n.nzShape==="circle")("ant-skeleton-avatar-lg",n.nzSize==="large")("ant-skeleton-avatar-sm",n.nzSize==="small"),c("ngStyle",n.styleMap))},dependencies:[L],encapsulation:2,changeDetection:0});let t=e;return t})();var at=(()=>{let e=class e{constructor(a){this.cdr=a,this.nzActive=!1,this.nzLoading=!0,this.nzRound=!1,this.nzTitle=!0,this.nzAvatar=!1,this.nzParagraph=!0,this.rowsList=[],this.widthList=[]}toCSSUnit(a=""){return tt(a)}getTitleProps(){let a=!!this.nzAvatar,i=!!this.nzParagraph,n="";return!a&&i?n="38%":a&&i&&(n="50%"),S({width:n},this.getProps(this.nzTitle))}getAvatarProps(){let a=this.nzTitle&&!this.nzParagraph?"square":"circle";return S({shape:a,size:"large"},this.getProps(this.nzAvatar))}getParagraphProps(){let a=!!this.nzAvatar,i=!!this.nzTitle,n={};return(!a||!i)&&(n.width="61%"),!a&&i?n.rows=3:n.rows=2,S(S({},n),this.getProps(this.nzParagraph))}getProps(a){return a&&typeof a=="object"?a:{}}getWidthList(){let{width:a,rows:i}=this.paragraph,n=[];return a&&Array.isArray(a)?n=a:a&&!Array.isArray(a)&&(n=[],n[i-1]=a),n}updateProps(){this.title=this.getTitleProps(),this.avatar=this.getAvatarProps(),this.paragraph=this.getParagraphProps(),this.rowsList=[...Array(this.paragraph.rows)],this.widthList=this.getWidthList(),this.cdr.markForCheck()}ngOnInit(){this.updateProps()}ngOnChanges(a){(a.nzTitle||a.nzAvatar||a.nzParagraph)&&this.updateProps()}};e.\u0275fac=function(i){return new(i||e)(_(I))},e.\u0275cmp=h({type:e,selectors:[["nz-skeleton"]],hostAttrs:[1,"ant-skeleton"],hostVars:6,hostBindings:function(i,n){i&2&&g("ant-skeleton-with-avatar",!!n.nzAvatar)("ant-skeleton-active",n.nzActive)("ant-skeleton-round",!!n.nzRound)},inputs:{nzActive:"nzActive",nzLoading:"nzLoading",nzRound:"nzRound",nzTitle:"nzTitle",nzAvatar:"nzAvatar",nzParagraph:"nzParagraph"},exportAs:["nzSkeleton"],standalone:!0,features:[j,C],ngContentSelectors:dt,decls:2,vars:2,consts:[[4,"ngIf"],["class","ant-skeleton-header",4,"ngIf"],[1,"ant-skeleton-content"],["class","ant-skeleton-title",3,"width",4,"ngIf"],["class","ant-skeleton-paragraph",4,"ngIf"],[1,"ant-skeleton-header"],["nzType","avatar",3,"nzSize","nzShape"],[1,"ant-skeleton-title"],[1,"ant-skeleton-paragraph"],[3,"width",4,"ngFor","ngForOf"]],template:function(i,n){i&1&&(D(),s(0,ft,5,3,"ng-container",0)(1,ht,2,0,"ng-container",0)),i&2&&(c("ngIf",n.nzLoading),r(),c("ngIf",!n.nzLoading))},dependencies:[gt,vt,Y,X],encapsulation:2,changeDetection:0});let t=e;return t})(),ot=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=O({type:e}),e.\u0275inj=P({});let t=e;return t})();function _t(t,e){}function yt(t,e){if(t&1&&(p(0,"div",0),s(1,_t,0,0,"ng-template",2),d()),t&2){let o=l();r(),c("ngTemplateOutlet",o.nzAvatar)}}function St(t,e){if(t&1&&(u(0),A(1),f()),t&2){let o=l(3);r(),w(o.nzTitle)}}function Tt(t,e){if(t&1&&(p(0,"div",3),s(1,St,2,1,"ng-container",5),d()),t&2){let o=l(2);r(),c("nzStringTemplateOutlet",o.nzTitle)}}function xt(t,e){if(t&1&&(u(0),A(1),f()),t&2){let o=l(3);r(),w(o.nzDescription)}}function kt(t,e){if(t&1&&(p(0,"div",4),s(1,xt,2,1,"ng-container",5),d()),t&2){let o=l(2);r(),c("nzStringTemplateOutlet",o.nzDescription)}}function Dt(t,e){if(t&1&&(p(0,"div",1),s(1,Tt,2,1,"div",3)(2,kt,2,1,"div",4),d()),t&2){let o=l();r(),z(o.nzTitle?1:-1),r(),z(o.nzDescription?2:-1)}}var st=["*"];function Nt(t,e){t&1&&N(0)}var At=()=>({rows:4});function wt(t,e){if(t&1&&(u(0),A(1),f()),t&2){let o=l(3);r(),w(o.nzTitle)}}function bt(t,e){if(t&1&&(p(0,"div",6),s(1,wt,2,1,"ng-container",9),d()),t&2){let o=l(2);r(),c("nzStringTemplateOutlet",o.nzTitle)}}function Mt(t,e){if(t&1&&(u(0),A(1),f()),t&2){let o=l(3);r(),w(o.nzExtra)}}function Pt(t,e){if(t&1&&(p(0,"div",7),s(1,Mt,2,1,"ng-container",9),d()),t&2){let o=l(2);r(),c("nzStringTemplateOutlet",o.nzExtra)}}function Ot(t,e){}function Ft(t,e){if(t&1&&s(0,Ot,0,0,"ng-template",8),t&2){let o=l(2);c("ngTemplateOutlet",o.listOfNzCardTabComponent.template)}}function Et(t,e){if(t&1&&(p(0,"div",0)(1,"div",5),s(2,bt,2,1,"div",6)(3,Pt,2,1,"div",7),d(),s(4,Ft,1,1,null,8),d()),t&2){let o=l();r(2),z(o.nzTitle?2:-1),r(),z(o.nzExtra?3:-1),r(),z(o.listOfNzCardTabComponent?4:-1)}}function Bt(t,e){}function It(t,e){if(t&1&&(p(0,"div",1),s(1,Bt,0,0,"ng-template",8),d()),t&2){let o=l();r(),c("ngTemplateOutlet",o.nzCover)}}function Lt(t,e){t&1&&v(0,"nz-skeleton",3),t&2&&c("nzActive",!0)("nzTitle",!1)("nzParagraph",K(3,At))}function qt(t,e){t&1&&N(0)}function jt(t,e){}function Ht(t,e){if(t&1&&(p(0,"li")(1,"span"),s(2,jt,0,0,"ng-template",8),d()()),t&2){let o=e.$implicit,a=l(2);k("width",100/a.nzActions.length,"%"),r(2),c("ngTemplateOutlet",o)}}function Qt(t,e){if(t&1&&(p(0,"ul",4),W(1,Ht,3,3,"li",10,U),d()),t&2){let o=l();r(),Z(o.nzActions)}}var Rt=(()=>{let e=class e{constructor(){this.nzHoverable=!0}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=F({type:e,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(i,n){i&2&&g("ant-card-hoverable",n.nzHoverable)},inputs:{nzHoverable:[2,"nzHoverable","nzHoverable",m]},exportAs:["nzCardGrid"],standalone:!0,features:[x]});let t=e;return t})(),$t=(()=>{let e=class e{constructor(){this.nzTitle=null,this.nzDescription=null,this.nzAvatar=null}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=h({type:e,selectors:[["nz-card-meta"]],hostAttrs:[1,"ant-card-meta"],inputs:{nzTitle:"nzTitle",nzDescription:"nzDescription",nzAvatar:"nzAvatar"},exportAs:["nzCardMeta"],standalone:!0,features:[C],decls:2,vars:2,consts:[[1,"ant-card-meta-avatar"],[1,"ant-card-meta-detail"],[3,"ngTemplateOutlet"],[1,"ant-card-meta-title"],[1,"ant-card-meta-description"],[4,"nzStringTemplateOutlet"]],template:function(i,n){i&1&&s(0,yt,2,1,"div",0)(1,Dt,3,2,"div",1),i&2&&(z(n.nzAvatar?0:-1),r(),z(n.nzTitle||n.nzDescription?1:-1))},dependencies:[Q,$,R],encapsulation:2,changeDetection:0});let t=e;return t})(),Vt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=h({type:e,selectors:[["nz-card-tab"]],viewQuery:function(i,n){if(i&1&&J(G,7),i&2){let y;E(y=B())&&(n.template=y.first)}},exportAs:["nzCardTab"],standalone:!0,features:[C],ngContentSelectors:st,decls:1,vars:0,template:function(i,n){i&1&&(D(),s(0,Nt,1,0,"ng-template"))},encapsulation:2,changeDetection:0});let t=e;return t})(),rt="card",Gt=(()=>{let e=class e{constructor(a,i,n){this.nzConfigService=a,this.cdr=i,this.directionality=n,this._nzModuleName=rt,this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new V,this.nzConfigService.getConfigChangeEventForComponent(rt).pipe(q(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){this.directionality.change?.pipe(q(this.destroy$)).subscribe(a=>{this.dir=a,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}};e.\u0275fac=function(i){return new(i||e)(_(et),_(I),_(nt,8))},e.\u0275cmp=h({type:e,selectors:[["nz-card"]],contentQueries:function(i,n,y){if(i&1&&(H(y,Vt,5),H(y,Rt,4)),i&2){let M;E(M=B())&&(n.listOfNzCardTabComponent=M.first),E(M=B())&&(n.listOfNzCardGridDirective=M)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(i,n){i&2&&g("ant-card-loading",n.nzLoading)("ant-card-bordered",n.nzBorderless===!1&&n.nzBordered)("ant-card-hoverable",n.nzHoverable)("ant-card-small",n.nzSize==="small")("ant-card-contain-grid",n.listOfNzCardGridDirective&&n.listOfNzCardGridDirective.length)("ant-card-type-inner",n.nzType==="inner")("ant-card-contain-tabs",!!n.listOfNzCardTabComponent)("ant-card-rtl",n.dir==="rtl")},inputs:{nzBordered:[2,"nzBordered","nzBordered",m],nzBorderless:[2,"nzBorderless","nzBorderless",m],nzLoading:[2,"nzLoading","nzLoading",m],nzHoverable:[2,"nzHoverable","nzHoverable",m],nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],standalone:!0,features:[x,C],ngContentSelectors:st,decls:6,vars:5,consts:[[1,"ant-card-head"],[1,"ant-card-cover"],[1,"ant-card-body",3,"ngStyle"],[3,"nzActive","nzTitle","nzParagraph"],[1,"ant-card-actions"],[1,"ant-card-head-wrapper"],[1,"ant-card-head-title"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[4,"nzStringTemplateOutlet"],[3,"width"]],template:function(i,n){i&1&&(D(),s(0,Et,5,3,"div",0)(1,It,2,1,"div",1),p(2,"div",2),s(3,Lt,1,4,"nz-skeleton",3)(4,qt,1,0),d(),s(5,Qt,3,0,"ul",4)),i&2&&(z(n.nzTitle||n.nzExtra||n.listOfNzCardTabComponent?0:-1),r(),z(n.nzCover?1:-1),r(),c("ngStyle",n.nzBodyStyle),r(),z(n.nzLoading?3:4),r(2),z(n.nzActions.length?5:-1))},dependencies:[$,R,Q,L,ot,at],encapsulation:2,changeDetection:0});let t=e;return T([b()],t.prototype,"nzBordered",void 0),T([b()],t.prototype,"nzBorderless",void 0),T([b()],t.prototype,"nzHoverable",void 0),T([b()],t.prototype,"nzSize",void 0),t})(),Ne=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=O({type:e}),e.\u0275inj=P({imports:[Gt,$t,it]});let t=e;return t})();export{at as a,ot as b,Rt as c,$t as d,Vt as e,Gt as f,Ne as g};
