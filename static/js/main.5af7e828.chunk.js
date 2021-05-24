(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{42:function(e,t,n){},85:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),s=(n(85),n(49)),o=n(11),l=n(137),d=n(142),u=n(141),j=n(4),h=function(){return Object(j.jsx)(l.a,{position:"static",style:{backgroundColor:"rgb(196, 116, 69)"},children:Object(j.jsxs)(u.a,{style:{justifyContent:"space-around",height:"inherit",alignItems:"inherit"},children:[Object(j.jsx)(d.a,{style:{flexGrow:"1",height:"inherit"},color:"inherit",children:Object(j.jsx)(s.b,{to:"/JsCourse",color:"inherit",children:"My notes"})}),Object(j.jsx)(d.a,{href:"/JsCourse/SharedNotes",style:{flexGrow:"1",height:"inherit"},color:"inherit",children:"Shared notes"}),Object(j.jsx)(d.a,{href:"/JsCourse/About",style:{flexGrow:"1",height:"inherit"},color:"inherit",children:"About"})]})})},b=n(14),x=n(149),O=(n(42),n(144)),f=n(70),p=n.n(f),g=n(143),m=function(e){var t=e.array,n=e.setArray;return Object(j.jsx)(g.a,{label:"Search",onChange:function(e){var a=e.target.value;document.title="rac".includes("r").toString(),n(t.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())})))},startAdornment:Object(j.jsx)(O.a,{children:Object(j.jsx)(p.a,{})})})};m.defaultProps={array:[],setArray:function(){}};var y=m,v=n(145),S=n(146),C=n(147),w=n(71),I=n.n(w),N=n(148),A=function(e){var t=e.notesArray,n=e.selectedIndex,a=e.setSelectedIndex;return Object(j.jsx)(v.a,{children:t.map((function(e){return Object(j.jsxs)(S.a,{button:!0,selected:n===e.id,onClick:function(){return a(e.id)},children:[Object(j.jsx)(C.a,{children:Object(j.jsx)(I.a,{})}),Object(j.jsx)(N.a,{primary:Object(j.jsxs)(x.a,{container:!0,justify:"space-between",children:[Object(j.jsx)("span",{children:e.title}),Object(j.jsx)("span",{children:e.date})]}),secondary:(t=e.content,r=20,t.length>20?"".concat(t.substr(0,r)," ..."):t)})]});var t,r}))})};A.defaultProps={notesArray:[],selectedIndex:null,setSelectedIndex:function(){}};var J=A,G=function(e){var t=e.notesArray,n=e.selectedIndex,a=e.changeSelectedIndex,c=r.a.useState(t),i=Object(b.a)(c,2),s=i[0],o=i[1];return Object(j.jsxs)(x.a,{className:"NotesListMenu",container:!0,item:!0,xs:3,direction:"column",children:[Object(j.jsx)(y,{array:t,setArray:o}),Object(j.jsx)(J,{notesArray:s,selectedIndex:n,setSelectedIndex:a})]})};G.defaultProps={notesArray:[],selectedIndex:null,changeSelectedIndex:function(){}};var k=G,P=n(39),T=n(150),R=n(151),M=n(153),D=n(152),F=n(155),H=function(e){var t=e.noteTitle,n=e.noteContent,a=e.isOpen,c=e.setOpen,i=e.updateNote,s=t,o=n,l=r.a.useState(!0),u=Object(b.a)(l,2),h=u[0],O=u[1],f=r.a.useState(!0),p=Object(b.a)(f,2),g=p[0],m=p[1];return Object(j.jsxs)(F.a,{open:a,fullWidth:"true",maxWidth:"false",children:[Object(j.jsx)(T.a,{children:"Editing note"}),Object(j.jsx)(R.a,{children:Object(j.jsxs)(x.a,{direction:"column",children:[Object(j.jsx)(M.a,{id:"editTitleField",error:!h,className:"DialogInputField",label:"title",defaultValue:s,onChange:function(e){s=e.target.value,O(s.length>0&&s.length<35)},helperText:h?"":"Title length must be between 1 and ".concat(35," symbols")}),Object(j.jsx)(M.a,{error:!g,className:"DialogInputField",label:"content",defaultValue:o,onChange:function(e){o=e.target.value,m(o.length>0&&o.length<2e3)},helperText:g?"":"Content length must be between 1 and ".concat(2e3," symbols"),multiline:!0})]})}),Object(j.jsxs)(D.a,{children:[Object(j.jsx)(d.a,{onClick:function(){return c(!1)},children:"Close"}),Object(j.jsx)(d.a,{disabled:!(h&&g),onClick:function(){i(s,o),c(!1)},children:"Save"})]})]})};H.defaultProps={noteTitle:"",noteContent:"",isOpen:!1,setOpen:function(){},updateNote:function(){}};var L=H,E=(n(97),function(e){var t=e.children;return Object(j.jsx)(x.a,{className:"ActiveNote",container:!0,wrap:"nowrap",children:t})});E.defaultProps={children:Object(j.jsx)("div",{})};var V=E,W=function(e){var t=e.selectedItem,n=e.updateNote,a=r.a.useState(!1),c=Object(b.a)(a,2),i=c[0],s=c[1];return t?Object(j.jsxs)(V,{children:[Object(j.jsxs)(x.a,{container:!0,direction:"column",alignItems:"center",children:[Object(j.jsx)(P.a,{className:"ActiveNoteTitle",variant:"h3",children:t.title}),Object(j.jsx)(P.a,{className:"ActiveNoteContent",variant:"h5",children:t.content})]}),Object(j.jsxs)(d.a,{onClick:function(){return s(!0)},style:{backgroundColor:"rgba(255, 255, 255, 0.7)"},children:[" ","Edit"," "]}),Object(j.jsx)(L,{noteTitle:t.title,noteContent:t.content,isOpen:i,setOpen:s,updateNote:n})]}):Object(j.jsx)(V,{children:Object(j.jsx)(P.a,{variant:"h3",children:"Select note to display"})})};W.defaultProps={selectedItem:null,updateNote:function(){}};var z=W,B=[{id:0,title:"React",content:"React \u2014 JavaScript-\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u043c \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432.React \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f Facebook, Instagram \u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e\u043c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u0438 \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0446\u0438\u0439.React \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u044b\u0445 \u0438 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439. \u0415\u0433\u043e \u0446\u0435\u043b\u044c \u2014 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0432\u044b\u0441\u043e\u043a\u0443\u044e \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c, \u043f\u0440\u043e\u0441\u0442\u043e\u0442\u0443 \u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c. \u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432 React \u0447\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430\u043c\u0438, \u0442\u0430\u043a\u0438\u043c\u0438 \u043a\u0430\u043a MobX, Redux \u0438 GraphQL.",date:"03.05.2020"},{id:1,title:"Material Design",content:"Material Design \u2014 \u0441\u0442\u0438\u043b\u044c \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0435\u0439 Google. \u0412\u043f\u0435\u0440\u0432\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u043d\u0430 \u043a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0438 Google I/O 25 \u0438\u044e\u043d\u044f 2014 \u0433\u043e\u0434\u0430. \u0421\u0442\u0438\u043b\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u0442 \u0438\u0434\u0435\u044e \xab\u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a\xbb, \u043f\u043e\u044f\u0432\u0438\u0432\u0448\u0443\u044e\u0441\u044f \u0432 Google Now, \u0431\u043e\u043b\u0435\u0435 \u0448\u0438\u0440\u043e\u043a\u0438\u043c \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c \u0441\u0442\u0440\u043e\u0433\u0438\u0445 \u043c\u0430\u043a\u0435\u0442\u043e\u0432, \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0439 \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u0432, \u043e\u0442\u0441\u0442\u0443\u043f\u043e\u0432 \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u043e\u0432 \u0433\u043b\u0443\u0431\u0438\u043d\u044b (\u0441\u0432\u0435\u0442\u0430 \u0438 \u0442\u0435\u043d\u0438). \u041f\u043e \u0438\u0434\u0435\u0435 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u043e\u0432 Google, \u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0441\u0442\u0440\u044b\u0445 \u0443\u0433\u043b\u043e\u0432, \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u0431\u043e\u0439 \u043f\u043b\u0430\u0432\u043d\u043e \u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0435\u0437\u0430\u043c\u0435\u0442\u043d\u043e.",date:"02.05.2020"},{id:2,title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0445\u0443\u043a\u0430 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f",content:"useState \u2014 \u044d\u0442\u043e \u0445\u0443\u043a. \u041c\u044b \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c \u0435\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0430\u0448 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u043c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043c. React \u0431\u0443\u0434\u0435\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u044d\u0442\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u0440\u0435\u043d\u0434\u0435\u0440\u0430\u043c\u0438. \u0412\u044b\u0437\u043e\u0432 useState \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u0441 \u0434\u0432\u0443\u043c\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442: \u0442\u0435\u043a\u0443\u0449\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0434\u043b\u044f \u0435\u0433\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f. \u042d\u0442\u0443 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0433\u0434\u0435 \u0443\u0433\u043e\u0434\u043d\u043e, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0439. \u041e\u043d\u0430 \u0441\u0445\u043e\u0436\u0430 \u0441 this.setState \u0432 \u043a\u043b\u0430\u0441\u0441\u0430\u0445, \u043d\u043e \u043d\u0435 \u0441\u043b\u0438\u0432\u0430\u0435\u0442 \u043d\u043e\u0432\u043e\u0435 \u0438 \u0441\u0442\u0430\u0440\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0432\u043c\u0435\u0441\u0442\u0435.",date:"02.05.2020"},{id:3,title:"GitHub Pages",content:"GitHub Pages are public web pages for users, organizations, and repositories, that are freely hosted on GitHub\u2019s github.io domain or on a custom domain name of your choice. GitHub Pages are powered by Jekyll behind the scenes, so they\u2019re a great way to host your Jekyll-powered website for free.",date:"02.05.2020"}],Q="notesArray",X=function(){var e=localStorage.getItem(Q),t=r.a.useState(e?JSON.parse(e):B),n=Object(b.a)(t,2),a=n[0],c=n[1],i=r.a.useState(null),s=Object(b.a)(i,2),o=s[0],l=s[1];return Object(j.jsx)("div",{className:"NotesContainer",children:Object(j.jsxs)(x.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",children:[Object(j.jsx)(k,{notesArray:a,selectedIndex:o?o.id:null,changeSelectedIndex:function(e){return l(a[e])}}),Object(j.jsx)(z,{item:!0,selectedItem:o,updateNote:function(e,t){var n=a.map((function(n){if(n.id===o.id){var a={id:n.id,title:e,content:t,date:n.date};return l(a),a}return n}));c(n),localStorage.setItem(Q,JSON.stringify(n))}})]})})},q=function(){return Object(j.jsx)(V,{children:Object(j.jsx)(P.a,{variant:"h1",children:"There will be Shared Notes page"})})},K=function(){return Object(j.jsx)(V,{children:Object(j.jsx)(P.a,{variant:"h1",children:"There will be About page"})})},U=function(){return Object(j.jsx)(V,{children:Object(j.jsx)(P.a,{variant:"h1",style:{textAlign:"center"},children:"Page not found"})})},Y=function(){return Object(j.jsxs)(s.a,{children:[Object(j.jsx)(h,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/JsCourse",component:X}),Object(j.jsx)(o.a,{exact:!0,path:"/JsCourse/SharedNotes",component:q}),Object(j.jsx)(o.a,{exact:!0,path:"/JsCourse/About",component:K}),Object(j.jsx)(o.a,{component:U})]})]})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(Y,{})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.5af7e828.chunk.js.map