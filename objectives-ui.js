/* Objectifs de rééducation LCA à partir de J15 — progression par critères */
(function(){
  const { useState, useEffect } = React;
  const h = React.createElement;

  const PHASES = [
    {
      n:1,
      title:"Extension symétrique & quadriceps actif",
      goal:"Conserver dès le postopératoire immédiat l’extension physiologique complète et strictement symétrique au côté sain, et obtenir un quadriceps totalement actif sans AMI.",
      criteria:[
        "Extension physiologique strictement symétrique au côté sain dès le postopératoire immédiat — y compris le recurvatum habituel du patient",
        "Extension conservée en permanence : aucune perte d’extension au fil des jours",
        "Quadriceps complètement actif, en particulier le vaste interne, sans AMI (Arthrogenic Muscle Inhibition)",
        "À la contraction du quadriceps : le genou reste au contact du sol et le talon se soulève spontanément",
        "Douleur et gonflement suffisamment maîtrisés pour permettre ce travail correctement"
      ],
      pro:"La référence n’est pas 0° pour tous les patients : c’est le genou controlatéral. Si le côté sain est à –15°, l’objectif postopératoire immédiat est –15° du côté opéré, puis de conserver cette extension. Il ne faut pas attendre de la « récupérer » plus tard."
    },
    {
      n:2,
      title:"Marche normale",
      goal:"Retrouver une marche fluide et une mobilité suffisante.",
      criteria:[
        "Extension complète conservée",
        "Flexion supérieure à 120°",
        "Marche sans boiterie et sans flessum",
        "Pas d’épanchement significatif",
        "Extension active complète, sans déficit de verrouillage"
      ],
      pro:"La qualité de la marche compte plus que la distance parcourue."
    },
    {
      n:3,
      title:"Force de base",
      goal:"Reconstruire la force, la stabilité et le contrôle sur une jambe.",
      criteria:[
        "Squat unipodal réalisé avec un bon alignement",
        "Bassin, genou et pied bien contrôlés pendant les exercices",
        "Force et endurance unipodales proches du côté sain, contrôlées avec le kiné",
        "Pas de gonflement réactionnel après les séances"
      ],
      pro:"La charge augmente progressivement seulement si le genou reste calme après l’effort."
    },
    {
      n:4,
      title:"Préparer la course",
      goal:"Atteindre les critères nécessaires avant de débuter une reprise progressive de la course.",
      criteria:[
        "Extension complète",
        "Flexion au moins égale à 95 % du côté sain",
        "Absence d’épanchement ou simple trace",
        "Force du quadriceps au moins égale à 80 % du côté sain",
        "Sautillements sur une jambe sans douleur et avec bon contrôle"
      ],
      pro:"Une date seule n’autorise jamais la course : il faut également que le genou remplisse les critères fonctionnels."
    },
    {
      n:5,
      title:"Réathlétisation",
      goal:"Transformer la force retrouvée en capacités dynamiques : courir, freiner, sauter et changer de direction.",
      criteria:[
        "Programme de reprise de course terminé sans réaction du genou",
        "Réceptions de saut stables et bien contrôlées",
        "Single Leg Hop Test ≥ 90 % du côté sain",
        "Triple Hop Test ≥ 90 % du côté sain",
        "Cross Over Hop Test ≥ 90 % du côté sain",
        "Side Hop Test ≥ 90 % du côté sain"
      ],
      pro:"On recherche la qualité du mouvement autant que la performance brute."
    },
    {
      n:6,
      title:"Retour au sport",
      goal:"Vérifier que le genou est prêt pour les contraintes réelles de votre sport.",
      criteria:[
        "Bilan isocinétique réalisé et interprété",
        "K-STARTS réalisé et interprété par l’équipe",
        "Course, sauts, freinages et changements de direction bien tolérés",
        "Gestes spécifiques du sport repris progressivement",
        "Confiance suffisante dans le genou",
        "Retour au sport validé par l’équipe médicale"
      ],
      pro:"L’isocinétique et le K-STARTS complètent l’examen clinique. Aucun test isolé ne suffit à autoriser le retour au sport."
    }
  ];

  function emptyState(){
    return {current:1,checked:{},validated:{},completed:{},kine:false,regular:false};
  }
  function storeGet(){
    try{
      const raw=localStorage.getItem("postop_goals_v2");
      const x=raw?JSON.parse(raw):emptyState();
      return Object.assign(emptyState(),x,{current:Math.min(6,Math.max(1,Number(x.current)||1))});
    }catch(e){return emptyState()}
  }

  window.ObjectivesPanel = function ObjectivesPanel({day,dateOp,po,C,Card,Eyebrow,IcCheck,addD,sh}){
    const [state,setState]=useState(storeGet);
    const [open,setOpen]=useState(()=>storeGet().current);

    useEffect(()=>{
      try{localStorage.setItem("postop_goals_v2",JSON.stringify(state))}catch(e){}
    },[state]);

    const toggleCriterion=(phase,index)=>{
      const key=phase+"-"+index;
      setState(s=>Object.assign({},s,{checked:Object.assign({},s.checked,{[key]:!s.checked[key]})}));
    };
    const allCriteriaDone=(phase)=>{
      const p=PHASES[phase-1];
      return p.criteria.every((_,i)=>!!state.checked[phase+"-"+i]);
    };
    const canAdvance=(phase)=>{
      return !!state.kine && !!state.regular && !!state.validated[phase] && allCriteriaDone(phase);
    };
    const validatePhase=(phase)=>{
      if(!canAdvance(phase)) return;
      setState(s=>({
        ...s,
        completed:Object.assign({},s.completed,{[phase]:true}),
        current:phase<6?phase+1:6
      }));
      if(phase<6) setOpen(phase+1);
    };

    const completedCount=PHASES.filter(p=>state.completed[p.n]).length;
    const pct=Math.round(completedCount/6*100);

    return h("div",{className:"col",style:{gap:12}},

      h("div",{style:{background:C.deep,borderRadius:18,padding:"20px 18px",color:"#fff"}},
        h(Eyebrow,{color:"#9B99A0"},"Mes objectifs"),
        h("div",{className:"disp",style:{fontWeight:600,fontSize:22,marginTop:8,lineHeight:1.25}},
          "Progression par objectifs, pas par dates"),
        h("div",{style:{color:"#C9C7CB",fontSize:13,marginTop:8,lineHeight:1.5}},
          "On passe à la phase suivante lorsque la phase actuelle est globalement acquise et validée avec le kinésithérapeute. Le temps écoulé seul ne suffit pas."
        ),
        h("div",{style:{marginTop:15,height:8,borderRadius:8,background:"#38363A",overflow:"hidden"}},
          h("div",{style:{height:"100%",width:pct+"%",background:C.blue,borderRadius:8,transition:"width .4s ease"}})
        ),
        h("div",{className:"row",style:{justifyContent:"space-between",marginTop:7}},
          h("span",{style:{fontSize:11.5,color:"#9B99A0",fontWeight:700}},completedCount+" / 6 phases acquises"),
          h("span",{style:{fontSize:11.5,color:"#9B99A0",fontWeight:700}},pct+" %")
        )
      ),

      h(Card,null,
        h("div",{style:{padding:16}},
          h(Eyebrow,null,"Ma rééducation"),
          h("div",{style:{color:C.muted,fontSize:13,marginTop:7,lineHeight:1.5}},
            "La chirurgie ne suffit pas : la récupération du genou nécessite une rééducation régulière, adaptée à votre évolution."
          ),
          h("button",{
            onClick:()=>setState(s=>Object.assign({},s,{kine:!s.kine})),
            style:{
              width:"100%",marginTop:12,padding:"11px 12px",borderRadius:11,textAlign:"left",
              border:"1.5px solid "+(state.kine?C.green:C.line),
              background:state.kine?"#EDF8F3":"#fff",fontSize:13.5,fontWeight:700,color:C.ink
            }
          },(state.kine?"✓ ":"○ ")+"Je suis suivi(e) par un kinésithérapeute"),
          h("button",{
            onClick:()=>setState(s=>Object.assign({},s,{regular:!s.regular})),
            style:{
              width:"100%",marginTop:8,padding:"11px 12px",borderRadius:11,textAlign:"left",
              border:"1.5px solid "+(state.regular?C.green:C.line),
              background:state.regular?"#EDF8F3":"#fff",fontSize:13.5,fontWeight:700,color:C.ink
            }
          },(state.regular?"✓ ":"○ ")+"Je réalise régulièrement les exercices prescrits")
        )
      ),

      po&&po.suture===true?h(Card,{style:{background:C.amberSoft,borderColor:"#E7C38F"}},
        h("div",{style:{padding:14,color:C.amber,fontSize:12.5,lineHeight:1.5}},
          h("b",null,"Suture méniscale associée : "),
          "certaines étapes sont volontairement retardées. Les consignes spécifiques données par le chirurgien et votre kinésithérapeute priment toujours."
        )
      ):null,

      h("div",{className:"row",style:{gap:6,overflowX:"auto",padding:"2px 0 3px"}},
        PHASES.map(p=>{
          const done=!!state.completed[p.n], current=state.current===p.n;
          return h("button",{key:p.n,onClick:()=>setOpen(p.n),style:{
            minWidth:42,height:38,borderRadius:20,textAlign:"center",fontWeight:800,flexShrink:0,
            border:"1.5px solid "+(current?C.blue:done?C.green:C.line),
            background:current?C.blue:done?"#EDF8F3":"#fff",
            color:current?"#fff":done?C.green:C.muted
          }},done?"✓":p.n);
        })
      ),

      PHASES.map(phase=>{
        const isOpen=open===phase.n;
        const current=state.current===phase.n;
        const done=!!state.completed[phase.n];
        const locked=phase.n>state.current;
        const ready=canAdvance(phase.n);
        const allDone=allCriteriaDone(phase.n);

        return h(Card,{key:phase.n,style:{
          overflow:"hidden",
          borderColor:current?C.blue:done?C.green:C.line,
          borderWidth:current?2:1,
          opacity:locked?.78:1
        }},
          h("button",{onClick:()=>setOpen(isOpen?0:phase.n),style:{
            width:"100%",padding:"14px 15px",display:"flex",gap:11,alignItems:"center",textAlign:"left",
            background:current?C.blueSoft:done?"#EDF8F3":"#fff"
          }},
            h("span",{style:{
              width:32,height:32,borderRadius:18,display:"flex",alignItems:"center",justifyContent:"center",
              background:current?C.blue:done?C.green:C.paper,
              color:current||done?"#fff":C.muted,fontWeight:800,flexShrink:0
            }},done?"✓":phase.n),
            h("span",{style:{flex:1}},
              h("span",{style:{display:"block",fontWeight:800,color:C.ink,fontSize:15}},
                "Phase "+phase.n+" · "+phase.title),
              h("span",{style:{display:"block",fontSize:12,marginTop:2,fontWeight:700,
                color:current?C.blue:done?C.green:C.muted}},
                done?"Acquise":current?"Phase actuelle":"À venir")
            ),
            h("span",{style:{fontSize:18,color:C.muted}},isOpen?"⌃":"⌄")
          ),

          isOpen?h("div",{style:{padding:"0 15px 15px"}},
            h("div",{style:{marginTop:12,background:C.paper,borderRadius:11,padding:"11px 12px"}},
              h(Eyebrow,{color:C.blue},"Objectif"),
              h("div",{style:{fontWeight:700,color:C.ink,fontSize:14,marginTop:6,lineHeight:1.45}},phase.goal)
            ),

            phase.n===1?h("div",{style:{
              marginTop:10,background:C.redSoft,border:"1px solid #EDCACA",
              borderRadius:10,padding:"10px 11px",fontSize:12.3,color:C.ink,lineHeight:1.5
            }},
              h("div",{style:{fontWeight:800,color:C.red,marginBottom:4}},"Priorité absolue des 3 premières semaines"),
              h("div",null,
                "L’extension ne doit pas être « récupérée » secondairement : elle doit être présente dès le postopératoire immédiat et conservée à tout prix, en miroir du genou sain. Lors de la contraction, le vaste interne doit être actif, le genou reste au sol et le talon se lève."
              )
            ):null,

            h("div",{style:{marginTop:13}},
              h(Eyebrow,null,"À acquérir"),
              h("div",{style:{marginTop:7,border:"1px solid "+C.line,borderRadius:12,overflow:"hidden"}},
                phase.criteria.map((item,i)=>{
                  const key=phase.n+"-"+i;
                  const checked=!!state.checked[key];
                  return h("button",{
                    key,
                    disabled:locked,
                    onClick:()=>toggleCriterion(phase.n,i),
                    className:"row",
                    style:{
                      gap:10,padding:"11px 12px",width:"100%",alignItems:"flex-start",textAlign:"left",
                      borderTop:i?"1px solid "+C.line:"none",background:"#fff",opacity:locked?.62:1
                    }
                  },
                    h("span",{style:{
                      width:22,height:22,borderRadius:7,flexShrink:0,marginTop:1,
                      border:"1.5px solid "+(checked?C.green:C.line),
                      background:checked?C.green:"#fff",
                      display:"flex",alignItems:"center",justifyContent:"center"
                    }},checked?h(IcCheck,{size:13,color:"#fff",sw:3}):null),
                    h("span",{style:{
                      color:checked?C.muted:C.ink,fontSize:13.2,lineHeight:1.45,
                      textDecoration:checked?"line-through":"none"
                    }},item)
                  );
                })
              )
            ),

            h("div",{style:{
              marginTop:10,background:C.blueSoft,border:"1px solid "+C.blueLine,
              borderRadius:10,padding:"9px 11px",fontSize:12.2,color:C.ink,lineHeight:1.5
            }},
              h("b",null,"Repère : "),phase.pro
            ),

            phase.n===4&&po&&po.suture===true?h("div",{style:{
              marginTop:9,background:C.amberSoft,borderRadius:9,padding:"9px 11px",
              color:C.amber,fontSize:12.2,lineHeight:1.45,fontWeight:600
            }},"En cas de suture méniscale, la reprise de la course est décalée selon les consignes spécifiques de votre parcours."):null,

            current?h("div",{style:{marginTop:13,borderTop:"1px solid "+C.line,paddingTop:12}},
              h("button",{
                onClick:()=>setState(s=>Object.assign({},s,{validated:Object.assign({},s.validated,{[phase.n]:!s.validated[phase.n]})})),
                style:{
                  width:"100%",padding:"11px 12px",borderRadius:11,textAlign:"left",
                  border:"1.5px solid "+(state.validated[phase.n]?C.green:C.line),
                  background:state.validated[phase.n]?"#EDF8F3":"#fff",
                  fontSize:13.2,fontWeight:700,color:C.ink
                }
              },(state.validated[phase.n]?"✓ ":"○ ")+"Cette phase a été revue et validée avec mon kiné"),

              h("button",{
                disabled:!ready,
                onClick:()=>validatePhase(phase.n),
                style:{
                  width:"100%",marginTop:9,padding:"12px 14px",borderRadius:11,textAlign:"center",
                  background:ready?C.blue:C.line,color:ready?"#fff":C.muted,
                  fontSize:14,fontWeight:800
                }
              },phase.n===6?"Valider mon parcours":"Valider et passer à la phase "+(phase.n+1)),

              !ready?h("div",{style:{fontSize:11.5,color:C.muted,lineHeight:1.45,marginTop:7}},
                !state.kine||!state.regular
                  ?"Le suivi kiné et les exercices réguliers doivent d’abord être confirmés."
                  :!allDone
                    ?"Tous les critères de cette phase ne sont pas encore acquis."
                    :"La validation avec votre kinésithérapeute est encore nécessaire."
              ):null
            ):null,

            locked?h("div",{style:{
              marginTop:11,background:C.paper,borderRadius:9,padding:"9px 11px",
              fontSize:12,color:C.muted,lineHeight:1.45
            }},"Vous pouvez consulter cette phase, mais elle ne se valide qu’après acquisition de la phase précédente."):null
          ):null
        );
      }),

      h(Card,{style:{borderStyle:"dashed"}},
        h("div",{style:{padding:16}},
          h(Eyebrow,null,"À retenir"),
          h("div",{style:{color:C.muted,fontSize:12.5,marginTop:7,lineHeight:1.55}},
            "Ces critères structurent votre progression mais ne remplacent pas l’examen clinique. Les délais biologiques, votre évolution et les consignes du chirurgien ou du kinésithérapeute peuvent retarder une étape."
          ),
          h("div",{style:{color:C.muted,fontSize:12.5,marginTop:8,lineHeight:1.55}},
            "Pour les sports pivots, la reprise se fait progressivement après les tests. La compétition n’est pas envisagée avant 9 mois."
          ),
          h("button",{onClick:()=>{
            if(confirm("Réinitialiser votre suivi des objectifs ?")){
              const z=emptyState();
              setState(z); setOpen(1);
              try{localStorage.removeItem("postop_goals_v2")}catch(e){}
            }
          },style:{marginTop:11,fontSize:11.5,color:C.muted,textDecoration:"underline"}},
            "Réinitialiser le suivi des objectifs")
        )
      )
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