(window.webpackJsonp=window.webpackJsonp||[]).push([[6,13],{443:function(t,e,s){"use strict";s.r(e);var n=s(447),a=n.b.reactiveProp,i={extends:n.a,mixins:[a],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},r=s(17),l=Object(r.a)(i,void 0,void 0,!1,null,null,null);e.default=l.exports},446:function(t,e,s){var n={"./af":308,"./af.js":308,"./ar":309,"./ar-dz":310,"./ar-dz.js":310,"./ar-kw":311,"./ar-kw.js":311,"./ar-ly":312,"./ar-ly.js":312,"./ar-ma":313,"./ar-ma.js":313,"./ar-sa":314,"./ar-sa.js":314,"./ar-tn":315,"./ar-tn.js":315,"./ar.js":309,"./az":316,"./az.js":316,"./be":317,"./be.js":317,"./bg":318,"./bg.js":318,"./bm":319,"./bm.js":319,"./bn":320,"./bn-bd":321,"./bn-bd.js":321,"./bn.js":320,"./bo":322,"./bo.js":322,"./br":323,"./br.js":323,"./bs":324,"./bs.js":324,"./ca":325,"./ca.js":325,"./cs":326,"./cs.js":326,"./cv":327,"./cv.js":327,"./cy":328,"./cy.js":328,"./da":329,"./da.js":329,"./de":330,"./de-at":331,"./de-at.js":331,"./de-ch":332,"./de-ch.js":332,"./de.js":330,"./dv":333,"./dv.js":333,"./el":334,"./el.js":334,"./en-au":335,"./en-au.js":335,"./en-ca":336,"./en-ca.js":336,"./en-gb":337,"./en-gb.js":337,"./en-ie":338,"./en-ie.js":338,"./en-il":339,"./en-il.js":339,"./en-in":340,"./en-in.js":340,"./en-nz":341,"./en-nz.js":341,"./en-sg":342,"./en-sg.js":342,"./eo":343,"./eo.js":343,"./es":344,"./es-do":345,"./es-do.js":345,"./es-mx":346,"./es-mx.js":346,"./es-us":347,"./es-us.js":347,"./es.js":344,"./et":348,"./et.js":348,"./eu":349,"./eu.js":349,"./fa":350,"./fa.js":350,"./fi":351,"./fi.js":351,"./fil":352,"./fil.js":352,"./fo":353,"./fo.js":353,"./fr":354,"./fr-ca":355,"./fr-ca.js":355,"./fr-ch":356,"./fr-ch.js":356,"./fr.js":354,"./fy":357,"./fy.js":357,"./ga":358,"./ga.js":358,"./gd":359,"./gd.js":359,"./gl":360,"./gl.js":360,"./gom-deva":361,"./gom-deva.js":361,"./gom-latn":362,"./gom-latn.js":362,"./gu":363,"./gu.js":363,"./he":364,"./he.js":364,"./hi":365,"./hi.js":365,"./hr":366,"./hr.js":366,"./hu":367,"./hu.js":367,"./hy-am":368,"./hy-am.js":368,"./id":369,"./id.js":369,"./is":370,"./is.js":370,"./it":371,"./it-ch":372,"./it-ch.js":372,"./it.js":371,"./ja":373,"./ja.js":373,"./jv":374,"./jv.js":374,"./ka":375,"./ka.js":375,"./kk":376,"./kk.js":376,"./km":377,"./km.js":377,"./kn":378,"./kn.js":378,"./ko":379,"./ko.js":379,"./ku":380,"./ku.js":380,"./ky":381,"./ky.js":381,"./lb":382,"./lb.js":382,"./lo":383,"./lo.js":383,"./lt":384,"./lt.js":384,"./lv":385,"./lv.js":385,"./me":386,"./me.js":386,"./mi":387,"./mi.js":387,"./mk":388,"./mk.js":388,"./ml":389,"./ml.js":389,"./mn":390,"./mn.js":390,"./mr":391,"./mr.js":391,"./ms":392,"./ms-my":393,"./ms-my.js":393,"./ms.js":392,"./mt":394,"./mt.js":394,"./my":395,"./my.js":395,"./nb":396,"./nb.js":396,"./ne":397,"./ne.js":397,"./nl":398,"./nl-be":399,"./nl-be.js":399,"./nl.js":398,"./nn":400,"./nn.js":400,"./oc-lnc":401,"./oc-lnc.js":401,"./pa-in":402,"./pa-in.js":402,"./pl":403,"./pl.js":403,"./pt":404,"./pt-br":405,"./pt-br.js":405,"./pt.js":404,"./ro":406,"./ro.js":406,"./ru":407,"./ru.js":407,"./sd":408,"./sd.js":408,"./se":409,"./se.js":409,"./si":410,"./si.js":410,"./sk":411,"./sk.js":411,"./sl":412,"./sl.js":412,"./sq":413,"./sq.js":413,"./sr":414,"./sr-cyrl":415,"./sr-cyrl.js":415,"./sr.js":414,"./ss":416,"./ss.js":416,"./sv":417,"./sv.js":417,"./sw":418,"./sw.js":418,"./ta":419,"./ta.js":419,"./te":420,"./te.js":420,"./tet":421,"./tet.js":421,"./tg":422,"./tg.js":422,"./th":423,"./th.js":423,"./tk":424,"./tk.js":424,"./tl-ph":425,"./tl-ph.js":425,"./tlh":426,"./tlh.js":426,"./tr":427,"./tr.js":427,"./tzl":428,"./tzl.js":428,"./tzm":429,"./tzm-latn":430,"./tzm-latn.js":430,"./tzm.js":429,"./ug-cn":431,"./ug-cn.js":431,"./uk":432,"./uk.js":432,"./ur":433,"./ur.js":433,"./uz":434,"./uz-latn":435,"./uz-latn.js":435,"./uz.js":434,"./vi":436,"./vi.js":436,"./x-pseudo":437,"./x-pseudo.js":437,"./yo":438,"./yo.js":438,"./zh-cn":439,"./zh-cn.js":439,"./zh-hk":440,"./zh-hk.js":440,"./zh-mo":441,"./zh-mo.js":441,"./zh-tw":442,"./zh-tw.js":442};function a(t){var e=i(t);return s(e)}function i(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id=446},468:function(t,e,s){},502:function(t,e,s){"use strict";s(468)},518:function(t,e,s){"use strict";s.r(e);var n={components:{LineChart:s(443).default},data:function(){return{chartData:null,chartOptions:null}},mounted:function(){this.updateGraph()},methods:{updateGraph:function(){for(var t=document.getElementById("imax").value,e=[],s=[],n=0;n<=100;n++){var a=n/100*t;s.push({x:a,y:this.Q_HS_cond(a)}),e.push({x:a,y:this.Q_HS_cond(a)})}var i=[];for(n=0;n<=100;n++){a=n/100*t;i.push({x:a,y:this.Q_HS_sw(a)}),e[n].y+=this.Q_HS_sw(a)}var r=[];for(n=0;n<=100;n++){a=n/100*t;r.push({x:a,y:this.Q_LS_cond(a)}),e[n].y+=this.Q_LS_cond(a)}var l=[];for(n=0;n<=100;n++){a=n/100*t;l.push({x:a,y:this.Q_L(a)}),e[n].y+=this.Q_L(a)}var o=[];for(n=0;n<=100;n++){a=n/100*t;o.push({x:a,y:this.Q_driver(a)}),e[n].y+=this.Q_driver(a)}var u=[];for(n=0;n<=100;n++){a=n/100*t;u.push({x:a,y:this.eff(a,e[n].y)})}this.chartData={datasets:[{label:"Efficiency",yAxisID:"eff",pointRadius:0,borderWidth:2,borderColor:"#fbbe59",backgroundColor:"#fbbe59",fill:!1,data:u},{label:"Driver",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#6b6b6b",backgroundColor:"#6b6b6b",fill:!1,data:o},{label:"HS switching",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#005e85",backgroundColor:"#005e85",fill:!1,data:i},{label:"HS conduction",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#5c9aaf",backgroundColor:"#5c9aaf",fill:!1,data:s},{label:"LS conduction",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#d3d5cc",backgroundColor:"#d3d5cc",fill:!1,data:r},{label:"Inductor DC",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#262626",backgroundColor:"#262626",fill:!1,data:l}]},this.chartOptions={scales:{xAxes:[{type:"linear",display:!0,scaleLabel:{labelString:"Output current (A)",fontSize:14,display:!0},gridLines:{display:!0}}],yAxes:[{id:"loss",type:"linear",position:"right",display:!0,stacked:!0,scaleLabel:{labelString:"Total Losses (W)",fontSize:14,display:!0},ticks:{beginAtZero:!0},gridLines:{display:!1}},{id:"eff",type:"linear",position:"left",display:!0,scaleLabel:{labelString:"Efficiency (%)",fontSize:14,display:!0},ticks:{max:100,min:90},gridLines:{display:!0}}]},legend:{usePointStyle:!0,labels:{boxWidth:20}},tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!1}},Q_HS_cond:function(t){var e=document.getElementById("fsw").value,s=document.getElementById("rdson").value,n=document.getElementById("vin").value,a=document.getElementById("vout").value,i=a/n;document.getElementById("l").value;return s/1e3*(i*(Math.pow(t,2)+Math.pow(t,2)/12))},Q_HS_sw:function(t){var e=document.getElementById("vin").value;document.getElementById("vout").value,document.getElementById("rdson").value;return e*t/2*document.getElementById("fsw").value*1e3*40*1e-9},Q_LS_cond:function(t){var e=document.getElementById("vin").value,s=document.getElementById("vout").value,n=s/e,a=document.getElementById("rdson").value,i=document.getElementById("fsw").value,r=(e-s)*n/(1e3*i)/(1e-6*document.getElementById("l").value);return a/1e3*((1-n)*(Math.pow(t,2)+Math.pow(r,2)/12))+400*1e-9*i*1e3*.6*t},Q_L:function(t){var e=document.getElementById("vin").value,s=document.getElementById("vout").value,n=(e-s)*(s/e)/(1e3*document.getElementById("fsw").value)/(1e-6*document.getElementById("l").value);return document.getElementById("rl").value/1e3*(Math.pow(t,2)+Math.pow(n,2)/12)},Q_driver:function(t){return 8e-8*12*document.getElementById("fsw").value*1e3},eff:function(t,e){var s=document.getElementById("vout").value;return s*t/(s*t+e)*100}}},a=(s(502),s(17)),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{overflow:"auto"}},[s("line-chart",{attrs:{"chart-data":t.chartData,options:t.chartOptions}}),t._v(" "),s("p"),s("div",{staticClass:"left"},[t._v("Maximum output current:")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"imax",step:"1",value:"20",min:"5"},on:{change:function(e){return t.updateGraph()}}}),t._v(" A")]),t._v(" "),s("div",{staticClass:"left"},[t._v("Input voltage:")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"vin",step:"1",value:"30",min:"3"},on:{change:function(e){return t.updateGraph()}}}),t._v(" V")]),t._v(" "),s("div",{staticClass:"left"},[t._v("Output voltage: ")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"vout",step:"1",value:"14",min:"1"},on:{change:function(e){return t.updateGraph()}}}),t._v(" V")]),t._v(" "),s("div",{staticClass:"left"},[t._v("MOSFET Rds(on): ")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"rdson",step:"1",value:"3",min:"0"},on:{change:function(e){return t.updateGraph()}}}),t._v(" mΩ")]),t._v(" "),s("div",{staticClass:"left"},[t._v("Switching frequency: ")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"fsw",step:"10",value:"70",min:"10"},on:{change:function(e){return t.updateGraph()}}}),t._v(" kHz")]),t._v(" "),s("div",{staticClass:"left"},[t._v("Inductance: ")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"l",step:"5",value:"47",min:"1"},on:{change:function(e){return t.updateGraph()}}}),t._v(" µH")]),t._v(" "),s("div",{staticClass:"left"},[t._v("Inductor resistance: ")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"rl",step:"1",value:"5",min:"0"},on:{change:function(e){return t.updateGraph()}}}),t._v(" mΩ")]),t._v(" "),s("p")],1)}),[],!1,null,null,null);e.default=i.exports}}]);