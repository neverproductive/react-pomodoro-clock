(this["webpackJsonpreact-pomodoro-clock"]=this["webpackJsonpreact-pomodoro-clock"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(3),n=c.n(a),r=c(8),s=c.n(r),i=(c(13),c(14),c(4)),o=(c(15),c(1)),b=(c(16),c(6)),l=c(5),j=c(0),u=Object(a.createContext)(),d=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(j.jsx)(u.Provider,{value:Object(a.useReducer)(t,c),children:n})},O=function(){return Object(a.useContext)(u)},m={projectName:"Simple Pomodoro Timer",timerLabel:"Session",busyIndicator:!1,breakValue:5,sessionValue:25,timerValue:1500},h="SET_PROJECTNAME",p="RESET_TIMERS",x="START_TIMER",_="TOGGLE_TIMER_LABEL",f="TOGGLE_ISBUSY_INDICATOR",k="INCREASE_BREAK_VALUE",g="DECREASE_BREAK_VALUE",N="INCREASE_SESSION_VALUE",v="DECREASE_SESSION_VALUE",y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(o.a)(Object(o.a)({},e),{},{projectName:t.projectName,timerLabel:t.timerLabel});case k:case g:return Object(o.a)(Object(o.a)({},e),{},{breakValue:t.breakValue});case N:case v:return Object(o.a)(Object(o.a)({},e),{},{sessionValue:t.sessionValue,timerValue:t.timerValue});case f:return Object(o.a)(Object(o.a)({},e),{},{busyIndicator:t.busyIndicator});case _:return Object(o.a)(Object(o.a)({},e),{},{timerLabel:t.timerLabel});case x:return Object(o.a)(Object(o.a)({},e),{},{timerValue:t.timerValue});case p:return m;default:return e}},E=function(){var e=O(),t=Object(i.a)(e,1)[0],c=t.breakValue,a=t.busyIndicator,n=O(),r=Object(i.a)(n,2),s=r[0],u=r[1];return Object(j.jsxs)("div",{className:"break",children:[Object(j.jsx)("span",{id:"break-label",className:"break__label",children:"Break Length"}),Object(j.jsxs)("div",{className:"break__controls",children:[Object(j.jsx)("button",{type:"button",id:"break-decrement",className:"break__controls--btn",onClick:function(){u(Object(o.a)(Object(o.a)({},s),{},{type:g,breakValue:c-1}))},disabled:a||c<=1,children:Object(j.jsx)(b.a,{icon:l.a})}),Object(j.jsx)("p",{id:"break-length",className:"break__length",children:c}),Object(j.jsx)("button",{type:"button",id:"break-increment",className:"break__controls--btn",onClick:function(){u(Object(o.a)(Object(o.a)({},s),{},{type:k,breakValue:c+1}))},disabled:a||c>59,children:Object(j.jsx)(b.a,{icon:l.d})})]})]})},V=(c(20),function(){var e=O(),t=Object(i.a)(e,1)[0],c=t.sessionValue,a=t.busyIndicator,n=O(),r=Object(i.a)(n,2),s=r[0],u=r[1];return Object(j.jsxs)("div",{className:"session",children:[Object(j.jsx)("span",{id:"session-label",className:"session__label",children:"Session Length"}),Object(j.jsxs)("div",{className:"session__controls",children:[Object(j.jsx)("button",{type:"button",id:"session-decrement",className:"session__controls--btn",onClick:function(){u(Object(o.a)(Object(o.a)({},s),{},{type:v,sessionValue:c-1,timerValue:60*(c-1)}))},disabled:a||c<=1,children:Object(j.jsx)(b.a,{icon:l.a})}),Object(j.jsx)("p",{id:"session-length",className:"session__length",children:c}),Object(j.jsx)("button",{type:"button",id:"session-increment",className:"session__controls--btn",onClick:function(){u(Object(o.a)(Object(o.a)({},s),{},{type:N,sessionValue:c+1,timerValue:60*(c+1)}))},disabled:a||c>59,children:Object(j.jsx)(b.a,{icon:l.d})})]})]})});c(21);function S(){var e=O(),t=Object(i.a)(e,1)[0].timerValue,c=Math.floor(t/60),a=t-60*c;return a=a<10?"0"+a:a,"".concat(c=c<10?"0"+c:c,":").concat(a)}var w=function(){var e=O(),t=Object(i.a)(e,1)[0],c=t.projectName,n=t.timerValue,r=t.breakValue,s=t.sessionValue,u=t.timerLabel,d=t.busyIndicator,m=O(),h=Object(i.a)(m,2),k=h[0],g=h[1],N=S(),v=Object(a.useRef)();return Object(a.useEffect)((function(){if(d){var e=setInterval((function(){g(Object(o.a)(Object(o.a)({},k),{},{type:x,timerValue:n-1})),0===n&&v.current.play(),n<0&&("Session"===u?(g(Object(o.a)(Object(o.a)({},k),{},{type:_,timerLabel:"Break"})),g(Object(o.a)(Object(o.a)({},k),{},{type:x,timerValue:60*r-1}))):(g(Object(o.a)(Object(o.a)({},k),{},{type:_,timerLabel:"Session"})),g(Object(o.a)(Object(o.a)({},k),{},{type:x,timerValue:60*s-1})))),document.title="[".concat(u,"] - ").concat(N)}),1e3);return function(){return clearInterval(e)}}document.title=c})),Object(j.jsxs)("div",{className:"controls__wrp",children:[Object(j.jsx)("button",{type:"button",id:"start_stop",onClick:function(){g(Object(o.a)(Object(o.a)({},k),{},{type:f,busyIndicator:!k.busyIndicator}))},children:Object(j.jsx)(b.a,{icon:d?l.b:l.c})}),Object(j.jsx)("button",{type:"button",id:"reset",onClick:function(){g(Object(o.a)(Object(o.a)({},k),{},{type:p})),v.current.pause(),v.current.time=0},children:Object(j.jsx)(b.a,{icon:l.e})}),Object(j.jsx)("audio",{id:"beep",src:"https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3",ref:v,preload:"auto"})]})},I=(c(22),function(){return Object(j.jsx)("div",{className:"logo-container",children:Object(j.jsx)("a",{href:"https://www.neverproductive.com/",children:Object(j.jsx)("img",{src:"/react-pomodoro-clock/Dark-Tree-Rounded-Corners.png",alt:"logo",width:"100%",height:"100%",className:"logo"})})})}),L=function(){var e=O(),t=Object(i.a)(e,1)[0],c=t.projectName,a=t.timerLabel,n=S();return Object(j.jsxs)("div",{className:"timer",children:[Object(j.jsx)("h1",{className:"timer__maintitle",children:c}),Object(j.jsx)("h3",{id:"timer-label",className:"timer__label",children:a}),Object(j.jsx)("h2",{id:"time-left",className:"timer__time",children:n}),Object(j.jsx)(w,{}),Object(j.jsxs)("div",{className:"timer__controllers",children:[Object(j.jsx)(E,{}),Object(j.jsx)(V,{})]}),Object(j.jsx)(I,{})]})},C=Object(a.createContext)(),R=Object(a.createContext)(),T=function(e){var t=e.children,c=Object(a.useState)(!1),n=Object(i.a)(c,2),r=n[0],s=n[1];return Object(j.jsx)(C.Provider,{value:r,children:Object(j.jsx)(R.Provider,{value:function(){s((function(e){return!e}))},children:t})})},A=(c(23),function(){return Object(j.jsxs)("div",{className:"links",children:[Object(j.jsx)("a",{className:"link discord",href:"https://www.youtube.com/c/JordanDParker",children:Object(j.jsx)("img",{src:"/react-pomodoro-clock/youtube.png",alt:"youtube",width:"100%",height:"100%"})}),Object(j.jsx)("a",{className:"link blog",href:"https://www.neverproductive.com/",children:Object(j.jsx)("img",{src:"/react-pomodoro-clock/Tree.png",alt:"logo",width:"100%",height:"100%"})}),Object(j.jsx)("a",{className:"link discord",href:"https://discord.gg/7T99jjVcJX",children:Object(j.jsx)("img",{src:"/react-pomodoro-clock/discord.png",alt:"discord",width:"100%",height:"100%"})})]})}),B=(c(24),function(){return Object(j.jsx)("div",{className:"background-wrapper",children:Object(j.jsx)("img",{src:"/react-pomodoro-clock/Background.png",alt:"background",className:"background",width:"100%",height:"100%"})})});s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(d,{reducer:y,initialState:m,children:Object(j.jsxs)(T,{children:[Object(j.jsx)(B,{}),Object(j.jsx)(L,{}),Object(j.jsx)(A,{})]})})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.fe84ffe1.chunk.js.map