import{B as ce,c as Re,d as ae,e as te,k as se,x as Be}from"./chunk-HXMXC4AE.js";import{a as k,b as L,c as F}from"./chunk-P54JDN22.js";import{a as Ae}from"./chunk-BYLUI2QE.js";import"./chunk-O2WPPUR2.js";import"./chunk-CLJGZU7Y.js";import{d as Fe}from"./chunk-6G6375XT.js";import{f as H,g as X}from"./chunk-YGFGTHXD.js";import"./chunk-HDT4KMAI.js";import"./chunk-IRQU3GS3.js";import"./chunk-T5C3MTIU.js";import"./chunk-63CUI4A7.js";import{a as Ie,b as Ne,c as Pe}from"./chunk-JG7PDFQU.js";import{a as w,d as M,e as O}from"./chunk-LMT2TBSV.js";import{d as V}from"./chunk-7PKCM743.js";import"./chunk-MCCZJH2J.js";import{a as j,b as $,c as U,d as W,e as Z}from"./chunk-S2KEA7XP.js";import"./chunk-NYWSPOYR.js";import"./chunk-ZGT77FDO.js";import{a as G}from"./chunk-XMISJKZ6.js";import"./chunk-TLY6E2EZ.js";import{g as ee}from"./chunk-I3AI2SV7.js";import{x as K}from"./chunk-ZWOUEGUH.js";import{$b as A,Aa as l,Ac as S,Ba as be,Ca as Se,D as q,Eb as xe,Fc as we,Gc as Me,Hc as Oe,Ic as ke,Jc as h,La as _e,Ma as z,Na as x,Ob as E,Pc as Y,Qb as a,Qc as J,Ua as N,Uc as Le,Va as ze,Xa as re,a as de,ac as R,bc as B,cc as c,d as me,dc as s,dd as D,ec as y,g as ue,ha as ge,ic as T,j as oe,l as fe,la as ye,oc as d,qc as b,ra as ve,ta as Ce,ub as g,vb as P,wa as v,wc as De,xc as Ee,yc as Te}from"./chunk-XNENNAZS.js";import"./chunk-VB56BUGO.js";var le=class{constructor(){this.subject=new oe(1),this.subscriptions=new de}doFilter(t){this.subject.next(t)}dispose(){this.subscriptions.unsubscribe()}notEmpty(t,m){this.subscriptions.add(this.subject.subscribe(i=>{if(i[t]){let e=i[t].currentValue;e!=null&&m(e)}}))}has(t,m){this.subscriptions.add(this.subject.subscribe(i=>{if(i[t]){let e=i[t].currentValue;m(e)}}))}notFirst(t,m){this.subscriptions.add(this.subject.subscribe(i=>{if(i[t]&&!i[t].isFirstChange()){let e=i[t].currentValue;m(e)}}))}notFirstAndEmpty(t,m){this.subscriptions.add(this.subject.subscribe(i=>{if(i[t]&&!i[t].isFirstChange()){let e=i[t].currentValue;e!=null&&m(e)}}))}},ie=new Ce("NGX_ECHARTS_CONFIG"),f=(()=>{let t=class t{constructor(i,e,o){this.el=e,this.ngZone=o,this.options=null,this.theme=null,this.initOpts=null,this.merge=null,this.autoResize=!0,this.loading=!1,this.loadingType="default",this.loadingOpts=null,this.chartInit=new re,this.optionsError=new re,this.chartClick=this.createLazyEvent("click"),this.chartDblClick=this.createLazyEvent("dblclick"),this.chartMouseDown=this.createLazyEvent("mousedown"),this.chartMouseMove=this.createLazyEvent("mousemove"),this.chartMouseUp=this.createLazyEvent("mouseup"),this.chartMouseOver=this.createLazyEvent("mouseover"),this.chartMouseOut=this.createLazyEvent("mouseout"),this.chartGlobalOut=this.createLazyEvent("globalout"),this.chartContextMenu=this.createLazyEvent("contextmenu"),this.chartHighlight=this.createLazyEvent("highlight"),this.chartDownplay=this.createLazyEvent("downplay"),this.chartSelectChanged=this.createLazyEvent("selectchanged"),this.chartLegendSelectChanged=this.createLazyEvent("legendselectchanged"),this.chartLegendSelected=this.createLazyEvent("legendselected"),this.chartLegendUnselected=this.createLazyEvent("legendunselected"),this.chartLegendLegendSelectAll=this.createLazyEvent("legendselectall"),this.chartLegendLegendInverseSelect=this.createLazyEvent("legendinverseselect"),this.chartLegendScroll=this.createLazyEvent("legendscroll"),this.chartDataZoom=this.createLazyEvent("datazoom"),this.chartDataRangeSelected=this.createLazyEvent("datarangeselected"),this.chartGraphRoam=this.createLazyEvent("graphroam"),this.chartGeoRoam=this.createLazyEvent("georoam"),this.chartTreeRoam=this.createLazyEvent("treeroam"),this.chartTimelineChanged=this.createLazyEvent("timelinechanged"),this.chartTimelinePlayChanged=this.createLazyEvent("timelineplaychanged"),this.chartRestore=this.createLazyEvent("restore"),this.chartDataViewChanged=this.createLazyEvent("dataviewchanged"),this.chartMagicTypeChanged=this.createLazyEvent("magictypechanged"),this.chartGeoSelectChanged=this.createLazyEvent("geoselectchanged"),this.chartGeoSelected=this.createLazyEvent("geoselected"),this.chartGeoUnselected=this.createLazyEvent("geounselected"),this.chartAxisAreaSelected=this.createLazyEvent("axisareaselected"),this.chartBrush=this.createLazyEvent("brush"),this.chartBrushEnd=this.createLazyEvent("brushend"),this.chartBrushSelected=this.createLazyEvent("brushselected"),this.chartGlobalCursorTaken=this.createLazyEvent("globalcursortaken"),this.chartRendered=this.createLazyEvent("rendered"),this.chartFinished=this.createLazyEvent("finished"),this.animationFrameID=null,this.chart$=new oe(1),this.resize$=new ue,this.changeFilter=new le,this.resizeObFired=!1,this.echarts=i.echarts,this.theme=i.theme||null}ngOnChanges(i){this.changeFilter.doFilter(i)}ngOnInit(){if(!window.ResizeObserver)throw new Error("please install a polyfill for ResizeObserver");this.resizeSub=this.resize$.pipe(ye(100,fe,{leading:!1,trailing:!0})).subscribe(()=>this.resize()),this.autoResize&&(this.resizeOb=this.ngZone.runOutsideAngular(()=>new window.ResizeObserver(i=>{for(let e of i)e.target===this.el.nativeElement&&(this.resizeObFired?this.animationFrameID=window.requestAnimationFrame(()=>{this.resize$.next()}):this.resizeObFired=!0)})),this.resizeOb.observe(this.el.nativeElement)),this.changeFilter.notFirstAndEmpty("options",i=>this.onOptionsChange(i)),this.changeFilter.notFirstAndEmpty("merge",i=>this.setOption(i)),this.changeFilter.has("loading",i=>this.toggleLoading(!!i)),this.changeFilter.notFirst("theme",()=>this.refreshChart())}ngOnDestroy(){window.clearTimeout(this.initChartTimer),this.resizeSub&&this.resizeSub.unsubscribe(),this.animationFrameID&&window.cancelAnimationFrame(this.animationFrameID),this.resizeOb&&this.resizeOb.unobserve(this.el.nativeElement),this.loadingSub&&this.loadingSub.unsubscribe(),this.changeFilter.dispose(),this.dispose()}ngAfterViewInit(){this.initChartTimer=window.setTimeout(()=>this.initChart())}dispose(){this.chart&&(this.chart.isDisposed()||this.chart.dispose(),this.chart=null)}resize(){this.chart&&this.chart.resize()}toggleLoading(i){this.chart?i?this.chart.showLoading(this.loadingType,this.loadingOpts):this.chart.hideLoading():this.loadingSub=this.chart$.subscribe(e=>i?e.showLoading(this.loadingType,this.loadingOpts):e.hideLoading())}setOption(i,e){if(this.chart)try{this.chart.setOption(i,e)}catch(o){console.error(o),this.optionsError.emit(o)}}async refreshChart(){this.dispose(),await this.initChart()}createChart(){let i=this.el.nativeElement;if(window&&window.getComputedStyle){let e=window.getComputedStyle(i,null).getPropertyValue("height");(!e||e==="0px")&&(!i.style.height||i.style.height==="0px")&&(i.style.height="400px")}return this.ngZone.runOutsideAngular(()=>(typeof this.echarts=="function"?this.echarts:()=>Promise.resolve(this.echarts))().then(({init:o})=>o(i,this.theme,this.initOpts)))}async initChart(){await this.onOptionsChange(this.options),this.merge&&this.chart&&this.setOption(this.merge)}async onOptionsChange(i){i&&(this.chart?this.setOption(this.options,!0):(this.chart=await this.createChart(),this.chart$.next(this.chart),this.chartInit.emit(this.chart),this.setOption(this.options,!0)))}createLazyEvent(i){return this.chartInit.pipe(ge(e=>new me(o=>(e.on(i,r=>this.ngZone.run(()=>o.next(r))),()=>{this.chart&&(this.chart.isDisposed()||e.off(i))}))))}};t.\u0275fac=function(e){return new(e||t)(P(ie),P(ze),P(xe))},t.\u0275dir=Se({type:t,selectors:[["echarts"],["","echarts",""]],inputs:{options:"options",theme:"theme",initOpts:"initOpts",merge:"merge",autoResize:"autoResize",loading:"loading",loadingType:"loadingType",loadingOpts:"loadingOpts"},outputs:{chartInit:"chartInit",optionsError:"optionsError",chartClick:"chartClick",chartDblClick:"chartDblClick",chartMouseDown:"chartMouseDown",chartMouseMove:"chartMouseMove",chartMouseUp:"chartMouseUp",chartMouseOver:"chartMouseOver",chartMouseOut:"chartMouseOut",chartGlobalOut:"chartGlobalOut",chartContextMenu:"chartContextMenu",chartHighlight:"chartHighlight",chartDownplay:"chartDownplay",chartSelectChanged:"chartSelectChanged",chartLegendSelectChanged:"chartLegendSelectChanged",chartLegendSelected:"chartLegendSelected",chartLegendUnselected:"chartLegendUnselected",chartLegendLegendSelectAll:"chartLegendLegendSelectAll",chartLegendLegendInverseSelect:"chartLegendLegendInverseSelect",chartLegendScroll:"chartLegendScroll",chartDataZoom:"chartDataZoom",chartDataRangeSelected:"chartDataRangeSelected",chartGraphRoam:"chartGraphRoam",chartGeoRoam:"chartGeoRoam",chartTreeRoam:"chartTreeRoam",chartTimelineChanged:"chartTimelineChanged",chartTimelinePlayChanged:"chartTimelinePlayChanged",chartRestore:"chartRestore",chartDataViewChanged:"chartDataViewChanged",chartMagicTypeChanged:"chartMagicTypeChanged",chartGeoSelectChanged:"chartGeoSelectChanged",chartGeoSelected:"chartGeoSelected",chartGeoUnselected:"chartGeoUnselected",chartAxisAreaSelected:"chartAxisAreaSelected",chartBrush:"chartBrush",chartBrushEnd:"chartBrushEnd",chartBrushSelected:"chartBrushSelected",chartGlobalCursorTaken:"chartGlobalCursorTaken",chartRendered:"chartRendered",chartFinished:"chartFinished"},exportAs:["echarts"],standalone:!0,features:[_e]});let n=t;return n})();var ct=n=>({provide:ie,useValue:n}),u=(()=>{let t=class t{static forRoot(i){return{ngModule:t,providers:[ct(i)]}}static forChild(){return{ngModule:t}}};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=be({type:t}),t.\u0275inj=ve({});let n=t;return n})();var Ge=(()=>{let t=class t{constructor(){this.options={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"Counters",type:"bar",barWidth:"60%",data:[10,52,200,334,390,330,220]}]}}ngAfterViewInit(){setTimeout(()=>{let i=document.getElementById("chart1"),e=document.getElementById("chart2"),o=ce(i),r=ce(e);Be([o,r])})}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l({type:t,selectors:[["app-connect-charts"]],standalone:!0,features:[h],decls:9,vars:2,consts:[["nz-row",""],["nz-col","","nzSpan","12"],["id","chart1","echarts","","theme","macarons",1,"demo-chart",3,"options"],["id","chart2","echarts","","theme","macarons",1,"demo-chart",3,"options"]],template:function(e,o){e&1&&(c(0,"div",0)(1,"div",1)(2,"h5"),S(3,"id=chart1"),s(),y(4,"div",2),s(),c(5,"div",1)(6,"h5"),S(7,"id=chart2"),s(),y(8,"div",3),s()()),e&2&&(g(4),a("options",o.options),g(4),a("options",o.options))},dependencies:[Pe,Ne,Ie,u,f],encapsulation:2,changeDetection:0});let n=t;return n})();var Ve=20,Q=[[15,0],[-50,10],[-56.5,20],[-46.5,30],[-22.1,40]],je=(()=>{let t=class t{constructor(){this.options={title:{text:"Try Dragging these Points"},tooltip:{triggerOn:"none",formatter:i=>`X: ${i.data[0].toFixed(2)}<br>Y: ${i.data[1].toFixed(2)}`},grid:{},xAxis:{min:-100,max:80,type:"value",axisLine:{onZero:!1}},yAxis:{min:-30,max:60,type:"value",axisLine:{onZero:!1}},dataZoom:[{type:"slider",xAxisIndex:0,filterMode:"empty"},{type:"slider",yAxisIndex:0,filterMode:"empty"},{type:"inside",xAxisIndex:0,filterMode:"empty"},{type:"inside",yAxisIndex:0,filterMode:"empty"}],series:[{id:"a",type:"line",smooth:!0,symbolSize:Ve,data:Q}]}}ngOnDestroy(){this.updatePosition&&window.removeEventListener("resize",this.updatePosition)}onChartReady(i){let e=function(I){Q[I]=i.convertFromPixel({gridIndex:0},this.position),i.setOption({series:[{id:"a",data:Q}]})},o=I=>{i.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:I})},r=()=>{i.dispatchAction({type:"hideTip"})},p=()=>{i.setOption({graphic:ae(Q,I=>({position:i.convertToPixel({gridIndex:0},I)}))})};window.addEventListener("resize",p),i.on("dataZoom",p),this.updatePosition=p,setTimeout(()=>{i.setOption({graphic:ae(Q,(I,ne)=>({type:"circle",position:i.convertToPixel({gridIndex:0},I),shape:{cx:0,cy:0,r:Ve/2},invisible:!0,draggable:!0,ondrag:te(e,ne),onmousemove:te(o,ne),onmouseout:te(r,ne),z:100}))})},0)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l({type:t,selectors:[["app-draggable-charts"]],standalone:!0,features:[h],decls:1,vars:1,consts:[["echarts","",2,"height","600px",3,"chartInit","options"]],template:function(e,o){e&1&&(c(0,"div",0),d("chartInit",function(p){return o.onChartReady(p)}),s()),e&2&&a("options",o.options)},dependencies:[u,f],encapsulation:2,changeDetection:0});let n=t;return n})();function ht(n,t){}function pt(n,t){if(n&1){let m=T();c(0,"nz-tab",3),d("nzClick",function(){let e=z(m).$index,o=b();return x(o.to(e))}),E(1,ht,0,0,"ng-template",4),s()}if(n&2){let m=t.$implicit,i=b();a("nzTitle",m.label),g(),a("cdkPortalOutlet",i.selectedPortal)}}var Ue=(()=>{let t=class t{constructor(){this.tabArray=[{label:"Connect Charts",value:Ge},{label:"Draggable Chart",value:je}],this.destroyRef=v(N),this.tabPosition="left",this.cdr=v(D),this.breakpointObserver=v(V)}to(i){this.componentPortal=new w(this.tabArray[i].value),this.selectedPortal=this.componentPortal}ngOnInit(){this.to(0),this.breakpointObserver.observe(["(max-width: 767px)"]).pipe(G(this.destroyRef)).subscribe(i=>{this.tabPosition=i.matches?"top":"left",this.cdr.markForCheck()})}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l({type:t,selectors:[["app-advanced"]],standalone:!0,features:[h],decls:4,vars:1,consts:[["nzTitle","\u9AD8\u7EA7"],[3,"nzTabPosition"],[3,"nzTitle"],[3,"nzClick","nzTitle"],[3,"cdkPortalOutlet"]],template:function(e,o){e&1&&(c(0,"nz-card",0)(1,"nz-tabset",1),R(2,pt,2,2,"nz-tab",2,A),s()()),e&2&&(g(),a("nzTabPosition",o.tabPosition),g(),B(o.tabArray))},dependencies:[X,H,F,L,k,O,M],encapsulation:2,changeDetection:0});let n=t;return n})();var We=(()=>{let t=class t{constructor(){this.http=v(ee)}ngOnInit(){this.options=this.http.get("/data/flare.json",{responseType:"json"}).pipe(q(i=>(Re(i.children,(e,o)=>o%2===0&&(e.collapsed=!0)),{tooltip:{trigger:"item",triggerOn:"mousemove"},series:[{type:"tree",data:[i],top:"1%",left:"7%",bottom:"1%",right:"20%",symbolSize:7,label:{position:"left",verticalAlign:"middle",align:"right",fontSize:9},leaves:{label:{position:"right",verticalAlign:"middle",align:"left"}},expandAndCollapse:!0,animationDuration:550,animationDurationUpdate:750}]})))}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l({type:t,selectors:[["app-from-left-to-right"]],standalone:!0,features:[h],decls:2,vars:3,consts:[["echarts","",1,"demo-chart",3,"options"]],template:function(e,o){e&1&&(y(0,"div",0),Y(1,"async")),e&2&&a("options",J(1,1,o.options))},dependencies:[u,f,K],encapsulation:2,changeDetection:0});let n=t;return n})();var Ze=(()=>{let t=class t{constructor(){this.http=v(ee)}ngOnInit(){this.options=this.http.get("/data/flare.json",{responseType:"json"}).pipe(q(i=>({tooltip:{trigger:"item",triggerOn:"mousemove"},series:[{type:"tree",data:[i],top:"18%",bottom:"14%",layout:"radial",symbol:"emptyCircle",symbolSize:7,initialTreeDepth:3,animationDurationUpdate:750}]})))}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l({type:t,selectors:[["app-radial-tree"]],standalone:!0,features:[h],decls:2,vars:3,consts:[["echarts","",1,"demo-chart",3,"options"]],template:function(e,o){e&1&&(y(0,"div",0),Y(1,"async")),e&2&&a("options",J(1,1,o.options))},dependencies:[u,f,K],encapsulation:2,changeDetection:0});let n=t;return n})();var He=(()=>{let t=class t{constructor(){this.options={title:{text:"Simple Graph"},tooltip:{},animationDurationUpdate:1500,animationEasingUpdate:"quinticInOut",series:[{type:"graph",layout:"none",symbolSize:60,roam:!0,label:{normal:{show:!0}},edgeSymbol:["circle","arrow"],edgeSymbolSize:[4,10],edgeLabel:{normal:{textStyle:{fontSize:20}}},data:[{name:"Node 1",x:300,y:300},{name:"Node 2",x:800,y:300},{name:"Node 3",x:550,y:100},{name:"Node 4",x:550,y:500}],links:[{source:0,target:1,symbolSize:[5,20],label:{normal:{show:!0}},lineStyle:{normal:{width:5,curveness:.2}}},{source:"Node 2",target:"Node 1",label:{normal:{show:!0}},lineStyle:{normal:{curveness:.2}}},{source:"Node 1",target:"Node 3"},{source:"Node 2",target:"Node 3"},{source:"Node 2",target:"Node 4"},{source:"Node 1",target:"Node 4"}],lineStyle:{normal:{opacity:.9,width:2,curveness:0}}}]}}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l({type:t,selectors:[["app-simple-graph"]],standalone:!0,features:[h],decls:1,vars:1,consts:[["echarts","",1,"demo-chart",3,"options"]],template:function(e,o){e&1&&y(0,"div",0),e&2&&a("options",o.options)},dependencies:[u,f],encapsulation:2,changeDetection:0});let n=t;return n})();function dt(n,t){}function mt(n,t){if(n&1){let m=T();c(0,"nz-tab",3),d("nzClick",function(){let e=z(m).$index,o=b();return x(o.to(e))}),E(1,dt,0,0,"ng-template",4),s()}if(n&2){let m=t.$implicit,i=b();a("nzTitle",m.label),g(),a("cdkPortalOutlet",i.selectedPortal)}}var Xe=(()=>{let t=class t{constructor(){this.destroyRef=v(N),this.tabArray=[{label:"Simple Graph",value:He},{label:"From Left To Right",value:We},{label:"Radial Tree",value:Ze}],this.tabPosition="left",this.cdr=v(D),this.breakpointObserver=v(V)}to(i){this.componentPortal=new w(this.tabArray[i].value),this.selectedPortal=this.componentPortal}ngOnInit(){this.to(0),this.breakpointObserver.observe(["(max-width: 767px)"]).pipe(G(this.destroyRef)).subscribe(i=>{this.tabPosition=i.matches?"top":"left",this.cdr.markForCheck()})}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l({type:t,selectors:[["app-series"]],standalone:!0,features:[h],decls:4,vars:1,consts:[["nzTitle","\u7CFB\u5217"],[3,"nzTabPosition"],[3,"nzTitle"],[3,"nzClick","nzTitle"],[3,"cdkPortalOutlet"]],template:function(e,o){e&1&&(c(0,"nz-card",0)(1,"nz-tabset",1),R(2,mt,2,2,"nz-tab",2,A),s()()),e&2&&(g(),a("nzTabPosition",o.tabPosition),g(),B(o.tabArray))},dependencies:[X,H,F,L,k,O,M],encapsulation:2,changeDetection:0});let n=t;return n})();var Qe=(()=>{let t=class t{ngOnInit(){let i=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"],e=[220,182,191,234,290,330,310,123,442,321,90,149,210,122,133,334,198,123,125,220],o=500,r=[];for(let p=0;p<e.length;p++)r.push(o);this.options={title:{text:"Check Console for Events"},xAxis:{data:i,axisLabel:{inside:!0,color:"#fff"},axisTick:{show:!1},axisLine:{show:!1},z:10},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#999"}}},dataZoom:[{type:"inside"}],series:[{type:"bar",itemStyle:{color:"rgba(0,0,0,0.05)"},barGap:"-100%",barCategoryGap:"40%",data:r,animation:!1},{type:"bar",itemStyle:{color:new se(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}])},emphasis:{itemStyle:{color:new se(0,0,0,1,[{offset:0,color:"#2378f7"},{offset:.7,color:"#2378f7"},{offset:1,color:"#83bff6"}])}},data:e}]}}onChartEvent(i,e){console.log("chart event:",e,i)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l({type:t,selectors:[["app-events-charts"]],standalone:!0,features:[h],decls:1,vars:1,consts:[["echarts","",1,"demo-chart",3,"chartClick","chartContextMenu","chartDataZoom","chartDblClick","chartGlobalOut","chartInit","chartMouseDown","chartMouseOut","chartMouseOver","chartMouseUp","options"]],template:function(e,o){e&1&&(c(0,"div",0),d("chartClick",function(p){return o.onChartEvent(p,"chartClick")})("chartContextMenu",function(p){return o.onChartEvent(p,"chartContextMenu")})("chartDataZoom",function(p){return o.onChartEvent(p,"chartDataZoom")})("chartDblClick",function(p){return o.onChartEvent(p,"chartDblClick")})("chartGlobalOut",function(p){return o.onChartEvent(p,"chartGlobalOut")})("chartInit",function(p){return o.onChartEvent(p,"chartInit")})("chartMouseDown",function(p){return o.onChartEvent(p,"chartMouseDown")})("chartMouseOut",function(p){return o.onChartEvent(p,"chartMouseOut")})("chartMouseOver",function(p){return o.onChartEvent(p,"chartMouseOver")})("chartMouseUp",function(p){return o.onChartEvent(p,"chartMouseUp")}),s()),e&2&&a("options",o.options)},dependencies:[u,f],encapsulation:2,changeDetection:0});let n=t;return n})();var qe=(()=>{let t=class t{constructor(){this.initOpts={renderer:"svg",width:300,height:300},this.options={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"Counters",type:"bar",barWidth:"60%",data:[10,52,200,334,390,330,220]}]}}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l({type:t,selectors:[["app-init-opts-charts"]],standalone:!0,features:[h],decls:1,vars:2,consts:[[3,"initOpts","options"]],template:function(e,o){e&1&&y(0,"echarts",0),e&2&&a("initOpts",o.initOpts)("options",o.options)},dependencies:[u,f],encapsulation:2,changeDetection:0});let n=t;return n})();var et=(()=>{let t=class t{constructor(i){this.msg=i,this.options={backgroundColor:"#2c343c",title:{text:"Customized Pie",left:"center",top:20,textStyle:{color:"#ccc"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},visualMap:{show:!1,min:80,max:600,inRange:{colorLightness:[0,1]}},series:[{name:"Counters",type:"pie",radius:"55%",center:["50%","50%"],data:[{value:335,name:"C-1"},{value:310,name:"C-2"},{value:274,name:"C-3"},{value:235,name:"C-4"},{value:400,name:"C-5"}].sort((e,o)=>e.value-o.value),roseType:"radius",label:{normal:{textStyle:{color:"rgba(255, 255, 255, 0.3)"}}},labelLine:{normal:{lineStyle:{color:"rgba(255, 255, 255, 0.3)"},smooth:.2,length:10,length2:20}},itemStyle:{normal:{color:"#c23531",shadowBlur:200,shadowColor:"rgba(0, 0, 0, 0.5)"}},animationType:"scale",animationEasing:"elasticOut",animationDelay:()=>Math.random()*200}]}}onChartInit(i){this.chartInstance=i,console.log("on chart init:",i)}callMethod(i){if(this.chartInstance){let e=this.chartInstance[i]();this.msg.info(`${i}(): ${e||"void"}`),console.log(e)}}};t.\u0275fac=function(e){return new(e||t)(P(Fe))},t.\u0275cmp=l({type:t,selectors:[["app-instance-opts-charts"]],standalone:!0,features:[h],decls:12,vars:1,consts:[[1,"m-b-20"],["nz-button","","nzType","default",1,"m-r-8","m-b-8",3,"click"],["echarts","",1,"demo-chart",3,"chartInit","options"]],template:function(e,o){e&1&&(c(0,"div",0)(1,"button",1),d("click",function(){return o.callMethod("getWidth")}),S(2,"getWidth()"),s(),c(3,"button",1),d("click",function(){return o.callMethod("getHeight")}),S(4,"getHeight()"),s(),c(5,"button",1),d("click",function(){return o.callMethod("getDom")}),S(6,"getDom()"),s(),c(7,"button",1),d("click",function(){return o.callMethod("getOption")}),S(8,"getOption()"),s(),c(9,"button",1),d("click",function(){return o.callMethod("clear")}),S(10,"clear()"),s()(),c(11,"div",2),d("chartInit",function(p){return o.onChartInit(p)}),s()),e&2&&(g(11),a("options",o.options))},dependencies:[Z,W,j,$,U,u,f],encapsulation:2,changeDetection:0});let n=t;return n})();var tt=(()=>{let t=class t{constructor(){this.isLoading=!1,this.options={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["X-1","X-2","X-3","X-4","X-5"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"X-1",type:"line",stack:"counts",areaStyle:{normal:{}},data:[120,132,101,134,90,230,210]},{name:"X-2",type:"line",stack:"counts",areaStyle:{normal:{}},data:[220,182,191,234,290,330,310]},{name:"X-3",type:"line",stack:"counts",areaStyle:{normal:{}},data:[150,232,201,154,190,330,410]},{name:"X-4",type:"line",stack:"counts",areaStyle:{normal:{}},data:[320,332,301,334,390,330,320]},{name:"X-5",type:"line",stack:"counts",label:{normal:{show:!0,position:"top"}},areaStyle:{normal:{}},data:[820,932,901,934,1290,1330,1320]}]}}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l({type:t,selectors:[["app-loading-charts"]],standalone:!0,features:[h],decls:4,vars:2,consts:[[1,"button-groups"],["nz-button","","nzType","default",3,"click"],["echarts","","theme","macarons",1,"demo-chart",3,"loading","options"]],template:function(e,o){e&1&&(c(0,"div",0)(1,"button",1),d("click",function(){return o.isLoading=!o.isLoading}),S(2,"Toggle Loading"),s()(),y(3,"div",2)),e&2&&(g(3),a("loading",o.isLoading)("options",o.options))},dependencies:[Z,W,j,$,U,u,f],encapsulation:2,changeDetection:0});let n=t;return n})();var it=(()=>{let t=class t{constructor(){this.oneDay=24*3600*1e3,this.data=[],this.cdr=v(D)}ngOnInit(){this.data=[],this.now=new Date(1997,9,3),this.value=Math.random()*1e3;for(let i=0;i<1e3;i++)this.data.push(this.randomData());this.options={title:{text:"Dynamic Data + Time Axis"},tooltip:{trigger:"axis",formatter:i=>{i=i[0];let e=new Date(i.name);return`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()} : ${i.value[1]}`},axisPointer:{animation:!1}},xAxis:{type:"time",splitLine:{show:!1}},yAxis:{type:"value",boundaryGap:[0,"100%"],splitLine:{show:!1}},series:[{name:"Mocking Data",type:"line",showSymbol:!1,hoverAnimation:!1,data:this.data}]},this.timer=setInterval(()=>{for(let i=0;i<5;i++)this.data.shift(),this.data.push(this.randomData());this.updateOptions={series:[{data:this.data}]},this.cdr.detectChanges()},1e3)}ngOnDestroy(){clearInterval(this.timer)}randomData(){return this.now=new Date(this.now.getTime()+this.oneDay),this.value=this.value+Math.random()*21-10,{name:this.now.toString(),value:[[this.now.getFullYear(),this.now.getMonth()+1,this.now.getDate()].join("/"),Math.round(this.value)]}}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l({type:t,selectors:[["app-merge-charts"]],standalone:!0,features:[h],decls:1,vars:2,consts:[["echarts","",1,"demo-chart",3,"merge","options"]],template:function(e,o){e&1&&y(0,"div",0),e&2&&a("merge",o.updateOptions)("options",o.options)},dependencies:[u,f],encapsulation:2,changeDetection:0});let n=t;return n})();var nt=(()=>{let t=class t{ngOnInit(){let i=[],e=[],o=[];for(let r=0;r<100;r++)i.push(`category${r}`),e.push((Math.sin(r/5)*(r/5-10)+r/6)*5),o.push((Math.cos(r/5)*(r/5-10)+r/6)*5);this.options={legend:{data:["bar","bar2"],align:"left"},tooltip:{},xAxis:{data:i,silent:!1,splitLine:{show:!1}},yAxis:{},series:[{name:"bar",type:"bar",data:e,animationDelay:r=>r*10},{name:"bar2",type:"bar",data:o,animationDelay:r=>r*10+100}],animationEasing:"elasticOut",animationDelayUpdate:r=>r*5}}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l({type:t,selectors:[["app-simple-chart"]],standalone:!0,features:[h],decls:1,vars:1,consts:[["echarts","",1,"demo-chart",3,"options"]],template:function(e,o){e&1&&y(0,"div",0),e&2&&a("options",o.options)},dependencies:[u,f],encapsulation:2,changeDetection:0});let n=t;return n})();var ot={color:["#b21ab4","#6f0099","#2a2073","#0b5ea8","#17aecc","#b3b3ff","#eb99ff","#fae6ff","#e6f2ff","#eeeeee"],title:{textStyle:{fontWeight:"normal",color:"#00aecd"}},visualMap:{color:["#00aecd","#a2d4e6"]},toolbox:{color:["#00aecd","#00aecd","#00aecd","#00aecd"]},tooltip:{backgroundColor:"rgba(0,0,0,0.5)",axisPointer:{type:"line",lineStyle:{color:"#00aecd",type:"dashed"},crossStyle:{color:"#00aecd"},shadowStyle:{color:"rgba(200,200,200,0.3)"}}},dataZoom:{dataBackgroundColor:"#eee",fillerColor:"rgba(144,197,237,0.2)",handleColor:"#00aecd"},timeline:{lineStyle:{color:"#00aecd"},controlStyle:{color:"#00aecd",borderColor:"00aecd"}},candlestick:{itemStyle:{color:"#00aecd",color0:"#a2d4e6"},lineStyle:{width:1,color:"#00aecd",color0:"#a2d4e6"},areaStyle:{color:"#b21ab4",color0:"#0b5ea8"}},chord:{padding:4,itemStyle:{color:"#b21ab4",borderWidth:1,borderColor:"rgba(128, 128, 128, 0.5)"},lineStyle:{color:"rgba(128, 128, 128, 0.5)"},areaStyle:{color:"#0b5ea8"}},graph:{itemStyle:{color:"#b21ab4"},linkStyle:{color:"#2a2073"}},map:{itemStyle:{color:"#c12e34"},areaStyle:{color:"#ddd"},label:{color:"#c12e34"}},gauge:{axisLine:{lineStyle:{color:[[.2,"#dddddd"],[.8,"#00aecd"],[1,"#f5ccff"]],width:8}}}};var rt=(()=>{let t=class t{constructor(){this.theme="dark",this.coolTheme=ot,this.options={title:{text:"Nightingale's Rose Diagram",subtext:"Mocking Data",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{x:"center",y:"bottom",data:["rose1","rose2","rose3","rose4","rose5","rose6","rose7","rose8"]},calculable:!0,series:[{name:"area",type:"pie",radius:[30,110],roseType:"area",data:[{value:10,name:"rose1"},{value:5,name:"rose2"},{value:15,name:"rose3"},{value:25,name:"rose4"},{value:20,name:"rose5"},{value:35,name:"rose6"},{value:30,name:"rose7"},{value:40,name:"rose8"}]}]}}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l({type:t,selectors:[["app-theme-charts"]],standalone:!0,features:[h],decls:8,vars:2,consts:[[1,"m-b-20"],["nz-button","","nzType","default",1,"m-r-8","m-b-8",3,"click"],["echarts","",1,"demo-chart",3,"options","theme"]],template:function(e,o){e&1&&(c(0,"div",0)(1,"button",1),d("click",function(){return o.theme="dark"}),S(2,"dark\u4E3B\u9898"),s(),c(3,"button",1),d("click",function(){return o.theme="macarons"}),S(4,"macarons\u4E3B\u9898"),s(),c(5,"button",1),d("click",function(){return o.theme=o.coolTheme}),S(6,"\u81EA\u5B9A\u4E49\u4E3B\u9898"),s()(),y(7,"div",2)),e&2&&(g(7),a("options",o.options)("theme",o.theme))},dependencies:[Z,W,j,$,U,u,f],encapsulation:2,changeDetection:0});let n=t;return n})();function ut(n,t){}function ft(n,t){if(n&1){let m=T();c(0,"nz-tab",3),d("nzClick",function(){let e=z(m).$index,o=b();return x(o.to(e))}),E(1,ut,0,0,"ng-template",4),s()}if(n&2){let m=t.$implicit,i=b();a("nzTitle",m.label),g(),a("cdkPortalOutlet",i.selectedPortal)}}var at=(()=>{let t=class t{constructor(){this.tabPosition="left",this.tabArray=[{label:"Simple Chart",value:nt},{label:"Events",value:Qe},{label:"[theme]",value:rt},{label:"[loading]",value:tt},{label:"[merge]",value:it},{label:"[initOpts]",value:qe},{label:"ECharts Instance",value:et}],this.destroyRef=v(N),this.cdr=v(D),this.breakpointObserver=v(V)}to(i){this.componentPortal=new w(this.tabArray[i].value),this.selectedPortal=this.componentPortal}ngOnInit(){this.to(0),this.breakpointObserver.observe(["(max-width: 767px)"]).pipe(G(this.destroyRef)).subscribe(i=>{this.tabPosition=i.matches?"top":"left",this.cdr.markForCheck()})}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l({type:t,selectors:[["app-started"]],standalone:!0,features:[h],decls:4,vars:1,consts:[["nzTitle","\u7B80\u5355\u5F00\u59CB"],[3,"nzTabPosition"],[3,"nzTitle"],[3,"nzClick","nzTitle"],[3,"cdkPortalOutlet"]],template:function(e,o){e&1&&(c(0,"nz-card",0)(1,"nz-tabset",1),R(2,ft,2,2,"nz-tab",2,A),s()()),e&2&&(g(),a("nzTabPosition",o.tabPosition),g(),B(o.tabArray))},dependencies:[X,H,F,L,k,O,M],encapsulation:2,changeDetection:0});let n=t;return n})();var gt=["headerFooter"];function yt(n,t){}function vt(n,t){if(n&1){let m=T();c(0,"nz-tabset",4),Oe("nzSelectedIndexChange",function(e){z(m);let o=b();return Me(o.currentSelTab,e)||(o.currentSelTab=e),x(e)}),c(1,"nz-tab",5),d("nzClick",function(){z(m);let e=b();return x(e.to(e.tabEnum.Started))}),s(),c(2,"nz-tab",6),d("nzClick",function(){z(m);let e=b();return x(e.to(e.tabEnum.Advanced))}),s(),c(3,"nz-tab",7),d("nzClick",function(){z(m);let e=b();return x(e.to(e.tabEnum.Series))}),s()()}if(n&2){let m=b();we("nzSelectedIndex",m.currentSelTab)}}var st=function(n){return n[n.Started=0]="Started",n[n.Advanced=1]="Advanced",n[n.Series=2]="Series",n}(st||{}),Dn=(()=>{let t=class t{constructor(){this.pageHeaderInfo={title:"Echarts",breadcrumb:["\u9996\u9875","\u529F\u80FD","\u56FE\u8868","Echarts"],desc:"Echarts\u7684\u793A\u4F8B\u5185\u5BB9"},this.tabEnum=st,this.currentSelTab=this.tabEnum.Started,this.componentArray=[at,Ue,Xe],this.cdr=v(D)}to(i){this.currentSelTab=i,this.componentPortal=new w(this.componentArray[i]),this.selectedPortal=this.componentPortal,this.cdr.detectChanges()}ngOnInit(){this.to(this.tabEnum.Started)}ngAfterViewInit(){this.pageHeaderInfo={title:"Echarts",desc:"Echarts\u7684\u793A\u4F8B\u5185\u5BB9",breadcrumb:["\u9996\u9875","\u529F\u80FD","\u56FE\u8868","Echarts"],footer:this.headerFooter}}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l({type:t,selectors:[["app-echarts"]],viewQuery:function(e,o){if(e&1&&De(gt,5),e&2){let r;Ee(r=Te())&&(o.headerFooter=r.first)}},standalone:!0,features:[ke([{provide:ie,useFactory:()=>({echarts:()=>import("./chunk-5KWGJ5EE.js")})}]),h],decls:5,vars:2,consts:[["headerFooter",""],[3,"pageHeaderInfo"],[1,"normal-table-wrap"],[3,"cdkPortalOutlet"],[3,"nzSelectedIndexChange","nzSelectedIndex"],["nzTitle","\u5F00\u59CB",3,"nzClick"],["nzTitle","\u9AD8\u7EA7",3,"nzClick"],["nzTitle","\u7CFB\u5217",3,"nzClick"]],template:function(e,o){e&1&&(y(0,"app-page-header",1),c(1,"div",2),E(2,yt,0,0,"ng-template",3),s(),E(3,vt,4,1,"ng-template",null,0,Le)),e&2&&(a("pageHeaderInfo",o.pageHeaderInfo),g(2),a("cdkPortalOutlet",o.selectedPortal))},dependencies:[Ae,O,M,F,L,k,u],encapsulation:2,changeDetection:0});let n=t;return n})();export{Dn as EchartsComponent};