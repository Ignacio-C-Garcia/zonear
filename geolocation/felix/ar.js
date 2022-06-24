/* var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
  };
  
  function error(err) {
    console.log("no geo")
  };
  navigator.geolocation.getCurrentPosition(success, error, options);

  AFRAME.registerComponent('star', {

    init: function() {
        
}});
*/
/*
var id, target, option;

function success(pos) {
  var crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log('Congratulation, you reach the target');
    navigator.geolocation.clearWatch(id);
  }
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

target = {
  latitude : 0,
  longitude: 0,
}

options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options);
console.log(id)
*/

AFRAME.registerComponent('checker', {
  init: function () {
    // `this.el` is the element.
    // `object3D` is the three.js object.

    // `rotation` is a three.js Euler using radians. `quaternion` also available.
    navigator.geolocation.getCurrentPosition(function(location){
      console.log(location)
    })

    // `position` is a three.js Vector3.
    console.log(this.el.object3D.position);
  }
});

AFRAME.registerComponent('checker', {
  init: function () {
    // `this.el` is the element.
    // `object3D` is the three.js object.

    // `rotation` is a three.js Euler using radians. `quaternion` also available.
    window.addEventListener("deviceorientation",function(event) {
      alpha = Math.round(event.alpha);
      beta = Math.round(event.beta);
      gamma = Math.round(event.gamma);
    }, true);

  }
});
