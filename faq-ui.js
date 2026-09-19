/* FAQ UI — chargée avant app.js */
(function () {
  const { useState, useMemo } = React;
  const h = React.createElement;

  const norm = (v) => String(v || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise((resolve, reject) => {
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        resolve();
      } catch (e) { reject(e); }
    });
  }

  window.FAQPanel = function FAQPanel({ C, Card, Eyebrow, IcSearch }) {
    const data = Array.isArray(window.FAQ_DATA) ? window.FAQ_DATA : [];
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("Toutes");
    const [intervention, setIntervention] = useState("Toutes");
    const [openId, setOpenId] = useState(null);
    const [copiedId, setCopiedId] = useState(null);

    const categories = useMemo(
      () => ["Toutes"].concat(Array.from(new Set(data.map(x => x.category).filter(Boolean))).sort()),
      [data]
    );
    const interventions = useMemo(
      () => ["Toutes"].concat(Array.from(new Set(data.flatMap(x => x.interventions || []).filter(x => x && x !== "Toutes"))).sort()),
      [data]
    );

    const results = useMemo(() => {
      const nq = norm(query);
      return data.filter(item => {
        const catOk = category === "Toutes" || item.category === category;
        const iv = item.interventions || [];
        const intOk = intervention === "Toutes" || iv.includes("Toutes") || iv.includes(intervention);
        if (!catOk || !intOk) return false;
        if (!nq) return true;
        const hay = [
          item.question,
          item.response,
          item.category,
          ...(item.keywords || []),
          ...(item.interventions || [])
        ].map(norm).join(" ");
        return nq.split(/\s+/).every(word => hay.includes(word));
      });
    }, [data, query, category, intervention]);

    const levelTag = (level) => {
      if (level === "urgent") return { text: "À évaluer rapidement", fg: C.red, bg: C.redSoft };
      if (level === "contact") return { text: "Contacter le cabinet", fg: C.amber, bg: C.amberSoft };
      return null;
    };

    const reset = () => {
      setQuery("");
      setCategory("Toutes");
      setIntervention("Toutes");
      setOpenId(null);
    };

    return h("div", { className: "col", style: { gap: 12 } },
      h(Card, null,
        h("div", { style: { padding: 18 } },
          h(Eyebrow, { color: C.blue }, "FAQ patients"),
          h("div", { className: "disp", style: { fontWeight: 600, fontSize: 22, color: C.ink, marginTop: 7, lineHeight: 1.3 } }, "Trouver une réponse en quelques secondes"),
          h("div", { style: { color: C.muted, fontSize: 13, marginTop: 6, lineHeight: 1.5 } },
            "Recherchez par mot-clé ou filtrez par catégorie et type d’intervention."),
          h("div", { className: "row", style: { alignItems: "center", gap: 8, marginTop: 14, padding: "0 12px", border: "1.5px solid " + C.line, borderRadius: 11, height: 46, background: "#fff" } },
            h(IcSearch, { size: 17, color: C.muted }),
            h("input", {
              value: query,
              onChange: e => setQuery(e.target.value),
              placeholder: "douleur, bas de contention, douche…",
              style: { flex: 1, border: "none", outline: "none", fontSize: 15, color: C.ink, background: "transparent", minWidth: 0 }
            })
          ),
          h("div", { className: "row", style: { gap: 8, marginTop: 10 } },
            h("select", {
              value: category,
              onChange: e => setCategory(e.target.value),
              style: { flex: 1, minWidth: 0, border: "1.5px solid " + C.line, borderRadius: 10, padding: "10px 8px", fontSize: 12.5, color: C.ink, background: "#fff" }
            }, categories.map(x => h("option", { key: x, value: x }, x))),
            h("select", {
              value: intervention,
              onChange: e => setIntervention(e.target.value),
              style: { flex: 1, minWidth: 0, border: "1.5px solid " + C.line, borderRadius: 10, padding: "10px 8px", fontSize: 12.5, color: C.ink, background: "#fff" }
            }, interventions.map(x => h("option", { key: x, value: x }, x)))
          ),
          h("div", { className: "row", style: { justifyContent: "space-between", alignItems: "center", marginTop: 10 } },
            h("span", { style: { color: C.muted, fontSize: 12.5, fontWeight: 600 } }, results.length + " réponse" + (results.length > 1 ? "s" : "")),
            (query || category !== "Toutes" || intervention !== "Toutes") &&
              h("button", { onClick: reset, style: { color: C.blue, fontSize: 12.5, fontWeight: 700 } }, "Réinitialiser")
          )
        )
      ),

      results.length === 0
        ? h(Card, null, h("div", { style: { padding: 20, color: C.muted, fontSize: 14, lineHeight: 1.5 } },
            "Aucune réponse ne correspond. Essayez un autre mot-clé ou retirez un filtre."))
        : results.map(item => {
            const open = openId === item.id;
            const tag = levelTag(item.level);
            const iv = (item.interventions || []).filter(Boolean);
            return h(Card, { key: item.id, style: { overflow: "hidden", borderColor: open ? C.blueLine : C.line } },
              h("button", {
                onClick: () => setOpenId(open ? null : item.id),
                style: { width: "100%", padding: "14px 15px", textAlign: "left", background: open ? C.blueSoft : "#fff" }
              },
                h("div", { className: "row", style: { gap: 10, alignItems: "flex-start" } },
                  h("div", { style: { flex: 1, minWidth: 0 } },
                    h("div", { style: { color: C.ink, fontSize: 14.5, fontWeight: 700, lineHeight: 1.4 } }, item.question),
                    h("div", { className: "row", style: { gap: 6, flexWrap: "wrap", marginTop: 8 } },
                      h("span", { style: { fontSize: 10.5, fontWeight: 700, color: C.blue, background: "#fff", border: "1px solid " + C.blueLine, borderRadius: 20, padding: "3px 8px" } }, item.category),
                      iv.slice(0, 2).map(x => h("span", { key: x, style: { fontSize: 10.5, fontWeight: 700, color: C.muted, background: C.paper, borderRadius: 20, padding: "3px 8px" } }, x)),
                      tag && h("span", { style: { fontSize: 10.5, fontWeight: 700, color: tag.fg, background: tag.bg, borderRadius: 20, padding: "3px 8px" } }, tag.text)
                    )
                  ),
                  h("span", { style: { color: C.blue, fontSize: 22, fontWeight: 600, lineHeight: 1 } }, open ? "−" : "+")
                )
              ),
              open && h("div", { style: { padding: "14px 15px 15px", borderTop: "1px solid " + C.line } },
                h("div", { style: { color: C.ink, fontSize: 13.5, lineHeight: 1.6, whiteSpace: "pre-wrap" } }, item.response),
                h("button", {
                  onClick: () => {
                    copyText(item.response).then(() => {
                      setCopiedId(item.id);
                      setTimeout(() => setCopiedId(null), 1800);
                    }).catch(() => {});
                  },
                  style: {
                    marginTop: 13, width: "100%", textAlign: "center", borderRadius: 10, padding: "11px 12px",
                    background: copiedId === item.id ? C.green : C.blue, color: "#fff", fontSize: 13.5, fontWeight: 700
                  }
                }, copiedId === item.id ? "✓ Réponse copiée" : "Copier la réponse")
              )
            );
          }),

      h("div", { style: { color: C.muted, fontSize: 11.5, lineHeight: 1.55, padding: "2px 4px 8px" } },
        "Les réponses sont des modèles du cabinet. Elles doivent être adaptées au geste réalisé et à la situation clinique du patient.")
    );
  };
})();