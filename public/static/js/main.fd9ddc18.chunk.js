(this["webpackJsonpCountryKid-client"]=this["webpackJsonpCountryKid-client"]||[]).push([[0],{194:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(22),c=a.n(i),o=(a(194),a(20)),s=a.n(o),l=a(29),d=a(8),u=a(17),j=a(322),b=a(300),p=a(316),h=a(323),x=a(301),m=a(326),g=a(325),O=a(135),f=a(324),y=a(18),v=a(1),w=Object(n.createContext)();function C(e){var t=Object(n.useState)(null),a=Object(d.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(null),o=Object(d.a)(c,2),s=o[0],l=o[1];return Object(v.jsx)(w.Provider,{value:{user:r,setUser:i,error:s,setError:l},children:e.children})}var S=Object(O.a)();var k=function(e){var t=e.btnSignIn,a=Object(n.useContext)(w).error;return Object(v.jsx)(f.a,{theme:S,children:Object(v.jsxs)(g.a,{component:"main",maxWidth:"xs",style:{backgroundColor:"rgb(255,255,255, 0.7)",height:"fit-content"},children:[Object(v.jsx)(b.a,{}),Object(v.jsxs)(x.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(v.jsx)(m.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(v.jsxs)(x.a,{component:"form",onSubmit:t,noValidate:!0,sx:{mt:1},children:[Object(v.jsx)(p.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,helperText:a||"",error:!!a}),Object(v.jsx)(p.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",helperText:a||"",error:!!a}),Object(v.jsx)(j.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),Object(v.jsx)(h.a,{container:!0,children:Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(y.b,{to:"/signup",style:{marginLeft:"70px"},children:"Don't have an account? Sign Up"})})})]})]})]})})},T=a(25),I=a.n(T),B="https://countrykid.herokuapp.com/api",A=Object(O.a)();var M=function(e){var t=Object(n.useContext)(w).error,a=Object(u.f)(),r=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("imageUrl",t.target.image.files[0]),e.next=5,I.a.post("".concat(B,"/upload"),n);case 5:return r=e.sent,i={username:t.target.username.value,email:t.target.email.value,password:t.target.password.value,image:r.data.image},e.next=9,I.a.post("".concat(B,"/signup"),i,{withCredentials:!0});case 9:a("/signin");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)(f.a,{theme:A,children:Object(v.jsxs)(g.a,{component:"main",maxWidth:"xs",style:{backgroundColor:"rgb(255,255,255, 0.7)",height:"fit-content"},children:[Object(v.jsx)(b.a,{}),Object(v.jsxs)(x.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(v.jsx)(m.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(v.jsxs)(x.a,{component:"form",onSubmit:r,noValidate:!0,sx:{mt:1},children:[Object(v.jsx)(p.a,{margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoFocus:!0,helperText:t||"",error:!!t}),Object(v.jsx)(p.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",helperText:t||"",error:!!t}),Object(v.jsx)(p.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",helperText:t||"",error:!!t}),Object(v.jsx)(p.a,{margin:"normal",fullWidth:!0,name:"image",label:"Profile Image",type:"file",id:"image",accept:"image/png, image/jpg"}),Object(v.jsx)(j.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),Object(v.jsx)(h.a,{container:!0,children:Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(y.b,{to:"/signin",children:"Already have an account? Sign In instead"})})})]})]})]})})},L=a(315),D=a(318);var P=function(e){var t=e.onLogout,a=Object(n.useContext)(w).user;return Object(v.jsxs)(L.a,{bg:"dark",expand:"lg",children:[Object(v.jsx)(L.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(v.jsx)(L.a.Collapse,{id:"basic-navbar-nav",children:Object(v.jsxs)(D.a,{className:"mr-auto",children:[Object(v.jsx)(y.b,{style:{marginLeft:"10px",color:"white",textDecoration:"none"},to:"/",children:"Home"}),Object(v.jsx)(y.b,{style:{marginLeft:"10px",color:"white",textDecoration:"none"},to:"/random",children:"Don't know where to go?"}),a?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(y.b,{style:{marginLeft:"10px",color:"white",textDecoration:"none"},to:"/map",children:"Map"}),Object(v.jsx)(y.b,{style:{marginLeft:"10px",color:"white",textDecoration:"none"},to:"/profile",children:"Profile"}),Object(v.jsx)(y.b,{onClick:t,to:"/signin",style:{marginLeft:"10px",color:"white",textDecoration:"none"},children:"Logout"})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(y.b,{style:{marginLeft:"10px",color:"white",textDecoration:"none"},to:"/signin",children:"SignIn"}),Object(v.jsx)(y.b,{style:{marginLeft:"10px",color:"white",textDecoration:"none"},to:"/signup",children:"SignUp"})]})]})})]})},E=a(304);var F=function(e){var t=e.btnSearch,a=e.countryError;return Object(v.jsxs)("div",{style:{height:"100vh",marginTop:"100px"},children:[Object(v.jsx)("h1",{style:{marginLeft:"30px",padding:"10px",marginTop:"30px",fontFamily:"bradley hand",backgroundColor:"rgb(255,255,255, 0.7)",height:"fit-content",width:"fit-content"},children:"Pick your next destination"}),Object(v.jsx)(E.a,{sx:{margin:"20px",height:"100vh",padding:"15px"},children:Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("img",{src:"arrow.png",alt:"arrow",height:"200px",style:{marginLeft:"250px",marginTop:"20px"}}),Object(v.jsxs)("form",{onSubmit:t,style:{marginLeft:"50px",marginTop:"100px",backgroundColor:"rgb(255,255,255, 0.7)",height:"fit-content"},children:[Object(v.jsx)(p.a,{hiddenLabel:!0,id:"filled-hidden-label-normal",variant:"standard",name:"country",label:"Country",style:{margin:"15px",textAlign:"center"},helperText:a||"",error:!!a}),Object(v.jsx)(p.a,{hiddenLabel:!0,id:"filled-hidden-label-normal",variant:"standard",name:"city",label:"City",style:{margin:"15px"},helperText:a||"",error:!!a}),Object(v.jsx)("div",{children:Object(v.jsxs)(j.a,{variant:"text",type:"submit",style:{marginLeft:"40px",fontSize:"50px",fontFamily:"bradley hand",borderRadius:"20%",color:"black"},children:[" Let's Go",Object(v.jsx)("img",{src:"/pin2.png",alt:"pin",height:"50px"})]})})]}),Object(v.jsx)("div",{})]})})]})},G=a(5),W=a(327),N=a(330),z=a(329),U=a(328);var R=function(e){Object(u.f)();var t,a=Object(u.g)(),r=a.country,i=a.city,c=a.lat,o=a.lon,j=Object(n.useState)([]),b=Object(d.a)(j,2),p=b[0],h=b[1],x=Object(n.useState)(null),g=Object(d.a)(x,2),O=g[0],f=g[1];function w(e){var t=e-273.15;return Math.round(t)}return Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://restcountries.com/v3.1/name/".concat(r));case 2:return t=e.sent,h(t.data),e.next=6,I.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&appid=cae15943359bb230669b0935772b0fd1"));case 6:a=e.sent,f(a.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r]),p&&O?Object(v.jsxs)("div",{className:"countryInfo",children:[Object(v.jsx)("h1",{style:{textAlign:"center",marginTop:"30px"},children:O.name}),Object(v.jsxs)(E.a,{sx:{display:"flex",margin:"20px",justifyContent:"space-evenly",marginTop:"30px"},children:[p.map((function(e){return console.log(e.maps.googleMaps),Object(v.jsx)("div",{children:Object(v.jsxs)(W.a,{sx:{maxWidth:345,margin:"20px",backgroundColor:"rgb(255,255,255, 0.7)"},children:[Object(v.jsx)("h3",{style:{textAlign:"center"},children:e.name.official}),Object(v.jsx)(U.a,{component:"img",alt:"flag",maxHeight:"140",maxWidth:"300",image:e.flags.svg}),Object(v.jsxs)(z.a,{children:[Object(v.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"div",children:e.name.common}),Object(v.jsxs)(m.a,{variant:"body2",color:"text.secondary",sx:{paddingBottom:"5px"},children:[Object(v.jsx)("b",{children:"Capital"})," ",e.capital]}),Object(v.jsxs)(m.a,{variant:"body2",color:"text.secondary",sx:{paddingBottom:"5px"},children:[Object(v.jsx)("b",{children:"Area"})," ",e.area," km\xb2"]}),Object(v.jsxs)(m.a,{variant:"body2",color:"text.secondary",sx:{paddingBottom:"5px"},children:[Object(v.jsx)("b",{children:"Population"})," ",e.population]}),Object(v.jsxs)(m.a,{variant:"body2",color:"text.secondary",sx:{paddingBottom:"13px"},children:[Object(v.jsx)("b",{children:"Continent"})," ",e.continents]})]}),Object(v.jsxs)(N.a,{children:[Object(v.jsx)(y.b,{size:"small",target:"_blank",to:"".concat(e.maps.googleMaps),rel:"noreferrer",children:"GoogleMaps"}),Object(v.jsx)(y.b,{size:"small",target:"_blank",to:"".concat(e.maps.openStreetMaps),rel:"noreferrer",children:"OpenStreetMaps"})]})]})})})),Object(v.jsx)("div",{children:Object(v.jsxs)(W.a,{sx:(t={height:"fit-content",margin:"20px"},Object(G.a)(t,"height","fit-content"),Object(G.a)(t,"backgroundColor","rgb(255,255,255, 0.7)"),t),children:[Object(v.jsx)("h3",{style:{textAlign:"center"},children:"Weather Of Today"}),Object(v.jsx)(U.a,{component:"img",alt:"flag",height:"190",width:"450",image:"https://media.wired.co.uk/photos/606dba1c9a15f73a597a2aa1/master/w_1600%2Cc_limit/weather.jpg"}),Object(v.jsxs)(z.a,{children:[Object(v.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"div",children:O.name}),Object(v.jsxs)(m.a,{variant:"body2",color:"text.secondary",sx:{paddingBottom:"5px"},children:[Object(v.jsx)("b",{children:"Temperature"})," ",w(O.main.temp)," \xb0C"]}),Object(v.jsxs)(m.a,{variant:"body2",color:"text.secondary",sx:{paddingBottom:"5px"},children:[Object(v.jsx)("b",{children:"Feels like"})," ",w(O.main.feels_like)," \xb0C"]}),Object(v.jsxs)(m.a,{variant:"body2",color:"text.secondary",sx:{paddingBottom:"5px"},children:[Object(v.jsx)("b",{children:"Humidity"})," ",O.main.humidity," %"]}),Object(v.jsxs)(m.a,{variant:"body2",color:"text.secondary",sx:{paddingBottom:"5px"},children:[Object(v.jsx)("b",{children:"Wind"})," ",O.wind.speed," meter/sec"]}),Object(v.jsxs)(m.a,{variant:"body2",color:"text.secondary",sx:{paddingBottom:"10px"},children:[Object(v.jsx)("b",{children:"Cloudiness"})," ",O.clouds.all," %"]})]}),Object(v.jsx)(N.a,{})]})}),Object(v.jsxs)(W.a,{sx:{margin:"20px",backgroundColor:"rgb(255,255,255, 0.7)"},children:[Object(v.jsx)("h3",{style:{textAlign:"center"},children:"Start Learning"}),Object(v.jsxs)(z.a,{sx:{paddingBottom:"20px"},children:[Object(v.jsxs)(m.a,{gutterBottom:!0,variant:"h5",component:"div",children:[Object(v.jsx)("img",{src:"/idea.png",alt:"idea",height:"40px"}),"  Create"]}),Object(v.jsx)(m.a,{variant:"body2",color:"text.secondary",sx:{paddingBottom:"40px"},children:"Create new words everyday to learn."}),Object(v.jsxs)(m.a,{gutterBottom:!0,variant:"h5",component:"div",children:[Object(v.jsx)("img",{src:"/book.png",alt:"idea",height:"40px"}),"  Learn"]}),Object(v.jsx)(m.a,{variant:"body2",color:"text.secondary",sx:{paddingBottom:"40px"},children:"Start learning and remembering the words."}),Object(v.jsxs)(m.a,{gutterBottom:!0,variant:"h5",component:"div",children:[Object(v.jsx)("img",{src:"/talking.png",alt:"idea",height:"40px"}),"  Apply"]}),Object(v.jsx)(m.a,{variant:"body2",color:"text.secondary",sx:{paddingBottom:"40px"},children:"Practise your learnings in real-life."}),Object(v.jsx)(y.b,{to:"/".concat(r,"/").concat(i,"/").concat(c,"/").concat(o,"/list"),style:{alignItem:"center",color:"black",textDecoration:"none"},children:" Add words to list"})]}),Object(v.jsx)(N.a,{})]}),Object(v.jsx)("div",{})]})]}):Object(v.jsx)("h1",{children:" Loading . . ."})},q=a(19),K=a(308),V=a(317),H=a(311),_=a(310),J=a(115),Z=a.n(J),Q=a(116),Y=a.n(Q),X=a(305),$=a(320),ee=a(162),te=a.n(ee),ae=Object(X.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},button:{margin:e.spacing(1)}}}));var ne=function(e){var t=Object(u.f)(),a=Object(n.useState)(null),r=Object(d.a)(a,2),i=r[0],c=r[1],o=ae(),j=Object(u.g)(),b=j.city,p=j.country,h=j.lat,x=j.lon,m=Object(n.useState)([{id:Object($.a)(),word:" ",translation:" "}]),g=Object(d.a)(m,2),O=g[0],f=g[1],w=function(e,t){var a=O.map((function(a){return e===a.id&&(a[t.target.name]=t.target.value),a}));f(a)},C=function(){var e=Object(l.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,I.a.post("".concat(B,"/").concat(b,"/wordlist"),O,{withCredentials:!0});case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("error"),c(e.t0.response.data.error);case 10:t("/".concat(p,"/").concat(b,"/").concat(h,"/").concat(x,"/details"));case 11:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),S=function(e){f([].concat(Object(q.a)(O),[{id:Object($.a)(),word:"",translation:""}]))},k=function(e){var t=Object(q.a)(O);t.splice(t.findIndex((function(t){return t.id===e})),1),f(t)};return Object(v.jsxs)(K.a,{style:{backgroundColor:"#F8F7F3",height:"100vh"},children:[Object(v.jsx)("h1",{style:{textAlign:"center",marginTop:"40px"},children:"Add words to your list"}),Object(v.jsxs)("form",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"10%"},className:o.root,onSubmit:C,children:[O.map((function(e){return Object(v.jsxs)("div",{style:{backgroundColor:"rgb(255,255,255, 0.4)",outline:"1px solid gray"},children:[Object(v.jsx)(V.a,{name:"word",label:"Input Word",variant:"filled",value:e.word,onChange:function(t){return w(e.id,t)},helperText:i||"",error:!!i}),Object(v.jsx)(V.a,{name:"translation",label:"Input Translation",variant:"filled",value:e.translation,onChange:function(t){return w(e.id,t)},helperText:i||"",error:!!i}),Object(v.jsx)(_.a,{disabled:1===e.length,onClick:function(){return k(e.id)},children:Object(v.jsx)(Z.a,{})}),Object(v.jsx)(_.a,{onClick:S,children:Object(v.jsx)(Y.a,{})})]},e.id)})),Object(v.jsx)(H.a,{className:o.button,variant:"contained",color:"primary",type:"submit",endIcon:Object(v.jsx)(te.a,{}),onClick:C,style:{marginTop:"20px"},children:"Send"}),Object(v.jsx)(y.b,{to:"/https://translate.google.com/",style:{marginTop:"20px"},children:"Forgot the translation? Click here"})]})]})},re=a(312),ie=a(331),ce=a(313),oe=a(314),se=a(50),le=a.n(se),de=(a(223),new le.a.Icon({iconUrl:"/pin.png",iconSize:[40,40]}));var ue=function(){var e=Object(n.useContext)(w).user,t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat(B,"/profile"),{withCredentials:!0});case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),e?Object(v.jsx)("div",{children:Object(v.jsx)(E.a,{sx:{display:"flex",marginTop:"30px",height:"100vh",justifyContent:"space-evenly",alignContent:"center",aligntItems:"center",textAlign:"center",padding:"15px"},children:Object(v.jsxs)("div",{children:[Object(v.jsxs)("h1",{style:{marginTop:"10px",padding:"20px",backgroundColor:"rgb(255,255,255, 0.7)"},children:["Places vistited by ",e.username]}),Object(v.jsxs)(re.a,{style:{width:"900px",height:"450px"},zoom:1.5,center:[51.505,-.09],scrollWheelZoom:!1,children:[Object(v.jsx)(ie.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.map((function(e){return Object(v.jsx)(ce.a,{icon:de,position:(t=e.lat,a=e.lon,[t,a]),children:Object(v.jsxs)(oe.a,{children:["Click on me ",Object(v.jsx)("br",{}),Object(v.jsx)(y.b,{to:"/".concat(e.country,"/").concat(e.city,"/").concat(e.lat,"/").concat(e.lon,"/details"),children:e.city})]})});var t,a}))]})]})})}):Object(v.jsx)("p",{children:"Loading.."})};var je=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=(t[0],t[1]),r=Object(n.useState)(null),i=Object(d.a)(r,2),c=i[0],o=i[1],j=Object(n.useState)(!0),b=Object(d.a)(j,2),p=b[0],h=b[1],m=Object(u.g)(),g=m.country,O=m.city,f=m.lat,w=m.lon;function C(){setTimeout((function(){h(!0)}),3e3),h(!1)}return console.log(g),Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat(B,"/").concat(g,"/").concat(O,"/").concat(f,"/").concat(w,"/details"),{withCredentials:!0});case 2:t=e.sent,console.log(t.data),a(t.data),o(t.data.words);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),c?Object(v.jsxs)(K.a,{children:[Object(v.jsx)("h1",{style:{textAlign:"center"},children:"click on the words to see the translation"}),Object(v.jsxs)("div",{style:{backgroundColor:"rgb(255,255,255, 0.7)"},children:[Object(v.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gridTemplateRows:"repeat(3, 100px)",gridGap:"30px",marginTop:"40px"},children:0==!c.length?c.map((function(e){return Object(v.jsx)("div",{children:Object(v.jsx)(x.a,{onClick:C,sx:{padding:"15px",margin:"20px",width:"200px",backgroundColor:"white",fontSize:20,fontWeight:"medium",textAlign:"center","&:hover":{backgroundColor:"lightgray"}},children:p?e.word:e.translation})})})):Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:" no words yet? "}),Object(v.jsx)(y.b,{to:"/".concat(g,"/").concat(O,"/").concat(f,"/").concat(w,"/list"),children:"Add words to your list"})]})}),Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(v.jsx)(y.b,{style:{alpha:"0.9",textDecoration:"none",fontSize:"24px",backgroundColor:"white",padding:"20px",alignItems:"flex-end",margin:"15px",color:"black"},to:"/".concat(g,"/").concat(O,"/").concat(f,"/").concat(w,"/edit"),children:"Edit words"}),Object(v.jsx)(y.b,{style:{textDecoration:"none",fontSize:"24px",backgroundColor:"white",padding:"20px",alignItems:"flex-end",margin:"15px",color:"black"},to:"/".concat(g,"/").concat(O,"/").concat(f,"/").concat(w),children:"Go back to country info"})]})]})]}):Object(v.jsx)("p",{children:"loading..."})},be=a(163),pe=a.n(be),he=Object(X.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},button:{margin:e.spacing(1)}}}));var xe=function(){var e=Object(u.f)(),t=he(),a=Object(u.g)(),r=a.country,i=a.city,c=a.lat,o=a.lon,j=Object(n.useState)(null),b=Object(d.a)(j,2),p=b[0],h=b[1];Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat(B,"/").concat(i,"/wordlist"),{withCredentials:!0});case 2:t=e.sent,a=t.data[0].words.map((function(e){return e.id=Object($.a)(),e})),h(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var x=function(e){h([].concat(Object(q.a)(p),[{id:Object($.a)(),word:"",translation:""}]))},m=function(e,t,a){var n=p.map((function(n){return console.log(e,n.id,e==n.id),e===n.id&&(n[t.target.name]=t.target.value,a?n.translation=t.target.value:n.word=t.target.value),n}));h(n)},g=function(){var t=Object(l.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),console.log("input",p),t.prev=2,t.next=5,I.a.patch("".concat(B,"/").concat(i,"/wordlist"),p,{withCredentials:!0});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),console.log("failed");case 10:e("/".concat(r,"/").concat(i,"/").concat(c,"/").concat(o,"/details"));case 11:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(e){return t.apply(this,arguments)}}();return p?(console.log(p),Object(v.jsx)("div",{style:{backgroundColor:"rgb(255,255,255, 0.7)",height:"fit-content",width:"fit-content",position:"absolute",top:"15%",left:"35%",marginTop:"-50px",marginLeft:"-50px"},children:Object(v.jsxs)(K.a,{children:[Object(v.jsx)("h1",{style:{textAlign:"center"},children:"Edit your words here"}),Object(v.jsxs)("form",{className:t.root,onSubmit:g,children:[0==!p.length?p.map((function(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)(V.a,{name:"word",label:"Input word",variant:"filled",defaultValue:e.word,onChange:function(t){return m(e.id,t)}}),Object(v.jsx)(V.a,{name:"translation",label:"Input Translation",variant:"filled",defaultValue:e.translation,onChange:function(t){return m(e.id,t,!0)}}),Object(v.jsx)(_.a,{disabled:1===p.length,onClick:function(){return function(e){var t=Object(q.a)(p);t.splice(t.findIndex((function(t){return t.id===e})),1),h(t)}(e.id)},children:Object(v.jsx)(Z.a,{})}),Object(v.jsx)(_.a,{onClick:x,children:Object(v.jsx)(Y.a,{})})]})})):Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:" no words yet? "}),Object(v.jsx)(y.b,{to:"/".concat(r,"/").concat(i,"/").concat(c,"/").concat(o,"/list"),children:"Add words to your list"})]}),Object(v.jsx)(H.a,{className:t.button,variant:"contained",color:"primary",type:"submit",endIcon:Object(v.jsx)(pe.a,{}),children:"Edit"}),Object(v.jsx)(y.b,{to:"/https://translate.google.com/",children:"Forgot the translation? click here"})]})]})})):Object(v.jsx)("p",{children:"Loading ..."})},me=Object(O.a)();var ge=function(){var e=Object(n.useContext)(w),t=e.user,a=e.setUser,r=Object(n.useContext)(w).error,i=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("imageUrl",t.target.image.files[0]),e.next=5,I.a.post("".concat(B,"/upload"),n);case 5:return r=e.sent,i={username:t.target.username.value,email:t.target.email.value,password:t.target.password.value,image:r.data.image},e.next=9,I.a.patch("".concat(B,"/edit"),i,{withCredentials:!0});case 9:c=e.sent,a(c.data);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t?(console.log(t),Object(v.jsx)("div",{style:{marginTop:"20px"},children:Object(v.jsxs)(f.a,{theme:me,children:[Object(v.jsx)("div",{style:{textAlign:"center",display:"block"},children:Object(v.jsx)("img",{src:t.image,style:{height:"150px",borderRadius:"50%"}})}),Object(v.jsxs)(g.a,{component:"main",maxWidth:"xs",style:{backgroundColor:"rgb(255,255,255, 0.7)"},children:[Object(v.jsx)(b.a,{}),Object(v.jsxs)(x.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(v.jsxs)(m.a,{component:"h1",variant:"h5",style:{marginTop:"10px"},children:["Edit Profile ",t.username]}),Object(v.jsxs)(x.a,{component:"form",onSubmit:i,noValidate:!0,sx:{mt:1},children:[Object(v.jsx)(p.a,{margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoFocus:!0,helperText:r||"",error:!!r}),Object(v.jsx)(p.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",helperText:r||"",error:!!r}),Object(v.jsx)(p.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",helperText:r||"",error:!!r}),Object(v.jsx)(p.a,{margin:"normal",fullWidth:!0,name:"image",label:"Profile Image",type:"file",id:"image",accept:"image/png, image/jpg"}),Object(v.jsx)(j.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Edit"})]})]})]})]})})):Object(v.jsx)("p",{children:"loadong..."})},Oe=a(332),fe=a(333),ye=a(335),ve=a(334),we=a(336),Ce=a(164),Se=a.n(Ce);var ke=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),c=Object(d.a)(i,2),o=c[0],u=c[1],j=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas (the)","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory (the)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands (the)","Central African Republic (the)","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands (the)","Colombia","Comoros (the)","Congo (the Democratic Republic of the)","Congo (the)","Cook Islands (the)","Costa Rica","Croatia","Cuba","Cura\xe7ao","Cyprus","Czechia","C\xf4te d'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic (the)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Falkland Islands (the) [Malvinas]","Faroe Islands (the)","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories (the)","Gabon","Gambia (the)","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (the)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea (the Democratic People's Republic of)","Korea (the Republic of)","Kuwait","Kyrgyzstan","Lao People's Democratic Republic (the)","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands (the)","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (the Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands (the)","New Caledonia","New Zealand","Nicaragua","Niger (the)","Nigeria","Niue","Norfolk Island","Northern Mariana Islands (the)","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines (the)","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of North Macedonia","Romania","Russian Federation (the)","Rwanda","R\xe9union","Saint Barth\xe9lemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan (the)","Suriname","Svalbard and Jan Mayen","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands (the)","Tuvalu","Uganda","Ukraine","United Arab Emirates (the)","United Kingdom of Great Britain and Northern Ireland (the)","United States Minor Outlying Islands (the)","United States of America (the)","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe","\xc5land Islands"];return Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j[Math.floor(Math.random()*j.length)],u(t),console.log(t),e.next=5,I.a.get("https://api.unsplash.com/search/photos?page=1&query=".concat(t,"&client_id=").concat("wk3uZwVPHSxmWraP3Opq_Tg5qfuSou6Cfneha-TmQvs"));case 5:a=e.sent,r(a.data.results),console.log(a.data.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),a?Object(v.jsxs)("div",{style:{marginTop:"-208.5px",marginLeft:"-375px",top:"35%",left:"40%",display:"block",position:"absolute",backgroundColor:"rgb(255,255,255, 0.7)",height:"600px"},children:[Object(v.jsx)("h1",{style:{textAlign:"center",display:"block",marginBottom:"5px"},children:"Don't know where to go?"}),Object(v.jsx)("div",{style:{textAlign:"center",marginBottom:"15px"},children:Object(v.jsx)(y.b,{style:{color:"black",fontSize:"12px"},to:"/random",onClick:function(){window.location.reload(!1)},children:"Get another random country"})}),Object(v.jsxs)(Oe.a,{sx:{width:1e3,height:600},children:[Object(v.jsx)(fe.a,{cols:2,children:Object(v.jsx)(ve.a,{style:{textAlign:"center",fontSize:"24px"},component:"div",children:o})},"Subheader"),a.map((function(e){return Object(v.jsxs)(fe.a,{children:[Object(v.jsx)("img",{src:"".concat(e.urls.raw,"?w=248&fit=crop&auto=format"),srcSet:"".concat(e.urls.raw,"?w=248&fit=crop&auto=format&dpr=2 2x"),alt:e.description,loading:"lazy"}),Object(v.jsx)(ye.a,{title:e.tags[1].title,subtitle:"@".concat(e.user.first_name),actionIcon:Object(v.jsx)(we.a,{sx:{color:"rgba(255, 255, 255, 0.54)"},"aria-label":"info about ".concat(e.user.first_name),children:Object(v.jsx)(Se.a,{})})})]},e.urls.raw)}))]})]}):Object(v.jsx)("p",{children:"loading.."})};var Te=function(){Object(n.useContext)(w);var e=Object(n.useContext)(w),t=e.user,a=e.setUser,r=(e.error,e.setError),i=Object(n.useState)(null),c=Object(d.a)(i,2),o=c[0],j=c[1],b=Object(n.useState)(null),p=Object(d.a)(b,2),h=p[0],x=(p[1],Object(n.useState)(null)),m=Object(d.a)(x,2),g=m[0],O=(m[1],Object(n.useState)(null)),f=Object(d.a)(O,2),y=(f[0],f[1]),C=Object(n.useState)(!0),S=Object(d.a)(C,2),T=S[0],A=S[1],L=Object(u.f)();Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(B,"/user"),{withCredentials:!0});case 3:t=e.sent,A(!1),a(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),A(!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var D=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={email:t.target.email.value,password:t.target.password.value},e.next=5,I.a.post("".concat(B,"/signin"),n,{withCredentials:!0});case 5:i=e.sent,a(i.data),L("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),r(e.t0.response.data.error);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post("".concat(B,"/logout"),{},{withCredentials:!0});case 2:a(null);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(s.a.mark((function e(a){var n,r,i,c,o,l,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t||L("/signin"),a.preventDefault(),n=a.target.country.value,r=a.target.city.value,i={},e.next=7,I.a.get("https://countriesnow.space/api/v0.1/countries");case 7:if(c=e.sent,y(c.data.data),0!=(o=c.data.data.filter((function(e){return e.country==n}))).length){e.next=14;break}j("country or city does not exist"),e.next=33;break;case 14:if(!o[0].cities.includes(r)){e.next=32;break}return e.prev=15,e.next=18,I.a.get("https://nominatim.openstreetmap.org/search/".concat(r,"?format=json&addressdetails=1&limit=1&polygon_svg=1"));case 18:return l=e.sent,d=l.data[0],i={country:a.target.country.value,city:a.target.city.value,lat:d.lat,lon:d.lon},e.next=23,I.a.post("".concat(B,"/country"),i,{withCredentials:!0});case 23:e.sent,L("".concat(n,"/").concat(r,"/").concat(d.lat,"/").concat(d.lon)),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(15),j(e.t0.response.data.error);case 30:e.next=33;break;case 32:j("Enter an existing country and city combination");case 33:case"end":return e.stop()}}),e,null,[[15,27]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log(t.currentTarget);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return T?Object(v.jsx)("p",{children:"loading. . . . "}):Object(v.jsxs)("div",{className:"page",style:{backgroundImage:'url("map.jpg")',height:"100vh"},children:[Object(v.jsx)(P,{onLogout:E,user:t}),Object(v.jsxs)(u.c,{style:{backgroundImage:'url("map.jpg")',height:"100vh"},children:[Object(v.jsx)(u.a,{path:"/",element:Object(v.jsx)(F,{btnSearch:G,user:t,countryError:o})}),Object(v.jsx)(u.a,{path:"/signin",element:Object(v.jsx)(k,{btnSignIn:D})}),Object(v.jsx)(u.a,{path:"/signup",element:Object(v.jsx)(M,{})}),Object(v.jsx)(u.a,{path:"/:country/:city/:lat/:lon",element:Object(v.jsx)(R,{city:g,country:h})}),Object(v.jsx)(u.a,{path:"/:country/:city/:lat/:lon/list",element:Object(v.jsx)(ne,{btnSubmit:W})}),Object(v.jsx)(u.a,{path:"/map",element:Object(v.jsx)(ue,{})}),Object(v.jsx)(u.a,{path:"/:country/:city/:lat/:lon/details",element:Object(v.jsx)(je,{})}),Object(v.jsx)(u.a,{path:"/profile",element:Object(v.jsx)(ge,{})}),Object(v.jsx)(u.a,{path:"/:country/:city/:lat/:lon/edit",element:Object(v.jsx)(xe,{})}),Object(v.jsx)(u.a,{path:"/random",element:Object(v.jsx)(ke,{})})]})]})};a(225);c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(y.a,{children:Object(v.jsx)(C,{children:Object(v.jsx)(Te,{})})})}),document.getElementById("root"))}},[[226,1,2]]]);
//# sourceMappingURL=main.fd9ddc18.chunk.js.map