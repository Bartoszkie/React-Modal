(this["webpackJsonpgladiators-recruitment"]=this["webpackJsonpgladiators-recruitment"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),l=n(1),i=n(2),s=n(3),u=n(4),m=(n(12),n(13),n(14),n(15),function(e){var t=e.buttonMethod,n=e.children;return o.a.createElement("button",{className:"button-component",onClick:t},n)}),d=function(e){var t=e.title,n=e.toggle;return o.a.createElement("div",{className:"modal-header"},o.a.createElement("h2",{className:"modal-header__title"},t),o.a.createElement(m,{buttonMethod:n},"Modal Change"))},h=(n(16),function(e,t){var n=e.children;return o.a.createElement("div",{className:"modal-content"},n)}),p=(n(17),function(e){var t=e.toggle,n=e.callToActionLabel;return o.a.createElement("footer",{className:"modal-footer"},o.a.createElement(m,{buttonMethod:t},"Modal Change"),o.a.createElement(m,{buttonMethod:function(){alert("OK"),t()}},n))}),f=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={isOpen:!0},e.toggle=function(){e.setState({isOpen:!e.state.isOpen})},e.stopPropagation=function(e){e.stopPropagation()},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.isOpen,n=o.a.Children.map(this.props.children,(function(n){return o.a.cloneElement(n,{isOpen:t,toggle:e.toggle})}));return o.a.createElement("div",{className:"".concat(this.state.isOpen?"modal-container-open":"modal-container-closed"),onClick:this.toggle},o.a.createElement("div",{className:"modal-container__items",onClick:this.stopPropagation},n))}}]),n}(o.a.Component);f.Header=d,f.Content=h,f.Footer=p;var g=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"wrapper"},o.a.createElement(f,null,o.a.createElement(f.Header,{title:"Tytu\u0142 modala"}),o.a.createElement(f.Content,null,o.a.createElement("h1",null,"to powinno dzia\u0142a\u0107 tak")),o.a.createElement(f.Footer,{callToActionLabel:"Uda\u0142o Si\u0119!"})),o.a.createElement("h1",null,"Test task for JS Gladiators!"))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.ae7c4b8b.chunk.js.map