(this["webpackJsonppokemon-go"]=this["webpackJsonppokemon-go"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(1),a=n.n(i),o=n(26),s=n.n(o),r=(n(36),n(29)),d=(n(37),n(14)),l=n(15),u=n(19),j=n(18),b=n(20),p=(n(40),n(25));n(43);p.a.initializeApp({apiKey:"AIzaSyBNxW81QdG-QG1cdgzwmLsV1qaB1B2tE7c",authDomain:"pokemon-go-site.firebaseapp.com",projectId:"pokemon-go-site",storageBucket:"pokemon-go-site.appspot.com",messagingSenderId:"200332795378",appId:"1:200332795378:web:e28e96001caae4d38c9f6b",measurementId:"G-WDV6TXMSG5"});var h=p.a.firestore(),m=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).handleSubmit=function(e){e&&(c.isValid(e)?(console.log("This is a valid code"),c.setState({validity:"valid"}),c.sendToDB(e)):(c.setState({validity:"invalid"}),console.log("Invalid, please check your code")))},c.isValid=function(e){return/(^[0-9]*$)/.test(e)&&12===e.length},c.setColorStyle=function(){return c.state.validity?"valid"!==c.state.validity||c.state.error?"#f34a":"#4a0a":"#0004"},c.sendToDB=function(e){h.collection("codes").add({code:e,timestamp:new Date}).then((function(){c.setState({error:!1})})).catch((function(){c.setState({error:!0})}))},c.state={validity:"",error:!1},c}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"container inputArea",style:{backgroundColor:this.setColorStyle()},children:[this.state.validity?"valid"===this.state.validity?!1===this.state.error?Object(c.jsx)("p",{children:"Code Submitted!"}):Object(c.jsx)("p",{children:"There was an error, please try again"}):Object(c.jsx)("p",{children:"Invalid Code, make sure you've entered 12 numbers only"}):Object(c.jsx)("p",{children:"Enter your friend code!"}),Object(c.jsx)(b.c,{initialValues:{code:""},onSubmit:function(t){return e.handleSubmit(t.code)},children:Object(c.jsxs)(b.b,{className:"inputForm",children:[Object(c.jsx)(b.a,{id:"code",name:"code",placeholder:"Code"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{type:"submit",children:"Add"})]})})]})}}]),n}(a.a.Component),f=n(30),v=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).componentDidMount=function(){h.collection("codes").limit(10).orderBy("timestamp","desc").get().then((function(e){e.docs.forEach((function(e){for(var t=e.data().code.split(),n=4;n<t.length;n+=4)console.log(t[n]);c.setState({codeList:[].concat(Object(f.a)(c.state.codeList),[e.data()])})}))}))},c.state={codeList:[]},c}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"container listArea",children:[Object(c.jsx)("p",{children:"Other codes:"}),this.state.codeList.map((function(e){return Object(c.jsx)("p",{children:e.code},e.timestamp)}))]})}}]),n}(a.a.Component);var O=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2);return t[0],t[1],Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(m,{}),Object(c.jsx)(v,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),g()}},[[42,1,2]]]);
//# sourceMappingURL=main.5c9be9b2.chunk.js.map