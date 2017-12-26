// $('#location-input').hide();
$(document).ready( function addFields() {
  // $('#number-submit').on('click', function() {
    var num = $(this).prev().val();
    if (num<=0) {
      alert('Incorrect number');
      return;
    };
    var container = document.getElementById("location-input");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    };
    for (i=0; i<num; i++) {
      container.appendChild(document.createTextNode('User ' + (i+1)));
      var locationInput = document.createElement("input");
      locationInput.type = 'text';
      locationInput.className = 'address form-control mr-sm-2 person-bar';
      container.appendChild(locationInput);
      container.appendChild(document.createElement("br"));
    }
  }));
// };
//
// $(document).ready(main)
