(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"17f2":function(t,e,n){"use strict";var r=n("3bc2"),o=n.n(r);o.a},3909:function(t,e,n){},"3bc2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d"),n("db4d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Main")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",[n("Toolbar"),n("v-layout",{staticClass:"base",on:{scroll:t.scroll}},[n("v-flex",{staticClass:"nav",style:t.navStyles},[n("div",{staticClass:"name",style:t.nameStyles},[t._v("Michal Zakowski ")]),n("v-layout",{staticClass:"nav-list"},[n("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],staticClass:"nav-item nav-item__1"},[t._v("O mnie")]),n("button",{staticClass:"nav-item nav-item__2"},[t._v("Projekty")]),n("button",{staticClass:"nav-item nav-item__3"},[t._v("Kontakt")])]),n("div",{staticClass:"line",style:t.lineStyles}),n("v-img",{staticClass:"logo card-1",style:t.logoStyles,attrs:{src:t.img}})],1),n("LiveCoding"),n("v-flex",{staticClass:"about",attrs:{href:"#about",id:"about"}})],1)],1)},i=[],c=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),l=n("f93a"),p=n.n(l),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{staticClass:"live-code"},[n("v-flex",{staticClass:"code",style:t.style},[t._v("\n        "+t._s(t.text1)),n("span",{class:{cursor:!0,"cursor--invisible":this.cursor}},[t._v(" ")]),t._v(t._s(t.text2)+"\n    ")])],1)},f=[],v=n("2f62");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(n,!0).forEach(function(e){Object(c["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var y={name:"LiveCoding",data:function(){return{text1:"Web",text2:"developer...",moveArray:["1","1","1","F","r","o","n","t","e","n","d","0","0","0","0","1","1","1","1","1","1","1","1","N","o","d","e","J","S","0","0","0","0","0","1","1","1","1","1","1","W","e","b","0","0","0"],cursor:!0,delay:400}},computed:d({},Object(v["b"])("style",["pageY"]),{style:function(){return"margin-left: "+4*this.pageY+"px"}}),methods:{setCursor:function(){var t=this;setTimeout(function(){t.cursor=!t.cursor,t.setCursor()},500)},liveCode:function(t){var e=this;setTimeout(function(){e.delay=400;var n=e.moveArray[t];"1"===n?(e.text1=e.text1.slice(0,-1),e.delay=200):"0"!==n&&(e.text1=e.text1+n),e.liveCode(t!==e.moveArray.length-1?t+1:0)},Math.random()*this.delay)}},beforeMount:function(){this.setCursor(),this.liveCode(0)}},m=y,g=(n("95c6"),n("2877")),h=Object(g["a"])(m,u,f,!1,null,null,null),O=h.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.showNav,expression:"showNav"}],staticClass:"navbar"},[n("v-toolbar",{attrs:{dense:"",fixed:"",collapse:""}},[n("v-toolbar-title",[t._v("MZ")]),n("v-spacer"),t.$vuetify.breakpoint.mdAndUp?[n("v-btn",{attrs:{flat:""}},[t._v("\n                o mnie\n            ")]),n("v-btn",{attrs:{flat:""}},[t._v("\n                Projekty\n            ")]),n("v-btn",{attrs:{flat:""}},[t._v("\n                Kontakt\n            ")])]:[n("v-btn",{attrs:{flat:""}},[t._v("\n                o mnie\n            ")]),n("v-btn",{attrs:{flat:""}},[t._v("\n                Projessssskty\n            ")]),n("v-btn",{attrs:{flat:""}},[t._v("\n                Kontakt\n            ")])]],2)],1)},j=[];function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(n,!0).forEach(function(e){Object(c["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var x={name:"Toolbar",data:function(){return{windowHeight:window.innerHeight}},computed:P({},Object(v["b"])("style",["pageY"]),{showNav:function(){return this.windowHeight/2<this.pageY}})},Y=x,C=Object(g["a"])(Y,w,j,!1,null,null,null),S=C.exports;function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(n,!0).forEach(function(e){Object(c["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var D={name:"Home",data:function(){return{img:p.a}},components:{Toolbar:S,LiveCoding:O},computed:E({},Object(v["b"])("style",["pageY"]),{navStyles:function(){return this.pageY<400?"margin-top: -"+this.pageY+"px":"margin-top: -400px"},nameStyles:function(){return this.pageY>250?"opacity: "+(350-this.pageY)/100:this.pageY<250?"opacity: 1":"opacity: 0"},logoStyles:function(){return this.pageY>250?"margin-top: "+(350-this.pageY-90)+"vh":this.pageY<250?"":"margin-top: -1500px"},lineStyles:function(){return this.pageY>250?"background: #fff; height: "+(100-(350-this.pageY))+"px ; margin-top: -"+(100-(350-this.pageY))+"px; border-bottom: #000 3.4px solid; opacity: "+(1-(350-this.pageY)/100):this.pageY<350?"opacity: "+(250-this.pageY)/100:"opacity: "+(350-this.pageY)/100}}),methods:E({},Object(v["c"])("style",["UPDATE_PAGE_Y"]),{scroll:function(){this.UPDATE_PAGE_Y(window.scrollY)}}),created:function(){window.addEventListener("scroll",this.scroll)},destroyed:function(){window.removeEventListener("scroll",this.scroll)}},A=D,T=(n("17f2"),Object(g["a"])(A,s,i,!1,null,null,null)),M=T.exports,L={name:"App",components:{Main:M}},N=L,$=Object(g["a"])(N,o,a,!1,null,null,null),U=$.exports,G=n("8c4f");r["default"].use(G["a"]);var H=new G["a"]({mode:"history",base:"",routes:[{path:"/",name:"app",component:U}]}),J=n("ce5b"),K={state:{pageY:0,style:{marginLeft:0}},getters:{pageY:function(t){return t.pageY},style:function(t){return t.style}},mutations:{UPDATE_PAGE_Y:function(t,e){t.pageY=e,t.style.marginLeft=e}},actions:{updatePageY:function(t,e){var n=t.commit;n("UPDATE_PAGE_Y",e)}},namespaced:!0},W=K;r["default"].use(v["a"]);var Z=new v["a"].Store({modules:{style:W},strict:!1}),F=(n("bf40"),n("ecee")),q=n("ad3d"),z=n("c074"),B=n("b702"),I={checkboxOn:{component:q["a"],props:{icon:z["b"]}},checkboxOff:{component:q["a"],props:{icon:B["b"]}},menu:{component:q["a"],props:{icon:z["d"]}},actionList:{component:q["a"],props:{icon:z["h"]}},edit:{component:q["a"],props:{icon:z["c"]}},info:{component:q["a"],props:{icon:z["g"]}},folder:{component:q["a"],props:{icon:z["e"]}},checkCircle:{component:q["a"],props:{icon:B["a"]}},timeCircle:{component:q["a"],props:{icon:B["c"]}},gripLines:{component:q["a"],props:{icon:z["f"]}},angleDown:{component:q["a"],props:{icon:z["a"]}}},Q=n("f13c");r["default"].component("font-awesome-icon",q["a"]),F["c"].add(z["i"],B["d"]),r["default"].use(Q),r["default"].use(J,{icons:I}),new r["default"]({router:H,store:Z,render:function(t){return t(U)}}).$mount("#app")},"95c6":function(t,e,n){"use strict";var r=n("3909"),o=n.n(r);o.a},f93a:function(t,e,n){t.exports=n.p+"img/mike5.8f29a3ea.jpg"}});
//# sourceMappingURL=app.6272201a.js.map