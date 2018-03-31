// $(document).ready(function() {
//   // Add smooth scrolling to all links in navbar & footer link
//   $(".navbar a, footer a[href='#home']").on('click', function(event) {
//
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       event.preventDefault(); // prevent default anchor click behavior
//       var hash = this.hash; // store hash
//
//       // Add a smooth page scroll using jQuery's animate()
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 900, function() {
//         // Add hash(#) to URL when done scrolling
//         window.location.hash = hash;
//       });
//     }
//
//   });
// })

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();