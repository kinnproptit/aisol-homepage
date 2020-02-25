(this.webpackJsonpfinal=this.webpackJsonpfinal||[]).push([[12,13],{116:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(20),c=n.n(r),i=n(24),u=n(16),o=n(0),l=n.n(o),s=n(2),d=n(166),f=n.n(d),m=n(26),p=n(120),b=n.n(p),g=n(17),v=n.n(g),h=n(332),j=n(121),O=n.n(j),x=n(122),y=n.n(x),E=n(123),w=n.n(E),k=n(124),S=n.n(k),C=n(101),N=n(115),I=n(333),P=n(331),A=n(149),L=n(25);function T(){var e=Object(a.a)(["\n  width: 76%;\n"]);return T=function(){return e},e}function z(){var e=Object(a.a)(["\n  padding: 1rem 4rem;\n  border-radius: 0.8rem;\n  font-size: 1.8rem;\n  font-family: 'Muli', sans-serif;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  background: #b9ccc6;\n  color: #000000;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return z=function(){return e},e}function U(){var e=Object(a.a)(["\n  justify-content: center;\n  display: flex;\n  width: 100%;\n"]);return U=function(){return e},e}function Y(){var e=Object(a.a)(["\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  line-height: 30px;\n  padding: 0 5px;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #000;\n  font-weight: bold;\n  font-size: 16px;\n  box-sizing: border-box;\n  z-index: 1;\n"]);return Y=function(){return e},e}function D(){var e=Object(a.a)(["\n  position: absolute;\n  top: 0.5rem;\n  right: 1.5rem;\n  bottom: 0.5rem;\n  left: 1.5rem;\n  background: linear-gradient(transparent, transparent 29px, gray 29px);\n  background-size: 30px 30px;\n  opacity: 0.3;\n"]);return D=function(){return e},e}function G(){var e=Object(a.a)(["\n  height: 22rem;\n  width: 100%;\n  position: relative;\n  border-radius: 13px;\n  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.16);\n  background: white;\n"]);return G=function(){return e},e}function M(){var e=Object(a.a)(["\n  margin: 1rem;\n  align-items: center;\n"]);return M=function(){return e},e}function V(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-bottom: 1em;\n"]);return V=function(){return e},e}function _(){var e=Object(a.a)(["\n  font-family: 'Muli', san-serif;\n"]);return _=function(){return e},e}function J(){var e=Object(a.a)(["\n  margin: 0;\n  margin-right: 1rem;\n"]);return J=function(){return e},e}function Z(){var e=Object(a.a)(["\n  display: flex;\n  align-items: center;\n"]);return Z=function(){return e},e}function B(){var e=Object(a.a)(["\n  background-color: #178ce3;\n  padding: 1rem 4rem;\n  display: grid;\n  grid-template-columns: 24px 24px auto;\n  grid-gap: 16px;\n  align-items: center;\n"]);return B=function(){return e},e}function F(){var e=Object(a.a)(["\n  opacity: ",";\n"]);return F=function(){return e},e}function K(){var e=Object(a.a)(["\n  cursor: pointer;\n  width: 26px;\n  height: 26px;\n"]);return K=function(){return e},e}n.d(t,"SpeechSynthesis",(function(){return R}));var R=function(e){var t=e.mp3data,n=e.onChangeVoice,a=e.state,r=(Object(m.b)(),Object(m.c)((function(e){return e.audioReducer})),Object(o.useState)("")),s=Object(u.a)(r,2),d=s[0],p=s[1],g=Object(o.useState)(f.a.status.PLAYING),j=Object(u.a)(g,2),x=j[0],E=j[1],k=Object(o.useState)(0),C=Object(u.a)(k,2),N=(C[0],C[1]),I=Object(o.useState)(null),P=Object(u.a)(I,2),A=(P[0],P[1]),L=Object(o.useState)(""),T=Object(u.a)(L,2),z=T[0],U=T[1],Y=Object(o.useState)(!1),D=Object(u.a)(Y,2),G=D[0],M=D[1],V=Object(o.useState)(!0),_=Object(u.a)(V,2),J=_[0],Z=_[1],B=function(){var e=Object(i.a)(c.a.mark((function e(){var t,n,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.voiceId,n=a.token,r={method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},data:b.a.stringify({text:z,voiceId:t,token:n}),url:"http://103.74.122.136:8086/api/v1/path"},e.next=4,v()(r);case 4:0===(i=e.sent).data.status&&p(i.data.data.url);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){B()}),[]);return console.log(f.a.duration),l.a.createElement("section",null,l.a.createElement("div",{className:"margin-bottom-large"},l.a.createElement("h1",{className:"application__heading text-center margin-bottom-medium advantage__heading"},"Tr\u1ea3i nghi\u1ec7m"),l.a.createElement($,null,l.a.createElement(ee,{className:"container"},l.a.createElement(ne,null,l.a.createElement(ae,null,l.a.createElement(re,{onChange:function(e){U(e.target.value),p("")}},"N\u1ed9i dung tr\u1ea3i nghi\u1ec7m"))),l.a.createElement(te,{className:"row"},l.a.createElement(Q,{className:"col-md-5"},l.a.createElement(X,null,"Gi\u1ecdng \u0111\u1ecdc"),l.a.createElement(ue,{data:t,onClick:n})),l.a.createElement("div",{className:"col-md-4"},l.a.createElement(f.a,{url:d,playStatus:x,onLoad:function(e){A(e)},onPlaying:function(e){N(e.position)},autoLoad:!1,muted:"muted"}),l.a.createElement(H,null,G?l.a.createElement(W,{src:S.a,onClick:function(){M(!1),Z(!1),E(f.a.status.PAUSED)}}):J?l.a.createElement(W,{src:y.a,onClick:function(){""===z?alert("Vui l\xf2ng nh\u1eadp n\u1ed9i dung"):(M(!G),B(),E(f.a.status.PLAYING))}}):l.a.createElement(W,{src:y.a,onClick:function(){M(!0),E(f.a.status.PLAYING)}}),l.a.createElement(q,{playing:!G&&J,src:w.a,onClick:function(){M(!1),Z(!0),E(f.a.status.PAUSED)}}),l.a.createElement(h.a,{defaultValue:30}))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement(ce,{text:"T\u1ea3i xu\u1ed1ng",icon:O.a,className:"btn--red",isMarginLeft:!1})))))))},W=s.default.img(K()),q=Object(s.default)(W)(F(),(function(e){return e.playing?"0.5":"1"})),H=s.default.div(B()),Q=s.default.div(Z()),X=s.default.p(J()),$=s.default.div(_()),ee=s.default.div(V()),te=s.default.div(M()),ne=s.default.div(G()),ae=s.default.div(D()),re=s.default.textarea(Y()),ce=Object(s.default)(C.a)(U()),ie=Object(s.default)((function(e){var t=e.data,n=void 0===t?[]:t,a=e.className,r=e.onClick,c=n.map((function(e){return{value:e.id,label:e.name}})),i=Object(L.a)({selected:c[0].label,id:c[0].value}),o=Object(u.a)(i,2),s=o[0],d=o[1],f=l.a.createElement(I.a,{onClick:function(e){var t=e.key;d({selected:c[t].label}),r(c[t].value)}},c.map((function(e,t){var n=e.label;return l.a.createElement(I.a.Item,{key:t},n)})));return l.a.createElement(P.a,{className:a,overlay:f,trigger:["click"]},l.a.createElement(N.b,{className:"ant-dropdown-link",to:"#"},s.selected," ",l.a.createElement(A.a,{type:"down"})))}))(z()),ue=Object(s.default)(ie)(T())},121:function(e,t,n){e.exports=n.p+"static/media/download.a21e2fd5.svg"},122:function(e,t,n){e.exports=n.p+"static/media/play.522eddc4.svg"},123:function(e,t,n){e.exports=n.p+"static/media/stop.d31a38eb.svg"},124:function(e,t,n){e.exports=n.p+"static/media/pause.4d5d573d.svg"},132:function(e,t,n){"use strict";n.r(t),n.d(t,"SpeechSynthesisContainer",(function(){return v}));var a=n(20),r=n.n(a),c=n(24),i=n(16),u=n(0),o=n.n(u),l=n(17),s=n.n(l),d=n(120),f=n.n(d),m=n(25),p=n(18),b=n(30),g=n(116),v=function(){var e=Object(u.useContext)(b.b).mp3data,t={loading:!0,voiceId:e[0].id||null,text:"Ch\u01b0a c\xf3 n\u1ed9i dung",token:"McTUDABy8FZYbKwC00OTIweLZwYWgy55"},n=Object(m.a)(t),a=Object(i.a)(n,2),l=a[0],d=a[1],v=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n,a,c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.voiceId,n=l.token,a=l.text,c={method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},data:f.a.stringify({text:a,voiceId:t,token:n}),url:"http://103.74.122.136:8086/api/v1/path"},e.next=4,s()(c);case 4:i=e.sent,d({loading:!1,audioUrl:i.data.data.url}),setAudioUrl(i.data.data.url);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(Object(u.useEffect)((function(){v()}),[]),l.loading)return o.a.createElement(p.b,null);var h={mp3data:e,state:l,setState:d,onChangeVoice:function(e){d({voiceId:e})},onChangeText:function(e){d({text:e})},fetchData:v};return o.a.createElement(g.SpeechSynthesis,h)}}}]);
//# sourceMappingURL=12.50011b63.chunk.js.map