import{a as at,b as ot}from"./chunk-YGFGTHXD.js";import{e as it}from"./chunk-BE5UFXKQ.js";import{a as et,b as nt}from"./chunk-MCCZJH2J.js";import{E as tt,a as Y,ea as I}from"./chunk-NYWSPOYR.js";import{j as J,l as K,r as Q,v as W,w as X}from"./chunk-ZWOUEGUH.js";import{Aa as C,Ac as f,Ba as y,Bc as z,Da as M,Eb as P,Jc as S,Kb as $,La as v,Lb as L,Lc as H,M as w,Ob as p,Pc as B,Qb as s,Rc as Z,Sb as R,Uc as U,Xa as j,Zb as _,bd as q,cc as u,dc as d,dd as V,ec as T,fc as g,g as F,gc as h,hc as A,hd as G,ia as E,qc as l,ra as x,ub as r,vb as m,zc as k}from"./chunk-XNENNAZS.js";var rt=(()=>{let e=class e{transform(a,n="HH:mm:ss"){let o=Number(a||0);return it.reduce((c,[D,O])=>{if(c.indexOf(D)!==-1){let b=Math.floor(o/O);return o-=b*O,c.replace(new RegExp(`${D}+`,"g"),lt=>tt(b.toString(),lt.length,"0"))}return c},n)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=M({name:"nzTimeRange",type:e,pure:!0,standalone:!0});let t=e;return t})(),st=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=y({type:e}),e.\u0275inj=x({});let t=e;return t})();var mt=t=>({$implicit:t});function ut(t,e){if(t&1&&A(0,3),t&2){let i=l();s("ngTemplateOutlet",i.nzValueTemplate)("ngTemplateOutletContext",H(2,mt,i.nzValue))}}function dt(t,e){if(t&1&&(u(0,"span",6),f(1),d()),t&2){let i=l(2);r(),z(i.displayInt)}}function ft(t,e){if(t&1&&(u(0,"span",7),f(1),d()),t&2){let i=l(2);r(),z(i.displayDecimal)}}function zt(t,e){if(t&1&&(g(0),p(1,dt,2,1,"span",4)(2,ft,2,1,"span",5),h()),t&2){let i=l();r(),s("ngIf",i.displayInt),r(),s("ngIf",i.displayDecimal)}}function gt(t,e){if(t&1&&(g(0),f(1),h()),t&2){let i=l();r(),z(i.nzTitle)}}function ht(t,e){t&1&&T(0,"nz-skeleton",2),t&2&&s("nzParagraph",!1)}function xt(t,e){if(t&1&&(g(0),f(1),h()),t&2){let i=l(3);r(),z(i.nzPrefix)}}function Ct(t,e){if(t&1&&(u(0,"span",4),p(1,xt,2,1,"ng-container",1),d()),t&2){let i=l(2);r(),s("nzStringTemplateOutlet",i.nzPrefix)}}function yt(t,e){if(t&1&&(g(0),f(1),h()),t&2){let i=l(3);r(),z(i.nzSuffix)}}function _t(t,e){if(t&1&&(u(0,"span",6),p(1,yt,2,1,"ng-container",1),d()),t&2){let i=l(2);r(),s("nzStringTemplateOutlet",i.nzSuffix)}}function Tt(t,e){if(t&1&&(u(0,"div",3),p(1,Ct,2,1,"span",4),T(2,"nz-statistic-number",5),p(3,_t,2,1,"span",6),d()),t&2){let i=l();s("ngStyle",i.nzValueStyle),r(),_(i.nzPrefix?1:-1),r(),s("nzValue",i.nzValue)("nzValueTemplate",i.nzValueTemplate),r(),_(i.nzSuffix?3:-1)}}function St(t,e){if(t&1&&(f(0),B(1,"nzTimeRange")),t&2){let i=l();z(Z(1,1,i.diff,i.nzFormat))}}var vt=(()=>{let e=class e{constructor(a){this.locale_id=a,this.displayInt="",this.displayDecimal=""}ngOnChanges(){this.formatNumber()}formatNumber(){let a=typeof this.nzValue=="number"?".":K(this.locale_id,J.Decimal),n=String(this.nzValue),[o,c]=n.split(a);this.displayInt=o,this.displayDecimal=c?`${a}${c}`:""}};e.\u0275fac=function(n){return new(n||e)(m(q))},e.\u0275cmp=C({type:e,selectors:[["nz-statistic-number"]],inputs:{nzValue:"nzValue",nzValueTemplate:"nzValueTemplate"},exportAs:["nzStatisticNumber"],standalone:!0,features:[v,S],decls:3,vars:2,consts:[[1,"ant-statistic-content-value"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],[4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","ant-statistic-content-value-int",4,"ngIf"],["class","ant-statistic-content-value-decimal",4,"ngIf"],[1,"ant-statistic-content-value-int"],[1,"ant-statistic-content-value-decimal"]],template:function(n,o){n&1&&(u(0,"span",0),p(1,ut,1,4,"ng-container",1)(2,zt,3,2,"ng-container",2),d()),n&2&&(r(),s("ngIf",o.nzValueTemplate),r(),s("ngIf",!o.nzValueTemplate))},dependencies:[Q,X],encapsulation:2,changeDetection:0});let t=e;return t})(),N=(()=>{let e=class e{constructor(a,n){this.cdr=a,this.directionality=n,this.nzValueStyle={},this.nzLoading=!1,this.dir="ltr",this.destroy$=new F}ngOnInit(){this.directionality.change?.pipe(E(this.destroy$)).subscribe(a=>{this.dir=a,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};e.\u0275fac=function(n){return new(n||e)(m(V),m(I,8))},e.\u0275cmp=C({type:e,selectors:[["nz-statistic"]],hostAttrs:[1,"ant-statistic"],hostVars:2,hostBindings:function(n,o){n&2&&R("ant-statistic-rtl",o.dir==="rtl")},inputs:{nzPrefix:"nzPrefix",nzSuffix:"nzSuffix",nzTitle:"nzTitle",nzValue:"nzValue",nzValueStyle:"nzValueStyle",nzValueTemplate:"nzValueTemplate",nzLoading:[2,"nzLoading","nzLoading",G]},exportAs:["nzStatistic"],standalone:!0,features:[L,S],decls:4,vars:2,consts:[[1,"ant-statistic-title"],[4,"nzStringTemplateOutlet"],[1,"ant-statistic-skeleton",3,"nzParagraph"],[1,"ant-statistic-content",3,"ngStyle"],[1,"ant-statistic-content-prefix"],[3,"nzValue","nzValueTemplate"],[1,"ant-statistic-content-suffix"]],template:function(n,o){n&1&&(u(0,"div",0),p(1,gt,2,1,"ng-container",1),d(),p(2,ht,1,1,"nz-skeleton",2)(3,Tt,4,5,"div",3)),n&2&&(r(),s("nzStringTemplateOutlet",o.nzTitle),r(),_(o.nzLoading?2:3))},dependencies:[ot,at,vt,nt,et,W],encapsulation:2,changeDetection:0});let t=e;return t})(),Vt=1e3/30,It=(()=>{let e=class e extends N{constructor(a,n,o,c){super(a,c),this.ngZone=n,this.platform=o,this.nzFormat="HH:mm:ss",this.nzCountdownFinish=new j,this.target=0}ngOnChanges(a){a.nzValue&&(this.target=Number(a.nzValue.currentValue),a.nzValue.isFirstChange()||this.syncTimer())}ngOnInit(){super.ngOnInit(),this.syncTimer()}ngOnDestroy(){this.stopTimer()}syncTimer(){this.target>=Date.now()?this.startTimer():this.stopTimer()}startTimer(){this.platform.isBrowser&&this.ngZone.runOutsideAngular(()=>{this.stopTimer(),this.updater_=w(Vt).subscribe(()=>{this.updateValue(),this.cdr.detectChanges()})})}stopTimer(){this.updater_&&(this.updater_.unsubscribe(),this.updater_=null)}updateValue(){this.diff=Math.max(this.target-Date.now(),0),this.diff===0&&(this.stopTimer(),this.nzCountdownFinish.observers.length&&this.ngZone.run(()=>this.nzCountdownFinish.emit()))}};e.\u0275fac=function(n){return new(n||e)(m(V),m(P),m(Y),m(I,8))},e.\u0275cmp=C({type:e,selectors:[["nz-countdown"]],inputs:{nzFormat:"nzFormat"},outputs:{nzCountdownFinish:"nzCountdownFinish"},exportAs:["nzCountdown"],standalone:!0,features:[$,v,S],decls:3,vars:6,consts:[["countDownTpl",""],[3,"nzValue","nzValueStyle","nzValueTemplate","nzTitle","nzPrefix","nzSuffix"]],template:function(n,o){if(n&1&&(T(0,"nz-statistic",1),p(1,St,2,4,"ng-template",null,0,U)),n&2){let c=k(2);s("nzValue",o.diff)("nzValueStyle",o.nzValueStyle)("nzValueTemplate",o.nzValueTemplate||c)("nzTitle",o.nzTitle)("nzPrefix",o.nzPrefix)("nzSuffix",o.nzSuffix)}},dependencies:[N,st,rt],encapsulation:2,changeDetection:0});let t=e;return t})(),Jt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=y({type:e}),e.\u0275inj=x({imports:[N,It]});let t=e;return t})();export{N as a,It as b,Jt as c};
