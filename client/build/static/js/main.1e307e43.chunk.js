(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(n,e,o){n.exports=o(56)},35:function(n,e,o){},41:function(n,e){},43:function(n,e){},56:function(n,e,o){"use strict";o.r(e);var t=o(1),r=o.n(t),a=o(29),c=o.n(a),i=(o(35),o(9)),u=o(10),s=o(12),l=o(11),f=o(13),d=o(15),h=o.n(d),w=o(14),p={hostname:"wma-googlebooks.herokuapp.com",path:"/api/books",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}},m=o.n(w).a.stringify({title:"Catcher in the Rye",authors:"J. D. Salinger"}),v={getBooks:function(n){return new Promise(function(e,o){h.a.get(n,function(n){if(n.statusCode>=200&&n.statusCode<300){var t="";n.on("data",function(n){return t+=n}),n.on("end",function(){return e(t)})}else o(new Error(n.statusCode))}).on("error",function(n){return o(n)})})},saveBook:function(){return new Promise(function(n,e){var o=h.a.request(p,function(e){o.on("data",function(n){console.log("BODY: ".concat(n))}),o.on("end",function(){console.log("No more data in response."),n("FINISH")})});o.write(m),o.end(),o.on("error",function(n){return e(n)})})}},k=function(n){function e(){var n,o;Object(i.a)(this,e);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(o=Object(s.a)(this,(n=Object(l.a)(e)).call.apply(n,[this].concat(r)))).state={books:[],whatever:""},o.loadBooks=function(){v.saveBook().then(function(n){return console.log("Bad Wolf")}).catch(function(n){return console.log(n)})},o}return Object(f.a)(e,n),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.whatever)}}]),e}(t.Component),b=function(n){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(f.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(k,null)}}]),e}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.1e307e43.chunk.js.map