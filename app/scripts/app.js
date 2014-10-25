(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
    var ajax = document.querySelector('core-ajax'),
        body = document.querySelector('body'),
        createCard = function(data){
          var card = document.createElement('d2hc-hero-card');
          card.setData(data);
          return card;
        };

    ajax.addEventListener('core-response', function(e){
        this.response.forEach(function(hero){
          var card = createCard(hero);
          body.appendChild(card);
        });
    });

    ajax.go();
    
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
