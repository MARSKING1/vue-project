(function(window){var svgSprite='<svg><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M727.934492 694.683692c60.046584-67.008136 96.571453-155.563008 96.571453-252.643044 0-209.079876-169.492252-378.595664-378.595664-378.595664-209.102389 0-378.598734 169.515788-378.598734 378.595664 0 209.128995 169.495322 378.64376 378.598734 378.64376 95.078449 0 181.976588-35.056424 248.504794-92.963275l230.230592 230.251058 33.287127-33.286104L727.934492 694.683692zM445.911304 773.857916c-182.943612 0-331.772242-148.872632-331.772242-331.817268 0-182.89654 148.827607-331.814198 331.772242-331.814198 182.941566 0 331.769173 148.917658 331.769173 331.814198C777.680477 624.984261 628.85287 773.857916 445.911304 773.857916z"  ></path></symbol><symbol id="icon-zuoyoujiantou2" viewBox="0 0 1024 1024"><path d="M281.241 936.602l36.198 36.198 450.56-450.56-450.56-450.56-36.198 36.198 414.362 414.362z"  ></path></symbol><symbol id="icon-zuoyoujiantou" viewBox="0 0 1024 1024"><path d="M742.7584 87.3984L706.56 51.2 256 501.76l450.56 450.56 36.1984-36.1984L328.3968 501.76z" fill="#8a8a8a" ></path></symbol><symbol id="icon-xiala" viewBox="0 0 1024 1024"><path d="M543.744 647.68c-7.168 7.168-16.896 13.824-26.112 11.776-9.216 1.536-17.92-5.632-25.088-11.776L270.848 424.96c-11.264-11.264-11.264-29.696 0-40.96s29.696-11.264 40.96 0l206.336 211.968L724.992 384c11.264-11.264 29.696-11.264 40.96 0s11.264 29.696 0 40.96L543.744 647.68z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)