/* Postop — service worker
   Met l'application en cache pour qu'elle fonctionne sans réseau.
   Incrémenter VERSION à chaque mise à jour du contenu. */

const VERSION = "postop-v16-checklist-expiry";
const FILES = [
  "./",
  "./index.html",
  "./app.js?v=12",
  "./faq-data.js?v=12",
  "./faq-ui.js?v=12",
  "./objectives-ui.js?v=14",
  "./expiry-filter.js?v=16",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./knee.png",
  "./santy.png",
  "./santy-white.png",
  "./gerland.png",
  "./react.production.min.js?v=12",
  "./react-dom.production.min.js?v=12"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then((r) => {
          const copy = r.clone();
          caches.open(VERSION).then((c) => c.put("./index.html", copy));
          return r;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((r) => {
      if (r && r.status === 200 && r.type === "basic") {
        const copy = r.clone();
        caches.open(VERSION).then((c) => c.put(req, copy));
      }
      return r;
    }).catch(() => hit))
  );
});