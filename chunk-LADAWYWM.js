import{a as r}from"./chunk-G3WIFAVS.js";import{a as p}from"./chunk-XMISJKZ6.js";import{dd as c,qa as s,wa as i}from"./chunk-XNENNAZS.js";var C=(()=>{let t=class t{constructor(){this.cdr=i(c)}get adHost(){return this._adHost}set adHost(e){this._adHost=e}async create(e=r.YiLin){await this.lazyLoadCard(e),this.cdr.detectChanges()}async lazyLoadCard(e=r.YiLin){let a=this._adHost.viewContainerRef,{LazyTargCompComponent:d}=await import("./chunk-ZVLU7LTL.js"),o=a.createComponent(d);o.setInput("purChoosePeople",e),o.instance.currentPeople.pipe(p(o.instance.destroyRef)).subscribe(()=>{this.create(o.instance.purChoosePeople)})}};t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=s({token:t,factory:t.\u0275fac});let n=t;return n})();export{C as a};
