
<script src="../node_modules/waypoints/lib/noframework.waypoints.min.js"></script>


var waypoint = new Waypoint({
    element: document.getElementById('banner'),
    handler: function(direction) {
      let currentSection = document.querySelector('#banner');
      currentSection.classList.remove('active')
    }
  })

  var waypoint = new Waypoint({
    element: document.getElementById('services'),
    handler: function(direction) {
      let currentSection = document.querySelector('#services');
      currentSection.classList.add('active')
    },
    offset : "10%"
  })