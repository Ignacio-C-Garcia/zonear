AFRAME.registerComponent('amongus_rojo', {

  init: function() {
      const animatedMarker = document.querySelector("#animated-marker");
      const aEntity = document.querySelector("#animated-model");

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
      const animatedMarker = document.querySelector("#animated-marker");
      const aEntity = document.querySelector("#animated-model");

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
      const animatedMarker = document.querySelector("#animated-marker");
      const aEntity = document.querySelector("#animated-model");

      // every click, we make our model grow in size :)
      animatedMarker.addEventListener('click', function(ev, target){
          const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
          if (aEntity && intersectedElement === aEntity) {
              window.location.href="http://zone-ar.rocks/diego.html"
          }
      });
}});