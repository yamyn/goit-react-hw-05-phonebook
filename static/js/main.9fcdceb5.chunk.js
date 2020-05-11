(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{1:function(e,t,n){e.exports={list:"ContactsList_list__2RiYd",item:"ContactsList_item__2O7n3",wrap:"ContactsList_wrap__2wfAx"}},19:function(e,t,n){e.exports={container:"App_container__16xz_"}},20:function(e,t,n){e.exports={enter:"slide-500ms_enter__3KjJC",enterActive:"slide-500ms_enterActive__1PUSQ",exit:"slide-500ms_exit__Yd33a",exitActive:"slide-500ms_exitActive__3BQFL"}},21:function(e,t,n){e.exports={titleSection:"Section_titleSection__3sOBD"}},22:function(e,t,n){e.exports={filter:"Filter_filter__1E5tH"}},23:function(e,t,n){e.exports={p:"Alert_p__3pTNQ"}},27:function(e,t,n){e.exports=n(43)},43:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),o=n.n(r),i=(n(32),n(24)),l=n(6),s=n(11),m=n(12),u=n(15),p=n(14),d=n(18),f=n.n(d),h=n(44),_=n(19),v=n.n(_),E=n(20),b=n.n(E),C=n(7),g=n.n(C),x=n(21),S=function(e){var t=e.title,n=e.children;return c.a.createElement("section",{className:x.titleSection},c.a.createElement("h2",null,t),n)},N=function(e){var t=e.message;return c.a.createElement("p",null,t,"!")},O=n(45),w=n(1);var y=function(e){var t=e.name,n=e.number,a=e.onDeleteContact,r=e.index;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("span",null,r,". ",t)),c.a.createElement("div",{className:w.wrap},c.a.createElement("p",null,n),c.a.createElement("button",{type:"button",onClick:a,className:w.button},c.a.createElement("i",{className:"".concat(w.icon," material-icons")},"close"))))},A=function(e){var t=e.contacts,n=e.onDeleteContact;return c.a.createElement(O.a,{component:"ul",className:w.list},t.map((function(e,t){var a=e.id,r=e.name,o=e.number;return c.a.createElement(h.a,{key:a,timeout:300,classNames:g.a,unmountOnExit:!0},c.a.createElement("li",{key:a,className:w.item},c.a.createElement(y,{index:t+1,name:r,number:o,onDeleteContact:function(){return n(a)}})))})))},j=n(22),k=function(e){var t=e.value,n=e.onChangeFilter;return c.a.createElement("div",{className:j.filter},c.a.createElement("p",null,"Find contacts by name"),c.a.createElement("input",{type:"text",value:t,onChange:n,placeholder:"Enter name..."}))},F=n(10),L=n(8),D=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){e.setState(Object(F.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.onAddContact(Object(l.a)({},e.state)),e.setState({name:"",number:""})},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return c.a.createElement("form",{onSubmit:this.handleSubmit,className:L.form},c.a.createElement("div",{className:L.wrap},c.a.createElement("p",null,"Name"),c.a.createElement("input",{type:"text",placeholder:"Enter contact`s name",value:t,onChange:this.handleChange,name:"name"})),c.a.createElement("div",{className:L.wrap},c.a.createElement("p",null,"Number"),c.a.createElement("input",{type:"text",placeholder:"Enter contact`s name",value:n,onChange:this.handleChange,name:"number"})),c.a.createElement("button",{className:L.button,type:"submit"},"Add contact"))}}]),n}(a.Component),J=n(23),T=function(e){var t=e.message;return c.a.createElement("p",{className:J.p},t,"!")},q=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[],filter:"",addTittle:!1,alert:{isShow:!1,message:""}},e.changeFilter=function(t){e.setState({filter:t.target.value})},e.addContact=function(t){if(e.state.contacts.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()})))e.setState({alert:{isShow:!0,message:"Contact with ".concat(t.name," already exist!")}});else{var n=Object(l.a)(Object(l.a)({},t),{},{id:f.a.generate()});e.setState((function(e){return{contacts:[].concat(Object(i.a)(e.contacts),[n])}}))}},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");this.setState({addTittle:!0}),e&&this.setState({contacts:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(e,t){t.alert.isShow&&this.setState({alert:{isShow:!1,message:""}}),t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=e.addTittle,r=e.alert,o=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(t,n);return c.a.createElement("div",{className:v.a.container},c.a.createElement(h.a,{in:a,timeout:500,classNames:b.a,unmountOnExit:!0},c.a.createElement("h1",null,"Phonebook")),c.a.createElement(S,{title:""},c.a.createElement(D,{onAddContact:this.addContact})),c.a.createElement(h.a,{in:this.state.contacts.length>2,timeout:300,classNames:g.a,unmountOnExit:!0},c.a.createElement(S,{title:""},c.a.createElement(k,{value:n,onChangeFilter:this.changeFilter}))),c.a.createElement(S,{title:""},o.length>0?c.a.createElement(A,{contacts:o,onDeleteContact:this.deleteContact}):c.a.createElement(N,{message:"Contacts for query not found"})),c.a.createElement(h.a,{in:r.isShow,timeout:300,classNames:g.a,unmountOnExit:!0},c.a.createElement(T,{message:r.message})))}}]),n}(a.Component);o.a.render(c.a.createElement(q,null),document.querySelector("#root"))},7:function(e,t,n){e.exports={enter:"slide_enter__BLs75",enterActive:"slide_enterActive__2XArv",exit:"slide_exit__2XvOt",exitActive:"slide_exitActive__3LNYO"}},8:function(e,t,n){e.exports={form:"CreateContactForm_form__1IKsq",button:"CreateContactForm_button__v34X3"}}},[[27,1,2]]]);
//# sourceMappingURL=main.9fcdceb5.chunk.js.map