(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+uiX":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI"),i=a.n(n),l=a("qhky"),r=function(e){var t=e.canonicalUrl,a=e.datePublished,n=e.defaultTitle,r=e.description,c=e.isBlogPost,o=e.organization,s=e.title,u=e.body,m=e.url,d=[{"@context":"http://schema.org","@type":"WebSite",url:m,name:s,alternateName:n}],b=c?[].concat(d,[{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":m,name:s}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:m,name:s,articleBody:u,alternateName:n,headline:s,description:r,publisher:{"@type":"Organization",url:o.url,name:o.name},mainEntityOfPage:{"@type":"WebSite","@id":t},datePublished:a}]):d;return i.a.createElement(l.b,null,i.a.createElement("meta",{property:"og:url",content:m}),c?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:s}),i.a.createElement("meta",{property:"og:description",content:r}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(b)))}},"50Lu":function(e,t,a){e.exports={situationDetail:"situation-detail-module--situationDetail--FlH1Z"}},"9Rx2":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),l=a("LYUY"),r=Object(l.a)(i.a.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"Room"),c=Object(l.a)(i.a.createElement("path",{d:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"}),"Event"),o=a("6Hpx"),s=a("dT4H"),u=a("QoFz"),m=a("I+D7"),d=a("AebV"),b=a("jufJ"),p=a("50Lu"),v=a.n(p),E=a("TSYQ"),f=a.n(E),h=Object(l.a)(i.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),y=Object(l.a)(i.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),g=a("l41P"),k=a.n(g),_=a("zoQI"),N=function(e){var t=e.title,a=e.text,l=Object(n.useState)(!1),r=l[0],c=l[1],o=Object(n.useCallback)((function(){c(!r)}),[r]);return i.a.createElement("div",{className:k.a.section},i.a.createElement("div",{className:f()(k.a.sectionHeading,"d-flex","justify-content-between","align-items-center"),onClick:o},t,i.a.createElement(_.a,{icon:r?i.a.createElement(h,null):i.a.createElement(y,null),className:f()(k.a.sectionButton,"d-flex","justify-content-center","align-items-center"),variant:"yellow"})),r&&i.a.createElement("div",{className:k.a.sectionContent},a))},j=function(e){var t=e.data;return i.a.createElement(i.a.Fragment,null,t.map((function(e,t){return i.a.createElement(N,Object.assign({key:t},e))})))},x=a("ptG0");t.a=function(e){var t,a,n,l,p,E,f,h,y,g=e.situation,k=e.type;return i.a.createElement("div",{className:v.a.situationDetail},i.a.createElement(o.a,null,i.a.createElement("div",{className:"pt-1"},i.a.createElement(u.a,{items:[{title:Object(b.b)("home"),url:"/"},{title:Object(b.b)("measure"===k?"current_measures":"life_situations"),url:Object(b.b)("slug_"+k+"s")},{title:null===(t=g.relationships)||void 0===t||null===(a=t.situation_type)||void 0===a?void 0:a.name,url:null===(n=g.relationships)||void 0===n||null===(l=n.situation_type)||void 0===l||null===(p=l.path)||void 0===p?void 0:p.alias},g.title],variant:"inverse"})),i.a.createElement("div",{className:"mt-3"},i.a.createElement(m.a,null,g.title)),i.a.createElement("article",{className:"bg-white rounded p-2 pb-3 mb-1"},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:null==g||null===(E=g.content)||void 0===E?void 0:E.processed}}),(null===(f=g.links)||void 0===f?void 0:f.length)?i.a.createElement("div",{className:"mt-2"},i.a.createElement("h3",{className:"mb-1 color-blue-dark"},Object(b.b)("related")),i.a.createElement("div",null,g.links.map((function(e,t){return i.a.createElement("div",{key:t},i.a.createElement(s.a,{className:"color-blue mb-1",to:e.uri},e.title))})))):"",(null===(h=g.relationships)||void 0===h?void 0:h.region.length)?i.a.createElement("div",{className:"mt-2"},i.a.createElement("h3",{className:"mb-1 color-blue-dark"},Object(b.b)("location_validity")),i.a.createElement("div",{className:"d-flex align-items-center color-blue mb-1"},i.a.createElement(r,null)," ",i.a.createElement("span",{className:"text-uppercase font-weight-medium"},g.relationships.region.map((function(e){return e.name})).join(", ")))):"",g.valid_from||g.valid_to?i.a.createElement("div",{className:"d-flex align-items-center color-blue"},i.a.createElement(c,null)," ",i.a.createElement("span",{className:"text-uppercase font-weight-medium"},g.valid_from&&i.a.createElement(d.a,{datetime:g.valid_from,prefix:Object(b.b)("from")+" "}),g.valid_to&&i.a.createElement(d.a,{datetime:g.valid_to,prefix:Object(b.b)("to")+" "}))):""),(null===(y=g.questions_answers)||void 0===y?void 0:y.length)?i.a.createElement(x.a,{variant:"blue",title:Object(b.b)("faq"),boldedTitleCount:2},i.a.createElement(j,{data:g.questions_answers.map((function(e){return{title:e.question,text:e.value}}))})):""))}},AebV:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),i=a.n(n),l=function(e){var t=e.datetime,a=e.prefix,n=e.suffix,l=void 0===n?" ":n;return i.a.createElement("time",{dateTime:t},a,new Date(t).toLocaleString("cs-CZ",{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit",timeZone:"GMT"}),l)}},"I+D7":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),i=a.n(n),l=a("W+yO"),r=a.n(l),c=function(e){var t=e.children;return i.a.createElement("h1",{className:r.a.headline},t)}},QoFz:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("TSYQ"),i=a.n(n),l=a("q1tI"),r=a.n(l),c=a("dT4H"),o=a("pvlE"),s=a.n(o),u=function(e){return i()("breadcrumb",s.a.breadcrumbContainer,{"breadcrumb--inverse":"inverse"===e})},m=function(e){var t=e.items,a=e.variant,n=void 0===a?"normal":a,l=function(e){var a;return i()("breadcrumb__item",s.a.breadcrumbItem,((a={})[s.a.breadcrumbItemActive]=e===t.length-1,a))};return r.a.createElement("nav",{className:"breadcrumbs","aria-label":"breadcrumb"},r.a.createElement("ol",{className:u(n)},t.map((function(e,t){return r.a.createElement("li",{key:"breadcrumb-item-"+t,className:l(t)},function(e){return void 0!==e.title}(e)?r.a.createElement(c.a,{to:e.url,className:"breadcrumb__link",label:e.title}):r.a.createElement("span",{className:"breadcrumb__link"},e))}))))}},R99l:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),l=a("LYUY");t.a=Object(l.a)(i.a.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight")},V4KX:function(e,t,a){e.exports={linkStyled:"link-styled-module--linkStyled--_N7FG",linkStyledLink:"link-styled-module--linkStyledLink--2U7Xp",linkStyledIcon:"link-styled-module--linkStyledIcon--1ApnS"}},"W+yO":function(e,t,a){e.exports={headline:"headline-module--headline--2EZlD"}},l41P:function(e,t,a){e.exports={section:"accordion-section-module--section--BMIm5",sectionHeading:"accordion-section-module--sectionHeading--1aw0-",sectionButton:"accordion-section-module--sectionButton--1rqdf",sectionContent:"accordion-section-module--sectionContent--3m_BR"}},pvlE:function(e,t,a){e.exports={breadcrumbContainer:"breadcrumb-module--breadcrumbContainer--aIVuB",breadcrumbItem:"breadcrumb-module--breadcrumbItem--3jBwP",breadcrumbItemActive:"breadcrumb-module--breadcrumbItemActive--6MwJy"}},xzpE:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return h}));var n=a("q1tI"),i=a.n(n),l=a("21qS"),r=a("9Rx2"),c=a("ptG0"),o=a("dT4H"),s=a("V4KX"),u=a.n(s),m=a("R99l"),d=function(e){var t=e.to,a=e.label;return i.a.createElement("p",{className:u.a.linkStyled},i.a.createElement(o.a,{to:t,label:a,className:u.a.linkStyledLink},a,i.a.createElement(m.a,{style:{fontSize:20},className:u.a.linkStyledIcon})))},b=function(e){var t=e.links;return i.a.createElement("div",null,0!==t.length?t.map((function(e,t){return i.a.createElement(d,{key:t,label:e.title,to:e.path.alias})})):"")},p=a("6Hpx"),v=a("+uiX"),E=a("n214"),f=a("jufJ"),h=(t.default=function(e){var t=e.data,a=t.situation.relationships.related_situations;return i.a.createElement(l.a,null,i.a.createElement(E.a,{title:t.situation.title,description:t.situation.meta_description||Object(f.b)("current_measures_overview_meta"),pagePath:t.situation.path.alias,htmlLanguage:t.situation.langcode}),i.a.createElement(v.a,{canonicalUrl:"https://covid.gov.cz"+t.situation.path.alias,datePublished:t.situation.valid_from,defaultTitle:t.situation.title,isBlogPost:!0,description:t.situation.meta_description,body:t.situation.content.processed,title:t.situation.title,url:"https://covid.gov.cz"+t.situation.path.alias,organization:{url:"https://gov.cz",name:"Portál veřejné správy"}}),i.a.createElement(r.a,{situation:t.situation,type:"situation"}),i.a.createElement(p.a,{className:"pt-1"},a.length>0?i.a.createElement(c.a,{title:Object(f.b)("similar_topics"),boldedTitleCount:1,variant:"blue"},i.a.createElement(b,{links:a})):"",";"))},"3159654460")}}]);
//# sourceMappingURL=component---src-templates-situations-page-tsx-fb93d03d0f69aabe1833.js.map