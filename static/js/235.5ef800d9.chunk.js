"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[235],{1235:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var a=t(9439),r=t(5349),i=t(184),s=function(e){var n=e.title,t=e.onChange,a=e.value,s=e.pattern,l=e.required,o=void 0!==l&&l;return console.log(a),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{className:"title",children:n}),(0,i.jsx)(r.Z,{id:"outlined-basic",label:"Name",variant:"outlined",value:a,type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:o,onChange:t,inputProps:{pattern:s}})]})},l=function(e){e.title;var n=e.value,t=e.onChange,a=e.pattern,s=e.required,l=void 0!==s&&s;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.Z,{id:"outlined-basic",label:"Number",variant:"outlined",value:n,type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:l,onChange:t,inputProps:{pattern:a}})})},o=t(2791),c=t(9434),u=t(667),d=(t(1672),t(142));var m=function(){var e=(0,c.I0)(),n=(0,o.useState)(""),t=(0,a.Z)(n,2),r=t[0],m=t[1],h=(0,o.useState)(""),f=(0,a.Z)(h,2),v=f[0],p=f[1];return(0,i.jsxs)("form",{className:"phonebook-form",onSubmit:function(n){n.preventDefault(),e((0,u.je)({name:r,number:v})),m(""),p("")},children:[(0,i.jsxs)("div",{className:"wrapper-contact",children:[(0,i.jsx)(s,{title:"Add your new contact",value:r,onChange:function(e){m(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0}),(0,i.jsx)(l,{title:"Number",value:v,onChange:function(e){p(e.target.value)},pattern:"[0-9]{3}-?[0-9]{2}-?[0-9]{2}",required:!0})]}),(0,i.jsx)(d.Z,{variant:"contained",type:"submit",sx:{mt:2,mb:2},children:"Add Contact"})]})},h=t(3661);var f=function(){var e=(0,c.I0)();return(0,o.useEffect)((function(){e((0,h.Tv)({filter:""}))}),[e]),(0,i.jsx)(s,{title:"Find contacts by name",onChange:function(n){e((0,h.Tv)({filter:n.target.value}))}})},v=t(2007),p=t.n(v),x=(p().exact({id:p().string.isRequired,name:p().string.isRequired,number:p().string.isRequired}).isRequired,function(e){var n=e.contact,t=n.name,a=n.number,r=n.id,s=(0,c.I0)();return(0,i.jsxs)("li",{className:"list-item",children:[t,": ",a,(0,i.jsx)(d.Z,{variant:"outlined",size:"small",type:"button",sx:{ml:2},onClick:function(){return s((0,u.xX)(r))},children:"Delete"})]})}),j=t(8943),g=function(){var e=(0,j.g)(),n=(0,j.a)().isLoggedIn,t=e.contacts,a=e.error,r=e.isLoading,s=e.filter,l=(0,c.I0)();return(0,o.useEffect)((function(){n&&l((0,u.VC)())}),[l,n]),t&&!r?(0,i.jsxs)("ul",{className:"list",children:[a,t.filter((function(e){return n=e.name,t=s,n.toLowerCase().includes(t.toLowerCase());var n,t})).map((function(e){return(0,i.jsx)(x,{contact:e},e.id)}))]}):null},b=function(e){var n=e.title,t=e.childrenClassName,a=e.children;return(0,i.jsxs)("section",{children:[(0,i.jsx)("h1",{className:"main-title",children:n}),(0,i.jsx)("div",{className:t,children:a})]})},C=function(){var e=(0,c.v9)((function(e){return e.isLoading}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{title:"Phonebook",childrenClassName:"phonebook",children:(0,i.jsx)(m,{className:"phonebook"})}),(0,i.jsxs)(b,{title:"Contacts",childrenClassName:"contacts",children:[e?(0,i.jsx)("h2",{children:"Loading..."}):null,(0,i.jsx)(f,{}),(0,i.jsx)(g,{})]})]})}}}]);
//# sourceMappingURL=235.5ef800d9.chunk.js.map