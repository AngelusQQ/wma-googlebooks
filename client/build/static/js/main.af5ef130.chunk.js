(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(n,e,t){n.exports=t(56)},35:function(n,e,t){},41:function(n,e){},43:function(n,e){},56:function(n,e,t){"use strict";t.r(e);var o=t(1),r=t.n(o),a=t(29),c=t.n(a),i=(t(35),t(9)),u=t(10),s=t(12),l=t(11),f=t(13),h=t(15),d=t.n(h),w=t(14),p={hostname:"wma-googlebooks.herokuapp.com",path:"/api/books",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}},m=t.n(w).a.stringify({title:"Catcher in the Rye",authors:"J. D. Salinger"}),v={getBooks:function(n){return new Promise(function(e,t){d.a.get(n,function(n){if(n.statusCode>=200&&n.statusCode<300){var o="";n.on("data",function(n){return o+=n}),n.on("end",function(){return e(o)})}else t(new Error(n.statusCode))}).on("error",function(n){return t(n)})})},saveBook:function(){return new Promise(function(n,e){var t=d.a.request(p,function(e){e.on("data",function(n){console.log("BODY: ".concat(n))}),e.on("end",function(){console.log("No more data in response."),n("FINISH")})});t.write(m),n("SENSITIVE"),t.on("error",function(n){return e(n)})})}},k=function(n){function e(){var n,t;Object(i.a)(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=Object(s.a)(this,(n=Object(l.a)(e)).call.apply(n,[this].concat(r)))).state={books:[],whatever:""},t.loadBooks=function(){v.saveBook().then(function(n){return console.log(n)}).catch(function(n){return console.log("jenna")})},t}return Object(f.a)(e,n),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.whatever)}}]),e}(o.Component),b=function(n){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(f.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(k,null)}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.af5ef130.chunk.js.map