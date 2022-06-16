AFRAME.registerComponent('amongus_rojo', {

  init: function() {
      const animatedMarker = document.querySelector("#asset_rojo");
      const aEntity = document.querySelector("#amongus_rojo");

      // every click, we make our model grow in size :)
      animatedMarker.addEventListener('click', function(ev, target){
          const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
          if (aEntity && intersectedElement === aEntity) {
              window.location.href="http://zone-ar.rocks/nacho.html"
          }
      });
}});

AFRAME.registerComponent('amongus_amarillo', {

  init: function() {
    const animatedMarker = document.querySelector("#asset_amarillo");
    const aEntity = document.querySelector("#amongus_amarillo");

      // every click, we make our model grow in size :)
      animatedMarker.addEventListener('click', function(ev, target){
          const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
          if (aEntity && intersectedElement === aEntity) {
              window.location.href="http://zone-ar.rocks/cami.html"
          }
      });
}});

AFRAME.registerComponent('amongus_verde', {

  init: function() {
    const animatedMarker = document.querySelector("#asset_verde");
    const aEntity = document.querySelector("#amongus_verde");

      // every click, we make our model grow in size :)
      animatedMarker.addEventListener('click', function(ev, target){
          const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
          if (aEntity && intersectedElement === aEntity) {
              window.location.href="http://zone-ar.rocks/diego.html"
          }
      });
}});