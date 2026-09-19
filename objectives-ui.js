/* Objectifs postop à partir de J15 */
(function(){
  const { useState, useMemo, useEffect } = React;
  const h = React.createElement;

  const STAGES = [
    {day:21,label:"3 semaines",title:"Premier contrôle",items:[
      "Extension complète",
      "Marche sans flessum",
      "Contraction du quadriceps correcte avec verrouillage",
      "Cicatrices propres"
    ]},
    {day:42,label:"6 semaines",title:"Deuxième étape",items:[
      "Marche correcte sans canne",
      "Flexion supérieure à 90°",
      "Rodage articulaire sur vélo si les objectifs sont atteints"
    ]},
    {day:90,label:"3 mois",title:"Récupération fonctionnelle",items:[
      "Extension et flexion complètes",
      "Genou sans épanchement",
      "Renforcement du quadriceps et des ischio-jambiers",
      "Début de la proprioception",
      "Reprise de la course à pied"
    ]},
    {day:180,label:"6 mois",title:"Évaluation avant reprise sportive",items:[
      "Test isocinétique",
      "Test K-STARTS",
      "Reprise de l’entraînement en sports pivots selon les résultats des tests"
    ]}
  ];

  function storeGet(){
    try{
      const raw=localStorage.getItem("postop_goals");
      return raw?JSON.parse(raw):{};
    }catch(e){return {}}
  }

  window.ObjectivesPanel = function ObjectivesPanel({day,dateOp,po,C,Card,Eyebrow,IcCheck,addD,sh}){
    const [goals,setGoals]=useState(storeGet);
    useEffect(()=>{
      try{localStorage.setItem("postop_goals",JSON.stringify(goals))}catch(e){}
    },[goals]);

    const total=STAGES.reduce((n,s)=>n+s.items.length,0);
    const done=STAGES.reduce((n,s)=>n+s.items.filter((_,i)=>goals[s.day+"-"+i]).length,0);
    const pct=total?Math.round(done/total*100):0;

    const currentIndex=STAGES.findIndex(s=>day<s.day);
    const current=currentIndex===-1?STAGES[STAGES.length-1]:STAGES[currentIndex];

    const textFor=(stage,item)=>{
      if(stage.day===90 && item==="Reprise de la course à pied" && po && po.suture===true){
        return "Course à pied : reprise à 4 mois et demi en cas de suture méniscale";
      }
      return item;
    };

    return h("div",{className:"col",style:{gap:12}},
      h("div",{style:{background:C.deep,borderRadius:18,padding:"20px 18px",color:"#fff"}},
        h(Eyebrow,{color:"#9B99A0"},"Mes objectifs"),
        h("div",{className:"disp",style:{fontWeight:600,fontSize:22,marginTop:8,lineHeight:1.25}},"Les étapes de votre récupération"),
        h("div",{style:{color:"#C9C7CB",fontSize:13,marginTop:7,lineHeight:1.5}},
          day<current.day
            ? "Prochaine étape : "+current.label+" · "+sh(addD(dateOp,current.day))
            : "Suivez vos objectifs avec votre médecin du sport."),
        h("div",{style:{marginTop:15,height:8,borderRadius:8,background:"#38363A",overflow:"hidden"}},
          h("div",{style:{height:"100%",width:pct+"%",background:C.blue,borderRadius:8,transition:"width .4s ease"}})
        ),
        h("div",{className:"row",style:{justifyContent:"space-between",marginTop:7}},
          h("span",{style:{fontSize:11.5,color:"#9B99A0",fontWeight:700}},done+" / "+total+" objectifs"),
          h("span",{style:{fontSize:11.5,color:"#9B99A0",fontWeight:700}},pct+" %")
        )
      ),

      STAGES.map(stage=>{
        const reached=day>=stage.day;
        const nb=stage.items.filter((_,i)=>goals[stage.day+"-"+i]).length;
        const complete=nb===stage.items.length;
        return h(Card,{key:stage.day,style:{
          borderColor:complete?C.green:reached?C.blueLine:C.line,
          opacity:reached?1:.78,
          overflow:"hidden"
        }},
          h("div",{style:{padding:"15px 16px 10px"}},
            h("div",{className:"row",style:{justifyContent:"space-between",alignItems:"flex-start",gap:10}},
              h("div",null,
                h(Eyebrow,{color:complete?C.green:C.blue},stage.label),
                h("div",{style:{fontWeight:700,color:C.ink,fontSize:15,marginTop:5}},stage.title),
                h("div",{style:{color:C.muted,fontSize:12,marginTop:3}},
                  (reached?"À partir du ":"Prévu le ")+sh(addD(dateOp,stage.day)))
              ),
              h("div",{style:{color:complete?C.green:C.muted,fontSize:12.5,fontWeight:700}},nb+"/"+stage.items.length)
            )
          ),
          stage.items.map((item,i)=>{
            const key=stage.day+"-"+i;
            const checked=!!goals[key];
            return h("button",{
              key,
              onClick:()=>setGoals(g=>Object.assign({},g,{[key]:!g[key]})),
              className:"row",
              style:{gap:11,padding:"11px 16px",width:"100%",borderTop:"1px solid "+C.line,alignItems:"flex-start",background:"#fff"}
            },
              h("span",{style:{
                flexShrink:0,width:22,height:22,marginTop:1,borderRadius:7,
                border:"1.5px solid "+(checked?C.green:C.line),
                background:checked?C.green:"#fff",
                display:"flex",alignItems:"center",justifyContent:"center"
              }},checked?h(IcCheck,{size:13,color:"#fff",sw:3}):null),
              h("span",{style:{
                flex:1,color:checked?C.muted:C.ink,fontSize:13.5,lineHeight:1.45,
                textDecoration:checked?"line-through":"none"
              }},textFor(stage,item))
            );
          })
        );
      }),

      h(Card,{style:{borderStyle:"dashed"}},
        h("div",{style:{padding:16}},
          h(Eyebrow,null,"Après 6 mois"),
          h("div",{style:{color:C.muted,fontSize:13,marginTop:7,lineHeight:1.55}},
            "La reprise des sports pivots dépend des résultats des tests et de la validation médicale. La compétition n’est pas reprise avant 9 mois.")
        )
      ),
      h("div",{style:{color:C.muted,fontSize:11.5,lineHeight:1.55,padding:"0 4px 8px"}},
        "Ces objectifs sont des repères. Leur validation se fait avec votre médecin du sport ou le Dr Freychet selon votre évolution.")
    );
  };

  window.Post15TreatmentCard = function Post15TreatmentCard({M,C,Card,Eyebrow}){
    if(!M) return null;
    return h(Card,{style:{borderColor:C.blueLine}},
      h("div",{style:{padding:15}},
        h(Eyebrow,{color:C.blue},"Traitement en cours"),
        h("div",{style:{color:C.muted,fontSize:12.5,marginTop:5,lineHeight:1.45}},
          "L’onglet principal est maintenant consacré à vos objectifs, mais votre traitement reste visible ici."),
        M.s?h("div",{style:{marginTop:9,background:C.amberSoft,color:C.amber,borderRadius:9,padding:"8px 10px",fontSize:12,fontWeight:600}},M.s):null,
        h("div",{style:{marginTop:9}},
          M.l.map((x,i)=>h("div",{key:i,className:"row",style:{justifyContent:"space-between",gap:10,padding:"5px 0",fontSize:12.5}},
            h("span",{style:{fontWeight:700,color:C.ink}},x[0]),
            h("span",{style:{color:C.blue,textAlign:"right"}},x[1])
          ))
        )
      )
    );
  };
})();