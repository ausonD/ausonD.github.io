((t,e)=>{t.iFrameHeight=t=>{const n="contentDocument"in t?t.contentDocument:t.contentWindow.document,o=parseInt(n.body.scrollHeight,10);e.all?e.all&&t.id&&(e.all[t.id].style.height=`${parseInt(o,10)+20}px`):t.style.height=`${parseInt(o,10)+60}px`}})(window,document);