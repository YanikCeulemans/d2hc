(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
    var ajax = document.querySelector('core-ajax'),
        d2hc = document.querySelector('d2hc-hero-card');

    ajax.addEventListener('core-response', function(e){
        d2hc.setData(this.response[0]);
    });

    ajax.go();
    
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
