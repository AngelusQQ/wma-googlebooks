(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/title.ed1574cc.png"},22:function(e,t,n){},39:function(e,t,n){e.exports=n(75)},44:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},57:function(e,t){},59:function(e,t){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(37),c=n.n(r),s=(n(44),n(77)),i=n(79),l=n(78),u=n(18),m=n(9),h=n(10),d=n(12),f=n(11),p=n(13),v=(n(22),n(47),function(e){return o.a.createElement("div",{id:"NavBar"},o.a.createElement("span",{id:"span"},o.a.createElement("a",{href:"https://books.google.com",target:"blank"},"Google Books")),o.a.createElement("span",{className:"span"},o.a.createElement("a",{href:"/"},"Home")),o.a.createElement("span",{className:"span"},o.a.createElement("a",{href:"/saved"},"Saved Books")))}),b=(n(49),function(e){return o.a.createElement("img",{id:"image",src:e.src,alt:"title",height:e.height,width:e.width})}),E=(n(51),function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"container-title"},"Currently Showing ",e.searchSize," Search Results:"),"TEMP"!==e.results?e.results.map(function(t){return o.a.createElement("div",{className:"container"},o.a.createElement("span",{id:"buttonOne",className:"button"},o.a.createElement("button",null,o.a.createElement("a",{href:t.volumeInfo.previewLink,target:"blank"}),e.buttonOne)),o.a.createElement("span",{id:"buttonTwo",className:"button"},o.a.createElement("button",null,e.buttonTwo)),o.a.createElement("h1",{className:"text"},t.volumeInfo.title||"No Title Provided"),o.a.createElement("h3",{className:"text"},"Author: ",t.volumeInfo.authors||"No Author Provided"),o.a.createElement("div",null),o.a.createElement("span",null,o.a.createElement("div",{id:"text"},o.a.createElement("img",{src:t.volumeInfo.imageLinks.thumbnail,alt:"Book"})),o.a.createElement("h3",{className:"text"},"Description: ",t.volumeInfo.description||"No Description Provided")))}):o.a.createElement("div",{className:"empty-container"}))}),g=n(19),k=n.n(g),w=n(21),O=n.n(w),S=n(23),C=n.n(S),N={hostname:"wma-googlebooks.herokuapp.com",path:"/api/books",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}},B={searchBooks:function(e){var t="https://www.googleapis.com/books/v1/volumes?q="+(e.includes(" ")?e.trim().split(" ").join("+"):e.trim());return new Promise(function(e,n){O.a.get(t,function(t){if(console.log("RESPONSE CODE",t.statusCode),t.statusCode>=200&&t.statusCode<300){var a="";t.on("data",function(e){return a+=e}),t.on("end",function(){return e(JSON.parse(a))})}else n(new Error(t.statusCode))}).on("error",function(e){return n(e)})})},getBooks:function(e){return new Promise(function(t,n){O.a.get(e,function(e){if(e.statusCode>=200&&e.statusCode<300){var a="";e.on("data",function(e){return a+=e}),e.on("end",function(){return t(JSON.parse(a))})}else n(new Error(e.statusCode))}).on("error",function(e){return n(e)})})},saveBook:function(e,t,n){var a=C.a.stringify({title:e||"No Title Provided",authors:t||"No Author Provided",description:n||"No Description Provided"});return new Promise(function(e,t){var n=O.a.request(N,function(t){var n="";t.on("data",function(e){n+=e}),t.on("end",function(){e(n)})});n.write(a),n.end(),n.on("error",function(e){return t(e)})})}},j=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={books:"TEMP",search:"",searchSize:0},n.loadBooks=function(){B.getBooks("/api/books").then(function(e){console.log(typeof e),console.log(e)}).catch(function(e){return console.log(e)})},n.saveBooks=function(){B.saveBook().then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},n.handleInputChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(u.a)({},a,o))},n.submitSearch=function(e){e.preventDefault(),console.log(n.state.search),B.searchBooks(n.state.search).then(function(e){n.setState({books:e.items,search:"",searchSize:e.items.length}),console.log(e.items)}).catch(function(e){return console.log(e)})},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b,{src:k.a}),o.a.createElement("form",null,o.a.createElement("input",{id:"searchbar",value:this.state.search,onChange:this.handleInputChange,name:"search"}),o.a.createElement("button",{id:"submitButton",disabled:!this.state.search,onClick:this.submitSearch},"Search")),o.a.createElement(E,{onChange:this.handleInputChange,searchSize:this.state.searchSize,results:this.state.books,name:"searchSize",buttonOne:"Add to Saved Books",buttonTwo:"View"}))}}]),t}(a.Component),y=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"Page Not Found (404)")}}]),t}(a.Component),P=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={books:"TEMP",searchSize:0},n.loadBooks=function(){B.getBooks("/api/books").then(function(e){n.setState({books:e})}).catch(function(e){return console.log(e)})},n.handleInputChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(u.a)({},a,o))},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b,{src:k.a}),o.a.createElement(E,{onChange:this.handleInputChange,searchSize:this.state.searchSize,results:this.state.books,name:"searchSize",buttonOne:"View Book",buttonTwo:"Delete Book"}))}}]),t}(a.Component),I=function(){return o.a.createElement(s.a,null,o.a.createElement("div",null,o.a.createElement(v,null),o.a.createElement(i.a,null,o.a.createElement(l.a,{exact:!0,path:"/",component:j}),o.a.createElement(l.a,{exact:!0,path:"/search",component:j}),o.a.createElement(l.a,{exact:!0,path:"/saved",component:P}),o.a.createElement(l.a,{component:y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,2,1]]]);
//# sourceMappingURL=main.35a0c50d.chunk.js.map