import{a as Fe}from"./chunk-BYLUI2QE.js";import"./chunk-O2WPPUR2.js";import"./chunk-CLJGZU7Y.js";import{c as ve}from"./chunk-C5JYVLWC.js";import{a as Te}from"./chunk-V6VP5ZUC.js";import{b as ue}from"./chunk-DBID6Z5F.js";import"./chunk-HDT4KMAI.js";import"./chunk-IRQU3GS3.js";import{a as he,c as Ce,d as we,e as De}from"./chunk-23ZTSX7W.js";import"./chunk-T5C3MTIU.js";import"./chunk-KZXNDGZT.js";import{a as S,e as B}from"./chunk-CUBBA5TV.js";import{d as y,e as re,g as z,h as oe,k as ne,l as ie,o as ae,r as se,v as me,w as N,x as pe}from"./chunk-WL72DHP4.js";import"./chunk-63CUI4A7.js";import"./chunk-BE5UFXKQ.js";import"./chunk-AOHLMCKO.js";import{a as le,b as fe,c as de}from"./chunk-JG7PDFQU.js";import"./chunk-LMT2TBSV.js";import"./chunk-7PKCM743.js";import"./chunk-MCCZJH2J.js";import{a as R,b as T,c as ce,d as _,e as x}from"./chunk-S2KEA7XP.js";import"./chunk-NYWSPOYR.js";import"./chunk-ZGT77FDO.js";import{a as h}from"./chunk-XMISJKZ6.js";import"./chunk-TLY6E2EZ.js";import"./chunk-I3AI2SV7.js";import"./chunk-ZWOUEGUH.js";import{Aa as l,Ac as m,Bc as E,D as V,Fc as U,Gc as J,Ha as W,Hc as X,Ic as Y,Jc as d,Ma as M,Na as k,Ob as P,Qb as f,Sa as L,Ua as b,Uc as Z,Xa as D,_c as $,cc as a,dc as s,dd as ee,ec as v,ic as H,ka as G,ld as te,oc as F,qa as g,qc as j,ta as O,ub as u,wa as i,wc as Q,xc as q,yc as K,z as w}from"./chunk-XNENNAZS.js";import{g as Re}from"./chunk-VB56BUGO.js";var Be=["componentTpl"];function Ie(r,e){if(r&1){let C=H();a(0,"div",1)(1,"button",2),F("click",function(){M(C);let t=j();return k(t.cancel())}),m(2,"\u53D6\u6D88"),s(),a(3,"button",3),F("click",function(){M(C);let t=j();return k(t.sure())}),m(4,"\u786E\u5B9A"),s()()}}var A=class{constructor(){this.sureEmitter=new D,this.cancelEmitter=new D}},ge=(()=>{let e=class e{constructor(){this.sureEmitter=new D,this.cancelEmitter=new D}sure(){this.sureEmitter.emit()}cancel(){this.cancelEmitter.emit()}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-global-drawer-foot-tpl"]],viewQuery:function(t,n){if(t&1&&Q(Be,7),t&2){let p;q(p=K())&&(n.componentTpl=p.first)}},outputs:{sureEmitter:"sureEmitter",cancelEmitter:"cancelEmitter"},standalone:!0,features:[Y([{provide:A,useExisting:e}]),d],decls:2,vars:0,consts:[["componentTpl",""],[1,"end-start-center"],["nz-button","","nzType","default",1,"m-r-8",3,"click"],["nz-button","","nzType","primary",3,"click"]],template:function(t,n){t&1&&P(0,Ie,5,0,"ng-template",null,0,Z)},dependencies:[x,_,R,T],encapsulation:2,changeDetection:0});let r=e;return r})();var be=new O("drawer action btn token",{providedIn:"root",factory:()=>{let r=i($),e=i(W),C=te(ge,{environmentInjector:e});return r.attachView(C.hostView),C}});var Ee=Re(Te());var ye=(()=>{let e=class e{constructor(){this.destroyRef=i(b),this.baseInjector=i(L),this.btnComponentRef=i(be),this.bsDrawerService=this.baseInjector.get(ve),this.btnTpl=this.btnComponentRef.instance.componentTpl,this.btnComponentRef.instance.sureEmitter.pipe(h(this.destroyRef)).subscribe(()=>this.sure()),this.btnComponentRef.instance.cancelEmitter.pipe(h(this.destroyRef)).subscribe(()=>this.cancel())}show(o,t={},n={}){let p=this.createDrawerConfig(o,t,n);return this.drawerRef=this.bsDrawerService.create(p),this.drawerRef.afterClose.pipe(V(c=>c||{status:0,value:null}))}createDrawerConfig(o,t={},n={}){let p={nzContent:o,nzClosable:!1,nzContentParams:{params:n},nzFooter:t.nzFooter||this.btnTpl};return Ee.default.merge(p,t)}sure(){this.drawerRef.getContentComponent().getCurrentValue().pipe(G(o=>o?this.drawerRef.close({status:1,modalValue:o}):w(!1)),h(this.destroyRef)).subscribe()}cancel(){this.drawerRef.close({status:0,value:null})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var ze=(()=>{let e=class e{constructor(){this.fb=i(me),this.params={name:""},this.validateForm=this.fb.group({password:["",[re.required]]})}getCurrentValue(){return ue(this.validateForm)?w(this.validateForm.value):w(!1)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-ex-drawer-drawer"]],standalone:!0,features:[d],decls:10,vars:3,consts:[[1,"sp-28","text-error"],[3,"formGroup"],["nzRequired",""],["nzErrorTip","\u5FC5\u586B\u9879"],["formControlName","password","nz-input","",3,"placeholder"]],template:function(t,n){t&1&&(a(0,"p"),m(1," \u5E26\u8FC7\u6765\u7684\u503C\uFF1A "),a(2,"span",0),m(3),s()(),a(4,"form",1)(5,"nz-form-item")(6,"nz-form-label",2),m(7,"\u8BD5\u4E00\u8BD5\u8F93\u5165\u503C\u540E\u70B9\u51FB\u786E\u5B9A"),s(),a(8,"nz-form-control",3),v(9,"input",4),s()()()),t&2&&(u(3),E(n.params.name),u(),f("formGroup",n.validateForm),u(5),f("placeholder","\u8F93\u5165\u7684\u5185\u5BB9\u70B9\u51FB\u786E\u5B9A\uFF0C\u8FD4\u56DE\u7ED9\u5916\u90E8"))},dependencies:[N,ie,y,z,oe,pe,ae,se,de,fe,le,De,he,we,Ce,B,S],encapsulation:2,changeDetection:0});let r=e;return r})();var Ne=(()=>{let e=class e{constructor(){this.drawerWrapService=i(ye)}getContentComponent(){return ze}show(o={},t){return this.drawerWrapService.show(this.getContentComponent(),o,t)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var Rt=(()=>{let e=class e{constructor(){this.pageHeaderInfo={title:"\u62BD\u5C49\u5C01\u88C5",breadcrumb:["\u9996\u9875","\u62BD\u5C49\u5C01\u88C5"],desc:"\u5C0F\u5C0F\u7684\u62BD\u5C49\u91CC\u9762\u85CF\u7740\u6211\u597D\u591A\u5927\u5927\u7684\u68A6\u60F3"},this.data="",this.dataFromDrawer="",this.destroyRef=i(b),this.drawerService=i(Ne),this.cdr=i(ee)}showDrawer(){this.drawerService.show({nzTitle:"\u670D\u52A1\u521B\u5EFA"},{name:this.data}).pipe(h(this.destroyRef)).subscribe(({modalValue:o,status:t})=>{t!==0&&(this.dataFromDrawer=o.password,this.cdr.markForCheck())})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-ex-drawer"]],standalone:!0,features:[d],decls:9,vars:4,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nz-input","",1,"m-b-20",3,"ngModelChange","placeholder","ngModel"],[1,"sp-28","text-error"],["nz-button","",3,"click"]],template:function(t,n){t&1&&(v(0,"app-page-header",0),a(1,"div",1)(2,"input",2),X("ngModelChange",function(c){return J(n.data,c)||(n.data=c),c}),s(),m(3," \u8FD9\u662F\u4ECE\u62BD\u5C49\u4E2D\u8FD4\u56DE\u7684\u503C: "),a(4,"span",3),m(5),s(),v(6,"br"),a(7,"button",4),F("click",function(){return n.showDrawer()}),m(8,"\u670D\u52A1\u7684\u65B9\u5F0F\u521B\u5EFA"),s()()),t&2&&(f("pageHeaderInfo",n.pageHeaderInfo),u(2),f("placeholder","\u4F20\u5165\u5230\u62BD\u5C49\u7684\u503C"),U("ngModel",n.data),u(3),E(n.dataFromDrawer))},dependencies:[Fe,B,S,N,y,z,ne,x,_,R,T,ce],encapsulation:2,changeDetection:0});let r=e;return r})();export{Rt as ExDrawerComponent};
