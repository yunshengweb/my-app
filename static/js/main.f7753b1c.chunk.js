(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){},21:function(e,t,a){e.exports=a(33)},33:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),l=a(5),c=a(4),i=a(6),o=a(0),s=a.n(o),u=a(19),m=a.n(u),h=a(37),d=a(38),p=a(34),E=a(35),b=a(36),f=a(7),v=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).myRef=s.a.createRef(),a.state={vRan:[0,0,0,0],Winner:0},a.FocusTextInput=a.FocusTextInput.bind(Object(f.a)(Object(f.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"FocusTextInput",value:function(){this.myRef.current.focus()}},{key:"MathRandom",value:function(e,t){var a=[];a[0]=R(),a[1]=R(),a[2]=e,a[3]=t,N(a[0],a[3])&&!N(a[1],a[2])?this.setState({Winner:2}):N(a[1],a[2])&&!N(a[0],a[3])?this.setState({Winner:1}):this.setState({Winner:0}),a[1]+=a[0],a[3]+=a[2],this.setState({vRan:a})}},{key:"render",value:function(){var e,t,a,n=this,r=this.state.vRan[0]+this.state.vRan[2];return this.state.Winner>1.1?(t="pplrr",a="pplrg",e=s.a.createElement("h2",null,"Winner:Hero")):this.state.Winner>.1?(a="pplrr",t="pplrg",e=s.a.createElement("h2",null,"Winner:Villain")):(t="pplr",a="pplr",e=s.a.createElement("h2",null,"No winner")),s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",null,"This is a sample work using react. It is a simple online store. Click the Product tab to browse all products."),s.a.createElement("button",{onClick:this.FocusTextInput},"Focusme"),s.a.createElement("p",null,"try ",s.a.createElement("b",null,"forwardRef"),": click the button the text input get focused"),s.a.createElement(g,{ref:this.myRef}),s.a.createElement(C,null)),s.a.createElement("div",null,s.a.createElement("div",{className:"gtitle"},s.a.createElement("h1",null,"finger-guessing game")),s.a.createElement("div",{className:"pgame"},s.a.createElement(M,{name:"Villain",fns:this.state.vRan[0],ttl:this.state.vRan[1],shwin:t}),s.a.createElement("div",{className:"pwin"},e,s.a.createElement("h3",null,r)),s.a.createElement(M,{name:"Hero",fns:this.state.vRan[2],ttl:this.state.vRan[3],shwin:a}),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(0,0)}},"H0T0"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(0,1)}},"H0T1"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(0,2)}},"H0T2"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(0,3)}},"H0T3"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(0,4)}},"H0T4"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(0,5)}},"H0T5"),s.a.createElement("br",null),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(1,0)}},"H1T1"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(1,1)}},"H1T2"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(1,2)}},"H1T3"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(1,3)}},"H1T4"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(1,4)}},"H1T5"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(1,5)}},"H1T6"),s.a.createElement("br",null),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(2,0)}},"H2T2"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(2,1)}},"H2T3"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(2,2)}},"H2T4"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(2,3)}},"H2T5"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(2,4)}},"H2T6"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(2,5)}},"H2T7"),s.a.createElement("br",null),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(3,0)}},"H3T3"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(3,1)}},"H3T4"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(3,2)}},"H3T5"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(3,3)}},"H3T6"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(3,4)}},"H3T7"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(3,5)}},"H3T8"),s.a.createElement("br",null),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(4,0)}},"H4T4"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(4,1)}},"H4T5"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(4,2)}},"H4T6"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(4,3)}},"H4T7"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(4,4)}},"H4T8"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(4,5)}},"H4T9"),s.a.createElement("br",null),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(5,0)}},"H5T5"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(5,1)}},"H5T6"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(5,2)}},"H5T7"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(5,3)}},"H5T8"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(5,4)}},"H5T9"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(5,5)}},"H5T10"),s.a.createElement("br",null))),s.a.createElement("hr",null),s.a.createElement("div",null,s.a.createElement("p",null,"The following is not part of the application, it is instruction. Instruction will be displayed on each of the following page with same color"),s.a.createElement(y,null)))}}]),t}(s.a.Component),g=s.a.forwardRef(function(e,t){return s.a.createElement("input",{type:"text",placeholder:"focusme",ref:t})}),k=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,this.props.added))}}]),t}(s.a.Component);var j,O,C=(j=k,O="Higher-Order Components",function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(j,{added:O})}}]),t}(s.a.Component));function y(e){return s.a.createElement("div",{className:"manual"},s.a.createElement("div",{className:"info"},s.a.createElement("h3",null,"Route"),s.a.createElement("h3",null,"Access permission")),s.a.createElement("div",{className:"tips"},s.a.createElement("h3",null,"Try the link on the top")))}var M=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:this.props.shwin},s.a.createElement("h1",null,this.props.name),s.a.createElement("h1",null,this.props.ttl),s.a.createElement("h3",null,this.props.fns))}}]),t}(s.a.Component);function R(){return Math.floor(6*Math.random())}function N(e,t){return!(Math.abs(e-t)>.1)}var T=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"GoBack",value:function(){this.props.history.goBack()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(S,{heroId:this.props.match.params.id,name:this.props.match.params.name}," "),s.a.createElement("br",null),s.a.createElement("button",{onClick:this.GoBack.bind(this)},"Go Back"))}}]),t}(s.a.Component),S=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={name:a.props.name},a.handleChange=a.handleChange.bind(Object(f.a)(Object(f.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({name:t})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h2",null,this.state.name," Details"),s.a.createElement("div",{className:"grid-pad"},"id: ",this.props.heroId),s.a.createElement("div",null,s.a.createElement("label",null,"name: ",s.a.createElement("input",{type:"text",value:this.state.name,placeholder:"name",onChange:this.handleChange}))))}}]),t}(s.a.Component),H=a(11),w=a.n(H),I=a(13),x=a(20),L={isAuthenticated:!1,authenticate:function(e,t,a){a.length<5?(this.isAuthenticated=!1,setTimeout(e(!1),100)):(this.isAuthenticated=!0,setTimeout(e(!0),100))},signout:function(e){this.isAuthenticated=!1,setTimeout(e(!1),100)}},V=function(e){var t=e.component,a=Object(x.a)(e,["component"]);return s.a.createElement(p.a,Object.assign({},a,{render:function(e){return L.isAuthenticated?s.a.createElement(t,e):s.a.createElement(b.a,{to:{pathname:"/EmailLogin",state:{from:e.location}}})}}))},P={dist:{},addCartItem:function(e){var t=this.dist[e];this.dist[e]=void 0===t?1:t+1},removeCartItem:function(e){var t=this.dist[e];t<2?delete this.dist[e]:this.dist[e]=t-1},getCartItem:function(e){var t=this.dist[e];return void 0===t?0:t},GetCart:function(){return Object.entries(this.dist)}},A=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={IsLoaded:!1},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"GoBack",value:function(){this.props.history.goBack()}},{key:"componentDidMount",value:function(){var e=Object(I.a)(w.a.mark(function e(){var t,a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/photos/"+this.props.match.params.id);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({pItem:a,IsLoaded:!0});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",null,this.state.IsLoaded&&s.a.createElement(F,{prod:this.state.pItem}," "),s.a.createElement(W,{itemKey:"itemkey"+this.props.match.params.id}),s.a.createElement("button",{onClick:this.GoBack.bind(this),className:"mybutton"},"Go back to product list and continue shopping")),s.a.createElement("div",null,s.a.createElement(D,null)))}}]),t}(s.a.Component);function F(e){return s.a.createElement("div",{className:"pcontainer"},s.a.createElement("div",{className:"pthumb"},s.a.createElement("img",{src:e.prod.thumbnailUrl,alt:"image",width:"300",height:"300"})),s.a.createElement("div",{className:"pcontent"},s.a.createElement("h3",{className:"ptitle"},"albumId:",e.prod.albumId),s.a.createElement("h3",null,"id:",e.prod.id),s.a.createElement("p",null,"title:",e.prod.title),s.a.createElement("p",null,"url:",e.prod.url)))}var W=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={Count:P.getCartItem(a.props.itemKey)},a.addItem=a.addItem.bind(Object(f.a)(Object(f.a)(a))),a.removeItem=a.removeItem.bind(Object(f.a)(Object(f.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"addItem",value:function(){P.addCartItem(this.props.itemKey);var e=this.state.Count;this.setState({Count:e+1})}},{key:"removeItem",value:function(){P.removeCartItem(this.props.itemKey);var e=this.state.Count;this.setState({Count:e-1})}},{key:"render",value:function(){return s.a.createElement("div",{class:"addremove"},s.a.createElement("button",{onClick:this.addItem},this.state.Count>0?"Add":"Buy","(",this.state.Count," )"),this.state.Count>0&&s.a.createElement("button",{onClick:this.removeItem},"Remove(",this.state.Count,")"))}}]),t}(s.a.Component);function D(e){return s.a.createElement("div",{className:"manual"},s.a.createElement("div",{className:"info"},s.a.createElement("h3",null,"Add to or remove from the shopping cart"),s.a.createElement("h3",null,"Go back to product list")),s.a.createElement("div",{className:"tips"},s.a.createElement("h3",null,"Try buy (changed to add after first click)"),s.a.createElement("h3",null,"Remove button dispear if no item in cart"),s.a.createElement("h3",null,"Click Cart on the top")))}var B=a(32);a(18);function G(e){return s.a.createElement("li",{className:"vertli"},s.a.createElement(B.a,{to:"".concat(e.cPath,"/").concat(e.id,"/").concat(e.name)},s.a.createElement("span",{className:"badge"},e.id),e.name))}function U(e){return s.a.createElement(B.a,{className:"module",to:"".concat(e.cPath,"/").concat(e.id,"/").concat(e.name)},e.name)}var K=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("ul",{className:"vertligroup"},this.props.iList.map(function(t){return s.a.createElement(G,{cPath:e.props.cPath,id:t.id,name:t.name,key:t.id.toString()}," ")}))}}]),t}(s.a.Component),z=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"grid grid-pad"},this.props.iList.map(function(t){return s.a.createElement(U,{cPath:e.props.cPath,id:t.id,name:t.name,key:t.id.toString()})}))}}]),t}(s.a.Component),J=[{id:11,name:"Mr. Nice"},{id:12,name:"Narco"},{id:13,name:"Bombasto"},{id:14,name:"Celeritas"},{id:15,name:"Magneta"},{id:16,name:"RubberMan"},{id:17,name:"Dynama"},{id:18,name:"Dr IQ"},{id:19,name:"Magma"},{id:20,name:"Tornado"}];s.a.Component;function Z(e){return s.a.createElement("div",{className:"manual"},s.a.createElement("div",{className:"info"},s.a.createElement("h3",null,"Route"),s.a.createElement("h3",null,"Access permission")),s.a.createElement("div",{className:"tips"},s.a.createElement("h3",null,"Try the link on the top")))}var Q=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Top Heroes"),s.a.createElement(K,{iList:J,cPath:"/HeroDetails"}))}}]),t}(s.a.Component),$=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={RediFrom:!1},a.checkValueEl=a.checkValueEl.bind(Object(f.a)(Object(f.a)(a))),a.checkValuePd=a.checkValuePd.bind(Object(f.a)(Object(f.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(Object(f.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"checkValueEl",value:function(e){var t=e.target.value;t.length>50?(e.target.style.color="red",this.setState({EmailerrMsg:"too long (max 50)"})):t.length<5?(e.target.style.color="red",this.setState({EmailerrMsg:"too short (min 5)"})):/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(t)?(e.target.style.color="",this.setState({EmailerrMsg:""})):(e.target.style.color="red",this.setState({EmailerrMsg:"invalid email"}))}},{key:"checkValuePd",value:function(e){var t=e.target.value;t.length>20?(e.target.style.color="red",this.setState({PassworderrMsg:"too long (max 20)"})):t.length<1?(e.target.style.color="red",this.setState({PassworderrMsg:"too short (min 1)"})):/^(?=.*\d).{4,8}$/.test(t)?(e.target.style.color="",this.setState({PassworderrMsg:""})):(e.target.style.color="red",this.setState({PassworderrMsg:"4 and 8 digits long and at least one numeric."}))}},{key:"IsValid",value:function(){return void 0===this.state.EmailerrMsg?(this.setState({EmailerrMsg:"No email"}),!1):void 0===this.state.PassworderrMsg?(this.setState({PassworderrMsg:"No password"}),!1):this.state.EmailerrMsg.length>0?(this.setState({EmailerrMsg:"invalid email"}),!1):!(this.state.PassworderrMsg.length>0)||(this.setState({PassworderrMsg:"Invalid password"}),!1)}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),this.IsValid()){var a=e.target.elements,n=a.email.value,r=a.password.value;L.authenticate(function(e){t.setState({RediFrom:e})},n,r)}}},{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/"}}).from;return!0===this.state.RediFrom?s.a.createElement(b.a,{to:e}):s.a.createElement("div",null,s.a.createElement("div",{className:"form-style-10"},s.a.createElement("h1",null,"Sign In"),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"inner-wrap"},s.a.createElement("label",null,"Email:"),s.a.createElement("input",{type:"email",placeholder:"email address",onChange:this.checkValueEl,name:"email"}),s.a.createElement("span",{className:"spanerrmsg"},this.state.EmailerrMsg)),s.a.createElement("div",{className:"inner-wrap"},s.a.createElement("label",null,"Pass Word"),s.a.createElement("input",{type:"password",placeholder:"password",onChange:this.checkValuePd,name:"password"}),s.a.createElement("span",{className:"spanerrmsg"},this.state.PassworderrMsg)),s.a.createElement("div",{className:"button-section"},s.a.createElement("input",{type:"submit",name:"Sign Im"})))),s.a.createElement(q,null))}}]),t}(s.a.Component);function q(e){return s.a.createElement("div",{className:"manual"},s.a.createElement("div",{className:"info"},s.a.createElement("h3",null,"Email validations (Displaying Tips, Messages)"),s.a.createElement("h3",null,"Regular expression")),s.a.createElement("div",{className:"tips"},s.a.createElement("h3",null,"will continue with valid email and valid password")))}var X=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={Touch:!1},a.checkValueFn=a.checkValueFn.bind(Object(f.a)(Object(f.a)(a))),a.checkValueLn=a.checkValueLn.bind(Object(f.a)(Object(f.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(Object(f.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"checkValueFn",value:function(e){var t=e.target.value;t.length>20?(e.target.style.color="red",this.setState({FirstNameerrMsg:"too long (max 20)"})):t.length<5?(e.target.style.color="red",this.setState({FirstNameerrMsg:"too short (min 5)"})):(e.target.style.color="",this.setState({FirstNameerrMsg:""}))}},{key:"checkValueLn",value:function(e){var t=e.target.value;t.length>5?(e.target.style.color="red",this.setState({LastNameerrMsg:"too long (max 5)"})):t.length<2?(e.target.style.color="red",this.setState({LastNameerrMsg:"too short (min 2)"})):(e.target.style.color="",this.setState({LastNameerrMsg:""}))}},{key:"IsValid",value:function(){return void 0===this.state.FirstNameerrMsg?(console.log("err1"),!1):void 0===this.state.LastNameerrMsg?(console.log("err2"),!1):this.state.FirstNameerrMsg.length>0?(console.log("err3"),!1):!(this.state.LastNameerrMsg.length>0)||(console.log("err4"),!1)}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.IsValid()){var t=e.target.elements,a=t.firstName.value,n=t.lastName.value;alert("complete submit from here;"+a+" "+n)}}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"divform"},s.a.createElement("label",null,"User Details"),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"divinput"},s.a.createElement("label",{className:"lblinput"},"First Name"),s.a.createElement("input",{className:"inputvalid",type:"text",placeholder:"First Name",onChange:this.checkValueFn,name:"firstName"}),s.a.createElement("span",{className:"spanerrmsg"},this.state.FirstNameerrMsg)),s.a.createElement("div",{className:"divinput"},s.a.createElement("label",{className:"lblinput"},"Last Name"),s.a.createElement("input",{className:"inputvalid",type:"text",placeholder:"Last Name",onChange:this.checkValueLn,name:"lastName"}),s.a.createElement("span",{className:"spanerrmsg"},this.state.LastNameerrMsg)),s.a.createElement("button",{type:"submit",value:"Submit"},"Submit"))),s.a.createElement("div",null,s.a.createElement(Y,null)))}}]),t}(s.a.Component);function Y(e){return s.a.createElement("div",{className:"manual"},s.a.createElement("div",{className:"info"},s.a.createElement("h3",null,"User details for new users"),s.a.createElement("h3",null,"Shipping address and payment should be implemented")),s.a.createElement("div",{className:"tips"},s.a.createElement("h3",null,"This is the end of a shopping process")))}var _=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={ArrImage:[],IsLoaded:!1},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=Object(I.a)(w.a.mark(function e(){var t,a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/photos");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({ArrImage:a,IsLoaded:!0});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.IsLoaded?s.a.createElement("div",null,s.a.createElement(ee,{SearchSpace:this.state.ArrImage}),s.a.createElement(ne,null)):s.a.createElement("p",null,"Loading")}}]),t}(o.Component),ee=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={Search:""},a.handleChange=a.handleChange.bind(Object(f.a)(Object(f.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value.substr(0,10);this.setState({Search:t})}},{key:"render",value:function(){var e=this,t=this.props.SearchSpace.filter(function(t){return-1!==t.title.toLowerCase().indexOf(e.state.Search.toLowerCase())});return s.a.createElement("div",null,s.a.createElement("div",{className:"search"},s.a.createElement("input",{type:"text",value:this.state.Search,placeholder:"search",onChange:this.handleChange}),s.a.createElement("label",null,"  ",t.length,"  items found")),t.length>0&&s.a.createElement(te,{displays:t}))}}]),t}(s.a.Component),te=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={Start:0},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"RecordView",value:function(e){var t=this.state.Start;this.setState({Start:t+e})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"prevnext"},s.a.createElement("button",{onClick:function(){return e.RecordView(-10)},disabled:!(this.state.Start>0)},"Prev 10"),s.a.createElement("label",null,this.state.Start+1," to ",this.state.Start+10),s.a.createElement("button",{onClick:function(){return e.RecordView(10)},disabled:this.state.Start>this.props.displays.length-11},"Next 10")),s.a.createElement(ae,{ArrInput:this.props.displays.slice(this.state.Start,this.state.Start+10)}," "),s.a.createElement("div",{className:"placeorder"},"Click to see the details and place order"))}}]),t}(o.Component);function ae(e){return s.a.createElement("div",null,s.a.createElement("ul",null,e.ArrInput.map(function(e){return s.a.createElement("li",{key:e.id.toString(),className:"imageli"},s.a.createElement(B.a,{to:"/ProductDetail/"+e.id},s.a.createElement("img",{src:e.thumbnailUrl,alt:"product",width:"100",height:"100"})))})))}function ne(e){return s.a.createElement("div",{className:"manual"},s.a.createElement("div",{className:"info"},s.a.createElement("h3",null,"Search, partial display"),s.a.createElement("h3",null,"JSON api")),s.a.createElement("div",{className:"tips"},s.a.createElement("h3",null,"Try the search box"),s.a.createElement("h3",null,"Navigate the search results")))}var re=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={vRan:[0,0,0,0],Winner:0},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"MathRandom",value:function(e,t){var a=[];a[0]=ce(),a[1]=ce(),a[2]=e,a[3]=t,ie(a[0],a[3])&&!ie(a[1],a[2])?this.setState({Winner:2}):ie(a[1],a[2])&&!ie(a[0],a[3])?this.setState({Winner:1}):this.setState({Winner:0}),a[1]+=a[0],a[3]+=a[2],this.setState({vRan:a})}},{key:"render",value:function(){var e,t,a,n=this,r=this.state.vRan[0]+this.state.vRan[2];return this.state.Winner>1.1?(t="pplrr",a="pplrg",e=s.a.createElement("h2",null,"Winner:Hero")):this.state.Winner>.1?(a="pplrr",t="pplrg",e=s.a.createElement("h2",null,"Winner:Villain")):(t="pplr",a="pplr",e=s.a.createElement("h2",null,"No winner")),s.a.createElement("div",null,s.a.createElement("div",{className:"gtitle"},s.a.createElement("h1",null,"finger-guessing game")),s.a.createElement("div",{className:"pgame"},s.a.createElement(le,{name:"Villain",fns:this.state.vRan[0],ttl:this.state.vRan[1],shwin:t}),s.a.createElement("div",{className:"pwin"},s.a.createElement("h2",null,e),s.a.createElement("h3",null,r)),s.a.createElement(le,{name:"Hero",fns:this.state.vRan[2],ttl:this.state.vRan[3],shwin:a}),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(0,0)}},"H0T0"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(0,1)}},"H0T1"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(0,2)}},"H0T2"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(0,3)}},"H0T3"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(0,4)}},"H0T4"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(0,5)}},"H0T5"),s.a.createElement("br",null),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(1,0)}},"H1T1"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(1,1)}},"H1T2"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(1,2)}},"H1T3"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(1,3)}},"H1T4"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(1,4)}},"H1T5"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(1,5)}},"H1T6"),s.a.createElement("br",null),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(2,0)}},"H2T2"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(2,1)}},"H2T3"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(2,2)}},"H2T4"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(2,3)}},"H2T5"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(2,4)}},"H2T6"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(2,5)}},"H2T7"),s.a.createElement("br",null),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(3,0)}},"H3T3"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(3,1)}},"H3T4"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(3,2)}},"H3T5"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(3,3)}},"H3T6"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(3,4)}},"H3T7"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(3,5)}},"H3T8"),s.a.createElement("br",null),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(4,0)}},"H4T4"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(4,1)}},"H4T5"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(4,2)}},"H4T6"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(4,3)}},"H4T7"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(4,4)}},"H4T8"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(4,5)}},"H4T9"),s.a.createElement("br",null),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(5,0)}},"H5T5"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(5,1)}},"H5T6"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(5,2)}},"H5T7"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(5,3)}},"H5T8"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(5,4)}},"H5T9"),s.a.createElement("button",{onClick:function(e,t){return n.MathRandom(5,5)}},"H5T10"),s.a.createElement("br",null)),s.a.createElement("div",null,s.a.createElement("ul",null,s.a.createElement("li",null,"2 players: villain and hero"),s.a.createElement("li",null))))}}]),t}(s.a.Component),le=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:this.props.shwin},s.a.createElement("h1",null,this.props.name),s.a.createElement("h1",null,this.props.ttl),s.a.createElement("h3",null,this.props.fns))}}]),t}(s.a.Component);function ce(){return Math.floor(6*Math.random())}function ie(e,t){return!(Math.abs(e-t)>.1)}var oe=function(e){function t(e){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=P.GetCart();return s.a.createElement("div",null,s.a.createElement("div",{className:"carttable"},s.a.createElement("div",null,s.a.createElement("span",{className:"cartl1"},"Product Item")," ",s.a.createElement("span",{className:"cartl2"},"Quantity")," "),e.map(function(e,t){return s.a.createElement("div",null,s.a.createElement("span",{className:"cartl1"},e),s.a.createElement("span",{className:"cartl2"},t)," ")}),s.a.createElement(E.a,{to:"/UserEntry"},"Check Out")),s.a.createElement(se,null))}}]),t}(s.a.Component);function se(e){return s.a.createElement("div",{className:"manual"},s.a.createElement("div",{className:"info"},s.a.createElement("h3",null,"Display cart items")),s.a.createElement("div",{className:"tips"},s.a.createElement("h3",null,"Check out from here")))}var ue=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("button",null,"Create"),s.a.createElement("button",null,"Read"),s.a.createElement("button",null,"Update"),s.a.createElement("button",null,"Delete"),s.a.createElement(me,null))}}]),t}(o.Component),me=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={data:[],Start:0},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"RecordView",value:function(e){var t=this.state.Start;this.setState({Start:t+e})}},{key:"componentDidMount",value:function(){var e=Object(I.a)(w.a.mark(function e(){var t,a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({data:a});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"prevnext"},s.a.createElement("button",{onClick:function(){return e.RecordView(-10)},disabled:!(this.state.Start>0)},"Prev 10"),s.a.createElement("label",null,this.state.Start+1," to ",this.state.Start+10),s.a.createElement("button",{onClick:function(){return e.RecordView(10)},disabled:this.state.Start>89},"Next 10")),s.a.createElement("ul",{className:"licol"},this.state.data.slice(this.state.Start,this.state.Start+10).map(function(e){return s.a.createElement("li",{key:e.id.toString(),className:"vertli"},s.a.createElement("span",{className:"col1"},e.id),s.a.createElement("span",{className:"col2"},e.userId),s.a.createElement("span",{className:"col3"},e.title),s.a.createElement("span",{className:"col4"},e.body))})))}}]),t}(o.Component);a.d(t,"TopNavigation",function(){return de}),a.d(t,"Loginout",function(){return pe});var he=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(h.a,null,s.a.createElement("div",null,s.a.createElement(de,null),s.a.createElement(d.a,null,s.a.createElement(p.a,{path:"/",component:v,exact:!0}),s.a.createElement(p.a,{path:"/my-app",component:v,exact:!0}),s.a.createElement(p.a,{path:"/Home",component:v,exact:!0}),s.a.createElement(V,{path:"/HeroesList",component:Q}),s.a.createElement(V,{path:"/HeroDetails/:id/:name",component:T}),s.a.createElement(p.a,{path:"/ProductDetail/:id/",component:A}),s.a.createElement(V,{path:"/RestApi",component:ue}),s.a.createElement(p.a,{path:"/Loginout",component:pe,exact:!0}),s.a.createElement(p.a,{path:"/EmailLogin",component:$}),s.a.createElement(V,{path:"/UserEntry",component:X}),s.a.createElement(p.a,{path:"/ImageSearch",component:_}),s.a.createElement(p.a,{path:"/ShopCart",component:oe}),s.a.createElement(p.a,{path:"/Temp",component:re}))))}}]),t}(s.a.Component),de=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"nav"},s.a.createElement("div",null,s.a.createElement(E.a,{to:"/Home"},"Home"),s.a.createElement(E.a,{to:"/ImageSearch"},"Product"),s.a.createElement(E.a,{to:"/UserEntry"},"UserInfo")),s.a.createElement("div",{className:"topright"},s.a.createElement(E.a,{to:"/ShopCart"},"Cart"),s.a.createElement(E.a,{to:"/Loginout"},L.isAuthenticated?"Logout":"Login")))}}]),t}(s.a.Component),pe=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return L.isAuthenticated?(L.signout(function(){console.log("logout")}),s.a.createElement(b.a,{to:"/Home"})):s.a.createElement(b.a,{to:"/EmailLogin"})}}]),t}(s.a.Component);m.a.render(s.a.createElement(he,null),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.f7753b1c.chunk.js.map