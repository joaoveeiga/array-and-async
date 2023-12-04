const arrayAsync = "array-and-async";
const assets = ["/", "/index.html", "manifest.json"];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(arrayAsync).then(function (cache) {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request).then(function (response) {
        return caches.open(arrayAsync).then(function (cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
