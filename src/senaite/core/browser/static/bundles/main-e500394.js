!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/++plone++senaite.core.static/bundles",n(n.s=1)}([function(e,t){e.exports=jQuery},function(e,t,n){n(3),e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=new function(){var e=this;e.baseUrl=o()("body").attr("data-i18ncatalogurl"),e.currentLanguage=o()("html").attr("lang")||"en",e.currentLanguage.split("-").length>1&&(e.currentLanguage=e.currentLanguage.split("-")[0]+"_"+e.currentLanguage.split("-")[1].toUpperCase()),e.storage=null,e.catalogs={},e.ttl=864e5,Date.now||(Date.now=function(){return(new Date).valueOf()});try{"localStorage"in window&&null!==window.localStorage&&"JSON"in window&&null!==window.JSON&&(e.storage=window.localStorage)}catch(e){}e.configure=function(t){for(var n in t)e[n]=t[n]},e._setCatalog=function(t,n,a){t in e.catalogs||(e.catalogs[t]={}),e.catalogs[t][n]=a},e._storeCatalog=function(t,n,a){var o=t+"-"+n;null!==e.storage&&null!==a&&(e.storage.setItem(o,JSON.stringify(a)),e.storage.setItem(o+"-updated",Date.now()))},e.getUrl=function(t,n){return e.baseUrl+"?domain="+t+"&language="+n},e.loadCatalog=function(t,n){if(void 0===n&&(n=e.currentLanguage),null!==e.storage){var a=t+"-"+n;if(a in e.storage&&Date.now()-parseInt(e.storage.getItem(a+"-updated"),10)<e.ttl){var r=JSON.parse(e.storage.getItem(a));return void e._setCatalog(t,n,r)}}e.baseUrl&&o.a.getJSON(e.getUrl(t,n),(function(a){null!==a&&(e._setCatalog(t,n,a),e._storeCatalog(t,n,a))}))},e.MessageFactory=function(t,n){return n=n||e.currentLanguage,function(a,o){var r,i,l;if(r=t in e.catalogs&&n in e.catalogs[t]&&a in e.catalogs[t][n]?e.catalogs[t][n][a]:a,o)for(l in o)o.hasOwnProperty(l)&&(i=new RegExp("\\$\\{"+l+"\\}","g"),r=r.replace(i,o[l]));return r}}},i=null,l=function(e,t){return null===i&&(console.debug("*** Loading `senaite.core` i18n MessageFactory ***"),r.loadCatalog("senaite.core"),i=r.MessageFactory("senaite.core")),i(e,t)},u=null,c=function(e,t){return null===u&&(console.debug("*** Loading `plone` i18n MessageFactory ***"),r.loadCatalog("plone"),u=r.MessageFactory("plone")),u(e,t)};document.addEventListener("DOMContentLoaded",(function(){console.debug("*** SENAITE CORE JS LOADED ***"),window.i18n=r,window._t=l,window._p=c,window.portal_url=document.querySelector("body").dataset.portalUrl,tinymce.init({selector:"textarea.mce_editable,div.ArchetypesRichWidget textarea,textarea[name='form.widgets.IRichTextBehavior.text']",plugins:["paste","link","autoresize","fullscreen","table","code"],content_css:"/++plone++senaite.core.static/bundles/main.css"});var e=null;o()("#sidebar-header").on("click",(function(){o()("#sidebar").toggleClass("minimized"),clearTimeout(e)})),o()("#sidebar").on("mouseenter",(function(){e=setTimeout((function(){o()("#sidebar").removeClass("minimized")}),1e3)})),o()("#sidebar").on("mouseleave",(function(){o()("#sidebar").addClass("minimized"),clearTimeout(e)})),o()("#sidebar ul li a").on("click",(function(){clearTimeout(e)})),o()((function(){o()("[data-toggle='tooltip']").tooltip()}))}))}]);