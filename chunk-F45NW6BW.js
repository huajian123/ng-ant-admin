import{c as I,i as d,k as j}from"./chunk-BH5DKTT6.js";import{a as F,ea as v,s as c}from"./chunk-F5ALC7SR.js";import{Ba as M,Ca as z,Cb as g,Eb as b,La as m,Rb as S,Sb as O,Va as y,g as f,ia as u,j as w,ra as $,vb as l}from"./chunk-PHCOYEBV.js";import{a as p}from"./chunk-VB56BUGO.js";var D=(()=>{let n=class n{getGutter(){let t=[null,null],e=this.nzGutter||0;return(Array.isArray(e)?e:[e,null]).forEach((s,r)=>{typeof s=="object"&&s!==null?(t[r]=null,Object.keys(d).map(h=>{let a=h;this.mediaMatcher.matchMedia(d[a]).matches&&s[a]&&(t[r]=s[a])})):t[r]=Number(s)||null}),t}setGutterStyle(){let[t,e]=this.getGutter();this.actualGutter$.next([t,e]);let i=(s,r)=>{let h=this.elementRef.nativeElement;r!==null&&this.renderer.setStyle(h,s,`-${r/2}px`)};i("margin-left",t),i("margin-right",t),i("margin-top",e),i("margin-bottom",e)}constructor(t,e,i,s,r,h,a){this.elementRef=t,this.renderer=e,this.mediaMatcher=i,this.ngZone=s,this.platform=r,this.breakpointService=h,this.directionality=a,this.nzAlign=null,this.nzJustify=null,this.nzGutter=null,this.actualGutter$=new w(1),this.dir="ltr",this.destroy$=new f}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(u(this.destroy$)).subscribe(t=>{this.dir=t}),this.setGutterStyle()}ngOnChanges(t){t.nzGutter&&this.setGutterStyle()}ngAfterViewInit(){this.platform.isBrowser&&this.breakpointService.subscribe(d).pipe(u(this.destroy$)).subscribe(()=>{this.setGutterStyle()})}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}};n.\u0275fac=function(e){return new(e||n)(l(y),l(g),l(I),l(b),l(F),l(j),l(v,8))},n.\u0275dir=z({type:n,selectors:[["","nz-row",""],["nz-row"],["nz-form-item"]],hostAttrs:[1,"ant-row"],hostVars:20,hostBindings:function(e,i){e&2&&O("ant-row-top",i.nzAlign==="top")("ant-row-middle",i.nzAlign==="middle")("ant-row-bottom",i.nzAlign==="bottom")("ant-row-start",i.nzJustify==="start")("ant-row-end",i.nzJustify==="end")("ant-row-center",i.nzJustify==="center")("ant-row-space-around",i.nzJustify==="space-around")("ant-row-space-between",i.nzJustify==="space-between")("ant-row-space-evenly",i.nzJustify==="space-evenly")("ant-row-rtl",i.dir==="rtl")},inputs:{nzAlign:"nzAlign",nzJustify:"nzJustify",nzGutter:"nzGutter"},exportAs:["nzRow"],standalone:!0,features:[m]});let o=n;return o})(),x=(()=>{let n=class n{setHostClassMap(){let t=p({"ant-col":!0,[`ant-col-${this.nzSpan}`]:c(this.nzSpan),[`ant-col-order-${this.nzOrder}`]:c(this.nzOrder),[`ant-col-offset-${this.nzOffset}`]:c(this.nzOffset),[`ant-col-pull-${this.nzPull}`]:c(this.nzPull),[`ant-col-push-${this.nzPush}`]:c(this.nzPush),"ant-col-rtl":this.dir==="rtl"},this.generateClass());for(let e in this.classMap)this.classMap.hasOwnProperty(e)&&this.renderer.removeClass(this.elementRef.nativeElement,e);this.classMap=p({},t);for(let e in this.classMap)this.classMap.hasOwnProperty(e)&&this.classMap[e]&&this.renderer.addClass(this.elementRef.nativeElement,e)}setHostFlexStyle(){this.hostFlexStyle=this.parseFlex(this.nzFlex)}parseFlex(t){return typeof t=="number"?`${t} ${t} auto`:typeof t=="string"&&/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?`0 0 ${t}`:t}generateClass(){let t=["nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],e={};return t.forEach(i=>{let s=i.replace("nz","").toLowerCase();if(c(this[i]))if(typeof this[i]=="number"||typeof this[i]=="string")e[`ant-col-${s}-${this[i]}`]=!0;else{let r=this[i];["span","pull","push","offset","order"].forEach(a=>{let C=a==="span"?"-":`-${a}-`;e[`ant-col-${s}${C}${r[a]}`]=r&&c(r[a])})}}),e}constructor(t,e,i,s){this.elementRef=t,this.nzRowDirective=e,this.renderer=i,this.directionality=s,this.classMap={},this.destroy$=new f,this.hostFlexStyle=null,this.dir="ltr",this.nzFlex=null,this.nzSpan=null,this.nzOrder=null,this.nzOffset=null,this.nzPush=null,this.nzPull=null,this.nzXs=null,this.nzSm=null,this.nzMd=null,this.nzLg=null,this.nzXl=null,this.nzXXl=null}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(u(this.destroy$)).subscribe(t=>{this.dir=t,this.setHostClassMap()}),this.setHostClassMap(),this.setHostFlexStyle()}ngOnChanges(t){this.setHostClassMap();let{nzFlex:e}=t;e&&this.setHostFlexStyle()}ngAfterViewInit(){this.nzRowDirective&&this.nzRowDirective.actualGutter$.pipe(u(this.destroy$)).subscribe(([t,e])=>{let i=(s,r)=>{let h=this.elementRef.nativeElement;r!==null&&this.renderer.setStyle(h,s,`${r/2}px`)};i("padding-left",t),i("padding-right",t),i("padding-top",e),i("padding-bottom",e)})}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}};n.\u0275fac=function(e){return new(e||n)(l(y),l(D,9),l(g),l(v,8))},n.\u0275dir=z({type:n,selectors:[["","nz-col",""],["nz-col"],["nz-form-control"],["nz-form-label"]],hostVars:2,hostBindings:function(e,i){e&2&&S("flex",i.hostFlexStyle)},inputs:{nzFlex:"nzFlex",nzSpan:"nzSpan",nzOrder:"nzOrder",nzOffset:"nzOffset",nzPush:"nzPush",nzPull:"nzPull",nzXs:"nzXs",nzSm:"nzSm",nzMd:"nzMd",nzLg:"nzLg",nzXl:"nzXl",nzXXl:"nzXXl"},exportAs:["nzCol"],standalone:!0,features:[m]});let o=n;return o})(),B=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=M({type:n}),n.\u0275inj=$({});let o=n;return o})();export{D as a,x as b,B as c};