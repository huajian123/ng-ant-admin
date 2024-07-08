import{a as it,b as ot}from"./chunk-MCCZJH2J.js";import{W as nt,X as _,ca as rt,da as st,ea as at,s as M,x as b}from"./chunk-NYWSPOYR.js";import{p as Q,v as tt,w as et}from"./chunk-ZWOUEGUH.js";import{$b as $,Aa as A,Ac as Y,Ba as V,Cc as Z,Jc as K,La as B,Lb as R,Lc as q,Oa as k,Ob as p,Pb as v,Qb as d,Rb as T,Sb as O,Uc as H,Zb as z,ac as G,bc as N,cc as g,dc as f,dd as J,ec as S,fc as U,g as L,gc as X,ia as W,id as F,qc as c,r as u,ra as j,ub as s,vb as x,zc as I}from"./chunk-XNENNAZS.js";import{d as E}from"./chunk-VB56BUGO.js";var pt=t=>({$implicit:t});function dt(t,n){if(t&1&&S(0,"span",4),t&2){let e=c(3);d("nzType",e.icon)}}function ht(t,n){if(t&1&&(U(0),Y(1),X()),t&2){let e=n.$implicit,i=c(4);s(),Z(" ",e(i.nzPercent)," ")}}function mt(t,n){if(t&1&&p(0,ht,2,1,"ng-container",5),t&2){let e=c(3);d("nzStringTemplateOutlet",e.formatter)("nzStringTemplateOutletContext",q(2,pt,e.nzPercent))}}function gt(t,n){if(t&1&&(g(0,"span",3),p(1,dt,1,1,"span",4)(2,mt,1,4,"ng-container"),f()),t&2){let e=c(2);s(),z((e.status==="exception"||e.status==="success")&&!e.nzFormat?1:2)}}function ft(t,n){if(t&1&&p(0,gt,3,1,"span",3),t&2){let e=c();z(e.nzShowInfo?0:-1)}}function ut(t,n){if(t&1&&S(0,"div",7),t&2){let e=n.$implicit;d("ngStyle",e)}}function zt(t,n){}function St(t,n){if(t&1&&(g(0,"div",6),G(1,ut,1,1,"div",7,$),p(3,zt,0,0,"ng-template",8),f()),t&2){let e=c(2),i=I(1);s(),N(e.steps),s(2),d("ngTemplateOutlet",i)}}function _t(t,n){if(t&1&&S(0,"div",13),t&2){let e=c(3);T("width",e.nzSuccessPercent,"%")("border-radius",e.nzStrokeLinecap==="round"?"100px":"0")("height",e.strokeWidth,"px")}}function Ct(t,n){}function yt(t,n){if(t&1&&(g(0,"div",9)(1,"div",10),S(2,"div",11),p(3,_t,1,6,"div",12),f()(),p(4,Ct,0,0,"ng-template",8)),t&2){let e=c(2),i=I(1);s(2),T("width",e.nzPercent,"%")("border-radius",e.nzStrokeLinecap==="round"?"100px":"0")("background",e.isGradient?null:e.nzStrokeColor)("background-image",e.isGradient?e.lineGradient:null)("height",e.strokeWidth,"px"),s(),z(e.nzSuccessPercent||e.nzSuccessPercent===0?3:-1),s(),d("ngTemplateOutlet",i)}}function kt(t,n){if(t&1&&(g(0,"div"),p(1,St,4,1,"div",6)(2,yt,5,12),f()),t&2){let e=c();s(),z(e.isSteps?1:2)}}function Pt(t,n){if(t&1&&(k(),S(0,"stop")),t&2){let e=n.$implicit;v("offset",e.offset)("stop-color",e.color)}}function xt(t,n){if(t&1&&(k(),g(0,"defs")(1,"linearGradient",17),G(2,Pt,1,2,":svg:stop",null,$),f()()),t&2){let e=c(2);s(),d("id","gradient-"+e.gradientId),s(),N(e.circleGradient)}}function vt(t,n){if(t&1&&(k(),S(0,"path",16)),t&2){let e=n.$implicit,i=c(2);d("ngStyle",e.strokePathStyle),v("d",i.pathString)("stroke-linecap",i.nzStrokeLinecap)("stroke",e.stroke)("stroke-width",i.nzPercent?i.strokeWidth:0)}}function Tt(t,n){}function $t(t,n){if(t&1&&(g(0,"div",10),k(),g(1,"svg",14),p(2,xt,4,1,":svg:defs"),S(3,"path",15),G(4,vt,1,5,":svg:path",16,$),f(),p(6,Tt,0,0,"ng-template",8),f()),t&2){let e=c(),i=I(1);T("width",e.nzWidth,"px")("height",e.nzWidth,"px")("font-size",e.nzWidth*.15+6,"px"),O("ant-progress-circle-gradient",e.isGradient),s(2),z(e.isGradient?2:-1),s(),d("ngStyle",e.trailPathStyle),v("stroke-width",e.strokeWidth)("d",e.pathString),s(),N(e.progressCirclePath),s(2),d("ngTemplateOutlet",i)}}function Gt(t){return+t.replace("%","")}var lt=t=>{let n=[];return Object.keys(t).forEach(e=>{let i=t[e],o=Gt(e);isNaN(o)||n.push({key:o,value:i})}),n=n.sort((e,i)=>e.key-i.key),n},Nt=t=>lt(t).map(({key:n,value:e})=>({offset:`${n}%`,color:e})),It=t=>{let r=t,{from:n="#1890ff",to:e="#1890ff",direction:i="to right"}=r,o=E(r,["from","to","direction"]);if(Object.keys(o).length!==0){let l=lt(o).map(({key:a,value:m})=>`${m} ${a}%`).join(", ");return`linear-gradient(${i}, ${l})`}return`linear-gradient(${i}, ${n}, ${e})`},bt=0,ct="progress",wt=new Map([["success","check"],["exception","close"]]),Dt=new Map([["normal","#108ee9"],["exception","#ff5500"],["success","#87d068"]]),Wt=t=>`${t}%`,Ot=(()=>{let n=class n{get formatter(){return this.nzFormat||Wt}get status(){return this.nzStatus||this.inferredStatus}get strokeWidth(){return this.nzStrokeWidth||(this.nzType==="line"&&this.nzSize!=="small"?8:6)}get isCircleStyle(){return this.nzType==="circle"||this.nzType==="dashboard"}constructor(i,o,r){this.cdr=i,this.nzConfigService=o,this.directionality=r,this._nzModuleName=ct,this.nzShowInfo=!0,this.nzWidth=132,this.nzStrokeColor=void 0,this.nzSize="default",this.nzPercent=0,this.nzType="line",this.nzGapPosition="top",this.nzStrokeLinecap="round",this.nzSteps=0,this.steps=[],this.lineGradient=null,this.isGradient=!1,this.isSteps=!1,this.gradientId=bt++,this.progressCirclePath=[],this.trailPathStyle=null,this.dir="ltr",this.cachedStatus="normal",this.inferredStatus="normal",this.destroy$=new L}ngOnChanges(i){let{nzSteps:o,nzGapPosition:r,nzStrokeLinecap:l,nzStrokeColor:a,nzGapDegree:m,nzType:y,nzStatus:C,nzPercent:h,nzSuccessPercent:P,nzStrokeWidth:w}=i;C&&(this.cachedStatus=this.nzStatus||this.cachedStatus),(h||P)&&(parseInt(this.nzPercent.toString(),10)>=100?(M(this.nzSuccessPercent)&&this.nzSuccessPercent>=100||this.nzSuccessPercent===void 0)&&(this.inferredStatus="success"):this.inferredStatus=this.cachedStatus),(C||h||P||a)&&this.updateIcon(),a&&this.setStrokeColor(),(r||l||m||y||h||a||a)&&this.getCirclePaths(),(h||o||w)&&(this.isSteps=this.nzSteps>0,this.isSteps&&this.getSteps())}ngOnInit(){this.nzConfigService.getConfigChangeEventForComponent(ct).pipe(W(this.destroy$)).subscribe(()=>{this.updateIcon(),this.setStrokeColor(),this.getCirclePaths()}),this.directionality.change?.pipe(W(this.destroy$)).subscribe(i=>{this.dir=i,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}updateIcon(){let i=wt.get(this.status);this.icon=i?i+(this.isCircleStyle?"-o":"-circle-fill"):""}getSteps(){let i=Math.floor(this.nzSteps*(this.nzPercent/100)),o=this.nzSize==="small"?2:14,r=[];for(let l=0;l<this.nzSteps;l++){let a;l<=i-1&&(a=this.nzStrokeColor);let m={backgroundColor:`${a}`,width:`${o}px`,height:`${this.strokeWidth}px`};r.push(m)}this.steps=r}getCirclePaths(){if(!this.isCircleStyle)return;let i=M(this.nzSuccessPercent)?[this.nzSuccessPercent,this.nzPercent]:[this.nzPercent],o=50-this.strokeWidth/2,r=this.nzGapPosition||(this.nzType==="circle"?"top":"bottom"),l=Math.PI*2*o,a=this.nzGapDegree||(this.nzType==="circle"?0:75),m=0,y=-o,C=0,h=o*-2;switch(r){case"left":m=-o,y=0,C=o*2,h=0;break;case"right":m=o,y=0,C=o*-2,h=0;break;case"bottom":y=o,h=o*2;break;default:}this.pathString=`M 50,50 m ${m},${y}
       a ${o},${o} 0 1 1 ${C},${-h}
       a ${o},${o} 0 1 1 ${-C},${h}`,this.trailPathStyle={strokeDasharray:`${l-a}px ${l}px`,strokeDashoffset:`-${a/2}px`,transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s"},this.progressCirclePath=i.map((P,w)=>{let D=i.length===2&&w===0;return{stroke:this.isGradient&&!D?`url(#gradient-${this.gradientId})`:null,strokePathStyle:{stroke:this.isGradient?null:D?Dt.get("success"):this.nzStrokeColor,transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s",strokeDasharray:`${(P||0)/100*(l-a)}px ${l}px`,strokeDashoffset:`-${a/2}px`}}}).reverse()}setStrokeColor(){let i=this.nzStrokeColor,o=this.isGradient=!!i&&typeof i!="string";o&&!this.isCircleStyle?this.lineGradient=It(i):o&&this.isCircleStyle?this.circleGradient=Nt(this.nzStrokeColor):(this.lineGradient=null,this.circleGradient=[])}};n.\u0275fac=function(o){return new(o||n)(x(J),x(nt),x(at,8))},n.\u0275cmp=A({type:n,selectors:[["nz-progress"]],inputs:{nzShowInfo:"nzShowInfo",nzWidth:"nzWidth",nzStrokeColor:"nzStrokeColor",nzSize:"nzSize",nzFormat:"nzFormat",nzSuccessPercent:[2,"nzSuccessPercent","nzSuccessPercent",b],nzPercent:[2,"nzPercent","nzPercent",F],nzStrokeWidth:[2,"nzStrokeWidth","nzStrokeWidth",b],nzGapDegree:[2,"nzGapDegree","nzGapDegree",b],nzStatus:"nzStatus",nzType:"nzType",nzGapPosition:"nzGapPosition",nzStrokeLinecap:"nzStrokeLinecap",nzSteps:[2,"nzSteps","nzSteps",F]},exportAs:["nzProgress"],standalone:!0,features:[R,B,K],decls:5,vars:17,consts:[["progressInfoTemplate",""],[3,"ngClass"],[1,"ant-progress-inner",3,"width","height","fontSize","ant-progress-circle-gradient"],[1,"ant-progress-text"],["nz-icon","",3,"nzType"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],[1,"ant-progress-steps-outer"],[1,"ant-progress-steps-item",3,"ngStyle"],[3,"ngTemplateOutlet"],[1,"ant-progress-outer"],[1,"ant-progress-inner"],[1,"ant-progress-bg"],[1,"ant-progress-success-bg",3,"width","border-radius","height"],[1,"ant-progress-success-bg"],["viewBox","0 0 100 100",1,"ant-progress-circle"],["stroke","#f3f3f3","fill-opacity","0",1,"ant-progress-circle-trail",3,"ngStyle"],["fill-opacity","0",1,"ant-progress-circle-path",3,"ngStyle"],["x1","100%","y1","0%","x2","0%","y2","0%",3,"id"]],template:function(o,r){o&1&&(p(0,ft,1,1,"ng-template",null,0,H),g(2,"div",1),p(3,kt,3,1,"div")(4,$t,7,13,"div",2),f()),o&2&&(s(2),O("ant-progress-line",r.nzType==="line")("ant-progress-small",r.nzSize==="small")("ant-progress-default",r.nzSize==="default")("ant-progress-show-info",r.nzShowInfo)("ant-progress-circle",r.isCircleStyle)("ant-progress-steps",r.isSteps)("ant-progress-rtl",r.dir==="rtl"),d("ngClass","ant-progress ant-progress-status-"+r.status),s(),z(r.nzType==="line"?3:-1),s(),z(r.isCircleStyle?4:-1))},dependencies:[st,rt,ot,it,Q,et,tt],encapsulation:2,changeDetection:0});let t=n;return u([_()],t.prototype,"nzShowInfo",void 0),u([_()],t.prototype,"nzStrokeColor",void 0),u([_()],t.prototype,"nzSize",void 0),u([_()],t.prototype,"nzStrokeWidth",void 0),u([_()],t.prototype,"nzGapDegree",void 0),u([_()],t.prototype,"nzGapPosition",void 0),u([_()],t.prototype,"nzStrokeLinecap",void 0),t})(),ne=(()=>{let n=class n{};n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=V({type:n}),n.\u0275inj=j({imports:[Ot]});let t=n;return t})();export{Ot as a,ne as b};
