(this.webpackJsonphandpose=this.webpackJsonphandpose||[]).push([[0],{251:function(e,t,n){e.exports=n(279)},256:function(e,t,n){},262:function(e,t){},263:function(e,t){},271:function(e,t){},274:function(e,t){},275:function(e,t){},276:function(e,t,n){},279:function(e,t,n){"use strict";n.r(t);var r=n(41),a=n.n(r),c=n(229),i=n.n(c),o=(n(256),n(188)),u=n(5),s=n.n(u),l=n(13),f=n(8),d=(n(278),n(250)),h=n(248),p=n.n(h),v=(n(276),function(e,t){e.forEach((function(e){var n=Object(f.a)(e.bbox,4),r=n[0],a=n[1],c=n[2],i=n[3],o=e.class,u=Math.floor(16777215*Math.random()).toString(16);t.strokeStyle="#"+u,t.font="18px Arial",t.beginPath(),t.fillStyle="#"+u,t.fillText(o,r,a),t.rect(r,a,c,i),t.stroke()}))}),g=(n(277),n(249)),m={facingMode:"user"};var b=function(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),n=a.a.useState("user"),c=Object(f.a)(n,2),i=c[0],u=c[1],h=a.a.useCallback((function(){u((function(e){return"user"===e?"environment":"user"}))}),[]),b=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a();case 2:t=e.sent,console.log("Handpose model loaded."),setInterval((function(){x(t)}),10);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var n=Object(l.a)(s.a.mark((function n(r){var a,c,i,o,u;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"===typeof e.current||null===e.current||4!==e.current.video.readyState){n.next=13;break}return a=e.current.video,c=e.current.video.videoWidth,i=e.current.video.videoHeight,e.current.video.width=c,e.current.video.height=i,t.current.width=c,t.current.height=i,n.next=10,r.detect(a);case 10:o=n.sent,u=t.current.getContext("2d"),v(o,u);case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){b()}),[]),a.a.createElement("div",{className:"App"},a.a.createElement(g.a,{variant:"light",onClick:h},"Switch camera"),a.a.createElement("header",{className:"App-header"},a.a.createElement(p.a,{ref:e,muted:!0,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,width:640,height:480},videoConstraints:Object(o.a)(Object(o.a)({},m),{},{facingMode:i})}),a.a.createElement("canvas",{ref:t,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:8,width:640,height:480}})))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root"))}},[[251,1,2]]]);
//# sourceMappingURL=main.744f6576.chunk.js.map