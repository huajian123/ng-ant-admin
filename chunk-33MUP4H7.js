import{W as U,X as V,ea as W}from"./chunk-NYWSPOYR.js";import{r as P,w as R}from"./chunk-ZWOUEGUH.js";import{Aa as b,Ac as w,Ba as D,Bc as M,Jc as L,L as y,La as $,Lb as N,Ob as f,Qb as p,S as C,Sb as m,Uc as k,Y as _,cc as r,dc as c,dd as A,ec as j,g as u,ga as x,ha as I,hd as h,i as z,ia as l,id as B,j as v,qc as g,r as S,ra as T,rc as O,sc as E,ub as a,vb as d,zc as F}from"./chunk-XNENNAZS.js";var H=["*"];function Z(n,t){n&1&&(r(0,"span",3),j(1,"i",4)(2,"i",4)(3,"i",4)(4,"i",4),c())}function q(n,t){}function J(n,t){if(n&1&&(r(0,"div",8),w(1),c()),n&2){let e=g(2);a(),M(e.nzTip)}}function K(n,t){if(n&1&&(r(0,"div")(1,"div",5),f(2,q,0,0,"ng-template",6)(3,J,2,1,"div",7),c()()),n&2){let e=g(),s=F(1);a(),m("ant-spin-rtl",e.dir==="rtl")("ant-spin-spinning",e.isLoading)("ant-spin-lg",e.nzSize==="large")("ant-spin-sm",e.nzSize==="small")("ant-spin-show-text",e.nzTip),a(),p("ngTemplateOutlet",e.nzIndicator||s),a(),p("ngIf",e.nzTip)}}function Q(n,t){if(n&1&&(r(0,"div",9),E(1),c()),n&2){let e=g();m("ant-spin-blur",e.isLoading)}}var G="spin",gn=(()=>{let t=class t{constructor(s,i,o){this.nzConfigService=s,this.cdr=i,this.directionality=o,this._nzModuleName=G,this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new u,this.spinning$=new z(this.nzSpinning),this.delay$=new v(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){this.delay$.pipe(x(this.nzDelay),_(),I(i=>i===0?this.spinning$:this.spinning$.pipe(C(o=>y(o?i:0)))),l(this.destroy$)).subscribe(i=>{this.isLoading=i,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent(G).pipe(l(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.directionality.change?.pipe(l(this.destroy$)).subscribe(i=>{this.dir=i,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(s){let{nzSpinning:i,nzDelay:o}=s;i&&this.spinning$.next(this.nzSpinning),o&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};t.\u0275fac=function(i){return new(i||t)(d(U),d(A),d(W,8))},t.\u0275cmp=b({type:t,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(i,o){i&2&&m("ant-spin-nested-loading",!o.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:[2,"nzDelay","nzDelay",B],nzSimple:[2,"nzSimple","nzSimple",h],nzSpinning:[2,"nzSpinning","nzSpinning",h]},exportAs:["nzSpin"],standalone:!0,features:[N,$,L],ngContentSelectors:H,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(i,o){i&1&&(O(),f(0,Z,5,0,"ng-template",null,0,k)(2,K,4,12,"div",1)(3,Q,2,2,"div",2)),i&2&&(a(2),p("ngIf",o.isLoading),a(),p("ngIf",!o.nzSimple))},dependencies:[P,R],encapsulation:2});let n=t;return S([V()],n.prototype,"nzIndicator",void 0),n})(),fn=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=D({type:t}),t.\u0275inj=T({});let n=t;return n})();export{gn as a,fn as b};