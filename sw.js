/*
const VERSION = "V1"


self.addEventListener("install" , event => {
    event.waitUntil(precache());
});

 self.addEventListener("fetch", event =>{
const request = event.request
//get peticiones de este tipo 
if(request.method !== "GET"){
return;
}

//buscar en el cache
event.respondWith(cachedResponse(request))
//update del cache
event.waitUntil(updateCache(request))


});
 */

/* 
async function precache(){
    const cache = await caches.open(VERSION);
    cache.addAll([
        '/',
        '/index.html',
        '/assets/main.js',
        '/assets/mediaplayer.js',
        '/assets/plugins/autoplay.js',
        '/assets/plugins/autoPaused.js',
        '/assets/style.css',
        '/assets/BigBuckBunny.mp4',
        
    ]);
};
 

async function cachedResponse(request){
    const cache = await caches.open(VERSION)
    const response = await caches.match(request)
    return response || fetch(request)

    

};

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);

};

*/
