/*!
 * Start Bootstrap - Createive v4.0.0-beta.2 (https://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
 */
!function(a){"use strict";a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=a(this.hash);if((e=e.length?e:a("[name="+this.hash.slice(1)+"]")).length)return a("html, body").animate({scrollTop:e.offset().top-48},1e3,"easeInOutExpo"),!1}}),a(".js-scroll-trigger").click(function(){a(".navbar-collapse").collapse("hide")}),a("body").scrollspy({target:"#mainNav",offset:48});var e=function(){a("#mainNav").offset().top>100?a("#mainNav").addClass("navbar-shrink"):a("#mainNav").removeClass("navbar-shrink")};e(),a(window).scroll(e),window.sr=ScrollReveal(),sr.reveal(".sr-icons",{duration:600,scale:.3,distance:"0px"},200),sr.reveal(".sr-button",{duration:1e3,delay:200}),sr.reveal(".sr-contact",{duration:600,scale:.3,distance:"0px"},300),a(".popup-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}})}(jQuery);


var list_of_choices = [];

function addFields(){
            // Number of inputs to create
            var number = document.getElementById("number-input").value;
            if (number <= 0) {
              alert("You've enter a invalid number!");
              return;
            }

            // Container <div> where dynamic content will be placed
            var container = document.getElementById("location-input");
            // Clear previous contents of the container
            while (container.hasChildNodes()) {
                container.removeChild(container.lastChild);
            }
            for (i=0;i<number;i++){
                // Append a node with a random text
                container.appendChild(document.createTextNode('Choice ' + (i+1)));
                // Create an <input> element, set its type and name attributes
                var input = document.createElement("input");
                input.type = "text";
                input.id = "address" + i;
                input.className = "form-control m-3";
                container.appendChild(input);
                // Append a line break
                container.appendChild(document.createElement("br"));

            }
        }

function random(){
  var number = document.getElementById("number-input").value;
  for (var i = 0; i < number; i++) {
    var choice = document.getElementById("number-input"+i).value;
    list_of_choices.push(choice);}
  var result = list_of_choices[Math.floor(Math.random() * list_of_choices.length)];
  if (result == undefined || result == ""){
    alert("You haven't typed in anything! :(");
  }
  else {
    var container = document.getElementById("location-input");
    while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
    }
    container.appendChild(document.createTextNode("The result is: "+result));
    list_of_choices = [];
  }
}
