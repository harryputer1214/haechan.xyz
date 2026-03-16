const CACHE_NAME = "11quiz-cache-v1";
const URLS_TO_CACHE = [
  "/apps/11quiz/",
  "/apps/11quiz/index.html",
  "/assets/css/11quiz-style.css",
  "/assets/js/11quiz.js",
  "/apps/11quiz/manifest.webmanifest",
  "/assets/icons/11quiz-192.png",
  "/assets/icons/11quiz-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});