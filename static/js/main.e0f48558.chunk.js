(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),s=n(8),a=n.n(s),r=(n(13),n(2)),i=n(3),l=n(6),u=n(5),h=n(4),j=n(0),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={colors:["red","orange","blue","yellow","green"]},o}return Object(i.a)(n,[{key:"showColor",value:function(e){return{backgroundColor:e}}},{key:"setActiveColor",value:function(e){this.props.onReceiveColor(e)}},{key:"render",value:function(){var e=this,t=this.state.colors.map((function(t,n){return Object(j.jsx)("span",{style:e.showColor(t),className:t===e.props.color?"active":"",onClick:function(){e.setActiveColor(t)}},n)}));return Object(j.jsx)("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6",children:Object(j.jsxs)("div",{className:"panel panel-primary",children:[Object(j.jsx)("div",{className:"panel-heading",children:Object(j.jsx)("h3",{className:"panel-title",children:"Color Picker"})}),Object(j.jsxs)("div",{className:"panel-body",children:[t,Object(j.jsx)("br",{})]})]})})}}]),n}(c.a.Component),p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).showFontSize=function(){return{fontSize:e.props.fontSize,borderColor:e.props.color,color:e.props.color}},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:[Object(j.jsxs)("p",{children:["Color : ",this.props.color," - font-size : ",this.props.fontSize,"px"]}),Object(j.jsx)("div",{id:"content",style:this.showFontSize(),children:"N\u1ed9i dung setting"})]})}}]),n}(c.a.Component),d=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"changeSize",value:function(e){this.props.onChangeSize(e)}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"panel panel-warning",children:[Object(j.jsx)("div",{className:"panel-heading",children:Object(j.jsxs)("h3",{className:"panel-title",children:["Size: ",this.props.fontSize,"px"]})}),Object(j.jsxs)("div",{className:"panel-body",children:[Object(j.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(){e.changeSize(-1)},children:"Gi\u1ea3m"}),Object(j.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(){e.changeSize(1)},children:"T\u0103ng"})]})]})}}]),n}(c.a.Component),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).setDefault=function(){e.props.onSetDefault(!0)},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.setDefault,children:"Reset"})}}]),n}(c.a.Component),O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).onChangeSize=function(e){var t=o.state.fontSize+e;t<=35&&t>=0?o.setState({fontSize:o.state.fontSize+e}):t>35?alert("Kh\xf4ng th\u1ec3 t\u0103ng font-size qu\xe1 35px"):alert("Kh\xf4ng th\u1ec3 gi\u1ea3m font-size qu\xe1 0px")},o.onSetDefault=function(e){e&&o.setState({color:"red",fontSize:15})},o.state={color:"red",fontSize:15},o.onsetColor=o.onsetColor.bind(Object(l.a)(o)),o}return Object(i.a)(n,[{key:"onsetColor",value:function(e){this.setState({color:e})}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)(b,{color:this.state.color,onReceiveColor:this.onsetColor}),Object(j.jsxs)("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6",children:[Object(j.jsx)(d,{fontSize:this.state.fontSize,onChangeSize:this.onChangeSize}),Object(j.jsx)(f,{onSetDefault:this.onSetDefault})]}),Object(j.jsx)(p,{color:this.state.color,fontSize:this.state.fontSize})]})})}}]),n}(c.a.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.e0f48558.chunk.js.map