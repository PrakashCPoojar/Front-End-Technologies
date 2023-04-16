window.addEventListener('scroll', function() {
    var fadeElems = document.querySelectorAll('.fade');
    for (var i = 0; i < fadeElems.length; i++) {
      var elem = fadeElems[i];
      var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
      if (distInView < 0) {
        elem.style.opacity = 1;
        elem.style.transform = 'translateX(0)';
      }
    }
  });