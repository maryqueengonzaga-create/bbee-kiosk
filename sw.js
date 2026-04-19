self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { clients.claim(); });
self.addEventListener('fetch', e => {
  const url = e.request.url;
  if (url.includes('script.google.com') || url.includes('cloudinary.com') || url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) return;
  e.respondWith(fetch(e.request).catch(() => new Response('')));
});
