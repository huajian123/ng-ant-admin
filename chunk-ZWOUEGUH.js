import{Ba as Re,Ca as B,Cb as Z,Da as $,Hb as x,La as Oe,Va as Y,Wc as $e,Xa as Te,Xc as xe,ab as Pe,bd as W,dd as ae,ed as Ue,fd as ze,jd as ce,lc as Ne,mc as S,na as Me,nc as C,oa as Be,qa as M,ra as Le,ta as z,tb as ke,va as T,vb as p,wa as k,xb as V}from"./chunk-XNENNAZS.js";var Xe=null;function de(){return Xe}function Ln(t){Xe??=t}var Ve=class{};var Ae=new z(""),Se=(()=>{let e=class e{historyGo(n){throw new Error("")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:()=>k(at),providedIn:"platform"});let t=e;return t})();var at=(()=>{let e=class e extends Se{constructor(){super(),this._doc=k(Ae),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return de().getBaseHref(this._doc)}onPopState(n){let i=de().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",n,!1),()=>i.removeEventListener("popstate",n)}onHashChange(n){let i=de().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",n,!1),()=>i.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,i,r){this._history.pushState(n,i,r)}replaceState(n,i,r){this._history.replaceState(n,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:()=>new e,providedIn:"platform"});let t=e;return t})();function be(t,e){if(t.length==0)return e;if(e.length==0)return t;let s=0;return t.endsWith("/")&&s++,e.startsWith("/")&&s++,s==2?t+e.substring(1):s==1?t+e:t+"/"+e}function je(t){let e=t.match(/#|\?|$/),s=e&&e.index||t.length,n=s-(t[s-1]==="/"?1:0);return t.slice(0,n)+t.slice(s)}function R(t){return t&&t[0]!=="?"?"?"+t:t}var oe=(()=>{let e=class e{historyGo(n){throw new Error("")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:()=>k(ct),providedIn:"root"});let t=e;return t})(),Qe=new z(""),ct=(()=>{let e=class e extends oe{constructor(n,i){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??k(Ae).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return be(this._baseHref,n)}path(n=!1){let i=this._platformLocation.pathname+R(this._platformLocation.search),r=this._platformLocation.hash;return r&&n?`${i}${r}`:i}pushState(n,i,r,o){let u=this.prepareExternalUrl(r+R(o));this._platformLocation.pushState(n,i,u)}replaceState(n,i,r,o){let u=this.prepareExternalUrl(r+R(o));this._platformLocation.replaceState(n,i,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};e.\u0275fac=function(i){return new(i||e)(T(Se),T(Qe,8))},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Rn=(()=>{let e=class e extends oe{constructor(n,i){super(),this._platformLocation=n,this._baseHref="",this._removeListenerFns=[],i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}path(n=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(n){let i=be(this._baseHref,n);return i.length>0?"#"+i:i}pushState(n,i,r,o){let u=this.prepareExternalUrl(r+R(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.pushState(n,i,u)}replaceState(n,i,r,o){let u=this.prepareExternalUrl(r+R(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.replaceState(n,i,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};e.\u0275fac=function(i){return new(i||e)(T(Se),T(Qe,8))},e.\u0275prov=M({token:e,factory:e.\u0275fac});let t=e;return t})(),dt=(()=>{let e=class e{constructor(n){this._subject=new Te,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let i=this._locationStrategy.getBaseHref();this._basePath=ft(je(Ge(i))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,i=""){return this.path()==this.normalize(n+R(i))}normalize(n){return e.stripTrailingSlash(ht(this._basePath,Ge(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,i="",r=null){this._locationStrategy.pushState(r,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+R(i)),r)}replaceState(n,i="",r=null){this._locationStrategy.replaceState(r,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+R(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",i){this._urlChangeListeners.forEach(r=>r(n,i))}subscribe(n,i,r){return this._subject.subscribe({next:n,error:i,complete:r})}};e.normalizeQueryParams=R,e.joinWithSlash=be,e.stripTrailingSlash=je,e.\u0275fac=function(i){return new(i||e)(T(oe))},e.\u0275prov=M({token:e,factory:()=>lt(),providedIn:"root"});let t=e;return t})();function lt(){return new dt(T(oe))}function ht(t,e){if(!t||!e.startsWith(t))return e;let s=e.substring(t.length);return s===""||["/",";","?","#"].includes(s[0])?s:e}function Ge(t){return t.replace(/\/index.html$/,"")}function ft(t){if(new RegExp("^(https?:)?//").test(t)){let[,s]=t.split(/\/\/[^\/]+/);return s}return t}var ve=function(t){return t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific",t}(ve||{});var A=function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t}(A||{}),h=function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t}(h||{}),b=function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t}(b||{}),E={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Dt(t){return S(t)[C.LocaleId]}function gt(t,e,s){let n=S(t),i=[n[C.DayPeriodsFormat],n[C.DayPeriodsStandalone]],r=v(i,e);return v(r,s)}function pt(t,e,s){let n=S(t),i=[n[C.DaysFormat],n[C.DaysStandalone]],r=v(i,e);return v(r,s)}function mt(t,e,s){let n=S(t),i=[n[C.MonthsFormat],n[C.MonthsStandalone]],r=v(i,e);return v(r,s)}function Ct(t,e){let n=S(t)[C.Eras];return v(n,e)}function K(t,e){let s=S(t);return v(s[C.DateFormat],e)}function q(t,e){let s=S(t);return v(s[C.TimeFormat],e)}function X(t,e){let n=S(t)[C.DateTimeFormat];return v(n,e)}function I(t,e){let s=S(t),n=s[C.NumberSymbols][e];if(typeof n>"u"){if(e===E.CurrencyDecimal)return s[C.NumberSymbols][E.Decimal];if(e===E.CurrencyGroup)return s[C.NumberSymbols][E.Group]}return n}function Je(t,e){return S(t)[C.NumberFormats][e]}function et(t){if(!t[C.ExtraData])throw new Error(`Missing extra locale data for the locale "${t[C.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function Ft(t){let e=S(t);return et(e),(e[C.ExtraData][2]||[]).map(n=>typeof n=="string"?le(n):[le(n[0]),le(n[1])])}function Et(t,e,s){let n=S(t);et(n);let i=[n[C.ExtraData][0],n[C.ExtraData][1]],r=v(i,e)||[];return v(r,s)||[]}function v(t,e){for(let s=e;s>-1;s--)if(typeof t[s]<"u")return t[s];throw new Error("Locale data API: locale data undefined")}function le(t){let[e,s]=t.split(":");return{hours:+e,minutes:+s}}var yt=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Q={},wt=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,O=function(t){return t[t.Short=0]="Short",t[t.ShortGMT=1]="ShortGMT",t[t.Long=2]="Long",t[t.Extended=3]="Extended",t}(O||{}),d=function(t){return t[t.FullYear=0]="FullYear",t[t.Month=1]="Month",t[t.Date=2]="Date",t[t.Hours=3]="Hours",t[t.Minutes=4]="Minutes",t[t.Seconds=5]="Seconds",t[t.FractionalSeconds=6]="FractionalSeconds",t[t.Day=7]="Day",t}(d||{}),c=function(t){return t[t.DayPeriods=0]="DayPeriods",t[t.Days=1]="Days",t[t.Months=2]="Months",t[t.Eras=3]="Eras",t}(c||{});function At(t,e,s,n){let i=Rt(t);e=L(s,e)||e;let o=[],u;for(;e;)if(u=wt.exec(e),u){o=o.concat(u.slice(1));let g=o.pop();if(!g)break;e=g}else{o.push(e);break}let l=i.getTimezoneOffset();n&&(l=nt(n,l),i=Lt(i,n,!0));let D="";return o.forEach(g=>{let a=Mt(g);D+=a?a(i,s,l):g==="''"?"'":g.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),D}function ie(t,e,s){let n=new Date(0);return n.setFullYear(t,e,s),n.setHours(0,0,0),n}function L(t,e){let s=Dt(t);if(Q[s]??={},Q[s][e])return Q[s][e];let n="";switch(e){case"shortDate":n=K(t,b.Short);break;case"mediumDate":n=K(t,b.Medium);break;case"longDate":n=K(t,b.Long);break;case"fullDate":n=K(t,b.Full);break;case"shortTime":n=q(t,b.Short);break;case"mediumTime":n=q(t,b.Medium);break;case"longTime":n=q(t,b.Long);break;case"fullTime":n=q(t,b.Full);break;case"short":let i=L(t,"shortTime"),r=L(t,"shortDate");n=J(X(t,b.Short),[i,r]);break;case"medium":let o=L(t,"mediumTime"),u=L(t,"mediumDate");n=J(X(t,b.Medium),[o,u]);break;case"long":let l=L(t,"longTime"),D=L(t,"longDate");n=J(X(t,b.Long),[l,D]);break;case"full":let g=L(t,"fullTime"),a=L(t,"fullDate");n=J(X(t,b.Full),[g,a]);break}return n&&(Q[s][e]=n),n}function J(t,e){return e&&(t=t.replace(/\{([^}]+)}/g,function(s,n){return e!=null&&n in e?e[n]:s})),t}function _(t,e,s="-",n,i){let r="";(t<0||i&&t<=0)&&(i?t=-t+1:(t=-t,r=s));let o=String(t);for(;o.length<e;)o="0"+o;return n&&(o=o.slice(o.length-e)),r+o}function St(t,e){return _(t,3).substring(0,e)}function F(t,e,s=0,n=!1,i=!1){return function(r,o){let u=bt(t,r);if((s>0||u>-s)&&(u+=s),t===d.Hours)u===0&&s===-12&&(u=12);else if(t===d.FractionalSeconds)return St(u,e);let l=I(o,E.MinusSign);return _(u,e,l,n,i)}}function bt(t,e){switch(t){case d.FullYear:return e.getFullYear();case d.Month:return e.getMonth();case d.Date:return e.getDate();case d.Hours:return e.getHours();case d.Minutes:return e.getMinutes();case d.Seconds:return e.getSeconds();case d.FractionalSeconds:return e.getMilliseconds();case d.Day:return e.getDay();default:throw new Error(`Unknown DateType value "${t}".`)}}function f(t,e,s=A.Format,n=!1){return function(i,r){return vt(i,r,t,e,s,n)}}function vt(t,e,s,n,i,r){switch(s){case c.Months:return mt(e,i,n)[t.getMonth()];case c.Days:return pt(e,i,n)[t.getDay()];case c.DayPeriods:let o=t.getHours(),u=t.getMinutes();if(r){let D=Ft(e),g=Et(e,i,n),a=D.findIndex(y=>{if(Array.isArray(y)){let[m,w]=y,U=o>=m.hours&&u>=m.minutes,P=o<w.hours||o===w.hours&&u<w.minutes;if(m.hours<w.hours){if(U&&P)return!0}else if(U||P)return!0}else if(y.hours===o&&y.minutes===u)return!0;return!1});if(a!==-1)return g[a]}return gt(e,i,n)[o<12?0:1];case c.Eras:return Ct(e,n)[t.getFullYear()<=0?0:1];default:let l=s;throw new Error(`unexpected translation type ${l}`)}}function ee(t){return function(e,s,n){let i=-1*n,r=I(s,E.MinusSign),o=i>0?Math.floor(i/60):Math.ceil(i/60);switch(t){case O.Short:return(i>=0?"+":"")+_(o,2,r)+_(Math.abs(i%60),2,r);case O.ShortGMT:return"GMT"+(i>=0?"+":"")+_(o,1,r);case O.Long:return"GMT"+(i>=0?"+":"")+_(o,2,r)+":"+_(Math.abs(i%60),2,r);case O.Extended:return n===0?"Z":(i>=0?"+":"")+_(o,2,r)+":"+_(Math.abs(i%60),2,r);default:throw new Error(`Unknown zone width "${t}"`)}}}var _t=0,ne=4;function It(t){let e=ie(t,_t,1).getDay();return ie(t,0,1+(e<=ne?ne:ne+7)-e)}function tt(t){let e=t.getDay(),s=e===0?-3:ne-e;return ie(t.getFullYear(),t.getMonth(),t.getDate()+s)}function he(t,e=!1){return function(s,n){let i;if(e){let r=new Date(s.getFullYear(),s.getMonth(),1).getDay()-1,o=s.getDate();i=1+Math.floor((o+r)/7)}else{let r=tt(s),o=It(r.getFullYear()),u=r.getTime()-o.getTime();i=1+Math.round(u/6048e5)}return _(i,t,I(n,E.MinusSign))}}function te(t,e=!1){return function(s,n){let r=tt(s).getFullYear();return _(r,t,I(n,E.MinusSign),e)}}var fe={};function Mt(t){if(fe[t])return fe[t];let e;switch(t){case"G":case"GG":case"GGG":e=f(c.Eras,h.Abbreviated);break;case"GGGG":e=f(c.Eras,h.Wide);break;case"GGGGG":e=f(c.Eras,h.Narrow);break;case"y":e=F(d.FullYear,1,0,!1,!0);break;case"yy":e=F(d.FullYear,2,0,!0,!0);break;case"yyy":e=F(d.FullYear,3,0,!1,!0);break;case"yyyy":e=F(d.FullYear,4,0,!1,!0);break;case"Y":e=te(1);break;case"YY":e=te(2,!0);break;case"YYY":e=te(3);break;case"YYYY":e=te(4);break;case"M":case"L":e=F(d.Month,1,1);break;case"MM":case"LL":e=F(d.Month,2,1);break;case"MMM":e=f(c.Months,h.Abbreviated);break;case"MMMM":e=f(c.Months,h.Wide);break;case"MMMMM":e=f(c.Months,h.Narrow);break;case"LLL":e=f(c.Months,h.Abbreviated,A.Standalone);break;case"LLLL":e=f(c.Months,h.Wide,A.Standalone);break;case"LLLLL":e=f(c.Months,h.Narrow,A.Standalone);break;case"w":e=he(1);break;case"ww":e=he(2);break;case"W":e=he(1,!0);break;case"d":e=F(d.Date,1);break;case"dd":e=F(d.Date,2);break;case"c":case"cc":e=F(d.Day,1);break;case"ccc":e=f(c.Days,h.Abbreviated,A.Standalone);break;case"cccc":e=f(c.Days,h.Wide,A.Standalone);break;case"ccccc":e=f(c.Days,h.Narrow,A.Standalone);break;case"cccccc":e=f(c.Days,h.Short,A.Standalone);break;case"E":case"EE":case"EEE":e=f(c.Days,h.Abbreviated);break;case"EEEE":e=f(c.Days,h.Wide);break;case"EEEEE":e=f(c.Days,h.Narrow);break;case"EEEEEE":e=f(c.Days,h.Short);break;case"a":case"aa":case"aaa":e=f(c.DayPeriods,h.Abbreviated);break;case"aaaa":e=f(c.DayPeriods,h.Wide);break;case"aaaaa":e=f(c.DayPeriods,h.Narrow);break;case"b":case"bb":case"bbb":e=f(c.DayPeriods,h.Abbreviated,A.Standalone,!0);break;case"bbbb":e=f(c.DayPeriods,h.Wide,A.Standalone,!0);break;case"bbbbb":e=f(c.DayPeriods,h.Narrow,A.Standalone,!0);break;case"B":case"BB":case"BBB":e=f(c.DayPeriods,h.Abbreviated,A.Format,!0);break;case"BBBB":e=f(c.DayPeriods,h.Wide,A.Format,!0);break;case"BBBBB":e=f(c.DayPeriods,h.Narrow,A.Format,!0);break;case"h":e=F(d.Hours,1,-12);break;case"hh":e=F(d.Hours,2,-12);break;case"H":e=F(d.Hours,1);break;case"HH":e=F(d.Hours,2);break;case"m":e=F(d.Minutes,1);break;case"mm":e=F(d.Minutes,2);break;case"s":e=F(d.Seconds,1);break;case"ss":e=F(d.Seconds,2);break;case"S":e=F(d.FractionalSeconds,1);break;case"SS":e=F(d.FractionalSeconds,2);break;case"SSS":e=F(d.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":e=ee(O.Short);break;case"ZZZZZ":e=ee(O.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":e=ee(O.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":e=ee(O.Long);break;default:return null}return fe[t]=e,e}function nt(t,e){t=t.replace(/:/g,"");let s=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(s)?e:s}function Bt(t,e){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+e),t}function Lt(t,e,s){let n=s?-1:1,i=t.getTimezoneOffset(),r=nt(e,i);return Bt(t,n*(r-i))}function Rt(t){if(He(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[i,r=1,o=1]=t.split("-").map(u=>+u);return ie(i,r-1,o)}let s=parseFloat(t);if(!isNaN(t-s))return new Date(s);let n;if(n=t.match(yt))return Ot(n)}let e=new Date(t);if(!He(e))throw new Error(`Unable to convert "${t}" into a date`);return e}function Ot(t){let e=new Date(0),s=0,n=0,i=t[8]?e.setUTCFullYear:e.setFullYear,r=t[8]?e.setUTCHours:e.setHours;t[9]&&(s=Number(t[9]+t[10]),n=Number(t[9]+t[11])),i.call(e,Number(t[1]),Number(t[2])-1,Number(t[3]));let o=Number(t[4]||0)-s,u=Number(t[5]||0)-n,l=Number(t[6]||0),D=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return r.call(e,o,u,l,D),e}function He(t){return t instanceof Date&&!isNaN(t.valueOf())}var Tt=/^(\d+)?\.((\d+)(-(\d+))?)?$/,Ye=22,re=".",j="0",Pt=";",kt=",",De="#";var Nt="%";function it(t,e,s,n,i,r,o=!1){let u="",l=!1;if(!isFinite(t))u=I(s,E.Infinity);else{let D=zt(t);o&&(D=Ut(D));let g=e.minInt,a=e.minFrac,y=e.maxFrac;if(r){let N=r.match(Tt);if(N===null)throw new Error(`${r} is not a valid digit info`);let _e=N[1],ue=N[3],Ie=N[5];_e!=null&&(g=ge(_e)),ue!=null&&(a=ge(ue)),Ie!=null?y=ge(Ie):ue!=null&&a>y&&(y=a)}Vt(D,a,y);let m=D.digits,w=D.integerLen,U=D.exponent,P=[];for(l=m.every(N=>!N);w<g;w++)m.unshift(0);for(;w<0;w++)m.unshift(0);w>0?P=m.splice(w,m.length):(P=m,m=[0]);let H=[];for(m.length>=e.lgSize&&H.unshift(m.splice(-e.lgSize,m.length).join(""));m.length>e.gSize;)H.unshift(m.splice(-e.gSize,m.length).join(""));m.length&&H.unshift(m.join("")),u=H.join(I(s,n)),P.length&&(u+=I(s,i)+P.join("")),U&&(u+=I(s,E.Exponential)+"+"+U)}return t<0&&!l?u=e.negPre+u+e.negSuf:u=e.posPre+u+e.posSuf,u}function $t(t,e,s){let n=Je(e,ve.Percent),i=rt(n,I(e,E.MinusSign));return it(t,i,e,E.Group,E.Decimal,s,!0).replace(new RegExp(Nt,"g"),I(e,E.PercentSign))}function xt(t,e,s){let n=Je(e,ve.Decimal),i=rt(n,I(e,E.MinusSign));return it(t,i,e,E.Group,E.Decimal,s)}function rt(t,e="-"){let s={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=t.split(Pt),i=n[0],r=n[1],o=i.indexOf(re)!==-1?i.split(re):[i.substring(0,i.lastIndexOf(j)+1),i.substring(i.lastIndexOf(j)+1)],u=o[0],l=o[1]||"";s.posPre=u.substring(0,u.indexOf(De));for(let g=0;g<l.length;g++){let a=l.charAt(g);a===j?s.minFrac=s.maxFrac=g+1:a===De?s.maxFrac=g+1:s.posSuf+=a}let D=u.split(kt);if(s.gSize=D[1]?D[1].length:0,s.lgSize=D[2]||D[1]?(D[2]||D[1]).length:0,r){let g=i.length-s.posPre.length-s.posSuf.length,a=r.indexOf(De);s.negPre=r.substring(0,a).replace(/'/g,""),s.negSuf=r.slice(a+g).replace(/'/g,"")}else s.negPre=e+s.posPre,s.negSuf=s.posSuf;return s}function Ut(t){if(t.digits[0]===0)return t;let e=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(e===0?t.digits.push(0,0):e===1&&t.digits.push(0),t.integerLen+=2),t}function zt(t){let e=Math.abs(t)+"",s=0,n,i,r,o,u;for((i=e.indexOf(re))>-1&&(e=e.replace(re,"")),(r=e.search(/e/i))>0?(i<0&&(i=r),i+=+e.slice(r+1),e=e.substring(0,r)):i<0&&(i=e.length),r=0;e.charAt(r)===j;r++);if(r===(u=e.length))n=[0],i=1;else{for(u--;e.charAt(u)===j;)u--;for(i-=r,n=[],o=0;r<=u;r++,o++)n[o]=Number(e.charAt(r))}return i>Ye&&(n=n.splice(0,Ye-1),s=i-1,i=1),{digits:n,exponent:s,integerLen:i}}function Vt(t,e,s){if(e>s)throw new Error(`The minimum number of digits after fraction (${e}) is higher than the maximum (${s}).`);let n=t.digits,i=n.length-t.integerLen,r=Math.min(Math.max(e,i),s),o=r+t.integerLen,u=n[o];if(o>0){n.splice(Math.max(t.integerLen,o));for(let a=o;a<n.length;a++)n[a]=0}else{i=Math.max(0,i),t.integerLen=1,n.length=Math.max(1,o=r+1),n[0]=0;for(let a=1;a<o;a++)n[a]=0}if(u>=5)if(o-1<0){for(let a=0;a>o;a--)n.unshift(0),t.integerLen++;n.unshift(1),t.integerLen++}else n[o-1]++;for(;i<Math.max(0,r);i++)n.push(0);let l=r!==0,D=e+t.integerLen,g=n.reduceRight(function(a,y,m,w){return y=y+a,w[m]=y<10?y:y-10,l&&(w[m]===0&&m>=D?w.pop():l=!1),y>=10?1:0},0);g&&(n.unshift(g),t.integerLen++)}function ge(t){let e=parseInt(t);if(isNaN(e))throw new Error("Invalid integer literal when parsing "+t);return e}function On(t,e,s){return Ne(t,e,s)}function Tn(t,e){e=encodeURIComponent(e);for(let s of t.split(";")){let n=s.indexOf("="),[i,r]=n==-1?[s,""]:[s.slice(0,n),s.slice(n+1)];if(i.trim()===e)return decodeURIComponent(r)}return null}var pe=/\s+/,Ze=[],Pn=(()=>{let e=class e{constructor(n,i){this._ngEl=n,this._renderer=i,this.initialClasses=Ze,this.stateMap=new Map}set klass(n){this.initialClasses=n!=null?n.trim().split(pe):Ze}set ngClass(n){this.rawClass=typeof n=="string"?n.trim().split(pe):n}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let n=this.rawClass;if(Array.isArray(n)||n instanceof Set)for(let i of n)this._updateState(i,!0);else if(n!=null)for(let i of Object.keys(n))this._updateState(i,!!n[i]);this._applyStateDiff()}_updateState(n,i){let r=this.stateMap.get(n);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(n,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let n of this.stateMap){let i=n[0],r=n[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(n,i){n=n.trim(),n.length>0&&n.split(pe).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}};e.\u0275fac=function(i){return new(i||e)(p(Y),p(Z))},e.\u0275dir=B({type:e,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"},standalone:!0});let t=e;return t})();var me=class{constructor(e,s,n,i){this.$implicit=e,this.ngForOf=s,this.index=n,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},kn=(()=>{let e=class e{set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}constructor(n,i,r){this._viewContainer=n,this._template=i,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let n=this._ngForOf;if(!this._differ&&n)if(0)try{}catch{}else this._differ=this._differs.find(n).create(this.ngForTrackBy)}if(this._differ){let n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){let i=this._viewContainer;n.forEachOperation((r,o,u)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new me(r.item,this._ngForOf,-1,-1),u===null?void 0:u);else if(u==null)i.remove(o===null?void 0:o);else if(o!==null){let l=i.get(o);i.move(l,u),We(l,r)}});for(let r=0,o=i.length;r<o;r++){let l=i.get(r).context;l.index=r,l.count=o,l.ngForOf=this._ngForOf}n.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);We(o,r)})}static ngTemplateContextGuard(n,i){return!0}};e.\u0275fac=function(i){return new(i||e)(p(x),p(V),p(Ue))},e.\u0275dir=B({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let t=e;return t})();function We(t,e){t.context.$implicit=e.item}var Nn=(()=>{let e=class e{constructor(n,i){this._viewContainer=n,this._context=new Ce,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){Ke("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){Ke("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,i){return!0}};e.\u0275fac=function(i){return new(i||e)(p(x),p(V))},e.\u0275dir=B({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let t=e;return t})(),Ce=class{constructor(){this.$implicit=null,this.ngIf=null}};function Ke(t,e){if(!!!(!e||e.createEmbeddedView))throw new Error(`${t} must be a TemplateRef, but received '${Be(e)}'.`)}var jt=!0,se=class{constructor(e,s){this._viewContainerRef=e,this._templateRef=s,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(e){e&&!this._created?this.create():!e&&this._created&&this.destroy()}},st=(()=>{let e=class e{constructor(){this._defaultViews=[],this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(n){this._ngSwitch=n,this._caseCount===0&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(n){this._defaultViews.push(n)}_matchCase(n){let i=jt?n===this._ngSwitch:n==this._ngSwitch;return this._lastCasesMatched||=i,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),i}_updateDefaultCases(n){if(this._defaultViews.length>0&&n!==this._defaultUsed){this._defaultUsed=n;for(let i of this._defaultViews)i.enforceState(n)}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=B({type:e,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"},standalone:!0});let t=e;return t})(),$n=(()=>{let e=class e{constructor(n,i,r){this.ngSwitch=r,r._addCase(),this._view=new se(n,i)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}};e.\u0275fac=function(i){return new(i||e)(p(x),p(V),p(st,9))},e.\u0275dir=B({type:e,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"},standalone:!0});let t=e;return t})(),xn=(()=>{let e=class e{constructor(n,i,r){r._addDefault(new se(n,i))}};e.\u0275fac=function(i){return new(i||e)(p(x),p(V),p(st,9))},e.\u0275dir=B({type:e,selectors:[["","ngSwitchDefault",""]],standalone:!0});let t=e;return t})();var Un=(()=>{let e=class e{constructor(n,i,r){this._ngEl=n,this._differs=i,this._renderer=r,this._ngStyle=null,this._differ=null}set ngStyle(n){this._ngStyle=n,!this._differ&&n&&(this._differ=this._differs.find(n).create())}ngDoCheck(){if(this._differ){let n=this._differ.diff(this._ngStyle);n&&this._applyChanges(n)}}_setStyle(n,i){let[r,o]=n.split("."),u=r.indexOf("-")===-1?void 0:ke.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${i}${o}`:i,u):this._renderer.removeStyle(this._ngEl.nativeElement,r,u)}_applyChanges(n){n.forEachRemovedItem(i=>this._setStyle(i.key,null)),n.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),n.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}};e.\u0275fac=function(i){return new(i||e)(p(Y),p(ze),p(Z))},e.\u0275dir=B({type:e,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"},standalone:!0});let t=e;return t})(),zn=(()=>{let e=class e{constructor(n){this._viewContainerRef=n,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(n){if(this._shouldRecreateView(n)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(n){return!!n.ngTemplateOutlet||!!n.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(n,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(n,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}};e.\u0275fac=function(i){return new(i||e)(p(x))},e.\u0275dir=B({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[Oe]});let t=e;return t})();function G(t,e){return new Me(2100,!1)}var Fe=class{createSubscription(e,s){return ce(()=>e.subscribe({next:s,error:n=>{throw n}}))}dispose(e){ce(()=>e.unsubscribe())}},Ee=class{createSubscription(e,s){return e.then(s,n=>{throw n})}dispose(e){}},Gt=new Ee,Ht=new Fe,Vn=(()=>{let e=class e{constructor(n){this._latestValue=null,this.markForCheckOnValueUpdate=!0,this._subscription=null,this._obj=null,this._strategy=null,this._ref=n}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(n){if(!this._obj){if(n)try{this.markForCheckOnValueUpdate=!1,this._subscribe(n)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return n!==this._obj?(this._dispose(),this.transform(n)):this._latestValue}_subscribe(n){this._obj=n,this._strategy=this._selectStrategy(n),this._subscription=this._strategy.createSubscription(n,i=>this._updateLatestValue(n,i))}_selectStrategy(n){if($e(n))return Gt;if(xe(n))return Ht;throw G(e,n)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(n,i){n===this._obj&&(this._latestValue=i,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}};e.\u0275fac=function(i){return new(i||e)(p(ae,16))},e.\u0275pipe=$({name:"async",type:e,pure:!1,standalone:!0});let t=e;return t})();var Yt="mediumDate",Zt=new z(""),Wt=new z(""),jn=(()=>{let e=class e{constructor(n,i,r){this.locale=n,this.defaultTimezone=i,this.defaultOptions=r}transform(n,i,r,o){if(n==null||n===""||n!==n)return null;try{let u=i??this.defaultOptions?.dateFormat??Yt,l=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return At(n,u,o||this.locale,l)}catch(u){throw G(e,u.message)}}};e.\u0275fac=function(i){return new(i||e)(p(W,16),p(Zt,24),p(Wt,24))},e.\u0275pipe=$({name:"date",type:e,pure:!0,standalone:!0});let t=e;return t})();var Gn=(()=>{let e=class e{constructor(n){this._locale=n}transform(n,i,r){if(!ot(n))return null;r||=this._locale;try{let o=ut(n);return xt(o,r,i)}catch(o){throw G(e,o.message)}}};e.\u0275fac=function(i){return new(i||e)(p(W,16))},e.\u0275pipe=$({name:"number",type:e,pure:!0,standalone:!0});let t=e;return t})(),Hn=(()=>{let e=class e{constructor(n){this._locale=n}transform(n,i,r){if(!ot(n))return null;r||=this._locale;try{let o=ut(n);return $t(o,r,i)}catch(o){throw G(e,o.message)}}};e.\u0275fac=function(i){return new(i||e)(p(W,16))},e.\u0275pipe=$({name:"percent",type:e,pure:!0,standalone:!0});let t=e;return t})();function ot(t){return!(t==null||t===""||t!==t)}function ut(t){if(typeof t=="string"&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if(typeof t!="number")throw new Error(`${t} is not a number`);return t}var Yn=(()=>{let e=class e{transform(n,i,r){if(n==null)return null;if(!this.supports(n))throw G(e,n);return n.slice(i,r)}supports(n){return typeof n=="string"||Array.isArray(n)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275pipe=$({name:"slice",type:e,pure:!1,standalone:!0});let t=e;return t})();var Zn=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=Re({type:e}),e.\u0275inj=Le({});let t=e;return t})(),Kt="browser",qt="server";function Xt(t){return t===Kt}function Wn(t){return t===qt}var Kn=(()=>{let e=class e{};e.\u0275prov=M({token:e,providedIn:"root",factory:()=>Xt(k(Pe))?new ye(k(Ae),window):new we});let t=e;return t})(),ye=class{constructor(e,s){this.document=e,this.window=s,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let s=Qt(this.document,e);s&&(this.scrollToElement(s),s.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let s=e.getBoundingClientRect(),n=s.left+this.window.pageXOffset,i=s.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(n-r[0],i-r[1])}};function Qt(t,e){let s=t.getElementById(e)||t.getElementsByName(e)[0];if(s)return s;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let r=i.shadowRoot;if(r){let o=r.getElementById(e)||r.querySelector(`[name="${e}"]`);if(o)return o}i=n.nextNode()}}return null}var we=class{setOffset(e){}getScrollPosition(){return[0,0]}scrollToPosition(e){}scrollToAnchor(e){}setHistoryScrollRestoration(e){}},qe=class{};export{de as a,Ln as b,Ve as c,Ae as d,oe as e,Rn as f,dt as g,A as h,h as i,E as j,gt as k,I as l,At as m,On as n,Tn as o,Pn as p,kn as q,Nn as r,st as s,$n as t,xn as u,Un as v,zn as w,Vn as x,jn as y,Gn as z,Hn as A,Yn as B,Zn as C,Kt as D,Xt as E,Wn as F,Kn as G,qe as H};
