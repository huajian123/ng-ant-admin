import{W as te,X as ie,a as ee,ca as N,da as ne,ea as re}from"./chunk-NYWSPOYR.js";import{A as D,C as ae,H as de,s as oe,t as g,u as E,z as se}from"./chunk-ZGT77FDO.js";import{k as X}from"./chunk-I3AI2SV7.js";import{d as K}from"./chunk-ZWOUEGUH.js";import{Aa as j,Ba as h,Bb as L,Ca as y,Cb as z,Ea as k,Eb as f,Jc as q,K as T,La as b,Lb as B,O,Ob as V,Pb as W,Sb as Z,Va as l,Zb as $,ab as P,bb as m,cb as x,dd as J,ec as G,g as A,ga as R,hd as u,ia as p,qa as M,r as S,ra as c,rc as H,sc as U,ta as F,va as v,vb as s,vc as Q,xc as Y,yc as _}from"./chunk-XNENNAZS.js";var De=(()=>{let e=class e{setHiddenAttribute(){this.hidden?typeof this.hidden=="string"?this.renderer.setAttribute(this.elementRef.nativeElement,"hidden",this.hidden):this.renderer.setAttribute(this.elementRef.nativeElement,"hidden",""):this.renderer.removeAttribute(this.elementRef.nativeElement,"hidden")}constructor(n,t){this.elementRef=n,this.renderer=t,this.hidden=null,this.renderer.setAttribute(this.elementRef.nativeElement,"hidden","")}ngOnChanges(){this.setHiddenAttribute()}ngAfterViewInit(){this.setHiddenAttribute()}};e.\u0275fac=function(t){return new(t||e)(s(l),s(z))},e.\u0275dir=y({type:e,selectors:[["","nz-button",""],["nz-button-group"],["","nz-icon",""],["","nz-menu-item",""],["","nz-submenu",""],["nz-select-top-control"],["nz-select-placeholder"],["nz-input-group"]],inputs:{hidden:"hidden"},standalone:!0,features:[b]});let r=e;return r})(),le=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h({type:e}),e.\u0275inj=c({});let r=e;return r})();var fe=(()=>{let e=class e extends D{constructor(n,t,i){super(n,t,i)}ngOnDestroy(){this.flush()}};e.\u0275fac=function(t){return new(t||e)(v(K),v(g),v(E))},e.\u0275prov=M({token:e,factory:e.\u0275fac});let r=e;return r})();function pe(){return new se}function ge(r,e,o){return new de(r,e,o)}var ce=[{provide:E,useFactory:pe},{provide:D,useClass:fe},{provide:L,useFactory:ge,deps:[X,D,f]}],ke=[{provide:g,useFactory:()=>new ae},{provide:m,useValue:"BrowserAnimations"},...ce],Pe=[{provide:g,useClass:oe},{provide:m,useValue:"NoopAnimations"},...ce];var C=class{get waveAttributeName(){return this.insertExtraNode?"ant-click-animating":"ant-click-animating-without-extra-node"}constructor(e,o,n,t,i){this.triggerElement=e,this.ngZone=o,this.insertExtraNode=n,this.platformId=t,this.cspNonce=i,this.waveTransitionDuration=400,this.styleForPseudo=null,this.extraNode=null,this.lastTime=0,this.onClick=a=>{!this.triggerElement||!this.triggerElement.getAttribute||this.triggerElement.getAttribute("disabled")||a.target.tagName==="INPUT"||this.triggerElement.className.indexOf("disabled")>=0||this.fadeOutWave()},this.platform=new ee(this.platformId),this.clickHandler=this.onClick.bind(this),this.bindTriggerEvent()}bindTriggerEvent(){this.platform.isBrowser&&this.ngZone.runOutsideAngular(()=>{this.removeTriggerEvent(),this.triggerElement&&this.triggerElement.addEventListener("click",this.clickHandler,!0)})}removeTriggerEvent(){this.triggerElement&&this.triggerElement.removeEventListener("click",this.clickHandler,!0)}removeStyleAndExtraNode(){this.styleForPseudo&&document.body.contains(this.styleForPseudo)&&(document.body.removeChild(this.styleForPseudo),this.styleForPseudo=null),this.insertExtraNode&&this.triggerElement.contains(this.extraNode)&&this.triggerElement.removeChild(this.extraNode)}destroy(){this.removeTriggerEvent(),this.removeStyleAndExtraNode()}fadeOutWave(){let e=this.triggerElement,o=this.getWaveColor(e);e.setAttribute(this.waveAttributeName,"true"),!(Date.now()<this.lastTime+this.waveTransitionDuration)&&(this.isValidColor(o)&&(this.styleForPseudo||(this.styleForPseudo=document.createElement("style"),this.cspNonce&&(this.styleForPseudo.nonce=this.cspNonce)),this.styleForPseudo.innerHTML=`
      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {
        --antd-wave-shadow-color: ${o};
      }`,document.body.appendChild(this.styleForPseudo)),this.insertExtraNode&&(this.extraNode||(this.extraNode=document.createElement("div")),this.extraNode.className="ant-click-animating-node",e.appendChild(this.extraNode)),this.lastTime=Date.now(),this.runTimeoutOutsideZone(()=>{e.removeAttribute(this.waveAttributeName),this.removeStyleAndExtraNode()},this.waveTransitionDuration))}isValidColor(e){return!!e&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&this.isNotGrey(e)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(e)&&e!=="transparent"}isNotGrey(e){let o=e.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return o&&o[1]&&o[2]&&o[3]?!(o[1]===o[2]&&o[2]===o[3]):!0}getWaveColor(e){let o=getComputedStyle(e);return o.getPropertyValue("border-top-color")||o.getPropertyValue("border-color")||o.getPropertyValue("background-color")}runTimeoutOutsideZone(e,o){this.ngZone.runOutsideAngular(()=>setTimeout(e,o))}},ve={disabled:!1},he=new F("nz-wave-global-options");function ye(r){return k([{provide:he,useValue:r}])}var Qe=(()=>{let e=class e{get disabled(){return this.waveDisabled}get rendererRef(){return this.waveRenderer}constructor(n,t,i,a,d,I){this.ngZone=n,this.elementRef=t,this.config=i,this.animationType=a,this.platformId=d,this.cspNonce=I,this.nzWaveExtraNode=!1,this.waveDisabled=!1,this.waveDisabled=this.isConfigDisabled()}isConfigDisabled(){let n=!1;return this.config&&typeof this.config.disabled=="boolean"&&(n=this.config.disabled),this.animationType==="NoopAnimations"&&(n=!0),n}ngOnDestroy(){this.waveRenderer&&this.waveRenderer.destroy()}ngOnInit(){this.renderWaveIfEnabled()}renderWaveIfEnabled(){!this.waveDisabled&&this.elementRef.nativeElement&&(this.waveRenderer=new C(this.elementRef.nativeElement,this.ngZone,this.nzWaveExtraNode,this.platformId,this.cspNonce))}disable(){this.waveDisabled=!0,this.waveRenderer&&(this.waveRenderer.removeTriggerEvent(),this.waveRenderer.removeStyleAndExtraNode())}enable(){this.waveDisabled=this.isConfigDisabled()||!1,this.waveRenderer&&this.waveRenderer.bindTriggerEvent()}};e.\u0275fac=function(t){return new(t||e)(s(f),s(l),s(he,8),s(m,8),s(P),s(x,8))},e.\u0275dir=y({type:e,selectors:[["","nz-wave",""],["button","nz-button","",3,"nzType","link",3,"nzType","text"]],inputs:{nzWaveExtraNode:"nzWaveExtraNode"},exportAs:["nzWave"],standalone:!0});let r=e;return r})(),ue=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h({type:e}),e.\u0275inj=c({providers:[ye(ve)]});let r=e;return r})();var be=["nz-button",""],ze=["*"];function Ne(r,e){r&1&&G(0,"span",0)}var me="button",Ee=(()=>{let e=class e{insertSpan(n,t){n.forEach(i=>{if(i.nodeName==="#text"){let a=t.createElement("span"),d=t.parentNode(i);t.insertBefore(d,a,i),t.appendChild(a,i)}})}get iconOnly(){let n=Array.from(this.elementRef?.nativeElement?.childNodes||[]),t=n.every(a=>a.nodeName!=="#text"),i=n.filter(a=>!(a.nodeName==="#comment"||a?.attributes?.getNamedItem("nz-icon"))).length==0;return!!this.nzIconDirectiveElement&&i&&t}constructor(n,t,i,a,d,I){this.ngZone=n,this.elementRef=t,this.cdr=i,this.renderer=a,this.nzConfigService=d,this.directionality=I,this._nzModuleName=me,this.nzBlock=!1,this.nzGhost=!1,this.nzSearch=!1,this.nzLoading=!1,this.nzDanger=!1,this.disabled=!1,this.tabIndex=null,this.nzType=null,this.nzShape=null,this.nzSize="default",this.dir="ltr",this.destroy$=new A,this.loading$=new A,this.nzConfigService.getConfigChangeEventForComponent(me).pipe(p(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){this.directionality.change?.pipe(p(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{T(this.elementRef.nativeElement,"click",{capture:!0}).pipe(p(this.destroy$)).subscribe(n=>{(this.disabled&&n.target?.tagName==="A"||this.nzLoading)&&(n.preventDefault(),n.stopImmediatePropagation())})})}ngOnChanges(n){let{nzLoading:t}=n;t&&this.loading$.next(this.nzLoading)}ngAfterViewInit(){this.insertSpan(this.elementRef.nativeElement.childNodes,this.renderer)}ngAfterContentInit(){this.loading$.pipe(R(this.nzLoading),O(()=>!!this.nzIconDirectiveElement),p(this.destroy$)).subscribe(n=>{let t=this.nzIconDirectiveElement.nativeElement;n?this.renderer.setStyle(t,"display","none"):this.renderer.removeStyle(t,"display")})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};e.\u0275fac=function(t){return new(t||e)(s(f),s(l),s(J),s(z),s(te),s(re,8))},e.\u0275cmp=j({type:e,selectors:[["button","nz-button",""],["a","nz-button",""]],contentQueries:function(t,i,a){if(t&1&&Q(a,N,5,l),t&2){let d;Y(d=_())&&(i.nzIconDirectiveElement=d.first)}},hostAttrs:[1,"ant-btn"],hostVars:34,hostBindings:function(t,i){t&2&&(W("tabindex",i.disabled?-1:i.tabIndex===null?null:i.tabIndex)("disabled",i.disabled||null),Z("ant-btn-default",i.nzType==="default")("ant-btn-primary",i.nzType==="primary")("ant-btn-dashed",i.nzType==="dashed")("ant-btn-link",i.nzType==="link")("ant-btn-text",i.nzType==="text")("ant-btn-circle",i.nzShape==="circle")("ant-btn-round",i.nzShape==="round")("ant-btn-lg",i.nzSize==="large")("ant-btn-sm",i.nzSize==="small")("ant-btn-dangerous",i.nzDanger)("ant-btn-loading",i.nzLoading)("ant-btn-background-ghost",i.nzGhost)("ant-btn-block",i.nzBlock)("ant-input-search-button",i.nzSearch)("ant-btn-rtl",i.dir==="rtl")("ant-btn-icon-only",i.iconOnly))},inputs:{nzBlock:[2,"nzBlock","nzBlock",u],nzGhost:[2,"nzGhost","nzGhost",u],nzSearch:[2,"nzSearch","nzSearch",u],nzLoading:[2,"nzLoading","nzLoading",u],nzDanger:[2,"nzDanger","nzDanger",u],disabled:[2,"disabled","disabled",u],tabIndex:"tabIndex",nzType:"nzType",nzShape:"nzShape",nzSize:"nzSize"},exportAs:["nzButton"],standalone:!0,features:[B,b,q],attrs:be,ngContentSelectors:ze,decls:2,vars:1,consts:[["nz-icon","","nzType","loading"]],template:function(t,i){t&1&&(H(),V(0,Ne,1,0,"span",0),U(1)),t&2&&$(i.nzLoading?0:-1)},dependencies:[ne,N],encapsulation:2,changeDetection:0});let r=e;return S([ie()],r.prototype,"nzSize",void 0),r})();var mt=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h({type:e}),e.\u0275inj=c({imports:[Ee,le,ue]});let r=e;return r})();export{De as a,Qe as b,ue as c,Ee as d,mt as e};