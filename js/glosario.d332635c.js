(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["glosario","chunk-adbc4b64"],{"015a":function(t,n,r){},"13aa":function(t,n,r){"use strict";r.r(n);var a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"container-fluid banner-interno"},[r("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),r("div",{staticClass:"container"},[r("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?r("div",{staticClass:"banner-interno__titulo__icono me-3"},[r("i",{class:t.icono})]):t._e(),r("h1",{staticClass:"h3 mb-0"},[t._v(t._s(t.titulo))])])])])},e=[],i={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},o=i,c=(r("f6e3"),r("2877")),s=Object(c["a"])(o,a,e,!1,null,"79d8e128",null);n["default"]=s.exports},"13d5":function(t,n,r){"use strict";var a=r("23e7"),e=r("d58f").left,i=r("a640"),o=r("2d00"),c=r("605d"),s=i("reduce"),u=!c&&o>79&&o<83;a({target:"Array",proto:!0,forced:!s||u},{reduce:function(t){return e(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"159b":function(t,n,r){var a=r("da84"),e=r("fdbc"),i=r("17c2"),o=r("9112");for(var c in e){var s=a[c],u=s&&s.prototype;if(u&&u.forEach!==i)try{o(u,"forEach",i)}catch(l){u.forEach=i}}},"17c2":function(t,n,r){"use strict";var a=r("b727").forEach,e=r("a640"),i=e("forEach");t.exports=i?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"69a7":function(t,n,r){"use strict";r.r(n);var a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"curso-main-container glosario"},[r("BannerInterno",{attrs:{icono:"fas fa-atlas",titulo:"Glosario"}}),r("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},t._l(t.orderedData,(function(n){return r("div",{key:"letra-"+n.letra,staticClass:"glosario__letra-item mb-2"},[r("div",{staticClass:"glosario__letra-item__letra me-4"},[r("div",{staticClass:"glosario__letra-item__letra__icono"},[r("span",[t._v(t._s(n.letra))])])]),r("div",{staticClass:"glosario__letra-item__texto"},t._l(n.terminos,(function(n){return r("p",{staticClass:"mb-3"},[r("strong",[t._v("• "+t._s(n.termino)+": ")]),r("span",{domProps:{innerHTML:t._s(n.significado)}})])})),0)])})),0)],1)},e=[],i=r("2909"),o=(r("13d5"),r("b64b"),r("159b"),r("d81d"),r("7db0"),r("13aa")),c=r("ecc5"),s={name:"Glosario",components:{BannerInterno:o["default"]},mixins:[c["a"]],computed:{glosarioData:function(){return this.$config.glosario},orderedData:function(){var t=this,n=Object(i["a"])(this.glosarioData).reduce((function(n,r){var a=t.quitarAcentos(r.termino[0].toLowerCase());return n[a]?n[a].terminos.push(r):n[a]={letra:a,terminos:[r]},n}),{}),r=Object.keys(n).sort(),a=[];return r.forEach((function(t){var r=n[t],e=r.terminos;if(e.length>1){var i=[],o=r.terminos.map((function(t){return t.termino})).sort();o.forEach((function(t){i.push(e.find((function(n){return n.termino===t})))})),e=i}a.push({letra:r.letra.toUpperCase(),terminos:e})})),a}}},u=s,l=(r("7c88"),r("2877")),f=Object(l["a"])(u,a,e,!1,null,"a868e776",null);n["default"]=f.exports},"7c88":function(t,n,r){"use strict";r("015a")},"7db0":function(t,n,r){"use strict";var a=r("23e7"),e=r("b727").find,i=r("44d2"),o="find",c=!0;o in[]&&Array(1)[o]((function(){c=!1})),a({target:"Array",proto:!0,forced:c},{find:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)},"904b":function(t,n,r){},a640:function(t,n,r){"use strict";var a=r("d039");t.exports=function(t,n){var r=[][t];return!!r&&a((function(){r.call(null,n||function(){throw 1},1)}))}},b64b:function(t,n,r){var a=r("23e7"),e=r("7b0b"),i=r("df75"),o=r("d039"),c=o((function(){i(1)}));a({target:"Object",stat:!0,forced:c},{keys:function(t){return i(e(t))}})},d58f:function(t,n,r){var a=r("1c0b"),e=r("7b0b"),i=r("44ad"),o=r("50c4"),c=function(t){return function(n,r,c,s){a(r);var u=e(n),l=i(u),f=o(u.length),d=t?f-1:0,b=t?-1:1;if(c<2)while(1){if(d in l){s=l[d],d+=b;break}if(d+=b,t?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:f>d;d+=b)d in l&&(s=r(s,l[d],d,u));return s}};t.exports={left:c(!1),right:c(!0)}},d81d:function(t,n,r){"use strict";var a=r("23e7"),e=r("b727").map,i=r("1dde"),o=i("map");a({target:"Array",proto:!0,forced:!o},{map:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}})},f6e3:function(t,n,r){"use strict";r("904b")}}]);
//# sourceMappingURL=glosario.d332635c.js.map