/*! eCSSential - v0.1.0 - 2012-06-08
* https://github.com/scottjehl/eCSSential
* Copyright (c) 2012 Scott Jehl, @scottjehl, Filament Group, Inc.; Licensed GPL, MIT; Includes matchMedia.js: http://j.mp/jay3wJ (MIT)  */
window.matchMedia=window.matchMedia||function(a,b){var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=g.offsetWidth===42,d.removeChild(f),{matches:c,media:a}}}(document),window.eCSSential=function(a,b){function o(a){var b=a===c?'<meta id="eCSS">':"",d='<link href="',e='" rel="stylesheet">',g=[],h=[];for(var i in a)a.hasOwnProperty(i)&&(g.push(a[i].href),h.push(a[i].href+'" media="'+a[i].mq));return f.concat?d+f.concat(g)+e+b:d+h.join('" '+e+d)+e+b}"use strict";var c=[],d=[],e=[],f=b||{},g=window,h=g.document,i=h.getElementsByTagName("script")[0],j=/(min|max)-(width|height)/gmi,k=g.navigator.appVersion.match(/MSIE ([678])\./)&&RegExp.$1,l=new RegExp("(IE"+k+")|(IE)","g");for(var m in a)if(a.hasOwnProperty(m)){var n=m.match(l);g.matchMedia(m).matches||k&&(f.oldIE||n&&n[1])?c.push({mq:f.oldIE||n?"all":m,href:a[m]}):!n&&(f.deferAll||!m.match(j)||g.matchMedia(m.replace(j,"$1-device-$2")).matches)&&d.push({mq:m,href:a[m]})}if(c.length){h.write(o(c)),i=h.getElementById("eCSS");var p=i.parentNode.getElementsByTagName("link");for(var q=0,r=p.length;q<r;q++)(function(a){var b=g.setTimeout(function(){var b=a.nextSibling;a.parentNode.removeChild(a),b.parentNode.insertBefore(a,b),e.push(a)},f.patience||8e3);a.onload=function(){clearTimeout(b)}})(p[q])}if(d.length){var s=h.createElement("div");s.innerHTML=o(d),i.parentNode.insertBefore(s,i)}return{css:a,config:b,block:c,defer:d,timedout:e}};