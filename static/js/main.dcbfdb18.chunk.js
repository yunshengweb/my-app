(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){},21:function(e,t,a){e.exports=a(33)},33:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),c=a(6),s=a(5),i=a(7),l=a(0),o=a.n(l),u=a(19),m=a.n(u),h=a(37),d=a(38),p=a(34),b=a(35),v=a(36),E=a(2),g=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"GoBack",value:function(){this.props.history.goBack()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,{heroId:this.props.match.params.id,name:this.props.match.params.name}," "),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.GoBack.bind(this)},"Go Back"))}}]),t}(o.a.Component),f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={name:a.props.name},a.handleChange=a.handleChange.bind(Object(E.a)(Object(E.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({name:t})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,this.state.name," Details"),o.a.createElement("div",{className:"grid-pad"},"id: ",this.props.heroId),o.a.createElement("div",null,o.a.createElement("label",null,"name: ",o.a.createElement("input",{type:"text",value:this.state.name,placeholder:"name",onChange:this.handleChange}))))}}]),t}(o.a.Component),j=a(11),O=a.n(j),y=a(13),k=a(20),S={isAuthenticated:!1,authenticate:function(e,t,a){a.length<5?(this.isAuthenticated=!1,setTimeout(e(!1),100)):(this.isAuthenticated=!0,setTimeout(e(!0),100))},signout:function(e){this.isAuthenticated=!1,setTimeout(e(!1),100)}},C=function(e){var t=e.component,a=Object(k.a)(e,["component"]);return o.a.createElement(p.a,Object.assign({},a,{render:function(e){return S.isAuthenticated?o.a.createElement(t,e):o.a.createElement(v.a,{to:{pathname:"/EmailLogin",state:{from:e.location}}})}}))},N={dist:{},addCartItem:function(e){var t=this.dist[e];this.dist[e]=void 0===t?1:t+1},removeCartItem:function(e){var t=this.dist[e];t<2?delete this.dist[e]:this.dist[e]=t-1},getCartItem:function(e){var t=this.dist[e];return void 0===t?0:t},GetCart:function(){return Object.entries(this.dist)}},I=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={IsLoaded:!1},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"GoBack",value:function(){this.props.history.goBack()}},{key:"componentDidMount",value:function(){var e=Object(y.a)(O.a.mark(function e(){var t,a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/photos/"+this.props.match.params.id);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({pItem:a,IsLoaded:!0});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,this.props.match.params.id),o.a.createElement("br",null),this.state.IsLoaded&&o.a.createElement(M,{prod:this.state.pItem}," "),o.a.createElement(w,{itemKey:"itemkey"+this.props.match.params.id}),o.a.createElement("button",{onClick:this.GoBack.bind(this)},"Go Back"))}}]),t}(o.a.Component);function M(e){return o.a.createElement("img",{src:e.prod.thumbnailUrl,alt:"image",width:"300",height:"300"})}var w=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={Count:N.getCartItem(a.props.itemKey)},a.addItem=a.addItem.bind(Object(E.a)(Object(E.a)(a))),a.removeItem=a.removeItem.bind(Object(E.a)(Object(E.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"addItem",value:function(){N.addCartItem(this.props.itemKey);var e=this.state.Count;this.setState({Count:e+1})}},{key:"removeItem",value:function(){N.removeCartItem(this.props.itemKey);var e=this.state.Count;this.setState({Count:e-1})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",{onClick:this.addItem},"Add(",this.state.Count,")"),this.state.Count>0&&o.a.createElement("button",{onClick:this.removeItem},"Remove(",this.state.Count,")"))}}]),t}(o.a.Component),L=a(32);a(18);function V(e){return o.a.createElement("li",{className:"vertli"},o.a.createElement(L.a,{to:"".concat(e.cPath,"/").concat(e.id,"/").concat(e.name)},o.a.createElement("span",{className:"badge"},e.id),e.name))}function P(e){return o.a.createElement(L.a,{className:"module",to:"".concat(e.cPath,"/").concat(e.id,"/").concat(e.name)},e.name)}var x=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("ul",{className:"vertligroup"},this.props.iList.map(function(t){return o.a.createElement(V,{cPath:e.props.cPath,id:t.id,name:t.name,key:t.id.toString()}," ")}))}}]),t}(o.a.Component),T=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"grid grid-pad"},this.props.iList.map(function(t){return o.a.createElement(P,{cPath:e.props.cPath,id:t.id,name:t.name,key:t.id.toString()})}))}}]),t}(o.a.Component),A=[{id:11,name:"Mr. Nice"},{id:12,name:"Narco"},{id:13,name:"Bombasto"},{id:14,name:"Celeritas"},{id:15,name:"Magneta"},{id:16,name:"RubberMan"},{id:17,name:"Dynama"},{id:18,name:"Dr IQ"},{id:19,name:"Magma"},{id:20,name:"Tornado"}],D=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Top Heroes"),o.a.createElement(T,{iList:A.slice(0,4),cPath:"/HeroDetails"}))}}]),t}(o.a.Component),F=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Top Heroes"),o.a.createElement(x,{iList:A,cPath:"/HeroDetails"}))}}]),t}(o.a.Component),R=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={RediFrom:!1},a.checkValueEl=a.checkValueEl.bind(Object(E.a)(Object(E.a)(a))),a.checkValuePd=a.checkValuePd.bind(Object(E.a)(Object(E.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(E.a)(Object(E.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"checkValueEl",value:function(e){var t=e.target.value;t.length>50?(e.target.style.color="red",this.setState({EmailerrMsg:"too long (max 50)"})):t.length<5?(e.target.style.color="red",this.setState({EmailerrMsg:"too short (min 5)"})):/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(t)?(e.target.style.color="",this.setState({EmailerrMsg:""})):(e.target.style.color="red",this.setState({EmailerrMsg:"invalid email"}))}},{key:"checkValuePd",value:function(e){var t=e.target.value;t.length>20?(e.target.style.color="red",this.setState({PassworderrMsg:"too long (max 20)"})):t.length<1?(e.target.style.color="red",this.setState({PassworderrMsg:"too short (min 1)"})):/^(?=.*\d).{4,8}$/.test(t)?(e.target.style.color="",this.setState({PassworderrMsg:""})):(e.target.style.color="red",this.setState({PassworderrMsg:"4 and 8 digits long and at least one numeric."}))}},{key:"IsValid",value:function(){return void 0===this.state.EmailerrMsg?(this.setState({EmailerrMsg:"No email"}),!1):void 0===this.state.PassworderrMsg?(this.setState({PassworderrMsg:"No password"}),!1):this.state.EmailerrMsg.length>0?(this.setState({EmailerrMsg:"invalid email"}),!1):!(this.state.PassworderrMsg.length>0)||(this.setState({PassworderrMsg:"Invalid password"}),!1)}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),this.IsValid()){var a=e.target.elements,n=a.email.value,r=a.password.value;S.authenticate(function(e){t.setState({RediFrom:e})},n,r)}}},{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/"}}).from;return!0===this.state.RediFrom?o.a.createElement(v.a,{to:e}):o.a.createElement("div",{className:"form-style-10"},o.a.createElement("h1",null,"Sign In"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"inner-wrap"},o.a.createElement("label",null,"Email:"),o.a.createElement("input",{type:"email",placeholder:"email address",onChange:this.checkValueEl,name:"email"}),o.a.createElement("span",{className:"spanerrmsg"},this.state.EmailerrMsg)),o.a.createElement("div",{className:"inner-wrap"},o.a.createElement("label",null,"Pass Word"),o.a.createElement("input",{type:"password",placeholder:"password",onChange:this.checkValuePd,name:"password"}),o.a.createElement("span",{className:"spanerrmsg"},this.state.PassworderrMsg)),o.a.createElement("div",{className:"button-section"},o.a.createElement("input",{type:"submit",name:"Sign Im"}))))}}]),t}(o.a.Component),H=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={Touch:!1},a.checkValueFn=a.checkValueFn.bind(Object(E.a)(Object(E.a)(a))),a.checkValueLn=a.checkValueLn.bind(Object(E.a)(Object(E.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(E.a)(Object(E.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"checkValueFn",value:function(e){var t=e.target.value;t.length>20?(e.target.style.color="red",this.setState({FirstNameerrMsg:"too long (max 20)"})):t.length<5?(e.target.style.color="red",this.setState({FirstNameerrMsg:"too short (min 5)"})):(e.target.style.color="",this.setState({FirstNameerrMsg:""}))}},{key:"checkValueLn",value:function(e){var t=e.target.value;t.length>5?(e.target.style.color="red",this.setState({LastNameerrMsg:"too long (max 5)"})):t.length<2?(e.target.style.color="red",this.setState({LastNameerrMsg:"too short (min 2)"})):(e.target.style.color="",this.setState({LastNameerrMsg:""}))}},{key:"IsValid",value:function(){return void 0===this.state.FirstNameerrMsg?(console.log("err1"),!1):void 0===this.state.LastNameerrMsg?(console.log("err2"),!1):this.state.FirstNameerrMsg.length>0?(console.log("err3"),!1):!(this.state.LastNameerrMsg.length>0)||(console.log("err4"),!1)}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.IsValid()){var t=e.target.elements,a=t.firstName.value,n=t.lastName.value;alert("complete submit from here;"+a+" "+n)}}},{key:"render",value:function(){return o.a.createElement("div",{className:"divform"},o.a.createElement("label",null,"User Details"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"divinput"},o.a.createElement("label",{className:"lblinput"},"First Name"),o.a.createElement("input",{className:"inputvalid",type:"text",placeholder:"First Name",onChange:this.checkValueFn,name:"firstName"}),o.a.createElement("span",{className:"spanerrmsg"},this.state.FirstNameerrMsg)),o.a.createElement("div",{className:"divinput"},o.a.createElement("label",{className:"lblinput"},"Last Name"),o.a.createElement("input",{className:"inputvalid",type:"text",placeholder:"Last Name",onChange:this.checkValueLn,name:"lastName"}),o.a.createElement("span",{className:"spanerrmsg"},this.state.LastNameerrMsg)),o.a.createElement("button",{type:"submit",value:"Submit"},"Submit")))}}]),t}(o.a.Component),B=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={ArrImage:[],IsLoaded:!1},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(O.a.mark(function e(){var t,a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/photos");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({ArrImage:a,IsLoaded:!0});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.IsLoaded?o.a.createElement(G,{SearchSpace:this.state.ArrImage}):o.a.createElement("p",null,"Loading")}}]),t}(l.Component),G=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={Search:""},a.handleChange=a.handleChange.bind(Object(E.a)(Object(E.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value.substr(0,10);this.setState({Search:t})}},{key:"render",value:function(){var e=this,t=this.props.SearchSpace.filter(function(t){return-1!==t.title.toLowerCase().indexOf(e.state.Search.toLowerCase())});return o.a.createElement("div",null,o.a.createElement("input",{type:"text",value:this.state.Search,placeholder:"search",onChange:this.handleChange}),o.a.createElement("label",null,"  ",t.length,"  items found"),t.length>0&&o.a.createElement(K,{displays:t}))}}]),t}(o.a.Component),K=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={Start:0},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"RecordView",value:function(e){var t=this.state.Start;this.setState({Start:t+e})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"prevnext"},o.a.createElement("button",{onClick:function(){return e.RecordView(-10)},disabled:!(this.state.Start>0)},"Prev 10"),o.a.createElement("label",null,this.state.Start+1," to ",this.state.Start+10),o.a.createElement("button",{onClick:function(){return e.RecordView(10)},disabled:this.state.Start>this.props.displays.length-11},"Next 10")),o.a.createElement(U,{ArrInput:this.props.displays.slice(this.state.Start,this.state.Start+10)}," "))}}]),t}(l.Component);function U(e){return o.a.createElement("div",null,o.a.createElement("ul",null,e.ArrInput.map(function(e){return o.a.createElement("li",{key:e.id.toString(),className:"imageli"},o.a.createElement(L.a,{to:"/ProductDetail/"+e.id},o.a.createElement("img",{src:e.thumbnailUrl,alt:"image"})))})))}var z=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={MyToken:"My token"},a.state={MyKeyValue:0},a.checkToken=a.checkToken.bind(Object(E.a)(Object(E.a)(a))),a.keyValuePair=a.keyValuePair.bind(Object(E.a)(Object(E.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"keyValuePair",value:function(){var e={};delete(e={v1:10}).v1,void 0===e.v1&&this.setState({MyKeyValue:101})}},{key:"checkToken",value:function(){localStorage.getItem("token")?this.setState({MyToken:"Existed Token"}):this.setState({MyToken:"No Token"})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",{onClick:this.checkToken},"Auth Token"),o.a.createElement("label",null,this.state.MyToken),o.a.createElement("button",{onClick:this.keyValuePair},"Key Value"),o.a.createElement("label",null,this.state.MyKeyValue))}}]),t}(o.a.Component),Z=function(e){function t(e){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=N.GetCart();return o.a.createElement("div",{className:"carttable"},o.a.createElement("div",null,o.a.createElement("span",{className:"cartl1"},"Product Item")," ",o.a.createElement("span",{className:"cartl2"},"Quantity")," "),e.map(function(e,t){return o.a.createElement("div",null,o.a.createElement("span",{className:"cartl1"},e),o.a.createElement("span",{className:"cartl2"},t)," ")}),o.a.createElement(b.a,{to:"/UserEntry"},"Check Out"))}}]),t}(o.a.Component),J=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",null,"Create"),o.a.createElement("button",null,"Read"),o.a.createElement("button",null,"Update"),o.a.createElement("button",null,"Delete"),o.a.createElement(Q,null))}}]),t}(l.Component),Q=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={data:[],Start:0},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"RecordView",value:function(e){var t=this.state.Start;this.setState({Start:t+e})}},{key:"componentDidMount",value:function(){var e=Object(y.a)(O.a.mark(function e(){var t,a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({data:a});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"prevnext"},o.a.createElement("button",{onClick:function(){return e.RecordView(-10)},disabled:!(this.state.Start>0)},"Prev 10"),o.a.createElement("label",null,this.state.Start+1," to ",this.state.Start+10),o.a.createElement("button",{onClick:function(){return e.RecordView(10)},disabled:this.state.Start>89},"Next 10")),o.a.createElement("ul",{className:"licol"},this.state.data.slice(this.state.Start,this.state.Start+10).map(function(e){return o.a.createElement("li",{key:e.id.toString(),className:"vertli"},o.a.createElement("span",{className:"col1"},e.id),o.a.createElement("span",{className:"col2"},e.userId),o.a.createElement("span",{className:"col3"},e.title),o.a.createElement("span",{className:"col4"},e.body))})))}}]),t}(l.Component);a.d(t,"TopNavigation",function(){return W}),a.d(t,"Loginout",function(){return q});var $=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement("div",null,o.a.createElement(W,null),o.a.createElement(d.a,null,o.a.createElement(p.a,{path:"/",component:D,exact:!0}),o.a.createElement(p.a,{path:"/Home",component:D,exact:!0}),o.a.createElement(p.a,{path:"/HeroesList",component:F}),o.a.createElement(C,{path:"/HeroDetails/:id/:name",component:g}),o.a.createElement(p.a,{path:"/ProductDetail/:id/",component:I}),o.a.createElement(p.a,{path:"/RestApi",component:J}),o.a.createElement(p.a,{path:"/Loginout",component:q,exact:!0}),o.a.createElement(p.a,{path:"/EmailLogin",component:R}),o.a.createElement(C,{path:"/UserEntry",component:H}),o.a.createElement(p.a,{path:"/ImageSearch",component:B}),o.a.createElement(p.a,{path:"/ShopCart",component:Z}),o.a.createElement(p.a,{path:"/Temp",component:z}))))}}]),t}(o.a.Component),W=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"nav"},o.a.createElement("div",null,o.a.createElement(b.a,{to:"/Home"},"Dashbord"),o.a.createElement(b.a,{to:"/HeroesList"},"Heroes"),o.a.createElement(b.a,{to:"/RestApi"},"REST"),o.a.createElement(b.a,{to:"/UserEntry"},"UserInfo"),o.a.createElement(b.a,{to:"/ImageSearch"},"ImageSearch"),o.a.createElement(b.a,{to:"/Temp"},"Temp")),o.a.createElement("div",{className:"topright"},o.a.createElement(b.a,{to:"/ShopCart"},"Cart"),o.a.createElement(b.a,{to:"/Loginout"},S.isAuthenticated?"Logout":"Login")))}}]),t}(o.a.Component),q=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return S.isAuthenticated?(S.signout(function(){console.log("logout")}),o.a.createElement(v.a,{to:"/Home"})):o.a.createElement(v.a,{to:"/EmailLogin"})}}]),t}(o.a.Component);m.a.render(o.a.createElement($,null),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.dcbfdb18.chunk.js.map