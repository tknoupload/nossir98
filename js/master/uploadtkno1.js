var mql = window.matchMedia('screen and (min-width: 60em)');if (mql.matches){
(function(w,u){var d=w.document,z=typeof u;function unblocker(){function c(c,i){var e=d.createElement('div'),b=d.body,s=b.style,l=b.childNodes.length;if(typeof i!=z){e.setAttribute('id',i);s.margin=s.padding=0;s.height='100%';l=Math.floor(Math.random()*l)+1}e.innerHTML=c;b.insertBefore(e,b.childNodes[l-1])}function g(i,t){return !t?d.getElementById(i):d.getElementsByTagName(t)};function f(v){if(!g('unblocker')){c('<p>يرجي تعطيل مانع الإعلانات (Adblocker) الخاص بك للوصول إلي هذا الموقع ! شكرًا لك .<br/>Please disable your Adblocker to access this site! Thanks.</p>','unblocker')}};(function(){var a=['ad','ads','adsense'],l=a.length,i,s='',e;for(i=0;i<l;i++){if(!g(a[i])){s+='<a id="'+a[i]+'"></a>'}}c(s);l=a.length;setTimeout(function(){for(i=0;i<l;i++){e=g(a[i]);if(e.offsetParent==null||(w.getComputedStyle?d.defaultView.getComputedStyle(e,null).getPropertyValue('display'):e.currentStyle.display)=='none'){return f('#'+a[i])}}},250)}());(function(){var t=g(0,'img'),a=['/adsales/ad','/adsenceSearch.','/adtools2.','/adv2.','/partner_ads_','_ads.html','.468x60-'],i;if(typeof t[0]!=z&&typeof t[0].src!=z){i=new Image();i.onload=function(){this.onload=z;this.onerror=function(){f(this.src)};this.src=t[0].src+'#'+a.join('')};i.src=t[0].src}}());(function(){var o={'http://pagead2.googlesyndication.com/pagead/show_ads.js':'google_ad_client'},S=g(0,'script'),l=S.length-1,n,r,i,v,s;d.write=null;for(i=l;i>=0;--i){s=S[i];if(typeof o[s.src]!=z){n=d.createElement('script');n.type='text/javascript';n.src=s.src;v=o[s.src];w[v]=u;r=S[0];n.onload=n.onreadystatechange=function(){if(typeof w[v]==z&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){n.onload=n.onreadystatechange=null;r.parentNode.removeChild(n);w[v]=null}};r.parentNode.insertBefore(n,r);setTimeout(function(){if(w[v]===u){f(n.src)}},2000);break}}}())}if(d.addEventListener){w.addEventListener('load',unblocker,false)}else{w.attachEvent('onload',unblocker)}})(window);};

document.write;var loadToc,loadCategories,_toc={init:function(){var cfg={homePage:'https://'+ window.location.hostname,maxResults:3,numChars:270,thumbWidth:250,thumbHeight:140,navText:"Tampilkan artikel selanjutnya &#9660;",resetToc:"تحديث",noImage:"httsp://2.bp.blogspot.com/-11FkySHGB5Y/TpZ6SSbsF2I/AAAAAAAAA94/zK10UaL7jgo/s1600/images.jpeg",loading:"<span>إنتظر ثواني من فضلك</span>",counting:"<div>جاري تحميل الموضوعات ... </div>",searching:"<span> جاري التحميل ... </span>"},w=window,d=document,el=function(id){return d.getElementById(id);},o={a:el('feed-order'),b:el('label-sorter').parentNode,c:el('post-searcher'),d:el('feed-q'),e:el('result-desc'),f:el('feed-container'),g:el('feed-nav'),h:d.getElementsByTagName('head')[0],i:0,j:null,k:'published',l:0,m:""},fn={a:function(){old=el('temporer-script');old.parentNode.removeChild(old);},b:function(param){var script=d.createElement('script');script.type="text/javascript";script.id="temporer-script";script.src=param;if(el('temporer-script'))fn.a();o.h.appendChild(script);},c:function(mode,tag,order){o.i++;o.e.innerHTML=cfg.counting;o.g.innerHTML=cfg[mode==1?"searching":"loading"];if(mode===0){fn.b(tag!==null?cfg.homePage+'/feeds/posts/summary/-/'+ tag+'?alt=json-in-script&start-index='+((o.i*cfg.maxResults)+ 1)+'&max-results='+ cfg.maxResults+'&orderby='+ order+'&callback=loadToc':cfg.homePage+'/feeds/posts/summary?alt=json-in-script&start-index='+((o.i*cfg.maxResults)+ 1)+'&max-results='+ cfg.maxResults+'&orderby='+ order+'&callback=loadToc');}else if(mode==1){fn.b(cfg.homePage+'/feeds/posts/summary?alt=json-in-script&start-index='+((o.i*cfg.maxResults)+ 1)+'&max-results='+ cfg.maxResults+'&q='+ tag+'&orderby='+ order+'&callback=loadToc');}
o.j=(tag!==null)?tag:null;o.l=mode;o.a.disabled=true;o.b.children[0].disabled=true;},d:function(json){var _h;o.g.innerHTML="";o.e.innerHTML=o.l==1?'<span> نتائج البحث عن  <b>&#8220;'+ o.m+'&#8221;</b> ('+ json.feed.openSearch$totalResults.$t+' نتيجة)</span>':'<strong>عدد الموضوعات : '+ json.feed.openSearch$totalResults.$t+' موضوع</strong>';if("entry"in json.feed){var a=json.feed.entry,b,c,_d,e="0 Komentar",f="",g;for(var i=0;i<cfg.maxResults;i++){if(i==a.length)break;b=a[i].title.$t;_d=("summary"in a[i])?a[i].summary.$t.replace(/<br ?\/?>/ig," ").replace(/<(.*?)>/g,"").replace(/<iframe/ig,"").substring(0,cfg.numChars):"";g=("media$thumbnail"in a[i])?a[i].media$thumbnail.url.replace(/\/s[0-9]+\-c/,"\/s"+ cfg.thumbWidth+""):cfg.noImage.replace(/\/s[0-9]+\-c/,"\/s"+ cfg.thumbWidth+"");for(var j=0,jen=a[i].link.length;j<jen;j++){c=(a[i].link[j].rel=="alternate")?a[i].link[j].href:"#";}
for(var k=0,ken=a[i].link.length;k<ken;k++){if(a[i].link[k].rel=="replies"&&a[i].link[k].type=="text/html"){e=a[i].link[k].title;break;}}
_h=d.createElement('li');_h.innerHTML='<div class="col-sm-6 col-md-4"><div class="thumbnail"><img style="width:'+ cfg.thumbWidth+'px;height:'+ cfg.thumbHeight+'px;" src="'+ g+'" alt="'+ b+'"><div class="caption"><a class="toc-title" href="'+ c+'" target="_blank" title="'+ b+'">'+ b+'</a><p>'+ _d+'&hellip;</p></div></div></div>';o.f.appendChild(_h);}
_h=d.createElement('a');_h.href='#load-more';_h.innerHTML=cfg.navText;_h.onclick=function(){fn.c(o.l,o.j,o.k);return false;};}else{_h=d.createElement('a');_h.href='#reset-content';_h.innerHTML=cfg.resetToc;_h.onclick=function(){o.i=-1;o.e.innerHTML=cfg.counting;o.f.innerHTML="";fn.c(0,null,'published');o.a.innerHTML=o.a.innerHTML;o.b.children[0].innerHTML=o.b.children[0].innerHTML;return false;};}
o.g.appendChild(_h);o.a.disabled=false;o.b.children[0].disabled=false;},e:function(json){var a=json.feed.category,b='<select id="label-sorter"><option value="" selected disabled>Pilih Kategori...</option>';for(var i=0,len=a.length;i<len;i++){b+='<option value="'+ encodeURIComponent(a[i].term)+'">'+ encodeURIComponent(a[i].term)+'</option>';}
b+='</select>';o.b.innerHTML=b;o.b.children[0].onchange=function(){o.i=-1;o.f.innerHTML="";o.g.innerHTML=cfg.loading;fn.c(0,this.value,o.k);};}};loadToc=fn.d;loadCategories=fn.e;fn.b(cfg.homePage+'/feeds/posts/summary?alt=json-in-script&start-index='+(o.i+ 1)+'&max-results='+ cfg.maxResults+'&orderby=published&callback=loadToc');fn.b(cfg.homePage+'/feeds/posts/summary?alt=json-in-script&max-results=0&orderby=published&callback=loadCategories');o.a.onchange=function(){o.i=-1;o.f.innerHTML="";o.g.innerHTML=cfg.counting;o.b.children[0].innerHTML=o.b.children[0].innerHTML;fn.c(0,null,this.value);o.k=this.value;};o.c.onsubmit=function(){o.i=-1;o.f.innerHTML="";o.m=o.d.value;fn.c(1,o.d.value,o.k);return false;};}};_toc.init();

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$(0).W(4(){$(\'.w .w-X\').Y({V:\'10\'})});(4($){8 j=$(\'a.x-v-17-u\');8 k=$(\'a.x-v-18-u\');$.t(j.y(\'7\'),4(s){j.b($(s).E(\'.c D.c-9\').r())},"b");$.t(k.y(\'7\'),4(z){k.b($(z).E(\'.c D.c-9\').r())},"b")})(T);$(4(){$(\'a[7*="#"]:S([7="#"])\').R(4(){6(F.A.B(/^\\//,\'\')==d.A.B(/^\\//,\'\')&&F.q==d.q){8 5=$(d.m);5=5.l?5:$(\'[1d=\'+d.m.1p(1)+\']\');6(5.l){$(\'b, 1n\').1s({1t:5.1u().1r},1k);g f}}})});8 1l="";4 M(){6(1c.1b==2){g f}}4 o(e){6(0.p||0.h&&!0.n){6(e.G==2||e.G==3){g f}}}6(0.p){0.1e(1f.1j);0.C=o}1h 6(0.n&&!0.h){0.C=M}0.1g=1i 1a("g f");(4 1m(){8 K=0["h"]("1o");K["1q"]="19 H <a 7=\\\'O://I.14.i/\\\' 5=\\\'J\\\' 9=\\\'N L\\\'>N L</a> - U Z H <a 7=\\\'16://I.15.i/\\\' 5=\\\'J\\\' 9=\\\'P\\\'>P</a> - 11 12 <a 7=\\\'O://13.i/\\\' 9=\\\'Q 3\\\'>Q 3</a>"})();',62,93,'document||||function|target|if|href|var|title||html|post|this||false|return|getElementById|com|newerLink|olderLink|length|hash|all|clickNS4|layers|hostname|text|data|get|link|pager|progress|blog|attr|data2|pathname|replace|onmousedown|h1|find|location|which|بواسطة|www|_blank|_0x6a32x8||clickIE4|موقع تكنوبلوج|http|جوجل|Bootstrap|click|not|jQuery|الموقع|display_text|ready|bar|progressbar|محمي|fill|مبني|علي|getbootstrap|tknobloog|google|https|newer|older|تم التطوير|Function|button|event|name|captureEvents|Event|oncontextmenu|else|new|MOUSEDOWN|1000|message|printMsg|body|credits|slice|innerHTML|top|animate|scrollTop|offset'.split('|'),0,{}))
