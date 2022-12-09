(function(t){function e(e){for(var s,o,i=e[0],l=e[1],u=e[2],f=0,h=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(h.length)h.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/portfolio/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=a("7496"),n=a("40dc"),o=a("8336"),i=a("132d"),l=a("adda"),u=a("f6c4"),c=a("2fa4"),f=function(){var t=this,e=t._self._c;return e(r["a"],[e(n["a"],{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e(l["a"],{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),e(l["a"],{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),e(c["a"]),e(o["a"],{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("Latest Release")]),e(i["a"],[t._v("mdi-open-in-new")])],1)],1),e(u["a"],[e("HelloWorld")],1)],1)},h=[],p=a("62ad"),d=a("a523"),m=a("0fd9"),y=function(){var t=this,e=t._self._c;return e(d["a"],[e(m["a"],{staticClass:"text-center"},[e(p["a"],{attrs:{cols:"12"}},[e(l["a"],{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),e(p["a"],{staticClass:"mb-4"},[e("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),e("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),e("br"),t._v("please join our online "),e("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),e(p["a"],{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),e(m["a"],{attrs:{justify:"center"}},t._l(t.whatsNext,(function(a,s){return e("a",{key:s,staticClass:"subheading mx-3",attrs:{href:a.href,target:"_blank"}},[t._v(" "+t._s(a.text)+" ")])})),0)],1),e(p["a"],{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),e(m["a"],{attrs:{justify:"center"}},t._l(t.importantLinks,(function(a,s){return e("a",{key:s,staticClass:"subheading mx-3",attrs:{href:a.href,target:"_blank"}},[t._v(" "+t._s(a.text)+" ")])})),0)],1),e(p["a"],{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),e(m["a"],{attrs:{justify:"center"}},t._l(t.ecosystem,(function(a,s){return e("a",{key:s,staticClass:"subheading mx-3",attrs:{href:a.href,target:"_blank"}},[t._v(" "+t._s(a.text)+" ")])})),0)],1)],1)],1)},v=[],b={name:"HelloWorld",data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},g=b,x=a("2877"),_=Object(x["a"])(g,y,v,!1,null,null,null),w=_.exports,j={name:"App",components:{HelloWorld:w},data:()=>({})},k=j,C=Object(x["a"])(k,f,h,!1,null,null,null),O=C.exports,P=a("f309");s["a"].use(P["a"]);var S=new P["a"]({});s["a"].config.productionTip=!1,new s["a"]({vuetify:S,render:t=>t(O)}).$mount("#app")},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.7ab606c5.js.map