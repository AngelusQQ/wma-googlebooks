(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,n,t){e.exports=t(61)},36:function(e,n,t){},38:function(e,n,t){},44:function(e,n){},46:function(e,n){},59:function(e,n,t){},61:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(29),c=t.n(r),s=(t(36),t(9)),i=t(10),u=t(12),l=t(11),f=t(13),h=t(30),m=(t(38),function(e){return a.a.createElement("div",null,"TEMP"!==e.results?e.results.map(function(e){return a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,e.volumeInfo.title),a.a.createElement("h3",null,e.volumeInfo.authors),a.a.createElement("h3",null,e.volumeInfo.description))}):a.a.createElement("div",{className:"empty-container"}))}),d=t(14),p=t.n(d),v=t(15),g=t.n(v),b={hostname:"wma-googlebooks.herokuapp.com",path:"/api/books",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}},w={searchBooks:function(e){var n="https://www.googleapis.com/books/v1/volumes?q="+(e.includes(" ")?e.trim().split(" ").join("+"):e.trim());return new Promise(function(e,t){p.a.get(n,function(n){if(console.log("RESPONSE CODE",n.statusCode),n.statusCode>=200&&n.statusCode<300){var o="";n.on("data",function(e){return o+=e}),n.on("end",function(){return e(JSON.parse(o))})}else t(new Error(n.statusCode))}).on("error",function(e){return t(e)})})},getBooks:function(e){return new Promise(function(n,t){p.a.get(e,function(e){if(e.statusCode>=200&&e.statusCode<300){var o="";e.on("data",function(e){return o+=e}),e.on("end",function(){return n(JSON.parse(o))})}else t(new Error(e.statusCode))}).on("error",function(e){return t(e)})})},saveBook:function(e,n,t){var o=g.a.stringify({title:e||"No Title Provided",authors:n||"No Author Provided",description:t||"No Description Provided"});return new Promise(function(e,n){var t=p.a.request(b,function(n){var t="";n.on("data",function(e){t+=e}),n.on("end",function(){e(t)})});t.write(o),t.end(),t.on("error",function(e){return n(e)})})}},k=(t(59),function(e){function n(){var e,t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(a)))).state={books:"TEMP",search:""},t.loadBooks=function(){w.getBooks("/api/books").then(function(e){console.log(typeof e),console.log(e)}).catch(function(e){return console.log(e)})},t.saveBooks=function(){w.saveBook().then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},t.handleInputChange=function(e){var n=e.target,o=n.name,a=n.value;t.setState(Object(h.a)({},o,a))},t.submitSearch=function(e){e.preventDefault(),console.log(t.state.search),w.searchBooks(t.state.search).then(function(e){t.setState({books:e.items,search:""}),console.log(e.items)}).catch(function(e){return console.log(e)})},t}return Object(f.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("form",null,a.a.createElement("input",{className:"searchbar",value:this.state.search,onChange:this.handleInputChange,name:"search"}),a.a.createElement("button",{className:"submitButton",disabled:!this.state.search,onClick:this.submitSearch},"Search")),a.a.createElement(m,{results:this.state.books}))}}]),n}(o.Component)),E=function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(k,null)}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.62e2fc7d.chunk.js.map