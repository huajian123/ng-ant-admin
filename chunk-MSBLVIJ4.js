import{a as $,b as ee}from"./chunk-XLAVPD4C.js";import{a as ne,b as te,c as oe}from"./chunk-P54JDN22.js";import"./chunk-O2WPPUR2.js";import{a as _,c as E}from"./chunk-4ZTTRXSQ.js";import"./chunk-4FT5N35B.js";import"./chunk-HYXQY7LQ.js";import"./chunk-2KO7AHLC.js";import"./chunk-XSQZ233G.js";import"./chunk-3D3NKZKE.js";import"./chunk-BR5TRSLO.js";import"./chunk-V6VP5ZUC.js";import"./chunk-6G6375XT.js";import{b as P}from"./chunk-DBID6Z5F.js";import{a as Y,b as Z}from"./chunk-O35JRGP6.js";import"./chunk-HDT4KMAI.js";import"./chunk-IRQU3GS3.js";import{a as Q}from"./chunk-5QIRJQWY.js";import"./chunk-DXHFQZTB.js";import"./chunk-WHSVXWNJ.js";import"./chunk-ZMRRVVPG.js";import{a as X,b as q,c as U,e as W}from"./chunk-23ZTSX7W.js";import"./chunk-T5C3MTIU.js";import"./chunk-KZXNDGZT.js";import{a as J,c as H,e as K}from"./chunk-CUBBA5TV.js";import{d as y,e as c,g as F,h as b,l as N,o as w,r as M,u as x,w as D,x as B}from"./chunk-WL72DHP4.js";import"./chunk-63CUI4A7.js";import"./chunk-BE5UFXKQ.js";import"./chunk-AOHLMCKO.js";import{a as L,b as j,c as V}from"./chunk-JG7PDFQU.js";import"./chunk-LMT2TBSV.js";import"./chunk-7PKCM743.js";import"./chunk-MCCZJH2J.js";import{a as I,b as A,c as k,d as G,e as R}from"./chunk-S2KEA7XP.js";import{ca as O,da as T}from"./chunk-NYWSPOYR.js";import"./chunk-ZGT77FDO.js";import{a as C}from"./chunk-XMISJKZ6.js";import{m as S,n as v}from"./chunk-TLY6E2EZ.js";import"./chunk-I3AI2SV7.js";import"./chunk-ZWOUEGUH.js";import{Aa as z,Ac as r,Jc as h,Qb as n,Ua as d,Z as s,cc as t,dc as o,ec as l,oc as g,ub as e,wa as i}from"./chunk-XNENNAZS.js";import"./chunk-VB56BUGO.js";var Ae=(()=>{let a=class a{constructor(){this.destroyRef=i(d),this.fb=i(x),this.notification=i(ee),this.router=i(S),this.spinService=i(Q),this.dataService=i(_),this.loginInOutService=i(E)}submitForm(){if(!P(this.validateForm))return;this.spinService.setCurrentGlobalSpinStore(!0);let u=this.validateForm.getRawValue();this.dataService.login(u).pipe(s(()=>{this.spinService.setCurrentGlobalSpinStore(!1)}),C(this.destroyRef)).subscribe(m=>{this.loginInOutService.loginIn(m).then(()=>{this.router.navigateByUrl("default/dashboard/analysis")}).finally(()=>{this.spinService.setCurrentGlobalSpinStore(!1),this.notification.blank("\u6E29\u99A8\u63D0\u793A",`
                \u6E90\u7801\u5730\u5740\uFF1A<a href="https://github.com/huajian123/ng-ant-admin">\u5728\u8FD9\u91CC</a>
            `,{nzPlacement:"top",nzDuration:0})})})}ngOnInit(){this.validateForm=this.fb.group({userName:[null,[c.required]],password:[null,[c.required]],remember:[null]})}};a.\u0275fac=function(m){return new(m||a)},a.\u0275cmp=z({type:a,selectors:[["app-login-form"]],standalone:!0,features:[h],decls:42,vars:16,consts:[[1,"login-form-wrap"],["nz-form","",1,"login-form",3,"ngSubmit","formGroup"],[3,"nzAnimated"],["nzTitle","\u8D26\u6237\u5BC6\u7801\u767B\u5F55"],["nzErrorTip","\u8D26\u53F7\u540D\uFF1Aadmin"],["nzPrefixIcon","user",3,"nzSize"],["type","text","formControlName","userName","nz-input","","placeholder","\u7528\u6237\u540D",3,"placeholder"],["nzErrorTip","\u5BC6\u7801\uFF1A123456"],["nzPrefixIcon","lock",3,"nzSize"],["type","password","autocomplete","on","formControlName","password","nz-input","","placeholder","\u5BC6\u7801",3,"placeholder"],["nzTitle","\u624B\u673A\u53F7\u767B\u5F55"],["nzErrorTip","\u8BF7\u8F93\u5165\u7528\u6237\u540D!"],["nzPrefixIcon","mobile",3,"nzSize"],["type","text","autocomplete","on","formControlName","userName","nz-input","","placeholder","\u624B\u673A\u53F7"],["nz-row","","nzJustify","space-between"],["nz-col","","nzErrorTip","\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801!",1,"flex-1",2,"max-width","65%",3,"nzSm","nzXs"],["nzPrefixIcon","mail",3,"nzSize"],["type","password","formControlName","password","nz-input","","placeholder","\u5BC6\u7801"],["nz-button","","nz-col","","nzType","default",1,"p-0",3,"nzSize","nzSm","nzXs"],["nz-row","",1,"login-form-margin"],["nz-col","",3,"nzSpan"],["formControlName","remember","nz-checkbox",""],[1,"login-form-forgot"],["nz-button","","nzSize","large",1,"login-form-button","login-form-margin",3,"nzType"],[1,"other-way"],[1,"other-login"],["nz-icon","","nzTheme","fill","nzType","alipay-circle"],["nz-icon","","nzTheme","fill","nzType","taobao-circle"],["nz-icon","","nzTheme","fill","nzType","weibo-circle"],["routerLink","/login/register-form"]],template:function(m,f){m&1&&(t(0,"div",0)(1,"form",1),g("ngSubmit",function(){return f.submitForm()}),t(2,"nz-tabset",2)(3,"nz-tab",3)(4,"nz-form-item")(5,"nz-form-control",4)(6,"nz-input-group",5),l(7,"input",6),o()()(),t(8,"nz-form-item")(9,"nz-form-control",7)(10,"nz-input-group",8),l(11,"input",9),o()()()(),t(12,"nz-tab",10)(13,"nz-form-item")(14,"nz-form-control",11)(15,"nz-input-group",12),l(16,"input",13),o()()(),t(17,"nz-form-item",14)(18,"nz-form-control",15)(19,"nz-input-group",16),l(20,"input",17),o()(),t(21,"button",18),r(22,"\u83B7\u53D6\u9A8C\u8BC1\u7801"),o()()()(),t(23,"div",19)(24,"div",20)(25,"label",21)(26,"span"),r(27,"\u81EA\u52A8\u767B\u5F55"),o()()(),t(28,"div",20)(29,"a",22),r(30,"\u5FD8\u8BB0\u5BC6\u7801"),o()()(),t(31,"button",23),r(32,"\u767B \u5F55"),o(),t(33,"div",24)(34,"div",25)(35,"span"),r(36,"\u5176\u4ED6\u65B9\u5F0F\u767B\u9646"),o(),l(37,"i",26)(38,"i",27)(39,"i",28),o(),t(40,"a",29),r(41,"\u6CE8\u518C\u7528\u6237"),o()()()()),m&2&&(e(),n("formGroup",f.validateForm),e(),n("nzAnimated",!1),e(4),n("nzSize","large"),e(),n("placeholder","\u8D26\u53F7\u540D\uFF1Aadmin"),e(3),n("nzSize","large"),e(),n("placeholder","\u5BC6\u7801\uFF1A123456"),e(4),n("nzSize","large"),e(3),n("nzSm",16)("nzXs",15),e(),n("nzSize","large"),e(2),n("nzSize","large")("nzSm",7)("nzXs",7),e(3),n("nzSpan",12),e(4),n("nzSpan",12),e(3),n("nzType","primary"))},dependencies:[D,N,y,F,b,W,j,L,q,X,U,B,w,M,oe,te,ne,V,R,G,I,A,K,J,H,k,Z,Y,T,O,v,$],styles:[".login-form-wrap[_ngcontent-%COMP%]{width:368px;margin:0 auto}@media screen and (max-width: 375px){.login-form-wrap[_ngcontent-%COMP%]{padding:0 15px}}.login-form-wrap[_ngcontent-%COMP%]   .login-form-margin[_ngcontent-%COMP%]{margin-bottom:16px}.login-form-wrap[_ngcontent-%COMP%]   .login-form-forgot[_ngcontent-%COMP%]{float:right}.login-form-wrap[_ngcontent-%COMP%]   .login-form-button[_ngcontent-%COMP%]{width:100%}.login-form-wrap[_ngcontent-%COMP%]   .other-login[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:200px}.login-form-wrap[_ngcontent-%COMP%]   .other-login[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:24px}.login-form-wrap[_ngcontent-%COMP%]   .other-login[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#1890ff;cursor:pointer}.login-form-wrap[_ngcontent-%COMP%]   .other-way[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"],changeDetection:0});let p=a;return p})();export{Ae as LoginFormComponent};