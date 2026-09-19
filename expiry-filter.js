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
      var v=dayValue(els[i].textContent);
      if(v!==null) return v;
    }
    return null;
  }
  function hideExpired(){
    var now=currentDay();
    if(now===null) return;
    var all=document.querySelectorAll('div,span');
    for(var i=0;i<all.length;i++){
      var el=all[i], txt=(el.textContent||'').trim();
      /* Accueil : ligne date d'une tâche, ex. J+15 · 3 oct. */
      var m=txt.match(/^(J(?:[+-]\d+)?|JOUR J)\s*·/i);
      if(m){
        var d=dayValue(m[1]);
        if(d!==null && d<now){
          var btn=el.parentElement;
          var row=btn&&btn.parentElement;
          var task=row&&row.parentElement;
          if(task && row && row.classList.contains('row')) task.style.display='none';
        }
      }
      /* Onglet check-list : une carte entière correspond à un jour. */
      var exact=dayValue(txt);
      if(exact!==null && exact<now && el.style && el.style.textTransform==='uppercase'){
        var p=el;
        for(var n=0;n<4 && p;n++,p=p.parentElement){
          if(p && p.style && p.style.borderRadius==='16px'){p.style.display='none';break;}
        }
      }
    }
  }
  var queued=false;
  function schedule(){if(queued)return;queued=true;requestAnimationFrame(function(){queued=false;hideExpired();});}
  new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true});
  window.addEventListener('load',schedule);
  document.addEventListener('click',function(){setTimeout(schedule,0);});
  schedule();
})();