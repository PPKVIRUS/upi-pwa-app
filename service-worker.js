const CACHE_NAME = "upi-pwa-cache-v1";
const urlsToCache = [
  "/upi-pwa-app/",
  "/upi-pwa-app/index.html",
  "/upi-pwa-app/style.css",
  "/upi-pwa-app/app.js",
  "/upi-pwa-app/settings.html",
  "/upi-pwa-app/settings.js",
  "/upi-pwa-app/manifest.json",
  "/upi-pwa-app/icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
