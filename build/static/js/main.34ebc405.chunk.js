(this.webpackJsonpcroupier=this.webpackJsonpcroupier||[]).push([[0],{22:function(e,r,n){},41:function(e,r,n){},42:function(e,r,n){},43:function(e,r,n){},45:function(e,r,n){"use strict";n.r(r);var a=n(0),t=n.n(a),c=n(13),s=n.n(c),i=(n(22),n(9)),l=n(8),o=n(17),d=n(15),j=n(16);function u(){var e="a 2 3 4 5 6 7 8 9 10 j q k".split(" "),r="spades hearts clubs diams".split(" ");return function(e){for(var r=0;r<e.length;r++){var n=Math.random()*r|0,a=e[r];e[r]=e[n],e[n]=a}return e}(function(){for(var e=new Array(52),r=0;r<e.length;r++)e[r]=r;return e}().map((function(n){var a=n%13,t=n/13|0;return{rank:a,ranks:e[a],suit:r[t],suitCode:"&".concat(r[t],";")}})))}function h(){var e=["\ud83d\ude04","\ud83d\ude03","\ud83d\ude00","\ud83d\ude0a","\ud83d\ude09","\ud83d\ude0d","\ud83d\ude18","\ud83d\ude1a","\ud83d\ude17","\ud83d\ude19","\ud83d\ude1c","\ud83d\ude1d","\ud83d\ude1b","\ud83d\ude33","\ud83d\ude01","\ud83d\ude14","\ud83d\ude0c","\ud83d\ude12","\ud83d\ude1e","\ud83d\ude23","\ud83d\ude22","\ud83d\ude02","\ud83d\ude2d","\ud83d\ude2a","\ud83d\ude25","\ud83d\ude30","\ud83d\ude05","\ud83d\ude13","\ud83d\ude29","\ud83d\ude2b","\ud83d\ude28","\ud83d\ude31","\ud83d\ude20","\ud83d\ude21","\ud83d\ude24","\ud83d\ude16","\ud83d\ude06","\ud83d\ude0b","\ud83d\ude37","\ud83d\ude0e","\ud83d\ude34","\ud83d\ude35","\ud83d\ude32","\ud83d\ude1f","\ud83d\ude26","\ud83d\ude27","\ud83d\ude08","\ud83d\udc7f","\ud83d\ude2e","\ud83d\ude2c","\ud83d\ude10","\ud83d\ude15","\ud83d\ude2f","\ud83d\ude36","\ud83d\ude07","\ud83d\ude0f","\ud83d\ude11","\ud83d\udc72","\ud83d\udc73","\ud83d\udc6e","\ud83d\udc77","\ud83d\udc82","\ud83d\udc76","\ud83d\udc66","\ud83d\udc67","\ud83d\udc68","\ud83d\udc69","\ud83d\udc74","\ud83d\udc75","\ud83d\udc71","\ud83d\udc7c","\ud83d\udc78","\ud83d\ude3a","\ud83d\ude38","\ud83d\ude3b","\ud83d\ude3d","\ud83d\ude3c","\ud83d\ude40","\ud83d\ude3f","\ud83d\ude39","\ud83d\ude3e"];return e[Math.floor(Math.random()*e.length)]}n(41),n(42),n(43);var p=n.p+"static/media/peep.d69a034c.png",b=n(2);var m=function(){var e=Object(a.useState)(2),r=Object(i.a)(e,2),n=r[0],t=r[1],c=Object(a.useState)(!1),s=Object(i.a)(c,2),m=s[0],O=s[1],f=function(e){var r=u();return 0!==r.length%e?{error:"001",msg:"The 52 cards cannot distribute evenly among ".concat(e=e||0," players.")}:function(e,r){for(var n=[],a=0;a<e.length;a+=r){var t=e.slice(a,a+r);n.push(t)}return n}(r,r.length/e)}(n),x=m?"block":"none",v=m?"top":"middle";return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{className:"App-header "+v,children:Object(b.jsxs)("div",{className:"widget",children:[Object(b.jsx)("h5",{children:"Hey, I'm your croupier today"}),Object(b.jsx)(d.a,{icon:j.a}),Object(b.jsx)("h4",{children:" Please enter the number of player"}),Object(b.jsx)(o.a,{min:1,max:52,defaultValue:n,onChange:function(e){O(!0),t(e)},onPressEnter:function(e){O(!0),t(n)}})]})}),Object(b.jsx)("div",{style:{display:x},className:"card-wrap",children:Object(b.jsxs)("div",{className:"playingCards",children:[f.error&&Object(b.jsxs)("div",{className:"err-wrap",children:[" ",Object(b.jsx)("img",{src:p,alt:"peep"}),Object(b.jsxs)("div",{className:"err-msg",children:[f.msg," "]})]}),!f.error&&f.map((function(e,r){return Object(b.jsxs)("div",{className:"card-player",children:[Object(b.jsxs)("h4",{children:[" ","Player ",r+1," ",Object(l.a)(h())]}),Object(b.jsx)("ul",{className:"hand",children:e.map((function(e,r){return Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"#",className:"card rank-".concat(e.ranks," ").concat(e.suit),children:[Object(b.jsx)("span",{className:"rank",children:e.ranks.toUpperCase()}),Object(b.jsx)("span",{className:"suit",children:Object(l.a)(e.suitCode)})]})})}))})]})}))]})})]})};s.a.render(Object(b.jsx)(t.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.34ebc405.chunk.js.map