import{u as X,_ as b,h as N,g as Z}from"./index.89cac3f4.js";import{u as z}from"./index.3adc27fe.js";import{d as h,c as I,C as f,aE as y,aH as t,aI as e,aK as d,aL as i,b8 as ee,bQ as E,bR as T,G as _,bq as te,bS as ae,b7 as O,bT as W,L as j,bU as q,j as C,b1 as R,u as B,bg as k,bV as v,by as P,aF as ne,bW as oe,bX as se,bY as le,b9 as V,bZ as ce,D as F,aM as A,aJ as S,bK as U,b_ as G,bp as re,ba as ie,bb as ue}from"./arco.92d13bd0.js";/* empty css              *//* empty css              *//* empty css              */import{L as M}from"./chart.29aa0270.js";/* empty css               */import"./vue.8b5801ee.js";const pe=h({__name:"banner",setup(s){const n=X(),o=I(()=>({name:n.name}));return(a,l)=>{const r=ee,m=E,c=T;return f(),y(m,{class:"banner"},{default:t(()=>[e(m,{span:8},{default:t(()=>[e(r,{heading:5,style:{"margin-top":"0"}},{default:t(()=>[d(i(a.$t("workplace.welcome"))+" "+i(o.value.name),1)]),_:1})]),_:1}),e(c,{class:"panel-border"})]),_:1})}}});const _e=b(pe,[["__scopeId","data-v-5803762b"]]);const de={},me={class:"unit"},fe={class:"unit"},ge={class:"unit"};function ye(s,n){const o=te,a=ae,l=O,r=W,m=j,c=T,g=q;return f(),y(g,{cols:24,"row-gap":16,class:"panel"},{default:t(()=>[e(r,{class:"panel-col",span:{xs:12,sm:12,md:12,lg:12,xl:12,xxl:6}},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{size:54,class:"col-avatar"},{default:t(()=>n[0]||(n[0]=[_("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/288b89194e657603ff40db39e8072640.svg~tplv-49unhts6dw-image.image"},null,-1)])),_:1}),e(a,{title:s.$t("workplace.onlineContent"),value:373.5,precision:1,"value-from":0,animation:"","show-group-separator":""},{suffix:t(()=>[n[1]||(n[1]=d(" W+ ")),_("span",me,i(s.$t("workplace.pecs")),1)]),_:1},8,["title"])]),_:1})]),_:1}),e(r,{class:"panel-col",span:{xs:12,sm:12,md:12,lg:12,xl:12,xxl:6}},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{size:54,class:"col-avatar"},{default:t(()=>n[2]||(n[2]=[_("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/fdc66b07224cdf18843c6076c2587eb5.svg~tplv-49unhts6dw-image.image"},null,-1)])),_:1}),e(a,{title:s.$t("workplace.putIn"),value:368,"value-from":0,animation:"","show-group-separator":""},{suffix:t(()=>[_("span",fe,i(s.$t("workplace.pecs")),1)]),_:1},8,["title"])]),_:1})]),_:1}),e(r,{class:"panel-col",span:{xs:12,sm:12,md:12,lg:12,xl:12,xxl:6}},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{size:54,class:"col-avatar"},{default:t(()=>n[3]||(n[3]=[_("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77d74c9a245adeae1ec7fb5d4539738d.svg~tplv-49unhts6dw-image.image"},null,-1)])),_:1}),e(a,{title:s.$t("workplace.newDay"),value:8874,"value-from":0,animation:"","show-group-separator":""},{suffix:t(()=>[_("span",ge,i(s.$t("workplace.pecs")),1)]),_:1},8,["title"])]),_:1})]),_:1}),e(r,{class:"panel-col",span:{xs:12,sm:12,md:12,lg:12,xl:12,xxl:6},style:{"border-right":"none"}},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{size:54,class:"col-avatar"},{default:t(()=>n[4]||(n[4]=[_("img",{alt:"avatar",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/c8b36e26d2b9bb5dbf9b74dd6d7345af.svg~tplv-49unhts6dw-image.image"},null,-1)])),_:1}),e(a,{title:s.$t("workplace.newFromYesterday"),value:2.8,precision:1,"value-from":0,animation:""},{suffix:t(()=>[n[5]||(n[5]=d(" % ")),e(m,{class:"up-icon"})]),_:1},8,["title"])]),_:1})]),_:1}),e(r,{span:24},{default:t(()=>[e(c,{class:"panel-border"})]),_:1})]),_:1})}const he=b(de,[["render",ye],["__scopeId","data-v-861c1f3d"]]);function be(){return N.get("/api/content-data")}function ve(s){return N.get("/api/popular/list",{params:s})}function K(s){const n=Z(),o=I(()=>n.theme==="dark");return{chartOption:I(()=>s(o.value))}}const xe=h({__name:"content-chart",setup(s){function n(u){return{type:"text",bottom:"8",...u,style:{text:"",textAlign:"center",fill:"#4E5969",fontSize:12}}}const{loading:o,setLoading:a}=z(!0),l=C([]),r=C([]),m=C([n({left:"2.6%"}),n({right:0})]),{chartOption:c}=K(()=>({grid:{left:"2.6%",right:"0",top:"10",bottom:"30"},xAxis:{type:"category",offset:2,data:l.value,boundaryGap:!1,axisLabel:{color:"#4E5969",formatter(u,p){return p===0||p===l.value.length-1?"":`${u}`}},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,interval:u=>!(u===0||u===l.value.length-1),lineStyle:{color:"#E5E8EF"}},axisPointer:{show:!0,lineStyle:{color:"#23ADFF",width:2}}},yAxis:{type:"value",axisLine:{show:!1},axisLabel:{formatter(u,p){return p===0?u:`${u}k`}},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#E5E8EF"}}},tooltip:{trigger:"axis",formatter(u){const[p]=u;return`<div>
            <p class="tooltip-title">${p.axisValueLabel}</p>
            <div class="content-panel"><span>\u603B\u5185\u5BB9\u91CF</span><span class="tooltip-value">${(Number(p.value)*1e4).toLocaleString()}</span></div>
          </div>`},className:"echarts-tooltip-diy"},graphic:{elements:m.value},series:[{data:r.value,type:"line",smooth:!0,symbolSize:12,emphasis:{focus:"series",itemStyle:{borderWidth:2}},lineStyle:{width:3,color:new M(0,0,1,0,[{offset:0,color:"rgba(30, 231, 255, 1)"},{offset:.5,color:"rgba(36, 154, 255, 1)"},{offset:1,color:"rgba(111, 66, 251, 1)"}])},showSymbol:!1,areaStyle:{opacity:.8,color:new M(0,0,0,1,[{offset:0,color:"rgba(17, 126, 255, 0.16)"},{offset:1,color:"rgba(17, 128, 255, 0)"}])}}]}));return(async()=>{a(!0);try{const{data:u}=await be();u.forEach((p,x)=>{l.value.push(p.x),r.value.push(p.y),x===0&&(m.value[0].style.text=p.x),x===u.length-1&&(m.value[1].style.text=p.x)})}catch{}finally{a(!1)}})(),(u,p)=>{const x=k,w=R("Chart"),D=v,L=P;return f(),y(L,{loading:B(o),style:{width:"100%"}},{default:t(()=>[e(D,{class:"general-card","header-style":{paddingBottom:0},"body-style":{paddingTop:"20px"},title:u.$t("workplace.contentData")},{extra:t(()=>[e(x,null,{default:t(()=>[d(i(u.$t("workplace.viewMore")),1)]),_:1})]),default:t(()=>[e(w,{height:"289px",option:B(c)},null,8,["option"])]),_:1},8,["title"])]),_:1},8,["loading"])}}});const we={class:"increases-cell"},$e=h({__name:"popular-content",setup(s){const n=C("text"),{loading:o,setLoading:a}=z(),l=C(),r=async c=>{try{a(!0);const{data:g}=await ve({type:c});l.value=g}catch{}finally{a(!1)}},m=c=>{r(c)};return r("text"),(c,g)=>{const u=k,p=oe,x=se,w=le,D=V,L=j,Y=ce,H=O,J=v,Q=P;return f(),y(Q,{loading:B(o),style:{width:"100%"}},{default:t(()=>[e(J,{class:"general-card","header-style":{paddingBottom:"0"},"body-style":{padding:"17px 20px 21px 20px"}},{title:t(()=>[d(i(c.$t("workplace.popularContent")),1)]),extra:t(()=>[e(u,null,{default:t(()=>[d(i(c.$t("workplace.viewMore")),1)]),_:1})]),default:t(()=>[e(H,{direction:"vertical",size:10,fill:""},{default:t(()=>[e(x,{"model-value":n.value,"onUpdate:modelValue":g[0]||(g[0]=$=>n.value=$),type:"button",onChange:m},{default:t(()=>[e(p,{value:"text"},{default:t(()=>[d(i(c.$t("workplace.popularContent.text")),1)]),_:1}),e(p,{value:"image"},{default:t(()=>[d(i(c.$t("workplace.popularContent.image")),1)]),_:1}),e(p,{value:"video"},{default:t(()=>[d(i(c.$t("workplace.popularContent.video")),1)]),_:1})]),_:1},8,["model-value","onChange"]),e(Y,{data:l.value,pagination:!1,bordered:!1,scroll:{x:"100%",y:"264px"}},{columns:t(()=>[e(w,{title:"\u6392\u540D","data-index":"key"}),e(w,{title:"\u5185\u5BB9\u6807\u9898","data-index":"title"},{cell:t(({record:$})=>[e(D,{ellipsis:{rows:1}},{default:t(()=>[d(i($.title),1)]),_:2},1024)]),_:1}),e(w,{title:"\u70B9\u51FB\u91CF","data-index":"clickNumber"}),e(w,{title:"\u65E5\u6DA8\u5E45","data-index":"increases",sortable:{sortDirections:["ascend","descend"]}},{cell:t(({record:$})=>[_("div",we,[_("span",null,i($.increases)+"%",1),$.increases!==0?(f(),y(L,{key:0,style:{color:"#f53f3f","font-size":"8px"}})):ne("",!0)])]),_:1})]),_:1},8,["data"])]),_:1})]),_:1})]),_:1},8,["loading"])}}});const Ce=b($e,[["__scopeId","data-v-6e29d48b"]]),Be=h({__name:"categories-percent",setup(s){const{loading:n}=z(),{chartOption:o}=K(a=>({legend:{left:"center",data:["\u7EAF\u6587\u672C","\u56FE\u6587\u7C7B","\u89C6\u9891\u7C7B"],bottom:0,icon:"circle",itemWidth:8,textStyle:{color:a?"rgba(255, 255, 255, 0.7)":"#4E5969"},itemStyle:{borderWidth:0}},tooltip:{show:!0,trigger:"item"},graphic:{elements:[{type:"text",left:"center",top:"40%",style:{text:"\u5185\u5BB9\u91CF",textAlign:"center",fill:a?"#ffffffb3":"#4E5969",fontSize:14}},{type:"text",left:"center",top:"50%",style:{text:"928,531",textAlign:"center",fill:a?"#ffffffb3":"#1D2129",fontSize:16,fontWeight:500}}]},series:[{type:"pie",radius:["50%","70%"],center:["50%","50%"],label:{formatter:"{d}%",fontSize:14,color:a?"rgba(255, 255, 255, 0.7)":"#4E5969"},itemStyle:{borderColor:a?"#232324":"#fff",borderWidth:1},data:[{value:[148564],name:"\u7EAF\u6587\u672C",itemStyle:{color:a?"#3D72F6":"#249EFF"}},{value:[334271],name:"\u56FE\u6587\u7C7B",itemStyle:{color:a?"#A079DC":"#313CA9"}},{value:[445694],name:"\u89C6\u9891\u7C7B",itemStyle:{color:a?"#6CAAF5":"#21CCFF"}}]}]}));return(a,l)=>{const r=R("Chart"),m=v,c=P;return f(),y(c,{loading:B(n),style:{width:"100%"}},{default:t(()=>[e(m,{class:"general-card","header-style":{paddingBottom:"0"},"body-style":{padding:"20px"}},{title:t(()=>[d(i(a.$t("workplace.categoriesPercent")),1)]),default:t(()=>[e(r,{height:"310px",option:B(o)},null,8,["option"])]),_:1})]),_:1},8,["loading"])}}}),ke={style:{"margin-bottom":"-1rem"}},Fe={class:"icon"},Ee=h({__name:"recently-visited",setup(s){const n=[{text:"workplace.contentManagement",icon:"icon-storage"},{text:"workplace.contentStatistical",icon:"icon-file"},{text:"workplace.advanced",icon:"icon-settings"}];return(o,a)=>{const l=V,r=E,m=G,c=v;return f(),y(c,{class:"general-card",title:o.$t("workplace.recently.visited"),"header-style":{paddingBottom:"0"},"body-style":{paddingTop:"26px"}},{default:t(()=>[_("div",ke,[e(m,{gutter:8},{default:t(()=>[(f(),F(A,null,S(n,g=>e(r,{key:g.text,span:8,class:"wrapper"},{default:t(()=>[_("div",Fe,[(f(),y(U(g.icon)))]),e(l,{class:"text"},{default:t(()=>[d(i(o.$t(g.text)),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})])]),_:1},8,["title"])}}});const Ae=b(Ee,[["__scopeId","data-v-242aaa28"]]),Se={class:"icon"},De=h({__name:"quick-operation",setup(s){const n=[{text:"workplace.contentManagement",icon:"icon-file"},{text:"workplace.contentStatistical",icon:"icon-storage"},{text:"workplace.advanced",icon:"icon-settings"},{text:"workplace.onlinePromotion",icon:"icon-mobile"},{text:"workplace.contentPutIn",icon:"icon-fire"}];return(o,a)=>{const l=k,r=V,m=E,c=G,g=T,u=v;return f(),y(u,{class:"general-card",title:o.$t("workplace.quick.operation"),"header-style":{paddingBottom:"0"},"body-style":{padding:"24px 20px 0 20px"}},{extra:t(()=>[e(l,null,{default:t(()=>[d(i(o.$t("workplace.quickOperation.setup")),1)]),_:1})]),default:t(()=>[e(c,{gutter:8},{default:t(()=>[(f(),F(A,null,S(n,p=>e(m,{key:p.text,span:8,class:"wrapper"},{default:t(()=>[_("div",Se,[(f(),y(U(p.icon)))]),e(r,{class:"text"},{default:t(()=>[d(i(o.$t(p.text)),1)]),_:2},1024)]),_:2},1024)),64))]),_:1}),e(g,{class:"split-line",style:{margin:"0"}})]),_:1},8,["title"])}}}),Le={class:"item-content"},Ie=h({__name:"announcement",setup(s){const n=[{type:"orangered",label:"\u6D3B\u52A8",content:"\u5185\u5BB9\u6700\u65B0\u4F18\u60E0\u6D3B\u52A8"},{type:"cyan",label:"\u6D88\u606F",content:"\u65B0\u589E\u5185\u5BB9\u5C1A\u672A\u901A\u8FC7\u5BA1\u6838\uFF0C\u8BE6\u60C5\u8BF7\u70B9\u51FB\u67E5\u770B\u3002"},{type:"blue",label:"\u901A\u77E5",content:"\u5F53\u524D\u4EA7\u54C1\u8BD5\u7528\u671F\u5373\u5C06\u7ED3\u675F\uFF0C\u5982\u9700\u7EED\u8D39\u8BF7\u70B9\u51FB\u67E5\u770B\u3002"},{type:"blue",label:"\u901A\u77E5",content:"1\u6708\u65B0\u7CFB\u7EDF\u5347\u7EA7\u8BA1\u5212\u901A\u77E5"},{type:"cyan",label:"\u6D88\u606F",content:"\u65B0\u589E\u5185\u5BB9\u5DF2\u7ECF\u901A\u8FC7\u5BA1\u6838\uFF0C\u8BE6\u60C5\u8BF7\u70B9\u51FB\u67E5\u770B\u3002"}];return(o,a)=>{const l=k,r=re,m=v;return f(),y(m,{class:"general-card",title:o.$t("workplace.announcement"),"header-style":{paddingBottom:"0"},"body-style":{padding:"15px 20px 13px 20px"}},{extra:t(()=>[e(l,null,{default:t(()=>[d(i(o.$t("workplace.viewMore")),1)]),_:1})]),default:t(()=>[_("div",null,[(f(),F(A,null,S(n,(c,g)=>_("div",{key:g,class:"item"},[e(r,{color:c.type,size:"small"},{default:t(()=>[d(i(c.label),1)]),_:2},1032,["color"]),_("span",Le,i(c.content),1)])),64))])]),_:1},8,["title"])}}});const ze=b(Ie,[["__scopeId","data-v-efbb480f"]]),Te=["src"],Pe=h({__name:"carousel",setup(s){const n=["//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/5cc3cd1d994b7ef9db6a1f619a22addd.jpg~tplv-49unhts6dw-image.image","//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/f256cbcc287139e191fecea9d255a1f0.jpg~tplv-49unhts6dw-image.image","//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/b557ff0cd44146a2e471b477af2f30d0.jpg~tplv-49unhts6dw-image.image","//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/665106f4bbd2a2df96eaf7aec52f7bc3.jpg~tplv-49unhts6dw-image.image","//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/ea095a2c9c72b5d8f2f2818040db736d.jpg~tplv-49unhts6dw-image.image"];return(o,a)=>{const l=ie,r=ue;return f(),y(r,{"indicator-type":"slider","show-arrow":"hover","auto-play":"",style:{width:"100%",height:"170px","border-radius":"4px",overflow:"hidden"}},{default:t(()=>[(f(),F(A,null,S(n,(m,c)=>e(l,{key:c},{default:t(()=>[_("div",null,[_("img",{src:m,style:{width:"100%"}},null,8,Te)])]),_:2},1024)),64))]),_:1})}}});const Ve={};function Ge(s,n){const o=k,a=E,l=G,r=v;return f(),y(r,{class:"general-card",title:s.$t("workplace.docs"),"header-style":{paddingBottom:0},"body-style":{paddingTop:0},style:{height:"166px"}},{extra:t(()=>[e(o,null,{default:t(()=>[d(i(s.$t("workplace.viewMore")),1)]),_:1})]),default:t(()=>[e(l,null,{default:t(()=>[e(a,{span:12},{default:t(()=>[e(o,null,{default:t(()=>[d(i(s.$t("workplace.docs.productOverview")),1)]),_:1})]),_:1}),e(a,{span:12},{default:t(()=>[e(o,null,{default:t(()=>[d(i(s.$t("workplace.docs.userGuide")),1)]),_:1})]),_:1}),e(a,{span:12},{default:t(()=>[e(o,null,{default:t(()=>[d(i(s.$t("workplace.docs.workflow")),1)]),_:1})]),_:1}),e(a,{span:12},{default:t(()=>[e(o,null,{default:t(()=>[d(i(s.$t("workplace.docs.interfaceDocs")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["title"])}const Me=b(Ve,[["render",Ge],["__scopeId","data-v-86d656a8"]]),Ne={class:"container"},Oe={class:"left-side"},We={class:"panel"},je={class:"right-side"},qe={class:"panel moduler-wrap"},Re={name:"Dashboard"},Ue=h({...Re,setup(s){return(n,o)=>{const a=W,l=q;return f(),F("div",Ne,[_("div",Oe,[_("div",We,[e(_e),e(he),e(xe)]),e(l,{cols:24,"col-gap":16,"row-gap":16,style:{"margin-top":"16px"}},{default:t(()=>[e(a,{span:{xs:24,sm:24,md:24,lg:12,xl:12,xxl:12}},{default:t(()=>[e(Ce)]),_:1}),e(a,{span:{xs:24,sm:24,md:24,lg:12,xl:12,xxl:12}},{default:t(()=>[e(Be)]),_:1})]),_:1})]),_("div",je,[e(l,{cols:24,"row-gap":16},{default:t(()=>[e(a,{span:24},{default:t(()=>[_("div",qe,[e(De),e(Ae)])]),_:1}),e(a,{class:"panel",span:24},{default:t(()=>[e(Pe)]),_:1}),e(a,{class:"panel",span:24},{default:t(()=>[e(ze)]),_:1}),e(a,{class:"panel",span:24},{default:t(()=>[e(Me)]),_:1})]),_:1})])])}}});const at=b(Ue,[["__scopeId","data-v-4f549a29"]]);export{at as default};