(this["webpackJsonpfcc-25-5-clock"]=this["webpackJsonpfcc-25-5-clock"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(8),r=c.n(s),i=c(3),l=c(4),o={SESSION:"session",BREAK:"break"},u={INCREMENT_SESSION:"INCREMENT_SESSION",DECREMENT_SESSION:"DECREMENT_SESSION",UPDATE_SESSION:"UPDATE_SESSION",INCREMENT_BREAK:"INCREMENT_BREAK",DECREMENT_BREAK:"DECREMENT_BREAK",UPDATE_BREAK:"UPDATE_BREAK",START_TIMER:"START_TIMER",STOP_TIMER:"STOP_TIMER",RESET_TIMER:"RESET_TIMER",DECREMENT_TIMER:"DECREMENT_TIMER",SWITCH_TO_BREAK_PHASE:"SWITCH_TO_BREAK_PHASE",SWITCH_TO_SESSION_PHASE:"SWITCH_TO_SESSION_PHASE",UPDATE_STYLE:"UPDATE_STYLE"},d=function(e,t){switch(console.log(t.type,"-",t.payload),t.type){case u.INCREMENT_BREAK:return Object(i.a)(Object(i.a)({},e),{},{breakTime:e.breakTime+1});case u.DECREMENT_BREAK:return Object(i.a)(Object(i.a)({},e),{},{breakTime:e.breakTime-1});case u.UPDATE_BREAK:return Object(i.a)(Object(i.a)({},e),{},{breakTime:t.payload});case u.INCREMENT_SESSION:return Object(i.a)(Object(i.a)({},e),{},{sessionTime:e.sessionTime+1});case u.DECREMENT_SESSION:return Object(i.a)(Object(i.a)({},e),{},{sessionTime:e.sessionTime-1});case u.UPDATE_SESSION:return Object(i.a)(Object(i.a)({},e),{},{sessionTime:t.payload});case u.START_TIMER:return Object(i.a)(Object(i.a)({},e),{},{isRunning:!0});case u.STOP_TIMER:return Object(i.a)(Object(i.a)({},e),{},{isRunning:!1});case u.RESET_TIMER:return Object(i.a)(Object(i.a)({},e),{},{isRunning:!1,breakTime:5,sessionTime:25,timerValue:1500,timerPhase:o.SESSION});case u.DECREMENT_TIMER:return Object(i.a)(Object(i.a)({},e),{},{timerValue:e.timerValue-1});case u.SWITCH_TO_BREAK_PHASE:return Object(i.a)(Object(i.a)({},e),{},{timerValue:60*e.breakTime,timerPhase:o.BREAK});case u.SWITCH_TO_SESSION_PHASE:return Object(i.a)(Object(i.a)({},e),{},{timerValue:60*e.sessionTime,timerPhase:o.SESSION});case u.UPDATE_STYLE:return Object(i.a)(Object(i.a)({},e),{},{timerStyle:t.payload});default:throw new Error("No matching action found!")}};var j=function(e,t){var c=Object(n.useRef)();Object(n.useEffect)((function(){c.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=function(e,t){var c,n,a,s;return n=(new Date).getTime()+t,a=null,s=function(){return n+=t,a=setTimeout(s,n-(new Date).getTime()),e()},c=function(){return clearTimeout(a)},a=setTimeout(s,n-(new Date).getTime()),{cancel:c}}((function(){c.current()}),t);return function(){return e.cancel()}}}),[t])},m={SIMPLE:"SIMPLE",PROGRESS:"PROGRESS",FLIP:"FLIP",ANALOGUE:"ANALOGUE",SLIDER:"SLIDER"},b=m,O=c(1),E=a.a.createContext(),h={sessionTime:25,breakTime:5,isRunning:!1,timerValue:1500,timerPhase:o.SESSION,timerStyle:b.SIMPLE},S=function(e){var t=e.children,c=Object(n.useReducer)(d,h),a=Object(l.a)(c,2),s=a[0],r=a[1],m=Object(n.useRef)(null);j((function(){0===s.timerValue?(s.timerPhase===o.SESSION&&r({type:u.SWITCH_TO_BREAK_PHASE}),s.timerPhase===o.BREAK&&r({type:u.SWITCH_TO_SESSION_PHASE}),m.current.play()):r({type:u.DECREMENT_TIMER})}),s.isRunning?1e3:null);return Object(O.jsxs)(E.Provider,{value:Object(i.a)(Object(i.a)({},s),{},{onIncrement:function(e){s.isRunning||(e===o.BREAK&&r({type:u.INCREMENT_BREAK}),e===o.SESSION&&(r({type:u.INCREMENT_SESSION}),r({type:u.SWITCH_TO_SESSION_PHASE})))},onDecrement:function(e){s.isRunning||(e===o.BREAK&&r({type:u.DECREMENT_BREAK}),e===o.SESSION&&(r({type:u.DECREMENT_SESSION}),r({type:u.SWITCH_TO_SESSION_PHASE})))},updatePhaseTime:function(e,t){var c=parseInt(t);s.isRunning||(e===o.BREAK&&r({type:u.UPDATE_BREAK,payload:c}),e===o.SESSION&&(r({type:u.UPDATE_SESSION,payload:c}),r({type:u.SWITCH_TO_SESSION_PHASE})))},startStopTimer:function(){s.isRunning?r({type:u.STOP_TIMER}):r({type:u.START_TIMER})},resetTimer:function(){r({type:u.RESET_TIMER}),m.current.pause(),m.current.currentTime=0},updateTimerStyle:function(e){r({type:u.UPDATE_STYLE,payload:e})}}),children:[t,Object(O.jsx)("audio",{id:"beep",preload:"auto",ref:m,src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"})]})},T=function(e){var t=Math.floor(e/60);t=t<10?"0"+t:t;var c=Math.floor(e%60);return c=c<10?"0"+c:c,"".concat(t,":").concat(c)},f=(c(14),c(5)),N=function(e){var t=e.label,c=e.value,a=e.decrement,s=e.increment,r=e.updateValue,i=e.min,l=e.max,o=function(){void 0===l&&s(t),c<l&&s(t)},u=function(){void 0===i&&a(t),c>i&&a(t)},d=Object(n.useCallback)((function(e){null!==e&&e.children[0].insertBefore(e.children[0].children[1],e.children[0].children[0])}),[]);return Object(O.jsxs)("div",{className:"phase-control",onWheel:function(e){e.deltaY<0?o():e.deltaY>0&&u()},children:[Object(O.jsxs)("label",{id:"".concat(t,"-label"),className:"label",htmlFor:"".concat(t,"Slider"),children:[t," length"]}),Object(O.jsxs)("button",{id:"".concat(t,"-decrement"),className:"decrement icon-btn",onClick:u,ref:d,children:[Object(O.jsx)(f.a,{className:"icon-arrow-down","aria-hidden":!0,focusable:!1}),Object(O.jsxs)("span",{className:"visually-hidden",children:["Decrement ",t," Length"]})]}),Object(O.jsx)("span",{id:"".concat(t,"-length"),className:"value",children:c}),Object(O.jsxs)("button",{id:"".concat(t,"-increment"),className:"increment icon-btn",onClick:o,ref:d,children:[Object(O.jsx)(f.b,{className:"icon-arrow-up","aria-hidden":!0,focusable:!1}),Object(O.jsxs)("span",{className:"visually-hidden",children:["Increment ",t," Length"]})]}),Object(O.jsx)("input",{id:"".concat(t,"Slider"),type:"range",min:i,max:l,step:"1",value:c,onChange:function(e){r(t,e.target.value)},className:"slider"})]})},p=(c(15),function(e){var t=e.phase,c=e.value,a=e.isRunning,s=Object(n.useCallback)((function(e){null!==e&&(a?e.classList.add("animate"):e.classList.remove("animate"))}),[a]);return Object(O.jsxs)("div",{className:"timer-clock",children:[Object(O.jsx)("span",{className:"leftIndicator",ref:s}),Object(O.jsx)("span",{className:"rightIndicator",ref:s}),Object(O.jsx)("span",{className:"topIndicator",ref:s}),Object(O.jsx)("span",{className:"bottomIndicator",ref:s}),Object(O.jsx)("h3",{id:"timer-label",className:"label",children:t}),Object(O.jsx)("h2",{id:"time-left",className:"value",children:c})]})}),x=(c(16),function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useRef)(null),r=Object(n.useRef)(new ResizeObserver((function(e){var t=e[0].contentRect,c=t.width,n=t.height;a({width:c,height:n})})));return Object(n.useEffect)((function(){var e=r,t=s;return e&&e.current&&e.current.observe(t.current),function(){e&&e.current&&e.current.unobserve(t.current)}}),[s]),[s,c]}),R=function(e){var t=e.time,c=x(),n=Object(l.a)(c,2),a=n[0],s=n[1],r=s.width<s.height?s.width:s.height,i=Math.floor(t/60),o=Math.floor(t%60)/60*360,u=i/60*360;return Object(O.jsx)("div",{className:"analogue-clock-container",ref:a,children:Object(O.jsx)("div",{className:"analogue-clock",style:{width:"".concat(r,"px"),height:"".concat(r,"px")},children:Object(O.jsxs)("div",{className:"outer-face",children:[Object(O.jsx)("span",{className:"mark mark-one"}),Object(O.jsx)("span",{className:"mark mark-two"}),Object(O.jsx)("span",{className:"mark mark-three"}),Object(O.jsx)("span",{className:"mark mark-four"}),Object(O.jsxs)("div",{className:"inner-face",children:[Object(O.jsx)("span",{className:"hand second-hand",style:{transform:"rotate(".concat(o,"deg)")}}),Object(O.jsx)("span",{className:"hand minute-hand",style:{transform:"rotate(".concat(u,"deg)")}})]})]})})})},I=(c(17),function(e){var t=e.time,c=Math.floor(t/60),n=t%60,a=Math.floor(c/10),s=c-10*a,r=Math.floor(n/10),i=n-10*r,l=[0,1,2,3,4,5,6,7,8,9];return Object(O.jsxs)("div",{className:"slider-clock",tabIndex:"-1",children:[Object(O.jsx)("div",{className:"minute-tens",children:l.map((function(e,t){return Object(O.jsx)("span",{className:"slider-num",style:{transform:"translateY(calc(".concat(a-t," * 4rem))")},children:e},t)}))}),Object(O.jsx)("div",{className:"minute-singles",children:l.map((function(e,t){return Object(O.jsx)("span",{className:"slider-num",style:{transform:"translateY(calc(".concat(s-t," * 4rem))")},children:e},t)}))}),Object(O.jsx)("div",{className:"slider-clock-divider",children:":"}),Object(O.jsx)("div",{className:"seconds-tens",children:l.map((function(e,t){return Object(O.jsx)("span",{className:"".concat(t===r?"slider-num active":"slider-num inactive"),style:{transform:"translateY(calc(".concat(r-t," * 4rem))")},children:e},t)}))}),Object(O.jsx)("div",{className:"seconds-singles",children:l.map((function(e,t){return Object(O.jsx)("span",{className:"".concat(t===i?"slider-num active":"slider-num inactive"),style:{transform:"translateY(calc(".concat(i-t," * 4rem))")},children:e},t)}))})]})}),_=(c(18),function(e){var t=e.time,c=e.minutesMax,n=t/60,a=t%60,s=10,r=45,i=90*Math.PI,l=100-a/60*100,o=n===c&&0===a?0:0===n&&0===a?2*Math.PI/100*100*r:0===a?0:2*Math.PI/100*l*r,u=32.5,d=65*Math.PI,j=12.5,m=100-n/c*100,b=2*Math.PI/100*m*u;return Object(O.jsxs)("div",{className:"progress-clock",children:[Object(O.jsxs)("svg",{viewBox:"0 0 100 100",children:[Object(O.jsx)("title",{children:"Progress Clock"}),Object(O.jsx)("desc",{id:"progressClockDesc",children:"Two progress circles depicting the remaining time"}),Object(O.jsx)("circle",{className:"progress-clock-background",cx:50,cy:50,r:r,strokeWidth:s/1.4}),Object(O.jsx)("circle",{className:"progress-clock-seconds background",cx:50,cy:50,r:r,strokeWidth:s/1.4,transform:"rotate(-90 ".concat(50," ").concat(50,")")}),Object(O.jsx)("circle",{className:"progress-clock-seconds progress",cx:50,cy:50,r:r,strokeDasharray:"".concat(i," ").concat(i),strokeWidth:s,transform:"rotate(-90 ".concat(50," ").concat(50,")"),style:{transition:"all 0.3s",strokeDashoffset:"".concat(o)}}),Object(O.jsx)("circle",{className:"progress-clock-minutes background",cx:37.5,cy:37.5,r:u,strokeWidth:s/1.4,transform:"rotate(-90 ".concat(50," ").concat(50,") translate(").concat(j,", ").concat(j,")")}),Object(O.jsx)("circle",{className:"progress-clock-minutes progress",cx:37.5,cy:37.5,r:u,strokeDasharray:"".concat(d," ").concat(d),strokeWidth:s,transform:"rotate(-90 ".concat(50," ").concat(50,") translate(").concat(j,", ").concat(j,")"),style:{transition:"all 0.3s",strokeDashoffset:"".concat(b)}})]}),Object(O.jsx)("span",{children:T(t)})]})}),v=(c(19),function(e){var t=e.isRunning,c=e.onStartStop,a=e.onReset,s=Object(n.useCallback)((function(e){null!==e&&e.children[0].insertBefore(e.children[0].children[1],e.children[0].children[0])}),[]),r=Object(n.useCallback)((function(e){null!==e&&e.children[0].insertBefore(e.children[0].children[2],e.children[0].children[0])}),[]);return Object(O.jsxs)("div",{className:"timer-control",children:[Object(O.jsx)("button",{id:"start_stop",className:"icon-btn",onClick:c,ref:t?r:null,children:t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f.d,{className:"icon-pause","aria-hidden":!0,focusable:!1}),Object(O.jsx)("span",{className:"visually-hidden",children:"Pause"})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f.c,{className:"icon-play","aria-hidden":!0,focusable:!1}),Object(O.jsx)("span",{className:"visually-hidden",children:"Start"})]})}),Object(O.jsxs)("button",{id:"reset",className:"icon-btn",onClick:a,ref:s,children:[Object(O.jsx)(f.e,{className:"icon-stop","aria-hidden":!0,focusable:!1}),Object(O.jsx)("span",{className:"visually-hidden",children:"Reset"})]})]})}),g=(c(20),c(7)),y=(c(21),function(e){var t=e.children,c=e.disabled,a=Object(n.useState)(0),s=Object(l.a)(a,2),r=s[0],i=s[1],o=Object(n.useState)(0),u=Object(l.a)(o,2),d=u[0],j=u[1],m=Object(n.useState)(0),b=Object(l.a)(m,2),E=b[0],h=b[1],S=function(){if(!c){var e=r-1;i(e<0?t.length-1:e)}},T=function(){if(!c){var e=r+1;i(e>t.length-1?0:e)}};return Object(O.jsxs)("div",{className:"carousel-container",onTouchStart:function(e){j(e.targetTouches[0].clientX)},onTouchMove:function(e){h(e.targetTouches[0].clientX)},onTouchEnd:function(){0!==E&&(d-E>150&&!c&&T(),d-E<-150&&!c&&S(),j(0),h(0))},children:[Object(O.jsxs)("button",{className:"carousel-btn-prev icon-btn ".concat(c?"disabled":""),onClick:S,children:[Object(O.jsx)(g.a,{"aria-hidden":!0,focusable:!1}),Object(O.jsx)("span",{className:"visually-hidden",children:"Previous Style"})]}),Object(O.jsxs)("button",{className:"carousel-btn-next icon-btn ".concat(c?"disabled":""),onClick:T,children:[Object(O.jsx)(g.b,{"aria-hidden":!0,focusable:!1}),Object(O.jsx)("span",{className:"visually-hidden",children:"Next Style"})]}),t.map((function(e,t){return Object(O.jsx)("div",{className:"carousel-child ".concat(t<r?"prev":t>r?"next":"active"),children:e},t)}))]})}),k=function(){var e=Object(n.useContext)(E),t=e.sessionTime,c=e.breakTime,a=e.onIncrement,s=e.onDecrement,r=e.updatePhaseTime,i=e.timerValue,l=e.timerPhase,u=e.isRunning,d=e.startStopTimer,j=e.resetTimer;e.timerStyle,e.updateTimerStyle;return Object(O.jsxs)("section",{className:"container",children:[Object(O.jsx)("h1",{children:"25 + 5 Clock"}),Object(O.jsx)(N,{label:o.BREAK,value:c,increment:a,decrement:s,updateValue:r,min:1,max:60}),Object(O.jsx)(N,{label:o.SESSION,value:t,increment:a,decrement:s,updateValue:r,min:1,max:60}),Object(O.jsxs)(y,{disabled:u,children:[Object(O.jsx)(p,{value:T(i),phase:l,isRunning:u}),Object(O.jsx)(I,{time:i}),Object(O.jsx)(R,{time:i}),Object(O.jsx)(_,{time:i,minutesMax:l===o.SESSION?t:c})]}),Object(O.jsx)(v,{isRunning:u,onStartStop:d,onReset:j})]})};c(22);var M=function(){return Object(O.jsx)("main",{children:Object(O.jsx)(S,{children:Object(O.jsx)(k,{})})})};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(M,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.84ee1680.chunk.js.map