(this["webpackJsonpreact-studymaster"]=this["webpackJsonpreact-studymaster"]||[]).push([[0],{135:function(e,t,n){},136:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var c=n(26),a=n.n(c),i=(n(135),n(3)),s=n(12),o=n(11),r=n(0),l=n.n(r),d=(n(136),n(137),n(93)),j=n.n(d),b=n(221),u=n(213),h=n(231),m=n(233),O=n(209),p=n(229),x=n(232),v=n(228),f=n(230),g=n(6),S=n(90),y=n(1),w=Object(g.a)(O.a)((function(e){var t,n=e.theme;return t={},Object(i.a)(t,"&.".concat(S.a.head),{backgroundColor:n.palette.common.black,color:n.palette.common.white}),Object(i.a)(t,"&.".concat(S.a.body),{fontSize:14}),Object(i.a)(t,"&.".concat(S.a.root),{borderBottom:"none"}),t})),k=Object(g.a)(v.a)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}})),M=function(e){return Object(y.jsx)(p.a,{component:f.a,children:Object(y.jsxs)(h.a,{sx:{},size:"small","aria-label":"simple table",children:[Object(y.jsx)(x.a,{children:Object(y.jsx)(k,{children:e.colNames.map((function(e,t){return Object(y.jsx)(w,{children:e},t)}))})}),Object(y.jsx)(m.a,{children:Object.keys(e.colVals).map((function(t,n){return Object(y.jsxs)(k,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(y.jsx)(w,{component:"th",scope:"row",children:t}),e.colVals[t].map((function(e,t){return Object(y.jsx)(w,{children:e},t)}))]},n)}))})]})})},C=n(112),V=n.n(C),D=n(220);var E=function(e){var t=Object(r.useState)(!1),n=Object(o.a)(t,2),c=n[0],a=n[1];return Object(y.jsxs)("div",{className:"sidebar-divider",children:[Object(y.jsx)("div",{className:"button-area ",children:Object(y.jsxs)(D.a,{variant:"contained",onClick:function(){e.setCollapseDevToolComp(!e.collapseDevToolComp),a(!c)},"aria-controls":"example-collapse-text","aria-expanded":c,children:[c&&Object(y.jsxs)("div",{children:[Object(y.jsx)(j.a,{})," Developer Tools"]}),!c&&Object(y.jsx)(b.a,{disableFocusListener:!0,title:"Developer Tools",children:Object(y.jsx)(j.a,{})})]})}),Object(y.jsx)("div",{className:"variable-list",children:Object(y.jsxs)(u.a,{in:c,dimension:"width",children:[Object(y.jsx)("hr",{}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h3",{children:"VSM Variable List"}),Object(y.jsx)("hr",{}),Object(y.jsx)("div",{className:c?"logbox":"",style:{height:"35vh",color:"white"},children:Object(y.jsx)(M,{colNames:["Variables","Value"],colVals:e.vsmVars})})]})]})}),Object(y.jsx)("div",{className:"log",children:Object(y.jsxs)(u.a,{in:c,dimension:"width",children:[Object(y.jsx)("hr",{}),Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:"flex-container",children:[Object(y.jsx)("div",{className:"item1",children:Object(y.jsx)("h3",{children:"Log history"})}),Object(y.jsx)("div",{className:"item2",children:Object(y.jsxs)(D.a,{variant:"secondary",onClick:function(){console.log("Downloading...");var t=e.infoLogContents,n="StudyMasterDebugLog"+function(){var e=new Date,t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return"".concat(new Array(t).fill(0)).concat(e).slice(-t)},n=e.getMilliseconds();return n=((n=(n<10?"0":"")+n)<100?"0":"")+n,e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+"_"+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+":"+n}(),c=[];Object.keys(t).forEach((function(e){c.push([e,t[e].join(",")].join(","))}));var a=[["Timestamp","cmdType","cmdContent"].join(",")].concat(c).join("\r\n"),i=new Blob([a],{type:"application/csv"}),s=URL.createObjectURL(i),o=document.createElement("a");o.href=s,o.download=n+".csv",document.body.appendChild(o),o.click(),document.body.removeChild(o)},children:[Object(y.jsx)(V.a,{})," Download logs"]})})]}),Object(y.jsx)("hr",{}),Object(y.jsx)("div",{className:c?"logbox":"",style:{height:"35vh",color:"white"},children:Object(y.jsx)(M,{colNames:["Timestamp","cmdType","cmdContent"],colVals:e.infoLogContents})})]})]})})]})},F=n(17),N=n(214),T=n(217),R=n(235),I=n(222),U=n(223),A=n(234),L=n(225),B=n(219),P=n(226),_=n(218);var z=function(e,t,n,c,a,d){var j=n.variable[c],b=l.a.useState(50),u=Object(o.a)(b,2),h=u[0],m=u[1],O=n.options[c].split(","),p=[{value:0,label:O[0]},{value:100,label:O[1]}],x=Object(r.useState)(O.reduce((function(e,t){return Object(s.a)(Object(s.a)({},e),{},Object(i.a)({},t,!1))}),{})),v=Object(o.a)(x,2),f=v[0],g=v[1];function S(e,t){if("undefined"===typeof e)return!1;for(var n=e.length;n--;)if(e[n]===t)return!0;return!1}return Object(y.jsxs)("div",{children:["text"===n.type[c]&&Object(y.jsxs)(N.a,{style:{marginTop:"30px",marginBottom:"30px"},children:[Object(y.jsx)(L.a,{color:"primary",focused:!0,htmlFor:j,style:{marginBottom:"10px"},children:n.variable[c]}),Object(y.jsx)(T.a,Object(s.a)({variant:"standard",name:j,label:n.options[c],value:e.userSubmittedInfo[j]||"",id:j,onChange:function(n){t(j,n.target.value),e.webSocket.send("VSMMessage#VAR#".concat(j,"#").concat(n.target.value))}},a[j]&&{error:!0,helperText:a[j]}))]}),"number"===n.type[c]&&Object(y.jsxs)(N.a,{style:{marginTop:"30px",marginBottom:"30px"},children:[Object(y.jsx)(L.a,{color:"primary",focused:!0,htmlFor:j,style:{marginBottom:"10px"},children:n.variable[c]}),Object(y.jsx)(T.a,Object(s.a)({type:"number",style:{width:"150px"},name:j,InputProps:{inputProps:{min:0,max:1e3}},label:n.options[c],id:j,value:e.userSubmittedInfo[j]||"",onChange:function(n){t(j,n.target.value),e.webSocket.send("VSMMessage#VAR#".concat(j,"#").concat(n.target.value))}},a[j]&&{error:!0,helperText:a[j]}))]}),"radio"===n.type[c]&&Object(y.jsxs)(N.a,{style:{marginTop:"30px",marginBottom:"30px"},children:[Object(y.jsx)(L.a,{color:"primary",focused:!0,htmlFor:j,style:{marginBottom:"10px"},children:n.variable[c]}),Object(y.jsx)(N.a,{children:Object(y.jsx)(A.a,{error:void 0!==a[j],children:Object(y.jsxs)(I.a,{"aria-label":n.variable[c],name:"radio-buttons-group",children:[O.map((function(n){return Object(y.jsx)(_.a.Check,{name:"group1",type:"radio",label:n,value:n||"",checked:e.userSubmittedInfo[j]===n||!1,onChange:function(n){t(j,n.target.value),e.webSocket.send("VSMMessage#VAR#".concat(j,"#").concat(n.target.value))}},n)})),Object(y.jsx)(R.a,{children:a[j]})]})})})]}),"checkbox"===n.type[c]&&Object(y.jsxs)(N.a,{style:{marginTop:"30px",marginBottom:"30px"},children:[Object(y.jsx)(L.a,{color:"primary",focused:!0,htmlFor:j,style:{marginBottom:"10px"},children:n.variable[c]}),Object(y.jsxs)(A.a,{error:void 0!==a[j],children:[O.map((function(n){return Object(y.jsx)(U.a,{label:n,control:Object(y.jsx)(B.a,{defaultValue:!1,name:n,color:"default",checked:S(e.userSubmittedInfo[j],n),onChange:function(n){!function(n,c){var a=Object(s.a)(Object(s.a)({},f),{},Object(i.a)({},c.target.name,c.target.checked));g(a);var o=Object.keys(a).filter((function(e){return!0===a[e]})),r=" ";o.length>0&&(r=o.join(",")),t(n,r),e.webSocket.send("VSMMessage#VAR#".concat(n,"#")+r)}(j,n)}})},n)})),Object(y.jsx)(R.a,{children:a[j]})]})]}),"slider"===n.type[c]&&Object(y.jsxs)(N.a,{style:{marginTop:"30px",marginBottom:"30px"},children:[Object(y.jsx)(L.a,{color:"primary",focused:!0,htmlFor:j,style:{marginBottom:"10px"},children:n.variable[c]}),Object(y.jsxs)(A.a,{error:void 0!==a[j],children:[Object(y.jsx)(P.a,{value:h,"aria-label":"Default",valueLabelDisplay:"auto",onChange:function(n,c){t(j,c),m(c),e.webSocket.send("VSMMessage#VAR#".concat(j,"#").concat(c))},getAriaValueText:function(e){return"".concat(e)},marks:p}),Object(y.jsx)(R.a,{children:a[j]})]})]})]})};var Q=function(e){var t=[];if(e.inputSheetFieldDetails&&"REQUEST"===e.inputSheetFieldDetails.action)for(var n=0;n<e.inputSheetFieldDetails.variable.length;n++){var c=z(e,e.updateUserSubmittedInfo,e.inputSheetFieldDetails,n,e.formFillingErrors,e.webSocket);t.push(c)}return Object(y.jsx)("div",{children:t.map((function(e,t){return Object(y.jsx)("div",{style:{width:"95%"},children:e},t)}))})},q=n(227),W=n(216),H=n(114),J=n.n(H),Y=n(113),$=n.n(Y);var G=function(e){var t=Object(r.useState)({}),n=Object(o.a)(t,2),c=n[0],a=n[1];function i(){if(0===e.userSubmittedInfo.size){var t=Object(F.a)(e.inputSheetFieldDetails.variable).sort(),n={};return t.forEach((function(e){n[e]="Please fill "+e})),a(n),!1}if(Object(F.a)(Object.keys(e.userSubmittedInfo)).length>0){for(var c=[],i=0;i<e.inputSheetFieldDetails.variable.length;i++)"checkbox"!==e.inputSheetFieldDetails.type[i]&&c.push(e.inputSheetFieldDetails.variable[i]);var s=[].concat(c).sort(),o=Object(F.a)(Object.keys(e.userSubmittedInfo)).sort();o=o.filter((function(t){return""!==e.userSubmittedInfo[t]}));var r=s.filter((function(e){return!o.includes(e)})),l={};if(r.forEach((function(e){l[e]="Please fill "+e})),a(l),0===r.length)return!0}}return Object(y.jsxs)("div",{className:"input-sheet-unit-divider",children:[Object(y.jsx)("form",{style:{marginLeft:"1vw"},children:Object(y.jsx)("div",{className:"in-form-fields",children:Object(y.jsxs)("fieldset",{children:[e.inputSheetFieldDetails&&"REQUEST"===e.inputSheetFieldDetails.action,Object(y.jsx)(Q,{userSubmittedInfo:e.userSubmittedInfo,setUserSubmittedInfo:e.setUserSubmittedInfo,updateUserSubmittedInfo:e.updateUserSubmittedInfo,inputSheetFieldDetails:e.inputSheetFieldDetails,validateForm:i,formFillingErrors:c,webSocket:e.webSocket}),e.inputSheetFieldDetails&&"SUCCESSFULSEND"===e.inputSheetFieldDetails.action&&Object(y.jsx)("div",{children:Object(y.jsx)("h2",{style:{color:"green"},children:"Successfully posted!"})})]})})}),Object(y.jsx)("form",{children:Object(y.jsxs)("div",{className:"in-form-buttons",children:[e.inputSheetFieldDetails&&"REQUEST"===e.inputSheetFieldDetails.action&&Object(y.jsx)(q.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justifyContent:"center",children:Object(y.jsx)(q.a,{item:!0,xs:2,children:Object(y.jsxs)(W.a,{direction:"row",spacing:2,style:{textAlign:"center"},children:[Object(y.jsx)(D.a,{style:{borderRadius:35,backgroundColor:"green",padding:"18px 36px",fontSize:"18px",width:"15vw"},variant:"contained",onClick:function(){i()&&e.sendSubmit()},startIcon:Object(y.jsx)($.a,{}),children:" Submit"}),Object(y.jsx)(D.a,{style:{borderRadius:35,backgroundColor:"red",padding:"18px 36px",fontSize:"18px",width:"15vw"},variant:"contained",color:"error",onClick:e.sendCancel,startIcon:Object(y.jsx)(J.a,{}),children:" Cancel"})]})})}),!(e.inputSheetFieldDetails&&"REQUEST"===e.inputSheetFieldDetails.action)&&Object(y.jsx)("div",{children:Object(y.jsx)("p",{style:{color:"white"},children:"No active requests."})})]})})]})},K=n(115),X=n.n(K),Z=n(116),ee=n.n(Z),te=n(117),ne=n.n(te);function ce(){var e=new Date,t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return"".concat(new Array(t).fill(0)).concat(e).slice(-t)},n=e.getMilliseconds();return n=((n=(n<10?"0":"")+n)<100?"0":"")+n,e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+"_"+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+":"+n}var ae=function(){var e="https:"===document.location.protocol?"wss://":"ws://",t=Object(r.useState)(new WebSocket(e+document.location.host+"/ws")),n=Object(o.a)(t,2),c=n[0],a=n[1],l=Object(r.useState)(!1),d=Object(o.a)(l,2),j=d[0],u=d[1],h=Object(r.useState)({}),m=Object(o.a)(h,2),O=m[0],p=m[1],x=Object(r.useState)(""),v=Object(o.a)(x,2),f=v[0],g=v[1],S=Object(r.useState)(),w=Object(o.a)(S,2),k=w[0],M=w[1],C=Object(r.useState)(!0),V=Object(o.a)(C,2),F=V[0],N=V[1],T=Object(r.useState)(!1),R=Object(o.a)(T,2),I=R[0],U=R[1],A=Object(r.useState)(""),L=Object(o.a)(A,2),B=L[0],P=L[1],_=Object(r.useState)({}),z=Object(o.a)(_,2),Q=z[0],q=z[1],W=Object(r.useState)({}),H=Object(o.a)(W,2),J=H[0],Y=H[1];function $(){c.readyState===WebSocket.OPEN&&(c.send("VSMMessage#STATUS#alive"),setTimeout($,100))}return Object(r.useEffect)((function(){console.log("Setting up web socket...");var t=new WebSocket(e+document.location.host+"/ws");t.onopen=function(){u(!0),$(),console.log("Connection initiated by server."),q({}),p({})},t.onclose=function(){u(!1),Y({}),M({}),U(!1),P("");var e="VSM is not in 'play' state anymore. Please press 'play' in VSM and refresh the page.";console.log(e),g(e)},t.onmessage=function(e){var t=e.data.split("#"),n=t[1];if(["REQUEST","PROCEED","INFORM","UPDATE","STATUS"].includes(n)){if("REQUEST"===n){var c={action:n,variable:t[3].split(";"),options:t[4].split(";"),type:t[5].split(";"),timestamp:t[2],vm_uid:t[6]};M(c);var a=c.variable.reduce((function(e,t){return Object(s.a)(Object(s.a)({},e),{},Object(i.a)({},t,""))}),{});Y(a);var o={};o[ce()]=[n,t[5]],p(Object.assign(O,o))}if("PROCEED"===n){var r={};r[ce()]=[n,t[4]],g(t[4]),U(!0),P(t[6]),p(Object.assign(O,r))}if("INFORM"===n){var l={};l[ce()]=[n,t[4]],g(t[4]),p(Object.assign(O,l)),U(!1)}if("UPDATE"===n){var d=t[2],j=t[3],b={};b[d]=[j],q(Object.assign(Q,b))}"STATUS"===n&&console.log()}else console.log("Unknown command: "+n);u(!0)},a(t),document.title="VSM StudyMaster";var n=document.querySelector("link[rel*='icon']")||document.createElement("link");return n.type="image/x-icon",n.rel="shortcut icon",n.href=document.location.protocol+"scenemaker.dfki.de/images/scenemaker/logo.png",document.getElementsByTagName("head")[0].appendChild(n),function(){t.disconnect()}}),[]),Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)("div",{className:F?"wrapper-collapsed":"wrapper",children:[Object(y.jsx)("div",{className:"header box",children:Object(y.jsxs)("div",{className:"flex-container",children:[Object(y.jsx)("div",{className:"item1",children:Object(y.jsx)("h1",{children:"Studymaster"})}),Object(y.jsx)("div",{className:"item2",children:j?Object(y.jsx)(b.a,{disableFocusListener:!0,title:"VSM connected",children:Object(y.jsx)(X.a,{style:{fill:"green",fontSize:50}})}):Object(y.jsx)(b.a,{disableFocusListener:!0,title:"VSM not connected",children:Object(y.jsx)(ee.a,{style:{fill:"red",fontSize:50}})})})]})}),Object(y.jsx)("div",{className:"sidebar box",children:Object(y.jsx)(E,{vsmVars:Q,collapseDevToolComp:F,setCollapseDevToolComp:N,infoLogContents:O})}),Object(y.jsx)("div",{className:"inform box",children:Object(y.jsxs)("div",{className:"flex-container",children:[Object(y.jsx)("div",{className:"item1",children:Object(y.jsx)("h2",{children:f})}),I&&Object(y.jsx)("div",{className:"item2",children:Object(y.jsx)("div",{className:"button-area",children:Object(y.jsx)(D.a,{variant:"contained",onClick:function(){c.send("VSMMessage#VAR#request_result#PROCEED#"+B),p({}),Y({}),M({}),g(""),U(!1),P("")},children:Object(y.jsx)(ne.a,{})})})})]})}),Object(y.jsx)("div",{className:"content box",children:Object(y.jsx)(G,{inputSheetFieldDetails:k,setUserSubmittedInfo:Y,updateUserSubmittedInfo:function(e,t){var n=Object(s.a)({},J);n[e]=t,Y(n)},sendSubmit:function(){for(var e=0;e<k.variable.length;e++){var t=k.variable[e];if("radio"===k.type[e])J.hasOwnProperty(t)&&c.send("VSMMessage#VAR#".concat(t,"#").concat(J[t]));else if("text"===k.type[e])J.hasOwnProperty(t)&&c.send("VSMMessage#VAR#".concat(t,"#").concat(J[t]));else if("number"===k.type[e])J.hasOwnProperty(t)&&c.send("VSMMessage#VAR#".concat(t,"#").concat(J[t]));else if("checkbox"===k.type[e]){if(J.hasOwnProperty(t)){var n=J[t];""===n&&(n=" "),c.send("VSMMessage#VAR#".concat(t,"#").concat(n))}}else"slider"===k.type[e]&&J.hasOwnProperty(t)&&c.send("VSMMessage#VAR#".concat(t,"#").concat(J[t]))}c.send("VSMMessage#VAR#request_result#SUBMIT#"+k.vm_uid),M({action:"SUCCESSFULSEND",timestamp:k.timestamp}),Y(new Map)},sendCancel:function(){c.send("VSMMessage#VAR#request_result#CANCEL#"+k.vm_uid),p({}),Y({}),M({}),g(""),U(!1),P("")},userSubmittedInfo:J,infoLogContents:O,webSocket:c})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(y.jsx)(ae,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[147,1,2]]]);
//# sourceMappingURL=main.3ceea3d8.chunk.js.map