(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/title.ed1574cc.png"},22:function(e,t,n){},39:function(e,t,n){e.exports=n(77)},44:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},57:function(e,t){},59:function(e,t){},72:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(37),i=n.n(r),c=(n(44),n(79)),s=n(81),l=n(80),u=n(18),m=n(9),d=n(10),h=n(12),p=n(11),v=n(13),f=(n(22),n(47),function(e){return o.a.createElement("div",{id:"NavBar"},o.a.createElement("span",{id:"span"},o.a.createElement("a",{href:"https://books.google.com",target:"blank"},"Google Books")),o.a.createElement("span",{className:"span"},o.a.createElement("a",{href:"/"},"Home")),o.a.createElement("span",{className:"span"},o.a.createElement("a",{href:"/saved"},"Saved Books")))}),E=(n(49),function(e){return o.a.createElement("img",{id:"image",src:e.src,alt:"title",height:e.height,width:e.width})});n(51);var b=function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"container-title"},"Currently Showing ",e.searchSize," Search Results:"),"TEMP"!==e.results?e.results.map(function(t){var n,a="";return a=t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.thumbnail:"https://cdn2.iconfinder.com/data/icons/smiley-emoji/512/2.png",o.a.createElement("div",{className:"container"},o.a.createElement("span",{id:"buttonOne",className:"button"},o.a.createElement("form",{method:"post",action:"/api/books"},o.a.createElement("input",{className:"none",type:"text",value:t.volumeInfo.title,name:"title"}),o.a.createElement("input",{className:"none",type:"text",value:t.volumeInfo.authors,name:"authors"}),o.a.createElement("input",{className:"none",type:"text",value:t.volumeInfo.description,name:"description"}),o.a.createElement("input",{className:"none",type:"text",value:a,name:"thumbnail"}),o.a.createElement("input",{className:"none",type:"text",value:t.volumeInfo.previewLink,name:"previewLink"}),o.a.createElement("input",{type:"submit",value:e.buttonOne}))),o.a.createElement("span",{id:"buttonTwo",className:"button"},o.a.createElement("button",{onClick:(n=t.volumeInfo.previewLink,void window.open(n,"_blank"))},t.volumeInfo.previewLink)),o.a.createElement("h1",{className:"text"},t.volumeInfo.title||"No Title Provided"),o.a.createElement("h3",{className:"text"},"Author: ",t.volumeInfo.authors||"No Author Provided"),o.a.createElement("div",null),o.a.createElement("span",null,o.a.createElement("div",{id:"text"},o.a.createElement("img",{src:a,alt:"Book"})),o.a.createElement("h3",{id:"description",className:"text"},"Description: ",t.volumeInfo.description||"No Description Provided")))}):o.a.createElement("div",{className:"empty-container"}))},k=n(19),g=n.n(k),w=n(21),N=n.n(w),S=n(23),y=n.n(S),O={hostname:"wma-googlebooks.herokuapp.com",path:"/api/books",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}},C={searchBooks:function(e){var t="https://www.googleapis.com/books/v1/volumes?q="+(e.includes(" ")?e.trim().split(" ").join("+"):e.trim());return new Promise(function(e,n){N.a.get(t,function(t){if(console.log("RESPONSE CODE",t.statusCode),t.statusCode>=200&&t.statusCode<300){var a="";t.on("data",function(e){return a+=e}),t.on("end",function(){return e(JSON.parse(a))})}else n(new Error(t.statusCode))}).on("error",function(e){return n(e)})})},getBooks:function(e){return new Promise(function(t,n){N.a.get(e,function(e){if(e.statusCode>=200&&e.statusCode<300){var a="";e.on("data",function(e){return a+=e}),e.on("end",function(){t(JSON.parse(a))})}else n(new Error(e.statusCode))}).on("error",function(e){return n(e)})})},saveBook:function(e,t,n,a,o){var r=y.a.stringify({title:e||"No Title Provided",authors:t||"No Author Provided",description:n||"No Description Provided",thumbnail:a||"No Thumbnail Provided",previewLink:o||"No Preview Link Provided"});return new Promise(function(e,t){var n=N.a.request(O,function(t){var n="";t.on("data",function(e){n+=e}),t.on("end",function(){e(n)})});n.write(r),n.end(),n.on("error",function(e){return t(e)})})}},B=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={books:"TEMP",search:"",searchSize:0},n.loadBooks=function(){C.getBooks("/api/books").then(function(e){console.log(typeof e),console.log(e)}).catch(function(e){return console.log(e)})},n.saveBooks=function(){C.saveBook().then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},n.handleInputChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(u.a)({},a,o))},n.submitSearch=function(e){e.preventDefault(),console.log(n.state.search),C.searchBooks(n.state.search).then(function(e){n.setState({books:e.items,search:"",searchSize:e.items.length}),console.log(e.items)}).catch(function(e){return console.log(e)})},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(E,{src:g.a}),o.a.createElement("form",null,o.a.createElement("input",{id:"searchbar",value:this.state.search,onChange:this.handleInputChange,name:"search"}),o.a.createElement("button",{id:"submitButton",disabled:!this.state.search,onClick:this.submitSearch},"Search")),o.a.createElement(b,{onChange:this.handleInputChange,searchSize:this.state.searchSize,results:this.state.books,name:"searchSize",buttonOne:"Add to Saved Books",buttonTwo:"View"}))}}]),t}(a.Component),P=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"Page Not Found (404)")}}]),t}(a.Component);n(72);var x=function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"container-title"},"Currently Showing ",e.searchSize," Search Results:"),"TEMP"!==e.results?e.results.map(function(t){return o.a.createElement("div",{className:"container"},o.a.createElement("span",{id:"buttonOne",className:"button"},o.a.createElement("form",{method:"post",action:"/api/books/delete"},o.a.createElement("input",{className:"none",type:"text",value:t._id,name:"_id"}),o.a.createElement("input",{type:"submit",value:e.buttonOne}))),o.a.createElement("span",{id:"buttonTwo",className:"button"},o.a.createElement("button",{onClick:(n=t.volumeInfo.previewLink,void window.open(n,"_blank"))},t.volumeInfo.previewLink)),o.a.createElement("h1",{className:"text"},t.title||"No Title Provided"),o.a.createElement("h3",{className:"text"},"Author: ",t.authors||"No Author Provided"),o.a.createElement("div",null),o.a.createElement("span",null,o.a.createElement("div",{id:"text"},o.a.createElement("img",{src:t.thumbnail,alt:"Book"})),o.a.createElement("h3",{id:"description",className:"text"},"Description: ",t.description||"No Description Provided")));var n}):o.a.createElement("div",{className:"empty-container"}))},j=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={books:"TEMP",searchSize:0,fakeBooks:"TEMP"},n.loadBooks=function(){C.getBooks("/api/books").then(function(e){return n.setState({books:e})}).catch(function(e){return console.log(e)})},n.handleInputChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(u.a)({},a,o))},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(E,{src:g.a}),o.a.createElement(x,{onChange:this.handleInputChange,searchSize:this.state.searchSize,results:this.state.books,name:"searchSize",buttonOne:"Delete Book",buttonTwo:"View Book",request:"/delete"}))}}]),t}(a.Component),I=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement(s.a,null,o.a.createElement(l.a,{exact:!0,path:"/",component:B}),o.a.createElement(l.a,{exact:!0,path:"/search",component:B}),o.a.createElement(l.a,{exact:!0,path:"/saved",component:j}),o.a.createElement(l.a,{component:P}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,2,1]]]);
//# sourceMappingURL=main.16a7603e.chunk.js.map