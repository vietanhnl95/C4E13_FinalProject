$(document).ready(function () {
  $('#number-submit').click(function () {
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
      // container.appendChild(document.createTextNode('User ' + (i+1)));
      var new_div = document.createElement('div');
      new_div.className = 'form-inline my-2 my-lg-0';
      container.appendChild(new_div);
      var locationInput = document.createElement("input");
      locationInput.id = 'user' + (i+1);
      locationInput.type = 'text';
      locationInput.className = 'search-box form-control mr-sm-2 person-bar';
      locationInput.placeholder = ('User ' + (i+1));
      // var geocodeBtn = document.createElement('button');
      // geocodeBtn.text = 'Add';
      // geocodeBtn.type = 'submit';
      // geocodeBtn.className = 'geocode';
      new_div.appendChild(locationInput);
      // new_div.appendChild(geocodeBtn);
    }
  });
});
