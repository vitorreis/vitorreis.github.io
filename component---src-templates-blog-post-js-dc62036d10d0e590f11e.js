(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{151:function(e,t,n){"use strict";n.r(t);n(34);var a=n(7),l=n.n(a),r=n(0),i=n.n(r),o=n(152),c=n(159),s=n(155),u=n(156),m=n(153),p=(n(35),function(e){return{en:"English",pt:"Português",zh_TW:"Chinese (Traditional)"}[e]});n.d(t,"pageQuery",function(){return f});var d=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,n=this.props.pageContext,a=n.previous,l=n.next,r=n.slug,d=e.fields.langKey,f=(e.frontmatter.langs||[]).filter(function(e){return"en"!==e}),g=function(e,t){var n=e.replace(t+"/","");return function(e){return"en"===e?n:e+"/"+n}}(r,d);return i.a.createElement(s.a,{location:this.props.location,title:t},i.a.createElement(u.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),i.a.createElement("h1",null,e.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(m.b)(-.2),{display:"block",marginBottom:Object(m.a)(1),marginTop:Object(m.a)(-1)})},e.frontmatter.date),f.length>0&&i.a.createElement(i.a.Fragment,null,(f.length>1||"en"===d)&&i.a.createElement("p",null,i.a.createElement("i",null,"This article is also available into ",f.map(function(e,t){return i.a.createElement(i.a.Fragment,{key:e},e===d?i.a.createElement("b",null,p(e)):i.a.createElement(o.a,{to:g(e)},p(e)),t===f.length-1?"":t===f.length-2?0===t?" and ":", and ":", ")}),".")),"en"!==d&&i.a.createElement("p",null,i.a.createElement("i",null,"You can also ",i.a.createElement(o.a,{to:g("en")},"read the original in English")))),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(m.a)(1)}}),i.a.createElement(c.a,null),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,a&&i.a.createElement(o.a,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),i.a.createElement("li",null,l&&i.a.createElement(o.a,{to:l.fields.slug,rel:"next"},l.frontmatter.title," →"))))},t}(i.a.Component),f=(t.default=d,"3243906122")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-dc62036d10d0e590f11e.js.map