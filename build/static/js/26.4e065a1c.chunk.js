(this.webpackJsonpfinal=this.webpackJsonpfinal||[]).push([[26],{116:function(e,t,n){"use strict";var a=n(88),c=n(0),o=n(327),r=n.n(o),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(a.a)(t,2),o=n[0],l=n[1],i=function(e){var t=null;t="object"===typeof e?r()(o,{$merge:e}):e,l(t)};return[o,i]};n.d(t,"a",(function(){return l}))},158:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return g}));var a=n(7),c=n(112),o=n.n(c),r=n(113),l=n(88),i=n(0),m=n.n(i),s=n(21),u=n.n(s),p=n(22),d=n(116),h=Object(i.createContext)(),g=function(e){var t=e.children,n=Object(d.a)({loading:!0,isActive:[1,0,0,0,0],mp3data:[]}),c=Object(l.a)(n,2),s=c[0],g=c[1];if(Object(i.useEffect)((function(){(function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()("http://103.74.122.136:8086/api/v1/voices",{token:"McTUDABy8FZYbKwC00OTIweLZwYWgy55"});case 2:t=e.sent,g({loading:!1,mp3data:t.data.voices});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),s.loading)return m.a.createElement(p.b,null);var f=Object(a.a)({},s,{setPreloaderState:g});return m.a.createElement(h.Provider,{value:f},t)}},209:function(e,t){e.exports="data:image/png;base64,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"},237:function(e,t,n){e.exports=n.p+"static/media/img_doitac5.f35e57f7.svg"},238:function(e,t,n){e.exports=n.p+"static/media/dt1.48b0cbf0.png"},239:function(e,t,n){e.exports=n.p+"static/media/dt2.18b3536e.png"},240:function(e,t,n){e.exports=n.p+"static/media/dt3.ab33893c.png"},241:function(e,t,n){e.exports=n.p+"static/media/dt4.f3950ba8.png"},242:function(e,t,n){e.exports=n.p+"static/media/dt5.d14fb0ce.png"},310:function(e,t,n){e.exports=n.p+"static/media/homepage_banner.44871f7d.svg"},311:function(e,t,n){e.exports=n.p+"static/media/homepage_banner.3bacaab8.png"},312:function(e,t,n){e.exports=n.p+"static/media/00.03ab3699.png"},314:function(e,t,n){e.exports=n.p+"static/media/uk.0c8987c5.svg"},315:function(e,t,n){e.exports=n.p+"static/media/vietnam.fa2d1147.svg"},316:function(e,t,n){e.exports=n.p+"static/media/giaiphap1_banner.602c2228.png"},317:function(e,t,n){e.exports=n.p+"static/media/so1_pc.03844858.png"},318:function(e,t,n){e.exports=n.p+"static/media/mb2_so2.b517145e.png"},319:function(e,t,n){e.exports=n.p+"static/media/giaiphap2_banner.f8ba0e70.png"},320:function(e,t,n){e.exports=n.p+"static/media/sanpham_banner.12086696.png"},321:function(e,t,n){e.exports=n.p+"static/media/mb_pro.8cb8b02f.png"},322:function(e,t,n){e.exports=n.p+"static/media/contact_banner.9bc82491.png"},323:function(e,t,n){e.exports=n.p+"static/media/mb_con.c0c11465.png"},324:function(e,t,n){e.exports=n.p+"static/media/logo_click.403d61f3.png"},325:function(e,t,n){var a={"./404":[159,9,7,6],"./404/":[159,9,7,6],"./404/index":[159,9,7,6],"./404/index.js":[159,9,7,6],"./Contact":[160,9,5],"./Contact/":[160,9,5],"./Contact/Contact":[137,9,20],"./Contact/Contact.js":[137,9,20],"./Contact/index":[160,9,5],"./Contact/index.js":[160,9,5],"./Home":[161,9,3],"./Home/":[161,9,3],"./Home/Home":[138,9,10],"./Home/Home.js":[138,9,10],"./Home/components/MCare":[130,9,18],"./Home/components/MCare.js":[130,9,18],"./Home/components/Solution":[128,9,16],"./Home/components/Solution.js":[128,9,16],"./Home/components/Solution2":[129,9,19],"./Home/components/Solution2.js":[129,9,19],"./Home/index":[161,9,3],"./Home/index.js":[161,9,3],"./Product":[162,9,4],"./Product/":[162,9,4],"./Product/Product":[147,9,11],"./Product/Product.js":[147,9,11],"./Product/index":[162,9,4],"./Product/index.js":[162,9,4],"./Solution1":[163,9,1],"./Solution1/":[163,9,1],"./Solution1/Player":[228,7,21],"./Solution1/Player.js":[228,7,21],"./Solution1/Solution1":[144,9,8],"./Solution1/Solution1.js":[144,9,8],"./Solution1/SpeechRecognationContainer":[131,9,12],"./Solution1/SpeechRecognationContainer.js":[131,9,12],"./Solution1/SpeechRecognition":[104,9,17],"./Solution1/SpeechRecognition.js":[104,9,17],"./Solution1/WebSocket":[115,9,14],"./Solution1/WebSocket.js":[115,9,14],"./Solution1/index":[163,9,1],"./Solution1/index.js":[163,9,1],"./Solution2":[165,9,0,2],"./Solution2/":[165,9,0,2],"./Solution2/Solution2":[145,9,0,9],"./Solution2/Solution2.js":[145,9,0,9],"./Solution2/components/SpeechSynthesis":[114,9,0,15],"./Solution2/components/SpeechSynthesis.js":[114,9,0,15],"./Solution2/components/SpeechSynthesisContainer":[132,9,0,13],"./Solution2/components/SpeechSynthesisContainer.js":[132,9,0,13],"./Solution2/index":[165,9,0,2],"./Solution2/index.js":[165,9,0,2]};function c(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],c=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(c,t[1])}))}c.keys=function(){return Object.keys(a)},c.id=325,e.exports=c},352:function(e,t,n){"use strict";n.r(t);var a=n(14),c=n(0),o=n.n(c),r=n(90),l=n(208),i=n(4),m=n(2),s=n(209),u=n.n(s);function p(){var e=Object(i.a)(["\n  background-color: #035177;\n  padding: 1.2rem;\n  color: white;\n  font-size: 15px;\n  font-family: 'Muli', sans-serif;\n"]);return p=function(){return e},e}function d(){var e=Object(i.a)(["\n  font-weight: bold;\n  font-size: 15px;\n"]);return d=function(){return e},e}function h(){var e=Object(i.a)(["\n  margin-bottom: ",";\n  font-size: 15px;\n  list-style-type: none;\n"]);return h=function(){return e},e}function g(){var e=Object(i.a)([""]);return g=function(){return e},e}function f(){var e=Object(i.a)(["\n  margin-top: 4rem;\n  color: #a0feea;\n  font-weight: 400;\n  font-size: 2rem;\n"]);return f=function(){return e},e}function v(){var e=Object(i.a)(["\n  margin-top: ",";\n"]);return v=function(){return e},e}function E(){var e=Object(i.a)(["\n  margin-bottom: 2.5rem;\n"]);return E=function(){return e},e}function b(){var e=Object(i.a)(["\n  color: #a0feea;\n  font-weight: 400;\n  margin-bottom: 1.2rem;\n  font-size: 18px;\n"]);return b=function(){return e},e}function N(){var e=Object(i.a)([""]);return N=function(){return e},e}function A(){var e=Object(i.a)(["\n  padding-top: 4.5rem;\n  padding-bottom: 3rem;\n  // line-height: 1.5rem;\n"]);return A=function(){return e},e}function k(){var e=Object(i.a)(["\n  color: #ffffff;\n"]);return k=function(){return e},e}function S(){var e=Object(i.a)(["\n  background-color: #05638f;\n"]);return S=function(){return e},e}var j=function(){return o.a.createElement(x,null,o.a.createElement(O,{className:"container"},o.a.createElement(w,{className:"row"},o.a.createElement(y,{className:"col-lg-3 col-md-3 order-4 order-md-1 "},o.a.createElement(H,null,o.a.createElement("img",{src:u.a,alt:""})),o.a.createElement(D,{noSpace:!0},o.a.createElement(C,null,"C\xf4ng ty c\u1ed5 ph\u1ea7n Gi\u1ea3i ph\xe1p tr\xed tu\u1ec7 nh\xe2n t\u1ea1o AISOL"),o.a.createElement(T,null,o.a.createElement(Z,{noSpace:!0},o.a.createElement(B,{className:"footer-primary-color"},"\u0110\u1ecba ch\u1ec9:")," ",o.a.createElement(B,null,"S\u1ed1 99, TT7.2, Khu t\xe1i \u0111\u1ecbnh c\u01b0 Ph\xfa Di\u1ec5n, Nam T\u1eeb Li\xeam, H\xe0 N\u1ed9i")),o.a.createElement(Z,{noSpace:!0},o.a.createElement(B,{className:"footer-primary-color"},"\u0110i\u1ec7n tho\u1ea1i:")," ",o.a.createElement(B,null,"0912.345.678")),o.a.createElement(Z,null,o.a.createElement(B,{className:"footer-primary-color"},"Email:")," ",o.a.createElement(B,null,"info@aisol.com.vn"))))),o.a.createElement(y,{className:"col-lg-3 col-md-3 order-1 order-md-2"},o.a.createElement(H,null,o.a.createElement(I,null,"Gi\u1ea3i ph\xe1p c\u1ee7a ch\xfang t\xf4i")),o.a.createElement(D,null,o.a.createElement(T,null,o.a.createElement(Z,null,"Nh\u1eadn d\u1ea1ng ti\u1ebfng n\xf3i"),o.a.createElement(Z,null,"T\u1ed5ng h\u1ee3p ti\u1ebfng n\xf3i")))),o.a.createElement(y,{className:"col-lg-3 col-md-3 order-2 order-md-3"},o.a.createElement(H,null,o.a.createElement(I,null,"S\u1ea3n ph\u1ea9m")),o.a.createElement(D,null,o.a.createElement(T,null,o.a.createElement(Z,null,"M-Care")))),o.a.createElement(y,{className:"col-lg-3 col-md-3 order-3 order-md-4"},o.a.createElement(H,null,o.a.createElement(I,null,"T\xe0i li\u1ec7u k\u1ef9 thu\u1eadt")),o.a.createElement(D,null,o.a.createElement(T,null,o.a.createElement(Z,null,"Nh\u1eadn d\u1ea1ng ti\u1ebfng n\xf3i"),o.a.createElement(Z,null,"T\u1ed5ng h\u1ee3p ti\u1ebfng n\xf3i"),o.a.createElement(Z,null,"M-Care")))))),o.a.createElement(L,{className:"text-center"},"Copyright 2020 AISOL"))},x=m.default.div(S()),O=m.default.div(k()),w=m.default.div(A()),y=m.default.div(N()),C=m.default.h2(b()),H=m.default.div(E()),D=m.default.div(v(),(function(e){return e.noSpace?"0px":"4rem"})),I=m.default.h2(f()),T=m.default.ul(g()),Z=m.default.li(h(),(function(e){return e.noSpace?"0.8rem":"2rem"})),B=m.default.span(d()),L=m.default.div(p()),X=n(236),R=n.n(X),W=(n(237),n(238)),q=n.n(W),V=n(239),K=n.n(V),G=n(240),P=n.n(G),Q=n(241),M=n.n(Q),U=n(242),J=n.n(U),z=function(){return o.a.createElement("section",{className:"partner margin-bottom-large"},o.a.createElement("h1",{className:"partner__heading margin-bottom-mediu"},"\u0110\u1ed1i t\xe1c"),o.a.createElement(R.a,Object.assign({},{loop:!0,center:!0,margin:20,dots:!1,autoplay:!0,responsive:{0:{items:3},768:{items:3},1170:{items:6}}},{className:"owl-theme container",loop:!0,margin:10,nav:!0,key:"owl-carousel-".concat(Math.random())}),o.a.createElement("img",{src:q.a,alt:""}),o.a.createElement("img",{src:K.a,alt:""}),o.a.createElement("img",{src:P.a,alt:""}),o.a.createElement("img",{src:M.a,alt:""}),o.a.createElement("img",{src:J.a,alt:""})))},F=n(22),Y=n(88),_=n(243),$=n.n(_),ee=n(355),te=n(353),ne=n(146);function ae(){var e=Object(i.a)(["\n  padding: 1rem 2rem;\n"]);return ae=function(){return e},e}var ce=function(e){var t=e.options,n=void 0===t?[]:t,a=e.isLink,l=void 0!==a&&a,i=e.children,m=e.className,s=e.onClick,u=void 0!==s&&s,p=Object(c.useState)([n[0]]),d=Object(Y.a)(p,2),h=d[0],g=d[1],f=o.a.createElement(ee.a,{onClick:function(e){var t=e.key;g(n[t])}},l?n.map((function(e,t){var n=e.to,a=e.content;return o.a.createElement(oe,{key:t},o.a.createElement(r.b,{to:n},a))})):n.map((function(e,t){return o.a.createElement(ee.a.Item,{key:t},e)})));return o.a.createElement(te.a,{className:m,overlay:f,onClick:u},l?i:o.a.createElement(r.b,{className:"ant-dropdown-link"},h," ",o.a.createElement(ne.a,{type:"down"})))},oe=Object(m.default)(ee.a.Item)(ae()),re=n(93),le=n(310),ie=n.n(le);function me(){var e=Object(i.a)(["\n  position: relative;\n"]);return me=function(){return e},e}var se=function(e){var t=e.title,n=e.content,a=e.subcontent,c=void 0!==a&&a,r=e.button,l=void 0!==r&&r,i=e.image,m=e.image2,s=e.classCss,u=e.classNameImg1,p=e.classNameImg2;return o.a.createElement("div",{className:"".concat(s," home-carousel")},o.a.createElement(ue,null,o.a.createElement("img",{className:"".concat(u," d-block"),src:i||ie.a,alt:"First slide"}),o.a.createElement("img",{className:"".concat(p," d-none"),src:m||ie.a,alt:"First slide"}),o.a.createElement("div",{className:" home-carousel__item home-banner-carousel"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-10 col-lg-6  d-flex flex-column align-items-start banner_hei"},o.a.createElement("h1",{className:"heading-big margin-bottom-small home-carousel__heading banner-title"},t),o.a.createElement("h3",{className:"text-white home-carousel__description margin-bottom-small banner-description"},n,o.a.createElement("br",null),c),l&&o.a.createElement(re.a,{text:"Tr\u1ea3i nghi\u1ec7m ngay",className:"btn btn--yellow btn_ye",buttonCustom:"button_bann",textCustom:"yellow_so1"}))))))},ue=m.default.div(me()),pe=n(348),de=n(311),he=n.n(de),ge=n(312),fe=n.n(ge);function ve(){var e=Object(i.a)(["\n \n  font-weight: 700;\n  font-style: italic;\n"]);return ve=function(){return e},e}function Ee(){var e=Object(i.a)(["\n  margin-bottom: 0 !important;\n"]);return Ee=function(){return e},e}var be=function(){var e=Object(c.useState)(0),t=Object(Y.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),l=Object(Y.a)(r,2),i=l[0],m=l[1],s=[{image:he.a,title:"Vietnam AI Solutions",subtitle:"Gi\u1ea3i ph\xe1p tr\xed tu\u1ec7 nh\xe2n t\u1ea1o cho Vi\u1ec7t Nam",content:"Cung c\u1ea5p gi\u1ea3i ph\xe1p th\xf4ng minh cho c\xe1c doanh nghi\u1ec7p trong th\u1eddi k\u1ef3 chuy\u1ec3n \u0111\u1ed5i s\u1ed5 T\u1eadp h\u1ee3p c\xe1c gi\u1ea3i ph\xe1p v\xe0 s\u1ea3n ph\u1ea9m tr\xed tu\u1ec7 nh\xe2n t\u1ea1o \u0111\u01b0\u1ee3c ph\xe1t tri\u1ec3n b\u1edfi c\xe1c chuy\xean gia h\xe0ng \u0111\u1ea7u Vi\u1ec7t Nam"},{image:he.a,title:"Vietnam AI Solutions",subtitle:"Gi\u1ea3i ph\xe1p tr\xed tu\u1ec7 nh\xe2n t\u1ea1o cho Vi\u1ec7t Nam",content:"Cung c\u1ea5p gi\u1ea3i ph\xe1p th\xf4ng minh cho c\xe1c doanh nghi\u1ec7p trong th\u1eddi k\u1ef3 chuy\u1ec3n \u0111\u1ed5i s\u1ed5 T\u1eadp h\u1ee3p c\xe1c gi\u1ea3i ph\xe1p v\xe0 s\u1ea3n ph\u1ea9m tr\xed tu\u1ec7 nh\xe2n t\u1ea1o \u0111\u01b0\u1ee3c ph\xe1t tri\u1ec3n b\u1edfi c\xe1c chuy\xean gia h\xe0ng \u0111\u1ea7u Vi\u1ec7t Nam"},{image:he.a,title:"Vietnam AI Solutions",subtitle:"Gi\u1ea3i ph\xe1p tr\xed tu\u1ec7 nh\xe2n t\u1ea1o cho Vi\u1ec7t Nam",content:"Cung c\u1ea5p gi\u1ea3i ph\xe1p th\xf4ng minh cho c\xe1c doanh nghi\u1ec7p trong th\u1eddi k\u1ef3 chuy\u1ec3n \u0111\u1ed5i s\u1ed5 T\u1eadp h\u1ee3p c\xe1c gi\u1ea3i ph\xe1p v\xe0 s\u1ea3n ph\u1ea9m tr\xed tu\u1ec7 nh\xe2n t\u1ea1o \u0111\u01b0\u1ee3c ph\xe1t tri\u1ec3n b\u1edfi c\xe1c chuy\xean gia h\xe0ng \u0111\u1ea7u Vi\u1ec7t Nam"}];return o.a.createElement(pe.a,{activeIndex:n,direction:i,onSelect:function(e,t){a(e),m(t.direction)},className:"home-carousel"},s.map((function(e){var t=e.image,n=e.title,a=e.subtitle,c=e.content;return o.a.createElement(pe.a.Item,null,o.a.createElement("img",{className:"d-block pc-block",src:t,alt:"First slide"}),o.a.createElement("img",{className:"mb-block",src:fe.a,alt:"First slide"}),o.a.createElement("div",{className:"home-carousel__item"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 d-flex flex-column "},o.a.createElement(Ne,{className:"heading-big margin-bottom-small home-carousel__heading"},n),o.a.createElement(Ae,{className:"text-white "},a),o.a.createElement("h3",{className:"text-white home-carousel__description margin-bottom-small"},c)))))})))},Ne=m.default.h1(Ee()),Ae=m.default.h2(ve()),ke=n(314),Se=n.n(ke),je=n(315),xe=n.n(je),Oe=n(316),we=n.n(Oe),ye=n(317),Ce=n.n(ye),He=n(318),De=n.n(He),Ie=n(319),Te=n.n(Ie),Ze=n(320),Be=n.n(Ze),Le=n(321),Xe=n.n(Le),Re=n(322),We=n.n(Re),qe=n(323),Ve=n.n(qe);function Ke(){var e=Object(i.a)(["\n  width: 26px;\n  height: 18px;\n"]);return Ke=function(){return e},e}function Ge(){var e=Object(i.a)(["\n  padding-top: 2.3rem;\n"]);return Ge=function(){return e},e}var Pe=m.default.section(Ge()),Qe=m.default.img(Ke()),Me=function(){var e=function(e){var t=e.classCss;return o.a.createElement("div",{className:"".concat(t," btn-group langg")},o.a.createElement("a",{className:"dropdown-toggle dropdown-btn","data-toggle":"dropdown",href:"#"},o.a.createElement(Qe,{src:Se.a,alt:"eng flag"})," ENG"," ",o.a.createElement("span",{className:"caret"})),o.a.createElement("ul",{className:"dropdown-menu"},o.a.createElement("li",{className:"dropdown-item"},o.a.createElement("a",{href:"javascript:void(0);"},o.a.createElement(Qe,{src:Se.a,alt:"flag"})," ENG")),o.a.createElement("li",{className:"dropdown-item"},o.a.createElement("a",{href:"javascript:void(0);"},o.a.createElement(Qe,{src:xe.a,alt:"flag"})," VIE"))))},t=Object(l.h)().pathname,a=Object(l.g)(),i=function(e){a.push("/".concat(e))};Object(c.useEffect)((function(){$()(".dropdown-menu li a").click((function(){var e=$()(this).text(),t='<StyledFlag src="'+$()(this).find("img").attr("src")+'"/>';$()(this).parents(".btn-group").find(".dropdown-toggle").html(t+" "+e+' <span class="caret"></span>')}))}));var m="";return m="/solution1.html"===t?"solution1-color":"/solution2.html"===t?"solution2-color":"/product.html"===t?"product-color":"/contact.html"===t?"contact-color":"homepage-color",o.a.createElement(o.a.Fragment,null,o.a.createElement(Pe,{className:"".concat(m," headernav")},o.a.createElement("div",{className:"nav-wrapper"},o.a.createElement("nav",{className:"nav"},o.a.createElement("div",{className:"nav__logo"},o.a.createElement("img",{src:n(209),alt:""})),o.a.createElement("ul",{className:"nav__list"},o.a.createElement("li",{className:"nav__item"},o.a.createElement(r.b,{className:"nav__link",onClick:function(){return i("")}},"Trang ch\u1ee7")),o.a.createElement("li",{className:"nav__item"},o.a.createElement(ce,{isLink:!0,options:[{to:"/solution1.html",content:"Nh\u1eadn d\u1ea1ng ti\u1ebfng n\xf3i"},{to:"/solution2.html",content:"T\u1ed5ng h\u1ee3p ti\u1ebfng n\xf3i"}]},o.a.createElement(r.b,{className:"nav__link"},"Gi\u1ea3i ph\xe1p"))),o.a.createElement("li",{className:"nav__item"},o.a.createElement(r.b,{className:"nav__link",onClick:function(){return i("product.html")}},"S\u1ea3n ph\u1ea9m")),o.a.createElement("li",{className:"nav__item"},o.a.createElement(r.b,{className:"nav__link",onClick:function(){return i("price.html")}},"B\u1ea3ng gi\xe1")),o.a.createElement("li",{className:"nav__item"},o.a.createElement(r.b,{className:"nav__link",onClick:function(){return i("contact.html")}},"Li\xean h\u1ec7")),o.a.createElement(e,null)))),o.a.createElement("input",{type:"checkbox",className:"nav__checkbox",name:"checkbox",id:"toggle-nav"}),o.a.createElement("label",{htmlFor:"toggle-nav",className:"nav__toggle-btn"},o.a.createElement("p",{className:"nav__icon"}),o.a.createElement("p",{className:"nav__icon"}),o.a.createElement("p",{className:"nav__icon"})),o.a.createElement("nav",{className:"nav-small"},o.a.createElement("div",{className:"nav__logo2"},o.a.createElement("img",{src:n(324),alt:"",className:"logo2"})),o.a.createElement("ul",{className:"nav-small__list"},o.a.createElement("li",{className:"nav-small__item"},o.a.createElement(r.b,{className:"nav-small__link",onClick:function(){return i("")}},"Trang ch\u1ee7")),o.a.createElement("li",{className:"nav-small__item"},o.a.createElement(r.b,{className:"nav-small__link",onClick:function(){return i("solution1.html")}},"Nh\u1eadn d\u1ea1ng ti\u1ebfng n\xf3i")),o.a.createElement("li",{className:"nav-small__item"},o.a.createElement(r.b,{className:"nav-small__link",onClick:function(){return i("solution2.html")}},"T\u1ed5ng h\u1ee3p ti\u1ebfng n\xf3i")),o.a.createElement("li",{className:"nav-small__item"},o.a.createElement(r.b,{className:"nav-small__link",onClick:function(){return i("product.html")}},"S\u1ea3n ph\u1ea9m")),o.a.createElement("li",{className:"nav-small__item"},o.a.createElement(r.b,{className:"nav-small__link",onClick:function(){return i("price.html")}},"B\u1ea3ng gi\xe1")),o.a.createElement("li",{className:"nav-small__item"},o.a.createElement(r.b,{className:"nav-small__link",onClick:function(){return i("contact.html")}},"Li\xean h\u1ec7")),o.a.createElement("li",null,o.a.createElement(e,{classCss:"nav-bar-small"}))))),function(e){switch(e){case"/solution1.html":return o.a.createElement(se,{title:"NH\u1eacN D\u1ea0NG TI\u1ebeNG N\xd3I",content:"Gi\u1ea3i ph\xe1p t\u1ef1 \u0111\u1ed9ng chuy\u1ec3n \u0111\u1ed5i ti\u1ebfng n\xf3i th\xe0nh v\u0103n b\u1ea3n Ti\u1ebfng Vi\u1ec7t, \u0111\u1ea1t \u0111\u1ed9 ch\xednh x\xe1c l\xean t\u1edbi 96% v\xe0 nh\u1eadn d\u1ea1ng \u0111\u01b0\u1ee3c t\u1ea5t c\u1ea3 m\xf4i tr\u01b0\u1eddng",subcontent:"\u1ee8ng d\u1ee5ng m\u1ea1nh m\u1ebd trong tr\u1ee3 l\xfd \u1ea3o, ph\xf2ng h\u1ecdp",button:!0,image:we.a,image2:Ce.a,classNameImg1:" so_pc",classNameImg2:"so_mb",classCss:"bg_so1"});case"/solution2.html":return o.a.createElement(se,{title:"T\u1ed4NG H\u1ee2P TI\u1ebeNG N\xd3I",content:"Gi\u1ea3i ph\xe1p t\u1ef1 \u0111\u1ed9ng chuy\u1ec3n \u0111\u1ed5i v\u0103n b\u1ea3n th\xe0nh ti\u1ebfng n\xf3i Ti\u1ebfng Vi\u1ec7t v\u1edbi gi\u1ecdng \u0111i\u1ec7u t\u1ef1 nhi\xean, hay v\xe0 d\u1ec5 d\xe0ng t\xedch h\u1ee3p v\u1edbi m\u1ecdi h\u1ec7 th\u1ed1ng",button:!0,image:Te.a,image2:De.a,classNameImg1:"so2_pc",classNameImg2:"so2_mb",classCss:"bg_so2"});case"/product.html":return o.a.createElement(se,{title:"MCare",content:"M-Care l\xe0 gi\u1ea3i ph\xe1p s\u1eed d\u1ee5ng c\xf4ng ngh\u1ec7 chuy\u1ec3n \u0111\u1ed5i \xe2m thanh th\xe0nh d\u1ea1ng ch\u1eef v\u0103n b\u1ea3n (Voice to Text) gi\xfap d\u1ec5 d\xe0ng v\xe0 thu\u1eadn ti\u1ec7n h\u01a1n trong vi\u1ec7c gi\xe1m s\xe1t n\u1ed9i dung c\xe1c cu\u1ed9c g\u1ecdi gi\u1eefa kh\xe1ch h\xe0ng v\xe0 nh\xe0 cung c\u1ea5p d\u1ecbch v\u1ee5/ s\u1ea3n ph\u1ea9m",button:!0,image:Be.a,image2:Xe.a,classNameImg1:"pro_pc",classNameImg2:"pro_mb"});case"/contact.html":return o.a.createElement(se,{title:"Li\xean h\u1ec7 v\u1edbi AISOL",content:"Li\xean h\u1ec7 v\u1edbi Ch\xfang t\xf4i \u0111\u1ec3 \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 v\xe0 tr\u1ea3i nghi\u1ec7m c\xe1c s\u1ea3n ph\u1ea9m - gi\u1ea3i ph\xe1p t\u1ed1t nh\u1ea5t t\u1ea1i th\u1ecb tr\u01b0\u1eddng Vi\u1ec7t Nam ng\xe0y nay",image:We.a,image2:Ve.a,classNameImg1:"con_pc",classNameImg2:"con_mb"});default:return o.a.createElement(be,null)}}(t))},Ue=function(){var e=Object(c.useRef)(),t=Object(c.useState)(!1),n=Object(Y.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){var t=function(){var t=window.scrollY;e.current<t&&a&&r(!1),e.current>t&&!a&&r(!0),e.current=t,console.log(a,t)};return window.addEventListener("scroll",t,{passive:!0}),function(){return window.removeEventListener("scroll",t)}}),[a]),o.a.createElement(Me,null)};function Je(){var e=Object(i.a)(["\n  //   display: flex;\n  //   flex-direction: row;\n  //   max-width: 100%;\n  //   width: 100%;\n  //   height: 100%;\n"]);return Je=function(){return e},e}var ze=function(e){e.title;var t=e.children;return o.a.createElement(Ye,null,o.a.createElement(F.a,null,o.a.createElement(Ue,null),o.a.createElement("div",{id:"main-page"},t),o.a.createElement(z,null),o.a.createElement(j,null)))},Fe=function(e,t){return function(n){return o.a.createElement(ze,Object.assign({},t,{match:n.match}),o.a.createElement(e,n))}},Ye=m.default.div(Je()),_e=function(e){e.children;var t=e.exact,n=e.path;return o.a.createElement(l.b,{exact:t,path:n,render:function(){return o.a.createElement(l.a,{to:"/login"})}})};_e.defaultProps={children:{},exact:!1,path:"/"};var $e=n(28),et=Object($e.a)((function(e){return n(325)("./".concat(e.component))}),{fallback:F.b}),tt=[{path:"/",exact:!0,component:function(){return o.a.createElement(et,{component:"Home"})},title:"Homepage"},{path:"/solution1.html",exact:!0,component:function(){return o.a.createElement(et,{component:"Solution1"})},title:"Solution"},{path:"/solution2.html",exact:!0,component:function(){return o.a.createElement(et,{component:"Solution2"})},title:"Solution"},{path:"/contact.html",exact:!0,component:function(){return o.a.createElement(et,{component:"Contact"})},title:"Contact"},{path:"/product.html",exact:!0,component:function(){return o.a.createElement(et,{component:"Product"})},title:"Products"},{path:"/404.html",exact:!0,component:function(){return o.a.createElement(et,{component:"404"})}}],nt=n(158);t.default=function(){return o.a.createElement(r.a,null,o.a.createElement(nt.a,null,o.a.createElement(l.d,null,tt.map((function(e,t){switch(!0){case e.redirect:e.redirect;var n=Object(a.a)(e,["redirect"]);return o.a.createElement(l.a,Object.assign({key:t},n));case e.isPrivate:var c=e.path,r=e.exact,i=void 0!==r&&r,m=e.title,s=void 0!==m&&m,u=e.component;return o.a.createElement(_e,{key:t,path:c,exact:i,component:Fe(u,{title:s})});default:var p=e.path,d=e.exact,h=void 0!==d&&d,g=e.title,f=void 0!==g&&g,v=e.component;return o.a.createElement(l.b,{key:t,path:p,exact:h,component:Fe(v,{title:f})})}})),o.a.createElement(l.a,{to:"/404.html"}))))}},93:function(e,t,n){"use strict";var a=n(4),c=n(0),o=n.n(c),r=n(2);function l(){var e=Object(a.a)([""]);return l=function(){return e},e}function i(){var e=Object(a.a)(["\n  margin: 0;\n  color: white;\n  font-size: 18px;\n"]);return i=function(){return e},e}function m(){var e=Object(a.a)(["\n  margin-left: ",";\n"]);return m=function(){return e},e}t.a=function(e){var t=e.icon,n=e.text,a=e.className,c=void 0===a?"btn--green":a,r=e.isMarginLeft,l=void 0!==r&&r,i=e.buttonCustom,m=e.textCustom,d=e.onClick;return o.a.createElement(s,{className:"btn ".concat(c),isMarginLeft:l,onClick:d},o.a.createElement(p,{className:"".concat(i," row align-items-center")},t&&o.a.createElement("img",{src:t}),o.a.createElement(u,{className:"".concat(m)},n)))};var s=r.default.button(m(),(function(e){return e.isMarginLeft?"15px":"0px"})),u=r.default.p(i()),p=r.default.div(l())}}]);
//# sourceMappingURL=26.4e065a1c.chunk.js.map