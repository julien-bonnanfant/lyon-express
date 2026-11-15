// Service worker minimal de « Lyon Transports » : il ne met rien en cache (le jeu se met à jour tout seul par version.json),
// il existe seulement pour que les navigateurs proposent l'installation en application.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
