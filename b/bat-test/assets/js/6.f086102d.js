(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{158:function(t,e,s){"use strict";var n=s(208),a=n.b.reactiveProp;e.a={extends:n.a,mixins:[a],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},203:function(t,e,s){var n={"./af":27,"./af.js":27,"./ar":28,"./ar-dz":29,"./ar-dz.js":29,"./ar-kw":30,"./ar-kw.js":30,"./ar-ly":31,"./ar-ly.js":31,"./ar-ma":32,"./ar-ma.js":32,"./ar-sa":33,"./ar-sa.js":33,"./ar-tn":34,"./ar-tn.js":34,"./ar.js":28,"./az":35,"./az.js":35,"./be":36,"./be.js":36,"./bg":37,"./bg.js":37,"./bm":38,"./bm.js":38,"./bn":39,"./bn.js":39,"./bo":40,"./bo.js":40,"./br":41,"./br.js":41,"./bs":42,"./bs.js":42,"./ca":43,"./ca.js":43,"./cs":44,"./cs.js":44,"./cv":45,"./cv.js":45,"./cy":46,"./cy.js":46,"./da":47,"./da.js":47,"./de":48,"./de-at":49,"./de-at.js":49,"./de-ch":50,"./de-ch.js":50,"./de.js":48,"./dv":51,"./dv.js":51,"./el":52,"./el.js":52,"./en-SG":53,"./en-SG.js":53,"./en-au":54,"./en-au.js":54,"./en-ca":55,"./en-ca.js":55,"./en-gb":56,"./en-gb.js":56,"./en-ie":57,"./en-ie.js":57,"./en-il":58,"./en-il.js":58,"./en-nz":59,"./en-nz.js":59,"./eo":60,"./eo.js":60,"./es":61,"./es-do":62,"./es-do.js":62,"./es-us":63,"./es-us.js":63,"./es.js":61,"./et":64,"./et.js":64,"./eu":65,"./eu.js":65,"./fa":66,"./fa.js":66,"./fi":67,"./fi.js":67,"./fo":68,"./fo.js":68,"./fr":69,"./fr-ca":70,"./fr-ca.js":70,"./fr-ch":71,"./fr-ch.js":71,"./fr.js":69,"./fy":72,"./fy.js":72,"./ga":73,"./ga.js":73,"./gd":74,"./gd.js":74,"./gl":75,"./gl.js":75,"./gom-latn":76,"./gom-latn.js":76,"./gu":77,"./gu.js":77,"./he":78,"./he.js":78,"./hi":79,"./hi.js":79,"./hr":80,"./hr.js":80,"./hu":81,"./hu.js":81,"./hy-am":82,"./hy-am.js":82,"./id":83,"./id.js":83,"./is":84,"./is.js":84,"./it":85,"./it-ch":86,"./it-ch.js":86,"./it.js":85,"./ja":87,"./ja.js":87,"./jv":88,"./jv.js":88,"./ka":89,"./ka.js":89,"./kk":90,"./kk.js":90,"./km":91,"./km.js":91,"./kn":92,"./kn.js":92,"./ko":93,"./ko.js":93,"./ku":94,"./ku.js":94,"./ky":95,"./ky.js":95,"./lb":96,"./lb.js":96,"./lo":97,"./lo.js":97,"./lt":98,"./lt.js":98,"./lv":99,"./lv.js":99,"./me":100,"./me.js":100,"./mi":101,"./mi.js":101,"./mk":102,"./mk.js":102,"./ml":103,"./ml.js":103,"./mn":104,"./mn.js":104,"./mr":105,"./mr.js":105,"./ms":106,"./ms-my":107,"./ms-my.js":107,"./ms.js":106,"./mt":108,"./mt.js":108,"./my":109,"./my.js":109,"./nb":110,"./nb.js":110,"./ne":111,"./ne.js":111,"./nl":112,"./nl-be":113,"./nl-be.js":113,"./nl.js":112,"./nn":114,"./nn.js":114,"./pa-in":115,"./pa-in.js":115,"./pl":116,"./pl.js":116,"./pt":117,"./pt-br":118,"./pt-br.js":118,"./pt.js":117,"./ro":119,"./ro.js":119,"./ru":120,"./ru.js":120,"./sd":121,"./sd.js":121,"./se":122,"./se.js":122,"./si":123,"./si.js":123,"./sk":124,"./sk.js":124,"./sl":125,"./sl.js":125,"./sq":126,"./sq.js":126,"./sr":127,"./sr-cyrl":128,"./sr-cyrl.js":128,"./sr.js":127,"./ss":129,"./ss.js":129,"./sv":130,"./sv.js":130,"./sw":131,"./sw.js":131,"./ta":132,"./ta.js":132,"./te":133,"./te.js":133,"./tet":134,"./tet.js":134,"./tg":135,"./tg.js":135,"./th":136,"./th.js":136,"./tl-ph":137,"./tl-ph.js":137,"./tlh":138,"./tlh.js":138,"./tr":139,"./tr.js":139,"./tzl":140,"./tzl.js":140,"./tzm":141,"./tzm-latn":142,"./tzm-latn.js":142,"./tzm.js":141,"./ug-cn":143,"./ug-cn.js":143,"./uk":144,"./uk.js":144,"./ur":145,"./ur.js":145,"./uz":146,"./uz-latn":147,"./uz-latn.js":147,"./uz.js":146,"./vi":148,"./vi.js":148,"./x-pseudo":149,"./x-pseudo.js":149,"./yo":150,"./yo.js":150,"./zh-cn":151,"./zh-cn.js":151,"./zh-hk":152,"./zh-hk.js":152,"./zh-tw":153,"./zh-tw.js":153};function a(t){var e=i(t);return s(e)}function i(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id=203},205:function(t,e,s){},356:function(t,e,s){"use strict";var n=s(205);s.n(n).a},362:function(t,e,s){"use strict";s.r(e);var n={components:{LineChart:s(158).a},data:function(){return{chartData:null,chartOptions:null}},mounted:function(){this.updateGraph()},methods:{updateGraph:function(){for(var t=document.getElementById("imax").value,e=[],s=[],n=0;n<=100;n++){var a=n/100*t;s.push({x:a,y:this.Q_HS_cond(a)}),e.push({x:a,y:this.Q_HS_cond(a)})}var i=[];for(n=0;n<=100;n++){a=n/100*t;i.push({x:a,y:this.Q_HS_sw(a)}),e[n].y+=this.Q_HS_sw(a)}var r=[];for(n=0;n<=100;n++){a=n/100*t;r.push({x:a,y:this.Q_LS_cond(a)}),e[n].y+=this.Q_LS_cond(a)}var o=[];for(n=0;n<=100;n++){a=n/100*t;o.push({x:a,y:this.Q_L(a)}),e[n].y+=this.Q_L(a)}var l=[];for(n=0;n<=100;n++){a=n/100*t;l.push({x:a,y:this.Q_driver(a)}),e[n].y+=this.Q_driver(a)}var u=[];for(n=0;n<=100;n++){a=n/100*t;u.push({x:a,y:this.eff(a,e[n].y)})}this.chartData={datasets:[{label:"Efficiency",yAxisID:"eff",pointRadius:0,borderWidth:2,borderColor:"#fbbe59",backgroundColor:"#fbbe59",fill:!1,data:u},{label:"Driver",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#6b6b6b",backgroundColor:"#6b6b6b",fill:!1,data:l},{label:"HS switching",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#005e85",backgroundColor:"#005e85",fill:!1,data:i},{label:"HS conduction",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#5c9aaf",backgroundColor:"#5c9aaf",fill:!1,data:s},{label:"LS conduction",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#d3d5cc",backgroundColor:"#d3d5cc",fill:!1,data:r},{label:"Inductor DC",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#262626",backgroundColor:"#262626",fill:!1,data:o}]},this.chartOptions={scales:{xAxes:[{type:"linear",display:!0,scaleLabel:{labelString:"Output current (A)",fontSize:14,display:!0},gridLines:{display:!0}}],yAxes:[{id:"loss",type:"linear",position:"right",display:!0,stacked:!0,scaleLabel:{labelString:"Total Losses (W)",fontSize:14,display:!0},ticks:{beginAtZero:!0},gridLines:{display:!1}},{id:"eff",type:"linear",position:"left",display:!0,scaleLabel:{labelString:"Efficiency (%)",fontSize:14,display:!0},ticks:{max:100,min:90},gridLines:{display:!0}}]},legend:{usePointStyle:!0,labels:{boxWidth:20}},tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!1}},Q_HS_cond:function(t){var e=document.getElementById("fsw").value,s=document.getElementById("rdson").value,n=document.getElementById("vin").value,a=document.getElementById("vout").value,i=a/n;document.getElementById("l").value;return s/1e3*(i*(Math.pow(t,2)+Math.pow(t,2)/12))},Q_HS_sw:function(t){var e=document.getElementById("vin").value;document.getElementById("vout").value,document.getElementById("rdson").value;return e*t/2*document.getElementById("fsw").value*1e3*40*1e-9},Q_LS_cond:function(t){var e=document.getElementById("vin").value,s=document.getElementById("vout").value,n=s/e,a=document.getElementById("rdson").value,i=document.getElementById("fsw").value,r=(e-s)*n/(1e3*i)/(1e-6*document.getElementById("l").value);return a/1e3*((1-n)*(Math.pow(t,2)+Math.pow(r,2)/12))+400*1e-9*i*1e3*.6*t},Q_L:function(t){var e=document.getElementById("vin").value,s=document.getElementById("vout").value,n=(e-s)*(s/e)/(1e3*document.getElementById("fsw").value)/(1e-6*document.getElementById("l").value);return document.getElementById("rl").value/1e3*(Math.pow(t,2)+Math.pow(n,2)/12)},Q_driver:function(t){return 8e-8*12*document.getElementById("fsw").value*1e3},eff:function(t,e){var s=document.getElementById("vout").value;return s*t/(s*t+e)*100}}},a=(s(356),s(0)),i=Object(a.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{overflow:"auto"}},[s("line-chart",{attrs:{"chart-data":t.chartData,options:t.chartOptions}}),t._v(" "),s("p"),s("div",{staticClass:"left"},[t._v("Maximum output current:")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"imax",step:"1",value:"20",min:"5"},on:{change:function(e){return t.updateGraph()}}}),t._v(" A")]),t._v(" "),s("div",{staticClass:"left"},[t._v("Input voltage:")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"vin",step:"1",value:"30",min:"3"},on:{change:function(e){return t.updateGraph()}}}),t._v(" V")]),t._v(" "),s("div",{staticClass:"left"},[t._v("Output voltage: ")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"vout",step:"1",value:"14",min:"1"},on:{change:function(e){return t.updateGraph()}}}),t._v(" V")]),t._v(" "),s("div",{staticClass:"left"},[t._v("MOSFET Rds(on): ")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"rdson",step:"1",value:"3",min:"0"},on:{change:function(e){return t.updateGraph()}}}),t._v(" mΩ")]),t._v(" "),s("div",{staticClass:"left"},[t._v("Switching frequency: ")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"fsw",step:"10",value:"70",min:"10"},on:{change:function(e){return t.updateGraph()}}}),t._v(" kHz")]),t._v(" "),s("div",{staticClass:"left"},[t._v("Inductance: ")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"l",step:"5",value:"47",min:"1"},on:{change:function(e){return t.updateGraph()}}}),t._v(" µH")]),t._v(" "),s("div",{staticClass:"left"},[t._v("Inductor resistance: ")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"rl",step:"1",value:"5",min:"0"},on:{change:function(e){return t.updateGraph()}}}),t._v(" mΩ")]),t._v(" "),s("p")],1)},[],!1,null,null,null);e.default=i.exports}}]);