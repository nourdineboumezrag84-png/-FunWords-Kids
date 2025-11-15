const CACHE_NAME = 'kids-500-v1';
const toCache = ['/', '/index.html', '/manifest.json'];
self.addEventListener('install', evt=>{evt.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(toCache)));self.skipWaiting();});
self.addEventListener('activate', evt=>{evt.waitUntil(self.clients.claim());});
self.addEventListener('fetch', evt=>{evt.respondWith(caches.match(evt.request).then(r=>r || fetch(evt.request)));});
