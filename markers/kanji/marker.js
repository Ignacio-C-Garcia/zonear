/*
AFRAME.registerComponent('kk', {
               schema: {
                default: ''
              },
              init() {
                this.el.addEventListener('click', () => {
                    window.location.href="https://www.delftstack.com/es/howto/javascript/javascript-redirect/#:~:text=JavaScript%20redirecciona%20una%20página%20web%20con%20location.,-href()&text=El%20truco%20consiste%20en%20reemplazar,por%20lo%20tanto%2C%20la%20redireccionará."
                });
              }
            });
          */
AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#animated-model");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                window.location.href="https://www.youtube.com/watch?v=zqLEO5tIuYs"
            }
        });
}});
