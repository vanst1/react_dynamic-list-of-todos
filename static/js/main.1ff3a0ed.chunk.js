(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a,s=c(7),n=c.n(s),l=c(5),d=c(2),r=c(4),o=c.n(r),i=c(1),j=(c(13),c(14),c(3)),b=c.n(j),u=c(0),h=function(e){var t=e.todos,c=e.onTodoSelected,a=e.selectedTodoId;return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(u.jsx)("td",{className:"is-vcentered",children:e.id}),Object(u.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:b()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(e.id)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:b()("far",{"fa-eye":a!==e.id,"fa-eye-slash":a===e.id})})})})})]},e.id)}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(a||(a={}));var m=function(e){var t=e.searchQuery,c=e.todosFilter,s=e.onSearchQueryChange,n=e.onTodosFilterChange;return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){n(e.target.value)},children:[Object(u.jsx)("option",{value:a.ALL,children:"All"}),Object(u.jsx)("option",{value:a.ACTIVE,children:"Active"}),Object(u.jsx)("option",{value:a.COMPLETED,children:"Completed"})]})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){s(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"Clear search button",onClick:function(){s("")}})})]})]})},O=(c(16),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})});function x(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var f=function(e){var t=e.todo,c=e.clearSelectedTodo;return Object(u.jsxs)("div",{className:b()("modal",{"is-active":t}),"data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Error"}),Object(u.jsx)("button",{type:"button","aria-label":"Close modal",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(u.jsx)("div",{className:"modal-card-body",children:Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:"Server is unavailable, try again later..."})})]})]})},v=function(e){var t=e.todo,c=e.clearSelectedTodo,a=Object(i.useState)(null),s=Object(d.a)(a,2),n=s[0],r=s[1],j=Object(i.useState)(!1),h=Object(d.a)(j,2),m=h[0],v=h[1],p=Object(i.useCallback)(Object(l.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=6;break}return e.next=4,a=t.userId,x("/users/".concat(a));case 4:c=e.sent,r(c);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),v(!0);case 11:case"end":return e.stop()}var a}),e,null,[[0,8]])}))),[]);return Object(i.useEffect)((function(){p()}),[]),m?Object(u.jsx)(f,{todo:t,clearSelectedTodo:c}):Object(u.jsxs)("div",{className:b()("modal",{"is-active":t}),"data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),n&&t?Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(u.jsx)("button",{type:"button","aria-label":"Close modal",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(u.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(u.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(u.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]}):Object(u.jsx)(O,{})]})},p=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(!0),r=Object(d.a)(n,2),j=r[0],b=r[1],f=Object(i.useState)(!1),p=Object(d.a)(f,2),N=p[0],y=p[1],C=Object(i.useState)(0),g=Object(d.a)(C,2),k=g[0],S=g[1],T=Object(i.useState)(""),w=Object(d.a)(T,2),E=w[0],L=w[1],A=Object(i.useState)(a.ALL),I=Object(d.a)(A,2),F=I[0],P=I[1],_=function(e,t,c){var s=e.filter((function(e){switch(c){case a.ACTIVE:return!e.completed;case a.COMPLETED:return e.completed;default:return!0}}));return t&&(s=s.filter((function(e){var c=t.toLowerCase();return e.title.toLowerCase().includes(c)}))),s}(c,E,F),D=_.find((function(e){return e.id===k}))||null,Q=Object(i.useCallback)((function(){S(0)}),[]),B=Object(i.useCallback)((function(e){L(e)}),[]),M=Object(i.useCallback)((function(e){P(e)}),[]),V=Object(i.useCallback)(Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("/todos");case 3:t=e.sent,s(t),b(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),y(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]);return Object(i.useEffect)((function(){V()}),[]),N?Object(u.jsx)("h1",{children:"Server is unavailable, try again later..."}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(m,{searchQuery:E,todosFilter:F,onSearchQueryChange:B,onTodosFilterChange:M})}),j?Object(u.jsx)(O,{}):Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(h,{todos:_,onTodoSelected:S,selectedTodoId:k})})]})})}),k&&Object(u.jsx)(v,{todo:D,clearSelectedTodo:Q})]})};n.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.1ff3a0ed.chunk.js.map