self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { clients.claim(); });
self.addEventListener('fetch', e => {
  // Don't intercept Google Apps Script or Cloudinary requests
  const url = e.request.url;
  if (url.includes('script.google.com') || url.includes('cloudinary.com')) {
    return;
  }
  e.respondWith(fetch(e.request).catch(() => new Response('')));
});
