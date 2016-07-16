
(function() {
  'use strict';

  var app = {
    isLoading: true,
    visibleCards: {},
    spinner: document.querySelector('.loader'),
    cardTemplate: document.querySelector('.cardTemplate'),
    container: document.querySelector('.main'),
    addDialog: document.querySelector('.dialog-container'),
  };


  /*****************************************************************************
   *
   * Event listeners for UI elements
   *
   ****************************************************************************/

  //document.getElementById('butRefresh').addEventListener('click', function() {
    // Refresh all of the forecasts
  //  app.updateForecasts();
  //});

  document.getElementById('butSubmit').addEventListener('click', function() {
    var phone = document.getElementById('phoneNumber');
    var admin = document.getElementById('adminName');
    var incident = document.getElementById('incidentDescription');
    app.postApiRequest(phone, admin, incident)
  });

  // Prepare a data for API request
  app.postApiRequest = function(phone, admin, incident) {
    var url = 'https://sampleapi.com/api/v0.1/new';
    // Make the XHR to get the data, then update the card
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          var response = JSON.parse(request.response);
          response.phone = phone;
          response.admin = admin;
          reponse.incident = incident;
        }
      }
    };
    request.open('POST', url);
    request.send();
  };



})();
