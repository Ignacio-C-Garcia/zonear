function createEntity(Lat, Long, url) {
    let Entity = document.createElement("a-entity");
    Entity.setAttribute("animation", "property: rotation; to: 0 -360 0; loop: true; dur: 8000");
    Entity.setAttribute("link", url);
    Entity.setAttribute("gltf-model", "#zonear_logo")
    Entity.setAttribute("scale","2 2 2");

    let coordenates =  "";
    coordenates.concat("latitude:", Lat, "; longitude: ", Long, ";")
    Entity.setAttribute("gps-projected-entity-place", coordenates);

    let Scene = document.getElementById("a-scene")
    console.log("siiiiii")
    Scene.appendChild(Entity);
  }
  
axios.get('http://44.207.32.201:3002/api/get', {
	crossDomain: true,
    responseType: 'json'
  })
    .then(function(res) {
      if(res.status==200) {
        objarray = res.data;

        for (entity of objarray)
        {
            console.log(entity)
            createEntity(entity.longitude, entity.latitude, entity.url);
        }
      }
    })
    
    /*
let Marker = document.createElement("a-marker");
Marker.setAttribute("type", "pattern");
Marker.setAttribute("preset", "kanji");
Marker.setAttribute("emitevents", "true");
//Marker.setAttribute("");

let Entity = document.createElement("a-entity");
Entity.setAttribute("geometry", "primitive: box");
Entity.setAttribute("material", "color: red");


let Camera = document.getElementById("a-camera");
Marker.appendChild(Entity);
Camera.appendChild(Marker);
*/
