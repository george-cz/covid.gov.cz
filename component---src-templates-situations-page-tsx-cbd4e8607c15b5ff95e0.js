(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+uiX":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),i=a.n(n),r=a("qhky"),l=function(e){var t=e.canonicalUrl,a=e.datePublished,n=e.defaultTitle,l=e.description,c=e.isBlogPost,o=e.organization,u=e.title,s=e.body,m=e.url,d=[{"@context":"http://schema.org","@type":"WebSite",url:m,name:u,alternateName:n}],b=c?[].concat(d,[{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":m,name:u}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:m,name:u,articleBody:s,alternateName:n,headline:u,description:l,publisher:{"@type":"Organization",url:o.url,name:o.name},mainEntityOfPage:{"@type":"WebSite","@id":t},datePublished:a}]):d;return i.a.createElement(r.b,null,i.a.createElement("meta",{property:"og:url",content:m}),c?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:u}),i.a.createElement("meta",{property:"og:description",content:l}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(b)))}},"50Lu":function(e,t,a){e.exports={situationDetail:"situation-detail-module--situationDetail--FlH1Z"}},AebV:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI"),i=a.n(n),r=function(e){var t=e.datetime,a=e.prefix,n=e.suffix,r=void 0===n?" ":n;return i.a.createElement("time",{dateTime:t},a,new Date(t).toLocaleString("cs-CZ",{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit",timeZone:"GMT"}),r)}},"I+D7":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),i=a.n(n),r=a("W+yO"),l=a.n(r),c=function(e){var t=e.children;return i.a.createElement("h1",{className:l.a.headline},t)}},QoFz:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("TSYQ"),i=a.n(n),r=a("q1tI"),l=a.n(r),c=a("dT4H"),o=a("pvlE"),u=a.n(o),s=function(e){return i()("breadcrumb",u.a.breadcrumbContainer,{"breadcrumb--inverse":"inverse"===e})},m=function(e){var t=e.items,a=e.variant,n=void 0===a?"normal":a,r=function(e){var a;return i()("breadcrumb__item",u.a.breadcrumbItem,((a={})[u.a.breadcrumbItemActive]=e===t.length-1,a))};return l.a.createElement("nav",{className:"breadcrumbs","aria-label":"breadcrumb"},l.a.createElement("ol",{className:s(n)},t.map((function(e,t){return l.a.createElement("li",{key:"breadcrumb-item-"+t,className:r(t)},function(e){return void 0!==e.title}(e)?l.a.createElement(c.a,{to:e.url,className:"breadcrumb__link",label:e.title}):l.a.createElement("span",{className:"breadcrumb__link"},e))}))))}},"W+yO":function(e,t,a){e.exports={headline:"headline-module--headline--2EZlD"}},fkDn:function(e,t,a){"use strict";a.d(t,"a",(function(){return I}));var n=a("q1tI"),i=a.n(n),r=a("LYUY"),l=Object(r.a)(i.a.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"Room"),c=Object(r.a)(i.a.createElement("path",{d:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"}),"Event"),o=a("6Hpx"),u=a("dT4H"),s=a("QoFz"),m=a("I+D7"),d=a("AebV"),b=a("jufJ"),v=a("50Lu"),p=a.n(v),f=a("TSYQ"),E=a.n(f),h=Object(r.a)(i.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),g=Object(r.a)(i.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),y=a("l41P"),_=a.n(y),N=a("zoQI"),j=function(e){var t=e.title,a=e.text,r=Object(n.useState)(!1),l=r[0],c=r[1],o=Object(n.useCallback)((function(){c(!l)}),[l]);return i.a.createElement("div",{className:_.a.section},i.a.createElement("div",{className:E()(_.a.sectionHeading,"d-flex","justify-content-between","align-items-center"),onClick:o},t,i.a.createElement(N.a,{icon:l?i.a.createElement(h,null):i.a.createElement(g,null),className:E()(_.a.sectionButton,"d-flex","justify-content-center","align-items-center"),variant:"yellow"})),l&&i.a.createElement("div",{className:_.a.sectionContent},a))},x=function(e){var t=e.data;return i.a.createElement(i.a.Fragment,null,t.map((function(e,t){return i.a.createElement(j,Object.assign({key:t},e))})))},O=a("ptG0"),I=function(e){var t,a,n,r,v,f,E,h,g,y=e.situation,_=e.type;return i.a.createElement("div",{className:p.a.situationDetail},i.a.createElement(o.a,null,i.a.createElement("div",{className:"pt-1"},i.a.createElement(s.a,{items:[{title:Object(b.b)("home"),url:"/"},{title:Object(b.b)("measure"===_?"current_measures":"life_situations"),url:Object(b.b)("slug_"+_+"s")},{title:null===(t=y.relationships)||void 0===t||null===(a=t.situation_type)||void 0===a?void 0:a.name,url:null===(n=y.relationships)||void 0===n||null===(r=n.situation_type)||void 0===r||null===(v=r.path)||void 0===v?void 0:v.alias},y.title],variant:"inverse"})),i.a.createElement("div",{className:"mt-3"},i.a.createElement(m.a,null,y.title)),i.a.createElement("article",{className:"bg-white rounded p-2 pb-3 mb-1"},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:null==y||null===(f=y.content)||void 0===f?void 0:f.processed}}),(null===(E=y.links)||void 0===E?void 0:E.length)?i.a.createElement("div",{className:"mt-2"},i.a.createElement("h3",{className:"mb-1 color-blue-dark"},Object(b.b)("related")),i.a.createElement("div",null,y.links.map((function(e,t){return i.a.createElement("div",{key:t},i.a.createElement(u.a,{className:"color-blue mb-1",to:e.uri},e.title))})))):"",(null===(h=y.relationships)||void 0===h?void 0:h.region.length)?i.a.createElement("div",{className:"mt-2"},i.a.createElement("h3",{className:"mb-1 color-blue-dark"},Object(b.b)("location_validity")),i.a.createElement("div",{className:"d-flex align-items-center color-blue mb-1"},i.a.createElement(l,null)," ",i.a.createElement("span",{className:"text-uppercase font-weight-medium"},y.relationships.region.map((function(e){return e.name})).join(", ")))):"",y.valid_from||y.valid_to?i.a.createElement("div",{className:"d-flex align-items-center color-blue"},i.a.createElement(c,null)," ",i.a.createElement("span",{className:"text-uppercase font-weight-medium"},y.valid_from&&i.a.createElement(d.a,{datetime:y.valid_from,prefix:Object(b.b)("from")+" "}),y.valid_to&&i.a.createElement(d.a,{datetime:y.valid_to,prefix:Object(b.b)("to")+" "}))):""),(null===(g=y.questions_answers)||void 0===g?void 0:g.length)?i.a.createElement(O.a,{variant:"blue",title:Object(b.b)("faq"),boldedTitleCount:2},i.a.createElement(x,{data:y.questions_answers.map((function(e){return{title:e.question,text:e.value}}))})):""))}},l41P:function(e,t,a){e.exports={section:"accordion-section-module--section--BMIm5",sectionHeading:"accordion-section-module--sectionHeading--1aw0-",sectionButton:"accordion-section-module--sectionButton--1rqdf",sectionContent:"accordion-section-module--sectionContent--3m_BR"}},pvlE:function(e,t,a){e.exports={breadcrumbContainer:"breadcrumb-module--breadcrumbContainer--aIVuB",breadcrumbItem:"breadcrumb-module--breadcrumbItem--3jBwP",breadcrumbItemActive:"breadcrumb-module--breadcrumbItemActive--6MwJy"}},xzpE:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return s}));var n=a("q1tI"),i=a.n(n),r=a("+uiX"),l=a("n214"),c=a("fkDn"),o=a("21qS"),u=a("jufJ");t.default=function(e){var t=e.data;return i.a.createElement(o.a,null,i.a.createElement(l.a,{title:t.situation.title,description:t.situation.meta_description||Object(u.b)("current_measures_overview_meta"),pagePath:t.situation.path.alias,htmlLanguage:t.situation.langcode}),i.a.createElement(r.a,{canonicalUrl:"https://covid.gov.cz"+t.situation.path.alias,datePublished:t.situation.valid_from,defaultTitle:t.situation.title,isBlogPost:!0,description:t.situation.meta_description,body:t.situation.content.processed,title:t.situation.title,url:"https://covid.gov.cz"+t.situation.path.alias,organization:{url:"https://gov.cz",name:"Portál veřejné správy"}}),i.a.createElement(c.a,{situation:t.situation,type:"situation"}))};var s="2894263416"}}]);
//# sourceMappingURL=component---src-templates-situations-page-tsx-cbd4e8607c15b5ff95e0.js.map