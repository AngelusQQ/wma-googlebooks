(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(59)},36:function(e,t,n){},38:function(e,t,n){},44:function(e,t){},46:function(e,t){},59:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(29),c=n.n(r),s=(n(36),n(9)),i=n(10),u=n(12),l=n(11),f=n(13),h=n(30),m=(n(38),function(e){return a.a.createElement("div",null,"TEMP"!==e.results?e.results.map(function(e){return a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,e.volumeInfo.title),a.a.createElement("h3",null,e.volumeInfo.authors),a.a.createElement("h3",null,e.volumeInfo.description))}):a.a.createElement("div",{className:"empty-container"}))}),d=n(14),p=n.n(d),v=n(15),g=n.n(v),b={hostname:"wma-googlebooks.herokuapp.com",path:"/api/books",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}},w={searchBooks:function(e){var t="https://www.googleapis.com/books/v1/volumes?q="+(e.includes(" ")?e.trim().split(" ").join("+"):e.trim());return new Promise(function(e,n){p.a.get(t,function(t){if(console.log("RESPONSE CODE",t.statusCode),t.statusCode>=200&&t.statusCode<300){var o="";t.on("data",function(e){return o+=e}),t.on("end",function(){return e(JSON.parse(o))})}else n(new Error(t.statusCode))}).on("error",function(e){return n(e)})})},getBooks:function(e){return new Promise(function(t,n){p.a.get(e,function(e){if(e.statusCode>=200&&e.statusCode<300){var o="";e.on("data",function(e){return o+=e}),e.on("end",function(){return t(JSON.parse(o))})}else n(new Error(e.statusCode))}).on("error",function(e){return n(e)})})},saveBook:function(e,t,n){var o=g.a.stringify({title:e||"No Title Provided",authors:t||"No Author Provided",description:n||"No Description Provided"});return new Promise(function(e,t){var n=p.a.request(b,function(t){var n="";t.on("data",function(e){n+=e}),t.on("end",function(){e(n)})});n.write(o),n.end(),n.on("error",function(e){return t(e)})})}},k=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={books:"TEMP",search:""},n.loadBooks=function(){w.getBooks("/api/books").then(function(e){console.log(typeof e),console.log(e)}).catch(function(e){return console.log(e)})},n.saveBooks=function(){w.saveBook().then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},n.handleInputChange=function(e){var t=e.target,o=t.name,a=t.value;n.setState(Object(h.a)({},o,a))},n.submitSearch=function(e){e.preventDefault(),console.log(n.state.search),w.searchBooks(n.state.search).then(function(e){n.setState({books:e.items,search:""}),console.log(e.items)}).catch(function(e){return console.log(e)})},n}return Object(f.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("form",null,a.a.createElement("input",{className:"searchbar",value:this.state.search,onChange:this.handleInputChange,name:"search"}),a.a.createElement("button",{className:"submitButton",disabled:!this.state.search,onClick:this.submitSearch})),a.a.createElement(m,{results:this.state.books}))}}]),t}(o.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(k,null)}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.e06791ad.chunk.js.map