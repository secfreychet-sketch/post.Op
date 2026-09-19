(function(){
  function dayValue(s){
    s=(s||'').trim().toUpperCase().replace(/\s/g,'');
    if(s==='JOURJ'||s==='J') return 0;
    var m=s.match(/^J([+-])(\d+)$/);
    if(!m) return null;
    return (m[1]==='-'?-1:1)*parseInt(m[2],10);
  }

  function currentDay(){
    var els=document.querySelectorAll('.disp');
    for(var i=0;i<els.length;i++){
      var txt=(els[i].textContent||'').trim();
      var d=dayValue(txt);
      if(d!==null) return d;
    }
    return null;
  }

  function hideExpiredHome(now){
    var nodes=document.querySelectorAll('div');
    for(var i=0;i<nodes.length;i++){
      var el=nodes[i];
      if(el.children.length) continue;
      var txt=(el.textContent||'').trim();
      var m=txt.match(/^(J(?:[+-]\d+)?|JOUR J)\s*·/i);
      if(!m) continue;
      var d=dayValue(m[1]);
      if(d===null || d>=now) continue;

      var p=el;
      for(var n=0;n<5 && p;n++,p=p.parentElement){
        if(p.parentElement && p.parentElement.classList && p.parentElement.classList.contains('col')) break;
        if(p.style && p.style.borderBottom){
          p.style.display='none';
          break;
        }
      }
    }
  }

  function hideExpiredChecklist(now){
    var cards=document.querySelectorAll('div[style*="border-radius: 16px"],div[style*="border-radius:16px"]');
    for(var i=0;i<cards.length;i++){
      var card=cards[i];
      var labels=card.querySelectorAll('div');
      for(var j=0;j<labels.length;j++){
        var el=labels[j];
        if(el.children.length) continue;
        var d=dayValue((el.textContent||'').trim());
        if(d!==null){
          if(d<now) card.style.display='none';
          break;
        }
      }
    }
  }

  function apply(){
    var now=currentDay();
    if(now===null) return;
    hideExpiredHome(now);
    hideExpiredChecklist(now);
  }

  var queued=false;
  function schedule(){
    if(queued) return;
    queued=true;
    requestAnimationFrame(function(){queued=false;apply();});
  }

  new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true});
  window.addEventListener('load',schedule);
  document.addEventListener('click',function(){setTimeout(schedule,0);});
  setInterval(apply,750);
  schedule();
})();