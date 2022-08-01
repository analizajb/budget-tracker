const APP_PREFIX = "FoodFest-";
const VERSION = "version_01";
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
  "index.html",
  "jsidb.js",
  "jsindex.js",
  "cssstyles.css",
  "iconsicon-72x72.png",
  "iconsicon-96x96.png",
  "iconsicon-128x128.png",
  "iconsicon-144x144.png",
  "iconsicon-152x152.png",
  "iconsicon-192x192.png",
  "iconsicon-384x384.png",
  "iconsicon-512x512.png",
];

// Cache resources
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("installing cache : " + CACHE_NAME);
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});
