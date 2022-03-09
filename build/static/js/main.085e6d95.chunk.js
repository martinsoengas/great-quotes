(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,function(e,t,n){"use strict";var c=n(19),r=n.n(c),a=n(1);t.a=function(){return Object(a.jsx)("div",{className:r.a.spinner})}},,function(e,t,n){e.exports={header:"MainNavigation_header__pcWBd",logo:"MainNavigation_logo__3mTft",nav:"MainNavigation_nav__2KJfX",active:"MainNavigation_active__oN3Ka"}},function(e,t,n){"use strict";var c=n(9),r=n(7),a=n(5),s=n(4),o=n.n(s),u=n(0);function i(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(u.useReducer)(i,{status:t?"pending":null,data:null,error:null}),s=Object(a.a)(n,2),l=s[0],m=s[1],j=Object(u.useCallback)(function(){var t=Object(r.a)(o.a.mark((function t(n){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:c=t.sent,m({type:"SUCCESS",responseData:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),m({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(c.a)({sendRequest:j},l)}},function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return f}));var c=n(9),r=n(7),a=n(4),s=n.n(a),o="https://react-http-909d1-default-rtdb.firebaseio.com";function u(){return i.apply(this,arguments)}function i(){return(i=Object(r.a)(s.a.mark((function e(){var t,n,r,a,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(a in r=[],n)u=Object(c.a)({id:a},n[a]),r.push(u);return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return m.apply(this,arguments)}function m(){return(m=Object(r.a)(s.a.mark((function e(t){var n,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not fetch quote.");case 8:return a=Object(c.a)({id:t},r),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(s.a.mark((function e(t){var n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return p.apply(this,arguments)}function p(){return(p=Object(r.a)(s.a.mark((function e(t){var n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:c.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(s.a.mark((function e(t){var n,r,a,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not get comments.");case 8:for(u in a=[],r)i=Object(c.a)({id:u},r[u]),a.push(i);return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},,function(e,t,n){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},,,function(e,t,n){e.exports={main:"Layout_main__auk_r"}},function(e,t,n){e.exports={comments:"Comments_comments__iZX-v"}},function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__2Kyqv"}},function(e,t,n){e.exports={item:"CommentItem_item__24mbD"}},function(e,t,n){e.exports={comments:"CommentsList_comments__valp0"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(16),r=n.n(c),a=n(6),s=(n(26),n(0)),o=n.n(s),u=n(2),i=n(17),l=n.n(i),m=n(10),j=n.n(m),d=n(1),b=function(){return Object(d.jsxs)("header",{className:j.a.header,children:[Object(d.jsx)("div",{className:j.a.logo,children:"Great Quotes"}),Object(d.jsx)("nav",{className:j.a.nav,children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(a.c,{to:"/quotes",className:function(e){return e.isActive?j.a.active:""},children:"All Quotes"})}),Object(d.jsx)("li",{children:Object(d.jsx)(a.c,{to:"/new-quote",className:function(e){return e.isActive?j.a.active:""},children:"Add a Quote"})})]})})]})},p=function(e){return Object(d.jsxs)(s.Fragment,{children:[Object(d.jsx)(b,{}),Object(d.jsx)("main",{className:l.a.main,children:e.children})]})},f=n(5),h=n(18),x=n.n(h),O=n(11),v=n(12),_=n(8),N=n(14),w=n.n(N),g=function(e){var t=Object(s.useRef)(),n=Object(O.a)(v.a),c=n.sendRequest,r=n.status,a=n.error,o=e.onAddedComment;Object(s.useEffect)((function(){"completed"!==r||a||o()}),[r,a,o]);var u=function(n){n.preventDefault();var r=t.current.value;c({commentData:{text:r},quoteId:e.quoteId})};return Object(d.jsxs)("form",{className:w.a.form,onSubmit:u,children:["pending"===r&&Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(_.a,{})}),Object(d.jsxs)("div",{className:w.a.control,onSubmit:u,children:[Object(d.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(d.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(d.jsx)("div",{className:w.a.actions,children:Object(d.jsx)("button",{className:"btn",children:"Add Comment"})})]})},y=n(20),C=n.n(y),k=function(e){return Object(d.jsx)("li",{className:C.a.item,children:Object(d.jsx)("p",{children:e.text})})},q=n(21),S=n.n(q),E=function(e){return Object(d.jsx)("ul",{className:S.a.comments,children:e.comments.map((function(e){return Object(d.jsx)(k,{text:e.text},e.id)}))})},R=function(){var e=Object(s.useState)(!1),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(u.i)().quoteId,a=Object(O.a)(v.c),o=a.sendRequest,i=a.status,l=a.data;Object(s.useEffect)((function(){o(r)}),[r,o]);var m,j=Object(s.useCallback)((function(){o(r)}),[o,r]);return"pending"===i&&(m=Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(_.a,{})})),"completed"===i&&l&&l.length>0&&(m=Object(d.jsx)(E,{comments:l})),"completed"!==i||l&&0!==l.length||(m=Object(d.jsx)("p",{className:"centered",children:"No comments were added yet!"})),Object(d.jsxs)("section",{className:x.a.comments,children:[Object(d.jsx)("h2",{children:"User Comments"}),!n&&Object(d.jsx)("button",{className:"btn",onClick:function(){c(!0)},children:"Add a Comment"}),n&&Object(d.jsx)(g,{quoteId:r,onAddedComment:j}),m]})},I=o.a.lazy((function(){return n.e(4).then(n.bind(null,38))})),A=o.a.lazy((function(){return n.e(5).then(n.bind(null,39))})),D=o.a.lazy((function(){return n.e(6).then(n.bind(null,36))})),F=o.a.lazy((function(){return n.e(3).then(n.bind(null,37))}));var M=function(){return Object(d.jsx)(p,{children:Object(d.jsx)(s.Suspense,{fallback:Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(_.a,{})}),children:Object(d.jsxs)(u.e,{children:[Object(d.jsx)(u.c,{path:"/",element:Object(d.jsx)(u.a,{replace:!0,to:"/quotes"})}),Object(d.jsx)(u.c,{path:"/quotes",element:Object(d.jsx)(F,{})}),Object(d.jsxs)(u.c,{path:"/quotes/:quoteId",element:Object(d.jsx)(A,{}),children:[Object(d.jsx)(u.c,{path:"",element:Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(a.b,{className:"btn--flat",to:"comments",children:"Load Comments"})})}),Object(d.jsx)(u.c,{path:"comments",element:Object(d.jsx)(R,{})})]}),Object(d.jsx)(u.c,{path:"/new-quote",element:Object(d.jsx)(I,{})}),Object(d.jsx)(u.c,{path:"*",element:Object(d.jsx)(D,{})})]})})})};r.a.render(Object(d.jsx)(a.a,{children:Object(d.jsx)(M,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.085e6d95.chunk.js.map